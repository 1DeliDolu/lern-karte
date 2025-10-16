# 🛡️ 4 Schutzbedarfsanalyse im eigenen Arbeitsbereich durchführen [Seite: 390]

Dieses Kapitel vermittelt umfassend die Grundlagen der **Informationssicherheit**, des **IT-Grundschutzes** und der **Schutzbedarfsfeststellung** nach Vorgaben des **Bundesamts für Sicherheit in der Informationstechnik (BSI)**. Ziel ist es, den **individuellen Schutzbedarf im eigenen Arbeitsbereich** zu erkennen, **Gefährdungen zu analysieren** und **geeignete Schutzmaßnahmen** abzuleiten.

---

## 🧩 Einführung und Zielsetzung

Informationssicherheit schützt **alle Informationswerte eines Unternehmens**. Grundlage bildet das **IT-Grundschutzkonzept** des BSI mit seinen **Gesetzen, Standards, Schutzzielen und Schadensszenarien**.
Im Fokus stehen:

* **Gesetzliche Anforderungen** (z. B. DSGVO, BDSG, IT-Sicherheitsgesetz)
* **Technisch-organisatorische Maßnahmen (TOM)**
* **Schutzbedarfsfeststellungen** und **Sicherheitskonzepte**
* **Sensibilisierung** der Mitarbeiter für aktuelle Bedrohungen wie **Identitätsdiebstahl** oder **Social Engineering**

---

## 📚 4.1 Grundlagen zur Informationssicherheit erarbeiten

### (1) Verantwortung und Zuständigkeiten

* **IT-Sicherheitsbeauftragter (Patrick Franke)** leitet die Sicherheitsstrategie.
* **Datenschutzbeauftragte (Maja Koch)** achtet auf gesetzliche Vorgaben.
* **Qualitätsbeauftragter (Tobias Müller)** sichert Prozesse und Standards.
* **Ausbildungsleiter (Holger Lübberstedt)** sorgt für Schulungen und Prüfungen.

**Ziele:**

* Einheitliche Sicherheitskultur
* Sicherheitszonen-Zugang nur nach Schulungen
* Regelmäßige Audits und Anpassungen der Sicherheitsmaßnahmen

### (2) Informationsquellen zur Informationssicherheit

| Quelle                                     | Aufgabe / Nutzen                                                                                 |
| ------------------------------------------ | ------------------------------------------------------------------------------------------------ |
| **BSI**                                    | Nationale Behörde für IT-Sicherheit; bietet IT-Grundschutz-Kompendium, Standards 200-1 bis 200-4 |
| **DsiN (Deutschland sicher im Netz e.V.)** | Sensibilisierung von Verbrauchern und Betrieben                                                  |
| **BfDI**                                   | Aufsicht über Datenschutz und Informationsfreiheit                                               |
| **TeleTrusT e.V.**                         | Kompetenznetzwerk für IT-Sicherheitsunternehmen                                                  |
| **AV-Test GmbH**                           | Prüfung und Vergleich von Antivirensoftware                                                      |
| **Antispam e.V.**                          | Aufklärung und Schutz vor Spam und Betrugsmails                                                  |

---

## ⚖️ 4.1.2 Gesetze und Standards zur Informationssicherheit unterscheiden

### Wichtige Gesetze

| Gesetz / Standard                  | Inhalt / Bedeutung                                                            |
| ---------------------------------- | ----------------------------------------------------------------------------- |
| **IT-Sicherheitsgesetz (IT-SiG)**  | Schutz kritischer Infrastrukturen, Meldepflichten bei IT-Störungen            |
| **BSI-Gesetz (BSIG)**              | Befugnisse und Aufgaben des BSI                                               |
| **EU-DSGVO & BDSG**                | Schutz personenbezogener Daten, Bußgelder bis 20 Mio. € oder 4 % des Umsatzes |
| **Telekommunikationsgesetz (TKG)** | Sicherheitsmaßnahmen nach Stand der Technik                                   |
| **Telemediengesetz (TMG)**         | Sicherheitspflichten für Online-Dienste                                       |
| **Urheber- und Markenrecht**       | Schutz geistigen Eigentums, Lizenzpflichten                                   |
| **ISO/IEC 27001**                  | Internationaler Standard für Informationssicherheits-Managementsysteme (ISMS) |

