# 🔐 Security by Design <span style="background:#e0f0ff;">LF8</span>

**Security by Design (Secure by Design, SBD)** bedeutet, dass **Softwareprodukte von Grund auf so konzipiert werden, dass sie sicher sind** *(LF8)*. 
**Privacy by Design** verlangt zusätzlich, den **Datenschutz während des gesamten Engineering-Prozesses** zu berücksichtigen; Grundlage ist die **DSGVO**. Bei Nichteinhaltung drohen **finanzielle Einbußen**, **Imageschaden** und **Vertrauensverlust**. Schwerpunkt sind **Vertraulichkeit, Verfügbarkeit und Integrität** sensibler Daten, die vor **unberechtigtem Zugriff, Manipulation und Löschung** zu schützen sind—und zwar **während des gesamten Entwicklungsprozesses**, nicht erst am Ende *(LF8)*. 

Für eine sichere Software hat sich ein **mehrschichtiges Modell** bewährt: **Jede Schicht der Softwarearchitektur und der technischen Infrastruktur** erhält eigene Sicherheitsmaßnahmen, sodass **äußere Schichten** mögliche **Lücken innerer Schichten kompensieren**. In der **Softwarearchitektur** müssen u. a. **Zugriffskontrolle, Authentifizierung, Datenvalidierung (Ein-/Ausgabe), Fehlerbehandlung, Protokollierung und Kryptographie** berücksichtigt werden *(LF8)*. 

## 🧭 Prinzipien (Designleitlinien)

In der Designphase nennt LF8 **sechs Sicherheitsprinzipien** *(LF8)*: 

1. **Minimalprinzip**: **Nur notwendige Berechtigungen** vergeben (z. B. Lesen, aber kein Bearbeiten). *(LF8)* 
2. **Separierung von Berechtigungen**: **Zugriffe auf Funktionen trennen** (z. B. Daten hinzufügen vs. löschen). *(LF8)* 
3. **Vollständige Zugriffs-Überwachung**: **Jeden Zugriff prüfen**, um unberechtigte Zugriffe zu verhindern. *(LF8)* 
4. **Mehrere Sicherheitsebenen** (Defense in Depth): **Sicherheitsschichten aufteilen**, um **Single Point of Failure** zu vermeiden. *(LF8)* 
5. **Sicherer Ausfall**: **Fail-secure** mit **sicheren Standardeinstellungen** (Confidentiality/Integrity wahren). *(LF8)* 
6. **Benutzerfreundliche Sicherheit**: **Sicherheitsmechanismen nutzerfreundlich** gestalten, sonst werden sie **deaktiviert**. *(LF8)* 

## 🛠️ Design- & Umsetzungshinweise (aus LF8)

* **Architektur trennen (z. B. MVC)**: **Datenverarbeitung und Darstellung in Schichten** trennen; **Frameworks** nutzen *(LF8)*. 
* **Daten vor Verarbeitung validieren**: **Eingaben/Ausgaben und Übergabeparameter** konsequent prüfen; **richtige Datentypen/Wertebereiche** wählen *(LF8)*. 
* **Sichere Übertragung**: **Verschlüsselung (HTTPS)** einsetzen; **Kryptographie nicht selbst implementieren**, sondern **Framework-Möglichkeiten** nutzen *(LF8)*. 
* **Sichere Benutzerverwaltung/Authentifizierung**: **robuste Berechtigungsprüfung** implementieren; **Standard-Frameworks** für Login/MFA verwenden *(LF8)*. 
* **APIs absichern (REST/SOAP)**: **Whitelist-Filter** für **JSON/XML** einsetzen *(LF8)*. 
* **Automatisierte Unittests**: **Regelmäßig während der Entwicklung** testen; **für jede Funktion** einen **Unittest**, **Automatisierung** nutzen *(LF8)*. 
* **SQL-Injection verhindern**: **Framework-Mechanismen** gegen **SQL-Injection** verwenden *(LF8)*. 
* **Protokollierung sicherheitsrelevanter Ereignisse**: **Login-Fehler, Exceptions, Validierungsfehler, Rechteänderungen, Admin-Aktivitäten, Schreibzugriffe** etc. **loggen**; **Datenschutzregeln** beachten *(LF8)*. 

