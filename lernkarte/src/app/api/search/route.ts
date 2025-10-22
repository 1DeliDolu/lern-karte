import fs from 'fs';
import path from 'path';
import { NextResponse } from 'next/server';

import { NAV_ITEMS } from '@/constants/navItems';
import { INDEXED_QUESTIONS, getTrackMeta } from '@/lib/questions';
import {
  formatLabel as formatDocLabel,
  listDocsRecursive as listDocsRecursiveDocs,
  readDoc as readDocDoc,
} from '@/lib/docs-finder';
import {
  formatLabel as formatLernfeldLabel,
  listDocsRecursive as listDocsRecursiveLernfeld,
  readDoc as readDocLernfeld,
} from '@/lib/feld-finder';

export const runtime = 'nodejs';

type SearchType = 'question' | 'documentation' | 'lernfeld' | 'page';

type RankedResult = {
  id: string;
  type: SearchType;
  title: string;
  description?: string;
  href: string;
  location?: string;
  score: number;
};

type IndexEntry = {
  id: string;
  type: 'documentation' | 'lernfeld';
  title: string;
  href: string;
  location: string;
  content: string;
  contentLower: string;
};

const DOCS_ROOT = path.join(process.cwd(), 'src', 'teil');
const LERNFELD_ROOT = path.join(process.cwd(), 'src', 'lernfeld');
const MIN_CONTENT_TERM_LENGTH = 2;
const MAX_RESULTS = 20;

let docsIndex: IndexEntry[] | null = null;
let lernfeldIndex: IndexEntry[] | null = null;

function listTopLevelDirectories(root: string) {
  if (!fs.existsSync(root)) return [];
  return fs
    .readdirSync(root, { withFileTypes: true })
    .filter((entry) => entry.isDirectory() && !entry.name.startsWith('['))
    .map((entry) => entry.name);
}

function normalizeWhitespace(value: string) {
  return value.replace(/\s+/g, ' ').trim();
}

function truncate(value: string, max = 160) {
  if (value.length <= max) return value;
  return `${value.slice(0, max - 1)}…`;
}

function createSnippet(content: string, term: string) {
  if (!content) return undefined;
  const normalized = normalizeWhitespace(content);
  if (!normalized) return undefined;
  const lower = normalized.toLowerCase();
  const lowerTerm = term.toLowerCase();
  const index = lower.indexOf(lowerTerm);

  if (index === -1) {
    return truncate(normalized, 160);
  }

  const window = 80;
  const start = Math.max(0, index - window);
  const end = Math.min(normalized.length, index + lowerTerm.length + window);
  const snippet = normalized.slice(start, end).trim();
  const prefix = start > 0 ? '…' : '';
  const suffix = end < normalized.length ? '…' : '';
  return truncate(`${prefix}${snippet}${suffix}`, 200);
}

function buildDocsIndex(): IndexEntry[] {
  const categories = listTopLevelDirectories(DOCS_ROOT);
  const entries: IndexEntry[] = [];

  for (const category of categories) {
    const docPaths = listDocsRecursiveDocs(category);
    const categoryLabel = formatDocLabel(category);

    for (const docPath of docPaths) {
      const segments = docPath.split('/').filter(Boolean);
      const doc = readDocDoc(category, segments);
      if (!doc || !doc.content) continue;

      const titleSegment = segments[segments.length - 1] ?? category;
      const title = formatDocLabel(titleSegment);
      const trail = segments.slice(0, -1).map((segment) => formatDocLabel(segment));
      const location = [categoryLabel, ...trail].join(' / ');
      const href = `/docs/${category}/${segments.join('/')}`;

      entries.push({
        id: `documentation-${category}-${docPath}`,
        type: 'documentation',
        title,
        href,
        location,
        content: doc.content,
        contentLower: doc.content.toLowerCase(),
      });
    }
  }

  return entries;
}

function buildLernfeldIndex(): IndexEntry[] {
  const categories = listTopLevelDirectories(LERNFELD_ROOT);
  const entries: IndexEntry[] = [];

  for (const category of categories) {
    const docPaths = listDocsRecursiveLernfeld(category);
    const categoryLabel = formatLernfeldLabel(category);

    for (const docPath of docPaths) {
      const segments = docPath.split('/').filter(Boolean);
      const doc = readDocLernfeld(category, segments);
      if (!doc || !doc.content) continue;

      const titleSegment = segments[segments.length - 1] ?? category;
      const title = formatLernfeldLabel(titleSegment);
      const trail = segments.slice(0, -1).map((segment) => formatLernfeldLabel(segment));
      const location = [categoryLabel, ...trail].join(' / ');
      const href = `/lernfeld/${category}/${segments.join('/')}`;

      entries.push({
        id: `lernfeld-${category}-${docPath}`,
        type: 'lernfeld',
        title,
        href,
        location,
        content: doc.content,
        contentLower: doc.content.toLowerCase(),
      });
    }
  }

  return entries;
}

