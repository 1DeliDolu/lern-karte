<h1>UML – Anwendungsfalldiagramme, Klassendiagramm, Aktivitätsdiagramm</h1>

<h2>
  Überblick & Verortung in den Lernfeldern
  <span style="background-color:#8E24AA; color:white; padding:4px 8px; border-radius:12px; margin-left:8px;">Lernfeld 8</span>
  <span style="background-color:#1E88E5; color:white; padding:4px 8px; border-radius:12px; margin-left:6px;">Lernfeld 5</span>
</h2>
<p>Die <em>Unified Modeling Language (UML)</em> ist eine standardisierte Modellierungssprache zur Spezifikation, Visualisierung, Konstruktion und Dokumentation von Softwaresystemen. Sie bietet ein Spektrum von Diagrammtypen, mit denen Struktur- und Verhaltensaspekte präzise beschrieben werden. In der Ausbildung sind insbesondere <strong>Anwendungsfalldiagramme</strong> (Use Cases), das <strong>Klassendiagramm</strong> und das <strong>Aktivitätsdiagramm</strong> prüfungsrelevant. </p>
<p><strong>Quelle:</strong> UML-Überblick und Einordnung (LF8, Kap. 3.3.3; LF5, UML-Einführung). </p>

<h2>
  Anwendungsfalldiagramme (Use Case)
  <span style="background-color:#3949AB; color:white; padding:4px 8px; border-radius:12px; margin-left:8px;">Lernfeld 8</span>
</h2>
<p>Anwendungsfalldiagramme strukturieren die <strong>Funktionalität aus Anwendersicht</strong>. Sie zeigen, welche <em>Akteure</em> (Menschen oder externe Systeme) mit dem System über welche <em>Anwendungsfälle</em> interagieren. Entscheidend ist, <em>was</em> das System nach außen anbietet – nicht, <em>wie</em> es implementiert ist. :contentReference[oaicite:2]{index=2}</p>

<h3>
  Notationselemente & Beziehungen
  <span style="background-color:#5E35B1; color:white; padding:2px 8px; border-radius:12px; margin-left:8px;">LF8</span>
</h3>
<ul>
  <li><strong>Systemgrenze</strong>: Rechteck mit Systemname; umfasst alle bereitgestellten Anwendungsfälle. :contentReference[oaicite:3]{index=3}</li>
  <li><strong>Akteur (Actor)</strong>: Externer Benutzer oder Fremdsystem; Beziehung zu Anwendungsfällen via <em>Assoziation</em>. :contentReference[oaicite:4]{index=4}</li>
  <li><strong>Anwendungsfall (Use Case)</strong>: Vom System angebotene Funktion/Interaktion. :contentReference[oaicite:5]{index=5}</li>
  <li><strong>Beziehungen</strong>:
    <ul>
      <li><em>Assoziation</em>: Verknüpft Akteur ↔ Anwendungsfall. :contentReference[oaicite:6]{index=6}</li>
      <li><em>«include»</em>: Unbedingtes Einbinden eines Anwendungsfalls in einen anderen (Wiederverwendung). :contentReference[oaicite:7]{index=7}</li>
      <li><em>«extend»</em>: Bedingte Erweiterung (optional; mit Bedingung dokumentierbar). :contentReference[oaicite:8]{index=8}</li>
      <li><em>Generalisierung</em>: Vererbung/Hierarchie bei Akteuren oder Anwendungsfällen. :contentReference[oaicite:9]{index=9}</li>
    </ul>
  </li>
</ul>

<h3>
  Beispiel & Prüfungslogik
  <span style="background-color:#5E35B1; color:white; padding:2px 8px; border-radius:12px; margin-left:8px;">LF8</span>
</h3>
<p><em>Beispiel „Zimmerreservierung“:</em> Akteur <strong>Kunde</strong> und externes System <strong>Bank</strong>; Anwendungsfälle <em>„Zimmer reservieren“</em>, <em>„Verfügbarkeit prüfen“</em>, <em>„Zahlungsmethode eingeben“</em>, <em>„Kreditkarte prüfen“</em>. <em>«include»</em>-Beziehungen modellieren Pflichtschritte; eine Bedingung (z.&nbsp;B. Kreditkartenzahlung) kann eine <em>«extend»</em>-Erweiterung auslösen. :contentReference[oaicite:10]{index=10}</p>
<ul>
  <li><strong>Typische Aufgaben:</strong> Systemgrenze korrekt ziehen, Akteure identifizieren, Pflicht-/Optionsteile über <em>include/extend</em> trennen. :contentReference[oaicite:11]{index=11}</li>
