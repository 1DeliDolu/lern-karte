# 🕳️ Schwachstellenanalyse (Vulnerability Management) <span style="background:#e0f0ff;">LF9, LF4</span>

**Schwachstellenanalyse** bezeichnet das systematische Prüfen von Zielsystemen mit **Security-/Vulnerability-Scannern** auf **bekannte Sicherheitslücken**; beispielhaft wird **OpenVAS** (Open-Vulnerability-Assessment-System) genannt. **Vulnerability-Management (VM)** umfasst darüber hinaus **proaktive Asset-Erfassung**, **kontinuierliches Monitoring**, **Eindämmung**, **Behebung** und die **Verteidigung gegen Cyberangriffe**. (LF9) 

Der **IT-Grundschutz** unterstützt Organisationen **systematisch nach Schwachstellen zu suchen**, die **Angemessenheit von Schutzmaßnahmen zu prüfen** und **Sicherheitskonzepte** im **PDCA-Zyklus (Plan-Do-Check-Act)** fortzuschreiben. (LF4) 
Aus **Art. 32 DSGVO** ergibt sich zudem die Pflicht zu einem Verfahren zur **regelmäßigen Überprüfung, Bewertung und Evaluierung der Wirksamkeit** technischer und organisatorischer Maßnahmen (**TOM**). (LF4) 

---

## 🎯 Ziele der Schwachstellenanalyse

* **Frühe Erkennung** bekannter **Schwachstellen** und **Risikominderung** durch strukturierte Behandlung im VM-Prozess. (LF9) 
* **Wirksamkeitsnachweis** von **TOM** durch regelmäßige Prüfungen gemäß **Art. 32 DSGVO** (z. B. Audit, Evaluierung, Schwachstellenidentifikation). (LF4) 
* **Kontinuierliche Verbesserung** der Informationssicherheit entlang **PDCA** (Planen-Ausführen-Prüfen-Handeln). (LF4) 

---

## 🧰 Methoden & Werkzeuge

* **Security-/Vulnerability-Scanner**: prüfen Zielsysteme automatisiert auf **bekannte Sicherheitslücken** (**OpenVAS** als Beispiel). (LF9) 
* **Vulnerability-Management**: organisatorischer Rahmen inkl. **Asset-Erfassung**, **Monitoring**, **Eindämmung**, **Behebung** und **Verteidigung**. (LF9) 
* **SIEM-Systeme**: analysieren in Echtzeit **Log-Events**, **bekannte Schwachstellen** u. a., lösen **Alarme** aus bzw. unterstützen **Reaktionsmaßnahmen** (auch mit **ML**, **UEBA**, **SOAR**). (LF9) 

---

## ⚙️ Prozessschritte der Schwachstellenanalyse (aus den Quellen konsolidiert)

1. **Asset-Erfassung**: relevante Systeme/Anwendungen identifizieren (Basis für Scans). (LF9) 
2. **Kontinuierliches Monitoring**: regelmäßige, planvolle **Vulnerability-Scans** (z. B. mit **OpenVAS**). (LF9) 
3. **Eindämmung (Containment)**: Sofort-Maßnahmen bei kritischen Befunden. (LF9) 
4. **Behebung (Remediation)**: **Patch-/Change-Management** umsetzen; Ergebnisse dokumentieren. (LF9, LF4) turn5file6
5. **Verteidigung/Überwachung**: Integration der Ergebnisse in **SIEM** zur Alarmierung und Lagebild-Erstellung. (LF9) 
6. **Wirksamkeit prüfen & nachweisen**: **Audits/Evaluierungen/Schwachstellenidentifikation** im Sinne von **Art. 32 DSGVO**; Rückführung in den **PDCA-Zyklus**. (LF4) turn5file2

---

## 🧪 Beispiele/Illustrationen aus dem Material

