# 🔐 Zugriffskontrolle im Netzwerk (RADIUS, Kerberos …) <span style="background:#e0f0ff;">LF3, LF9</span>

**Zugriffskontrolle** regelt, **wer** sich im **Netz** anmeldet (**Authentifizierung**), **welche Rechte** jemand erhält (**Autorisierung**) und wie **Nutzung** nachvollzogen wird (**Accounting**). In den Unterlagen werden dafür **Active Directory (AD)** sowie **RADIUS** genannt und im Sicherheitskontext **MFA/SSO/Zero-Trust** verankert. (LF3, LF9)

---

## 🧠 Grundlagen: Identitäten & Berechtigungen

**Netzwerkbenutzer** werden auf Servern eingerichtet und melden sich **gegen einen Anmeldedienst** am Netzwerk an; dort werden **Berechtigungen** für Netzwerkressourcen vergeben. Bei **Windows-Netzen** ist dies das **Active Directory (AD)**; **ein anderes System ist RADIUS**. (LF3) 

**BSI-Bezug & Organisationssicht:** Die Unterlagen ordnen Zugriffskontrolle u. a. in **ORP.4 Identitäts- & Berechtigungsmanagement**, **APP.2.2 Active Directory**, **SYS.1.1.A2 Benutzerauthentisierung** und weitere Bausteine ein. (LF9) 

---

## 📡 RADIUS – De-facto-Standard für zentrale Netz-Authentifizierung

**RADIUS** = *Remote Authentication Dial-In User Service*. **Client-Server-Protokoll** für **A**uthentifizierung, **A**utorisierung und **A**ccounting (**AAA**). **Einsatz**: zentrale Anmeldung bei **Modem/ISDN**, **VPN**, **WLAN (IEEE 802.1X)** und **DSL**. (LF3) 

**AAA-Aufgaben am RADIUS-Server**:
• **Authentifizierung** – Prüfen von Benutzername/Kennwort. (LF3) 
• **Autorisierung** – Zuweisen von Rechten auf Ressourcen (Daten, Drucker …). (LF3) 
• **Accounting** – **Nutzungsabrechnung/Protokollierung** nach Nutzung. (LF3) 

**Datenquellen & Föderation:** RADIUS kann **eigene Konfigurationsdateien/DBs** nutzen oder Anfragen an **andere RADIUS-Server** weiterreichen. Beispiel: **eduroam** – Verbund europäischer Hochschulen; Anmeldung am WLAN **hochschulübergreifend** möglich, inkl. Zugriff auf **eigene Dateien** an der Heimathochschule. (LF3) 

---

## 📶 Zugriff im Funknetz: WLAN-Absicherung & 802.1X-Kontext

**WLAN-Planung**: Access Points sind **sicherheitskritische Komponenten**; zu berücksichtigen sind **Gastnetze**, **Cloud-Management**, **Mesh** und der **Sicherheitsstandard**. (LF9) 
**Aktueller Standard**: **WPA3** (mit **Perfect Forward Secrecy**); **WPA2/WPA/WEP** sind (teils) **veraltet**, **WPS** erleichtert die Aufnahme neuer Geräte. (LF9) 

> **Einordnung 802.1X:** In den Unterlagen wird **WLAN-Anmeldung (IEEE 802.1X)** explizit im **RADIUS-Einsatzfeld** verortet – d. h. **Enterprise-WLANs** authentifizieren Benutzer **zentral über RADIUS**. (LF3) 

---

## 🛡️ Endpoint- & IAM-Aspekte der Zugriffskontrolle

**MFA/SSO & IAM:** Gefordert werden **Multi-Faktor-Authentifizierung**, **Single-Sign-On** und **Access-Management (IAM)**, ggf. mit **biometrischen Merkmalen, Token oder Smartcards** als Teil einer **Zero-Trust-Strategie**. (LF9)

**BSI-Leitplanken:** Für Netze/Kommunikation sind u. a. **NET.1 (Architektur/Management)**, **NET.2 (WLAN)**, **NET.3 (Router/Switch/Firewall/VPN)** sowie **ISMS/Patch/Protokollierung** zu beachten. (LF9) 

