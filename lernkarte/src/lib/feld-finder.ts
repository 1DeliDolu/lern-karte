import path from "path";
import { createDocFinder } from "./doc-finder";

const DOCS_ROOT = path.join(process.cwd(), "src", "lernfeld");

// Create the doc finder instance for 'lernfeld'
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

// Re-export formatLabel for convenience (using formatLabelFeld for lernfeld)
export {
  formatLabelFeld as formatLabel,
  formatLabelFeldTruncated,
  truncateToThreeWords,
} from "@/utils/format";
