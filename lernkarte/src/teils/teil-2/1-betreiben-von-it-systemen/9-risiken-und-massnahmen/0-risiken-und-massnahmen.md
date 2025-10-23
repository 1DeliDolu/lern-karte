# 🛡️ Risiken identifizieren, Maßnahmen planen & Ausfallwahrscheinlichkeiten berücksichtigen <span style="background:#e0f0ff;">LF6, LF4, LF9</span>

In den bereitgestellten Materialien werden **Risiko- und Kontinuitätsmanagement** im IT-Servicekontext verankert: ITIL 4 nennt **Service-Continuity-Management** ausdrücklich als Praxis; hier werden *Risiken ermittelt* und *Maßnahmen/Prozesse für Not- und Katastrophenfälle* **definiert, geübt, vorbereitet, gepflegt und geplant** (LF6). 
Das **BSI-Grundschutz**-Set führt ergänzend die Standards *200-1 bis 200-4* (u. a. *Notfallvorsorge/Business Continuity Management*) als Rahmenwerk für ISMS, Vorgehen, Risikoanalyse und **Notfallmanagement** auf (LF4). 

---

## 🧭 Einordnung & Zielbild

**Ziel** ist die **Verfügbarkeit, Vertraulichkeit und Integrität** von Services auch unter Störungen sicherzustellen – organisatorisch (SLA-, Rollen-, Review-Prozesse) und technisch (z. B. Backups, Redundanz, USV, IDS/IPS) (LF6, LF9).  
ITIL 4 verknüpft das mit einem **Service-Wertsystem** (Value System) und **34 Praktiken**, u. a. Availability-, Capacity- und Continuity-Management sowie **Risk Management**; **PDCA/KVP** ist dabei das Leitprinzip der Verbesserung (LF6). 

---

## 🕵️ Risiken identifizieren

**Methoden der Ursachen- und Risikoanalyse** (für Incidents/Problems/Chancenverbesserung) (LF6):

* **5-Warum-Methode** zur Tiefenklärung von Ursachen. *(LF6)* 
* **Ishikawa/Problemlösungsmatrix** zur Strukturierung (*Was/Wo/Wann/Wieviel* …). *(LF6)* 
* **DMAIC-Zyklus** (Define-Measure-Analyze-Improve-Control) als strukturierter Verbesserungsprozess; in **Control** greifen **PDCA/KVP**, Monitoring sowie Incident/Problem/Change-Management. *(LF6)* 

**Risikofelder & Beispiele** (LF9, LF3, LF6):

* **Technik**: *Hardwaredefekte, Netzstörungen, Malware*; Maßnahmenportfolios siehe unten. *(LF6, LF3)*  
* **Organisation**: unklare **Rollen** → **RACI** klarziehen (Service-Owner/Case-Owner u. a.). *(LF6)* 
* **Recht/Compliance**: DSGVO/Schutzziele beachten; **SLA**-Regelungen inkl. Verfügbarkeit, Reaktions-/Wiederherstellungszeiten. *(LF6)* 

---

## 🛠️ Maßnahmen planen (TOM) – technisch & organisatorisch

**Technisch-organisatorische Maßnahmen (TOM)** inkl. *Risiken identifizieren, Maßnahmen planen, Ausfallwahrscheinlichkeiten bestimmen* (LF9):

* **Strom/Power**: **USV**. *(LF9)* 
* **Redundanz**: **redundante Systeme/RAID**, funktionelle & räumliche Redundanz. *(LF9, LF3)*  
* **Backups**: Strategie, **3-2-1-Regel** (*3 Kopien, 2 Medien, 1 extern*), Off-site/Cloud, Wahl Voll/inkrementell/differenziell. *(LF9, LF3)*  
* **Netz/Perimeter**: **Firewall/Webfilter, Port-Security**, **IDS/IPS**. *(LF9)* 
* **Zugang/Zutritt/Zugriff**: physisch (Alarmanlage, Video, Ausweise) & logisch (Passwörter, MFA, Rollen). *(LF9)* 
* **Monitoring & Logging**, **Compliance Reports**. *(LF9)* 

**Organisatorisch** (LF6, LF9):

* **Service-Level-Management** mit **SLA** (Service-/Supportzeiten, Reaktions-/Wiederherstellungszeiten, **Verfügbarkeit**-Messverfahren). *(LF6)* 
* **Kontinuität**: Übungen/Proben, **Notfallhandbuch**, **Incident-Response-Plan**. *(LF2 – Querschnittshinweise, LF6)*  
* **Lastenheft-Fragen**: *max. Ausfallzeit? Verfügbarkeit?* bereits in Anforderungsanalyse abfragen. *(LF9)* 

