# 🚨 Notfallkonzept (Disaster Recovery) <span style="background:#e0f0ff;">LF4, LF6, LF2</span>

Ein **Notfallkonzept** (Disaster Recovery) sichert die **Verfügbarkeit, Vertraulichkeit und Integrität** von IT-Services in Stör- und Krisenfällen durch geplante, dokumentierte und geübte Maßnahmen. Es ist fachlich in **BSI-IT-Grundschutz** (u. a. **Standard 200-4: Notfallvorsorge/Business Continuity Management**) sowie prozessual in **ITIL 4** (**Service Continuity Management**) verankert.  
Konkrete Bausteine sind u. a. **Backup-Konzept**, **Notfallpläne**, **USV**, **Patch-Management**, **Virenschutz/Firewall** sowie **Simulation von Notfallsituationen**, **Notfallhandbuch** und **Incident-Response-Plan**.  

---

## 🎯 Ziele & Einordnung

* **Ziel**: Geschäftskritische Services auch im Notfall funktionsfähig halten bzw. **schnell wiederherstellen**; rechtliche & vertragliche Anforderungen (z. B. **SLA**) einhalten. 
* **Rahmenwerke**:

  * **BSI-Grundschutz** mit **PDCA-Zyklus** zur **Aufrechterhaltung und Verbesserung** des ISMS.  
  * **ITIL 4**: **Service Continuity Management** als **Praktik** im **Service-Wertsystem**. 

---

## 🧱 Bausteine des Notfallkonzepts (organisatorisch & technisch)

### Organisatorisch

* **Notfallhandbuch**: Verbindliche Anleitung für Krisenabläufe. 
* **Incident-Response-Plan**: Vorgehen bei Sicherheitsvorfällen. 
* **Rollen & Verantwortlichkeiten** (z. B. **Notfallbeauftragter**, Informationssicherheitsbeauftragter, Leitung): klare Zuständigkeiten schaffen. 
* **Übungen/Simulationen**: Regelmäßiges **Durchspielen von Notfällen** zur Wirksamkeitsprüfung. 

### Technisch

* **Verfügbarkeitskontrolle**: **Brandschutz, Raumüberwachung, Backup-Konzept, Notfallpläne, Patch-Management, USV, Virenschutz/Firewall**. 
* **Netz-/Perimeter-Schutz**: Firewalls (inkl. **NGFW**) zur Erkennung/Abwehr von Malware. 
* **Datensicherung**: „**Ausreichende Datensicherungsverfahren**“ als TOM festlegen. 
* **Monitoring**: 24/7-Überwachung, **Alarme bei Grenzwerten**, automatisierte Entstörungsskripte. 

---

## 🧭 Prozessschritte (BSI-Sicherheitsprozess & PDCA)

1. **Plan** – Planung & Konzeption
   **Leitlinie** und **Sicherheitskonzept** erstellen, **Strukturanalyse** & **Schutzbedarfsfeststellung** durchführen, geeignete **TOM** auswählen (angemessen nach Wirksamkeit, Eignung, Wirtschaftlichkeit etc.).   
2. **Do** – Umsetzung
   **Notfallhandbuch/IR-Plan** veröffentlichen, **Rollen** besetzen, **Backups, USV, Patch-Management, Firewalls** implementieren, **Monitoring** etablieren.   
3. **Check** – Prüfen
   **Simulationen/Übungen** durchführen, **KPI** (z. B. **Verfügbarkeit**) und **Zeitkennzahlen** (MTTR/MTBF) auswerten.  
4. **Act** – Verbessern
   Ergebnisse in **Reviews** und **Verbesserungsmaßnahmen** überführen; **Aufrechterhaltung & Verbesserung** des Systems sicherstellen. 

---

## 📏 Messung & Service-Vereinbarungen

* **Verfügbarkeit** als KPI im Reporting:
  [
  \textbf{Verfügbarkeit}=\frac{\text{Vereinbarte Servicezeit} - \text{Ausfallzeit (Downtime)}}{\text{Vereinbarte Servicezeit}}\cdot 100
  ]
  (z. B. **99,9 %**) – Bestandteil der **SLA-Berichte/Reviews**. 
* **Betriebszeiten im SLA**: **24/7** (24 h, 7 Tage) oder **12/5** (12 h, 5 Werktage) klar definieren. 
* **Zeitachsen im Incident-Kontext**: **Downtime/Time to Repair** vs. **Uptime/Time Between Failures** für Analysen. 

