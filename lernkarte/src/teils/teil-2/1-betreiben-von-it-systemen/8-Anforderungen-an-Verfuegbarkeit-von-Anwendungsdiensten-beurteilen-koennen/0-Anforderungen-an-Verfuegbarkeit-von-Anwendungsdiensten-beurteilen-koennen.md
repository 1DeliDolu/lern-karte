# 🛡️ Anforderungen an die **Verfügbarkeit** von Anwendungsdiensten (Echtzeitkommunikation, Mailserver, Webserver, Groupware, Datenbanken) <span style="background:#e0f0ff;">LF9</span>

**Verfügbarkeit** ist ein zentrales **Schutzziel** der Informationssicherheit und wird im Rahmen der **Schutzbedarfs- und Risikoanalyse** systematisch bewertet (C/I/A mit *A = Availability*). Dazu werden Eintrittswahrscheinlichkeit, Auswirkungen und Risiko pro Zielobjekt (Server, Netze, Räume) herangezogen, um Maßnahmen abzuleiten. *(LF9)* 

Zur Beurteilung der Verfügbarkeit werden in einem **Lastenheft** u. a. abgefragt: gewünschte **Verfügbarkeit** (z. B. „ständig, 24/7“), **maximale Ausfallzeit** (z. B. „< 2 Stunden“), **SLA-Basisvertrag** bei externer Administration sowie die Bedeutung von **Backup-Sicherung**. *(LF9)* 

**Redundanz** und **Backups** sind Grundpfeiler der Verfügbarkeit: die **3-2-1-Regel** (3 Kopien, 2 Medien, 1 Kopie extern) sowie **räumliche** und **funktionelle Redundanz** senken das Risiko von Ausfällen. *(LF9)* 

**Architekturbausteine** für hohe Verfügbarkeit umfassen **Load Balancer** (Einstiegspunkt für **Cluster**) und **Reverse Proxies** (Verteilung eingehender Anfragen), ebenso **Back-up-Server** als **Standby-Systeme** bei Ausfall des Primärsystems. *(LF9)*  

**Betriebs- und Provider-Aspekte**: Webhosting-/Control-Panel-Pakete nennen explizit **DDoS-Schutz**, **DNSSEC** (sofern TLD unterstützt), **DNS-Records** (A/AAAA/**MX**/CNAME/TXT/SRV/NS), **IPv6**, **Cron-Jobs** je Anwendung sowie **eigene VPS/VDS** für isolierten Betrieb. *(LF9)* 

**Netz**: Für Echtzeit- und Geschäftsdienste sind **Bandbreite, Latenz, Verfügbarkeit** sowie **QoS** (Priorisierung von Traffic) zu berücksichtigen; **Switches** bieten QoS und ACLs zur gezielten Steuerung. *(LF9)*  

---

## 🔎 Verfügbarkeitsbeurteilung je **Anwendungsdienst**

### 🎥 **Echtzeitkommunikation** (z. B. **Videokonferenz**)

* Typische Lösungen: **Jitsi**, **Nextcloud Talk**, **BigBlueButton**; diese sind als reale Anwendungsfälle genannt. *(LF9)* 
* **Technischer Fokus**: Einsatz von **UDP** für Audio/Video-Streams (**Transportschicht**) und **RTP/SIP** auf Anwendungsebene; geringe **Latenz** ist entscheidend. *(LF9)* 
* **Netzwerk & QoS**: Priorisierung per **Quality of Service**; Switch-Auswahl berücksichtigt QoS/ACLs und hohe Durchsätze (z. B. 10GBASE-T/Glasfaser). *(LF9)* 
* **Skalierung & Schutz**: **Load Balancer/Reverse Proxy** für horizontale Skalierung, **DDoS-Schutz** auf Provider-/Hosting-Ebene. *(LF9)*  
* **Praxisbezug**: In Beispiel-Lastenheften wird u. a. **Telefonie/Video** als Anforderung genannt (z. B. Kleinstunternehmen mit Videokonferenzen). *(LF9)* 

### ✉️ **Mailserver**

