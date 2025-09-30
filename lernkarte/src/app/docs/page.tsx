import React from 'react';
import Link from 'next/link';

export default function DocsIndexPage() {
  return (
    <div style={{ padding: 20 }}>
      <h1>Dokumentation</h1>
      <p>Willkommen bei den Docs. Wähle ein Dokument aus der Liste.</p>

      <nav aria-label="Docs navigation" style={{ marginTop: 16 }}>
        <ul style={{ listStyle: 'none', padding: 0 }}>
          <li><Link href="/docs/teil-1" style={{ textDecoration: 'none' }}>Teil 1 — Informieren und beraten</Link></li>
          <li><Link href="/docs/teil-2" style={{ textDecoration: 'none' }}>Teil 2 — IT-Lösungen</Link></li>
          <li><Link href="/docs/teil-3" style={{ textDecoration: 'none' }}>Teil 3 — WISO</Link></li>
        </ul>
      </nav>
    </div>
  );
}
