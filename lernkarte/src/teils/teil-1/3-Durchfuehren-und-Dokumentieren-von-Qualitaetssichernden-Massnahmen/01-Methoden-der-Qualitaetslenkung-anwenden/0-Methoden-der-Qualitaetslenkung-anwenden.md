# 🧪 Methoden der Qualitätslenkung anwenden (Prüfverfahren, Software-Test, Debugging & Ablaufverfolgung) <span style="background:#e0f0ff;">LF5, LF8, LF11a, LF12a</span>

**Ziel der Qualitätslenkung** in der Softwareentwicklung ist es, systematisch die Qualität von Produkten und Prozessen sicherzustellen – u. a. durch geeignete **Prüfverfahren**, durch **statische** und **dynamische Testverfahren** sowie durch saubere **Testplanung, -durchführung und -dokumentation**. (LF5). 

---

## 🔧 Grundbegriffe & Einordnung

* **Testverfahren** werden in **statische** (z. B. **Inspektion**, **Review**, **Walkthrough**, **Audit**, **statische Code-Analyse**) und **dynamische** Verfahren (v. a. **White-Box** und **Black-Box**) eingeteilt. (LF5). 
* **Testprozess**: **Testplanung** → **Testentwurf** → **Testvorbereitung** → **Testdurchführung** → **Testauswertung** → **Testabschluss**; inkl. Testspezifikation, Testdaten, Testumgebung und Dokumentation. (LF5). 
* **Testabdeckung** misst den Grad der Abdeckung (Code, Daten, Anforderungen) durch Tests. (LF11a). 

---

## 🧩 Prüfverfahren (Beispiele): **Parität** & **Redundanz**

* **Paritätsprüfung (Paritätsbit)**: Beim **ASCII-Zeichensatz** ist ASCII ursprünglich **7-Bit**, das **8. Bit** wurde als **Paritätsbit** (Ergänzungsbit zur Fehlerüberprüfung) verwendet; heute oft zur 8-Bit-Erweiterung genutzt. (LF5). 
* **Redundanz** (im Datenmodell): **Normalisierung** verringert **Datenredundanz** und erhöht **Konsistenz**; zu starke Normalisierung kann Leistung beeinträchtigen, zusätzliche Schlüssel sind selbst **eine Art Redundanz**. (LF8, LF5).   

  * **Balance**: „**unkontrollierte Redundanz**“ vermeiden, aber **Performance-Bedarf** berücksichtigen. (LF8). 

---

## 🧪 Statische Testverfahren

**Ziel**: Artefakte **ohne Programmausführung** prüfen (Anforderungen, Quellcode, Handbücher …). (LF5). 

* **Inspektion**: Stark formalisiert; Gutachterteam; empirisch **50–75 %** Entwurfsfehler auffindbar. (LF5). 
* **Review**: Weniger formal; **60–70 %** Fehler werden gefunden. (LF5). 
* **Walkthrough**: Entwickler präsentiert; spontane Fragen. (LF5). 
* **Audit**: Fragen nach Prüfkatalog; strukturierter als Walkthrough. (LF5). 
* **Statische Code-Analyse**: Architektur/Design/Konventionen, oft toolgestützt. (LF5). 
* **Vor-/Nachteile**: Frühe Fehlererkennung, Wissensaustausch; weniger geeignet für Integrations-/Systemtests, Laufzeitfehler bleiben unentdeckt. (LF5). 

---

## 🚀 Dynamische Testverfahren

**Ziel**: Fehler durch **Ausführen** des Programms finden. (LF5). 

* **White-Box-Test (strukturorientiert)**: Kenntnis des Quellcodes; **Überdeckungen** (Anweisungs-, Zweig-, Pfad-, Bedingungsüberdeckung); v. a. **Unit-/Komponententests**. (LF5). 
* **Black-Box-Test (spezifikationsorientiert)**: Testen gegen **Schnittstelle/Anforderungsspezifikation**; **hohe Anforderungsabdeckung** als Ziel. (LF11a). 

**Vergleich**: Black-Box nicht an Code gebunden, früh aus Spezifikation ableitbar; aber vollständige Ableitung aller nötigen Testfälle aufwendig. (LF11a). 

---

