# 🛡️ Wirksamkeit & Effizienz von TOM prüfen: Zutritt, Zugang, Zugriff, Log-Management & Compliance <span style="background:#e0f0ff;">LF4, LF9, LF8</span>

**Technisch-organisatorische Maßnahmen (TOM)** sind im **Sicherheitskonzept** nach BSI/IT-Grundschutz sowie **BDSG/DSGVO** festzulegen und umzusetzen; sie umfassen u. a. physische Absicherung, Identitäts-/Berechtigungsmanagement, Kryptografie, Datensicherung sowie Schadsoftware-Abwehr. *(LF4)* 
Das **BDSG** fordert, TOM im Sicherheitskonzept **explizit** festzulegen und deren Einsatz sicherzustellen. *(LF9)* 

Im Zusammenhang mit Netzwerken nennt die Ausbildungsvorlage u. a. diese TOM-Schwerpunkte (Auszug): **Zutrittskontrolle** (z. B. Alarmanlage, Videoüberwachung, Besucherausweise), **Zugangskontrolle** (z. B. Bildschirmschoner mit Passwortschutz, biometrische Verfahren, Magnet-/Chipkarte), **Zugriffskontrolle** (z. B. Verschlüsselung, Datenträger-Löschung, User-/Rollenkonzept), **Log Management** und **Compliance Reports**. *(LF9)* 

## 🧭 Prüfprozess für Wirksamkeit & Effizienz

1. **Sicherheitsleitlinie → Sicherheitskonzept → Strukturanalyse → Schutzbedarfsfeststellung**: Vorgehen gemäß BSI-Prozess; darauf aufbauend werden geeignete TOM festgelegt. *(LF9)* 
2. **Überprüfung der Wirksamkeit**: regelmäßig **Audit, Prüfung, Evaluierung, Folgeabschätzung, Schwachstellenidentifikation**, ggf. **Zertifizierung nach ISO 27001**. *(LF4)* 
3. **Protokollierung/Monitoring**: Protokolldateien und Netzwerk-Monitoring (Ping, Traceroute, Wireshark, SNMP) als Grundlage für Nachweis, Analyse und Optimierung. *(LF9)* 
4. **Risikobasierte Einordnung**: Basis-/Standard-/erhöhter Schutzbedarf; zunächst Basisanforderungen mit großem Nutzen/geringem Aufwand umsetzen. *(LF9)* 

---

## 🚪 1. Zutrittskontrolle (Gebäude/Räume)

**Ziel & Maßnahmen (Stichworte):** Besuchsregelung, **verschließbare Gebäude/Räume**, **Richtlinien für Zugangsberechtigung**, **Überwachungseinrichtungen** (z. B. **Einbruchmeldeanlage**, **Videoüberwachung**), geregelte Wartungsarbeiten, Schutz bei Anwesenheit, Home/Telearbeit im Sicherheitskonzept. *(LF4)* 
**Ausbildungsvorlage (Netzwerk-TOM):** **Alarmanlage, Videoüberwachung, Besucherausweise**. *(LF9)* 

**Wirksamkeits-/Effizienzprüfung (Auswahl):**
– **Nachweis** schriftlicher Zutritts-Richtlinien & Besuchsprozesse (Ausweise/Protokolle). *(LF4)* 
– **Kontrolle** aktiver Überwachungseinrichtungen (z. B. Betriebsstatus Einbruchmeldeanlage/Kameras). *(LF4, LF9)*

---

## 🔐 2. Zugangskontrolle (Systeme/Peripherie)

**Ziel & Maßnahmen (Stichworte):** **Automatische Systemsperren** (z. B. Bildschirmschoner), **Firewall**, **sichere Passwörter**, **Zwei-/Mehrfaktor-Authentifizierung (MFA)**, **Sperrung von Geräteanschlüssen** (USB/Laufwerke), **Virenschutz**. *(LF4)* 
**Erweiterung Endpoints:** **MFA/SSO**, **biometrische Merkmale**, **Token/Smart Cards** als Teil eines Access-Managements. *(LF9, LF4)*

**Wirksamkeits-/Effizienzprüfung (Auswahl):**
– **Prüfen**, ob **Systemsperren** und Passwortqualität **organisatorisch geregelt** und technisch durchgesetzt werden. *(LF4)*
– **Nachweis** von MFA/Smart-Card/biometrischer Nutzung an relevanten Zugängen. *(LF9)* 
– **Virenschutz/Firewall** richtlinienkonform aktiv (z. B. Regelwerke, Status). *(LF4, LF9)*

