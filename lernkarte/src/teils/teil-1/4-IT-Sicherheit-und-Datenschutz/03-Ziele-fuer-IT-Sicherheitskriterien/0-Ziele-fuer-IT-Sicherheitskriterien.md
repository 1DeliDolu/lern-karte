# 🛡️ Ziele zur Entwicklung von IT-Sicherheitskriterien <span style="background:#e0f0ff;">LF4, LF9, LF11a</span>

Die Entwicklung von **IT-Sicherheitskriterien** verfolgt drei Kernziele: eine **Richtschnur für Entwickler** bereitstellen, eine **objektive Bewertung von Systemen** über die IT-Grundschutz-Vorgehensweise ermöglichen und **Anwender** bei der **Auswahl geeigneter Sicherheitsmaßnahmen/-produkte** unterstützen (Security-by-Design-Gedanke). Diese Ziele werden im BSI-IT-Grundschutz über Leitlinie, Sicherheitskonzept, Strukturanalyse und Schutzbedarfsfeststellung systematisch verankert (LF4). Die Phasen reichen von der **Initiierung** über **Leitlinie**, **Organisation**, **Konzeption**, **Umsetzung** bis zur **Aufrechterhaltung/Verbesserung** des ISMS (LF4). 

---

## 🧭 Ziel 1: Richtschnur für Entwickler (Leitlinie & Bausteine)

Eine **Sicherheitsleitlinie** ist ein *Grundsatzdokument der Leitung* und formuliert **Stellenwert**, **Prinzipien**, **Ziele**, **Rahmenbedingungen** und das **anzustrebende Sicherheitsniveau**; sie schafft Verantwortlichkeiten und regelt Vorgehen, Kommunikation, Terminplan und Dokumentation. Damit dient sie als **verbindliche Richtschnur** u. a. für **Entwickler** (Rollen wie „Entwickler“ sind explizit Teil der Sicherheitsorganisation). *(LF4)*

Die **IT-Grundschutz-Bausteinschichten** liefern dazu handfeste Vorgaben—darunter **CON** (Konzepte & Vorgehensweisen) mit **Softwareentwicklung**, **Kryptokonzept**, **Datenschutz**, **Datensicherungskonzept**—und bilden so eine normative Orientierung „was wie sicher umzusetzen ist“. *(LF4)* 

**Leitlinien-Inhalte (Auszug, als Vorlage/Richtschnur):** Geltungsbereich, Sicherheitsstrategie, Sicherheitsziele, Organisationsstruktur, Hinweis auf Gesetze/Regelwerke und Verpflichtung zur Einhaltung. *(LF4)* 

---

## 🧪 Ziel 2: Objektive Bewertung der Systeme (IT-Grundschutz-„Modellierung“)

Die **Strukturanalyse** erfasst **Informationsverbund, Geschäftsprozesse, Anwendungen, Informationen, Netzplan, IT-Systeme und Räume**—sie „modelliert“ die Umgebung als Basis der Bewertung. Darauf aufbauend legt die **Schutzbedarfsfeststellung** systematisch fest, **wieviel Schutz** die Zielobjekte (Informationen, Anwendungen, IT-Systeme, Kommunikationsverbindungen, Räume) brauchen; geprüft wird, **wo elementare Schutzmaßnahmen genügen** und **wo erhöhter Schutz** erforderlich ist. *(LF4)*

Die Bewertung nutzt die **BSI-Schutzbedarfskategorien** **normal/hoch/sehr hoch** mit Begründung je **Schutzziel (C-I-A)**; Effekte wie **Maximumprinzip**, **Kumulation** und **Verteilung** werden einbezogen. *(LF4)* 

**Beispiel (RECPLAST):** Tabellen ordnen **Anwendungen** und **IT-Systeme** den **Schutzzielen** zu; etwa **Finanzbuchhaltung** → **Vertraulichkeit/Integrität hoch** (Maximumprinzip), **Ausfallzeiten** werden begründet. *(LF4)* 

---

## 🧰 Ziel 3: Unterstützung der Anwender bei der Auswahl geeigneter Sicherheitsmaßnahmen/-produkte (Security by Design)

Die **Schutzbedarfsfeststellung** dient explizit dazu, die **Auswahl geeigneter Sicherheitsmaßnahmen** zu unterstützen—z. B. bei **mobilen Datenträgern** (Sensibilisierung, Richtlinien, Malware-Schutz, Backup, Meldewege). *(LF4)* 

