# 🗃️ SQL: Tabellenstruktur, Index, Projektion, Selektion, Sortieren, Gruppieren <span style="background:#e0f0ff;">LF5, LF8, LF11a</span>

**SQL** ist die Standardsprache für relationale Datenbanken; sie wird in **DDL**, **DML** und **DCL** unterschieden (LF5). 
Die folgenden Inhalte zeigen wortgetreu die in den Unterlagen erläuterten Befehle/Syntaxen und Beispiele zu **Tabellenstruktur**, **Index-Manipulation**, **Projektion (Spaltenauswahl)**, **Selektion (Zeilen filtern)**, **Sortieren (ORDER BY)** und **Gruppieren (GROUP BY/HAVING)** (LF5, LF8, LF11a).

---

## 🧱 Tabellenstruktur (DDL): Anlegen/Ändern/Löschen von Tabellen <span style="background:#e0f0ff;">LF11a, LF8, LF5</span>

Die DDL umfasst Anweisungen zum **Beschreiben, Ändern, Entfernen** von Datenstrukturen, z. B. Tabellen (LF5). 

**Syntax/Überblick (Tabellen):** (LF11a) 

```sql
CREATE TABLE tabellenname (
  spaltenname datentyp,
  ...,
  PRIMARY KEY (spaltenname),
  FOREIGN KEY (spaltenname) REFERENCES tabellenname(spaltenname)
);

ALTER TABLE tabellenname
  ADD COLUMN spaltenname datentyp;      -- Spalte hinzufügen
ALTER TABLE tabellenname
  MODIFY COLUMN spaltenname datentyp;   -- Datentyp ändern
ALTER TABLE tabellenname
  DROP COLUMN spaltenname;              -- Spalte löschen

DROP TABLE tabellenname;                -- Tabelle löschen
```

**Datentypbeispiele:** *INTEGER, DATE, DOUBLE, FLOAT, CHARACTER(n), VARCHAR(n), BOOLEAN* (LF11a). 

**Bezug ER→Relational (PK/FK):** Die Umwandlung des ER-Modells in das relationale Modell markiert **Primärschlüssel (PK)** und **Fremdschlüssel (FK)** (LF8). 

**Beispiel (aus den Unterlagen) – Tabelle per SQL anlegen (SQLite in Python):** (LF5)

```python
import sqlite3
connection = sqlite3.connect("personenverwaltung.db")
cursor = connection.cursor()
sql_anweisung = (
  "CREATE TABLE Person("
  " PersonID INTEGER PRIMARY KEY AUTOINCREMENT,"
  " Name TEXT,"
  " Vorname TEXT,"
  " Groesse REAL,"
  " Gewicht REAL,"
  " Geburtsdatum DATE,"
  " OrtID INTEGER)"
)
cursor.execute(sql_anweisung)
connection.close()
```

---

## 🧭 Index-Manipulation (Performance): Erstellen/Löschen von Indizes <span style="background:#e0f0ff;">LF11a, LF5</span>

**Indizes** beschleunigen Zugriffe; die **physische Indizierung** gehört zur internen Ebene (z. B. *B-Bäume, Hashing*) (LF5). 

**Befehle (Auszug):** (LF11a) 

```sql
CREATE INDEX indexname ON tabellenname(spaltenname);  -- Index erstellen
DROP INDEX indexname ON tabellenname;                 -- Index löschen
```

---

## 🔎 Projektion (Spaltenauswahl): SELECT-Spaltenliste & DISTINCT <span style="background:#e0f0ff;">LF5</span>

Die **Projektion** entspricht der **Angabe der Spalten, deren Werte abgefragt werden sollen** (*Spalte = Angabe der Spalten…*) (LF5). 

**Allgemeine SELECT-Syntax (aus den Unterlagen):** (LF5) 

```sql
SELECT [DISTINCT] Spalte1 [AS Alias], Spalte2, ...
FROM Tabelle1 [Alias], Tabelle2 [Alias]
[WHERE Bedingungen]
[GROUP BY Spalte [HAVING Bedingungen]]
[ORDER BY Spalte1 [ASC|DESC], Spalte2 ...];
```

> **Erläuterungen:** *Alias = temporärer Name; DISTINCT = doppelte Werte entfernen* (LF5). 