function getDocsIndex() {
  if (!docsIndex) {
    docsIndex = buildDocsIndex();
  }
  return docsIndex;
}

function getLernfeldIndex() {
  if (!lernfeldIndex) {
    lernfeldIndex = buildLernfeldIndex();
  }
  return lernfeldIndex;
}

export async function GET(request: Request) {
  const { searchParams } = new URL(request.url);
  const query = (searchParams.get('q') ?? '').trim();

  if (!query) {
    return NextResponse.json({ results: [] });
  }

  const normalizedTerm = query.toLowerCase();
  const results: RankedResult[] = [];
  const seen = new Set<string>();

  function addResult(result: RankedResult) {
    if (seen.has(result.id)) return;
    seen.add(result.id);
    results.push(result);
  }

  for (const question of INDEXED_QUESTIONS) {
    const fields = [
      question.frageDE,
      question.antwortDE,
      question.frageTR,
      question.antwortTR,
    ].filter(Boolean) as string[];

    if (fields.length === 0) continue;

    const combined = fields.join(' • ');
    const combinedLower = combined.toLowerCase();
    if (!combinedLower.includes(normalizedTerm)) continue;

    const questionNumber = question.questionNumber;
    const karteNumber = question.karteNumber;
    const titleBase =
      question.frageDE || question.frageTR || `Frage ${questionNumber}`;
    const title =
      titleBase.length > 140 ? `${titleBase.slice(0, 139)}…` : titleBase;
    const trackMeta = getTrackMeta(question.track);
    const location = `${trackMeta.label} • Karte ${karteNumber} • Frage ${questionNumber}`;
    const href = `/lern/${question.trackSlug}/${karteNumber}#question-${questionNumber}`;
    const snippet = createSnippet(combined, query);
    const questionTitleLower = titleBase.toLowerCase();
    const score = questionTitleLower.includes(normalizedTerm) ? 80 : 65;

    addResult({
      id: `question-${question.trackSlug}-${questionNumber}`,
      type: 'question',
      title,
      description: snippet,
      href,
      location,
      score,
    });
  }

  if (normalizedTerm.length >= MIN_CONTENT_TERM_LENGTH) {
    const docEntries = getDocsIndex();
    for (const entry of docEntries) {
      const titleMatch = entry.title.toLowerCase().includes(normalizedTerm);
      const locationMatch = entry.location.toLowerCase().includes(normalizedTerm);
      const contentMatch = entry.contentLower.includes(normalizedTerm);
      if (!titleMatch && !locationMatch && !contentMatch) continue;

      const snippet = createSnippet(entry.content, query);
      const score = titleMatch ? 90 : locationMatch ? 75 : 55;

      addResult({
        id: entry.id,
        type: entry.type,
        title: entry.title,
        description: snippet,
        href: entry.href,
        location: entry.location,
        score,
      });
    }

    const lfEntries = getLernfeldIndex();
    for (const entry of lfEntries) {
      const titleMatch = entry.title.toLowerCase().includes(normalizedTerm);
      const locationMatch = entry.location.toLowerCase().includes(normalizedTerm);
      const contentMatch = entry.contentLower.includes(normalizedTerm);
      if (!titleMatch && !locationMatch && !contentMatch) continue;

      const snippet = createSnippet(entry.content, query);
      const score = titleMatch ? 85 : locationMatch ? 70 : 50;

      addResult({
        id: entry.id,
        type: entry.type,
        title: entry.title,
        description: snippet,
        href: entry.href,
        location: entry.location,
        score,
      });
    }
  }

  for (const nav of NAV_ITEMS) {
    const labelLower = nav.label.toLowerCase();
    const keywordMatch = nav.keywords?.some((keyword) =>
      keyword.toLowerCase().includes(normalizedTerm) ||
      normalizedTerm.includes(keyword.toLowerCase()),
    );
    if (!labelLower.includes(normalizedTerm) && !keywordMatch) continue;

    addResult({
      id: `page-${nav.href}`,
      type: 'page',
      title: nav.label,
      description: undefined,
      href: nav.href,
      location: 'Navigasyon',
      score: 60,
    });
  }

  results.sort((a, b) => {
    if (b.score !== a.score) return b.score - a.score;
    return a.title.localeCompare(b.title);
  });

  const payload = results.slice(0, MAX_RESULTS).map(({ score, ...rest }) => {
    void score;
    return rest;
  });

  return NextResponse.json({ results: payload });
}
