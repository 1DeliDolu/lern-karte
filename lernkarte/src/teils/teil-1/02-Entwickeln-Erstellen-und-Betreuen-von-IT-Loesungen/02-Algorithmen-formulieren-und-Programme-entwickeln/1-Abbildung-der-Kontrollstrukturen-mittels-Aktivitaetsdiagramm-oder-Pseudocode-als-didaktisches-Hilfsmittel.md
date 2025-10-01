<h1>Algorithmen formulieren und Programme entwickeln – Abbildung der Kontrollstrukturen mittels Aktivitätsdiagramm oder Pseudocode als didaktisches Hilfsmittel</h1>

<h2>
  Überblick & Verortung
  <span style="background-color:#1E88E5; color:white; padding:4px 8px; border-radius:12px; margin-left:8px;">Lernfeld 5</span>
  <span style="background-color:#8E24AA; color:white; padding:4px 8px; border-radius:12px; margin-left:6px;">Lernfeld 8</span>
  <span style="background-color:#FB8C00; color:white; padding:4px 8px; border-radius:12px; margin-left:6px;">Lernfeld 11a</span>
  <span style="background-color:#00897B; color:white; padding:4px 8px; border-radius:12px; margin-left:6px;">Lernfeld 10a</span>
  <span style="background-color:#455A64; color:white; padding:4px 8px; border-radius:12px; margin-left:6px;">ISTQB CTFL</span>
</h2>
<p>Kontrollstrukturen (Sequenz, Selektion, Iteration) sind die elementaren Bausteine strukturierter Programme. Für Analyse, Entwurf und Lehre lassen sie sich <em>textuell</em> über Pseudocode oder <em>grafisch</em> über UML-Aktivitätsdiagramme präzise darstellen. So entsteht eine durchgängige Brücke von der Anforderung über die Logik bis hin zur Implementierung und zum Testentwurf (White-Box-Bezug).</p>
<p><strong>Quelle:</strong> Kontrollstrukturen & Pseudocode (LF5); UML-Aktivitätsdiagramm (LF8, LF11a); Prozessanalyse mit UML-Aktivitäten (LF10a); White-Box-Überdeckung & Reviews auf Pseudocode (ISTQB CTFL). </p>

<h2>
  Kontrollstrukturen im Überblick: Sequenz, Selektion, Iteration
  <span style="background-color:#1E88E5; color:white; padding:4px 8px; border-radius:12px; margin-left:8px;">Lernfeld 5</span>
</h2>
<p><strong>Sequenz</strong> führt Anweisungen linear aus. <strong>Selektion</strong> entscheidet bedingt (<em>if/else</em>, <em>switch</em>). <strong>Iteration</strong> wiederholt Abläufe – kopfgesteuert (<em>while</em>), fußgesteuert (<em>do-while</em>, mind. ein Durchlauf) oder als <strong>Zählschleife</strong> (<em>for</em>, feste Wiederholungszahl). Diese didaktische Dreiteilung macht Laufbedingungen, Abbruchkriterien und typische Off-by-One-Fehler explizit. :contentReference[oaicite:1]{index=1}</p>
<ul>
  <li><em>Kopfgesteuerte Schleife:</em> Prüfung am Anfang; kann 0-mal laufen. :contentReference[oaicite:2]{index=2}</li>
  <li><em>Fußgesteuerte Schleife:</em> Prüfung am Ende; läuft mindestens 1-mal (in Python nicht direkt vorhanden, konzeptionell wichtig). :contentReference[oaicite:3]{index=3}</li>
  <li><em>Zählschleife:</em> definierte Wiederholungszahl mit Laufvariable; ideal zur Verdeutlichung der Inkrementlogik. :contentReference[oaicite:4]{index=4}</li>
</ul>
<p><strong>Quelle:</strong> Systematik der Schleifen und Beispiele (LF5). </p>

<h2>
  Pseudocode als didaktisches Hilfsmittel
  <span style="background-color:#1E88E5; color:white; padding:4px 8px; border-radius:12px; margin-left:8px;">Lernfeld 5</span>
  <span style="background-color:#455A64; color:white; padding:4px 8px; border-radius:12px; margin-left:6px;">ISTQB CTFL</span>