---

## 🧪 Praxisbeispiel: Föderierte Anmeldung mit RADIUS (**eduroam**)

**eduroam** bündelt **RADIUS-Server** zahlreicher Hochschulen. Ergebnis: **Anmeldung am WLAN** auch **außerhalb** der Heimathochschule; **Zugang zu eigenen Dateiserver-Daten** bleibt erhalten. (LF3) 

---

## ⚠️ Kerberos (Transparenzhinweis)

Die bereitgestellten PDFs **erläutern Kerberos nicht**. Thematisch angrenzend sind **Active Directory**, **Benutzerauthentisierung**, **MFA/SSO** und **Zero-Trust**, die in den Unterlagen ausdrücklich adressiert werden. (LF3, LF9)

---

## 📋 Begriffstabelle

| **Begriff**               | **Definition / Rolle**                                                                                                        | **Quelle** |
| ------------------------- | ----------------------------------------------------------------------------------------------------------------------------- | ---------- |
| **RADIUS**                | Client-Server-Protokoll für **AAA**; zentral für **Modem/ISDN, VPN, WLAN (802.1X), DSL**.                                     | LF3        |
| **AAA**                   | **Authentifizierung** (Identität prüfen), **Autorisierung** (Ressourcenrechte), **Accounting** (Nachvollziehbarkeit).         | LF3        |
| **IEEE 802.1X**           | In den Unterlagen als **WLAN-Anmeldeverfahren** im **RADIUS-Kontext** genannt.                                                | LF3        |
| **Active Directory (AD)** | **Verzeichnisdienst** & **Anmeldedienst** in Windows-Netzen; Basis der **Benutzerverwaltung**.                                | LF3, LF9   |
| **MFA/SSO/IAM**           | **Mehrfaktor-Anmeldung**, **Einmal-Anmeldung** und **Zugriffsmanagement** als zentrale Maßnahmen.                             | LF9        |
| **Zero-Trust**            | **Ganzheitliche Strategie**: strikte Identitätsprüfung & Richtlinien; im Material als Ansatz für Authentifizierung empfohlen. | LF9        |
| **WPA3**                  | **Standard-WLAN-Verschlüsselung** (mit **PFS**); **WPA2/WPA/WEP** veraltet.                                                   | LF9        |
| **LDAP (Port 636)**       | **Verzeichniszugriff** (LDAPS) – relevant im AD-Umfeld für Benutzer-/Rechteabfragen.                                          | LF3        |

---

## 🧭 Prozessschritte für Zugriffskontrolle (aus den Unterlagen)

1. **Identitäten & Policy festlegen:** **IAM/AD** definieren (Rollen/Rechte), **MFA/SSO** vorsehen; **ORP.4/APP.2.2/SYS.1.1.A2** berücksichtigen. (LF9) 
2. **Netzseitige Anmeldung zentralisieren:** **RADIUS** für **802.1X-WLAN/VPN** einplanen; ggf. **föderierte** Szenarien (z. B. **eduroam**). (LF3) 
3. **WLAN absichern:** **WPA3** (parallel **WPA2** für Altgeräte), **Mesh/Gastnetz** nach Bedarf; **Cloud-Management** optional. (LF9)
4. **BSI-Bausteine anwenden:** **NET.1–3**, **ISMS**, **Patch-/Änderungsmanagement**, **Protokollierung**; **Kontrollbereiche** (z. B. **Benutzer-/Zugriffs-/Übertragungskontrolle**) adressieren. (LF9) 

---

## 🧠 Merkkasten (kompakt)

* **RADIUS** = **AAA** für **VPN/802.1X-WLAN/DSL**; zentralisiert Anmeldung & Rechte. (LF3) 
* **AD/IAM** regelt Identitäten & Rollen im Unternehmen; **MFA/SSO/Zero-Trust** erhöhen Sicherheit. (LF9) 
* **WPA3** als Standard-Verschlüsselung im WLAN; **WPA2/WPA/WEP** (teils) veraltet. (LF9) 
* **Kerberos** wird in den PDFs **nicht** erläutert (nur AD/SSO/IAM thematisiert). (LF3, LF9)

---


