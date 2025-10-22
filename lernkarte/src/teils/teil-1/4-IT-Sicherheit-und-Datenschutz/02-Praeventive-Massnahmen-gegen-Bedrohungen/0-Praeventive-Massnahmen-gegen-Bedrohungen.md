# 🛡️ Präventive IT-Sicherheitsmaßnahmen planen & umsetzen (Datendiebstahl, Ransomware, Phishing) <span style="background:#e0f0ff;">LF4, LF9</span>

Unternehmen sichern **Vertraulichkeit, Integrität und Verfügbarkeit** durch ein **Sicherheitskonzept nach IT-Grundschutz** mit **technisch-organisatorischen Maßnahmen (TOM)**, basierend auf Schutzbedarfs- und Risikoanalysen. Dazu gehören u. a. **Zutritts-/Zugang-/Zugriffskontrollen, Kryptografie, Datensicherung, Malware-Abwehr** sowie **Netzwerksicherheitsmaßnahmen** (Firewall/DMZ/IDS/IPS). (LF4)  (LF9) 

---

## 🔁 Sicherheitsprozess & Schutzziele

1. **Schutzbedarfsfeststellung & Risikoanalyse**: Festlegen der Schutzbedarfskategorien (normal/hoch/sehr hoch) je Objekt. (LF9) 
2. **Sicherheitskonzept mit TOM**: TOM explizit festlegen (z. B. Art. 32 DSGVO fordert u. a. **Pseudonymisierung/Verschlüsselung**, **Wiederherstellbarkeit**). (LF4) 
3. **Umsetzung & Betrieb**: Netzarchitektur, Härtung, Backup, Berechtigungen, Monitoring. (LF9) 
4. **Detektion & Reaktion (DER-Schicht)**: Vorfallsbehandlung, IT-Forensik-Vorsorge, Wirksamkeitsprüfung. (LF4) 

---

## 🧰 Maßnahmenbaukasten (TOM) – Auszug

* **Zutrittskontrolle** (Gebäude/Räume), **Zugangskontrolle** (Systeme), **Zugriffskontrolle** (Daten), **Transport-/Übertragungskontrolle** (z. B. VPN, Verschlüsselung), **Eingabekontrolle** (Logs), **Auftrags-/Trennungskontrolle**, **Verfügbarkeitskontrolle** (Backup, USV, Patch-Management), **Schulung/Verpflichtung** der Beschäftigten. (LF4)  (LF4) 
* **Netzwerkschutz**: **Firewall/Webfilter/Portsecurity**, **IDS/IPS**, **Berechtigungs- & Rollenkonzepte**, **Verschlüsselung von Datenträgern**, **Log-Management & Monitoring**, **Redundanz** (RAID/USV/zweiter Standort). (LF9) 

---

## 🕵️‍♂️ Szenario 1: **Datendiebstahl** – präventiv verhindern

**Typische Angriffswege**: Netzwerk, E-Mail/Web, Wechseldatenträger, Social Engineering. (LF4) 

**Maßnahmen (Plan → Umsetzung):**

* **Netzarchitektur & Segmentierung**
  **Firewall/DMZ** an der Perimeter-Grenze, **IDS/IPS** zur Erkennung/Abwehr, **Portsecurity** an Switches; **VPN** für Transportkontrolle. (LF9)  (LF9) 
* **Zugriff minimieren (Least Privilege)**
  **Identitäts-/Berechtigungsmanagement**, **Benutzer-/Rollenverwaltung**, **MFA** (Mehrfaktor) für Anmeldungen; **Passwortregeln** verbindlich festlegen. (LF4)  (LF4) 
* **Daten schützen**
  **Verschlüsselung** ruhender Daten (z. B. Datenträger, Dateien) und **Übertragung** (Domain-/Transportverschlüsselung), **Pseudonymisierung** wo möglich. (LF4)  (LF4) 
* **Endpunkt absichern**
  **Endpoint-Security**, **Blacklist/Whitelist** (Mail/Web/Apps), **USB-Ports sperren**, **automatische Systemsperren**. (LF4)  (LF4) 
