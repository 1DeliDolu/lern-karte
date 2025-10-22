# 🗄️ 03 Datenbanken modellieren und erstellen <span style="background:#e0f0ff;">LF5, LF8, LF11a</span>

**Relationale Datenbanken** speichern Informationen in **Tabellen (Relationen)**, die über **Beziehungen** miteinander verknüpft sind; das relationale Modell wurde 1970 von E. F. Codd vorgestellt und hat sich breit durchgesetzt. *(LF5)* 
In Unternehmen sind relationale Datenbanken weiterhin zentral; deshalb müssen sie **sorgfältig entworfen und umgesetzt** werden. *(LF8)* 

---

## 🧭 Phasen des Datenbank-Designprozesses

1. **Analysephase**: Anforderungen ermitteln und strukturieren; Ergebnis ist eine **informelle Problembeschreibung**. *(LF8)* 
2. **Konzeptionelle Phase**: formalisierte Beschreibung des Sachverhalts, z. B. mit dem **ER-Modell** (Entitäten, Attribute, Beziehungen, Kardinalitäten). *(LF8)* 
3. **Logische Phase**: Überführung des ER-Modells in ein **relationales Datenmodell** und **Normalisierung** zur Optimierung. *(LF8)*  
4. **Implementationsphase**: Umsetzung des logischen Modells in ein **physisches Schema** mit **SQL** (Datentypen, Wertebereiche, Relationen festlegen). *(LF8)* 

> **Beispiel (Implementationsphase)**:
> `CREATE TABLE Hersteller (HNr INTEGER, Name VARCHAR(50), PRIMARY KEY(HNr));` *(LF8)* 

---

## 🧩 ER-Modell: Entitäten, Beziehungen, Kardinalitäten

Das **ER-Modell** dient der verständlichen Darstellung erhobener Daten (**Entitäten**, **Attribute**, **Beziehungen**); es ist De-facto-Standard für die **Datenanalyse/Planung**. *(LF5)* 
**Kardinalitäten** unterscheiden u. a. **1:1**, **1:n** und **m:n**; eine **m:n-Beziehung** wird im relationalen Modell normalerweise über eine **Zwischen-/Kreuztabelle** mit zwei **Fremdschlüsseln** abgebildet. *(LF5)*  
**1:n-Beispiel**: *Abteilung – Mitarbeiter* (eine Abteilung hat viele Mitarbeiter, ein Mitarbeiter gehört zu genau einer Abteilung). *(LF5)* 
**m:n-Beispiel**: *Mitarbeiter – Projekt* wird zu Kreuztabelle *Mitarbeiter_Projekt* mit **zusammengesetztem Primärschlüssel**. *(LF5)* 

**ER-Modell aus Textdaten erstellen (Beispiele):**

* *Zoo-Datenbank*: Entitätstypen **Tier**, **Tiergattung**, **Tierpfleger**, **Unterkunft**; Beziehungen und Kardinalitäten herleiten. *(LF5)* 
* *Arztpraxis*: Aus Excel-Tabellen Entitäten **Patient**, **Behandlungstermin** ableiten; 1:n-Beziehung bestimmen. *(LF5)* 

---

## 🔁 Vom ER-Modell zum relationalen Modell (Transformationsregeln)

**Regeln zur Überführung**:

1. **Jeder Entitätstyp → eine Tabelle** (mit allen Attributen).
2. **Jede Tabelle erhält einen Primärschlüssel** (natürlich oder künstlich). *(LF5)* 

Im relationalen Modell gilt: **Primärschlüssel (PK)** identifiziert Datensätze eindeutig (möglichst minimal und unveränderlich), **Fremdschlüssel (FK)** verweist auf den PK einer anderen (oder derselben) Tabelle und stellt **Beziehungen** her. *(LF5)*  

---

## 🔐 Schlüssel & Integrität

Ein **Primärschlüssel** ist eine minimale Spaltenkombination zur eindeutigen Identifikation; typische künstliche Schlüssel sind **ID/Nr**. *(LF5)*  
Ein **Fremdschlüssel** muss **denselben Datentyp** wie der referenzierte PK besitzen; Tabellen können **keinen/einen/mehrere** FKs haben. *(LF5)* 
**Datenredundanz** führt zu **Anomalien/Inkonsistenz** und ist daher zu vermeiden. *(LF5)* 

---