---

## 🔏 3. Zugriffskontrolle (Berechtigungen/Daten)

**Ziel & Maßnahmen (Stichworte):** **Berechtigungskonzepte**, **Datenträgerverwaltung**, **Pseudonymisierung**, **Verschlüsselung**, **Entsorgung/Löschung von Datenträgern**, **gesicherte Schnittstellen (USB/Netz)**, **Protokollierung von Zugriffen**. *(LF4)* 
**Rechte-/Rollenkonzepte und Rollentrennung** sind explizit als Baustein/Anforderung benannt. *(LF9)* 

**Wirksamkeits-/Effizienzprüfung (Auswahl):**
– **Nachweis** eines **Rechte-/Rollenkonzepts** inkl. restriktiver Rechtevergabe/Rollentrennung. *(LF9)* 
– **Kontrolle** der **Verschlüsselung** und Vorgaben zu **Datenträger-Löschung/Entsorgung** (z. B. zertifizierte Träger, Lösch-Prozesse). *(LF4)*
– **Prüfung** gesicherter Schnittstellen und Zugriff-Protokollierung. *(LF4)* 

---

## 📜 4. Log Management (Protokollierung)

**Grundlagen/Beispiele:** Protokollierung sicherheitsrelevanter Ereignisse wie **fehlerhafte Anmeldeversuche**, **Anwendungsfehler (Exceptions)**, **Fehler bei Datenvalidierung**, **Änderungen bei Berechtigungen**, **Administratoraktivitäten**, **Schreibzugriffe auf Daten**; Umsetzung durch **Log-Dateien/Protokolle** unter Beachtung des Datenschutzes. *(LF8)* 
**Netzwerk-Monitoring & Protokolle** als Teil der Dokumentation/Analyse: **Ping, Traceroute, Analyse-Tools (z. B. Wireshark), Netzwerk-Monitoring (z. B. SNMP)**. *(LF9)* 

**Wirksamkeits-/Effizienzprüfung (Auswahl):**
– **Vorhandensein** und **Vollständigkeit** definierter **Log-Ereignisse** (siehe Liste oben). *(LF8)* 
– **Abgleich** mit BSI-Baustein **OPS.1.1.5 Protokollierung** (organisatorische/technische Verankerung). *(LF9)* 
– **Auswertungskapazität** (Monitoring-Übersichten, Alarmierung, Nachweise). *(LF9)* 

---

## ✅ 5. Compliance Reports

**Einordnung:** **Compliance Reports** sind als zu berücksichtigender TOM-Aspekt in der Stichwortsammlung zur Netzwerkbereitstellung genannt (zusammen mit **Log Management**). *(LF9)* 

**Wirksamkeits-/Effizienzprüfung (Auswahl):**
– **Existenz** regelmäßiger **Berichte/Nachweise** zur Einhaltung definierter Sicherheits-/Datenschutzanforderungen (z. B. gegenüber Audits). *(LF4, LF9)*
– **Verknüpfung** mit den Ergebnissen von **Audits/Prüfungen/Evaluierungen** (Wirksamkeitsprüfung). *(LF4)* 

---

## 🧪 Konkrete Prüfbeispiele (Ausschnitt)

### Beispiel-Checkliste „Zutritts-/Zugangskontrolle“

* **Zutrittskontrolle:** Liegen **Richtlinien** zur Zugangsberechtigung vor? **Alarmanlage/Videoüberwachung** in Betrieb? **Besucherausweise** dokumentiert? *(LF4, LF9)*
* **Zugangskontrolle:** **Bildschirmsperre** aktiv? **Passwortregeln** verbindlich? **MFA/Smart-Cards/biometrische Merkmale** im Einsatz? *(LF4, LF9)*

### Beispiel-Checkliste „Zugriffskontrolle/Datenträger“

* **Verschlüsselung** mobiler Datenträger vorgesehen (zertifizierte Träger)? **Lösch-/Entsorgungsprozesse** dokumentiert? **Schnittstellen** (USB/Netz) gesichert? *(LF4)*

### Beispiel-Checkliste „Log Management/Compliance“

* **Log-Ereignisse** gemäß Liste (z. B. fehlgeschlagene Logins, Rechteänderungen) protokolliert? **Monitoring** (SNMP/Tools) vorhanden? **Compliance-Report** regelmäßig erstellt? *(LF8, LF9)*

