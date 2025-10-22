<h1>ER-Modell, Attribute, Beziehungen, Kardinalitäten, referenzielle Integrität, Aktualisierungs- &amp; Löschweitergabe, Primär-/Fremdschlüssel</h1>

<h2>Begriffseinordnung &amp; Zielsetzung <span style="background-color:#6a0572; color:white; padding:4px 8px; border-radius:12px;">Lernfeld 5</span></h2>
<p>Das Entity-Relationship-Modell (ER-Modell) strukturiert die Fachwelt in <em>Entitäten</em> (Gegenstände), ihre <em>Attribute</em> (Eigenschaften) und <em>Beziehungen</em> (Verknüpfungen). Es dient als konzeptionelles Datenmodell, das anschließend systematisch in ein relationales Schema überführt wird (Tabellen, Schlüssel, Constraints). Für die Überführung nennt das Material explizite <strong>Transformationsregeln</strong>, u. a.: „Ein Entitätstyp wird mit all seinen Attributen zu einer Tabelle; jede Tabelle erhält einen Primärschlüssel“ :contentReference[oaicite:0]{index=0}.</p>

<h2>Entitäten &amp; Attribute <span style="background-color:#0b7285; color:white; padding:4px 8px; border-radius:12px;">Lernfeld 5</span></h2>
<p>Eine <strong>Entität</strong> repräsentiert einen eindeutig identifizierbaren Gegenstand (z. B. <em>Kunde</em>, <em>Artikel</em>). <strong>Attribute</strong> beschreiben Merkmale (z. B. <em>KundenNr</em>, <em>Name</em>). Bei der Überführung ins Relationenmodell werden Entitätstypen zu Tabellen; fehlende natürliche Schlüssel können durch <em>künstliche Primärschlüssel</em> ersetzt werden (z. B. <em>BestellNr</em>) :contentReference[oaicite:1]{index=1}.</p>
<ul>
  <li><em>Einfache Attribute</em>: nehmen atomare Werte an (z. B. <em>Titel</em> eines Buches).</li>
  <li><em>Zusammengesetzte Schlüssel</em>: Kombination mehrerer Attribute zur eindeutigen Identifikation (z. B. <em>BestellNr+Pos</em> in <em>Bestellposition</em>) :contentReference[oaicite:2]{index=2}.</li>
</ul>

<h2>Beziehungen &amp; Kardinalitäten (1:1, 1:n, n:m) <span style="background-color:#2f9e44; color:white; padding:4px 8px; border-radius:12px;">Lernfeld 5</span></h2>
<p>Beziehungen verknüpfen Entitäten; ihre <strong>Kardinalität</strong> definiert, wie viele Entitäten einander zugeordnet werden dürfen/müssen:</p>
<ul>
  <li><strong>1:1</strong> – selten, sinnvoll bei Aufteilung aus Organisatorik/Datenschutzgründen (z. B. Auslagerung sensibler Gehaltsdaten) :contentReference[oaicite:3]{index=3}.</li>
  <li><strong>1:n</strong> – sehr häufig (z. B. <em>Abteilung</em>–<em>Mitarbeiter</em>: eine Abteilung hat viele Mitarbeitende; jeder Mitarbeitende gehört genau einer Abteilung) :contentReference[oaicite:4]{index=4}.</li>
  <li><strong>n:m</strong> – wird im Relationenmodell über eine <em>Kreuztabelle</em> (Zwischentabelle) aufgelöst; die beiden Fremdschlüssel bilden dort oft einen <em>zusammengesetzten Primärschlüssel</em> (z. B. <em>Mitarbeiter_Projekt</em>) :contentReference[oaicite:5]{index=5}.</li>
</ul>

<h2>Primärschlüssel (PK) &amp; Fremdschlüssel (FK) <span style="background-color:#d9480f; color:white; padding:4px 8px; border-radius:12px;">Lernfeld 5</span></h2>
<p>Der <strong>Primärschlüssel</strong> identifiziert jeden Datensatz eindeutig (natürlich oder künstlich). Der <strong>Fremdschlüssel</strong> verweist auf den Primärschlüssel einer referenzierten Tabelle und realisiert damit Beziehungen zwischen Tabellen (z. B. <em>Bestellung.KundenNr → Kunde.KundenNr</em>) :contentReference[oaicite:6]{index=6}.</p>

<h2>Referenzielle Integrität <span style="background-color:#5f3dc4; color:white; padding:4px 8px; border-radius:12px;">Lernfeld 5</span></h2>
<p><strong>Referenzielle Integrität</strong> erzwingt, dass jeder FK-Wert einem existierenden PK-Wert entspricht; so werden Waisenverweise verhindert. Praxisregel: Ein Parent-Datensatz muss existieren, bevor ein Child-Datensatz mit passendem FK eingefügt wird; umgekehrt müssen Child-Datensätze entfernt werden, bevor der referenzierte Parent gelöscht werden darf :contentReference[oaicite:7]{index=7}.</p>