* **Dienstart**: **Mail-Server** als klassischer Servertyp; Zugriff via **Webmail, IMAP, SMTP, POP** wird bei Hosting-Paketen vorgesehen. *(LF3, LF9)*  
* **Namensdienste & Erreichbarkeit**: **DNSSEC** (wenn TLD unterstützt) und **DNS-Records** inkl. **MX** sind konfigurierbar—relevant für zuverlässige Zustellung. *(LF9)* 
* **Abwehrmaßnahmen**: **DDoS-Schutz** wird bereitgestellt; **IPv6**-Erreichbarkeit gehört zum Leistungsumfang. *(LF9)* 
* **Betrieb**: **Backups** über Control-Panel (inkl. externem Storage) und **Cron-Jobs** pro Anwendung sichern kontinuierlichen Betrieb. *(LF9)* 

### 🌐 **Webserver**

* **Skalierung**: **Load Balancer** als Einstiegspunkt in **Cluster**; **Reverse Proxy** verteilt URLs auf interne Server—wichtig für Ausfallsicherheit/Horizontal-Scaling. *(LF9)*  
* **Providerfunktionen**: **DDoS-Schutz**, **SSL/TLS**-Zertifikate, **IPv6**, **eigener VPS/VDS** statt Shared Host für bessere Isolation und Verfügbarkeit. *(LF9)* 
* **Wartung**: Automatisierte Installationen/Updates und **Backup**-Optionen über Control-Panel erhöhen Betriebsstabilität. *(LF9)* 

### 👥 **Groupware** (z. B. **Nextcloud**)

* **Funktion**: **Nextcloud** als **Groupware** (Dateien, Messaging, Videokonferenzen, Kalender, Office, Kanban) – komplette Browser-Nutzung. *(LF9)* 
* **Betrieb/Administration**: **Managed Services** können Installation, **Staging/Klonen/Sichern** (z. B. via cPanel) übernehmen; Rollen/SLA je Mitwirkungsstufe. *(LF9)* 
* **Hochverfügbarkeit**: Betrieb hinter **Reverse Proxy/Load Balancer** und regelmäßige **Backups**; **DMZ** für externe Zugriffe in größeren Umgebungen. *(LF9)*  

### 🗄️ **Datenbanken**

* **Abhängigkeiten**: Viele Webanwendungen benötigen **Datenbanken** (z. B. MySQL) – zentrale Komponente für die Gesamtverfügbarkeit. *(LF9)* 
* **Storage & Ausfallsicherheit**: Auswahl von **NAS/Storage** mit **RAID**, **Redundantem Netzteil**, hoher **Schreib/Leserate** und **Link-Aggregation** zur Durchsatzsteigerung. *(LF9)* 
* **Backup & Wiederanlauf**: **3-2-1-Regel**, **Back-up-Speicher** und **externe** Ablagen sind ausdrücklich gefordert. *(LF9)*  

---

## ⚙️ Prozessschritte zur **Verfügbarkeitsabsicherung**

