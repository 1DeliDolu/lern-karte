# 🎥 **Echtzeitkommunikation** <span style="background:#e0f0ff;">LF9</span>

**Echtzeitkommunikation** wird in den Unterlagen konkret über **VoIP-Telefonie** (SIP/RTP) und **Videokonferenz-Anwendungen** (z. B. Jitsi, Nextcloud Talk, BigBlueButton) behandelt. *(LF9)*  

Für **Videokonferenzen** werden exemplarisch **Jitsi**, **Nextcloud Talk** und **BigBlueButton™** genannt. *(LF9)* 
Über das **Port-Konzept** (Layer 4) können auf Servern parallel u. a. **Webserver**, **Mail-Server** und ein **Videokonferenzsystem** betrieben und auf Clients Browser, E-Mail-Programm und **Videokonferenz-Client** gleichzeitig genutzt werden. *(LF9)* 

---

## 🔌 Protokolle & Sicherheit (VoIP/SIP/RTP)

Eine **VoIP-Telefonanlage** nutzt für den **Verbindungsaufbau** das **SIP (Session Initiation Protocol)** und für das eigentliche Gespräch das **RTP (Transport Protocol for Real-Time Applications)** (siehe **RFC 3550**). *(LF9)* 
**Verschlüsselung/Schutz**: Ein **Session Border Controller (SBC)** koppelt externe und interne VoIP-Netze, schützt gegen **SIP-Angriffe**, unterstützt **DDoS-Abwehr** und ermöglicht **Verschlüsselung** (z. B. **TLS**, **SRTP**, **IPsec**) sowie **Protokoll-Übersetzung** (SIP, H.323). *(LF9)* 

---

## 🕸️ Netzanforderungen & -funktionen

**QoS/ACLs auf Switches**: Bei der Switch-Auswahl werden u. a. **Quality of Service** (IP-Traffic priorisieren) und **Access Control Lists** berücksichtigt. *(LF9)* 
**VLANs**: **IEEE 802.1Q** ermöglicht getaggte VLANs; VLANs werden u. a. bei **VoIP-Gesprächen** eingesetzt und erlauben **Optimierung des Netzwerkverkehrs**, **Erhöhung der Netzwerksicherheit** sowie **Priorisierung von Netzwerkpaketen**. *(LF9)* 
**Firewalls**: Unterstützen **Quality of Service**, **Intrusion Detection/Prevention** und **DDoS-Abwehr**. *(LF9)* 
**Latenzreduktion**: **RDMA over Converged Ethernet (RoCE)** kann **Latenzen** weiter reduzieren. *(LF9)* 

---

## 🧩 Komponenten & Anwendungsbeispiele

* **VoIP-Telefonanlage**: Als **Software**, **VM** oder **Hardware-Appliance** verfügbar; **Softphones** (Headset am PC) sind möglich. *(LF9)* 
* **SBC**: Zentrale **SIP-Security**, **Codec-Aushandlung/Transcoding** (z. B. G.711, G.722, G.729), **Fax-Relay (T.38)**. *(LF9)* 
* **Videokonferenz-Stack**: **Jitsi**, **Nextcloud Talk**, **BigBlueButton™** als konkrete Lösungen. *(LF9)* 
* **„Mein Schulnetz“**: Praxisumgebung mit **OPNsense**, **Nextcloud** inkl. **Chat/Telefonie/Videokonferenzen** und getrennten **VLANs**. *(LF9)* 

---

## ⚙️ Prozessschritte für Echtzeitdienste

1. **Dienste & Ports planen** (gleichzeitiger Betrieb mehrerer Anwendungen durch **Ports**). *(LF9)* 
2. **Netzsegmentierung umsetzen** (**VLANs** für VoIP/Videokonferenz-Traffic, **Priorisierung** aktivieren). *(LF9)* 
3. **Switch-Features wählen** (**QoS**, **ACLs**, ggf. **PoE+ (802.3at)**, Glasfaser/10G/40G/100G nach Bedarf). *(LF9)* 
4. **Perimeter & Session-Sicherheit** (**Firewall** mit **QoS/DDoS/IDS/IPS**, **SBC** für **SIP-Security** & **Verschlüsselung**). *(LF9)*  
5. **Adressierung automatisieren** (**DHCP**: DISCOVER/OFFER/REQUEST/ACK; RFC 2131). *(LF9)* 
6. **Betrieb/Administration** (z. B. **Nextcloud-Server** über Browser administrieren; Apps wie **Talk** installierbar). *(LF9)* 

---

## 🧪 Beispiele & Snippets (aus den Unterlagen)

### Beispiel 1 – **Videokonferenz-Anwendungen** (Auswahl) *(LF9)* 

* **Jitsi**
* **Nextcloud Talk**
* **BigBlueButton™**

### Beispiel 2 – **Nextcloud-Bereitstellung (Talk als Echtzeit-App)** *(LF9)* 

> Varianten laut Unterlagen:

```bash
# snap
sudo snap install nextcloud

# docker
docker pull nextcloud

# VM (QEMU/KVM)
sudo bash nextcloud_install_production.sh
```

Nach der Installation ist die **Administration im Browser** möglich; **Apps** (z. B. **Talk** für Messaging/Videokonferenz) können nachinstalliert werden. *(LF9)* 

---

## 📚 Begriffstabelle

| **Begriff**        | **Definition (aus den Unterlagen)**                                                                                 | **Quelle** |
| ------------------ | ------------------------------------------------------------------------------------------------------------------- | ---------- |
| **SIP**            | **Session Initiation Protocol** für den **Verbindungsaufbau** bei VoIP.                                             | LF9        |
| **RTP**            | **Transport Protocol for Real-Time Applications** (Audio/Video-Übertragung); siehe **RFC 3550**.                    | LF9        |
| **SRTP/TLS/IPsec** | **Verschlüsselung** von VoIP-Gesprächen über **SRTP**/**IPsec**; **TLS** für Signalisierung.                        | LF9        |
| **SBC**            | Kopplung externer/interner VoIP-Netze, **SIP-Schutz**, **DDoS-Abwehr**, **Transcoding**, **Protokoll-Übersetzung**. | LF9        |
| **QoS**            | **Priorisierung** von IP-Traffic (Switch/Firewall).                                                                 | LF9        |
| **VLAN (802.1Q)**  | **Getaggte** VLANs zur **Segmentierung**, **Optimierung**, **Sicherheits-Erhöhung** und **Priorisierung**.          | LF9        |
| **Ports**          | **Adressierung von Diensten** (gleichzeitige Nutzung mehrerer Anwendungen auf Client/Server).                       | LF9        |

---

## ✅ Kurzfazit

Echtzeitkommunikation in den Unterlagen basiert konkret auf **VoIP (SIP/RTP)** und **Videokonferenz-Lösungen** (z. B. **Jitsi**, **Nextcloud Talk**, **BigBlueButton**). **QoS**, **VLAN-Segmentierung**, **SBC/Firewall-Schutz** und **automatisierte Adressierung (DHCP)** sind dabei zentrale Bausteine – mit **Browser-basierter Administration** und App-Erweiterungen (z. B. **Talk**) für den Betrieb. *(LF9)*      