</ul>
<p><strong>Quelle:</strong> Notation & Beispiel (LF8, Kap. 3.3.4). </p>

<h2>
  Klassendiagramm
  <span style="background-color:#2E7D32; color:white; padding:4px 8px; border-radius:12px; margin-left:8px;">Lernfeld 8</span>
</h2>
<p>Das Klassendiagramm ist der <strong>wichtigste Strukturdiagrammtyp</strong> der UML. Es beschreibt Klassen mit Attributen/Operationen, deren Sichtbarkeiten, Datentypen und die Beziehungen zwischen Klassen (z.&nbsp;B. Assoziation, Aggregation, Komposition, Vererbung) – als <em>Bauplan</em> für spätere Objekte. :contentReference[oaicite:13]{index=13}</p>

<h3>
  Klassensyntax & Sichtbarkeiten
  <span style="background-color:#1B5E20; color:white; padding:2px 8px; border-radius:12px; margin-left:8px;">LF8</span>
</h3>
<ul>
  <li><strong>Dreiteiliger Kasten:</strong> Klassenname | Attribute (mit Typ) | Operationen (Signatur, Rückgabetyp). :contentReference[oaicite:14]{index=14}</li>
  <li><strong>Sichtbarkeiten:</strong> <code>+</code> public, <code>-</code> private, <code>#</code> protected; Schlüsselwörter wie <em>interface</em>, <em>abstract</em> möglich. :contentReference[oaicite:15]{index=15}</li>
</ul>

<h3>
  Beziehungen & Kardinalitäten
  <span style="background-color:#1B5E20; color:white; padding:2px 8px; border-radius:12px; margin-left:8px;">LF8</span>
</h3>
<ul>
  <li><strong>Assoziation</strong> (gerichtet/ungerichtet): Allgemeine Beziehung zwischen Objekten. :contentReference[oaicite:16]{index=16}</li>
  <li><strong>Aggregation</strong> (leere Raute): <em>Teil–Ganzes</em> mit unabhängiger Existenz der Teile. :contentReference[oaicite:17]{index=17}</li>
  <li><strong>Komposition</strong> (gefüllte Raute): Starke <em>Teil–Ganzes</em>-Beziehung; Teile existieren nicht ohne Ganzes. :contentReference[oaicite:18]{index=18}</li>
  <li><strong>Vererbung</strong> (offenes Dreieck): Ober-/Unterklassen; bei Interfaces gestrichelte Linie. </li>
  <li><strong>Multiplizitäten</strong> (z.&nbsp;B. <code>0..*</code>): Anzahl der möglichen Objektbeziehungen. :contentReference[oaicite:20]{index=20}</li>
</ul>
<p><em>Didaktischer Hinweis:</em> Vom <strong>Domänenbegriff</strong> zur Klasse; Attribute/Operationen konsistent zur Problemstellung benennen; Beziehungen auf Minimalität prüfen. :contentReference[oaicite:21]{index=21}</p>
<p><strong>Quelle:</strong> Klassendiagramm – Überblick, Syntax und Beziehungen (LF8, Kap. 3.3.5). </p>

<h2>
  Aktivitätsdiagramm
  <span style="background-color:#F4511E; color:white; padding:4px 8px; border-radius:12px; margin-left:8px;">Lernfeld 8</span>
</h2>
<p>Aktivitätsdiagramme beschreiben das <strong>Verhalten</strong> eines Systems, einer Klasse oder Komponente als Ablauf von <em>Aktionen</em> mit Kontrollflüssen. Sie sind flexibel und eignen sich für Geschäftsprozesse, Use-Case-Flows sowie algorithmische Kontrollstrukturen (Sequenz, Verzweigung, Schleife, Parallelität). :contentReference[oaicite:23]{index=23}</p>

<h3>
  Notation & Muster der Kontrollflüsse
  <span style="background-color:#E64A19; color:white; padding:2px 8px; border-radius:12px; margin-left:8px;">LF8</span>
