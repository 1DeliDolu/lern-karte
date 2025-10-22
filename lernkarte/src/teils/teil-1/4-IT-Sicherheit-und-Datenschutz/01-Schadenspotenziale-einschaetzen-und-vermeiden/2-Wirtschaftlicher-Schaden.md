# 💶 Wirtschaftlicher Schaden <span style="background:#e0f0ff;">LF4, LF9</span>

**Wirtschaftlicher Schaden** umfasst die **direkten, materiellen und finanziellen Auswirkungen** eines IT-Sicherheitsvorfalls – z. B. **Gewinn-/Umsatzrückgänge**, **Verlust der Kreditwürdigkeit oder von Marktanteilen**, **Bußgelder**, **Rechts- und Presskosten**, **kostenintensive Sicherheitsdienstleistungen**, **Verlust von Kunden**, **Entlassungen**, **Geschäftsunterbrechungen bis hin zur Insolvenz**. *(LF4)* 

Zur systematischen Bewertung nutzt das BSI **Schadenskategorien** (*niedrig, normal, hoch, sehr hoch*) und abgeleitet **Schutzbedarfskategorien** (*normal, hoch, sehr hoch*). Die Einstufung hängt u. a. von **tolerierbaren Ausfallzeiten**, der **Qualität der Notfallpläne**, **Kumulations-/Verteilungseffekten** und **Maximalfällen** ab. *(LF4)* 

---

## ⚖️ Rechtliche Kostentreiber (DSGVO, IT-Sicherheit)

Die **DSGVO** verlangt **technische und organisatorische Maßnahmen** (u. a. **Pseudonymisierung, Verschlüsselung**) und sieht **Bußgelder bis 20 Mio. € oder 4 % des Jahresumsatzes** vor – ein wesentlicher wirtschaftlicher Risikofaktor bei Vorfällen. *(LF4)* 

---

## 🧭 BSI-Vorgehen & Prozesssicherheit

Ein **geregelter Sicherheitsprozess** (Initiierung → Leitlinie → Organisation → Sicherheitskonzept → Umsetzung → **Aufrechterhaltung/Verbesserung**) sichert Ressourcen und reduziert wirtschaftliche Schäden durch planvolles **ISMS**-Handeln. *(LF4)* 

**TOM im Netzbetrieb** (Auszug): **IDS/IPS**, **USV**, **Redundanz/RAID**, **Back-ups**, **Zutritts-/Zugang-/Zugriffskontrollen**, **Firewall/Webfilter**, **Protokollierung/Logs**, **Rollenkonzepte** – jeweils mit Blick auf **Wiederherstellbarkeit**, **Zuverlässigkeit**, **Datenintegrität** und **Verfügbarkeit**. *(LF9)* 

---

## 🛡️ Verfügbarkeit & Notfallvorsorge (Kostenvermeidung)

* **3-2-1-Backups:** *3 Kopien*, *2 Medien*, *1 Kopie extern* – Kernmaßnahme gegen teure **Ausfallzeiten** und **Datenverlust**. *(LF9)* 
* **Redundanz** (funktionell, räumlich, organisatorisch/diversitär): Parallel ausgelegte Ressourcen und räumliche Trennung mindern **Betriebsunterbrechungs-Kosten** signifikant. *(LF9)* 

---

## 📊 Wirtschaftliche Steuerung im Projekt/IT-Betrieb

* **Anschaffungs- & Betriebskosten** sauber abgrenzen (**§ 255 HGB**: alle Aufwendungen bis zur Betriebsbereitschaft – inkl. Nebenkosten, abzüglich Nachlässen). *(LF9)* 
* **Projektcontrolling:** **Soll-Ist-Vergleiche** (Zeit/Kosten), **Überschussrechnung: Gewinn = Erlöse − Kosten**, **Wirtschaftlichkeit = Erlöse/Kosten > 1**. *(LF9)* 
* **Kalkulation & Selbstkosten** (Make): **Selbstkosten** = Bruttolohnkosten + Arbeitgeberanteil + Gemeinkostenaufschlag; **Netto-Stundensatz** = Selbstkostensatz + Gewinnaufschlag. *(LF9)* 
* **Make-or-Buy-Entscheidung:** Kosten, Zeit, **Risikobetrachtung (Betriebsausfall, Lieferantenrisiken)**, Kompetenzen, Liquidität. *(LF9)* 