## 🧠 Testdatengenerierung & -kategorien

* **Kategorien** für Black-Box-Tests: **Äquivalenzklassen**, **Randwertanalyse (Extremwertetest)**, **Fehler-/Sonderfälle** u. a. (LF8). 
* **Testdatengeneratoren** können Daten u. a. für **Last-, Leistungs- und Stresstests** erzeugen (Herstellerbeispiele aufgeführt). (LF8). 

---

## 🏋️‍♀️ Nicht-funktionale Tests: **Last- & Performancetests**

* Nicht-funktionale Qualitätsmerkmale (z. B. **Zeitverhalten**, **Ressourcenverbrauch**) sind Teil dynamischer Prüfungen; **Stresstests**, **Recovery-Tests** werden genannt. (LF5).  
* In der **Abnahme** werden u. a. **Ergebnisse aus Performance-Tests** dokumentiert/berücksichtigt (im Abnahmekontext). (LF8). 

---

## 📋 Testplanung, -durchführung & Dokumentation

* **Testplanung**: Strategie, Ziele, Start-/Endkriterien, Testarten, Werkzeuge, Organisation. (LF5). 
* **Testspezifikation** & **Testentwurf**: Testfälle, Abläufe/Sequenzen, **Testdaten** (manuell/automatisiert). (LF5). 
* **Durchführung/Auswertung**: Gegen erwartete Ergebnisse prüfen; Abweichungen erfassen; Freigabeempfehlung. (LF5). 
* **Testdokumentation**: **Audit-, Test-, Review-Berichte**, **Abnahmebericht**, **Testfälle/-szenarien** etc. (LF5). 
* **Abnahmetest**: Am Projektende zusammen mit dem Auftraggeber (Abnahmekriterien/Test­szenarien auch in Lasten-/Pflichtenheft verankert). (LF5).  

---

## 🐞 Debugging & Ablaufverfolgung

* **Debugger**: Entwicklungswerkzeug zum **Schritt-für-Schritt-Ausführen** und **Zustände untersuchen** – Kern für **Ablaufverfolgung** (Tracing) und Fehlersuche. (LF5). 
* **IDE** bündeln u. a. Editor, Compiler/Interpreter, **Debugger**, Profiler, Versionsverwaltung in einer Oberfläche. (LF5). 

---

## 🧪 Beispiel: Black-Box mit **Randwertanalyse** (Temperatur)

**Anforderung** (vereinfacht): `isTemperatureOk(T)` liefert **true**, wenn `T` innerhalb des erlaubten Bereichs liegt → **Randwerte** gezielt prüfen. (LF8). 

**Beispiel-Testwerte (Auszug)** *(Black-Box, Randwertanalyse)* (LF8)

* Untergrenze − ε (erwartet: **false**), Untergrenze ( **true** ), Untergrenze + ε ( **true** )
* Obergrenze − ε ( **true** ), Obergrenze ( **true** ), Obergrenze + ε ( **false** ). 

---

## 🧪 Beispielcode: **JUnit-Unittest** (White-Box-nah, Komponentenebene)

> **Hinweis:** Unittests sind die unterste Teststufe und prüfen einzelne Module/Funktionen; Auswahl zw. White-/Black-Box je Ziel; **Automatisierung** ist zentral. (LF11a). 

```java
// Beispiel nach LF11a: einfacher Unittest mit JUnit (Konzept: erwartete vs. tatsächliche Werte) (LF11a)
import static org.junit.Assert.assertEquals;
import org.junit.Test;

public class MathUtils {
    public static int calculateSum(int a, int b) {
        return a + b;
    }

    public static class MathUtilsTest {
        @Test
        public void testCalculateSum() {
            int result = MathUtils.calculateSum(2, 3);
            assertEquals(5, result);
        }
    }
}
```

(LF11a). 

---

## 🧪 Beispielcode: **Python-Unittest** (Funktionstest)

```python
# Beispiel nach LF11a: Unittest in Python für eine einfache Funktion (LF11a)
import unittest

def volume_cube(a):
    return a * a * a

class Example_Unittest(unittest.TestCase):
    def test_volume_cube(self):
        self.assertEqual(volume_cube(3), 27)
        self.assertEqual(volume_cube(0), 0)

if __name__ == '__main__':
    unittest.main()
```

