# 🧪 Software-Testverfahren: statisch & dynamisch (Black Box, White Box, Review, Grenzwertanalyse)

Die **AP2-Prüfung** fordert explizit den Bereich „**Software-Test, dynamische und statische Testverfahren, z. B. Black Box, White Box, Review, Extremwertetest**“. *(Prüfungskatalog)* 
In den bereitgestellten Lernfeldern werden **Testprozess**, **statische Verfahren** (z. B. **Inspektion/Review/Walkthrough/Audit**, **statische Code-Analyse**) und **dynamische Verfahren** (z. B. **Whitebox-/Blackbox-Test** samt **Äquivalenzklassenbildung** und **Grenzwertanalyse**) durchgängig erläutert. *(LF5, LF8, LF11a)*

---

## ⚙️ Testprozess (Überblick)

Der **Testprozess** gliedert sich in: **Testplanung**, **Testentwurf**, **Testvorbereitung**, **Testdurchführung**, **Testauswertung** und **Testabschluss**. Bei **dynamischen Tests** wird das Programm ausgeführt; **statische Tests** prüfen ohne Programmlauf. Es wird empfohlen, dass **unabhängige Personen** testen (nicht die Entwickler selbst). *(LF5)*

---

## 🧭 Einordnung: Teststufen

Zur Einbettung der Verfahren in die Praxis werden **Modultests (Unittest/Komponententest)**, **Integrationstest** und **Systemtest** unterschieden; Unittests bilden die **unterste Ebene** und sind für eine **häufige, automatisierte Ausführung** prädestiniert. *(LF11a)* 

---

## 🧱 Statische Testverfahren

**Ziel:** Finden von Fehlern **ohne Programmausführung**, Prüfung von Artefakten (z. B. **Spezifikationen**, **Testspezifikationen**, **Benutzerhandbuch**, **Quellcode**) – häufig eingebettet in **Qualitätsmanagement**. *(LF5)* 

* **Inspektion:** Stark formalisiert; Gutachterteam untersucht Code nach fester Vorgehensweise; empirisch **50–75 %** Entwurfsfehler auffindbar. *(LF5)* 
* **Review:** Weniger formal, geringerer Aufwand; empirisch **60–70 %** Fehler auffindbar. *(LF5)* 
* **Walkthrough:** Unstrukturierter; Entwickler präsentiert, Gutachter fragen **spontan**. *(LF5)* 
* **Audit:** Strukturierter als Walkthrough; Fragen nach **Prüfkatalog**. *(LF5)* 
* **Statische Code-Analyse:** u. a. **Architektur/Design/Konventionen**; meist **werkzeuggestützt**; fokussiert auch **nicht-funktionale** Aspekte. *(LF5)* 

**Vorteile/Nachteile (Auszug):** Frühe Fehlererkennung, Wissensaustausch; jedoch weniger geeignet für **Integrations-/Systemtests**, **Laufzeitfehler** werden nicht gefunden. *(LF5)* 

---

## 🚀 Dynamische Testverfahren

**Ziel:** Fehlerfinden durch **Ausführen** in einer **Testumgebung**. *(LF5)* 

### Whitebox-Test (struktur­basiert)

