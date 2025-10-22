# 🖥️ Entwurf der Bildschirmausgabemasken – Softwareergonomie & Barrierefreiheit

**Softwareergonomie** passt Software konsequent an die Bedürfnisse der Nutzer an; zentral ist die **Benutzerschnittstelle**, über die Mensch und System interagieren (z. B. von klassischen GUIs bis zu VR-Interaktion). *(LF8)* 
Konkrete Kriterien einer ergonomischen Gestaltung sind in **ISO 9241-110** verankert (u. a. Selbstbeschreibungsfähigkeit, Aufgabenangemessenheit, Erwartungskonformität, Steuerbarkeit, Fehlertoleranz, Erlernbarkeit, Benutzerbindung). *(LF8)* 
Für die **User Experience (UX)** zählen speziell **Usability** und **Zugänglichkeit**; Zugänglichkeit meint leichte Erreichbarkeit/Benutzbarkeit und umfasst auch Menschen mit Behinderungen. *(LF10a)* 

## 🎯 Ziele & Grundprinzipien (für jede Maske)

* **UX-Grundprinzipien**: Informationsflut vermeiden (5–7 Einheiten merkbar), **Konsistenz**, **universelle Bedienbarkeit**, **informative Rückmeldungen**, **abgeschlossene Dialoge**, **einfache Fehlerbehandlung**, **Widerrufbarkeit**, **Kontrollvermittlung**. *(LF10a)* 
* **Interaktionsprinzipien nach ISO 9241-110**: Selbstbeschreibung, Aufgabenangemessenheit, Erwartungskonformität, Steuerbarkeit, Fehlertoleranz, Erlernbarkeit, Benutzerbindung. *(LF8)* 

## 🧭 Prozessschritte zum Masken-Entwurf

1. **Anforderungen ermitteln** (Inhalte/Interaktionen, Endgeräte/Betriebssysteme/Browser; nicht-funktionale Anforderungen wie Benutzbarkeit, Fehlertoleranz, Ressourcen; **Rahmenbedingungen** inkl. **Grad der Barrierefreiheit**). *(LF10a)* 
2. **Entwurf in Stufen**: **Sketch → Wireframe → Mockup → Prototyp**; Wireframe = Struktur (grau, ohne Typo/Bilder/Text), Mockup = Look-&-Feel (Farben, Typografie, Bilder/Blindtexte), Prototyp = interaktiv testbar. *(LF8)*  
3. **GUI-Elemente auswählen** (z. B. Menü, Tabs, Fenster, Textfeld, Listbox, Radio-/Checkbox, Combo, Buttons, Slider; Layout, Farbkonzept, Menüs definieren). *(LF10a)* 
4. **Ergonomie & Barrierefreiheit konkret umsetzen** (s. u.). *(LF8, LF10a)*  
5. **Testen**: GUI-Funktionalität & UX (manuell, Record-&-Replay, modellbasiert) inkl. Checkfragen zu ISO 9241-110 und Barrierefreiheit. *(LF10a)*  

## ♿ Barrierefreiheit – was in die Maske gehört

* **Allgemein**: Barrierefreiheit ist mehr als „für Menschen mit Behinderung“ – Barrieren existieren vielfältig und sollen systematisch reduziert werden. *(LF8, LF10a)*  
* **Tastatur-Bedienbarkeit**: Masken **per Tastatur navigierbar**; **Shortcuts** anbieten. *(LF10a)* 
* **Bilder/Medien**: **`alt`-Text** bei Bildern, **`<source>`** für passende Auflösungen/Medientypen (responsiv, Fallbacks). *(LF10a)* 
* **Klang/Sprachausgabe**: **TTS-Systeme** (z. B. Cloud-Dienste) für Vorlesen/akustisches Feedback integrierbar. *(LF10a)* 
* **Visuelles**: **Visuelles Design** unterstützt Funktionalität („weniger ist mehr“), klare **Informationsarchitektur** und **Interaktionsdesign**. *(LF10a)* 
* **Prüfung**: „Ist die Barrierefreiheit für Sehbehinderte gewährleistet?“ gehört in die UX-Checkliste. *(LF10a)* 

## 🧪 Checkliste für die Abnahme (Auszug)

* **ISO 9241-110** eingehalten? **Einheitliches Design**? **Erwartungskonforme Begriffe/Positionen**? **Fehler werden toleriert**? **Ausreichende Hilfen**? **Wenig Navigation nötig**? **Barrierefreiheit (z. B. Sehbehinderte) berücksichtigt**? *(LF10a)* 
* **GUI-Funktionalität**: korrekte Navigation, Maus/Tastatur/Touch, Radiobutton-Gruppenverhalten, Events, Scroll/Zoom, Hilfe (F1), (Ein-)Ausblenden/Sperren. *(LF10a)* 

---

## 🧩 Beispielcode: Grundaufbau & zugängliche Einbindung

### 1) HTML-Grundgerüst für eine Maske *(LF10a)* 

```html
<!DOCTYPE html>
<html lang="de">
<head>
  <meta charset="utf-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Maske – Beispiel</title>
</head>
<body>
  <!-- Hier kommt der Maskeninhalt -->
</body>
</html>
```

### 2) Barrierearme Bilder/Medien *(LF10a)* 

```html
<!-- Responsives Bild mit Alternativtext -->
<picture>
  <source media="(min-width: 800px)" srcset="bild_gross.jpg">
  <source media="(min-width: 400px)" srcset="bild_mittel.jpg">
  <img src="bild_klein.jpg" alt="Liegeplätze im Hafen bei Sonnenaufgang">
</picture>

<!-- Audio-/Video-Fallbacks -->
<audio controls>
  <source src="hinweis.mp3" type="audio/mpeg">
  Ihr Browser unterstützt keine Audiowiedergabe.
</audio>

<video controls>
  <source src="anleitung.mp4" type="video/mp4">
  Die Wiedergabe des Videos wird nicht unterstützt.
</video>
```

