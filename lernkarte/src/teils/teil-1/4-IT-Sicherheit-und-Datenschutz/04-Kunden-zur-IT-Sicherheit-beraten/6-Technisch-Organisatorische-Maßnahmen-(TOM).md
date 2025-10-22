# 🔒 Technisch-Organisatorische Maßnahmen (TOM)

**Technisch-organisatorische Maßnahmen (TOM)** sind im **Sicherheitskonzept** eines Unternehmens festzulegen und umzusetzen, um personenbezogene Daten und Informationswerte zu schützen (*BDSG/DSGVO, BSI-Grundschutz*). *(LF9, LF4)*
**Art. 32 DSGVO** fordert dazu ein dem Risiko angemessenes Schutzniveau (u. a. **Verschlüsselung**, **Verfügbarkeit**, **Belastbarkeit**, **Wiederherstellung**, **Wirksamkeitsprüfungen**). *(LF4)* 

---

## 🧭 Einordnung im Sicherheitsprozess

TOM werden **aus der Leitlinie** und dem **Sicherheitskonzept** abgeleitet und in einem geregelten **BSI-Sicherheitsprozess** verankert (**Leitlinie → Sicherheitskonzept → Strukturanalyse → Schutzbedarfsfeststellung**). *(LF4, LF9)*
Die **Leitung** verantwortet die Initiierung und Ressourcen; **ISB/DSB** erstellen und pflegen Richtlinien/ISMS. *(LF4)* 

---

## 🎯 Schutzziele & Grundprinzipien

TOM dienen der Sicherung der **Schutzziele** **Vertraulichkeit**, **Integrität**, **Verfügbarkeit** (u. a. nach IT-Grundschutz/DSGVO). *(LF4, LF9)*

---

## 🗂️ Die 14 TOM-Kontrollbereiche (BDSG/Unterlagen)

Nach den Unterlagen werden folgende **14 Kontrollbereiche** unterschieden: *(LF4, LF9)* 

1. **Zugangskontrolle** · 2. **Datenträgerkontrolle** · 3. **Speicherkontrolle** · 4. **Benutzerkontrolle** · 5. **Zugriffskontrolle** · 6. **Übertragungskontrolle** · 7. **Eingabekontrolle** · 8. **Transportkontrolle** · 9. **Wiederherstellbarkeit** · 10. **Zuverlässigkeit** · 11. **Datenintegrität** · 12. **Auftragskontrolle** · 13. **Verfügbarkeitskontrolle** · 14. **Trennbarkeit**.

### ✅ Beispiele aus den Unterlagen je Kontrollbereich

| TOM-Bereich                        | Zweck (kurz)                                          | Beispiele/Umsetzungen aus den PDFs                                                                                                                                                                               | Quelle     |
| ---------------------------------- | ----------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ---------- |
| **Zutritts-/Zugangskontrolle**     | Unbefugten **Zutritt/Zugang** zu Räumen/IT verhindern | **Zutrittskontrolle** (verschließbare Räume, Besucherregelung, Video, Home-Office-Regelungen), **Zugangskontrolle** (sichere Passwörter, **MFA**, automatische Sperren, passende **Firewall**, Portsperren/USB). | LF4        |
| **Zugriffskontrolle**              | Nur **Berechtigte** greifen auf Daten/Services zu     | **Rechtemodelle/Rollen**, **Verschlüsselung**, **Protokollierung**; bei Netzen **ACLs** an Switches.                                                                                                             | LF4, LF9   |
| **Übertragungskontrolle**          | Schutz bei **Transport/Übermittlung**                 | **TLS/HTTPS-Zertifikate** (Schloss/https), **VPN/IPsec**, **DNS-Absicherung** (**DoT/DoH/DoQ**), **SBC** verschlüsselt VoIP/SRTP.                                                                                | LF9, LF4   |
| **Eingabekontrolle**               | **Nachvollziehen**, wer Daten eingegeben/änderte      | **Protokollierung/Log-Daten**.                                                                                                                                                                                   | LF4        |
| **Transportkontrolle**             | Sicherer **Datentransport/Drittländer**               | **Richtlinien** und **Verschlüsselung** bei Datenträger-Transport, **VPN** bei Übertragung.                                                                                                                      | LF4        |
| **Wiederherstellbarkeit**          | **Backups/Restore**, Notfälle meistern                | **Backup-Konzepte**, **USV**, **Notfallpläne**; in der Praxis **Snapshots/Backups** in der Virtualisierung (z. B. Nextcloud-Container).                                                                          | LF4, LF9   |
| **Zuverlässigkeit**                | **Belastbarkeit**/Betriebssicherheit                  | **Patch-/Änderungsmanagement**, **Schutz vor Schadsoftware**; **Monitoring**/Web-UI in Virtualisierung.                                                                                                          | LF9        |
| **Datenintegrität**                | **Unverändertheit** sicherstellen                     | **Kryptographie** (Signaturen/PGP/S/MIME), **Hashing** (z. B. **SHA-256**).                                                                                                                                      | LF4, LF11a |
| **Auftragskontrolle**              | Verarbeitung nur **weises/gemäß Auftrag**             | **Verträge/Weisungen**, **Kontrollen**, **unabhängige Instanzen** (z. B. **Audits**).                                                                                                                            | LF4        |
| **Verfügbarkeitskontrolle**        | **Betriebsfähigkeit** sicherstellen                   | **USV**, **Brandschutz/Raumüberwachung**, **Patchen**, **Firewall/AV**, **VPN-Redundanz**.                                                                                                                       | LF4, LF9   |
| **Trennbarkeit**                   | **Daten/Verarbeitungen trennen**                      | **Funktionstrennung**, **VLAN/Segmentierung**, **logische/physische Trennung**.                                                                                                                                  | LF4, LF9   |
| **Datenträger-/Speicherkontrolle** | **Schutz** von Datenträgern/Speichern                 | **Verschlüsselung** (z. B. **VeraCrypt**), **Lösch-/Entsorgungsregeln**, **Speicherzugriffe protokollieren**.                                                                                                    | LF4        |
| **Benutzerkontrolle**              | **Identifizierung/Authentifizierung**                 | **IAM**, **MFA/SSO**, **Rollentrennung** (vgl. Bausteine **ORP.4**, **SYS.1.1.A4**).                                                                                                                             | LF9        |
| **Wirksamkeitsprüfung** (Audit)    | TOM **überprüfen/evaluieren**                         | **Audits, Schwachstellen-Checks, Zertifizierung (ISO 27001)**.                                                                                                                                                   | LF4        |