### Zentrale Prinzipien nach DSGVO

* **Rechtmäßigkeit**, **Zweckbindung**, **Datenminimierung**
* **Integrität**, **Vertraulichkeit**, **Speicherbegrenzung**
* **Recht auf Berichtigung**, **Löschung**, **Datenübertragbarkeit**

---

## 🧱 4.1.3 IT-Grundschutz, Schutzziele, Gefährdungen, Schadensszenarien

### a) IT-Grundschutz-Systematik (BSI)

* Besteht aus **10 Schichten (Bausteine)**: ORP, CON, OPS, APP, SYS, IND, NET, INF, DER, ISMS
* **Ziel:** Aufbau eines ISMS nach dem **PDCA-Zyklus (Plan–Do–Check–Act)**
* **Unterstützung:** BSI-Standards 200-1 bis 200-4 (Management, Vorgehensweise, Risikoanalyse, Notfallvorsorge)

### b) Schutzziele der Informationssicherheit

| Schutzziel          | Bedeutung                          | Grundwert  |
| ------------------- | ---------------------------------- | ---------- |
| **Verfügbarkeit**   | Systeme und Daten sind nutzbar     | A          |
| **Integrität**      | Daten sind korrekt und vollständig | I          |
| **Vertraulichkeit** | Kein unbefugter Zugriff auf Daten  | C          |
| **Authentizität**   | Echtheit und Überprüfbarkeit       | Teil von I |

### c) Gefährdungen (47 elementare Gefährdungen)

Beispiele:

* **G 0.1 – Feuer**, **G 0.8 – Stromausfall**, **G 0.14 – Ausspähen von Informationen**
* **G 0.36 – Identitätsdiebstahl**, **G 0.39 – Schadprogramme**, **G 0.42 – Social Engineering**

### d) Schadenskategorien und Schutzbedarf

| Kategorie     | Beschreibung              | Beispiel                      |
| ------------- | ------------------------- | ----------------------------- |
| **Niedrig**   | geringe Wirkung           | kurze Ausfallzeit             |
| **Normal**    | spürbare Beeinträchtigung | Datenverlust, Nacharbeit      |
| **Hoch**      | erhebliche Folgen         | Produktionsausfall            |
| **Sehr hoch** | existenzbedrohend         | Reputationsverlust, Insolvenz |

---

## 💣 4.1.4 Aktuelle Bedrohungen für IT-Sicherheit

### a) Cyberangriffe und Malware

| Bedrohung                               | Beschreibung                                         |
| --------------------------------------- | ---------------------------------------------------- |
| **Malware / Viren / Würmer / Trojaner** | Schadsoftware zur Spionage, Erpressung oder Sabotage |
| **Ransomware**                          | Verschlüsselt Daten, fordert Lösegeld                |
| **Spam / Phishing / Hoaxes**            | Täuschungsmails mit Schadlinks                       |
| **Botnetze & DDoS**                     | Netzwerke gekaperter Rechner für Angriffe            |
| **APT (Advanced Persistent Threats)**   | Hochkomplexe, gezielte Langzeitangriffe              |

### b) Prävention

* Schulung der Mitarbeiter
* Sichere Passwörter & Multi-Faktor-Authentifizierung
* Firewall, Virenschutz, Backups
* **Blacklisting / Whitelisting** unerwünschter bzw. vertrauenswürdiger Quellen

---

## 🧠 4.1.5 Der Faktor Mensch: Identitätsdiebstahl & Social Engineering

### Typische Angriffsmethoden

| Angriff                       | Beschreibung                              |
| ----------------------------- | ----------------------------------------- |
| **CEO-Fraud**                 | Täter geben sich als Geschäftsführung aus |
| **Phishing / Spear-Phishing** | E-Mail-Betrug mit gefälschten Links       |
| **Man-in-the-Middle**         | Abfangen von Datenkommunikation           |
| **Keylogging**                | Aufzeichnung von Tastatureingaben         |
| **Combosquatting**            | Täuschende Domainnamen                    |
| **Doxing**                    | Veröffentlichung privater Daten           |

### Schutzmaßnahmen

