# 🧪 Komponententest, Integrationstest, Systemtest

**Überblick.** **Teststufen** sind organisierte Gruppen von Testaktivitäten, die je nach Entwicklungsphase von einzelnen **Komponenten** bis hin zu kompletten **Systemen** reichen. In sequenziellen Modellen dienen **Endekriterien** einer Stufe oft als **Eingangskriterien** der nächsten; in iterativen Modellen können sich Stufen zeitlich überlappen. **Testarten** (z. B. funktional, nicht-funktional) können grundsätzlich in jeder Stufe ausgeführt werden. (ISTQB CTFL 4.0.2) 

> **Hinweis zur Terminologie:** In der ISTQB-Version 4.0.2 wurde der frühere „**Integrationstest**“ in zwei Stufen aufgeteilt: **Komponentenintegrationstest** (zwischen Komponenten) und **Systemintegrationstest** (zwischen Systemen). Unten fokussieren wir – entsprechend Ihrer Anfrage – auf **Komponententest**, **(Komponenten-)Integrationstest** und **Systemtest**. (ISTQB CTFL 4.0.2) 

---

## 🧩 Komponententest (Unit-/Modultest)

**Definition & Fokus.** Der **Komponententest** (auch **Unittest**) konzentriert sich auf das Testen **isolierter Komponenten**. Oft ist **spezifische Unterstützung** nötig (Testrahmen/Unittest-Frameworks). Er wird **normalerweise von Entwicklern** in ihrer **Entwicklungsumgebung** durchgeführt. (ISTQB CTFL 4.0.2) 

**Alternative Formulierung (berufsschulisch).** „**Modul-, Unit-, Komponententest**: Test einer einzelnen Einheit oder Teile dieser Einheit auf Funktionalität.“ (LF 5) 

**Ziele/Beispiele.** In dieser Stufe lassen sich u. a. **White-Box-Verfahren** wie **Anweisungs-** und **Zweigtest** einsetzen, um Code-Überdeckung gezielt zu erhöhen. (ISTQB CTFL 4.0.2) 

### 💻 Beispielcode (JUnit-Unittest, Auszug aus LF 11a)

Die JUnit-Doktrin (JUnit 5 / **JUnit Jupiter API**) nutzt **Annotations** wie `@Test`, `@BeforeEach`, `@AfterEach`, `@BeforeAll`, `@AfterAll`, `@DisplayName` sowie **Assertions** wie `assertTrue`, `assertFalse`, `assertEquals`, `fail`. Ein Test kennt die Ergebnisse **grün** (erfolgreich) oder **rot** (fehlgeschlagen). (LF 11a) 

```java
import static org.junit.jupiter.api.Assertions.assertEquals;
import org.junit.jupiter.api.Test;

class BeispielJUnitTest {

    @Test
    void testCalculateSum() {
        // Beispiel laut LF 11a: Eingaben 3 und 1, erwartet 4
        // (Das vollständige Beispiel erläutert Auswahl der Testdaten über White-Box/Äquivalenzklassen.)
    }
}
```

(LF 11a) 

**Praxisnotiz (LF 11a).** Gute Unittests erfüllen die **F.I.R.S.T-Prinzipien** (Fast, Independent, Repeatable, Self-Validating, Timely) und werden zur **Regressionserkennung** wiederholt ausgeführt. (LF 11a) 

---

## 🔗 (Komponenten-)Integrationstest

**Definition & Fokus.** Der **Komponentenintegrationstest** konzentriert sich auf das **Testen der Schnittstellen und Interaktionen zwischen Komponenten**. Die Tests sind stark von der **Integrationsstrategie** (**Bottom-up**, **Top-down**, **Big-Bang**) abhängig. (ISTQB CTFL 4.0.2) 

**Alternative Formulierung (berufsschulisch).** „**Integrationstest**: Überprüfung des **fehlerfreien Zusammenwirkens** voneinander abhängiger Systemkomponenten; **Schnittstellen** sind der Testschwerpunkt.“ (LF 5) 

**Bezug zu Testarten.** In der Integration können sowohl **funktionale** als auch **nicht-funktionale** Aspekte der Schnittstellen geprüft werden; Testarten sind **nicht auf Stufen beschränkt**. (ISTQB CTFL 4.0.2) 

---

## 🖥️ Systemtest

**Definition & Fokus.** Der **Systemtest** prüft **Gesamtverhalten** und **Leistungsfähigkeit** eines **gesamten Systems/Produkts**; häufig umfasst er **funktionale End-to-End-Aufgaben** und **nicht-funktionale Qualitätsmerkmale** (z. B. **Gebrauchstauglichkeit**). Er kann von einem **unabhängigen Testteam** durchgeführt werden und bezieht sich auf **Anforderungsspezifikationen**. **Simulationen** von Teilsystemen sind möglich. (ISTQB CTFL 4.0.2) 

