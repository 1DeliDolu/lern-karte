# Aggregatfunktionen

Aggregatfunktionen fassen mehrere Zeilen zu einer Ergebniszeile zusammen und liefern Kennzahlen wie Summen, Durchschnitte oder Anzahlen. Sie werden in SQL typischerweise mit `GROUP BY` kombiniert, um Werte pro Gruppe zu berechnen.

## Beispieltabellen

Die folgenden Beispiele beziehen sich auf eine Tabelle `bestellungsposten` mit den Spalten:

- `bestell_id` (INT)
- `kunde_id` (INT)
- `produkt` (VARCHAR)
- `menge` (INT)
- `preis` (DECIMAL)

```sql
bestell_id | kunde_id | produkt   | menge | preis
-----------+----------+-----------+-------+-------
1001       | 10       | Maus      |     2 | 19.90
1001       | 10       | Tastatur  |     1 | 49.90
1002       | 11       | Monitor   |     1 | 199.00
1003       | 10       | Kabel     |     3 |  9.90
1003       | 12       | Webcam    |     1 | 89.00
```

## SUM

`SUM` bildet die Summe eines numerischen Ausdrucks. In Kombination mit einer Multiplikation lassen sich z. B. Umsaetze je Bestellung berechnen.

```sql
SELECT bestell_id,
       SUM(menge * preis) AS gesamtbetrag
FROM bestellungsposten
GROUP BY bestell_id;
```

Ergebnis:

```sql
bestell_id | gesamtbetrag
-----------+-------------
1001       |  89.70
1002       | 199.00
1003       | 118.70
```

## AVG

`AVG` liefert den Durchschnittswert.

```sql
SELECT kunde_id,
       AVG(preis) AS durchschnittspreis
FROM bestellungsposten
GROUP BY kunde_id;
```

Beispielergebnis:

```sql
kunde_id | durchschnittspreis
---------+-------------------
10       | 26.57
11       | 199.00
12       | 89.00
```

## COUNT

`COUNT` ermittelt die Anzahl an Zeilen oder Werten.

```sql
SELECT produkt,
       COUNT(*) AS verkaufte_positionen
FROM bestellungsposten
GROUP BY produkt;
```

### COUNT(DISTINCT ...)

Mit `COUNT(DISTINCT spalte)` lassen sich unterschiedliche Werte zaehlen.

```sql
SELECT COUNT(DISTINCT kunde_id) AS anzahl_kunden
FROM bestellungsposten;
```

## GROUP BY

`GROUP BY` definiert, wie Zeilen gruppiert werden. Jede Spalte im `SELECT`, die keine Aggregatfunktion ist, muss im `GROUP BY` stehen.

```sql
SELECT kunde_id,
       produkt,
       SUM(menge) AS gesamtmenge
FROM bestellungsposten
GROUP BY kunde_id, produkt
ORDER BY kunde_id, produkt;
```

## HAVING

`HAVING` filtert Gruppenergebnisse nach der Aggregation.

```sql
SELECT kunde_id,
       SUM(menge * preis) AS umsatz
FROM bestellungsposten
GROUP BY kunde_id
HAVING SUM(menge * preis) > 100
ORDER BY umsatz DESC;
```

Nur Kundinnen und Kunden mit einem Umsatz ueber 100 werden ausgegeben.

## Weitere Aggregate

- `MIN` / `MAX`: kleinster bzw. groesster Wert einer Spalte
- `STRING_AGG` (DBMS-abhaengig): fasst Strings zu einer Liste zusammen
- `STDDEV`, `VARIANCE`: statistische Kennzahlen (je nach Datenbank)

## Tipps

- Verwende Aliase (`AS ...`), damit Spaltennamen im Ergebnis sprechend sind.
- Pruefe Datentypen: `AVG` einer Ganzzahl liefert in einigen Systemen ebenfalls eine Ganzzahl, ggf. vorher casten.
- Bei grossen Datenmengen koennen Indizes auf den Gruppierungsspalten die Performance deutlich verbessern.
