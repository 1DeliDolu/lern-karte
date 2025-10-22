# 🛡️ Imageschaden <span style="background:#e0f0ff;">LF4, LF8</span>

Ein **Imageschaden** ist die **negative Innen- und Außenwirkung** eines IT-Sicherheitsvorfalls auf die Wahrnehmung eines Unternehmens – er zählt zu den **indirekten, immateriellen Schadensszenarien** neben z. B. Gesetzes-/Vertragsverstößen oder der Beeinträchtigung von Rechten Betroffener. (LF4) 

Die BSI-Systematik unterscheidet für die Bewertung des Schadensausmaßes **Schadenskategorien** (*niedrig, normal, hoch, sehr hoch*) und dazu passend **Schutzbedarfskategorien** (*normal, hoch, sehr hoch*). Die Einstufung hängt u. a. ab von **tolerierbaren Ausfallzeiten**, der **Qualität der Notfallpläne** sowie möglichen **Kumulationseffekten** – Imageschäden können hierbei wesentlich zur Höherstufung führen. (LF4) 

Sicherheitsrelevante **Mängel in Software** verursachen häufig **Imageschäden** und **Vertrauensverlust** bei Kunden; dem wirken **Security by Design** und **Privacy by Design** entgegen, die von Beginn an Vertraulichkeit, Integrität und Verfügbarkeit absichern. (LF8) 

---

## ⚙️ Einordnung & Auslöser

* **Indirekt/immateriell:** *negative Innen-/Außenwirkung (Imageschaden)*; zusätzlich treten oft Gesetzes-/Regelverstöße oder Beeinträchtigungen informationeller Selbstbestimmung auf. (LF4) 
* **Typische Trigger:** Datenschutzverletzungen, anhaltende **Geschäftsunterbrechungen**, Bußgelder/Anwaltskosten, Verlust von Kunden – allesamt Faktoren, die das öffentliche Bild belasten. (LF4) 

---

## 🛡️ Vermeidung & Begrenzung von Imageschäden

1. **Schutzbedarfsfeststellung & IT-Grundschutz umsetzen**
   Systematisch feststellen, *wie viel Schutz* Informationen/Anwendungen/IT-Systeme benötigen, und daraus **Maßnahmen** ableiten. (LF4) 

2. **TOM nach DSGVO Art. 32 verankern**
   **Pseudonymisierung, Verschlüsselung**, dauerhafte Sicherstellung von **Vertraulichkeit/Integrität/Verfügbarkeit**, **Wiederherstellbarkeit** und **regelmäßige Wirksamkeitsprüfungen**. (LF4) 

3. **Security/Privacy by Design**
   Sicherheits- und Datenschutzprinzipien **von Anfang an** in den Entwicklungsprozess einbetten, um **Sicherheitslücken** – und damit verbundene Imageschäden – präventiv zu vermeiden. (LF8) 

4. **Detektion & Reaktion professionalisieren (Schicht „DER“)**
   **Security-Incident-Management** und **IT-Forensik-Vorsorge** etablieren, um Vorfälle schnell zu erkennen, aufzuarbeiten und glaubwürdig zu kommunizieren. (LF4) 

5. **Verfügbarkeit absichern**
   **3-2-1-Backups** (3 Kopien, 2 Medien, 1 extern) und **Redundanz** (funktionell, räumlich, organisatorisch) reduzieren Ausfälle – ein zentraler Hebel gegen imageschädigende Downtimes. (LF9) 

---

## 🧪 Beispiele (aus den Lernfeldern abgeleitet)

* **Sicherheitslücke in Produktsoftware → Vertrauensverlust/Imageschaden**
  Gegenmaßnahme: **Security by Design/Privacy by Design** im gesamten Engineering-Prozess. (LF8) 

* **Datenschutzvorfall (personenbezogene Daten) → negative Außenwirkung**
  Gegenmaßnahme: **Art. 32 DSGVO** umsetzen (Verschlüsselung, Wiederherstellbarkeit, Wirksamkeitsreviews). (LF4) 

* **Längerer Systemausfall** (z. B. Storage/Netz) → Kundenunzufriedenheit/Imageschaden
  Gegenmaßnahme: **Redundante Systeme** + **3-2-1-Backup** + klare **Notfallpläne**. (LF9, LF4) 

---

## 🧭 Prozessschritte zur Risikosteuerung (kompakt)

1. **Schutzbedarf erheben** (Zielobjekte benennen, z. B. ERP, Benutzerverwaltung, Netze). (LF4) 
2. **Gefährdungslage/Schwachstellen prüfen** (nach BSI-Bausteinen, inkl. 47 elementarer Gefährdungen). (LF4) 
3. **Maßnahmen planen** (Basis-/Standard-/erhöhter Schutzbedarf). (LF4) 
4. **Implementieren & testieren** (TOM, SBD/PBD, Redundanz, Backups). (LF8, LF9) 
5. **Detektieren & reagieren** (Incident-Management, Forensik-Vorsorge). (LF4) 
6. **Regelmäßig bewerten** (Kategorie *niedrig…sehr hoch*, Faktoren wie Ausfallzeit/Notfallpläne). (LF4) 

---

## 🧾 Begriffstabelle

| Begriff                          | Definition                                                                                                           | Quelle |
| -------------------------------- | -------------------------------------------------------------------------------------------------------------------- | ------ |
| **Imageschaden**                 | **Negative Innen-/Außenwirkung** eines IT-Vorfalls; immaterielles Schadensszenario.                                  | (LF4)  |
| **Schadenskategorien**           | *niedrig, normal, hoch, sehr hoch* zur Bewertung des Ausmaßes.                                                       | (LF4)  |
| **Schutzbedarf**                 | *normal, hoch, sehr hoch* – leitet Maßnahmen ab.                                                                     | (LF4)  |
| **Art. 32 DSGVO**                | TOM: **Verschlüsselung**, **Belastbarkeit**, **Wiederherstellbarkeit**, **Wirksamkeitsprüfung**.                     | (LF4)  |
| **Security/Privacy by Design**   | Sicherheit/Datenschutz **über den gesamten Entwicklungsprozess** verankern; verhindert Vertrauens- und Imageschäden. | (LF8)  |
| **Incident-Management/Forensik** | Bausteine der **DER-Schicht** für Detektion/Reaktion auf Sicherheitsvorfälle.                                        | (LF4)  |
| **3-2-1-Backup**                 | Drei Kopien, zwei Medien, eine extern – **Downtime-Risiko** und Folgeschäden senken.                                 | (LF9)  |
| **Redundanz**                    | Funktionell/räumlich/organisatorisch mehrfach auslegen, um Ausfälle zu vermeiden.                                    | (LF9)  |

---

## 🎯 Zielbild

**Imageschäden** lassen sich **präventiv** minimieren, wenn **Schutzbedarf** sauber ermittelt, **TOM nach Art. 32** konsequent umgesetzt, **Security/Privacy by Design** institutionalisiert, sowie **Detektion/Response** und **Verfügbarkeit** (Redundanz, 3-2-1) professionell gelebt werden – alles **BSI-konform** und prüffähig dokumentiert. (LF4, LF8, LF9) 

---
