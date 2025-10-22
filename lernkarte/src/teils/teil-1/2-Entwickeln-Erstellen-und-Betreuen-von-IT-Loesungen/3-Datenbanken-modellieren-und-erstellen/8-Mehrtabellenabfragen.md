# 🔗 Abfragen über mehrere Tabellen (JOINs) <span style="background:#e0f0ff;">LF8, LF5, LF11a</span>

In vielen Fällen werden Informationen **gleichzeitig aus mehreren Tabellen** benötigt. Dafür nennt das Material zwei Wege: die **klassische Variante** (Tabellen in der `FROM`-Klausel auflisten und in `WHERE` **PK=FK** verknüpfen) und die **moderne Variante** mit `INNER JOIN` in der `FROM`-Klausel. Beide liefern bei gleicher Verknüpfung identische Ergebnismengen. (LF8) 
Die allgemeine **SELECT-Syntax** zeigt ausdrücklich, dass mehrere Tabellen in `FROM` angegeben werden können; **Aliasnamen** sind erlaubt. (LF5) 

---

## 🧩 Methoden & Syntax (klassisch vs. JOIN) <span style="background:#e0f0ff;">LF8, LF5</span>

**Klassische Variante (PK=FK in WHERE):** (LF8, LF5)

```sql
SELECT Spalten
FROM TabelleA A, TabelleB B
WHERE A.PK = B.FK
  [AND weitere_Bedingungen];
```

**Moderne Variante mit `INNER JOIN`:** (LF8) 

```sql
SELECT Spalten
FROM TabelleA A
INNER JOIN TabelleB B ON A.PK = B.FK
[WHERE weitere_Bedingungen];
```

---

## 🧪 Beispiele aus den Unterlagen

### Beispiel 1 – Zwei Tabellen: Länder in Europa <span style="background:#e0f0ff;">LF8</span>

**Klassisch:** (LF8) 

```sql
SELECT L.Name, K.Bezeichnung
FROM Land L, Kontinent K
WHERE L.KontinentID = K.KontinentID
  AND K.Bezeichnung = 'Europa';
```

**Mit `INNER JOIN`:** (LF8) 

```sql
SELECT L.Name, K.Bezeichnung
FROM Land L
INNER JOIN Kontinent K ON L.KontinentID = K.KontinentID
WHERE K.Bezeichnung = 'Europa';
```

### Beispiel 2 – Drei Tabellen: Orte in Europa, die mit „B“ beginnen <span style="background:#e0f0ff;">LF8</span>

**Klassisch:** (LF8) 

```sql
SELECT O.Name, K.Bezeichnung
FROM Ort O, Land L, Kontinent K
WHERE O.LandID = L.LandID
  AND L.KontinentID = K.KontinentID
  AND K.Bezeichnung = 'Europa'
  AND O.Name LIKE 'B%';
```

**Mit `INNER JOIN`:** (LF8) 

```sql
SELECT O.Name, K.Bezeichnung
FROM Ort O
INNER JOIN Land L      ON O.LandID      = L.LandID
INNER JOIN Kontinent K ON L.KontinentID = K.KontinentID
WHERE K.Bezeichnung = 'Europa'
  AND O.Name LIKE 'B%';
```

> Die Musterabfrage nutzt **`LIKE 'B%'`** für Präfixsuche; **`LIKE`**-Platzhalter (`%`, `_`) sind im Grundlagenkapitel detailliert erläutert. (LF5) 

---

## 🧲 JOIN-Varianten & Ergebnismengen <span style="background:#e0f0ff;">LF8</span>

Neben `INNER JOIN` werden **`LEFT JOIN`**, **`RIGHT JOIN`** und **`FULL JOIN`** genannt. Sie werden **gleich wie `INNER JOIN`** geschrieben, liefern aber **unterschiedliche Ergebnismengen** (linke/rechte/alle Seiten vollständig). (LF8) 

**Beispielmuster (aus dem Text übernommen):** (LF8) 

```sql
-- INNER JOIN: nur verknüpfte Datensätze
SELECT ... FROM Land L INNER JOIN Kontinent K ON L.KontinentID = K.KontinentID;

-- LEFT JOIN: alle Datensätze aus L, passende aus K
SELECT ... FROM Land L LEFT JOIN  Kontinent K ON L.KontinentID = K.KontinentID;

-- RIGHT JOIN: alle Datensätze aus K, passende aus L
SELECT ... FROM Land L RIGHT JOIN Kontinent K ON L.KontinentID = K.KontinentID;

-- FULL JOIN: alle Datensätze aus L und K (ob verknüpft oder nicht)
SELECT ... FROM Land L FULL JOIN  Kontinent K ON L.KontinentID = K.KontinentID;
```

---

## 🧰 JOIN in einer Stored Procedure (Beispiel) <span style="background:#e0f0ff;">LF11a</span>

Das JOIN-Muster wird in einer Prozedur gezeigt: **Orte eines Landes** über `INNER JOIN`, Parameter `@Landname`. (LF11a) 

