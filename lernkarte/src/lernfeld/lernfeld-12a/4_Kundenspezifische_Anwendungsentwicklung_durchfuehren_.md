# 4 Kundenspezifische Anwendungsentwicklung durchführen [Seite: 254]

Die Lerneinheit behandelt die vollständige Durchführung kundenspezifischer Softwareprojekte: von Projektgrundlagen und -organisation über Planung, Umsetzung, Qualitätssicherung und Präsentation bis zur abschließenden Bewertung und Reflexion. Ziel ist, Aufträge strukturiert, wirtschaftlich und qualitätsgesichert umzusetzen.

## 4.1 Basiswissen: Projekte & Projektmanagement

**Projekt** = einmaliges, zeitlich befristetes Vorhaben mit definiertem Anfang/Ende und Neuartigkeitsgrad; unterscheidet sich deutlich von **Routinearbeit**. Projekte werden zur Übersicht in **Projektphasen** gegliedert: Initiierung/Definition → Planung → Durchführung (parallel: **Projektkontrolle**) → Abschluss → Nutzung. Jede Phase hat spezifische Aufgaben (Kick-off, Ressourcen-/Qualitäts-/Risikoplanung, Realisierung, Überwachung, Abnahme, Abschlussbericht etc.).

### 4.1.1 Projektmanagementstandards unterscheiden

- **ICB (IPMA Individual Competence Baseline)**: kompetenzbasierter, internationaler Standard inkl. Zertifizierung.
- **PMBOK (PMI)**: prozessorientierter Leitfaden (Inputs/Outputs/Tools), international verbreitet, ANSI/IEEE-Standard, oft 1. Wahl bei Großprojekten.
- **PRINCE2 (OGC)**: Standard der britischen Regierung, auch in DE verbreitet, weniger umfangreich als PMBOK/ICB, Zertifizierung möglich.
- **DIN 69901**: bildet PM-Tätigkeiten als Prozesse mit Wechselwirkungen ab.

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

