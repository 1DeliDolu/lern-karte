import React from 'react';
import { unstable_noStore as noStore } from 'next/cache';
import { buildDocsTree, buildDocsTreeForCategory, type DocNode } from '@/lib/docs-finder';
import DocsPersistentDrawer, { type DocsNavNode } from '@/components/DocsPersistentDrawer';

export const dynamic = 'force-dynamic';
export const revalidate = 0;

function toNavNodes(nodes: DocNode[], parentHref = '/docs'): DocsNavNode[] {
  return nodes.map(node => {
    const href = `${parentHref}/${node.name}`;

    if (node.type === 'file') {
      return {
        id: href,
        type: 'file',
        name: node.name,
        href,
      } satisfies DocsNavNode;
    }

    return {
      id: href,
      type: 'dir',
      name: node.name,
      href,
      children: toNavNodes(node.children, href),
    } satisfies DocsNavNode;
  });
}

export default function DocsLayout({ children }: { children: React.ReactNode }) {
  noStore();

  // Build a top-level list of categories, and for each category use
  // buildDocsTreeForCategory to produce a category-relative tree. This
  // ensures nested files and folders produce correct /docs/<cat>/... hrefs.
  let navNodes: DocsNavNode[] = [];

  try {
    const root = buildDocsTree();
    navNodes = root
      .filter(n => n.type === 'dir')
      .map(cat => {
        const name = cat.name;
        const baseHref = `/docs/${name}`;
        const children = buildDocsTreeForCategory(name);
        return {
          id: baseHref,
          type: 'dir',
          name,
          href: baseHref,
          children: toNavNodes(children, baseHref),
        } as DocsNavNode;
      });
  } catch {
    navNodes = [];
  }

  return <DocsPersistentDrawer nodes={navNodes}>{children}</DocsPersistentDrawer>;
}