* Schulungen und Sensibilisierung
* **Starke Passwörter**, **Zwei-/Multi-Faktor-Authentifizierung**
* **Verschlüsselung** (PGP, S/MIME, TLS)
* **Elektronische Signaturen & Siegel (eIDAS)**
* **E-Mail-Sicherheitsrichtlinien**, sichere Apps und Geräte

---

## 🧰 4.2 Technisch-organisatorische Maßnahmen (TOM) und Sicherheitskonzept

### Technisch-organisatorische Maßnahmen (§ 64 BDSG)

| Maßnahme                                    | Ziel                                                         |
| ------------------------------------------- | ------------------------------------------------------------ |
| **Zutritts- & Zugangskontrolle**            | Nur berechtigte Personen haben physischen / logischen Zugang |
| **Zugriffskontrolle**                       | Nur autorisierte Nutzung personenbezogener Daten             |
| **Übertragungs- & Transportkontrolle**      | Schutz bei Datenübermittlung                                 |
| **Wiederherstellbarkeit & Zuverlässigkeit** | Notfallkonzepte und Backups                                  |
| **Trennungskontrolle**                      | Getrennte Verarbeitung unterschiedlicher Datenzwecke         |
| **Auditierung**                             | Regelmäßige Prüfung der Wirksamkeit                          |

---

## 🧮 4.3 Schutzbedarfsfeststellungen anhand eines Beispielunternehmens (BSI)

### Beispiel: **RECPLAST GmbH**

1. **Phasen des Sicherheitsprozesses**: Initiierung → Leitlinie → Konzept → Umsetzung → Verbesserung
2. **Sicherheitsleitlinie**: Verantwortlichkeiten, Ziele, Gesetze, Schulungen
3. **Strukturanalyse**: Erfassung von IT-Systemen, Prozessen, Räumen und Kommunikationswegen
4. **Schutzbedarfsfeststellung**: Bewertung der Schutzziele je Zielobjekt (Software, Systeme, Räume)

   * Anwendung **Maximumprinzip** (höchster Bedarf gilt)
   * Bewertung nach Kategorien *normal, hoch, sehr hoch*

---

## 💻 4.4 Schutzbedarfsfeststellungen bei JIKU IT-Solutions

### 4.4.1 Software

* **Gefährdungen**: unlizenzierte Software, Makroviren, fehlerhafte Konfiguration
* **Maßnahmen**:

  * Nur geprüfte Originalsoftware
  * Lizenzverwaltung, sichere Deinstallation
  * Verschlüsselung, digitale Signaturen
  * Updates und Integritätsprüfungen

### 4.4.2 Clients

* **Gefährdungen**: Schadprogramme, Datenverlust, Fehlbedienung
* **Schutzmaßnahmen**:

  * **Virenschutz, Backups, Bildschirmsperre**
  * **Benutzerauthentisierung, Rollentrennung, sichere Bootvorgänge**
  * **TLS-Verschlüsselung, Deaktivierung unnötiger Komponenten**

### 4.4.3 Mobile Datenträger

* **Gefährdungen**: Diebstahl, Schadsoftware, Datenverlust
* **Maßnahmen**:

  * Nutzung **zertifizierter und verschlüsselter Datenträger**
  * **Sicheres Löschen**, eindeutige Kennzeichnung, Verlustmeldung
  * **Vertraulichkeitsvereinbarungen**, sichere Versandwege, Kopien anlegen

---

## 🧾 Zusammenfassung der Kernaussagen

* **Informationssicherheit ist Führungsaufgabe.**
* **Schutzbedarfsanalyse** dient der Identifizierung sensibler Werte und Risiken.
* **IT-Grundschutz** liefert ein standardisiertes Rahmenwerk.
* **Technisch-organisatorische Maßnahmen** sichern die Umsetzung im Alltag.
* **Schulungen, Awareness und Prävention** sind entscheidend für nachhaltige Sicherheit.


---

## [Nächstes Thema: Einführung in Verantwortung, Zuständigkeiten und Sicherheitsbereiche beschreiben](./4.1_Grundlagen_zur_Informationssicherheit_erarbeiten/4.1_Grundlagen_zur_Informationssicherheit_erarbeiten.md)