import { fragen as fragenFIAE } from "@/constants/fragenFIAE";
import { fragen as fragenFISI } from "@/constants/fragenFISI";
import { fragen as fragenWISO } from "@/constants/fragenWISO";
import { fragen as fragenAP1 } from "@/constants/fragenAP1";

import type { Karte } from "@/types/question";

export const QUESTIONS_PER_KARTE = 25;

export type QuestionTrack = "WISO" | "FIAE" | "FISI" | "AP1";

export type QuestionTrackMeta = {
  id: QuestionTrack;
  slug: string;
  label: string;
  longTitle: string;
  description: string;
};

type FragenModule = { default?: Karte[] } | Karte[];

function ensureArray(moduleValue: FragenModule): Karte[] {
  if (Array.isArray(moduleValue)) {
    return moduleValue;
  }

  const candidate = moduleValue?.default;
  return Array.isArray(candidate) ? candidate : [];
}

const QUESTION_SETS: Record<QuestionTrack, Karte[]> = {
  WISO: ensureArray(fragenWISO as FragenModule),
  FIAE: ensureArray(fragenFIAE as FragenModule),
  FISI: ensureArray(fragenFISI as FragenModule),
  AP1: ensureArray(fragenAP1 as FragenModule),
};

export const QUESTION_TRACKS: QuestionTrackMeta[] = [
  {
    id: "WISO",
    slug: "wiso",
    label: "fragenWISO",
    longTitle: "Wirtschafts- und Sozialkunde (WISO)",
    description: "Betriebswirtschaftliche Grundlagen, Recht und Sozialkunde.",
  },
  {
    id: "FIAE",
    slug: "fiae",
    label: "fragenFIAE",
    longTitle: "Fachinformatiker:in Anwendungsentwicklung (FIAE)",
    description: "Softwareentwicklung, Architektur, Qualitätssicherung.",
  },
  {
    id: "FISI",
    slug: "fisi",
    label: "fragenFISI",
    longTitle: "Fachinformatiker:in Systemintegration (FISI)",
    description: "Infrastruktur, Netzwerke, Administration und Automatisierung.",
  },
  {
    id: "AP1",
    slug: "ap1",
    label: "fragenAP1",
    longTitle: "Fachinformatiker:in  (AP1)",
    description: "Einrichten eines IT-gestützten Arbeitsplatzes (AP1).",
  },
];

const TRACK_BY_SLUG = new Map<string, QuestionTrack>();
for (const meta of QUESTION_TRACKS) {
  TRACK_BY_SLUG.set(meta.slug, meta.id);
  TRACK_BY_SLUG.set(meta.label.toLowerCase(), meta.id);
}

export function resolveTrack(value: string | undefined): QuestionTrack | null {
  if (!value) return null;
  const normalized = value.toLowerCase();
  if (TRACK_BY_SLUG.has(normalized)) {
    return TRACK_BY_SLUG.get(normalized) ?? null;
  }

  const upper = value.toUpperCase();
  return (["WISO", "FIAE", "FISI", "AP1"] as const).find(
    (entry) => entry === upper
  ) ?? null;
}

export function getTrackMeta(track: QuestionTrack): QuestionTrackMeta {
  const meta = QUESTION_TRACKS.find((entry) => entry.id === track);
  if (!meta) {
    throw new Error(`Unknown track: ${track}`);
  }
  return meta;
}

export function getQuestions(track: QuestionTrack): Karte[] {
  return QUESTION_SETS[track] ?? [];
}

export function getQuestionCount(track: QuestionTrack): number {
  return getQuestions(track).length;
}

export function getTotalKarten(track: QuestionTrack): number {
  const totalQuestions = getQuestionCount(track);
  return totalQuestions > 0
    ? Math.ceil(totalQuestions / QUESTIONS_PER_KARTE)
    : 0;
}

export function getQuestionsForKarte(
  track: QuestionTrack,
  karteNumber: number
): Karte[] {
  if (karteNumber < 1) return [];

  const questions = getQuestions(track);
  if (questions.length === 0) return [];

  const startIndex = (karteNumber - 1) * QUESTIONS_PER_KARTE;
  if (startIndex >= questions.length) return [];

  const endExclusive = Math.min(
    startIndex + QUESTIONS_PER_KARTE,
    questions.length
  );
  return questions.slice(startIndex, endExclusive);
}

export function getQuestionRangeForKarte(track: QuestionTrack, karte: number) {
  const questions = getQuestions(track);
  if (questions.length === 0 || karte < 1) {
    return { startIndex: 0, endIndex: 0, total: questions.length };
  }

  const startIndex = (karte - 1) * QUESTIONS_PER_KARTE;
  const endIndex = Math.min(startIndex + QUESTIONS_PER_KARTE, questions.length);

  return {
    startIndex: Math.min(startIndex, questions.length),
    endIndex: Math.max(endIndex - 1, startIndex),
    total: questions.length,
  };
}

export type IndexedQuestion = Karte & {
  track: QuestionTrack;
  trackSlug: string;
  questionNumber: number;
  karteNumber: number;
};

export const INDEXED_QUESTIONS: IndexedQuestion[] = QUESTION_TRACKS.flatMap(
  (meta) => {
    const questions = getQuestions(meta.id);
    return questions.map((question, index) => ({
      ...question,
      track: meta.id,
      trackSlug: meta.slug,
      questionNumber: index + 1,
      karteNumber: Math.floor(index / QUESTIONS_PER_KARTE) + 1,
    }));
  }
);
