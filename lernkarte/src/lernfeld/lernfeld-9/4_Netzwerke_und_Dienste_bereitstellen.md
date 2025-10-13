# 🧩 4. Netzwerke und Dienste bereitstellen [Seite: 302]

Das Kapitel beschreibt die vollständige Bereitstellung von Netzwerken – von der Anforderungsaufnahme über Ist-Analyse, Lasten-/Pflichtenhefte und technische Auswahl bis hin zu Wirtschaftlichkeit, Sicherheit, Nachhaltigkeit, Installation, Tests und einem Virtualisierungskonzept. Es ist in acht Lernsituationen gegliedert, die den Projektfluss didaktisch abbilden. 

| Begriff              | Definition                                                                                                                                       |
| -------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------ |
| **Lastenheft**       | Gesamtheit der vom Auftraggeber festgelegten Forderungen an Lieferungen/Leistungen eines Projekts (DIN 69901-5); dient als Anforderungskatalog.  |
| **Pflichtenheft**    | Vom Auftragnehmer erarbeitete Realisierungsvorgaben zur Umsetzung des Lastenhefts; Basis der vertraglich geschuldeten Leistungen.                |
| **SLA**              | Vorgaben zu Verfügbarkeit, Supportzeiten, Monitoring/Wartung als Teil nicht-funktionaler Anforderungen.                                          |
| **TOM**              | Technische und organisatorische Maßnahmen als strukturierter Sicherheitsrahmen im Pflichtenheft-Kapitel „Sicherheit & Datenschutz“.              |
| **VLAN/Subnetting**  | Logische Segmentierung von LANs (VLAN) und Aufteilung eines IP-Netzes in Subnetze zur Strukturierung/Sicherheit.                                 |
| **DNS-Filter**       | Netzweiter Werbe-/Tracking- und Malware-Blocker, optional mit DoT/DoH/DoQ-Weiterleitung.                                                         |
| **SBC**              | Session Border Controller: Schutz/Kopplung externer und interner VoIP-Netze inkl. SIP-Security und Transcoding.                                  |
| **DMZ**              | Entkoppeltes Sicherheitssegment für öffentlich erreichbare Dienste zwischen externem Netz und internem LAN.                                      |
| **NGFW**             | Next-Generation-Firewall mit Layer-7-Transparenz, App-Kontrolle, DPI/IPS, Threat-Intelligence-Anbindung.                                         |
| **Zero Trust**       | Sicherheitsprinzip mit Mikrosegmentierung und strikter, kontextbezogener Zugriffskontrolle.                                                      |
| **SDN/SASE**         | Software-/Security-Defined Networking & Secure Access Service Edge zur flexiblen, segmentierten Standortvernetzung.                              |
| **USV (VFI/VI/VFD)** | Klassen von unterbrechungsfreien Stromversorgungen nach DIN EN 62040-3 mit unterschiedlichem Schutzumfang.                                       |
| **PUE**              | Power Usage Effectiveness als Kennzahl der Rechenzentrums-Energieeffizienz.                                                                      |
| **TIA 568-A/B**      | Standardisierte Aderbelegung für Twisted-Pair-Verkabelung (RJ45).                                                                                |
| **LSA**              | Löt-/Schraub-/Abisolierfreie Schneidklemmtechnik zum Auflegen am Patchpanel/Datendosen.                                                          |

## 🧠 4.1 Netzwerkbereitstellung nach unterschiedlichen Unternehmensanforderungen unterscheiden

Ziel ist die strukturierte Formulierung von Anforderungen je nach Unternehmensgröße, Aufgaben und Sicherheitsniveau. Die Anforderungen werden klar vertraglich festgehalten und später technisch umgesetzt. 

### 4.1.1 Kundenanforderungen formulieren

* **Prozess**: Von der Kundenanfrage über **Bedarfsanalyse**, **Ist-Analyse**, **Lastenheft**, Grob-/Feinkonzept, Angebot bis zur Übergabe ins **Pflichtenheft**. Kommunikationswege (Helpdesk, Telefon, E-Mail, Portal, Besprechung, Videokonferenz) sind vorgesehen. 
* **Erstgespräch – Leitfragen**: Ausgangssituation, Ziele, Infrastruktur, Dienste, Security (Schutzbedarf), Administration/Support, Compliance, Kostenoptimierung. 
* **Pflichtenheft-Bezug**: Das Pflichtenheft setzt das Lastenheft konkret um; sensible Kalkulation verbleibt intern. 

**(1) Einsatzgebiete (nach Ausbildungsordnungen)**

