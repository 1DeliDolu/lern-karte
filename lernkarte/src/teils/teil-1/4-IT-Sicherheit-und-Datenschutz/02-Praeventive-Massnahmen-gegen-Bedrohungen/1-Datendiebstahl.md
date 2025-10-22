# 🔐 Datendiebstahl <span style="background:#e0f0ff;">LF4, LF9, LF8, LF2</span>

**Datendiebstahl** bezeichnet das unbefugte Erlangen bzw. Offenlegen schützenswerter Informationen (z. B. Unternehmens- oder Personendaten) und zählt zu den zentralen **Angriffs­zielen** von Cyberangriffen neben Erpressung und Ideendiebstahl. *(LF4)* 
Im BSI-Gefährdungsmodell wird Datendiebstahl durch Gefährdungen wie **Offenlegung schützenswerter Informationen (G 0.19)**, **Ausspähen/Abhören** und **Missbrauch personenbezogener Daten (G 0.38)** konkretisiert. *(LF9)* 

---

## 🧭 Einordnung & Schutzziele

Datendiebstahl verletzt die **Schutzziele** der Informationssicherheit: **Vertraulichkeit**, **Integrität** (z. B. Manipulation) und **Verfügbarkeit** (Folgeschäden, Ausfall). *(LF9)* 
In einem **BSI-IT-Grundschutz**-basierten **ISMS** wird Datendiebstahl systematisch über Schutzbedarfs- und Risikoanalysen adressiert. *(LF4)* 

---

## 🕷️ Typische Angriffsvektoren & -arten

* **Angriffsziele:** u. a. **Datendiebstahl**, **Diebstahl personenbezogener Daten**, **Erpressung**. *(LF4)* 
* **Angriffswege/-objekte:** Datenkommunikation, **Netzwerk**, **Web**, **E-Mail**, **Datenspeicher/USB**, **IoT/Hardware**, **Protokolle/OS/Software**, **Mensch/Social Engineering**, teils auch **KI-gestützt**. *(LF4)* 
* **Angriffstechniken:** Code-Injection, Network-Angriffe, **Man-in-the-Middle**, DoS/DDoS (Ablenkung), **Malware** (Trojaner, **Ransomware**) u. a. *(LF4)* 
* **Social Engineering/Phishing:** gezielte Täuschung zum Preisgeben von Daten; BSI-Baustein **ORP.3** nennt u. a. **Identitätsdiebstahl (G 0.36)**, **Missbrauch personenbezogener Daten**, **Social Engineering (G 0.42)** als Bedrohungen – daher **Sensibilisierung & Schulung**. *(LF4)* 

---

## 🛡️ Präventive Maßnahmen (TOM) gegen Datendiebstahl

Nach **DSGVO Art. 32** und **BSI-Grundschutz** sind **technisch-organisatorische Maßnahmen (TOM)** risikobasiert festzulegen (Wirksamkeit, Eignung, Praktikabilität etc.). *(LF4)* 

**Identitäts- & Zugriffsschutz**

* **Kennwortrichtlinien** und **starke Passwörter**; **Zwei-/Multi-Faktor-Authentifizierung (MFA)**, ggf. **SSO**, um **Identitätsdiebstahl** zu erschweren. *(LF4, LF9)*
* **Zutritts-, Zugangs-, Zugriffskontrolle** (Gebäude/Serverraum, System-Login, Berechtigungen/Rollen). *(LF4, LF9)*

**Netzwerk- & Systemschutz**

* **Firewall/DMZ**, **IDS/IPS**, **Netzsegmentierung**, **Port-Security**, **VPN** für geschützte Übertragung; **Endpoint-Protection** auf Clients. *(LF9)* 
* **Blacklisting/Whitelisting** (E-Mail/Web) zur Filterung schädlicher bzw. Freigabe vertrauenswürdiger Quellen. *(LF4)* 
* **Kryptografische Maßnahmen**: Verschlüsselung von **Speichern**, **Dateien** und **Übertragung** als Grundschutz. *(LF4)* 

**Daten- & Betriebssicherheit**

* **Backup nach 3-2-1-Regel** (3 Kopien, 2 Medien, 1 extern) gegen Datenverlust/Erpressungsfolgen. *(LF9)* 
* **Redundanz** (funktional/räumlich) und **USV/Patch-Management** zur Verfügbarkeits- und Integritätssicherung. *(LF9, LF4)*

**Organisation & Mensch**