## 🔁 Prozessintegration (Agil/Scrum)

LF8 zeigt eine **exemplarische Umsetzung im Scrum-Prozess**: **sicherheitsrelevante Aspekte ermitteln** (Datenarten/-qualität, Bedrohungslage, **Risikobewertung**), **Artefakte festhalten (User Story)** und **rollenbasiert verantworten** (z. B. **Product Owner**, **Datenschutzbeauftragte**). *(LF8)* 

## 🧩 Verbindung zu IT-Grundschutz & TOM (Organisation & Infrastruktur)

**Security by Design** in der Software verzahnt sich mit **TOM** (technisch-organisatorische Maßnahmen) und **BSI-Grundschutz**:

* **Zugang/Zugriff/Eingabe/Weitergabe-Kontrollen**, **Protokollierung**, **Verschlüsselung/VPN**, **MFA/SSO**, **Backup/Notfallpläne**, **Patch-Management**, **Virenschutz/Firewall**, **Rollen-/Rechtekonzepte**, **Auftrags-/Trennungskontrolle**, **Wirksamkeitsprüfung/Audits** *(LF4)*.
* **BSI-Bausteine** für **Netze/Kommunikation** inkl. **ISMS**, **Identitäts- & Berechtigungsmanagement**, **Kryptokonzept**, **Datensicherung**, **Patch- & Änderungsmanagement**, **Protokollierung**, **Server/Virtualisierung** (mit **restriktiver Rechtevergabe** und **Rollentrennung**) *(LF9)*. 
* **Vulnerability-Scanner (OpenVAS)**, **SIEM**, **SASE/SWG**, **Netzwerksegmentierung** als flankierende Sicherheitsmaßnahmen der Infrastruktur *(LF9)*. 

---

## 💻 Beispielcode & Snippets (aus den Unterlagen)

### 1) **Rechte nach dem Minimalprinzip vergeben** (SQL) <span style="background:#e0f0ff;">LF8</span>

*Bezug: Minimalprinzip, Separierung von Berechtigungen* *(LF8)*. 

```sql
-- Benutzer anlegen
CREATE USER Schulz IDENTIFIED BY '123xyz456';

-- Rechte erteilen (z. B. gezielte INSERT/UPDATE-Rechte)
GRANT INSERT, UPDATE ON Ortsverwaltung.Ort TO Schulz;

-- Rechte entziehen
REVOKE INSERT, UPDATE ON Ortsverwaltung.Ort FROM Schulz;

-- Benutzer löschen
DROP USER Schulz;
```

*(LF8)* 

### 2) **Kapselung & Zugriffskontrolle in Klassen** (Java) <span style="background:#e0f0ff;">LF8</span>

*Bezug: Information Hiding/Kapselung unterstützt sichere Schnittstellen und kontrollierten Zugriff.* *(LF8, LF11a)*

```java
// Zugriffsmodifier-Beispiele
private int anzahl;
protected String bezeichnung;
public double berechneKosten() { /* ... */ return 0.0; }

// Getter und Setter (Kapselung)
private String name;

public String getName() {
  return this.name;
}

public void setName(String name) {
  this.name = name;
}
```

*(LF8)* 

### 3) **HTTP-Methoden & Statuscodes; REST-Abruf** (Python) <span style="background:#e0f0ff;">LF11a</span>

*Bezug: Fehlerbehandlung/Protokollierung – Statuscodes auswerten; sichere Schnittstellen kennen.* *(LF11a)* 

```python
import requests
import json

API_key = "API_KEY"  # eigenen Schlüssel einfügen
base_url = "https://api.openweathermap.org/data/2.5/weather?"
cityname = input("Geben Sie einen Ort ein: ")
url = base_url + "appid=" + API_key + "&q=" + cityname

weather_data = requests.get(url).json()
print("Aktuelle Wetterdaten von " + cityname + ":")
print(json.dumps(weather_data, indent=4))
```

