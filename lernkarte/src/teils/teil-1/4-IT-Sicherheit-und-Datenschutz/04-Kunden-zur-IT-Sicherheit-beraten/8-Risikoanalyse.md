# ⚠️ Risikoanalyse <span style="background:#e0f0ff;">LF4, LF9</span>

Die **Risikoanalyse** dient der **Beurteilung von Gefährdungsszenarien** für konkrete **Zielobjekte** (z. B. Informationen, Anwendungen, IT-Systeme, Kommunikationsverbindungen, Räume), indem **Risiken in Abhängigkeit von Eintrittswahrscheinlichkeiten und möglichen Schadenshöhen bewertet** werden; im **BSI-Vorgehen** schließt sie **an Strukturanalyse, Modellierung und Schutzbedarfsfeststellung** an. *(LF4)*

---

## 🧭 Einordnung & Ziel

* **Position im Prozess:** Nach **Leitlinie → Sicherheitskonzept → Strukturanalyse → Schutzbedarfsfeststellung** folgt die **Risikoanalyse** (BSI-Standard **200-3**: „Risikoanalyse … Risiken behandeln“). *(LF4)*
* **Ziel:** **Objektive Entscheidungsgrundlage** für **geeignete Maßnahmen** (TOM/BSI-Baustein-Anforderungen), insbesondere **zusätzliche Anforderungen** bei **erhöhtem Schutzbedarf**. *(LF4)* 

---

## 🧩 Begriffe & Grundlagen

* **Gefährdungen / Gefährdungslagen:** Das BSI führt **„47 elementare Gefährdungen“** und **bausteinspezifische Gefährdungslagen** (z. B. **Allgemeiner Client**) mit **Bedrohungen** und **Schwachstellen**; diese bilden die Basis für **Schutzbedarfs- und Risikoanalyse**. *(LF4)* 
* **Schutzbedarfskategorien (C-I-A):** **normal / hoch / sehr hoch** mit nachvollziehbaren Begründungen (bis **existenzbedrohlich/katastrophal**). *(LF4)* 
* **Ableitungsregeln:** **Maximumprinzip**, **Kumulations-** und **Verteilungseffekt** beeinflussen den Schutzbedarf und damit die Bewertung. *(LF4)* 

---

## 🔧 Vorgehensmodell der Risikoanalyse (kompakt)

1. **Scope/Zielobjekte festlegen** (z. B. Internetanschluss, Server, Anwendungen, Räume). *(LF4)* 
2. **Gefährdungen & Schwachstellen identifizieren** (elementare Gefährdungen, bausteinspezifische Lagen/Listen). *(LF4)* 
3. **Schadensszenarien formulieren** (direkte/materielle, indirekte/immaterielle Schäden). *(LF4)* 
4. **Risiko bewerten**: **Eintrittswahrscheinlichkeit × Schadenshöhe** (Definition laut BSI-Standard 100-3/200-3). *(LF4)* 
5. **Risiken behandeln**: Ableitung **geeigneter Anforderungen** aus den **BSI-Bausteinen** (Basis/Standard/erhöhter Schutzbedarf; inkl. **Maßnahmenempfehlungen** und **Kreuztabellen**). *(LF4)* 
6. **Dokumentieren & fortschreiben** (im **PDCA-Prozess**). *(LF4)* 

---

## 🌐 Beispiel-Gefährdungen (Auszug aus den Unterlagen)

