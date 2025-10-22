# 🧭 **Rahmenbedingungen der IT-Sicherheitsberatung (Öffentliche Hand)** <span style="background:#e0f0ff;">LF4, LF9, LF11a</span>

**Ziel:** Die folgenden **technologischen**, **organisatorischen**, **rechtlichen** und **ethischen** Rahmenbedingungen strukturieren die Planung, Ausschreibung und Umsetzung von IT-Sicherheitsmaßnahmen in Behörden – ausschließlich auf Basis der vorliegenden Lernfeld-Materialien. *(LF4, LF9)*

---

## 🧩 **Technologisch**

* **Netz- & Hosting-Anforderungen:** Bereitstellungs- und Hosting-Pakete sollten **DNSSEC**, **DDoS-Schutz**, **IPv6**, **konfigurierbare DNS-Records (A, AAAA, MX, CNAME, TXT, SRV, NS)**, **IMAP/SMTP/POP**, **FTPS/SSH**, **Cron-Jobs**, **SSL-Zertifikate** sowie Optionen für **PHP/Python/NodeJS/Ruby** umfassen; Speicher/DB-Anzahl, Auto-Installer und Laufzeiten sind zu berücksichtigen. *(LF9)*
* **Architekturen & Zero-Trust:** Für standortübergreifende Behördennetze werden **SD-WAN/SASE**, **Makro- und Mikrosegmentierung**, **NGFW** und **Zero-Trust-Zugriffskontrollen** genannt (Kipling-Methode: Wer/Was/Wann/Wo/Warum/Wie). *(LF9)* 
* **Sicherheitsprozess als Technik-Rahmen:** BSI-Vorgehen mit **Sicherheitsleitlinie → Sicherheitskonzept → Strukturanalyse → Schutzbedarfsfeststellung**; Netzplan, IT-Systeme, Räume und Kommunikationsschnittstellen sind zu erheben. *(LF4)*
* **Beispiel – REST/HTTP im Betrieb (für Prüf-/Monitoring-Skripte):** **REST** folgt dem **Client-Server-Modell**, nutzt **HTTP-Methoden (GET/POST/PUT/DELETE)** und **Statuscodes** (2xx Erfolg, 4xx Clientfehler, 5xx Serverfehler). *(LF11a)*

### 🧪 Beispielcode (Technologie-Illustration – REST-GET, Statuscode prüfen) *(LF11a)*

```python
import requests, json
base_url = "https://api.openweathermap.org/data/2.5/weather?"
API_key = "API_KEY"       # Schlüssel einfügen
city = "Berlin"
url = f"{base_url}appid={API_key}&q={city}"
resp = requests.get(url)
print(resp.status_code)   # z. B. 200/404/500
print(json.dumps(resp.json(), indent=2))
```

*Zeigt den technologischen Bezug zu **HTTP-Methoden/Statuscodes** für Betriebsprüfungen und Fehlermeldungen.* 

---

## 🏗️ **Organisatorisch**

* **Verantwortung der Leitung & Leitlinie:** Die **oberste Leitung** initiiert den Sicherheitsprozess, stellt **Ressourcen** bereit und verabschiedet eine **Sicherheitsleitlinie** (Geltungsbereich, Prinzipien/Ziele, organisatorischer Rahmen, Folgen bei Verstößen). *(LF4)*
* **Rollen & Zuständigkeiten:** **ISB/IT-Sicherheitsbeauftragte**, **Informationssicherheitsbeauftragte** und **Datenschutzbeauftragte** übernehmen operative Aufgaben; Vertretungsregelungen und **aktualisierte Richtlinien/ISMS** sind sicherzustellen. *(LF4)* 
* **Prozess & Dokumentation:** Organisation des Sicherheitsprozesses inkl. **Vorgehensweise, Kommunikation, Terminplan, Protokollierung, Dokumentenorganisation**; **Schulungen/Sensibilisierung (ORP.3)** werden explizit empfohlen. *(LF4, LF9)*
* **BSI-Bausteine als Orga-Leitplanken:** u. a. **ISMS.1**, **ORP.3 Schulung**, **ORP.4 Identitäts-/Berechtigungsmanagement**, **OPS 1.x Administration/Änderungsmanagement/Protokollierung**, **CON 1–3 (Krypto, Datenschutz, Backup)**. *(LF9)* 

---

## ⚖️ **Rechtlich**