* **OpenVAS einsetzen**: Als Beispiel für einen **Vulnerability-Scanner** wird **OpenVAS** explizit genannt, um Systeme auf **bekannte Lücken** zu untersuchen. (LF9) 
* **VM-Umfang**: **proaktive Asset-Erfassung**, **Monitoring**, **Eindämmung**, **Behebung**, **Verteidigung** sind ausdrücklich als Bestandteile des **Vulnerability-Managements** aufgeführt. (LF9) 
* **SIEM-Einbindung**: **Log-Daten**, **bekannte Schwachstellen** und **Netzwerk-Meldungen** fließen in **SIEM** ein; daraus entstehen **Alarme** und **Reports** zur schnellen Abwehr. (LF9) 

> **Hinweis:** Konkrete **Befehle/Beispielcode** zur Bedienung von OpenVAS oder anderer Scanner sind im bereitgestellten Material **nicht enthalten**; das Material bleibt auf **Konzept/Methoden** und **Werkzeugnennung** (z. B. **OpenVAS**, **SIEM**) fokussiert. (LF9) 

---

## 📋 Praxis-Check (an den Quellen ausgerichtet)

* **Geltungsbereich & Assets** festlegen (Systeme, Anwendungen, Versionen). (LF9) 
* **Regelmäßige Scans** terminieren und durchführen (bekannte Lücken). (LF9) 
* **Funde priorisieren** und **Behandlung einleiten** (Eindämmung → Behebung). (LF9) 
* **Patch/Change-Management** umsetzen und dokumentieren. (LF4) 
* **SIEM**: Ergebnisse konsolidieren, **Alarme/Reports** nutzen. (LF9) 
* **Wirksamkeit belegen** (Audit/Evaluierung gem. **Art. 32 DSGVO**; **PDCA**). (LF4) turn5file2

---

## 🧩 Zusammenhang mit IT-Grundschutz & DSGVO

Der **IT-Grundschutz** verankert das **systematische Schwachstellen-Suchen** und die **Prüfung der Angemessenheit** von Maßnahmen; **PDCA** sichert die **Fortschreibung** des Sicherheitskonzepts. (LF4) 
**Art. 32 DSGVO** fordert explizit ein **Verfahren zur regelmäßigen Überprüfung/Evaluierung** der Maßnahmen (**TOM**) einschließlich **Schwachstellenidentifikation**. (LF4) 

---

## | Begriff | Definition | Quelle |

| Begriff                             | Definition                                                                                                      | Quelle              |
| ----------------------------------- | --------------------------------------------------------------------------------------------------------------- | ------------------- |
| **Security-/Vulnerability-Scanner** | Programme/Dienste, die Zielsysteme auf **bekannte Sicherheitslücken** prüfen.                                   | (LF9)               |
| **OpenVAS**                         | **Open-Vulnerability-Assessment-System** als Beispiel eines Scanners im Material.                               | (LF9)               |
| **Vulnerability-Management (VM)**   | **Asset-Erfassung**, **kontinuierliches Monitoring**, **Eindämmung**, **Behebung**, **Verteidigung**.           | (LF9)               |
| **SIEM**                            | Echtzeit-Analyse von **Log-Events**, **bekannten Schwachstellen**; **Alarme/Reports** zur Abwehr.               | (LF9)               |
| **IT-Grundschutz/PDCA**             | **Systematisch nach Schwachstellen suchen**, **Angemessenheit prüfen**, **PDCA** anwenden.                      | (LF4)               |
| **Art. 32 DSGVO / TOM**             | **Regelmäßige Überprüfung/Evaluierung** der **Wirksamkeit** (Audit, Evaluierung, Schwachstellenidentifikation). | (LF4) turn5file10 |

---

## 🔚 Kurzfazit

Die **Schwachstellenanalyse** im Material ruht auf drei Säulen: **Scanner (z. B. OpenVAS)**, ein klar umrissenes **Vulnerability-Management** (Asset→Scan→Eindämmung→Behebung→Verteidigung) und die **Verankerung** in **IT-Grundschutz/PDCA** sowie **Art. 32 DSGVO** zur **Wirksamkeitsprüfung**. (LF9, LF4) turn5file2turn5file10