---

## 🧭 Einordnung im Testprozess

* **Eingangs-/Endekriterien pro Stufe definieren.** Typische **Eingangskriterien**: Ressourcen/Umgebungen/Testdaten/Testbasis vorhanden; **Endekriterien**: z. B. erreichte **Überdeckung**, Anzahl ungelöster Fehlerzustände, geplante Tests ausgeführt. In agilen Teams: **Definition-of-Ready/Definition-of-Done**. (ISTQB CTFL 4.0.2) 

* **Testpyramide.** Modelle ordnen **Komponententests** (klein, schnell, isoliert) unten, **Integrationstests** mittig und **End-to-End-Tests** (z. B. Systemtests über UI) oben ein. Höhere Ebenen sind **langsamer**, prüfen **größere Funktionalität**, benötigen **weniger Fälle** für angemessene Abdeckung. (ISTQB CTFL 4.0.2) 

* **Testquadranten (agil).** **Q1** umfasst **Komponenten-** und **Komponentenintegrationstests** und sollte **automatisiert** und in **CI** integriert sein. (ISTQB CTFL 4.0.2) 

---

## 🧪 Beispiele & didaktische Hinweise

* **Testdatenableitung im Komponententest:** **Äquivalenzklassenbildung** und **Grenzwertanalyse** zur systematischen Auswahl; für 100 %-Überdeckung müssen alle identifizierten **Klassen** bzw. **Grenzwerte** abgedeckt sein. (ISTQB CTFL 4.0.2)

* **White-Box im Komponententest:** **Anweisungs-**/**Zweigüberdeckung** messen, um Gründlichkeit transparent zu machen. 100 % **Anweisungsüberdeckung** ≠ vollständige Entscheidungslogik; **Zweigüberdeckung** adressiert Verzweigungen expliziter. (ISTQB CTFL 4.0.2) 

* **Nicht-funktionale Systemtests:** **Performanz, Gebrauchstauglichkeit, Zuverlässigkeit, Kompatibilität, Sicherheit** etc. werden auf Systemebene häufig realistischer bewertet. (ISTQB CTFL 4.0.2) 

---

## 📚 Begriffstabelle

| **Begriff**                            | **Definition (kurz)**                                                                                                                                                                 | **Quelle**        |
| -------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ----------------- |
| **Komponententest**                    | Test **isolierter Komponenten**; oft mit **Unittest-Frameworks**; typischerweise in der **Entwicklungsumgebung** der Entwickler.                                                      | ISTQB CTFL 4.0.2  |
| **Integrationstest** (Komponenten)     | Test der **Schnittstellen/Interaktionen** zwischen **Komponenten**; abhängig von **Integrationsstrategie**.                                                                           | ISTQB CTFL 4.0.2  |
| **Systemtest**                         | Test des **Gesamtverhaltens**/der **Leistungsfähigkeit** inkl. **End-to-End** und **nicht-funktionaler** Merkmale; evtl. **unabhängiges Testteam**; Bezug zu **Systemanforderungen**. | ISTQB CTFL 4.0.2  |
| **Modul-/Unit-/Komponententest**       | „Test einer **einzelnen Einheit** oder Teile dieser Einheit auf Funktionalität.“                                                                                                      | LF 5              |
| **Integrationstest (berufsschulisch)** | „Überprüfung des **fehlerfreien Zusammenwirkens** abhängiger Komponenten; Fokus: **Schnittstellen**.“                                                                                 | LF 5              |

---

## 🎯 Kompakte Lernziele je Stufe

* **Komponententest:** Hohe **Testisolation**, **Automatisierung** (Unittest-Frameworks), **White-Box**-Unterstützung; schnelle **Regressionserkennung**. (ISTQB CTFL 4.0.2, LF 11a)
* **(Komponenten-)Integrationstest:** **Schnittstellenrisiken** adressieren; **Integrationsstrategie** festlegen; sowohl **funktionale** als auch **nicht-funktionale** Aspekte der Interaktion prüfen. (ISTQB CTFL 4.0.2)
* **Systemtest:** **End-to-End-Szenarien**, **nicht-funktionale Qualitätsmerkmale** in repräsentativen **Testumgebungen**; ggf. **unabhängig** testen. (ISTQB CTFL 4.0.2) 

---

## [➡️ Nächstes](./5-Versionsmanagement-Quellcode.md)