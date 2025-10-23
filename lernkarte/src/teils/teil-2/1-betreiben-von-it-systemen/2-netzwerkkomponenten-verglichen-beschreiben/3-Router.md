# 🚦 Router <span style="background:#e0f0ff;">LF3, LF9</span>

Ein **Router** ist ein **Netzwerkgerät der Vermittlungsschicht (OSI-Layer 3)**. Er **verbindet unterschiedliche Netzwerke** und **leitet IP-Pakete** anhand einer **Routing-Tabelle** zum **nächsten Router bzw. zum passenden Ausgangsport** weiter. Router **identifizieren ihre Ports, Netze und Broadcast-Domänen**; befindet sich die **Zieladresse** nicht im eigenen Netz, wird das Paket **an den nächsten Router** geschickt. *(LF3, LF9)*  

---

## ⚙️ Vermittlung/Weiterleitung (OSI-Layer 3)

**Routing** beschreibt das Verfahren zum **Weiterleiten von Nachrichtenpaketen**:

* Der Router **prüft die Ziel-IP** gegen die **interne Weiterleitungs-/Routingtabelle** und wählt den **Ausgabe-Port**. *(LF9)* 
* **Kleine Netze**: häufig **statische Routing-Tabellen**. **Große Netze/Internet**: **dynamisches Routing**, d. h. **jedes Paket kann einen anderen Weg** nehmen. *(LF9)* 

---

## 🗺️ Beispiel: Routing-Tabelle (vereinfachtes Schema)

Im Beispiel sind mehrere **/24-Netze** direkt an einen Router angeschlossen. Die **Routing-Tabelle** enthält je Netz einen Eintrag mit **Ausgabe-Port** und **Port-IP** *(LF9)*: 

| Netzwerk    | Ausgabe-Port | IP-Adresse des Router-Ports | Bemerkung         |
| ----------- | ------------ | --------------------------- | ----------------- |
| 10.0.0.0/24 | Port 1       | 10.0.0.1                    | Netz Hauptgebäude |
| 10.0.1.0/24 | Port 2       | 10.0.1.1                    | Netz Entwicklung  |
| 10.0.2.0/24 | Port 3       | 10.0.2.1                    | Netz Lager        |
| …           | …            | …                           | …                 |

**Ablauf:** Für jedes ankommende IP-Paket sucht der Router anhand der **Ziel-IP** den **passenden Port** und **leitet** das Paket **dort weiter**. *(LF9)* 

---

## 🧭 Default-Gateway am Client

Im IP-Kontext wird der Router auf dem Client als **Standardgateway/Default-GW** eingetragen (z. B. *192.168.1.1*). So kann der Client Ziele **außerhalb des eigenen Subnetzes** erreichen. In Übungsbeispielen wird explizit geprüft, ob Host und **Router im selben Subnetz** liegen (u. a. via **ipconfig**-Ausgaben mit **Default-GW**). *(LF3)*  

---

## 🧠 IP-Adressierung & Routing-Kontext (IPv4/IPv6)

* **Adressierungsschicht (Layer 3)** umfasst **IPv4/IPv6**; **Port-Nummern** (Layer 4) adressieren Dienste auf Endsystemen. *(LF9)*  
* **IPv4 vs. IPv6 (Kerndifferenzen für Routing)**:

  * **NAT erforderlich** bei IPv4, **IPv6 kommt ohne NAT aus**. *(LF9)* 
  * **Packet-Size/Fragmentierung**: IPv4 **kann fragmentieren**; IPv6 **vermeidet Fragmentierung im Router** (Mindestpaketgröße 1280 Byte). *(LF9)* 

---

## 🧩 Router-Typen & Einsatz

* **Heimrouter (SoHo-Router):** All-in-One-Geräte mit **WAN-Interface**, oft kombiniert mit **Firewall, Access Point, Switch, Telefonie, Medienserver**. *(LF9)* 
* **Edge-Router:** Leistungsstarke **Übergangspunkte** zwischen **Firmennetz und Internet/Partnernetz**. *(LF9)* 
* **Core-Router:** **Höchstperformante** Router in **Provider-Backbones**, i. d. R. **ohne Zusatzfunktionen**, **Glasfaser-verkabelt**. *(LF9)* 
* **Virtuelle Router:** **Software-basierte** Router, u. a. in **SD-WAN**-Szenarien. *(LF9)* 

---

## 🌐 WAN-Anbindung & Providereinflüsse

