import React from "react";
import Link from "next/link";
import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import FolderIcon from "@mui/icons-material/Folder";

import { QUESTION_TRACKS } from "@/lib/questions";

export default function LernIndexPage() {
  return (
    <Box>
      <Typography variant="h3" component="h1" gutterBottom>
        Lernkarten
      </Typography>
      <Typography variant="body1" color="text.secondary">
        Wählen Sie einen Bereich aus, um die passenden Lernkarten aufzurufen.
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
        {QUESTION_TRACKS.map((track) => (
          <Card
            key={track.id}
            component={Link}
            href={`/lern/${track.slug}`}
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
              <Box sx={{ display: "flex", alignItems: "center", mb: 2, gap: 1 }}>
                <FolderIcon color="primary" />
                <Typography variant="h5" component="h2">
                  {track.label}
                </Typography>
              </Box>
              <Typography variant="body2" color="text.secondary">
                {track.description}
              </Typography>
            </CardContent>
          </Card>
        ))}
      </Box>
    </Box>
  );
}
