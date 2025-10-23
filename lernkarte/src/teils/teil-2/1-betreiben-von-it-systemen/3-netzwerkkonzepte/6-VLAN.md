# 🧩 VLAN (Virtual Local Area Network) <span style="background:#e0f0ff;">LF3, LF9</span>

Ein **VLAN** ist ein **logisches (virtuelles) Teilnetz** innerhalb eines physikalischen LANs. Es gruppiert beliebige Hosts zu einer **zusammenhängenden logischen Gruppe**, sodass **nur Hosts im selben VLAN miteinander kommunizieren**; Kommunikation zwischen VLANs erfordert Routing (**Inter-VLAN-Routing**). **VLANs arbeiten auf OSI-Schicht 2 (Sicherungsschicht)**. *(LF9)* 

Der Standard **IEEE 802.1Q** ermöglicht **paketbasierte „getaggte“ VLANs**: **jedes Ethernet-Paket erhält einen VLAN-Tag (VLAN-ID)**. Über diese VLAN-IDs wird das Netz **segmentiert**, was die **Netzwerkperformance** erhöhen kann (z. B. weniger Broadcast-Last). *(LF9)* 

---

## 🔧 Funktionsprinzip: Tagging, Trunk & Access

Bei **VLANs** werden Ethernet-Frames um **4 Byte** erweitert (**802.1Q-Tag**). Der Tag enthält u. a. eine **12-Bit-Zahl zur Unterscheidung der VLANs** (**VLAN-ID**). *(LF3)* 

* **Trunk-Leitungen (Switch↔Switch):** transportieren **getaggte Frames** und damit **mehrere VLANs gleichzeitig**. *(LF3)* 
* **Access-Leitungen (Endgerät↔Switch):** transportieren **untagged Frames**; der **Switch fügt/entfernt** den Tag je nach Port-Zugehörigkeit. *(LF3)* 

**Merksatz:** „**Zwischen Switches getaggt (Trunk), zum Client untagged (Access)**.“ *(LF3)* 

---

## 🎯 Ziele & Nutzen

* **Logische Gruppierung** von Komponenten (z. B. nach Abteilungen). *(LF9)* 
* **Optimierung des Netzwerkverkehrs** (Segmentierung, weniger Störungen zwischen Kommunikationspartnern). *(LF9)* 
* **Erhöhung der Netzwerksicherheit** (Trennung von Broadcast-Domänen). *(LF9)* 
* **Priorisierung von Netzwerkpaketen** (QoS-Unterstützung angegeben). *(LF9)* 

---

## 🗂️ OSI-Einordnung & Inter-VLAN-Routing

* **VLANs auf Layer 2**, **Routing zwischen VLANs** auf Layer 3 (z. B. über einen Router/L3-Switch). *(LF9)* 
* In vielen Geräten lässt sich **pro Port** konfigurieren, **welcher VLAN-ID** er angehört und **ob Inter-VLAN-Routing** (zwischen VLANs) **erlaubt** ist. *(LF9)* 

---

## 🧮 Wie viele VLANs sind möglich?

Der **VLAN-Tag** enthält eine **12-Bit-VLAN-ID** ⇒ **(2^{12} = 4096) unterscheidbare VLANs** (didaktische Angabe). *(LF3)* 

---

## 🧪 Beispiele & praktische Illustrationen

### Beispiel A: Abteilungs-VLANs mit Subnetzen (Port-Management)

VLAN-Planung mit **Port-Zuordnung** und **eigenen IP-Netzen** pro VLAN: *(LF9)*

* **VLAN 1 – Personalabteilung:** **192.168.10.0/24**
* **VLAN 2 – Vertrieb:** **192.168.20.0/24**
* **VLAN 3 – Produktion:** **192.168.30.0/24**
* **VLAN 4 – Marketing:** **192.168.40.0/24**  

> Hinweis: Die **VLAN-Konfiguration** erfolgt typischerweise im **„Port-Management“** des (Managed) Switches, **Port → VLAN-ID** zuweisen, ggf. **Inter-VLAN-Routing** aktivieren/deaktivieren. *(LF9)* 

### Beispiel B: Subnetting passend zur VLAN-Größe

**Ausgangsnetz:** 192.168.0.0/24.
**Ziel:** VLANs mit **max. 10 Hosts**. ⇒ **4 Host-Bits** verbleiben (14 Hosts nutzbar), **4 Subnetz-Bits** für die VLAN-Aufteilung ⇒ **16 Subnetze**. *(LF9)* 

Tabellenauszug (erste Subnetze): *(LF9)*

* **192.168.0.0/28** … **192.168.0.1–.14** (Broadcast .15)
* **192.168.0.16/28** … **192.168.0.17–.30** (Broadcast .31)
  … *(Fortsetzung im Lehrtext)*. 

### Beispiel C: Getaggt vs. ungetaggt (Leitungsteilstrecken)

* **PC ↔ Switch (Access):** **ungetaggte Frames**.
* **Switch ↔ Switch (Trunk):** **getaggte Frames mit VLAN-ID**. *(LF3)* 

---

## 📋 Begriffe & Definitionen

| Begriff                | Definition                                                                                                     | Quelle |
| ---------------------- | -------------------------------------------------------------------------------------------------------------- | ------ |
| **VLAN (Virtual LAN)** | **Logisches Teilnetz** im LAN; **Layer-2-Segmentierung**; Kommunikation standardmäßig nur innerhalb des VLANs. | LF9    |
| **IEEE 802.1Q**        | Standard für **VLAN-Tagging**; **VLAN-ID** im Ethernet-Frame.                                                  | LF9    |
| **VLAN-Tag (4 Byte)**  | Zusatztag im Ethernet-Header mit **12-Bit-VLAN-ID** (2^12 VLANs).                                              | LF3    |
| **Trunk**              | **Switch↔Switch-Verbindung** für **getaggte** Frames (mehrere VLANs).                                          | LF3    |
| **Access-Port**        | **Endgeräte-Port** (PC↔Switch) für **ungetaggte** Frames; Switch ordnet Port einem VLAN zu.                    | LF3    |
| **Inter-VLAN-Routing** | **Routing zwischen VLANs** (Layer 3), konfigurierbar/erlaubt z. B. pro Port.                                   | LF9    |

---

## 🛠️ Planungsschritte (VLAN-Design)

1. **Anforderungen sammeln & Gruppen festlegen** (z. B. Abteilungen, Dienste, Gastnetz). *(LF9)* 
2. **VLAN-IDs & Ports zuweisen** (Port-Management am Switch; Access/Trunk definieren). *(LF9, LF3)*
3. **IP-Adressierungsschema festlegen** (**für WLAN, VLAN, VPN etc.**; Subnetting nach Host-bedarf). *(LF9)*
4. **Inter-VLAN-Routing** planen (falls VLAN-übergreifende Kommunikation nötig). *(LF9)* 
5. **QoS/Priorisierung** ggf. konfigurieren (angestrebte Dienstqualität). *(LF9)* 

---

## 🧠 Kontrollfragen (aus dem Lehrtext-Kontext)

* **„In wie viele VLANs kann man ein Netzwerk aufteilen?“** → **4096 (2^12)** **unterscheidbare VLAN-IDs** (didaktische Angabe). *(LF3)* 
* **„Wo werden getaggte/ungetaggte Frames übertragen?“** → **Trunk: getaggt**, **Access: ungetaggt**. *(LF3)* 

---


