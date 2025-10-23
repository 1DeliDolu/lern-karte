# 🔑 **DHCP – Dynamic Host Configuration Protocol** <span style="background:#e0f0ff;">LF9/LF3</span>

**DHCP** ermöglicht die **automatische Einbindung** von Geräten in ein bestehendes Netzwerk, indem ein Client **IP-Adresse**, **Subnetzmaske**, **Name-Server (DNS)** und **Gateway** ohne manuelle Eingriffe bezieht. *(LF9)* 
Ohne einen **DHCP-Dienst/-Server** müssten diese Parameter **an jedem Client manuell** konfiguriert werden. *(LF9)* 
Das Protokoll ist in **RFC 2131** spezifiziert. *(LF9)* 

---

## ⚙️ **Ablauf der Adressvergabe (DORA)**

1. **DHCPDISCOVER**: Der Client sendet einen **Broadcast** ins **lokale Subnetz**, um verfügbare DHCP-Server zu finden. *(LF9)* 
2. **DHCPOFFER**: Alle erreichbaren DHCP-Server antworten mit einem **Angebot**, inkl. vorgeschlagener **Netzwerkadresse**. *(LF9)* 
3. **DHCPREQUEST**: Der Client **entscheidet sich** für ein Angebot und sendet (Broadcast) eine **Anforderung** mit der **Server-ID** des gewählten Servers. *(LF9)* 
4. **DHCPACK**: Der gewählte Server bestätigt und liefert die **Konfigurationsparameter** aus. *(LF9)* 
   → Bei **DHCPNAK** startet der Client die **Konfiguration erneut**. *(LF9)* 

**Ports/Protokolle:** Für DHCP (IPv4) werden **UDP 67/68** genutzt; für **DHCPv6** **UDP 546/547** (bei IPv6 **nur UDP**, kein TCP). *(LF9)*

---

## 🧩 **Rolle im SoHo-/Unternehmensnetz**

* **SoHo-Router** besitzen **immer** einen **integrierten DHCP-Server**, der die **IP-Konfigurationen** an angeschlossene Geräte verteilt; die **IP-Einstellungen** lassen sich bei Bedarf **anpassen**. *(LF3)* 
* **Kriterien** bei der Routerwahl: Ein **interner DHCP-Server** ermöglicht **dynamische IP-Adressvergabe**; ideal ist ein **konfigurierbarer Adresspool**, um zusätzlich **statische IP-Adressen** (z. B. für Server) vergeben zu können. *(LF9)* 

---

## 🖥️ **Client-Sicht & Diagnose**

* Unter Windows zeigt **`ipconfig /all`** u. a. **IPv4/IPv6-Adressen**, **DNS-Server**, **Gateway**, **DHCPv6-Client-DUID** sowie **Gültigkeitsdauer (Lease)** der Adressen. *(LF3)* 

```powershell
# Gesamte IP-Konfiguration inkl. DHCP-Lease, DNS-Server, Gateway anzeigen (Windows)
ipconfig /all
```

*(LF3)* 

---

## 🧪 **Praxisbeispiele**

* **DHCP-Einstellungen im WLAN-Router**: Werkseitig lauffähig, aber **Adressbereich/Parameter** frei **änderbar** (Screenshot/Beispiel FRITZ!Box). *(LF3)* 
* **SoHo-Router-Checkliste**: **DHCP-Server vorhanden**, **Adresspool konfigurierbar**, ggf. Parallelbetrieb mit **statischen IPs** für Serverplanungen. *(LF9)* 

---

## 📚 **Begriffstabelle**

| Begriff                      | Definition                                                                                              | Quelle   |
| ---------------------------- | ------------------------------------------------------------------------------------------------------- | -------- |
| **DHCP**                     | Protokoll zur **automatischen** Vergabe von **IP-Adresse**, **Maske**, **DNS**, **Gateway** an Clients. | *(LF9)*  |
| **DORA**                     | Ablauf **DISCOVER → OFFER → REQUEST → ACK** (bei **NAK** Neustart der Konfiguration).                   | *(LF9)*  |
| **DHCP-Ports (IPv4)**        | **UDP 67/68**.                                                                                          | *(LF9)*  |
| **DHCPv6-Ports**             | **UDP 546/547** (**nur UDP**, kein TCP).                                                                | *(LF9)*  |
| **DHCP-Server im Router**    | **Integriert** in SoHo-Routern; **verteilt** IP-Konfiguration; **Einstellungen anpassbar**.             | *(LF3)*  |
| **Adresspool/Statische IPs** | **Konfigurierbarer Pool** zur dynamischen Vergabe; **statische IPs** für Server möglich.                | *(LF9)*  |
| **ipconfig /all**            | Zeigt **Adressdaten**, **DNS**, **Gateway**, **DUID**, **Lease-Zeiten** u. a. an.                       | *(LF3)*  |
| **RFC 2131**                 | Spezifikation von **DHCP**.                                                                             | *(LF9)*  |

---

## 🧭 **Prozessschritte (kompakt)**

1. **Anfrage**: Client broadcastet **DHCPDISCOVER**. *(LF9)* 
2. **Angebot**: Server sendet **DHCPOFFER**. *(LF9)* 
3. **Anforderung**: Client sendet **DHCPREQUEST** (inkl. **Server-ID**). *(LF9)* 
4. **Zuweisung**: Server bestätigt mit **DHCPACK** (Parameter/Lease). *(LF9)* 
5. **Betrieb/Diagnose**: Am Client Kontrolle via **`ipconfig /all`**; **Lease-Gültigkeit** ablesen. *(LF3)* 

---

## 📝 **Beispiel-„Konfig-Check“ (aus dem Material abgeleitet)**

```powershell
# Prüfschritte am Windows-Client
ipconfig /all           # DHCP-/DNS-/Gateway-Infos & Lease-Zeiten prüfen
```


---

