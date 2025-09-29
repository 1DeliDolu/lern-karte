import { readDoc, listDocs, DocFile } from '@/lib/docs';
import React from 'react';

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

  const slug = rest.join('-');

  // if category present but no slug, list files under that category
  if (!slug) {
    const docs = listDocs();
    const files = docs[category] ?? [];
    return (
      <div style={{ padding: 20 }}>
        <h2>{category}</h2>
        {files.length === 0 ? (
          <p>Keine Dokumente in dieser Kategorie.</p>
        ) : (
          <ul>
            {files.map(f => (
              <li key={f}><a href={`/docs/${category}/${f}`}>{f.replace(/-/g, ' ')}</a></li>
            ))}
          </ul>
        )}
      </div>
    );
  }

  const doc = readDoc(category, slug);

  if (!doc) {
    return (
      <div style={{ padding: 20 }}>
        <h2>Dokument nicht gefunden</h2>
      </div>
    );
  }

  const title = titleFromDoc(doc) || `${category} / ${slug}`;

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