</h3>
<ul>
  <li><strong>Start-/Endknoten</strong>, <strong>Aktion</strong>, <strong>Kontrollflusskante</strong>. Entscheidungen (<em>Decision</em>) mit <strong>Guards</strong> und <em>Merge</em> zur Zusammenführung. :contentReference[oaicite:24]{index=24}</li>
  <li><strong>Schleifen</strong>: Rückführung über eine Entscheidung (z.&nbsp;B. <em>while</em>), optional mit Zähler-Initialisierung/Update als Aktionen. :contentReference[oaicite:25]{index=25}</li>
  <li><strong>Parallelität</strong>: <em>Fork</em> (Aufspaltung paralleler Zweige) und <em>Join</em> (Synchronisation). :contentReference[oaicite:26]{index=26}</li>
</ul>
<p><strong>Quelle:</strong> Aktivitätsdiagramm – Zweck & Elemente (LF8, UML-Diagrammübersicht). :contentReference[oaicite:27]{index=27}</p>

<h2>
  Zusammenspiel der Diagramme im Entwurf
  <span style="background-color:#00897B; color:white; padding:4px 8px; border-radius:12px; margin-left:8px;">Lernfeld 8</span>
  <span style="background-color:#1E88E5; color:white; padding:4px 8px; border-radius:12px; margin-left:6px;">Lernfeld 5</span>
</h2>
<ul>
  <li><strong>Use Case → Aktivität:</strong> Für zentrale Anwendungsfälle wird der Ablauf als Aktivitätsdiagramm verfeinert (Haupt-/Alternativflüsse, Bedingungen als Guards). :contentReference[oaicite:28]{index=28}</li>
  <li><strong>Aktivität → Klassen:</strong> Aus Aktionen, Daten und Verantwortlichkeiten ergeben sich Klassen, Attribute und Operationen; Beziehungen folgen aus Interaktionen und Datenflüssen. :contentReference[oaicite:29]{index=29}</li>
  <li><strong>Rückkopplung:</strong> Unklare Use-Case-Schnitte oder überladene Klassen werden über Diagramm-Review bereinigt (Bezeichnungen, Kardinalitäten, include/extend prüfen). </li>
</ul>
<p><strong>Quelle:</strong> UML-Diagramme in Kombination (LF8 – Überblick und Detailkapitel). </p>

<h2>
  Häufige Fehler & gute Praxis (prüfungsrelevant)
  <span style="background-color:#546E7A; color:white; padding:4px 8px; border-radius:12px; margin-left:8px;">LF8</span>
</h2>
<ul>
  <li><strong>Use Case:</strong> Systemgrenze vergessen, technische Implementierungsdetails im Diagramm, <em>extend</em> statt <em>include</em> (oder umgekehrt) falsch verwendet. </li>
  <li><strong>Klassen:</strong> Attribut-/Operationssignaturen ohne Typen, Sichtbarkeiten weggelassen, Komposition vs. Aggregation verwechselt, Kardinalitäten unplausibel. :contentReference[oaicite:33]{index=33}</li>
  <li><strong>Aktivitäten:</strong> Guards unpräzise („prüfen“) statt booleaner Ausdrücke, fehlende Zusammenführungen nach Verzweigungen, unklare Schleifenrückführung. :contentReference[oaicite:34]{index=34}</li>
</ul>
<p><strong>Quelle:</strong> Notationsregeln und Diagrammübersicht (LF8). :contentReference[oaicite:35]{index=35}</p>

<h2>
  Prüfungs-Checkliste
  <span style="background-color:#6A1B9A; color:white; padding:4px 8px; border-radius:12px; margin-left:8px;">AP-2</span>
</h2>
<ul>
  <li><strong>Anwendungsfalldiagramm:</strong> Akteure, Systemgrenze, Use Cases, korrekte <em>include/extend</em>, klare Labels. :contentReference[oaicite:36]{index=36}</li>
  <li><strong>Klassendiagramm:</strong> Drei Bereiche (Name/Attribute/Operationen), Sichtbarkeiten, Typen, Beziehungen inkl. Multiplizität & richtiger Rauten/Dreiecke. </li>
  <li><strong>Aktivitätsdiagramm:</strong> Start/Ende, Aktionen, Entscheidungen mit Guards, Merge, Fork/Join für Parallelität, eindeutige Schleifenführung. :contentReference[oaicite:38]{index=38}</li>
</ul>
<p><strong>Quelle:</strong> Zusammenfassung gemäß LF8/LF5 (UML-Einführung und Detailkapitel). </p>
