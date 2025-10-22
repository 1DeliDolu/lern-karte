# 🎯 Methoden zur Messung der Zielerreichung im QM-Prozess (LF1, LF2, LF5, LF6, LF8, LF11a)

Die Messung der **Zielerreichung** im Qualitätsmanagement (QM) stützt sich in den vorliegenden Lernfeldern auf vier Säulen: den **Verbesserungsprozess** über **PDCA/KVP**, **Kennzahlen (KPI)**, **Soll-Ist-Vergleiche** zur Abweichungsanalyse sowie die qualitätssichernde **Test- und Abnahmedokumentation** (Testdatengeneratoren, **Testprotokolle**, **Abnahmeprotokoll**). (LF1, LF5, LF6, LF8)    

---

## 🔁 Verbesserungsprozess: PDCA-Zyklus & KVP

Der **PDCA-Zyklus** (Plan-Do-Check-Act) nach Deming strukturiert die **ständige Verbesserung von Geschäftsprozessen** in vier Schritten und bildet die Grundlage, um ein **QM-Handbuch/IMS** aufzubauen, Mitarbeitende zu informieren, **KVP** zu organisieren und Prozesse systematisch zu verbessern. (LF1) 

**KVP (Kontinuierlicher Verbesserungsprozess)** wird als laufende, in kleinen Schritten erfolgende Prozessoptimierung beschrieben; gegenübergestellt ist das **Innovationsmanagement** mit sprunghaften, technologie- oder produktbezogenen Neuerungen. Die Tabelle im Material unterscheidet Ziel, zeitliche Ausprägung, Objekte, Grundlagen, Beteiligte und Vorteile beider Ansätze. (LF1) 

Für **komplexe Verbesserungen** wird zusätzlich der **DMAIC-Zyklus** aus **Six Sigma** genannt (Define, Measure, Analyze, Improve, Control). Er verknüpft u. a. **KPI-Analyse**, **Ursache-Wirkungs-Diagramme**, **5-Warum-Methode**, **Simulationen/Testläufe** sowie **PDCA/KVP** im **Control**-Schritt. (LF6) 

---

## 📊 Kennzahlen (KPI) im QM-Prozess

**Key-Performance-Indikatoren (KPI)** sind **Messgrößen/Kennzahlen**, die **Leistungsstärke und Zielerreichung** eines Prozesses oder IT-Services anzeigen; sie werden **als absolute Werte**, **prozentuale Größen** (z. B. **Verfügbarkeit 99,9 %**) oder **Zeitvergleiche** (z. B. unerledigte Tickets **Jahr 1 vs. Jahr 2**) ausgewertet und **zueinander in Beziehung** gesetzt. (LF6) 

Im **Service-/Incident-Kontext** verknüpft das Material KPI-Auswertung mit **SLA-Vorgaben**, **Eskalationslogik**, **Ticket-Mustern/Lösungsdatenbank** und **regelmäßigen Reports**; Beispiel-KPIs umfassen **Downtime/Time to Repair**, **Uptime/Time Between Failures**, **Verhältnis gelöster zu ungelösten Tickets**. (LF6)  

---

## 📉 Soll-Ist-Vergleich & Abweichungen erkennen/„berechnen“

Ein **Soll-Ist-Vergleich** wird ausdrücklich als Methode in **Erfüllungsmatrizen/Checklisten** bei Angebotsbewertung genannt (**„Soll/Ist-Vergleich“**). (LF2) 

Im agilen Projektumfeld visualisiert das **Burn-Down-Chart** die **geplante (Soll)** und **geleistete (Ist)** Arbeit über die Zeit; **Abweichungen** werden unmittelbar als **Distanz** zwischen idealem und tatsächlichem Verlauf sichtbar und dienen der **Steuerung**. (LF8) 

Für Services zeigt das Material konkrete **Zeitreihen- bzw. Verhältnisbetrachtungen** (z. B. **„Ungelöst“ vs. „Gelöst“** inkl. **Verhältnis in %**). Damit wird die **Abweichung** zwischen Ziel und Ergebnis **quantitativ** gefasst (z. B. Senkung unerledigter Tickets, Zielquote erreicht/nicht erreicht). (LF6) 

**Praxis-Hinweis aus den Unterlagen:** Kennzahlen werden **im Zeitablauf verglichen** und **zu anderen Messgrößen in Beziehung gesetzt**; damit lassen sich **Soll-Ist-Abstände** (qualitativ und quantitativ) fundiert ableiten. (LF6) 

