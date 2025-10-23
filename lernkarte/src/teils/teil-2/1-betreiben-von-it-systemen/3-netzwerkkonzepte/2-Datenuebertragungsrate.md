# 🚀 Datenübertragungsrate (Netzwerke) <span style="background:#e0f0ff;">LF3, LF9</span>

Die **Datenübertragungsrate** ist die im Netz **pro Zeiteinheit übertragene Datenmenge**. Sie wird mit (C) bezeichnet und nach der Grundformel (C=\frac{D}{t}) (Datenmenge (D) geteilt durch Zeit (t)) angegeben; Einheiten sind **bit/s (bps)** bzw. **Byte/s (B/s)**. Wichtig: **1 Byte = 8 Bit**. *(LF3)* 

Häufig werden in der Praxis die Begriffe **Geschwindigkeit**, **Bandbreite** und **Datenrate** vermischt. **Geschwindigkeit** meint physikalisch die **Signalausbreitung** (ca. zwei Drittel der Lichtgeschwindigkeit – bei Kupfer und Glasfaser ähnlich), **Bandbreite** ist der **verwendete Frequenzbereich in Hertz (Hz)**, während die **Datenrate** die übertragene Informationsmenge pro Zeit ist. Glasfaser hat nicht „höhere Geschwindigkeit“ als Kupfer, aber **höhere Datenraten**. *(LF3)*

Im Alltag ist die **Nutzdatenrate** niedriger als die nominelle Schnittstellenrate, weil **Protokoll-Overhead** und Leitungscodes einen Teil der Kapazität belegen. Achten Sie zudem auf die Schreibweise: Angaben erfolgen teils in **Bit/s**, teils in **Byte/s**. *(LF3)* 

---

## 📡 Typische Raten nach Medium/Technik

* **Ethernet (LAN):** Übliche Raten reichen **von 10 Mbit/s bis 100 Gbit/s**, neuere Entwicklungen definieren **bis 400 Gbit/s**. Standard in heutigen Verkabelungen: **1 Gbit/s** oder **10 Gbit/s** (Kupfer: i. d. R. bis **100 m**). *(LF3)* 
* **WLAN (IEEE 802.11):**

  * **Wi-Fi 4 (802.11n):** bis **600 Mbit/s** (5 GHz), **289 Mbit/s** (2,4 GHz). *(LF9)* 
  * **Wi-Fi 5 (802.11ac):** theoretisch bis **6933 Mbit/s**; bei der Auswahl von Access Points ist der **realistisch verfügbare Durchsatz** (Beispiel: **1733 Mbit/s**) relevant. *(LF9)*
  * **Wi-Fi 6 (802.11ax):** theoretisch bis **9600 Mbit/s**. *(LF9)* 
  * Hinweis: WLAN-Standards sind **abwärtskompatibel**; paralleler Betrieb (z. B. 802.11g und 802.11ac) ist möglich. *(LF9)* 
* **Lichtwellenleiter (LWL):** Wird eingesetzt, **wo höchste Datenraten (10 Gbit/s und größer)** gefordert sind, z. B. im Rechenzentrum. *(LF9)* 
* **Schnittstellen/Weitverkehr (Auszug):** **Ethernet bis 400 Gbit/s**, **Fibre Channel bis 32 Gbit/s**, **DSL 384 kbit/s bis 250 Mbit/s**, **ISDN 64–128 kbit/s**. *(LF3)* 

---

## 🧪 Beispielrechnungen (aus dem Lehrtext)

### Beispiel 1: Übertragungszeit aus Datenrate und Datenmenge

**Aufgabe:** Ein Film mit **1 GB** soll über eine Leitung mit **50 Mbit/s** übertragen werden.
**Lösung:**
(D=1,\text{GB}=8,\text{Gbit}=8\cdot10^9,\text{bit}), (C=50\cdot10^6,\text{bit/s}).
(t=\frac{D}{C}=\frac{8\cdot10^9}{50\cdot10^6}\approx160,\text{s}) (**2 min 40 s**). *(LF3)* 

### Beispiel 2: Bandbreite einer Multimode-Faser (Bandbreiten-Längenprodukt)

