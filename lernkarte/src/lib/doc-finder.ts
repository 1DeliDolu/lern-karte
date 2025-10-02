import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';
import { marked } from 'marked';
import { naturalSort } from '@/utils/format';

// Configure marked to avoid deprecation warnings about header IDs
marked.setOptions({
  headerIds: false,
  // disable automatic email/URL mangling (deprecated default)
  // see: https://www.npmjs.com/package/marked-mangle
  mangle: false,
  // Allow HTML tags in markdown (important for inline styling)
  sanitize: false,
});

export type DocNode =
  | { type: 'file'; name: string; path: string }
  | { type: 'dir'; name: string; path: string; children: DocNode[] };

export type DirectoryNode = Extract<DocNode, { type: 'dir' }>;
export type FileNode = Extract<DocNode, { type: 'file' }>;

export type DocFile = {
  content: string;
  html?: string;
  data?: Record<string, unknown>;
  // debug metadata (optional)
  matchType?: string;
  matchedPath?: string;
} | null;

export function isDirectoryNode(node: DocNode): node is DirectoryNode {
  return node.type === 'dir';
}

export function isFileNode(node: DocNode): node is FileNode {
  return node.type === 'file';
}

function isDynamicName(name: string) {
  return name.startsWith('[') || name.startsWith('_');
}

// Decode a path segment from the URL and normalize for filesystem matching.
function decodeSegment(seg: string) {
  try {
    // decode percent-encoded characters and normalize unicode
    return decodeURIComponent(seg).normalize('NFC');
  } catch {
    return seg;
  }
}

/**
 * Create a doc finder factory for a specific root directory
 */
