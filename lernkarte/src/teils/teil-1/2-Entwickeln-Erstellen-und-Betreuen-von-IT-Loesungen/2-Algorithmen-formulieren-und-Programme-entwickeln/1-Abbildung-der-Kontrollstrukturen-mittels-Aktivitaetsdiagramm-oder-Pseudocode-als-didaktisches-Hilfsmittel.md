# 🎛️ Abbildung der **Kontrollstrukturen** mittels **Aktivitätsdiagramm** oder **Pseudocode** als didaktisches Hilfsmittel <span style="background:#e0f0ff;">LF5, LF8, LF10a, LF11a</span>

Kontrollstrukturen wie **Verzweigungen** und **Schleifen** werden im Lehrwerk sowohl in **UML-Aktivitätsdiagrammen** als auch in **Pseudocode** bzw. Python-Beispielen systematisch dargestellt. Aktivitätsdiagramme beschreiben das **Verhalten** durch **Aktionen** und **Kontrollfluss**, inklusive **Verzweigung**, **Zusammenführung**, **Aufspaltung** (Fork) und **Synchronisation** (Join). (LF11a). 
UML wird dabei ausdrücklich als flexible Modellierungssprache für Verhaltensdarstellungen (u. a. **Aktivitätsdiagramm**, **Zustandsdiagramm**) eingeführt. (LF8). 
Die konkreten **Kontrollstrukturen** (Bedingungen, **Schleifen**) sind im Stoff anhand von Definitionen, Operatoren und vollständigen Codebeispielen (Python) ausgearbeitet. (LF5). 

---

## 🧠 Grundlagen: Was wird womit dargestellt?

* **Aktivitätsdiagramm (UML)**: Notationselemente sind **Startknoten**, **Endknoten**, **Ablaufende**, **Aktion**, **Kante** (Kontrollfluss), **Verzweigung** (mit Bedingungen), **Zusammenführung**, **Aufspaltung** (parallel beginnen) und **Synchronisation** (parallel beenden). (LF11a). 
* **Pseudocode**: Wird im Lehrwerk zur **algorithmennahen** Darstellung genutzt (z. B. zur Testdatenableitung). Beispielhaft: „**Wenn** … **UND** … dann … **Rückgabe** …”. (LF11a). 
* **Kontrollstrukturen (imperativ/strukturiert)**: **Verzweigungen** (mit **relationalen** und **Booleschen** Operatoren) sowie **Schleifen** (**kopfgesteuert**/`while`, **fußgesteuert** konzeptionell, **Zählschleife**/`for`). (LF5).  

---

## 🔀 Mapping-Tabelle: Kontrollstruktur → Aktivitätsdiagramm & Pseudocode

| Begriff                      | Definition/Abbildung                                                                                     | Quelle   |
| ---------------------------- | -------------------------------------------------------------------------------------------------------- | -------- |
| **Sequenz**                  | Aufeinanderfolgende **Aktionen** verbunden durch **Kanten** (Kontrollfluss).                             | (LF11a)  |
| **Selektion (if/else)**      | **Verzweigung** mit Bedingungen (Guards) und **Zusammenführung** des Flusses.                            | (LF11a)  |
| **Parallelität**             | **Aufspaltung** (Fork) startet parallele Aktionen, **Synchronisation** (Join) führt sie wieder zusammen. | (LF11a)  |
| **Schleife (kopfgesteuert)** | Als Pseudocode/Code: `while (Bedingung) …`; Bedingung steht am **Kopf** (abweisend).                     | (LF5)    |
| **Schleife (Zählschleife)**  | Als Pseudocode/Code: `for` mit Laufvariable/`range(...)`.                                                | (LF5)    |
| **Bedingungen**              | **Relationale** (`==`, `!=`, `<`, `>`, `<=`, `>=`) und **Boolesche** Operatoren (`not`, `and`, `or`).    | (LF5)    |
| **Pseudocode-Beispiel**      | Lehrwerks-Pseudocode mit `Wenn … UND …` und `Rückgabe` (s. unten).                                       | (LF11a)  |

---

## 🧑‍🏫 Beispiel 1 – **If/Else**: Aktivitätsdiagramm ↔︎ Pseudocode

**Pseudocode (aus dem Lehrwerk):** (LF11a) 

```
prüfeYachtdaten(länge: int, breite: int, tiefgang: int) : boolean
    datenOk := FALSE
    Wenn länge > 0 UND länge < 20:
        Wenn breite > 0 UND breite < 5:
            Wenn tiefgang > 0 UND tiefgang < 3:
                datenOk := TRUE
    Rückgabe: datenOk
```

**Didaktische Abbildung im Aktivitätsdiagramm:**
Die drei **Bedingungen** werden als **Verzweigungen** modelliert; jede Prüfung führt entlang einer Kante entweder weiter (wahr) oder zum Ablaufende (falsch). Am Ende wird der Fluss **zusammengeführt**, bevor die Aktivität endet. (LF11a). 

**Ergänzendes Code-Beispiel (If/Else in Python-GUI-Event):** (LF10a) 

```python
def cbText1_click(self):
    if self.cbText1.isChecked():
        self.lblText1.setVisible(True)
    else:
        self.lblText1.setVisible(False)
```

