# 📏 Soll-Ist-Vergleich & Abweichungen erkennen und berechnen <span style="background:#e0f0ff;">LF1, LF2, LF6, LF8, LF11a</span>

Ein **Soll-Ist-Vergleich** prüft systematisch, ob festgelegte Ziele (**Sollwerte**) durch die tatsächlich erreichten Ergebnisse (**Istwerte**) erfüllt werden, und bildet den Kern der **Check-Phase** im **PDCA-Zyklus** zur kontinuierlichen Verbesserung (KVP). (LF1). 
In der Praxis wird der Soll-Ist-Vergleich u. a. über **Erfüllungsmatrizen/-checklisten** in Beschaffungsprozessen, über **Kennzahlen (KPI)** im Service-Management und über **Burn-down-Charts** in agilen Projekten eingesetzt. (LF2, LF6, LF8).   

## 🎯 Grundlagen: Ziele & Messbarkeit

Ziele sollen **SMART** formuliert sein (**spezifisch, messbar, akzeptiert, realistisch, terminiert**), damit ein Soll-Ist-Vergleich eindeutig möglich ist. (LF1). 
Die **Check-Phase** des **PDCA-Zyklus** vergleicht „Was wurde erreicht?“ mit „Wie soll es sein?“ und leitet daraus Korrekturen/Verbesserungen ab. (LF1). 

**Sollwerte** lassen sich z. B. aus **Spezifikationen** ableiten; **spezifikationsbasierte Testdatengeneratoren** erzeugen dazu passende Sollwerte für Tests. (LF8). 

## 📊 Kennzahlen (KPI) für Soll-Ist-Vergleiche

Im Service-Management werden **Key-Performance-Indikatoren (KPI)** als Messgrößen genutzt, die absolut, prozentual und im **Zeitvergleich** ausgewertet werden (z. B. Verfügbarkeit in %, ungelöste Tickets Jahr-zu-Jahr). (LF6). 
Beispiele für KPI-Auswertungen sind u. a. **Dauer der Fehlerbehebung**, **Verhältnis ungelöster/gelöster Tickets** sowie **Erfüllung von Servicezielen** nach SLA. (LF6). 

### Wichtige Formeln/Begriffe aus den PDFs

* **Service-Verfügbarkeit (%)**:
  (\displaystyle \text{Verfügbarkeit} = \frac{\text{vereinbarte Servicezeit} - \text{Ausfallzeit}}{\text{vereinbarte Servicezeit}} \cdot 100) (LF6). 
* **MTTR/MTBF**: **Mean Time To Repair** (durchschnittliche Reparaturzeit) und **Mean Time Between Failures** (mittlere Betriebsdauer zwischen Ausfällen) als Basiskennzahlen für Zuverlässigkeit/Verfügbarkeit. (LF6). 
* **Wirtschaftlichkeit** (Effizienz-Kennzahl): (\text{Erträge}/\text{Aufwendungen}) (als **Prozentzahl − 100**) zur Einordnung von Effizienzgewinnen. (LF1). 
* **Auslastung in % (Beispiel)**: (\displaystyle \text{Auslastung} = \frac{100 \cdot \text{AnzahlBelegt}}{\text{AnzahlGesamt}}) (als Algorithmus in der „Liegeplatzverwaltung“). (LF11a). 

## 🧠 Abweichungen erkennen & bewerten

**Abweichungen** zeigen sich überall dort, wo Istwerte die Sollwerte **unter-** oder **über-**schreiten (z. B. SLA-Grenzen, geplante Restaufwände, Qualitätskriterien). (LF6, LF8, LF2).   
In **agilen Projekten** macht das **Burn-down-Chart** Plan- (Soll) vs. Ist-Verlauf transparent; Abweichungen werden so visuell sichtbar und können gesteuert werden. (LF8). 
Bei **Beschaffungen** werden Soll-Kriterien (Qualität, Termine, Konditionen) gegen Ist-Angaben der Angebote in **Erfüllungsmatrizen** abgeglichen. (LF2). 

---

## 🧩 Beispielcode (aus PDF-Inhalten abgeleitet)

### 1) Verfügbarkeit berechnen & gegen SLA-Soll prüfen (LF6)

```python
def verfuegbarkeit_prozent(vereinbarte_servicezeit_stunden, ausfallzeit_stunden):
    return ( (vereinbarte_servicezeit_stunden - ausfallzeit_stunden)
             / vereinbarte_servicezeit_stunden ) * 100.0

# Beispiel:
servicezeit = 720.0   # z. B. 30 Tage * 24 h
downtime   = 1.5      # Ausfallzeit
ist_verf   = verfuegbarkeit_prozent(servicezeit, downtime)

sla_soll = 99.9       # SLA-Sollwert in %
abweichung_prozentpunkte = ist_verf - sla_soll

print(f"Verfügbarkeit (Ist): {ist_verf:.3f}%")
print(f"Abweichung ggü. SLA-Soll: {abweichung_prozentpunkte:+.3f} %-Punkte")
```

Diese Berechnung verwendet direkt die Verfügbarkeitsformel aus dem Service-Management. (LF6). 

### 2) Auslastung (Beispiel aus „Liegeplatzverwaltung“) berechnen (LF11a)

