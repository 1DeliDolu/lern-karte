<h1>Entwurf der Bildschirmausgabemasken – Softwareergonomie & Barrierefreiheit</h1>

<h2>
  Verortung & Zielsetzung
  <span style="background-color:#8E24AA; color:white; padding:4px 8px; border-radius:12px; margin-left:8px;">Lernfeld 8</span>
  <span style="background-color:#FB8C00; color:white; padding:4px 8px; border-radius:12px; margin-left:6px;">Lernfeld 10a</span>
  <span style="background-color:#00897B; color:white; padding:4px 8px; border-radius:12px; margin-left:6px;">Lernfeld 12a</span>
</h2>
<p>Bildschirmausgabemasken (Listen, Detailansichten, Tabellen, Reports) müssen <em>verständlich, effizient und fehlertolerant</em> gestaltet sein. Softwareergonomie erhöht die Produktqualität messbar; Barrierefreiheit stellt sicher, dass Menschen mit Einschränkungen gleichberechtigt interagieren können. In den Lernfeldern werden dafür sowohl Grundsätze als auch konkrete Entwurfsschritte und Prüfungen gefordert. <strong>Quelle:</strong> „Benutzerschnittstellen unter softwareergonomischen Gesichtspunkten planen“ (LF8); „Benutzerschnittstellen gestalten und entwickeln“ (LF10a); nicht-funktionale Anforderungen (Usability/Barrierefreiheit) im Projekt (LF12a). </p>

<h2>
  Grundbegriffe: Softwareergonomie vs. Barrierefreiheit
  <span style="background-color:#8E24AA; color:white; padding:4px 8px; border-radius:12px; margin-left:8px;">LF8</span>
  <span style="background-color:#FB8C00; color:white; padding:4px 8px; border-radius:12px; margin-left:6px;">LF10a</span>
</h2>
<p><strong>Softwareergonomie</strong> fokussiert die Qualitätsmerkmale nutzerfreundlicher Dialoge; sie ist „von besonderer Bedeutung“ für die Gesamtqualität der Software. <strong>Barrierefreiheit</strong> erweitert dies um den Zugang für unterschiedliche Nutzergruppen (z. B. Screenreader, Braille-Displays, hohe Kontraste, Skalierung), wobei moderne Betriebssysteme viele Funktionen bereitstellen. <strong>Quelle:</strong> LF8 – Bedeutung der Softwareergonomie und OS-Hilfen; LF10a – UX-Bestandteile inkl. Usability und Zugänglichkeit. </p>

<h2>
  Entwurfsprozess für Ausgabemasken: Sketch → Wireframe → Mockup → Prototyp
  <span style="background-color:#8E24AA; color:white; padding:4px 8px; border-radius:12px; margin-left:8px;">LF8</span>
</h2>
<p>Vor der Implementierung werden UI-Ideen schrittweise verfeinert: <em>Sketch</em> (grobe Skizze), <em>Wireframe</em> (Struktur/Layout), <em>Mockup</em> (visuelle Gestaltung) bis zum <em>Prototyp</em> (klickbarer Ablauf). Diese Artefakte dienen der Abstimmung mit Stakeholdern und der Optimierung von Lesereihenfolge, Gruppierung, Kontrasten und Responsivität. <strong>Quelle:</strong> LF8 – „Eine Oberfläche … entwerfen“. :contentReference[oaicite:2]{index=2}</p>

<h2>
  Gestaltungsprinzipien für Bildschirmausgaben (Softwareergonomie)
  <span style="background-color:#FB8C00; color:white; padding:4px 8px; border-radius:12px; margin-left:8px;">LF10a</span>
