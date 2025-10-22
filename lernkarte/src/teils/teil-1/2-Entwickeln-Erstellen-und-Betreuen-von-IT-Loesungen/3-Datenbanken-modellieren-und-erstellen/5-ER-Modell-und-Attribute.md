# 🗃️ ER-Modell, Attribute, Beziehungen, Kardinalitäten, Primär- & Fremdschlüssel — inkl. Integritätsbezug

Ein **Entity-Relationship-Modell (ER-Modell)** beschreibt Entitätstypen (z. B. *Person, Firma, Artikel*), deren **Attribute** (z. B. *Kundennummer, Name, Geburtsdatum*) sowie **Beziehungen** zwischen Entitäten; Beziehungen werden im ER-Diagramm als Raute dargestellt und können bei *m:n* auch eigene Attribute besitzen. *(LF5)* 
**Kardinalitäten** charakterisieren, in welchem Verhältnis Entitäten zueinander stehen (**1:1**, **1:n**, **m:n**) und werden mit Beispielen wie *Mitarbeiter–Personalakte (1:1)*, *Gebäude–Raum (1:n)* oder *Kunde–Artikel (m:n)* erläutert. *(LF5)* 

**Primärschlüssel (PK)** identifizieren Datensätze eindeutig; häufig werden künstliche Schlüssel (*ID/Nr*) verwendet, um Eindeutigkeit sicherzustellen und „sprechende Schlüssel“-Probleme zu vermeiden. *(LF5)* 
Ein **Fremdschlüssel (FK)** ist ein Attribut, das auf den PK einer (ggf. derselben) Tabelle verweist; Datentyp von FK und referenziertem PK müssen übereinstimmen. *(LF5)* 

Eine **m:n-Beziehung** wird im relationalen Modell **nicht direkt** abgebildet; üblich ist eine **Zwischen-/Kreuztabelle** mit zwei FKs, deren Kombination oft einen **zusammengesetzten PK** bildet (z. B. *Mitarbeiter_Projekt*). *(LF5)* 
Sonderfall: Ist die Anzahl der an einer Beziehung beteiligten Entitäten **fest (genau zwei)**, kann ausnahmsweise auf eine Kreuztabelle verzichtet werden (Beispiel *Mannschaft–Spiel*). *(LF5)* 

> **Hinweis zur „referenziellen Integrität“, Aktualisierungs- & Löschweitergabe:**
> In den vorliegenden Materialien werden **FOREIGN KEY/REFERENCES** zur Verknüpfung von Tabellen und **UPDATE/DELETE**-Befehle behandelt; spezifische Begriffe **„referenzielle Integrität“**, **„Aktualisierungsweitergabe“** und **„Löschweitergabe“** (z. B. *ON UPDATE/DELETE CASCADE*) werden **nicht explizit erläutert**. **Transaktionsbefehle (TCL)** werden als Mittel zur Sicherung der **Datenintegrität** genannt. *(LF11a, LF5)* 

---

## 🧩 Zentrale Begriffe & Beispiele (mit Quellen)

* **Entitätstyp**: „Dinge der realen Welt“ wie *Person, Firma, Artikel*; im ER-Modell als Rechteck dargestellt. *(LF5)* 
* **Attribut**: Eigenschaft einer Entität (z. B. *SchülerNr, Vorname, Nachname, Geburtsdatum*). Ein eindeutig identifizierendes Attribut (z. B. *Kundennummer*) wird im ER-Diagramm **unterstrichen**. *(LF5)* 
* **Beziehungstyp**: semantische Verbindung zwischen Entitäten; bei *m:n* können der **Beziehung** Attribute zugeordnet werden. *(LF5)* 
* **Kardinalitäten**: **1:1**, **1:n**, **m:n**; inkl. Anwendungsbeispielen. *(LF5)* 
* **1:n-Beispiel**: *Abteilung–Mitarbeiter* (eine Abteilung → viele Mitarbeiter); FK in **Mitarbeiter** verweist auf **Abteilung**. *(LF5)* 
* **m:n-Beispiel**: *Mitarbeiter–Projekt* via Kreuztabelle mit **zwei FKs** und **zusammengesetztem PK**. *(LF5)* 
* **ER→Relational**: Transformationsregeln — *jeder Entitätstyp → Tabelle*, *PK aus markierten Attributen (oder künstlich)*. *(LF5)* 
* **Phasenmodell DB-Entwicklung**: *Konzeptionell (ER)* → *Logisch (relational: PK/FK, Normalisierung)* → *Implementationsphase (SQL-Schema)*; Beispiel *Hersteller–Artikel–Produktion* (PK/FK-Kennzeichnung). *(LF8)* 

