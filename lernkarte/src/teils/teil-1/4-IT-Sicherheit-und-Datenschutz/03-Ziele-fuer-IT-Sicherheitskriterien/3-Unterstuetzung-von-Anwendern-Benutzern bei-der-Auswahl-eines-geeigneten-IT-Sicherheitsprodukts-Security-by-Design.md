# 🧭 Objektive Bewertung der Systeme (IT-Grundschutz-„Modellierung“) <span style="background:#e0f0ff;">LF4</span>

Die **Modellierung** im IT-Grundschutz ordnet die **Bausteine** des BSI den **realen Zielobjekten** (z. B. Anwendungen, IT-Systeme, Räume, Kommunikationsverbindungen) zu und schafft so die Grundlage für eine **objektive Bewertung** des gesamten Informationsverbunds (Reihenfolge: Leitlinie → Sicherheitskonzept → **Strukturanalyse** → **Schutzbedarfsfeststellung**). *(LF4)*  

Die **Strukturanalyse** erfasst systematisch Geschäftsprozesse, Anwendungen/Informationen, Netzplan, IT-Systeme und Räume; anschließend werden für alle **Zielobjekte** die **Schutzziele (C-I-A)** bewertet und ein **Schutzbedarf** (**normal/hoch/sehr hoch**) begründet. *(LF4)*  

Die **Schutzbedarfskategorien** nach **BSI-Standard 200-2** lauten: **normal** (begrenzte Auswirkungen), **hoch** (beträchtliche Auswirkungen), **sehr hoch** (existenzbedrohlich/katastrophal). Zusätzliche Ableitungsregeln: **Maximumprinzip** (Übernahme des höchsten Schutzbedarfs aus Abhängigkeiten), **Kumulationseffekt** (Erhöhung durch Zusammenwirken mehrerer Schäden), **Verteilungseffekt** (Senkung z. B. durch Lastausgleich). *(LF4)*  

**Aufgaben bei der Schutzbedarfsfeststellung** (Auszug): Schadensszenarien definieren, Reihenfolge der Zielobjekt-Prüfung festlegen, Abhängigkeiten (z. B. App ↔ Client) aufzeigen, Schlussfolgerungen zu sehr hohem/hohem/normalem Schutzbedarf ziehen. *(LF4)* 

## 🧪 Beispiel „RECPLAST GmbH“ – Auszüge der Modellierung und Bewertung <span style="background:#e0f0ff;">LF4</span>

* **Tabellenaufbau**: Zuordnung **Systeme ↔ Anwendungen** (Standorte, Nutzer, OS/Kategorien) als Basis für die Bewertung. *(LF4)* 
* **Kommunikationsverbindung „Internetanschluss“**: **C=hoch, I=hoch, V=hoch**, Begründung u. a. Schutz der E-Mail-Kommunikation und Verfügbarkeit der Außenverbindung. *(LF4)* 
* **IT-System „Clients Finanzbuchhaltung“**: **I=hoch**, **V=normal**, Begründungen zeigen u. a. **Maximumprinzip** durch verknüpfte Anwendung „Finanzbuchhaltung“. *(LF4)* 

| Begriff          | Definition                                                                                                                                | Quelle |
| ---------------- | ----------------------------------------------------------------------------------------------------------------------------------------- | ------ |
| **Modellierung** | Zuordnung der IT-Grundschutz-**Bausteine** zu **Zielobjekten** des realen Informationsverbunds als Basis der Risiko-/Schutzbedarfsarbeit. | LF4    |
| **Zielobjekte**  | Informationen/Anwendungen, IT-Systeme, Kommunikationsverbindungen, Räume, Gebäude.                                                        | LF4    |
| **Schutzbedarf** | Einstufung je **C-I-A** in **normal/hoch/sehr hoch** mit Begründung; Ableitung über **Maximum-/Kumulations-/Verteilungseffekte**.         | LF4    |

---

# 🧰 Unterstützung bei der Produktauswahl (**Security by Design**) <span style="background:#e0f0ff;">LF4, LF9</span>

**Security by Design** wird in den Unterlagen über zwei Linien verankert:

1. **BSI-Bausteine/TOM** geben **konkrete Anforderungen** vor (Basis/Standard/erhöhter Schutz) und leiten daraus Maßnahmen bzw. Produkttypen ab. *(LF4)*  
2. **Architektur- & Prozessvorgaben** (z. B. **Zero Trust**, **SASE**, **DevOps mit Shift-Left**) sorgen dafür, dass Sicherheit **früh** und **durchgängig** berücksichtigt wird. *(LF9)*   

## 🧩 Vorgehensmodell zur Auswahl geeigneter Sicherheitsprodukte (aus den Materialien abgeleitet)

