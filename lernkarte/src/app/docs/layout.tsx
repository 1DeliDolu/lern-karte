import Link from 'next/link';
import { listDocs } from '@/lib/docs';
import { docs as FALLBACK_DOCS } from '@/constants/docs';

export default function DocsLayout({ children }: { children: React.ReactNode }) {
  // listDocs reads the filesystem using Node fs and is safe in a server component
  let DOCS = FALLBACK_DOCS;
  try {
    DOCS = listDocs();
  } catch {
    // fallback to static constants if fs access fails in some environments
    DOCS = FALLBACK_DOCS;
  }

  const categories = Object.keys(DOCS).sort();

  return (
    <div style={{ padding: 20 }}>
      <h1>Dokumentation</h1>

      <div style={{ display: 'flex', gap: 12, flexWrap: 'wrap', marginBottom: 12 }}>
        {categories.map(cat => (
          <Link key={cat} href={`/docs/${cat}`} style={{ padding: '6px 10px', border: '1px solid #ccc', borderRadius: 4, textDecoration: 'none' }}>
            {cat}
          </Link>
        ))}
      </div>

      <div style={{ display: 'grid', gridTemplateColumns: '1fr 3fr', gap: 24 }}>
        <aside>
          {categories.map(cat => (
            <div key={cat} style={{ marginBottom: 8 }}>
              <h3 style={{ margin: '6px 0' }}>{cat}</h3>
              <ul style={{ margin: 0, paddingLeft: 12 }}>
                {DOCS[cat].map((slug: string) => (
                  <li key={slug}><Link href={`/docs/${cat}/${slug}`}>{slug.replace(/-/g, ' ')}</Link></li>
                ))}
              </ul>
            </div>
          ))}
        </aside>

        <main>{children}</main>
      </div>
    </div>
  );
}