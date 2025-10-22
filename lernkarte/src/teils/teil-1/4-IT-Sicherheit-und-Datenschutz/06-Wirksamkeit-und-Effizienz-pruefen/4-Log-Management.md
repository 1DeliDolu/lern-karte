# 🧾 Log Management (Protokollierung) <span style="background:#e0f0ff;">LF4, LF8, LF9</span>

**Log Management** (im Material als **Protokollierung**/„**Log-Daten**“) bezeichnet das **Erfassen, Speichern und Auswerten sicherheitsrelevanter Ereignisse** in Systemen und Anwendungen, um Vorfälle **nachvollziehen**, **Ursachen beheben** und **Wirksamkeit von TOM** belegen zu können. (LF8, LF4)  

Im **Software-Kontext** sollen u. a. **fehlerhafte Anmeldeversuche**, **Exceptions**, **Fehler bei der Datenvalidierung**, **Änderungen an Berechtigungen**, **Administratoraktivitäten** und **Schreibzugriffe auf Daten** protokolliert werden. (LF8) 
Auf **System-/Client-Ebene** sind **alle sicherheitsrelevanten Ereignisse** (z. B. **unberechtigte Zugriffsversuche**) zu protokollieren; **Protokolle müssen aktiviert und regelmäßig überprüft** werden. (LF4) 
In den **TOM-Checklisten** werden **Protokollierung von Zugriffen** (Zugriffskontrolle) und **Protokollierung von Log-Daten** (Eingabekontrolle) explizit benannt. (LF4) 

> **Datenschutz beachten:** Bei der Protokollierung **personenbezogener Daten** sind die **aktuellen Datenschutzbestimmungen** einzuhalten. (LF8) 

---

## ⚙️ Ziele & Nutzen

* **Nachvollziehbarkeit von Sicherheitszwischenfällen** und **Fehlerursachen** für Support/Entwicklung. (LF8) 
* **Regelmäßige Überprüfung** der Sicherheit am **Client/System** durch aktive Protokollierung und Review. (LF4) 
* **Nachweis der umgesetzten TOM** und **Wirksamkeitsprüfung** (Audit, Evaluierung, Schwachstellenidentifikation, Zertifizierung). (LF4) 

---

## 🧩 Was wird protokolliert? (Auszug aus dem Material)

* **Anwendungs-/Sicherheitsereignisse:** fehlerhafte **Logins**, **Exceptions**, **Validierungsfehler**. (LF8) 
* **Berechtigungs-/Admin-Änderungen**, **Schreibzugriffe** auf Daten. (LF8) 
* **Zugriffe und Eingaben** auf personenbezogene Daten (**Log-Daten**). (LF4) 
* **Unberechtigte Zugriffsversuche** am **Client** (aktivieren & **regelmäßig prüfen**). (LF4) 

---

## 🛠️ Umsetzung im Betrieb

* **Log-Erzeugung:** **Log-Dateien/Protokolle** erstellen (Anwendungsebene). (LF8) 
* **Client-Logging einschalten** und **Log-Review** fest verankern (Prozess). (LF4) 
* **Zentrale Sicht & Auswertung:** Sicherheitsmanagement-Dashboards bieten **Log-Viewer** zur Anzeige von Ereignissen/Alerts und Reports. (LF9) 
* **Überwachung & Wartung automatisieren**, um **Aktivitäten/Datenflüsse** kontinuierlich zu überwachen. (LF9) 
* **Datenschutzkonforme Protokollierung** (Personenbezug nur im zulässigen Rahmen). (LF8) 

---

## 🔍 Wirksamkeit & Effizienz prüfen (TOM-Bezug)

