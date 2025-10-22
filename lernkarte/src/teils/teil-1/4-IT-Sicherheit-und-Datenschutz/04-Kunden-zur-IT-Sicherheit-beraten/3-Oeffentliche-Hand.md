# 🏛️ IT-Sicherheitsberatung für die **Öffentliche Hand** (Checkliste & Leitfaden) <span style="background:#e0f0ff;">LF4, LF9</span>

**Warum speziell?** Öffentliche Auftraggeber müssen IT-Sicherheitsprojekte **vergaberechtskonform** planen, ausschreiben und bewerten (Verfahrensarten, Veröffentlichung, Zuschlagskriterien), parallel zum **BSI-Sicherheitsprozess** (Leitlinie → Konzept → Schutzbedarfsfeststellung → Maßnahmen). (LF9)  (LF4) 

---

## 🧭 Kontext & Besonderheiten der öffentlichen Vergabe

* **Rechtliche Eckpunkte:** Veröffentlichungstyp (Auftrag/Ausschreibung), **Verfahrensart** (offen/nicht offen), **Veröffentlichungsweite** (EU-weit/national), **Vergabeverordnungen** (**VOB/A, VOL/A, VOF**), vertragliche Regelungen/**SLA** berücksichtigen. (LF9) 
* **Zuschlagskriterien offenlegen:** Preis/Leistung, Qualität, Lebenszykluskosten u. a.; Kriterien müssen bereits in der Auftragsbekanntmachung **öffentlich gemacht** werden. (LF9) 
* **eVergabe & Portale:** Elektronische Vergabe sorgt für **Nachvollziehbarkeit**, digitale Signatur, weniger Formfehler; typische Plattform-Infos (z. B. dtvp, eVergabe) und Vorteile sind aufgeführt. (LF9) 
* **Pflichtunterlagen:** Angebotsschreiben, Vordrucke (z. B. Nachunternehmerverzeichnis), Eigenerklärungen, **Leistungsbeschreibung**, Preisblätter. (LF9) 

---

## ⚙️ Prozessschritte für Behördenprojekte (End-to-End)

1. **Sicherheitsleitlinie & ISMS starten:** Leitung übernimmt Verantwortung, Ressourcen bereitstellen; Leitlinie veröffentlicht (Geltungsbereich, Ziele, Gesetze, Rollen, Schulung). (LF4)
2. **Strukturanalyse/Informationsverbund:** Prozesse, Anwendungen, IT-Systeme, **Räume** und **Netzplan** erfassen (inkl. interner/externer Schnittstellen). (LF4) 
3. **Schutzbedarfsfeststellung:** Vorgehen, Aufgaben und **Kategorien (normal/hoch/sehr hoch)** nach BSI; Kumulations-/Verteilungseffekte beachten. (LF4)
4. **Lastenheft (Was?):** Ausgangssituation/Ziele, **funktionale** Muss/Kann/Abgrenzung, **nicht-funktionale** (Qualität, Administration, Compliance); **Sicherheit/Datenschutz** meist **gesondert** mit Bezug auf Schutzbedarfs-/Risikoanalyse. (LF9)
5. **TOM ableiten (Wie viel Schutz?):** Zutritts/Zugangs/Zugriffskontrolle, Protokollierung, **Verfügbarkeit** (Backup/USV/Notfall), **Verschlüsselung/VPN** etc.; Auswahl nach **Art. 32 DSGVO** (Stand der Technik, Risiko) und BSI-Kriterien. (LF4)
6. **Pflichtenheft (Wie?):** Präzise Spezifikation (Infrastruktur, Protokolle, KPI, Netzpläne), **verständliche** Grafiken/Tabellen; **gegenseitige Unterzeichnung**. (LF9) 
7. **Ausschreibung & Vergabeplanung:** Plattform/Kategorie wählen, Fristen/Abgabearten (Signatur), Bieterfragen/Verhandlungen, geeignete **Vergabeart** festlegen. (LF9) 
8. **Bewertung & Zuschlag:** Quantitative+qualitative **Nutzwertanalyse** zur Ermittlung des **wirtschaftlichsten** Angebots; Vergabe nach VOB-Regeln. (LF9) 

---

## 🎯 Anforderungen für Behörden-Lastenhefte

* **Funktional:** Muss-/Kann-Kriterien (z. B. Dienste, Verfügbarkeiten, Administrationszeiten) und **Abgrenzung**. (LF9) 
* **Nicht-funktional (Qualität/Administration/Compliance):** SLA-bezogene Administration/Wartung/Monitoring, Standards und Gesetze. (LF9) 
* **Sicherheit & Datenschutz (separat):** **TOM** und Datensicherung explizit benennen; **besondere** Anforderungen wie E-Mail-Verschlüsselung, **VPN**, Website-Schutz, **Firewall** aufführen. (LF9) 
* **Lebenszyklus & Betrieb:** Nutzungszeiten, Ersatz/Wartung, Dokumentation, Schulung, **Abnahme**. (LF9) 

---

## 🛡️ **TOM** – behördenspezifische Auswahl (Auszug)

* **Zutritts-/Zugangs-/Zugriffskontrolle**, **Trennungskontrolle**, **Organisationskontrolle**, **Wirksamkeitsprüfung** (Audit/Zertifizierung), **Verfügbarkeitskontrolle** (Backup, Notfall, Patch, USV), **Informationspflichten**, **Verpflichtung der Beschäftigten**, **VVT**. (LF4) 
* **Beispiele/Checklisten-Stichworte:** MFA/Passwortqualität, Ports/USB-Sperren, Netzsegmentierung/Firewall, Anti-Malware, Kryptografie, physische Sicherung. (LF4) 
* **Angemessenheit:** Art. 32 DSGVO + BSI (Wirksamkeit, Eignung, Praktikabilität, Akzeptanz, Wirtschaftlichkeit). (LF4) 

---

## 📉 Risikoanalyse nach BSI

* **Ablauf:** Leitlinie → Sicherheitskonzept → Strukturanalyse → **Schutzbedarfsfeststellung** (Schadensszenarien, Reihenfolge Zielobjekte, Abhängigkeiten) → **Risikobehandlung**. (LF4)
* **Kategorien & Beispiele:** **Normal/Hoch/Sehr hoch**; Beispieltabellen (Anwendungen/IT-Systeme) inkl. Maximumprinzip. (LF4)

---

## 🚨 Bedrohungsszenarien (öffentliche IT)

* **Man-in-the-Middle (MitM)**, **DoS/DDoS** (oft via **Botnetze**), **Code-Injection**, **Malware**: typische Angriffsarten und -wege (Netz, Web, E-Mail, Social Engineering). (LF4) 
* **Botnetz/Phishing** – typische Muster (u. a. Emotet/Mirai etc.) und Begriffe. (Lernfeld 2) 
* **Hinweis zu „SQL-Injection“:** Im Material wird **Code-Injection** als Oberbegriff adressiert; **SQL-Injection** ist eine Unterform und kann in der Leistungsbeschreibung spezifisch gefordert/geprüft werden. (LF4) 

---

## 🧪 Beispielcode & Praxis

### 1) **Passwort-Hashing (SHA-256)** – Python & Java (für behördliche Anwendungen/Portale)

```python
# LF11a – SHA-256 in Python
import hashlib
password = "Mein Passwort"
encoded_password = password.encode()
hash_value = hashlib.sha256(encoded_password)
print("Passwort: " + password)
print("Hashwert: " + hash_value.hexdigest())
```

```java
// LF11a – SHA-256 in Java
import java.math.BigInteger;
import java.nio.charset.StandardCharsets;
import java.security.MessageDigest;

public class Program {
  public static void main(String[] args) {
    try {
      String password = "Mein Passwort";
      MessageDigest digest = MessageDigest.getInstance("SHA-256");
      byte[] encoded = digest.digest(password.getBytes(StandardCharsets.UTF_8));
      BigInteger no = new BigInteger(1, encoded);
      String hashValue = no.toString(16);
      while (hashValue.length() < 32) hashValue = "0" + hashValue;
      System.out.println("Passwort: " + password);
      System.out.println("Hashwert: " + hashValue);
    } catch (Exception e) { e.printStackTrace(); }
  }
}
```

(LF11a) 

### 2) **Datenbank-Zugriff steuern** – **GRANT/REVOKE** (Zugriffskontrolle als TOM)

```sql
-- LF8 – Benutzer/Rechte
CREATE USER Schulz IDENTIFIED BY '123xyz456';
GRANT INSERT, UPDATE ON Ortsverwaltung.Ort TO Schulz;
REVOKE INSERT, UPDATE ON Ortsverwaltung.Ort FROM Schulz;
```

(LF8) 

### 3) **REST-GET** (Behörden-API-Konsum, Statuscodes beachten)

```python
# LF11a – GET-Anfrage (requests)
import requests, json
resp = requests.get("https://example.gov/api/resource")
print(resp.status_code)
print(json.dumps(resp.json(), indent=2))
```

(HTTP-Methoden/Statuscodes/GET-Beispiel) (LF11a) 

---

## ☑️ Behörden-Checkliste (kompakt)

* **Leitlinie & Rollen (ISB/DSB) verabschieden** und schulen. (LF4) 
* **Strukturanalyse & Netzplan** erstellen; **Schutzbedarf** bestimmen. (LF4)
* **Lastenheft** mit **Sicherheit/Datenschutz getrennt** formulieren. (LF9) 
* **TOM** konkret planen (MFA, Backup/USV, Protokollierung, Verschlüsselung/VPN, Segmentierung). (LF4) 
* **Pflichtenheft** mit KPI/Netzplänen erstellen, **beidseitig** unterzeichnen. (LF9) 
* **Ausschreibung**: Verfahren/Plattform/Dokumente/Fristen definieren. (LF9) 
* **Bewertung**: Nutzwertanalyse & **offengelegte Zuschlagskriterien** anwenden. (LF9) 
* **Abnahme, Betrieb & Monitoring** gemäß SLA/Reporting/Backup testen. (LF9) 

---

## 📚 Begriffstabelle (Öffentliche Hand)

| Begriff                   | Definition                                                                                                                          | Quelle          |
| ------------------------- | ----------------------------------------------------------------------------------------------------------------------------------- | --------------- |
| **Lastenheft**            | Vom Auftraggeber: „**Was**?“ inkl. Rahmenbedingungen, Compliance; Basis für Pflichtenheft.                                          | LF9             |
| **Pflichtenheft**         | Vom Auftragnehmer: „**Wie**?“ – detaillierte, prüfbare Spezifikation, KPI, Netzpläne, Sign-off.                                     | LF9             |
| **Vergabeverordnungen**   | **VOB/A, VOL/A, VOF**; Verfahrensart, EU/national, Veröffentlichung/Fristen/Dokumente.                                              | LF9             |
| **Zuschlagskriterien**    | Preis/Qualität/LZK etc.; **müssen veröffentlicht** sein; wirtschaftlichstes Angebot per Nutzwertanalyse.                            | LF9             |
| **TOM**                   | Zutritts/Zugangs/Zugriff, Protokollierung, Verfügbarkeit, Trennung, Organisation, Wirksamkeit, Infopflichten, Verpflichtungen, VVT. | LF4             |
| **BSI-Schutzbedarf**      | **Normal/Hoch/Sehr hoch**; Vorgehen/Tabellen/Maximumprinzip.                                                                        | LF4             |
| **MitM / DDoS / Botnetz** | Typische Angriffsarten/Verbünde und Phishing/Schadsoftware.                                                                         | LF4, Lernfeld 2 |

---

Möchtest du das als **prüffähige Vergabe-Checkliste** (Word/Excel-Format) mit Bausteinen für **Leistungsbeschreibung**, **Bewertungsschema (Nutzwertanalyse)** und **TOM-Nachweis** haben? Ich setze dir das sofort zusammen – sag mir nur kurz das **IT-Thema** der Ausschreibung (z. B. „Netzwerk-Segmentierung mit VPN“ oder „Endpoint-Security + Patch-Management“).
