# 🔁 TCP/UDP – Eigenschaften, Unterschiede & zielgerichteter Einsatz <span style="background:#e0f0ff;">LF3 • LF9</span>

Die **Transportschicht (OSI Layer 4)** transportiert **Anwendungsdaten** über die darunterliegende **Vermittlungsschicht (IP/IPsec)**; hierfür stehen die Protokolle **TCP** und **UDP** zur Verfügung. (LF9) 
Im **TCP/IP-Stapel** ist die **Transportebene** mit **TCP, UDP sowie (D)TLS** verortet; darüber liegen die **Anwendungsprotokolle** (z. B. HTTP/HTTPS, DNS, IMAP). (LF9) 

---

## ⚙️ Eigenschaften im Überblick

**Transmission Control Protocol (TCP)** – für zuverlässigen, geordneten Transport (LF9) 

* **Verbindungsauf-/-abbau (Sitzungen)** zwischen Endpunkten. (LF9) 
* **Segmentierung** von Dateien/Datenströmen, **korrekte Wiederzusammensetzung** am Ziel. (LF9) 
* **Fehlerbehandlung** und **Sicherstellung**, dass Pakete **ankommen**. (LF9) 
* **Typische Einsätze:** **E-Mails**, **Browsen im Internet**. (LF9) 

**User Datagram Protocol (UDP)** – für latenzkritische, verbindungslose Übertragung (LF9) 

* **Kein** Verbindungsaufbau; Versand **ohne Kontrolle/Rückmeldung**. (LF9) 
* **Typischer Einsatz:** **Audio-/Videostreaming** (Echtzeit). (LF9) 

**Transport-Schichtaufgabe allgemein (OSl/TCP-IP-Kontext):** Auf Layer 4 wird die **korrekte Ankunft** der Daten geprüft; **fehlt** etwas oder ist **fehlerhaft**, wird **erneut angefordert**; **Anwendungen werden über Ports adressiert**. (LF3) 

---

## 🔢 Ports (16-Bit) & Dienstadressierung

**Ports adressieren Dienste/Anwendungen** auf einem Host; ein **Port** ist eine **16-Bit-Zahl** und wird **sowohl vom Absender als auch vom Empfänger** zur Festlegung der zuständigen Anwendung genutzt (**Layer 4** → Übergabe an **Layer 5–7**). (LF9) 
**Adressbestandteile im Überblick:** **MAC (L2)**, **IPv4/IPv6 (L3)**, **Portnummer (L4)** – **„Port 43201“** als Beispiel. (LF9) 

**Beispiele „Well-known Ports“ (Auszug):** **80 (HTTP), 443 (HTTPS), 22 (SSH), 53 (DNS), 143 (IMAP), 161/UDP (SNMP)**; weitere in der Tabelle unten. (LF3, LF9)  

---

## 🎯 Zielgerichteter Einsatz (Leitlinie)

* **Zuverlässigkeit/Ordnung erforderlich?** → **TCP** (z. B. Web-Seitenabruf, E-Mail). (LF9) 
* **Geringe Latenz/Echtzeit wichtiger als Nachlieferung?** → **UDP** (z. B. Streaming). (LF9) 

---

## 🧪 Praxisbeispiele / Beispiel-„Code“

### A) Offene TCP-Dienste an einer Firewall prüfen (**ufw**-Status)

```
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

*Interpretation:* Der Server bietet **TCP-Dienste** auf **22/5665/80/443** für IPv4/IPv6 an. (LF9) 

### B) Aktive **TCP**-Verbindungen anzeigen (**netstat**)

```
netstat -an | grep tcp
127.0.0.1:35309      0.0.0.0:*     LISTEN
127.0.0.1:631        0.0.0.0:*     LISTEN
192.168.178.69:48262 194.163.142.58:22 TIME_WAIT
```

*Hinweise:* **TIME_WAIT**-Häufung kann auffällig sein; **netstat -r** zeigt die **Routing-Tabelle**. (LF9) 

### C) UDP-Ports, auf denen Anwendungen „horchen“

Im Beispiel horchen **kdeconnect** und **Firefox** auf mehreren **UDP-Ports** (z. B. **1716**, **54322** …). (LF9) 

---

## | Begriffe | Definition | Quelle |

| Begriff            | Definition                                                                                                                                                | Quelle |
| ------------------ | --------------------------------------------------------------------------------------------------------------------------------------------------------- | ------ |
| **TCP**            | **Verbindungsorientiert**; Segmentierung & **geordnete** Wiederzusammensetzung; **Fehlerbehandlung** und **Zustellkontrolle**; z. B. **E-Mail**, **Web**. | (LF9)  |
| **UDP**            | **Verbindungslos**; Versand **ohne Kontrolle/Rückmeldung**; z. B. **Audio-/Videostreaming**.                                                              | (LF9)  |
| **Port (16-Bit)**  | **Dienstadressierung** auf **Layer 4**; Absender/Empfänger wählen Ports für die zuständige Anwendung.                                                     | (LF9)  |
| **Transport (L4)** | Prüft **korrekte Ankunft**; fordert **fehlende/fehlerhafte** Daten **nach**; **Anwendungs-Adressierung über Ports**.                                      | (LF3)  |

---

## 🔎 Auszug „Well-known Ports“ (LF3, LF9)

|                   Port | TCP | UDP | Dienst            |
| ---------------------: | :-: | :-: | ----------------- |
|                     20 |  ✓  |  –  | **FTP-Daten**     |
|                     21 |  ✓  |  ✓  | **FTP-Steuerung** |
|                     22 |  ✓  |  ✓  | **SSH**           |
|                     53 |  –  |  ✓  | **DNS**           |
|                     80 |  ✓  |  –  | **HTTP**          |
|                    123 |  –  |  ✓  | **NTP**           |
|                    143 |  ✓  |  ✓  | **IMAP**          |
|                    161 |  –  |  ✓  | **SNMP**          |
|                    443 |  ✓  |  –  | **HTTPS**         |
|                    445 |  ✓  |  –  | **SMB/CIFS**      |
|                546/547 |  –  |  ✓  | **DHCPv6**        |
| *(Quellen: LF3/LF9)*   |     |     |                   |

---

## 🧭 Einordnung im Schichtenmodell

**Layer 4 (Transport): TCP, UDP, (D)TLS** → **Layer 5–7 (Anwendung):** HTTP/HTTPS, DNS, IMAP, … (Mapping-Tabelle). (LF9) 

---

Wenn du magst, erstelle ich dir darauf basierend **Lernkarten** (TCP vs. UDP) oder eine **Checkliste** für Firewall-Freigaben (Ports/Protokolle) – sag einfach Bescheid.
