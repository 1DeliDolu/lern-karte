import React from "react";
import Link from "next/link";
import { Box, Container, Typography, Card, CardContent } from "@mui/material";
import FolderIcon from "@mui/icons-material/Folder";

const categories = [
  {
    id: "teil-1",
    title: "Teil 1",
    description:
      "Informieren und Beraten, IT-Lösungen entwickeln, Qualitätssicherung, IT-Sicherheit",
  },
  {
    id: "teil-2",
    title: "Teil 2",
    description:
      "IT-Systeme betreiben, Speicherlösungen, Softwareanwendungen, Qualität sicherstellen",
  },
  {
    id: "teil-3",
    title: "Teil 3",
    description:
      "Berufsausbildung, Organisation, Sicherheit, Umweltschutz, Zusammenarbeit",
  },
];

export default function DocsPage() {
  return (
    <Container maxWidth="lg">
      <Box sx={{ py: 4 }}>
        <Typography variant="h3" component="h1" gutterBottom>
          Teil
        </Typography>
        <Typography variant="body1" color="text.secondary" component="p">
          Wählen Sie einen Bereich aus, um die Teil anzuzeigen.
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
            mt: 2,
          }}
        >
          {categories.map((cat) => (
            <Card
              key={cat.id}
              component={Link}
              href={`/docs/${cat.id}`}
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
                  <FolderIcon color="primary" sx={{ mr: 1 }} />
                  <Typography variant="h5" component="h2">
                    {cat.title}
                  </Typography>
                </Box>
                <Typography variant="body2" color="text.secondary">
                  {cat.description}
                </Typography>
              </CardContent>
            </Card>
          ))}
        </Box>
      </Box>
    </Container>
  );
}
