# 🗺️ Netzwerkplan <span style="background:#e0f0ff;">LF3, LF9</span>

Ein **Netzwerkplan** (oft auch **Vernetzungsplan**) ist die **vereinfachte fachliche Darstellung** der vorhandenen bzw. geplanten **Netzwerkinfrastruktur** (Ist/Soll) und wird in **Lasten-/Pflichtenheften** beigelegt, um Infrastruktur, Komponenten und Erweiterungsbedarf sichtbar zu machen. *(LF9)*
Zur inhaltlichen Ausarbeitung gehört die systematische Erfassung von **Netzwerkknoten**, **Netzwerkgeräten** (z. B. **Switch**, **Router**, **Access Point**), **Adressierung** und **Verkabelung** eines **LAN** – also aller Hardware **und** Einstellungen (z. B. Adressen). *(LF3)*

---

## 🎯 Ziele & Nutzen eines Netzwerkplans

* **Transparenz über Aufgaben des LAN** (Kommunikations-, Daten-, Funktions-, Ressourcenverbund) als Grundlage für Planung und Dokumentation. *(LF3)* 
* **Vertragliche Klarheit**: **Vernetzungsplan** als Anhang zu Lasten-/Pflichtenheft für die fachliche Spezifikation der Umsetzung. *(LF9)* 
* **Erweiterungsbedarf erkennen** (z. B. zusätzliche APs, Dosen, Segmente) durch **Ist/Soll-Plan** in der Infrastrukturübersicht. *(LF9)* 

---

## 🧱 Inhalte eines Netzwerkplans (Struktur & Elemente)

**1) Netzwerkstrukturen/Topologien** – Auswahl & Begründung
**Stern**, **Erweiterter Stern** (heutiger Standard), **(un-)vollständige Masche**, **Zelle**, **Punkt-zu-Punkt**, **Bus**, **Ring** – mit Hinweisen zur **Zugriffssteuerung** (z. B. CSMA/CD, CSMA/CA, Token Passing). *(LF3)* 

**2) Strukturierte Verkabelung (UGV)** – Ebenen & Symbole im Plan

* **Primär-/Sekundär-/Tertiärverkabelung** mit **Standortverteiler (SV)**, **Gebäudeverteiler (GV)**, **Etagenverteiler (EV)** und **Informationstechnischen Anschlüssen (TA)**; inklusive Normverweise **EN 50173**, **ISO/IEC 11801**, **TIA 568A/B**. *(LF3)* 

**3) Komponenten & Knoten**

* **Switch** (Weiterleiten/Transport), **Router** (Netze verbinden), **Access Point** (Funkzelle für Mobilgeräte) – als **Network Devices** im Plan zwingend zu kennzeichnen. *(LF3)* 

**4) Adressierung & Netze**

* **MAC**, **IPv4/IPv6**, **Subnetzmaske/Präfix** – grundlegende Angaben, die im Plan (oder in der begleitenden Adresstabelle) auszuführen sind. *(LF3)* 

**5) LAN/WAN/Wireless & Dienste**

* **WAN-Anschlussart** (z. B. DSL, Kabel-TV, LWL, Mobilfunk) sowie **WLAN**, **VLAN**, **VPN** und ggf. **PoE** als planungsrelevante Blöcke. *(LF9)* 

**6) Segmentierung & Routing**

* **VLAN** nach **IEEE 802.1Q** (VLAN-ID-Tagging, logische Gruppierung, Performance/Sicherheit, Priorisierung) und **Routing-Tabellen** als feste Bestandteile der Planung. *(LF9)*

**7) Informationssicherheit, Betrieb & Verfügbarkeit**

* Erfassung der **Sicherheitsanforderungen**, **Backup**, **Administration/Support**, **Verfügbarkeitsziele** im Plan-Anhang (Lastenheft-Vorlage). *(LF9)*

---

## 🧭 Prozessschritte zur Erstellung eines Netzwerkplans

1. **Erstgespräch/Analyse**: Fragen zu Arbeitsplätzen, Peripherie, Netzwerksystem, Sicherheit, Administration, Verfügbarkeit etc. systematisch klären (**Kategorien-Checkliste**). *(LF9)* 
2. **Ist-Aufnahme**: Vorhandene Adressen, Geräte, Leitungswege, Dosen/Verteiler erfassen; im **Arbeitsbuch** wird explizit die **IST-Analyse** gefordert. *(LF3)* 
3. **Netzwerkplan erstellen**: Aus der Ist-Analyse den **Plan** (Topologie, Verkabelungsebenen, Geräte, Adressierung) zeichnen; im Lehrtext wird das **Erstellen eines Netzwerkplans** als Arbeitsauftrag genannt. *(LF3)* 
4. **Lastenheft ausfüllen** (Infrastruktur/WAN/WLAN/Verfügbarkeit/Sicherheit/Backup etc.) inkl. **vereinfachtem Vernetzungsplan (Ist/Soll)**. *(LF9)*
5. **Pflichtenheft ableiten**: Fachliche Spezifikation **wie** die Anforderungen umgesetzt werden; **Vernetzungsplan** kann hier **fachlich detailliert** beigelegt werden. *(LF9)* 

---

## 🧪 Praktische Beispiele (aus dem Lehrtext)

### 1) Schematischer Verkabelungsplan (SV → GV → EV → TA) <span style="background:#e0f0ff;">LF3</span>

