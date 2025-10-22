# 🧮 Normalisieren: 1. bis 3. Normalform <span style="background:#e0f0ff;">LF8</span>

**Normalisierung** ist das strukturierte Verfahren, um **Redundanzen** in relationalen Datenmodellen zu verringern und damit die **Datenkonsistenz** zu erhöhen. In der Praxis werden i. d. R. die **1. NF** bis **3. NF** angewendet; 4. NF und 5. NF sind selten nötig. Die Normalisierung ist Teil der **logischen Phase** des Datenbankdesigns und optimiert das aus ER-Modellen abgeleitete relationale Schema.   

---

## 🧭 Ausgangspunkt & Ziel (Beispiel „Bestellung“) <span style="background:#e0f0ff;">LF8</span>

Als Ausgangsdaten dient eine **nicht normalisierte** Tabelle **Bestellung** mit wiederholten Feldern (*Bestellpositionen*) und zusammengesetzten Angaben (*Kunde*):

| BestellNr | Datum      | Kunde (Name, KNr) | Bestellpositionen                                           |   |
| --------- | ---------- | ----------------- | ----------------------------------------------------------- | - |
| 1         | 12.12.2020 | Maier – KNr 71    | 1) 2 Tische Nr. 12; 2) 3 Schränke Nr. 88                    |   |
| 2         | 14.12.2020 | Maier – KNr 71    | 1) 4 Stühle Nr. 67                                          |   |
| 3         | 14.12.2020 | Schulz – KNr 33   | 1) 4 Tische Nr. 12; 2) 8 Stühle Nr. 67; 3) 1 Schrank Nr. 88 |   |

Ziel ist die schrittweise Überführung in **3. NF**: atomare Werte (1. NF) → Entfernung **partieller Abhängigkeiten** (2. NF) → Entfernung **transitiver Abhängigkeiten** (3. NF).  

---

## 1️⃣ Erste Normalform (1. NF) <span style="background:#e0f0ff;">LF8</span>

**Definition:** Eine Tabelle liegt in der **1. NF**, wenn alle **Attribute atomar** (einfache, unteilbare Werte) sind – keine Listen/Feldwiederholungen. 

**Umsetzung im Beispiel:**

* Spalte **Kunde** wird zu **KNr** und **Name** aufgeteilt.
* Aus **Bestellpositionen** werden **Pos**, **ANr**, **Bezeichnung**, **Anzahl**.
* **Primärschlüssel** wird **(BestellNr, Pos)**. 

**Resultat (Ausschnitt, 1. NF):**

| BestellNr | Pos | Datum      | KNr | Name   | ANr | Bezeichnung | Anzahl |   |
| --------- | --: | ---------- | --: | ------ | --: | ----------- | -----: | - |
| 1         |   1 | 12.12.2020 |  71 | Maier  |  12 | Tisch       |      2 |   |
| 1         |   2 | 12.12.2020 |  71 | Maier  |  88 | Schrank     |      3 |   |
| 2         |   1 | 14.12.2020 |  71 | Maier  |  67 | Stuhl       |      4 |   |
| 3         |   1 | 14.12.2020 |  33 | Schulz |  12 | Tisch       |      4 |   |

---

## 2️⃣ Zweite Normalform (2. NF) <span style="background:#e0f0ff;">LF8</span>

**Definition:** **2. NF** gilt, wenn die Tabelle **1. NF** erfüllt und **alle Nicht-Primärschlüsselattribute vom gesamten (zusammengesetzten) Primärschlüssel** abhängen. **Partielle Abhängigkeiten** (nur von einem Teil des Schlüssels) sind zu entfernen. 

**Begründung im Beispiel:**

* **Datum**, **KNr**, **Name** hängen **nur von BestellNr** (nicht von *BestellNr+Pos*) ab ⇒ **partielle Abhängigkeiten**.
* Lösung: Aufspaltung in **Bestellung** (*BestellNr → Datum, KNr, Name*) und **BestellPosition** (*BestellNr, Pos → ANr, Bezeichnung, Anzahl*), verknüpft über **1:n** nach **BestellNr**. 

**Resultat (2. NF):** Zwei Tabellen **Bestellung** und **BestellPosition** mit den gezeigten Spalten. 

---

## 3️⃣ Dritte Normalform (3. NF) <span style="background:#e0f0ff;">LF8</span>

**Definition:** **3. NF** gilt, wenn **2. NF** erfüllt ist und **kein Nichtschlüsselattribut transitiv** von einem Schlüssel abhängt (d. h. Nichtschlüssel → Nichtschlüssel → …). 

**Begründung im Beispiel:**

* In **BestellPosition** sind **ANr → Bezeichnung** (Artikelnummer bestimmt Bezeichnung) **transitiv**; ebenso in **Bestellung** **KNr → Name**.
* Lösung: Auslagerung transitiver Attribute in eigene Tabellen **Kunde(KNr, Name, …)** und **Artikel(ANr, Bezeichnung, …)**; **Bestellung** referenziert **Kunde**, **BestellPosition** referenziert **Artikel**. 

**Resultat (3. NF – Schema aus dem PDF):**
**Bestellung(BestellNr, Datum, KNr)** ⟷ **BestellPosition(BestellNr, Pos, ANr, Anzahl)**; sowie **Kunde(KNr, …Name…)** und **Artikel(ANr, Bezeichnung)**. Redundanzen sind beseitigt. 

---

## 💻 SQL-Beispiel (entsprechend der PDF-Tabellen) <span style="background:#e0f0ff;">LF8</span>

Die folgende **SQL-DDL** bildet **genau** die im PDF gezeigten Tabellen der **3. NF** ab. Die Syntax orientiert sich am im Material gezeigten SQL-Grundgerüst.  