*(LF11a)* 

**Wichtige HTTP-Statuscodes (Auszug):** `200 OK`, `201 Created`, `400 Bad Request`, `404 Not Found`, `500 Internal Server Error` *(LF11a)*. 

### 4) **DB-Zugriff mit Try/Finally & Ressourcenschluss** (Java) <span style="background:#e0f0ff;">LF8</span>

*Bezug: Robuste Fehlerbehandlung; kontrollierte DB-Änderung (CREATE TABLE).* *(LF8)* 

```java
public class Program {
  public static void main(String[] args) {
    MySQLConnection mySqlConnection = null;
    try {
      mySqlConnection = new MySQLConnection();
      mySqlConnection.create();

      String sqlStatement =
        "CREATE TABLE Kontinent" +
        "(KontinentID INTEGER not NULL, " +
        "Bezeichnung VARCHAR(100), " +
        "PRIMARY KEY (KontinentID))";

      mySqlConnection.updateDB(sqlStatement);
      System.out.println("SQL-Anweisung erfolgreich ausgeführt");
    } catch (Exception e) {
      e.printStackTrace();
    } finally {
      if (mySqlConnection != null) { mySqlConnection.close(); }
    }
  }
}
```

*(LF8)* 

---

## 🔄 Methoden, Ziele, Prozessschritte (Auszug)

**Methoden (Softwareebene):** **Validierung**, **Auth/Zugriffskontrolle**, **verschlüsselte Übertragung (HTTPS)**, **Protokollierung**, **SQLi-Vermeidung**, **Unit-/Automated Tests** *(LF8, LF11a)*.

**Ziele:** **CIA-Schutzziele** (Vertraulichkeit, Integrität, Verfügbarkeit) **durchgängig** im **Software-Lifecycle** sichern *(LF8)*. 

**Prozessschritte (Organisation/BSI-Grundschutz):** **Leitlinie zur Informationssicherheit** erstellen, **Sicherheitsprozess organisieren**, **Sicherheitskonzeption** erstellen, **umsetzen**, **aufrechterhalten/verbessern** *(LF4)*. 

---

## 📚 Begriffstabelle

| **Begriff**                        | **Definition**                                                                         | **Quelle** |
| ---------------------------------- | -------------------------------------------------------------------------------------- | ---------- |
| **Security by Design**             | Von Beginn an auf **Sicherheit** ausgelegte Softwareentwicklung.                       | LF8        |
| **Privacy by Design**              | **Datenschutz** wird im **gesamten Engineering-Prozess** berücksichtigt (DSGVO-Basis). | LF8        |
| **Minimalprinzip**                 | **Nur notwendige Berechtigungen** vergeben.                                            | LF8        |
| **Zugriffs-Überwachung**           | **Jeden Zugriff prüfen**; unberechtigte Zugriffe verhindern.                           | LF8        |
| **Mehrere Sicherheitsebenen**      | **Defense in Depth**: Schichten kompensieren Schwachstellen.                           | LF8        |
| **Fail-secure**                    | **Sicherer Ausfall** mit **sicheren Defaults**.                                        | LF8        |
| **Benutzerfreundliche Sicherheit** | **Usability** der Sicherheitsmechanismen sicherstellen.                                | LF8        |
| **TOM (Auswahl)**                  | **MFA/SSO, Protokollierung, Verschlüsselung/VPN, Rollen/Rechte, Patch-Mgmt, Backups**. | LF4, LF9   |

---

## ✅ Kurzfazit

**Security by Design** nach LF8 fordert **frühe, durchgängige** Berücksichtigung von **Sicherheitsprinzipien** in Architektur, Design und Implementierung (z. B. **Minimalprinzip**, **Defense in Depth**, **Fail-secure**, **Logging**). Diese **Software-Maßnahmen** werden **organisatorisch** über **TOM** und **BSI-Grundschutz** ergänzt, inkl. **MFA**, **Rechte-/Rollen-Konzept**, **Protokollierung**, **Patch-Management** *(LF8, LF4, LF9)*.