* **Monitoring/Protokolle**
  **Log-Management**, **SNMP/Netzwerkmonitoring**, **Protokollierung von Zugriffen**; regelmäßige **Wirksamkeitsprüfung/Audit**. (LF9)  (LF4) 

---

## 🧨 Szenario 2: **Digitale Erpressung (Ransomware)** – vorbeugen & wiederherstellen

**Definition**: Ransomware beschränkt/verhindert Zugriff (oft Verschlüsselung) und fordert Lösegeld → Angriff auf **Verfügbarkeit**. (LF4)  (LF4) 

**Maßnahmen (Plan → Umsetzung):**

* **Härtung & Patch-Management**
  Regelmäßige Updates/Patches, **zertifizierte Standardsoftware**, saubere **Installations-/Deinstallationsprozesse**. (LF4) 
* **Malware-Schutz am Perimeter & Host**
  **Next-Generation-Firewalls (NGFW)** identifizieren und blockieren Malware bereits vor Eindringen; **Virenschutz** auf Endpunkten. (LF4)  (LF4) 
* **Backups nach 3-2-1-Regel**
  **3 Kopien**, **2 Medien**, **1 Kopie extern/offsite**; **Wiederherstellbarkeit** regelmäßig testen (Notfallplan). (LF9)  (LF4) 
* **Berechtigungen & Segmentierung**
  Minimale Rechte, **Netz-/Storage-Segmentierung**, **Trennungskontrolle**; reduziert Laterale Bewegung/Verschlüsselungsreichweite. (LF4) 
* **Vorbereitung auf den Ernstfall (DER-Schicht)**
  **Incident-Management**, **IT-Forensik-Vorsorge**, klare Reaktionswege. (LF4) 

---

## 🎣 Szenario 3: **Identitätsdiebstahl (Phishing/Spear-Phishing)** – Angriffsfläche verkleinern

**Lagebild**: Viele Angriffe starten über E-Mail-Anhänge/Links; technische Maßnahmen + **Sensibilisierung** sind Erfolgsfaktoren. (LF4) 

**Maßnahmen (Plan → Umsetzung):**

* **Identitäten absichern**
  **MFA/ZFA** + ggf. **SSO** (sicher konfiguriert) erschweren Account-Übernahmen; **Passwortqualität** verbindlich regeln. (LF4) 
* **Mail/Web absichern**
  **E-Mail-Security**, **Spam-Filter**, **Blacklisting/Whitelisting**; Tools, die Phishing erkennen (z. B. Hinweis auf Add-on im Mail-Client), **QR-Code-Scanner**; **öffentliche WLANs** nur mit starker Verschlüsselung nutzen. (LF4) 
* **Verhalten & Prozesse**
  Absender/Links prüfen; Hoaxes/Kettenbriefe **löschen**; **Schulungen/Sensibilisierungskampagnen** planen und wiederholen. (LF4)  (LF4) 
* **Transportsicherheit**
  **Domain-/Transportverschlüsselung** für E-Mail-Verkehr zwischen Organisationen. (LF4) 

---

## 🧱 Umsetzung im Netzwerk (aus LF9)

* **Planung nach BSI-Modell**: Netzplan mit aktiven/passiven Komponenten, internen/externen Netzen; TOM für Vernetzung festlegen. (LF9) 
* **Kontrollen & Technik**: **Firewall/Webfilter**, **IDS/IPS**, **VPN**, **VLAN**, **Portsecurity**, **User-/Rollenkonzepte**, **Log-Management**, **Monitoring (SNMP)**. (LF9) 
* **Verfügbarkeit**: **USV**, **RAID**, **Redundanzen** (räumlich/funktional), **Backups**. (LF9) 

---

## 🧪 Härtung von Systemen & Software (aus LF4)

