# 🔥 Firewall <span style="background:#e0f0ff;">LF9</span>

Eine **Firewall** ist eine Sicherheitskomponente, die Netzwerkverkehr **anhand von Regeln** prüft und steuert; **jede eingehende Nachricht** wird gegen die konfigurierten **Regeln** geprüft. **Einfache Firewalls** blockieren ankommende Pakete per **Blacklist** oder erlauben nur Pakete von **Whitelists**. Als Beispiel wird die **GNU Uncomplicated Firewall (ufw/Gufw)** gezeigt. *(LF9)* 
**Kriterien** bei der Auswahl umfassen u. a. **Bauform**, **Zertifizierungen (EU/EAA/NATO Restricted/DSGVO)**, **Datendurchsatz (Layer 3 bzw. Layer 5–7)** sowie Funktionen wie **VPN-/HTTP-Proxy**, um auch vertraulichen Verkehr zu untersuchen. *(LF9)* 

---

## 🧩 Grundtypen & Funktionen <span style="background:#e0f0ff;">LF9</span>

* **Paketfilter:** Filtert anhand von **Port**, **Quell-/Ziel-IP**. Aktionen: **DENY/DROP**, **REJECT**, **FORWARD/PERMIT**, **ALLOW/PASS**. *(LF9)* 
* **Proxyfilter:** Baut selbst die Verbindung zum Zielsystem auf und leitet Antworten an den Client weiter. *(LF9)* 
* **Content-Filter:** Bewertet **Nutzdaten** (Inhalte) einer Verbindung und **blockiert** ggf. die Weiterleitung. *(LF9)* 
* **IDS/IPS:** **Intrusion Detection Systeme** erkennen Angriffe; **Intrusion Prevention Systeme** **blockieren** erkannte Angriffe. *(LF9)* 
* **NGFW/UTM:** **Next Generation Firewalls** bzw. **Unified Threat Management**-Appliances kombinieren u. a. **Anti-Virus/Spyware/Spam**, **Netzwerk-Firewall**, **Angriffserkennung/-überwachung**, **Inhaltsfilter**, **DLP**, oft auch **NAT**, **VPN**. *(LF9)* 

> **SoHo-/Heimrouter** integrieren typischerweise eine **Firewall** neben weiteren Funktionen (AP, Telefonanlage, Switch etc.). *(LF9)* 

---

## 🧱 Zonen & DMZ (Perimeter-/Backend-Firewall) <span style="background:#e0f0ff;">LF9</span>

Die **sicherste Methode** ist eine **DMZ mit zwei Firewalls**:

1. **Frontend/Perimeter-Firewall** erlaubt nur Zugriffe **in die DMZ**.
2. **Backend-Firewall** erlaubt **nur** definierte Zugriffe **von der DMZ ins interne Netz**.
   Empfohlen wird der **Einsatz unterschiedlicher Hersteller**, um gemeinsame Schwachstellen zu vermeiden. *(LF9)* 

---

## 🧪 Beispiel-Regelwerk & Status (ufw/Gufw) <span style="background:#e0f0ff;">LF9</span>

**Gufw** (GUI für **ufw**) zeigt den Basiszustand: **eingehend** *Ablehnen*, **ausgehend** *Erlauben*. *(LF9)* 

```text
root@vm5145:~# ufw status
Status: active
To           Action  From
22/tcp       ALLOW   Anywhere
5665/tcp     ALLOW   Anywhere
80/tcp       ALLOW   Anywhere
443/tcp      ALLOW   Anywhere
22/tcp (v6)  ALLOW   Anywhere (v6)
5665/tcp (v6)ALLOW   Anywhere (v6)
80/tcp (v6)  ALLOW   Anywhere (v6)
443/tcp (v6) ALLOW   Anywhere (v6)
```

*(LF9)* 

**Hinweis:** Vor dem Öffnen von Ports hilft die Prüfung laufender Dienste/Verbindungen, z. B. mit **netstat** (Anzeige aller TCP-Verbindungen). *(LF9)* 

---

## 🧠 Erweiterte Ökosysteme <span style="background:#e0f0ff;">LF9</span>

* **Open-Source-Firewalls:**
  **IPFire** (gehärtetes OS, Segmentierung **LAN/DMZ**, **IDS/IPS**), **OPNsense®** (VPN, **High Availability/Failover**, **IDS/IPS**, **DNS/DHCP**, **VLANs**), **SecurityOnion** (IDS/NSM/Log-Management; Container-fähig). *(LF9)* 
  **Suricata** als **Threat-Detection-Engine** wird u. a. in **IPFire**, **OPNsense** und **SecurityOnion** eingesetzt. *(LF9)* 
