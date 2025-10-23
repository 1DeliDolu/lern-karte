# 🌐 Netzwerkkonzepte: Topologien, Infrastrukturen & Sicherheit <span style="background:#e0f0ff;">LF3, LF9</span>

Ein **Computernetz** umfasst Verbindungen selbstständiger Rechner/Devices (Clients, Server, Drucker, Sensoren/Aktoren) zum **Austausch von Daten**; Ziele sind u. a. Kommunikations-, Daten-, Funktions-, Ressourcen-, Last- und **Sicherheits-/Verfügbarkeitsverbund**. (LF3) 

**Hauptbausteine**: **Topologie** („Landkarte“ der Leitungsführung), **Netzwerk-Medien** (Kupfer/Glas/Luft), **Verteiler/Anschlussdosen**, **Protokolle** (TCP/IP, ARP, DHCP, DNS) und **Adressierung** (MAC/IPv4/IPv6). (LF3) 

---

## 🗺️ Netzausdehnung: LAN/WAN/MAN/GAN & PAN

Die Unterlagen führen **Netzausdehnung** mit **LAN, WAN, MAN, GAN, PAN** als Kategorien; **LAN/WLAN** sind betrieblich/örtlich, **PAN** (inkl. **Bluetooth**) sowie **WLAN** zählen zu **drahtlosen Netzen**. (LF3) 

> Hinweis: Die PDFs listen **LAN/WAN/MAN/GAN/PAN** als Ausdehnungs-Kategorien, ohne Entfernungsgrenzen festzulegen; die Charakterisierung erfolgt über Einsatzkontext (Betrieb, Gebäude, Etage, Raum, Person) und Technik (Kupfer/Glas/Funk). (LF3) 

---

## ⚡ Datenübertragungsrate & Medien

**Kenngrößen**: **Datenmenge D**, **Zeit t**, **Datenrate C = D / t**, **Bandbreite B**, **Signalgeschwindigkeit** (Kupfer/Glas ~ 2·10⁸ m/s). (LF3) 
**Beispiele** (Auszug): **Ethernet** 10 Mbit/s bis **400 Gbit/s**; **WLAN** nach IEEE 802.11 (siehe unten); **DSL** bis 250 Mbit/s; **Fibre Channel** bis 32 Gbit/s. (LF3) 

**Ethernet-Kabel/Abschirmung**: UTP, STP, S/FTP; **RJ45**, **Patch-Panels**; **LWL** für hohe Raten/Weiten; **WLAN** als Funkübertragung. (LF9) 

---

## 🧵 Strukturierte Verkabelung (UGV)

**Normen**: **EN 50173 / ISO/IEC 11801 / TIA 568A/B** für **universelle Gebäudeverkabelung**. (LF3) 
**Hierarchie (sternförmig)**: **SV** (Standort) → **GV** (Gebäude) → **EV** (Etage) → **TA** (Anschlussdose). **Primär/Sekundär/Tertiärverkabelung** mit Kupfer/LWL; **Permanent Link ≤ 90 m**, **Channel Link ≤ 100 m**. (LF3)  
**Topologie-Gesamtbild**: **Erweiterter Stern**; mit Querverbindungen **unvollständige Masche** zur Ausfallsicherung. (LF3) 
**Dokumentation**: **Lagepläne, Dosen-/Port-Beschriftung, Patch-Pläne**, Messprotokolle – **laufend aktualisieren**. (LF3)  

---

## 🕸️ Netzwerktopologien (FI DV/FI SI)

**Stern** (CSMA/CD), **Erweiterter Stern** (Standard in LANs), **Voll-/unvollständige Masche** (Redundanz), **Bus** (historisch, CSMA/CD), **Ring** (Token Passing), **Zelle** (Funkzellen z. B. WLAN/Bluetooth, CSMA/CA), **Punkt-zu-Punkt**. (LF3)  

---

## 🧩 VLAN – logische Segmentierung

**VLAN** trennt logische Teilnetze auf derselben physikalischen Infrastruktur; Zuweisung/Trennung über **Switch-Ports/Trunks**, häufig am **Patch-Panel** in die VLAN-Ports des Switches geführt. (LF9)  