---

## 🧪 Testdatengeneratoren

Ein **Testdatengenerator** ist ein **Unterstützungswerkzeug** zum **Generieren, Bereitstellen, Verändern oder Selektieren** von Testdaten (auch aus Wissensdatenbanken). Besonders bei **großen Datenvolumina/Big Data** sind solche Tools wesentlich. (LF8) 

**Kategorien**:

* **Datenbankbasierte** Generatoren (leiten Testbestände aus **DB-Schemata** ab),
* **Codebasierte** (analysieren **Programmcode**, **White-Box**),
* **Schnittstellenbasierte** (analysieren **API-Parameter** und leiten Daten z. B. mit **Äquivalenzklassen/Grenzwerten** ab, **Black-Box**),
* **Spezifikationsbasierte** (leiten Testdaten und **Sollwerte** aus **Spezifikation** ab). (LF8) 

**Beispiel-Tools** (Auswahl aus den Unterlagen): **DATPROF**, **GenerateData.com**, **IRI RowGen** – jeweils mit Hinweisen zu **DB-/Format-Support** und **Lizenzmodell**. (LF8) 

---

## 📝 Testprotokolle (Testdokumentation)

Die **Testdokumentation** verweist vom ehemaligen **IEEE 829** auf die Nachfolgenorm **ISO/IEC/IEEE 29119** mit Dokumentenklassen **Testkonzept**, **Testspezifikationen** (Entwurf, Fälle, Abläufe) und **Testberichte** (**Testprotokoll**, **Abweichungsbericht**, **Abschlussbericht**). (LF5) 

Das **Testprotokoll** hält **alle Testergebnisse** fest (OK/Fehler inkl. **Fehlverhalten**). Ein **Beispielprotokoll** im Material zeigt Eingabedaten, erwartete Ausgabe (**Soll**) und Ergebnis (**Ist**) inkl. Anzahl **positiver/negativer** Tests. (LF5) 

**Testprozess**: von **Testplanung** (Ziele, Arten, Kriterien) über **Testentwurf** (Testfälle, Daten), **Vorbereitung** (Umgebung/Daten), **Durchführung** (unabhängig vom Entwickler empfohlen), **Auswertung** (Vergleich mit erwarteten Ergebnissen, **Abweichungsliste**), bis **Abschluss** (Archivierung). (LF5) 

---

## ✅ Abnahmeprotokoll

Die **Abnahme** bestätigt, dass **Anforderungen erfüllt** sind; sie löst **Rechtsfolgen** aus (z. B. **Fälligkeit der Vergütung**, Beginn **Verjährung**, **Gewährleistung**). (LF8) 

Das **Abnahmeprotokoll** dokumentiert **Ablauf und Ergebnisse** der Abnahme; Standards geben **keine feste Form** vor – **Checkliste der Abnahmekriterien** ist Mindestinhalt; empfohlen werden **vertragliche**, **benutzerbezogene** und **betriebs-/technikbezogene** Aspekte (z. B. Funktionalität, nicht-funktionale Anforderungen, Sicherheitsanforderungen). (LF8)  

Rechtlicher Hintergrund **Werkleistung**: **§ 640 BGB** (Abnahme), Folgen: **Vergütungsfälligkeit (§ 641)**, **Gefahrübergang (§ 644)**, **Beginn Verjährung (§ 634a)**; Unterschiede zum **Dienstvertrag (§ 611)** werden erläutert. (LF2) 

---

## 💻 Beispielcode & Beispiele

### JUnit-Unittest (IST-vs-SOLL im Testfall) (LF11a) 

```java
import static org.junit.jupiter.api.Assertions.assertEquals;
import org.junit.jupiter.api.Test;

class BeispielJUnitTest {

    int calculateSum(int a, int b) {
        return a + b;
    }

    @Test
    void testCalculateSum() {
        // Soll: 3 + 1 = 4
        int expected = 4;
        int actual = calculateSum(3, 1); // Ist
        assertEquals(expected, actual);
    }
}
```

*Erläuterung:* Der Test vergleicht **Sollwert** (expected) mit **Istwert** (actual) und markiert die **Abweichung** automatisch (grün/rot). (LF11a) 

### Auszug Testprotokoll – Struktur (LF5) 