- Auswahl **Vorgehensmodell** (z. B. Wasserfall, Spiralmodell, Serum, Kanban, testgetriebene Entwicklung).
- Erstellung **Projektablaufplan** (tabellarisch/Netzplan/**Gantt** oder agiles Artefakt wie **Burndown-Chart**): Vorteile sind realistische Zeitplanung (**Meilensteine**), Abhängigkeits- und Zuständigkeitsklarheit, Transparenz und Motivation.

**(2) Ressourcenplanung**

- **Personalressourcen** (Know-how, Verfügbarkeit, Überlastung vermeiden; ggf. Organisationsform wählen).
- **Finanzressourcen** (Personal-/Sach-/Reise-/Schulungskosten etc.).
- **Materielle Ressourcen** (Hard-/Software, Lizenzen; anteilige Zuordnung).

**(3) Wirtschaftlichkeit**

- **Wirtschaftlichkeit** = Verhältnis **Aufwand/Nutzen**; Ziel: hoher Nutzen bei geringem Aufwand.
- **Dreieck**: **Zeit – Kosten – Qualität** beeinflussen sich gegenseitig.
- **Kostenermittlung** (einfach): _Gesamtkosten = Zeitaufwand · Stundensatz_; differenziert nach **Kostenarten** (Personal, Hardware, Software, Energie, Fremdleistungen).
- **Ergebnis** = **Ertrag – Kosten**;
  **Rentabilität** = _(Gewinn/Kapitaleinsatz)·100 %_;
  **Amortisationsdauer** = _Investition / regelmäßiger Gewinn_.

**(4) Projektrisiken bewerten**

- Risikoarten: **personell**, **zeitlich/finanziell**, **technologisch**, **organisatorisch**.
- Bewertung über **Wahrscheinlichkeit (1–5)**, **Schadenspotenzial (1–5)**, **Risikokennziffer** = _Wahrscheinlichkeit · Schadenspotenzial_ (Ampelbereiche).
- Einbettung: als eigene Phase oder als paralleles **Risikomanagement** (bei agil z. B. Items im **Product Backlog**, regelmäßige Kommunikation senkt organisatorische/soziale Risiken; frühe Umsetzung kritischer Aufgaben, Burn-Down-Charts zur Termineinhaltung).

### 4.2.3 Projekt durchführen

Festlegung **Softwarearchitektur**, Erarbeitung **Lösungsvarianten** und Umsetzung der relevanten Bereiche:

- **Datenverwaltung**: Datenquellen, Qualität, **DBMS**-Auswahl, **ERM** → relationales Modell, Formate (**CSV/JSON/XML**) und Implementierung.
- **Benutzerschnittstelle**: UI-Art, **Wireframes/Mockups**, **Usability**-Richtlinien, **Corporate Design**/Barrierefreiheit, Framework-/Bibliothekswahl, Implementierung.
- **Funktionalität**: Datenstrukturen, Sprache, **Module/Schnittstellen** (z. B. **UML**), **Entwurfsmuster**, Implementierung.
  Beispiel „Fitnesskursverwaltung“: ERM und normalisiertes relationales Schema (z. B. **Teilnehmer**, **Kurs**, **Trainer**, **Ort**; m:n-Relation **Kursteilnehmer**).

### 4.2.4 Softwarelösung testen & dokumentieren

**Testen**: **Teststufen** (Unit/Integration/System), **Verfahren** (z. B. Review, Black-Box), Automatismen vs. manuell, **Testdaten**, **Abnahmetest**; **Planung/Durchführung/Ergebnisse** (Protokolle).
**Dokumentation** (Entwicklung & Nutzung):

- **Projektdokumentation** (Auftrag, Plan, Ressourcen/Ablauf, Wirtschaftlichkeit, Risiko, Lasten-/Pflichtenheft, Abschlussbericht).
- **Systemdokumentation** (Architektur, Algorithmen, **Entwurfsmuster**, Schnittstellen, Datenmodelle, Sicherheit, Versionierung).
- **Testdokumentation** (Testpläne/-fälle, Berichte, Abnahme).
- **Benutzerdokumente**: **Benutzerhandbuch** (Funktionen, UI-Elemente, Beispiele, Fehlverhalten/Support), **Installationsanleitung** (Voraussetzungen, Installation/Update), **Schulungs-/Marketingunterlagen**.

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

- **Struktur** schafft Übersicht: Phasen, Standards, Organisation klar wählen.
- **Anforderungen & Qualität** sauber spezifizieren (funktional/nichtfunktional, interne/externe Qualität).
- **Planung**: Ablauf, Ressourcen, **Wirtschaftlichkeit** (Formeln/Faktoren), **Risiken** (Risikokennziffer) systematisch behandeln.
- **Umsetzung**: Architektur → Daten/UI/Funktionalität konsistent; Beispiel zeigt DB-Modellierung.
- **QS**: Testen & **Dokumentieren** vollständig.
- **Kommunikation**: **Präsentation** adressatengerecht; **Reflexion** zur kontinuierlichen Verbesserung.

---

## Sie haben es geschafft! Sie haben die Lerneinheit 4 des Lernfelds 12a abgeschlossen. Weiter geht es mit Nächsten

<!DOCTYPE html>
<html lang="tr">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Kompot Patlaması</title>
    <style>
        .container {
            text-align: center;
            position: relative;
        }
        .title {
            color: white;
            font-size: 3em;
            margin-bottom: 40px;
            text-shadow: 2px 2px 4px rgba(0,0,0,0.3);
        }
        .jar-container {
            position: relative;
            width: 300px;
            height: 400px;
            margin: 0 auto;
            cursor: pointer;
        }
        .jar {
            width: 200px;
            height: 280px;
            background: linear-gradient(to bottom,
                rgba(255,255,255,0.3) 0%,
                rgba(255,255,255,0.1) 50%,
                rgba(255,255,255,0.2) 100%);
            border-radius: 20px 20px 30px 30px;
            position: absolute;
            left: 50%;
            top: 50%;
            transform: translate(-50%, -50%);
            box-shadow:
                inset -10px 0 20px rgba(255,255,255,0.3),
                inset 10px 0 20px rgba(0,0,0,0.1),
                0 10px 30px rgba(0,0,0,0.3);
            transition: all 0.3s ease;
        }
        .jar:hover {
            transform: translate(-50%, -50%) scale(1.05);
        }
        .jar-lid {
            width: 180px;
            height: 40px;
            background: linear-gradient(to bottom, #d4a574, #8b6f47);
            border-radius: 10px;
            position: absolute;
            left: 50%;
            top: 20%;
            transform: translate(-50%, -50%);
            box-shadow: 0 5px 15px rgba(0,0,0,0.3);
            z-index: 10;
        }
        .jar-lid::before {
            content: '';
            position: absolute;
            width: 60px;
            height: 15px;
            background: #8b6f47;
            border-radius: 8px;
            top: -10px;
            left: 50%;
            transform: translateX(-50%);
        }
        .kompot-liquid {
            width: 160px;
            height: 180px;
            background: linear-gradient(to bottom, #ff6b6b, #ee5a6f);
            border-radius: 0 0 20px 20px;
            position: absolute;
            left: 50%;
            bottom: 20px;
            transform: translateX(-50%);
            overflow: hidden;
        }
        .fruit {
            width: 30px;
            height: 30px;
            background: #c92a2a;
            border-radius: 50%;
            position: absolute;
            opacity: 0.8;
        }
        .fruit:nth-child(1) { left: 20px; top: 30px; }
        .fruit:nth-child(2) { right: 30px; top: 60px; width: 25px; height: 25px; }
        .fruit:nth-child(3) { left: 40px; bottom: 40px; }
        .fruit:nth-child(4) { right: 20px; bottom: 60px; width: 28px; height: 28px; }
        .button {
            margin-top: 50px;
            padding: 15px 40px;
            font-size: 1.5em;
            background: linear-gradient(135deg, #f093fb 0%, #f5576c 100%);
            color: white;
            border: none;
            border-radius: 50px;
            cursor: pointer;
            box-shadow: 0 5px 20px rgba(0,0,0,0.3);
            transition: all 0.3s ease;
            font-weight: bold;
        }
        .button:hover {
            transform: translateY(-3px);
            box-shadow: 0 8px 25px rgba(0,0,0,0.4);
        }
        /* Patlama Animasyonları */
        @keyframes explode {
            0% {
                transform: translate(-50%, -50%) scale(1);
                opacity: 1;
            }
            50% {
                transform: translate(-50%, -50%) scale(1.2);
                opacity: 0.7;
            }
            100% {
                transform: translate(-50%, -50%) scale(2);
                opacity: 0;
            }
        }
        @keyframes lidFly {
            0% {
                transform: translate(-50%, -50%) rotate(0deg);
                opacity: 1;
            }
            100% {
                transform: translate(-200%, -400%) rotate(720deg);
                opacity: 0;
            }
        }
        @keyframes shatterPiece {
            0% {
                opacity: 1;
            }
            100% {
                opacity: 0;
            }
        }
        @keyframes liquidSplash {
            0% {
                transform: translateX(-50%) scale(1);
                opacity: 1;
            }
            100% {
                transform: translateX(-50%) translateY(-300px) scale(2);
                opacity: 0;
            }
        }
        @keyframes fruitFly {
            0% {
                transform: translate(0, 0) rotate(0deg);
                opacity: 1;
            }
            100% {
                opacity: 0;
            }
        }
        .exploding .jar {
            animation: explode 0.6s ease-out forwards;
        }
        .exploding .jar-lid {
            animation: lidFly 0.8s ease-out forwards;
        }
        .exploding .kompot-liquid {
            animation: liquidSplash 0.7s ease-out forwards;
        }
        .exploding .fruit:nth-child(1) {
            animation: fruitFly 1s ease-out forwards;
            transform: translate(-150px, -200px) rotate(360deg);
        }
        .exploding .fruit:nth-child(2) {
            animation: fruitFly 1s ease-out forwards;
            transform: translate(180px, -180px) rotate(-360deg);
        }
        .exploding .fruit:nth-child(3) {
            animation: fruitFly 1s ease-out forwards;
            transform: translate(-120px, -250px) rotate(180deg);
        }
        .exploding .fruit:nth-child(4) {
            animation: fruitFly 1s ease-out forwards;
            transform: translate(160px, -220px) rotate(-180deg);
        }
        .particle {
            position: absolute;
            width: 10px;
            height: 10px;
            background: #ff6b6b;
            border-radius: 50%;
            pointer-events: none;
        }
        @keyframes particleFly {
            0% {
                transform: translate(0, 0) scale(1);
                opacity: 1;
            }
            100% {
                transform: translate(var(--tx), var(--ty)) scale(0);
                opacity: 0;
            }
        }
        .success-message {
            position: absolute;
            top: 50%;
            left: 50%;
            transform: translate(-50%, -50%);
            color: white;
            font-size: 4em;
            font-weight: bold;
            text-shadow: 3px 3px 6px rgba(0,0,0,0.5);
            opacity: 0;
            pointer-events: none;
        }
        @keyframes showSuccess {
            0% {
                opacity: 0;
                transform: translate(-50%, -50%) scale(0.5);
            }
            50% {
                opacity: 1;
                transform: translate(-50%, -50%) scale(1.2);
            }
            100% {
                opacity: 1;
                transform: translate(-50%, -50%) scale(1);
            }
        }
        .show-message {
            animation: showSuccess 0.8s ease-out forwards;
            animation-delay: 0.5s;
        }
    </style>
</head>
<body>
    <div class="container">
        <h1 class="title">Kompot Zamanı!</h1>
        <div class="jar-container" id="jarContainer">
            <div class="jar-lid"></div>
            <div class="jar">
                <div class="kompot-liquid">
                    <div class="fruit"></div>
                    <div class="fruit"></div>
                    <div class="fruit"></div>
                    <div class="fruit"></div>
                </div>
            </div>
        </div>
        <button class="button" onclick="explodeJar()">PATLAT! 💥</button>
        <div class="success-message" id="successMsg">BOOOM! 🎉</div>
    </div>
    <script>
        function explodeJar() {
            const container = document.getElementById('jarContainer');
            const successMsg = document.getElementById('successMsg');
            container.classList.add('exploding');
            // Parçacık efekti oluştur
            for (let i = 0; i < 30; i++) {
                setTimeout(() => {
                    createParticle();
                }, i * 20);
            }
            // Başarı mesajını göster
            setTimeout(() => {
                successMsg.classList.add('show-message');
            }, 500);
            // Animasyonu sıfırla
            setTimeout(() => {
                container.classList.remove('exploding');
                successMsg.classList.remove('show-message');
            }, 3000);
        }
        function createParticle() {
            const particle = document.createElement('div');
            particle.className = 'particle';
            const container = document.getElementById('jarContainer');
            const rect = container.getBoundingClientRect();
            particle.style.left = '50%';
            particle.style.top = '50%';
            const angle = Math.random() * Math.PI * 2;
            const distance = 100 + Math.random() * 200;
            const tx = Math.cos(angle) * distance;
            const ty = Math.sin(angle) * distance;
            particle.style.setProperty('--tx', tx + 'px');
            particle.style.setProperty('--ty', ty + 'px');
            container.appendChild(particle);
            particle.style.animation = 'particleFly 1s ease-out forwards';
            setTimeout(() => {
                particle.remove();
            }, 1000);
        }
        // Sürekli patlama döngüsü
        function continuousExplosion() {
            explodeJar();
            setTimeout(continuousExplosion, 3500); // 3.5 saniyede bir patlat
        }
        // Sayfa yüklenince başlat
        window.addEventListener('load', () => {
            setTimeout(() => {
                continuousExplosion();
            }, 500);
        });
        // Klavozaya tıklayarak da patlatma
        document.getElementById('jarContainer').addEventListener('click', explodeJar);
    </script>
</body>
</html>
