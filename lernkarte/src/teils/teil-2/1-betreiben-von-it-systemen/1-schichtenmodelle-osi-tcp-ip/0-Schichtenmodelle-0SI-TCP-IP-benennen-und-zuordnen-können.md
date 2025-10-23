
# 🌐 Schichtenmodelle und Netzwerkkommunikation

Um komplizierte Sachverhalte in der Netzwerkkommunikation zu veranschaulichen und zu standardisieren, werden **Schichtenmodelle** verwendet. Diese Modelle definieren verschiedene Ebenen (Schichten) mit spezifischen Aufgaben, um die Kompatibilität zwischen unterschiedlichen Systemen sicherzustellen.

## 🧱 Das ISO/OSI-Referenzmodell

Das ISO/OSI-Schichtenmodell (Open Systems Interconnection Basic Reference Model) wurde von der International Organization for Standardization (ISO) entwickelt, um eine herstellerunabhängige Kommunikation zu ermöglichen. Es definiert sieben Schichten.

| Schicht-Nr. | Schichtname (Deutsch) | Schichtname (Englisch) | Adressen | Bemerkungen/Funktion | Netzwerkgerät |
|---|---|---|---|---|---|
| 7 | **Anwendungsschicht** | Application Layer | - | Stellt Dienste für Anwendungsprogramme bereit (z. B. Browser und Web-Server, E-Mail-Client und E-Mail-Server). | Firewall, Server |
| 6 | **Darstellungsschicht** | Presentation Layer | - | Vereinheitlicht die Darstellung von Zahlen, Zeichen, Buchstaben, damit unterschiedliche Systeme Daten austauschen können. | Firewall |
| 5 | **Sitzungsschicht** | Session Layer | - | Baut Kommunikationssitzungen zwischen Partnern auf und verwaltet sie. Führt die OSI-Schichten 5-7 zur **Anwendungsschicht** im TCP/IP-Modell zusammen. | Firewall |
| 4 | **Transportschicht** | Transport Layer | Ports | Verantwortlich für den sicheren Datenaustausch; prüft Korrektheit, fordert fehlende/fehlerhafte Daten erneut an. Adressiert Anwendungen mittels **Ports**. Hier arbeiten **TCP** und **UDP**. | Firewall |
| 3 | **Vermittlungsschicht** (Netzwerkschicht) | Network Layer | IP-Adressen | Adressiert Netzwerke und leitet Pakete zwischen Netzwerken weiter (**Routing**). Verwendet **IP-Adressen** (Netzanteil + Host-Anteil). Entspricht der **Internetschicht** im TCP/IP-Modell. | Router |
| 2 | **Sicherungsschicht** (Datensicherungsschicht) | Data Link Layer | MAC-Adressen | Erstellt/empfängt Bit-Strom, fasst Bits zu logischen Einheiten (Frames) zusammen. Adressiert Netzwerk-Interfaces mittels **MAC-Adressen**. Regelt Medienzugriff (z.B. CSMA/CD). Führt die OSI-Schichten 1 und 2 zur **Netzzugangsschicht** im TCP/IP-Modell zusammen. | Switch |
| 1 | **Bitübertragungsschicht** (Physikalische Schicht) | Physical Layer | - | Definiert die physikalische Übertragung von Bits über das Medium (Leitungscodes, Spannungen, Lichtsignale, Funksignale). Hier arbeiten z.B. Ethernet-Kabel, WLAN. | Ethernet, Hub/Repeater |

## 💻 Das TCP/IP-Modell

Das TCP/IP-Modell, auch DoD-Modell genannt, ist eine vereinfachte Alternative zum OSI-Modell und bildet die Grundlage des Internets. Es umfasst vier Schichten.

| TCP/IP-Schicht | Name (Deutsch) | OSI-Entsprechung | Adressen | Zweck | Beispiele |
|---|---|---|---|---|---|
| 4 | **Anwendungsschicht** | Schicht 5-7 (Sitzung, Darstellung, Anwendung) | - | Stellt Netzwerkanwendungen und -dienste bereit. | HTTP, SMTP, DNS, DHCP, FTP, POP3, IMAP, SSH |
| 3 | **Transportschicht** | Schicht 4 (Transport) | Ports | Stellt Ende-zu-Ende-Kommunikation sicher (zuverlässig mit TCP, unzuverlässig mit UDP). | TCP, UDP, TLS |
| 2 | **Internetschicht** (Vermittlungsschicht) | Schicht 3 (Netzwerk) | IP-Adressen | Verantwortlich für Adressierung und Routing von Paketen durch Netzwerke. | IP (IPv4/IPv6), IPsec, ICMP |
| 1 | **Netzzugangsschicht** | Schicht 1-2 (Bitübertragung, Sicherung) | MAC-Adressen | Definiert den Zugriff auf das physikalische Medium und die Übertragung von Datenframes. | Ethernet, WLAN, PPP, ARP, NDP, MAC-Adresse |