1. **Plan-Ist-Abgleich der Logs:** Ist **das geforderte Ereignis-Set** (z. B. Logins, Berechtigungsänderungen, Schreibzugriffe) vollständig aktiviert? (LF8, LF4)  
2. **Regelmäßige Reviews:** **Protokolle regelmäßig prüfen** (Client/System) und Findings dokumentieren. (LF4) 
3. **Audit/Evaluierung:** **Audit, Prüfung, Evaluierung, Schwachstellenidentifikation** durchführen; Nachweise in **Zertifizierung (ISO 27001)** einbinden. (LF4) 
4. **Kontinuierliches Monitoring:** **Automatisierte Überwachung**/Alerts über zentrale **Log-Viewer**/**Dashboards** nutzen. (LF9)  
5. **Datenschutz-Check:** Logging gegen **Datenschutzbestimmungen** prüfen (Personenbezug, Erforderlichkeit). (LF8) 

---

## 💻 Beispielcode (Exceptions protokollieren – Auszug aus dem Material)

Im Java-Beispiel wird bei Fehlern eine **Exception-Ausgabe** vorgenommen (**Grundlage** für die im Material geforderte Protokollierung von **Exceptions**). (LF8)  

```java
try {
    // ... (Datenbankaktion)
    System.out.println("SQL-Anweisung erfolgreich ausgeführt");
} catch (Exception e) {
    e.printStackTrace();   // Exception protokollieren (Konsolen-Ausgabe)
} finally {
    if (mySqlConnection != null) { mySqlConnection.close(); }
}
```

> Hinweis: Das Material fordert explizit die **Protokollierung von Exceptions** und nennt als **Umsetzung** das **Erstellen von Log-Dateien/Protokollen**; die obige Konsolen-Ausgabe ist der gezeigte Code-Auszug. (LF8)  

---

## 🧪 Praxisbeispiele aus dem Material

* **Client-Sicht:** Protokollierung **aktivieren** und **Protokolle regelmäßig prüfen**, um **unberechtigte Zugriffe** zu erkennen. (LF4) 
* **Dashboard/Log-Viewer:** Zentrales **Control-Center** zeigt **Log-Viewer**, **Alerts** und **Reports** zur Bearbeitung von Vorfällen. (LF9) 

---

## 📚 Begriffstabelle

| Begriff                                  | Definition (aus dem Material)                                                                                                                                     | Quelle |
| ---------------------------------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------- | ------ |
| **Protokollierung/Log-Daten**            | Erfassung sicherheitsrelevanter Ereignisse (u. a. fehlerhafte Logins, **Exceptions**, Validierungsfehler, Rechte-Änderungen, Admin-Aktivitäten, Schreibzugriffe). | (LF8)  |
| **Zugriffs-/Eingabekontrolle (Logging)** | **Protokollierung von Zugriffen** (Zugriffskontrolle) und **Protokollierung von Log-Daten** (Eingabekontrolle) als TOM-Stichworte.                                | (LF4)  |
| **Client-Protokollierung**               | **Aktivieren** und **regelmäßig prüfen**; Erkennung unberechtigter Zugriffe.                                                                                      | (LF4)  |
| **Datenschutz bei Logs**                 | **Einhaltung** der **Datenschutzbestimmungen** bei Protokollierung personenbezogener Daten.                                                                       | (LF8)  |
| **Audit/Evaluierung**                    | **Wirksamkeit der TOM** durch **Audit, Prüfung, Evaluierung, Schwachstellenidentifikation**, ggf. **Zertifizierung**.                                             | (LF4)  |
| **Log-Viewer/Dashboard**                 | Zentrale Anzeige/Management von Sicherheitsereignissen, Alerts, Reports.                                                                                          | (LF9)  |

---

## ✅ Mini-Checkliste „Log Management“ (aus den LF-Inhalten abgeleitet)

* Ereignis-Set vollständig? (**Logins**, **Exceptions**, **Berechtigungen/Schreibzugriffe**). (LF8) 
* Protokollierung **aktiv** und **regelmäßig geprüft** (Client/System). (LF4) 
* **Zentrale Auswertung**/Log-Viewer im Einsatz; **Überwachung automatisiert**. (LF9)  
* **DSGVO/BDSG-konform** (Personenbezug minimieren, Erforderlichkeit prüfen). (LF8) 
* **Audit/Evaluierung** geplant und dokumentiert. (LF4) 

> **Quelle ausschließlich LF-Material:** Alle Aussagen und Beispiele stammen aus **LF4/LF8/LF9** und sind dort explizit so benannt. (LF4, LF8, LF9)     
