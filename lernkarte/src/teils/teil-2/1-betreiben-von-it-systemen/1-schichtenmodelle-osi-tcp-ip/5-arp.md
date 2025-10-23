

##  Protokoll ARP (Address Resolution Protocol)

ARP ist ein grundlegendes Dienstprotokoll in Netzwerken, das für die korrekte Funktion unerlässlich ist.

---

### Zweck und Funktion

* **Auflösung von IP- zu MAC-Adressen:** Die Hauptaufgabe von ARP ist es, eine **IP-Adresse (Layer 3)** in die zugehörige **MAC-Adresse (Layer 2)** innerhalb eines lokalen Netzwerks (LAN) aufzulösen.
* **Notwendigkeit für Ethernet:** Dies ist notwendig, weil Datenpakete auf der Sicherungsschicht (Layer 2), wie z.B. Ethernet-Frames, die Hardware-Adressen (MAC-Adressen) von Absender und Ziel für die Zustellung innerhalb eines lokalen Netzes benötigen. Switches leiten Frames basierend auf diesen MAC-Adressen weiter.
* **Adressierung von Frames:** Wenn ein Rechner Daten senden möchte, muss er die MAC-Adresse (Interface-Adresse) des Zielrechners kennen, um sie in das entsprechende Adressfeld des Ethernet-Frames einzutragen. ARP wird eingesetzt, um diese MAC-Adresse zu ermitteln, falls sie noch nicht bekannt ist.
* **Gateway-Ermittlung:** Wenn Daten an einen Rechner außerhalb des lokalen Netzes gesendet werden sollen, werden sie an das Default Gateway (den Router) geschickt. Auch hier wird ARP verwendet, um die MAC-Adresse des Routers zu ermitteln.

---

### ARP-Cache

* **Speicherung:** Ein Rechner "lernt" nach und nach die Zuordnungen von IP- zu MAC-Adressen und speichert diese in einem lokalen Zwischenspeicher, dem **ARP-Cache**.
* **Anzeige:** Mit dem Konsolenbefehl `arp -a` kann der Inhalt des ARP-Caches, also die aktuell gespeicherten IP- zu MAC-Adress-Zuordnungen, aufgelistet werden.



---

### OSI-/TCP/IP-Schicht

ARP arbeitet an der Schnittstelle zwischen **Layer 2 (Sicherungsschicht)** und **Layer 3 (Vermittlungsschicht)**. Im TCP/IP-Modell wird es der **Netzzugangsschicht** zugeordnet.