**Router/VLAN-Beispiel** (Tabellen-Konfiguration je Port/Subnetz): **Port 2 → 10.10.10.1 (HR)**, **Port 3 → 10.10.11.1 (Marketing)**, **Port 4 → 10.10.12.1 (Buchhaltung)**. (LF9) 

---

## 🔒 Zugriffskontrolle im Netzwerk (RADIUS, …)

**Identitäts- & Berechtigungsmanagement** (BSI-Bausteine **ORP.4**, **APP.2.2 Active Directory**, **SYS.1.1.A2 Benutzerauthentisierung**) bildet die Grundlage für **Netz-Zugriffskontrolle**. (LF9) 
In der **Stichwortsammlung** erscheinen **RADIUS** (z. B. im WLAN-Kontext) und **802.1X-nahe Themen** als Schlagworte. (LF9) 

> **Transparenz:** **Kerberos** wird in den bereitgestellten PDFs **nicht** explizit erläutert; die Unterlagen verweisen allgemein auf **Active Directory** und **Benutzerauthentisierung/MFA/SSO/Zero-Trust** im Endpoint-/IAM-Kontext. (LF9)  

---

## 🧪 Verschlüsselung auf Netzwerkebene & VPN

**VPN** kapselt/verschlüsselt LAN-IP-Pakete in Internet-IP-Pakete (**IP-Tunneling**, **VPN-Tunnel**); Varianten: **End-to-Site** (Homeoffice), **Site-to-Site** (Niederlassung), **End-to-End**. (LF3) 
**VPN im Sicherheitskonzept**: **SSL-VPN, Site-to-Site, Client-to-Server**; Anonymisierung der IP/verschlüsselter Tunnel – **kein Schutz** vor lokalen Endpunkt-Risiken. (LF9) 

---

## 📶 Drahtlos: PAN/WLAN/Mesh & Bluetooth

**WLAN-Planung**: **Ist-Analyse/Scanner**, **dBm-Signalstärken** bewerten (–30 dBm sehr gut, unter –85 dBm kritisch), **AP-Anzahl/Platzierung** dokumentieren, ggf. **Repeater**/**Mesh**. (LF9) 
**WLAN-Standards** (abwärtskompatibel): 802.11a/b/g/n (**Wi-Fi 4**), 802.11ac (**Wi-Fi 5**), 802.11ax (**Wi-Fi 6**) mit steigenden max. Datenraten. (LF9) 
**WLAN-Absicherung**: **WPA3** (Perfect Forward Secrecy), **WPA2 (AES)**, **WPA/WEP** veraltet; **WPS** als Beitritthilfe; **Mesh** verbindet APs zu einem gemeinsamen WLAN. (LF9) 
**PAN/Bluetooth**: Teil der **Zell-Topologie** drahtloser Netze; Bluetooth/WLAN/Mobilfunk als Funkzellen. (LF3) 

---

## 🛡️ Sicherheitskonzepte & -risiken

**BSI-Bausteine** für Netze: **NET.1 Netzarchitektur/-management**, **NET.2 WLAN**, **NET.3 Router/Switch/Firewall/VPN**; flankierend **ISMS**, **Kryptokonzept**, **Datensicherung**, **Patch-/Änderungsmanagement**, **Protokollierung** u. a. (LF9) 
**Endpoint-/Enduser-Security**: **MFA/SSO/Zero-Trust**, **Endpoint-Protection-Suites**, **VPN-Einsatz**, **Security-Awareness** gegen Social Engineering. (LF9) 

---

## 🧭 Netzwerkplan (Vorgehen & Artefakte)

1. **Ist-Aufnahme & Doku prüfen/erstellen**: **Lage Dosen/Verteiler**, **Bezeichnung**, **Leitungsstandards/Durchsatz**, **Patch-Pläne**, **WLAN-Abdeckung** → **Lageplan** mit **Dosen/Leitungen/Verteilern**. (LF3)  
2. **Strukturierte Verkabelung planen**: **SV/GV/EV/TA**, **Primär/Sekundär/Tertiär**, **≤ 90 m/100 m**-Grenzen, ggf. **Querverbindungen** (Redundanz). (LF3)  
3. **WLAN-Plan**: **AP-Positionen/SSID/Sicherheit (WPA3/WPA2 parallel)**, ggf. **Mesh**; **Raumplan** mit APs. (LF9)  
4. **Logische Segmente**: **VLAN-Konzept**, **IP-Pläne/Subnetze**, **Routing**/**Default-Gateways**. (LF9)  
5. **Zugriffe & Security**: **IAM/AD**, **VPN-Szenarien**, **Firewall/IDS/IPS**, **BSI-Bausteine**; **Dokumentation/Abnahme/Schulung**. (LF9)  

