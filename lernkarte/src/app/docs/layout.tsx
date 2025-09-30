import Link from 'next/link';
import { buildDocsTree, DocNode } from '@/lib/docs';
import React from 'react';
import DocsSplitLayout from '@/components/DocsSplitLayout';

function renderNode(node: DocNode, parentUrl = '/docs') {
  if (node.type === 'file') {
    const url = `${parentUrl}/${node.name}`;
    return (
      <li key={node.path} style={{ margin: '4px 0', paddingLeft: 0, listStyle: 'none' }}>
        <Link href={url} style={{ display: 'block', padding: '4px 0', textDecoration: 'none', color: 'inherit' }}>{node.name.replace(/-/g, ' ')}</Link>
      </li>
    );
  }

  const url = `${parentUrl}/${node.name}`;
  return (
    <li key={node.path} style={{ marginBottom: 8, paddingLeft: 0, listStyle: 'none' }}>
      <div>
        <strong>{node.name.replace(/-/g, ' ')}</strong>
      </div>
      <ul style={{ listStyle: 'none', padding: 0, margin: '6px 0 0 0' }}>
        {node.children.map(child => renderNode(child, url))}
      </ul>
    </li>
  );
}

export default function DocsLayout({ children }: { children: React.ReactNode }) {
  let tree: DocNode[] = [];
  try {
    tree = buildDocsTree();
  } catch {
    // If fs reading fails, leave tree empty — sidebar will be empty but app continues
    tree = [];
  }

  return (
    <div className="docs-page">
      <h1 className="docs-heading">Dokumentation</h1>

      <DocsSplitLayout
        left={(
          <aside className="docs-split-left">
            <nav className="docs-nav">
              <ul>
                {tree.map(node => renderNode(node))}
              </ul>
            </nav>
          </aside>
        )}
        right={(
          <main className="docs-main">{children}</main>
        )}
      />
    </div>
  )
}