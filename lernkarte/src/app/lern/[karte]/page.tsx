import React from 'react';
import KarteQuestionsAccordion from '@/components/KarteQuestionsAccordion';
import { getQuestionsForKarte, QUESTIONS, QUESTIONS_PER_KARTE } from '@/lib/questions';

type Props = {
  params: { karte: string };
};

export default async function KartePage({ params }: Props) {
  const awaitedParams = await params;
  const karteNum = parseInt(awaitedParams.karte, 10);

  if (Number.isNaN(karteNum) || karteNum < 1 || karteNum > 8) {
    return (
      <div>
        <h2>Ungültige Karte</h2>
        <p>Karte muss zwischen 1 und 8 liegen.</p>
      </div>
    );
  }

  const slice = getQuestionsForKarte(karteNum);
  const total = QUESTIONS.length;
  const start = (karteNum - 1) * QUESTIONS_PER_KARTE + 1;
  const end = start + slice.length - 1;

  return (
    <KarteQuestionsAccordion
      karteNum={karteNum}
      startIndex={start}
      endIndex={end}
      total={total}
      questions={slice}
    />
  );
}