</h2>
<p>Pseudocode beschreibt Algorithmen <em>technologie- und syntaxneutral</em>. Er fokussiert auf Kontroll- und Datenfluss, minimiert Syntaxrauschen und eignet sich dadurch für Unterricht, Reviews und frühe Testentwürfe. Gute Praxis: sprechende Bezeichner, konsistente Einrückung, eindeutige Wächterbedingungen (<em>guards</em>), klarer Einstieg/Abschluss und sparsamer Einsatz von Early Returns.</p>
<p>Im ISTQB-Lehrplan wird Pseudocode explizit als Artefakt genannt, das sich für White-Box-Reviews und „Dry Runs“ eignet; Zweig-/Pfadüberlegungen lassen sich direkt daraus ableiten. :contentReference[oaicite:6]{index=6}</p>
<p><strong>Quelle:</strong> Pseudocode-Aufgaben & Algorithmik (LF5); White-Box-Bezug inkl. Zweigüberdeckung (ISTQB CTFL). </p>

<h2>
  UML-Aktivitätsdiagramm: Notation und Abbildung von Kontrollstrukturen
  <span style="background-color:#8E24AA; color:white; padding:4px 8px; border-radius:12px; margin-left:8px;">Lernfeld 8</span>
  <span style="background-color:#FB8C00; color:white; padding:4px 8px; border-radius:12px; margin-left:6px;">Lernfeld 11a</span>
</h2>
<p>Aktivitätsdiagramme modellieren Verhalten als <em>Aktionen</em> verbunden durch <em>Kanten</em> (Kontrollfluss). Zentrale Symbole: <em>Start/Ende</em>, <em>Ablaufende</em>, <em>Aktion</em>, <em>Verzweigung</em> (mit Guard), <em>Zusammenführung</em>, <em>Aufspaltung</em> (Fork) und <em>Synchronisation</em> (Join). Damit lassen sich Sequenzen, Verzweigungen, Schleifen und Parallelität präzise darstellen. :contentReference[oaicite:8]{index=8}</p>
<ul>
  <li><strong>Selektion (if/else):</strong> Verzweigung mit Guards, danach Zusammenführung. :contentReference[oaicite:9]{index=9}</li>
  <li><strong>Iteration (while/for):</strong> Entscheidungsknoten + Rückführungskante (Bedingung als Guard); bei <em>for</em> Initialisierung/Update als separate Aktionen. :contentReference[oaicite:10]{index=10}</li>
  <li><strong>Parallelität:</strong> Fork startet parallele Zweige; Join synchronisiert sie sicherheitskritisch. :contentReference[oaicite:11]{index=11}</li>
</ul>
<p>LF8 rahmt die UML-Anwendung, LF11a zeigt eine kompakte Notationsübersicht und Beispielprozesse („Prozess: Liegeplatz mieten“) – ideal, um Kontrollflussmuster 1:1 zu übertragen. </p>
<p><strong>Quelle:</strong> UML-Kontext & Diagrammfamilie (LF8); Notation & Beispielaktivitäten (LF11a). </p>

<h2>
  Didaktischer Workflow: Von Anforderung zu Pseudocode, Aktivitätsdiagramm und Test
  <span style="background-color:#00897B; color:white; padding:4px 8px; border-radius:12px; margin-left:8px;">Lernfeld 10a</span>
  <span style="background-color:#FB8C00; color:white; padding:4px 8px; border-radius:12px; margin-left:6px;">Lernfeld 11a</span>
  <span style="background-color:#455A64; color:white; padding:4px 8px; border-radius:12px; margin-left:6px;">ISTQB CTFL</span>
</h2>
<ul>
  <li><strong>Prozess aufnehmen und visualisieren:</strong> Ist-Ablauf erfassen (Schnittstellen, Informationsfluss) und z. B. als UML-Aktivitätsdiagramm darstellen. :contentReference[oaicite:14]{index=14}</li>
  <li><strong>Pseudocode formulieren:</strong> aus der Prozesssicht die Programm-Logik abstrahieren (Sequenz/Selektion/Iteration klar sichtbar machen). :contentReference[oaicite:15]{index=15}</li>
  <li><strong>Aktivitätsdiagramm verfeinern:</strong> Guards, Rückführungen, Fork/Join exakt setzen; Konsistenz mit Pseudocode prüfen. :contentReference[oaicite:16]{index=16}</li>
  <li><strong>Testfälle ableiten:</strong> Zweig-/Pfadüberdeckung und Grenz-/Abbruchfälle definieren; statische Reviews/Dry-Runs auf Pseudocode. </li>