```
[SV] Standortverteiler
  ├─[GV1]───[EV1.1]───TA…      Primär: SV→GV   Sekundär: GV→EV   Tertiär: EV→TA
  ├─[GV2]───[EV2.1]───TA…
  ├─[GV3]───[EV3.1]───TA…
  └─[GV4]───[EV4.1]───TA…
Legende: SV=Standortverteiler, GV=Gebäudeverteiler, EV=Etagenverteiler, TA=IT-Anschluss
```

*(LF3)* 

### 2) Beispiel-Vernetzungsplan (Ausschnitt) <span style="background:#e0f0ff;">LF9</span>

```
[Server Farm]──┐
[Workgroup Server]─┤──[Switch 1000 Mbit/s]──[Power User]
                  └── weitere Segmente …
```

*(LF9)* 

### 3) VLAN-Plan nach IEEE 802.1Q (Beispiel aus dem Text) <span style="background:#e0f0ff;">LF9</span>

| Abteilung                                                                       | VLAN-ID | IP-Netz         |
| ------------------------------------------------------------------------------- | ------: | --------------- |
| Personalabteilung                                                               |   VLAN1 | 192.168.10.0/24 |
| Vertrieb                                                                        |   VLAN2 | 192.168.20.0/24 |
| Produktion                                                                      |   VLAN3 | 192.168.30.0/24 |
| Marketing                                                                       |   VLAN4 | 192.168.40.0/24 |
| *(LF9 – VLANs: Tagging, Segmentierung, Performance/Sicherheit, Priorisierung)*  |         |                 |

### 4) Routing-Tabelle (vereinfacht, Ausschnitt) <span style="background:#e0f0ff;">LF9</span>

```
Netz           | Ausgabe-Port | Router-Port-IP   | Bemerkung
---------------|--------------|------------------|-------------------------
10.0.0.0/24    | Port1        | 10.0.0.1         | Netz Hauptgebäude
10.0.1.0/24    | Port2        | 10.0.1.1         | Netz Entwicklung
10.0.2.0/24    | Port3        | 10.0.2.1         | Netz Lager
...
```

*(LF9 – Vermittlung/Routing, Routing-Tabelle)* 

---

## 🧰 Methoden & Hilfen aus dem Lehrtext

* **Checkliste Lastenheft** (u. a. Infrastruktur, WAN, WLAN, Verfügbarkeit, Sicherheit, Backup, Admin/Support) als Leitfaden für die Planinhalte. *(LF9)* 
* **Arbeitsaufträge** im Lehrtext: **IST-Analyse**, **Netzwerkplan erstellen**, **Netzwerkerweiterung** – didaktische Abfolge für die Planerstellung. *(LF3)* 

---

## 📚 Begriffstabelle

| **Begriff**                         | **Definition**                                                                                                                          | **Quelle** |
| ----------------------------------- | --------------------------------------------------------------------------------------------------------------------------------------- | ---------- |
| **Netzwerkplan / Vernetzungsplan**  | Vereinfachte fachliche Darstellung der Netzwerkinfrastruktur; liegt **Lasten-/Pflichtenheft** bei (Ist/Soll).                           | *(LF9)*    |
| **Strukturierte Verkabelung (UGV)** | Dreistufige Gebäudeverkabelung (**Primär/Sekundär/Tertiär**) mit **SV/GV/EV/TA**; nach **EN 50173**, **ISO/IEC 11801**, **TIA 568A/B**. | *(LF3)*    |
| **Topologie**                       | Form der physischen Leitungsverlegung und Datenwege (**Stern**, **Masche**, **Zelle**, **Bus**, **Ring**, **P2P**).                     | *(LF3)*    |
| **VLAN (IEEE 802.1Q)**              | Logische LAN-Segmentierung über **getaggte VLAN-IDs**; Optimierung von Verkehr/Sicherheit/Prioritäten.                                  | *(LF9)*    |
| **Routing-Tabelle**                 | Zuordnung „Zielnetz → Ausgangsport/Next-Hop“ im Router zur Weiterleitung von Paketen.                                                   | *(LF9)*    |
| **WAN-Anschluss**                   | Anschlussarten (z. B. **DSL**, **Kabel-TV**, **LWL**, **Mobilfunk**) im Plan erfassen.                                                  | *(LF9)*    |
| **Network Devices**                 | **Switch**, **Router**, **Access Point** als aktive Komponenten im Plan.                                                                | *(LF3)*    |

---

## ✅ Kompakte Vorgehens-Checkliste (für deinen Plan)

1. **Erstgespräch führen** (Kategorien lt. LF9). *(LF9)* 
2. **Ist-Analyse** (Dosen/Verteiler/Adressierung/Komponenten). *(LF3)* 
3. **Plan zeichnen** (Topologie + UGV-Ebenen + Geräte + Adress-/VLAN-Plan). *(LF3, LF9)*
4. **Lastenheft ausfüllen** + **Vernetzungsplan (Ist/Soll)** beilegen. *(LF9)* 
5. **Pflichtenheft** mit **fachlich detailliertem Vernetzungsplan** erstellen. *(LF9)* 

> **Hinweis:** Alle Beispiele, Tabellen und Bezeichnungen oben sind **direkt dem Lehrtext entnommen** bzw. 1:1 in Textform wiedergegeben (ohne freie Ergänzungen). *(LF3, LF9)*