* **Kernnormen & Aufsicht:** **IT-Sicherheitsgesetz (IT-SiG)**, **BSIG**, **EU-DSGVO**, **BDSG**; Bußgelder bis **20 Mio. € / 4 % Umsatz**; Telekommunikationsanbieter müssen **Stand-der-Technik-IT-Sicherheitsmaßnahmen** betreiben, über **Schadprogramme** informieren und **Störungen melden**. *(LF4)*
* **Datenschutz-Pflichten (Auszug):** **Verzeichnis der Verarbeitungstätigkeiten**, **Dokumentationspflicht**, **Bestellung DSB (Art. 37 DSGVO, § 38 BDSG)**; Betroffenenrechte von **Auskunft** bis **Löschung/„Recht auf Vergessenwerden“**. *(LF4)* 
* **Vergaberecht/Transparenz:** Öffentliche Auftraggeber beachten **Vergabeverordnungen (VOB/A, VOL/A, VOF)**, **Verfahrensart** und **Veröffentlichungsweite**; **Leistungs- und Zuschlagskriterien** (z. B. Qualität, Preis, Lebenszykluskosten) müssen **in der Bekanntmachung offengelegt** werden; **Nutzwertanalyse** zur Ermittlung des wirtschaftlichsten Angebots. *(LF9)*
* **Lizenzen/OSS:** Rechtliche Bewertung und Auswahl von **Lizenzmodellen** (z. B. **Open-Source-Initiative-Lizenzen** wie **Apache 2.0, MIT, GPL/LGPL, MPL**; Überblick zu **AGPL**). *(LF9)* 

---

## 🧠 **Ethisch**

* **Explizite Ethikleitlinien** werden in den vorliegenden Lernfeldern nicht als eigener Katalog ausgeführt; jedoch werden **Compliance-Anforderungen** (Korruptionsprävention, Vermeidung von Kollusion/Vetternwirtschaft) und **Transparenz** in Vergabeprozessen betont. *(LF9)* 
* **Praktische Konsequenz:** Ethische Grundsätze spiegeln sich in **offengelegten Zuschlagskriterien**, **geregelten Verfahren** und **Dokumentations-/Nachvollziehbarkeitspflichten** wider. *(LF9)* 

---

## 🗂️ **Kurz-Checkliste für Vergabeunterlagen (Rahmenbedingungen)**

1. **Technologisch:** DNSSEC, DDoS-Schutz, IPv6, SSH/FTPS, E-Mail-Protokolle, SSL-Zertifikate, Skript-/Laufzeitumgebungen, Cron-Jobs; Architekturprinzipien (SD-WAN/SASE, Segmentierung, Zero-Trust). *(LF9)*
2. **Organisatorisch:** Leitlinie beschlossen, Rollen (ISB/DSB) benannt, Schulung/Sensibilisierung geplant, Prozess-/Dokuvorgaben fixiert. *(LF4)*
3. **Rechtlich:** DSGVO/BDSG/IT-SiG/BSIG einhalten, Betroffenenrechte/TOM dokumentieren, Vergabeverfahren inkl. **offengelegter Kriterien** ausweisen; Lizenzfragen klären. *(LF4, LF9)*
4. **Ethisch/Compliance:** Regeln gegen **Korruption/Kollusion** in Verfahren, nachvollziehbare Entscheidungen (Nutzwertanalyse). *(LF9)* 

---

## 📚 **Begriffstabelle**

| Begriff                      | Definition                                                                                            | Quelle |
| ---------------------------- | ----------------------------------------------------------------------------------------------------- | ------ |
| **Sicherheitsleitlinie**     | Grundsatzdokument der Leitung: Ziele, Prinzipien, Geltungsbereich, Orga-Rahmen, Folgen bei Verstößen. | LF4    |
| **Strukturanalyse**          | Erhebung von **Netzplan**, **IT-Systemen**, **Räumen** und **Kommunikationsschnittstellen**.          | LF4    |
| **Zero-Trust/Segmentierung** | Schutz auf Mikroperimeter-Ebene mit **NGFW**, strengen Zugriffsregeln und Segmentierung.              | LF9    |
| **Vergabe-Transparenz**      | Veröffentlichung von **Leistungs-/Zuschlagskriterien** in der Bekanntmachung.                         | LF9    |
| **DNSSEC/DDoS (Provider)**   | Technische Betriebsanforderungen im Webhosting/Netzbetrieb.                                           | LF9    |

---

