# 📶 Drahtlos: PAN / WLAN / Mesh <span style="background:#e0f0ff;">LF3, LF9</span>

**Drahtlose Netze** werden in den Unterlagen als **Funkzellen** beschrieben, die Bereiche mit Funkwellen abdecken (z. B. **WLAN**, **Bluetooth**, **Mobilfunk**) und auf **CSMA/CA** zur Medienzugriffsregelung setzen. Ein **Access Point** bildet dabei den Mittelpunkt einer Zelle und bindet Mobilgeräte ins LAN ein. *(LF3)*

**PAN** (in den Normen als **Wireless PAN** geführt, z. B. **Bluetooth, ZigBee**), **WLAN** (IEEE 802.11) und **Mesh** (mehrere APs zu einem gemeinsamen Funknetz) sind die zentralen drahtlosen Konzepte in den Materialien. *(LF3, LF9)*

---

## 🧭 Grundlagen & Begriffe

* **Wireless PAN (Bluetooth, ZigBee)** ist in den **IEEE-Standards** als **IEEE 802.15.1** verortet (Kategorie **Wireless PAN**). *(LF3)* 
* **WLAN (Wireless LAN, Wi-Fi)** ist **IEEE 802.11** und arbeitet in **Funkzellen** (Zugriff über **CSMA/CA**). Zwei Betriebsarten: **Ad-hoc** und **Infrastructure (Access Point)**. *(LF3)*
* **Mesh**: Mehrere **WLAN-Access-Points** spannen **ein gemeinsames WLAN**; Endgeräte verbinden sich jeweils mit dem **nächsten/stärksten AP**. *(LF9)* 

---

## 📡 WLAN-Standards & Datenraten

Die Unterlagen listen **abwärtskompatible** IEEE-WLAN-Standards und ihre **maximalen Datenraten** (Auszug):
**802.11a** bis **54 Mbit/s** (5 GHz), **802.11b** bis **11 Mbit/s** (2,4 GHz), **802.11g** bis **54 Mbit/s** (2,4 GHz), **802.11n (Wi-Fi 4)** bis **600 Mbit/s**, **802.11ac (Wi-Fi 5)** bis **6933 Mbit/s**, **802.11ax (Wi-Fi 6)** bis **9600 Mbit/s**. *(LF9)* 

Weitere **AP-Merkmale** für die Auswahl/Planung: **Dual-Band 2,4/5 GHz**, **MU-MIMO**, **OFDMA**, **Multi-Gig-Ethernet**, **PoE-Versorgung**. *(LF9)* 

---

## 🔐 Sicherheit im WLAN (Auszug aus den Tabellen)

* **WPA3** als **Standard-Verschlüsselung**, inkl. **Perfect Forward Secrecy**; **WPA2/WPA/WEP** als **veraltet**, Nutzung von **WPA3** empfohlen. *(LF9)* 
* **SSID** = Name des Funknetzes; **WLAN-Schlüssel** sollte **≥ 20 Zeichen** haben. *(LF9)* 
* **WPS** vereinfacht die Aufnahme neuer Geräte (geräteabhängig). *(LF9)* 
* **Kompatibilität**: Da **WPA3** nur von neueren Endgeräten unterstützt wird (Stand 2021), sollten APs **WPA2 und WPA3 parallel** anbieten, um ältere Geräte zuzulassen. *(LF9)* 

---

## 🏗️ Planung von WLAN & Mesh (Praxisleitlinien aus den Unterlagen)

1. **Ist-Analyse & Ausleuchtung**
   Messung der **Signalstärke (dBm)** und **Kanäle** mit z. B. **WiFi-Analyzer**; **–30 bis –40 dBm** gilt als **gute Signalstärke**, **< –85 dBm** kritisch/instabil. Ergebnisse fließen in **Anzahl/Platzierung** der APs. *(LF9)* 
2. **Platzierung & Infrastruktur**
   **APs möglichst nahe vorhandener Netzwerkdosen** montieren; weitere APs können als **Repeater** konfiguriert werden (keine Dose nötig). *(LF9)* 
3. **Mesh vs. Einzelnetze**
   Entscheiden, ob **gemeinsames Mesh-Netz** oder **separate Netze** pro AP betrieben werden. *(LF9)* 
4. **Sicherheitsprofil**
   **WPA3** aktivieren; **WPA2 parallel** bei Bedarf; **starker Netzwerkschlüssel**; **WPS** nur gezielt. *(LF9)* 
5. **Versorgung & Montage**
   **PoE/PoE+/PoE++** planen (Leistungsbudgets je Port beachten) – typische Versorgung von **Access Points**. *(LF9)* 
6. **Dokumentation (Pflichtenheft/Plan)**
   **Raumplan** mit AP-Standorten, **Kanälen**, **Mesh/Repeater-Beziehungen** und **Sicherheitsparametern** festhalten. *(LF9)* 

