# 🛡️ IPsec (Interpretation von „IPsecn“) <span style="background:#e0f0ff;">LF9</span>

**IPsec** ist in den Materialien als **Sicherheitsprotokollfamilie auf der Internet-/Vermittlungsschicht (Layer 3)** eingeordnet (**TCP/IP-Spalte: „IP: IPv4/IPv6, IPsec, …“**). *(LF9)* 
In der Gegenüberstellung **IPv4 ↔ IPv6** wird ausdrücklich vermerkt: **„IPsec ist optional“** (bei beiden). *(LF9)* 

Ein **VPN** wird laut Material über das öffentliche Internet abgebildet und gegen Abhören **z. B. mit IPsec** (alternativ *WireGuard*, *OpenVPN*) **verschlüsselt**. *(LF9)* 

---

## 🧠 Einordnung & Zweck

* **Schichtzuordnung:** IPsec ist der **Internet-Schicht** (OSI-Layer 3) zugeordnet; **Transport (Layer 4)** baut auf **IP/IPsec** auf. *(LF9)*
* **Einsatz im VPN:** **Router mit IPsec** können als **VPN-Router** eingesetzt werden. *(LF9)* 
* **Pflichtenheft-Bezug:** Bei der **Netzwerkbereitstellung** ist **„standortübergreifende/-unabhängige Kommunikation (VPN-Modelle, Tunneling, IPsec)“** als Stichwort explizit genannt. *(LF9)* 

---

## 🧩 Typische Einsatzszenarien (aus den Materialien abgeleitet)

* **Site-to-Site-Kopplung:** Standorte über **IPsec-Tunnel** verbinden; dafür sind bei Routern **„Anzahl IPsec-Tunnel“** und **„SD-WAN-IPsec-Durchsatz“** maßgebliche Kennzahlen. *(LF9)* 
* **Remote-Zugriff/End-to-Site:** SoHo-Router können **VPN-Tunnel-Endpunkt** sein (allg. VPN-Kontext; IPsec wird im VPN-Abschnitt als Verschlüsselung genannt). *(LF3, LF9)*
* **VoIP-Absicherung:** Gespräche können – sofern Endgeräte es unterstützen – **per SRTP oder IPsec** verschlüsselt werden (SBC-Kontext). *(LF9)* 

---

## ⚙️ Planung & Auswahl (IPsec-relevante Kriterien)

* **Router/SD-WAN-Leistung:**
  **„Anzahl IPsec-Tunnel“** = wie viele Standorte angebunden werden können; **„SD-WAN-IPsec-Durchsatz“** = maßgeblich für die Leistung der Standortkopplung. *(LF9)* 
* **VPN-Gateways:** **VPN-Server** kann Teil einer **Firewall** oder eines **Routers** sein oder als **Open-Source-Server** betrieben werden. *(LF9)* 
* **Pflichtenheft:** „**VPN-Modelle, Tunneling, IPsec**“ als feste **Konzept-/Planungsbausteine** aufnehmen. *(LF9)* 

---

## 🛠️ Beispiele & Snippets aus den PDFs

### Beispiel A – VPN-Verschlüsselung laut „VPN planen“ *(LF9)*

> „Niemand im Internet kann diese Verbindung abhören, **weil sie mittels IPsec, „WireGuard“, „OpenVPN“ o. Ä. verschlüsselt wird**.“ *(LF9)* 

### Beispiel B – Router-Kriterien für IPsec-Standorttunnel *(LF9)*

* **IPsec** (Funktion), **Anzahl IPsec-Tunnel**, **SD-WAN/IPsec-Durchsatz** als Auswahlkriterien bei **Edge-/Core-Routern**. *(LF9)* 

### Beispiel C – Firewall-Regelprinzip (Absicherung der VPN-Endpunkte) *(LF9)*

**Firewalls** werden **über Regeln konfiguriert**; **jede eingehende Nachricht** wird **gegen die Regeln geprüft**. Beispielausgabe (UFW) zeigt erlaubte TCP-Ports **22/5665/80/443** (IPv4/IPv6). *(LF9)* 

```
Status: active
To        Action  From
22/tcp    ALLOW   Anywhere
5665/tcp  ALLOW   Anywhere
80/tcp    ALLOW   Anywhere
443/tcp   ALLOW   Anywhere
22/tcp (v6)    ALLOW   Anywhere (v6)
5665/tcp (v6)  ALLOW   Anywhere (v6)
80/tcp (v6)    ALLOW   Anywhere (v6)
443/tcp (v6)   ALLOW   Anywhere (v6)
```

### Beispiel D – Port-Bezug im VPN-Umfeld *(LF3)*

**OpenVPN** nutzt **Port 1194** (Übersicht der Well-known/Registered Ports). *(LF3)* 

---

## 🧭 Prozessschritte (situationsgerecht wählen & einrichten)

1. **Bedarf klären:** Standortkopplung (Site-to-Site) oder Remote-Zugriff (End-to-Site). *(LF3, LF9)*
2. **Pflichtenheft ergänzen:** **„VPN-Modelle, Tunneling, IPsec“** als Anforderungen fixieren. *(LF9)* 
3. **Komponenten dimensionieren:** Router/Firewall/VPN-Gateway nach **IPsec-Tunnelanzahl** und **IPsec-Durchsatz** auswählen. *(LF9)* 
4. **Härtung/Regeln:** Firewall gemäß Regelprinzip (Eingangspakete → **Regelprüfung**) konfigurieren. *(LF9)* 
5. **Betrieb/Monitoring:** Dokumentation/Monitoring (z. B. im Rahmen der Netzwerkbereitstellung) vorsehen. *(LF9)* 

---

## 📚 Begriffstabelle

| **Begriff**              | **Definition (gemäß Materialien)**                                                                          | **Quelle** |
| ------------------------ | ----------------------------------------------------------------------------------------------------------- | ---------- |
| **IPsec (Layer 3)**      | Sicherheitsprotokollfamilie der **Internet-Schicht**; in der Protokollübersicht explizit aufgeführt.        | (LF9)      |
| **IPsec optional**       | In der Tabelle **IPv4/IPv6** steht: **„IPsec ist optional“** (für beide).                                   | (LF9)      |
| **VPN-Verschlüsselung**  | VPN-Verbindungen werden **z. B. mit IPsec** (alternativ WireGuard/OpenVPN) **verschlüsselt**.               | (LF9)      |
| **VPN-Router mit IPsec** | **Router mit IPsec** eignen sich als **VPN-Router**.                                                        | (LF9)      |
| **Kennzahlen**           | **Anzahl IPsec-Tunnel**, **SD-WAN-IPsec-Durchsatz** = zentrale Auswahlkriterien.                            | (LF9)      |
| **SBC & IPsec**          | VoIP-Gespräche können **mittels SRTP oder IPsec verschlüsselt** werden.                                     | (LF9)      |
| **VPN-Gateway**          | **VPN-Server** als Teil einer **Firewall/eines Routers** oder als **Open-Source-Server** (z. B. WireGuard). | (LF9)      |

---

## ✅ Kurzfazit

* **Was ist IPsec?** Ein **Layer-3-Sicherheitsbaustein** innerhalb IP-basierter Kommunikation. *(LF9)* 
* **Wofür nutzen?** **VPN-Verschlüsselung** für **Remote-Zugriffe** und **Standortkopplungen**. *(LF9)* 
* **Worauf achten?** Bei Routern auf **IPsec-Tunnelanzahl** und **IPsec-Durchsatz**. *(LF9)* 