---

## 🧪 Beispiele (aus den LF-Quellen)

* **Ransomware-Vorfall → Umsatzrückgang + Rechts-/Presskosten + externe Forensik → wirtschaftlicher Schaden.** Gegenmaßnahmen: **3-2-1-Backups**, **funktionelle/räumliche Redundanz**, **TOM** (Wiederherstellbarkeit), **SIEM/IDS**. *(LF4, LF9)* 
* **DSGVO-Verstoß → Bußgeld (bis 20 Mio. € oder 4 % Umsatz)** + Vertragsanpassungen → **finanzielle Belastung**. *(LF4)* 
* **Langandauernde Downtime** (fehlende Redundanz) → **Geschäftsunterbrechung**, Kundenabwanderung, ggf. **Insolvenz**. *(LF4, LF9)* 

---

## 🧾 Begriffstabelle

| Begriff                      | Definition                                                                                                                                                                            | Quelle |
| ---------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ------ |
| **Wirtschaftlicher Schaden** | **Direkte, materielle und finanzielle Auswirkungen** eines IT-Vorfalls (Umsatz-/Gewinnrückgang, Bußgelder, Rechts-/Presskosten, Kundenverlust, Geschäftsunterbrechung bis Insolvenz). | (LF4)  |
| **Schadenskategorien**       | Bewertung des **Ausmaßes**: *niedrig, normal, hoch, sehr hoch*; Grundlage für wirtschaftliche Risikosteuerung.                                                                        | (LF4)  |
| **Schutzbedarfskategorien**  | Abgeleitet: *normal, hoch, sehr hoch* – Maßnahmenpriorisierung.                                                                                                                       | (LF4)  |
| **3-2-1-Backups**            | **3 Kopien**, **2 Medien**, **1 extern** – minimiert Datenverlust-/Downtime-Kosten.                                                                                                   | (LF9)  |
| **Redundanz**                | Funktionelle, räumliche, organisatorische **Mehrfachauslegung** zur Ausfallminimierung.                                                                                               | (LF9)  |
| **DSGVO-Bußgelder**          | Bis **20 Mio. €** oder **4 %** des Jahresumsatzes.                                                                                                                                    | (LF4)  |
| **Projekt-Controlling**      | **Soll-Ist**, **Gewinn = Erlöse − Kosten**, **Wirtschaftlichkeit = Erlöse/Kosten**.                                                                                                   | (LF9)  |

---

## 🧩 Rechenbeispiel (Formeln aus LF9)

* **Gewinn = Erlöse − Kosten** *(LF9)* 
* **Wirtschaftlichkeit = Erlöse/Kosten** *(LF9)* 

**Beispiel:** Erlöse 250 000 €; Kosten 230 000 € → **Gewinn = 20 000 €**; **Wirtschaftlichkeit = 250 000/230 000 ≈ 1,087 > 1** → wirtschaftlich. *(LF9)* 

---

## ✅ Maßnahmenbündel zur Reduktion wirtschaftlicher Schäden (kompakt)

1. **ISMS/BSI-Prozess** etablieren und leben (Leitlinie → Konzept → Umsetzung → Review). *(LF4)* 
2. **TOM** vollständig umsetzen (IDS/IPS, USV, RAID, Back-ups, Zugangs-/Zugriffskontrollen, Logs). *(LF9)* 
3. **3-2-1-Backups** + **Redundanzen** planen, testen, dokumentieren. *(LF9)* 
4. **DSGVO-Compliance** sicherstellen (Art. 32-Maßnahmen), Bußgeldrisiko minimieren. *(LF4)* 
5. **Kosten-/Soll-Ist-Controlling** laufend durchführen (Wirtschaftlichkeits-Nachweise). *(LF9)* 

---

