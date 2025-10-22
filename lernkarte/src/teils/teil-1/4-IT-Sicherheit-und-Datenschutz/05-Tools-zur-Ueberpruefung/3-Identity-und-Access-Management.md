# 🪪 Identity & Access Management (IAM) <span style="background:#e0f0ff;">LF4 · LF8 · LF9 · LF11a</span>

**Identity & Access Management (IAM)** wird in den Materialien als **„Identitäts- und Berechtigungsmanagement“** benannt und ist als **technisch-organisatorische Maßnahme (TOM)** fester Bestandteil eines Sicherheitskonzepts nach BSI/DSGVO. Ziel ist die **geregelte Identifizierung (Authentisierung) von Benutzern** und die **restriktive Vergabe von Rechten/Zugriffen** auf Systeme, Daten und Dienste. (LF4, LF9)

IAM unterstützt die in DSGVO/BSI geforderten **Schutzziele** (Vertraulichkeit, Integrität, Verfügbarkeit) und insbesondere die **Authentizität** als Eigenschaft, dass ein Kommunikationspartner tatsächlich derjenige ist, der er vorgibt zu sein (**Authentisierung** z. B. per Passwort, Chipkarte, Biometrie). (LF4) 

---

## 🎯 Ziele & Einordnung

* **Sicherer Zugang und Zugriff:** Umsetzung von **Zugangskontrolle** (z. B. sichere Passwörter, **Zwei-/Mehrfaktor-Authentifizierung**) und **Zugriffskontrolle** (Berechtigungskonzepte, Protokollierung). (LF4) 
* **Identitäts- & Berechtigungsverwaltung als TOM:** „**geeignetes Identitäts- und Berechtigungsmanagement**“ wird ausdrücklich als Baustein eines Sicherheitskonzepts gefordert. (LF4) 
* **Aktuelle Anmeldeverfahren:** **MFA** oder **Single Sign-on (SSO)**, ggf. als Teil eines **Zero-Trust-Ansatzes**, um Identitäten schnell zu prüfen und über ein **Access Management (IAM)** nur notwendige Ressourcen freizugeben. (LF9) 
* **Rechtlicher Rahmen:** **Art. 32 DSGVO** verlangt ein Verfahren zur **regelmäßigen Überprüfung/Bewertung/Evaluierung** der Wirksamkeit von Maßnahmen. (LF4) 

---

## 🧩 Kernbausteine (aus den PDFs)

* **Zugangskontrolle**: sichere Passwörter, **ZFA/MFA**, Systemsperren; physisch/organisatorisch geregelter Zutritt. (LF4) 
* **Zugriffskontrolle**: **Berechtigungskonzepte**, **Protokollierung** von Zugriffen, gesicherte Schnittstellen (USB/Netz), Verschlüsselung. (LF4) 
* **Benutzerauthentisierung**: PIN, Passwort, Zugangskarten, Biometrie. (LF4) 
* **Rollen & Rechte**: **Restriktive Rechtevergabe**, **Rollentrennung** (Benutzer vs. Administrator), **Rechte-/Rollenkonzepte**. (LF4, LF9)
* **Protokollierung/Eingabekontrolle**: sicherheitsrelevante Ereignisse (z. B. unberechtigte Zugriffe) **aktiv protokollieren** und **regelmäßig auswerten**. (LF4) 
* **Wiederkehrende Wirksamkeitsprüfung**: Audits/Prüfungen nach TOM, laufende Evaluierung nach Art. 32 DSGVO. (LF4)

---

## ⚙️ Prozessschritte für IAM (didaktisch aus den Inhalten abgeleitet)

1. **Schutzziele & Vorgaben klären:** DSGVO-Schutzziele (V, I, V) und BSI-Grundwerte inkl. **Authentizität** verstehen; TOM-Maßnahmen auswählen. (LF4)
2. **Rollen modellieren & trennen:** **Rollentrennung** (Benutzer/Administrator), **restriktive Rechtevergabe** als Standardmaßnahme. (LF4) 
3. **Anmeldeverfahren festlegen:** **MFA/SSO** einsetzen; **Zero-Trust** als Strategie, die bei der **Authentifizierung** ansetzt. (LF9) 
4. **Rechte zuweisen (Prinzip Mindestprivileg):** nur notwendige Rechte vergeben; **Berechtigungskonzepte** nutzen. (LF4) 
5. **Systemseitige Umsetzung:** z. B. **Datenbank-Benutzer und Rechte** (GRANT/REVOKE) sowie **Anwenderverwaltung** in Plattformen (z. B. **Nextcloud** → „**Über Benutzer** können Anwender eingerichtet werden“). (LF8, LF9)
6. **Protokollieren & überwachen:** Aktivieren der Protokollierung und **regelmäßige Prüfung** der Logs. (LF4) 
7. **Wirksamkeit prüfen & schulen:** Audits/Evaluierungen nach **Art. 32 DSGVO**; **Sensibilisierung/Verpflichtung** der Beschäftigten. (LF4)

---

## 🧪 Beispielcode & Konfigurationsbeispiele (aus den PDFs)

### 1) SQL-Rechteverwaltung (GRANT/REVOKE) – Datenbank-IAM (LF8)

**Syntax & Beispiele aus dem Material:** 

```sql
-- Rechte vergeben (Syntax aus dem PDF)
GRANT Rechteliste ON Objektname TO Benutzername [WITH GRANT OPTION];

-- Beispiel im PDF
GRANT INSERT, UPDATE ON Ortsverwaltung.Ort TO Schulz;

-- Rechte entziehen (Syntax aus dem PDF)
REVOKE Rechteliste ON Objektname FROM Benutzername;

-- Beispiel im PDF
REVOKE INSERT, UPDATE ON Ortsverwaltung.Ort FROM Schulz;

-- Benutzer entfernen (Beispiel im PDF)
DROP USER Schulz;
```

