# ⚖️ Ausdrücke & Bedingungen in SQL <span style="background:#e0f0ff;">LF5, LF8, LF11a</span>

**Ausdrücke** entstehen durch **Operatoren** (arithmetisch, logisch, Vergleich) und Operanden (z. B. Spalten, Literale). Sie werden u. a. in `SELECT`, `WHERE`, `HAVING`, `UPDATE`, `DELETE` eingesetzt (LF5). 
SQL kennt u. a. **Vergleichsoperatoren** (`=`, `>`, `>=`, `<`, `<=`, `<>`), **logische Operatoren** (`AND`, `OR`, `NOT`) und **Rechenoperatoren** (`+`, `-`, `*`, `/`); **Klammern** bündeln logische Ausdrücke (LF5). 
Der Spezialwert **`NULL`** bedeutet „kein definierter Wert“; **`IS NULL`** prüft darauf (LF5). 

---

## 🔤 Syntaktische Grundlagen (Auszüge) <span style="background:#e0f0ff;">LF5</span>

SQL ist **nicht** zwischen Groß-/Kleinschreibung unterscheidend; üblicher Stil: Schlüsselwörter groß; Anweisungen enden i. d. R. mit Semikolon (LF5). 

**Allgemeine SELECT-Syntax** mit Stellen für Bedingungen/Gruppen:
`SELECT [DISTINCT] … FROM … [WHERE Bedingungen] [GROUP BY … [HAVING Bedingungen]] [ORDER BY …];` (LF5). 

---

## 🧪 Vergleichs- & logische Operatoren <span style="background:#e0f0ff;">LF5</span>

* **Vergleich**: `=`, `>`, `>=`, `<`, `<=`, `<>` — vor allem in **`WHERE`** zur Formulierung von **Bedingungen** (LF5). 
* **Logik**: `AND` (und), `OR` (oder), `NOT` (nicht); **Klammern** erlauben Gruppierung komplexer Bedingungen (LF5). 

**Beispiel (aus den Unterlagen, WHERE mit Vergleich/OR/NULL):** (LF5) 

```sql
UPDATE Person SET Gewicht = NULL WHERE PersonID = 21 OR PersonID = 43;
DELETE FROM Person WHERE Name IS NULL;
```

---

## 🧮 Rechenoperatoren in Ausdrücken <span style="background:#e0f0ff;">LF5</span>

`+`, `-`, `*`, `/` sind als **Rechenoperatoren** nutzbar; **Klammern** steuern die Auswertungsreihenfolge (LF5). 

**Beispiel – berechnete Spalte (BMI):** (LF5) 

```sql
SELECT P.Name, P.Vorname, (P.Gewicht / (P.Groesse * P.Groesse)) AS BMI
FROM Person P;
```

---

## 🔎 Suchbedingungen in `WHERE`/`HAVING` <span style="background:#e0f0ff;">LF5, LF11a</span>

Die Unterlagen führen **einfache** und **zusammengesetzte** Bedingungen auf sowie typische Prädikate **`BETWEEN`**, **`IN`**, **`LIKE`**, **`IS [NOT] NULL`** (LF5). 
**`HAVING`** filtert **Gruppen** nach der Aggregation (Syntaxnachweis) (LF5). 

### `LIKE` (Mustervergleich) – Beispiele (aus den Unterlagen) <span style="background:#e0f0ff;">LF5</span>

```sql
SELECT P.Name, P.Vorname FROM Person P WHERE P.Name LIKE '%m%';   -- enthält „m”
-- weitere Muster:
-- 'm%'   (beginnt mit m)
-- '_m%'  (2. Zeichen m)
-- '%m'   (endet mit m)
-- 'st_m%' (st + ein Zeichen + m + beliebig)
```

(LF5) 

---

## 🧰 Unterabfragen & Mengenoperatoren in Bedingungen <span style="background:#e0f0ff;">LF8, LF11a</span>

**Unterabfragen** stehen in **runden Klammern**; bei **einem Wert** sind Vergleichsoperatoren üblich (z. B. `>`, `=`), bei **mehreren Werten** nutzt man **Mengenoperatoren** **`IN`**, **`ANY`**, **`ALL`**, **`EXISTS`** (LF8, LF11a).
**Regel:** In **Unterabfragen** sind **`ORDER BY`** und **`UNION`** **unzulässig** (LF8). 

