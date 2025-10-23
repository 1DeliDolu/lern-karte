# 🔁 Übertragungsprotokolle: TCP/UDP & HTTP/HTTPS

Die **Transportschicht** (OSI **Layer 4**) transportiert Anwendungsdaten über die Vermittlungsschicht (**IP/IPsec**) und stellt dazu die Protokolle **TCP** und **UDP** bereit (LF9). 
Im **TCP/IP-Modell** ist die Transportschicht der Anwendungsschicht (Schichten 5–7) vorgelagert; hier sind u. a. **TCP**, **UDP** sowie **TLS/DTLS** verortet (LF9). 
**Ports** dienen in Layer 4 dem **Adressieren von Anwendungen/Diensten**; es sind **16-Bit-Zahlen** (z. B. 43201), über die Sender und Empfänger die zuständige Anwendung festlegen (LF9, LF3).  

---

## ⚙️ TCP vs. UDP – Eigenschaften & Einsatz

**Transmission Control Protocol (TCP)** (LF9) 

* **Verbindungsauf-/-abbau (Sitzungen)**. (LF9) 
* **Zerlegt Datenströme in Segmente**, **ordnet** sie beim Empfänger **korrekt** und **stellt fehlende** Segmente **wieder her**. (LF9) 
* **Fehlerbehandlung** und **Sicherstellung des Ankommens** der Pakete. (LF9) 
* **Einsatz** z. B. bei **E-Mails** und **Browsen im Internet**. (LF9) 

**User Datagram Protocol (UDP)** (LF9) 

* **Kein Verbindungsaufbau**; Versand **ohne Kontrolle** bzw. **Rückmeldung**. (LF9) 
* **Einsatz** z. B. für **Audio-/Videostreaming** (Echtzeit). (LF9) 

**Zielgerichteter Einsatz – Leitlinie aus den Materialien** (LF9, LF3)  

* **Zuverlässigkeit/Ordnung wichtig?** → **TCP** (z. B. Web-/Mail-Daten). (LF9) 
* **Echtzeit/Latenz entscheidend?** → **UDP** (z. B. Streaming). (LF9) 
* **Ports** adressieren die jeweilige Anwendung, z. B. Webserver über **Port 80/443** (siehe unten). (LF9, LF3)  

---

## 🌐 HTTP vs. HTTPS – Eigenschaften & Einsatz

**HTTP/HTTPS gehören zur Anwendungsschicht (Layer 5–7)**; sie nutzen die Transportschicht (TCP) und Ports zur Dienstadressierung (LF9). 

* **HTTP (Port 80)** und **HTTPS (Port 443)** werden für **statische und dynamische Webseiten** verwendet (LF9). 
* **HTTPS** = **HTTP über TLS** (Verschlüsselung/Authentifizierung auf Transportschicht; TLS ist in der Transportebene verortet) (LF9). 
* Beim **Aufruf einer Webseite** enthält die Anfrage **Quell-IP**, **Ziel-IP** und den **Port** (z. B. **443** für eine dynamische Seite) (LF9). 

**Dazugehörige Ports (Auswahl)** (LF9) 

* **22**: **SSH**
* **53**: **DNS**
* **67/68 UDP**: **DHCP (IPv4)**; **546/547 UDP**: **DHCPv6**
* **80/443**: **HTTP/HTTPS**
* **161 UDP**: **SNMP**
* **445 TCP**: **SMB/CIFS**

---

## 🧪 Praxis: Beispiele, Tools & Beispiel-“Code”

### Beispiel A: Firewall-Regeln prüfen (Linux **ufw**) (LF9) 

```
# Beispielausgabe: erlaubte TCP-Dienste (IPv4/IPv6)
Status: active
To                Action  From
22/tcp            ALLOW   Anywhere
5665/tcp          ALLOW   Anywhere
80/tcp            ALLOW   Anywhere
443/tcp           ALLOW   Anywhere
22/tcp (v6)       ALLOW   Anywhere (v6)
5665/tcp (v6)     ALLOW   Anywhere (v6)
80/tcp (v6)       ALLOW   Anywhere (v6)
443/tcp (v6)      ALLOW   Anywhere (v6)
```

*Interpretation:* Webzugriffe über **HTTP/HTTPS (80/443)** sowie **SSH (22)** sind erlaubt (IPv4/IPv6). (LF9) 

### Beispiel B: **TCP-Verbindungen** anzeigen (**netstat**) (LF9) 