* **DNS-Filter** (ergänzend): Arbeiten **vorgelagert** zum DNS-Server, filtern über **Blacklists** (beziehbar von vertrauenswürdigen Anbietern) und leiten Anfragen **verschlüsselt** weiter (**DoT/DoH/DNSCrypt/DoQ**); Beispiele **eBlocker**, **Pi-Hole**, **AdGuard**. *(LF9)* 
* **SASE / Secure Web Gateways:** Bündeln **Netzwerk- und Security-as-a-Service**; erkennen und blockieren z. B. **Malware/Ransomware**, **DNS-Datenexfiltration**, ermöglichen **verteiltes Richtlinienmanagement**. *(LF9)* 

---

## ⚙️ Prozessschritte: Regelprüfung in der Firewall <span style="background:#e0f0ff;">LF9</span>

1. **Eingang** eines Pakets an der Firewall. *(LF9)* 
2. **Abgleich** mit **Regelliste** (Reihenfolge/Spezifität). *(LF9)* 
3. **Aktion** je Regel/Typ: **ALLOW/PASS**, **FORWARD/PERMIT**, **DENY/DROP**, **REJECT**. *(LF9)* 
4. **Protokollierung/Reporting** (abhängig von UTM/NGFW-Ausstattung). *(LF9)* 

---

## 🧭 Einordnung im Netzplan <span style="background:#e0f0ff;">LF9</span>

In KMU-Beispielen steht die **Firewall** zwischen **Provider/Internet** und **Büro-/Server-Netzen**; Gastnetze können getrennt (z. B. via LTE/WLAN-Router) betrieben werden. *(LF9)* 

---

## 📦 Ports & Dienste (für Regeldefinitionen) <span style="background:#e0f0ff;">LF9</span>

**Beispiele bekannter Ports**: **22/SSH**, **53/DNS**, **67/68 UDP DHCP**, **80/443 HTTP/HTTPS**, **161 UDP SNMP**, **143 IMAP**, **445 TCP SMB/CIFS**, **546/547 UDP DHCPv6**. *(LF9)* 

---

## 🧾 Begriffstabelle

| Begriff                   | Definition                                                                                                                      | Quelle  |
| ------------------------- | ------------------------------------------------------------------------------------------------------------------------------- | ------- |
| **Firewall**              | Prüft/steuert Verkehr **regelbasiert**; Regeln für eingehende Nachrichten; Basisfunktionen auch in **SoHo-Routern** integriert. | (LF9)   |
| **Paketfilter**           | Filtert nach **Port** und **IP**; Aktionen **ALLOW/PASS**, **FORWARD/PERMIT**, **DENY/DROP**, **REJECT**.                       | (LF9)   |
| **Proxy-/Content-Filter** | **Proxy:** terminiert Verbindung; **Content-Filter:** bewertet **Inhalte** und blockiert ggf.                                   | (LF9)   |
| **IDS/IPS**               | **Erkennt** bzw. **blockiert** Angriffe anhand **Kommunikationsmustern**.                                                       | (LF9)   |
| **NGFW/UTM**              | Kombinierte Sicherheitsfunktionen (z. B. **AV/Anti-Spam**, **DLP**, **NAT**, **VPN**), Appliances je nach Leistung vergleichen. | (LF9)   |
| **DMZ (2 Firewalls)**     | Perimeter- und Backend-Firewall **trennen** DMZ/Intern; **Hersteller-Diversität** empfohlen.                                    | (LF9)   |
| **Open-Source-FW**        | **IPFire**, **OPNsense®**, **SecurityOnion**; **Suricata** als Engine.                                                          | (LF9)   |
| **DNS-Filter**            | **Blacklists**, optional **verschlüsselte** Weiterleitung (**DoT/DoH/DNSCrypt/DoQ**).                                           | (LF9)   |

---

## 🛠️ Praxis-Beispiele

1. **UFW-Status interpretieren:** Obige **ALLOW-Regeln** öffnen u. a. **22/80/443 (IPv4/IPv6)**; eingehend *Ablehnen*, ausgehend *Erlauben*. *(LF9)* 
2. **Dienste prüfen, bevor Ports freigegeben werden:** **netstat** zeigt aktive **TCP-Listener**/Verbindungen. *(LF9)* 
3. **Netzarchitektur mit DMZ:** Dienste in die **DMZ** stellen; Zugriffe nur **regelbasiert** zwischen **Internet↔DMZ** und **DMZ↔Intern**. *(LF9)* 

---


