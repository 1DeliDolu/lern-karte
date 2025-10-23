# 🧵 Strukturierte Verkabelung (Universelle Gebäudeverkabelung, UGV) <span style="background:#e0f0ff;">LF3, LF9</span>

Die **strukturierte, dienstneutrale Gebäudeverkabelung (UGV)** fasst Telefonie, Fernsehen und Datennetz auf **einer einheitlichen Verkabelung** zusammen und ist in **EN 50173**, **ISO/IEC 11801** sowie **TIA 568A/B** normiert. (LF3) 

Die UGV ist **passive Verkabelung** (Leitungen, Dosen, Patchfelder); **aktive Komponenten** wie Switches/Router gehören **nicht** zur Verkabelung und werden nur im Verteilerschrank eingebaut/bei Bedarf ersetzt. (LF3) 

---

## 🏗️ Ebenen & Hierarchie (SV/GV/EV/TA)

Die UGV gliedert sich **dreistufig** in **Primär-, Sekundär- und Tertiärverkabelung**; Ergebnis ist eine **Gesamttopologie „erweiterter Stern“** über drei Ebenen. (LF3)

* **Primärverkabelung (Flächenverkabelung)**: vom **Standortverteiler (SV)** sternförmig zu **Gebäudeverteilern (GV)**; **Lichtwellenleiter** üblich wegen **hohem Datendurchsatz**/großer Distanzen. (LF3) 
* **Sekundärverkabelung (Vertikal/Steigleitung)**: vom **GV** sternförmig zu **Etagenverteilern (EV)**; **LWL** und **Kupfer**. (LF3) 
* **Tertiärverkabelung (Horizontal)**: vom **EV** sternförmig zu **informationstechnischen Anschlüssen (TA, Wanddose)** in den Räumen; meist **Kupfer**, bei sehr hohen Anforderungen **FTTD** (*Fibre to the Desk*). (LF3) 

**Planungsfaustregel**: **pro 1 000 m²** ein **Etagenverteiler** (EV); mehrere Etagen können an einen EV, wenn wenige TAs vorhanden sind. (LF3) 

**Redundanz**: **Querverbindungen** innerhalb der Ebene (z. B. GV↔GV, EV↔EV) ergeben als Gesamttopologie eine **unvollständige Masche**. (LF3) 

---

## 🧩 Topologien (als Ergebnis der UGV)

**Stern** → **erweiterter Stern** (Standard), bei Querverbindungen: **unvollständige Masche**. (LF3) 

---

## 📏 Längen & Strecken (Channel vs. Permanent Link)

* **Permanent Link**: **fest verlegte Strecke** zwischen **Patchfeld (Verteiler)** und **TA**, **max. 90 m**. (LF3) 
* **Channel Link**: **gesamte Strecke** vom **Switch** bis zum **Endgerät** (inkl. Patchschnüre), **max. 100 m**. (LF3) 

---

## 🗄️ Komponenten & Aufbau

* **19-Zoll-Verteilerschränke** mit **Patchpanels**; **jede Leitung endet an einer Patchpanel-Buchse**. (LF3) 
* **Patchen/Rangieren**: Verbindung **Switchport↔Patchfeld** mit **Patch-Schnüren**; **Patchfeld↔TA** ist die **Festverkabelung**. (LF3) 
* **Anschlussdosen**: in normalen Räumen **Wanddosen**, in Großraumbüros **Bodentanks**; **Doppel-/Dreifachdosen** sind **Einzeldosen** vorzuziehen. (LF3) 
* **Sonderfall Sammelpunkt (SP)**: **Unterverteiler** sind **nicht vorgesehen**; **Ausnahme**: auf der **dritten Ebene** darf ein **TA als Sammelpunkt** fungieren (z. B. Schulungsraum). (LF3) 

---

## 🧭 Planung innerhalb Etage & Gebäude (Praxis)

**Etage**: **Cat.6-Leitungen** von **Netzwerkdosen** zum **Patch Panel**; **Patch Panel** und **Switch** im **19-Zoll-Rack**, kurze Patchkabel **Switch↔Patch Panel**; **Portanzahl (8/16/24/48)** nach **Anzahl Dosen** dimensionieren, ggf. **Switch-Kaskadierung**. (LF9) 

**Gebäude**: **Access-Switches** der Etagen zum **Gebäude-/Hauptanschlussraum**, dort **Patch Panel** und Switch **räumlich nahe** (Rack), Verbindung über **RJ45-Patchkabel**. (LF9) 

---

## 🗂️ Dokumentation & Beschriftung

**Pflicht**: **Lagepläne** mit **Dosen, Leitungen, Verteilern**; **Beschriftung** der Dosen mit **Gebäude-/Stockwerks-/Verteiler-/Patchfeld-/Port-Kennungen**. (LF3) 

