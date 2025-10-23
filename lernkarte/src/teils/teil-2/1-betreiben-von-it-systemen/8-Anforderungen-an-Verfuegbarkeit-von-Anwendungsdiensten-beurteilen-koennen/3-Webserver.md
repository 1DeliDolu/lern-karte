# 🌐 **Webserver** <span style="background:#e0f0ff;">LF9</span>

Ein **Webserver** stellt **Webanwendungen** bzw. **statische/dynamische Webseiten** per **HTTP/HTTPS** bereit. In der Port-Übersicht sind **80/443** ausdrücklich als Ports für **http/https** aufgeführt; über den **Port-Mechanismus** können auf einem Host parallel mehrere Server-Anwendungen betrieben werden (z. B. Webserver, Mailserver, Videokonferenzsystem). *(LF9)* 
Seit Ende der 1990er werden **webbasierte Anwendungen** (Mehrschicht-Architekturen) entwickelt; **Nutzung und Administration** erfolgen **browserbasiert** (z. B. auch per Smartphone). *(LF9)* 

---

## 🧱 Architektur-Bausteine für Webserver-Verfügbarkeit

* **Load Balancer** dienen als **Einstiegspunkt für Cluster** und leiten Anfragen eines Browsers konsistent an einen Cluster-Knoten weiter (Session-Stickiness). *(LF9)* 
* **Reverse Proxy** verteilt eingehende Internet-Anfragen auf **mehrere interne Server** (z. B. unterschiedliche Pfade/URLs) und versteckt die interne Struktur. *(LF9)* 
* **Back-up-Server** fungieren als **Standby-Systeme**, die beim Ausfall des Hauptsystems übernehmen. *(LF9)* 
* In **virtuellen Infrastrukturen** lassen sich **Knoten hochverfügbar** betreiben; bei Ausfall starten andere Knoten **VMs automatisch nach** (Failover). *(LF9)*  

---

## 🛡️ Platzierung & Schutz im Netz

* **DMZ**: Öffentlich erreichbare Server (z. B. **eigene Website**, Shop) werden **zwischen zwei Firewalls** in einer **Demilitarized Zone** betrieben; das **Intranet** ist zusätzlich abgeschirmt. *(LF9)* 
* **Firewall-Regeln**: Beispielkonfiguration zeigt erlaubte **TCP-Ports 22, 80, 443** (IPv4/IPv6) für Webzugriff; Firewalls prüfen eingehende Nachrichten gegen **Regellisten**. *(LF9)* 

```text
Status: active
22/tcp  ALLOW  Anywhere
80/tcp  ALLOW  Anywhere
443/tcp ALLOW  Anywhere
22/tcp (v6)  ALLOW  Anywhere (v6)
80/tcp (v6)  ALLOW  Anywhere (v6)
443/tcp (v6) ALLOW  Anywhere (v6)
```

*(LF9)* 

---

## 🔐 Zertifikate, DNS & Provider-Features (Webhosting/Control Panel)

* **SSL-Zertifikate** (kommerziell; **Let’s Encrypt** separat erwähnt) werden im Angebot aufgeführt. *(LF9)* 
* **DNS-Records** (**A, AAAA, MX, CNAME, TXT, SRV, NS**) sind **selbst konfigurierbar**; **DNSSEC** ist – je nach **TLD** – **bestellbar/aktivierbar**. *(LF9)* 
* **DDoS-Schutz** ist für **Webanwendungen** vorgesehen; **IPv6-Adresse** inklusive. *(LF9)* 
* **FTPS/SSH-Zugang** für Updates/Reparaturskripte; **Cron-Jobs** pro Webanwendung (mindestens so viele wie **Datenbanken**). *(LF9)*  

---

## 🖥️ Betriebsmodelle & Performance

