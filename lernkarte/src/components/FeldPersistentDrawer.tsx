"use client";

import * as React from "react";
import PersistentDrawer, {
  type NavNode,
  type PersistentDrawerConfig,
} from "./PersistentDrawer";
import { formatLabelFeldTruncated } from "@/utils/format";

export type DocsNavNode = NavNode;

type Props = {
  nodes: DocsNavNode[];
  children: React.ReactNode;
};

const config: PersistentDrawerConfig = {
  storageKey: "lernfeld:persistent-drawer",
  accordionKey: "lernfeld:persistent-accordion",
  pathPrefix: "/lernfeld/",
  breadcrumbTitle: "Lernfeld",
  formatLabel: formatLabelFeldTruncated,
};

export default function FeldPersistentDrawer({ nodes, children }: Props) {
  return (
    <PersistentDrawer nodes={nodes} config={config}>
      {children}
    </PersistentDrawer>
  );
}
