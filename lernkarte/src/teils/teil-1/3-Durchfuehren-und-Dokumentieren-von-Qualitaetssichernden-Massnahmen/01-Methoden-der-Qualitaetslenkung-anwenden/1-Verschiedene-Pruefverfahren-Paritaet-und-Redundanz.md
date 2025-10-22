# 🧪 Verschiedene Prüfverfahren: **Parität** & **Redundanz**

Die Unterlagen nennen zwei grundlegende Prüfansätze auf Daten-/Informations­ebene: **Parität** zur einfachen Fehlererkennung auf Bit-Ebene und **Redundanz** als Qualitätsmerkmal bzw. -problem in Datenbeständen. Im Folgenden sind beide Verfahren didaktisch geordnet und ausschließlich mit Inhalten aus den LFs erläutert. (LF5, LF8)

---

## 🔹 **Parität** als Bit-Prüfverfahren

Das **Paritätsbit** ist ein *Ergänzungsbit zur Überprüfung auf Fehlern* bei der Übertragung bzw. Speicherung von Zeichen. In den Materialien wird es im Kontext des **ASCII-Zeichensatzes** beschrieben: ASCII ist eine 7-Bit-Kodierung; *das achte Bit ist das Paritätsbit*, das ursprünglich **nicht** für Zeichen, sondern für die **Fehlerprüfung** gedacht war (heute oft zur 8-Bit-Erweiterung genutzt). (LF5) 

**Prüfidee (aus den Unterlagen abgeleitet):**
Ein zusätzliches Bit begleitet jedes kodierte Zeichen. Dieses Bit dient allein dem **Prüfen**, ob beim Transport/bei der Speicherung ein einfacher Bitfehler aufgetreten ist (konzeptionell in der ASCII-Beschreibung verankert). (LF5) 

> Hinweis aus den Materialien: Die ASCII-Tabelle trennt Steuer- und druckbare Zeichen; das Paritätsbit gehört **nicht** zum 7-Bit-Zeichenvorrat, sondern ist ergänzend für Prüfzwecke geführt. (LF5) 

---

## 🔹 **Redundanz** als Prüf- und Qualitätskriterium

**Redundanz** bedeutet *mehrfache* Haltung derselben Information. In relationalen Datenmodellen wird Redundanz gezielt **beseitigt** – die **Normalisierung** ist „ein Verfahren, um Datenredundanz … zu beseitigen“ (bis zur 3. Normalform). Damit ist Redundanzfreiheit explizit ein **Prüfziel** an Datenmodellen. (LF8) 

Gleichzeitig zeigen die Materialien: In manchen Modellen (z. B. **hierarchisches Datenmodell**) lässt sich **Datenredundanz nicht vermeiden** – das ist als Befund zu prüfen und zu berücksichtigen. (LF5) 

Auf **Datenqualitäts-Ebene** ist **Redundanzfreiheit** ein eigenes **Qualitätskriterium**; doppelte Kundennummern/Dubletten sind ein *konkreter Mangel*. (LF8) 

Bei **Informationsintegration** (Zusammenführen heterogener Quellen) gilt: **Redundanz muss bereinigt** werden; sie kann jedoch **zur Verifikation** dienen (Abgleich deckungsgleicher Angaben aus mehreren Quellen). (LF8) 

Zur **operativen Prüfung** und Sicherung der Redundanzfreiheit nennen die Unterlagen zwei Prozessbausteine des Datenqualitätsmanagements: **Data Cleaning** (z. B. Dublettenbeseitigung, Vervollständigung) und **Data Monitoring** (periodische Nachprüfung gegen Datenalterung). (LF8) 

---

## 🧭 Einordnung zu weiteren **Prüfverfahren** im Entwicklungsprozess

Neben den datenbezogenen Prüfungen (Parität/Redundanz) beschreiben die Unterlagen umfassende **Software-Prüfverfahren**:

