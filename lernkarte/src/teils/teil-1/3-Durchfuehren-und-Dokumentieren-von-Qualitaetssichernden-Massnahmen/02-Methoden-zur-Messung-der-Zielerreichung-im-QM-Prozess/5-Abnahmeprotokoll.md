# 🧾 Abnahmeprotokoll <span style="background:#e0f0ff;">LF2, LF8</span>

Ein **Abnahmeprotokoll** dokumentiert formal die **Abnahme** eines (Software-)Werks: Es hält Ablauf, Prüfergebnisse und Entscheidungen fest und wird von den am Abnahmeprozess Beteiligten (in der Regel **Auftraggeber** und **Auftragnehmer** bzw. autorisierte Personen) unterschrieben. Damit dient es als Grundlage für die vollständige Annahme oder für **Nachbesserungsmaßnahmen**. (LF8) 
Nach **DIN 69901-5:2009-1** ist Abnahme die Bestätigung des Auftraggebers, dass die Anforderungen durch den Auftragnehmer erfüllt wurden. Mit der Abnahme sind u. a. folgende **Rechtsfolgen** verbunden: Fälligkeit des Zahlungsanspruchs, Beginn der Verjährungsfristen für Mängelrechte, mögliche Mängelgewährleistungspflichten, Wechsel der Beweislast. (LF8) 

## ⚖️ Rechtlicher Rahmen & Abgrenzung (Werk- vs. Dienstvertrag) <span style="background:#e0f0ff;">LF2</span>

Bei **Werkverträgen** ist die Abnahme in **§ 640 BGB** geregelt (Erklärung des Bestellers, dass er das Werk akzeptiert). Rechtsfolgen der Abnahme: Vergütung wird fällig (§ 641 BGB), Gefahrübergang (§ 644 BGB), bekannte und nicht vorbehaltene Mängelrechte entfallen (§§ 640, 341 BGB), **Verjährungsbeginn** für Mängelansprüche (§ 634a BGB); stillschweigende oder fiktive Abnahme sind möglich. (LF2) 
Bei **Dienstverträgen** (§ 611 BGB) wird kein Erfolg geschuldet; eine **Abnahmeerklärung** ist rechtlich nicht vorgesehen – Leistungen sind während der Erbringung zu kontrollieren. (LF2) 

## 🧭 Akzeptanzaspekte, die im Abnahmeprotokoll gespiegelt werden <span style="background:#e0f0ff;">LF8</span>

Die Abnahme stützt sich auf Vereinbarungen in **Vertrag** oder **Pflichtenheft** und umfasst typischerweise drei Perspektiven, die sich im Protokoll wiederfinden: **vertragliche Akzeptanz** (Vollständigkeit/Qualität der Liefergegenstände, gesetzliche Anforderungen), **Benutzerakzeptanz** (Erfüllung funktionaler und nichtfunktionaler Anforderungen, z. B. Ergebnisse eines Testbetriebs/Performance-Tests, Dokumentationsqualität), **Betreiberakzeptanz** (technische Anforderungen, Daten-/Revisionssicherheit, IT-Sicherheitsanforderungen, Admin-Handbücher). (LF8) 

> **Hinweis zu Standards:** PMBOK benennt kein eigenes Abnahmedokument; PRINCE2 erwähnt eine **acceptance record**, beschreibt sie jedoch nicht näher. Die konkrete Ausgestaltung des **Abnahmeprotokolls** liegt daher i. d. R. beim Unternehmen; **mindestens** sollte eine **Checkliste mit Abnahmekriterien** enthalten sein. (LF8) 

## 🗂️ Pflichtinhalte eines Abnahmeprotokolls (empfohlen) <span style="background:#e0f0ff;">LF8</span>

* **Ort, Datum, Uhrzeit** der Abnahme; **Teilnehmer** mit Rolle/Funktion. (LF8) 
* **Bezeichnung der Software** (Version) und **Systemumgebung**. (LF8) 
* **Geprüfte Eigenschaften** und **Bezug zu Abnahmekriterien**; **Art der Prüfungen**; **Ergebnisse**. (LF8) 
* **Nicht geprüfte Abnahmekriterien** (Transparenz). (LF8) 
* **Erfüllungsbeurteilung des Vertrags** (erfüllt/teilweise/nicht). (LF8) 
* **Offene Punkte**:
  – **Verzicht** des Auftraggebers auf bestimmte Punkte,
  – **noch zu erfüllen** (mit Termin & Verantwortlichkeit). (LF8) 
* **Weitere Vereinbarungen/Prüfungen** sowie Aussage zu **Vollständigkeit, Funktionseignung, Schadensfreiheit**. (LF8) 
* **Unterschriften** Auftraggeber/-in und Auftragnehmer/-in (Freigabe/Genehmigung). (LF8) 

## 🔐 Abnahme & Informationssicherheit <span style="background:#e0f0ff;">LF8</span>

Teil der Akzeptanz ist die **Prüfung sicherheitsrelevanter Anforderungen** (z. B. Datenschutz-Voreinstellungen, Verschlüsselung, Protokollierung, Rechte-/Rollenkonzept). Dokumente: **Definition of Done**, **Abnahmeprotokoll**; verantwortlich: **Product Owner**. (LF8) 

---

## 📝 Vorlage: Abnahmeprotokoll (Struktur zum Ausfüllen) <span style="background:#e0f0ff;">LF8</span>

