import Link from 'next/link';
import { buildDocsTree, DocNode } from '@/lib/docs';
import React from 'react';
import DocsSplitLayout from '@/components/DocsSplitLayout';

function renderNode(node: DocNode, parentUrl = '/docs') {
  if (node.type === 'file') {
    const url = `${parentUrl}/${node.name}`;
    return (
      <li key={node.path} style={{ margin: '4px 0' }}>
        <Link href={url}>{node.name.replace(/-/g, ' ')}</Link>
      </li>
    );
  }

  const url = `${parentUrl}/${node.name}`;
  return (
    <li key={node.path} style={{ marginBottom: 8 }}>
      <div>
        <strong>{node.name}</strong>
      </div>
      <ul style={{ marginLeft: 12, marginTop: 6 }}>
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
    <div style={{ padding: 20 }}>
      <h1>Dokumentation</h1>

      <DocsSplitLayout
        left={(
          <aside style={{ borderRight: '1px solid #eee', paddingRight: 12 }}>
            <nav>
              <ul style={{ listStyle: 'none', padding: 0, margin: 0 }}>
                {tree.map(node => renderNode(node))}
              </ul>
            </nav>
          </aside>
        )}
        right={(
          <main>{children}</main>
        )}
      />
    </div>
  )
}