* **Netzbereitstellung (NET.1.1/NET.1.2):** u. a. **Ausfall/Störung von Netzen (G 0.9)**, **Offenlegung schützenswerter Informationen (G 0.19)**, **Manipulation (G 0.22)**, **Unbefugtes Eindringen (G 0.23)**, **Schadprogramme (G 0.39)**, **DoS (G 0.40)**; ergänzend **Ausfall/Fehlfunktion von Geräten**. *(LF9)* 
* **Clients / Menschlicher Faktor:** u. a. **Schadprogramme**, **Datenverlust durch lokale Datenhaltung**, **unberechtigte Nutzung/Administration**, **Abhören (Mikro/Kamera)**, **Social Engineering**/**Identitätsdiebstahl**. *(LF4)*

---

## 🧪 Durchgehendes Mini-Beispiel (didaktisch, aus PDFs abgeleitet)

**Zielobjekt:** *Internetanschluss* → in der Schutzbedarfsfeststellung oft **C/I/A: hoch/hoch/hoch** (kritische Außenverbindung; Abfangen/Manipulation möglich). *(LF4)* 
**Relevante Gefährdungen:** **G 0.19 Offenlegung**, **G 0.22 Manipulation**, **G 0.23 Unbefugtes Eindringen**, **G 0.40 DoS**. *(LF9)* 
**Behandlung (Bezug BSI-Bausteine):** Anforderungen aus **NET/OPS/CON/SYS/APP** gemäß **Basis/Standard/erhöht**; Auswahl über **Kreuztabellen Gefährdung ↔ Anforderung**. *(LF4)* 

---

## 🧰 Beispielcode zur Bewertungsunterstützung (didaktisch)

> **Hinweis:** Der Code illustriert **die in den Unterlagen beschriebene Bewertung „in Abhängigkeit von Eintrittswahrscheinlichkeit und Schadenshöhe“**. Er ist **kein** normativer Teil des BSI-Standards, sondern ein **Werkzeug** zur **einheitlichen, nachvollziehbaren Erfassung**. *(LF4)* 

```python
# Risiko-Berechnung (vereinfachtes, didaktisches Beispiel nach Definition in LF4)
# Skalen: Eintrittswahrscheinlichkeit (1=sehr gering ... 5=sehr hoch)
#         Schadenshöhe (1=begrenzt/normal ... 3=sehr hoch, vgl. Schutzbedarfskategorien)
from dataclasses import dataclass

@dataclass
class RisikoEintrag:
    zielobjekt: str
    gefaehrdung: str
    eintrittswahrscheinlichkeit: int  # 1..5
    schadenshoehe: int                # 1..3 (normal=1, hoch=2, sehr hoch=3)

    def risiko_score(self):
        return self.eintrittswahrscheinlichkeit * self.schadenshoehe

    def klasse(self):
        s = self.risiko_score()
        return ("niedrig" if s <= 3 else "mittel" if s <= 8 else "hoch")

eintraege = [
    RisikoEintrag("Internetanschluss", "Unbefugtes Eindringen (G 0.23)", 4, 3),
    RisikoEintrag("Client Vertrieb", "Schadprogramm (G 0.39)", 3, 2),
]

for e in eintraege:
    print(f"{e.zielobjekt:18} | {e.gefaehrdung:35} | Score={e.risiko_score():2d} | Klasse={e.klasse()}")
```

---

## 📋 Praxis-Arbeitsblatt (kopierbar)

| Zielobjekt        | Gefährdung (G-Nr./Baustein)                | Eintrittswahrsch. (1–5) | Schadenshöhe (normal=1 / hoch=2 / sehr hoch=3) | **Risiko** (E×S) | Ableitung (BSI-Anforderungen)                                                                  |
| ----------------- | ------------------------------------------ | ----------------------: | ---------------------------------------------: | ---------------: | ---------------------------------------------------------------------------------------------- |
| Internetanschluss | G 0.23 Unbefugtes Eindringen / NET.1.1     |                       4 |                                              3 |               12 | NET/OPS-Anforderungen gem. Kreuztabelle (z. B. Härtung, Protokollierung, ggf. erhöht) *(LF4)*  |
| Client (Standard) | G 0.39 Schadprogramme / SYS.2.1            |                       3 |                                              2 |                6 | Standard-Anforderungen (AV, Patch-/Änderungsmanagement) *(LF4)*                                |
| Personalraum      | G 0.24 Zerstörung von Geräten/Datenträgern |                       2 |                                              2 |                4 | Physische Maßnahmen (Zutritt, Aufbewahrung) *(LF4)*                                            |

---

## 📚 Begriffstabelle

| Begriff                                      | Definition                                                                                                                                                                  | Quelle |
| -------------------------------------------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ------ |
| **Risikoanalyse**                            | Verfahren zur **Bewertung von Risiken** für Zielobjekte **in Abhängigkeit von Eintrittswahrscheinlichkeit und Schadenshöhe**; **nach** Schutzbd.-Feststellung/Modellierung. | LF4    |
| **Gefährdungen / Gefährdungslage**           | **Elementare Gefährdungen** (Liste) und **bausteinspezifische Gefährdungslagen** mit Bedrohungen/Schwachstellen.                                                            | LF4    |
| **Schutzbedarfskategorien**                  | **normal / hoch / sehr hoch** (bis **existenzbedrohlich/katastrophal**).                                                                                                    | LF4    |
| **Maximumprinzip / Kumulation / Verteilung** | Regeln zur **Ableitung des Schutzbedarfs** und damit relevanter Risikoannahmen.                                                                                             | LF4    |
| **Netz-Gefährdungen (Auszug)**               | z. B. **G 0.19 Offenlegung**, **G 0.22 Manipulation**, **G 0.23 Unbefugtes Eindringen**, **G 0.39 Schadprogramme**, **G 0.40 DoS**.                                         | LF9    |
| **BSI-Anforderungen (Bausteine)**            | **Basis/Standard/erhöhter Schutzbedarf**, **Maßnahmenempfehlungen**, **Kreuztabellen** (Gefährdung ↔ Anforderung).                                                          | LF4    |

---

## ⚙️ Umsetzungstipps (aus den PDFs abgeleitet)

* **Gefährdungslisten systematisch nutzen** (elementar + bausteinspezifisch) und **Abhängigkeiten** zwischen Zielobjekten aus der Schutzbedarfsfeststellung übernehmen. *(LF4)*
* **Bewertung konsistent dokumentieren** (Schadensszenarien, Skalen, Begründungen) und **Behandlung** konsequent über **BSI-Baustein-Anforderungen** ableiten. *(LF4)* 
* **Regelmäßige Fortschreibung** im **PDCA-Zyklus** (neue Gefährdungen, Änderungen in System/Netz/Prozess). *(LF4)* 

---

