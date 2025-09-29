import React from 'react';
import { getQuestionsForKarte, QUESTIONS_PER_KARTE, QUESTIONS } from '@/lib/questions';
import { linesAfterInsertGorunce, splitByKeywords, splitByLeadingLabelColon } from '@/utils/utils';

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
    <div>
      <h2>Karte {karteNum} — Fragen {start}–{end} von {total}</h2>
      <div style={{ display: 'grid', gap: 12 }}>
        {slice.map((q, idx) => (
          <div key={idx} style={{ padding: 12, border: '1px solid #eee' }}>
            <strong>{start + idx}. </strong>
            <div>
              {linesAfterInsertGorunce(q.frageDE ?? '').map((line, i) => (
                <div key={i}>
                  {splitByLeadingLabelColon(line).map((part, k) => (
                    part.bold ? (
                      <strong key={k}>{part.text}</strong>
                    ) : (
                      // If not the leading label, further split by keywords
                      splitByKeywords(part.text, ['Vertraulichkeit', 'Integrität', 'Verfügbarkeit']).map((p, j) => (
                        p.bold ? <strong key={`${k}-${j}`}>{p.text}</strong> : <span key={`${k}-${j}`}>{p.text}</span>
                      ))
                    )
                  ))}
                </div>
              ))}
            </div>
            <div style={{ marginTop: 8 }}>
              {linesAfterInsertGorunce(q.antwortDE ?? '').map((line, i) => (
                <div key={i}>
                  {splitByLeadingLabelColon(line).map((part, k) => (
                    part.bold ? (
                      <strong key={k}>{part.text}</strong>
                    ) : (
                      splitByKeywords(part.text, ['Vertraulichkeit', 'Integrität', 'Verfügbarkeit']).map((p, j) => (
                        p.bold ? <strong key={`${k}-${j}`}>{p.text}</strong> : <span key={`${k}-${j}`}>{p.text}</span>
                      ))
                    )
                  ))}
                </div>
              ))}
            </div>
            <br />
            <strong>{start + idx}. </strong>
            {/* Use the utility to split TR text around 'görünce' markers and render lines */}
            <div>
              {linesAfterInsertGorunce(q.frageTR ?? '').map((line, i) => (
                <div key={i}>
                  {splitByKeywords(line, ['görünce', 'gorunce', 'Integrität']).map((p, j) => (
                    p.bold ? <strong key={j}>{p.text}</strong> : <span key={j}>{p.text}</span>
                  ))}
                </div>
              ))}
            </div>
            <div style={{ marginTop: 8 }}>
              {linesAfterInsertGorunce(q.antwortTR ?? '').map((line, i) => (
                <div key={i}>
                  {splitByKeywords(line, ['görünce', 'gorunce', 'Integrität']).map((p, j) => (
                    p.bold ? <strong key={j}>{p.text}</strong> : <span key={j}>{p.text}</span>
                  ))}
                </div>
              ))}
            </div>

          </div>
        ))}
      </div>
    </div>
  );
}