## 🏷️ Adressierung in Netzwerken

Um Daten korrekt zuzustellen, werden auf verschiedenen Schichten unterschiedliche Adresstypen verwendet.

* **MAC-Adressen (Media Access Control):**
    * **Schicht:** Layer 2 (Sicherungsschicht).
    * **Aufbau:** 48 Bit, hexadezimale Schreibweise (z.B. `EA-B1-FC-03-2D-OC`). Besteht aus Herstellerkennung (OUI, die ersten 3 Oktette) und einer fortlaufenden Nummer (NIC Specific, die letzten 3 Oktette).
    * **Zweck:** Eindeutige, physikalische Identifizierung von Netzwerkschnittstellen (Netzwerkkarten) in einem lokalen Netzwerk.
    * **Besonderheiten:** Enthält Bits zur Unterscheidung von Unicast/Multicast und global/lokal verwalteten Adressen. Broadcast-MAC ist `ff-ff-ff-ff-ff-ff`.

* **IP-Adressen (Internet Protocol):**
    * **Schicht:** Layer 3 (Vermittlungsschicht/Internetschicht).
    * **Zweck:** Logische Adressierung von Geräten (Hosts) und Netzwerken, ermöglicht Routing über Netzwerkrenzen hinweg.
    * **Aufbau:** Zweiteilig: Netzanteil (Net-ID) und Hostanteil (Host-ID). Die **Subnetzmaske** trennt diese beiden Teile.
    * **IPv4:**
        * 32 Bit lang, dezimale Schreibweise mit Punkten (Dotted Decimal Notation, z.B. `192.168.178.69`). Jeder 8-Bit-Block (Oktett) wird als Dezimalzahl (0-255) geschrieben.
        * Subnetzmaske ebenfalls Dotted Decimal Notation (z.B. `255.255.255.0`) oder als Präfixlänge (CIDR-Notation/Slash-Notation, z.B. `/24`). `/24` bedeutet, die ersten 24 Bits definieren den Netzanteil (Netz-Bits). Eine `1` in der Subnetzmaske steht für ein Netz-Bit, eine `0` für ein Host-Bit.
        * **Private IP-Adressbereiche:** Werden in LANs verwendet und im Internet nicht geroutet (z.B. `10.0.0.0/8`, `172.16.0.0/12`, `192.168.0.0/16`).
        * **Besonderheiten:** Ca. 4,3 Milliarden Adressen. Benötigt oft NAT (Network Address Translation). Paketgröße standardmäßig 576 Bytes. Checksummen im Header erforderlich.
    * **IPv6:**
        * 128 Bit lang, hexadezimale Schreibweise mit Doppelpunkten, in acht 16-Bit-Blöcken (z.B. `fe80::e022:d9bc:318b:1d7a`).
        * Schreibweise kann durch Weglassen führender Nullen in Blöcken (z.B. `0123` wird `123`) und einmaliges Ersetzen einer zusammenhängenden Folge von Nullblöcken durch `::` (z.B. `fe80:0000:0000:0000:...` wird `fe80::...`) verkürzt werden.
        * Subnetzmaske meist als Präfixlänge (z.B. `/64`). Teilt die Adresse typischerweise in 64 Bit Netzwerk-Präfix und 64 Bit Interface Identifier.
        * **Besonderheiten:** Sehr großer Adressraum (ca. 340 Sextillionen Adressen). Kommt ohne NAT aus. Keine Checksummen im Header. Paketgröße standardmäßig 1280 Bytes. Keine Fragmentierung durch Router.

