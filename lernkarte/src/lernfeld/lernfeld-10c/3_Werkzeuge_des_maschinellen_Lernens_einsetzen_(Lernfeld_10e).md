# 3 Werkzeuge des maschinellen Lernens einsetzen [Seite: 216]

Die Kapitelübersicht behandelt Grundbegriffe von **KI**, **Maschinellem Lernen (ML)** und **Deep Learning (DL)**, typische Einsatzfelder, den **Projektlebenszyklus** und die **Wirtschaftlichkeit** von ML-Projekten, rechtlich-ethische Bewertungen, das **Daten-Engineering** (Bezug, Analyse, Aufbereitung) sowie zwei methodische Schwerpunkte: **regelbasierte Verfahren** und **künstliche neuronale Netze** inklusive **Werkzeugauswahl** und **TensorFlow/Keras**-Beispiel. Ein durchgängiges Fallbeispiel („**Yachthafen Resort**“) veranschaulicht die Anwendung. 

## 3.1 Einsatzmöglichkeiten maschinellen Lernens analysieren

ML und DL sind Teilgebiete der **künstlichen Intelligenz**. Die Verfügbarkeit großer Datenmengen, leistungsfähiger Hardware und vielfältiger Dienste steigert Angebot und Nutzen von ML-Lösungen. Typische Branchen mit hohem Potenzial: **Marketing**, **Handel/E-Commerce**, **Unterhaltungselektronik**, **Gesundheitswesen**, **Finanzen**, **Logistik**, **Mobilität**, **Landwirtschaft**. 

### Aufgabenbereiche und Kompetenzen

* **Aufgabengebiete:** **Bild/Videoanalyse** (Objekt- und Bildklassen-Erkennung), **Text/Sprachverarbeitung (NLP)**, **Echtzeit-Verarbeitung heterogener Sensordaten**.
* **Kompetenzen von ML-Systemen:** **Mustererkennung**, **Klassifikation**, **Datenverknüpfung**, **Inhaltsgenerierung**, **Vorhersage**, **Aktionsplanung**.
* **Beispiel (Abrechnungen):** Statt zufälliger Stichproben klassifiziert ML Abrechnungen nach **Wahrscheinlichkeit** für „korrekt/fehlerhaft“ und fokussiert Prüfaufwand. 

## 3.1.2 Die Wirtschaftlichkeit maschinellen Lernens beurteilen

**Projektlebenszyklus (ML-Projekte):**

1. **Anforderungsdefinition** (Ziel klären)
2. **Datenbeschaffung und -aufbereitung**
3. **Modellerstellung und Training**
4. **Anwenden und Ergebnisse interpretieren**
5. **Überwachung** (Modell-/Datenqualität, Drift)

