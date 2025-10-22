# 🧮 Datentypen in Datenbanken: Boolesch, Ganzzahl, Gleitkomma, Währung, Datum/Zeit, Text (fix/variabel), BLOB, Geokoordinaten <span style="background:#e0f0ff;">LF5, LF8, LF11a</span>

**Überblick.** Relationale SQL-Datenbanken stellen u. a. folgende **Standard-Datentypen** bereit: **INTEGER/BIGINT** (Ganzzahlen), **NUMERIC/NUMBER(n,m)** (Festkomma, z. B. Währungen), **FLOAT/DOUBLE** (Gleitkomma), **CHAR(n)/CHARACTER(n)** (Text fester Länge), **VARCHAR(n)** (Text variabler Länge), **DATE/TIME/TIMESTAMP** (Datum/Zeit), **BOOLEAN** (Wahrheitswerte). Hersteller können zusätzliche Typen anbieten; die grundlegenden sind jedoch standardisiert. *(LF5)* 
Bei der SQL-Tabellendefinition werden diese Typen direkt an den Spalten angegeben (z. B. `spaltenname DATENTYP`), inkl. Schlüsseln/Constraints wie `PRIMARY KEY (...)`. *(LF11a)* 

---

## 🔎 Datentypen im Detail

* **Boolesche Werte – `BOOLEAN`**
  Speichert **Wahrheitswerte** (*true/false*) und wird in den SQL-Datentypübersichten aufgeführt. *(LF11a)* 

* **Ganzzahl – `INTEGER`, `BIGINT`**
  Für **Zahlen ohne Nachkommastellen**; Standard-SQL listet `INTEGER`, `BIGINT`. *(LF5)* 

* **Gleitkommawerte – `FLOAT`, `DOUBLE`**
  Für **reelle Zahlen** mit Gleitkomma; als SQL-Typ vorhanden. Die **binäre Darstellung** und **Genauigkeit** folgen dem IEEE-754-Schema (32/64 Bit mit Vorzeichen, Exponent, Mantisse). *(LF11a, LF5)*

* **Währung – `NUMERIC/NUMBER(n,m)` (Festkomma)**
  Für **Beträge** empfiehlt sich Festkomma mit definierter **Präzision/Skala** (z. B. `NUMERIC(12,2)`). *(LF5)* 

* **Datumswerte – `DATE`, `TIME`, `TIMESTAMP`**
  Für **Datum**, **Uhrzeit** und **Zeitstempel** in relationalen DBs; auch in JSON-Daten treten Zeitstempel als Werte auf (z. B. `reported_dt`). *(LF5, LF11a, LF8)*

* **Texte fester Länge – `CHAR(n)`/`CHARACTER(n)`**
  **Fixe Zeichenzahl** (z. B. Codes). *(LF5, LF11a)*

* **Texte variabler Länge – `VARCHAR(n)`**
  **Variable Zeichenketten** bis zu `n` Zeichen; Länge kann später per `ALTER TABLE ... MODIFY` angepasst werden. *(LF5, LF11a)*

* **BLOB (Binary Large Object)**
  **Hinweis:** Ein **BLOB-Datentyp** wird in den vorliegenden LF-Materialien **nicht explizit** aufgeführt. Die Unterlagen betonen jedoch, dass **Datenbankhersteller eigene Erweiterungen** über die Standardtypen hinaus anbieten (dazu zählen in der Praxis oft BLOB-Typen). *(LF5)* 

* **Geokoordinaten (Latitude/Longitude)**
  In Datenquellen/Dateiformaten erscheinen **`longitude`** und **`latitude`** oft als numerische Werte (z. B. in JSON-Beispielen). In relationalen DBs lassen sie sich mit **Gleitkomma-Typen** wie `DOUBLE` modellieren. *(LF8, LF11a)*

---

## 🧪 Beispielcode (SQL) <span style="background:#e0f0ff;">LF5, LF11a</span>

**Tabelle mit allen geforderten Typen (sofern in den LFs geführt):** *(LF11a, LF5)*

```sql
CREATE TABLE messung (
  id            INTEGER,
  aktiv         BOOLEAN,
  anzahl        INTEGER,
  temperatur    DOUBLE,
  betrag_eur    NUMERIC(12,2),
  zeitpunkt     TIMESTAMP,
  code          CHAR(3),
  kommentar     VARCHAR(100),
  latitude      DOUBLE,
  longitude     DOUBLE,
  PRIMARY KEY (id)
);
```