* **Port-Nummern:**
    * **Schicht:** Layer 4 (Transportschicht).
    * **Aufbau:** 16 Bit, dezimale Zahl (0-65535).
    * **Zweck:** Adressierung von spezifischen Anwendungen oder Diensten auf einem Host. Ermöglicht, dass mehrere Anwendungen gleichzeitig auf einem Rechner Netzwerkverbindungen nutzen können.
    * **Bereiche:** Well-known Ports (0-1023) für Standarddienste (z.B. HTTP Port 80, HTTPS Port 443, SSH Port 22, DNS Port 53, DHCP Ports 67/68), Registered Ports (1024-49151), Dynamic/Private Ports (ab 1024 bzw. >49151) für ausgehende Verbindungen von Clients.
    * **Socket:** Die Kombination aus IP-Adresse und Port-Nummer adressiert eine Anwendung auf einem bestimmten Rechner eindeutig.

## ⚙️ Netzwerkoperationen

* **Routing:**
    * **Schicht:** Layer 3.
    * **Funktion:** Verbindet zwei oder mehrere Netzwerke miteinander und leitet Datenpakete zwischen diesen Netzen weiter. Die Entscheidung basiert auf der Ziel-**IP-Adresse** und den Einträgen in der **Routing-Tabelle** des Routers. Router werten den Netzwerkanteil der IP-Adresse aus, um den Weg zum Zielnetz zu bestimmen. Ist das Zielnetz nicht direkt bekannt, wird das Paket an ein Default Gateway weitergeleitet. In großen Netzwerken erfolgt das Routing oft dynamisch, wobei Pakete unterschiedliche Wege nehmen können.

* **Switching:**
    * **Schicht:** Layer 2.
    * **Funktion:** Verbindet Geräte (Knoten) innerhalb eines lokalen Netzwerksegments (LAN). Ein Switch "lernt", welche **MAC-Adressen** an welchem seiner Ports angeschlossen sind und speichert diese Information in einer Weiterleitungstabelle (Forwarding Table / Switching Table / Bridge Table). Ankommende Datenframes werden nur an den Port weitergeleitet, an dem sich der Empfänger mit der entsprechenden Ziel-MAC-Adresse befindet. Dadurch wird unnötiger Netzwerkverkehr reduziert und Kollisionen vermieden (im Vergleich zu Hubs).

## 📜 Wichtige Protokolle

* **ARP (Address Resolution Protocol):**
    * **Schicht:** Layer 2/3 (arbeitet zwischen Netzwerk- und Sicherungsschicht).
    * **Funktion:** Löst **IP-Adressen** (Layer 3) in **MAC-Adressen** (Layer 2) innerhalb eines lokalen Netzes auf. Ein Rechner, der ein Paket an eine IP-Adresse im selben LAN senden möchte, muss die zugehörige MAC-Adresse kennen, um den Ethernet-Frame korrekt zu adressieren. ARP fragt per Broadcast im Netz nach ("Wer hat IP-Adresse X?"), und der betreffende Rechner antwortet mit seiner MAC-Adresse. Rechner speichern bekannte Zuordnungen temporär im ARP-Cache, um wiederholte Anfragen zu vermeiden.

* **TCP (Transmission Control Protocol):**
    * **Schicht:** Layer 4.
    * **Funktion:** Stellt eine **verbindungsorientierte**, **sichere** Datenübertragung zwischen Anwendungen her. Vor dem eigentlichen Datenaustausch wird eine Verbindung aufgebaut (Drei-Wege-Handschlag). TCP segmentiert den Datenstrom, nummeriert die Segmente, stellt sicher, dass alle Segmente korrekt und in der richtigen Reihenfolge ankommen (durch Bestätigungen/Quittungen und erneutes Senden verlorener Segmente), und steuert den Datenfluss, um Überlastung zu vermeiden (Congestion Control). Wird z.B. für E-Mails und Webseiten-Browsing verwendet.

* **UDP (User Datagram Protocol):**
    * **Schicht:** Layer 4.
    * **Funktion:** Stellt eine **verbindungslose**, **unsichere** Datenübertragung bereit. UDP sendet Datenpakete (Datagramme) ohne vorherigen Verbindungsaufbau und ohne Bestätigung der Zustellung. Es gibt keine Garantie für Ankunft, Reihenfolge oder Fehlerfreiheit. UDP ist schneller als TCP, da der Protokoll-Overhead geringer ist. Es eignet sich für Anwendungen, bei denen Geschwindigkeit wichtiger ist als absolute Zuverlässigkeit oder die eine eigene Fehlerkontrolle implementieren, z.B. bei Audio-/Videostreaming, DNS-Anfragen und DHCP.

---
