import React from "react";
import Link from "next/link";
import { notFound } from "next/navigation";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";

import KarteQuestionsAccordion from "@/components/KarteQuestionsAccordion";
import {
  resolveTrack,
  getTrackMeta,
  getTotalKarten,
  getQuestionsForKarte,
  getQuestionRangeForKarte,
} from "@/lib/questions";

type TrackKartePageProps = {
  params: Promise<{ track: string; karte: string }> | { track: string; karte: string };
};

export default async function TrackKartePage({ params }: TrackKartePageProps) {
  const awaitedParams = await params;

  const track = resolveTrack(awaitedParams.track);
  if (!track) {
    notFound();
  }

  const karteNum = Number.parseInt(awaitedParams.karte, 10);
  if (!Number.isFinite(karteNum)) {
    notFound();
  }

  const maxKarten = getTotalKarten(track);
  if (karteNum < 1 || karteNum > maxKarten) {
    notFound();
  }

  const questions = getQuestionsForKarte(track, karteNum);
  const range = getQuestionRangeForKarte(track, karteNum);
  const startIndex = range.startIndex + 1;
  const endIndex = Math.max(range.endIndex + 1, startIndex);
  const total = range.total;
  const meta = getTrackMeta(track);

  return (
    <Box sx={{ display: "grid", gap: 3 }}>
      <Box
        sx={{
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          flexWrap: "wrap",
          gap: 2,
        }}
      >
        <Box>
          <Typography variant="overline" color="primary" fontWeight={600}>
            {meta.label}
          </Typography>
          <Typography variant="subtitle1" fontWeight={600}>
            {meta.longTitle}
          </Typography>
        </Box>
        <Typography
          component={Link}
          href={`/lern/${meta.slug}`}
          color="primary"
          sx={{ textDecoration: "none", fontWeight: 600 }}
        >
          Zur Übersicht
        </Typography>
      </Box>

      <KarteQuestionsAccordion
        karteNum={karteNum}
        startIndex={Math.max(startIndex, 1)}
        endIndex={endIndex}
        total={total}
        questions={questions}
      />
    </Box>
  );
}
