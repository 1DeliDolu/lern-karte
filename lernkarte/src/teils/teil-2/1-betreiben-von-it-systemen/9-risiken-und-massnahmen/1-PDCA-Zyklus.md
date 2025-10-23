# 🔄 PDCA-Zyklus (Deming-Kreis) <span style="background:#e0f0ff;">LF4, LF6</span>

Der **PDCA-Zyklus** (*Plan–Do–Check–Act*) ist im Material als zentraler **Verbesserungs- und Steuerungsprozess** verankert: Der **BSI-IT-Grundschutz** fordert, Sicherheitsmaßnahmen **laufend im PDCA-Prozess** anzupassen; die vier Phasen **Plan – Do – Check – Act** sind dort explizit dargestellt. *(LF4)*  
In **IT-Service-Management** wird **kontinuierliche Verbesserung (KVP)** gefordert; **ITIL 4** zeigt dazu das Service-Wert-System (u. a. Aktivität **Plan**/**Improve**) und benennt **PDCA/KVP** im **Continual-Service-Improvement-Management (CSIM)** als Vorgehen. *(LF6)*   

---

## ⚙️ Prozessschritte (aus den Unterlagen)

**Plan (Planen)** – *Grundlage schaffen*
Im **BSI-Grundschutz**: **systematisch nach Schwachstellen suchen**, **Angemessenheit** umgesetzter Schutzmaßnahmen **prüfen** sowie **Sicherheitskonzepte entwickeln und fortschreiben** – eingebettet in den **PDCA (Deming-Zyklus)**. *(LF4)* 

**Do (Ausführen)** – *Maßnahmen umsetzen*
Umsetzung geplanter Änderungen im **Change-Management** (Änderungen planen, genehmigen, implementieren, überprüfen), eingebettet in die Service-Prozesse. *(LF6)* 

**Check (Prüfen)** – *Ergebnisse messen*
**KPI** auswerten (z. B. **Verfügbarkeit**, **MTTR**, **MTBF**), **SLA-Reviews**, **Berichte**, **Kundenfeedback**, **Umfragen**. *(LF6)*   

**Act (Handeln)** – *Verbessern & absichern*
**Verbesserungsvorschläge bearbeiten**, **Service-Reviews**/Änderungen einsteuern (**PDCA/KVP**), **IT-Assessments** nutzen; im **DMAIC-Schema** wird die Sicherung von Verbesserungen explizit mit **„PDCA-KVP“** referenziert. *(LF6)*  

---

## 🧰 Methoden & Einbettung

* **ITIL 4 Service-Wert-System** mit Aktivitäten **Plan** und **Improve**; KVP ist hervorgehoben. *(LF6)*  
* **CSIM (Continual-Service-Improvement-Management)**: Vorgehen **PDCA, KVP**; Instrumente u. a. **KPI-Analysen, Kundenfeedbacks, Beschwerden, Umfragen, Service-Reviews, Berichte**. *(LF6)* 
* **DMAIC-Zyklus (Six Sigma)**: In der Phase **Control**: **„PDCA-KVP“** sowie **Monitoring** und **Incident/Problem/Change-Management** als Sicherungsinstrumente. *(LF6)* 

---

## 📏 KPI-Bezug im „Check“ (aus dem Material)

* **Verfügbarkeit**: (\frac{\text{Vereinbarte Servicezeit} - \text{Downtime}}{\text{Vereinbarte Servicezeit}} \cdot 100) *(LF6)* 
* **MTTR** (durchschnittliche Reparaturzeit) & **MTBF** (mittlere Betriebsdauer zwischen Ausfällen) als Kernkennzahlen. *(LF6)* 

---

## 🧪 Beispielcode: „Check“ mit Verfügbarkeits-KPI (aus Formel in LF6 abgeleitet)

```python
# Ziel: Verfügbarkeit gegen SLA-Ziel prüfen (Check-Phase)
servicezeit_h = 720.0     # z. B. Stunden/Monat
downtime_h   = 1.2        # gemessene Ausfallzeit
sla_ziel     = 99.9       # Ziel in Prozent

verfuegbarkeit = ((servicezeit_h - downtime_h) / servicezeit_h) * 100.0
status = "OK (≥ SLA)" if verfuegbarkeit >= sla_ziel else "Verbesserung nötig (Act auslösen)"

print(f"Verfügbarkeit: {verfuegbarkeit:.3f}%  |  Ziel: {sla_ziel}%  →  {status}")
```

*Formel und KPI-Einordnung gemäß LF6.*  

---

## 🧩 Beispiele/Anwendungen (aus den Unterlagen)

* **CSIM-Aktivitäten** (für Check/Act): **KPI-Analysen, Service-Reviews, Kundenfeedback, Umfragen, Berichte** – auf **PDCA/KVP** ausgerichtet. *(LF6)* 
* **IT-Grundschutz**: **PDCA** zur **laufenden Anpassung** der Sicherheitsmaßnahmen und Fortschreibung von **Sicherheitskonzepten**. *(LF4)* 

---

## 📚 Begriffstabelle

| Begriff                  | Definition/Einordnung                                                                                                | Quelle |
| ------------------------ | -------------------------------------------------------------------------------------------------------------------- | ------ |
| **PDCA (Deming-Zyklus)** | Vierphasiger Verbesserungsprozess: **Plan – Do – Check – Act**; für kontinuierliche Anpassung im ISMS gefordert.     | LF4    |
| **KVP**                  | **Kontinuierlicher Verbesserungsprozess** als Grundprinzip im Service-Management/ITIL 4.                             | LF6    |
| **CSIM/CSI**             | **Continual-Service-Improvement-Management**; Vorgehen **PDCA, KVP** mit KPI-Analysen, Feedback, Reviews, Berichten. | LF6    |
| **KPI**                  | Messgröße zur Beurteilung von Prozessen/Services (z. B. **Verfügbarkeit**, **MTTR**, **MTBF**).                      | LF6    |
| **ISMS/BSI-Grundschutz** | Methodik/Standards zur Informationssicherheit; fordert **PDCA-basiertes** kontinuierliches Vorgehen.                 | LF4    |

---

## ✅ Kurzfazit

* **PDCA** ist im **BSI-Grundschutz** verankert und wird im **ITIL/CSIM-Kontext** mit **KVP** durch **KPI-basierte** Checks und **Reviews** praktisch umgesetzt. *(LF4, LF6)*  
* **Check** stützt sich u. a. auf **Verfügbarkeit/MTTR/MTBF**; **Act** leitet daraus **Verbesserungen/Changes** ab. *(LF6)*  

> Brauchst du eine **PDCA-Checkliste** (leer zum Ausfüllen) oder eine **SLA/KPI-Auswertungsvorlage** passend zu LF6? Ich stelle sie dir sofort zusammen.
