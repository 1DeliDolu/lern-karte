# 🎣 Identitätsdiebstahl (Phishing) <span style="background:#e0f0ff;">LF4, LF9</span>

**Identitätsdiebstahl (Phishing)** ist eine Form des **Social Engineering**, bei der Angreifer Personen gezielt dazu bringen, **Zugangsdaten** oder andere sensible Informationen preiszugeben, um Schutzmaßnahmen zu umgehen, Systeme zu kompromittieren oder weitere Betrugshandlungen (z. B. Geldüberweisungen) auszulösen. *(LF4)* 
Im **BSI-Gefährdungskatalog** wird Identitätsdiebstahl ausdrücklich als Bedrohung (**G 0.36**) geführt; zugehörige Social-Engineering-Gefährdungen umfassen u. a. **Ausspähen**, **Offenlegung schützenswerter Informationen** und **Missbrauch personenbezogener Daten**. *(LF4)* 

---

## 🧭 Einordnung & Ziele

Phishing zielt auf **Zugangsdaten**, **personenbezogene Daten** und **interne Informationen** und gehört damit zu den typischen **Angriffsarten/-zielen** moderner Cyberangriffe (u. a. **Informations- & Datendiebstahl**, **Täuschung**, **Social Engineering**). *(LF4)* 

---

## 🕷️ Phishing-Varianten & Social-Engineering-Beispiele

* **Phishing per E-Mail/Message**: massenhaft versendete Nachrichten (oft via **Spam/Malware-Spam**) mit Links/Anhängen zu schadhaften Seiten; **Ziel**: „Abfischen“ von Zugangsdaten. *(LF4)* 
* **Spear-Phishing**: gezielte, personalisierte Mails auf Basis zuvor gesammelter Daten. *(LF4)* 
* **Hoaxes/Skimming**: Falschmeldungen bzw. Köder-Mails (z. B. Gewinnversprechen), die zu Handlungen oder Dateneingaben verleiten. *(LF4)* 
* **Angler-Phishing** (über soziale Netzwerke): Betrüger geben sich als **Kundenservice** aus und ziehen Gespräche auf **Fake-Accounts/Fake-Webpräsenzen**. *(LF4)* 
* **CEO-Fraud („Chef-Masche“)**: vermeintliche Chefanweisungen (oft an Buchhaltung), um Überweisungen oder Datenweitergaben zu erzwingen. *(LF4)* 

**Hinweis zur Prävention bei Hoaxes/Kettenbriefen:** **sofort löschen, keinesfalls weiterleiten.** *(LF4)* 

---

## 🧪 Erkennung: typische Indikatoren

* **Seriosität von Absender & Inhalt prüfen**, besonders bei Aufforderungen zur Weiterleitung, Dateneingabe oder Link-Klicks. *(LF4)* 
* **Spam/Phishing-Kontext**: Massenversand, ungewöhnliche Anhänge/Links, Dringlichkeits- oder Droh-Rhetorik, Grammatik-/Layout-Auffälligkeiten. *(LF4)* 
* **Protokollierung/Monitoring** (z. B. nach IT-Grundschutz-Bausteinen) zur Nachvollziehbarkeit verdächtiger Zugriffe/Anmeldungen. *(LF9)* 

---

## 🛡️ Präventive Maßnahmen (technisch & organisatorisch)

### Identitäts- & Zugangsschutz

* **Kennwortrichtlinien** verbindlich regeln (IT-Grundschutz **ORP.4**), **geheime/individuelle Passwörter**, **unbeobachtete Eingabe**. *(LF4)* 
* **Sichere Passwörter** nach empfohlenen Kriterien (z. B. Merksatz-Methode). *(LF4)* 
* **Zwei-/Multi-Faktor-Authentifizierung (MFA)** und ggf. **Single Sign-On (SSO)** einsetzen – **erschwert Identitätsdiebstahl** maßgeblich. *(LF4, LF9)*

### Kommunikations- & E-Mail-Sicherheit

* **Whitelisting/Filter** auf Client- und Serverseite nutzen (nur vertrauenswürdige Quellen/Apps zulassen). *(LF4)* 
* **Spam/Phishing-Schutz** organisatorisch verankern: Schulung, Löschregeln für Hoaxes/Kettenbriefe, vorsichtiger Umgang mit Links/Anhängen. *(LF4)* 
* **Mail-Server korrekt konfigurieren** (z. B. für Benachrichtigungen/Passwort-Reset), damit legitime Sicherheits-Mails zuverlässig ankommen. *(LF9)* 

### Mitarbeiter-Sensibilisierung & Rollen

* **BSI-Baustein ORP.3** betont **Sensibilisierung/Schulung** gegen Social-Engineering-Tricks; typische Bedrohungen inkl. **Identitätsdiebstahl (G 0.36)**, **Social Engineering (G 0.42)**. *(LF4)* 
* Sensibilisierung besonders bei **mobilen Arbeitskonzepten/Bring-Your-Own-Device** erforderlich. *(LF4)* 

### Technisch-organisatorische Maßnahmen (TOM) mit Bezug zur Phishing-Abwehr

