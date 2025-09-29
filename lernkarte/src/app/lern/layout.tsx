import React from 'react';
import Link from 'next/link';

export default function LernLayout({ children }: { children: React.ReactNode }) {
  const karteNR = Array.from({ length: 8 }, (_, i) => i + 1);

  return (
    <div style={{ padding: 20 }}>
      
      <h1>Lernkarten</h1>
      <nav style={{ display: 'flex', gap: 8, margin: '0 -20px 16px -20px', padding: '8px 20px' }}>
        {karteNR.map((n) => (
          <Link key={n} href={`/lern/${n}`} style={{ padding: '6px 10px', border: '1px solid #ccc', borderRadius: 4, textDecoration: 'none' }}>
            {n}
          </Link>
        ))}
      </nav>

      <div>{children}</div>
    </div>
  );
}
