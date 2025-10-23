# 🔗 Standortübergreifende & -unabhängige Kommunikation: VPN-Modelle, Tunneling, IPsec (LF3, LF9)

**Standortübergreifende und -unabhängige Kommunikation** wird im Kontext der Netzwerkbereitstellung explizit als Themenkomplex „**VPN-Modelle, Tunneling, IPsec**“ geführt und gehört damit zu den zentralen Auswahl- und Einrichtungsthemen bei Netzen über mehrere Standorte und für mobiles Arbeiten (Homeoffice). (LF9) 

Im Folgenden finden Sie eine **präzise, didaktische Zusammenfassung** ausschließlich auf Basis der bereitgestellten Lernfeld-Materialien mit **Beispielen, Prozessschritten, Tabellen** und einem kurzen **Konfigurationsbeispiel**. (LF9) 

## 🧭 Ziele & Einsatzszenarien (LF3, LF9)

* **Ziel:** Sichere, verschlüsselte Verbindung zwischen entfernten Netzen oder Endgeräten über unsichere Transportnetze (z. B. Internet). (LF3) 
* **Einsatz:** Homeoffice/Einzelplatz, Filialvernetzung, temporäre oder mobile Zugriffe; als Baustein innerhalb von Netzbereitstellungs-Projekten inkl. Lasten-/Pflichtenheft, Netzplan und Adressierung. (LF9) 

## 🧩 VPN-Modelle (LF3, LF9)

* **End-to-Site-VPN (Remote-Access/Homeoffice):** Ein **einzelner Rechner** wird sicher in ein entferntes LAN eingebunden. Typisches Homeoffice-Szenario. (LF3) 
* **Site-to-Site-VPN (Standortkopplung):** **Ganzes Niederlassungsnetz** wird Teil des Hauptnetzes; viele Niederlassungen können so verbunden werden. (LF3) 
* **End-to-End-VPN:** **Zwei Rechner** werden direkt und sicher miteinander verbunden. (LF3) 
* **Weitere Benennungen/Arten:** Materialien nennen u. a. **SSL-VPN**, **Client-to-Server-VPN** (synonym zu Remote-Access) und **Site-to-Site-VPN** als typische Ausprägungen. (LF9) 

## 🛠️ Tunneling – Prinzip & Ablauf (LF3)

Beim **Tunneling** werden **LAN-interne IP-Pakete** **verschlüsselt** und **zusätzlich in Internet-IP-Pakete verpackt**. Der so entstehende **VPN-Tunnel** nutzt das Internet als Transportmedium, am Ziel werden die Pakete **entpackt und entschlüsselt** und stehen wieder als **LAN-interne IP-Pakete** zur Verfügung. (LF3) 

## 🛡️ IPsec im Überblick (LF9)

* **Schichtzuordnung:** **IPsec** ist im **Internet-Layer (Layer 3)** verortet und damit ein zentraler Baustein für sichere IP-Kommunikation. (LF9) 
* **IPv4/IPv6-Hinweis:** Tabellen vergleichen Eigenschaften von IPv4/IPv6; IPsec wird als **optional** angegeben. (LF9) 
* **Praxisrolle:** **Router mit IPsec** können als **VPN-Router** eingesetzt werden; bei der Auswahl sind u. a. **Anzahl IPsec-Tunnel** und **SD-WAN-/IPsec-Durchsatz** ausschlaggebend. (LF9) 

## 🧱 Geräte- & Infrastrukturwahl (LF9)

* **Router (Edge/Core):** Kriterien umfassen **Ports (10/100/1000… bis 400 G), QSFP/SFP/RJ45**, **CPU/RAM**, **M.2-Storage** (Logging), **Anzahl IPsec-Tunnel**, **SD-WAN-IPsec-Durchsatz**, **Dual-Power/PoE** sowie **Cloud-Management**. (LF9) 
* **Firewalls:** Funktionen wie **Internet-Gateway, Stateful/Deep Packet Inspection, URL/Content-Filter, IDS/IPS, DDoS-Abwehr, VPN-/HTTP-Proxy**; **Datendurchsatz** (L3 und L5–7) und Bauform sind wichtige Kennzahlen. (LF9) 
* **Endpoint-Security & VPN:** In den Sicherheitskonzepten werden **VPN-Clients** als Teil der Endpoint-Absicherung genannt (u. a. MFA/SSO, Endpoint-Protection). (LF9) 
* **Architekturtrends:** **SD-WAN/Secure Access Service Edge (SASE)**, **Makro-/Mikrosegmentierung** und **Zero-Trust** werden zur flexiblen, sicheren Filial-/Betriebsanbindung eingesetzt und ergänzen VPN-Konzepte. (LF9) 

## ⚙️ Einrichten – Prozessschritte aus der Netzbereitstellung (LF9)