Dieses Beispiel illustriert dieselbe **Selektion** wie im Aktivitätsdiagramm, nur als ausführbarer Code. (LF10a). 

---

## 🔁 Beispiel 2 – **Schleifen**: Pseudocode/Code (kopfgesteuert & Zählschleife)

**Kopfgesteuerte Schleife (`while`):** Bedingung am **Anfang**; wird nicht betreten, wenn sie von Beginn an **false** ist. (LF5). 

```python
def ausgabe_zahlen():
    i = 0
    while i <= 10:
        print(i)
        i = i + 1
ausgabe_zahlen()
```

**Zählschleife (`for` mit Laufvariable):** Feste **Anzahl** an Wiederholungen. (LF5). 

```python
def ausgabe_sterne():
    for i in range(0, 10):
        print("*", end=" ")
ausgabe_sterne()
```

**Schleifen im Lernbeispiel „Durchschnittstemperatur“:**
Das Lehrwerk zeigt den **Algorithmus als Struktogramm** und die **`while`-Umsetzung** (kopfgesteuert) zum Einlesen von Werten und Bilden des Durchschnitts. (LF5). 

---

## 🧩 Weitere didaktische Elemente aus dem Lehrwerk

* **Operatoren für Bedingungen** (Vergleich & Logik) sind tabellarisch erläutert und werden für Verzweigungen/Schleifen verwendet. (LF5). 
* **Aktivitätsdiagramme in der Prozessanalyse** (z. B. Erfassung Liegeplatzdaten) verdeutlichen reale Abläufe mit **Verzweigungen** und Benutzer-/System-Partitionen. (LF10a). 
* **UML kontextualisiert**: Aktivitäts-, Anwendungsfall-, Klassen-, Zustands- und Sequenzdiagramme werden als zusammengehöriger Methodenbaukasten eingeführt. (LF8, Überblick). 

---

## ⚙️ Prozessschritte (didaktischer Einsatz)

1. **Anforderungsanalyse & Ist-Ablauf** erfassen (z. B. mit Aktivitätsdiagramm). (LF10a). 
2. **Kontrollstrukturen** im **Pseudocode** festlegen (Bedingungen/Schleifen). (LF11a, LF5).  
3. **Mapping** in **Aktivitätsdiagramm** (Verzweigung/Zusammenführung, ggf. Parallelität). (LF11a). 
4. **Implementierung** in Code (z. B. Python-`if`/`while`/`for`). (LF5, LF10a).  
5. **Testen** (z. B. White-Box-Tests; Ableitung aus Pseudocode/Struktur). (LF11a). 

---

## 📚 Begriffstabelle

| Begriff                     | Definition                                                                                                                            | Quelle         |
| --------------------------- | ------------------------------------------------------------------------------------------------------------------------------------- | -------------- |
| **Aktivitätsdiagramm**      | UML-Diagramm zur Beschreibung von **Abläufen** mit **Aktionen**, **Kontrollfluss**, **Verzweigung**, **Aufspaltung/Synchronisation**. | (LF11a, LF8)   |
| **Verzweigung**             | Entscheidung mit bedingten Ausgängen; Zusammenführung vereinigt Wege wieder.                                                          | (LF11a)        |
| **Pseudocode**              | Programmiersprachen-unabhängige **Algorithmusbeschreibung** (z. B. „Wenn … und … / Rückgabe“).                                        | (LF11a)        |
| **Kopfgesteuerte Schleife** | `while` – Bedingung am Anfang (abweisend).                                                                                            | (LF5)          |
| **Zählschleife**            | `for` mit Laufvariable/Range für feste Wiederholungszahl.                                                                             | (LF5)          |
| **Operatoren**              | Relationale/Boolesche Operatoren zur Formulierung von Bedingungen.                                                                    | (LF5)          |

---

## 🧪 Kompakte Beispielcodes (aus dem Lehrwerk)

**If/Else (GUI-Event, Python)** (Selektion). (LF10a) 

```python
if self.cbText2.isChecked():
    self.lblText2.setVisible(True)
else:
    self.lblText2.setVisible(False)
```

**`while` (kopfgesteuert)** und **`for` (Zählschleife)** (Iteration). (LF5)  

```python
# while
i = 0
while i < 6:
    i += 1

# for
for i in range(0, 10):
    pass
```

**Pseudocode (Validierung, aus LF11a)** (geschachtelte Bedingungen). (LF11a) 

```
Wenn länge > 0 UND länge < 20:
    Wenn breite > 0 UND breite < 5:
        Wenn tiefgang > 0 UND tiefgang < 3:
            datenOk := TRUE
```

---

### 🎯 Fazit (didaktischer Nutzen)

* **Aktivitätsdiagramme** machen **Entscheidungen** (Verzweigungen) und **Parallelität** visuell transparent. (LF11a, LF8).  
* **Pseudocode** (und die gezeigten Python-Snippets) konkretisieren **Bedingungen** und **Schleifen** für die spätere Implementierung und Testableitung (White-Box-Tests). (LF11a, LF5).  

Wenn du möchtest, erstelle ich dir im nächsten Schritt zu einem deiner Prozesse ein **konkretes Aktivitätsdiagramm** plus den **Pseudocode** dazu – strikt im Stil der obigen Notation aus dem Lehrwerk.

---
