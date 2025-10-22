# 🗃️ Relationale & nicht-relationale Datenbanken (NoSQL)

**Relationale Datenbanken** speichern Daten in **Tabellen** (Relationen), die über **Beziehungen** verknüpft sind; das **relationale Datenmodell** wurde 1970 von **E. F. Codd** vorgestellt und ist zum Standard geworden. *(LF5)* 
**NoSQL-Datenbanken** („Not only SQL“) sind **keine Ablösung**, sondern **Ergänzung** zu relationalen Systemen – insbesondere dort, wo große, teils unstrukturierte Datenmengen (z. B. **Big Data**) anfallen oder sich Schemata häufig ändern. *(LF8)* 

---

## 🎯 Einordnung & typische Einsatzfelder

**Relationale Systeme** werden bevorzugt, wenn ein **stabiles, komplexes Schema**, **viele Entitäten/Beziehungen** und die **Einhaltung von ACID** gefordert sind (z. B. Bereiche „**Geld**“). *(LF8)* 
**NoSQL-Systeme** adressieren Anforderungen klassischer RDBMS nur **bedingt** (v. a. bei **un/semistrukturierten Daten** und **skalierbarer** Verarbeitung) und ergänzen diese daher; sie **organisieren Daten ohne Tabellen**/Zeilen/Spalten und verwenden **flexible Modelle**. *(LF8)* 
Die wachsenden **Big-Data**-Mengen sind mit klassischen relationalen Methoden nur begrenzt zugänglich – hier entstehen NoSQL-Anwendungsfälle. *(LF10c)* 

---

## 🧩 Datenmodelle im Vergleich

### Relational (SQL)

* **Modell:** Tabellen mit Zeilen/Spalten; Beziehungen werden über **Schlüssel** modelliert. *(LF5)* 
* **Konsistenz:** **ACID** (Atomicity, Consistency, Isolation, Durability). *(LF8)* 
* **Schema:** **Fest**; Schema-Änderungen betreffen oft die gesamte DB. *(LF8)* 
* **Skalierung:** vorwiegend **vertikal** (leistungsstärkerer Einzelserver). *(LF8)* 
* **Abfragen:** **SQL**. *(LF8)* 
* **Beispiele (DBMS):** MySQL, PostgreSQL, Oracle, MS SQL Server. *(LF8)* 

### NoSQL (nicht-relational)

* **Grundidee:** Verschiedene **Modelle** statt Tabellen (Dokument, Key-Value, Graph, Spalte). *(LF8)* 
* **Konsistenz:** häufig **BASE**-Gedanke; **absolute Konsistenz** zugunsten höherer **Verfügbarkeit** teilweise aufgegeben → zeitweise **inkonsistente Zustände** möglich. *(LF8)* 
* **Schema:** **flexibel** (strukturierte, semistrukturierte, unstrukturierte Daten zusammen speicherbar). *(LF8)* 
* **Skalierung:** **horizontal** (Server hinzufügen). *(LF8)* 
* **Abfragen:** modell-/API-spezifisch (z. B. über **APIs** bei Key-Value). *(LF8)* 

---

## 🗂️ NoSQL-Hauptkategorien (mit Beispielen)

**1) Dokumentenorientiert** – Einheit ist das **Dokument** (z. B. **JSON**); Dokumente können sich in Struktur/Attributen unterscheiden; **geeignet für CMS/Blogs**. *(LF8)*  
Beispiel-DBMS: MongoDB, Apache CouchDB (u. a.). *(LF8)* 

**2) Key-Value** – **Schlüssel–Wert**-Paare; extrem **schneller Zugriff** und **Skalierbarkeit** (Lastverteilung), jedoch **eingeschränkte Abfragen**, oft **ohne Indizes**; für **komplexe Beziehungen ungeeignet** (dann anderes Modell wählen). Beispiele: **Amazon Dynamo**, **Google BigTable**. *(LF8, LF5)*  

**3) Graph** – **Knoten** und **Kanten** mit Eigenschaften; ideal bei **stark vernetzten Strukturen** (z. B. Social Media/Follower-Netze). Beispiel: **Neo4j**. *(LF8, LF5)*  

**4) Spaltenorientiert** – Speicherung **spaltenweise** statt zeilenweise; **sehr schnell** beim Lesen/Aktualisieren **vieler Werte einer Spalte**; bevorzugt in **Data-Warehouse/OLAP**-Szenarien. Beispiele: **Apache Cassandra**, **Sybase IQ**. *(LF8, LF5)*  

---

## ⚖️ Gegenüberstellung (kompakt)

| Aspekt               | Relationale DB                          | NoSQL-DB                                                   |
| -------------------- | --------------------------------------- | ---------------------------------------------------------- |
| **Datenmodell**      | Tabellen, Beziehungen                   | Dokument, Key-Value, Graph, Spalte *(LF8)*                 |
| **Schema**           | Fest/strikt                             | Flexibel (auch un/semistrukturiert) *(LF8)*                |
| **Konsistenz**       | **ACID**                                | **BASE**-Prinzip, ggf. zeitweise inkonsistent *(LF8)*      |
| **Skalierung**       | **Vertikal**                            | **Horizontal** *(LF8)*                                     |
| **Abfragen**         | **SQL**                                 | modell-/API-spezifisch *(LF8)*                             |
| **Typische Nutzung** | Stabile Schemata, **Geld/ACID-Pflicht** | Big-Data-Szenarien, flexible Strukturen *(LF8, LF10c)*     |
| **Beispiele**        | MySQL, PostgreSQL, Oracle, MS SQL       | MongoDB, Dynamo, BigTable, Neo4j, Cassandra *(LF8, LF5)*   |

