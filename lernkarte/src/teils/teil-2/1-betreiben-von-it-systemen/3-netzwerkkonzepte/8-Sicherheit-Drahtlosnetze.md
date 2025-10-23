# 🔐 Sicherheit in Drahtlosnetzen (WLAN) <span style="background:#e0f0ff;">LF3, LF9</span>

**WLAN-Access-Points sind sicherheitskritische Komponenten**: Schon in der **Planung** ist zu klären, ob **Gastnetze** benötigt werden, ob eine **Cloud-Verwaltung (Management-Portal)** zum Einsatz kommt und ob ein **Mesh-Netz** oder getrennte Netze aufgebaut werden. *(LF9)* 

Für die **Absicherung** gelten im Lehrtext folgende Kernaussagen: **WPA3** ist der **Standard-Verschlüsselungs­mechanismus** und unterstützt **Perfect Forward Secrecy**; **WPA2**, **WPA** und **WEP** sind als **veraltet** markiert; der **WLAN-Schlüssel** sollte **mindestens 20 Zeichen** haben; **WPS** kann das Einbinden neuer Geräte vereinfachen; **Mesh** lässt Endgeräte stets den **stärksten Access-Point** wählen. *(LF9)* 

Zur **Richtlinien-Einordnung** nennt der Lehrtext die **BSI-Bausteine** **NET.2.1 „WLAN-Betrieb“** und **NET.2.2 „WLAN-Nutzung“** als Referenzrahmen (ergänzt durch weitere Netz- und Krypto-Bausteine). *(LF9)* 

---

## 🛡️ WLAN-Absicherung (Begriffe & Einstellungen)

| Begriff             | Definition / Vorgabe                                                                                                                                 | Quelle |
| ------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------- | ------ |
| **SSID**            | Name des WLAN-Netzes.                                                                                                                                | LF9    |
| **WPA3**            | Standard-Verschlüsselung; **Perfect Forward Secrecy**: **Sitzungsschlüssel werden stets neu erzeugt** und **nicht aus einem Master Key abgeleitet**. | LF9    |
| **WPA2 (veraltet)** | Nutzt **AES** zur WLAN-Verschlüsselung; wegen Schwachstellen soll **WPA3** genutzt werden.                                                           | LF9    |
| **WPA (veraltet)**  | Nachfolger von WEP; **nicht mehr nutzen**.                                                                                                           | LF9    |
| **WEP (veraltet)**  | **Nicht mehr nutzen** aufgrund mangelnder Sicherheit.                                                                                                | LF9    |
| **WLAN-Schlüssel**  | **Passwortlänge ≥ 20 Zeichen**.                                                                                                                      | LF9    |
| **WPS**             | **Vereinfachte Anmeldung** (z. B. **Taster** am Access-Point; abhängig vom Gerät).                                                                   | LF9    |
| **Mesh**            | **Gemeinsames WLAN mehrerer APs**; Endgeräte verbinden sich automatisch mit dem **AP mit bester Signalstärke**.                                      | LF9    |

> **Kompatibilität:** Access-Points sollen auf Wunsch **WPA2 und WPA3 parallel** unterstützen, weil **WPA3** nur von neueren Endgeräten getragen wird (Stand 2021). *(LF9)* 

---

## 🧭 Sicherheitsaspekte in der WLAN-Planung

* **Gastnetze**: Bereits in der Planung entscheiden, **ob** und **wie** ein **Gastnetz** bereitgestellt wird (z. B. über separaten LTE/WLAN-Router). *(LF9)*
* **AP-Management & Erreichbarkeit**: Hersteller bieten **Internet-Portale** zur **zentralen Konfiguration**; APs können bei entsprechender Planung **übers Internet erreichbar** sein. *(LF9)* 
* **Sicherheitsstandard wählen**: **WPA3** als Vorgabe; **WPA2/3 parallel** für Altgeräte. *(LF9)* 
* **Patches/Updates**: **Sicherheitsupdates zeitnah einspielen**, um Schwachstellen zu schließen. *(LF9)* 
* **Segmentierung/Trennung**: **Netzwerksegmentierung** nach **Schutzbedarf** reduziert Angriffsflächen (z. B. Trennung von Gast- und Unternehmensnetzen). *(LF9)* 

---

## 🧩 Drahtlos-Sicherheit im Anforderungskatalog (Pflichtenheft)

Die **Stichwortsammlung** für Pflichtenhefte nennt u. a. **Verschlüsselung (Pre-Shared Key, RADIUS etc.)**, **VLAN**, **drahtlos PAN/WLAN**, **Bluetooth** sowie **VPN-Modelle/Tunneling/IPsec**—als zu berücksichtigende **Sicherheits- und Netzthemen**. *(LF9)* 

---

## 🧪 Beispiele (aus dem Lehrtextkontext)

1. **KMU mit Gastnetz:** Im Netzplan eines KMU wird ein **Gastnetz** über **LTE/WLAN-Router** bereitgestellt—getrennt vom internen Netz. *(LF9)*
2. **AP-Flotte mit Cloud-Management:** **Alle APs zentral konfigurierbar**; **WPA2+WPA3 parallel** für Gerätekompatibilität; optional **Mesh** für nahtlose Übergaben. *(LF9)* 

---

## ⚙️ Prozessschritte: „Sicheres WLAN aufsetzen“

1. **Bedarf & Zonen festlegen** (Unternehmens- vs. **Gastnetz**, ggf. mehrere SSIDs). *(LF9)* 
2. **AP-Standorte planen** (APs sind **sicherheitskritisch**; Mesh/Einzelnetze entscheiden). *(LF9)* 
3. **Sicherheitsmodus setzen** (**WPA3**, ggf. **WPA2+WPA3** parallel) und **Passwortlänge ≥ 20** festlegen. *(LF9)* 
4. **Management-Pfad definieren** (lokal oder **Cloud-Portal**; Erreichbarkeit über Internet beachten). *(LF9)* 
5. **Segmentierung umsetzen** (z. B. **Gastnetz strikt getrennt**, je nach Schutzbedarf). *(LF9)* 
6. **Betrieb nach BSI-Bausteinen** (u. a. **NET.2.1/NET.2.2** für WLAN-Betrieb/Nutzung). *(LF9)* 
7. **Pflege/Updates** (regelmäßige **Sicherheitsupdates**). *(LF9)* 

---

## 📚 Ergänzende Hinweise aus dem Lehrtext

* **WLAN-Standards** (Kompatibilität, Datenraten) und die Rolle von **Access-Points** werden ausführlich behandelt—wichtig für **sichere Gerätauswahl** (z. B. Wi-Fi 5/6, MU-MIMO, PoE, Cloud-Management). *(LF9)*
* **SoHo-Router** führen oft **Kindersicherung/Proxy-Sperrlisten** und **integrierte WLAN-APs**—relevant für **Klein­umgebungen**. *(LF3)* 

---

## 🎯 Merksätze

* **WPA3 vorgeben**, **WPA2/3 parallel** nur für Altgeräte-Kompatibilität. *(LF9)* 
* **Lange Schlüssel** (≥ 20 Zeichen) sind Pflicht. *(LF9)* 
* **Gastnetze getrennt halten** und **Updates** regelmäßig einspielen. *(LF9)*
* **WLAN-Betrieb nach BSI-Bausteinen** (NET.2.1/NET.2.2) ausrichten. *(LF9)* 