* **Standardmaßnahmen**: Integrität sicherstellen, sichere Installation/Konfiguration, Auswahl **zertifizierter Standardsoftware**, Versions-/Lizenzverwaltung, sichere Deinstallation. (LF4) 
* **Kryptografie**: Nutzung **sicherer Algorithmen nach BSI TR-02102**, **Datei/Datenträgerverschlüsselung** (Beispiel-Tool genannt), **E-Mail-Domainverschlüsselung**. (LF4) 

---

## 🧭 Praxis-Fahrplan (Plan → Do → Check → Act)

1. **Plan**: Schutzbedarf & Risiken erheben; Ziele/Soll ableiten; TOM auswählen (z. B. MFA, Verschlüsselung, Backup, NGFW, IDS/IPS). (LF9) 
2. **Do**: Netz/Endpunkte härten; Berechtigungen umsetzen; Backup nach **3-2-1**; Monitoring/Logging aktivieren; Schulung starten. (LF9) 
3. **Check**: Logs/Audits prüfen, Wirksamkeit evaluieren; Vorfälle üben (Tabletop). (LF4) 
4. **Act**: Maßnahmen/TOM anpassen, Schwachstellen schließen, Redundanzen/Backups optimieren. (LF4) 

---

## 📚 Beispiele & Vorlagen aus den Lernfeldern

* **Lastenheft-Ausschnitt** mit Sicherheitsanforderung „Firewall: Outbound erlauben, Inbound verhindern“ (Kleinstunternehmen) – Beispiel in LF9. (LF9) 
* **BSI-Netzplan (RECPLAST)** als Referenz für Strukturierung/Segmentierung. (LF9) 

---

## 📊 Begriffstabelle

| **Begriff**                   | **Definition / Kernaussage**                                                                                       | **Quelle** |
| ----------------------------- | ------------------------------------------------------------------------------------------------------------------ | ---------- |
| **Ransomware**                | Schadsoftware, die Zugriff auf Daten/Systeme verhindert (Erpressung); Angriff auf **Verfügbarkeit**.               | LF4        |
| **Phishing / Spear-Phishing** | E-Mails/Links zum Abfischen von Zugangsdaten; häufigster Startvektor → Technik + **Sensibilisierung** kombinieren. | LF4        |
| **3-2-1-Backup**              | 3 Kopien, 2 Medientypen, 1 Offsite-Kopie; Grundlage der **Wiederherstellbarkeit**.                                 | LF9        |
| **MFA/ZFA**                   | Mehrfaktor-Anmeldung gegen **Identitätsdiebstahl**; in Richtlinien verankern.                                      | LF4        |
| **NGFW / IDS/IPS**            | Perimeter- & Netz-Erkennung/Abwehr von Malware/Angriffen, Blockade vor Eindringen.                                 | LF4, LF9   |
| **TOM**                       | DSGVO/BSI-konforme Maßnahmenkataloge (z. B. Zugang/Zugriff/Transportkontrolle, Backup, Logging).                   | LF4, LF9   |
| **Verschlüsselung**           | Datei/Datenträger-, Domain-/Transportverschlüsselung; nur sichere Algorithmen (BSI TR-02102).                      | LF4        |

---

## ✅ Kurz-Checklisten pro Bedrohung

**Datendiebstahl**

* [ ] Rollen/Berechtigungen, **MFA** aktiv (LF4) 
* [ ] **Verschlüsselung** ruhend/transport (VPN/Domain) (LF4) 
* [ ] **Firewall/Webfilter/IDS/IPS**, **Portsecurity** (LF9) 
* [ ] **Logging/Monitoring** aktiv, Prüfungen geplant (LF9) 

**Ransomware**

* [ ] **3-2-1-Backups**, Restore-Tests/Notfallplan (LF9) 
* [ ] **NGFW**, Endpoint-AV, Patches aktuell (LF4) 
* [ ] **Segmentierung/Trennungskontrolle** (LF4) 

**Phishing/Identitätsdiebstahl**

* [ ] **MFA** + Passwortregeln (LF4) 
* [ ] **Spam-Filter**, **Black/Whitelist**, Mail-Add-ons (LF4) 
* [ ] **Schulung/Sensibilisierung** (Kampagnen) (LF4) 

---


