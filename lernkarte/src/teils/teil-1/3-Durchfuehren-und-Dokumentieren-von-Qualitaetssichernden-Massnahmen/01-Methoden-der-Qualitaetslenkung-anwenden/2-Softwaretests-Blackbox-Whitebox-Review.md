# 🧪 Software-Test: dynamische & statische Testverfahren (Black-Box, White-Box, Review, Extremwertetest, Testdaten, Last- & Performancetest) <span style="background:#e0f0ff;">LF5, LF8, LF11a</span>

**Softwaretests** gliedern sich in **statische** und **dynamische** Verfahren; der **Testprozess** umfasst u. a. **Testplanung**, **Testentwurf**, **Testvorbereitung**, **Testdurchführung**, **Testauswertung** und **Testabschluss** (Inhalte des Testplans: Strategie, Ziele, Ein-/Ausstiegskriterien, Testarten, Werkzeuge, Doku, Organisation). *(LF5)*  

---

## 🧰 Grundbegriffe & Einordnung

* **Statische Testverfahren** prüfen Artefakte **ohne Programmausführung** (z. B. **Anforderungsspezifikation**, **Testspezifikation**, **Benutzerhandbuch**, **Quellcode**). *(LF5)* 
* **Dynamische Testverfahren** finden Fehler **durch Ausführen** des Programms in einer Testumgebung; Kernvertreter sind **White-Box** und **Black-Box**. *(LF5)* 

---

## 📝 Statische Testverfahren: Review-Familie & Codeanalyse

* **Inspektion, Review, Walkthrough, Audit** sind etablierte statische Verfahren; im Projektalltag arbeiten Teammitglieder/Externe mit **Checklisten** oder spontanen Fragen. *(LF5)* 

  * **Inspektion**: formalisiertes Gutachterverfahren; empirisch **50–75 %** Entwurfsfehler auffindbar. *(LF5)* 
  * **Review**: weniger formal; **60–70 %** Fehlauffindung. *(LF5)* 
  * **Walkthrough**: Entwickler präsentiert; **spontane Fragen**. *(LF5)* 
  * **Audit**: Fragen nach **vorgegebenem Prüfkatalog**. *(LF5)* 
  * **Statische Code-Analyse**: z. B. **Architektur/Design/Namenskonventionen**, meist **werkzeuggestützt**, adressiert **nicht-funktionale** Aspekte (z. B. Wartbarkeit). *(LF5)* 
* **Vor-/Nachteile**: frühe Fehlererkennung & Wissensaustausch; Laufzeitfehler bleiben unentdeckt, weniger geeignet für Integrations-/Systemtests. *(LF5)* 

---

## ⚙️ Dynamische Testverfahren: White-Box & Black-Box

* **White-Box-Test (strukturorientiert)**: Tests unter **Kenntnis von Code/Struktur**; Überdeckungsziele anhand **Kontrollfluss/Datenfluss** wie **Anweisungs-**, **Zweig-**, **Pfad-**, **Bedingungsüberdeckung**; v. a. bei **Unit-/Komponententests**. *(LF5, LF11a)*  
* **Black-Box-Test (spezifikationsbasiert)**: Verhaltenstest **ohne Codekenntnis**, Testfälle aus **Softwarespezifikation** ableiten; Einsatz in **allen Teststufen** möglich. *(LF5)* 

  * Ableitung **aller** nötigen Testfälle kann aufwendig; **Reduktion** über **Äquivalenzklassenbildung** und **Grenzwertanalyse**. *(LF5)* 
* **Vorteile/Nachteile dynamischer Tests**: finden auch **Laufzeitfehler**; erlauben Testen des Zusammenspiels; erfordern **lauffähige Testumgebung**; decken nur **ausgeführte** Teile ab. *(LF5)* 

---

## 🎯 Testdatenverfahren: Äquivalenzklassen & Extremwertetest (Grenzwertanalyse)

* **Äquivalenzklassenbildung**: mit **wenigen Tests** hohe Abdeckung durch **gültige/ungültige** Klassen; Schritte: Eingaben/Ausgaben analysieren → Wertebereiche klassifizieren → **repräsentative Werte je Klasse** wählen. *(LF8)* 
* **Grenzwertanalyse (Extremwertetest)**: fokussiert **Grenzen** der Klassen (häufige Fehlerquelle, z. B. falscher Operator `<` statt `<=`). *(LF8)* 

**Beispiel (aus LF8):** `bool isTemperatureOk(double temp)` soll **true** liefern bis **30 °C**, darüber **false** → Klassen: `temp ≤ 30` / `temp > 30`; **Grenzwerte** gezielt prüfen. *(LF8)* 

```
Äquivalenzklassen
- ≤30 : mögliche Testwerte −1, 3.89, −12.99, 28  → erwartet true
- >30 : mögliche Testwerte 32, 101.33, 65.4, 40  → erwartet false
(Grenzwerte rund um 30: 29.99, 30.00, 30.01)
```

*(LF8)* 

---

## 🧪 Testdaten & Testdatengeneratoren

**Testdatengeneratoren** erzeugen/bereitstellen/verändern Testdaten (auch aus Wissensdatenbanken) und sind wegen **großer Datenvolumina** u. a. für **Big-Data-Tests** wichtig. *(LF8)* 
**Kategorien**:

* **Datenbankbasiert** (aus Schemata generieren),
* **Codebasiert** (Analyse des Testobjekt-Codes → White-Box-Bezug),
* **Schnittstellenbasiert** (Parameterbereiche; **Äquivalenzklassen/Grenzwerte** → Black-Box-Bezug),
* **Spezifikationsbasiert** (aus Spezifikation). *(LF8)* 
  Beispiel-Tools (Auszug): **DATPROF**, **GenerateData.com**, **IRI RowGen**; Auswahl nach **DB-/Format-Support**, **Methoden**, **OS-Support**, **Kosten**. *(LF8)* 