## 🧼 Normalisierung (1NF → 3NF, Überblick BCNF/4NF/5NF)

**Ziel der Normalisierung** ist die Verringerung von **Redundanz** und Erhöhung der **Konsistenz**; in der Praxis fokussiert man auf **1NF–3NF**. *(LF8)* 
**1NF**: Alle Attributwerte sind **atomar** (keine Aufzählungen in einer Zelle). *(LF8)* 
**2NF/3NF (verkürzt im Beispiel)**: Schrittweise Zerlegung und **Trennung transitiver Abhängigkeiten**; Ergebnis sind Tabellen in **3NF** mit beseitigter Redundanz. *(LF8)* 
**Weitere Normalformen** (**BCNF**, **4NF**, **5NF**) existieren, sind aber praktisch weniger relevant; **Übernormalisierung** kann Leistungseinbußen und Komplexität verursachen. *(LF8)* 

> **Beispielkette** (aus der PDF): von einer nicht normalisierten Tabelle **Bestellung** über 1NF bis zur **3NF** mit getrennten Tabellen **Bestellung**, **BestellPosition**, **Kunde**, **Artikel**. *(LF8)*  

---

## 🛠️ SQL-Grundlagen (DDL, DML, DCL) & Beispiele

**SQL** ist die Standardsprache für relationale DBMS (ANSI/ISO) mit **DDL/DML/DCL** (und TCL), wobei Hersteller-Dialekte leicht abweichen. *(LF5)* 

* **DDL** (z. B. `CREATE TABLE`, `DROP VIEW`) definiert Datenstrukturen. *(LF5)* 
* **DML** (z. B. `SELECT`, `INSERT`, `UPDATE`, `DELETE`) bearbeitet/abfragt Daten. *(LF5)* 
* **DCL** (z. B. `GRANT`, `REVOKE`) vergibt/entzieht Berechtigungen. *(LF5)* 
* **Basisbefehle-Übersicht** inkl. `CREATE DATABASE`, `ALTER TABLE (ADD/MODIFY/DROP)` etc. *(LF8)* 

**Beispiel DDL (Implementierungsschritt)** *(LF8)*:

```sql
CREATE TABLE Hersteller (
  HNr INTEGER,
  Name VARCHAR(50),
  PRIMARY KEY (HNr)
);
```

*(LF8)* 

**Beispiel DML – Bedingungen/Operatoren** *(LF5)*:

```sql
-- Vergleichs- und logische Operatoren in WHERE
SELECT P.Name, P.Vorname
FROM Person P
WHERE P.Groesse > 1.80 AND P.Gewicht < 100 AND P.Name = 'Müller';
```

```sql
-- Bereichssuche mit BETWEEN
SELECT P.Name, P.Vorname
FROM Person P
WHERE P.Groesse BETWEEN 1.60 AND 1.80;
```

```sql
-- Mustervergleich mit LIKE (%, _)
SELECT P.Name, P.Vorname
FROM Person P
WHERE P.Name LIKE '%m%';
```

*(LF5)*  

**Stored Procedure – Beispiel** *(LF11a)*:

```sql
CREATE PROCEDURE ErmittleOrte @Landname VARCHAR(50)
AS
SELECT Land.Name, Ort.Name
FROM Ort
INNER JOIN Land ON Ort.LandID = Land.LandID
WHERE Land.Name = @Landname;

-- Ausführen:
EXECUTE ErmittleOrte('Deutschland');

-- Löschen:
DROP PROCEDURE ErmittleOrte;
```

*(LF11a)* 

---

## 🔌 Schnittstellen & Transaktionen

**ODBC** ist eine **standardisierte, DBMS-unabhängige** API; ein **ODBC-Treiber** vermittelt zwischen Anwendung und DBMS. *(LF11a)* 
**Transaktion**: Folge von Manipulationen, die **ganz oder gar nicht** abgeschlossen werden; Abschluss mit **COMMIT** (erfolgreich) oder **ROLLBACK** (Fehler); **Sperren** sichern Konsistenz bei konkurrierenden Zugriffen. *(LF11a)* 

---

## 🧱 Drei-Ebenen-Architektur (extern – konzeptionell – intern)

**Externes Schema**: **Anwendersichten**; **Konzeptionelles Schema**: **Entitäten/Beziehungen** (DB-unabhängig, stabil); **Internes Schema**: **physische Speicherung, Indizierung, Sortierung, Selektion**. *(LF5)* 

