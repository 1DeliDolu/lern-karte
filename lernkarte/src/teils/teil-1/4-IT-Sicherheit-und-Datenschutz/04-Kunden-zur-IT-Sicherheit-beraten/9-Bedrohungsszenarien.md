# 🛡️ Bedrohungsszenarien: **Man-in-the-Middle**, **SQL-Injection** (Code-Injection), **DDoS** <span style="background:#e0f0ff;">LF4, LF8, LF9, LF11a</span>

**Einordnung:** Die Lernfelder nennen **Man-in-the-Middle**, **DoS/DDoS** und **Code-Injection-Angriffe** (unter die **SQL-Injection** fällt) als typische **Angriffsarten** und **-techniken** gegen Netze, Web-Anwendungen und Datenkommunikation. *(LF4)* 

---

## 🕵️‍♂️ **Man-in-the-Middle (MitM)**

**Begriff & Ziel:** **Eindringen in die Mitte** zwischen Sender und Empfänger zum **Belauschen** und **Manipulieren** der Kommunikation; zählt zu den **Angriffsarten**. *(LF4)* 
**Angriffsweg(e):** Datenkommunikation/Netzwerk/Protokolle werden als **Angriffsobjekte** genannt. *(LF4)* 

**Geeignete Maßnahmen (aus dem Material):**

* **Kryptografische Maßnahmen** (allgemein) im Sicherheitskonzept vorsehen. *(LF4)* 
* **Abhörschutz auf Infrastrukturebene**, z. B. **DNSSEC** und **SSL-Zertifikate** als Betriebsanforderungen an Web-/Mail-Dienste. *(LF9)* 
* **Netz-/Schnittstellenhärtung, NGFW** und technische Vorkehrungen zur Absicherung der **Netz-Schnittstellen**. *(LF4)* 

---

## 💉 **SQL-Injection** (im Material als **Code-Injection-Angriffe** geführt)

**Begriff & Einordnung:** **Code-Injection-Angriffe** sind ausdrücklich als **Angriffstechnik** genannt; **SQL-Injection** ist eine spezifische Ausprägung davon (Datenbank-Ebene). *(LF4)* 
**Typische Voraussetzungen laut Gefährdungslage:** **Fehlerhafte/ungenügende Rechtevergabe**, **unzureichende Konfiguration**, **unbekannte Schwachstellen**. *(LF4)* 

**Geeignete Maßnahmen (aus dem Material):**

* **Rechte minimal vergeben** (**GRANT/REVOKE**), Benutzer sauber trennen. *(LF8)* 
* **Berechtigungs-/Identitätsmanagement** als organisatorisch-technische Maßnahme verankern. *(LF4)* 

> **Hinweis:** Das Material beschreibt **Code-Injection** allgemein; konkrete Input-Validierung/Prepared-Statements werden dort nicht detailliert ausgeführt. *(LF4)* 

---

## 🌊 **DDoS-Attacke** (Distributed Denial of Service)

**Begriff & Wirkung:** **DoS** = „Dienstverweigerung“ durch Überlastung; **DDoS** verstärkt dies **verteilt** über viele **Botnet-Clients** (C&C-gesteuert). *(LF4)*
**Varianten (DoS):** **SYN-Flooding**, **Ping-Flooding**, **Mailbombing**. *(LF4)* 
**BSI-Gefährdungslage (Netz):** u. a. **Verhinderung von Diensten (DoS)**, **Unbefugtes Eindringen**, **Schadprogramme**. *(LF9)* 

**Geeignete Maßnahmen (aus dem Material):**

* **Provider-seitiger DDoS-Schutz** als Anforderung in Webhosting/Netzbetrieb vertraglich sichern. *(LF9)* 
* **Netz-/Infrastrukturhärtung** und **Sicherheitskonzept** (BSI-Vorgehen) mit TOM (z. B. Backup/Notfall, Protokollierung, Malware-Abwehr). *(LF4)* 

---

## 🧪 **Beispielcode & praktische Illustrationen** (aus den Lernfeldern)

### 1) **Datenbank-Rechte absichern** (gegen Missbrauch; Grundlage für Injection-Risiken) *(LF8)*

```sql
-- Benutzer anlegen
CREATE USER Schulz IDENTIFIED BY '123xyz456';
-- Nur erforderliche Rechte vergeben
GRANT SELECT ON Ortsverwaltung.Ort TO Schulz;
-- Kritische Rechte entziehen
REVOKE INSERT, UPDATE, DELETE ON Ortsverwaltung.Ort FROM Schulz;
```

*(Aufgaben zu CREATE USER / GRANT / REVOKE in LF8)* 

### 2) **Service-Check via HTTP-Status** (Betriebsbezug z. B. bei DoS-Auswirkungen sichtbar) *(LF11a)*

```python
import requests, json
url = "https://api.openweathermap.org/data/2.5/weather?appid=API_KEY&q=Berlin"
resp = requests.get(url)
print(resp.status_code)          # 2xx/4xx/5xx als einfacher Indikator
print(json.dumps(resp.json(), indent=2))
```

*(REST-GET, HTTP-Statuscodes und JSON-Ausgabe in LF11a)* 

---

## ⚙️ **Beratungs-Checkliste** (copy-ready, auf Basis der Inhalte)

1. **MitM adressieren:** **Kryptografie** im Konzept (TOM), **DNSSEC/SSL-Zertifikate** im Betrieb fordern; **Netz-Schnittstellen** per **NGFW**/Härtung schützen. *(LF4, LF9)*
2. **Code/SQL-Injection eindämmen:** **Rechte-/Rollenmodell** (GRANT/REVOKE) strikt; **Berechtigungsmanagement** definieren. *(LF8, LF4)*
3. **DDoS handhaben:** **DDoS-Schutz** als **Provider-Leistungsmerkmal** vertraglich fixieren; Notfall-/Backup-/Betriebs-TOM festlegen. *(LF9, LF4)*

---

## 📚 **Begriffstabelle**

| Begriff                     | Definition                                                                                | Quelle |
| --------------------------- | ----------------------------------------------------------------------------------------- | ------ |
| **Man-in-the-Middle**       | **Eindringen zwischen Sender/Empfänger** zum Belauschen/Manipulieren.                     | LF4    |
| **Code-Injection**          | **Einschleusen von Code** als **Angriffstechnik** (Oberbegriff für SQL-Injection).        | LF4    |
| **DoS/DDoS**                | **Dienstverweigerung**; bei **DDoS** verteilt über **Botnetze**.                          | LF4    |
| **DDoS-Schutz (Provider)**  | Hosting/Netzbetrieb mit **DDoS-Schutz** vertraglich vorgesehen.                           | LF9    |
| **Rechtevergabe DB**        | **CREATE USER / GRANT / REVOKE** zur **minimalen Berechtigung**.                          | LF8    |
| **BSI-Gefährdungen (Netz)** | U. a. **Verhinderung von Diensten (DoS)**, **Unbefugtes Eindringen**, **Schadprogramme**. | LF9    |

---

## 🎯 **Zielbild für Vergabe-/Projektunterlagen**

* **Leistungsbeschreibung:** MitM-Schutz (**DNSSEC/SSL**), **DDoS-Schutz** und **Netz-Härtung/NGFW** als **Muss-Kriterien**. *(LF9, LF4)*
* **Pflichtenheft/SLA:** **Berechtigungsmanagement** (DB-Rechte), **Monitoring** (Service-Checks/Statuscodes) und **Notfall-/Backup-TOM** prüfbar beschreiben. *(LF8, LF11a, LF4)*

---

