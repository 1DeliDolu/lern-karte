# 🧭 Objektive Bewertung der Systeme (IT-Grundschutzmodellierung) <span style="background:#e0f0ff;">LF4, LF9</span>

Die **objektive Bewertung von Systemen** im Sinne der **IT-Grundschutz-Modellierung** erfolgt in zwei eng verzahnten Schritten: erstens der **Strukturanalyse** (Modellierung des Informationsverbunds mit Prozessen, Anwendungen, Informationen, IT-Systemen, Netzen und Räumen) und zweitens der **Schutzbedarfsfeststellung** (Einstufung der Zielobjekte in Schutzbedarfskategorien je **Schutzziel C-I-A** mit nachvollziehbarer Begründung). *(LF4, LF9)*

---

## 🧱 Grundidee & Zielobjekte

Die Bewertung bezieht sich auf klar definierte **Zielobjekte** eines Informationsverbunds: **Informationen, Anwendungen/Prozesse, IT-Systeme, Kommunikationsverbindungen/Netzkomponenten und Räume**. Diese werden strukturiert erfasst und später je **Schutzziel** (**Vertraulichkeit, Integrität, Verfügbarkeit**) eingestuft. *(LF4, LF9)*

---

## 🗺️ Strukturanalyse (Modellierung des Informationsverbunds)

**Zweck:** vollständige, systematische Erfassung der Umgebung als Basis der Schutzbedarfsfeststellung.
**Umfang:**

* **Geschäftsprozesse, Anwendungen, Informationen** erfassen, **Netzplan** aufnehmen, **IT-Systeme** und **räumliche Gegebenheiten** erheben. *(LF9)* 
* Die System- und Anwendungskategorien werden verknüpft (z. B. Zuordnung von **Office**, **E-Mail**, **Prozessleitsystem**, **Entwicklungssystem** zu konkreten **Client-/Server-Gruppen** mit Standort und Nutzern). *(LF4)* 

> **Ergebnis der Modellierung:** eine tabellarische/graphische Übersicht, die zeigt, **welche Anwendungen auf welchen Systemen** laufen, **wo** sie stehen und **wer** sie nutzt – das ist die Grundlage für Abhängigkeiten und die spätere Bewertung. *(LF4)* 

---

## 🛡️ Schutzbedarfsfeststellung (C-I-A je Zielobjekt)

### Kategorien & Maßstäbe

* **Schadenskategorien** (für Auswirkungsanalyse): *niedrig, normal, hoch, sehr hoch* – abhängig u. a. von tolerierbaren Ausfallzeiten, Notfallplänen sowie **Kumulations-** und **Verteilungseffekten**. *(LF4)*
* **Schutzbedarfskategorien** (Ergebnis je Zielobjekt/Schutzziel): *normal, hoch, sehr hoch* mit Definitionen (bis hin zu **existenzbedrohlich/katastrophal**). *(LF4)* 

### Vorgehen laut BSI (kompakt)

1. **Prüfreihenfolge festlegen** (z. B. erst **Prozesse/Anwendungen**, dann **IT-Systeme**, **Räume**, **Kommunikationsverbindungen**). *(LF4)* 
2. **Schadensszenarien** beschreiben und **Schutzbedarf je C-I-A** mit Begründung festlegen. *(LF4)* 
3. **Abhängigkeiten** zwischen Zielobjekten berücksichtigen (**welche Anwendung auf welchem System** etc.). *(LF4)* 
4. **Ableitungsregeln** anwenden:

   * **Maximumprinzip:** höchster Schutzbedarf dominiert (z. B. durch systemkritische Bedeutung/Verknüpfungen). *(LF4)*
   * **Kumulationseffekt:** mehrere kleinere Schäden können insgesamt **höheren Schutzbedarf** erzeugen (z. B. auf Virtualisierungsservern). *(LF4)* 
   * **Verteilungseffekt:** **Lastausgleich/Redundanz** kann Schutzbedarf **senken** (z. B. für Verfügbarkeit). *(LF4)* 

---

## 🧪 Durchgehendes Beispiel: RECPLAST (BSI-Beispielunternehmen)

### 1) Struktur & Zuordnung

* **Clients/Servergruppen (C1…C9, L1…)** mit OS/Standort/Nutzern und **Anwendungskatalog** (**A001 Office**, **A002 Mail/Kalender**, **A004 Prozessleitsystem**, **A005 Entwicklungssystem**, **A006 Personal** …) – **Kreuztabelle** zeigt, **wo** welche Anwendung betrieben wird. *(LF4)* 

### 2) Schutzbedarf je Zielobjekt (Ausschnitte)

* **Anwendungen/Prozesse**: z. B. **Office** (normal/normal/normal), **Internet-Recherche**, **Prozessleitsystem** etc., jeweils **C-I-A** mit Begründung. *(LF4)* 
* **IT-Systeme**: Einstufungen werden u. a. mit **Maximumprinzip** begründet; **Ausfalltoleranzen** (z. B. Ersatz-Laptop) und **Fehlererkennung** fließen in die **Begründungen** ein. *(LF4)* 
* **Kommunikationsverbindungen**: z. B. **Internetanschluss** → **C/I/V jeweils hoch** (Abfangen/Manipulation/Abhängigkeit von Außenverbindung). *(LF4)* 
* **Räume/Gebäude**: Aufnahme und Bewertung der **Standorte** (Büros, Außendienst, häusliche Arbeitsplätze) als Teil der Gesamtmodellierung. *(LF4)* 

---

## 💾 Spezialfall (Arbeitsbereich): Mobile Datenträger

**Ziel der Feststellung:** Datenart, Systemeinbindung und Risiken klären; Ergebnis dient der **Auswahl geeigneter Maßnahmen**. *(LF4)* 

