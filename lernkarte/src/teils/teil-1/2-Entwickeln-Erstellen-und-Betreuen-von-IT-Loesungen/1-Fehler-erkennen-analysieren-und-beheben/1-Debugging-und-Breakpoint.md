# 🪲 Debugging & Breakpoint <span style="background:#e0f0ff;">LF5, LF11a</span>

**Debugging** bezeichnet das systematische Auffinden und Analysieren von Fehlern im Programm mithilfe geeigneter Werkzeuge. Eine zentrale Rolle spielt dabei der **Debugger**, mit dem Programme **Schritt für Schritt** ausgeführt und **Programmzustände untersucht** werden (LF5). 
Der **Breakpoint** (Haltepunkt) wird im **Prüfungskatalog** als explizites Thema geführt („Debugging, Breakpoint“) und gehört damit zum geprüften Stoff; in den bereitgestellten Lernfeldunterlagen wird das zugrunde liegende Arbeiten **im Debugger** (Schritt-für-Schritt-Ausführung, Zustandsprüfung) beschrieben (LF11a, LF5). *(AP2-Katalog, LF5, LF11a)*

Die **IDE** bündelt diese Werkzeuge (Editor, Compiler/Interpreter, **Debugger**, Versionsverwaltung) unter einer Oberfläche; Beispiele sind Eclipse, Visual Studio, PyCharm (LF5). 

---

## ⚙️ Prozessschritte beim Fehlersuchen & Testen

Ein strukturierter **Testprozess** schafft die Grundlage für wirksames Debugging. Er umfasst u. a. **Testplanung**, **Testentwurf**, **Testvorbereitung**, **Testdurchführung**, **Testauswertung** und **Testabschluss** (LF5). 
**Testverfahren** werden in **statische** und **dynamische** Verfahren gegliedert; dynamische Verfahren umfassen z. B. **Whitebox-** und **Blackbox-Tests** (LF5). 
**Modultests/Unittests** sind die unterste Teststufe; sie werden in modernen Prozessen häufig **automatisiert** und nach **F.I.R.S.T.-Prinzipien** (Fast, Independent, Repeatable, Self-Validating, Timely) gestaltet (LF11a). 

---

## 🧪 Methoden, die Debugging unterstützen

* **Whitebox-Test**: Testfälle mit Kenntnis des Quellcodes; z. B. Anweisungs-, Zweig-, Pfadüberdeckung (LF5, LF11a).
* **Blackbox-Test**: Testfälle ohne Codekenntnis, z. B. Äquivalenzklassen, Grenzwertanalyse (LF11a). 
* **Automatisierte Unittests** in **Java** (JUnit 5) und **Python** (`unittest`) mit typischen **Assertions** (LF11a).

---

## 💻 Beispielcode (vollständig & direkt nutzbar)

### Java: JUnit-Unittest zu einer Summenfunktion <span style="background:#e0f0ff;">LF11a</span>

Der Beispieltest prüft die Methode `calculateSum`. *(Formatierung minimal bereinigt; Inhalt gemäß Quelle.)* (LF11a)

```java
import static org.junit.jupiter.api.Assertions.assertEquals;
import org.junit.jupiter.api.Test;

class BeispielJUnitTest {

    // Unittest
    @Test
    void testCalculateSum() {
        int testValue1 = 3;
        int testValue2 = 1;
        int expectedResult = 4;

        int result = calculateSum(testValue1, testValue2);
        assertEquals(expectedResult, result, "Summe falsch");
    }

    // zu testende Methode
    static int calculateSum(int x, int y) {
        return x + y;
    }
}
```

### Python: Projekt anlegen & erstes Programm in PyCharm <span style="background:#e0f0ff;">LF5</span>

Erstes lauffähiges Programm; PyCharm stellt u. a. **Debugger** bereit (LF5).

```python
print("Mein erstes Programm")
```

> **Hinweis zum Debugger-Einsatz:** In der IDE (z. B. PyCharm/Eclipse) kann der Debugger Programme **schrittweise** ausführen und **Zustände untersuchen**; damit werden Fehler systematisch lokalisiert (LF5). 

---

## 📚 Praktische Illustrationen (Testverfahren) <span style="background:#e0f0ff;">LF11a</span>

* **Grenzwertanalyse & Äquivalenzklassen**: Bildung gültiger/ungültiger Klassen und Auswahl repräsentativer Grenzwerte für Testdaten (LF11a). 
* **Whitebox-Beispiel**: Ableitung von Testdaten für **Anweisungs-** und **Zweigüberdeckung** anhand Pseudocode und Ablaufplan (LF11a). 

---

## 📖 Begriffe & Definitionen

| Begriff                     | Definition                                                                                                          | Quelle     |
| --------------------------- | ------------------------------------------------------------------------------------------------------------------- | ---------- |
| **Debugging**               | Systematische Fehlersuche in Programmen unter Nutzung geeigneter Werkzeuge.                                         | (LF5)      |
| **Debugger**                | Entwicklungswerkzeug zum **Schritt-für-Schritt-Ausführen** und **Untersuchen von Programmzuständen**.               | (LF5)      |
| **Breakpoint (Haltepunkt)** | Im **Prüfungskatalog** als Thema genannt; fachlich verankert im Debugger-Vorgehen (Schritt-/Zustandsanalyse).       | (AP2, LF5) |
| **Whitebox-Test**           | Dynamischer Test mit Codekenntnis; Ziele über Kontrollfluss-Überdeckungen (Anweisung, Zweig, Pfad …).               | (LF5)      |
| **Blackbox-Test**           | Dynamischer Test ohne Codekenntnis; z. B. Äquivalenzklassen, Grenzwertanalyse.                                      | (LF11a)    |
| **Unittest**                | Automatisierter **Modultest** einzelner Funktionen/Klassen; häufig mit **JUnit** (Java) oder **unittest** (Python). | (LF11a)    |
| **F.I.R.S.T.-Prinzipien**   | Fast, Independent, Repeatable, Self-Validating, Timely – Qualitätskriterien guter Unittests.                        | (LF11a)    |

---

## 🎯 Ziele beim Debugging

1. **Fehler schnell reproduzieren** (klare Testfälle/Unittests). *(LF11a)* 
2. **Ursache eingrenzen** (Schritt-für-Schritt im **Debugger**, Zustände prüfen). *(LF5)* 
3. **Korrektur validieren** (Tests erneut ausführen; **Regression** vermeiden). *(LF11a)* 

---

## 🧭 Wo steht „Breakpoint“ in den Unterlagen?

* **Prüfungskatalog AP2** listet „**Debugging, Breakpoint**“ ausdrücklich als Thema der Teilkompetenz „01 Fehler erkennen, analysieren und beheben“ (AP2). 
* In den Lernfeld-Materialien wird das **Debuggen** (inkl. Schritt-Ausführung & Zustandsanalyse durch den **Debugger**) ausführlich beschrieben; eine **separate Begriffsdefinition „Breakpoint“** ist dort nicht isoliert ausgeführt (LF5). 

Wenn du möchtest, setze ich darauf aufbauend **konkrete Debug-Abläufe in PyCharm oder Eclipse** (mit Haltepunkten), strikt entlang der hier zitierten Inhalte.


---

## [➡️ Nächstes](./2-Softwaretests-Blackbox-Whitebox-Review.md)