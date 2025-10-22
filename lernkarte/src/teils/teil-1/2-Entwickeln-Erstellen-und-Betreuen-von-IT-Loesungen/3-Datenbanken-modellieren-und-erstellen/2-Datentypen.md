<h1>Datentypen in der Anwendungsentwicklung: Boolesche Werte, Ganzzahlen, Gleitkommazahlen, Währungen, Datumswerte, Texte (fest/variabel), BLOB & Geokoordinaten</h1>

<h2>
  <span style="background-color:#2563eb; color:white; padding:4px 8px; border-radius:12px;">Lernfeld 5</span>
  Einordnung & Relevanz in Datenbanken und Programmiersprachen
</h2>
<p>Datentypen legen Wertebereich, Speicherbedarf und zulässige Operationen fest und sind die Grundlage für Datenmodellierung, Persistenz und Schnittstellen. In SQL unterscheiden wir u. a. Ganzzahlen, Festkomma (für Geldbeträge), Gleitkomma, Datums-/Zeittypen sowie feste und variable Texttypen; zusätzlich existieren Wahrheitswerte (BOOLEAN). Die Wahl des Typs beeinflusst Konsistenz, Performance und Datenqualität. :contentReference[oaicite:0]{index=0}</p>

<h2>
  <span style="background-color:#16a34a; color:white; padding:4px 8px; border-radius:12px;">Lernfeld 8</span>
  Grundtypen in der Programmierung (Beispiel Java) & Präzisionsaspekte
</h2>
<p>Programmiersprachen bieten primitive Datentypen wie <em>boolean</em>, <em>byte/short/int/long</em> (Ganzzahl), <em>float/double</em> (Gleitkomma), <em>char</em> (Unicode-Zeichen). Gleitkommawerte können nicht jede Zahl exakt darstellen; je nach Typ ist die Genauigkeit in den Nachkommastellen begrenzt — ein Kernaspekt für die richtige Typwahl. :contentReference[oaicite:1]{index=1}</p>
<p>Auch bei dynamisch typisierten Sprachen (z. B. Python) gelten die Grundprinzipien: Ganzzahlen sind exakt, Gleitkomma führt potenziell zu Rundungsfehlern; Boolesche Werte repräsentieren <em>true/false</em>. :contentReference[oaicite:2]{index=2}</p>

<h2>
  <span style="background-color:#9333ea; color:white; padding:4px 8px; border-radius:12px;">Lernfeld 5</span>
  Ganzzahlen (Integer)
</h2>
<p><strong>Zweck:</strong> Zähl- und Indexwerte, IDs, Stückzahlen. <strong>Eigenschaften:</strong> Exakte Darstellung ohne Nachkommastellen. In SQL z. B. <code>INTEGER</code>, <code>BIGINT</code>. :contentReference[oaicite:3]{index=3}</p>
<ul>
  <li><strong>Typische Beispiele:</strong> Primärschlüssel, Menge, AnzahlVersuche.</li>
  <li><strong>Hinweis:</strong> Bereich passend zur Fachdomäne wählen (z. B. <code>BIGINT</code> für hohe Zählerstände). :contentReference[oaicite:4]{index=4}</li>
</ul>

<h2>
  <span style="background-color:#0ea5e9; color:white; padding:4px 8px; border-radius:12px;">Lernfeld 5</span>
  Gleitkommazahlen (Float/Double)
</h2>
<p><strong>Zweck:</strong> Messwerte mit Nachkommastellen (z. B. Temperatur). <strong>Eigenschaften:</strong> Näherungswerte, Rundungsfehler möglich; in SQL meist <code>FLOAT</code>/<code>DOUBLE</code>. :contentReference[oaicite:5]{index=5}</p>
<ul>
  <li><strong>Risiko:</strong> Nicht für Geldbeträge verwenden (Rundungsfehler!). In der Programmierung sind Nachkommagenauigkeit und Formatierung zu beachten. :contentReference[oaicite:6]{index=6}</li>
  <li><strong>Beispiel:</strong> Sensor-/Telemetrie-Datenanalysen. :contentReference[oaicite:7]{index=7}</li>
</ul>

<h2>
  <span style="background-color:#22c55e; color:white; padding:4px 8px; border-radius:12px;">Lernfeld 5</span>
  Währung (Geldbeträge) als Festkommazahl