**Ausgefülltes Protokoll (Ausschnitt):**

* **Kundendaten** → **V: hoch / I: hoch / A: normal**, Begründungen: personenbezogene Daten; keine Verfälschung tolerierbar; Verfügbarkeit durch zentrale DB gegeben. *(LF4)* 
* **Quellcode/Entwicklungspläne/Testergebnisse** → **V: sehr hoch / I: sehr hoch / A: normal**, Begründungen: besondere Algorithmen; Schutz vor Abfluss/Manipulation. *(LF4)* 

> **Ableitung von Maßnahmen** (Basis/Standard/erhöhter Schutzbedarf), u. a. **Verschlüsselung**, **digitale Signaturen**, **sichere Versand-/Aufbewahrung**, **Verlustmeldung**, **Regelung Mitnahme/Versand**, **zertifizierte Datenträger**. *(LF4)*

---

## 🌐 Netzwerkbezug in der Modellierung

Die **Strukturanalyse** und **Schutzbedarfsfeststellung** beziehen **Netzwerkkomponenten** (Router, Firewalls, Switches, TK-Anlagen), **Kommunikationsverbindungen** (z. B. Internetanschluss), **Schichten** (ISMS, **CON**, **OPS**, **APP**, **SYS**, **NET**, **INF**) und passende **Bausteine** mit ein. *(LF9)* 

Eine **Stichwortsammlung fürs Pflichtenheft** verweist auf **VLAN, VPN, Protokolle, Monitoring, Schutzziele, Festlegung der Schutzbedarfskategorien (normal/hoch/sehr hoch)** und die **Ergebnisse der Schutzbedarfs-/Risikoanalyse** als verbindliche Grundlage. *(LF9)* 

---

## ⚙️ Prozessschritte (Checkliste)

1. **Sicherheitsleitlinie & Sicherheitskonzept** als Rahmen setzen. *(LF4, LF9)*
2. **Strukturanalyse**: Prozesse/Anwendungen/Informationen, Netzplan, IT-Systeme, Räume erfassen; **Zuordnungs-/Abhängigkeitstabellen** erstellen. *(LF4, LF9)*
3. **Schutzbedarfsfeststellung** je **C-I-A**: **Schadensszenarien**, **Begründungen**, **Kategorien** (normal/hoch/sehr hoch) festhalten. *(LF4)*
4. **Ableitungsregeln anwenden** (**Maximum-, Kumulations-, Verteilungseffekt**), Abhängigkeiten berücksichtigen. *(LF4)*
5. **Ergebnisse dokumentieren** und für **Maßnahmen-/Bausteinauswahl** (z. B. NET/SYS/INF/APP/OPS) nutzen. *(LF4, LF9)*

---

## 📋 Beispiel-Tabellen (Ausschnitt, didaktisch)

| Zielobjekt                  | Schutzziel |                   Schutzbedarf | Begründung (Kurz)                                          | Quelle |
| --------------------------- | ---------- | -----------------------------: | ---------------------------------------------------------- | ------ |
| Internetanschluss           | C/I/V      |             **hoch/hoch/hoch** | Abfangen/Manipulation möglich; Außenkommunikation kritisch | LF4    |
| Kundendaten (mobil)         | C/I/A      |           **hoch/hoch/normal** | Personenbezug; zentrale DB sichert Verfügbarkeit           | LF4    |
| Quellcode/Entwicklungspläne | C/I/A      | **sehr hoch/sehr hoch/normal** | Schutz vor Abfluss/Manipulation; zentrale Verwaltung       | LF4    |
| Office-Anwendung            | C/I/A      |       **normal/normal/normal** | Standardnutzung ohne hohe Kritikalität                     | LF4    |

---

## 📚 Begriffsklärungen

| Begriff                     | Definition                                                                                                                        | Quelle   |
| --------------------------- | --------------------------------------------------------------------------------------------------------------------------------- | -------- |
| **Strukturanalyse**         | Erstaufnahme des Informationsverbunds (Prozesse, Anwendungen, Informationen, Netzplan, IT-Systeme, Räume) als Basis der Bewertung | LF9      |
| **Schutzbedarfskategorien** | Ergebnisstufen *normal/hoch/sehr hoch* mit klaren Kriterien bis **existenzbedrohlich**                                            | LF4      |
| **Maximumprinzip**          | Höchster Schutzbedarf setzt sich durch (z. B. wegen Systemkritikalität/Verknüpfungen)                                             | LF4      |
| **Kumulationseffekt**       | Mehrere kleinere Schäden führen insgesamt zu **höherem Schutzbedarf** (z. B. Virtualisierung)                                     | LF4      |
| **Verteilungseffekt**       | **Lastausgleich/Redundanz** kann den Schutzbedarf (meist Verfügbarkeit) **senken**                                                | LF4      |
| **Zielobjekte**             | Informationen, Anwendungen/Prozesse, IT-Systeme, Kommunikationsverbindungen/Netzkomponenten, Räume                                | LF4, LF9 |

---

## 🎯 Ergebnis

Mit **IT-Grundschutz-Modellierung** entsteht eine **nachvollziehbare, objektive Bewertung**:

* **Was** existiert (Strukturanalyse), **wie kritisch** es ist (Schutzbedarf je C-I-A) und **warum** (Begründungen/Abhängigkeiten/BSI-Regeln). *(LF4, LF9)*
* Diese Bewertung **steuert die Maßnahmenauswahl** (z. B. Verschlüsselung, Netzbausteine, organisatorische Regeln) und sorgt dafür, dass **erhöhter Schutz** dort umgesetzt wird, **wo er erforderlich** ist. *(LF4, LF9)*

---