---

## 📏 Ausfallwahrscheinlichkeiten & Kennzahlen (MTBF/MTTR/Verfügbarkeit)

Im Service-Controlling werden **kritische Erfolgsfaktoren** und **KPI** genutzt, u. a. die **Verfügbarkeit** und Zeitkennzahlen (LF6). 

* **Verfügbarkeit** in %:
  [
  \textbf{Verfügbarkeit} = \frac{\text{Vereinbarte Servicezeit} - \text{Ausfallzeit (Downtime)}}{\text{Vereinbarte Servicezeit}}\cdot 100
  ]
  *(LF6)* 

* **MTTR** (*Mean Time To Repair*): *durchschnittliche Reparaturzeit* bis zur erneuten Verfügbarkeit. *(LF6)* 

* **MTBF** (*Mean Time Between Failures*): *mittlere Betriebsdauer zwischen zwei Ausfällen* – **Zuverlässigkeitskennzahl**. *(LF6)* 

> **Hinweis zu „AFR“**: Der Begriff **AFR (Annualized Failure Rate)** wird in den bereitgestellten PDF-Materialien **nicht** verwendet/definiert; die Dokumente arbeiten mit **MTBF/MTTR** und Verfügbarkeit. *(LF6)* 

### Beispielrechnung (aus den Formeln des LF6 abgeleitet)

* Servicezeit/Monat: 30 Tage × 24 h = 720 h
* Downtime: 1,2 h ⇒ **Verfügbarkeit** = (720−1,2)/720 ≈ **99,83 %**. *(LF6)* 
* 5 Ausfälle/Jahr, **MTTR** = 0,5 h ⇒ jährliche Downtime ≈ 2,5 h; bei **MTBF** = 1 500 h ⇒ ca. 5–6 Ausfälle/Jahr. *(LF6)* 

---

## 🔄 PDCA-Zyklus (Plan-Do-Check-Act) – praxisnah angewandt

**PDCA/KVP** ist als Grundprinzip im Service-Management verankert (LF6) und wird über **DMAIC-Control → PDCA** operationalisiert (LF6).  

1. **Plan**: Risiken, Schutzziele, KPIs, **SLA** (inkl. Verfügbarkeit) definieren; Maßnahmen (USV/RAID/Backups/IDS/IPS) auswählen. *(LF6, LF9)*  
2. **Do**: technische Umsetzung (USV, Redundanz, 3-2-1-Backups), organisatorisch (RACI, Notfallhandbuch/IR-Plan) ausrollen. *(LF6, LF9)*  
3. **Check**: Monitoring, KPI-Review (Verfügbarkeit, MTTR), Tests/Übungen. *(LF6)* 
4. **Act**: Lessons Learned → Change-/Problem-Management, Maßnahmen nachschärfen. *(LF6)* 

---

## 🚨 Notfallkonzept (Disaster Recovery) – strukturierte Umsetzung

**Service-Continuity-Management** verlangt eine vollständige **Notfallvorsorge** – *definiert, geübt, vorbereitet, gepflegt, geplant* (LF6). 
**BSI-Standard 200-4** benennt *Notfallvorsorge/BCM* als Kernbaustein im IT-Grundschutz (LF4). 

**Bausteine eines Notfallkonzepts** aus den Materialien:

* **Backup-Strategie nach 3-2-1**, inkl. *Off-site/Cloud*; Wiederherstellung berücksichtigen. *(LF9, LF3)*  
* **Redundanz** (funktionell & räumlich), **USV**, **RAID**. *(LF9, LF3)*  
* **Incident-Response-Plan** & **Notfallhandbuch**; **Simulationen/Übungen**. *(LF2 – Querschnitt)* 
* **SLA-Wiederherstellungszeiten** (Reaktion, Wiederherstellung) und **Verfügbarkeit** klar in Verträgen. *(LF6)* 
* **Rollen/RACI**, Eskalationspfade, Kommunikationskanäle (Service Desk). *(LF6)* 

---

## 💻 Beispielcode & Rechen-Snippets (auf Basis der LF6-Formeln)

### 1) Verfügbarkeit, MTTR & MTBF berechnen (JavaScript)

