# 🛠️ Fehler erkennen, analysieren und beheben <span style="background:#e0f0ff;">LF6, LF8, LF11a, LF5, LF7, AP2</span>

**Zielbild:** „Fehler erkennen, analysieren und beheben“ umfasst den gesamten Weg von der **Fehlersichtung** (z. B. Störung/Incident), über die **Ursachenanalyse** (Problem-Management, Testverfahren, Debugging) bis zur **nachhaltigen Behebung** inklusive **Change-Umsetzung** und **Lernen im Sinne von KVP/PDCA**. Dabei werden **Service-Prozesse** (Incident/Problem/Change), **Teststufen** (Unit/Integration/System), **Testverfahren** (statisch/dynamisch, Black-Box/White-Box, Reviews, Grenzwert-/Äquivalenzklassen), **Debugging-Techniken** (Breakpoints, Schrittbetrieb, Exception-Handling) sowie **Messgrößen** (SLA/KPI, MTTR etc.) eingesetzt. (LF6, LF8, LF11a, LF5, AP2).

---

**Begriffe im Service-Kontext:** Ein **Incident** ist eine Störung, die den Betrieb beeinträchtigt; ein **Problem** ist die **zugrunde liegende Ursache** für einen oder mehrere Incidents und wird zur **Vermeidung von Wiederholungen** untersucht. **Bekannte Fehler (Known Errors)** sind Probleme, die (noch) nicht dauerhaft beseitigt sind, für die es aber **Workarounds** gibt und die in **Lösungs-/Knowledge-Datenbanken** dokumentiert werden. **Problem-Management** arbeitet reaktiv (aufgetretene Störung) und proaktiv (Trendanalysen, Prävention). (LF6). 

**Verankerung im Prüfungskatalog:** Zum Themenkomplex gehören **Debugging/Breakpoint**, **Software-Test (statisch/dynamisch: Black-Box, White-Box, Review, Extremwertetest)**, **Testdaten**, **Komponenten-/Integrations-/Systemtest** sowie **Versionsmanagement**. (AP2). 

---

## ⚙️ Ablauf: Vom Auftreten zur nachhaltigen Lösung (Prozesssicht)

1. **Fehler/Incident erkennen**
   • Eingang am **Service Desk** (Telefon, E-Mail, Remote, vor Ort), **Protokollieren/Kategorisieren/Priorisieren** im **Ticketsystem**, **SLA** beachten, ggf. **Eskalationsstufe** bestimmen. (LF6). 

2. **Soforthilfe & Eingrenzen**
   • **Workarounds** einsetzen (bei **Known Errors**), **Monitoring/KPI** prüfen (z. B. Downtime, Time-to-Repair), **Messdaten**/Logs sichten. (LF6).

3. **Ursachenanalyse (Problem-Management)**
   • **Trendanalysen** aus Incidents, **5-Warum-Methode**, **Ishikawa-Diagramm**, **Problemlösungs-/Ursache-Wirkungsmatrix** (Was? Wo? Wann? Wie viel?). Ergebnisse in **Knowledge Base**/FAQ sichern. (LF6).

4. **Dauerhafte Behebung planen (Change-Management)**
   • **Request for Change (RfC)** erstellen; **Klassifizierung**: **Standard Change** (Routine) vs. Level-1/-2/-3 (steigende Auswirkung). **Umfang**: betrifft **IT-Services, CIs, Prozesse, Doku**. (LF6).

5. **Umsetzung & Verifikation**
   • **Implementierung** des Changes, anschließend **Verifikation** durch geeignete **Teststufen** (Unit/Integration/System) und **Abnahme**; **Dokumentation**/Lessons Learned. (LF11a, LF12a).

6. **KVP/PDCA absichern**
   • **Plan-Do-Check-Act**, **Service Reviews**, **Kundenfeedback**, **KPI-Analysen**; Verbesserungsvorschläge einsteuern. (LF6). 

---

## 🧪 Fehler erkennen: Testverfahren & Teststufen

