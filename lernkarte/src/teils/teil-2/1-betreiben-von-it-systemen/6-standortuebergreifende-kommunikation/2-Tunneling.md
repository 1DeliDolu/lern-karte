# 🕳️ Tunneling (IP-Tunneling) <span style="background:#e0f0ff;">LF3, LF9</span>

**Tunneling** bezeichnet in den Materialien die Technik, bei der **LAN-interne IP-Pakete vor der Übertragung verschlüsselt und zusätzlich in Internet-IP-Pakete verpackt** werden; am Ziel werden die Internet-Pakete **entpackt und entschlüsselt**, sodass wieder **LAN-interne IP-Pakete** vorliegen. Die darüber laufende Internetverbindung heißt **VPN-Tunnel**. *(LF3)* 

Tunneling ist damit die **Grundtechnik hinter VPN-Verbindungen** (End-to-Site, Site-to-Site, End-to-End) zur **standortübergreifenden oder -unabhängigen Kommunikation**. *(LF3, LF9)*

---

## 🧠 Begriffsabgrenzung & Einordnung

* **VPN-Tunnel (Internetverbindung):** verschlüsselter Transportweg durchs unsichere Internet; nutzt IP-Tunneling. *(LF3)* 
* **IPsec im Schichtenmodell:** **IPsec** ist im **Internet-Layer (Layer 3)** verortet (tabellarische Zuordnung/Protokollübersicht). *(LF9)* 
* **Pflichtenheft-Kontext:** Bei der Netzwerkbereitstellung sind **„VPN-Modelle, Tunneling, IPsec“** explizit als Planungsstichworte für **standortübergreifende/-unabhängige Kommunikation** vorgegeben. *(LF9)*

---

## 🧩 Zusammenhang mit VPN-Modellen

* **End-to-Site (Remote-Access):** Ein **einzelner Rechner** wird in ein entferntes LAN **über einen VPN-Tunnel** eingebunden (typische Homeoffice-Situation). *(LF3)* 
* **Site-to-Site:** Ein **Niederlassungsnetz** wird per VPN-Tunnel Teil des Hauptnetzes; **viele Standorte** können so verbunden werden. *(LF3)* 
* **End-to-End:** **Zwei Rechner** werden direkt und sicher verbunden. *(LF3)* 

> **Praxisillustration aus dem Material:** Drei Rechenzentren eines Unternehmens sind **per VPN-Tunnel über das Internet** zusammengeschaltet; das **betriebliche Intranet** ermöglicht den standortweiten Zugriff. *(LF3)* 

---

## ⚙️ Geräte & Infrastruktur für Tunneling

* **SoHo-/WLAN-Router als Tunnel-Endpunkt:** „**VPN Tunnel-Endpunkt** am SoHo-Router für sicheren Zugriff aufs LAN von mobilen Stationen“. *(LF3)* 
* **VPN-Gateways (Server/Firewall/Router):** „**VPN-Gateways** erlauben einen sicheren Zugriff auf das Firmennetz; **VPN-Server** z. B. als Teil einer Firewall/eines Routers oder als **Open-Source-Server (z. B. WireGuard)**.“ *(LF9)* 
* **Router-Kennzahlen bei Standorttunneln:** **Anzahl IPsec-Tunnel** und **SD-WAN-IPsec-Durchsatz** bestimmen, wie viele Standorte und welche Leistung die Kopplung tragen kann. *(LF9)* 
* **IPsec-Hinweis (Schichten/Protokolle):** IPsec ist im Protokollüberblick dem **Internet-Layer** zugeordnet; Vergleichstabellen zeigen IPv4/IPv6-Eigenschaften (inkl. Hinweis „IPsec optional“). *(LF9)* 

---

## 🛠️ Prozessschritte (aus den Materialien abgeleitet)