export function createDocFinder(docsRoot: string) {
  const DOCS_ROOT = docsRoot;

  function listDocs() {
    // filter out dynamic route folders (e.g. [...slug]) and non-directory entries
    const categories = fs
      .readdirSync(DOCS_ROOT, { withFileTypes: true })
      .filter(d => d.isDirectory() && !d.name.startsWith('['));

    const result: Record<string, string[]> = {};
    for (const dir of categories) {
      const dirPath = path.join(DOCS_ROOT, dir.name);
      const files = fs.readdirSync(dirPath).filter(f => f.endsWith('.md'));
      result[dir.name] = files.map(f => f.replace(/\.md$/, ''));
    }
    return result;
  }

  function buildDocsTree(root = DOCS_ROOT): DocNode[] {
    const entries = fs.readdirSync(root, { withFileTypes: true });
    const nodes: DocNode[] = [];
    for (const e of entries) {
      if (isDynamicName(e.name)) continue;
      const full = path.join(root, e.name);
      if (e.isDirectory()) {
        nodes.push({ type: 'dir', name: e.name, path: full, children: buildDocsTree(full) });
      } else if (e.isFile() && e.name.endsWith('.md')) {
        nodes.push({ type: 'file', name: e.name.replace(/\.md$/, ''), path: full });
      }
    }
    // sort directories first, then files, using natural sort for alphanumeric strings
    nodes.sort((a, b) => {
      if (a.type === b.type) return naturalSort(a.name, b.name);
      return a.type === 'dir' ? -1 : 1;
    });
    return nodes;
  }

  // Build a docs tree for a specific top-level category and return nodes
  // with paths relative to the category root. This makes it easy for the
  // UI to construct hrefs like /docs/<category>/<relative-path>
  function buildDocsTreeForCategory(category: string): DocNode[] {
    const root = path.join(DOCS_ROOT, category);
    if (!fs.existsSync(root)) return [];
    const nodes = buildDocsTree(root);

    function convert(n: DocNode): DocNode {
      if (n.type === 'file') {
        // relative path from the category root, without extension
        const rel = path.relative(root, n.path).replace(/\\/g, '/').replace(/\.md$/, '');
        return { type: 'file', name: n.name, path: rel };
      }
      return {
        type: 'dir',
        name: n.name,
        path: path.relative(root, n.path).replace(/\\/g, '/'),
        children: n.children.map(convert),
      };
    }

    return nodes.map(convert);
  }

  function findDocNodeBySegments(nodes: DocNode[], segments: string[]): DocNode | null {
    if (!segments.length) return null;

    let currentNodes = nodes;
    let current: DocNode | null = null;
    for (let i = 0; i < segments.length; i += 1) {
      const rawSegment = segments[i];
      const segment = decodeSegment(rawSegment);
      // compare case-insensitive after decoding
      current = currentNodes.find(node => node.name.toLowerCase() === segment.toLowerCase()) ?? null;
      if (!current) return null;
      if (i < segments.length - 1) {
        if (current.type !== 'dir') return null;
        currentNodes = current.children;
      }
    }

    return current;
  }

  function listDocChildrenBySegments(nodes: DocNode[], segments: string[]): DocNode[] {
    if (!segments.length) return nodes;
    const node = findDocNodeBySegments(nodes, segments);
    if (!node || node.type !== 'dir') return [];
    return node.children;
  }

  // Return a flat list of markdown files under a category with paths
  // relative to the category root. Used as a fallback for older setups.
  function listDocsRecursive(category: string): string[] {
    const root = path.join(DOCS_ROOT, category);
    if (!fs.existsSync(root)) return [];
    const results: string[] = [];

    function walk(dir: string, relBase = '') {
      const entries = fs.readdirSync(dir, { withFileTypes: true });
      for (const e of entries) {
        if (isDynamicName(e.name)) continue;
        const full = path.join(dir, e.name);
        const rel = relBase ? `${relBase}/${e.name}` : e.name;
        if (e.isDirectory()) {
          walk(full, rel);
        } else if (e.isFile() && e.name.endsWith('.md')) {
          results.push(rel.replace(/\.md$/, ''));
        }
      }
    }

    walk(root, '');
    return results;
  }

  // Accept either a single slug string (legacy) or an array of path segments
  // so we can support nested folders like:
  // /docs/teil-1/01-informieren-und-beraten/01-2-kundenbeziehungen/01-2-2-... 
  function readDoc(category: string, slugOrSegments: string | string[]): DocFile {
    const rawParts = Array.isArray(slugOrSegments) ? slugOrSegments : [slugOrSegments];
    // decode URL segments to match filesystem names (handles percent-encoding and unicode)
    const parts = rawParts.map(p => decodeSegment(p));
    if (!parts.length) return null;

    // helper: read & parse a file path
    function tryRead(fullPath: string, matchType?: string): DocFile {
      try {
        if (!fs.existsSync(fullPath)) return null;
        const raw = fs.readFileSync(fullPath, 'utf-8');
        const parsed = matter(raw);
        const html = marked(parsed.content);
        return { content: parsed.content, html, data: parsed.data || {}, matchType, matchedPath: fullPath };
      } catch {
        return null;
      }
    }

    // simple Levenshtein distance for fuzzy matching (small, dependency-free)
    function levenshtein(a: string, b: string): number {
      const dp: number[][] = Array.from({ length: a.length + 1 }, () => Array(b.length + 1).fill(0));
      for (let i = 0; i <= a.length; i++) dp[i][0] = i;
      for (let j = 0; j <= b.length; j++) dp[0][j] = j;
      for (let i = 1; i <= a.length; i++) {
        for (let j = 1; j <= b.length; j++) {
          const cost = a[i - 1] === b[j - 1] ? 0 : 1;
          dp[i][j] = Math.min(dp[i - 1][j] + 1, dp[i][j - 1] + 1, dp[i - 1][j - 1] + cost);
        }
      }
      return dp[a.length][b.length];
    }

    // build the full path under the category, append .md to the last segment
    const last = parts[parts.length - 1];
    const segs = parts.slice(0, -1);
    const filePath = path.join(DOCS_ROOT, category, ...segs, `${last}.md`);

    // 1) Exact path
    const exact = tryRead(filePath, 'exact');
    if (exact) return exact;

    // 2) Case-insensitive lookup in the same directory
    try {
      const dir = path.join(DOCS_ROOT, category, ...segs);
      if (fs.existsSync(dir)) {
        const files = fs.readdirSync(dir).filter(f => f.toLowerCase().endsWith('.md'));
        const wanted = `${last}.md`.toLowerCase();
        const match = files.find(f => f.toLowerCase() === wanted);
        if (match) return tryRead(path.join(dir, match), 'case-insensitive');
      }
    } catch {
      // ignore
    }

    // 3) Strip trailing slug tokens progressively and try again
    for (let len = parts.length - 1; len >= 1; len--) {
      const newParts = parts.slice(0, len);
      const newLast = newParts[newParts.length - 1];
      const newSegs = newParts.slice(0, -1);
      const tryPath = path.join(DOCS_ROOT, category, ...newSegs, `${newLast}.md`);
      const r = tryRead(tryPath, 'stripped');
      if (r) return r;
      // also case-insensitive in this directory
      try {
        const dir = path.join(DOCS_ROOT, category, ...newSegs);
        if (fs.existsSync(dir)) {
          const files = fs.readdirSync(dir).filter(f => f.toLowerCase().endsWith('.md'));
          const wanted = `${newLast}.md`.toLowerCase();
          const match = files.find(f => f.toLowerCase() === wanted);
          if (match) return tryRead(path.join(dir, match), 'stripped-case-insensitive');
        }
      } catch {
        // ignore
      }
    }

    // 4) Fuzzy filename match in the nearest existing ancestor directory
    // find nearest existing directory from the original segs (including category root)
    let searchDir = path.join(DOCS_ROOT, category, ...segs);
    while (searchDir && !fs.existsSync(searchDir)) {
      const parent = path.dirname(searchDir);
      if (parent === searchDir || parent.length < DOCS_ROOT.length) {
        searchDir = path.join(DOCS_ROOT, category);
        break;
      }
      searchDir = parent;
    }
    if (!fs.existsSync(searchDir)) searchDir = path.join(DOCS_ROOT, category);

    try {
      const files = fs.readdirSync(searchDir).filter(f => f.toLowerCase().endsWith('.md'));
      const candidates = files.map(f => ({
        name: f.replace(/\.md$/i, ''),
        file: f,
        dist: levenshtein(f.replace(/\.md$/i, ''), last),
      }));
      candidates.sort((a, b) => a.dist - b.dist);
      if (candidates.length) {
        const best = candidates[0];
        // accept if distance is small relative to length (or <=3 absolute)
        const threshold = Math.min(3, Math.floor(Math.max(best.name.length, last.length) * 0.35));
        if (best.dist <= threshold) {
          return tryRead(path.join(searchDir, best.file), 'fuzzy');
        }
      }
    } catch {
      // ignore
    }

    // 5) Ultimate fallback: return the first markdown file in the search directory
    try {
      const allFiles = fs.readdirSync(searchDir).filter(f => f.toLowerCase().endsWith('.md'));
      if (allFiles.length > 0) {
        const fallbackFile = allFiles[0];
        return tryRead(path.join(searchDir, fallbackFile), 'fallback-first-file');
      }
    } catch {
      // ignore
    }

    return null;
  }

  return {
    listDocs,
    buildDocsTree,
    buildDocsTreeForCategory,
    findDocNodeBySegments,
    listDocChildrenBySegments,
    listDocsRecursive,
    readDoc,
  };
}
