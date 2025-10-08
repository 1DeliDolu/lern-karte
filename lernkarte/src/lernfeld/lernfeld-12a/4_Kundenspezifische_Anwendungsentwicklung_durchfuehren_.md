# 4 Kundenspezifische Anwendungsentwicklung durchführen [Seite: 254]

Die Lerneinheit behandelt die vollständige Durchführung kundenspezifischer Softwareprojekte: von Projektgrundlagen und -organisation über Planung, Umsetzung, Qualitätssicherung und Präsentation bis zur abschließenden Bewertung und Reflexion. Ziel ist, Aufträge strukturiert, wirtschaftlich und qualitätsgesichert umzusetzen. 

## 4.1 Basiswissen: Projekte & Projektmanagement

**Projekt** = einmaliges, zeitlich befristetes Vorhaben mit definiertem Anfang/Ende und Neuartigkeitsgrad; unterscheidet sich deutlich von **Routinearbeit**. Projekte werden zur Übersicht in **Projektphasen** gegliedert: Initiierung/Definition → Planung → Durchführung (parallel: **Projektkontrolle**) → Abschluss → Nutzung. Jede Phase hat spezifische Aufgaben (Kick-off, Ressourcen-/Qualitäts-/Risikoplanung, Realisierung, Überwachung, Abnahme, Abschlussbericht etc.). 

### 4.1.1 Projektmanagementstandards unterscheiden

* **ICB (IPMA Individual Competence Baseline)**: kompetenzbasierter, internationaler Standard inkl. Zertifizierung.
* **PMBOK (PMI)**: prozessorientierter Leitfaden (Inputs/Outputs/Tools), international verbreitet, ANSI/IEEE-Standard, oft 1. Wahl bei Großprojekten.
* **PRINCE2 (OGC)**: Standard der britischen Regierung, auch in DE verbreitet, weniger umfangreich als PMBOK/ICB, Zertifizierung möglich.
* **DIN 69901**: bildet PM-Tätigkeiten als Prozesse mit Wechselwirkungen ab. 

### 4.1.2 Projektorganisation in Unternehmen

**Projektinstanzen**: **Auftraggeber**, **Lenkungsausschuss**, **Projektleitung** (ggf. Teilprojektleitungen), **Projektteam**, **Stakeholder** (intern/extern). 

**Organisationsformen** (mit Einsatzbereichen, Stärken/Schwächen):

1. **Reine Projektorganisation** (autonom): klare Verantwortlichkeiten, hohe Identifikation, aber hoher Ressourcenbedarf.
2. **Matrixprojektorganisation**: Mitarbeitende bleiben in Abteilungen (flexible Ressourcennutzung), jedoch Prioritäts-/Konfliktpotenzial.
3. **Stabsprojektorganisation**: schnelle Einrichtung ohne Linienänderung; Projektleitung koordiniert ohne Weisungsrecht → hoher Abstimmungsaufwand.
   Vor-/Nachteile sind systematisch gegenübergestellt. 

---

## 4.2 Kundenaufträge planen und bearbeiten (Praxisfokus)

Die Bearbeitung erfolgt als Projekt (auch Teilprojekt). Beispielprojekt: **„Yachthafen Resort – Fitnesskursverwaltung“** (Datenbankbasierte Kursverwaltung inkl. UI, Integration in bestehende DB/CI). 

### 4.2.1 Zielsetzung/Anforderungen erfassen

Vorgehen: **Ist-Analyse** (ggf. **UML**), **Schwachstellenanalyse**, Ableitung **funktionaler** und **nichtfunktionaler Anforderungen** (z. B. **Benutzbarkeit**, **Effizienz**, **Änderbarkeit/Wartbarkeit**, **Übertragbarkeit**) und **Qualitätsmerkmale** (interne vs. externe Qualität) in Dokumenten wie **Lastenheft**. Zusätzlich: **Projektumfeld** (Auftraggeber, Ziele, Abgrenzung, Begründung, Zeit/Kostenrahmen). Beispielhafte Anforderungen und CI-Vorgaben sind aufgeführt. 