**Beispiele (aus den Unterlagen):** (LF5) 

```sql
-- Einfache Spaltenauswahl (Projektion)
SELECT Person.Name, Person.Vorname, Person.Geburtsdatum FROM Person;

-- Mit Tabellenalias
SELECT P.Name, P.Vorname, P.Geburtsdatum FROM Person P;

-- Doppelte Werte unterdrücken
SELECT DISTINCT Person.Name FROM Person;
```

---

## 🧰 Selektion (Zeilen filtern): WHERE, BETWEEN, IN, LIKE, NULL <span style="background:#e0f0ff;">LF5</span>

Die **Selektion** erfolgt über **WHERE**; die Unterlagen nennen einfache/zusammengesetzte Bedingungen sowie **BETWEEN**, **IN**, **LIKE**, **NULL** (LF5). 

**LIKE-Beispiele (aus den Unterlagen):** (LF5) 

```sql
SELECT P.Name, P.Vorname FROM Person P WHERE P.Name LIKE '%m%';  -- enthält 'm'
-- Weitere Muster:
-- P.Name LIKE 'm%'    -- beginnt mit 'm'
-- P.Name LIKE '_m%'   -- an 2. Stelle 'm'
-- P.Name LIKE '%m'    -- endet mit 'm'
-- P.Name LIKE 'st_m%' -- 'st', ein beliebiges Zeichen, dann 'm', dann beliebig
```

---

## 🔃 Sortieren: ORDER BY (ASC/DESC) <span style="background:#e0f0ff;">LF5</span>

**ORDER BY** sortiert die Ergebnismenge; **ASC** (aufsteigend) ist Standard, **DESC** sortiert absteigend; mehrere Sortierspalten sind möglich (LF5). 

```sql
SELECT P.Name, P.Vorname FROM Person P ORDER BY P.Name DESC;
```

---

## 🧮 Gruppieren: GROUP BY & HAVING, Aggregatfunktionen <span style="background:#e0f0ff;">LF5, LF11a</span>

Die SELECT-Syntax führt **GROUP BY** (Gruppieren) und **HAVING** (Bedingungen auf Gruppen) auf (LF5). 
**Aggregatfunktionen** (Auszug) mit Beispielen: **COUNT**, **SUM**, **MIN**, **MAX**, **AVG** (LF11a, LF5).

```sql
-- Beispiele aus den Unterlagen
SELECT COUNT(P.PersonID) FROM Person P;         -- Anzahl (ohne NULL) (LF5) :contentReference[oaicite:18]{index=18}
SELECT SUM(P.Gewicht)     FROM Person P;        -- Summe (LF5)            :contentReference[oaicite:19]{index=19}
SELECT MIN(P.Gewicht)     FROM Person P;        -- Minimum (LF5)          :contentReference[oaicite:20]{index=20}
-- Aggregatfunktionen: MIN, MAX, AVG, SUM, COUNT (LF11a)                  :contentReference[oaicite:21]{index=21}
```

---

## 🧪 Weiteres SQL aus den Unterlagen (vertiefend) <span style="background:#e0f0ff;">LF8</span>

Die Unterlagen erweitern das Basiswissen u. a. um **JOINs**, **UNION**, **Unterabfragen** und **Mengenoperatoren** (IN, ANY, ALL, EXISTS) inkl. Regeln; **ORDER BY** ist in Unterabfragen unzulässig (LF8).

```sql
-- UNION (doppelte Werte entfernt)
SELECT O.Name FROM Ort O
UNION
SELECT L.Name FROM Land L;                             -- (LF8) :contentReference[oaicite:23]{index=23}

-- Unterabfrage mit Vergleich/AVG
SELECT O.Name, O.Einwohner
FROM Ort O
WHERE O.Einwohner > (SELECT AVG(O.Einwohner) FROM Ort O);   -- (LF8) :contentReference[oaicite:24]{index=24}
```

---

## ⚙️ Prozessschritte beim Arbeiten mit der DB (aus den Unterlagen) <span style="background:#e0f0ff;">LF5</span>

**Grundablauf:** Datenbank **öffnen**, **Aktionen ausführen**, **schließen** (LF5). 

---

## 📚 Begriffstabelle

