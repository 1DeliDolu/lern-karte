# ✉️ **Mailserver** <span style="background:#e0f0ff;">LF9</span>

Ein **Mail-Server** ist ein Servertyp, der **E-Mail-Dienste** für Clients bereitstellt (Senden/Empfangen, ggf. Webmail). *(LF3)* 
In typischen Hosting-/Netzwerkszenarien erfolgt der Zugriff auf E-Mails **wahlweise über Webmail, IMAP, SMTP, POP**. *(LF9)* 

Zur Einordnung in den Protokollstack: **SMTP/IMAP/POP3** sind **Anwendungsprotokolle**; die LF9-Übersicht ordnet sie explizit der **Anwendungsschicht** des TCP/IP-Modells zu. *(LF9)* 

---

## 🔌 Protokolle & Ports

* **IMAP** wird zum **Empfangen** von E-Mails vom Mailserver genutzt; die Porttabelle nennt **Port 143** für IMAP. *(LF9)* 
* Über **Ports** können auf einem Server **gleichzeitig mehrere Server-Anwendungen** (z. B. Webserver, **Mail-Server**, Videokonferenz) laufen; Clients können parallel Browser, E-Mail-Programm etc. nutzen. *(LF9)* 

### Beispiel-Snippet (aus der Porttabelle, LF9)

```
143  IMAP, das Internet Message Access Protocol, zum Empfangen von E-Mails von einem Mailserver
```

*(LF9)* 

---

## 🌐 DNS, Erreichbarkeit & Sicherheit

* **DNS-Records** für Domains/Subdomains sind im Control-Panel **selbst konfigurierbar**; verfügbar sind **A, AAAA, MX, CNAME, TXT, SRV, NS** – **MX** ist dabei essenziell für das **Mail-Routing**. *(LF9)* 
* **DNSSEC** (abhängig von der TLD) kann **bestellt/aktiviert** werden, um die Namensauflösung abhörsicher zu gestalten. *(LF9)* 
* Providerseitig wird **DDoS-Schutz** für Webanwendungen genannt; **IPv6-Adressen** werden bereitgestellt. *(LF9)* 

---

## 🧰 Hosting-/Betriebsaspekte (Control-Panel)

* **E-Mail-Adressen**: Pakete werden passend zur **Anzahl Mitarbeitender** gewählt; Zugriff via **Webmail, IMAP, SMTP, POP**. *(LF9)* 
* **Backups**: Control-Panels ermöglichen **Sichern/Wiederherstellen**, **(externe) Backup-Storages** können konfiguriert werden. *(LF9)* 
* **Cron-Jobs**: Jede Webanwendung benötigt **mindestens einen Cron-Job** (relevant z. B. für Mail-Jobs). *(LF9)* 
* **Plattform/Isolation**: Control-Panels können auf **eigenem VPS/VDS** betrieben werden (getrennt von anderen Kunden). *(LF9)* 

---

## 🧱 Netzarchitektur (Einbettung)

Im **KMU-Netzplan** ist der **Mailserver** Bestandteil der Serverlandschaft **hinter der Firewall** (u. a. mit Web-, Telefon-/PBX-, File/Backup-Servern). *(LF9)* 

---

## ⚙️ Praxis: E-Mail-Ausgangsdienst in Anwendungen

Beispiel **Nextcloud** (als Groupware): In der **Verwaltung** wird ein **E-Mail-Server für ausgehende E-Mails** hinterlegt (z. B. „info@…”). Die Konfiguration kann per Button **„E-Mail senden“** getestet werden. *(LF9)* 

---

## 🛡️ Verfügbarkeit & Betrieb (Checkliste)

1. **DNS korrekt setzen** (**MX**, A/AAAA für Mail-Host); **DNSSEC** wenn TLD unterstützt. *(LF9)* 
2. **Ports/Protokolle** prüfen (**IMAP 143**; Protokolle **SMTP/IMAP/POP3** in der Anwendungsschicht). *(LF9)*  
3. **Control-Panel**: ausreichende **E-Mail-Adressen**, **Backups** (ggf. extern), **Cron-Jobs** einrichten. *(LF9)*  
4. **Sicherheit**: **DDoS-Schutz** nutzen, **IPv6** aktivieren; Mailserver **hinter Firewall** betreiben. *(LF9)*  
5. **Monitoring & Doku**: **Protokolldateien/Monitoring** (z. B. **SNMP**, Ping/Traceroute, Analyse-Tools) vorsehen. *(LF9)* 
6. **USV/Storage** (für Serverbetrieb allgemein): **USV-Klassen** (VFI/VI/VFD) und **NAS/SAN/DAS** abwägen. *(LF9)* 

---

## 🧪 Beispiele (aus den Unterlagen)

* **Port-Bezug**: **IMAP 143** (Empfang vom Mailserver). *(LF9)* 
* **DNS-Konfiguration im Hosting**: **A, AAAA, MX, CNAME, TXT, SRV, NS** konfigurierbar; **DNSSEC** bestellbar. *(LF9)* 
* **E-Mail-Versand aus Anwendung**: **Nextcloud** → **E-Mail-Server** hinterlegen → **„E-Mail senden“** Test. *(LF9)* 

---

## 📚 Begriffstabelle

| **Begriff**     | **Definition (aus den Unterlagen)**                                      | **Quelle** |
| --------------- | ------------------------------------------------------------------------ | ---------- |
| **Mail-Server** | Servertyp, der **E-Mail-Dienste** bereitstellt.                          | LF3        |
| **IMAP**        | Protokoll zum **Empfangen** von E-Mails; **Port 143** genannt.           | LF9        |
| **SMTP**        | **Anwendungsprotokoll** für E-Mail-Übertragung (Senden) im TCP/IP-Stack. | LF9        |
| **POP3**        | **Anwendungsprotokoll** zum Abholen von E-Mails.                         | LF9        |
| **MX-Record**   | DNS-Eintrag für **Mail-Routing** (im Control-Panel konfigurierbar).      | LF9        |
| **DNSSEC**      | **Signierte** Namensauflösung; je nach TLD **verfügbar/bestellbar**.     | LF9        |
| **Webmail**     | Browserbasierter Zugriff auf E-Mails; als Zugriffsweg erwähnt.           | LF9        |

---

## ✅ Kurzfazit

Für **Mailserver** sind in LF9/LF3 die **Zugriffswege (Webmail/IMAP/SMTP/POP)**, die **Port-/Protokoll-Zuordnung** (**IMAP 143**), die **DNS-Grundlagen** (**MX**, **DNSSEC**, Records) sowie **Betriebsaspekte** (Backups, Cron-Jobs, IPv6, DDoS-Schutz, Platzierung hinter Firewall) beschrieben – alles Voraussetzungen, um **Verfügbarkeit** und **Erreichbarkeit** sicherzustellen. *(LF9, LF3)*     


