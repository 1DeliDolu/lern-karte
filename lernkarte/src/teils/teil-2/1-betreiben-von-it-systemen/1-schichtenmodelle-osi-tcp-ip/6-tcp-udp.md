
## 📨 TCP (Transmission Control Protocol)

TCP ist eines der Kernprotokolle der Internet-Protokollfamilie und arbeitet auf **Schicht 4 (Transportschicht)** des OSI-/TCP/IP-Modells. Es dient dem Transport von Anwendungsdaten über die darunterliegende Vermittlungsschicht (IP).

---

### Hauptmerkmale und Funktionen

* **Verbindungsorientiert:** Bevor Daten übertragen werden, baut TCP eine **logische Verbindung** zwischen den Kommunikationspartnern (Sender und Empfänger) auf (Drei-Wege-Handschlag). Diese Verbindung wird während der Datenübertragung aufrechterhalten und anschließend wieder abgebaut.
* **Sichere/Zuverlässige Übertragung:** TCP stellt sicher, dass die Daten **korrekt**, **vollständig** und in der **richtigen Reihenfolge** beim Empfänger ankommen.
    * **Segmentierung:** Zerlegt den Datenstrom der Anwendung in einzelne Segmente.
    * **Sequenznummern & Bestätigungen (Quittungen):** Jedes Segment erhält eine Sequenznummer. Der Empfänger bestätigt den Erhalt der Segmente.
    * **Fehlerbehandlung:** Geht ein Segment verloren oder kommt fehlerhaft an, fordert TCP dieses Segment erneut an (Retransmission).
    * **Zusammenfügen:** Der Empfänger setzt die Segmente anhand der Sequenznummern wieder in der korrekten Reihenfolge zusammen.
* **Flusssteuerung (Flow Control):** TCP passt die Senderate an die Empfangskapazität des Empfängers an, um diesen nicht zu überlasten.
* **Stauverhinderung (Congestion Control):** TCP reagiert auf Überlastungen im Netzwerk, indem es die Senderate reduziert, um Netzwerkzusammenbrüche zu vermeiden.
* **Port-Adressierung:** TCP verwendet **Port-Nummern** (16 Bit), um die Daten an die richtige Anwendung auf dem Zielrechner zu adressieren.
* **Unabhängigkeit:** TCP ist unabhängig von der verwendeten Übertragungstechnik (z.B. Ethernet, WLAN) auf den unteren Schichten.
* **Einsatz:** Wird verwendet, wenn Zuverlässigkeit entscheidend ist, z.B. bei E-Mails (SMTP, IMAP, POP3), Webseiten-Übertragung (HTTP/HTTPS), Dateiübertragung (FTP) und sicheren Shell-Verbindungen (SSH).

---

## ✉️ UDP (User Datagram Protocol)

UDP ist ebenfalls ein Protokoll der **Schicht 4 (Transportschicht)** und eine Alternative zu TCP.

---

### Hauptmerkmale und Funktionen

* **Verbindungslos:** UDP sendet Datenpakete (Datagramme) **ohne** vorherigen Verbindungsaufbau. Jedes Datagramm wird unabhängig behandelt.
* **Unsichere/Unzuverlässige Übertragung:** UDP bietet **keine Garantie** für die Zustellung, die Reihenfolge oder die Fehlerfreiheit der Daten.
    * Es gibt keine Bestätigungen (Quittungen).
    * Fehlende oder fehlerhafte Datagramme werden nicht automatisch erneut angefordert.
* **Keine Flusssteuerung/Stauverhinderung:** UDP führt keine Flusssteuerung oder Stauverhinderung durch.
* **Geschwindigkeit:** UDP ist **schneller** als TCP, da der Protokoll-Header kleiner und einfacher ist und der Aufwand für Verbindungsmanagement, Bestätigungen und Fehlerkorrektur entfällt. Dies führt zu weniger Protokoll-Overhead und schnellerer Auslieferung.
* **Port-Adressierung:** UDP verwendet ebenfalls **Port-Nummern** (16 Bit) zur Adressierung von Anwendungen.
* **Unabhängigkeit:** UDP ist wie TCP unabhängig von der verwendeten Übertragungstechnik der unteren Schichten.
* **Einsatz:** Wird verwendet, wenn Geschwindigkeit wichtiger ist als absolute Zuverlässigkeit, oder wenn die Anwendung eine eigene Fehlerkontrolle implementiert. Typische Anwendungen sind:
    * Audio- und Videostreaming
    * Online-Spiele
    * Voice over IP (VoIP)
    * DNS (Domain Name System)
    * DHCP (Dynamic Host Configuration Protocol)
    * SNMP (Simple Network Management Protocol)
    * Multicast-Übertragungen

---

## TCP vs. UDP im Vergleich

| Merkmal                   | TCP (Transmission Control Protocol)             | UDP (User Datagram Protocol)                     |
| :------------------------ | :---------------------------------------------- | :----------------------------------------------- |
| **Verbindung** | Verbindungsorientiert                           | Verbindungslos                                   |
| **Zuverlässigkeit** | Hoch (Bestätigungen, Fehlerkorrektur, Ordnung) | Gering (Keine Garantie für Zustellung/Ordnung) |
| **Geschwindigkeit** | Langsamer (mehr Overhead)                       | Schneller (weniger Overhead)                   |
| **Header-Größe** | Größer                                          | Kleiner                                          |
| **Flusssteuerung** | Ja                                              | Nein                                             |
| **Stauverhinderung** | Ja                                              | Nein                                             |
| **Anwendungsbeispiele** | HTTP, HTTPS, FTP, SMTP, IMAP, POP3, SSH       | DNS, DHCP, VoIP, Streaming, Online-Spiele, SNMP |

***
