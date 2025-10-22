# 🛡️ Schadenspotenziale von IT-Sicherheitsvorfällen einschätzen & Schäden verhindern (LF4, LF9, LF12a) 

IT-Sicherheitsvorfälle können Unternehmen materiell (z. B. direkte finanzielle Verluste) und immateriell (z. B. **Imageschaden**) treffen. Der BSI-Ansatz unterscheidet **Schadensszenarien** sowie **Schadenskategorien** (niedrig/normal/hoch/sehr hoch) und verknüpft diese mit der **Schutzbedarfsfeststellung** (normal/hoch/sehr hoch). Einflussgrößen sind u. a. tolerierbare Ausfallzeiten, Qualität von **Notfallplänen** und mögliche Kumulationseffekte. (LF4 )
Grundlage der Vermeidung sind die **Schutzziele/Grundwerte** **Verfügbarkeit**, **Integrität** und **Vertraulichkeit** (CIA), wie sie BSI-IT-Grundschutz und DSGVO Art. 32 fordern. (LF4 )

---

## 🎯 Schadenskategorien & Beispiele (LF4)

**Direkte, materielle Schäden:** Gewinn-/Umsatzrückgang, Verlust der Kreditwürdigkeit/Marktanteile, **Bußgelder**, Rechts- und Presskosten, Kundenverlust, Entlassungen, **Geschäftsstillstand** bis **Insolvenz**. (LF4 )

**Indirekte, immaterielle Schäden:** fehlende Managementinformationen, **Verstöße gegen Gesetze/Verträge**, **negative Innen-/Außenwirkung (**Imageschaden**)**, Beeinträchtigung von Rechten Betroffener, sinkende Mitarbeitermotivation. (LF4 )

Aktuelle Lagebilder unterstreichen die Dimension: jährlich Schäden in Milliardenhöhe; E-Mail-Anhänge/Links sind häufigster Angriffsvektor, **Ransomware** ist weit verbreitet. (LF4 )

---

## 🧩 Typische Schadenspotenziale präzise

### **Imageschaden**

**Negative Innen-/Außenwirkung** (Rufschaden) bei Vorfällen oder Compliance-Verstößen; Unternehmen müssen deshalb **Risikomanagement** und rechtliche Anforderungen (z. B. DSGVO) konsequent umsetzen, um Reputationsschäden zu vermeiden. (LF4 turn2file13)

### **Wirtschaftlicher Schaden**

Direkt (z. B. Umsatz-/Absatzeinbußen, **Bußgelder**) und indirekt (z. B. Marktanteilsverluste). Im Extremfall **Betriebsstillstand** bis **Insolvenz**. (LF4 )

### **Datenverlust**

Explizit als Gefährdung geführt (**G 0.45 Datenverlust**) und oft Folge von **Schadsoftware**, Fehlkonfiguration oder Fehlernutzung; bedroht **Verfügbarkeit/Vertraulichkeit/Integrität**. (LF9 )

---

## 🔎 Vorgehen zur Einschätzung (Prozess) — „vom Objekt zum Risiko“ (LF4, LF12a)

1. **Strukturanalyse & Informationsverbund erfassen**: Zielobjekte (Anwendungen, Systeme, Räume) inkl. Schnittstellen dokumentieren. (LF4 )
2. **Schutzbedarfsfeststellung** pro Zielobjekt gegen CIA-Werte (normal/hoch/sehr hoch) vornehmen. (LF4 )
3. **Modellierung** gegen BSI-Bausteine; Gefährdungslagen je Baustein nutzen. (LF4 )
4. **Risikoanalyse**: Eintrittswahrscheinlichkeit × Schadensausmaß → **Risikokennziffer**; tabellarisch mit Spalten *Risiko – Wahrscheinlichkeit – Schadenspotenzial – Kennziffer*. (LF12a )
5. **Notfall- & Wiederanlaufplanung** (Parameter der Schadenskategorie: tolerierbare Ausfallzeit, Reaktionsgeschwindigkeit). (LF4 )

---

## 🛠️ Schäden verhindern: technische & organisatorische Maßnahmen (LF4, LF9)

**1) Grundlegend (DSGVO/BSI-Konformität):**

* **Art. 32 DSGVO**: geeignete TOM inkl. **Verschlüsselung**, **Belastbarkeit**, **Wiederherstellbarkeit**, **Wirksamkeitsprüfung**. (LF4 )
* **ISMS/Sicherheitskonzept**, Rollen & Zuständigkeiten, **Sicherheitsleitlinien** und **Sensibilisierung/Schulung**. (LF4 )

