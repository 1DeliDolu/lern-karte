# 🧪 Testprotokolle <span style="background:#e0f0ff;">LF5 · LF2</span>

**Testprotokolle** dokumentieren die **einzelnen Testschritte** und **alle während des Testens aufgetretenen Ergebnisse**. Sie gehören (im Lehrwerk) zu den **Testberichten** der Testdokumentation. (LF5) 
Die **Testdokumentation** orientiert sich dabei an Standards: **IEEE 829** (Standard for Software Test Documentation) wurde **durch ISO/IEC/IEEE 29119 ersetzt**. Welche Dokumente konkret verwendet werden, hängt von **Art und Größe des Projekts** ab. (LF5) 

Die **Dokumentenkategorien** der Testdokumentation umfassen laut Lehrwerk: **Übersicht** (*Testkonzept*), **Testspezifikation** (*Testentwurfs-, Testfalls-, Testablaufspezifikation*) und **Testberichte** (*Testobjektübergabebericht, Testprotokoll, Testabweichungsbericht, Testabschlussbericht*). (LF5) 

Im **Software-Lebenszyklus** werden Testprotokolle der **Dokumentationsphase** zugeordnet (u. a. neben Lasten-/Pflichtenheft, Planungsmodellen, Bedienungsanleitungen). (LF5) 
Auch im **Bereich Systemlieferung/-übergabe** (z. B. Installation, Konfiguration, Test) werden **Tests durchgeführt und Testprotokolle erstellt**. (LF2) 

---

## 📋 Inhalt & Zweck eines Testprotokolls

* **Zweck:** **Nachvollziehbare** und **standardisierte** Festhaltung der **Testergebnisse** je **definiertem Testfall** (z. B. einfach „OK“/„Fehler“ oder mit **genauer Fehlerbeschreibung/Fehlverhalten**). (LF5) 
* **Einordnung:** **Teil der Testberichte** innerhalb der Testdokumentation. (LF5) 
* **Standardbezug:** Erstellung **entsprechend ISO/IEC/IEEE 29119** (Nachfolger von IEEE 829). (LF5) 

---

## 🧩 Beispiel: Testprotokoll „Datumsprüfung“ (aus dem Lehrwerk)

**Kopfbereich/Felder**: *Protokoll-Nr., Datum, Uhrzeit, Tester, Aufsicht, verwendetes Testszenario, Kurzbeschreibung der erwarteten Reaktion.* (LF5) 

**Tabellarischer Teil** (auszugsweise, **Originalstruktur**):

|                                                                                                                                  Nr. | **Testdaten** | **Erwartete Ausgabe** | **Ergebnis** | **Bemerkungen**      |
| -----------------------------------------------------------------------------------------------------------------------------------: | ------------- | --------------------- | ------------ | -------------------- |
|                                                                                                                                    1 | 10.03.2020    | 10.03.2020            | Ok           | –                    |
|                                                                                                                                    2 | 29.02.1900    | Datum inkorrekt       | Fehler       | Datum wird angezeigt |
|                                                                                                                                    3 | 29.02.2000    | 29.02.2000            | Ok           | –                    |
|                                                                                                                                    4 | abc           | fehlerhafte Eingabe   | Ok           | –                    |
|                                                                                                                                    5 | 0.13.1000     | Datum inkorrekt       | Ok           | –                    |
| *(inkl. Summenfelder „Anzahl positiv/negativ“, **Feld „Notwendige Korrektur“** sowie **Unterschriften** von Tester/Aufsicht)* (LF5)  |               |                       |              |                      |

> **Didaktischer Hinweis:** Das Beispiel zeigt **positiv/negativ verlaufene Tests**, **Grenzwerte/Fehlerfälle** (Schaltjahr, ungültiges Format) und eine **klare Trennung** von **Soll-Ausgabe** und **Ist-Ergebnis**. (LF5) 

---

## 🧭 Einordnung im Entwicklungs- und Übergabeprozess

* **Dokumentationsphase**: **Testprotokolle** sind explizit gelistete Dokumente dieser Phase. (LF5) 
* **Systemlieferung/-übergabe**: Im Prozess „Software testen“ gehört das **Erstellen von Testprotokollen** zu den Arbeitsschritten. (LF2) 

---

## ✅ Minimalbestandteile (aus dem Beispiel ableitbar)

* **Identifikation:** Protokoll-Nr., Datum, Uhrzeit, Tester, Aufsicht. (LF5) 
* **Kontext:** verwendetes **Testszenario** + **Kurzbeschreibung** des erwarteten Verhaltens. (LF5) 
* **Ergebnistabelle:** **Nr., Testdaten, Erwartete Ausgabe, Ergebnis („Ok“/„Fehler“), Bemerkungen**. (LF5) 
* **Abschlussfelder:** **Anzahl positiver/negativer Tests**, **Notwendige Korrektur**, **Unterschriften**. (LF5) 

---

## 🗂️ Testdokumente – Überblick (Lehrwerksstruktur)

| **Kategorie**         | **Dokument(e)**                                                                            | **Quelle** |
| --------------------- | ------------------------------------------------------------------------------------------ | ---------- |
| **Übersicht**         | Testkonzept                                                                                | (LF5)      |
| **Testspezifikation** | Testentwurfs-, Testfalls-, Testablaufspezifikation                                         | (LF5)      |
| **Testberichte**      | **Testprotokoll**, Testobjektübergabebericht, Testabweichungsbericht, Testabschlussbericht | (LF5)      |

> **Hinweis zu Standards:** **IEEE 829** → **ISO/IEC/IEEE 29119** (Nachfolger). **Nicht alle** Dokumente müssen in **jedem** Projekt verwendet werden. (LF5) 

---

## 📚 Begriffe kompakt

| **Begriff**                   | **Definition laut Lehrwerk**                                                                                    | **Quelle** |
| ----------------------------- | --------------------------------------------------------------------------------------------------------------- | ---------- |
| **Testprotokoll**             | Dokument, das **alle Testergebnisse** zu den **durchgeführten Testfällen** festhält; **Teil der Testberichte**. | (LF5)      |
| **Testdokumentation**         | Gesamtheit der **Testdokumente**; im Lehrwerk mit Bezug auf **IEEE 829** bzw. **ISO/IEC/IEEE 29119**.           | (LF5)      |
| **Dokumentenkategorien**      | **Übersicht**, **Testspezifikation**, **Testberichte** (mit jeweiliger Dokumentliste).                          | (LF5)      |
| **Dokumentationsphase**       | Phase, in der u. a. **Testprotokolle** erstellt/geordnet werden.                                                | (LF5)      |
| **Systemlieferung/-übergabe** | Prozessschritt, in dem **Software getestet** und **Testprotokolle erstellt** werden.                            | (LF2)      |

---

## 🧠 Praxisleitfaden (auf Basis der Beispiele)

1. **Testszenario festlegen** und kurz beschreiben (z. B. „Eingabe eines Datums … korrekte Anzeige/Fehlermeldung“). (LF5) 
2. **Tabelle** mit **Testdaten**, **erwarteter Ausgabe**, **Ergebnis**, **Bemerkungen** fortlaufend ausfüllen. (LF5) 
3. **Summenfelder** (positiv/negativ), **Notwendige Korrektur** ergänzen; **Unterschriften** einholen. (LF5) 

---