(LF11a). 

---

## 📗 Weitere Beispiele / Praxisbezug

* **Statische Prüfung per Review/Checkliste** auf **Konventionen/Design**; toolgestützte **statische Code-Analyse**. (LF5). 
* **Dynamik & Performance**: **Stresstest/Recovery-Test** zur Robustheit; **Zeitverhalten/Ressourcenverbrauch** messen. (LF5).  
* **Testdaten**: Klassen, **Randwerte** und **Sonderfälle** systematisch erzeugen; dedizierte **Generatoren** sind üblich. (LF8).  
* **Abnahme & Doku**: **Test-/Review-/Audit-Berichte**, **Abnahmebericht**, **Testfälle/-szenarien** in der **Testdokumentation**. (LF5). 

---

## 🧾 Begriffstabelle (präzise mit Quellen)

| Begriff                       | Definition                                                                                                                  | Quelle       |
| ----------------------------- | --------------------------------------------------------------------------------------------------------------------------- | ------------ |
| **Paritätsbit**               | **8. Bit** bei ASCII als **Ergänzungsbit zur Fehlerüberprüfung** (Parität).                                                 | (LF5)        |
| **Redundanz (DB)**            | Mehrfachhaltung gleicher Daten; **Normalisierung** reduziert Redundanz, übermäßige Normalisierung kann Performance mindern. | (LF8, LF5)   |
| **Inspektion**                | Stark formalisiertes statisches Verfahren; **50–75 %** Entwurfsfehler auffindbar.                                           | (LF5)        |
| **Review**                    | Weniger formal; **60–70 %** Fehlerauffindung.                                                                               | (LF5)        |
| **Walkthrough**               | Präsentation mit spontanen Fragen; unstrukturiert.                                                                          | (LF5)        |
| **Audit**                     | Fragen nach Prüfkatalog; strukturierter als Walkthrough.                                                                    | (LF5)        |
| **White-Box-Test**            | Strukturorientiertes dynamisches Testen mit Codekenntnis; **Überdeckung** als Ziel.                                         | (LF5)        |
| **Black-Box-Test**            | Spezifikationsorientiertes Testen gegen Anforderungen/Schnittstelle.                                                        | (LF11a)      |
| **Testabdeckung**             | Grad der Testabdeckung (Code/Daten/Anforderungen).                                                                          | (LF11a)      |
| **Debugger/Ablaufverfolgung** | Schrittweises Ausführen und Zustandsprüfung zur Fehlersuche.                                                                | (LF5)        |

---

## ⚙️ Prozessschritte (kompakt)

1. **Testplanung** (Strategie, Ziele, Kriterien, Arten, Werkzeuge, Organisation). (LF5). 
2. **Testentwurf** (Testfälle, Reihenfolge, **Testdaten**). (LF5). 
3. **Testvorbereitung** (Umgebung, Daten, Dokumente). (LF5). 
4. **Durchführung** (ausführen/analysieren; unabhängig testen). (LF5). 
5. **Auswertung** (Soll-/Ist-Vergleich, Abweichungen, Freigabeempfehlung). (LF5). 
6. **Abschluss** (Doku vervollständigen/archivieren). (LF5). 

---

## 🧷 Hinweise zur Abnahme & Dokumentenbasis

* **Abnahmetest** mit Auftraggeber am Ende; **Abnahmekriterien/Testszenarien** im **Lasten-/Pflichtenheft** verankert. (LF5). 
* **Testdokumentation** sammelt **Audit-, Test-, Review-Berichte**, **Abnahmebericht**, **Testfälle/Szenarien**. (LF5). 

---

### ✅ Kurzfazit

* **Parität** (ASCII-Paritätsbit) und **Redundanzreduktion** (Normalisierung) sind grundlegende **Qualitätssicherungs-Mechanismen** in Übertragung bzw. Datenhaltung. (LF5, LF8).  
* Für die Implementierung dominieren **statische Reviews** + **dynamische Tests** (White-/Black-Box), gestützt durch **Testplanung**, **Testdaten** und **saubere Doku** – bis hin zur **Abnahme**. (LF5, LF11a, LF8).   

