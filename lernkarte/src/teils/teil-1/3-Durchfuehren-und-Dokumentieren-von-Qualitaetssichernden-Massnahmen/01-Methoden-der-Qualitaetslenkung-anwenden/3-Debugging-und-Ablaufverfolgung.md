# 🐞 **Debugging & Ablaufverfolgung** <span style="background:#e0f0ff;">LF5, LF6, LF11a</span>

**Debugging** ist die *Fehlersuche und -analyse* während der Programmausführung; zentrale Werkzeuge dabei sind **IDE** und **Debugger**, mit denen Programme *Schritt für Schritt* ausgeführt und **Programmzustände** untersucht werden können (z. B. Variablenwerte). *(LF5)* 
**Ablaufverfolgung** (Tracing) stützt sich in den Unterlagen auf **Log-Dateien/Ereignisprotokolle**, die Meldungen mit **Schweregraden** wie *kritisch, Warnung, Fehler, Information, Debug, Trace* enthalten; so lässt sich der **Programm-/Systemablauf** nachvollziehen. *(LF6)* 

---

## 🎯 **Ziele & Nutzen**

* **Fehler lokalisieren & Ursachen ermitteln**: Debugger ermöglicht schrittweises Ausführen und Zustandsinspektion. *(LF5)* 
* **Ablauf nachvollziehen**: Protokolle/Logs mit *Debug/Trace*-Meldungen geben eine zeitliche Spur der Ereignisse. *(LF6)* 
* **Tests unterstützen**: **Unittests** (z. B. *JUnit 5*) liefern reproduzierbare Fehlerszenarien (rot/grün, *failure/error* via Exceptions). *(LF11a)* 

---

## 🧰 **Werkzeuge & Grundlagen**

* **IDE (z. B. Eclipse, Visual Studio, PyCharm)**: vereint Editor, Compiler/Interpreter, **Debugger**, ggf. Profiler, Versionsverwaltung – alles unter einer Oberfläche. *(LF5)* 
* **Debugger**: „Entwicklungswerkzeug zur Fehlersuche; Programm *Schritt für Schritt* ausführen und Zustände untersuchen.“ *(LF5)* 
* **Konsole/Konsolenprogramme**: *schnelles Ausprobieren von Algorithmen* und **gezielte Ausgaben** mit `print(…)` zur Sichtkontrolle. *(LF5)*
* **Exception Handling**: strukturierte Fehlerbehandlung mit `try/except/else/finally`. *(LF5)* 
* **Log-Dateien & Ereignisanzeige (Windows „eventvwr“)**: Meldungen lesen/filtern; Wichtigkeit inkl. **Debug**/**Trace** analysieren. *(LF6)* 
* **Unittests (JUnit 5)**: Annotations/Assertions, klare Ergebnisse (*grün/rot*), Abgrenzung *failure* vs. *error* über Exceptions. *(LF11a)* 

---

## ⚙️ **Prozessschritte beim Debuggen & Tracing** <span style="background:#e0f0ff;">LF5, LF6, LF11a</span>

1. **Fehler reproduzieren** – ideal per **Unittest** (JUnit: `@Test`, `assertEquals`, rot/grün; *failure/error* via Exceptions). *(LF11a)* 
2. **Eingrenzen** – in der **IDE** Debugger starten, *Schritt-für-Schritt* ausführen, Zustände prüfen. *(LF5)* 
3. **Ablaufverfolgung** – **Logs/Ereignisanzeige** auswerten; Schweregrade inkl. *Debug/Trace* nutzen, um zeitliche Ketten zu erkennen. *(LF6)* 
4. **Fehlerbehandlung implementieren** – **Exceptions** abfangen (`try/except/else/finally`) und saubere Pfade testen. *(LF5)* 
5. **Verifikation** – Unittests erneut ausführen (grün) und ggf. weitere Tests ergänzen. *(LF11a)* 
6. **Systemsicht prüfen** – bei System-/Netzwerkthemen zusätzlich typische **IT-Störungsfälle**/Tools (z. B. Ereignisanzeige, Sniffer) heranziehen. *(LF6)* 

