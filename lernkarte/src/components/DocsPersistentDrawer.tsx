'use client';

import * as React from 'react';
import PersistentDrawer, { type NavNode, type PersistentDrawerConfig } from './PersistentDrawer';
import { formatLabelTruncated } from '@/utils/format';

export type DocsNavNode = NavNode;

type Props = {
  nodes: DocsNavNode[];
  children: React.ReactNode;
};

const config: PersistentDrawerConfig = {
  storageKey: 'docs:persistent-drawer',
  accordionKey: 'docs:persistent-accordion',
  pathPrefix: '/docs/',
  breadcrumbTitle: 'Dokumentation',
  formatLabel: formatLabelTruncated,
};

export default function DocsPersistentDrawer({ nodes, children }: Props) {
  return <PersistentDrawer nodes={nodes} config={config}>{children}</PersistentDrawer>;
}