### 4.2.2 Projekt planen & Wirtschaftlichkeit beurteilen

**(1) Projektablauf planen**

* Auswahl **Vorgehensmodell** (z. B. Wasserfall, Spiralmodell, Serum, Kanban, testgetriebene Entwicklung).
* Erstellung **Projektablaufplan** (tabellarisch/Netzplan/**Gantt** oder agiles Artefakt wie **Burndown-Chart**): Vorteile sind realistische Zeitplanung (**Meilensteine**), Abhängigkeits- und Zuständigkeitsklarheit, Transparenz und Motivation. 

**(2) Ressourcenplanung**

* **Personalressourcen** (Know-how, Verfügbarkeit, Überlastung vermeiden; ggf. Organisationsform wählen).
* **Finanzressourcen** (Personal-/Sach-/Reise-/Schulungskosten etc.).
* **Materielle Ressourcen** (Hard-/Software, Lizenzen; anteilige Zuordnung). 

**(3) Wirtschaftlichkeit**

* **Wirtschaftlichkeit** = Verhältnis **Aufwand/Nutzen**; Ziel: hoher Nutzen bei geringem Aufwand.
* **Dreieck**: **Zeit – Kosten – Qualität** beeinflussen sich gegenseitig.
* **Kostenermittlung** (einfach): *Gesamtkosten = Zeitaufwand · Stundensatz*; differenziert nach **Kostenarten** (Personal, Hardware, Software, Energie, Fremdleistungen).
* **Ergebnis** = **Ertrag – Kosten**;
  **Rentabilität** = *(Gewinn/Kapitaleinsatz)·100 %*;
  **Amortisationsdauer** = *Investition / regelmäßiger Gewinn*. 

**(4) Projektrisiken bewerten**

* Risikoarten: **personell**, **zeitlich/finanziell**, **technologisch**, **organisatorisch**.
* Bewertung über **Wahrscheinlichkeit (1–5)**, **Schadenspotenzial (1–5)**, **Risikokennziffer** = *Wahrscheinlichkeit · Schadenspotenzial* (Ampelbereiche).
* Einbettung: als eigene Phase oder als paralleles **Risikomanagement** (bei agil z. B. Items im **Product Backlog**, regelmäßige Kommunikation senkt organisatorische/soziale Risiken; frühe Umsetzung kritischer Aufgaben, Burn-Down-Charts zur Termineinhaltung). 

### 4.2.3 Projekt durchführen

Festlegung **Softwarearchitektur**, Erarbeitung **Lösungsvarianten** und Umsetzung der relevanten Bereiche:

* **Datenverwaltung**: Datenquellen, Qualität, **DBMS**-Auswahl, **ERM** → relationales Modell, Formate (**CSV/JSON/XML**) und Implementierung.
* **Benutzerschnittstelle**: UI-Art, **Wireframes/Mockups**, **Usability**-Richtlinien, **Corporate Design**/Barrierefreiheit, Framework-/Bibliothekswahl, Implementierung.
* **Funktionalität**: Datenstrukturen, Sprache, **Module/Schnittstellen** (z. B. **UML**), **Entwurfsmuster**, Implementierung.
  Beispiel „Fitnesskursverwaltung“: ERM und normalisiertes relationales Schema (z. B. **Teilnehmer**, **Kurs**, **Trainer**, **Ort**; m:n-Relation **Kursteilnehmer**). 

### 4.2.4 Softwarelösung testen & dokumentieren

**Testen**: **Teststufen** (Unit/Integration/System), **Verfahren** (z. B. Review, Black-Box), Automatismen vs. manuell, **Testdaten**, **Abnahmetest**; **Planung/Durchführung/Ergebnisse** (Protokolle).
**Dokumentation** (Entwicklung & Nutzung):

* **Projektdokumentation** (Auftrag, Plan, Ressourcen/Ablauf, Wirtschaftlichkeit, Risiko, Lasten-/Pflichtenheft, Abschlussbericht).
* **Systemdokumentation** (Architektur, Algorithmen, **Entwurfsmuster**, Schnittstellen, Datenmodelle, Sicherheit, Versionierung).
* **Testdokumentation** (Testpläne/-fälle, Berichte, Abnahme).
* **Benutzerdokumente**: **Benutzerhandbuch** (Funktionen, UI-Elemente, Beispiele, Fehlverhalten/Support), **Installationsanleitung** (Voraussetzungen, Installation/Update), **Schulungs-/Marketingunterlagen**. 

### 4.2.5 Softwarelösung präsentieren

Adressatengerechte **15-Minuten**-Präsentation (Prüfungskontext):
**Struktur**

1. **Einstieg**: Projektumfeld, Thema, Ist-Analyse.
2. **Hauptteil**: Ziele, Anforderungsspezifikation (Soll/Qualität), Planung (Ressourcen, Wirtschaftlichkeit, Risiko, Zeit), Umsetzung (Architektur, Daten-/UI-/Funktionalität), Tests/Dokumentation, Ergebnis (kurze Demo).
3. **Ausstieg**: Zielerreichung, Kundenakzeptanz, Weiterführung, **Lessons Learned**, Ausblick.
   **Gestaltungshinweise**: Stichwörter statt Fließtext, wenige **Bilder/Diagramme** groß darstellen, Schrift ≥ 24 pt, CI beachten, **6×6-Regel**, hoher Kontrast, serifenlose Schriften, sparsame Hervorhebungen. **Sprachlich**: Lautstärke/Tempo/Tonhöhe/Lautstärke variieren, **Sprechpausen**, deutliche Betonung/Artikulation; **Körpersprache** üben (Blickkontakt, Hände, Stand). **Typische Fehler**: zu lange Firmenvorstellung, unklare Ziele/Eigenleistung, zu viel Text, Zeitüberzug, fehlende Wirtschaftlichkeit/Technikdetails/Vorgehen, kleine Schrift, Vorlesen, kein Blickkontakt, monotone Stimme. Bewertungsaspekte (Aufbau/Logik, Sprache/Stil, Zielgruppenbezug/Medieneinsatz) sind tabellarisch spezifiziert. 

### 4.2.6 Projektergebnis bewerten & Projektdurchführung reflektieren

**Projektabschluss**: Abnahme/Übergabe, **Abschlussbericht**, **Reflexion**, **Archivierung**, **Wertschätzung/Teamauflösung**. **Reflexionsfragen** u. a.: Zielerreichung, Kundenzufriedenheit, Eignung Vorgehensmodell, Wirtschaftlichkeit, Qualität der Risikoanalyse, Eignung Sprache/IDE/Framework, Teamkommunikation/-probleme, Planungsqualität/Abweichungen, Testtiefe/-probleme, Vollständigkeit der Dokumentation. Erkenntnisse dienen der **Prozessverbesserung**. 

---

### Kerntakeaways (kompakt)

* **Struktur** schafft Übersicht: Phasen, Standards, Organisation klar wählen.
* **Anforderungen & Qualität** sauber spezifizieren (funktional/nichtfunktional, interne/externe Qualität).
* **Planung**: Ablauf, Ressourcen, **Wirtschaftlichkeit** (Formeln/Faktoren), **Risiken** (Risikokennziffer) systematisch behandeln.
* **Umsetzung**: Architektur → Daten/UI/Funktionalität konsistent; Beispiel zeigt DB-Modellierung.
* **QS**: Testen & **Dokumentieren** vollständig.
* **Kommunikation**: **Präsentation** adressatengerecht; **Reflexion** zur kontinuierlichen Verbesserung. 
