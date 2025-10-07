# 1 Benutzerschnittstellen gestalten und entwickeln [Seite: 8]

Benutzerschnittstellen (UIs) sind entscheidend für die Akzeptanz von Software, weil sie den Zugang zu digitalen Diensten vereinfachen und Anforderungen an **Ergonomie**, **Zugänglichkeit** und **Zielgruppenorientierung** erfüllen müssen. Der Entwicklungsweg führt von der **Prozessanalyse** über die **Anforderungsspezifikation** zum **Design**, zur **Implementierung** und zum **Test** – durchgängig mit Blick auf **Usability** und **User Experience (UX)**. 

## 1.1 Anforderungen an eine Benutzerschnittstelle ermitteln

**Kernaussagen:**
Kundenerwartungen sind häufig unscharf; deshalb braucht es eine strukturierte **Anforderungsspezifikation**. Je nach Projektgröße einmalig oder iterativ, z. B. mit fortlaufender Verfeinerung pro Modul.

### Prozessschritte der **Anforderungsspezifikation**

1. **Ist-Analyse:** Überblick über Prozesse, **Schnittstellen** und **Informationsfluss**; Ziele: Schwachstellen erkennen und nur notwendige Funktionalitäten aufnehmen.
   Untersuchte Aspekte: Prozessaufgabe, -struktur, Kommunikation, Daten, Dokumentation, Schwachstellen.
2. **Anforderungen sammeln:** Vollständige Bedarfsübersicht; Kategorien: **funktional**, **technisch**, **organisatorisch**, **allgemeine Kriterien**.
3. **Anforderungen definieren:** Machbarkeit, Einschränkungen, Kosten/Ressourcen, Risiken prüfen; Zuordnung zu **Softwarekriterien**; Klassifikation in **funktionale** vs. **nicht funktionale** Anforderungen.
4. **Anforderungen überprüfen:** Auswahl/Priorisierung (z. B. *nicht erforderlich*, *nice-to-have*, *unbedingt erforderlich*).
5. **Anforderungskatalog fertigstellen & genehmigen:** Form abhängig vom Vorgehen (z. B. **Lastenheft**, **Product Backlog**); bei iterativen Ansätzen laufende Anpassung.

### Methoden zur Erhebung

* **Interview**, **Fragebogen**, **Beobachtung**; ergänzend **Brainstorming**, Dokumentensichtung, **Simulation/Workshops**.
* Beispiel-Fragen: Prozessart/-schnittstellen, Reihenfolge von Tätigkeiten, Qualitätsanforderungen, Datenbedarf, Entscheidungswege, **Informationssicherheit**.

### Prozess- & Geschäftsprozessanalyse (1.1.2)

* Grundbegriffe: **Prozess**, **Geschäftsprozess**, **Prozessschnittstelle**, **Informationsfluss**.
* Darstellungsmittel: **BPMN**, **EPK**, **UML-Aktivitätsdiagramm**, **Wertschöpfungskette**.
* Beispiel „Yachthafen Resort“: Erfassung von Liegeplatzdaten – Excel- und Papierdoppelpflege ist **fehleranfällig** und **langsam**; Ziel: **Automatisierung**, **Konsistenz**, Validierungen.

### Anforderungskatalog erstellen (1.1.3)

* **Funktionale Anforderungen** an UIs: fachliche Abläufe (Eingabe/Anzeige/Suche/Filtern), **Interaktion** (Maus/Tastatur/Zoom), **Endgeräte/Umgebungen** (Desktop, Tablet, OS/Browser).
* **Nicht funktionale**: **Benutzbarkeit** (ISO 9241-110), **Zuverlässigkeit**, **Effizienz**; **Rahmenbedingungen** (z. B. Corporate Identity, Barrierefreiheit, Mehrsprachigkeit).
* Beschreibung & Priorisierung; in iterativen Vorgehen mit **Epics** und **User Stories** (nutzerzentriert).

## 1.2 Ein Softwareprodukt designen

**Kernaussagen:**
Der **Architekturentwurf** legt den Bauplan fest (Komponenten & Beziehungen), gefolgt vom **Detailentwurf** (Module, Datenstrukturen, Algorithmen).

### Merkmale guter **Softwarearchitektur**

* **Modularität**, **Entkopplung**, **Abstraktion**, **Einfachheit**, **Vollständigkeit**, **Parallelität**.
* Bausteine: **Module** (klar definierte Dienste über **Schnittstellen**).
* Schnittstellenarten: **Benutzer-**, **Software- (API/ABI)**, **Hardware-**, **Daten-**schnittstellen.

### Architekturmuster (1.2.2)

* Kategorien: **Mud-to-Structure**, **Verteilte Systeme**, **Interaktive Systeme**, **Adaptive Systeme**.
* **Drei-Schichten-Architektur**: Präsentation – Logik – Daten; Vorteile (klare Trennung, Austauschbarkeit), Nachteil (Overhead).
* **Client-Server**: Dienste auf getrennten Systemen; fördert **Skalierbarkeit**, erfordert **Verfügbarkeit**.
* **MVC**: **Model** (Daten), **View** (Darstellung), **Controller** (Ereignis-/Interaktionslogik); Vorteile: mehrere Views, Austauschbarkeit; Nachteil: höhere **Komplexität**.

## 1.3 Benutzerschnittstellen funktionsgerecht und ergonomisch konzipieren

### Arten von Benutzerschnittstellen (1.3.1)

* **CLI**, **TUI**, **GUI**, **NUI** (Touch/Gesten/VR), **VUI** (Sprache), **OUI** (biegsame/organische Displays), **BCI** (Gedankensteuerung, v. a. Assistenz).
* Historie: Von Lochkarten → CLI/TUI → **GUI** → multimodale Interaktion (Touch, Sprache, VR).