* **Zugang/Zugriff/Zutritt** absichern, **Verschlüsselung**, **VPN** für geschützte Übertragung, **Protokollierung**, **Backup/Notfallpläne**. *(LF4)* 
* **Endpoint-Security**, **MFA/SSO**, **VPN**, **Mitarbeiter-Schulung** als Teil der **Enduser-Security**. *(LF9)* 

---

## 🚨 Reaktion & Nachsorge

Phishing gehört in die **Detektion/-Reaktion (DER)**-Sicht des IT-Grundschutzes; **Protokollierung** und strukturierte **Vorfallsbearbeitung** sind zentrale Elemente der Wirksamkeitsprüfung. *(LF4, LF9)*

---

## ⚖️ Rechtlicher Rahmen

* **EU-DSGVO (Art. 24, 32, 83)**: fordert **angemessene TOM** inkl. **Pseudonymisierung/Verschlüsselung**; Bußgelder bis **20 Mio. €** bzw. **4 %** Umsatz. *(LF4)* 
* **BDSG**: **TOM** im **Sicherheitskonzept** explizit festlegen und umsetzen. *(LF9)* 
* **BSIG/IT-SiG**: Pflichten für Betreiber und **BSI**-Befugnisse; Schutz digitaler Dienste und **Meldepflichten** für erhebliche Störungen. *(LF4)* 

---

## 🧰 Praxisnahe Hinweise & Beispiele (aus den LFs)

* **E-Mail-Server konfigurieren** (SMTP/SSL/TLS, Auth): notwendig für sichere **Passwort-Resets/Benachrichtigungen** – reduziert Missbrauchsflächen rund um Kontowiederherstellung. *(LF9)* 
* **Klassifizierung von Spam/Phishing** (Phishing, **Spear-Phishing**, **Hoaxes**, **Skimming**) zur **Awareness**; klare **Lösch-/Melde-Regeln**. *(LF4)* 
* **Sensibilisierungskampagnen** (z. B. Poster/Präsentationen) zur Phishing-Prävention empfohlen. *(LF4)* 

---

## 📊 Begriffe kompakt

| Begriff             | Definition                                                                                    | Quelle     |
| ------------------- | --------------------------------------------------------------------------------------------- | ---------- |
| **Phishing**        | Trickbetrug zur Erlangung vertraulicher Daten (z. B. Passwörter) per E-Mail/Web/Message.      | (LF4)      |
| **Spear-Phishing**  | Zielgerichtetes, personalisiertes Phishing mit vorab beschafften Daten.                       | (LF4)      |
| **Angler-Phishing** | Vortäuschen von Kundenservice in sozialen Medien; Umlenken auf Fake-Accounts.                 | (LF4)      |
| **CEO-Fraud**       | „Chef-Masche“: gefälschte Chefanweisungen zur Auslösung kritischer Handlungen.                | (LF4)      |
| **Whitelisting**    | Zulassen nur **vertrauenswürdiger Quellen/Apps** zur Reduktion von Phishing-/Malware-Risiken. | (LF4)      |
| **MFA/SSO**         | Mehrfaktor-Anmeldung bzw. Einmalanmeldung – **erschweren Identitätsdiebstahl**.               | (LF4, LF9) |
| **ORP.3**           | BSI-Baustein „**Sensibilisierung & Schulung**“ (u. a. G 0.36, G 0.42).                        | (LF4)      |

---

## ⚙️ Prozessschritte gegen Identitätsdiebstahl (Phishing)

1. **Risiko- & Schutzbedarfsanalyse**: relevante Informationswerte, Prozesse, Systeme priorisieren (IT-Grundschutz-Vorgehen). *(LF4)* 
2. **Organisatorische Leitplanken**: **Kennwortrichtlinien** (ORP.4), Rollen/Verantwortlichkeiten, Meldewege. *(LF4)*
3. **Technische Härtung**: **MFA/SSO**, **Whitelisting**, **Spam-Filter**, **VPN/ Verschlüsselung**, **Protokollierung**. *(LF4, LF9)*
4. **Awareness & Training**: regelmäßige **Phishing-Schulungen** (z. B. Hoax-Regeln, CEO-Fraud-Szenarien). *(LF4)*
5. **Incident-Response & Nachsorge**: Erkennung, Eindämmung, Wiederherstellung, Lessons Learned (DER-Sicht). *(LF4, LF9)*

---

## 🧪 Beispiel (didaktisch)

**Klassifizierungsübung:** Ordnen Sie E-Mail-Beispiele den Kategorien **Phishing**, **Spear-Phishing**, **Hoax**, **Skimming** zu und begründen Sie die Zuordnung; definierte Lösch-/Melde-Regeln anwenden. *(LF4)* 

---

### 💡 Hinweis zu Beispielcode

Die bereitgestellten Lernfeld-PDFs enthalten **keine konkreten Programm-/Skriptbeispiele** zur Phishing-Erkennung oder -Abwehr; es werden Verfahren, Maßnahmen und Konfigurationen (z. B. E-Mail-Server) beschrieben. **Es wird daher kein Code ergänzt.** *(LF4, LF9)*

Wenn du möchtest, erstelle ich dir daraus eine **Checkliste** (Awareness-Training, MFA-Rollout, Whitelisting-Policy) oder ein **Kurz-Audit-Template** (Phishing-Kontrollen nach ORP.3/ORP.4) – jeweils **nur** aus den LF-Inhalten abgeleitet.

---