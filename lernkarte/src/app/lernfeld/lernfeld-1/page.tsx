import React from "react";
import Link from "next/link";
import { Box, Container, Typography, Card, CardContent } from "@mui/material";
import FolderIcon from "@mui/icons-material/Folder";
import ArticleIcon from "@mui/icons-material/Article";
import { buildDocsTreeForCategory, DocNode } from "@/lib/feld-finder";
import FeldPersistentDrawer, {
  DocsNavNode,
} from "@/components/FeldPersistentDrawer";
import { formatLabel } from "@/utils/feld-format";

export default async function Teil1Page() {
  const docTree = buildDocsTreeForCategory("lernfeld-1");

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
    convertToNavNode(node, "/lernfeld/lernfeld-1")
  );

  return (
    <FeldPersistentDrawer nodes={nodes}>
      <Container maxWidth="lg">
        <Box sx={{ py: 4 }}>
          <Typography variant="h3" component="h1" gutterBottom>
            Lernfeld 1
          </Typography>
          <Typography variant="body1" color="text.secondary" component="p">
            Das Unternehmen und die eigene Rolle im Betrieb beschreiben
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
            {docTree.map((node) => (
              <Card
                key={node.path}
                component={Link}
                href={`/lernfeld/lernfeld-1/${node.path}`}
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
                    {node.type === "dir" ? (
                      <FolderIcon color="primary" sx={{ mr: 1 }} />
                    ) : (
                      <ArticleIcon color="primary" sx={{ mr: 1 }} />
                    )}
                    <Typography variant="h6" component="h2">
                      {formatLabel(node.name)}
                    </Typography>
                  </Box>
                  {node.type === "dir" && (
                    <Typography variant="body2" color="text.secondary">
                      {node.children.length}{" "}
                      {node.children.length === 1 ? "Element" : "Elemente"}
                    </Typography>
                  )}
                </CardContent>
              </Card>
            ))}
          </Box>
        </Box>
      </Container>
    </FeldPersistentDrawer>
  );
}