---

## 🏋️‍♀️ Last- & Performancetests (nicht-funktionale Qualität)

* **Effizienz** umfasst **Zeit-** und **Verbrauchsverhalten**; dynamische Tests ermöglichen das Prüfen **nicht-funktionaler** Anforderungen wie **Zeitverhalten** und **Ressourcenverbrauch**. *(LF5)*  
* **Zuverlässigkeitstests** beinhalten **Stresstests** (Verhalten bei **Überlastung**) und **Recovery-Tests** (wie schnell das System nach Fehlern **wieder einsatzfähig** ist). *(LF5)* 
* **Abnahme**: Ergebnisse **nicht-funktionaler** Prüfungen (z. B. **Performance-Tests**) fließen in die **Benutzer-/Vertragsakzeptanz** ein; Inhalte werden im **Abnahmeprotokoll** dokumentiert. *(LF8)*  

---

## 🧩 Beispielcode (JUnit 5, White-Box-nah: Anweisungs-/Äquivalenztest)

> **Kontext:** JUnit eignet sich für **automatisierte Unittests**; wichtige **Annotations/Assertions**: `@Test`, `@BeforeEach`, `assertEquals`, `assertTrue/False` u. a. *(LF11a)* 

```java
// Beispiel nach LF11a: einfacher Unittest mit JUnit 5 (JUnit Jupiter API)
import static org.junit.jupiter.api.Assertions.*;
import org.junit.jupiter.api.Test;

class MathUtils {
    static int calculateSum(int a, int b) { return a + b; }
}

class MathUtilsTest {
    @Test
    void testCalculateSum_equivalenceAndStatementCoverage() {
        // Äquivalenzbeispiel (einfacher Wertebereich) & Anweisungsüberdeckung
        assertEquals(4, MathUtils.calculateSum(3, 1));
        assertEquals(0, MathUtils.calculateSum(0, 0));
    }
}
```

*(LF11a)* 

---

## 📗 Weitere Beispiele / Praxis

* **Dynamische Tests** setzen **lauffähige Umgebungen** voraus; sie prüfen auch das **Zusammenspiel** von Systemteilen, aber nur **ausgeführte** Teile. *(LF5)* 
* **Manuelle Prüfungen** durch **unabhängige Sachverständige** (formalisierte Kriterien) ergänzen die Teststrategie. *(LF5)* 

---

## 📚 Begriffstabelle

| Begriff               | Definition                                                                               | Quelle         |
| --------------------- | ---------------------------------------------------------------------------------------- | -------------- |
| **Statischer Test**   | Prüfung von Artefakten **ohne Ausführung** (z. B. Spezifikationen, Code).                | (LF5)          |
| **Inspektion**        | Stark formalisiertes Gutachterverfahren; **50–75 %** Entwurfsfehler auffindbar.          | (LF5)          |
| **Review**            | Weniger formal; **60–70 %** Fehlerauffindung.                                            | (LF5)          |
| **Walkthrough**       | Präsentation durch Entwickler, **spontane Fragen**.                                      | (LF5)          |
| **Audit**             | Fragen nach **Prüfkatalog** (strukturierter als Walkthrough).                            | (LF5)          |
| **White-Box**         | Strukturorientiert, **Überdeckungen** (Anweisung/Zweig/Pfad/Bedingung).                  | (LF5, LF11a)   |
| **Black-Box**         | Spezifikationsbasiert, Testfälle aus **Anforderungen**.                                  | (LF5)          |
| **Äquivalenzklassen** | Reduktion der Testfälle durch **Wertebereichs-Klassen** (gültig/ungültig).               | (LF8)          |
| **Grenzwertanalyse**  | Fokus auf **Grenzen** der Klassen (häufige Fehlerstellen).                               | (LF8)          |
| **Last/Performance**  | Prüfung **Zeit-/Ressourcenverhalten**; **Stress/Recovery** als Teil der Zuverlässigkeit. | (LF5, LF8)     |

---

## 🛠️ Prozessschritte (überblick)

1. **Testplanung** (Strategie, Ziele, Ein-/Ausstiegskriterien, Arten, Werkzeuge, Doku, Organisation). *(LF5)* 
2. **Testentwurf** (Testfälle, Abläufe/Reihenfolge, **Testdaten**, manuell/automatisiert). *(LF5)* 
3. **Testvorbereitung** (Umgebung, Bereitstellung der **Testdaten**, Dokumente). *(LF5)* 
4. **Durchführung** (dynamisch → **ausführen**, statisch → **analytisch prüfen**; Unabhängigkeit empfohlen). *(LF5)* 
5. **Auswertung** (Soll-/Ist-Vergleich, Abweichungen, **Freigabeempfehlung**). *(LF5)* 
6. **Abschluss** (Dokumente vervollständigen/archivieren). *(LF5)* 

---

### ✅ Kurzfazit

**Statisch (Review/Inspektion)** entdeckt früh viele Fehler **ohne Laufzeit**, **dynamisch (White-/Black-Box)** prüft Verhalten **mit Ausführung** samt **nicht-funktionalen** Aspekten (**Zeit/Ressourcen**, **Stress/Recovery**). **Testdaten** werden systematisch über **Äquivalenzklassen** und **Grenzwerte** bestimmt und ggf. mit **Testdatengeneratoren** erzeugt. *(LF5, LF8, LF11a)*    

