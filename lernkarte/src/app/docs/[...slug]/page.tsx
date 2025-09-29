import { readDoc, DocFile, DocNode, buildDocsTreeForCategory, listDocsRecursive } from '@/lib/docs';
import React from 'react';
import Link from 'next/link';

type Props = { params: { slug: string[] } };

function titleFromDoc(doc: DocFile) {
  if (!doc) return undefined;
  if (doc.data && typeof doc.data['title'] === 'string') return doc.data['title'] as string;
  return undefined;
}

export default async function DocRenderer({ params }: Props) {
  // Next.js can provide params as a promise in some contexts; await it to be safe.
  const p = await params;
  const [category, ...rest] = p.slug || [];
  // if no category provided, show base message
  if (!category) {
    return (
      <div style={{ padding: 20 }}>
        <h2>Dokumentation</h2>
        <p>Wähle eine Kategorie aus der Sidebar.</p>
      </div>
    );
  }

  // if category present but no slug segments, list files under that category
  if (rest.length === 0) {
    // Show nested directories and files for the category
    const tree = buildDocsTreeForCategory(category);
    if (tree.length === 0) {
      // fallback: list any markdown files recursively under the category
      const flat = listDocsRecursive(category);
      if (flat.length === 0) {
        return (
          <div style={{ padding: 20 }}>
            <h2>{category}</h2>
            <p>Keine Dokumente in dieser Kategorie.</p>
          </div>
        );
      }
      return (
        <div style={{ padding: 20 }}>
          <h2>{category}</h2>
          <ul>
            {flat.map((f: string) => (
              <li key={f}><Link href={`/docs/${category}/${f}`}>{f.replace(/\//g, ' / ').replace(/-/g, ' ')}</Link></li>
            ))}
          </ul>
        </div>
      );
    }

    function renderNode(node: DocNode, parentPath = ''): React.ReactNode {
      const hrefBase = `/docs/${category}` + (parentPath ? `/${parentPath}` : '');
      if (node.type === 'file') {
        const fileNode = node as { type: 'file'; name: string; path: string };
        const href = `${hrefBase}/${fileNode.path}`;
        return (
          <li key={fileNode.path}><Link href={href} style={{ textDecoration: 'none' }}>{fileNode.name.replace(/-/g, ' ')}</Link></li>
        );
      }
      // directory
      const dirNode = node as { type: 'dir'; name: string; path: string; children: DocNode[] };
      const newParent = parentPath ? `${parentPath}/${dirNode.name}` : dirNode.name;
      return (
        <li key={newParent}>
          <strong>{dirNode.name.replace(/-/g, ' ')}</strong>
          <ul>
            {dirNode.children.map((c) => renderNode(c, newParent))}
          </ul>
        </li>
      );
    }

    return (
      <div style={{ padding: 20 }}>
        <h2>{category}</h2>
        <ul>
          {tree.map(n => renderNode(n))}
        </ul>
      </div>
    );
  }

  // pass the remaining path segments to readDoc so nested folders work
  const doc = readDoc(category, rest);

  if (!doc) {
    return (
      <div style={{ padding: 20 }}>
        <h2>Dokument nicht gefunden</h2>
      </div>
    );
  }

  const fallback = rest.join('/');
  const title = titleFromDoc(doc) || `${category} / ${fallback}`;

  return (
    <div style={{ padding: 20 }}>
      <h1>{title}</h1>
      <div>
        {/* render raw markdown as preformatted block; project can later add mdx/remark for proper rendering */}
        <pre style={{ whiteSpace: 'pre-wrap' }}>{doc.content}</pre>
      </div>
    </div>
  );
}
