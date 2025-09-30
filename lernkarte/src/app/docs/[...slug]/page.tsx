import React from 'react';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import ReactMarkdown from 'react-markdown';
import remarkGfm from 'remark-gfm';
import {
  buildDocsTreeForCategory,
  findDocNodeBySegments,
  isDirectoryNode,
  type DocNode,
  readDoc,
  listDocsRecursive,
} from '@/lib/docs-finder';
import fs from 'fs';
import path from 'path';

type Params = {
  slug?: string[];
};

interface DocPageProps {
  params: Params | Promise<Params>;
}

const containerStyle: React.CSSProperties = {
  maxWidth: 960,
  margin: '0 auto',
  padding: '24px 16px 40px',
};

const articleStyle: React.CSSProperties = {
  backgroundColor: '#ffffff',
  border: '1px solid #e5e7eb',
  borderRadius: 12,
  padding: '24px 28px',
  lineHeight: 1.65,
  color: '#111827',
  boxShadow: '0 1px 2px rgba(15, 23, 42, 0.08)',
  position: 'relative',
  zIndex: 1,
};

function formatLabel(value: string): string {
  return value.replace(/-/g, ' ').replace(/\b0+(\d)/g, '$1');
}

function buildHref(category: string, segments: string[]): string {
  const parts = [category, ...segments].filter(Boolean);
  return `/docs/${parts.join('/')}`;
}

function Breadcrumbs({ category, segments }: { category: string; segments: string[] }) {
  const crumbs = [
    { label: 'Docs', href: '/docs' },
    { label: formatLabel(category), href: buildHref(category, []) },
    ...segments.map((segment, index) => ({
      label: formatLabel(segment),
      href: buildHref(category, segments.slice(0, index + 1)),
    })),
  ];

  return (
    <nav aria-label="Breadcrumb" style={{ fontSize: 13, color: '#6b7280', marginBottom: 12 }}>
      {crumbs.map((crumb, index) => (
        <React.Fragment key={crumb.href}>
          {index > 0 && <span style={{ margin: '0 6px' }}>/</span>}
          <Link href={crumb.href} style={{ color: '#4b5563', textDecoration: 'none' }}>
            {crumb.label}
          </Link>
        </React.Fragment>
      ))}
    </nav>
  );
}

function DirectoryListing({
  category,
  segments,
  nodes,
}: {
  category: string;
  segments: string[];
  nodes: DocNode[];
}) {
  const heading = segments.length ? formatLabel(segments[segments.length - 1]) : formatLabel(category);

  return (
    <div style={containerStyle}>
      <Breadcrumbs category={category} segments={segments} />
      <h1 style={{ fontSize: 28, fontWeight: 600, color: '#111827' }}>{heading}</h1>
      <p style={{ marginTop: 8, color: '#4b5563' }}>Waehle ein Dokument oder einen Unterordner.</p>

      {nodes.length === 0 ? (
        <div
          style={{
            marginTop: 20,
            border: '1px dashed #cbd5f5',
            borderRadius: 10,
            padding: '18px 20px',
            color: '#6b7280',
            background: '#f9fafb',
          }}
        >
          Keine Eintraege vorhanden.
        </div>
      ) : (
        <ul
          style={{
            marginTop: 20,
            listStyle: 'none',
            padding: 0,
            border: '1px solid #e5e7eb',
            borderRadius: 12,
            overflow: 'hidden',
            background: '#ffffff',
          }}
        >
          {nodes.map((node, index) => {
            const nextSegments = [...segments, node.name];
            const href = buildHref(category, nextSegments);
            const isLast = index === nodes.length - 1;
            return (
              <li
                key={href}
                style={{
                  borderBottom: isLast ? 'none' : '1px solid #e5e7eb',
                }}
              >
                <Link
                  href={href}
                  style={{
                    display: 'flex',
                    alignItems: 'center',
                    gap: 12,
                    padding: '14px 18px',
                    textDecoration: 'none',
                    color: '#111827',
                  }}
                >
                  <span style={{ fontWeight: 600, fontSize: 15 }}>{formatLabel(node.name)}</span>
                  <span
                    style={{
                      marginLeft: 'auto',
                      fontSize: 11,
                      letterSpacing: 0.6,
                      textTransform: 'uppercase',
                      color: '#9ca3af',
                    }}
                  >
                    {node.type === 'dir' ? 'Ordner' : 'Dokument'}
                  </span>
                </Link>
              </li>
            );
          })}
        </ul>
      )}
    </div>
  );
}