1. **Pflichtenheft/Planung**: „**Standortübergreifende/-unabhängige Kommunikation (VPN-Modelle, Tunneling, IPsec)**“ als fester Bestandteil der Konzeption aufnehmen. *(LF9)*
2. **Adressierung festlegen**: **IP-Adressierungsschema** für alle relevanten Netzsegmente (WLAN/VLAN/**VPN**) planen. *(LF9)* 
3. **Komponenten auswählen**: Router/Firewalls/VPN-Gateways nach **IPsec-Tunnelanzahl**/**IPsec-Durchsatz** und Rolle (Gateway/Firewall/Router/Open-Source-VPN-Server) dimensionieren. *(LF9)*
4. **Implementieren & absichern**: Firewalls **regelbasiert** konfigurieren; jede eingehende Nachricht wird **gegen das Regelset** geprüft (Beispiel unten). *(LF9)* 
5. **Dokumentation/Monitoring**: Protokolle/Monitoring (z. B. **SNMP**) und Dokumentation vorsehen. *(LF9)* 

---

## 🧪 Beispiele & Snippets (aus den PDFs)

### Beispiel 1 – Firewall-Regeln (Tunnel-Endpunkt absichern) *(LF9)*

Die Materialien zeigen eine **ufw**-Beispielausgabe und betonen: **Firewalls werden über Regeln konfiguriert; jede eingehende Nachricht wird gegen die Regeln geprüft.** *(LF9)* 

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

*(Server bietet u. a. 22/80/443 an; Beispiel dient der Verdeutlichung des Regelprinzips.)* *(LF9)* 

### Beispiel 2 – OpenVPN-Port (Dienstadressierung) *(LF3)*

```
1194    OpenVPN
```

*(Auszug aus der Port-Tabelle der Materialien.)* *(LF3)* 

### Beispiel 3 – SoHo-Router als VPN-Endpunkt *(LF3)*

„**VPN Tunnel-Endpunkt am SoHo-Router** für sicheren Zugriff auf das LAN von mobilen Stationen im Internet.“ *(LF3)* 

### Beispiel 4 – Unternehmensweites Tunneling *(LF3)*

**Rechenzentren** (LANs) sind **per VPN-Tunnel über das Internet** verbunden; Zugriff über das **betriebliche Intranet**. *(LF3)* 

---

## 📚 Begriffstabelle

| **Begriff**                   | **Definition**                                                                                               | **Quelle** |
| ----------------------------- | ------------------------------------------------------------------------------------------------------------ | ---------- |
| **Tunneling / IP-Tunneling**  | **Verschlüsselung** von IP-Paketen und **Verpacken in Internet-IP-Pakete**; am Ziel Entpacken/Entschlüsseln. | (LF3)      |
| **VPN-Tunnel**                | Die **Internetverbindung** für den verschlüsselten Transportweg zwischen Standorten/Endgeräten.              | (LF3)      |
| **End-to-Site**               | **Ein einzelner Rechner** wird per VPN-Tunnel in ein entferntes LAN eingebunden (Homeoffice).                | (LF3)      |
| **Site-to-Site**              | **Standortnetz** wird Teil des **Hauptnetzes** (mehrere Standorte koppelbar).                                | (LF3)      |
| **End-to-End**                | **Host-zu-Host**-Absicherung über einen Tunnel.                                                              | (LF3)      |
| **IPsec (Layer 3)**           | Sicherheitsprotokollfamilie im **Internet-Layer** (Layer 3) laut Protokollübersicht.                         | (LF9)      |
| **VPN-Gateway**               | **VPN-Server** als Teil von **Firewall/Router** oder als **Open-Source-Server** (z. B. WireGuard).           | (LF9)      |
| **Router-Kennzahlen (IPsec)** | **Anzahl IPsec-Tunnel** & **SD-WAN-IPsec-Durchsatz** als Dimensionierungskriterien.                          | (LF9)      |
| **SoHo-Router-Endpunkt**      | SoHo-Router kann **VPN-Tunnel-Endpunkt** für mobile Nutzer sein.                                             | (LF3)      |

---

## 🧭 Kurzleitfaden (situationsgerecht auswählen & einrichten)

1. **Ziel klären:** Remote-User (End-to-Site), Standortkopplung (Site-to-Site) oder Host-zu-Host (End-to-End). *(LF3)* 
2. **Pflichtenheft vervollständigen:** „**VPN-Modelle, Tunneling, IPsec**“ als Anforderungen aufnehmen. *(LF9)* 
3. **Adressierung planen:** IP-Schema für VPN-Segmente definieren. *(LF9)* 
4. **Komponenten wählen:** VPN-Gateway/Firewall/Router nach **IPsec-Tunnelanzahl/-Durchsatz** auswählen; SoHo-/Enterprise-Rolle beachten. *(LF9, LF3)*
5. **Regelwerk & Tests:** Firewall-Regeln setzen (Prinzip: **Regelprüfung je eingehender Nachricht**); anschließend Funktionsprüfung/Monitoring dokumentieren. *(LF9)*

> **Hinweis:** Alle Aussagen oben sind **wörtlich am Material ausgerichtet** (keine freie Interpretation) und zeigen den **didaktischen roten Faden** von **Definition → Planung → Auswahl → Absicherung** des Tunnelings. *(LF3, LF9)*