---

## 🧪 Praktische Beispiele aus den Materialien

### Beispiel A – WLAN verbinden & Hotspot (Windows)

Beim **WLAN-Client** wird die **SSID** gewählt und das **Passwort (PSK, Pre-Shared Key)** eingegeben (am AP konfiguriert). Ein **Laptop** kann selbst als **Mobiler Hotspot** fungieren; das Passwort wird in den **Eigenschaften** des Hotspots gesetzt. *(LF3)* 

### Beispiel B – AP-Suche/Analyse vor Ort

**Access Points** können sichtbar installiert sein oder hinter Decken/Wänden verborgen (nur Antennen sichtbar). **Messgeräte** bzw. **WLAN-Analyse-Apps** (Smartphone) helfen, **Feldstärke** und **Kanäle** zu finden; **Störquellen** (z. B. Bluetooth, Mikrowellen) werden angezeigt. *(LF3)* 

### Beispiel C – Mesh-Betrieb

**Mesh-Funktion**: Mehrere APs bilden **ein** WLAN; Endgeräte hängen sich automatisch an **nächsten/stärksten AP** – geeignet zur **flächigen Abdeckung** ohne manuelle AP-Wechsel. *(LF9)* 

---

## 💻 Beispiel-Kommandos (Diagnose & Überblick)

> Auszug aus den Unterlagen (Linux/Windows), um **Adapter**, **Verbindungen** und **Namensauflösung** zu prüfen.

```bash
# Linux: Adapter-/Verbindungsübersicht (nmcli)
nmcli device           # Kurzübersicht aller Netzwerkadapter (inkl. WLAN)
nmcli                  # ausführliche Adapter-Infos (IP4/IP6, Routen etc.)
nmcli connection       # alle (WLAN-)Verbindungen

# Linux: aktive TCP-Verbindungen (z. B. zur Fehleranalyse)
netstat -an | grep tcp

# Linux: DNS-Auflösung prüfen
nslookup www.westermann.de
```

*(LF9)*

```powershell
# Windows: IP-Konfiguration (alle Schnittstellen, inkl. WLAN)
ipconfig
```

*(LF3)* 

---

## 📊 Signalstärke (dBm) – Orientierung

* **–30 … –40 dBm**: **gut** (stabile Verbindung).
* **< –85 dBm**: **kritisch** (keine stabile Verbindung).
  *(LF9)* 

---

## ⚙️ Prozessschritte (zusammengefasst)

1. **Ist-Messung** (Kanäle, dBm) und **Dokumentation**. *(LF9)* 
2. **AP-Platzierung** (nahe Dosen; ggf. Repeater) & **PoE-Budget** prüfen. *(LF9)*
3. **Mesh-Entscheid** (gemeinsames Mesh vs. separate Netze). *(LF9)* 
4. **Sicherheit** (WPA3, ggf. parallel WPA2, starker Schlüssel, WPS nach Bedarf). *(LF9)* 
5. **Inbetriebnahme & Kontrolle** (z. B. mit **nmcli**, **netstat**, **nslookup**, **ipconfig**). *(LF9, LF3)*

---

## 📚 Begriffstabelle

| Begriff                              | Definition                                                                                                               | Quelle   |
| ------------------------------------ | ------------------------------------------------------------------------------------------------------------------------ | -------- |
| **Wireless PAN (Bluetooth, ZigBee)** | Drahtlose Personal-Area-Netze, klassifiziert als **IEEE 802.15.1**.                                                      | LF3      |
| **WLAN / Wi-Fi (IEEE 802.11)**       | Funknetz mit **Ad-hoc** und **Infrastructure (AP)**; **CSMA/CA**; abwärtskompatible Standards mit steigenden Datenraten. | LF3, LF9 |
| **Access Point (AP)**                | Mittelpunkt einer **Funkzelle**, verbindet Mobilgeräte mit dem **LAN**.                                                  | LF3      |
| **Mesh**                             | Mehrere APs spannen **ein gemeinsames WLAN**; Endgeräte wählen **nächsten/stärksten AP**.                                | LF9      |
| **WPA3**                             | Aktueller **WLAN-Sicherheitsstandard** mit **Perfect Forward Secrecy**.                                                  | LF9      |
| **WPS**                              | **Wi-Fi Protected Setup** zur einfachen Geräteaufnahme (AP-abhängig).                                                    | LF9      |
| **dBm**                              | **Signalstärke**: –30 … –40 dBm gut; **< –85 dBm kritisch**.                                                             | LF9      |
| **PoE/PoE+/PoE++**                   | **Stromversorgung über Ethernet** für APs; auf **Leistungsbudgets** je Port achten.                                      | LF9      |

---

