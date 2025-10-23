# 🕸️ Netzwerktopologien (Überblick & Einordnung)

**Netzwerktopologie** beschreibt die Art, **wie Leitungen physisch verlegt sind** und **welchen Weg Daten nehmen** – die „**Landkarte**“ eines Netzes. *(LF3)*
Im Lehrtext werden die folgenden **Topologien** unterschieden und kurz charakterisiert: **Stern**, **Erweiterter Stern**, **(un-)vollständige Masche**, **Zelle**, **Punkt-zu-Punkt**, **Bus**, **Ring**. *(LF3)* 

---

## 🧭 Kernbegriffe & Definitionen

* **Topologie = „Landkarte“ des Netzes**: Legt fest, **wie Leitungen verlegt** sind und **wie Daten fließen**. *(LF3)*
* **Stern (Star)**: Leitungen **sternförmig** von einem **Mittelpunkt** zu Endpunkten; **Zugriffssteuerung: CSMA/CD**. *(LF3)* 
* **Erweiterter Stern (Extended Star)**: Endpunkt eines Sterns ist **wieder Mittelpunkt** eines weiteren Sterns (**typisch drei Ebenen** im LAN); **Standard in heutigen Verkabelungen**. *(LF3)* 
* **Vollständige Masche (Complete Mesh)**: **Jede** Station mit **jeder** verbunden → **sehr hohe Ausfallsicherheit**, aber **sehr aufwendig**. *(LF3)* 
* **Unvollständige Masche (Incomplete Mesh)**: **Wichtige Stationen mehrfach** verbunden; **Redundanz**; erweiterter Stern + **Querverbindungen**. *(LF3)* 
* **Zelle (Cell)**: **Funkzellen** decken Bereiche ab (**WLAN, Bluetooth, Mobilfunk**); **Zugriffssteuerung: CSMA/CA**. *(LF3)* 
* **Punkt-zu-Punkt (P2P)**: **Direkte Verbindung** zwischen **zwei** Stationen. *(LF3)* 
* **Bus**: Alle Stationen liegen **parallel an einer gemeinsamen Leitung**; **in LANs nicht mehr üblich**; **CSMA/CD**. *(LF3)* 
* **Ring**: Jede Station hat **Vorgänger/Nachfolger**; **Daten in eine Richtung**; **Vorteil:** sichere Übertragung, **berechenbare Wartezeit**; **Nachteil:** **aufwendiger Aufbau** & **Fehlersuche**; **Zugriffssteuerung: Token Passing**. *(LF3)* 

---

## 🧩 Topologien im Kontext der Infrastruktur

* **Erweiterter Stern als Praxis-Standard**: In **strukturierter Verkabelung** verbreitet (typisch **3 Ebenen**). *(LF3)* 
* **Zellnetze (Funk)**: Ein **WLAN-Access-Point** bildet den **Mittelpunkt** einer Funkzelle und bindet **Mobilgeräte** ins LAN ein. *(LF3)* 
* **Topologie & Komponenten**: **Verteilerschränke (19″)**, **Anschlussdosen**, **Kupfer/Glasfaser**, **Patchen** – bilden das physische Gerüst, das die **Topologie** konkretisiert. *(LF3)* 

---

## 🛠️ Praktische Beispiele aus dem Lehrtext

1. **Verkabeltes Büro-LAN (Erweiterter Stern)**: **Switch/Verteiler** zentral, **Etagen-/Raum-Sterne** darunter → **Standard heute**. *(LF3)* 
2. **WLAN-Abdeckung (Zelle)**: **Access Point** als **Zell-Mittelpunkt**, Smartphones/Laptops **assoziieren** und werden Teil des LAN. *(LF3)* 
3. **Maschen-Redundanz**: **Querverbindungen** zwischen wichtigen Knoten erhöhen **Ausfallsicherheit** (unvollständige Masche). *(LF3)* 

---

## ⚙️ Zugriffssteuerung je Topologie (aus dem Lehrtext)

* **CSMA/CD**: **Stern**, **Bus**. *(LF3)* 
* **CSMA/CA**: **Zelle** (WLAN/Bluetooth/Mobilfunk). *(LF3)* 
* **Token Passing**: **Ring**. *(LF3)* 

---

## 🗺️ Abgrenzungen & Einordnung

* **Topologie vs. Netzausdehnung**: **LAN/WAN/MAN/GAN** beschreiben **geografische Ausdehnung**, **nicht** die Topologie. *(LF3)* 
* **Topologie vs. Geräte-Rolle**: **Switch** (Layer-2-Vermittlung), **Router** (verbindet Netze per **Routing-Tabelle**), **Access Point** (Zelle) – **Topologie** definiert die **Verkabelung/Funkstruktur**, Geräte setzen sie um. *(LF3)* 

---

## 🧱 Vorgehen bei der Topologie-Planung (aus dem Lehrtext abgeleitet)

1. **Ist-Aufnahme** im Gebäude: **Dosen, Leitungen, Verteiler** lokalisieren. *(LF3)* 
2. **Topologie wählen** gemäß **Raumstruktur/Redundanzbedarf** (häufig **erweiterter Stern**; ggf. **Maschen-Querverbindungen**). *(LF3)* 
3. **Zellabdeckung** entwerfen, wo **Funk** benötigt wird (**AP als Zell-Mitte** einplanen). *(LF3)* 
4. **Medien & Anschlüsse** spezifizieren (**Kupfer/Glasfaser**, **Patchen**). *(LF3)* 

---

## 📚 Begriffstabelle

| **Begriff**               | **Definition (Lehrtext)**                                                                               | **Quelle** |
| ------------------------- | ------------------------------------------------------------------------------------------------------- | ---------- |
| **Topologie**             | Art der **physikalischen Leitungsverlegung**; „**Landkarte**“ des Netzes.                               | *(LF3)*    |
| **Stern**                 | Leitungen **sternförmig** zu Endpunkten; **CSMA/CD**.                                                   | *(LF3)*    |
| **Erweiterter Stern**     | **Hierarchische Sterne** (typisch **3 Ebenen**); **heutiger Standard**.                                 | *(LF3)*    |
| **Vollständige Masche**   | **Alle mit allen** verbunden; **max. Redundanz**, **sehr aufwendig**.                                   | *(LF3)*    |
| **Unvollständige Masche** | **Mehrfachverbindungen** wichtiger Knoten; **Redundanz**; **Querverbindungen**.                         | *(LF3)*    |
| **Zelle (Funk)**          | **Funkzellen** (z. B. **WLAN, Bluetooth, Mobilfunk**); **CSMA/CA**.                                     | *(LF3)*    |
| **Punkt-zu-Punkt**        | **Direkte Verbindung** zweier Stationen.                                                                | *(LF3)*    |
| **Bus**                   | **Gemeinsame Leitung** für alle; **in LANs nicht mehr üblich**; **CSMA/CD**.                            | *(LF3)*    |
| **Ring**                  | **Einbahn-Datenfluss** im Kreis; **+** sicher/berechenbar, **−** Aufbau/Fehlersuche; **Token Passing**. | *(LF3)*    |
| **AP als Zell-Mitte**     | **Access Point** bildet **Mittelpunkt** einer **WLAN-Zelle** und bindet Mobilgeräte ins LAN ein.        | *(LF3)*    |

---

> **Hinweis:** Die obigen Inhalte geben die **wortgetreuen Aussagen** der bereitgestellten Lernfeld-Materialien wieder und sind **ohne freie Ergänzungen** dargestellt. *(LF3)* 