| Einsatzgebiete                   | Aufgaben                                                       |
| -------------------------------- | -------------------------------------------------------------- |
| **Rechenzentren**                | Aufbau/Erweiterung, Verkabelung, Administration, Monitoring.   |
| **Digitale Netzinfrastrukturen** | Passive/aktive Komponenten bereitstellen (Kupfer, LWL, Funk).  |
| **Netzwerke**                    | Logische/physische Einrichtung, Geräteauswahl, Konfiguration.  |

### 4.1.2 Mit DevOps Netzwerkbereitstellung unterstützen

DevOps-Ansätze (z. B. Kubernetes/Docker, Automatisierung, „Shift-Left“ Security) beschleunigen die Bereitstellung, erhöhen Qualität und Sicherheit in hybriden/Cloud-Umgebungen. 

## 🧾 4.2 Ist-Analysen durchführen und Lastenhefte erstellen

* **Anforderungsvorlagen** strukturieren funktionale/nicht-funktionale Anforderungen, **Sicherheit & Datenschutz** (inkl. TOM), **Lebenszyklus**, **Lieferumfang** und **SLA-Aspekte**. 
* **Pflichtenheft-Inhalte (Ausbildungsvorlage)** präzisieren Muss/Kann/Abgrenzung, Administration/Monitoring/Wartung, Abnahme/Schulung. 
* **Beispiele**:

  * **Kleinstunternehmen** (LTE-Fallback, Router mit DHCP/DNS, einfache Firewall, Dokumentation/Support). 
  * **KMU** (Gastnetz via LTE/WLAN-Router; Lastenheftvorlage inkl. Netzplan und Anforderungen). 
  * **Großunternehmen** (Prototyp bei deutschem Hoster, „Proxmox“, VMs für Nextcloud & Videokonferenz, Admin-Rollen, Firewall-Schutz, Updateservice). 

## 🔧 4.3 Technische Anforderungen für das Bereitstellen von Netzwerken berücksichtigen

* **Grundlagen**: Protokolle, Server-HW/SW, RZ-Anforderungen, WAN-Infrastrukturen. 
* **Adressierung & Segmentierung**: **Subnetting** und **VLANs** zur Strukturierung/Sicherheit (Beispiel 192.168.0.0/24 → 16 Subnetze). **Routing** anhand von Routingtabellen. 
* **Komponenten (Auswahlkriterien/Aufgaben)**:

  * **Access Points**: Wi-Fi-Standard (Wi-Fi 6/5), Durchsatz, Dual-Band, MU-MIMO/OFDMA, PoE, Cloud-Management. 
  * **SoHo/Edge/Core-Router**: WAN-Interfaces (DSL/LTE/LWL), DNS/DHCP, Redundanzen; Leistung nach Einsatzbereich. 
  * **DNS-Filter**: zentraler Schutz, Blacklists, Weiterleitung mit DoT/DoH/DoQ. 
  * **SBC (VoIP)**: SIP-Security, DDoS-Schutz, Verschlüsselung (TLS/SRTP), Protokoll-Übersetzung. 
  * **NAS/SAN/DAS**: Kriterien (Kapazität, RAID, Filesystem **OpenZFS**, Link-Aggregation, Redundanz). **TrueNAS** als Open-Source-Alternative. 
  * **USV**: VFI/VI/VFD-Klassen, Dimensionierung nach Last/Überbrückungszeit. 
  * **Kupferverkabelung**: CAT5e/6/6a/7-Eigenschaften und Einsatzgrenzen. 

## 📈 4.4 Wirtschaftliche und sicherheitsrelevante Anforderungen sowie Nachhaltigkeit

### 4.4.1 Wirtschaftliche Anforderungen berücksichtigen

* **Kostenrahmen**: Anschaffungs- vs. Betriebskosten (HGB § 255), Herstell-/Selbstkosten in Handel, Fertigung, Dienstleistung. **Stundensatz** aus Selbstkosten + Gewinnaufschlag.
* **Preis-/Kostenmodelle**: **Pay-per-Use/Pay-as-you-Go** (nutzungsbasiert), **Reserved**-Modelle in der Cloud. 
* **Finanzierung**: Darlehensarten (Fest-, Raten-, **Annuitätendarlehen**), **Leasing**, Miete/Cloud-Services; Projektcontrolling mit Zwischen-/Nachkalkulation und Soll-Ist-Vergleich. 
* **Nutzwertanalyse**: Quantitativer und qualitativer Angebotsvergleich zur Zuschlagsermittlung. 

