# 🧷 Bridge <span style="background:#e0f0ff;">LF3, LF9</span>

Eine **Bridge** ist ein **Schicht-2-Netzwerkgerät** (OSI **Sicherungsschicht**), das Netzwerksegmente verbindet und Frames **anhand von MAC-Adressen** weiterleitet. Sie **„lernt“** beim Betrieb, **welche MAC-Adresse an welchem Port** erreichbar ist, und baut dafür eine **Weiterleitungs-/Bridge-Tabelle** auf. *(LF3)*  

> **Mehrere Bridges in einem Gerät** ergeben eine **Multiport-Bridge** – das ist der **Switch**. *(LF3)* 

---

## ⚙️ Funktionsweise einer Bridge <span style="background:#e0f0ff;">LF3</span>

1. **Learning (Lernen):** Eingehende Frames werden auf **OSI-Schicht 2** inspiziert; die **Quell-MAC** wird mit dem **Eingangsport** in die **Forwarding/Bridge Table** eingetragen. *(LF3)* 
2. **Forwarding (Weiterleiten):** Für jeden Frame wird die **Ziel-MAC** gegen die Tabelle geprüft; ist ein **Port bekannt**, wird **gezielt** dorthin weitergeleitet. *(LF3)* 
3. **Switch-Prinzip (als Multiport-Bridge):** Ports besitzen **Eingangs-/Ausgangspuffer (FIFO)**; eine **Switching Fabric** leitet anhand der **Forwarding Table** zum passenden Ausgangsport. *(LF3)* 

---

## 🧠 Bridge im OSI-/TCP-IP-Kontext <span style="background:#e0f0ff;">LF3</span>

* **Schichtzuordnung:** **MAC-Adressen** und deren Verarbeitung liegen auf der **Data-Link-Schicht (Layer 2)** – dort arbeitet die **Bridge**. *(LF3)* 

---

## 🔁 Schleifen vermeiden: STP/RSTP mit MAC-Bridges <span style="background:#e0f0ff;">LF9</span>

* In vermaschten LANs können durch redundante Wege **Schleifen** entstehen. **Spanning Tree Protocol (STP)** und **Rapid STP (RSTP, IEEE 802.1w)** erkennen und **deaktivieren redundante Pfade**, damit Frames nicht „im Kreis“ laufen. *(LF9)* 
* STP/RSTP-fähige Geräte (in der Norm auch **MAC-Bridges** genannt) tauschen dafür **Bridge Protocol Data Units (BPDUs)** aus und halten einen **Verbindungsbaum** aufrecht; bei Ausfall der Hauptverbindung wird ein **ersatzweise blockierter Pfad** **reaktiviert**. *(LF9)* 

---

## 📶 Bridge-Funktion in Access Points <span style="background:#e0f0ff;">LF9</span>

* Viele **Access Points** bieten eine **„Bridging-Funktion“**: Sie koppeln das **WLAN-Segment** **transparent** an das **verkabelte LAN** (Layer-2-Bridge). *(LF9)* 

---

## 🔍 Abgrenzung: Hub • Bridge • Switch • Router <span style="background:#e0f0ff;">LF3, LF9</span>

* **Hub/Repeater (Layer 1):** Verstärkt/verteilt Signale **ohne Adressauswertung** (Bitübertragungsschicht). *(LF3)* 
* **Bridge (Layer 2):** **MAC-basiertes** Verbinden/Segmentieren von Netzen mit **Lernen + gezieltem Forwarding**. *(LF3)* 
* **Switch (Layer 2 / Multiport-Bridge):** Skaliert das Bridge-Prinzip auf **viele Ports**; entscheidet **per MAC** (klassisch) bzw. als **Layer-3-Switch** auch **per IP**. *(LF3, LF9)*  
* **Router (Layer 3):** **IP-basiertes Routing** zwischen **Subnetzen/Netzwerken** anhand **Routing-Tabellen**. *(LF9)* 

---

## 🧩 Mini-Beispiel (gedanklich) <span style="background:#e0f0ff;">LF3</span>

```
[PC A]───(Port 1)      (Port 2)───[PC B]
           \            /
            \          /
             [ Bridge ]
```

* Sendet **PC A** an **PC B**, lernt die Bridge beim ersten Frame die **Quell-MAC ↔ Port**, prüft die **Ziel-MAC** in der **Forwarding/Bridge-Tabelle** und leitet **gezielt** über **Port 2** weiter. *(LF3)* 

---

## 📚 Ergänzende Technikdetails (Switch als Multiport-Bridge) <span style="background:#e0f0ff;">LF3</span>

* **Cut-Through vs. Store-and-Forward:** Weiterleitung **sofort nach Ziel-MAC** (geringe Latenz) vs. **nach vollständigem Frame + FCS-Prüfung** (Fehlerfilterung). *(LF3)* 

---

## 🧾 Begriffstabelle

| Begriff                       | Definition                                                                                     | Quelle    |
| ----------------------------- | ---------------------------------------------------------------------------------------------- | --------- |
| **Bridge**                    | Schicht-2-Gerät, verbindet Segmente, lernt **MAC ↔ Port** und leitet **zielgerichtet** weiter. | LF3       |
| **Bridge/Forwarding Table**   | Tabelle der **MAC-Adressen** mit zugehörigen **Ports** zur Weiterleitung.                      | LF3       |
| **Multiport-Bridge (Switch)** | Umsetzung des Bridge-Prinzips auf **viele Ports** (zentral im LAN).                            | LF3       |
| **STP/RSTP**                  | Protokolle zum **Verhindern von Schleifen** in Netzen mit MAC-Bridges.                         | LF9       |
| **MAC-Adresse**               | **Layer-2-Adresse** zur eindeutigen Identifikation von Netzwerk-Interfaces.                    | LF3/LF9   |
| **AP mit Bridging**           | Access Point kann **WLAN↔LAN** **bridgen** (transparent koppeln).                              | LF9       |
| **Hub**                       | **Layer-1**-Gerät, verteilt Signale ohne Adresslogik.                                          | LF3       |
| **Router**                    | **Layer-3**-Gerät zum **IP-Routing** zwischen Netzen.                                          | LF9       |

---