| Nr. | **Testdaten (Eingabe)** | **Erwartete Ausgabe (Soll)** | **Ergebnis (Ist)** | **Bemerkungen**      |
| --: | ----------------------- | ---------------------------- | ------------------ | -------------------- |
|   1 | `10.03.2020`            | `10.03.2020`                 | OK                 | —                    |
|   2 | `29.02.1900`            | „Datum inkorrekt“            | Fehler             | Datum wird angezeigt |

> Im Protokoll werden am Ende **positive/negative** Tests **gezählt** (quantitative Auswertung). (LF5) 

### Burn-Down-Chart – Soll/Ist (LF8)

Das Chart zeigt **Zeit (X)** gegen **verbleibende Arbeit (Y)**; **Sollkurve** (ideal) vs. **Istkurve** (geleistet). **Abweichungen** sind direkt sichtbar und dienen der **Steuerung**. (LF8) 

---

## 📚 Begriffsklärungen (kompakt)

| **Begriff**            | **Definition (aus den Unterlagen)**                                                                                          | **Quelle**   |
| ---------------------- | ---------------------------------------------------------------------------------------------------------------------------- | ------------ |
| **PDCA-Zyklus**        | Vier-Schritt-Zyklus zur **ständigen Prozessverbesserung** im QM (Plan-Do-Check-Act).                                         | (LF1)        |
| **KVP**                | **Kontinuierliche** Verbesserung in **kleinen Schritten**; Abgrenzung zum **Innovationsmanagement**.                         | (LF1)        |
| **KPI**                | **Kennzahl** zur Messung von **Effizienz/Effektivität/Wirtschaftlichkeit**; **absolute, prozentuale, zeitliche Vergleiche**. | (LF6)        |
| **Soll-Ist-Vergleich** | Vergleich von **geplanten** mit **tatsächlichen** Werten (z. B. **Erfüllungsmatrix**, **Burn-Down**).                        | (LF2, LF8)   |
| **Testdatengenerator** | Tool zur **Erzeugung/Bereitstellung/Selektion** von Testdaten (DB-, Code-, Schnittstellen-, Spezifikationsbasis).            | (LF8)        |
| **Testprotokoll**      | **Dokumentation** der Testdurchführung/-ergebnisse; Teil der **ISO/IEC/IEEE 29119**-Dokumentenfamilie.                       | (LF5)        |
| **Abnahme(protokoll)** | **Bestätigung** der Anforderungserfüllung mit **Rechtsfolgen**; **Checkliste** der Kriterien empfohlen.                      | (LF8, LF2)   |

---

## ⚙️ Prozessschritte (überblicksartig)

1. **Planen**: Ziele/Kriterien festlegen (PDCA **Plan**; SLA/KPI definieren). (LF1, LF6)  
2. **Umsetzen**: Maßnahmen/Tests durchführen; Testdaten bereitstellen (**Testdatengeneratoren**). (LF8, LF5)  
3. **Prüfen**: **KPI** auswerten, **Soll-Ist** (z. B. Burn-Down, Ticket-KPIs) vergleichen; **Testprotokolle** führen. (LF6, LF8, LF5)   
4. **Handeln**: **Abweichungen** adressieren (Korrekturen, **KVP/DMAIC**), **Abnahme** durchführen & protokollieren. (LF6, LF8)  

---

## 🧪 Zusatz: Abweichungen systematisch untersuchen

Für Ursachenanalysen werden u. a. **5-Warum** und **Ursache-Wirkungsdiagramme** empfohlen; Wissensdatenbanken/FAQs sichern Lerneffekte für künftige Soll-Ist-Abweichungen. (LF6) 

---

### Hinweise zum **Berechnen** von Abweichungen (aus den Beispielen)

* **Verhältnis-/Prozentwerte**: Die Unterlagen zeigen explizit **Verhältnisse in %** (z. B. gelöst/ungelöst). Diese Darstellung eignet sich zur **quantitativen** Abweichungsbewertung gegenüber Zielquoten. (LF6) 
* **Zeitreihenvergleiche**: **Jahr-zu-Jahr-Vergleiche** (z. B. unerledigte Tickets) quantifizieren **Verbesserungen** oder **Rückgänge**. (LF6) 
* **Burn-Down-Abweichung**: **Differenz** zwischen idealer und tatsächlicher Kurve macht **Plan-/Ist-Lücke** sichtbar (visuelle Abweichung). (LF8) 