```sql
CREATE PROCEDURE ErmittleOrte @Landname VARCHAR(50)
AS
  SELECT Land.Name, Ort.Name
  FROM Ort
  INNER JOIN Land ON Ort.LandID = Land.LandID
  WHERE Land.Name = @Landname;

EXECUTE ErmittleOrte('Deutschland');
DROP PROCEDURE ErmittleOrte;
```

---

## 🔀 Abgrenzung zu UNION (Ergebnismengen kombinieren) <span style="background:#e0f0ff;">LF8</span>

`UNION` **kombiniert Ergebnismengen** mehrerer Abfragen (gleiche Spaltenanzahl/-typen; **Duplikate wie bei `DISTINCT` entfernt**, `UNION ALL` behält Duplikate). (LF8) 

```sql
SELECT O.Name FROM Ort O
UNION
SELECT L.Name FROM Land L;  -- "Luxemburg" erscheint nur einmal
```

---

## 📏 Regeln für Unterabfragen (falls in Mehrtabellen-Abfragen genutzt) <span style="background:#e0f0ff;">LF8</span>

**Unterabfragen** stehen in **runden Klammern**; bei **einem Wert**: Vergleichsoperatoren, bei **mehreren Werten**: **Mengenoperatoren** (z. B. `IN`, `ANY`, `ALL`, `EXISTS`). **`ORDER BY` und `UNION` sind in Unterabfragen unzulässig.** (LF8) 

---

## ⚙️ Prozessschritte für Abfragen über mehrere Tabellen <span style="background:#e0f0ff;">LF8, LF5</span>

1. **Tabellen auswählen** und **Schlüsselbeziehungen** (PK/FK) bestimmen. (LF8) 
2. **Variante wählen:** klassisch (`FROM A, B …` + `WHERE A.PK=B.FK`) **oder** `JOIN`-Schreibweise. (LF8) 
3. **Verknüpfungsbedingungen** formulieren (`ON`/`WHERE`), optional **weitere Filter** (z. B. `LIKE`). (LF8, LF5)
4. **Projektion** (Spaltenliste) und **Sortierung/Gruppierung** nach Bedarf ergänzen (siehe allgemeine SELECT-Syntax). (LF5) 

---

## 🎯 Ziele (laut Unterlagen) <span style="background:#e0f0ff;">LF8</span>

* **Mehrtabellen-Abfragen sicher formulieren**, sowohl klassisch als auch mit `JOIN`. (LF8) 
* **JOIN-Varianten** kennen (`INNER/LEFT/RIGHT/FULL`) und ihre **Ergebnismengen** unterscheiden. (LF8) 

---

## 📚 Begriffstabelle

| **Begriff**                         | **Definition (laut Unterlagen)**                                                 | **Quelle** |
| ----------------------------------- | -------------------------------------------------------------------------------- | ---------- |
| **Klassische Mehrtabellen-Abfrage** | Tabellen in `FROM` auflisten und **PK=FK in `WHERE`** verknüpfen.                | LF8        |
| **`INNER JOIN`**                    | Liefert nur Datensätze, für die **eine Verknüpfung** besteht.                    | LF8        |
| **`LEFT JOIN`**                     | Alle Datensätze der **linken** Tabelle, passende der rechten.                    | LF8        |
| **`RIGHT JOIN`**                    | Alle Datensätze der **rechten** Tabelle, passende der linken.                    | LF8        |
| **`FULL JOIN`**                     | **Alle** Datensätze beider Tabellen, ob verknüpft oder nicht.                    | LF8        |
| **Alias**                           | Temporäre Namen für Tabellen/Spalten (z. B. `Land L`, `Kontinent K`).            | LF8, LF5   |
| **`LIKE`**                          | Mustervergleich mit `%` (beliebig) und `_` (genau ein Zeichen).                  | LF5        |
| **PK/FK-Verknüpfung**               | In der klassischen Variante werden **Primär- und Fremdschlüssel** gleichgesetzt. | LF8        |
| **UNION**                           | Kombiniert Ergebnismengen; **Duplikate entfernt** (mit `UNION ALL` nicht).       | LF8        |

---

## 💻 Kompakter Beispielblock (aus den Unterlagen)

```sql
-- 2 Tabellen, klassisch
SELECT L.Name, K.Bezeichnung
FROM Land L, Kontinent K
WHERE L.KontinentID = K.KontinentID
  AND K.Bezeichnung = 'Europa';                            -- (LF8)
```



```sql
-- 3 Tabellen, INNER JOIN + Filter mit LIKE
SELECT O.Name, K.Bezeichnung
FROM Ort O
INNER JOIN Land L      ON O.LandID      = L.LandID
INNER JOIN Kontinent K ON L.KontinentID = K.KontinentID
WHERE K.Bezeichnung = 'Europa' AND O.Name LIKE 'B%';       -- (LF8)
```



```sql
-- JOIN-Varianten (Ergebnismengen unterscheiden sich)
SELECT ... FROM Land L LEFT  JOIN Kontinent K ON L.KontinentID = K.KontinentID;
SELECT ... FROM Land L RIGHT JOIN Kontinent K ON L.KontinentID = K.KontinentID;
SELECT ... FROM Land L FULL  JOIN Kontinent K ON L.KontinentID = K.KontinentID;  -- (LF8)
```


---

