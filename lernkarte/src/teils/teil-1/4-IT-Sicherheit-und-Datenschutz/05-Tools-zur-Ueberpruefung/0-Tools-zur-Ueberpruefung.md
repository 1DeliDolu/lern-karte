# 🛡️ Tools zur Überprüfung von IT-Sicherheitsmaßnahmen (LF4, LF9)

Die **Überprüfung von IT-Sicherheitsmaßnahmen** wird im **BSI-IT-Grundschutz** in der **Schicht DER** verortet: Sie bündelt Bausteine zur **Überprüfung der umgesetzten Sicherheitsmaßnahmen**, zur **Detektion von Sicherheitsvorfällen** sowie zur **Reaktion** (z. B. **Security Incident Management**, **IT-Forensik**). (LF4) 
Als rechtlicher Rahmen fordert u. a. **Art. 32 DSGVO** ein „**Verfahren zur regelmäßigen Überprüfung, Bewertung und Evaluierung der Wirksamkeit**“ der Maßnahmen. (LF4) 

---

## 🧰 Werkzeugkasten (Überblick)

**Identity & Access Management (IAM)**
Der IT-Grundschutz nennt ein **geeignetes Identitäts- und Berechtigungsmanagement** als technische-organisatorische Maßnahme (TOM). (LF4) 
Konkretisiert wird das u. a. durch **Passwortrichtlinien**, **MFA/ZFA** und **Single Sign-on (SSO)**; Ziel ist die Härtung der Anmeldung und die Minimierung von **Identitätsdiebstahl**. (LF4, LF9) turn2file8

**Device/Endpoint Security (Geräte-Sicherheitscheck)**
Im Material als **Endpoint-/Enduser-Security** ausgeführt: **Endpoint-Protection-Suites**, **sichere Authentifizierung**, **VPN/Verschlüsselung** sowie **Sensibilisierung gegen Social Engineering**. Beispielhaft ist die **Dashboard-/Report-Optik** eines Herstellers (z. B. Sophos Central) gezeigt – mit **Scans**, **Risky Apps**, **Intrusion-Meldungen** – als Indikator für **Überwachung und Prüfung der Endgeräte**. (LF9) 

**Schwachstellenanalyse / Vulnerability-Management**
Genannt sind **Security-/Vulnerability-Scanner** (z. B. **OpenVAS**), die Systeme auf **bekannte Sicherheitslücken** prüfen; **Vulnerability-Management** umfasst **proaktive Asset-Erfassung**, **kontinuierliches Monitoring**, **Eindämmung** und **Behebung**. (LF9) 

**Erkennung & Prävention (Monitoring/Detection)**
• **IDS/IPS**: erkennen bzw. **blockieren** Einbruchsversuche anhand von Kommunikationsmustern. (LF9) 
• **DNS-Filter** (z. B. Pi-Hole/AdGuard): zentrale **Filterung** (Blacklists), optional **DoT/DoH/DoQ** zur **verschlüsselten Weiterleitung** von DNS-Anfragen. (LF9) 
• **Zero-Trust-Prinzip**: **strenge Zugriffskontrollen** und **Segmentierung** bis zur Mikro-Ebene als tragende Strategie. (LF9) 

**Hinweis zu Penetrationstests**
Der Begriff **„Penetrationstest“** wird **nicht** explizit als eigenständiges Verfahren beschrieben. Es findet sich jedoch eine Grafik **„Angriffsvektoren auf die Netze mit PT-Vorgehen“**, die typische Angriffswege skizziert – ein detailliertes **Test-Vorgehen** wird im Material **nicht** ausgeführt. (LF9) 

---

## ⚙️ Methoden & Beispiel-Workflows

### 1) Identity & Access Management (IAM)

**Ziel:** Kontrollierter, nachweisbarer Zugriff nach dem **Need-to-Know-Prinzip**. (LF4, LF9) turn2file8
**Bausteine:** **Passwortrichtlinien**, **MFA/ZFA**, **SSO**, **Berechtigungsmanagement (ORP.4)**, **Sensibilisierung (ORP.3)**. (LF4) turn1file12
**Wirksamkeitsprüfung:** Policy-Konformität (z. B. MFA-Quote), Rechte-Rezertifizierungen, Anomalien in Anmeldeereignissen. (LF4, Art. 32 DSGVO) 

### 2) Device/Endpoint-Security (Geräte-Check)

**Ziel:** **Härtung** und **kontinuierliche Überwachung** von Clients/Devices. (LF9) 
**Bausteine:** **Endpoint-Protection-Suite**, **MFA/SSO am Gerät**, **VPN**, **Schulung**. (LF9) 
**Praxis-Indikatoren:** **Control-Center-Dashboards** mit Scan-Zahlen, Warnungen, Intrusion-Hinweisen. (LF9) 

### 3) Schwachstellenanalyse & VM

**Ziel:** **Lücken früh erkennen**, **bewerten**, **schließen**, **nachprüfen**. (LF9) 
**Bausteine:** **Vulnerability-Scanner (OpenVAS)**, **VM-Prozess** (Asset-Inventar, Scan-Zyklen, Remediation, Re-Test). (LF9) 