* **Statische Prüfverfahren**: **Inspektion**, **Review**, **Walkthrough**, **Audit**; zudem **statische Code-Analyse** (z. B. Konventionen/Design). (LF5) 
* **Dynamische Prüfverfahren**: **Whitebox-** und **Blackbox-Tests** (u. a. Überdeckungsmaße; Testfallreduktion durch **Äquivalenzklassen**/**Grenzwertanalyse**). (LF5)
* **Testarten** (Auszug): **Performance-/Lasttests** zur **Effizienz** (Zeit-/Verbrauchsverhalten). (LF5) 

Diese Verfahren prüfen Software-Artefakte und Systemverhalten; **Parität** und **Redundanzfreiheit** prüfen Datenebene/Informationsqualität – beide Ebenen ergänzen sich im Gesamt-QM. (LF5, LF8)

---

## 🧪 Beispiele (aus den LFs)

1. **Parität in ASCII**: *„Das achte Bit ist das Paritätsbit (Ergänzungsbit zur Überprüfung auf Fehlern).“* – Prüfen auf Übertragungsfehler pro Zeichen. (LF5) 
2. **Redundanzmangel**: *Doppelte Kundennummern* ⇒ **nicht redundanzfrei** ⇒ Handlungsbedarf in **Data Cleaning**. (LF8) 
3. **Modellbedingte Redundanz**: Im **hierarchischen Datenmodell** ist Redundanz *nicht vermeidbar* – das ist bei der Modellprüfung zu dokumentieren. (LF5) 

---

## 🛠️ Prozessschritte (kompakt)

* **Paritätsprüfung**: Zeichen einlesen → Paritätsbit als **Prüfbit** berücksichtigen → bei Abweichung **Fehlerfall** markieren. (LF5) 
* **Redundanzprüfung**:

  1. **Analyse** auf Dubletten/Widersprüche (Qualitätskriterium **Redundanzfreiheit**). (LF8) 
  2. **Normalisieren** (Entwurfsebene) bzw. **Data Cleaning** (Bestandsdaten). (LF8)
  3. **Monitoring** zur nachhaltigen Qualitätssicherung. (LF8) 
  4. **Integration**: Bei Quellenzusammenführung Redundanzen gezielt **beseitigen** bzw. **zur Verifikation** nutzen. (LF8) 

---

## 📚 Begriffstabelle

| Begriff                     | Definition                                                                                      | Quelle |
| --------------------------- | ----------------------------------------------------------------------------------------------- | ------ |
| **Paritätsbit**             | Ergänzungsbit zur **Überprüfung auf Fehlern** bei ASCII (zusätzlich zu 7 Bit Zeichenkodierung). | LF5    |
| **ASCII (Auszug)**          | 7-Bit-Zeichensatz; Steuer- vs. druckbare Zeichen; Paritätsbit historisch für Prüfung.           | LF5    |
| **Redundanz**               | Mehrfache Haltung derselben Information; in einigen Modellen unvermeidbar.                      | LF5    |
| **Redundanzfreiheit**       | Qualitätskriterium der Daten; Dubletten widersprechen Redundanzfreiheit.                        | LF8    |
| **Normalisierung**          | Verfahren zur **Beseitigung von Datenredundanz** (1.–3. NF).                                    | LF8    |
| **Data Cleaning**           | Bereinigung (z. B. Dubletten entfernen, Vervollständigung).                                     | LF8    |
| **Data Monitoring**         | Wiederkehrende Prüfung, um Qualitätsverlust durch Datenalterung zu vermeiden.                   | LF8    |
| **Informationsintegration** | Zusammenführen heterogener Quellen; Redundanz **beseitigen** bzw. zur **Verifikation** nutzen.  | LF8    |

---

## ✅ Kurzfazit

* **Parität** (ASCII-Paritätsbit) = einfaches, eingebettetes **Prüfverfahren** zur Erkennung einfacher Fehler pro Zeichen. (LF5) 
* **Redundanzprüfung** = **Entwurfs-** (**Normalisierung**) und **Bestandsdaten-Thema** (**Cleaning/Monitoring**); Ziel ist **Redundanzfreiheit** – mit der Ausnahme modellbedingter Redundanz (z. B. hierarchisch). (LF8, LF5)

Wenn du magst, erstelle ich dir darauf aufbauend Übungsaufgaben (z. B. „Dubletten erkennen & Maßnahmenplan“) – natürlich weiterhin streng anhand der LFs.

