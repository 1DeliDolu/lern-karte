# 🔐 Verschlüsselung auf Netzwerkebene & VPN <span style="background:#e0f0ff;">LF3, LF9</span>

**Verschlüsselung auf Netzwerkebene** bedeutet vor allem **IPsec**: Es arbeitet auf **OSI-Schicht 3 (Vermittlungsschicht)** und stellt **Vertraulichkeit, Integrität und Manipulationsschutz** durch **Verschlüsselung und Authentifizierung** bereit (RFC 4301). *(LF9)* 
Zum **Schlüsseltausch** bei der Verbindungsaufnahme wird – wie bei **TLS/AES/openssh** – das **Diffie-Hellman-Verfahren** genutzt: Öffentliche Schlüssel werden ausgetauscht; nur der Empfänger mit dem **privaten Schlüssel** kann entschlüsseln. *(LF9)* 

Ein **Virtual Private Network (VPN)** bildet ein **logisches, in sich geschlossenes Netz** über ein **öffentliches Netz** ab; es nutzt **Tunneling** auf den unteren OSI-Schichten für IP-Datenverkehr. *(LF9)* 
Beim **IP-Tunneling** werden **LAN-interne IP-Pakete** zusätzlich **verschlüsselt** und in **Internet-IP-Pakete** „verpackt“; am Ziel werden sie **entpackt und entschlüsselt** – das ist der **VPN-Tunnel**. *(LF3)* 

---

## 🧭 OSI-Einordnung & Protokolle

* **Netzwerkschicht (Layer 3):** **IPv4/IPv6, IPsec**. *(LF9)* 
* **Transportschicht (Layer 4):** **TCP/UDP, TLS, DTLS** (TLS/DTLS sichern Verbindungen *oberhalb* IP). *(LF9)* 
* **Hinweis VoIP:** Gespräche laufen über **RTP**; **SRTP** oder **IPsec** können verschlüsseln. *(LF9)* 

---

## 🧩 VPN-Arten & Einsatzszenarien

* **End-to-Site-VPN:** Einzelner Rechner (typisch **Homeoffice**) wird sicher in das Unternehmens-LAN eingebunden. *(LF3)* 
* **Site-to-Site-VPN:** **Standortnetze** werden standortübergreifend wie **ein Netz** zusammengeschlossen. *(LF3)* 
* **End-to-End-VPN:** **Zwei Rechner** verbinden sich direkt und sicher (z. B. zwei PCs). *(LF3)* 
* **Weitere VPN-Formen im Überblick:** **SSL-VPN, Site-to-Site-VPN, Client-to-Server-VPN**. *(LF9)* 

**Wichtig:** VPN **verschleiert IP-Adresse/Identität** und **verschlüsselt den Datenverkehr in Echtzeit**, **schützt aber nicht** vor **Kompromittierung des Endgeräts**. *(LF9)* 

---

## 🛠️ Technik & Komponenten (Planung/Kauf)

* **Router/SD-WAN:** Achten auf **IPsec-Fähigkeit**, **Anzahl IPsec-Tunnel**, **SD-WAN-/IPsec-Durchsatz**, **CPU/RAM**, **Dual-Power/PoE**. *(LF9)* 
  Router **mit IPsec** können als **VPN-Router** eingesetzt werden. *(LF9)* 
* **Firewalls:** Häufig mit **VPN-Gateway-Funktion**; **max. Anzahl gleichzeitiger VPN-Verbindungen** ist relevant. *(LF9)* 
* **Reverse-Proxy/TLS-Offloading:** Entlastet Webserver und **bündelt SSL/TLS-Zertifikate**; gehört zur **Perimeter-Sicherheitskette**. *(LF9)* 
* **Wirtschaftlich/Sicherheit:** **UTM/NGFW** bündeln Schutzfunktionen; **VPN** oft integriert. *(LF9)* 

**Leistungsaspekt:** **VPN-Router** können zum **Flaschenhals** werden (viele Tunnel, Videokonferenzen) → **ausreichenden IPsec-Durchsatz** wählen. *(LF9)* 

---

## 🔒 „Wie sichert IPsec?“ – Kurz erklärt

1. **Aushandlung & Schlüssel:** **Diffie-Hellman** tauscht sicher Materialien aus; nur der Besitzer des **privaten Schlüssels** kann entschlüsseln. *(LF9)* 
2. **Schutzwirkung:** **Verschlüsselung** (Vertraulichkeit), **Integrität** und **Manipulationsschutz** durch **Authentifizierung**. *(LF9)* 

---

## 🧪 Beispiele & Praxisfälle

* **Homeoffice-Mitarbeiter:** **End-to-Site-VPN**: Laptop baut **IPsec-Tunnel** zum Firmen-Gateway auf; Client erhält **interne IP**; gesamter Verkehr läuft durch den Tunnel. *(LF3, LF9)*
* **Zweigstelle ↔ Zentrale:** **Site-to-Site-VPN** zwischen zwei VPN-Routern; Netze erscheinen wie eins. *(LF3)* 
* **VoIP-Absicherung:** **SRTP/IPsec** für Gesprächsdaten; **SBC** schützt **SIP-Signalisierung** und kann Verschlüsselung übernehmen. *(LF9)* 

