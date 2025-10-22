# 🔎 Datenbankabfrage & 🛠️ Datenpflege (SQL)

**SQL** ist die Standardsprache für relationale Datenbanken; sie ermöglicht **Datenstrukturen zu definieren** und **Datenbestände zu bearbeiten bzw. abzufragen**. Die Sprache gliedert sich u. a. in **DDL** (z. B. `CREATE TABLE`), **DML** (z. B. `SELECT`, `INSERT`, `UPDATE`, `DELETE`) und **DCL** (z. B. `GRANT`, `REVOKE`). *(LF5)* 

---

## 🔍 Datenbankabfrage (Daten lesen)

Eine **Datenbankabfrage** erfolgt in SQL mit **`SELECT`** und kann durch **Filter** (`WHERE`), **Sortierung** (`ORDER BY`), **Gruppierung** (`GROUP BY`/`HAVING`) und **Joins/Subqueries** erweitert werden. *(LF5, LF8, LF11a)* 

### Syntax-Kern (SELECT) *(LF5)* 

```sql
SELECT [DISTINCT] spalte1 [AS alias1], spalte2, ...
FROM tabelle1 [AS t1], tabelle2 [AS t2], ...
[WHERE bedingungen]
[GROUP BY spalte [HAVING bedingungen]]
[ORDER BY spalte1 [ASC|DESC], spalte2 ...];
```

### Operatoren & Funktionen *(LF5, LF11a)* 

* **Vergleichsoperatoren**: `=`, `<>`, `>`, `>=`, `<`, `<=`; **logische Operatoren**: `AND`, `OR`, `NOT`; **`IS NULL`** prüft auf nicht definierten Wert. *(LF5)* 
* **Aggregatfunktionen**: `MIN`, `MAX`, `AVG`, `SUM`, `COUNT`. *(LF11a)* 

### Mehrtabellenabfragen (JOIN) *(LF8)* 

**Klassisch (WHERE-Verknüpfung)**

```sql
SELECT L.Name, K.Bezeichnung
FROM Land L, Kontinent K
WHERE L.KontinentID = K.KontinentID
  AND K.Bezeichnung = 'Europa';
```

**Modern (INNER JOIN)**

```sql
SELECT L.Name, K.Bezeichnung
FROM Land L
INNER JOIN Kontinent K ON L.KontinentID = K.KontinentID
WHERE K.Bezeichnung = 'Europa';
```

### Ergebnismengen kombinieren (UNION) *(LF8)* 

```sql
SELECT O.Name FROM Ort O
UNION                -- doppelte Werte werden entfernt
SELECT L.Name FROM Land L;
```

### Unterabfragen (Subqueries) *(LF8)* 

* **Single-Value** (z. B. Vergleich mit Durchschnitt):

```sql
SELECT O.Name, O.Einwohner
FROM Ort O
WHERE O.Einwohner > (SELECT AVG(O.Einwohner) FROM Ort O);
```

* **In anderen Befehlen** (z. B. Löschung nach Land):

```sql
DELETE FROM Ort O
WHERE O.LandID = (SELECT L.LandID FROM Land L WHERE L.Name = 'Malta');
```

* **Regeln**: Subquery in **runden Klammern**; bei **mehreren Rückgabewerten** sind **Mengenoperatoren** (`IN`, `EXISTS`, `ANY`, `ALL`) zu verwenden; **`ORDER BY`** und **`UNION`** sind **in Unterabfragen unzulässig**. *(LF8)* 

---

## 🧹 Datenpflege (Einfügen, Ändern, Löschen)

**Datenpflege** umfasst das **Einfügen**, **Ändern** und **Löschen** von Datensätzen per **DML**. *(LF5, LF11a)* 

### INSERT – Datensätze einfügen *(LF5)* 

```sql
-- Syntax
INSERT INTO Tabellenname (spalte1, spalte2, ...)
VALUES (wert1, wert2, ...);

-- Beispiel
INSERT INTO Person (Vorname, Name, Gewicht)
VALUES ("Hans", "Müller", 80.5);
```

### UPDATE – Werte ändern *(LF5)* 