```js
// Eingaben
const servicezeit_h = 720;     // z. B. Stunden/Monat
const downtime_h   = 1.2;      // gemessene Ausfallzeit
const anzahlAusfaelle = 5;     // im Jahr
const mttr_h = 0.5;            // mittlere Reparaturzeit

// Verfügbarkeit (LF6)
const verfuegbarkeit = ((servicezeit_h - downtime_h) / servicezeit_h) * 100;

// MTBF (LF6) – einfache Abschätzung aus Betriebszeit/Anzahl Ausfälle
const betriebszeit_h_jahr = 24 * 365;
const mtbf_h = betriebszeit_h_jahr / anzahlAusfaelle;

console.log(`Verfügbarkeit: ${verfuegbarkeit.toFixed(2)} %`);
console.log(`MTBF: ~${mtbf_h.toFixed(1)} h`);
console.log(`Jährliche Downtime (aus MTTR): ~${(anzahlAusfaelle * mttr_h).toFixed(1)} h`);
```

*(Formeln/Definitionen gemäß LF6)* 

### 2) 3-2-1-Backup-Check (Python)

```python
def drei_zwei_eins_ok(kopien, medien, extern):
    return (kopien >= 3) and (medien >= 2) and extern

print(drei_zwei_eins_ok(3, 2, True))  # True, erfüllt 3-2-1
```

*(Regel gemäß LF9)* 

---

## 📌 Beispiele aus der Praxis (aus den Unterlagen abgeleitet)

* **KMU-Lastenheft**: Abfrage „**Maximale Ausfallzeit**“ und „**Verfügbarkeit**“ direkt im Anforderungsdialog verankern. *(LF9)* 
* **Cloud-Backup-Entscheid**: Vor Vertragsabschluss **Verfügbarkeit** und **Wiederherstellungsdauer** (Recovery-Time) kritisch prüfen. *(LF3)* 
* **SLA-Messung**: **KPI** wie *Verfügbarkeit, erfüllte Serviceziele, SLA-Reviews* regelmäßig auswerten. *(LF6)* 

---

## 📚 Begriffstabelle

| Begriff                           | Definition                                                                                                                            | Quelle |
| --------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------- | ------ |
| **Service-Continuity-Management** | Praxis zur Ermittlung von Risiken sowie Definition, Übung, Vorbereitung, Pflege und Planung von Maßnahmen für Not-/Katastrophenfälle. | LF6    |
| **Verfügbarkeit**                 | (Servicezeit − Downtime)/Servicezeit × 100 %.                                                                                         | LF6    |
| **MTTR**                          | Mittlere Reparaturzeit bis zur erneuten Verfügbarkeit.                                                                                | LF6    |
| **MTBF**                          | Mittlere Betriebsdauer zwischen zwei Ausfällen (Zuverlässigkeit).                                                                     | LF6    |
| **3-2-1-Regel**                   | 3 Kopien, 2 Medien, 1 Kopie extern.                                                                                                   | LF9    |
| **RACI**                          | Rollenmatrix: Responsible, Accountable, Consulted, Informed.                                                                          | LF6    |
| **SLA**                           | Mess-/Vertragskriterien inkl. Verfügbarkeit, Reaktions-/Wiederherstellungszeiten, Service-/Supportzeiten.                             | LF6    |
| **BSI-200-4**                     | Notfallvorsorge/BCM im IT-Grundschutz-Standard.                                                                                       | LF4    |

---

## ✅ Zusammenfassung

* **Risiken** werden mit **5-Warum**, **Ishikawa**, **DMAIC → PDCA/KVP** systematisch identifiziert und adressiert (LF6).  
* **Maßnahmen** umfassen **USV, Redundanz/RAID, 3-2-1-Backups, IDS/IPS, Zutritt/Zugang/Zugriff, Logging/Compliance** (LF9, LF3).   
* **Ausfallwahrscheinlichkeiten/Servicequalität** werden mit **Verfügbarkeit, MTTR, MTBF** gesteuert und in **SLA** verankert (LF6). 
* **Notfallkonzept/DR** folgt ITIL **Service-Continuity** und **BSI-200-4**, mit Übungen, Notfallhandbuch und IR-Plan (LF6, LF4, LF2).   

> Falls du eine **kompakte PDCA-Checkliste** oder eine **SLA-Vorlage** auf Basis dieser Inhalte brauchst, sag einfach Bescheid — ich setze sie sofort für dich auf.