**Typänderung/Längenanpassung (Text):** *(LF5)* 

```sql
ALTER TABLE messung ADD COLUMN notiz VARCHAR(30);
ALTER TABLE messung MODIFY COLUMN notiz VARCHAR(250);
```

**SQLite-Beispiel (Python) – Spaltentypen wie TEXT/REAL/DATE verwendet:** *(LF5)* 

```python
import sqlite3
connection = sqlite3.connect("personenverwaltung.db")
cursor = connection.cursor()

sql = """
CREATE TABLE Person(
  PersonID INTEGER PRIMARY KEY AUTOINCREMENT,
  Name TEXT,
  Vorname TEXT,
  Groesse REAL,
  Gewicht REAL,
  Geburtsdatum DATE,
  OrtID INTEGER
)
"""
cursor.execute(sql)
connection.commit()
```

---

## 📦 Beispiele aus den LFs (Datenquellen)

* **JSON mit Zeit/Geo-Feldern**: Felder wie **`reported_dt`**, **`longitude`**, **`latitude`** werden gezeigt; JSON nutzt i. d. R. UTF-8. *(LF8)* 
* **SQL-Befehlsübersicht & Datentypliste**: Auflistung von `INTEGER`, `DATE`, `DOUBLE`, `FLOAT`, `CHARACTER(n)`, `VARCHAR(n)`, `BOOLEAN` direkt in `CREATE TABLE`. *(LF11a)* 
* **ANSI-SQL-Typen inkl. `NUMERIC/NUMBER(n,m)`** (Festkomma, Währung), `DATE/TIME/TIMESTAMP`, `BOOLEAN`, `VARCHAR/CHAR` u. a. *(LF5)* 

---

## 📚 Begriffstabelle

| Begriff                 | Definition (aus den LFs)                                                          | Quelle     |
| ----------------------- | --------------------------------------------------------------------------------- | ---------- |
| **BOOLEAN**             | Wahrheitswerte (true/false); als Datentyp in SQL aufgeführt.                      | LF11a      |
| **INTEGER/BIGINT**      | Ganze Zahlen ohne Nachkommastellen.                                               | LF5        |
| **FLOAT/DOUBLE**        | Gleitkommazahlen; binäre Darstellung/Genauigkeit nach IEEE-754.                   | LF11a, LF5 |
| **NUMERIC/NUMBER(n,m)** | Festkommazahlen, z. B. für Währungen.                                             | LF5        |
| **DATE/TIME/TIMESTAMP** | Datums- und Zeitangaben in relationalen DBs.                                      | LF5        |
| **CHAR(n)**             | Text **fester** Länge.                                                            | LF5, LF11a |
| **VARCHAR(n)**          | Text **variabler** Länge bis n Zeichen; per `ALTER TABLE` anpassbar.              | LF5        |
| **BLOB**                | In den LFs **nicht explizit** genannt; Hinweis auf Hersteller-Erweiterungen.      | LF5        |
| **Geokoordinaten**      | Felder `longitude`/`latitude` in JSON-Beispielen; Speicherung z. B. als `DOUBLE`. | LF8, LF11a |

---

## ✅ Praxishinweise (aus den LFs abgeleitet)

* **Standard vs. Hersteller-Erweiterungen:** Neben Standard-Typen existieren **DB-spezifische Datentypen**; Dokumentation der jeweiligen DB konsultieren. *(LF5)* 
* **Schemata entwickeln/ändern:** Typen und Längen lassen sich mit `ALTER TABLE` **hinzufügen/ändern** (z. B. Textlängen). *(LF5)* 
* **Datenquellenmix:** Datum/Zeit und Geo-Daten kommen häufig **aus JSON/Web-APIs** und werden in relationale Schemata überführt. *(LF11a, LF8)*

Wenn du möchtest, passe ich das SQL-Beispiel auf dein konkretes Schema an (Spaltennamen, Präzision/Skala für Beträge, Indexe, Keys).


---

## [⬅️ Zurück ](./1-Relationale-und-NoSQL-Datenbanken.md) | [➡️ Weiter](./3-Anomalien-und-Redundanzen.md)