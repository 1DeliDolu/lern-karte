import React from "react";
import Link from "next/link";
import { notFound } from "next/navigation";
import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";

import {
  resolveTrack,
  getTrackMeta,
  getTotalKarten,
  getQuestionCount,
  getQuestionRangeForKarte,
} from "@/lib/questions";

type TrackPageProps = {
  params: Promise<{ track: string }> | { track: string };
};

export default async function TrackPage({ params }: TrackPageProps) {
  const awaitedParams = await params;

  const track = resolveTrack(awaitedParams.track);
  if (!track) {
    notFound();
  }

  const meta = getTrackMeta(track);
  const totalKarten = getTotalKarten(track);
  const totalQuestions = getQuestionCount(track);

  if (totalKarten === 0) {
    return (
      <Box>
        <Typography variant="h4" component="h1" gutterBottom>
          {meta.longTitle}
        </Typography>
        <Typography variant="body1" color="text.secondary" paragraph>
          Für diesen Bereich sind derzeit keine Fragen hinterlegt.
        </Typography>
        <Typography component={Link} href="/lern" color="primary">
          Zur Übersicht
        </Typography>
      </Box>
    );
  }

  const karteNumbers = Array.from({ length: totalKarten }, (_, idx) => idx + 1);

  return (
    <Box>
      <Typography variant="overline" color="primary" fontWeight={600}>
        {meta.label}
      </Typography>
      <Typography variant="h4" component="h1" gutterBottom>
        {meta.longTitle}
      </Typography>
      <Typography variant="body1" color="text.secondary">
        {meta.description}
      </Typography>
      <Typography variant="body2" color="text.secondary" sx={{ mt: 1 }}>
        {totalQuestions} Fragen, verteilt auf {totalKarten} Karten.
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
        {karteNumbers.map((karteNumber) => {
          const range = getQuestionRangeForKarte(track, karteNumber);
          const start = Math.max(range.startIndex + 1, 1);
          const end = Math.max(range.endIndex + 1, start);

          return (
            <Card
              key={karteNumber}
              component={Link}
              href={`/lern/${meta.slug}/${karteNumber}`}
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
                <Typography variant="h5" component="h2" gutterBottom>
                  Karte {karteNumber}
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  Fragen {start}–{end}
                </Typography>
              </CardContent>
            </Card>
          );
        })}
      </Box>
    </Box>
  );
}