---

## 🧪 Beispiel-Kommandos & Checks

### IP-/DNS-Check (Windows) <span style="background:#f6ffed;">LF3</span>

```bat
ipconfig /all
ping 8.8.8.8
ping example.com
```

Erklärt im Kontext **IP automatisch beziehen**, **DNS-Auflösung prüfen**. (LF3) 

### Linux-Netzwerkdiagnose (Shell) <span style="background:#f6ffed;">LF9</span>

```bash
nmcli device           # Adapter-Übersicht
lsof -i tcp            # offene TCP-Verbindungen
lsof -i udp            # offene UDP-Ports
nslookup example.com   # Namensauflösung testen
```

Anleitung und Beispiele zur Anzeige aktiver Verbindungen/Adapter. (LF9) 

---

## 🧠 Weitere Beispiele & Praxis

* **Router-/Switch-Auswahl**: SoHo-Router bündeln **WLAN AP, DHCP, VPN, DynDNS, Kindersicherung**; bei Switches u. a. **PoE, Puffergrößen, ARP-Kapazität** beachten. (LF3) 
* **Glasfaser/FttX**: **FTTB/FTTH/FTTD/FTTC**, **symmetrische Business-Tarife**; Tarif-/Upload=Download-Auswahl nach Bedarf. (LF9) 

---

## 📚 Begriffsklärungen (Auszug)

| Begriff                       | Definition (aus den PDFs)                                                                           | Quelle |
| ----------------------------- | --------------------------------------------------------------------------------------------------- | ------ |
| **Topologie**                 | Art der physischen Leitungsführung („Landkarte“ des Netzes).                                        | LF3    |
| **Stern / erweiterter Stern** | Leitungen sternförmig zum Mittelpunkt; erweiterter Stern über Ebenen – Standard in LANs.            | LF3    |
| **Masche (voll/teilw.)**      | Mehrfachverbindungen/Redundanz für Ausfallsicherheit; unvollständige Masche durch Querverbindungen. | LF3    |
| **Zelle**                     | Funkzellen (WLAN/Bluetooth/Mobilfunk) mit CSMA/CA.                                                  | LF3    |
| **Strukturierte Verkabelung** | UGV nach EN 50173/ISO/IEC 11801/TIA 568; SV→GV→EV→TA; Link-Längen 90/100 m.                         | LF3    |
| **VLAN**                      | Logische Netze auf gleicher Physik; Port-Zuweisung/Trunking am Switch/Patch-Panel.                  | LF9    |
| **VPN**                       | Verschlüsselter IP-Tunnel (End-to-Site/Site-to-Site/End-to-End).                                    | LF3    |
| **WPA3/WPA2**                 | WLAN-Verschlüsselung; **WPA3** mit Perfect Forward Secrecy empfohlen; **WPA/WEP** veraltet.         | LF9    |
| **IAM/AD**                    | Identitäts-/Rechtemanagement (MFA/SSO/Zero-Trust, AD-Bezug).                                        | LF9    |

---

## 🛠️ Mini-Rechenbeispiel Datenrate <span style="background:#f6ffed;">LF3</span>

Für eine Datei mit **D = 1 GiB ≈ 8 589 934 592 Bit** und Übertragungszeit **t = 8 s** gilt
**C = D / t ≈ 1 073 741 824 bit/s ≈ 1.07 Gbit/s** – passt zu **Gigabit-Ethernet**. (LF3) 

---

## ✅ Merkkasten (kompakt)

* **Planen**: **Ist-Analyse**, **Doku & Pläne**, **SV/GV/EV/TA**, **VLAN/IP-Plan**, **WLAN (WPA3/Mesh)**. (LF3, LF9)    
* **Sichern**: **BSI-Bausteine**, **IAM/MFA/SSO**, **VPN**; **Endpoint-Security** & **Awareness**. (LF9)  
* **Messen/Belegen**: **Signalstärken (dBm)**, **Mess-/Patch-Protokolle**, **Dokumentation**. (LF9, LF3)  

---

