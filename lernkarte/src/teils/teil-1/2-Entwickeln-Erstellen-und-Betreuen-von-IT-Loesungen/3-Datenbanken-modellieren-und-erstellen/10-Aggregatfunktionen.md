# 🧮 Aggregat-Funktionen in SQL <span style="background:#e0f0ff;">LF5, LF11a, LF8</span>

**Aggregatfunktionen** fassen Werte mehrerer Zeilen zusammen (z. B. **COUNT**, **SUM**, **MIN**, **MAX**, **AVG**). Die Unterlagen nennen Bedeutung und Beispiele und betonen u. a., dass **`COUNT` nur Nicht-NULL-Werte zählt**. Wird ohne Gruppierung über die **ganze Tabelle** aggregiert, liefert die Abfrage **genau einen Datensatz**; mit **`GROUP BY`** werden **Gruppen** gebildet, auf die die Aggregate getrennt angewendet werden. **`HAVING`** filtert Gruppen nach der Aggregation. (LF5, LF11a)

---

## ⚙️ Funktionen, Bedeutung & Grundsyntax <span style="background:#e0f0ff;">LF5, LF11a</span>

* **`COUNT(Spalte)`** – Anzahl der Datensätze mit **definiertem** Wert in der Spalte (NULL wird nicht gezählt). (LF5, LF11a)
* **`SUM(Spalte)`** – Summe aller Werte der Spalte. (LF5, LF11a)
* **`MIN(Spalte)`** – kleinster Wert der Spalte. (LF5, LF11a)
* **`MAX(Spalte)`** – größter Wert der Spalte. (LF5, LF11a)
* **`AVG(Spalte)`** – Durchschnittswert der Spalte. (LF5, LF11a)

**Gruppieren & Filtern von Gruppen:**
`SELECT … FROM … GROUP BY Spalte HAVING Bedingungen;` – *Spalte* legt das Gruppierungsmerkmal fest, *Bedingungen* filtern die Gruppen. (LF5) 

---

## 💻 Beispielabfragen (aus den Unterlagen)

### Einzelaggregate über die ganze Tabelle <span style="background:#e0f0ff;">LF5</span>

```sql
SELECT COUNT(P.PersonID) FROM Person P;
SELECT SUM(P.Gewicht)     FROM Person P;
SELECT MIN(P.Gewicht)     FROM Person P;
SELECT MAX(P.Groesse)     FROM Person P;
SELECT AVG(P.Groesse)     FROM Person P;
```

Diese Beispiele aggregieren **ohne Gruppierung** ⇒ **ein Ergebnisdatensatz**. (LF5) 

### Gruppierte Aggregate (z. B. Durchschnittsgröße je Ort) <span style="background:#e0f0ff;">LF5</span>

```sql
SELECT AVG(P.Groesse)
FROM Person P
GROUP BY P.OrtID;
```

`GROUP BY` bildet Gruppen je **OrtID**; das Aggregat wird **je Gruppe** berechnet. (LF5) 

### Aggregat in Unterabfrage (Vergleich mit Durchschnitt) <span style="background:#e0f0ff;">LF8</span>

```sql
SELECT O.Name, O.Einwohner
FROM Ort O
WHERE O.Einwohner > (SELECT AVG(O.Einwohner) FROM Ort O);
```

**Unterabfrage** liefert den **Durchschnitt** aller Orte; die Hauptabfrage filtert Orte **größer als** dieser Wert. (LF8) 

---

## 🧩 Hinweise & Regeln (aus den Unterlagen) <span style="background:#e0f0ff;">LF5, LF8</span>

* **Aggregat ohne `GROUP BY` ⇒** Ergebnis hat **einen Datensatz** (Gesamtaggregation). (LF5) 
* **`GROUP BY` + `HAVING`**: `HAVING` formuliert **Bedingungen auf Gruppen** nach der Aggregation. (LF5) 
* **Aggregatfunktionen in Subqueries** sind üblich; **Vergleich** mit dem Einzelwert der Unterabfrage (z. B. `> AVG(…)`). (LF8) 

---

## 📚 Begriffstabelle

| **Begriff**          | **Definition (laut Unterlagen)**                                                            | **Quelle** |
| -------------------- | ------------------------------------------------------------------------------------------- | ---------- |
| **Aggregatfunktion** | Funktionen zur Zusammenfassung mehrerer Zeilen (z. B. `COUNT`, `SUM`, `MIN`, `MAX`, `AVG`). | LF11a      |
| **`COUNT`**          | Zählt **Nicht-NULL**-Werte einer Spalte.                                                    | LF5, LF11a |
| **`SUM`**            | Bildet die Summe der Werte einer Spalte.                                                    | LF5, LF11a |
| **`MIN`**            | Kleinster Wert einer Spalte.                                                                | LF5, LF11a |
| **`MAX`**            | Größter Wert einer Spalte.                                                                  | LF5, LF11a |
| **`AVG`**            | Durchschnittswert einer Spalte.                                                             | LF5, LF11a |
| **`GROUP BY`**       | Gruppiert Datensätze nach einer Spalte; Aggregate wirken je Gruppe.                         | LF5        |
| **`HAVING`**         | Filtert **Gruppen** anhand von Bedingungen nach der Aggregation.                            | LF5        |

---

## 🧭 Prozessschritte (kurz & praxisnah) <span style="background:#e0f0ff;">LF5, LF8</span>

1. **Aggregat wählen** (COUNT/SUM/MIN/MAX/AVG) passend zur Fragestellung. (LF11a) 
2. **Ohne** oder **mit `GROUP BY`** entscheiden (Gesamtergebnis vs. gruppierte Ergebnisse). (LF5) 
3. **Optional `HAVING`** einsetzen, um Gruppen nach dem Aggregat zu filtern. (LF5) 
4. Bei **Vergleichen** mit globalen Kennzahlen **Aggregat in Unterabfrage** verwenden. (LF8) 





---

