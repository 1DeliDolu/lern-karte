# 💻 3 Clients in Rechnernetzwerke einbinden [Seite: 278]

Das Lernfeld 3 behandelt die **Integration von Computern, Druckern und weiteren Devices** als **Clients** in bestehende Netzwerke. Lernende sollen die **Netzinfrastruktur analysieren**, **Geräte anschließen**, **Adressierung und Konfiguration** verstehen und **Tests** durchführen.

---

## 🧠 Lernziele und Überblick

Ziel ist, Clients (= „Kunden“ des Servers) in lokale oder entfernte Netzwerke einzubinden, die Grundlagen von **LAN/WLAN**, **Topologien**, **Netzwerkmedien**, **Adressierung**, **Serverdiensten** und **Verfügbarkeit** zu verstehen.

Lernabschnitte:

1. Überblick über Netzwerke im Ausbildungsbetrieb
2. Hauptbestandteile von Computernetzen
3. Grundlagen der Datenübertragung
4. Netzwerkstrukturen, -komponenten und -standards
5. Integration und Cloud-Nutzung
6. Prüfung, Wartung und Management

---

## 🏢 3.1 Eine Einführung in das Netzwerk des Ausbildungsbetriebs (JIKU IT-Solutions)

Das Modellunternehmen verfügt über eine LAN-/WLAN-Infrastruktur mit zentralem **Datacenter**, Servern, Switches, Routern und IP-Telefonie.
Alle Geräte besitzen **IP-Adressen** und sind über **LAN oder WLAN** verbunden.

### Aufgaben eines LAN

| Aufgabe                                | Erläuterung                          |
| -------------------------------------- | ------------------------------------ |
| **Kommunikationsverbund**              | Austausch von Text, Bild, Video, Ton |
| **Datenverbund**                       | Zugriff auf zentrale/verteilte Daten |
| **Funktionsverbund**                   | Nutzung fremder Anwendungen          |
| **Ressourcenverbund**                  | Gemeinsame Nutzung von Geräten       |
| **Last-/Leistungsverbund**             | Lastverteilung durch Load Balancer   |
| **Sicherheits-/Verfügbarkeitsverbund** | Redundanz und Datensicherheit        |

### Zentrale Fachbegriffe

| Begriff           | Definition                              |
| ----------------- | --------------------------------------- |
| **LAN**           | Lokales Netzwerk (verkabelt)            |
| **WLAN/Wi-Fi**    | Drahtloses Netzwerk                     |
| **Switch**        | Verbindet Endgeräte, verteilt Pakete    |
| **Router**        | Verbindet Netze (z. B. LAN–Internet)    |
| **Server**        | Leistungsstarker Rechner für Dienste    |
| **Datacenter**    | Rechenzentrum mit zentralem Speicher    |
| **IP-Adresse**    | Eindeutige Netzwerkkennung jedes Geräts |
| **TK-Anlage**     | Telefonserver für IP-Telefonie          |
| **Load Balancer** | Lastverteiler zwischen Servern          |

---

## 🌐 3.2 Hauptbestandteile von Computernetzen unterscheiden

Ein **Computernetz** besteht aus selbstständigen Rechnern (P Cs, Server, Drucker, Sensoren usw.), die Daten austauschen. Ziel: Kommunikation und Ressourcenteilung.

### Typen von Netzen

| Netztyp                | Beschreibung                               |
| ---------------------- | ------------------------------------------ |
| **Internet**           | Weltweites, paketvermitteltes Netz         |
| **Intranet**           | Internes, abgeschottetes Firmennetz        |
| **Providernetz**       | Verbindung zwischen LAN und Internet       |
| **Carrier-Netz**       | Großflächige Datenleitungen (Telekom etc.) |
| **Telefonnetz (PSTN)** | Leitungsvermittelt, veraltet               |

### VPN und VLAN

* **VLAN** = Virtuelles LAN, logische Trennung innerhalb einer gemeinsamen Verkabelung
  → Markierung durch **VLAN-Tag**, bis zu 4096 VLANs möglich
* **VPN** = Virtual Private Network, verschlüsselte Verbindung über unsichere Netze
  → Typen: **End-to-Site**, **Site-to-Site**, **End-to-End**

