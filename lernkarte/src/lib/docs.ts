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

export function readDoc(category: string, slug: string): DocFile {
  const full = path.join(DOCS_ROOT, category, `${slug}.md`);
  if (!fs.existsSync(full)) return null;
  const raw = fs.readFileSync(full, 'utf-8');
  // Simple fallback: return raw content and empty data. If you want frontmatter
  // parsing, install 'gray-matter' and re-enable parsing.
  return { content: raw, data: {} };
}