```
netstat -an | grep tcp
# Ausgabe (Auszug):
127.0.0.1:35309    0.0.0.0:*    LISTEN
127.0.0.1:631      0.0.0.0:*    LISTEN
192.168.178.69:48262 194.163.142.58:22  TIME_WAIT
```

*Hinweis:* Viele **TIME_WAIT**-Einträge können auf Auffälligkeiten hindeuten; Routing-Tabelle per `netstat -r` einsehbar. (LF9) 

### Beispiel C: **DNS-Auflösung** prüfen (**nslookup**) (LF9) 

```
nslookup www.westermann.de
# zeigt DNS-Server und Ziel-IP (Auszug)
```

### Beispiel D: **Ports & Dienste planen** (Auszug der „Ports bekannter Webanwendungen“) (LF9) 

```
22  -> SSH
53  -> DNS
80  -> HTTP
443 -> HTTPS
...
```

---

## 📋 Begriffe kompakt

| Begriff            | Definition                                                                                                                          | Quelle       |
| ------------------ | ----------------------------------------------------------------------------------------------------------------------------------- | ------------ |
| **Port (Layer 4)** | 16-Bit-Zahl zum **Adressieren von Anwendungen/Diensten** auf einem Host.                                                            | (LF9, LF3)   |
| **TCP**            | **Verbindungsorientiert**, segmentiert/ordnet Daten, **Fehlerbehandlung**, **Quittung**; Einsatz z. B. **E-Mail**, **Web-Browsen**. | (LF9)        |
| **UDP**            | **Verbindungslos**, **keine** Rückmeldung/Kontrolle; Einsatz z. B. **Audio/Video-Streaming**.                                       | (LF9)        |
| **HTTP**           | **Anwendungsprotokoll** für Webinhalte; genutzt über **Port 80**.                                                                   | (LF9)        |
| **HTTPS**          | **HTTP über TLS**; **Port 443**; schützt Vertraulichkeit/Integrität.                                                                | (LF9)        |
| **TLS/DTLS**       | (D)TLS ist der **Sicherheitslayer** oberhalb von TCP/UDP; im Stack der **Transport-Ebene** zugeordnet.                              | (LF9)        |

---

## 🛠️ Vorgehen für den zielgerichteten Einsatz (aus den Materialien abgeleitet)

1. **Anwendungsfall klären & Protokolle festlegen**: Bedarf an **Zuverlässigkeit** (→ TCP) oder **Echtzeit** (→ UDP)? **Schicht-5-bis-7-Protokolle** (z. B. **HTTPS**, **DNS**, **SMTP**) und **TLS-Version** berücksichtigen. (LF9) 
2. **Ports planen & dokumentieren**: Dienste auf **Standardports** (z. B. 80/443) oder fest vereinbarte **Alternativports**; **Portliste** führen. (LF9) 
3. **Firewall/ACLs konfigurieren**: Nur benötigte **TCP/UDP-Ports** öffnen; **Stateful Inspection/Deep Packet Inspection** je nach Bedarf. (LF9)  
4. **Funktion prüfen & überwachen**: **netstat**, **nslookup**, **Routing-Tabelle** kontrollieren; bei Bedarf Monitoring (z. B. **SNMP**) einsetzen. (LF9)  
5. **Dokumentation pflegen**: Pflichtenheft/Stichwortsammlung inkl. **Protokolle (IPv4/IPv6, TCP/UDP, TLS, HTTPS)**, **Dienste**, **QoS**, **VLAN** etc. (LF9) 

---

## 💡 Mini-Beispiele (aus dem Stoffkontext)

* **Web-App bereitstellen:** **HTTPS/TCP/443** öffnen; DNS-Eintrag zeigt auf Webserver; Browser baut HTTP-Anfrage mit Ziel-IP und **Port 443**; TLS schützt die Übertragung. (LF9)  
* **Streaming-Dienst intern:** **UDP** verwenden, Firewalls auf die entsprechenden **UDP-Ports** anpassen; Latenz im Blick behalten. (LF9) 

---

## 🧩 Zusatz: Wo liegen HTTP/HTTPS, TCP/UDP im Stack?

* **Layer 5–7 (Anwendung):** **HTTP/HTTPS**, DNS, IMAP … (LF9) 
* **Layer 4 (Transport):** **TCP**, **UDP**, **TLS/DTLS** (LF9) 
* **Layer 3 (Vermittlung):** **IP (IPv4/IPv6), IPsec** (LF9) 
* **Layer 2/1:** **MAC/Ethernet/WLAN/Glasfaser** (LF9, LF3)  

---