</h2>
<p>Ergonomische Ausgabemasken entstehen aus dem Zusammenspiel von <strong>Informationsarchitektur</strong> (Auffindbarkeit, Navigationskonzept), <strong>Interaktionsdesign</strong> (erwartungskonforme Bedienpfade) und <strong>Visuellem Design</strong> (reduzierte, funktional unterstützende Ästhetik). <em>Weniger ist mehr</em>: Klarer Fokus, konsistente Muster, sparsame Farbe/Typografie, hohe Lesbarkeit. <strong>Quelle:</strong> LF10a – UX-Bestandteile & Grundprinzipien. :contentReference[oaicite:3]{index=3}</p>
<ul>
  <li><strong>Konsistenz & Erwartungskonformität:</strong> Positionen/Bezeichnungen wiederholen; gleichartige Tabellen, Filter, Paginierung gleich bedienen. :contentReference[oaicite:4]{index=4}</li>
  <li><strong>Reduktion kognitiver Last:</strong> Information in Portionen; Sortierung/Filter vorgeben; klare Hierarchie (Überschrift → Block → Zeile → Feld). :contentReference[oaicite:5]{index=5}</li>
  <li><strong>Tastaturnavigation & Shortcuts:</strong> Alle relevanten Funktionen per Tab/Shortcut erreichbar; Fokus sichtbar; sinnvolle Tab-Reihenfolge. :contentReference[oaicite:6]{index=6}</li>
</ul>

<h2>
  Barrierefreiheit in Ausgabemasken: Mindestmaßnahmen & OS-Hilfen
  <span style="background-color:#8E24AA; color:white; padding:4px 8px; border-radius:12px; margin-left:8px;">LF8</span>
  <span style="background-color:#FB8C00; color:white; padding:4px 8px; border-radius:12px; margin-left:6px;">LF10a</span>
</h2>
<ul>
  <li><strong>Tastaturbedienbarkeit:</strong> Alle Elemente müssen per Tab erreichbar/bedienbar sein (inkl. Tabellenzellen, Paginierung, Sortier-Icons). :contentReference[oaicite:7]{index=7}</li>
  <li><strong>Skalierbarkeit:</strong> Inhalte vergrößerbar (Zoom/Responsive Tabellen, flexible Zeilenhöhen/Spaltenbreiten). :contentReference[oaicite:8]{index=8}</li>
  <li><strong>Alternativtexte & Tooltips:</strong> Symbole/Grafiken mit sinnvollen Alternativtexten (z. B. Export-Icon „CSV exportieren“). :contentReference[oaicite:9]{index=9}</li>
  <li><strong>Plattformunabhängigkeit & Assistive Tech:</strong> Kompatibilität mit Screenreadern/Braille-Displays; OS-Funktionen (Lupen, hoher Kontrast) nutzen. :contentReference[oaicite:10]{index=10}</li>
  <li><strong>Zugänglichkeit als UX-Kriterium:</strong> „Zugänglichkeit“ gehört zum UX-Modell und verkürzt die Lernkurve. :contentReference[oaicite:11]{index=11}</li>
</ul>
<p><strong>Quelle:</strong> LF8 – Beispiele Barrierefreiheit; LF10a – UX-Zugänglichkeit. </p>

<h2>
  Anforderungen festlegen: Was muss eine Ausgabemaske leisten?
  <span style="background-color:#00897B; color:white; padding:4px 8px; border-radius:12px; margin-left:8px;">LF12a</span>
  <span style="background-color:#FB8C00; color:white; padding:4px 8px; border-radius:12px; margin-left:6px;">LF10a</span>
</h2>
<ul>
  <li><strong>Funktional:</strong> Sortieren/Filtern/Suchen, Export, Paginierung, Zoom/Skalierung, Mehrsprachigkeit (falls gefordert). :contentReference[oaicite:13]{index=13}</li>
  <li><strong>Nicht-funktional:</strong> Benutzbarkeit (Selbstbeschreibbarkeit, Erwartungskonformität), Zuverlässigkeit, Effizienz. :contentReference[oaicite:14]{index=14}</li>
  <li><strong>Rahmenbedingungen:</strong> Endgeräte/Betriebssysteme/Browser; <em>Grad der Barrierefreiheit</em>; Corporate-Identity-Vorgaben (Kontrast, Typo). </li>
</ul>
<p><strong>Quelle:</strong> LF10a – Anforderungskatalog GUI; LF12a – Qualitätsanforderungen & CI. </p>

<h2>
  DIN EN ISO 9241-110 im Kontext der Ausgabemasken
  <span style="background-color:#FB8C00; color:white; padding:4px 8px; border-radius:12px; margin-left:8px;">LF10a</span>