```sql
-- Kunden und Artikel (transitive Attribute ausgelagert)
CREATE TABLE Kunde (
  KNr        INTEGER PRIMARY KEY,
  Name       VARCHAR(100) NOT NULL
);

CREATE TABLE Artikel (
  ANr        INTEGER PRIMARY KEY,
  Bezeichnung VARCHAR(100) NOT NULL
);

-- Bestellung (verweist auf Kunde)
CREATE TABLE Bestellung (
  BestellNr  INTEGER PRIMARY KEY,
  Datum      DATE NOT NULL,
  KNr        INTEGER NOT NULL,
  FOREIGN KEY (KNr) REFERENCES Kunde(KNr)
);

-- Bestellposition (Zwischentabelle mit zusammengesetztem Schlüssel)
CREATE TABLE BestellPosition (
  BestellNr  INTEGER NOT NULL,
  Pos        INTEGER NOT NULL,
  ANr        INTEGER NOT NULL,
  Anzahl     INTEGER NOT NULL,
  PRIMARY KEY (BestellNr, Pos),
  FOREIGN KEY (BestellNr) REFERENCES Bestellung(BestellNr),
  FOREIGN KEY (ANr)       REFERENCES Artikel(ANr)
);
```

**Beispielabfragen:**

```sql
-- Alle Positionen einer Bestellung inkl. Artikelname
SELECT bp.BestellNr, bp.Pos, a.Bezeichnung, bp.Anzahl
FROM BestellPosition bp
JOIN Artikel a ON a.ANr = bp.ANr
WHERE bp.BestellNr = 3;

-- Summe je Bestellung
SELECT b.BestellNr, SUM(bp.Anzahl) AS GesamtStueck
FROM Bestellung b
JOIN BestellPosition bp ON bp.BestellNr = b.BestellNr
GROUP BY b.BestellNr;
```

 

---

## ⚖️ Hinweise zu weiteren NF & Trade-offs <span style="background:#e0f0ff;">LF8</span>

* **BCNF/4. NF/5. NF** existieren (z. B. „nur Abhängigkeiten vom Schlüssel“, „keine mehrwertigen Abhängigkeiten“), sind in der Praxis aber deutlich seltener relevant als 1.–3. NF. 
* **Über-Normalisierung** kann zu **vielen kleinen Tabellen**, komplexeren **Joins** und Performance-Nachteilen führen; es ist ein **ausgewogener Kompromiss** anzustreben – nur **unkontrollierte Redundanz** entfernen.  

---

## 🧪 Mini-Fall: Bibliothek (Hinweis aus dem PDF) <span style="background:#e0f0ff;">LF8</span>

Im Bibliotheksbeispiel werden für die 3. NF u. a. **Adressfelder atomar** gemacht (PLZ/Ort/Straße) und **transitive Abhängigkeiten** (z. B. *VNr → Verlagsname*, *ISBN → Titel/Auflage*) ausgelagert. Vorgehen analog wie oben. 

---

## 📚 Begriffstabelle

| Begriff             | Definition                                                                                                                                 | Quelle |
| ------------------- | ------------------------------------------------------------------------------------------------------------------------------------------ | ------ |
| **Normalisierung**  | Verfahren zur Reduzierung von **Redundanz** und Erhöhung der **Konsistenz** in relationalen Modellen.                                      | LF8    |
| **1. NF**           | Alle Attribute sind **atomar** (keine Listen/Wiederholungen).                                                                              | LF8    |
| **2. NF**           | 1. NF **und** alle Nichtschlüsselattribute hängen vom **gesamten** (zusammengesetzten) Schlüssel ab (**keine partiellen Abhängigkeiten**). | LF8    |
| **3. NF**           | 2. NF **und** **keine transitiven Abhängigkeiten** von Nichtschlüsselattributen.                                                           | LF8    |
| **Primärschlüssel** | Minimale Attributkombination, die jeden Datensatz eindeutig identifiziert.                                                                 | LF5    |
| **Fremdschlüssel**  | Attribut, das auf den Primärschlüssel einer anderen Tabelle verweist (Relationen verknüpfen).                                              | LF8    |

---

## 🛠️ Prozessschritte (praxisnah nach PDF) <span style="background:#e0f0ff;">LF8</span>

1. **Konzeptionell modellieren** (z. B. **ER-Modell**). 
2. **Logisches Modell** erstellen (Relationen, Schlüssel). 
3. **Normalisieren**:
   a) **1. NF** – Felder atomarisieren. 
   b) **2. NF** – partielle Abhängigkeiten entfernen. 
   c) **3. NF** – transitive Abhängigkeiten entfernen. 
4. **Implementieren** (SQL-DDL erstellen) und testen.  

---

## ✅ Kurzfazit

* 1.–3. NF sind das **Alltagswerkzeug** zur sauberen Relationengestaltung. **Beispiel „Bestellung“** zeigt den Weg von **ungeregelten Wiederholungen** zur **klaren 3. NF** mit **Bestellung**, **BestellPosition**, **Kunde**, **Artikel**. 
* **Nicht** blind „bis zum Maximum“ normalisieren – **Balance** zwischen **Redundanzfreiheit** und **Performance** halten. 

---

## 🧩 Bonus: Prüfungsnahe Übungsideen (aus dem Material) <span style="background:#e0f0ff;">LF8</span>

* Tabellen mit **Listenfeldern** (z. B. „Flüsse je Land“) bis **3. NF** normalisieren. 
* Bereits vorhandene Schemata bewerten: **Erfüllen sie 3. NF?** Wenn nicht, **normalisieren**. 

Wenn du möchtest, passe ich das SQL-Beispiel auf dein konkretes Szenario an (Tabellennamen/Felder von dir) – komplett in **3. NF**.


---

