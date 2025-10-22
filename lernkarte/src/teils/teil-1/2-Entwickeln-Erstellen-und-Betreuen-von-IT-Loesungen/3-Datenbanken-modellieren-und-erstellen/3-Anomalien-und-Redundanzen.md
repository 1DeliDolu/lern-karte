# 🧩 Anomalien & Redundanzen erkennen <span style="background:#e0f0ff;">LF5, LF8, LF11a</span>

**Datenredundanz** bedeutet, dass **dieselbe Information mehrfach** in der Datenbank vorliegt; das erhöht das Risiko widersprüchlicher (**inkonsistenter**) Daten. *(LF5)* 
Beispiel aus den Unterlagen: Eine Tabelle enthält **Preis**, **Anzahl** und zusätzlich den **Gesamtbetrag** – letzterer ist **ableitbar** (*Preis × Anzahl*) und damit **redundant**. *(LF5)* 
**Datenanomalien** sind **Widersprüche/Fehlerzustände**, die u. a. aus Redundanz oder parallelen Zugriffen entstehen; konsistente Daten sind **widerspruchsfrei**. *(LF5)* 

## ⚠️ Typische Anomalien (Erkennen & Bedeutung)

* **Änderungsanomalie:** dieselben Daten stehen **an mehreren Stellen**; eine Änderung wird **nicht überall** nachvollzogen. *(LF5)* 
* **Einfügeanomalie:** Daten können **nur in Kombination** mit anderen Daten erfasst werden (z. B. Mitarbeiter nur mit „Dummy-Abteilung“). *(LF5)* 
* **Löschanomalie:** Beim **Löschen** gehen **ungewollt weitere Informationen** verloren. *(LF5)* 
* **Mehrbenutzer-Anomalien:** Im **Parallelbetrieb** entstehen zusätzliche Anomalien; **Transaktionen/Sperren** sichern Konsistenz. *(LF11a, LF5)*

> **Ziel:** Redundanz weitestgehend vermeiden und **unkontrollierte** Redundanz abbauen; ein **ausgewogener Kompromiss** mit Performance ist sinnvoll. *(LF8)* 

---

## 🧭 Vorgehen: Anomalien/Redundanzen systematisch aufdecken

1. **Sichtprüfung auf redundante/ableitbare Felder**
   Prüfe, ob ein Spaltenwert **aus anderen Spalten berechnet** werden kann (z. B. *Gesamtbetrag = Preis × Anzahl*). Solche Felder sind **Redundanzen** und führen zu Inkonsistenzen. *(LF5)* 

2. **1. Normalform (1NF) prüfen: Atomare Werte**
   Werte müssen **atomar** sein. Kombinierte Felder (z. B. „Adresse“ als ein Feld) verletzen 1NF und begünstigen Anomalien. *(LF8)* 

3. **2. Normalform (2NF) prüfen: Abhängigkeit vom gesamten (zusammengesetzten) Schlüssel**
   Alle Nicht-Schlüsselattribute müssen vom **ganzen Primärschlüssel** abhängen (sonst partielle Abhängigkeit ⇒ Anomalien). *(LF8)* 

4. **3. Normalform (3NF) prüfen: Keine transitive Abhängigkeit**
   **Nicht-Schlüsselattribute** dürfen **nicht voneinander** abhängen; transitive Abhängigkeiten (z. B. Buch enthält Verlagsnr. **und** Verlagsname) sind zu **auslagern**. *(LF8)* 

5. **Abfragen analysieren: Doppelte/auffällige Muster finden**
   Nutze **`DISTINCT`**, **Gruppierung** und **Aggregatfunktionen** zur Muster- und Dublettensuche. *(LF11a, LF5)*

6. **Konsistenz im Mehrbenutzerbetrieb sicherstellen**
   Schreibvorgänge in **Transaktionen** bündeln (**COMMIT/ROLLBACK**) und so Mehrbenutzer-Anomalien minimieren. *(LF11a)* 

---

## 🧪 Praxis: SQL-Checks zum Erkennen von Redundanz & Anomalien

### A) Ableitbare Werte (Redundanz) finden *(LF5)* 

```sql
-- Prüft, ob der gespeicherte Gesamtbetrag von Preis*Anzahl abweicht
SELECT id, artikel_nr, preis, anzahl, gesamtbetrag,
       (preis * anzahl) AS korrekt
FROM   positionen
WHERE  gesamtbetrag <> (preis * anzahl);
```

*Erkennt Inkonsistenzen durch redundante Speicherung des **Gesamtbetrags** statt Berechnung.* *(LF5)* 