```sql
-- Syntax
UPDATE Tabellenname
SET spalte = wert
WHERE bedingungen;

-- Beispiele
UPDATE Person SET Gewicht = 79.25 WHERE PersonID = 10;
UPDATE Person SET Gewicht = NULL WHERE PersonID = 21 OR PersonID = 43;  -- Wert löschen
```

### DELETE – Datensätze löschen *(LF5)* 

```sql
-- Syntax
DELETE FROM Tabellenname
WHERE bedingungen;

-- Beispiel
DELETE FROM Person WHERE Name IS NULL;
```

### Transaktionen für konsistente Pflege *(LF11a)* 

**Transaktionen** fassen Manipulationen zusammen und enden mit **`COMMIT`** (dauerhaft) oder **`ROLLBACK`** (zurücknehmen). *(LF11a)* 

```sql
START TRANSACTION;
INSERT INTO Artikel (Name, Preis) VALUES ("Ansichtskarte", 1.25);
DELETE FROM Artikel WHERE Artikel.ID = 712;
COMMIT;

BEGIN;
UPDATE Artikel SET Preis = NULL;
SELECT Artikel.* FROM Artikel;
ROLLBACK;
```

**JDBC**: Auto-Commit deaktivieren, mehrere Anweisungen ausführen, dann `commit()` oder `rollback()`. *(LF11a)* 

```java
Connection con = DriverManager.getConnection(CONNECTION_URL, USER, PASSWORD);
try {
  con.setAutoCommit(false);
  PreparedStatement ps1 = con.prepareStatement(
    "INSERT INTO Artikel(Name, Preis) VALUES (\"Ansichtskarte\", 1.25)");
  ps1.executeUpdate();
  PreparedStatement ps2 = con.prepareStatement(
    "DELETE FROM Artikel WHERE Artikel.ID = 712");
  ps2.executeUpdate();
  con.commit();
} catch (Exception e) {
  con.rollback();
}
```

### Rechte für Pflegeaufgaben (DCL) *(LF8)* 

```sql
CREATE USER Schulz IDENTIFIED BY '123xyz456';
GRANT INSERT, UPDATE ON Ortsverwaltung.Ort TO Schulz;
REVOKE INSERT, UPDATE ON Ortsverwaltung.Ort FROM Schulz;
```

---

## 🧪 Abfragen & Pflege aus Anwendungs-Code

* **Java (JDBC):** `executeQuery(sql)` für **SELECT** (liefert `ResultSet`), `executeUpdate(sql)` für **INSERT/UPDATE/DELETE** (und DDL). *(LF11a)* 
* **Python (sqlite3):** Verbindung per `sqlite3.connect(...)`, Befehle via `cursor.execute(...)` (Beispiel zeigt `CREATE TABLE`). *(LF5)* 

**Java – Ausführung von SQL** *(LF11a)* 

```java
public void updateDB(String sql) {
  try { sqlStatement.executeUpdate(sql); }
  catch (SQLException e) { e.printStackTrace(); }
}

public ResultSet getData(String sql) {
  try { return sqlStatement.executeQuery(sql); }
  catch (SQLException e) { e.printStackTrace(); }
  return null;
}
```

**Python – Verbindung & Ausführung (Beispielauszug)** *(LF5)* 

```python
import sqlite3
connection = sqlite3.connect("personenverwaltung.db")
cursor = connection.cursor()
sql = (
  "CREATE TABLE Person ("
  " PersonID INTEGER PRIMARY KEY AUTOINCREMENT, "
  " Name TEXT, Vorname TEXT, Groesse REAL, Gewicht REAL, Geburtsdatum TEXT, OrtlD INTEGER)"
)
cursor.execute(sql)
# connection.close()  # (Beispiel zeigt das Ausführen der SQL-Anweisung)
```

---

## ⚙️ Prozessschritte (kompakt)