Für Netze konkretisieren **BSI-Bausteine** (NET, SYS, APP, ORP, OPS) die **Anforderungen**—u. a. **Netzarchitektur/Design (NET.1.1)**, **Firewall/VPN**, **Patch-/Änderungsmanagement**, **Protokollierung**, **Rechte-/Rollenkonzepte**, **Schulung**—und geben damit **produkt-/maßnahmenorientierte Auswahlkriterien** an die Hand. *(LF9)* 

Der **Security-by-Design-Gedanke** wird im **Netz- und Cloud-Kontext** durch **Zero-Trust-Architektur/-Design** (Policies nach Kipling-Methode, NGFW, SDN/SDDC) sowie **SASE-Modelle** betont; in der **Software-/Systembereitstellung** verankert **DevOps mit Shift-Left** Sicherheit **früh im Entwicklungsprozess** (kontinuierliche Sicherheitstests, Compliance-Tools), sodass Auswahl/Einführung von **sicheren Produkten** und **Prozessen** von Beginn an erfolgt. *(LF9)*

---

## ⚙️ Prozessschritte (kompakt)

1. **Leitlinie erstellen** (Ziele, Prinzipien, Zuständigkeiten) *(LF4)*. 
2. **Sicherheitskonzept** mit **TOM** (z. B. physische Sicherung, Identitäts-/Berechtigungsmanagement, Kryptographie, Datensicherung, Malware-Abwehr). *(LF4)* 
3. **Strukturanalyse** (Informationsverbund, Prozesse, Anwendungen, Netze, Räume). *(LF4)* 
4. **Schutzbedarfsfeststellung** (C-I-A je Zielobjekt; normal/hoch/sehr hoch; Maximumprinzip/Kumulation/Verteilung). *(LF4)* 
5. **Maßnahmen/Produkte auswählen** (z. B. NET/SYS/APP/OPS-Bausteine; Zero Trust, SASE, Endpoint-Security). *(LF9)*
6. **Umsetzen, betreiben, verbessern** (Patchen, Protokollieren, Schulen; DevOps/Shift-Left). *(LF4, LF9)*

---

## 📋 Praxisbeispiele (aus den Unterlagen)

**A) Schutzbedarfsfeststellung – mobile Datenträger (Auszug):**
Formblatt mit Datenart → **C/I/A** → **Schutzbedarf** + **Begründung** + **Maßnahmen** (z. B. Vertraulichkeit „hoch“ für Kundendaten; Maßnahmen: zuverlässige Kommunikationspartner, Richtlinie, Malware-Schutz, Meldepflicht, Sicherungskopie). *(LF4)* 

**B) RECPLAST-Tabellen (Ausschnitte):**
Zuordnung **Anwendungen** ↔ **Systeme**; **C/I/A-Bewertungen** begründet (z. B. FIBU „hoch“), inkl. **Internetanschluss** mit C/I/A jeweils „hoch“. *(LF4)* 

---

## 📚 Begriffsklärungen

| Begriff                                  | Definition                                                                                                 | Quelle |
| ---------------------------------------- | ---------------------------------------------------------------------------------------------------------- | ------ |
| **Sicherheitsleitlinie**                 | Grundsatzdokument mit Prinzipien, Zielen, Rahmen, Verantwortlichkeiten – als Richtschnur für die Umsetzung | LF4    |
| **Strukturanalyse**                      | Erfassung von Informationsverbund, Prozessen, Anwendungen, Netzen, Räumen                                  | LF4    |
| **Schutzbedarfsfeststellung**            | Objektive Einstufung von Zielobjekten in **normal/hoch/sehr hoch** je **C-I-A** inkl. Begründung           | LF4    |
| **Maximumprinzip/Kumulation/Verteilung** | Ableitungsregeln zur Festlegung des (maximalen) Schutzbedarfs                                              | LF4    |
| **Zero-Trust-Design**                    | Sicherheitsarchitektur/-richtlinien für strikt kontrollierte Zugriffe (z. B. NGFW, SDN/SDDC)               | LF9    |
| **Shift-Left (DevOps)**                  | Frühe Einbindung von Sicherheitstests & Compliance in den Entwicklungsprozess                              | LF9    |

---

## 🎯 Ergebnis

* **Richtschnur für Entwickler:** über **Leitlinie** und **Bausteine** (CON u. a.) mit klaren Zielen/Regeln. *(LF4)*
* **Objektive Systembewertung:** über **Strukturanalyse** + **Schutzbedarfsfeststellung** mit **C-I-A** und **BSI-Kategorien**. *(LF4)*
* **Unterstützung bei Produktauswahl (Security by Design):** Ableitung passender **Maßnahmen/Produkte** aus BSI-Bausteinen; **Zero-Trust** und **Shift-Left** verankern Sicherheit **früh** und **durchgängig**. *(LF4, LF9)*

---