### 3) Formular-Maske „Liegeplatzanfrage“ (aus dem Projektszenario) *(LF10a)* 

```html
<html lang="de">
<head>
<meta charset="utf-8">
<style>
  body { background-color: lightblue; }
  h1 { color: darkblue; font-weight: bold; }
  p { margin-bottom: 1em; }
  input, textarea { margin-bottom: 2em; }
  label { color: darkblue; font-weight: bold; }
</style>
<title>Liegeplatzanfrage</title>
</head>
<body>
  <h1>Liegeplatzanfrage</h1>
  <p>Sie können uns kontaktieren, indem Sie das Formular ausfüllen und an uns absenden.<br>
     Wir nehmen dann mit Ihnen über die angegebene E-Mail-Adresse Kontakt auf.</p>

  <form action="https://..." method="post">
    <label for="email">Ihre E-Mail-Adresse:</label><br>
    <input type="email" name="email" size="35"><br>

    <label>Yachttyp:</label><br>
    <input type="radio" name="typ" value="Segelyacht" checked> Segelyacht
    <input type="radio" name="typ" value="Motoryacht"> Motoryacht<br>

    <label for="laenge">Länge der Yacht:</label><br>
    <input type="text" name="laenge" size="10"> m<br>

    <label for="breite">Breite der Yacht:</label><br>
    <input type="text" name="breite" size="10"> m<br>

    <label for="tiefgang">Tiefgang der Yacht:</label><br>
    <input type="text" name="tiefgang" size="10"> cm<br>

    <label for="anfrage">Anfrage:</label><br>
    <textarea name="nachricht" rows="10" cols="50"></textarea><br>

    <input type="checkbox"> Ich stimme zu, dass meine Daten gespeichert werden.<br>

    <input type="submit" value="Absenden">
    <input type="reset"  value="Abbrechen">
  </form>
</body>
</html>
```

> **Hinweise zur Ergonomie/Barrierefreiheit für das Formular:** konsistente Position/Benennung, klare Rückmeldungen, Fehlerbehandlung, universelle Bedienbarkeit (inkl. Tastatur/Shortcuts), sowie Bild-Alternativtexte und passende Medienquellen. *(LF10a)*   

---

## 🧪 Testverfahren (kurz)

* **Manuell**, **Record-&-Replay**, **modellbasiert**; jeweils mit Fokus auf GUI-Funktionalität und UX/Usability. *(LF10a)* 
* **UX-Tests** mit Kontextanalyse, Fokusgruppen, Online-Befragung, Experten-Review. *(LF10a)* 

---

## 📚 Begriffe kompakt

| Begriff                              | Definition                                                                                         | Quelle       |
| ------------------------------------ | -------------------------------------------------------------------------------------------------- | ------------ |
| **Softwareergonomie**                | Anpassung der Software (UI) an Bedürfnisse der Benutzer, von Text-UIs bis VR.                      | LF8          |
| **ISO 9241-110**                     | Interaktionsprinzipien für ergonomische Dialoggestaltung.                                          | LF8          |
| **Usability**                        | Zielerreichung im Nutzungskontext; objektiv testbar, aber subjektive Wahrnehmung bleibt außen vor. | LF10a        |
| **Zugänglichkeit**                   | Leichte Nutzung/Erreichbarkeit, inkl. Menschen mit Behinderungen.                                  | LF10a        |
| **Barrierefreiheit**                 | Mehr als Behinderung – allgemeine Reduktion von Nutzungshürden.                                    | LF8, LF10a   |
| **Sketch/Wireframe/Mockup/Prototyp** | Stufen vom Ideenskizzieren bis zum interaktiven Testmodell.                                        | LF8          |
| **GUI-Elemente**                     | Menü, Tabs, Fenster, Textfeld, Listen, Radio/Checkbox, Combo, Buttons, Slider etc.                 | LF10a        |
| **Tastatur/Shortcuts**               | Navigation und Bedienung auch ohne Maus.                                                           | LF10a        |
| **TTS**                              | Text-to-Speech-Systeme (lokal/Cloud) für Sprachausgabe.                                            | LF10a        |
| **Bild-`alt`/`<source>`**            | Alternativtexte & Quellen für barrierearme/responsive Medien.                                      | LF10a        |

---

## 🛠️ Praxisleitfaden (auf einen Blick)

* **Vor der Umsetzung**: Anforderungskatalog (inkl. **Benutzbarkeit**, **Fehlertoleranz**, **Barrierefreiheit**, Zielgeräte/OS/Browser) erstellen. *(LF10a)* 
* **Entwerfen**: **Sketch → Wireframe → Mockup → Prototyp**, dabei GUI-Elemente gezielt auswählen und platzieren. *(LF8, LF10a)*  
* **Umsetzen**: HTML/CSS/JS gemäß Grundgerüst; **`alt`** an Bildern, **Tastaturbedienung/Shortcuts**, ggf. **TTS**. *(LF10a)*    
* **Testen & Abnehmen**: ISO 9241-110-Check, UX-Checkliste inkl. **Barrierefreiheit**; GUI-Tests manuell/automatisiert/modellbasiert. *(LF10a)*  

Wenn du möchtest, kann ich auf Basis deiner konkreten Maske(n) direkt **Sketch/Wireframe** in Textform ausarbeiten und sie dann in HTML/CSS übertragen – mit der obigen Checkliste als Abnahmekriterien.


---

## [➡️ Nächstes](../3-Datenbanken-modellieren-und-erstellen/)