* **Sicherheitskonzept** nach BSI, **Schutzbedarfsanalyse** je Zielobjekt (z. B. Software/Arbeitsplätze) und regelmäßige **Audits/Wirksamkeitsprüfungen**. *(LF4)*
* **Sensibilisierung/Schulung** (Phishing-Erkennung, sichere Mediennutzung); z. B. Tools wie **TOrPeDO** als Phishing-Warnung im Mail-Client. *(LF4)* 

**Spezielle Datenabflusspunkte**

* **Drucker/MFP**: Zugang schützen (Passwort/Karte), **verschlüsselte Speicherung**, **regelmäßiges Löschen** von Spool/Platten, Geräte nicht öffentlich platzieren. *(LF2)* 

---

## 🧪 Erkennung & Reaktion (Detection/DER-Schicht)

* **Monitoring & Protokollierung** (z. B. Syslogs, **SNMP**, **Wireshark**, Ping/Traceroute) zur Anomalie-Erkennung und Nachvollziehbarkeit. *(LF9)* 
* **Vorfallsreaktion** ist Teil der IT-Grundschutz-Architektur (Schicht **DER** – Detektion & Reaktion). *(LF4)* 

---

## ⚖️ Rechtlicher Rahmen

* **DSGVO**: Art. 24/32 fordern angemessene TOM; **Bußgelder** bis 20 Mio. € oder 4 % Umsatz. *(LF4)* 
* **BDSG**: TOM im Sicherheitskonzept explizit festlegen und umsetzen. *(LF9)* 
* **BSIG/IT-SiG**: Anforderungen und Meldepflichten (insbes. KRITIS), BSI-Kompetenzen. *(LF4)* 

---

## 🧰 Praxisnahe Beispiele

* **Netzplan RECPLAST (BSI-Beispiel)**: zeigt Segmentierung/Perimeter (Router, Firewall, Switches, Server) als Grundlage zum Schutz vor Datendiebstahl. *(LF9)* 
* **Schutzbedarfsfeststellung „Software/Arbeitsplätze“ (JIKU)**: listet typische Gefährdungen (z. B. **unbekannte Schwachstellen**, **Datenverlust**, **fehlerhafte Rechtevergabe**) – Basis für priorisierte TOM. *(LF4)* 

---

## 📊 Begriffe kompakt

| Begriff               | Definition                                                                                    | Quelle     |
| --------------------- | --------------------------------------------------------------------------------------------- | ---------- |
| Datendiebstahl        | Unbefugtes Erlangen/Offenlegen schützenswerter Informationen als Angriffsziel                 | (LF4)      |
| Social Engineering    | Täuschung von Personen zum Erlangen von Informationen/Zugängen                                | (LF4)      |
| Identitätsdiebstahl   | Übernahme fremder Identität; im BSI-Modell als G 0.36 geführt                                 | (LF9)      |
| TOM                   | Technisch-organisatorische Maßnahmen nach DSGVO/BSI (z. B. Zugriff, Verschlüsselung, Backups) | (LF4, LF9) |
| 3-2-1-Backup          | 3 Kopien, 2 Medien, 1 externe Aufbewahrung                                                    | (LF9)      |
| Endpoint-Security/VPN | Schutz von Clients & verschlüsselte Übertragung                                               | (LF9)      |
| Passwort/MFA/SSO      | Starke Authentifizierung zur Erschwerung von Datendiebstahl                                   | (LF4, LF9) |

---

## ⚙️ Vorgehensmodell (kurz)

1. **Schutzbedarfsanalyse & Strukturanalyse** (Zielobjekte, Datenklassen, Prozesse) *(LF4)* 
2. **Netz- & Sicherheits­architektur planen** (Segmentierung, Perimeter, Rollen/Berechtigungen) *(LF9)* 
3. **TOM umsetzen** (Zugang/Zugriff, Verschlüsselung, Endpoint-/Netzschutz, Backups) *(LF4, LF9)*
4. **Schulen & sensibilisieren** (Phishing/Social Engineering) *(LF4)* 
5. **Monitoring & Audits** (Wirksamkeit prüfen, Logging, DER-Schicht/Incident-Response) *(LF9, LF4)*

---

### 💡 Hinweis zu Beispielcode

Die bereitgestellten Lernfeld-PDFs nennen Verfahren, Prozesse und Werkzeuge (z. B. IDS/IPS, VPN, Monitoring) – **konkrete Programm- oder Skript-Beispielcodes zum Thema Datensicherheit/-diebstahl sind darin nicht enthalten**. Daher werden hier **keine Codesnippets erfunden**, sondern ausschließlich die dokumentierten Maßnahmen, Prozesse und Beispiele dargestellt. *(LF4, LF9, LF2)*

---