**2) Schutz vor Malware & typischen Angriffsvektoren:**

* Fokus auf **E-Mail-Anhänge/Links**, **Endpoint-Schutz** und Nutzer-Schulung; **Ransomware** adressiert primär **Verfügbarkeit**. (LF4 turn2file6)

**3) Datenverlust & Ausfall minimieren:**

* **3-2-1-Backup-Regel**: 3 Kopien, 2 Medien, 1 Offsite-Kopie. (LF9 )
* **Redundanz** (funktional, räumlich, organisatorisch-diversitär) sowie **USV/RAID**/**Snapshots/Replication** je nach Plattform (z. B. NAS/TrueNAS-/OpenZFS-Funktionen). (LF9 turn1file4)
* **Netz-/System-Design** nach BSI-Gefährdungsbeurteilung (z. B. G 0.9 Ausfall Kommunikationsnetze, G 0.40 DoS) und **DER-Schicht** (Detection/Reaction/Response). (LF9, LF4 turn1file8)

**4) Recht & Compliance als Schadenbremse:**

* **DSGVO-Prozesse** (z. B. Betroffenenrechte, DSB-Bestellung) reduzieren Bußgeld-/Image-Risiken. (LF4 )

---

## 📌 Praxisbeispiele aus den Unterlagen

* **Schutzbedarfsfeststellung „Software“ (Auszug):** Für Standard-Office-Software *Vertraulichkeit/Integrität/Verfügbarkeit* i. d. R. „normal“ begründet; Risiken u. a. **Datenverlust durch fehlerhafte Nutzung** → Maßnahmen wie Schulung, sichere Konfiguration. (LF4 )
* **Gefährdungskatalog Netz/Design:** u. a. **Schadprogramme**, **Unbefugte Administration**, **Identitätsdiebstahl**, **Datenverlust**; daraus technische/organisatorische Anforderungen ableiten. (LF9 )

---

## 📚 Begriffstabelle

| Begriff                      | Definition (knapp)                                                                                | Quelle                   |
| ---------------------------- | ------------------------------------------------------------------------------------------------- | ------------------------ |
| **Imageschaden**             | Negative Innen-/Außenwirkung (Rufschaden) als immaterielles Schadensszenario.                     | LF4 (Schadensszenarien)  |
| **Wirtschaftlicher Schaden** | Direkte materielle Folgen wie Umsatzeinbußen, Bußgelder, Kosten bis **Insolvenz**.                | LF4 (Schadensszenarien)  |
| **Datenverlust**             | BSI-Gefährdung (G 0.45); bedroht CIA-Schutzziele.                                                 | LF9 (Gefährdungen)       |
| **Schutzziele (CIA)**        | **Verfügbarkeit**, **Integrität**, **Vertraulichkeit** als Grundwerte der Informationssicherheit. | LF4 (BSI/DSGVO)          |
| **Schadenskategorien**       | niedrig/normal/hoch/sehr hoch; Bezug zur Schutzbedarfsstufe und Notfallplanung.                   | LF4                      |
| **3-2-1-Backup**             | 3 Kopien, 2 Medien, 1 Offsite.                                                                    | LF9                      |
| **Redundanz**                | Funktional/räumlich/organisatorisch zur Ausfallvorsorge.                                          | LF9                      |

---

## 🧭 Kompakter Arbeitsleitfaden (didaktisch)

1. **Strukturanalyse** & **Schutzbedarfsfeststellung** je Objekt (CIA). (LF4 )
2. **Gefährdungen** aus BSI-Bausteinen ziehen; **Risikoanalyse** mit Kennziffer. (LF4, LF12a turn1file3)
3. **Maßnahmenplan**: TOM (Art. 32), Schulung, Härtung, Backup 3-2-1, Redundanz, Monitoring/DER. (LF4, LF9 turn1file14turn1file8)
4. **Notfallmanagement**: RTO/RPO festlegen, Wiederanlauf testen; Kategorien regelmäßig **reviewen**. (LF4 )

---

> **Hinweis zur Quellenbasis:** Alle Inhalte, Beispiele und Begriffe oben stammen ausschließlich aus den bereitgestellten Lernfeld-PDFs (insb. LF4, teils LF9/LF12a) und sind jeweils direkt belegt. (LF4, LF9, LF12a turn1file16turn1file3)


---