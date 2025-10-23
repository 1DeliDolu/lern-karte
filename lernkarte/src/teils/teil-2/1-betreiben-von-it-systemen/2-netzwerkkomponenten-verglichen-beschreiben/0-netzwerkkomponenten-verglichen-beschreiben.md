# 🧩 Netzwerkkomponenten: Switch, Bridge, Router, Firewall

Hier ist eine Beschreibung und ein Vergleich der Netzwerkkomponenten Switch, Bridge, Router und Firewall, basierend auf den bereitgestellten Dokumenten.

---

## 🌉 Bridge und Switch

* **Bridge (Netzwerkbrücke):** Eine Bridge verbindet zwei Netzsegmente. Jedes Segment kann mehrere Geräte mit eigener MAC-Adresse (Media-Access-Control-Adresse) haben. Sie leitet ankommende Pakete nur weiter, wenn sich der Zielrechner am anderen Port der Bridge befindet, wodurch unnötiger Netzwerkverkehr reduziert wird. Eine Bridge „lernt“ nach dem Einschalten, welche MAC-Adressen an welchem Port angeschlossen sind und erstellt eine Weiterleitungstabelle (Bridge Table). Eine Bridge arbeitet auf **OSI-Layer 2** (Datensicherungsschicht).

* **Switch:** Ein Switch ist im Grunde eine **Multiport Bridge**. Er ist das wichtigste aktive Bauteil in modernen Rechnernetzen. Ein Switch „lernt“ ebenfalls, welche Knoten (Geräte) an welchem seiner Anschlüsse (Ports) angeschlossen sind und baut daraus eine Weiterleitungstabelle (Forwarding Table, Switching Table, Bridge Table). Ankommende Datenpakete werden auf **OSI-Layer 2** analysiert. Die Ziel-MAC-Adresse wird gelesen und mit der Tabelle verglichen. Findet sich ein passender Eintrag, wird das Datenpaket (Ethernet-Frame) nur an diesen spezifischen Anschluss weitergeschickt. Neue Absender-MAC-Adressen werden automatisch in die Tabelle eingetragen. Switches verbinden Endgeräte in einem LAN. Sie können Datenraten pro Port anpassen und verfügen über Puffer (In-FIFO, Out-FIFO) für jeden Port. Es gibt verschiedene **Switchtypen** (Cut-Through, Store-and-Forward, Fragment-Free), die sich in der Art und Geschwindigkeit der Weiterleitung unterscheiden. **Managebare Switches** bieten Konfigurationsmöglichkeiten über Web-Interfaces oder Kommandozeilen, z. B. für VLANs, Port-Priorisierung (QoS), Spanning Tree Protocol (STP/RSTP) oder Port Mirroring. Layer-3-Switches können auch Routing-Aufgaben basierend auf IP-Adressen übernehmen.




<div style="display:flex;justify-content:center">
    <img src="/teils/teils2/image.png" alt="Abbildung" style="max-width:100%;height:auto;display:block;margin:0;" />
</div>


---

## ↔️ Router

* **Router:** Ein Router verbindet zwei oder mehrere *unterschiedliche* Netzwerke miteinander (z. B. LAN und Internet oder verschiedene Subnetze innerhalb eines LANs). Er arbeitet auf **OSI-Layer 3** (Netzwerkschicht). Router werten die **IP-Adresse** (Netzwerkanteil) in den ankommenden Datenpaketen aus, um den besten Weg zum Zielnetz zu finden. Sie nutzen dazu **Routing-Tabellen** (Weiterleitungstabellen), in denen Netzwerkkennungen (Adressbereiche) und der zugehörige Ausgangsport gespeichert sind. Ist das Zielnetz nicht direkt bekannt, wird das Paket an das **Default Gateway** (den nächsten Router) weitergeleitet. Router verringern auch das **Time-to-Live (TTL)**-Feld in IP-Paketen, um zu verhindern, dass Pakete endlos im Netz kreisen. Es gibt verschiedene Routertypen wie **Heimrouter (SoHo-Router)**, **Edge-Router** und **Core-Router**, die sich in Leistung und Funktionsumfang unterscheiden. SoHo-Router integrieren oft zusätzliche Funktionen wie Switch, WLAN Access Point, DHCP-Server, Firewall oder Telefonanlage. Professionelle Router werden oft über Kommandozeilen (z. B. Cisco IOS) konfiguriert.



---

## 🔥 Firewall

* **Firewall:** Eine Firewall ist eine Software oder dedizierte Hardware, die den Netzwerkverkehr zwischen Netzwerken (typischerweise zwischen einem internen Netz/LAN und dem externen Internet) überwacht und filtert, um unerwünschte oder schadhafte Zugriffe zu blockieren. Sie fungiert als "Brandmauer" oder "Wächter am Tor". Firewalls arbeiten auf verschiedenen OSI-Layern, abhängig von ihrer Art:
    * **Paketfilter:** Prüfen Header-Informationen auf Layer 3 (IP-Adressen) und Layer 4 (Ports) und lassen Pakete basierend auf Regeln passieren oder blockieren sie.
    * **Stateful Inspection Firewalls:** Verfolgen den Zustand von Verbindungen und lassen nur Pakete durch, die zu einer etablierten Verbindung gehören.
    * **Proxy Firewalls / Application Layer Gateways (ALG):** Arbeiten auf Layer 7 (Anwendungsschicht), analysieren auch den Inhalt (Nutzdaten) der Pakete und können als Stellvertreter (Proxy) agieren.
    * **Next-Generation Firewalls (NGFW):** Kombinieren traditionelle Firewall-Funktionen mit erweiterten Sicherheitsmerkmalen wie Intrusion Prevention Systems (IPS), Deep Packet Inspection (DPI), Anwendungskontrolle, Virenschutz und Threat Intelligence Integration.
* Firewalls werden über ein **Regelwerk** konfiguriert, das festlegt, welcher Verkehr erlaubt (ACCEPT, ALLOW, PASS, FORWARD) oder blockiert (DENY, DROP, REJECT) wird. Sie sind essenziell für die **Netzwerksicherheit** und werden oft als **Gateway** eingesetzt. In sicherheitskritischen Umgebungen werden oft **zwei Firewalls** verwendet, um eine **Demilitarized Zone (DMZ)** zu erstellen. Es gibt auch **Open-Source-Firewalls** wie OPNsense® oder IPFire.

