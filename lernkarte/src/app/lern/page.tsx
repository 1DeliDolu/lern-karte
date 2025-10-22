import React from "react";
import Link from "next/link";
import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import CardActionArea from "@mui/material/CardActionArea";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import Divider from "@mui/material/Divider";
import FolderIcon from "@mui/icons-material/Folder";
import QuestionAnswerIcon from "@mui/icons-material/QuestionAnswer";
import ViewCarouselIcon from "@mui/icons-material/ViewCarousel";

import {
  QUESTION_TRACKS,
  getQuestionCount,
  getTotalKarten,
} from "@/lib/questions";

export default function LernIndexPage() {
  return (
    <Box>
      <Typography variant="h3" component="h1" gutterBottom>
        Lernkarte
      </Typography>
      <Typography variant="body1" color="text.secondary">
        Wählen Sie eine Lernkarten-Serie, um prüfungsrelevante Fragen für Ihren
        Schwerpunkt anzuzeigen.
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
        {QUESTION_TRACKS.map((track) => {
          const questionCount = getQuestionCount(track.id);
          const karteCount = getTotalKarten(track.id);

          return (
            <Card
              key={track.id}
              sx={{
                height: "100%",
                transition: "transform 0.2s, box-shadow 0.2s",
                "&:hover": {
                  transform: "translateY(-4px)",
                  boxShadow: 4,
                },
              }}
            >
              <CardActionArea
                component={Link}
                href={`/lern/${track.slug}`}
                sx={{ height: "100%", textAlign: "left" }}
              >
                <CardContent sx={{ display: "grid", gap: 2 }}>
                  <Box sx={{ display: "flex", alignItems: "center", gap: 1.5 }}>
                    <FolderIcon color="primary" />
                    <Typography variant="h5" component="h2">
                      {track.label}
                    </Typography>
                  </Box>
                  <Typography variant="body2" color="text.secondary">
                    {track.description}
                  </Typography>

                  <Divider />

                  <Box sx={{ display: "flex", flexDirection: "column", gap: 1 }}>
                    <Box
                      sx={{
                        display: "flex",
                        alignItems: "center",
                        gap: 1,
                        color: "text.secondary",
                      }}
                    >
                      <QuestionAnswerIcon fontSize="small" />
                      <Typography variant="body2">
                        {questionCount} Fragen
                      </Typography>
                    </Box>
                    <Box
                      sx={{
                        display: "flex",
                        alignItems: "center",
                        gap: 1,
                        color: "text.secondary",
                      }}
                    >
                      <ViewCarouselIcon fontSize="small" />
                      <Typography variant="body2">
                        {karteCount} Karten
                      </Typography>
                    </Box>
                  </Box>
                </CardContent>
              </CardActionArea>
            </Card>
          );
        })}
      </Box>
    </Box>
  );
}