<h2>Aktualisierungsweitergabe &amp; Löschweitergabe (Cascade-Strategien) <span style="background-color:#c2255c; color:white; padding:4px 8px; border-radius:12px;">Lernfeld 5</span></h2>
<p>DBMS bieten Optionen, wie sich Änderungen am <em>Parent</em> auf abhängige <em>Child</em>-Datensätze auswirken. Diese Strategien konkretisieren die obige Integritätsregel in der technischen Umsetzung:</p>
<ul>
  <li><strong>Aktualisierungsweitergabe</strong> (<em>ON UPDATE CASCADE</em>): Wird der PK-Wert im Parent geändert, passt das DBMS die korrespondierenden FK-Werte in allen betroffenen Child-Zeilen automatisch an. So bleiben Verweise konsistent (Variante zur inhaltlich geforderten Integrität :contentReference[oaicite:8]{index=8}).</li>
  <li><strong>Löschweitergabe</strong> (<em>ON DELETE CASCADE</em>): Löscht man einen Parent, werden alle referenzierenden Child-Zeilen automatisch mitgelöscht. Alternativen sind z. B. <em>SET NULL</em> (FK auf <code>NULL</code> setzen) oder <em>RESTRICT/NO ACTION</em> (Löschen nur zulässig, wenn keine Children existieren). Diese Mechanismen operationalisieren die im Material beschriebene Reihenfolge (erst Child, dann Parent) automatisiert :contentReference[oaicite:9]{index=9}.</li>
</ul>
<p><em>Hinweis (Modellierungspraxis):</em> Löschweitergabe ist fachlich sorgfältig abzuwägen (Audit-/Revisionsanforderungen, Historisierung). Häufig werden stattdessen <em>logische Löschungen</em> (Statusflag) genutzt.</p>

<h2>Von ER zum relationalen Schema: Vorgehen &amp; Regeln <span style="background-color:#0c8599; color:white; padding:4px 8px; border-radius:12px;">Lernfeld 5</span></h2>
<ul>
  <li>Entität ⇒ <strong>Tabelle</strong> mit allen Attributen.</li>
  <li>Markierte Identifikatoren im ER-Modell ⇒ <strong>PK</strong>; falls nicht vorhanden ⇒ <strong>künstlicher PK</strong>.</li>
  <li>Beziehungen:
    <ul>
      <li><strong>1:1</strong>: FK in eine der beiden Tabellen (ggf. mit <em>UNIQUE</em>), organisatorisch begründen (z. B. Rechte) :contentReference[oaicite:10]{index=10}.</li>
      <li><strong>1:n</strong>: FK in der <em>n</em>-Tabelle (Child) :contentReference[oaicite:11]{index=11}.</li>
      <li><strong>n:m</strong>: eigene Kreuztabelle mit zwei FKs (oft zusammengesetzter PK) :contentReference[oaicite:12]{index=12}.</li>
    </ul>
  </li>
</ul>
<p>Diese Regeln sind im Material explizit formuliert (Transformationsregeln) und werden an Bestellbeispielen illustriert .</p>

<h2>Beispielhafte Anwendung (aus dem Material) <span style="background-color:#343a40; color:white; padding:4px 8px; border-radius:12px;">Lernfeld 5</span></h2>
<ul>
  <li><strong>Kunde–Bestellung–Bestellposition–Artikel</strong>: Alle Beziehungen sind 1:n; <em>Bestellposition</em> nutzt <em>BestellNr+Pos</em> als zusammengesetzten PK; FKs verbinden zu <em>Bestellung</em> und <em>Artikel</em> :contentReference[oaicite:14]{index=14}.</li>
  <li><strong>Mitarbeiter–Projekt</strong>: n:m über Kreuztabelle (<em>Mitarbeiter_Projekt</em>) mit zwei FKs; die Kombination bildet den PK :contentReference[oaicite:15]{index=15}.</li>
</ul>

<h2>Integrität im Lebenszyklus: Beispiele für Weitergaben <span style="background-color:#7c2d12; color:white; padding:4px 8px; border-radius:12px;">Lernfeld 5</span></h2>
<ul>
  <li><strong>Löschfall</strong> (<em>Parent: Kunde</em>): Ohne Weitergabe darf <em>Kunde</em> nur gelöscht werden, wenn alle <em>Bestellungen/Bestellpositionen</em> zuvor entfernt sind (Materialregel). Mit <em>ON DELETE CASCADE</em> übernimmt das DBMS die notwendige Reihenfolge automatisch :contentReference[oaicite:16]{index=16}.</li>
  <li><strong>Aktualisierungsfall</strong> (<em>Parent-PK ändert sich</em>): Mit <em>ON UPDATE CASCADE</em> bleiben referenzierende FKs konsistent; andernfalls sind manuelle Anpassungen erforderlich (inhaltliche Konsequenz der referenziellen Integrität :contentReference[oaicite:17]{index=17}).</li>
</ul>

<h2>Qualitätssicherung &amp; typische Stolpersteine <span style="background-color:#1e6091; color:white; padding:4px 8px; border-radius:12px;">Lernfeld 5</span></h2>
<ul>
  <li><strong>Redundanzen vermeiden</strong> (sonst Anomalien: Einfüge-, Änderungs-, Löschanomalie) durch korrekte Zerlegung und Schlüsselwahl :contentReference[oaicite:18]{index=18}.</li>
  <li><strong>FK-Constraints</strong> stets aktivieren</strong>, um fehlerhafte Referenzen schon beim Schreiben zu verhindern (Materialregel der Einfüge-/Löschreihenfolge) :contentReference[oaicite:19]{index=19}.</li>
</ul>

<p><em>Quelle: Lernfeld 5 (Kapitel „ER-Modelle in relationale Datenmodelle überführen“, „Beziehungen &amp; Kardinalitäten“, „Referenzielle Integrität“, Beispiele Kunde/Bestellung) und Lernfeld 8 (Ergänzungen zu Datenmodell-Entscheidungen)</em> </p>
