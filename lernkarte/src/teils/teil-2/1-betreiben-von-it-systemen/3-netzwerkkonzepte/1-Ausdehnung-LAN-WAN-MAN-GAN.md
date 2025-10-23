# 🗺️ Netzausdehnung: **LAN**, **WAN**, **MAN**, **GAN** <span style="background:#e0f0ff;">LF3, LF9</span>

Die Unterlagen führen die Netzausdehnung ausdrücklich über die Kategorien **LAN**, **WAN**, **MAN** und **GAN** auf. (LF3) 

## 🔎 Begriffscharakterisierung (kompakt)

* **LAN (Local Area Network)**: „lokal begrenztes Netzwerk“, in der Regel auf ein **Betriebsgelände** begrenzt; **Ausdehnung bis mehrere Kilometer** möglich. (LF3) 
  **Einordnung/Betreiber:** internes, **privates** Netz des Unternehmens/der Einrichtung. (LF3) 

* **WAN (Wide Area Network / Weitverkehrsnetz)**: **öffentliche** Netze über **große Distanzen**; verbinden **LANs** (z. B. über **DSL, Kabelmodem, Glasfaser, Mobilfunk**). (LF3, LF9)
  **Betreiber:** **Provider/Carrier**; hierarchisch aufgebaut, **öffentliche IP-Adressierung**. (LF3) 

* **MAN (Metropolitan Area Network / Stadtnetz)**: von **lokalen Providern** betrieben; **Stadtraum**–Vernetzung; **in Deutschland eher unüblich**. (LF3) 

* **GAN (Global Area Network / globales Netz)**: **weltweite** Netze wie **Internet** oder **Telefonnetz**. (LF3) 

---

## 🧭 Abgrenzungskriterien

* **Geografie:** LAN = Standort/Betriebsgelände; MAN = Stadtregion; WAN = Region/Land/Kontinent; GAN = global. (LF3)
* **Betreiber & Adressierung:** LAN als **privates** Netz (interne Verantwortung); **WAN/MAN/GAN** von **Providern/Carriern** betrieben, i. d. R. mit **öffentlichen IPs**. (LF3) 
* **Zweck:** WAN verbindet **LANs** über große Distanzen; MAN als städtische Zwischenstufe; GAN als **weltweite** Vernetzungsschicht. (LF3) 

---

## 📈 Leistungsrahmen & Technik (WAN–Bezug)

* **WAN-Infrastrukturen** und typische **Datenraten**:
  *Glasfaser bis 10 Gbit/s*, *Kabel bis 10 Gbit/s Down / 1 Gbit/s Up*, *5G bis 10 Gbit/s*, *VDSL2 bis 350 Mbit/s (kurze Strecken)*; je länger die **Kupfer-Distanz**, desto höhere **Dämpfung** → geringere Rate. (LF9) 
* **WWAN (drahtloses WAN)** umfasst **Mobilfunkstandards** (GSM/GPRS/UMTS/LTE/5G) und **Richtfunk**. (LF3) 

---

## 🧪 Praxisbeispiele aus den Unterlagen

* **SoHo-/Business-Router**: besitzen **WAN-Anschluss** (DSL/Kabel/Glasfaser) und **LAN-Switchports**; **WLAN-AP** integriert; **DHCP-Server** für das LAN. (LF3) 
* **Konkreter WAN-Use-Case (Kleinstunternehmen)**: **LTE-WAN-Router** ersetzt schwaches DSL; Muss-Kriterien z. B. **≥ 10 Mbit/s Down/≥ 5 Mbit/s Up**, integrierter **DHCP/DNS**. (LF9) 

---

## 🧱 Vergleichstabelle

| Begriff | **Definition/Charakter**                                               | **Betreiber/Adressierung**                       | **Beispiele/Technik**                                   | Quelle   |
| ------- | ---------------------------------------------------------------------- | ------------------------------------------------ | ------------------------------------------------------- | -------- |
| **LAN** | Lokal begrenztes Netz, typ. Betriebsgelände; Ausdehnung bis mehrere km | **Privat**, interne Verantwortung                | Ethernet/WLAN im Gebäude/Standort                       | LF3      |
| **WAN** | Öffentliches Netz über große Distanzen; verbindet LANs                 | **Provider/Carrier**, hierarchisch, **öff. IPs** | DSL, Kabel, **Glasfaser**, **Mobilfunk**; bis 10 Gbit/s | LF3, LF9 |
| **MAN** | Stadtnetz (Metropolitan Area), Zwischenstufe LAN↔WAN                   | Lokale Provider                                  | Stadtraum-Vernetzung (DE: eher unüblich)                | LF3      |
| **GAN** | Globales Netz                                                          | Globale Betreiber/Carrier                        | **Internet**, **Telefonnetz**                           | LF3      |

---

## 🧠 Merksätze

* **LAN** = **lokal** (privat, Standort) → interne Kontrolle. (LF3) 
* **WAN** = **weit** (öffentliche Netze), verbindet **LANs**, Bandbreite abhängig von Medium/Distanz. (LF3, LF9)
* **MAN** = **metropolitan** (Stadt), in DE seltener. (LF3) 
* **GAN** = **global** (Internet/Telefonnetz). (LF3) 

---

## 🧩 Mini-Beispiel (Einordnung im Planungsalltag)

Ein **LAN** im Firmengebäude wird über strukturierte Verkabelung/WLAN bereitgestellt; die **WAN-Anbindung** erfolgt z. B. per **Glasfaser/DSL/LTE** am Router-**WAN-Port**, der intern **LAN-Subnetze** bedient (z. B. via DHCP). (LF3, LF9)


