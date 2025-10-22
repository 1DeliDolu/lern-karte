# 🔐 Kunden zur IT-Sicherheit beraten <span style="background:#e0f0ff;">LF4, LF9, LF11a</span>

**Zielsetzung:** Kundinnen und Kunden (private Haushalte, Unternehmen, öffentliche Hand) erhalten eine strukturierte, rechtskonforme und wirksame Beratung zu **Anforderungen**, **TOM** (technisch-organisatorischen Maßnahmen), **Rahmenbedingungen**, **Risikoanalyse** und **Bedrohungsszenarien**. (LF4, LF9)

---

## 🧭 Zielgruppen & Besonderheiten

**Private Haushalte (inkl. Home/Telearbeit):** Für häusliche Arbeitsplätze existieren IT-Grundschutz-Bausteine (z. B. **INF.8 Häuslicher Arbeitsplatz**) sowie Bürgerinformationen des **BSI für Bürger** als praxisnahe Orientierung. (LF4)
**Unternehmen (intern/extern):** Typische Herausforderungen sind u. a. alte Hardware, hohe Lizenzkosten, Homeoffice-Einbindung (erhöhter **Angriffsvektor**) und fehlende Admin-Ressourcen. (LF9) 
**Öffentliche Hand:** In Beschaffung/Ausschreibungen sind rechtliche und organisatorische Vorgaben (z. B. **VOB/VOL/VOF**, Verfahren, Fristen, Plattformen) strikt zu beachten; Zuschläge erfolgen nach transparenten Kriterien. (LF9)

---

## 🎯 Anforderungen erfassen: funktional & qualitativ

**Lastenheft/Anforderungsanalyse (Was?)** – Inhalte u. a. **Ausgangssituation/Zielsetzung**, **funktionale Anforderungen** (Muss/Kann/Abgrenzung), **nicht-funktionale Anforderungen** (Qualität, Administration/Orchestrierung, Compliance), **Sicherheit/Datenschutz** (Bezug auf **Schutzbedarfs-/Risikoanalyse**), **Lebenszyklus/SLA**, **Lieferumfang/Dokumentation/Abnahme**. (LF9, Lernfeld2)

**Beispiel – Kleinstunternehmen (Auszug):** Bandbreiten-Musskriterium, Router mit **DHCP/DNS**, **Firewall** (ausgehend erlauben, eingehend verhindern), Dokumentation, Support per Videocall. (LF9) 

**Nicht-funktionale/Qualitätsanforderungen:** Konkrete Qualitätsmerkmale, Admin/Maintenance gemäß **SLA**, Compliance-Vorgaben; **Sicherheit/Datenschutz** werden häufig **gesondert** geführt (TOM, Verschlüsselung, VPN, Website-Schutz, Firewall). (LF9)

---

## 🛡️ Technisch-organisatorische Maßnahmen (TOM)

**TOM-Beispiele nach DSGVO/BDSG/BSI** (Auswahl für Checklisten): **Zutritts-, Zugangs-, Zugriffskontrolle**, Weitergabe/Transportkontrolle (inkl. **Verschlüsselung/VPN**), **Protokollierung** (Eingabekontrolle), **Auftragskontrolle**, **Verfügbarkeitskontrolle** (Backup-Konzept, Notfallpläne, Patch-Management, USV), **Trennungs-, Organisations-, Wirksamkeitskontrolle**, **Informationspflichten**, **Verpflichtung der Beschäftigten**, **Verzeichnis der Verarbeitungstätigkeiten**. (LF4, LF9)

**Angemessenheit:** Auswahl gemäß **Art. 32 DSGVO** (Stand der Technik, Kosten, Art/Umfang, Eintrittswahrscheinlichkeit/Schwere) und BSI-Kriterien (Wirksamkeit, Eignung, Praktikabilität, Akzeptanz, Wirtschaftlichkeit). (LF4) 

---

## 🧩 Rahmenbedingungen

**Technologisch:** IPv4/IPv6-Eigenschaften, Protokoll-Stack (TCP/UDP/TLS, DNS/IMAP/SMTP/HTTPS/SFTP/SSH), **DNSSEC** bei Providern verfügbar, **DDoS-Schutz** bei Webhosting, **3-2-1-Backup-Regel** und **Redundanz** (funktional, räumlich, organisatorisch). (LF9)