* **Shared Host vs. eigener VPS/VDS**: Control Panels können **auf eigenem VPS/VDS** betrieben werden (**Datenhoheit**, Isolation). *(LF9)*  
* **Images/Stacks**: gängige **Provider-Images** (u. a. **LAMP**, **cPanel/WHM**, **Plesk**) erleichtern den **Webserver-Rollout**. *(LF9)* 
* **Storage & Netz**: **NVMe-SSD** wird empfohlen; bei kleineren virtuellen Servern sind **Bandbreiten limits** üblich – Ziel ist **uneingeschränkter Traffic**. *(LF9)* 
* **Snapshots/Rollback**: Browserbasierte Verwaltung erlaubt **Snapshots** und **Rollback** (z. B. vor/nach Updates). *(LF9)* 

---

## ⚙️ Webserver im Praxisbetrieb (Browser-Administration)

**Webanwendungen** (z. B. **Nextcloud**) lassen sich über **Control Panels** (z. B. **cPanel**) **installieren, stagen, klonen und sichern**; die produktive Instanz ist über ihre **URL** erreichbar. *(LF9)* 
**Auto-Installer** (z. B. **Softaculous**) unterstützen zusätzliche **Webanwendungen** (Blog, Forum, Shop, ERP, Wiki) in **Subdomains**; **DB-Webzugriff** ist per **Browser** möglich. *(LF9)* 

---

## 🧪 Beispiele & Auszüge (aus den Unterlagen)

* **Ports-Webbetrieb**: **80/443** für **http/https**; paralleler Betrieb mehrerer **Server-Anwendungen** auf einem Host über **Ports**. *(LF9)* 
* **Firewall-Beispiel**: **ufw**-Status zeigt **80/443** freigeschaltet (IPv4/IPv6). *(LF9)* 
* **Reverse-Proxy-Beispiel**: Eine Domain mit **/anwendung1** und **/anwendung2** wird intern von **verschiedenen Servern** bedient – für Nutzer wirkt es wie **ein** Server. *(LF9)* 

---

## 📚 Begriffstabelle

| **Begriff**                | **Definition**                                                                     | **Quelle** |
| -------------------------- | ---------------------------------------------------------------------------------- | ---------- |
| **Webserver (HTTP/HTTPS)** | Bereitstellung statischer/dynamischer Webseiten auf **Port 80/443**.               | LF9        |
| **Load Balancer**          | **Einstiegspunkt für Cluster**, verteilt Anfragen eines Browsers konsistent.       | LF9        |
| **Reverse Proxy**          | Verteilt Internet-Anfragen an **interne Server**/URLs, kaschiert interne Struktur. | LF9        |
| **Back-up-Server**         | **Standby-System** übernimmt bei Ausfall des Primärsystems.                        | LF9        |
| **DMZ**                    | Zone zwischen **zwei Firewalls** für öffentlich erreichbare Server.                | LF9        |
| **SSL-Zertifikat**         | Zertifikate (kommerziell; **Let’s Encrypt** separat) für **HTTPS**.                | LF9        |
| **DNSSEC & Records**       | **DNSSEC** bestellbar; **A, AAAA, MX, CNAME, TXT, SRV, NS** konfigurierbar.        | LF9        |
| **VPS/VDS**                | **Eigenes** (virtuelles) System für Control Panel/Betrieb, **nicht geteilt**.      | LF9        |
| **Snapshot/Rollback**      | **Sichern** des Zustands, **Rollback** bei Update-Fehlschlag.                      | LF9        |

---

## ✅ Kurzfazit

Für **Webserver** nennen die Unterlagen die **Kernports (80/443)** und die **browserbasierte Nutzung/Administration**. **Verfügbarkeit** wird über **Load Balancer**, **Reverse Proxy**, **Back-up-Server** und **HA-Virtualisierung** erreicht; **Sicherheit/Erreichbarkeit** über **DMZ**, **Firewall-Regeln**, **SSL-Zertifikate**, **DNSSEC/DNS-Records**, **DDoS-Schutz**, **IPv6** sowie **FTPS/SSH** und **Cron-Jobs** im Hosting-Betrieb. *(LF9)*       