---

## 🧪 Beispiele aus den Unterlagen

* **Übung & Vorbereitung**: „**Simulation von Notfallsituationen**“, **Notfallhandbuch**, **Incident-Response-Plan** – als feste Elemente der Notfallvorsorge. 
* **TOM-Liste** (Auszug für Notfälle): **Backup-Konzept**, **Notfallpläne**, **USV**, **Patch-Management**, **Firewall/Virenschutz**. 
* **ITIL-Verankerung**: **Service Continuity Management** gehört zu den **34 Praktiken** in ITIL 4. 

---

## 💻 Beispielcode & Snippets (auf Basis der Formeln/Listen in LF4/LF6)

### 1) Verfügbarkeit gegen SLA prüfen (LF6)

```python
servicezeit_h = 720.0     # z. B. Monats-SLA
downtime_h   = 1.2        # gemessene Ausfallzeit
sla_ziel     = 99.9       # Ziel in %

verfuegbarkeit = ((servicezeit_h - downtime_h) / servicezeit_h) * 100.0
status = "OK (≥ SLA)" if verfuegbarkeit >= sla_ziel else "SLA verletzt – Review/Verbesserung (Act)"
print(f"Verfügbarkeit: {verfuegbarkeit:.3f}% | Ziel: {sla_ziel}% → {status}")
```

*Formel und KPI-Bezug wie in LF6.* 

### 2) Minimal-Checkliste „Notfallbereitschaft“ aus TOM-Bausteinen (LF4/LF2)

```json
{
  "Dokumente": ["Notfallhandbuch", "Incident-Response-Plan", "Kontakt- & Eskalationsliste"],
  "Technik": ["Backup-Konzept", "USV vorhanden", "Patch-Management aktiv", "Virenschutz/Firewall"],
  "Übungen": ["Notfallsimulation durchgeführt", "Lernpunkte dokumentiert"],
  "SLA": ["Betriebszeit (z.B. 24/7, 12/5)", "Kennzahlen-Review (Verfügbarkeit, MTTR/MTBF)"]
}
```

*Inhalte exakt aus den TOM-Stichworten und Notfall-Artefakten der Unterlagen.*    

---

## 📚 Begriffstabelle

| Begriff                           | Definition                                                                                                | Quelle |
| --------------------------------- | --------------------------------------------------------------------------------------------------------- | ------ |
| **Notfallvorsorge / BCM**         | BSI-Standard **200-4**: Notfallvorsorge/Business-Continuity-Management als Bestandteil des Grundschutzes. | LF4    |
| **Service Continuity Management** | ITIL 4-**Praktik** im Service-Wertsystem zur Sicherung der Service-Kontinuität.                           | LF6    |
| **Notfallhandbuch**               | Zentrales Dokument für Abläufe in Notfällen.                                                              | LF2    |
| **Incident-Response-Plan**        | Plan zur Reaktion auf Sicherheitsvorfälle.                                                                | LF2    |
| **Verfügbarkeitskontrolle**       | Maßnahmen: **Backup-Konzept**, **Notfallpläne**, **Patch-Management**, **USV**, **Virenschutz/Firewall**. | LF4    |
| **Verfügbarkeit (KPI)**           | ((\text{Servicezeit} - \text{Downtime})/\text{Servicezeit} \cdot 100) %.                                  | LF6    |
| **SLA-Betriebszeiten**            | **24/7** bzw. **12/5** als typische Servicezeiten.                                                        | LF6    |
| **Monitoring**                    | 24/7-Überwachung, Alarme, automatische Entstörungsskripte.                                                | LF6    |

---

## ✅ Kurzfazit

Ein wirksames **Notfallkonzept** kombiniert **BSI-Grundschutz (PDCA, 200-4)** mit **ITIL 4 Service Continuity Management**: **TOM** (Backup-Konzept, USV, Patch-Management, Firewall), **Dokumente** (Notfallhandbuch, IR-Plan), **Übungen/Simulationen**, **Monitoring** und **SLA/KPI-Reviews** (Verfügbarkeit, MTTR/MTBF). So wird **Aufrechterhaltung & Verbesserung** des Sicherheitsniveaus im Regelkreis sichergestellt.     


