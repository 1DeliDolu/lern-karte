import fs from 'fs';
import path from 'path';

const DOCS_ROOT = path.join(process.cwd(), 'src', 'app', 'docs');

export function listDocs() {
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

export type DocNode =
  | { type: 'file'; name: string; path: string }
  | { type: 'dir'; name: string; path: string; children: DocNode[] };

function isDynamicName(name: string) {
  return name.startsWith('[') || name.startsWith('_');
}

export function buildDocsTree(root = DOCS_ROOT): DocNode[] {
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
  // sort directories first, then files, alphabetically
  nodes.sort((a, b) => {
    if (a.type === b.type) return a.name.localeCompare(b.name);
    return a.type === 'dir' ? -1 : 1;
  });
  return nodes;
}

export type DocFile = { content: string; data?: Record<string, unknown> } | null;

// Accept either a single slug string (legacy) or an array of path segments
// so we can support nested folders like:
// /docs/teil-1/01-informieren-und-beraten/01-2-kundenbeziehungen/01-2-2-... 
export function readDoc(category: string, slugOrSegments: string | string[]): DocFile {
  const parts = Array.isArray(slugOrSegments) ? slugOrSegments : [slugOrSegments];
  if (!parts.length) return null;
  // build the full path under the category, append .md to the last segment
  const last = parts[parts.length - 1];
  const segs = parts.slice(0, -1);
  const filePath = path.join(DOCS_ROOT, category, ...segs, `${last}.md`);
  if (!fs.existsSync(filePath)) return null;
  const raw = fs.readFileSync(filePath, 'utf-8');
  return { content: raw, data: {} };
}
