import { fragen } from "@/constants/fragen";

import type { Karte } from "@/types/question";

// Generate 202 placeholder questions. Replace with real content as needed.
// Use the questions imported from src/constants/fragen.ts.
// Support both default and named exports and ensure the type matches.
type FragenModule = { default?: Karte[] } | Karte[];
const _fragenModule = fragen as FragenModule;
const _fragen =
  (_fragenModule as { default?: Karte[] })?.default ?? _fragenModule;
export const QUESTIONS: Karte[] = Array.isArray(_fragen)
  ? (_fragen as Karte[])
  : [];

export const QUESTIONS_PER_KARTE = 25;

export function getQuestionsForKarte(karteNumber: number) {
  const per = QUESTIONS_PER_KARTE;
  const total = QUESTIONS.length;
  if (karteNumber < 1) return [];
  const start = (karteNumber - 1) * per;
  // Last karte should include the remainder
  const end = karteNumber >= Math.ceil(total / per) ? total : start + per;
  return QUESTIONS.slice(start, Math.min(end, total));
}

export function getGlobalRangeForKarte(karteNumber: number) {
  const per = QUESTIONS_PER_KARTE;
  const total = QUESTIONS.length;
  const startIndex = (karteNumber - 1) * per;
  const endIndex = Math.min(startIndex + per, total) - 1;
  return { startIndex, endIndex };
}