```markdown
# Abnahmeprotokoll

**Projekt / Software:** __________________________  **Version:** __________  
**Vertrags-/Bestellnr.:** ________________________  **Systemumgebung:** __________________

**Abnahmetermin:** ____.____.________  **Uhrzeit:** ______  **Ort:** __________________

## 1) Teilnehmer
| Name | Unternehmen | Funktion/Rolle |
|------|-------------|----------------|
|      |             |                |

## 2) Geprüfte Anforderungen und Ergebnisse
### Funktionale Anforderungen
| Abnahmekriterium | Art der Prüfung | Ergebnis (erfüllt/teilweise/nicht) | Bemerkung |
|------------------|-----------------|-------------------------------------|-----------|

### Nichtfunktionale Anforderungen (z. B. Performance, Doku)
| Abnahmekriterium | Art der Prüfung | Ergebnis | Bemerkung |
|------------------|-----------------|---------|-----------|

### Technische/Betreiber-Anforderungen
| Abnahmekriterium | Art der Prüfung | Ergebnis | Bemerkung |
|------------------|-----------------|---------|-----------|

**Nicht geprüfte Abnahmekriterien:** __________________________________________

## 3) Vertragsbeurteilung
- [ ] Vertrag erfüllt
- [ ] Vertrag teilweise erfüllt
- [ ] Vertrag nicht erfüllt  
**Begründung:** ______________________________________________________________

## 4) Offene Punkte
**4.1 Punkte, auf deren Erfüllung verzichtet wird (AG):** ______________________  
**4.2 Punkte, die noch zu erfüllen sind:**  
| Nr. | Beschreibung | Verantwortlich | Termin |
|-----|--------------|----------------|--------|

## 5) Weitere Vereinbarungen/Prüfungen
______________________________________________________________________________

## 6) Schlussbeurteilung
**Vollständigkeit/Funktionseignung/Schadensfreiheit:** _________________________

## 7) Genehmigung / Freigabe (Unterschriften)
**Auftraggeber/in:** ____________________   **Datum:** __.__.__  
**Auftragnehmer/in:** __________________   **Datum:** __.__.__
```

Die Struktur spiegelt die in LF 8 empfohlenen Inhalte und Unterschriftenfelder wider. (LF8)  

---

## ✅ Beispiel (ausgearbeitet nach LF 8) <span style="background:#e0f0ff;">LF8</span>

**Software:** *Statistika* **Version 1.0** – **Vertragsnr.:** 71-U2020 – **Datum:** 21.05.2021
**Funktionale Anforderungen (Auszug):** „Vier grafische Darstellungsmöglichkeiten der statistischen Auswertung“ → **ist vollständig erfüllt**.
**Nichtfunktionale Anforderungen (Auszug):** „Umfangreiche, leicht verständliche Bedienungsanleitung“ → **ist vollständig vorhanden**.
**Technische Anforderungen (Auszug):** „Lauffähig unter Windows 10 und Linux“ → **läuft unter beiden Systemen**.
**Offene Punkte (zu erfüllen):** *keine* – **Verzichtete Punkte:** *keine* – **Schlussbeurteilung:** Anforderungen vollständig erfüllt. **Genehmigung/Freigabe:** Unterschriften AG/AN. (LF8) 

---

## 🔄 Prozessschritte zur Erstellung & Nutzung des Abnahmeprotokolls <span style="background:#e0f0ff;">LF8, LF2</span>

1. **Vorbereiten**: Abnahmekriterien aus Vertrag/Pflichtenheft, Testnachweise/Protokolle zusammenstellen. (LF8) 
2. **Durchführen**: Prüfungen (funktional, nichtfunktional, technisch) ausführen, Ergebnisse dokumentieren, nicht geprüfte Kriterien kenntlich machen. (LF8) 
3. **Bewerten**: Vertragserfüllung beurteilen; offene Punkte (verzichtet/noch zu erfüllen) inkl. Termin & Verantwortlichem festhalten. (LF8) 
4. **Freigeben/Unterschreiben**: Abnahmeentscheidung und **Unterschriften** von AG/AN einholen. (LF8) 
5. **Rechtsfolgen beachten**: Zahlung fällig, Verjährungsbeginn, Umgang mit bekannten/nicht vorbehaltenen Mängeln; Besonderheiten bei Dienstverträgen beachten. (LF2) 

---

## 📚 Begriffstabelle

| **Begriff**                                   | **Definition**                                                                                                                                 | **Quelle** |
| --------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------- | ---------- |
| **Abnahme (DIN 69901-5)**                     | Bestätigung des Auftraggebers, dass die Anforderungen durch den Auftragnehmer erfüllt wurden.                                                  | LF8        |
| **Abnahmeprotokoll**                          | Schriftliche Dokumentation von Ablauf, Kriterien, Ergebnissen, offenen Punkten und Entscheidung inkl. Unterschriften.                          | LF8        |
| **Vertragliche/Benutzer-/Betreiberakzeptanz** | Perspektiven zur Beurteilung: Lieferumfang/Qualität/Compliance, funktionale & nichtfunktionale Eignung, technische & Sicherheitsanforderungen. | LF8        |
| **Rechtsfolgen der Abnahme**                  | Zahlung fällig, Verjährungsbeginn, Gefahrübergang; Umgang mit bekannten/nicht vorbehaltenen Mängeln.                                           | LF2        |
| **Dienstvertrag vs. Werkvertrag**             | Dienst: kein Abnahmeerfordernis; Werk: Abnahme nach § 640 BGB mit o. g. Folgen.                                                                | LF2        |
| **Sicherheitsrelevante Abnahme**              | Prüfung der Informationssicherheit (DoD & Abnahmeprotokoll), Verantwortung Product Owner.                                                      | LF8        |

---

### Kurzfazit

Das **Abnahmeprotokoll** ist das zentrale, rechtsrelevante Dokument zur **formalen Abnahme**: Es strukturiert die Ergebnisse gegen definierte **Abnahmekriterien**, hält **offene Punkte** fest und sichert die Entscheidung durch **Unterschriften** – mit klaren **Rechtsfolgen** nach BGB. (LF2, LF8)  