---

## 📚 Begriffstabelle

| Begriff                | Definition (aus den Vorlagen/Stichworten)                                                                                                          | Quelle     |
| ---------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------- | ---------- |
| **Zutrittskontrolle**  | Maßnahmen zur physischen Zugangssicherung (Richtlinien, verschließbare Räume, Überwachung; inkl. Alarmanlage, Videoüberwachung, Besucherausweise). | (LF4, LF9) |
| **Zugangskontrolle**   | Maßnahmen gegen unbefugten Systemzugang (Systemsperren, Firewall, Passwörter, MFA; biometrische Merkmale, Token/Smart-Cards).                      | (LF4, LF9) |
| **Zugriffskontrolle**  | Berechtigungskonzepte, Verschlüsselung, Datenträger-Löschung/Entsorgung, gesicherte Schnittstellen, Protokollierung von Zugriffen.                 | (LF4)      |
| **Log Management**     | Protokollierung sicherheitsrelevanter Ereignisse; Monitoring/Analyse via Protokolle und Netz-Monitoring.                                           | (LF8, LF9) |
| **Compliance Reports** | Berichte/Nachweise zur Einhaltung von Vorgaben (als TOM-Stichwort in der Netzwerk-Konzeption genannt).                                             | (LF9)      |

---

## 🧩 Ergänzende Hinweise aus den Lernfeldern

* **BSI-Bausteine & Kontrollbereiche (Auswahl):** **Protokollierung (OPS.1.1.5)**, **Benutzerauthentisierung**, **restriktive Rechtevergabe**, **Rollentrennung**, **Netzplanung/-sicherheit** – als Referenzen zur TOM-Ausgestaltung in Netzwerken. *(LF9)* 
* **Schutzbedarf & Risikoanalyse**: Kategorisierung der Schadens-/Schutzbedarfsstufen als Basis für TOM-Tiefe; Beispiel-Risikotabellen/-behandlung. *(LF4, LF9)*

---

## ⚙️ Prozessschritte (kompakt)

1. **Ist-Analyse & Schutzbedarfsfeststellung** (inkl. Netzplan, Systeme, Räume). *(LF9)* 
2. **TOM festlegen** (Zutritt/Zugang/Zugriff, Logging, Compliance). *(LF4, LF9)*
3. **Implementieren & dokumentieren** (Policies, Konfigurationen, Protokolle). *(LF9, LF8)*
4. **Wirksamkeit prüfen** (Audit/Evaluierung, Schwachstellenidentifikation, Zertifizierung). *(LF4)* 
5. **Monitoring & Reporting** (Log-Auswertung, **Compliance Reports**). *(LF8, LF9)*

---

## 🎯 Zielbild

Ein **nachweisbar wirksames** TOM-Set liegt vor, wenn

* die **Schutzbedarfsanalyse** TOM-Tiefe steuert, *(LF4, LF9)*
* **Zutritts-, Zugangs-, Zugriffsmaßnahmen** **dokumentiert** und **funktional** sind, *(LF4, LF9)*
* **Protokollierung/Monitoring** vollständig & datenschutzkonform erfolgt, *(LF8, LF9)*
* **Audits/Reports** die **Wirksamkeit** regelmäßig belegen. *(LF4)* 

---

## 📝 Praxisbeispiele (aus den Lernfeldern)

**Protokollierung sicherheitsrelevanter Ereignisse – Beispielereignisse:** *fehlerhafte Anmeldeversuche, Exceptions, Validierungsfehler, Rechte-/Rollen-Änderungen, Admin-Aktivitäten, Schreibzugriffe; Umsetzung als Log-Dateien – Datenschutz beachten.* *(LF8)* 

**Sichere mobile Datenträger – Maßnahmenauszug:** *Zertifizierte Träger, Verschlüsselung, Verlustmeldung, Regelung von Mitnahme/Versand, eindeutige Kennzeichnung, Virenprüfung.* *(LF4)*

---

> **Hinweis:** Alle Inhalte, Beispiele und Prüfhinweise sind **wortgetreu** aus den bereitgestellten Lernfeldern entnommen/zusammengestellt; sie bilden die Grundlage zur **Prüfung von Wirksamkeit und Effizienz** der TOM in den geforderten Bereichen. *(LF4, LF8, LF9)*