---

## 🧪 Beispielcode & Praxis

### A) Relationale DB – **Transaktionen (ACID) in SQL** *(LF11a)* 

```sql
-- Beispiel 1: Erfolgreiche Transaktion (COMMIT)
START TRANSACTION;
INSERT INTO Artikel (Name, Preis) VALUES ("Ansichtskarte", 1.25);
DELETE FROM Artikel WHERE Artikel.ID = 712;
COMMIT;

-- Beispiel 2: Test mit ROLLBACK (Änderungen rückgängig)
BEGIN;
UPDATE Artikel SET Preis = NULL;
SELECT Artikel.* FROM Artikel;
ROLLBACK;
```

> **Zweck:** Änderungen **atomar** zusammenfassen; bei Fehler **ROLLBACK**, sonst **COMMIT** (ACID). *(LF11a)* 

### B) NoSQL – **MongoDB (Dokumenten-DB) mit Python/PyMongo** *(LF8)* 

```python
from pymongo import MongoClient  # Notwendige Module importieren

database = MongoClient('mongodb://localhost:27017/')['artikelverwaltung_db']
collection = database['artikel']

schrank_daten = {
    'artikel_nr': '002348',
    'name': 'Holzschrank HS900',
    'hersteller': 'Möbel GmbH',
    'preis': '588.00 Euro'
}
collection.insert_one(schrank_daten)   # Einzelnes Dokument speichern

tisch_daten = {
    'artikel_nr': '1234',
    'name': 'Holztisch HT73',
    'hersteller': 'Möbel GmbH',
    'preis': '213.45 Euro'
}
stuhl_daten = {
    'artikel_nr': '5401',
    'name': 'Holzstuhl HST08',
    'hersteller': 'Möbel GmbH',
    'preis': '43.71 Euro'
}
collection.insert_many([tisch_daten, stuhl_daten])  # Mehrere Dokumente speichern

daten = collection.find_one({"artikel_nr": "1234"})  # Ein Dokument lesen
print(daten)
```

> **Hinweis aus dem Material:** Dokumente sind **JSON-ähnlich**; **Collections** entsprechen grob einer Tabelle. *(LF8)* 

---

## 🛠️ Auswahlkriterien (Praxisleitfaden)

* **Nimm relational (SQL)**, wenn **ACID** unverhandelbar ist, das **Schema stabil** bleibt und viele **Beziehungen** modelliert werden. *(LF8)* 
* **Nimm NoSQL**, wenn **flexible Schemata**, **un/semistrukturierte Daten**, **horizontale Skalierung** oder spezielle Zugriffsmuster (Dokument/Graph/Spalte/Key-Value) gefragt sind. *(LF8, LF10c)*  
* **Key-Value** für extrem **schnelle Reads/Writes** ohne komplexe Beziehungen; **Graph** bei **Netzwerken/Beziehungen**; **Dokument** bei **heterogenen Objekten** (z. B. CMS/Blogs); **Spalte** für **DW/OLAP**-Analysen. *(LF8, LF5)*    

---

## 📚 Begriffe kompakt

| Begriff                      | Definition                                                                                  | Quelle           |
| ---------------------------- | ------------------------------------------------------------------------------------------- | ---------------- |
| **Relationales Datenmodell** | Speicherung in **Tabellen** mit **Beziehungen**; Standard seit **Codd (1970)**.             | *(LF5)*          |
| **NoSQL**                    | **Nicht-relationale** DB-Familie zur Ergänzung klassischer RDBMS bei Big-Data/Flexibilität. | *(LF8)*          |
| **ACID**                     | Garantiert **atomare**, **konsistente**, **isolierte**, **dauerhafte** Transaktionen.       | *(LF8, LF11a)*   |
| **BASE**                     | Fokus auf **Verfügbarkeit**/**weichen Zustand** statt strikter Konsistenz.                  | *(LF8)*          |
| **Horizontale Skalierung**   | Leistung durch **weitere Server** erhöhen (typisch NoSQL).                                  | *(LF8)*          |
| **Spaltenorientierung**      | Speicherung **spaltenweise**; stark bei **Analytik/OLAP/DWH**.                              | *(LF8)*          |
| **Dokumenten-DB**            | **JSON-artige Dokumente**, variable Struktur; gut für **CMS/Blogs**.                        | *(LF8)*          |

---

## [⬅️ Zurück ](../2-Algorithmen-formulieren-und-Programme-entwickeln/3-Entwurf-der-Bildschirmausgabemasken-Softwareergonomie-Barrierefreiheit.md) | [➡️ Weiter](./2-Datentypen.md)