### 4.4.2 Sicherheitsrelevante Anforderungen berücksichtigen

* **Gefährdungslagen & BSI-Grundschutz**: Sicherheitsleitlinie → Sicherheitskonzept → Strukturanalyse → Schutzbedarfsfeststellung; typische Gefährdungen (z. B. DoS, Schadprogramme, Fehlplanung). 
* **Architekturprinzipien**: **Zero Trust** (Mikrosegmentierung, Layer-7-Policies), **SDN/SASE** (Makro-/Mikrosegmentierung, zentrale Orchestrierung). 
* **Schutzkomponenten**: **DMZ**, **NGFW** (DPI/IPS/App-Kontrolle) als moderne Perimeter-/Segment-Sicherheit. 

### 4.4.3 Nachhaltigkeit sicherstellen

* **Rahmen & Initiativen**: **ISO 14001/14004** (Umweltmanagement), CSR, CO₂-Bilanz/Zertifikate; „Climate Neutral Data Centre“ (Klimaneutralität bis 2030).
* **Maßnahmenkatalog (Auszug)**: **PUE** optimieren (Energieverteilung, effiziente Geräte, Virtualisierung), Kühlung/Klimatisierung (Warmwasserkühlung, Kalt-/Warmgangeinhausung), Abwärmenutzung, Ressourcenreduktion (Refurbishing/Recycling/Remarketing). 

## 📑 4.5 Pflichtenhefte erstellen und Vertragserstellung unterstützen

* **Ausschreibungs- & Vergabeplanung (4.5.1)**: Geregelte Verfahren, Compliance, digitale Vergabeplattformen; Ziel: konfliktarme Beschaffung. 
* **Nicht-funktionale Anforderungen – weitere Punkte**: Performance, **Skalierbarkeit**, Anwendungs-/Systemmonitoring, **Systemverfügbarkeit**, Supportzeiten/Wartungsfenster, **Backup/Restore**, Reporting. 

## 🛠️ 4.6 Netzwerke installieren, konfigurieren und bereitstellen

* **Arbeitsblöcke**: (1) **Infrastruktur** (Kabel, Patchpanel, Dosen), (2) **Netzwerkkomponenten** (Switch, Router, Firewall, AP), (3) **Server** (OS, Dienste, Härtung). 
* **Praxisdetails**: **Crimpen** nach **TIA 568-A/B**, **LSA**-Auflegen am Patchpanel/Datendosen; konsistente Pin-Belegung an beiden Enden und sorgfältige Dokumentation. 

## 🧪 4.7 Funktionsprüfungen und Messungen

Im Anschluss sind Funktionsprüfungen und Messungen vorgesehen (Netz-/Dienste-Verfügbarkeit, Qualität), um die Abnahme vorzubereiten. 

## ☁️ 4.8 Virtualisierungskonzept vorstellen

* **4.8.1 Ziele der Informationsveranstaltung**: Musterkunde mit abzulösender Alt-Hardware und typischen Anwendungsfällen (CRM/SQL, VoIP/TAPI, VC, RDS/AD, E-Mail/Kalender/Office); Ziel: „Server-Alternative ohne Hardware vor Ort“. 
* **4.8.2 Virtualisierungskonzept (Zielszenario)**: Präsentation eines konsistenten Virtualisierungskonzepts samt Ressourcen-/Netz-Konfiguration und Managementoberflächen. 

---

### 🎯 Kernaussagen kompakt

* Anforderungen sauber erfassen (**Lastenheft**) und verbindlich spezifizieren (**Pflichtenheft**).
* Technikentscheidungen begründen: Segmentierung (VLAN/Subnetting), geeignete Komponenten (AP, Router, DNS-Filter, SBC, USV, Verkabelung).
* Wirtschaftlichkeit (Kostenmodelle, Finanzierung, Nutzwertanalyse), **Sicherheit** (BSI-Grundschutz, Zero Trust, NGFW/DMZ) und **Nachhaltigkeit** (ISO 14001, PUE) gleichrangig berücksichtigen.
* Durchführung: strukturierte Installation/Konfiguration nach Standard (TIA/LSA) und anschließende Prüfungen; bei Bedarf Virtualisierungsszenarien präsentieren.

--- 

[4.1 Netzwerkbereitstellung](./4.1_Netzwerkbereitstellung_nach_unterschiedlichen_Unternehmensanforderungen_unterscheiden/4.1_Netzwerkbereitstellung_nach_unterschiedlichen_Unternehmensanforderungen_unterscheiden.md)