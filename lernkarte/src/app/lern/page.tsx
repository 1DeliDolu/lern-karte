"use client";

import React, { useState } from "react";
import Link from "next/link";
import { QUESTIONS, QUESTIONS_PER_KARTE } from "@/lib/questions";

export default function LernIndex() {
  const [track, setTrack] = useState<"FISI" | "FIAE" | null>(null);
  const maxPage = Math.max(
    1,
    Math.ceil(QUESTIONS.length / QUESTIONS_PER_KARTE)
  );
  const [page, setPage] = useState(1);

  function selectTrack(t: "FISI" | "FIAE") {
    setTrack(t);
    setPage(1);
  }

  return (
    <div style={{ padding: 20 }}>
      <h1>Lernkarten</h1>

      {!track ? (
        <div style={{ display: "flex", gap: 16 }}>
          <div
            role="button"
            onClick={() => selectTrack("FISI")}
            style={{
              padding: 20,
              border: "1px solid #ddd",
              borderRadius: 8,
              cursor: "pointer",
              width: 220,
            }}
          >
            <h3>FISI</h3>
            <p>Serverdienste, Administration und Automatisierung</p>
          </div>

          <div
            role="button"
            onClick={() => selectTrack("FIAE")}
            style={{
              padding: 20,
              border: "1px solid #ddd",
              borderRadius: 8,
              cursor: "pointer",
              width: 220,
            }}
          >
            <h3>FIAE</h3>
            <p>Anwendungsentwicklung und Integrationsaufgaben</p>
          </div>
        </div>
      ) : (
        <div>
          <div style={{ display: "flex", alignItems: "center", gap: 8 }}>
            <div style={{ flex: 1 }}>
              <Link href="/" style={{ textDecoration: "none" }}>
                <button style={{ padding: "8px 12px" }}>Ana sayfa</button>
              </Link>
            </div>

            <div style={{ display: "flex", justifyContent: "center", flex: 1 }}>
              <div style={{ display: "flex", gap: 8, alignItems: "center" }}>
                <button
                  onClick={() => setPage((p) => Math.max(1, p - 1))}
                  disabled={page <= 1}
                >
                  Prev
                </button>

                {Array.from({ length: maxPage }, (_, i) => i + 1).map((n) => (
                  <Link
                    key={n}
                    href={`/lern/${n}`}
                    style={{ textDecoration: "none" }}
                  >
                    <button
                      onClick={() => setPage(n)}
                      style={{ fontWeight: n === page ? "700" : "400" }}
                    >
                      {n}
                    </button>
                  </Link>
                ))}

                <button
                  onClick={() => setPage((p) => Math.min(maxPage, p + 1))}
                  disabled={page >= maxPage}
                >
                  Next
                </button>
              </div>
            </div>

            <div style={{ flex: 1 }} />
          </div>

          <div style={{ marginTop: 20 }}>
            <p>
              Seçilen kanal: <strong>{track}</strong>
            </p>
            <p>
              Gidilecek sayfa: <strong>{page}</strong> — linklere tıklayarak
              ilgili Karte sayfasına gidin.
            </p>
          </div>
        </div>
      )}
    </div>
  );
}