**Organisatorisch:** Rollen/Verantwortlichkeiten (**Leitung**, **ISB/DSB/Informationssicherheitsbeauftragte**), Sicherheitsleitlinie/-konzept, Schulung/Sensibilisierung (**ORP.3**, Social Engineering). (LF4, LF9)

**Rechtlich (Deutschland/EU):** **IT-SiG**, **BSI-Gesetz**, **EU-DSGVO**, **BDSG** – inkl. Aufsicht/Bußgelder; Herstellerupdates/Tools und ISMS bis hin zum Risikomanagementsystem. (LF4) 

**Ethisch:** In den vorliegenden Lernfeldern finden sich keine eigenständigen Ethik-Leitlinien; angrenzend werden **Compliance**, Rechtstreue und Verantwortlichkeiten adressiert. (LF9, LF4)

---

## 📉 Risikoanalyse & -behandlung (BSI-Bezug)

**Vorgehen (Netzwerkbeispiel):** Sicherheitsleitlinie → Sicherheitskonzept (TOM) → **Strukturanalyse** (Prozesse/IT/Netzplan/Räume) → **Schutzbedarfsfeststellung** → **Risikoanalyse** → **Risikobehandlung** (Maßnahmen, Zeit/Budget/Verantwortung). (LF9) 

**Beispiel-Gefährdungen (Auszug):** Strom-/Netzausfall, Ausspähen, unbefugtes Eindringen, Missbrauch von Berechtigungen – mit Beurteilung von **Eintrittshäufigkeit** und **Auswirkungen** zur Risikobewertung. (LF9) 

---

## 🛑 Bedrohungsszenarien (Beratungsschwerpunkt)

**Angriffsarten (Überblick):** Ausnutzen von Schwachstellen, Informationsdiebstahl, **Man-in-the-Middle**, **DoS/DDoS**, **Malware**, **Code-Injection-Angriffe**. (LF4) 

**DoS/DDoS – Details & Botnetze:** Syn-/Ping-Flooding, Mailbombing; **Botnetze** (C&C-gesteuert) werden häufig für **DDoS** und Spam missbraucht. (LF4) 

**Spam/Phishing – Prävention:** Seriosität von Absendern/Links prüfen; Hoaxes/Kettenbriefe **löschen**, **nicht** weiterleiten. (LF4) 

**Web-Schutz im Betrieb:** Provider-Optionen wie **DNSSEC** und **DDoS-Schutz** berücksichtigen. (LF9) 

> **Hinweis zu „SQL-Injection“:** Das Material nennt **Code-Injection-Angriffe** allgemein; eine explizite Unterteilung „SQL-Injection“ wird in den vorliegenden Abschnitten nicht eigenständig ausgeführt. (LF4) 

---

## 🧪 Beispielcode & praktische Illustrationen

### 🔑 Passwort-Hashing (SHA-256) – Python (LF11a)

```python
import hashlib
password = "Mein Passwort"
encoded_password = password.encode()
hash_value = hashlib.sha256(encoded_password)
print("Passwort: " + password)
print("Hashwert: " + hash_value.hexdigest())
```

Ausgabe (Beispiel): `8b33bb3f2d7c...b6b442`. (LF11a) 

### 🔑 Passwort-Hashing (SHA-256) – Java (LF11a)

```java
import java.math.BigInteger;
import java.nio.charset.StandardCharsets;
import java.security.MessageDigest;

public class Program {
  public static void main(String[] args) {
    try {
      String password = "Mein Passwort";
      MessageDigest digest = MessageDigest.getInstance("SHA-256");
      byte[] encodedPassword =
          digest.digest(password.getBytes(StandardCharsets.UTF_8));
      BigInteger no = new BigInteger(1, encodedPassword);
      String hashValue = no.toString(16);
      while (hashValue.length() < 32) { hashValue = "0" + hashValue; }
      System.out.println("Passwort: " + password);
      System.out.println("Hashwert: " + hashValue);
    } catch (Exception e) { e.printStackTrace(); }
  }
}
```

Erzeugt den hexadezimalen SHA-256-Hash. (LF11a) 