**Testprozess**: **Testplanung** (Strategie, Ziele, Start/Ende, Arten, Werkzeuge, Doku, Organisation) → **Testentwurf** (Testfälle, Reihenfolge, **Testdaten**, manuell/automatisiert) → **Testvorbereitung** (Umgebung, Daten, Doku) → **Testdurchführung** (**statisch**: Reviews/Inspektionen/Code-Analyse; **dynamisch**: Programmausführung) → **Testauswertung** (Abweichungen, Freigabe) → **Testabschluss** (Archiv). (LF5). 

**Statische Verfahren:** **Inspektion, Review, Walkthrough, Audit, statische Code-Analyse** – erkennen Fehler ohne Ausführung (z. B. Spezifikations- oder Code-Mängel). (LF5). 

**Dynamische Verfahren:**
• **Black-Box-Tests** (spezifikationsorientiert; Testdaten aus **Anforderungsspezifikation** abgeleitet) mit **Äquivalenzklassenbildung** und **Grenzwertanalyse** zur hohen Abdeckung mit wenigen Fällen. (LF8).
• **White-Box-Tests** (strukturorientiert; Quellcode bekannt; hohe **Testabdeckung**, aber wartungsintensiver bei Code-Änderungen). (LF8). 

**Teststufen:** **Unittest/Komponententest** (unterste Ebene, oft automatisiert), **Integrationstest**, **Systemtest**, ggf. **Abnahmetest** – Auswahl und Kombination gemäß Vorgehensmodell. (LF11a, LF12a).

**Schwerpunkt Prüfung:** Zusätzlich **Extremwertetest**, **Reviews** sowie saubere **Testdatenauswahl** sind explizit gefordert. (AP2). 

---

## 🐞 Fehler analysieren: Debugging & Entwicklungswerkzeuge

**Debugger & Breakpoints:** Mit **Breakpoints**, **Schrittbetrieb** und **Variablen-/Zustandsinspektion** unterstützen Debugger das **Auffinden logischer Fehler**; moderne **IDEs** bündeln Editor, Debugger, Versionsverwaltung etc. (LF5).

**Exception-Handling:** Unerwartete Laufzeitfehler werden durch **try/except/else/finally** kontrolliert behandelt – essenziell für robuste Fehlerbehebung und für gezielte Tests. (LF5). 

**Versionsmanagement:** Änderungen nachvollziehen, **Fehlerfixes** gezielt einspielen, Branch/ Merge-Strategien – Bestandteil des Prüfungsthemas. (AP2). 

---

## 🌐 Typische System-/Netzfehler erkennen & eingrenzen

**Beispiele:** **Duplex-Mismatch** (Switch-Port-Counter), **Broadcast-Stürme**, **falsche Encapsulation**, **doppelte MAC/IP/Hostnamen**, **DHCP-Probleme**; **Tools:** **Kabeltester/Multimeter**, **Wireshark**, Treiberquellen/Herstellerseiten. (LF6). 

**Praxis im Service:** **IMACD-Aufgaben** (Install/Move/Add/Change/Delete), **Patch-Management**, **FAQ/Knowledge-Base** aufbauen und pflegen – wiederkehrende Lösungen beschleunigen die Behebung. (LF6). 

---

## 📏 Steuern & Nachweisen: SLA, KPI, Eskalation

**KPI/Monitoring:** z. B. **Downtime**, **Time to Repair**, **Uptime**, **Time Between Failures**, Verhältnis **gelöster/ungelöster Tickets**; auswerten, Ursachen analysieren und **Verbesserungen** ableiten. (LF6). 

**SLA-Einhaltung & Eskalation:** Vorgaben prüfen, rechtzeitig auf **nächstes Support-Level** eskalieren, **Case Owner** bleibt verantwortlich, **Ticket-Doku** so präzise, dass sie als **Musterlösung** in die Datenbank kann. (LF6). 

---

## 🔁 Nachhaltig beheben: Change & KVP

**Change-Management:** **RfC** einreichen, **Standard/Level-1..3** klassifizieren, Auswirkungen auf **Services/CIs/Prozesse/Doku** bewerten, dann **Change planen, genehmigen, implementieren, reviewen**. (LF6).

**KVP/PDCA & Reviews:** **Service-Reviews, Kundenfeedback, KPI-Analysen**, **DevOps/lean/agile Ansätze** zur kontinuierlichen Verbesserung; **Retrospektiven** nach Sprints unterstützen die Lernschleife. (LF6, LF8).