### Netzwerkarten

* **Peer-to-Peer**: Rechner sind gleichberechtigt (Client und Server zugleich)
* **Client-Server-Netz**: Zentrale Server stellen Dienste bereit

---

## 🖥️ 3.2.3 Rechenzentren und Serversysteme unterscheiden

| Typ              | Beschreibung                                                                         |
| ---------------- | ------------------------------------------------------------------------------------ |
| **On-Premises**  | Lokales RZ im Betrieb mit eigener Klimatisierung und Stromversorgung                 |
| **Off-Premises** | Externes RZ über schnelle Datenleitungen (Cloud-Betrieb)                             |
| **Colocation**   | Eigene Server im fremden RZ mit Sicherheits- und Versorgungsleistungen des Anbieters |
| **Cloud-RZ**     | Dienstleistungsbasiert, geringer Administrationsaufwand                              |

### Servertypen

| Server              | Aufgabe                                  |
| ------------------- | ---------------------------------------- |
| **File-Server**     | Dateispeicherung (FTP, SMB)              |
| **Print-Server**    | Druckdienste                             |
| **Mail-Server**     | E-Mail-Dienste                           |
| **DNS-Server**      | Namensauflösung                          |
| **Web-Server**      | Webseitenbereitstellung                  |
| **Update-Server**   | Software-Verteilung                      |
| **NAS**             | Netzwerkspeicher                         |
| **Terminal-Server** | Virtuelle Arbeitsplätze für Thin Clients |

---

## 💼 3.2.4 Clients im Überblick

Ein **Client** nutzt Dienste anderer Rechner. Beispiele: PCs, Laptops, Tablets, Drucker, Smartphones.

### Typen von Clients

| Typ                 | Eigenschaften                                                    |
| ------------------- | ---------------------------------------------------------------- |
| **Fat Client**      | Leistungsstark, führt Programme lokal aus                        |
| **Thin Client**     | Führt Programme auf Terminal-Server aus, minimaler Energiebedarf |
| **Embedded System** | Eingebetteter Kleinstrechner mit Sensor/Aktor                    |
| **BYOD**            | „Bring Your Own Device“, private Geräte im Betrieb               |
| **CPS**             | Cyber-Physische Systeme in Industrie 4.0 mit Netzwerk-Anbindung  |

---

## 🔌 3.3 Grundlagen der Datenübertragung in Netzwerken

### Kenngrößen

| Größe                       | Bedeutung                               |
| --------------------------- | --------------------------------------- |
| **Datenrate C = D/t**       | Übertragene Datenmenge pro Zeit (bit/s) |
| **Bandbreite B**            | Genutzter Frequenzbereich               |
| **Signalgeschwindigkeit c** | ca. 2 × 10⁸ m/s in Kupfer/Glasfaser     |

**Leitungstypen:** Kupfer (Twisted Pair), Lichtwellenleiter, Funk (WLAN, Bluetooth)
**Adressierungsarten:** Unicast, Multicast, Broadcast, Anycast
**Übertragungsarten:** seriell, parallel, Simplex, Duplex, Multiplex

---

## 📡 3.3.3 Ethernet und 3.3.4 TCP/IP als Standard

* **Ethernet** = Standard für LAN (OSI-Schicht 1–2)
  → Daten werden in Frames übertragen (46–1500 Byte Nutzlast, 18 Byte Overhead)
  → VLAN-Tag erweitert Frames um 4 Byte

* **TCP/IP-Protokollsuite** = Grundlage des Internets
  → **IP** adressiert Rechner (Netze und Hosts)
  → **TCP** sichert Übertragung (Quittierung, Staukontrolle)
  → **UDP** schnell, verbindungslos (z. B. für Streaming)

---

## ☁️ 3.3.5 Cloud-, Fog- und Edge-Computing unterscheiden

| Modell    | Beschreibung                                                                     |
| --------- | -------------------------------------------------------------------------------- |
| **Cloud** | Zentrale IT-Infrastruktur im Internet (Public, Private, Hybrid, Community Cloud) |
| **Fog**   | Dezentrale Verarbeitung nahe Sensoren und Aktoren                                |
| **Edge**  | Server am Rand des Internets für zeitkritische Daten                             |

