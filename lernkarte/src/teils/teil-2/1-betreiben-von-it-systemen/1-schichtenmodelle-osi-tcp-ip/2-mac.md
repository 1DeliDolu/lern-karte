
## 🏷️ MAC-Adresse (Media Access Control)

Eine MAC-Adresse ist eine **Hardware-Adresse** oder **physikalische Adresse**, die auch als **Interface-Adresse** bezeichnet wird. Sie dient der eindeutigen Identifizierung einer Netzwerkschnittstelle (z.B. einer Netzwerkkarte) in einem lokalen Netzwerk. MAC-Adressen operieren auf **Schicht 2 (Sicherungsschicht / Data Link Layer)** des OSI-Modells.

---

### Zweck und Verwendung

* **Eindeutige Identifizierung:** Jede Netzwerkschnittstelle besitzt eine weltweit eindeutige MAC-Adresse.
* **Ethernet-Frames:** Datenpakete auf Schicht 2, sogenannte Ethernet-Frames, enthalten sowohl die MAC-Adresse des Absenders (Quell-MAC) als auch die des Empfängers (Ziel-MAC) im Header.
* **Switching:** Switches (Layer-2-Geräte) verwenden die Ziel-MAC-Adresse in ankommenden Frames, um diese nur an den Port weiterzuleiten, an dem das Zielgerät angeschlossen ist. Sie lernen MAC-Adressen und deren zugehörige Ports und speichern dies in einer Weiterleitungstabelle (Forwarding Table / Switching Table).
* **ARP:** Das Address Resolution Protocol (ARP) wird verwendet, um eine IP-Adresse (Layer 3) in die zugehörige MAC-Adresse (Layer 2) innerhalb eines lokalen Netzwerks aufzulösen, da die Zustellung auf Layer 2 über MAC-Adressen erfolgt.

---

### Aufbau und Format

* **Länge:** MAC-Adressen sind **48 Bit** (6 Bytes bzw. 6 Oktette) lang.
* **Schreibweise:** Sie werden üblicherweise **hexadezimal** dargestellt, wobei die Bytes durch Bindestriche oder Doppelpunkte getrennt sind.
    * *Beispiele:* `AA-BB-CC-DD-EE-FF`, `24-65-11-12-5e-ce`, `EA-B1-FC-03-2D-0C`
* **Struktur:** Die Adresse ist zweigeteilt:
    * **OUI (Organizationally Unique Identifier):** Die ersten 3 Bytes (24 Bit) kennzeichnen den **Hersteller** der Netzwerkschnittstelle (auch Vendor-ID genannt). Große Hersteller können mehrere OUIs besitzen. *Beispiel:* `24-65-11` ist eine OUI von AVM, Berlin.
    * **NIC Specific:** Die letzten 3 Bytes (24 Bit) sind eine vom Hersteller vergebene, **eindeutige Seriennummer** für die spezifische Schnittstelle.

---

### Besondere Adressen und Bits

* **Spezialbits im ersten Oktett:** Das erste Byte enthält zwei Bits mit besonderer Bedeutung:
    * **Bit 0 (I/G-Bit):** Unterscheidet zwischen **Unicast** (0, individuelle Adresse eines Geräts) und **Multicast** (1, Adresse einer Gruppe von Geräten). Broadcast ist ein Spezialfall von Multicast.
    * **Bit 1 (U/L-Bit):** Gibt an, ob die Adresse **global eindeutig** ist (0, OUI enforced) oder **lokal administriert** wird (1, manuell zugewiesen).
* **Broadcast-Adresse:** Die MAC-Adresse `ff-ff-ff-ff-ff-ff` ist die Broadcast-Adresse. Frames mit dieser Zieladresse werden an alle Geräte im selben Netzwerksegment gesendet.
* **Multicast-Adressen:** Werden verwendet, um Daten an eine bestimmte Gruppe von Geräten zu senden, z.B. an alle Router oder Switches im LAN.

---