---

## 💾 Vom ER-Modell zum relationalen Schema (Prozessschritte)

1. **Konzeptionelle Phase:** ER-Modell mit Entitäten, Attributen, Beziehungen, Kardinalitäten erstellen. *(LF8)* 
2. **Logische Phase:** ER-Modell in **relationale Tabellen** überführen; PK/FK festlegen; **Normalisierung** zur Optimierung (s. Verweis im Material). *(LF8)* 
3. **Implementationsphase:** SQL-Schema erzeugen (Datentypen, Wertebereiche, Relationen). *(LF8)* 
4. **Transformationsregeln anwenden:** Entität→Tabelle; PK setzen (natürlich oder künstlich). *(LF5)* 

---

## 🛠️ Beispielcode & Illustrationen (aus den Materialien)

### 1) ER→SQL (Implementationsphase; Beispielzeile aus dem Material)

```sql
CREATE TABLE Hersteller (HNr INTEGER, Name VARCHAR(50), PRIMARY KEY(HNr));
```

*(LF8)* 

### 2) SQL-JOIN (Beispiel für verknüpfte Tabellen mittels PK/FK)

Ohne `JOIN` (Kommata-Syntax):

```sql
SELECT P.Name, P.Vorname, O.Name
FROM Person P, Wohnort O
WHERE O.OrtID = P.OrtID AND O.Name = 'Hamburg';
```

Mit `INNER JOIN`:

```sql
SELECT P.Name, P.Vorname, O.Name
FROM Person P
INNER JOIN Wohnort O ON P.OrtID = O.OrtID
WHERE O.Name = 'Hamburg';
```

*(LF5)* 

### 3) PK/FK in DDL (Syntaxvorlage aus der „Übersicht SQL-Befehle“)

```sql
CREATE TABLE tabellenname (
  spaltenname datentyp,
  ...
  PRIMARY KEY (spaltenname),
  FOREIGN KEY (spaltenname) REFERENCES andere_tabelle(pk_spalte)
);
```

*(LF11a)* 

> **Anmerkung:** Die Übersicht zeigt `FOREIGN KEY … REFERENCES …` zur Definition von Verweisen. Optionen wie „ON UPDATE/DELETE …“ werden in den vorliegenden Materialien **nicht** ausgeführt. *(LF11a)* 

---

## 📚 Praxisbeispiele (aus den Materialien)

* **Kunde–Bestellung–Bestellposition–Artikel**: Tabellen mit PKs; in *Bestellposition* wird ein **zusammengesetzter PK (BestellNr, Pos)** gebildet; Beziehungen sind **1:n** (z. B. Kunde→Bestellung). *(LF5)* 
* **Abteilung–Mitarbeiter (1:n)**: FK `AbteilungsNr` in *Mitarbeiter* verweist auf PK der *Abteilung*. *(LF5)* 
* **Mitarbeiter–Projekt (m:n)**: **Kreuztabelle** mit **zwei FKs**; Kombination bildet oft den **PK**. *(LF5)* 
* **Sonderfall m:n ohne Kreuztabelle** (genau zwei Beteiligte pro *Spiel*): *Mannschaft–Spiel*. *(LF5)* 

---

## 🧠 Integritäts- und Konsistenzbezug im Material