</ul>
<p><strong>Quelle:</strong> Prozessanalyse & Modellwahl (LF10a); UML-Aktivitäten (LF11a); White-Box-Verfahren & Lernziele (ISTQB CTFL). </p>

<h2>
  Beispiel 1 – Bedingte Verzweigung (if/else)
  <span style="background-color:#1E88E5; color:white; padding:4px 8px; border-radius:12px; margin-left:8px;">Lernfeld 5</span>
  <span style="background-color:#FB8C00; color:white; padding:4px 8px; border-radius:12px; margin-left:6px;">Lernfeld 11a</span>
  <span style="background-color:#455A64; color:white; padding:4px 8px; border-radius:12px; margin-left:6px;">ISTQB CTFL</span>
</h2>
<p><strong>Pseudocode:</strong></p>
<pre style="background:#f7f7f7; padding:12px; border-radius:8px; overflow:auto;">EINGABE x
WENN x &gt;= 0 DANN
    AUSGABE "nicht negativ"
SONST
    AUSGABE "negativ"
ENDE WENN</pre>
<ul>
  <li><strong>Aktivitätsdiagramm:</strong> Aktion „Eingabe x“ → Verzweigung mit Guards <code>[x&nbsp;&gt;=&nbsp;0]</code>/<code>[sonst]</code> → Aktionen „Ausgabe …“ → Zusammenführung → Ende. :contentReference[oaicite:19]{index=19}</li>
  <li><strong>Testentwurf:</strong> Zweigabdeckung: mind. zwei Fälle (wahr/falsch), z. B. <code>x=0</code> und <code>x=-1</code>. :contentReference[oaicite:20]{index=20}</li>
</ul>
<p><strong>Quelle:</strong> Verzweigungen (LF5); Notationsmapping (LF11a); Zweigtest (ISTQB CTFL). </p>

<h2>
  Beispiel 2 – Zählschleife (for)
  <span style="background-color:#1E88E5; color:white; padding:4px 8px; border-radius:12px; margin-left:8px;">Lernfeld 5</span>
  <span style="background-color:#8E24AA; color:white; padding:4px 8px; border-radius:12px; margin-left:6px;">Lernfeld 8</span>
</h2>
<p><strong>Pseudocode:</strong></p>
<pre style="background:#f7f7f7; padding:12px; border-radius:8px; overflow:auto;">FÜR i VON 1 BIS 10
    AUSGABE i
ENDE FÜR</pre>
<ul>
  <li><strong>Aktivitätsdiagramm:</strong> „i:=1“ → Entscheidung <code>[i ≤ 10]</code> → „Ausgabe i“ → „i:=i+1“ → Rücksprung; bei <code>[i &gt; 10]</code> Ende. :contentReference[oaicite:22]{index=22}</li>
  <li><strong>Didaktik:</strong> Initialisierung/Bedingung/Inkrement trennen; Off-by-One sichtbar machen. :contentReference[oaicite:23]{index=23}</li>
</ul>
<p><strong>Quelle:</strong> Zählschleifen (LF5); Entscheidung + Rückführung (LF11a/LF8). </p>

<h2>
  Beispiel 3 – Eingabeschleife (while) mit Abbruchkriterium
  <span style="background-color:#1E88E5; color:white; padding:4px 8px; border-radius:12px; margin-left:8px;">Lernfeld 5</span>
  <span style="background-color:#FB8C00; color:white; padding:4px 8px; border-radius:12px; margin-left:6px;">Lernfeld 11a</span>
</h2>
<p><strong>Pseudocode:</strong></p>
<pre style="background:#f7f7f7; padding:12px; border-radius:8px; overflow:auto;">EINGABE wort
SOLANGE wort ≠ "STOP"
    VERARBEITE(wort)
    EINGABE wort
ENDE SOLANGE</pre>
<ul>
  <li><strong>Aktivitätsdiagramm:</strong> „Eingabe wort“ → Entscheidung <code>[wort ≠ 'STOP']</code> → bei wahr „VERARBEITE“ → Rücksprung; bei falsch Ende. :contentReference[oaicite:25]{index=25}</li>
  <li><strong>Testentwurf:</strong> Zwei Pfade (0-Durchlauf / ≥1-Durchlauf) plus repräsentative Eingaben. :contentReference[oaicite:26]{index=26}</li>