1. **Ist-Analyse & Anforderungsanalyse:** Ziele, Rahmenbedingungen, Schutzbedarf, Betriebsmodell (LAN/Cloud/Hybrid) erfassen. (LF9) 
2. **Lastenheft → Pflichtenheft:** **Was/Wofür** (Lastenheft) → **Wie/Womit** (Pflichtenheft), inkl. **Netzplan, KPI, Sicherheitsvorgaben**. (LF9) 
3. **IP-Adressierungsschema planen:** Für **WLAN/VLAN/** **VPN** Subnetze und Masken festlegen. (LF9) 
4. **Komponenten auswählen & dimensionieren:** Router/Firewalls nach **IPsec-Tunnels/-Durchsatz** und **Redundanz** wählen. (LF9) 
5. **Umsetzung & Tests:** Installation, **Konfiguration, Provisionierung, Orchestrierung**, anschließend **Funktions-/Belastungstests** und **Monitoring** (z. B. SNMP). (LF9) 

## 🧰 Praxisbeispiele & Auswahlkriterien (LF3, LF9)

* **Homeoffice (End-to-Site):** VPN-Client ↔ VPN-Gateway/Firewall; geeignet für einzelne Mitarbeiter. (LF3) 
* **Filialvernetzung (Site-to-Site):** Standortrouter mit **IPsec-Tunnel**; **Kriterium:** Anzahl gleichzeitiger Tunnel & **SD-WAN-IPsec-Durchsatz**. (LF9) 
* **Punkt-zu-Punkt (End-to-End):** Direkter verschlüsselter Kanal zwischen zwei Hosts. (LF3) 

## `🧪 Beispiel: Firewall-Regeln (Absicherung der VPN-Kopplung) (LF9)`

Im Lehrmaterial wird die **Konfiguration über Regeln** gezeigt; nachfolgend die **dargestellte** `ufw`-**Statusausgabe** als Beispiel (Server bietet u. a. 22/80/443 an): (LF9) 

```
Status: active
To                Action   From
22/tcp            ALLOW    Anywhere
5665/tcp          ALLOW    Anywhere
80/tcp            ALLOW    Anywhere
443/tcp           ALLOW    Anywhere
22/tcp (v6)       ALLOW    Anywhere (v6)
5665/tcp (v6)     ALLOW    Anywhere (v6)
80/tcp (v6)       ALLOW    Anywhere (v6)
443/tcp (v6)      ALLOW    Anywhere (v6)
```

> **Didaktischer Punkt:** Firewalls prüfen **jede eingehende Nachricht** gegen das **Regelset** – dieses Prinzip gilt ebenso für den VPN-Eintrittspunkt. (LF9) 

## 📚 Begriffstabelle (LF3, LF9)

| **Begriff**                  | **Definition**                                                                                                                  | **Quelle** |
| ---------------------------- | ------------------------------------------------------------------------------------------------------------------------------- | ---------- |
| **VPN-Tunnel**               | Verschlüsseltes, zusätzliches **IP-Paket im IP-Paket** über das Internet; am Ziel **Entschlüsselung/Entpacken** zu LAN-Paketen. | (LF3)      |
| **End-to-Site-VPN**          | Ein **Einzelrechner** wird sicher in ein entferntes LAN eingebunden (Homeoffice).                                               | (LF3)      |
| **Site-to-Site-VPN**         | **Niederlassungsnetz** wird Teil des Hauptnetzes; für Filialvernetzung.                                                         | (LF3)      |
| **End-to-End-VPN**           | Direkte, sichere **Host-zu-Host**-Verbindung.                                                                                   | (LF3)      |
| **IPsec (Layer 3)**          | Sicherheitsprotokollfamilie im **Internet-Layer**; Grundlage vieler VPN-Router-Kopplungen.                                      | (LF9)      |
| **Router-Kriterium (IPsec)** | **Anzahl IPsec-Tunnel** & **SD-WAN-IPsec-Durchsatz** bestimmen Eignung für Standortkopplungen.                                  | (LF9)      |
| **SSL-VPN**                  | In den Materialien als VPN-Art genannt (neben Site-to-Site, Client-to-Server).                                                  | (LF9)      |

## 🎯 Merksätze & Auswahlhilfe (LF3, LF9)

* **Einzelplatz ↔ LAN?** → **End-to-Site** (Remote-Access). (LF3) 
* **Standort ↔ Standort?** → **Site-to-Site**; Router nach **IPsec-Tunnelzahl** und **IPsec-Durchsatz** auswählen. (LF9) 
* **Maximale Sicherheit auf IP-Ebene?** → **IPsec** (Layer 3); Firewalls/Router entsprechend dimensionieren. (LF9) 
* **Architektur ganzheitlich denken:** **Adressierung**, **VLAN/WLAN/VPN-Plan**, **Lasten-/Pflichtenheft** & **Test/Monitoring** gehören zum Standardvorgehen. (LF9)

---

## 🧭 Prozessschritte (kompakt) für „situationsgerechte Auswahl & Einrichtung“ (LF9)

1. **Ist-/Bedarfsanalyse & Schutzbedarf** (inkl. Ziele, Rahmen, Betriebsmodell). (LF9) 
2. **Lastenheft → Pflichtenheft** (Netzplan, KPI, Sicherheitsvorgaben). (LF9) 
3. **IP-Adressierung für VPN-Segmente** festlegen. (LF9) 
4. **Komponentenwahl**: Router/Firewalls mit passender **IPsec-Tunnelzahl/-Durchsatz**, Redundanz. (LF9) 
5. **Implementierung**: Installation, **Konfiguration, Provisionierung, Orchestrierung**. (LF9) 
6. **Tests/Monitoring** (Funktion/Last, Reporting). (LF9) 

> **Hinweis zur Stoffabdeckung:** Die Materialien setzen den Schwerpunkt auf **Modelle, Prinzipien und Auswahlkriterien** (VPN-Arten, Tunneling, IPsec im Layer-Modell; Router/Firewall-Kriterien, SD-WAN/SASE, Prozessmodelle). **Spezifische IPsec-Detailmodi** (z. B. Transport/Tunnel-Modus, IKE-Profile) werden in den vorliegenden Auszügen **nicht** vertieft; Auswahl und Einrichtung orientieren sich daher an den **genannten Modellen, Adressierungs-/Prozessschritten und Gerätedaten**. (LF3, LF9)