### B) Dubletten aufspüren (Mehrfacheinträge) *(LF5)* 

```sql
-- Duplikate in Person (natürlicher Schlüssel: Name+Vorname+Geburtsdatum)
SELECT Name, Vorname, Geburtsdatum, COUNT(*) AS anzahl
FROM   Person
GROUP  BY Name, Vorname, Geburtsdatum
HAVING COUNT(*) > 1;
```

*Nutzen von **GROUP BY/HAVING** zur Identifikation mehrfach vorhandener Informationen.* *(LF5)* 

### C) Nicht-atomare Werte (1NF-Verstoß) erkennen *(LF8, LF5)*

```sql
-- Heuristik: Zeilen mit zusammengesetzten Adressen (z. B. Slash/Komma als Trenner)
SELECT person_id, adresse
FROM   Person
WHERE  adresse LIKE '%,%' OR adresse LIKE '%/%';
```

*Unterlagen fordern: Adresse in **PLZ/Ort/Straße** aufteilen (1NF). Diese Abfrage findet Kandidaten.* *(LF8)* 

### D) Redundanzen in Ergebnismengen sichtbar machen *(LF11a)* 

```sql
-- Nur eindeutige Kombinationen zeigen, um Mehrfachvorkommen zu entlarven
SELECT DISTINCT Name, Vorname, Geburtsdatum
FROM   Person;
```

*`DISTINCT` entfernt **Redundanzen** in der **Ergebnismenge** – hilfreich beim Screening.* *(LF11a)* 

### E) Ableiten statt Speichern: Beispiel-Berechnung *(LF5)* 

```sql
-- Abgeleiteter Wert (BMI) wird berechnet statt gespeichert
SELECT Name, Vorname, (Gewicht / (Groesse * Groesse)) AS BMI
FROM   Person;
```

*Die Unterlagen zeigen, wie **berechenbare Werte** (hier: BMI) **on the fly** ermittelt werden.* *(LF5)* 

---

## 🔧 Normalisieren, um Ursachen zu beseitigen (Kurzleitfaden)

* **1NF herstellen:** zusammengesetzte Felder (z. B. „Adresse“) in **atomare Attribute** zerlegen. *(LF8)* 
* **2NF herstellen:** bei **zusammengesetztem Schlüssel** alle Nicht-Schlüsselattribute auf **volle Schlüsselabhängigkeit** prüfen. *(LF8)* 
* **3NF herstellen:** **transitive Abhängigkeiten** eliminieren (z. B. Verlagsdaten in eigene Tabelle). *(LF8)* 
* **Kontext beachten:** **unkontrollierte** Redundanz entfernen, Performance im Blick behalten. *(LF8)* 

---

## 📚 Begriffe kompakt

| Begriff               | Definition                                                                                            | Quelle     |
| --------------------- | ----------------------------------------------------------------------------------------------------- | ---------- |
| **Datenredundanz**    | Dieselbe Information ist **mehrfach** gespeichert; z. B. **Gesamtbetrag** zusätzlich zu Preis×Anzahl. | LF5        |
| **Datenanomalie**     | **Widerspruch/Fehler** im Datenbestand; u. a. verursacht durch Redundanz oder parallele Zugriffe.     | LF5        |
| **Änderungsanomalie** | Änderung wird **nicht an allen redundanten Stellen** vollzogen.                                       | LF5        |
| **Einfügeanomalie**   | Daten **nur in Verbindung** mit anderen Daten erfassbar.                                              | LF5        |
| **Löschanomalie**     | **Unbeabsichtigter Informationsverlust** beim Löschen.                                                | LF5        |
| **1NF/2NF/3NF**       | **Atomarität**, **Abhängigkeit vom ganzen Schlüssel**, **keine transitiven Abhängigkeiten**.          | LF8        |
| **Konsistenz**        | Daten sind **widerspruchsfrei**; Transaktionen sichern Konsistenz.                                    | LF11a, LF5 |

---

## ✅ Checkliste „Erkennen & Beheben“

1. **Ableitbare Spalten** aufspüren und entfernen (z. B. Gesamtbetrag). *(LF5)* 
2. **Dublettensuche** mit `GROUP BY … HAVING COUNT(*)>1` und `DISTINCT`. *(LF11a, LF5)*
3. **1NF-Verstöße** (nicht-atomare Felder) identifizieren und zerlegen. *(LF8)* 
4. **2NF/3NF-Prüfung** (partielle/transitive Abhängigkeiten) durchführen und auslagern. *(LF8)* 
5. **Transaktionen** für mehrbenutzerfähige, konsistente Änderungen verwenden. *(LF11a)* 


---

