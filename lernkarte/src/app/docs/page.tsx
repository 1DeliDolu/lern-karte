import React from 'react';
import Link from 'next/link';

const containerStyle: React.CSSProperties = {
  padding: '24px 20px 40px',
  maxWidth: 760,
  margin: '0 auto',
};

const listStyle: React.CSSProperties = {
  listStyle: 'none',
  padding: 0,
  margin: 0,
  display: 'flex',
  flexDirection: 'column',
  gap: 12,
};

const linkStyle: React.CSSProperties = {
  display: 'block',
  padding: '14px 18px',
  borderRadius: 12,
  border: '1px solid #e5e7eb',
  textDecoration: 'none',
  color: '#111827',
  background: '#ffffff',
};

export default function DocsIndexPage() {
  return (
    <div style={containerStyle}>
      <h1 style={{ fontSize: 32, fontWeight: 600, marginBottom: 12 }}>Dokumentation</h1>
      <p style={{ color: '#4b5563', marginBottom: 24 }}>
        Willkommen in der Docs Uebersicht. Waehle einen Abschnitt, um die Lernkarten zu oeffnen.
      </p>

      <nav aria-label="Docs navigation">
        <ul style={listStyle}>
          <li>
            <Link href="/docs/teil-1" style={linkStyle}>
              Teil 1 - Fachuebergreifende berufsprofilgebende Fertigkeiten, Kenntnisse und Faehigkeiten
            </Link>
          </li>
          <li>
            <Link href="/docs/teil-2" style={linkStyle}>
              Teil 2 - Berufsprofilgebende Fertigkeiten, Kenntnisse und Faehigkeiten in der Fachrichtung Anwendungsentwicklung
            </Link>
          </li>
          <li>
            <Link href="/docs/teil-3" style={linkStyle}>
              Teil 3 - Wirtschafts- und Sozialkunde sowie integrativ zu vermittelnde Inhalte
            </Link>
          </li>
        </ul>
      </nav>
    </div>
  );
}