**Gegeben:** **OM2**, (B\cdot L=500,\text{MHz·km}), **Länge (L=2{,}5,\text{km})**.
**Gesucht:** Übertragbare **Bandbreite (B)**.
**Lösung:** (B=\frac{500}{2{,}5}=200,\text{MHz}). *(LF3)* 

---

## 🧰 Praxisrelevanz bei Auswahl & Planung

* **Access Points (WLAN):** Wichtige Kriterien sind u. a. **Wi-Fi-Standard (Wi-Fi 5/6)**, **tatsächliche WLAN-Geschwindigkeit** (z. B. **1733 Mbit/s** bei Wi-Fi 5), **MU-MIMO**, **OFDMA**, **Multi-Gigabit-Ethernet**, **PoE**, **Ports 10/100/1000 BASE-T**. *(LF9)* 
* **Switches:** Kriterien u. a. **100/400 GbE, 10GBASE-T, RJ45/SFP+/QSFP+**. Grundsatz: **Je höher die unterstützten Datendurchsatzraten, desto höher Preis**; **sehr hohe Raten** erfordern **Glasfaser**. *(LF9)* 
* **Pflichtenheft/Anforderungskatalog:** **Datenübertragungsrate** ist ein explizites **Planungs- und Vergleichskriterium** neben **Bandbreite, Latenz, Verfügbarkeit, Medium**. *(LF9)* 

---

## 📚 Begriffe & Definitionen

| Begriff                       | Definition                                                                                                    | Quelle |
| ----------------------------- | ------------------------------------------------------------------------------------------------------------- | ------ |
| **Datenübertragungsrate** (C) | Übertragene Datenmenge pro Zeit (C=\frac{D}{t}); Einheit bit/s bzw. B/s.                                      | LF3    |
| **Bandbreite**                | Frequenzbereich (Hz) zwischen oberer und unterer Grenzfrequenz, der zur Informationsübertragung genutzt wird. | LF3    |
| **Geschwindigkeit (Signal)**  | Physikalische Wellenausbreitung (~(2/3) c); **nicht** identisch mit Datenrate.                                | LF3    |
| **Bit / Byte**                | **1 Byte = 8 Bit**; Vorsicht bei Einheiten (bit/s vs. Byte/s).                                                | LF3    |
| **Ethernet-Raten**            | Üblich 10 Mbit/s–100 Gbit/s; Entwicklungen bis 400 Gbit/s; Standard 1/10 Gbit/s.                              | LF3    |
| **WLAN-Raten**                | Wi-Fi 5 bis 6933 Mbit/s (theoretisch), Wi-Fi 6 bis 9600 Mbit/s (theoretisch); reale Durchsätze beachten.      | LF9    |
| **LWL für hohe Raten**        | LWL-Verkabelung dort, wo 10 Gbit/s und mehr gefordert sind (z. B. RZ).                                        | LF9    |
| **Overhead-Hinweis**          | Tatsächliche Nutzdatenrate < Schnittstellenrate wegen Protokoll-Overhead/Leitungscode.                        | LF3    |

---

## 🧭 Kurz-Leitfaden (lernen & prüfen)

1. **Einheiten sauber halten:** Bit/Byte unterscheiden; (C=\frac{D}{t}) anwenden. *(LF3)* 
2. **Begriffe trennen:** Bandbreite (Hz) ≠ Datenrate (bit/s) ≠ Geschwindigkeit (m/s). *(LF3)*
3. **Technik passend wählen:** Für **>10 Gbit/s** LWL einplanen; bei WLAN auf **Standard & realen Durchsatz** achten. *(LF9)*
4. **Overhead einrechnen:** Erwartete **Nutzdatenrate** < Nennrate der Schnittstelle. *(LF3)* 
5. **In Pflichtenheften fixieren:** Ziel-**Datenraten**, **Bandbreite**, **Medium**, **Schnittstellen** klar spezifizieren. *(LF9)* 

Wenn du möchtest, erstelle ich dir auf Basis dieser Inhalte Übungsaufgaben (inkl. Lösungen) oder eine kompakte Lernkarte speziell zur **Datenübertragungsrate**.