1. **Anforderungsanalyse & Lastenheft**: Festlegen von **Verfügbarkeit (24/7)**, **max. Ausfallzeit**, **SLA** und **Backup-Sicherung**. *(LF9)* 
2. **Pflichtenheft**: Nicht-funktionale Anforderungen dokumentieren (**Performance, Skalierbarkeit, Monitoring**; rechtliche/organisatorische Punkte inkl. **Lizenzen, Verträge/SLA**). *(LF9)* 
3. **Architektur & Umsetzung**: Einsatz von **Load Balancer/Reverse Proxy/Back-up-Server**, **QoS/ACLs**, **DDoS-Schutz**, **DNSSEC**/**DNS-Records**; **eigener VPS/VDS** bei Bedarf. *(LF9)*   
4. **Monitoring & Dokumentation**: **Protokolldateien/Monitoring** (z. B. SNMP, Trace/Ping, Analyse-Tools) zur laufenden Verfügbarkeitsüberwachung. *(LF9)* 
5. **Betrieb & Wartung**: **Cron-Jobs**, **Backups**, **Updates**, **Managed Services** nach Kundenkompetenz; **SLA**-gerechte Reaktionszeiten. *(LF9)*  

---

## 🧪 Beispiel-Ausschnitte & Snippets (aus den Unterlagen)

### Beispiel 1 – **Firewall-Freigaben (ufw-Status)** (zur Erreichbarkeit von Diensten)

Auszug: Ports **22**, **80**, **443** sind erlaubt (IPv4/IPv6). *(LF9)* 

```
Status: active
22/tcp  ALLOW  Anywhere
80/tcp  ALLOW  Anywhere
443/tcp ALLOW  Anywhere
...
```

### Beispiel 2 – **Providerfunktionen für Web/Groupware/Mail**

**DNSSEC**, **DDoS-Schutz**, **MX/A/AAAA/CNAME/TXT/SRV/NS**, **IPv6**, **Cron-Jobs**, **Backups** – direkt in Control-Panels/Angeboten. *(LF9)* 

### Beispiel 3 – **Skalierungs-Bausteine**

**Load Balancer** (Einstieg in den **Cluster**), **Reverse Proxy** (URL-Verteilung), **Back-up-Server** (Standby). *(LF9)*  

---

## 📚 Begriffsklärungen (prägnant)

| Begriff                   | Definition                                                                                            | Quelle |
| ------------------------- | ----------------------------------------------------------------------------------------------------- | ------ |
| **Verfügbarkeit**         | Schutzziel der Informationssicherheit; in BSI-Gefährdungsbeurteilung und Risikoanalyse bewertet.      | LF9    |
| **Lastenheft**            | Erfasst u. a. 24/7-**Verfügbarkeit**, **max. Ausfallzeit**, **SLA**-Grundlagen, **Backup**-Bedeutung. | LF9    |
| **Redundanz**             | Mehrfach vorhandene Ressourcen (funktionell/räumlich/organisatorisch) zur Ausfallvorsorge.            | LF9    |
| **3-2-1-Backup**          | 3 Kopien, 2 Medien, 1 Kopie extern.                                                                   | LF9    |
| **Load Balancer**         | Einstiegspunkt; verteilt Sessions auf Cluster-Server.                                                 | LF9    |
| **Reverse Proxy**         | Verteilt eingehende Anfragen/URLs auf interne Server.                                                 | LF9    |
| **QoS**                   | Priorisierung von IP-Traffic (z. B. für Echtzeit).                                                    | LF9    |
| **DDoS-Schutz**           | Schutzfunktion in Hosting-Paketen für Web-Anwendungen.                                                | LF9    |
| **DNSSEC/DNS-Records**    | Signierte DNS-Auflösung / A, AAAA, **MX**, CNAME, TXT, SRV, NS.                                       | LF9    |
| **Groupware (Nextcloud)** | Team-Kollaboration (Dateien, Chat, Video, Kalender, Office) über Browser.                             | LF9    |
| **NAS/RAID**              | Storage mit RAID, Redundantem Netzteil, hoher I/O-Leistung.                                           | LF9    |

---

## 🎯 Kompakte **Leitfragen** zur Verfügbarkeitsbeurteilung (pro Dienst)

1. **Zielbild & SLA**: 24/7? **Max. Ausfallzeit**? Wartungsfenster? *(LF9)* 
2. **Netzanforderungen**: **Latenz/Bandbreite/QoS** (insb. Echtzeit)? *(LF9)* 
3. **Architektur**: **Load Balancer/Reverse Proxy/Standby** vorgesehen? *(LF9)*  
4. **Provider-Features**: **DDoS**, **DNSSEC**, **Records**, **IPv6**, **Cron/Backups** aktiv? *(LF9)* 
5. **Storage & Backup**: **RAID**, **Back-up-Speicher**, **3-2-1** umgesetzt? *(LF9)*  
6. **Monitoring**: Protokolle, **SNMP**, Analyse-Tools eingebunden? *(LF9)* 

---

## 🧭 Praxisbeispiele aus den Lastenheften

* **Kleinstunternehmen**: Anforderungen an **E-Mail, Website, Videokonferenzen**, Mindest-Down/Upload, Router mit **DHCP/DNS**, **Firewall**. *(LF9)* 
* **KMU**: **CRM** mit **Telefonintegration**, Sicherung auf vorhandenem **RAID-Server**, Wochenende-Rollout. *(LF9)* 
* **Großunternehmen**: Mehrere Standorte, **DMZ** für externe Anwendungen, **mehrere Firewalls**, **statische IPs**. *(LF9)* 

---

## ✅ Zusammenfassung

Für **Echtzeitkommunikation**, **Mail-/Webserver**, **Groupware** und **Datenbanken** gilt: Verfügbarkeit wird **vorausgeplant** (Lastenheft/SLA), **architektonisch** gesichert (Load Balancer, Reverse Proxy, Standby/Back-up-Server), **betriebsseitig** abgesichert (DDoS-Schutz, DNSSEC, Cron/Backups, RAID/NAS) und **laufend überwacht** (Monitoring). Spezifische Netzwerkfaktoren (**Latenz, QoS**) sind v. a. für **Echtzeitdienste** ausschlaggebend. *(LF9, LF3)*       

