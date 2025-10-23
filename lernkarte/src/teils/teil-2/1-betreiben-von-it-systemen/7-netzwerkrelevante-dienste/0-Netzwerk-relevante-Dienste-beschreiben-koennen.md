# 🌐 Netzwerk-relevante Dienste: **DNS**, **DHCP**, **Proxy** <span style="background:#e0f0ff;">LF9/LF3</span>

Die drei Dienste **DNS**, **DHCP** und **Proxy** gehören ausdrücklich zu den „netzwerkrelevanten Diensten“ in der Planung und Bereitstellung von Netzwerken. (LF9 )

---

## 🧭 **DNS – Domain Name System**

Das **DNS** ermöglicht es, mit **Rechnernamen** und **URLs** zu arbeiten; ein **DNS-Server** (Nameserver) löst diese in **IP-Adressen** auf und umgekehrt. (LF9 )
Typischer Ablauf: Der Client (PC/Smartphone) sendet eine DNS-Anfrage (oft an den **Router** als lokalen DNS-Server); dieser liefert die passende **IP-Adresse**, die der Client anschließend z. B. für den **HTTP/HTTPS-Request** verwendet. (LF9 )
**Port**: DNS ist über **Port 53** erreichbar. (LF9 )

**Absicherung von DNS-Anfragen:** Da klassisches DNS **unverschlüsselt** ist, sollen DNS-Anfragen mit **DNS over TLS (DoT)**, **DNS over HTTPS (DoH)** oder **DNS over QUIC (DoQ)** abgesichert werden; Router-Oberflächen erlauben ausdrücklich die **Aktivierung von DNS over TLS**. (LF9 )

**DynDNS (Dynamic DNS Updates):** Bei regelmäßig wechselnden öffentlichen IPv4-Adressen aktualisiert ein lokaler Server seine jeweilige IP **periodisch** beim **DynDNS-Dienst**, damit der Name immer auf die **aktuelle Adresse** zeigt. (LF9 )

**Lokaler DNS-Server im LAN:** Üblicherweise fungiert der **Router** (z. B. 192.168.178.1) als **lokaler DNS-Server**; die GUI zeigt zusätzlich ein Feld, um **einen anderen DNS-Server** im Heimnetz zu hinterlegen. (LF9 )

**DNS-Filter im Netz:** **DNS-Filter** (z. B. Pi-hole, AdGuard) laufen als **DNS-Server**, filtern **Tracker/Werbung** anhand von **Blacklists** und leiten Anfragen (professionell) **verschlüsselt** weiter (DoT/DoH/DoQ/DNSCrypt). (LF9 )

### 🔧 Beispiele & Prüfkommandos (DNS)

* **Namensauflösung testen** (Konzept): Der Kompetenzcheck fordert ein Shell-Kommando zur Prüfung des DNS-Servers; gängige Tools sind **nslookup** bzw. **dig** (im Material genannt). (LF3 )
* **Router-Konfiguration**: Anzeige/Änderung des **lokalen DNS-Servers** in der Router-GUI (z. B. FRITZ!Box). (LF9 )

```bash
# Beispiel: DNS-Abfrage (Toolbezug aus dem Material)
nslookup www.westermann.de
```

*(Bezug auf die Tools/Prüfidee: LF3 )*

---

## 🔑 **DHCP – Dynamic Host Configuration Protocol**

**Zweck:** **DHCP** bindet Geräte **automatisch** in ein bestehendes Netzwerk ein und vergibt **IP-Adresse**, **Netzmaske**, **Gateway** und **DNS-Server** **ohne** manuelle Konfiguration am Client. (LF9 )

**Ablauf (DORA-Schema):**
Client sendet **DHCPDISCOVER** (Broadcast) → Server(s) antworten mit **DHCPOFFER** → Client wählt und sendet **DHCPREQUEST** (mit Server-ID) → gewählter Server bestätigt mit **DHCPACK** (Konfigurationsparameter). Bei **DHCPNAK** startet der Client die Konfiguration erneut. (LF9 )

**Ports:** DHCP nutzt **67/UDP** und **68/UDP**; für DHCPv6 **546/UDP** und **547/UDP**. (LF9 )

**Praxis in SoHo/KMU:**
– **Router** besitzen in der Regel einen **integrierten DHCP-Server** (werkseitig aktiv). (LF3 )
– In der Router-GUI kann man **Adressbereich/Lease-Zeit** setzen und optional **statische IPs** außerhalb des DHCP-Pools vergeben (z. B. Server ab .201). (LF9 )

### 🔧 Beispiele & Prüfkommandos (DHCP)

* **Konfiguration/Lease ansehen** (Windows-Beispiel): **ipconfig /all** zeigt u. a. **IP**, **Gateway**, **DNS**, **DHCPv6-Client-DUID**, **Lease-Gültigkeit**. (LF3 )
* **Funktionsprüfung in der Praxis**: Der Kompetenzcheck fordert ein Shell-Kommando zur Prüfung eines **DHCP-Servers** (Bezug auf Aufgabenstellung). (LF9 )

```powershell
# Beispiel: DHCP/DNS/Gateway-Übersicht
ipconfig /all
```

*(Beleg für die angezeigten Informationen: LF3 )*

---