* **Datenkonsistenz** = Widerspruchsfreiheit der Daten; **Datenredundanz** begünstigt **Datenanomalien** und ist zu vermeiden. *(LF5)* 
* **TCL-Befehle (z. B. COMMIT/ROLLBACK)** dienen der Sicherstellung der **Datenintegrität** auf Transaktionsebene. *(LF5)* 
* **UPDATE/DELETE** als DML-Befehle sind enthalten; Details zu **Aktualisierungs-/Löschweitergabe** (Kaskaden) fehlen in den Materialien. *(LF11a)* 

---

## 🔤 Begriffstabelle

| Begriff                        | Definition (Kurz)                                                                        | Quelle |
| ------------------------------ | ---------------------------------------------------------------------------------------- | ------ |
| **Entitätstyp**                | Gegenstand der Modellierung (z. B. Person, Firma, Artikel).                              | (LF5)  |
| **Attribut**                   | Eigenschaft einer Entität; identifizierendes Attribut wird im ER-Diagramm unterstrichen. | (LF5)  |
| **Beziehungstyp**              | Semantische Verbindung zwischen Entitäten; bei *m:n* ggf. eigene Attribute.              | (LF5)  |
| **Kardinalität 1:1**           | Genau eine Zuordnung je Seite (z. B. Mitarbeiter–Personalakte).                          | (LF5)  |
| **Kardinalität 1:n**           | Eine Entität → viele auf der anderen Seite (z. B. Abteilung–Mitarbeiter).                | (LF5)  |
| **Kardinalität m:n**           | Viele ↔ viele; Abbildung via Kreuztabelle mit zwei FKs.                                  | (LF5)  |
| **Primärschlüssel (PK)**       | Eindeutige Identifikation eines Datensatzes; oft künstliche IDs.                         | (LF5)  |
| **Fremdschlüssel (FK)**        | Attribut verweist auf PK einer Tabelle; Datentypen müssen übereinstimmen.                | (LF5)  |
| **Transformationsregeln**      | Entität→Tabelle; PK festlegen (natürlich/künstlich).                                     | (LF5)  |
| **DB-Phasen**                  | Konzeptionell → logisch (PK/FK, Normalisierung) → Implementierung (SQL).                 | (LF8)  |
| **Datenkonsistenz/-redundanz** | Widerspruchsfreiheit; Redundanz erzeugt Anomalien → vermeiden.                           | (LF5)  |
| **DDL/DML/DCL/TCL**            | DDL: Struktur; DML: Daten; DCL: Rechte; TCL: Integrität per Transaktionen.               | (LF5)  |

---

## ⚙️ Methoden & Ziele

* **Ziel ER-Modellierung:** fachlich korrekte Struktur (Entitäten, Attribute, Beziehungen, Kardinalitäten) als Grundlage für das relationale Design. *(LF8, LF5)* 
* **Methode m:n-Auflösung:** **Kreuztabelle** mit zwei FKs; optional zusammengesetzter PK; benennen z. B. *Mitarbeiter_Projekt*. *(LF5)* 
* **Verknüpfung in Abfragen:** `JOIN` zwischen PK/FK-Spalten zur inhaltlichen Verbindung von Tabellen. *(LF5)* 

---

## 📝 Wichtiger Quellenhinweis (zu den angefragten Stichworten)

* **„Referenzielle Integrität“, „Aktualisierungsweitergabe“, „Löschweitergabe“** werden in den bereitgestellten PDFs **nicht separat definiert**. Die Materialien zeigen aber die **FK-Definition** (`FOREIGN KEY … REFERENCES …`) sowie **UPDATE/DELETE** als DML-Befehle und **TCL** zur Integritätssicherung auf Transaktionsebene. *(LF11a, LF5)* 

Wenn du möchtest, erstelle ich dir im nächsten Schritt anhand der obigen Beispiele ein vollständiges relationales Schema (DDL) für ein kleines ER-Modell aus den Materialien (z. B. *Kunde–Bestellung–Bestellposition–Artikel*) — streng auf Basis der gezeigten Syntax.


---

