# 💾 5 Software zur Verwaltung von Daten anpassen [Seite: 455]

Dieses Lernfeld behandelt den gesamten Prozess der **Anpassung oder Neuentwicklung von Software** zur Datenverwaltung – von der Analyse der Anforderungen über die Planung, Entwicklung, Testung bis zur Dokumentation. Es vermittelt außerdem die Grundlagen der **Datenabbildung**, **Datenorganisation** und **Programmierpraxis**.

---

## 🎯 Lernziele

Lernende sollen:

* das **Umfeld der Softwareentwicklung analysieren**,
* die **Verwaltung und Darstellung von Daten in IT-Systemen** verstehen,
* die **Prozessphasen der Softwareentwicklung** kennen,
* **Softwareanforderungen spezifizieren**,
* einfache **Programme (z. B. in Python)** zur Datenverarbeitung und -verwaltung implementieren,
* Software **testen und dokumentieren** können.

---

## 🧠 5.1 Das Umfeld der Softwareentwicklung analysieren

### 🧩 5.1.1 Aufgaben und Kompetenzen von Softwareentwicklern

**Softwareentwickler** wirken an Entwicklung, Anpassung und Pflege von Software mit.

| Aufgaben                                               | Kompetenzen                                                                         |
| ------------------------------------------------------ | ----------------------------------------------------------------------------------- |
| Analyse von Prozessen, Architekturen und Anforderungen | Technisches & mathematisches Verständnis                                            |
| Entwicklung von Front- und Backend-Lösungen            | Analytisches Denkvermögen, Abstraktionsfähigkeit                                    |
| Programmierung & Testdurchführung                      | Teamfähigkeit, Geduld, Ausdauer                                                     |
| Kundenberatung, Dokumentation & Wartung                | Kenntnisse in Programmiersprachen, Softwarearchitektur, Algorithmen, SQL, Debugging |

➡️ Neben Fachwissen sind **Soft Skills** wie Teamarbeit, Kundenkommunikation und Organisationstalent entscheidend.

---

### 💽 5.1.2 Softwarearten

Nach **IEEE 610.12** umfasst Software:

> *Programme, Abläufe, Dokumentationen und Daten, die zum Betrieb eines Rechnersystems erforderlich sind.*

#### Einteilung nach Aufgaben:

* **Systemsoftware** – Betriebssysteme, Treiber
* **Unterstützungssoftware** – Compiler, Editoren
* **Anwendersoftware** – betriebswirtschaftliche, technische Anwendungen

#### Nach Individualität:

| Typ                    | Beschreibung                                         |
| ---------------------- | ---------------------------------------------------- |
| **Standardsoftware**   | Marktübliche Software, durch *Customizing* anpassbar |
| **Individualsoftware** | Maßgeschneiderte Lösung für ein Unternehmen          |

---

### 🔧 5.1.3 Neuentwicklung vs. Anpassung

**Softwareentwicklung** = Neuentwicklung oder Verbesserung bestehender Systeme.

| Art der Anpassung              | Beschreibung                                                                                                 |
| ------------------------------ | ------------------------------------------------------------------------------------------------------------ |
| **Customizing**                | Anpassung durch **Konfiguration** (Module) und **Parametrisierung** (aktivieren/deaktivieren von Funktionen) |
| **Erweiterungsprogrammierung** | Individuell erweiterte Module über Schnittstellen                                                            |
| **Neuentwicklung**             | Vollständige Individualsoftware                                                                              |
| **Datenmigration**             | Übertragung von Daten aus einem Altsystem                                                                    |

➡️ Anpassung von Individualsoftware ist flexibler, Standardsoftware wird meist parametrisiert oder erweitert.

---

### 🧭 5.1.4 In Softwareprojekten mitarbeiten

#### Projektdefinition (DIN 69901)

Ein **Projekt** ist ein einmaliges Vorhaben mit definiertem Anfang und Ende, bestimmten Zielen, Zeit-, Kosten- und Personalgrenzen.

#### Einteilungen:

* **nach Träger:** Unternehmens- oder öffentliche Projekte
* **nach Leistung:** z. B. Datenbankprojekt
* **nach Anlass:** Neuentwicklungs-, Anpassungs-, Migrationsprojekte

#### Projektstruktur:

* **Lenkungsausschuss** – gibt Ziele und Ressourcen frei
* **Projektleitung** – plant, steuert, überwacht
* **Projektteams** – entwickeln Teilkomponenten

#### Phasen eines Softwareprojekts:

1. **Projektstart:** Projektauftrag & Kick-off
2. **Projektplanung:** Inhalte, Zeit, Kosten, Ressourcen
3. **Projektdurchführung:** Realisierung & Kommunikation
4. **Projektkontrolle:** Überwachung, Berichterstattung
5. **Projektabschluss:** Abnahme, Dokumentation, Evaluation

---

## 💡 5.2 Grundlagen zur Verwaltung von Daten in IT-Systemen

### 🗂️ 5.2.1 Informationen und Daten

* **Information:** Wissenstransfer, der Wissen beim Empfänger verändert.
* **Daten:** formalisierte Darstellung von Information in maschinenlesbarer Form.
* Grundlage: **EVA-Prinzip** (Eingabe → Verarbeitung → Ausgabe)
* Darstellung über **Binärcode** (0 / 1).

---

### 🔢 5.2.2 Zahlensysteme der IT

| System          | Basis | Zeichen  | Bemerkung                            |
| --------------- | ----- | -------- | ------------------------------------ |
| **Dezimal**     | 10    | 0–9      | Alltagssystem                        |
| **Dual**        | 2     | 0,1      | Grundlage der Informatik             |
| **Hexadezimal** | 16    | 0–9, A–F | kompakte Darstellung von Binärwerten |