1. **Schutzbedarf & Bausteine bestimmen**: Aus Strukturanalyse/Schutzbedarfsfeststellung die **relevanten Bausteine** wählen (z. B. **NET.1.1 Netzarchitektur/-design**, **NET.3.2 Firewall**, **NET.3.3 VPN**, plus **OPS/ORP/CON/APP/SYS**). *(LF9)* 
2. **Anforderungen ableiten**: **Basis-/Standard-/erhöhte** Anforderungen des Kompendiums als **MUSS/SOLLTE** für die Produktauswahl übernehmen (z. B. Patch-/Änderungsmanagement, Protokollierung, Rechte-/Rollenkonzepte). *(LF4, LF9)*  
3. **Architekturprinzipien beachten**:

   * **Zero-Trust-Design** mit **NGFW** (Segmentierungs-Gateways) und **Kipling-Methode** (Wer/Was/Wann/Wo/Warum/Wie). *(LF9)* 
   * **SASE** für cloudnahe, ortsunabhängige **Netz- & Security-as-a-Service**-Funktionen. *(LF9)* 
   * **SDN/SDDC** zur zentralen, herstellerentkoppelten Steuerung und Orchestrierung. *(LF9)* 
4. **Produktkategorien gezielt prüfen**: **E-Mail-Security**, **Endpoint-Security**, **Firewall-/Cloud-Security** sind typische Bündelungen am Markt; NGFW/UTM unterscheiden (vorgefertigte Policies vs. kundenspezifische Anpassung). *(LF4, LF9)*  
5. **Identity & Endpoint einbinden**: **MFA/SSO**, Endpoint-Protection-Suites, **VPN** für gesicherte Zugriffe; **Schulung/Sensibilisierung** als flankierende Maßnahme. *(LF4, LF9)*  

## 🧷 Mini-Checkliste „Security by Design“ (zum direkten Anwenden)

* **Baustein-Scope klar?** (z. B. NET.3.2 Firewall, OPS.1.1.5 Protokollierung, ORP.4 IAM) → **MUSS/SOLLTE**-Anforderungen übernehmen. *(LF9, LF4)*  
* **Architektur gewählt?** Zero-Trust (NGFW + Richtlinien), SASE (Cloud-Security Edge), SDN (zentrale Steuerung). *(LF9)*   
* **Betrieb abgesichert?** Patch/Change-Mgmt, Protokollierung, Schulung, Rollen/Rechte. *(LF9)* 
* **Endpoints/Identitäten geschützt?** MFA/SSO, Endpoint-Suite, VPN. *(LF4, LF9)*  

## 📋 Praxisbeispiele aus den Unterlagen

* **TOM-Beispiele** (Auszug): Physische Sicherung, Netz-Schnittstellen absichern, Umgang mit klassifizierten Informationen, **IAM**, Kryptographie, Datensicherung, **Malware-Abwehr** – als Baustein-geleitete Auswahlgrundlage. *(LF4)* 
* **NGFW/UTM**: Zwei-Firewall-DMZ-Ansatz; UTM mit gebrauchsfertigen Policies/Reporting vs. NGFW für kundenspezifische Richtlinien – leistungs-/funktionsabhängig vergleichen. *(LF9)* 

| Begriff                                     | Definition                                                                                                                  | Quelle     |
| ------------------------------------------- | --------------------------------------------------------------------------------------------------------------------------- | ---------- |
| **Security by Design**                      | Frühzeitige/fortlaufende Berücksichtigung von Sicherheit (z. B. **Shift-Left** in DevOps; Sicherheits- & Compliance-Tools). | LF9        |
| **Zero Trust**                              | Mikro-Perimeter, **NGFW** als Segmentierungs-Gateways, **Kipling-Methode** für Richtlinien.                                 | LF9        |
| **SASE**                                    | Cloud-Architektur, die **Netz- und Security-as-a-Service** bündelt und ortsunabhängig bereitstellt.                         | LF9        |
| **BSI-Bausteine (NET/OPS/ORP/CON/APP/SYS)** | Kataloge mit **Basis/Standard/erhöhten** Anforderungen als Produktauswahl-Leitplanken.                                      | LF9, LF4   |

---

## 🧱 Bonus: Baustein-Beispiele für Arbeitsplätze/Netze (Auszug) <span style="background:#e0f0ff;">LF4, LF9</span>

* **Arbeitsplätze**: INF.7/8/9/10, **SYS.2.1 Allgemeiner Client**, **SYS.4.5 Wechseldatenträger**, **APP.1.1 Office-Produkte**, **CON.4 Standardsoftware**. *(LF4)* 
* **Netze**: **NET.1.1 Netzarchitektur/-design**, **NET.3.2 Firewall**, **NET.3.3 VPN**, plus **OPS.1.1.3 Patch-/Änderungsmanagement**, **OPS.1.1.5 Protokollierung**, **ORP.4 IAM**. *(LF9)* 

---

### 🎯 Ergebnis

* **Objektiv bewerten**: Modellierung → Strukturanalyse → Schutzbedarfsfeststellung mit **C-I-A** und **BSI-Kategorien**, inkl. **Maximum/Kumulation/Verteilung**. *(LF4)*  
* **Sicher auswählen (Security by Design)**: Baustein-Anforderungen als **MUSS/SOLLTE**, architektonisch **Zero Trust/SASE/SDN**, prozessual **DevOps/Shift-Left**; Identity/Endpoint/Betrieb mitdenken. *(LF4, LF9)*   

---