---

## 🧰 Beispielkonfiguration (Ausschnitt/Illustration aus dem Lehrtext)

Ein **VPN-Client** (z. B. **Linux Netzwerkverwaltung**) kann **Zertifikats-basierte (TLS)** Anmeldung verwenden: **CA-Zertifikat**, **Benutzer-Zertifikat** und **geheimer Benutzerschlüssel** werden konfiguriert. *(LF9)* 

> **Hinweis:** Dieses Beispiel zeigt **Client-seitige Felder** (TLS-Zertifikate) aus der GUI und illustriert die **Authentifizierung**; die eigentliche **Netzwerkebenen-Verschlüsselung** erfolgt z. B. per **IPsec**. *(LF9)* 

---

## 💻 Beispielcode zur Verschlüsselung (Grundprinzip) <span style="background:#e0f0ff;">nicht VPN-spezifisch</span>

Der Lehrtext demonstriert **symmetrische Verschlüsselung** in **Python** (Bibliothek **cryptography**, **Fernet**/**AES-128-CBC**) – **didaktisch**, um **Schlüsselgenerierung, Ver-/Entschlüsselung** zu verstehen. *(LF11a)* 

```python
from cryptography.fernet import Fernet
# ----------------------------------------------
# Schlüsselerzeugen
# ----------------------------------------------
key = Fernet.generate_key()
cipher = Fernet(key)
plain_text = 'Eine wirklich sehr geheime Nachricht!'
```

*(LF11a)* 

> **Lernhinweis:** Der Lehrtext rät ausdrücklich: **Keine eigenen Krypto-Algorithmen erfinden/implementieren**, sondern **bewährte Bibliotheken** nutzen. *(LF11a)* 

---

## ⚙️ Prozessschritte (Planung & Umsetzung)

1. **Ziel & Reichweite festlegen:** Remote-Einzelplatz (**End-to-Site**) vs. Standortkopplung (**Site-to-Site**) vs. Punkt-zu-Punkt (**End-to-End**). *(LF3, LF9)*
2. **Protokoll/Schicht wählen:** **IPsec** (Layer 3) vs. **TLS/DTLS** (Transport-/Anwendungsebene, z. B. SSL-VPN). *(LF9)* 
3. **Komponenten dimensionieren:** **VPN-Gateway/Firewall** (max. **VPN-Sessions**), **Router (IPsec-Durchsatz, #Tunnel, CPU/RAM)**. *(LF9)*
4. **Schlüssel & Zertifikate:** **Diffie-Hellman**/Zertifikatsbasierte Authentifizierung (TLS-Felder am Client). *(LF9)* 
5. **Perimeter ergänzen:** **Reverse-Proxy** für TLS-Offloading/Verteilung; **Segmentierung (VLAN/Netzsegmente)** nach Schutzbedarf. *(LF9)* 
6. **Endpoint-Sicht:** **VPN schützt Transport**, **nicht** das **Endgerät** → **MFA/Endpoint-Protection** einplanen. *(LF9)* 

---

## 📚 Begriffe & Definitionen

| Begriff                                     | Definition                                                                                      | Quelle |
| ------------------------------------------- | ----------------------------------------------------------------------------------------------- | ------ |
| **IPsec (Layer 3)**                         | Netzwerkebenen-Sicherheit mit **Verschlüsselung, Integrität, Authentifizierung**; **RFC 4301**. | LF9    |
| **VPN**                                     | **Logisches Netz** über das Internet mit **Tunneling** auf unteren Schichten.                   | LF9    |
| **IP-Tunneling/VPN-Tunnel**                 | **Verschlüsselte** LAN-Pakete werden in **Internet-Pakete** gekapselt, am Ziel entpackt.        | LF3    |
| **End-to-Site / Site-to-Site / End-to-End** | VPN-Topologien: **Einzelrechner**, **Standortkopplung**, **Rechner-zu-Rechner**.                | LF3    |
| **TLS/DTLS**                                | **Transport-/Sitzungsabsicherung** oberhalb IP; nicht Netzwerkschicht.                          | LF9    |
| **SBC/SRTP**                                | **SIP-Schutz** & **Verschlüsselung** von VoIP (TLS/SRTP), alternativ **IPsec**.                 | LF9    |
| **VPN-Gateway/Firewall**                    | Firewall mit **VPN-Gateway**; **Anzahl Sessions** als Kriterium.                                | LF9    |
| **Router-Kriterien**                        | **IPsec-Durchsatz**, **#IPsec-Tunnel**, **CPU/RAM**, **SD-WAN**.                                | LF9    |

---

## 🎯 Merksätze

* **IPsec = Netzwerkschicht-Verschlüsselung**; schützt **Inhalt & Integrität** auf **Layer 3**. *(LF9)* 
* **VPN ≠ Endpunktschutz:** Geräte brauchen **MFA/Endpoint-Security**. *(LF9)* 
* **Planung zählt:** **Durchsatz & Tunnelanzahl** bestimmen die **Router/Firewall-Wahl**. *(LF9)* 