1. **Abfrage planen:** benötigte Spalten, Tabellen, **Filter (WHERE)**, **Sortierung (ORDER BY)**, **Gruppierung (GROUP BY/HAVING)** festlegen; bei mehreren Tabellen **JOIN** wählen; ggf. **UNION**/**Subquery** einsetzen. *(LF5, LF8)* 
2. **Daten pflegen:** **INSERT/UPDATE/DELETE** mit **präziser WHERE-Klausel**; bei zusammenhängenden Änderungen **Transaktion** verwenden. *(LF5, LF11a)* 
3. **Rechte steuern:** Pflege- und Abfragerechte gezielt **per `GRANT`/`REVOKE`** vergeben/entziehen. *(LF8)* 
4. **Aus Anwendungen:** passend **`executeQuery`** vs. **`executeUpdate`** verwenden; ggf. **Auto-Commit** steuern. *(LF11a)* 

---

## 🧭 Beispiele (vollständig & aus den Materialien)

### Abfragen (Lesen)

```sql
-- Länder in Europa (klassisch)
SELECT L.Name, K.Bezeichnung
FROM Land L, Kontinent K
WHERE L.KontinentID = K.KontinentID AND K.Bezeichnung = 'Europa';

-- Länder in Europa (INNER JOIN)
SELECT L.Name, K.Bezeichnung
FROM Land L
INNER JOIN Kontinent K ON L.KontinentID = K.KontinentID
WHERE K.Bezeichnung = 'Europa';

-- Orte über Durchschnitt
SELECT O.Name, O.Einwohner
FROM Ort O
WHERE O.Einwohner > (SELECT AVG(O.Einwohner) FROM Ort O);

-- Alle Orts- und Ländernamen (duplikatbereinigt)
SELECT O.Name FROM Ort O
UNION
SELECT L.Name FROM Land L;
```

*(LF8)* 

### Pflege (Schreiben/Ändern/Löschen)

```sql
-- Einfügen
INSERT INTO Person (Vorname, Name, Gewicht)
VALUES ("Hans", "Müller", 80.5);

-- Ändern
UPDATE Person SET Gewicht = 79.25 WHERE PersonID = 10;

-- Einzelnen Wert entfernen (auf NULL setzen)
UPDATE Person SET Gewicht = NULL WHERE PersonID = 21 OR PersonID = 43;

-- Löschen passender Sätze
DELETE FROM Person WHERE Name IS NULL;

-- Pflege mit Transaktion
START TRANSACTION;
INSERT INTO Artikel (Name, Preis) VALUES ("Ansichtskarte", 1.25);
DELETE FROM Artikel WHERE Artikel.ID = 712;
COMMIT;
```

*(LF5, LF11a)* 

---

## 📗 Begriffstabelle

| Begriff              | Definition                                                                                        | Quelle        |
| -------------------- | ------------------------------------------------------------------------------------------------- | ------------- |
| **Datenbankabfrage** | Lesen von Daten mit `SELECT`, erweiterbar um `WHERE`, `ORDER BY`, `GROUP BY`, `JOIN`, Subqueries. | (LF5, LF8)    |
| **Datenpflege**      | Einfügen, Ändern, Löschen von Datensätzen mit `INSERT`, `UPDATE`, `DELETE`.                       | (LF5, LF11a)  |
| **Transaktion**      | Bündel von DB-Manipulationen; Abschluss mit `COMMIT` oder Rücknahme mit `ROLLBACK`.               | (LF11a)       |
| **JOIN**             | Verknüpft Tabellen über Schlüssel; z. B. `INNER JOIN`.                                            | (LF8)         |
| **UNION**            | Kombiniert Ergebnismengen mehrerer `SELECT`s; entfernt Duplikate.                                 | (LF8)         |
| **Rechte (DCL)**     | `GRANT`/`REVOKE` zum Vergeben/Entziehen von Benutzerrechten.                                      | (LF8)         |
| **JDBC-Ausführung**  | `executeQuery` für `SELECT`, `executeUpdate` für Änderungen/DDL.                                  | (LF11a)       |
| **sqlite3 (Python)** | Verbindung & Ausführung von SQL-Anweisungen über `cursor.execute(...)`.                           | (LF5)         |

---

## 🎯 Ziele & Hinweise

* **Abfragen** sollen **zielgerichtet, wartbar und korrekt** sein; zu komplexe Statements sind schwer zu warten—Alternativen prüfen. *(LF8)* 
* **Pflegeoperationen** stets mit **scharfer WHERE-Klausel** und **Transaktionen** bei zusammenhängenden Änderungen ausführen. *(LF11a)* 
* **Zugriffsrechte** gezielt vergeben, um Pflegeaufgaben sicher zu steuern. *(LF8)* 


---