function DocumentView({
  category,
  segments,
  title,
  fallbackLabel,
  content,
  html,
  matchType,
  matchedPath,
}: {
  category: string;
  segments: string[];
  title: string | null;
  fallbackLabel: string;
  content: string;
  html?: string;
  matchType?: string;
  matchedPath?: string;
}) {
  const safeTitle = title && title.trim().length > 0 ? title.trim() : null;
  const fallback = fallbackLabel && fallbackLabel.trim().length > 0 ? fallbackLabel.trim() : null;
  const normalizedHtml = html?.trim().replace(/^<!--[\s\S]*?-->\s*/g, '') ?? '';
  const hasHeading =
    normalizedHtml.length > 0 ? /^<h[1-6]\b/i.test(normalizedHtml) : content.trim().startsWith('#');
  const headingToRender = safeTitle ?? (hasHeading ? null : fallback);

  return (
    <div style={containerStyle}>
      <Breadcrumbs category={category} segments={segments} />
      {headingToRender && (
        <h1 style={{ fontSize: 30, fontWeight: 600, color: '#111827', marginBottom: 18 }}>{headingToRender}</h1>
      )}

      {matchType && matchType !== 'exact' && (
        <div
          style={{
            marginBottom: 16,
            border: '1px solid #facc15',
            background: '#fef3c7',
            borderRadius: 10,
            padding: '12px 16px',
            fontSize: 13,
            color: '#92400e',
          }}
        >
          Dokument gefunden via {matchType}. Pfad: {matchedPath ?? 'unbekannt'}
        </div>
      )}

      <article style={articleStyle}>
        {html ? (
          <div dangerouslySetInnerHTML={{ __html: html }} />
        ) : (
          <ReactMarkdown remarkPlugins={[remarkGfm]}>{content}</ReactMarkdown>
        )}
      </article>
        {/* Inline debug panel shown inside the main content area (Turkish labels) */}
        <div style={{ marginTop: 12, border: '1px solid #e6e6e6', borderRadius: 8, padding: 12, background: '#ffffff' }}>
          <div style={{ fontWeight: 700, marginBottom: 8 }}>Doküman Bilgileri</div>
          <div>Eşleme türü (matchType): <strong>{matchType ?? '(yok)'}</strong></div>
          <div style={{ fontFamily: 'monospace', wordBreak: 'break-all', marginTop: 6 }}>Eşlenen Yol: {matchedPath ?? '(yok)'}</div>
          <div style={{ marginTop: 8 }}>Markdown uzunluğu: {String((content || '').length)}</div>
          <div>HTML uzunluğu: {String((html || '').length)}</div>
          <details style={{ marginTop: 10 }}>
            <summary style={{ cursor: 'pointer' }}>Ham içerik göster</summary>
            <pre style={{ maxHeight: 400, overflow: 'auto', whiteSpace: 'pre-wrap', background: '#f7f7f7', padding: 8 }}>{content}</pre>
          </details>
        </div>
    </div>
  );
}

export default async function DocPage({ params }: DocPageProps) {
  const resolvedParams = await params;
  const slug = resolvedParams?.slug ?? [];

  if (slug.length === 0) {
    notFound();
  }

  const [category, ...rest] = slug;
  if (!category) {
    notFound();
  }

  const tree = buildDocsTreeForCategory(category);

  if (rest.length === 0) {
    if (tree.length === 0) {
      notFound();
    }
    return <DirectoryListing category={category} segments={[]} nodes={tree} />;
  }

  const node = findDocNodeBySegments(tree, rest);
  if (node && isDirectoryNode(node)) {
    return <DirectoryListing category={category} segments={rest} nodes={node.children} />;
  }

  const doc = readDoc(category, rest);
  if (!doc) {
    // Diagnostic view instead of immediate 404 so we can inspect filesystem vs route
    const docsRoot = path.join(process.cwd(), 'src', 'app', 'docs');
    const attemptedPath = path.join(docsRoot, category, ...rest) + '.md';
    const attemptedExists = fs.existsSync(attemptedPath);
    let parentFiles: string[] = [];
    try {
      const parentDir = path.dirname(path.join(docsRoot, category, ...rest));
      if (fs.existsSync(parentDir)) parentFiles = fs.readdirSync(parentDir);
    } catch {
      parentFiles = [];
    }

    const allCategoryDocs = listDocsRecursive(category);

    return (
      <div style={{ padding: 20 }}>
        <h2>Dokument nicht gefunden (Diagnose)</h2>
        <div style={{ marginTop: 12 }}>
          <strong>Slug:</strong>
          <div style={{ fontFamily: 'monospace' }}>{JSON.stringify(slug)}</div>
        </div>
        <div style={{ marginTop: 12 }}>
          <strong>Attempted path:</strong>
          <div style={{ fontFamily: 'monospace' }}>{attemptedPath}</div>
          <div>Exists: {String(attemptedExists)}</div>
        </div>
        <div style={{ marginTop: 12 }}>
          <strong>Parent directory listing:</strong>
          <pre style={{ whiteSpace: 'pre-wrap' }}>{parentFiles.join('\n') || '(empty)'}</pre>
        </div>
        <div style={{ marginTop: 12 }}>
          <strong>All docs under category:</strong>
          <pre style={{ whiteSpace: 'pre-wrap' }}>{allCategoryDocs.join('\n') || '(none)'}</pre>
        </div>
        <div style={{ marginTop: 12 }}>
          <em>Tip: check spacing, special characters or hyphens in folder/file names. The route segments are compared exactly against filesystem names.</em>
        </div>
      </div>
    );
  }

  const title = typeof doc.data?.title === 'string' ? doc.data.title : null;
  const fallbackLabel = formatLabel(rest[rest.length - 1] ?? category);

  return (
    <DocumentView
      category={category}
      segments={rest}
      title={title}
      fallbackLabel={fallbackLabel}
      content={doc.content ?? ''}
      html={doc.html}
      matchType={doc.matchType}
      matchedPath={doc.matchedPath}
    />
  );
}