Tests **mit Codekenntnis**; Überdeckungsziele nach **Kontrollfluss**/**Datenfluss**, z. B. **Anweisungs-**, **Zweig-**, **Pfad-**, **(mehrfache) Bedingungsüberdeckung**. **Einsatz v. a. bei Unit-/Komponententests.** *(LF5)* 

### Blackbox-Test (spezifikations­basiert)

Tests **ohne Codekenntnis**; Ableitung von Testfällen aus der **Softwarespezifikation**; Vergleich **erwartetes vs. reales** Ergebnis; **in allen Teststufen** einsetzbar (mit passender Umgebung). *(LF5)* 

> **Testfallreduktion im Blackbox-Test:** **Äquivalenzklassenbildung** und **Grenzwertanalyse**. *(LF5)* 

**Vorteile/Nachteile (Auszug):** Findet **Laufzeitfehler**, testet Zusammenspiel von Systemteilen; benötigt **lauffähige Umgebung**, deckt nur **ausgeführte** Teile ab. *(LF5)* 

---

## 🎯 Blackbox-Verfahren zur Testdatenermittlung

* **Äquivalenzklassenbildung:** Aufteilung der Ein-/Ausgabebereiche in **gültige/ungültige** Klassen; Auswahl **repräsentativer** Werte. *(LF8)* 
* **Grenzwertanalyse (Extremwertetest):** Erweiterung der Äquivalenzklassenbildung auf **Klassengrenzen** (Fehler treten häufig an Grenzen auf, z. B. **<** statt **<=**). *(LF8)* 

**Beispiel (aus LF8):** `isTemperatureOk(temp)` liefert **True** für `temp ≤ 30`, sonst **False**.
Äquivalenzklassen: **≤ 30** und **> 30**; Auswahl weniger Werte je Klasse (z. B. `-1, 28` bzw. `32, 65.4`). *(LF8)* 

---

## 💻 Beispielcode (vollständig aus den Unterlagen)

### Java – JUnit-Unittest (Äquivalenzklassen/Überdeckung möglich) <span style="background:#e0f0ff;">LF11a</span>

*(JUnit 5; Beispiel „calculateSum“)*


```java
import static org.junit.jupiter.api.Assertions.assertEquals;
import org.junit.jupiter.api.Test;

class BeispielJUnitTest {

    @Test
    void testCalculateSum() {   // Unittest
        int testValue1 = 3;
        int testValue2 = 1;
        int expectedResult = 4;

        int result = calculateSum(testValue1, testValue2);
        assertEquals("Summe falsch", expectedResult, result);
    }
}

public static int calculateSum(int x, int y) {  // zu testende Methode
    return x + y;
}
```

**Kernpunkte zu JUnit 5:** **Annotations** wie `@Test`, `@BeforeEach`, `@AfterEach`, `@BeforeAll`, `@AfterAll`; **Assertions** wie `assertTrue`, `assertFalse`, `assertEquals`, `fail`. *(LF11a)* 

---

### Python – `unittest` (Grenzwertanalyse mit 0 als Grenzwert) <span style="background:#e0f0ff;">LF11a</span>

*(Beispiel „Würfelvolumen“; Test + Funktion in einer Datei, Ausführung als **Unittest** in PyCharm)*


```python
import unittest

class Example_Unittest(unittest.TestCase):
    def test_calculate_cube_volume(self):
        self.assertEqual(calculate_cube_volume(2), 8)
        self.assertEqual(calculate_cube_volume(1), 1)
        self.assertEqual(calculate_cube_volume(0), 0)
        self.assertEqual(calculate_cube_volume(1.5), 3.375)

def calculate_cube_volume(x):  # zu testende Methode
    return (x * x * x)
```

**Erwartete Ausgabe bei Erfolg:** `Ran 1 test ... OK`. *(LF11a)* 

---

## 🧪 Weitere Testaspekte

* **Funktionale vs. nicht-funktionale Tests:** Orientierung an Qualitätsmerkmalen (z. B. **Funktionalität**, **Zuverlässigkeit**, **Performance** …). *(LF5)* 
* **Automatisierte Unittests & Kriterien (F.I.R.S.T. u. a.):** schnell, unabhängig, wiederholbar, selbstvalidierend, rechtzeitig erstellt; zusätzlich **Verständlichkeit**, **Wartbarkeit**, **Relevanz**. *(LF11a)* 
* **IDE-Unterstützung:** z. B. **PyCharm** mit **Debugger** und Testausführung. *(LF5)* 

---

## 📚 Begriffe & Definitionen

| Begriff                                | Definition                                                                                                                                  | Quelle   |
| -------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------- | -------- |
| **Statische Testverfahren**            | Prüfung ohne Programmausführung (Artefakte/Code); z. B. **Inspektion**, **Review**, **Walkthrough**, **Audit**, **statische Code-Analyse**. | (LF5)    |
| **Dynamische Testverfahren**           | Test durch **Ausführen** in Testumgebung; v. a. **Whitebox**, **Blackbox**.                                                                 | (LF5)    |
| **Whitebox-Test**                      | Struktur-/Codekenntnis vorausgesetzt; Ziele über **Überdeckungen** (Anweisung, Zweig, Pfad, Bedingungen).                                   | (LF5)    |
| **Blackbox-Test**                      | Tests aus **Spezifikation** ohne Codekenntnis; Reduktion via **Äquivalenzklassen**, **Grenzwertanalyse**.                                   | (LF5)    |
| **Äquivalenzklassenbildung**           | Aufteilung in **gültige/ungültige** Klassen; Auswahl weniger repräsentativer Werte.                                                         | (LF8)    |
| **Grenzwertanalyse (Extremwertetest)** | Fokussiert **Klassengrenzen** (häufige Fehlerstellen).                                                                                      | (LF8)    |
| **Unittest (Modultest)**               | Unterste Teststufe; **automatisierbar** (z. B. JUnit, `unittest`).                                                                          | (LF11a)  |
| **Review/Inspektion**                  | Organisierte Code-/Artefaktprüfung; empirisch **60–70 %**/**50–75 %** Fehlerfindung.                                                        | (LF5)    |

---

## 🔧 Praxisleitfaden (aus den LFs abgeleitet)

1. **Testplanung**: Ziele, Start-/Endkriterien, Testarten/-verfahren, Werkzeuge, Organisation. *(LF5)* 
2. **Testentwurf/-vorbereitung**: **Testfälle** aus Zielen/Spezifikation ableiten, **Testdaten** festlegen, **Umgebung** aufbauen. *(LF5)* 
3. **Durchführung**: Unabhängig testen; **dynamisch** ausführen bzw. **statisch** prüfen; dokumentieren. *(LF5)* 
4. **Auswertung/Abschluss**: Ergebnisse gegen **Soll** vergleichen, Fehlerliste, Freigabeempfehlung, Archiv. *(LF5)* 


---

## [➡️ Nächstes](./3-Testdaten.md)