### Interaktionsprinzipien nach **ISO 9241-110** (2020) (1.3.2)

* **Aufgabenangemessenheit** (inkl. Defaults, Aufwandsminimierung)
* **Selbstbeschreibungsfähigkeit** (Auffindbarkeit, Systemstatus)
* **Steuerbarkeit** (Unterbrechbarkeit, **Flexibilität**, **Individualisierbarkeit**)
* **Erwartungskonformität** (interne/externe **Konsistenz**, Kontextanpassung)
* **Robustheit gegen Benutzungsfehler** (Vermeidung, Toleranz, **Fehlermanagement**)
* **Benutzerbindung** (Motivation, **Vertrauenswürdigkeit**, Einbindung)
* **Erlernbarkeit** (Entdecken, Ausprobieren ohne Risiko, Erinnern/Wiedererkennen)

### **UX Design** – Begriffe, Komponenten, Prinzipien

* **User Experience**: Wahrnehmungen/Reaktionen aus Nutzung/Erwartung; **UX ≠ UI**.
* Komponenten: **Visuelles Design (UI)**, **Informationsarchitektur**, **Interaktionsdesign**, **Usability**, **Zugänglichkeit**.
* Grundprinzipien: Informationsreduktion, **Konsistenz**, **universelle Bedienbarkeit**, **Feedback**, **abgeschlossene Dialoge**, **Fehlerbehandlung**, **Widerrufbarkeit**, **Kontrollvermittlung**.

### Designprozess & Werkzeuge (1.3.3)

* Iterativ (ähnlich **Design Thinking**): **Verstehen → Forschen → Analysieren → Design → Entwickeln → Testen**, kontinuierliches Lernen/Anpassen.
* Artefakte: **Sketch → Wireframe → Mockup → Prototyp**.
* Tools (Auswahl): Adobe XD, Mockplus, Moqups, FluidUI, Marvel.

### GUI-Elemente & Gestaltung (1.3.4)

* Bausteine: **Fenster**, **Tabs**, **Menü**, **Icon/Cursor**, **Textbox/Label**, **Button**, **Radio-/Checkbox**, **Listbox/Combobox**, **Bild**, **Schieberegler**.
* Allgemeine Regeln:

  * **Text**: 2–3 Schriftarten; Unterstreichung nur für Links.
  * **Farben**: Licht „von oben“, wenige Farben, konsistente **Shadows/Highlights**.
  * **Eingabe**: Markierungen/Führung; flexible Formate.
  * **Steuerelemente**: Erkennbare Klickbarkeit; aktives Element hervorheben; Irrelevantes verbergen.
  * **Abstände**: Großzügig; keine Überladung.
  * **Icons**: Einfach, eindeutig, konsistent.
  * **Navigation**: Tastatur/Shortcuts unterstützen.
* Weitere Aspekte: **Emotionale**, **klangliche**, **soziale Gestaltung**; **Corporate Design** (Logo, Schrift, Farben, Raster, Bildwelt); **Barrierefreiheit**; **Mehrsprachigkeit**.
* Alternative Interaktion auf GUIs: **Touch** (Größenanpassungen), **Gesten** (Events/Layouts), **Sprache** (Cloud-KI, Befehlsset).
* **Text-to-Speech (TTS)**: Text → Audio; lokal/Cloud, z. B. für Assistenz und Barrierefreiheit.

## 1.4 Benutzerschnittstellen implementieren

### Auswahl von Bibliotheken/Frameworks (1.4.1)

* Begriffe: **Bibliothek**, **Framework**, **API**.
* Auswahlkriterien: **Anforderungsabdeckung**, **Popularität/Community/Dokumentation**, **Lizenz/Kosten**, **Entwurfsmuster** (z. B. **MVC/MVP/MVVM**), **Installation/Deploybarkeit**, **Erlernbarkeit**.
* Beispiele:

  * **Python**: Tkinter, **PyQt/Qt**
  * **Java**: Swing, **JavaFX**
  * **C#/.NET**, **C++/Qt**
  * Web: **Django**, **Spring**, **Express**, **ASP.NET**, **Ruby on Rails**, **Angular** (Auswahl)

### Python-GUIs (1.4.2)

* Tkinter (Standard), **PyQt + Qt-Designer** (komfortabler Entwurf, Events/Slots, Styles via `setStyleSheet`).
* Beispiel-Patterns: Fenster aufbauen, **Events** binden, Widgets (Buttons, Radiobuttons, Slider, Listen, Combo).
* **TTS-Beispiel**: gTTS + playsound (Text lesen, Datei abspielen, löschen).

### Java-GUIs (1.4.3)

* **AWT** (historisch), **Swing** (umfangreiche UI-Bibliothek), **JavaFX** (modern, getrennte API/Rendering, plattformübergreifend).
* Tooling: **Scene Builder**, e(fx)clipse; FXML-Views (MVC-konform), Controller-Klassen für **Event-Handling**; Beispiel mit Labels/Buttons/Slider/Listen/Combo.

---

**Ziele und Nutzen des Abschnitts:**

* Systematisches Vorgehen von **Anforderung** bis **Implementierung**.
* Sicherstellung von **Usability/UX** durch **ISO 9241-110**, **Designprinzipien** und **iteratives Testen**.
* Fundierte **Architektur- und Framework-Entscheidungen** für wartbare, skalierbare und benutzerfreundliche Software.

---

[Nächstes Kapitel: 1.1 Anforderungen an eine Benutzerschnittstelle ermitteln](1.1_Anforderungen_an_eine_Benutzerschnittstelle_ermitteln.md)