**Beispiel – Vergleich mit Unterabfrage (Durchschnitt):** (LF8) 

```sql
SELECT O.Name, O.Einwohner
FROM Ort O
WHERE O.Einwohner > (SELECT AVG(O.Einwohner) FROM Ort O);
```

**Hinweis (Mengenoperatoren):** **`ANY`**, **`ALL`**, **`IN`** werden explizit als **Mengenoperatoren** benannt; **`IN`** prüft, ob ein Wert in der Ergebnismenge enthalten ist (LF8). 

---

## 🧱 Bedingungen in DML (UPDATE/DELETE) <span style="background:#e0f0ff;">LF5</span>

`UPDATE`/`DELETE` verwenden **`WHERE`** zur Eingrenzung der betroffenen Zeilen; fehlt `WHERE`, wirkt der Befehl **auf alle** Zeilen der Tabelle (LF5). 

**Syntax (aus den Unterlagen):** (LF5) 

```sql
UPDATE Tabellenname SET Spalte = Wert WHERE Bedingungen;
DELETE FROM Tabellenname WHERE Bedingungen;
```

---

## 📚 Begriffstabelle

| **Begriff**                     | **Definition (laut Unterlagen)**                                          | **Quelle** |
| ------------------------------- | ------------------------------------------------------------------------- | ---------- |
| **Vergleichsoperatoren**        | `=`, `>`, `>=`, `<`, `<=`, `<>` für Bedingungen, v. a. in `WHERE`.        | LF5        |
| **Logische Operatoren**         | `AND`, `OR`, `NOT` verknüpfen Bedingungen; Klammern gruppieren.           | LF5        |
| **Rechenoperatoren**            | `+`, `-`, `*`, `/` für Berechnungen in Ausdrücken.                        | LF5        |
| **`NULL` / `IS NULL`**          | `NULL` = kein definierter Wert; Prüfung mit `IS NULL`.                    | LF5        |
| **`LIKE`**                      | Mustervergleich mit `%` (beliebig) und `_` (ein Zeichen).                 | LF5        |
| **`BETWEEN` / `IN`**            | Typische Suchbedingungen (Bereiche/Mengen) in `WHERE`.                    | LF5        |
| **Unterabfrage**                | In Klammern; ein Wert → Vergleichsoperatoren, mehrere → Mengenoperatoren. | LF8        |
| **Mengenoperatoren**            | `IN`, `ANY`, `ALL`, `EXISTS` für Mehrfachwerte aus Subquery.              | LF8, LF11a |
| **Einschränkung in Subqueries** | `ORDER BY` und `UNION` sind darin unzulässig.                             | LF8        |
| **`HAVING`**                    | Bedingung auf **Gruppen** nach `GROUP BY`.                                | LF5        |

---

## 💻 Beispielblöcke (kompakt, exakt aus den Unterlagen)

**LIKE-Filter (WHERE):** (LF5) 

```sql
SELECT P.Name, P.Vorname FROM Person P WHERE P.Name LIKE '%m%';
-- 'm%', '_m%', '%m', 'st_m%' (weitere Muster)
```

**Berechnung in SELECT (Ausdruck):** (LF5) 

```sql
SELECT P.Name, P.Vorname, (P.Gewicht / (P.Groesse * P.Groesse)) AS BMI
FROM Person P;
```

**UPDATE/DELETE mit Bedingungen & NULL:** (LF5) 

```sql
UPDATE Person SET Gewicht=79.25 WHERE PersonID=10;
DELETE FROM Person WHERE Name IS NULL;
```

**Unterabfrage mit Vergleich (AVG):** (LF8) 

```sql
SELECT O.Name, O.Einwohner
FROM Ort O
WHERE O.Einwohner > (SELECT AVG(O.Einwohner) FROM Ort O);
```

---

## ⚙️ Prozessschritte (aus den Unterlagen abgeleitet)

1. **Ausdrucksart wählen**: Vergleich/Logik/Rechnen je nach Bedarf (LF5). 
2. **Bedingung platzieren**: `WHERE` für Zeilen, `HAVING` für Gruppen (LF5). 
3. **Subquery nötig?** Regeln beachten; bei Mehrfachwerten **Mengenoperatoren** einsetzen (LF8). 



---