> **Hinweis:** Die Unterlagen führen zu vielen Bereichen zusätzliche **BSI-Bausteine** auf (z. B. **NET.1.x, NET.3.x, ISMS.1, ORP.3/4, CON.1-3, OPS.1.1.x, SYS.1.5**), die bei der konkreten Ausgestaltung helfen. *(LF9)* 

---

## 🧪 Beispielcode (aus den Unterlagen)

### 1) **Passwort-Hashing mit SHA-256 (Python & Java)** – Bezug: **Datenintegrität/Zugriffskontrolle**

```python
# Python: SHA-256-Hashwert erzeugen
import hashlib
password = "Mein Passwort"
encoded_password = password.encode()
hash_value = hashlib.sha256(encoded_password)
print("Passwort: " + password)
print("Hashwert: " + hash_value.hexdigest())
```

*(LF11a)* 

```java
// Java: SHA-256-Hashwert erzeugen
import java.math.BigInteger;
import java.nio.charset.StandardCharsets;
import java.security.MessageDigest;

public class Program {
  public static void main(String[] args) {
    try {
      String password = "Mein Passwort";
      MessageDigest digest = MessageDigest.getInstance("SHA-256");
      byte[] encodedPassword = digest.digest(password.getBytes(StandardCharsets.UTF_8));
      BigInteger no = new BigInteger(1, encodedPassword);
      String hashValue = no.toString(16);
      while (hashValue.length() < 32) { hashValue = "0" + hashValue; }
      System.out.println("Passwort: " + password);
      System.out.println("Hashwert: " + hashValue);
    } catch (Exception e) { e.printStackTrace(); }
  }
}
```

*(LF11a)* 

### 2) **Symmetrische Verschlüsselung (Fernet/AES, Python)** – Bezug: **Übertragungs-/Speicher-/Transportkontrolle**

```python
from cryptography.fernet import Fernet

# Schlüssel erzeugen
key = Fernet.generate_key()
cipher = Fernet(key)

# Verschlüsseln
plain_text = 'Eine wirklich sehr geheime Nachricht!'
encrypted_text = cipher.encrypt(plain_text.encode()).decode('UTF-8')

# Entschlüsseln
decrypted_text = cipher.decrypt(encrypted_text.encode()).decode('UTF-8')

print("Verschlüsselter Text:", encrypted_text)
print("Entschlüsselter Text:", decrypted_text)
```

*(LF11a)* 

---

## 🧰 Praxisbeispiele & Umsetzungsbausteine (aus den PDFs)