---

## 🧪 Qualität & Risiko: FMEA (optional, je nach Kontext)

Mit **FMEA** (Failure Mode and Effects Analysis) werden **Bedeutung (B)**, **Auftretens- (A)** und **Entdeckungswahrscheinlichkeit (E)** bewertet; die **Risikoprioritätszahl** **RPZ = B·A·E** priorisiert Maßnahmen (ab ~100–150 aktiv werden). (LF7). 

---

## 📚 Begriffstabelle

| Begriff                 | Definition                                                                                            | Quelle       |
| ----------------------- | ----------------------------------------------------------------------------------------------------- | ------------ |
| **Incident**            | Konkrete Störung, die priorisiert im Ticketsystem bearbeitet wird (SLA-basiert, Eskalation möglich).  | LF6          |
| **Problem**             | Ursache für einen oder mehrere Incidents; wird zur Vermeidung von Wiederholungen untersucht.          | LF6          |
| **Known Error**         | Dokumentiertes, (noch) nicht behobenes Problem mit Workaround; in Lösungsdatenbank erfasst.           | LF6          |
| **Change-Management**   | Geplantes, genehmigtes, überprüftes Ändern von Services/CI/Prozessen/Doku (RfC, Standard/Level-1..3). | LF6          |
| **KPI/Monitoring**      | Kennzahlen (z. B. Downtime, TTR, Uptime) zur Steuerung von Qualität und Effizienz.                    | LF6          |
| **5-Warum**             | Iteratives Nachfragen zur Ermittlung der **Wurzelursache**.                                           | LF6          |
| **Ishikawa**            | Ursache-Wirkungs-Diagramm zur systematischen Ursachenstrukturierung.                                  | LF6          |
| **Black-Box-Test**      | Dynamischer Test gegen Spezifikation; Testdaten via Äquivalenzklassen/Grenzwerte.                     | LF8          |
| **White-Box-Test**      | Dynamischer, strukturorientierter Test mit Quelltextkenntnis und Abdeckungszielen.                    | LF8          |
| **Review/Inspektion**   | Statisches Verfahren zur frühen Fehlerentdeckung ohne Programmausführung.                             | LF5          |
| **Teststufen**          | **Unit/Integration/System** (+Abnahme) für schrittweise Qualitätsabsicherung.                         | LF11a, LF12a |
| **Debugger/Breakpoint** | Werkzeug und Haltepunkte für Schritt-für-Schritt-Analyse und Zustandsinspektion.                      | LF5          |
| **Exception-Handling**  | Struktur (try/except/else/finally) zur kontrollierten Behandlung von Laufzeitfehlern.                 | LF5          |
| **Versionsmanagement**  | Nachvollziehbarkeit/Steuerung von Änderungen; wichtig für Fix-Einführung.                             | AP2          |
| **FMEA / RPZ**          | Risikoanalyse über **B**edeutung, **A**uftreten, **E**ntdeckung → **RPZ = B·A·E**.                    | LF7          |

---

## 🧭 Konkrete Vorgehensleitlinien (praxisnah)

1. **Ticket sauber anlegen** (Symptom, Umgebung, Reproduzierbarkeit, Impact/Dringlichkeit, SLA, Log-Auszüge). (LF6). 
2. **Schnelltest & Eingrenzung** (**Known-Error/FAQ** prüfen, Monitoring/KPI, einfache Checks). (LF6). 
3. **Analyse vertiefen** (**5-Warum**, **Ishikawa**, **Grenzwert-/Äquivalenztests**, ggf. **White-Box** bei Codezugriff). (LF6, LF8).
4. **Debugging gezielt** (**Breakpoint** setzen, **Schrittbetrieb**, **Variablen/Stack** prüfen, **Exceptions** instrumentieren). (LF5).
5. **Fix per Change** (RfC, Risiko/Impact, Rollback, Teststufen planen, **Verifikation** und **Doku/KB-Eintrag**). (LF6, LF12a).
6. **Nachhalten & verbessern** (**KPI/Trend**, Lessons Learned, **PDCA/KVP**). (LF6). 

---