| **Begriff**                 | **Definition (aus den Unterlagen)**                                               | **Quelle** |
| --------------------------- | --------------------------------------------------------------------------------- | ---------- |
| **DDL**                     | Anweisungen zum Beschreiben/Ändern/Entfernen von Strukturen (z. B. CREATE TABLE). | LF5        |
| **DML**                     | Anweisungen zur **Datenbearbeitung** (z. B. SELECT, INSERT, UPDATE, DELETE).      | LF5        |
| **DCL**                     | **Rechtevergabe**/**-entzug** (z. B. GRANT, REVOKE).                              | LF5        |
| **Primärschlüssel (PK)**    | Eindeutige Identifikation in einer Relation.                                      | LF8        |
| **Fremdschlüssel (FK)**     | Verweist auf PK einer anderen Relation.                                           | LF8        |
| **SELECT**                  | Abfrage von Daten; Spaltenliste = Projektion; WHERE = Selektion.                  | LF5        |
| **DISTINCT**                | Entfernt doppelte Zeilen in der Ergebnismenge.                                    | LF5        |
| **WHERE**                   | Filtert Datensätze (BETWEEN, IN, LIKE, NULL, logische/rel. Operatoren).           | LF5        |
| **ORDER BY**                | Sortiert Ergebnisse **ASC/DESC**.                                                 | LF5        |
| **GROUP BY / HAVING**       | Gruppiert Datensätze; HAVING = Bedingung auf Gruppen.                             | LF5        |
| **Aggregatfunktionen**      | **COUNT, SUM, MIN, MAX, AVG**.                                                    | LF11a, LF5 |
| **CREATE INDEX/DROP INDEX** | Index erstellen/löschen zur Beschleunigung von Zugriffen.                         | LF11a, LF5 |

---

## 🧑‍💻 Beispielcode (kompakt, exakt aus den Unterlagen)

### Projektion (Spalten) & DISTINCT <span style="background:#e0f0ff;">LF5</span>

```sql
SELECT P.Name, P.Vorname, P.Geburtsdatum FROM Person P;
SELECT DISTINCT Person.Name FROM Person;
```

(LF5) 

### Selektion (LIKE-Muster) <span style="background:#e0f0ff;">LF5</span>

```sql
SELECT P.Name, P.Vorname FROM Person P WHERE P.Name LIKE '%m%';
-- 'm%' , '_m%' , '%m' , 'st_m%'
```

(LF5) 

### Sortieren (ORDER BY) <span style="background:#e0f0ff;">LF5</span>

```sql
SELECT P.Name, P.Vorname FROM Person P ORDER BY P.Name DESC;
```

(LF5) 

### Aggregation (COUNT/SUM/MIN …) <span style="background:#e0f0ff;">LF5, LF11a</span>

```sql
SELECT COUNT(P.PersonID) FROM Person P;
SELECT SUM(P.Gewicht)     FROM Person P;
SELECT MIN(P.Gewicht)     FROM Person P;
```

(LF5, Aggregatfunktionen-Übersicht LF11a)

### Index anlegen/löschen <span style="background:#e0f0ff;">LF11a</span>

```sql
CREATE INDEX idx_person_name ON Person(Name);
DROP INDEX idx_person_name ON Person;
```

(LF11a) 

---

## 🎯 Ziele (aus den Unterlagen, bezogen auf diese Themen)

* **Korrekte Strukturierung** relationaler Daten per DDL (CREATE/ALTER/DROP TABLE) (LF11a). 
* **Performante Zugriffe** durch **Indizierung** (CREATE/DROP INDEX; interne Ebene: Indizierung) (LF11a, LF5).
* **Gezielte Abfragen** via **Projektion** (Spalten), **Selektion** (WHERE), **Sortierung** (ORDER BY), **Gruppierung** (GROUP BY/HAVING) inkl. **Aggregatfunktionen** (LF5, LF11a).


---

<div style="display:flex;justify-content:center">
  <h2>  <a href="./6-Datenbankabfrage-und-Datenpflege.md" style="text-decoration:none;color:#007acc;">⬅️ Zurück  </a>|<a href="./8-Mehrtabellenabfragen.md" style="text-decoration:none;color:#007acc;"> Weiter ➡️</a></h2>
</div>