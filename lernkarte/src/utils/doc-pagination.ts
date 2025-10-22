import type { NavNode } from "@/components/PersistentDrawer";

export type PaginationLink = {
  href: string;
  name: string;
};

export type DocPagination = {
  previous?: PaginationLink;
  next?: PaginationLink;
};

type FlattenedNode = PaginationLink & { normalizedHref: string };

function normalizeHref(href: string) {
  return href.replace(/\/+$/, "").toLowerCase();
}

function collectFileNodes(nodes: NavNode[], acc: FlattenedNode[] = []) {
  nodes.forEach((node) => {
    if (node.type === "file") {
      acc.push({
        href: node.href,
        name: node.name,
        normalizedHref: normalizeHref(node.href),
      });
      return;
    }

    if (node.children.length > 0) {
      collectFileNodes(node.children, acc);
    }
  });

  return acc;
}

export function getDocPagination(
  nodes: NavNode[],
  currentHref: string
): DocPagination {
  if (!nodes.length) return {};

  const files = collectFileNodes(nodes);
  if (files.length === 0) return {};

  const normalizedTarget = normalizeHref(currentHref);
  const index = files.findIndex(
    (item) => item.normalizedHref === normalizedTarget
  );

  if (index === -1) {
    return {};
  }

  const previous = index > 0 ? files[index - 1] : undefined;
  const next = index < files.length - 1 ? files[index + 1] : undefined;

  return {
    previous,
    next,
  };
}