```python
def auslastung_prozent(anzahl_belegt, anzahl_gesamt):
    return (100.0 * anzahl_belegt) / anzahl_gesamt

print(auslastung_prozent(anzahl_belegt=75, anzahl_gesamt=100))  # -> 75.0
```

Die Formel entspricht der im Algorithmus gezeigten Berechnung der Belegung in %. (LF11a). 

### 3) Wirtschaftlichkeit als Effizienz-Kennzahl (LF1)

```python
def wirtschaftlichkeit_prozent(ertraege, aufwendungen):
    return (ertraege / aufwendungen) * 100.0  # Interpretation als Prozentwert
```

Die Kennzahl „Erträge/Aufwendungen (als Prozentzahl − 100)“ wird im Qualitäts-/Unternehmenskontext zur Effizienzbewertung herangezogen. (LF1). 

---

## ⚙️ Prozessschritte für Soll-Ist-Vergleiche (QM-konform)

1. **Ziele SMART definieren** (konkrete Sollwerte, klare Termine). (LF1). 
2. **Sollwerte ableiten** (z. B. aus Spezifikationen; Test-Sollwerte per **spezifikationsbasiertem Testdatengenerator**). (LF8). 
3. **Istwerte messen/erheben** (KPI: Verfügbarkeit, Tickets, Zeiten; Monitoring/Reporting). (LF6). 
4. **Vergleich & Abweichungsanalyse** (z. B. Burn-down-Chart: geplanter vs. geleisteter Aufwand). (LF8). 
5. **Maßnahmen ableiten & umsetzen** (PDCA-„Act“/„Do“) und **erneut prüfen** (PDCA-„Check“). (LF1). 

---

## 🛠️ Methoden & Anwendungsfelder

* **Erfüllungsmatrix/-checkliste** für Angebots-Soll-Ist-Abgleich (Lieferzeit, Qualität, Konditionen). (LF2). 
* **KPI-Dashboards/Reports** für SLA-Erfüllung, Ticketlage, Verfügbarkeiten inkl. Peaks/Eskalationen. (LF6). 
* **Burn-down-Charts** zur laufenden Fortschritts- und Abweichungskontrolle im Sprint. (LF8). 

---

## 🧪 Beispiele (aus den PDFs)

* **Service-Verfügbarkeit**: Mit obiger Formel werden Ist-Verfügbarkeiten berechnet und mit **SLA-Soll** verglichen; Abweichungen leiten Eskalationen oder Verbesserungsmaßnahmen ab. (LF6). 
* **Projektfortschritt**: Das **Burn-down-Chart** zeigt Differenzen zwischen geplantem und tatsächlichem Restaufwand pro Tag. (LF8). 
* **Beschaffung**: **Erfüllungsmatrix** zeigt pro Kriterium (Soll) den Ist-Stand eines Angebots; Abweichungen sind sofort erkennbar. (LF2). 
* **Auslastung**: Prozentuale Belegung (z. B. Ressourcen/Plätze) wird mit Soll-Auslastung verglichen. (LF11a). 

---

## 📚 Begriffstabelle

| **Begriff**            | **Definition**                                                                  | **Quelle** |
| ---------------------- | ------------------------------------------------------------------------------- | ---------- |
| **Sollwert**           | Ziel-/Referenzwert, z. B. aus Spezifikation oder SLA abgeleitet.                | LF8        |
| **Istwert**            | Tatsächlich gemessener Wert aus Betrieb/Monitoring/Test.                        | LF6        |
| **KPI**                | Kennzahl zur Messung von Leistungs-/Zielgrößen (absolut, %, Zeitvergleiche).    | LF6        |
| **Verfügbarkeit (%)**  | ((\text{Servicezeit} - \text{Ausfall})/\text{Servicezeit} \cdot 100)            | LF6        |
| **MTTR / MTBF**        | Reparaturzeit / mittlere Zeit zwischen Ausfällen zur Zuverlässigkeitsbewertung. | LF6        |
| **Burn-down-Chart**    | Visualisiert geplanten vs. geleisteten Aufwand (Abweichungen sichtbar).         | LF8        |
| **Erfüllungsmatrix**   | Kriterienspezifischer Soll-Ist-Abgleich in der Beschaffung.                     | LF2        |
| **Wirtschaftlichkeit** | Effizienz-Kennzahl Erträge/Aufwendungen (als % − 100).                          | LF1        |
| **PDCA**               | Zyklus Plan-Do-Check-Act; Soll-Ist-Vergleich in „Check“.                        | LF1        |

---

## ✅ Kurzfazit

Ein wirksamer **Soll-Ist-Vergleich** basiert auf **SMART**en Zielen, sauber abgeleiteten **Sollwerten**, verlässlichen **Ist-Messungen** (KPI) und einer klaren **Abweichungsanalyse** (z. B. über Verfügbarkeitsformeln, Burn-down-Charts, Erfüllungsmatrizen) im Rahmen des **PDCA-Zyklus**. (LF1, LF2, LF6, LF8, LF11a).     

Wenn du ein konkretes Szenario (z. B. SLA-Ziel/Logs oder eine Angebotsmatrix) hast, rechne ich dir den vollständigen Soll-Ist-Vergleich sofort durch.