</ul>
<p><strong>Quelle:</strong> Kopfgesteuerte Schleifen (LF5); Notation Entscheidung/Rücksprung (LF11a); White-Box-Ableitung (ISTQB CTFL). </p>

<h2>
  Beispiel 4 – Parallelität mit Fork/Join (optional)
  <span style="background-color:#8E24AA; color:white; padding:4px 8px; border-radius:12px; margin-left:8px;">Lernfeld 8</span>
  <span style="background-color:#FB8C00; color:white; padding:4px 8px; border-radius:12px; margin-left:6px;">Lernfeld 11a</span>
</h2>
<p>Parallele Arbeitsschritte (z.&nbsp;B. „Validierung“ und „Preisberechnung“) werden nach einer <em>Aufspaltung</em> parallel begonnen und über eine <em>Synchronisation</em> wieder zusammengeführt, bevor eine nachfolgende Aktion (z.&nbsp;B. „Rechnung erstellen“) startet. Das macht Abhängigkeiten und kritische Synchronisationspunkte transparent. :contentReference[oaicite:28]{index=28}</p>
<p><strong>Quelle:</strong> Fork/Join-Notation und Einsatz (LF11a/LF8). </p>

<h2>
  Typische Stolpersteine & gute Praxis
  <span style="background-color:#455A64; color:white; padding:4px 8px; border-radius:12px; margin-left:8px;">ISTQB CTFL</span>
  <span style="background-color:#1E88E5; color:white; padding:4px 8px; border-radius:12px; margin-left:6px;">Lernfeld 5</span>
  <span style="background-color:#FB8C00; color:white; padding:4px 8px; border-radius:12px; margin-left:6px;">Lernfeld 11a</span>
</h2>
<ul>
  <li><strong>Unpräzise Guards:</strong> Bedingungen als klare Booleans formulieren (z. B. <code>[saldo &gt; 0]</code> statt „Saldo prüfen“). :contentReference[oaicite:30]{index=30}</li>
  <li><strong>Fehlende Zusammenführung:</strong> Nach alternativen Zweigen konvergieren, sonst entstehen hängende Pfade. :contentReference[oaicite:31]{index=31}</li>
  <li><strong>Endlos-/Nullschleifen:</strong> Laufvariablen, Abbruch und Invarianten explizit machen; Off-by-One testen. :contentReference[oaicite:32]{index=32}</li>
  <li><strong>Testabdeckung:</strong> Zweig-/Pfadüberdeckung aus Pseudocode/Diagramm systematisch ableiten; nicht nur „Happy Path“. </li>
</ul>
<p><strong>Quelle:</strong> White-Box-Prinzipien & Lernziele (ISTQB CTFL); Schleifen/Verzweigungen (LF5); Notationsregeln (LF11a). </p>

<h2>
  Prüfungsrelevante Stichworte (AP-2)
  <span style="background-color:#1E88E5; color:white; padding:4px 8px; border-radius:12px; margin-left:8px;">Lernfeld 5</span>
  <span style="background-color:#8E24AA; color:white; padding:4px 8px; border-radius:12px; margin-left:6px;">Lernfeld 8</span>
  <span style="background-color:#FB8C00; color:white; padding:4px 8px; border-radius:12px; margin-left:6px;">Lernfeld 11a</span>
  <span style="background-color:#455A64; color:white; padding:4px 8px; border-radius:12px; margin-left:6px;">ISTQB CTFL</span>
</h2>
<ul>
  <li><strong>Pseudocode</strong>, <strong>Struktogramm</strong>, <strong>Entscheidungstabelle</strong>, <strong>Kontrollstruktur</strong> (Sequenz/Selektion/Iteration). :contentReference[oaicite:35]{index=35}</li>
  <li><strong>UML-Aktivitätsdiagramm</strong>: Start/Ende, Ablaufende, Aktion, Kante, Verzweigung, Zusammenführung, Fork/Join, Guard. :contentReference[oaicite:36]{index=36}</li>
  <li><strong>Testbezug</strong>: Anweisungs-/Zweigüberdeckung, Dry-Runs/Reviews auf Pseudocode. </li>
</ul>
<p><strong>Quelle:</strong> Zusammenstellung gemäß LF5/LF8/LF11a/ISTQB CTFL. </p>
