# ⏱️ MTBF – Mean Time Between Failures (Mittlere Betriebsdauer zwischen Ausfällen) <span style="background:#e0f0ff;">LF6</span>

Die **MTBF** ist im Material als **wichtige Kennzahl der Systemzuverlässigkeit** definiert: Sie beschreibt die **mittlere Betriebsdauer zwischen zwei Ausfällen** eines IT-Systems *(„Mean Time Between Failures (MTBF) als wichtige Kennzahl der Systemzuverlässigkeit: mittlere Betriebsdauer zwischen zwei Ausfällen“)*. (LF6) 
Im Kontext des Service- und Incident-Managements stehen dazu die Zeitachsen **„Uptime / Time Between Failures“** und **„Downtime / Time to Repair“** gegenüber; sie werden zur Auswertung von **KPI** in Ticketsystemen genutzt. (LF6) 

---

## 🎯 Einordnung & Ziel

* **Zweck der MTBF:** Verlauf und **Zuverlässigkeit** eines Systems bewerten; Grundlage für Verbesserungen im Betrieb und in SLA-Gesprächen. (LF6) 
* **KPI-Kontext:** Das Material fordert die **Auswertung von KPI** (z. B. Verfügbarkeit in %) sowie Zeitgrößen im Monitoring; MTBF/MTTR werden dabei explizit genannt. (LF6)  
* **Verfügbarkeit (Bezug):** Verfügbarkeit wird im Material als Quotient **(Vereinbarte Servicezeit − Ausfallzeit) / Vereinbarte Servicezeit · 100** angegeben; sie wird gemeinsam mit Zeitkennzahlen im **Check** von Services herangezogen. (LF6) 

---

## ⚙️ Begriffsabgrenzung (aus den Unterlagen)

* **MTTR** (*Mean Time To Repair*): **Durchschnittliche Reparaturzeit** von der Meldung bis zur erneuten Verfügbarkeit eines IT-Systems. (LF6) 
* **MTBF** (*Mean Time Between Failures*): **Mittlere Betriebsdauer zwischen zwei Ausfällen** (Zuverlässigkeit). (LF6) 
* **Verfügbarkeit**: ((\text{Servicezeit} - \text{Downtime})/\text{Servicezeit} \cdot 100) %. (LF6) 

---

## 🧪 Beispiel(e) & Auswertungsideen (aus dem Material abgeleitet)

### Beispiel 1 – Verfügbarkeitsprüfung (Formel aus LF6)

Angenommene Servicezeit im Monat: 720 h; gemessene **Downtime**: 1,2 h ⇒
(\textbf{Verfügbarkeit} = (720 - 1{,}2)/720 \cdot 100 \approx \mathbf{99{,}83%}). (LF6) 

### Beispiel 2 – MTBF als KPI im Incident-Kontext

Die Visualisierung im Lernfeld zeigt explizit **„Uptime, Time Between Failures“** gegenüber **„Downtime, Time to Repair“** zur **KPI-Auswertung** in Ticketsystemen (z. B. Zeitreihen/Peaks). (LF6) 

---

## 💻 Beispielcode (auf Basis der Definitionen in LF6)

### 1) MTBF aus Ausfallzeitpunkten ermitteln (Python)

```python
# Ausfallzeitpunkte (Zeitstempel in Stunden seit Monatsbeginn, Beispielwerte)
failures_h = [12.0, 140.5, 256.0, 480.2, 719.0]

# "Mittlere Betriebsdauer zwischen zwei Ausfällen" (Definition LF6):
intervals = [j - i for i, j in zip(failures_h, failures_h[1:])]
mtbf_h = sum(intervals) / len(intervals) if intervals else float('nan')

print(f"MTBF (h): {mtbf_h:.2f}")
```

*Definition: „mittlere Betriebsdauer zwischen zwei Ausfällen“ (LF6).* 

### 2) Verfügbarkeit gemäß LF6-Formel prüfen (JavaScript)

```js
const servicezeit_h = 720;   // vereinbarte Servicezeit (z. B. Monats-SLA)
const downtime_h   = 1.2;    // gemessene Ausfallzeit

// Verfügbarkeit nach LF6:
const verfuegbarkeit = ((servicezeit_h - downtime_h) / servicezeit_h) * 100;
console.log(`Verfügbarkeit: ${verfuegbarkeit.toFixed(3)} %`);
```

*Formel exakt wie in LF6 angegeben.* 

---

## 🧩 Praxis-Hinweise aus den Unterlagen

* **KPI im Betrieb auswerten:** Verfügbarkeit (in %), **Zeitreihen**, Peaks, sowie **MTBF/MTTR** als Kennzahlen aus Monitoring/Ticketsystem. (LF6)  
* **SLA-/Servicekontext:** Begriffe wie **Service Level, Servicezeit, Reaktionszeit** und die **Messverfahren/-methoden** sind Vertrags-/SLA-Bestandteil. (LF6) 

---

## 📚 Begriffstabelle

| Begriff           | Definition                                                                                          | Quelle |
| ----------------- | --------------------------------------------------------------------------------------------------- | ------ |
| **MTBF**          | **Mittlere Betriebsdauer zwischen zwei Ausfällen**; Kennzahl der **Systemzuverlässigkeit**.         | LF6    |
| **MTTR**          | **Durchschnittliche Reparaturzeit** bis zur erneuten Verfügbarkeit nach einem Ausfall.              | LF6    |
| **Verfügbarkeit** | ((\text{Vereinbarte Servicezeit} - \text{Ausfallzeit})/\text{Vereinbarte Servicezeit} \cdot 100) %. | LF6    |
| **Downtime**      | **Ausfallzeit** (Zeitspanne der Nichtverfügbarkeit).                                                | LF6    |
| **Servicezeit**   | **Zeit**, in der der gebuchte Service zur Verfügung steht.                                          | LF6    |
| **KPI**           | **Schlüsselkennzahl** zur Bewertung von Prozessen/Services (z. B. Verfügbarkeit, Zeitgrößen).       | LF6    |

---

## ✅ Kurzfazit

**MTBF** misst die **mittlere Betriebsdauer zwischen zwei Ausfällen** und dient im Material als **Zuverlässigkeits-KPI**; gemeinsam mit **MTTR** und der **Verfügbarkeit** (Formel in LF6) bildet sie den Kern der **Service- und Incident-Auswertung**. (LF6)   