**Kennzeichnungsschema (Beispiel aus den Unterlagen)**: **A-111.2-3.11** = *Gebäude A*, *3. Stock*, *Verteiler 2*, *Patchfeld 3*, *Port 11*. **Stockwerke** beginnen mit **0 im Erdgeschoss** (Fehlervermeidung). (LF3) 

**Vor-Ort-Doku**: **Grundrisspläne** + **Listen** (Patchfeld-/Port-Nr., **Leitungstyp**, **Zimmer**) gehören **in jeden Verteiler** (Schnellhefter). (LF3) 

> **Hinweis im Projektkontext**: In **Lasten-/Pflichtenheften** wird die **LAN-Verkabelung (strukturierte Verkabelung)** sowie ein **Vernetzungsplan (Ist/Soll)** explizit geführt. (LF9)

---

## 🧪 Praxis-Ausschnitte aus den PDFs

### Beispiel „Netzwerketage“ (Sinngrafik im Text)

* **Dosen → Patch Panel → Switch (Rack)**, **WLAN-AP** im Raum; **Endgeräte** (Drucker, Desktop, IP-Phone, Laptop) an TAs. (LF9) 

### Beispiel „Dokumentationsliste“ (Auszug)

| Patchpanel-Nr./Port-Nr.                                                              | Leitungstyp | Zimmer |
| ------------------------------------------------------------------------------------ | ----------- | ------ |
| 3.1                                                                                  | **CAT6**    | 12     |
| 3.2                                                                                  | **CAT6**    | 12     |
| 3.3                                                                                  | **CAT5e**   | 12     |
| 3.5                                                                                  | **CAT6a**   | 13     |
| *(Auszug der Liste im Verteiler; gehört inkl. Grundriss in jeden Verteiler.)* (LF3)  |             |        |

---

## ⚙️ Prozessschritte (aus den Unterlagen abgeleitet)

1. **Ist-Aufnahme & Planung**: **Vernetzung Etage/Gebäude** festlegen; **Medienwahl** (LWL, Twisted-Pair, WLAN, Powerline bei Bedarf) nach **Datendurchsatz/Kosten**. (LF9) 
2. **Hierarchie & Topologie**: **SV/GV/EV/TA** mit **Primär/Sekundär/Tertiär** als **erweiterter Stern**; optional **Querverbindungen** für **Ausfallsicherung**. (LF3)
3. **Dimensionierung**: **Portzahlen** an **Dosenanzahl** ausrichten; **Switches/PP** im **19-Zoll-Rack**. (LF9) 
4. **Installation**: **Patchpanel**, **Dosen (Wand/Bodentank)**, **Patchen** Switch↔PP; **Sammelpunkt** nur als **Ausnahme** auf **Ebene 3** zulässig. (LF3) 
5. **Längenregeln prüfen**: **Permanent Link ≤ 90 m**, **Channel Link ≤ 100 m**. (LF3) 
6. **Dokumentation**: **Beschriftung** nach Schema, **Lagepläne/Listen** in **jedem Verteiler**; in **Anforderungsdokumenten** (Lasten/Pflichtenheft) **Verkabelung & Netzplan** aufführen. (LF3, LF9)

---

## 📚 Begriffstabelle

| Begriff                             | Definition                                                                              | Quelle |
| ----------------------------------- | --------------------------------------------------------------------------------------- | ------ |
| **UGV / strukturierte Verkabelung** | Einheitliche, dienstneutrale Gebäudeverkabelung nach EN 50173/ISO/IEC 11801/TIA 568A/B. | LF3    |
| **SV/GV/EV/TA**                     | **Standort-/Gebäude-/Etagenverteiler**, **TA (Anschlussdose)** als Endpunkt.            | LF3    |
| **Primär/Sekundär/Tertiär**         | Dreistufige Verkabelung (Fläche/Vertikal/Horizontal).                                   | LF3    |
| **Erweiterter Stern**               | Standard-Gesamttopologie der UGV über drei Ebenen.                                      | LF3    |
| **Unvollständige Masche**           | Durch **Querverbindungen** zur Ausfallsicherung.                                        | LF3    |
| **Permanent Link**                  | **Patchfeld↔TA**, **≤ 90 m**.                                                           | LF3    |
| **Channel Link**                    | **Switch↔Endgerät** inkl. Patchschnüre, **≤ 100 m**.                                    | LF3    |
| **Patchpanel/19-Zoll-Schrank**      | Jede Leitung endet am PP; Montage im 19-Zoll-Rack.                                      | LF3    |
| **Dosen (Wand/Bodentank)**          | Wand in üblichen Räumen, Bodentank im Großraum; Doppel/Dreifach empfehlenswert.         | LF3    |
| **Dokumentation**                   | Lagepläne, Beschriftung (z. B. **A-111.2-3.11**), Listen je Verteiler.                  | LF3    |
| **Etagen/Gebäude-Planung**          | Cat6-Dosen zur PP; PP+Switch im Rack; Portdimensionierung und Kaskadierung.             | LF9    |

---

