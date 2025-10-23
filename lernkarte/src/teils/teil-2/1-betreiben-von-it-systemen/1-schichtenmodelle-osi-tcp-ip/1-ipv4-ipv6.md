
## 🏷️ IP-Adressen (Internet Protocol)

IP-Adressen gehören zur **Schicht 3 (Vermittlungsschicht/Internetschicht)** des OSI- bzw. TCP/IP-Modells. Ihre Hauptaufgabe ist die logische Adressierung von Geräten (Hosts) und Netzwerken, was das Routing von Datenpaketen über Netzwerkgrenzen hinweg ermöglicht. Eine IP-Adresse ist grundsätzlich zweigeteilt: in einen **Netzanteil (Net-ID)** und einen **Hostanteil (Host-ID)**. Die **Subnetzmaske** dient dazu, diese beiden Teile voneinander zu trennen.

---

### IPv4 (Internet Protocol Version 4)

* **Adressraum:** 32 Bit groß.
* **Anzahl Adressen:** Theoretisch ca. 4,3 Milliarden ($2^{32}$) mögliche Adressen.
* **Schreibweise:** Dezimale Darstellung, byteweise (vier 8-Bit-Blöcke) als Dezimalzahlen (0-255), getrennt durch Punkte (Dotted Decimal Notation).
    * *Beispiel:* `192.168.178.69`
* **Subnetzmaske:** Wird ebenfalls in Dotted Decimal Notation (z.B. `255.255.255.0`) oder als Präfixlänge in CIDR-/Slash-Notation (z.B. `/24`) angegeben. Die Präfixlänge gibt die Anzahl der Bits an, die den Netzanteil darstellen.
* **Private IP-Adressbereiche:** Spezielle Bereiche (z.B. `10.0.0.0/8`, `172.16.0.0/12`, `192.168.0.0/16`), die in lokalen Netzwerken (LANs) verwendet werden und im öffentlichen Internet nicht geroutet werden.
* **NAT (Network Address Translation):** Oft erforderlich, um den Mangel an öffentlichen IPv4-Adressen zu umgehen und private Adressen ins Internet zu übersetzen.
* **Paketgröße (Standard):** 576 Bytes.
* **Fragmentierung:** Router können Pakete fragmentieren (aufteilen), wenn sie über ein Netzwerksegment mit einer kleineren maximalen Paketgröße gesendet werden müssen.
* **Header:** Enthält Checksummen zur Fehlerprüfung.
* **IPsec:** Ist optional.

---

### IPv6 (Internet Protocol Version 6)

* **Adressraum:** 128 Bit groß.
* **Anzahl Adressen:** Theoretisch ca. 340 Sextillionen ($2^{128}$) mögliche Adressen.
* **Schreibweise:** Hexadezimale Darstellung, in acht 16-Bit-Blöcken, getrennt durch Doppelpunkte.
    * *Beispiel:* `fe80::e022:d9bc:318b:1d7a`
    * *Vereinfachungen:* Führende Nullen innerhalb eines Blocks können weggelassen werden (z.B. `0db8` wird `db8`). Eine zusammenhängende Folge von Null-Blöcken kann einmalig durch `::` ersetzt werden (z.B. `fe80:0000:0000:0000:...` wird `fe80::...`).
* **Subnetzmaske:** Wird üblicherweise als Präfixlänge in CIDR-/Slash-Notation angegeben (z.B. `/64`). Teilt die Adresse oft in 64 Bit Netzwerk-Präfix und 64 Bit Interface Identifier.
* **NAT:** Wird nicht benötigt, da genügend Adressen vorhanden sind.
* **Paketgröße (Standard):** 1280 Bytes.
* **Fragmentierung:** Keine Fragmentierung durch Router; dies entlastet die Router. Fragmentierung erfolgt ggf. nur durch den sendenden Host.
* **Header:** Enthält keine Checksummen (wird auf höheren oder tieferen Schichten behandelt).
* **IPsec:** Ist optional (obwohl ursprünglich als verpflichtend angedacht).
* **Dual Stack:** IPv4 und IPv6 können parallel im Internet betrieben werden.