---

## 🧪 **Beispielcode & Ausschnitte aus den Unterlagen**

### 1) **Exception Handling** in Python (Strukturschablone) <span style="background:#e0f0ff;">LF5</span>

*(zur robusten Fehlerbehandlung während des Debuggens)* 

```python
try:
    # Anweisungen, bei denen eine Exception auftreten könnte
except Exception as e:
    # Behandlung der Exception
else:
    # optional: wird nur ausgeführt, wenn keine Exception aufgetreten ist
finally:
    # optional: wird immer durchlaufen
```

### 2) **Konsolen-Ausgaben** zur Sichtprüfung (Python) <span style="background:#e0f0ff;">LF5</span>

*(für schnelle Überprüfung von Zwischenwerten beim Debuggen)* 

```python
print("Wert x:", x)      # Ausgabe (mit Zeilenwechsel)
print("\n")              # expliziter Zeilenwechsel
```

### 3) **JUnit-Unittest (Ausschnitt)** <span style="background:#e0f0ff;">LF11a</span>

*(rote/grüne Tests, Assertions – reproduzierbare Fehlerszenarien)* 

```java
import static org.junit.jupiter.api.Assertions.assertEquals;
import org.junit.jupiter.api.Test;

class BeispielJUnitTest {
    @Test
    void testCalculateSum() {
        // ... vergleicht berechnetes mit erwartetem Ergebnis (assertEquals)
    }
}
```

### 4) **Ereignisanzeige / Logs** (Windows) <span style="background:#e0f0ff;">LF6</span>

Öffnen via **Win+R → `eventvwr`**; Meldungen enthalten u. a. **Debug/Trace**-Level und Quellen/Ziele – Grundlage für **Ablaufverfolgung**. *(LF6)* 

---

## 🔎 **Praktische Beispiele aus den LFs**

* **Syntaxfehler schnell finden**: IDE zeigt z. B. *rote Wellenlinie* in PyCharm – hilft beim ersten Debug-Schritt. *(LF5)* 
* **Algorithmus prüfen**: Konsolenprogramme dienen zum *schnellen Ausprobieren* ohne GUI-Aufwand – ideal für visuelles „Print-Debugging“. *(LF5)* 
* **Systemfehler analysieren**: **Log-Dateien**/Ereignisanzeige liefern Meldungsarten bis zu **Debug/Trace**; zusätzlich Netzwerk-Indikatoren (z. B. **SYN/FIN-Fehler**) als Spur. *(LF6)* 

---

## 📚 **Begriffstabelle**

| Begriff                      | Definition                                                                                    | Quelle |
| ---------------------------- | --------------------------------------------------------------------------------------------- | ------ |
| **Debugger**                 | Werkzeug zur **Fehlersuche**: Programm **schrittweise** ausführen, **Zustände** prüfen.       | LF5    |
| **IDE**                      | Integriert Editor, Compiler/Interpreter, **Debugger**, ggf. Profiler & Versionsverwaltung.    | LF5    |
| **Ablaufverfolgung (Trace)** | **Log-gestützte** Nachverfolgung des System-/Programmlaufs mit Leveln inkl. **Debug/Trace**.  | LF6    |
| **Exception Handling**       | Struktur `try/except/else/finally` zur **Fehlerbehandlung** im Code.                          | LF5    |
| **Unittest (JUnit 5)**       | Automatisierter Test mit **Assertions**; Ergebnis *grün/rot*, *failure/error* via Exceptions. | LF11a  |
| **Ereignisanzeige**          | Windows-Tool (`eventvwr`) zum Lesen von **Protokollen** inkl. Schweregraden.                  | LF6    |

---

## 🧭 **Kurzleitfaden (aus den LFs abgeleitet)**

1. **Reproduzieren (Unittest)** → 2) **Eingrenzen (Debugger/Schrittbetrieb)** → 3) **Ablaufverfolgen (Logs, Debug/Trace)** → 4) **Beheben (Exception Handling)** → 5) **Verifizieren (Tests grün)**. *(LF11a, LF5, LF6)*


