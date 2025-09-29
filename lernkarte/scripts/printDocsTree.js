const fs = require('fs');
const path = require('path');

const DOCS_ROOT = path.join(process.cwd(), 'src', 'app', 'docs');

function isDynamicName(name) {
  return name.startsWith('[') || name.startsWith('_');
}

function buildDocsTree(root) {
  const entries = fs.readdirSync(root, { withFileTypes: true });
  const nodes = [];
  for (const e of entries) {
    if (isDynamicName(e.name)) continue;
    const full = path.join(root, e.name);
    if (e.isDirectory()) {
      nodes.push({ type: 'dir', name: e.name, path: full, children: buildDocsTree(full) });
    } else if (e.isFile() && e.name.endsWith('.md')) {
      nodes.push({ type: 'file', name: e.name.replace(/\.md$/, ''), path: full });
    }
  }
  nodes.sort((a, b) => {
    if (a.type === b.type) return a.name.localeCompare(b.name);
    return a.type === 'dir' ? -1 : 1;
  });
  return nodes;
}

function buildDocsTreeForCategory(category) {
  const root = path.join(DOCS_ROOT, category);
  if (!fs.existsSync(root)) return [];
  const nodes = buildDocsTree(root);

  function convert(n) {
    if (n.type === 'file') {
      const rel = path.relative(root, n.path).replace(/\\/g, '/').replace(/\.md$/, '');
      return { type: 'file', name: n.name, path: rel };
    }
    return {
      type: 'dir', name: n.name, path: path.relative(root, n.path).replace(/\\/g, '/'), children: n.children.map(convert)
    };
  }

  return nodes.map(convert);
}

const category = process.argv[2] || 'teil-2';
const tree = buildDocsTreeForCategory(category);
console.log(JSON.stringify(tree, null, 2));