</h2>
<p><strong>Zweck:</strong> Preise, Summen, Kontostände. <strong>Empfehlung:</strong> <em>Festkomma</em>-Datentypen (z. B. <code>DECIMAL</code>/<code>NUMERIC(n,m)</code>) für exakte Berechnung und korrekte Rundung. <strong>Begründung:</strong> Gleitkomma führt zu Genauigkeitsverlust; Festkomma speichert dezimal exakt. :contentReference[oaicite:8]{index=8}</p>
<ul>
  <li><strong>Praxis:</strong> Zwei Nachkommastellen (Cent), passende Präzision für Maximalwerte.</li>
</ul>

<h2>
  <span style="background-color:#ef4444; color:white; padding:4px 8px; border-radius:12px;">Lernfeld 5</span>
  Datums- und Zeitwerte
</h2>
<p><strong>Zweck:</strong> Zeitliche Daten für Ereignisse, Fristen, Protokolle. <strong>SQL-Typen:</strong> <code>DATE</code>, <code>TIME</code>, <code>TIMESTAMP</code>; viele Systeme bieten Datums-/Zeitfunktionen (z. B. <code>date()</code>, <code>time()</code>, <code>datetime()</code>). :contentReference[oaicite:9]{index=9} :contentReference[oaicite:10]{index=10}</p>
<ul>
  <li><strong>Hinweise:</strong> Zeitzonen, Sommerzeit, Kalenderarithmetik berücksichtigen (Funktionen des verwendeten DBMS nutzen). :contentReference[oaicite:11]{index=11}</li>
</ul>

<h2>
  <span style="background-color:#a855f7; color:white; padding:4px 8px; border-radius:12px;">Lernfeld 5</span>
  Texte fester und variabler Länge
</h2>
<p><strong>Fest (CHAR(n)):</strong> Füllt auf feste Länge; sinnvoll bei normierten Codes konstanter Länge (z. B. Ländercodes). <strong>Variabel (VARCHAR(n)):</strong> Speichereffizient für unterschiedlich lange Texte (Namen, Beschreibungen). Beide sind Standard-SQL-Typen. :contentReference[oaicite:12]{index=12}</p>
<ul>
  <li><strong>Zeichencodierung:</strong> Unicode/UTF für internationale Texte und Sonderzeichen verwenden (Programmiersprachen/Frameworks unterstützen Unicode-Strings). :contentReference[oaicite:13]{index=13}</li>
</ul>

<h2>
  <span style="background-color:#64748b; color:white; padding:4px 8px; border-radius:12px;">Lernfeld 8</span>
  Boolesche Werte (BOOLEAN)
</h2>
<p><strong>Zweck:</strong> Zustände/Flags (aktiv/inaktiv, genehmigt/abgelehnt). <strong>Eigenschaften:</strong> Wertebereich <em>true/false</em>, in SQL als <code>BOOLEAN</code>; in Sprachen als <em>boolean</em>. :contentReference[oaicite:14]{index=14} :contentReference[oaicite:15]{index=15}</p>

<h2>
  <span style="background-color:#f97316; color:white; padding:4px 8px; border-radius:12px;">Lernfeld 8</span>
  BLOB (Binary Large Object)
</h2>
<p><strong>Zweck:</strong> Speicherung großer binärer Inhalte: Bilder, Audio, Video, Dokumente. In Datenbanklösungen wird dies als unstrukturierte Datenkategorie betrachtet (Bild, Audio, Video, Grafiken, Landkarten u. a.). :contentReference[oaicite:16]{index=16}</p>
<ul>
  <li><strong>Praxis:</strong> Entweder als <em>BLOB</em> in der DB oder als Datei/Objekt mit Pfad/URL in der DB; Wahl abhängig von Zugriffsmustern, Backup, Skalierung.</li>
</ul>

<h2>
  <span style="background-color:#e11d48; color:white; padding:4px 8px; border-radius:12px;">Lernfeld 5</span>
  Geokoordinaten (Breiten-/Längengrad)
</h2>
<p><strong>Zweck:</strong> Positionen, Routen, Flächenbezüge. <strong>Speicherung:</strong> numerisch als <em>Paar</em> (Breite, Länge) mit passenden <code>DECIMAL</code>-Präzisionen; in datenbankgestützten Lösungen werden Koordinaten oft zusammen mit Ortsentitäten modelliert. :contentReference[oaicite:17]{index=17} :contentReference[oaicite:18]{index=18}</p>
<ul>
  <li><strong>Beispiel:</strong> Ortsverwaltung/Standorte; Karten und Satellitenbilder fallen in den Bereich unstrukturierter Daten, die mit Koordinaten verknüpft werden. :contentReference[oaicite:19]{index=19}</li>
</ul>