**Besonderheiten für die Kalkulation:** neue Umsatzpotenziale durch datengetriebene Prozesse, **Automatisierung** und Einsparungen, zusätzlicher Bedarf an **Daten**/**Speicher**, **höherer Betriebsaufwand** (Monitoring/Lernen im Betrieb), **erhöhtes Zielerreichungs-Risiko** beim Training sowie **rechtliche Risiken** (Haftung, Urheber- und Datenschutz). **Beispiel:** KI-gestützte Stichprobenauswahl reduziert Verluste durch fehlerhafte Abrechnungen; Nutzen vs. Entwicklungs- und Betriebskosten abwägen. 

## 3.1.3 Verfahren der KI rechtlich und ethisch bewerten

**Klärungsfragen vor Projektstart:** **Verantwortung**, **Entscheidungskriterien**, **DSGVO-Konformität/Angemessenheit**, **Missbrauchsschutz**.
**Rechtlich:** **Open-/Closed-Data**, **Nutzungs-/Urheberrechte**, **DSGVO** (Dokumentation, Betroffenenrechte).
**Ethisch & gesellschaftlich:** Bezug auf **Allgemeine Erklärung der Menschenrechte** (u. a. Diskriminierungsverbot, Recht auf Leben/Freiheit, Unschuldsvermutung, Informationsfreiheit) und Ausrichtung an **Nachhaltigkeitszielen (SDGs)**. **Beispiel:** Kriterien schriftlich festlegen, sensible Merkmale (z. B. Nationalität) ausschließen, Daten schützen/anonymisieren, Zweckbindung und Sicherheit sicherstellen. 

---

## 3.2 Daten aus heterogenen Quellen analysieren und aufbereiten

Große, vielfältige und schnelle Datenmengen (**Big Data**, **5 V**: **Volume**, **Variety**, **Velocity**, **Veracity**, **Value**) erfordern systematisches **Daten-Engineering**. 

### 3.2.1 Daten beziehen

* **Quellen:** **interne Daten** (DB, Logs, Dokus, Sensorik) und **externe Daten** (amtliche/kommerzielle Statistiken, Web-Crawling, Kaufdaten).
* **Datenqualität (Auswahl):** **Vollständigkeit**, **Korrektheit**, **Konsistenz**, **Redundanzfreiheit**, **Verfügbarkeit** (technisch/rechtlich), **Einheitlichkeit**.
* **Verarbeitungsgrad:** **strukturiert**, **semistrukturiert**, **unstrukturiert**.
* **Formate (Auswahl):** **Datenbankschemata**, **ODS**, **XML**, **JSON**, **INI**, **CSV**.
* **Beispiel (Klimaüberwachung Halle):** interne **Sensoren** + externe **Wetterdienst**-Daten; Rechte/Qualität prüfen. 

### 3.2.2 Daten analysieren

* **Methoden:** **Visualisierung**, **statistische Kenngrößen** (Mittelwert, Median, Varianz, **Standardabweichung**, **Entropie**).
* **Prozessstandard:** **CRISP-DM** (Business/Data Understanding, Data Preparation, Modeling, Evaluation, Deployment).
* **Werkzeuge:** **Jupyter Notebook**, **pandas**, **Matplotlib**.
* **Beispiel:** Aus Wetter-CSV ausgewählte Zeitintervalle visualisieren; Ausreißer entfernen; Kenngrößen berechnen. 

### 3.2.3 Daten aufbereiten

* **Schritte:** **Codierung**, **Vereinheitlichung**, **Reduzierung** (z. B. Graustufen, Resize, Hashing), **Konvertierung**, **Klassifizierung**.
* **Werkzeuge (Auswahl):** **Anaconda**, **NumPy**, **SciPy**, **Beautiful Soup**, **NLTK**, **OpenCV**.
* **Texte:** Zeichensatz vereinheitlichen, Strukturangaben bereinigen, **Tokenisieren**, **Lemmatizieren**, **Kleinbuchstaben**, **Stoppwörter** entfernen, **n-Gramme** bilden.
* **Bilder:** Format/Größe/Farbtiefe vereinheitlichen, ggf. zuschneiden und reduzieren.
* **Beispiel (Chatbot):** Inhalte der Website extrahieren und sprachlich vorverarbeiten für FAQ-Antworten. 

---

## 3.3 Regelbasierte Verfahren zum maschinellen Lernen einsetzen

Regelbasierte Ansätze nutzen **Expertenwissen** bzw. explizite **Regeln** und skizzieren nachvollziehbare Entscheidungen. **Verfahren (Auswahl):** **Entscheidungsbäume**, **Mustererkennung (Pattern Matching/RegEx)**, **Lineare Regression**, **SVM**, **k-Nächste-Nachbarn (kNN)**, **Evolutionäre Algorithmen**, **Expertensysteme** (Wissensbasis + **Inferenzsystem**), **Vorhersagemodelle**. **Werkzeuge:** **Reguläre Ausdrücke**, **Scikit-Learn**, **Prolog**. 

### 3.3.1 Entscheidungsbäume

**Definition:** Ein **Entscheidungsbaum** löst ein Problem über eine Folge verzweigter **Einzelentscheidungen**; Vorteile: **Transparenz/Nachvollziehbarkeit**.
**Beispiel:** Regeln „< 0 bei Liegedauer/Strom/Wasser ⇒ ungültig“ bilden einen Baum; Traversierung liefert **True/False** als Entscheidung. 

### 3.3.2 Expertensystem mit Prolog

**Prolog** beschreibt **Fakten** und **Wenn-Dann-Regeln**; ein **Interpreter** beantwortet Anfragen inkl. Begründungspfad. **Beispiel:** Regeln „ungueltig(ID) :- …“ prüfen Abrechnungen. 

### 3.3.3 Vorhersagemodell

**Numerische Modelle** (z. B. **GRIB** für Wetter) simulieren Prozesse; aufgrund **chaotischer Systeme** (/**Schmetterlingseffekt**) sind **viele genaue Messdaten** und **kurze Prognosehorizonte** entscheidend. 

---

## 3.4 Künstliche neuronale Netze einsetzen

**Künstliche neuronale Netze (KNN)** ahmen Aspekte des Gehirns nach: **Neuronen**, **gewichtete Verbindungen**, **Schichten** (**Eingangs-**, **versteckte-**, **Ausgangsschicht**). **Deep Learning** nutzt mehrschichtige Netze für Bild, Audio, Text und Zahlenreihen. **Beispiel:** Klimaüberwachung erkennt kritische Sensormuster und meldet Zustände. 

### 3.4.1 Aufbau & Funktionsweise

* **Neuron:** gewichtete Summe der Eingaben minus **Schwelle** → **Aktivierungsfunktion**.
* **Topologien (Auswahl):** **Perzeptron**, **FFNN**, **CNN** (Faltungen für Bild/Akustik), **RNN** (Rückkopplungen/Speicher).
* **Prozess:** **Architektur auswählen** → **Netz erstellen** → **Trainieren** (**Supervised**, **Unsupervised**, **Reinforced**, **Stochastisch**) → **Anwenden** → **Bewerten**.
* **Bewertung:** **Fehlerabschätzung**, **Konvergenz** über **Epochen** überwachen; bei Instabilität **Architektur/Daten** anpassen. **Beispiel:** Einfaches **Perzeptron** für Feuchtigkeitssensor (Schwellwert 85) mit fehlerbasierter Gewichtsaktualisierung. 

### 3.4.2 Werkzeuge für Deep Learning

**Frameworks (Auswahl):** **TensorFlow** (inkl. **Keras**), **PyTorch**, **Teachable Machine**, **ONNX** (Austauschformat), **DVC** (Versionierung). Hinweis: Professionalisierung ↑, aber **Black-Box**-Tendenz; Open-Source fördert Nachvollziehbarkeit. 

### 3.4.3 Deep Learning mit TensorFlow/Keras umsetzen

* **Tensoren** als Basisdatenstruktur.
* **Modellaufbau:** **Sequential**-Modell mit **Dense**-Schicht und **sigmoid**-Aktivierung; **Loss**: **binary_crossentropy**, Optimierung z. B. **RMSprop**; Training mit gelabelten Sensordaten; **Evaluation** auf Trainingsdaten; **Vorhersage** um Schwellwert. 

---

## Kernaussagen

* ML/DL sind zentrale **KI-Teildisziplinen** mit breitem **Einsatzspektrum** und messbarem **wirtschaftlichem Nutzen**.
* **Datenqualität** und **Datenaufbereitung** sind erfolgskritisch; **CRISP-DM** strukturiert Analyseprojekte.
* **Regelbasierte Verfahren** bieten **Transparenz**; **KNN/Deep Learning** bewältigen komplexe Muster, erfordern aber **sorgfältiges Training/Monitoring**.
* **Recht/ Ethik/ Nachhaltigkeit** sind integraler Bestandteil jeder ML-Einführung (Verantwortung, Kriterien, DSGVO, Missbrauchsschutz). 