**Aufgabenbezug im Material:** „**Legen Sie einen Nutzer ‚Wald‘ mit dem Passwort ‚12xs38H‘ an** … **Geben Sie ‚Wald‘ Leserechte** … **Entziehen Sie** Einfüge-/Änderungs-/Löschrechte …“ (Aufgaben 16–18). (LF8) 

### 2) Programmlogik: DB-Zugriff mit Anmeldeinformationen (LF11a)

Die **Benutzerauthentifizierung** für den Verbindungsaufbau erfolgt über **Schlüssel-Wert-Paare** an die **Datenbankschnittstelle**; Ausführung von SQL-Befehlen über **executeUpdate/executeQuery**. (LF11a) 

```java
public void updateDB(String sql) {
    try {
        sqlStatement.executeUpdate(sql);
    } catch (SQLException e) {
        e.printStackTrace();
    }
}

public ResultSet getData(String sql) {
    try {
        return sqlStatement.executeQuery(sql);
    } catch (SQLException e) {
        e.printStackTrace();
    }
    return null;
}
```

**Hinweis aus dem Material:** Die Verbindung wird über die Schnittstelle mit **Anmeldedaten** aufgebaut; danach können Befehle ausgeführt und die Verbindung wieder geschlossen werden. (LF11a) 

### 3) Plattform-Beispiel: Benutzerverwaltung in Nextcloud (LF9)

In der Server-Konfiguration: „**Über Benutzer können weitere Anwender eingerichtet werden**“ (nach Installation/Konfiguration im Web-UI). (LF9) 

---

## 🔎 Methoden & Prinzipien (ausdrücklich genannt)

* **Sichere Passwörter** und **Kennwortrichtlinien** als verbindliche Unternehmensvorgaben; **MFA/SSO** erhöht die Sicherheit von Anmeldeverfahren. (LF4) 
* **Zero Trust** als ganzheitliche Strategie, die bei **Authentifizierung** und **Access Management** ansetzt. (LF9) 
* **BSI-Bausteine** mit direktem IAM-Bezug: **ORP.4 Identitäts- und Berechtigungsmanagement**, **SYS.1.1.A3 Restriktive Rechtevergabe**, **SYS.1.1.A4 Rollentrennung**, **APP.2.1 Verzeichnisdienst**, **APP.2.2 Active Directory** (Auszug). (LF9) 

---

## 📚 Begriffstabelle

| Begriff                                           | Definition                                                                             | Quelle   |
| ------------------------------------------------- | -------------------------------------------------------------------------------------- | -------- |
| **Identitäts- und Berechtigungsmanagement (IAM)** | TOM im Sicherheitskonzept zur Verwaltung von Identitäten und Rechten.                  | LF4, LF9 |
| **Zugangskontrolle**                              | Maßnahmen gegen unbefugten Zugang (z. B. sichere Passwörter, MFA).                     | LF4      |
| **Zugriffskontrolle**                             | Berechtigungskonzepte, Verschlüsselung, Protokollierung von Zugriffen.                 | LF4      |
| **Authentizität/Authentisierung**                 | Sicherstellen, dass der Partner ist, wer er vorgibt zu sein (Passwort/Chip/Biometrie). | LF4      |
| **MFA/SSO**                                       | Erhöhen die Sicherheit des Anmeldeverfahrens; SSO für zentralen Login.                 | LF4, LF9 |
| **Zero Trust**                                    | Strategie, die bei Authentifizierung/Access Management ansetzt.                        | LF9      |
| **Restriktive Rechtevergabe**                     | Standardmaßnahme: nur notwendige Rechte zuweisen.                                      | LF4, LF9 |
| **Rollentrennung**                                | Trennung von Benutzer-/Admin-Rechten.                                                  | LF4      |
| **Protokollierung/Eingabekontrolle**              | Sicherheitsrelevante Ereignisse protokollieren und prüfen.                             | LF4      |
| **Art. 32 DSGVO**                                 | Verfahren zur regelmäßigen Überprüfung/Bewertung/Evaluierung der Wirksamkeit.          | LF4      |
| **DB-Rechte (GRANT/REVOKE)**                      | SQL-Anweisungen zum Erteilen/Entziehen von Rechten; DROP USER-Beispiel.                | LF8      |

---

## ✅ Praxisbeispiele (kompakt)

* **Passwortrichtlinien & MFA/SSO** als feste TOM der **Zugangskontrolle** festlegen. (LF4) 
* **Rechtevergabe in Datenbanken** über **GRANT/REVOKE**, Benutzerverwaltung (z. B. DROP USER). (LF8) 
* **Benutzerverwaltung in Anwendungen/Plattformen** (Nextcloud-Web-UI: Benutzer anlegen). (LF9) 
* **Logs aktivieren & prüfen** (Protokollierung), **Wirksamkeit regelmäßig auditieren** (Art. 32 DSGVO). (LF4)

---

### Fazit

IAM wird in den Materialien als **zentrales TOM** mit klaren Bausteinen beschrieben: **Authentisierung (inkl. MFA/SSO/Zero Trust), Rollen-/Rechtevergabe (restriktiv, Rollentrennung), Protokollierung** und **regelmäßige Wirksamkeitsprüfung** – mit konkreten Beispielen u. a. für **SQL-Rechteverwaltung** und **Benutzeradministration** in Anwendungen. (LF4, LF8, LF9, LF11a)