### 4) Laufende Detektion/Prävention im Netz

**Ziel:** **Angriffe erkennen** und **unterbinden**. (LF9) 
**Bausteine:** **IDS/IPS**, **DNS-Filter**, **Zero-Trust-Segmentierung**. (LF9) turn3file2turn1file7

---

## 🧪 Beispiel-Kommandos (aus dem Material)

### Netzwerk-/Geräte-Check (Linux)

```bash
# Übersicht aller Netzwerkadapter (nmcli)
nmcli device

# Alle Verbindungen anzeigen
nmcli connection

# Alle TCP-Verbindungen listen (netstat) – Ausgabe wird an grep gefiltert
netstat -an | grep tcp
```

(LF9) 

> Diese Befehle unterstützen **Sichtprüfungen** und **Troubleshooting** bei Device- und Netz-Checks (z. B. offene Verbindungen, Adapter-Status). (LF9) 

---

## 🧭 Ziele der Überprüfung

* **Schutzziele** **Vertraulichkeit**, **Integrität**, **Verfügbarkeit** dauerhaft sicherstellen und nach Art. 32 DSGVO **regelmäßig evaluieren**. (LF4) 
* **Wirksamkeit** der TOM (z. B. IAM, Malware-Abwehr, Backup, Kryptographie) im **Sicherheitskonzept** belegen. (LF4) 

---

## 🧩 Praxisbeispiele & Szenarien

* **Zero-Trust** in Netzwerken: **Mikro-Segmentierung**, **NGFW** als Segmentierungs-Gateway, **Richtlinien nach Kipling-Methode** (Wer/Was/Wann/Wo/Warum/Wie), **Überwachung & Automatisierung**. (LF9) 
* **DNS-Filter** im Betrieb: Zentrale **Werbe/Tracker-Blockade**, **verschlüsselte DNS-Weiterleitung** (DoT/DoH/DoQ). (LF9) 
* **Endpoint-Überblick**: Dashboards mit **Scan-Zahlen**, **Risk-Indikatoren**, **Intrusion-Alerts** (Beleg für laufende **Überprüfung**). (LF9) 

---

## 📚 Begriffstabelle

| Begriff                             | Definition (aus dem Material)                                                                                     | Quelle                  |
| ----------------------------------- | ----------------------------------------------------------------------------------------------------------------- | ----------------------- |
| **DER-Schicht (IT-Grundschutz)**    | Bausteine für **Überprüfung** der Sicherheitsmaßnahmen, **Detektion** und **Reaktion** (Incident Mgmt, Forensik). | (LF4)                   |
| **IAM / Berechtigungsmanagement**   | **Identitäts- und Berechtigungsmanagement** als TOM im Sicherheitskonzept.                                        | (LF4)                   |
| **MFA/SSO**                         | **Mehrfaktor-Authentifizierung** und **Single Sign-on** zur Erhöhung der Anmeldesicherheit.                       | (LF4, LF9) turn2file8 |
| **Endpoint-/Enduser-Security**      | **Antiviren/Endpoint-Security-Apps**, **VPN**, **Sensibilisierung**; Monitoring via **Control-Center**.           | (LF9)                   |
| **Vulnerability-Scanner (OpenVAS)** | Prüfen Zielsysteme auf **bekannte Sicherheitslücken**; Teil eines **Vulnerability-Managements**.                  | (LF9)                   |
| **IDS/IPS**                         | **Erkennen** bzw. **Blockieren** von Einbruchsversuchen anhand von Mustern.                                       | (LF9)                   |
| **DNS-Filter**                      | Zentrale **Filterung** von Werbung/Tracking; **verschlüsselte** DNS-Weiterleitung (DoT/DoH/DoQ).                  | (LF9)                   |
| **Zero-Trust**                      | **Segmentierung** + **strenge Zugriffskontrollen**; Richtlinien nach **Kipling-Methode**.                         | (LF9)                   |

---

## 🛠️ Prozessschritte (aus den Quellen abgeleitet)

1. **Schutzbedarf & Policies prüfen** (IT-Grundschutz-Bausteine, TOM festlegen/abgleichen). (LF4) 
2. **Zugänge härten** (IAM, Passwortregeln, MFA/SSO) und **schulen** (ORP.3). (LF4, LF9) turn1file12turn2file8
3. **Systematisch scannen** (OpenVAS/Vulnerability-Scanner), **finden-beheben-nachprüfen**. (LF9) 
4. **Detektieren & blockieren** (IDS/IPS, DNS-Filter), **Zero-Trust-Richtlinien** überwachen. (LF9) turn3file2turn1file7
5. **Wirksamkeit evaluieren** (Dashboards/Reports, Kennzahlen) – **regelmäßige Überprüfung** gem. Art. 32 DSGVO. (LF9, LF4) turn1file0

---

### 📌 Wichtige Klarstellung zum „Penetrationstest“

Das Material liefert **keine** eigenständige Methode/Beschreibung zu **Penetrationstests**; es zeigt lediglich **Angriffsvektoren mit „PT-Vorgehen“** als Kontextabbildung. Für Details zu Pentests enthält der vorliegende Fundus **keine** weiteren Schritte oder Tools. (LF9) 

---