* **HTTPS/TLS für Websites**: Zertifikate (z. B. ACME/Let’s Encrypt) einrichten; Browser-Schloss/**https** sichtbar. *(Übertragungskontrolle)* *(LF9)* 
* **VPN/IPsec** (Remote/Standort/IoT): Tunnel, **Diffie-Hellman** für Schlüsselaustausch; Leistungsfähigkeit des VPN-Routers beachten. *(Übertragung/Verfügbarkeit)* *(LF9)* 
* **DNS absichern**: **DNS-Filter** (Pi-hole/AdGuard) + **DoT/DoH/DoQ** gegen Mitlesen/Manipulation. *(Übertragung/Trennung)* *(LF9)*
* **VoIP absichern**: **Session Border Controller** (SIP-Firewall, **TLS/SRTP**, SIP-IPS/DDoS-Schutz). *(Übertragung/Zugriff)* *(LF9)* 
* **Segmentierung/Zero-Trust-Ansätze**: **Netzwerksegmentierung**, **ACLs**, **QoS**, **VLAN**. *(Trennbarkeit/Zugriff)* *(LF9)*
* **Backup & Snapshots** in Virtualisierung/Hosting-Panels (inkl. externes Storage). *(Wiederherstellbarkeit)* *(LF9)*

---

## 🧩 Bezug zu BSI-Grundschutzbausteinen (Auswahl)

* **ISMS.1 Sicherheitsmanagement**, **ORP.3 Sensibilisierung/Schulung**, **ORP.4 Identitäts-/Berechtigungsmanagement** → *Benutzer-/Zugriffskontrolle*. *(LF9)* 
* **CON.1 Kryptokonzept**, **CON.3 Datensicherungskonzept** → *Übertragung/Integrität/Wiederherstellbarkeit*. *(LF9)* 
* **OPS.1.1.3 Patch-/Änderungsmanagement**, **OPS.1.1.4 Schutz vor Schadprogrammen**, **OPS.1.1.5 Protokollierung** → *Zuverlässigkeit/Eingabekontrolle*. *(LF9)* 
* **NET.1-4 (Netze/Komponenten/TK)** → *Segmentierung, Firewall, VPN, WLAN-Betrieb*. *(LF9)* 
* **SYS.1.5 Virtualisierung** → *Snapshots, sichere Konfiguration, Rechte-/Rollenkonzepte*. *(LF9)* 

---

## 📚 Begriffstabelle

| Begriff                  | Definition                                                                                                              | Quelle   |
| ------------------------ | ----------------------------------------------------------------------------------------------------------------------- | -------- |
| **TOM**                  | **Technische und organisatorische Maßnahmen** im Sicherheitskonzept zur Gewährleistung von Datenschutz/IT-Sicherheit.   | LF9, LF4 |
| **Sicherheitsleitlinie** | Grundsatzdokument der Leitung mit Prinzipien, Zielen, Zuständigkeiten; Startpunkt des Sicherheitsprozesses.             | LF4      |
| **Schutzziele**          | **Vertraulichkeit, Integrität, Verfügbarkeit**; in DSGVO/IT-Grundschutz gefordert.                                      | LF4, LF9 |
| **Kryptokonzept**        | Auswahl sicherer **Algorithmen/Protokolle** (z. B. nach BSI TR-02102).                                                  | LF4      |
| **DNS-Filter/DoT**       | Filtert Tracking/Malware; leitet DNS **verschlüsselt** weiter (**DoT/DoH/DoQ**).                                        | LF9      |
| **SBC**                  | **Session Border Controller**: Schutz der **SIP**-Schnittstelle, Verschlüsselung (**TLS/SRTP**), Protokoll-Übersetzung. | LF9      |

---

## ⚙️ Vorgehens-Checkliste (aus den Unterlagen abgeleitet)

1. **Leitlinie & ISMS** festlegen (Ziele, Verantwortungen, Schulungen). *(LF4)* 
2. **Sicherheitskonzept** erstellen und **TOM** je **Kontrollbereich** definieren. *(LF9, LF4)*
3. **Strukturanalyse** & **Schutzbedarfsfeststellung** (Objekte, Prozesse, Räume, Netze). *(LF4, LF9)*
4. **Implementierung** (z. B. TLS/HTTPS, VPN/IPsec, DNS-Filter, Segmentierung, IAM/MFA, Backup/Snapshots). *(LF9, LF4)*
5. **Wirksamkeitsprüfung** (Logging, Audits, ISO 27001-Bezug), **Fortentwicklung** (Patch-/Änderungsmanagement). *(LF4, LF9)*

---

Wenn du magst, erstelle ich dir daraus direkt eine **TOM-Checkliste (Word/Excel)** samt **Zuordnung zu den 14 Kontrollbereichen** und **BSI-Bausteinen** – inkl. Feldern für **Status**, **Nachweise** und **Risiko/Schutzbedarf** (bereit für Audit & Abnahme).
