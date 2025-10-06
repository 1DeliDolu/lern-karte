# Lernkarte AP2 - IHK Prüfungsvorbereitung

Dieses Repository enthält eine Next.js-Anwendung, die speziell für die Vorbereitung auf die IHK-Abschlussprüfung (Fachinformatiker:innen Anwendungsentwicklung, Teil AP2) entwickelt wurde. Das Projekt kombiniert digitale Karteikarten mit einer umfangreichen Dokumentationssammlung zu den relevanten Lernfeldern.

## Kernfunktionen
- **Karteikarten-Training**: Die Seite `/lern/[karte]` präsentiert bis zu 25 Fragen pro Karteikarte aus `src/constants/fragen.ts`, inklusive deutscher und türkischer Formulierungen.
- **Dynamische Navigation**: Persistente MUI-Navigationsleisten für Karteikarten, Dokumentation (`/docs`) und Lernfelder (`/lernfeld`) sorgen für schnellen Zugriff und Breadcrumbs.
- **Markdown-Dokumentation**: Umfangreiche Inhalte aus `src/teils` (AP-Teile) und `src/lernfeld` (Lernfelder) werden per `lib/doc-finder.ts` strukturiert, inklusive Fallback- und Fuzzy-Matching.
- **Stil & UX**: Material UI 7, Emotion und ein maßgeschneidertes Theme (siehe `src/theme/theme.ts`) liefern eine moderne Oberfläche; `ThemeRegistry` integriert den App Router Cache.
- **Mehrsprachiger Fokus**: Utils wie `splitByKeywords` und `insertNewlinesOnGorunce` heben Schlüsselbegriffe hervor und strukturieren türkische Texte.

## Technologiestack
- [Next.js 15](https://nextjs.org/) (App Router, React 19)
- [Material UI 7](https://mui.com/) mit Emotion
- Tailwind CSS 4 (Typography Plug-in für Markdown)
- Markdown-Verarbeitung mit `gray-matter`, `marked` und `remark-gfm`
- TypeScript, ESLint 9

## Projektstruktur (Auszug)
```
.
├─ lernkarte/                  # Next.js App (dieser Ordner ist das eigentliche Projekt)
│  ├─ src/
│  │  ├─ app/                  # Routen: Home, Karteikarten, Docs, Lernfelder
│  │  ├─ components/           # UI-Komponenten (Drawer, Accordions, Navigation, Footer)
│  │  ├─ constants/fragen.ts   # Fragenkatalog (DE/TR)
│  │  ├─ lernfeld/             # Markdown-Inhalte zu Lernfeldern
│  │  ├─ lib/                  # Doc-Finder, Fragen-Helper
│  │  ├─ teils/                # Dokumentation der Prüfungsteile
│  │  └─ utils/                # Text-Hilfsfunktionen & Formatierung
│  ├─ public/                  # Assets wie `globe.svg`
│  └─ scripts/                 # Hilfsskripte (z. B. `checkDoc.js`)
└─ README.md                   # Dieses Dokument
```

## Voraussetzungen
- Node.js ≥ 18.18 (Empfehlung: 20 LTS)
- npm (oder ein kompatibler Package-Manager)

## Installation & Entwicklung
```bash
cd lernkarte
npm install
npm run dev
```
- Die Entwicklungsumgebung startet per Turbopack unter `http://localhost:3000`.
- Für Produktions-Builds: `npm run build` und anschließend `npm start`.

## Wichtige Skripte
- `npm run dev` – Development-Server
- `npm run build` – Produktions-Build (Turbopack)
- `npm run start` – Startet den mit `build` erzeugten Output
- `npm run lint` – Führt ESLint 9 mit Next.js-Config aus
- `node scripts/checkDoc.js` – Beispielskript zum Parsen einer Markdown-Datei

## Inhalte pflegen
- **Fragen & Karteikarten**: `src/constants/fragen.ts` enthält ein Array von `Karte`-Einträgen. Über `QUESTIONS_PER_KARTE` in `src/lib/questions.ts` wird die Gruppierung gesteuert.
- **Dokumentation (Teile)**: Markdown-Dateien unter `src/teils/<teil>/<…>.md`. Die Struktur wird automatisch eingelesen und in `/docs` dargestellt.
- **Lernfelder**: Inhalte unter `src/lernfeld/<lernfeld>/<…>.md`. Die Seite `/lernfeld` erzeugt Cards pro Lernfeld und nutzt dieselbe Doc-Finder-Logik.
- **Navigation**: `Navigation.tsx` steuert sichtbare Menüpunkte, Drawer-Konfigurationen stehen in `DocsPersistentDrawer.tsx` und `FeldPersistentDrawer.tsx`.

## Anpassungen & Erweiterungen
- Passe Metadaten in `src/app/layout.tsx` (Titel, Beschreibung) an.
- Ersetze Platzhalter in `src/components/Footer.tsx` durch echte Impressumsdaten.
- Ergänze eigene Utils oder Layout-Komponenten unter `src/components`.
- Für weitere Frage-Sets oder Sprachen kannst du `Karte` in `src/types/question.ts` erweitern.

## Lizenz
Die Anwendung wird unter der MIT-Lizenz bereitgestellt (siehe `LICENSE`).