<h2>
  <span style="background-color:#059669; color:white; padding:4px 8px; border-radius:12px;">Lernfeld 5</span>
  Entscheidungshilfen für die Typwahl
</h2>
<ul>
  <li><strong>Exakt vs. Näherungswert:</strong> Geldbeträge ⇒ <code>DECIMAL</code>; Messwerte ⇒ <code>FLOAT/DOUBLE</code> (mit Toleranzen). :contentReference[oaicite:20]{index=20} :contentReference[oaicite:21]{index=21}</li>
  <li><strong>Länge & Kodierung:</strong> Sprach-/Sonderzeichen ⇒ Unicode-Strings; <code>VARCHAR</code> für variable, <code>CHAR</code> für feste Längen. :contentReference[oaicite:22]{index=22} :contentReference[oaicite:23]{index=23}</li>
  <li><strong>Zeitbezug:</strong> Geschäftsvorfälle ⇒ <code>DATE/TIME/TIMESTAMP</code> + DB-Funktionen. :contentReference[oaicite:24]{index=24}</li>
  <li><strong>Binärdaten:</strong> Große Dateien ⇒ BLOB oder externe Objektablage mit Referenz. :contentReference[oaicite:25]{index=25}</li>
  <li><strong>Geodaten:</strong> Koordinaten exakt als <code>DECIMAL</code> speichern; Genauigkeitsanforderungen (z. B. 5–7 Dezimalstellen) fachlich festlegen. :contentReference[oaicite:26]{index=26}</li>
</ul>

<h2>
  <span style="background-color:#1d4ed8; color:white; padding:4px 8px; border-radius:12px;">Lernfeld 8</span>
  Testperspektive: Grenzwerte & Äquivalenzklassen für Datentypen
</h2>
<p>Bei Eingaben für Zahlen, Datumswerte und Längenbegrenzungen sind Testentwurfstechniken wie <strong>Äquivalenzklassenbildung</strong> und <strong>Grenzwertanalyse</strong> sinnvoll (z. B. Minimal-/Maximalwerte von Integer, maximale Textlänge, ungültige Datumsangaben). :contentReference[oaicite:27]{index=27}</p>

<h2>Beispiele & Patterns</h2>
<ul>
  <li><strong>BOOLEAN:</strong> <em>is_active</em>, <em>has_consent</em>. :contentReference[oaicite:28]{index=28}</li>
  <li><strong>INTEGER/BIGINT:</strong> <em>id</em>, <em>anzahl</em>, <em>version</em>. :contentReference[oaicite:29]{index=29}</li>
  <li><strong>DECIMAL(n,m):</strong> <em>preis</em>, <em>saldo</em>. :contentReference[oaicite:30]{index=30}</li>
  <li><strong>FLOAT/DOUBLE:</strong> <em>temperatur</em>, <em>sensorwert</em>. :contentReference[oaicite:31]{index=31}</li>
  <li><strong>DATE/TIME/TIMESTAMP:</strong> <em>geburtsdatum</em>, <em>erstellt_am</em>, <em>termin_zeit</em>. :contentReference[oaicite:32]{index=32}</li>
  <li><strong>CHAR/VARCHAR:</strong> <em>plz</em> (CHAR), <em>name</em> (VARCHAR). :contentReference[oaicite:33]{index=33}</li>
  <li><strong>BLOB:</strong> <em>produktbild</em>, <em>vertrag_pdf</em>, <em>video</em>. :contentReference[oaicite:34]{index=34}</li>
  <li><strong>Geokoordinaten (DECIMAL,DECIMAL):</strong> <em>latitude</em>, <em>longitude</em>. :contentReference[oaicite:35]{index=35}</li>
</ul>

<h2>Quelle</h2>
<p>„<em>Software zur Verwaltung von Daten anpassen</em>“, <strong>Lernfeld 5</strong> (SQL-Datentypen, Datums-/Zeitfunktionen, Texttypen). :contentReference[oaicite:36]{index=36} :contentReference[oaicite:37]{index=37}</p>
<p>„<em>Daten systemübergreifend bereitstellen</em>“, <strong>Lernfeld 8</strong> (Programmiersprachen-Datentypen, unstrukturierte Daten/Bild/Audio/Video, Datenmodellierung). :contentReference[oaicite:38]{index=38} :contentReference[oaicite:39]{index=39} :contentReference[oaicite:40]{index=40}</p>
<p>„<em>ISTQB® Certified Tester – Foundation Level</em>“ (Testentwurfstechniken: Äquivalenzklassen, Grenzwertanalyse). :contentReference[oaicite:41]{index=41}</p>