Umrechnung:

* Division/Addition (Dezimal ↔ Dual)
* 4 Bit = 1 Hex-Zeichen

---

### 💬 5.2.3 Darstellungsformen von Daten

**Zahlen:** Ganzzahlen (Zweierkomplement), Fließkommazahlen (IEEE 754)
**Zeichen/Text:** über **Zeichensätze**

* ASCII (128 Zeichen, 7 Bit)
* ISO 8859 (8 Bit, regionale Varianten)
* Unicode / UTF-8/16/32 (weltweiter Standard)
  **Grafikdaten:** Rastergrafiken (Pixel) vs. Vektorgrafiken (mathematische Objekte)
  **Audiodaten:** Digitalisierung durch **Sampling** (Frequenz, Tiefe, Kanäle)
  **Algorithmen:** schrittweise Verfahren zur Problemlösung, programmiert mit Befehlen.

---

### 🗃️ 5.2.4 Datenarten & Herkunft

**Einteilung nach:**

* **Repräsentation:** analog/digital
* **Struktur:** unstrukturiert – semistrukturiert – strukturiert
* **Sicherheitsstufen:** öffentlich → intern → vertraulich → geheim
* **Herkunft:** Primärdaten (selbst erhoben) vs. Sekundärdaten (bereits vorhanden)

---

### 💾 5.2.5 Speicherung von Daten

**Kernaspekte:**

* **Datenschutz:** Schutz personenbezogener Daten (BDSG, DSGVO)
* **Datensicherheit:** Schutz vor Verlust, Manipulation, unbefugtem Zugriff
* **Informationssicherheit:** Schutzziele → Verfügbarkeit, Integrität, Vertraulichkeit

**Speichergrößen:** Bit, Byte, Kilobyte (KB), Kibibyte (KiB) usw.
**Speicherlösungen:**

* Cloud-Storage (öffentlich/privat/hybrid)
* Flash-, File-, Block- und Object-Storage

---

## 💻 5.3 Den Prozess der Softwareentwicklung analysieren

**Phasen nach IEEE 12207:**

1. **Anforderungsanalyse** – Lasten-/Pflichtenheft
2. **Design** – Modelle, Datenbank, Algorithmen
3. **Implementierung** – Programmierung
4. **Testen** – Modul-, System-, Akzeptanztests
5. **Dokumentation** – Handbücher, Protokolle
6. **Auslieferung** – Installation & Schulung
7. **Wartung** – Anpassungen & Support

### Vorgehensmodelle

| Klassisch                          | Agil                                       |
| ---------------------------------- | ------------------------------------------ |
| Wasserfall, V-Modell, Spiralmodell | Scrum, DevOps, Extreme Programming, Kanban |

---

## 🧮 5.4 Anforderungsspezifikation & Entwurf

### 🗒️ 5.4.1 Anforderungen spezifizieren

* **Funktional:** was die Software tun soll
* **Nicht funktional:** wie sie es tun soll (Qualität, Zuverlässigkeit, Performance, Usability)
* **Rahmenbedingungen:** Technik, Organisation, Normen

### 📑 5.4.2 Lasten- und Pflichtenheft

| Dokument          | Verantwortlich | Inhalt                               |
| ----------------- | -------------- | ------------------------------------ |
| **Lastenheft**    | Auftraggeber   | Was & Wofür (Ziele, Anforderungen)   |
| **Pflichtenheft** | Auftragnehmer  | Wie & Womit (Umsetzung, Architektur) |

Ablauf:
Lastenheft → Pflichtenheft → Vertrag → Projektstart

### 🧩 5.4.3 Softwareentwurf

* Architektur & Module definieren
* Schnittstellen, Datenmodelle, Algorithmen entwerfen
* Unabhängig von Programmiersprache

### 🧮 5.4.4 Modellierungssprachen

| Modell                    | Zweck                                                               |
| ------------------------- | ------------------------------------------------------------------- |
| **PAP / Struktogramm**    | Ablaufsteuerung (imperativ)                                         |
| **Entscheidungstabellen** | Bedingungslogik                                                     |
| **Pseudocode**            | textuelle Darstellung von Algorithmen                               |
| **UML**                   | objektorientiertes Design (Klassen-, Aktivitäts-, Sequenzdiagramme) |
| **ERM**                   | Datenmodellierung für relationale DBs                               |

---

## 🐍 5.5 Einfache Anwendungen in Python implementieren

* Python = **interpretierte, leicht erlernbare Sprache** mit klarer Syntax
* Einsatz in **Datenanalyse, Webentwicklung, KI, Automatisierung**

### 🔧 Entwicklungsumgebungen (IDE)

* **IDLE** (Standard), **PyCharm**, **Visual Studio Code**, **Visual Studio**

### 📜 Grundlagen

* Einrückung strukturiert Blöcke (keine Klammern)
* Groß-/Kleinschreibung relevant
* Kommentare mit `#`
* Datentypen: Ganzzahlen, Fließkomma, Bool, Strings
* **Module** werden per `import` eingebunden
* **Ausgabe:** `print("Text")`

---

✅ **Ziel des Lernfelds 5:**
Schüler*innen sollen verstehen, **wie Informationen in Daten abgebildet**,
**Software geplant, entwickelt und getestet**,
und **Daten effizient sowie sicher verarbeitet** werden.


---

## [Nächstes Thema](./5.1_Das_Umfeld_der_Softwareentwicklung_analysieren/5.1_Das_Umfeld_der_Softwareentwicklung_analysieren.md)