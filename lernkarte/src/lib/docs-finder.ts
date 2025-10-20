import path from "path";
import { createDocFinder } from "./doc-finder";
import { formatLabel, formatLabelTruncated, truncateToThreeWords } from "@/utils/format";

const DOCS_ROOT = path.join(process.cwd(), "src", "teils");

// Create the doc finder instance for 'teils' (docs)
const docFinder = createDocFinder(DOCS_ROOT);

// Re-export all functions from the factory
export const listDocs = docFinder.listDocs;
export const buildDocsTree = docFinder.buildDocsTree;
export const buildDocsTreeForCategory = docFinder.buildDocsTreeForCategory;
export const findDocNodeBySegments = docFinder.findDocNodeBySegments;
export const listDocChildrenBySegments = docFinder.listDocChildrenBySegments;
export const listDocsRecursive = docFinder.listDocsRecursive;
export const readDoc = docFinder.readDoc;

// Re-export types
export type { DocNode, DirectoryNode, FileNode, DocFile } from "./doc-finder";
export { isDirectoryNode, isFileNode } from "./doc-finder";

// Re-export format helpers for convenience
export { formatLabel, formatLabelTruncated, truncateToThreeWords };
