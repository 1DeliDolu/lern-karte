import React from "react";
import { notFound } from "next/navigation";
import { Box, Typography, Card, CardContent, Button, Divider } from "@mui/material";
import Link from "next/link";
import FolderIcon from "@mui/icons-material/Folder";
import ArticleIcon from "@mui/icons-material/Article";
import ArrowBackIosNewIcon from "@mui/icons-material/ArrowBackIosNew";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
import { buildDocsTreeForCategory, DocNode, readDoc } from "@/lib/feld-finder";
import FeldPersistentDrawer, {
  DocsNavNode,
} from "@/components/FeldPersistentDrawer";
import { formatLabelFeld as formatLabel, naturalSort } from "@/utils/format";
import { getDocPagination } from "@/utils/doc-pagination";

type Props = {
  params: Promise<{ slug: string[] }>;
};

export default async function DocPage({ params }: Props) {
  const { slug } = await params;

  // First segment should be the category (lernfeld-1, lernfeld-2, lernfeld-3)
  if (!slug || slug.length === 0) {
    notFound();
  }

  const category = slug[0];
  const validCategories = [
    "lernfeld-1",
    "lernfeld-2",
    "lernfeld-3",
    "lernfeld-4",
    "lernfeld-5",
    "lernfeld-6",
    "lernfeld-7",
    "lernfeld-8",
    "lernfeld-9",
    "lernfeld-10a",
    "lernfeld-10b",
    "lernfeld-10c",
    "lernfeld-10d",
    "lernfeld-11a",
    "lernfeld-11b",
    "lernfeld-11d",
    "lernfeld-12a",
    "lernfeld-12b",
    "lernfeld-12d",
  ];

  if (!validCategories.includes(category)) {
    notFound();
  }

  // Build navigation tree for this category
  const docTree = buildDocsTreeForCategory(category);

  const convertToNavNode = (node: DocNode, basePath: string): DocsNavNode => {
    const href = `${basePath}/${node.path}`;

    if (node.type === "dir") {
      return {
        id: node.path,
        type: "dir",
        name: node.name,
        href,
        children: node.children.map((child: DocNode) =>
          convertToNavNode(child, basePath)
        ),
      };
    }

    return {
      id: node.path,
      type: "file",
      name: node.name,
      href,
    };
  };

  const nodes = docTree.map((node) =>
    convertToNavNode(node, `/lernfeld/${category}`)
  );

  // If only category is provided, show category overview
  if (slug.length === 1) {
    // Show category overview with all top-level items
    const sortedNodes = [...nodes].sort((a, b) => {
      // First, group by type (directories before files)
      if (a.type !== b.type) {
        return a.type === "dir" ? -1 : 1;
      }
      // Then sort naturally by name
      return naturalSort(a.name, b.name);
    });

    return (
      <FeldPersistentDrawer nodes={nodes}>
        <Box
          sx={{
            py: 4,
            px: { xs: 2, sm: 3, md: 4 },
            maxWidth: "lg",
            mx: "auto",
          }}
        >
          <Typography variant="h3" component="h1" gutterBottom>
            {formatLabel(category)}
          </Typography>

          <Box
            sx={{
              display: "grid",
              gridTemplateColumns: {
                xs: "1fr",
                sm: "repeat(2, 1fr)",
                md: "repeat(3, 1fr)",
              },
              gap: 3,
              mt: 3,
            }}
          >
            {sortedNodes.map((child) => (
              <Card
                key={child.id}
                component={Link}
                href={child.href}
                sx={{
                  height: "100%",
                  textDecoration: "none",
                  transition: "transform 0.2s, box-shadow 0.2s",
                  "&:hover": {
                    transform: "translateY(-4px)",
                    boxShadow: 4,
                  },
                }}
              >
                <CardContent>
                  <Box sx={{ display: "flex", alignItems: "center", mb: 2 }}>
                    {child.type === "dir" ? (
                      <FolderIcon color="primary" sx={{ mr: 1 }} />
                    ) : (
                      <ArticleIcon color="primary" sx={{ mr: 1 }} />
                    )}
                    <Typography variant="h6" component="h2">
                      {formatLabel(child.name)}
                    </Typography>
                  </Box>
                  {child.type === "dir" && child.children && (
                    <Typography variant="body2" color="text.secondary">
                      {child.children.length}{" "}
                      {child.children.length === 1 ? "Element" : "Elemente"}
                    </Typography>
                  )}
                </CardContent>
              </Card>
            ))}
          </Box>
        </Box>
      </FeldPersistentDrawer>
    );
  }

  // Read the document using the remaining slug segments
  const docSegments = slug.slice(1);

  // First, try to find if this is a directory node
  const findNode = (
    nodes: DocsNavNode[],
    segments: string[]
  ): DocsNavNode | null => {
    if (segments.length === 0) return null;

    const [first, ...rest] = segments;
    const node = nodes.find(
      (n) => n.name.toLowerCase() === first.toLowerCase()
    );

    if (!node) return null;
    if (rest.length === 0) return node;
    if (node.type === "dir") {
      return findNode(node.children, rest);
    }
    return null;
  };

  const dirNode = findNode(nodes, docSegments);

  // If it's a directory with children, always show card view
  if (dirNode && dirNode.type === "dir" && dirNode.children.length > 0) {
    // Sort children: directories first, then files, both in natural order
    const sortedChildren = [...dirNode.children].sort((a, b) => {
      // First, group by type (directories before files)
      if (a.type !== b.type) {
        return a.type === "dir" ? -1 : 1;
      }
      // Then sort naturally by name
      return naturalSort(a.name, b.name);
    });

    return (
      <FeldPersistentDrawer nodes={nodes}>
        <Box
          sx={{
            py: 4,
            px: { xs: 2, sm: 3, md: 4 },
            maxWidth: "lg",
            mx: "auto",
          }}
        >
          <Typography variant="h3" component="h1" gutterBottom>
            {formatLabel(dirNode.name)}
          </Typography>

          <Box
            sx={{
              display: "grid",
              gridTemplateColumns: {
                xs: "1fr",
                sm: "repeat(2, 1fr)",
                md: "repeat(3, 1fr)",
              },
              gap: 3,
              mt: 3,
            }}
          >
            {sortedChildren.map((child) => (
              <Card
                key={child.id}
                component={Link}
                href={child.href}
                sx={{
                  height: "100%",
                  textDecoration: "none",
                  transition: "transform 0.2s, box-shadow 0.2s",
                  "&:hover": {
                    transform: "translateY(-4px)",
                    boxShadow: 4,
                  },
                }}
              >
                <CardContent>
                  <Box sx={{ display: "flex", alignItems: "center", mb: 2 }}>
                    {child.type === "dir" ? (
                      <FolderIcon color="primary" sx={{ mr: 1 }} />
                    ) : (
                      <ArticleIcon color="primary" sx={{ mr: 1 }} />
                    )}
                    <Typography variant="h6" component="h2">
                      {formatLabel(child.name)}
                    </Typography>
                  </Box>
                  {child.type === "dir" && child.children && (
                    <Typography variant="body2" color="text.secondary">
                      {child.children.length}{" "}
                      {child.children.length === 1 ? "Element" : "Elemente"}
                    </Typography>
                  )}
                </CardContent>
              </Card>
            ))}
          </Box>
        </Box>
      </FeldPersistentDrawer>
    );
  }

  // If not a directory, try to read as a markdown file
  const doc = readDoc(category, docSegments);

  if (!doc) {
    notFound();
  }

  const currentHref =
    dirNode && dirNode.type === "file"
      ? dirNode.href
      : `/lernfeld/${[category, ...docSegments].join("/")}`;
  const pagination = getDocPagination(nodes, currentHref);
  const hasPagination = Boolean(pagination.previous || pagination.next);

  // Display markdown content with navigation drawer
  return (
    <FeldPersistentDrawer nodes={nodes}>
      <Box
        sx={{ py: 4, px: { xs: 2, sm: 3, md: 4 }, maxWidth: "lg", mx: "auto" }}
      >
        <Box
          sx={{
            mt: 0,
            "& h1": { mt: 0, mb: 2, fontSize: "2.5rem", fontWeight: 700 },
            "& h2": { mt: 3, mb: 2, fontSize: "2rem", fontWeight: 600 },
            "& h3": { mt: 2, mb: 1.5, fontSize: "1.5rem", fontWeight: 600 },
            "& h4": { mt: 2, mb: 1, fontSize: "1.25rem", fontWeight: 600 },
            "& p": { mb: 2, lineHeight: 1.7 },
            "& ul, & ol": { mb: 2, pl: 4 },
            "& li": { mb: 1 },
            "& code": {
              px: 1,
              py: 0.5,
              borderRadius: 1,
              bgcolor: "action.hover",
              fontFamily: "monospace",
            },
            "& pre": {
              p: 2,
              borderRadius: 1,
              bgcolor: "action.hover",
              overflow: "auto",
              "& code": { p: 0, bgcolor: "transparent" },
            },
            "& blockquote": {
              borderLeft: 4,
              borderColor: "primary.main",
              pl: 2,
              ml: 0,
              fontStyle: "italic",
              color: "text.secondary",
            },
            "& table": {
              width: "100%",
              borderCollapse: "collapse",
              mb: 2,
            },
            "& th, & td": {
              border: 1,
              borderColor: "divider",
              p: 1.5,
              textAlign: "left",
            },
            "& th": {
              bgcolor: "action.hover",
              fontWeight: 600,
            },
          }}
          // Rendering precompiled HTML from markdown. If you see hydration
          // mismatch warnings here, prefer rendering the markdown on the server
          // and passing the HTML unchanged to the client. Suppress the warning
          // for now to avoid noisy console output during hydration.
          suppressHydrationWarning
          dangerouslySetInnerHTML={{ __html: doc.html || "" }}
        />

        {hasPagination && (
          <Box sx={{ mt: 6 }}>
            <Divider sx={{ mb: 3 }} />
            <Box
              sx={{
                display: "flex",
                flexDirection: { xs: "column", md: "row" },
                gap: 3,
              }}
            >
              {pagination.previous && (
                <Button
                  component={Link}
                  href={pagination.previous.href}
                  variant="outlined"
                  startIcon={<ArrowBackIosNewIcon fontSize="small" />}
                  sx={{
                    flex: 1,
                    justifyContent: "flex-start",
                    textAlign: "left",
                    alignItems: "center",
                    px: 2,
                    py: 1.5,
                  }}
                >
                  <Box sx={{ display: "grid", gap: 0.5 }}>
                    <Typography
                      variant="caption"
                      sx={{ textTransform: "uppercase", letterSpacing: 1 }}
                    >
                      Zurück
                    </Typography>
                    <Typography variant="body1" sx={{ fontWeight: 600 }}>
                      {formatLabel(pagination.previous.name)}
                    </Typography>
                  </Box>
                </Button>
              )}

              {pagination.next && (
                <Button
                  component={Link}
                  href={pagination.next.href}
                  variant="contained"
                  endIcon={<ArrowForwardIosIcon fontSize="small" />}
                  sx={{
                    flex: 1,
                    justifyContent: "flex-end",
                    textAlign: "right",
                    alignItems: "center",
                    px: 2,
                    py: 1.5,
                    ml: { md: "auto" },
                  }}
                >
                  <Box sx={{ display: "grid", gap: 0.5 }}>
                    <Typography
                      variant="caption"
                      sx={{ textTransform: "uppercase", letterSpacing: 1 }}
                    >
                      Weiter
                    </Typography>
                    <Typography variant="body1" sx={{ fontWeight: 600 }}>
                      {formatLabel(pagination.next.name)}
                    </Typography>
                  </Box>
                </Button>
              )}
            </Box>
          </Box>
        )}
      </Box>
    </FeldPersistentDrawer>
  );
}