**Cloud-Dienste:** IaaS (Infrastruktur), PaaS (Plattform), SaaS (Software), XaaS („Anything as a Service“)

---

## 🕸️ 3.4 Netzwerkstrukturen und -komponenten

### Topologien

* **Stern** (Standard in LANs)
* **Masche** (fehlerresistent)
* **Bus**, **Ring**, **Zelle**, **Punkt-zu-Punkt**

### Strukturierte Verkabelung

* **Primärverkabelung:** Standort → Gebäude
* **Sekundärverkabelung:** Gebäude → Etagen
* **Tertiärverkabelung:** Etagen → Anschlussdosen
  → Max. Channel Link 100 m (90 m Permanent Link + Patchkabel)

### Medien und Kategorien

| Kategorie  | Bandbreite   | Anwendung     |
| ---------- | ------------ | ------------- |
| Cat 5e     | 100 MHz      | bis 1 Gbit/s  |
| Cat 6 / 6a | 250–500 MHz  | bis 10 Gbit/s |
| Cat 7 / 8  | 600–2000 MHz | bis 40 Gbit/s |

**Lichtwellenleiter:** Multimode (OM1–OM5), Singlemode (OS1–OS2)

---

## ⚙️ 3.5 Integration von Clients planen und durchführen

### Schritte

1. **Ist-Aufnahme** des Netzes (Verteiler, Dosen, Dokumentation)
2. **IP-Konfiguration** (Adresse, Subnetz, Gateway, DNS)
3. **Anschluss herstellen** (Patchen, Testen, Dokumentieren)
4. **Drucker und Netzressourcen** einbinden
5. **WLAN-Zugang einrichten** (SSID, Passwort PSK)
6. **IP prüfen** mit `ipconfig`, `ping`, `tracert`
7. **DHCP** nutzen (dynamische Adressvergabe)

**Cloud-Nutzung:** Online-Speicher (Dropbox, OneDrive), Online-Office (Google Docs etc.) → DSGVO beachten.

---

## 👥 3.5.3 Benutzer anmelden

* **Lokale Benutzerkonten** auf dem PC
* **Netzwerkbenutzer** über zentrale Authentifizierung (Active Directory oder RADIUS)
  → **AAA-Prinzip**: Authentication – Authorization – Accounting

---

## 🔍 3.6 Netzwerkfunktion prüfen und warten

### Tests

| Befehl                  | Zweck                          |
| ----------------------- | ------------------------------ |
| `ping`                  | Verbindung zu IP/Domain testen |
| `tracert` / `tracepath` | Route zum Ziel anzeigen        |
| `nslookup` / `dig`      | DNS-Namensauflösung prüfen     |
| `ipconfig` / `ip addr`  | IP-Einstellungen anzeigen      |

### Wartung

* **Reaktives Management:** Fehler beheben nach Auftreten
* **Proaktives Management:** präventive Wartung (Überwachung, Baseline, Monitoring)

---

## 🔧 Wichtige Fachbegriffe im Überblick

| Begriff             | Definition                              |
| ------------------- | --------------------------------------- |
| **Client**          | Rechner, der Dienste vom Server nutzt   |
| **Server**          | Rechner, der Dienste bereitstellt       |
| **IP-Adresse**      | Eindeutige Netzwerkadresse eines Geräts |
| **Switch/Router**   | Verbindet Netzwerke und leitet Pakete   |
| **DHCP**            | Automatische IP-Adressvergabe           |
| **DNS**             | Namensauflösung von Domains             |
| **Ping/Traceroute** | Verbindungstests und Latenzprüfung      |
| **Cloud/Fog/Edge**  | Formen der verteilten Datenverarbeitung |

---

✅ **Kernkompetenzen nach LF 3**

* Netzwerke analysieren und strukturieren
* Clients planvoll anschließen und konfigurieren
* Netzwerkdienste nutzen und testen
* Verfügbarkeit, Sicherheit und Wartung sicherstellen


---

## [Nächstes Thema](./3.1_Eine_Einfuehrung_in_das_Netzwerk_des_Ausbildungsbetriebs_geben/3.1_Eine_Einfuehrung_in_das_Netzwerk_des_Ausbildungsbetriebs_geben.md)