</h2>
<p>Die Interaktionsprinzipien der DIN EN ISO 9241-110 (u. a. Aufgabenangemessenheit, Selbstbeschreibungsfähigkeit, Steuerbarkeit, Erwartungskonformität, Fehlertoleranz, Lernförderlichkeit, Individualisierbarkeit) dienen als Leitplanken für Layout, Navigation und Rückmeldungen. In der Praxis werden daraus konkrete Abnahmekriterien und UX-Tests abgeleitet. <strong>Quelle:</strong> LF10a – Bezug auf 9241-110 und UX-Testleitfragen. :contentReference[oaicite:17]{index=17}</p>

<h2>
  Fehlermeldungen, Zustände & Rückmeldungen in Ausgabemasken
  <span style="background-color:#FB8C00; color:white; padding:4px 8px; border-radius:12px; margin-left:8px;">LF10a</span>
</h2>
<ul>
  <li><strong>Erklärende Fehlermeldungen:</strong> Was ist passiert? Was kann ich tun? (statt Codes ohne Kontext).</li>
  <li><strong>Leere Zustände („Empty States“):</strong> Sinnvolle Hinweise/Call-to-Action statt „keine Daten“.</li>
  <li><strong>Systemrückmeldungen:</strong> Fortschritt/Bestätigung/Unterscheidung von kritisch vs. informativ; optional dezente Klänge. :contentReference[oaicite:18]{index=18}</li>
</ul>
<p><strong>Quelle:</strong> LF10a – weitere Gestaltungsaspekte inkl. klanglicher Gestaltung und Navigation. :contentReference[oaicite:19]{index=19}</p>

<h2>
  Validierung & Test der Ausgabemasken (UX & GUI)
  <span style="background-color:#FB8C00; color:white; padding:4px 8px; border-radius:12px; margin-left:8px;">LF10a</span>
</h2>
<ul>
  <li><strong>UX-Tests:</strong> Mit Probanden frühe Irritationen aufdecken; Leitfragen u. a. zu Nutzen, Orientierung, 9241-110-Prinzipien, Fehler­toleranz. :contentReference[oaicite:20]{index=20}</li>
  <li><strong>GUI-Tests:</strong> Manuell, Record-&-Replay, modellbasiert; prüfen u. a. korrekte Navigation, Fokus, Events, Skalierung, Hilfe-Aufruf, Animationen. :contentReference[oaicite:21]{index=21}</li>
</ul>
<p><strong>Quelle:</strong> LF10a – UX-Testen & GUI-Testverfahren inkl. Prüfpunkte. </p>

<h2>
  Kompakte Checkliste für Ausgabemasken
  <span style="background-color:#455A64; color:white; padding:4px 8px; border-radius:12px; margin-left:8px;">Praxis</span>
</h2>
<ul>
  <li><strong>Lesbarkeit:</strong> Überschriften/Spaltenköpfe klar; ausreichende Zeilenhöhe/Zeilenabstand; sparsame Typo/Farbe (Funktion vor Dekor). :contentReference[oaicite:23]{index=23}</li>
  <li><strong>Struktur:</strong> Primäre Aktionen sichtbar, sekundäre im Kontextmenü; Filter/Sortierung konsistent; sinnvolle Default-Sortierung. :contentReference[oaicite:24]{index=24}</li>
  <li><strong>Navigation:</strong> Vollständige Tastatur-Bedienung; sichtbarer Fokus; Shortcuts dokumentiert. :contentReference[oaicite:25]{index=25}</li>
  <li><strong>Barrierefreiheit:</strong> Alt-Texte, korrektes ARIA-/Tooltip-Wording, ausreichende Kontraste, Zoom bis mindestens 200 %, Tabellen am Screenreader nutzbar. :contentReference[oaicite:26]{index=26}</li>
  <li><strong>Responsivität:</strong> Spaltenpriorisierung (wichtig → sichtbar), horizontales Scrollen vermeiden, Touch-Zielgrößen beachten. :contentReference[oaicite:27]{index=27}</li>
  <li><strong>Qualitätssicherung:</strong> UX-Leitfragen (9241-110) durchgehen; GUI-Tests für Navigation/Events/Skalierung automatisieren, wo sinnvoll. </li>
</ul>
<p><strong>Quelle:</strong> LF10a/LF8 – UX-Bestandteile, Tastatur/Shortcuts, Barrierefreiheit, Testleitfaden. </p>