### 🌐 REST-Abfrage (GET) – Python (LF11a)

```python
import requests, json
API_key = "API_KEY"
base_url = "https://api.openweathermap.org/data/2.5/weather?"
cityname = input("Geben Sie einen Ort ein: ")
url = base_url + "appid=" + API_key + "&q=" + cityname
weather_data = requests.get(url).json()
print("Aktuelle Wetterdaten von " + cityname + ":\n")
print(json.dumps(weather_data, indent=4))
```

Beispiel für **Web-API-Nutzung** (Client-Server/REST); Ausgabe als JSON zur Weiterverarbeitung. (LF11a) 

---

## ⚙️ Prozessschritte in der Beratung

1. **Ist-Analyse & Zielsetzung** (Anwendungen, Prozesse, Systeme; KPI aus Kundensicht). (LF9) 
2. **Anforderungen erfassen** – funktional (Muss/Kann/Abgrenzung) & nicht-funktional (Qualität, Admin, Compliance). (LF9) 
3. **Schutzbedarf/Risikoanalyse** (BSI-Vorgehen), **TOM** konkretisieren. (LF9, LF4)
4. **Rahmenbedingungen prüfen** – technologisch (Protokolle, DNSSEC, DDoS-Schutz), organisatorisch (Rollen, Schulung), rechtlich (IT-SiG, DSGVO, BDSG). (LF9, LF4)
5. **Konzept/Lasten- & Pflichtenheft** inkl. **SLA**, Monitoring/Backup (**3-2-1-Regel**) und **Redundanz** planen. (LF9) 
6. **Umsetzung, Dokumentation, Abnahme & Schulung**; Wirksamkeitsprüfung/Audit. (LF9, LF4)

---

## 📚 Begriffsklärungen

| Begriff                  | Definition                                                                                                                               | Quelle         |
| ------------------------ | ---------------------------------------------------------------------------------------------------------------------------------------- | -------------- |
| **TOM**                  | Maßnahmen u. a. Zutritts/Zugangs/Zugriffskontrolle, Verschlüsselung/VPN, Protokollierung, Verfügbarkeit/Backup/USV, Wirksamkeitsprüfung. | LF4            |
| **Lastenheft**           | Beschreibt **Was** der Kunde will (funktional/nicht-funktional, Sicherheit/Datenschutz, Lebenszyklus, Abnahme).                          | LF9, Lernfeld2 |
| **Pflichtenheft**        | Konkretisierung **Wie** (Sollkonzept, KPI, technische Vorgaben, Tests).                                                                  | LF9            |
| **3-2-1-Backup**         | Drei Kopien, zwei Medien, eine **extern** gelagert.                                                                                      | LF9            |
| **MitM**                 | Eindringen zwischen Sender/Empfänger (Abhören/Manipulation).                                                                             | LF4            |
| **DDoS**                 | Verfügbarkeitsangriff, oft über **Botnetze** (z. B. Syn/Ping-Flooding).                                                                  | LF4            |
| **Code-Injection**       | Angriffe durch Einschleusen von Code (Oberbegriff im Material).                                                                          | LF4            |
| **Rollen/Verantwortung** | Leitung setzt Leitlinie/ISMS, ISB/DSB mit operativen Aufgaben; „alle im selben Boot“.                                                    | LF4            |
| **Rechtsrahmen**         | **IT-SiG**, **BSIG**, **EU-DSGVO**, **BDSG**, Aufsichten (BSI, BfDI etc.).                                                               | LF4            |

---

## 🧷 Praxis-Hinweise je Zielgruppe

* **Private Haushalte:** Orientierung an **BSI-für-Bürger**, E-Mail-Prüfung (Phishing/Hoaxes **löschen**), Grundschutz für häusliche/mob. Arbeitsplätze. (LF4)
* **Unternehmen:** Lastenheft sauber führen (Muss/Kann), **DNSSEC/DDoS-Schutz** beim Hosting, **Redundanz/Backups**, Schulung (ORP.3), klare Rollen. (LF9, LF4)
* **Öffentliche Hand:** Vergabearten/-regeln beachten (Verfahrensart, Veröffentlichung, Unterlagen), Zuschlagskriterien veröffentlichen. (LF9)

---