## 🧰 **Proxy-Dienste**

**Grundidee (Proxy/Cache):** Ein **Proxy** arbeitet als **Stellvertreter**: Er ruft Internetinhalte **stellvertretend** für Clients ab, speichert **statische Seiten** im **Cache** und liefert sie bei erneutem Abruf **direkt** aus → spart **Datenvolumen** (sinnvoll bei **Volumentarifen**). In kleinen Netzen ist der Proxy oft im **Internetrouter** integriert. (LF9, LF3 )

**Reverse-Proxy:** Ein **Reverse-Proxy** nimmt **Anfragen aus dem Internet** entgegen und **verteilt** sie an **mehrere interne Server**; nach außen wirkt es wie **ein** Server (z. B. `/anwendung1`, `/anwendung2` auf verschiedenen internen Systemen). (LF9 )

**Proxy in Firewalls:** Next-Generation-Firewalls bieten u. a. **VPN-/HTTP-Proxy-Funktionen**, um auch **verschlüsselten Verkehr** zu **scannen/filtern**. (LF9 )

---

## ⚙️ **Prozessschritte (kompakt)**

1. **DNS-Auflösung**: Client → (lokaler) **DNS-Server (Router)** → IP-Adresse zurück → Client nutzt IP für **HTTP/HTTPS**. **Absicherung** via **DoT/DoH/DoQ** empfohlen. (LF9 )
2. **DHCP-Adressvergabe**: **DISCOVER → OFFER → REQUEST → ACK** (+ ggf. **NAK**); **Ports 67/68** (bzw. **546/547** bei IPv6). (LF9 )
3. **Proxy-Nutzung**: **Forward/Cache-Proxy** reduziert Datenvolumen; **Reverse-Proxy** verteilt eingehende Requests an interne Server. (LF9 )

---

## 💡 **Praxisbeispiele**

* **Router-Check (FRITZ!Box-GUI):** **DHCP-Server aktivieren**, **Adressbereich** setzen, **lokalen DNS-Server** konfigurieren. (LF9 )
* **DNS-Filter im Heim-/Schulnetz:** Einsatz von **Pi-hole/AdGuard** als **DNS-Server** mit **Blacklists** und **verschlüsselter Weiterleitung** (DoT/DoH/DoQ) zum Schutz der **Privatsphäre**. (LF9 )

---

## 📚 Begriffstabelle

| Begriff                 | Definition                                                                                                                           | Quelle   |
| ----------------------- | ------------------------------------------------------------------------------------------------------------------------------------ | -------- |
| **DNS**                 | Dienst zur **Namensauflösung** zwischen **Namen** und **IP-Adressen**; meist fragt der Client den **Router** als lokalen DNS-Server. | LF9      |
| **DNS-Sicherheit**      | Absicherung von DNS-Anfragen via **DoT**, **DoH**, **DoQ**; Router können **DoT** aktivieren.                                        | LF9      |
| **DynDNS**              | Dynamische Aktualisierung einer Domain auf die **jeweils aktuelle IP**.                                                              | LF9      |
| **DHCP**                | **Automatische** Vergabe von **IP-Konfigurationsdaten** (IP, Maske, Gateway, DNS).                                                   | LF9      |
| **DHCP-Ablauf**         | **DISCOVER → OFFER → REQUEST → ACK** (ggf. **NAK** bei Ablehnung).                                                                   | LF9      |
| **DHCP-Ports**          | **67/68 (UDP)**; **546/547 (UDP)** für IPv6.                                                                                         | LF9      |
| **Proxy (Cache)**       | **Stellvertreter** mit **Zwischenspeicher**; liefert statische Inhalte erneut **direkt** aus und spart **Datenvolumen**.             | LF9, LF3 |
| **Reverse-Proxy**       | Nimmt **Internet-Anfragen** an und **verteilt** auf **interne Server**; nach außen wirkt es wie **ein** Server.                      | LF9      |
| **Router als DNS/DHCP** | SoHo-Router bringen **DNS- und DHCP-Server** mit; Kriterien & GUI-Beispiele.                                                         | LF9, LF3 |

---

## 🧪 Kurzer „Hands-on“-Block (aus dem Material abgeleitete Prüfideen)

```bash
# 1) Erreichbarkeit & Namensauflösung grob prüfen
ping google.de
# (Bezieht DNS-Auflösung mit ein – Konzept im Material erläutert.)
```

(LF3 )

```powershell
# 2) DHCP/DNS/Gateway auf dem Client prüfen
ipconfig /all
```

(LF3 )

```bash
# 3) DNS-Ziellookup demonstrieren (Toolbezug aus dem Material)
nslookup www.westermann.de
```

(LF3 )

---

## 🎯 Merksätze

* **Ohne DNS** keine bequeme Nutzung von Namen/URLs; **Absicherung** via **DoT/DoH/DoQ** ist heute Standard. (LF9 )
* **DHCP** automatisiert die **Netzkonfiguration**; **DORA** ist der Kernablauf. (LF9 )
* **Proxy** spart **Traffic** (Cache) bzw. **entkoppelt** Internetzugriffe (**Reverse-Proxy**) und kann in **Firewalls** integriert geprüft/gescannt werden. (LF9, LF3 )

---


