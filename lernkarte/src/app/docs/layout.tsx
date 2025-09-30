import React from 'react';
import { buildDocsTree, type DocNode } from '@/lib/docs';
import DocsPersistentDrawer, { type DocsNavNode } from '@/components/DocsPersistentDrawer';

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
  let tree: DocNode[] = [];

  try {
    tree = buildDocsTree();
  } catch {
    tree = [];
  }

  const navNodes = toNavNodes(tree);

  return <DocsPersistentDrawer nodes={navNodes}>{children}</DocsPersistentDrawer>;
}
