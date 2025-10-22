import React from "react";
import Link from "next/link";
import { Box, Container, Typography, Card, CardContent } from "@mui/material";
import FolderIcon from "@mui/icons-material/Folder";

const categories = [
  {
    id: "lernfeld-1",
    title: "Lernfeld 1",
    description: "Das Unternehmen und die eigene Rolle im Betrieb beschreiben",
  },
  {
    id: "lernfeld-2",
    title: "Lernfeld 2",
    description: "Arbeitsplätze nach Kundenwunsch ausstatten",
  },
  {
    id: "lernfeld-3",
    title: "Lernfeld 3",
    description: "Clients in Netzwerke einbinden",
  },
  {
    id: "lernfeld-4",
    title: "Lernfeld 4",
    description: "Schutzbedarfsanalyse im eigenen Arbeitsbereich durchführen",
  },
  {
    id: "lernfeld-5",
    title: "Lernfeld 5",
    description: "Software zur Verwaltung von Daten anpassen",
  },
  {
    id: "lernfeld-6",
    title: "Lernfeld 6",
    description: "Serviceanfragen bearbeiten",
  },
  {
    id: "lernfeld-7",
    title: "Lernfeld 7",
    description: "Cyber-physische Systeme ergänzen",
  },
  {
    id: "lernfeld-8",
    title: "Lernfeld 8",
    description: "Daten systemübergreifend bereitstellen",
  },
  {
    id: "lernfeld-9",
    title: "Lernfeld 9",
    description: "Netzwerke und Dienste bereitstellen",
  },
  {
    id: "lernfeld-10a",
    title: "Lernfeld 10a",
    description: "Benutzerschnittstellen gestalten und entwickeln",
  },
  {
    id: "lernfeld-10b",
    title: "Lernfeld 10b → FISI",
    description: "Serverdienste bereitstellen und Administrationsaufgaben automatisieren",
  },
  {
    id: "lernfeld-10c",
    title: "Lernfeld 10c",
    description: "Werkzeuge des maschinellen Lernens einsetzen",
  },
  {
    id: "lernfeld-10d",
    title: "Lernfeld 10d → FISI",
    description: "Cyber-physische Systeme entwickeln",
  },
  {
    id: "lernfeld-11a",
    title: "Lernfeld 11a",
    description: "Funktionalität in Anwendungen realisieren",
  },
  {
    id: "lernfeld-11b",
    title: "Lernfeld 11b → FISI",
    description: "Betrieb und Sicherheit vernetzter Systeme gewährleisten",
  },
  {
    id: "lernfeld-11d",
    title: "Lernfeld 11d → FISI",
    description: "Betrieb und Sicherheit vernetzter Systeme gewährleisten (Lernfeld 11d)",
  },
  {
    id: "lernfeld-12a",
    title: "Lernfeld 12a",
    description: "Kundenspezifische Anwendungsentwicklung durchführen",
  },
  {
    id: "lernfeld-12b",
    title: "Lernfeld 12b → FISI",
    description: "Kundenspezifische Systemintegration durchführen",
  },
    {
    id: "lernfeld-12d",
    title: "Lernfeld 12d → FISI",
    description: "Kundenspezifische Systemintegration durchführen",
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
          Wählen Sie einen Bereich aus, um den Teil anzuzeigen.
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
              href={`/lernfeld/${cat.id}`}
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