* **WAN-Zugänge** für Router: **DSL**, **Kabel-TV**, **Glasfaser (LWL)**, **Mobilfunk** – Auswahl entsprechend **Lasten-/Pflichtenheft**. *(LF9)*  
* **Praxisbeispiele**:

  * **LTE-WAN-Router** als Ersatz für schlechtes DSL inkl. **DHCP-/DNS-Server**-Funktion im Gerät. *(LF9)* 
  * Provider vergeben teils **dynamische IPv4 (nicht-öffentlich) + öffentliche IPv6**; **IPv4-NAT** erfolgt **beim Provider-Gateway**. *(LF9)* 

---

## 🔄 Prozessschritte der Weiterleitung (didaktisch komprimiert)

1. **Ziel-IP prüfen** → **eigene Netze** vs. **fremde Netze**. *(LF9)* 
2. **Routing-Tabelle nach bestem Eintrag durchsuchen** → **Ausgabe-Port** bestimmen. *(LF9)* 
3. **Paket ausleiten** → an **nächsten Router** oder **Zielnetz**. *(LF9)* 
4. **Kleine Netze**: **statisch** gepflegte Einträge; **große Netze/Internet**: **dynamisches Routing** (Pakete können **verschiedene Wege** nehmen). *(LF9)* 
5. **Zugangsnetz** (Provider): **Adressvergabe/NAT-Strategie** beachten (z. B. **CGNAT** bei IPv4, **Dual-Stack** mit IPv6). *(LF9)*  

---

## 🧪 Praktische Beispiele

### Beispiel 1: **Subnetting & Routing-Reichweiten**

Aufteilung 192.168.0.0/24 in **16 Subnetze** (VLAN-Größenbedarf → **4 Subnetz-Bits**, **Hostbereich 4 Bit**). Tabelle mit **Net-ID**, **erster/letzter Host**, **Broadcast** zeigt die resultierenden Teilnetze (z. B. 192.168.0.0/28 … 192.168.0.240/28). *(LF9)* 

### Beispiel 2: **Default-Gateway am Client prüfen**

Übungsaufgabe: **Ist der Host im gleichen Subnetz wie der Router?** (z. B. *IP 192.168.1.210/25*, **Default-GW 192.168.1.1**). Ziel: **Erreichbarkeit (Ping)** aus **Subnetzsicht** beurteilen. *(LF3)* 

### Beispiel 3: **Gastnetz via LTE/WLAN-Router**

Im **KMU-Netzplan** stellt ein **LTE/WLAN-Router** ein **Gastnetz** bereit (Trennung vom Büronetz). *(LF9)* 

---

## 📚 Begriffstabelle

| Begriff                                 | Definition                                                                                                         | Quelle |
| --------------------------------------- | ------------------------------------------------------------------------------------------------------------------ | ------ |
| **Router**                              | Layer-3-Gerät, verbindet Netze und **leitet IP-Pakete** per **Routing-Tabelle** weiter.                            | LF9    |
| **Routing**                             | Verfahren zur **Weiterleitung**: Ziel-IP prüfen → **Tabelleneintrag** → **Ausgabe-Port**.                          | LF9    |
| **Default-Gateway**                     | Router-Adresse am Host für **Ziele außerhalb des Subnetzes**.                                                      | LF3    |
| **Statisches Routing**                  | **Manuell gepflegte** Einträge, typisch in **kleinen Netzen**.                                                     | LF9    |
| **Dynamisches Routing**                 | **Automatische Pfadwahl** in großen Netzen/Internet; **Pakete** können **verschiedene Wege** nehmen.               | LF9    |
| **SoHo-/Edge-/Core-/virtueller Router** | Typen nach **Einsatzbereich** und **Leistungsvermögen**.                                                           | LF9    |
| **IPv4/IPv6 (NAT/Fragmentierung)**      | **IPv4**: NAT häufig **erforderlich**; **IPv6**: **ohne NAT**, Router werden **entlastet** (keine Fragmentierung). | LF9    |
| **WAN-Anschluss**                       | Möglich: **DSL, Kabel-TV, LWL, Mobilfunk** – abhängig von Anforderungen.                                           | LF9    |

---

## 🧭 Bonus: OSI-Einordnung & Dienste

Zur Einordnung im Stack: **Schicht 3 (IP)** vermittelt zwischen Netzen; **Schicht 4 (Ports)** adressiert Dienste (z. B. 22/SSH, 53/DNS, 80/443 HTTP/HTTPS), die über den Router erreichbar sind. *(LF9)*  

---