---

## 🆚 Relational vs. NoSQL (Einordnung)

**Relationale DB**: Tabellen, **ACID-Regeln**, geeignet für **komplexe, stabile Schemata** und Bereiche wie „Geld“. *(LF8)* 
**NoSQL**: auf spezielle Anwendungsgebiete, **Skalierbarkeit/Flexibilität**; verschiedene Modelle (Key-Value, Dokument, Graph, Spalte) – Einsatz abhängig vom Zweck. *(LF5, LF8)*  

---

## 📚 Begriffe kompakt

| Begriff                  | Definition                                                                          | Quelle |
| ------------------------ | ----------------------------------------------------------------------------------- | ------ |
| **Tabelle (Relation)**   | Benannter Satz aus **Spalten (Attribute)** und **Zeilen (Tupel)**.                  | LF5    |
| **Primärschlüssel (PK)** | Eindeutige, minimale Spaltenkombi zur Identifikation; unveränderlich.               | LF5    |
| **Fremdschlüssel (FK)**  | Spalte, die auf den PK einer anderen/gleichen Tabelle verweist (gleicher Datentyp). | LF5    |
| **ER-Modell**            | Modell zur Darstellung **Entitäten–Beziehungen** aus der Analyse.                   | LF5    |
| **1:1 / 1:n / m:n**      | Kardinalitäten; **m:n** i. d. R. über **Kreuztabelle**.                             | LF5    |
| **Normalisierung**       | Verfahren zur **Redundanzreduktion**/**Konsistenzerhöhung** (1NF–3NF, …).           | LF8    |
| **DDL / DML / DCL**      | SQL-Teilmengen: **Struktur**, **Datenbearbeitung**, **Berechtigungen**.             | LF5    |
| **Transaktion**          | Atomare Folge von DB-Operationen mit **COMMIT/ROLLBACK**.                           | LF11a  |
| **ODBC**                 | Standard-API; **Treiber** koppelt Anwendung und DBMS.                               | LF11a  |
| **ACID**                 | Konsistenzmodell relationaler DB; im Geld-Kontext essenziell.                       | LF8    |

---

## 🧪 Ausgewählte Beispiele aus den PDFs

* **Bibliothek (Buchverleih)**: ER-Modell (u. a. *Kunde*, *Buch*, *Verleihvorgang*), daraus relationales Modell (Teil 1), anschließend **Normalisierung** (Teil 2). *(LF8)*  
* **Überführung in 3NF (Bestellungen)**: Schritt von nicht normalisiert → 1NF → 2NF → **3NF** mit **Bestellung**, **BestellPosition**, **Kunde**, **Artikel**. *(LF8)*  

---

## ⚙️ Umsetzungsschritte (praxisnah zusammengefasst)

1. **Anforderungen sammeln** und Anwendungsfälle bestimmen (Analyse). *(LF8)* 
2. **ER-Modell zeichnen** (Entitäten, Attribute, Beziehungen, Kardinalitäten). *(LF8, LF5)*  
3. **Relationales Schema ableiten** (Tabellen, PKs/FKs gemäß Transformationsregeln). *(LF5)* 
4. **Normalisieren** bis mind. **3NF** (Redundanz/Anomalien vermeiden). *(LF8)* 
5. **SQL-Schema erstellen** (DDL), **Berechtigungen** (DCL), **Testdaten** einfügen/abfragen (DML). *(LF5, LF8)*  
6. **Transaktionen/Sperrkonzept** berücksichtigen; ggf. **Stored Procedures/Trigger** für Logik. *(LF11a)* 

---

## 🧾 Weitere SQL-Beispiele (aus den PDFs)

**Operatoren und Ausdrücke** (`=`, `<>`, `>`, `<`, `>=`, `<=`, `AND`, `OR`, `NOT`, `BETWEEN`, `LIKE`, Rechenoperatoren) werden v. a. in `WHERE` genutzt; **`NULL`** wird mit `IS NULL` geprüft. *(LF5)* 
**Aggregatfunktionen** wie `MIN`, `MAX`, `AVG`, `SUM`, `COUNT` sind Teil des SQL-Grundwissens. *(LF11a)* 


---

## [⬅️ Zurück](../2-Algorithmen-formulieren-und-Programme-entwickeln/) | [➡️ Weiter](./1-Relationale-und-NoSQL-Datenbanken.md)