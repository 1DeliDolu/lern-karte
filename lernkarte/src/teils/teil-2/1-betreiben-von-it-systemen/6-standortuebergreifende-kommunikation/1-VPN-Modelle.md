# 🔐 VPN-Modelle <span style="background:#e0f0ff;">LF3, LF9</span>

Ein **VPN (Virtual Private Network)** kapselt einen aus dem **LAN ausgelagerten Netzwerkteil** (ein **einzelner Rechner** oder ein **ganzer Netzbereich**) und überträgt interne **IP-Pakete verschlüsselt** durch das öffentliche Internet (**IP-Tunneling**). Am Ziel werden die Internet-Pakete **entpackt und entschlüsselt**, sodass wieder **LAN-interne Pakete** vorliegen (**VPN-Tunnel**). (LF3) 

## 🧩 Überblick der Modelle (mit Einsatzhinweisen)

* **End-to-Site-VPN**
  Ein **einzelner Rechner** wird sicher ins entfernte LAN eingebunden; dies sind die **typischen Homeoffice-Arbeitsplätze**. (LF3) 

* **Site-to-Site-VPN**
  Ein **Niederlassungsnetz** wird Teil des **Hauptnetzes**; so lassen sich **viele Standorte** verbinden. (LF3) 

* **End-to-End-VPN**
  **Zwei Rechner** werden direkt und **sicher** miteinander verbunden (z. B. zwei „Gaming-PCs“). (LF3) 

* **Weitere in den Materialien genannte Arten**
  **SSL-VPN**, **Site-to-Site-VPN**, **Client-to-Server-VPN**. (LF9) 

> **Praxis-Illustration:** Drei **Rechenzentren (LANs)** werden über **VPN-Tunnel** im Internet **standortübergreifend** zusammengeschaltet; der Zugriff erfolgt unternehmensweit über das **betriebliche Intranet**. (LF3) 

## ⚙️ Auswahl- und Gerätehinweise (für die VPN-Modelle relevant)

* Bei **Routern** im Pflichtenheft: u. a. festlegen, **wie viele VLANs und VPNs** unterstützt werden sollen. (LF9) 
* **Router-Auswahlkriterien** enthalten explizit **„Anzahl IPsec-Tunnel“** und **„SD-WAN/IPsec-Durchsatz“** – entscheidend, wenn **Standorte per IPsec-Tunneln** verbunden werden. (LF9)

## 🧪 Beispiele / Auszüge aus den Materialien

**Heimarbeit (End-to-Site):** Einzelner Client ↔ Unternehmens-LAN (Homeoffice). (LF3) 
**Filialkopplung (Site-to-Site):** Niederlassung ↔ Zentrale; mehrere Standorte integrierbar. (LF3) 
**Host-zu-Host (End-to-End):** Direkte, gesicherte Verbindung zweier Rechner. (LF3) 

**Port-Auszug (VPN-Bezug):**

```
1194  OpenVPN
```

(LF3) 

## 📚 Begriffstabelle

| **Begriff**                        | **Definition**                                                                    | **Quelle** |
| ---------------------------------- | --------------------------------------------------------------------------------- | ---------- |
| **VPN-Tunnel**                     | Verschlüsseltes **IP-im-IP** mit Entpacken/Entschlüsseln am Ziel (**Tunneling**). | (LF3)      |
| **End-to-Site-VPN**                | **Ein Client** wird sicher in ein **entferntes LAN** integriert (Homeoffice).     | (LF3)      |
| **Site-to-Site-VPN**               | **Standortnetz** wird Teil des **Hauptnetzes**; viele Standorte koppelbar.        | (LF3)      |
| **End-to-End-VPN**                 | **Zwei Hosts** werden direkt und **sicher** verbunden.                            | (LF3)      |
| **SSL-VPN / Client-to-Server-VPN** | Von den Materialien genannte **VPN-Arten** neben Site-to-Site.                    | (LF9)      |
| **Router-Kriterien (VPN)**         | **#VPNs**, **#IPsec-Tunnel**, **SD-WAN/IPsec-Durchsatz** für die Planung.         | (LF9)      |

## 🧭 Kurzleitfaden (situationsgerecht wählen)

1. **Einzelner mobiler Nutzer?** → **End-to-Site**. (LF3) 
2. **Zwei oder mehrere Standorte koppeln?** → **Site-to-Site**; Router nach **#VPN/#IPsec-Tunnel** und **IPsec-Durchsatz** dimensionieren. (LF9)
3. **Zwei Rechner direkt verbinden?** → **End-to-End**. (LF3) 

