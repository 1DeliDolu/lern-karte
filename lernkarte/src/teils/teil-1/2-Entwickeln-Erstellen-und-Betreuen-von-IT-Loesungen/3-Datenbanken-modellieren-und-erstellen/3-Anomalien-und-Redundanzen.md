<h1>Anomalien und Redundanzen erkennen — Ursachen, Erkennungsmethoden und Gegenmaßnahmen</h1>

<h2>
  <span style="background-color:#2563eb; color:white; padding:4px 8px; border-radius:12px;">Lernfeld 5</span>
  Einordnung & Prüfungsbezug
</h2>
<p>In relationalen Datenbanken führen doppelt gespeicherte Informationen (<em>Datenredundanz</em>) häufig zu widersprüchlichen Zuständen (<em>Dateninkonsistenz</em>) und damit zu <strong>Datenanomalien</strong>. Ziel ist es, Redundanzen zu minimieren, Konsistenz zu sichern und damit die Qualität des Datenbestands zu erhöhen. :contentReference[oaicite:0]{index=0}</p>
<p>Die <strong>Normalisierung</strong> ist dabei das zentrale Verfahren zur Reduktions– und Präventionsarbeit: Sie verringert Redundanzen und hilft, Einfüge-, Änderungs- und Löschanomalien zu vermeiden. :contentReference[oaicite:1]{index=1}</p>

<h2>
  <span style="background-color:#16a34a; color:white; padding:4px 8px; border-radius:12px;">Lernfeld 5</span>
  Grundbegriffe: Redundanz, Inkonsistenz, Anomalie
</h2>
<p><strong>Datenredundanz</strong> liegt vor, wenn dieselbe Information mehrfach gespeichert wird — explizit (z. B. doppelte Stammdaten) oder implizit (z. B. ein <em>Gesamtbetrag</em>, der sich aus <em>Preis × Anzahl</em> ohnehin berechnen ließe). Speichermehrbedarf ist dabei zweitrangig; kritisch ist die Gefahr widersprüchlicher Werte bei Änderungen. :contentReference[oaicite:2]{index=2}</p>
<p><strong>Dateninkonsistenz</strong> bezeichnet die Widerspruchsfreiheit verletzende Zustände; sie resultiert u. a. aus nicht synchron gepflegten Redundanzen oder — im Mehrbenutzerbetrieb — aus parallelem Zugriff. :contentReference[oaicite:3]{index=3}</p>
<p><strong>Datenanomalien</strong> sind konkrete Fehlersituationen, die aus Redundanz und unzureichenden Strukturen entstehen (siehe folgende Typen). :contentReference[oaicite:4]{index=4}</p>

<h2>
  <span style="background-color:#9333ea; color:white; padding:4px 8px; border-radius:12px;">Lernfeld 5</span>
  Typische Anomalien (mit Beispielen)
</h2>
<ul>
  <li><strong>Änderungsanomalie:</strong> Ein Wert ist mehrfach gespeichert; eine Änderung wird nicht überall nachvollzogen (z. B. Namensänderung eines Mitarbeiters nur in einem von mehreren Vorkommen). :contentReference[oaicite:5]{index=5}</li>
  <li><strong>Einfügeanomalie:</strong> Neue Daten lassen sich nur zusammen mit fachlich <em>anderen</em> Daten speichern (z. B. ein Mitarbeiter kann nur mit bereits existierender Abteilung angelegt werden; sonst „Dummy“-Werte nötig). :contentReference[oaicite:6]{index=6}</li>
  <li><strong>Löschanomalie:</strong> Beim Entfernen einer Information gehen unbeabsichtigt <em>weitere</em> Informationen verloren (z. B. Löschen einer Abteilung entfernt auch Mitarbeiterdaten). :contentReference[oaicite:7]{index=7}</li>
</ul>

<h2>
  <span style="background-color:#0ea5e9; color:white; padding:4px 8px; border-radius:12px;">Lernfeld 8</span>
  Ursachen: Verletzungen von Normalformen & funktionalen Abhängigkeiten
</h2>
<p>Typische Auslöser sind <strong>nicht atomare Attribute</strong> (Verstoß gegen 1. NF), <strong>partielle Abhängigkeiten</strong> von zusammengesetzten Schlüsseln (Verstoß gegen 2. NF) sowie <strong>transitive Abhängigkeiten</strong> (Verstoß gegen 3. NF). Durch schrittweises Zerlegen in Relationen der 1.–3. NF werden Redundanzen reduziert und Anomalien verhindert. :contentReference[oaicite:8]{index=8} :contentReference[oaicite:9]{index=9}</p>

<h2>
  <span style="background-color:#22c55e; color:white; padding:4px 8px; border-radius:12px;">Lernfeld 5</span>
  Erkennung in der Praxis: Leitfragen & Prüfpfade
</h2>
<ul>
  <li><strong>Atomarität prüfen (1. NF):</strong> Enthalten Spalten Listen/Kombinationen (z. B. mehrere „Bestellpositionen“ in einem Feld)? Falls ja, Zerlegung in eigene Attribute/Tabellen. :contentReference[oaicite:10]{index=10}</li>
  <li><strong>Berechenbare Werte identifizieren:</strong> Sind Felder gespeichert, die sich deterministisch aus anderen ergeben (z. B. <em>Gesamtbetrag = Preis × Anzahl</em>)? Solche Felder deuten auf Redundanz. :contentReference[oaicite:11]{index=11}</li>
  <li><strong>Schlüsselabhängigkeiten prüfen (2. NF):</strong> Hängen Nicht-Schlüsselattribute vollständig vom Primärschlüssel ab — nicht nur von Teilen eines zusammengesetzten Schlüssels? :contentReference[oaicite:12]{index=12}</li>
  <li><strong>Transitivitäten eliminieren (3. NF):</strong> Gibt es Attribute, die <em>über</em> andere Nicht-Schlüsselattribute vom Schlüssel abhängen (z. B. <em>ArtikelNr → Bezeichnung</em> innerhalb einer Bestellposition)? Auslagern in eigene Tabellen. :contentReference[oaicite:13]{index=13}</li>
  <li><strong>Referenzielle Integrität sicherstellen:</strong> Verweisen Fremdschlüssel stets auf existierende Primärschlüssel? FK-Regeln verhindern Inkonsistenzen. :contentReference[oaicite:14]{index=14}</li>
  <li><strong>Datenqualitätskriterien heranziehen:</strong> Konsistenz, Redundanzfreiheit, Einheitlichkeit und Vollständigkeit als Prüfkriterien nutzen. :contentReference[oaicite:15]{index=15} :contentReference[oaicite:16]{index=16}</li>
  <li><strong>Mehrbenutzer-Kontext betrachten:</strong> Parallelzugriffe können zusätzliche Anomalien erzeugen (z. B. widersprüchliche Zustände); hierzu Transaktionen und Sperrmechanismen bewerten. :contentReference[oaicite:17]{index=17}</li>
</ul>

<h2>
  <span style="background-color:#ef4444; color:white; padding:4px 8px; border-radius:12px;">Lernfeld 8</span>
  Gegenmaßnahmen: Struktur & Regeln
</h2>
<ul>
  <li><strong>Normalisierung bis mind. 3. NF:</strong> Tabellen zerlegen, funktionale Abhängigkeiten sauber trennen (ggf. BCNF prüfen). :contentReference[oaicite:18]{index=18} :contentReference[oaicite:19]{index=19}</li>
  <li><strong>Referenzielle Integrität & Constraints:</strong> PK/FK, <em>UNIQUE</em>, <em>NOT NULL</em> u. Ä. definieren; so werden widersprüchliche Zustände unterbunden. :contentReference[oaicite:20]{index=20}</li>
  <li><strong>Berechnete Werte nicht speichern:</strong> Abgeleitete Felder (z. B. Summen) zur Laufzeit ermitteln oder per View/Aggregation bereitstellen. :contentReference[oaicite:21]{index=21}</li>
  <li><strong>„Kontrollierte Redundanz“ abwägen:</strong> Aus Performancegründen kann bewusst redundante Ablage sinnvoll sein — jedoch mit klaren Update-Strategien; unkontrollierte Redundanz vermeiden. :contentReference[oaicite:22]{index=22}</li>
</ul>

<h2>
  <span style="background-color:#f97316; color:white; padding:4px 8px; border-radius:12px;">Lernfeld 8</span>
  Beispielhafte Normalisierung (verkürzt)
</h2>
<p>Aus einer nicht normalisierten „Bestellung“-Tabelle mit mehrfachen Bestellpositionen und wiederholten Kunden- und Artikeldaten werden durch Zerlegung die Relationen <em>Bestellung</em>, <em>BestellPosition</em>, <em>Kunde</em> und <em>Artikel</em> gebildet. Ergebnis: atomare Werte, klare Schlüsselbeziehungen und entfernte Transitivitäten — Redundanzen und Anomalierisiken sind dadurch reduziert. :contentReference[oaicite:23]{index=23} :contentReference[oaicite:24]{index=24}</p>

<h2>
  <span style="background-color:#64748b; color:white; padding:4px 8px; border-radius:12px;">Lernfeld 8</span>
  Trade-offs: Übernormalisierung vermeiden
</h2>
<p>Mit jeder Normalisierungsstufe steigen die Anzahl der Tabellen und die Komplexität (mehr Joins, mehr Schlüssel). Dies kann die Performance beeinträchtigen und Fehleranfälligkeit erhöhen. Daher ist ein ausgewogener Kompromiss zwischen Redundanzfreiheit und Systemleistung ratsam. :contentReference[oaicite:25]{index=25} :contentReference[oaicite:26]{index=26}</p>

<h2>
  <span style="background-color:#22c55e; color:white; padding:4px 8px; border-radius:12px;">Lernfeld 10c</span>
  Datenqualität als Bewertungsrahmen
</h2>
<p>Zur systematischen Erkennung von Redundanzen und Anomalien dienen Qualitätsmerkmale wie <em>Konsistenz</em>, <em>Redundanzfreiheit</em>, <em>Einheitlichkeit</em>, <em>Vollständigkeit</em> und <em>Verfügbarkeit</em> der Daten — besonders relevant beim Zusammenführen heterogener Quellen. :contentReference[oaicite:27]{index=27} :contentReference[oaicite:28]{index=28}</p>

<h2>Quelle</h2>
<p>„<em>Software zur Verwaltung von Daten anpassen</em>“, <strong>Lernfeld 5</strong> (Redundanz, Anomalietypen, Konsistenz, referenzielle Integrität). :contentReference[oaicite:29]{index=29} :contentReference[oaicite:30]{index=30} :contentReference[oaicite:31]{index=31}</p>
<p>„<em>Daten systemübergreifend bereitstellen</em>“, <strong>Lernfeld 8</strong> (Normalisierung 1.–3. NF, Beispiele, Trade-offs, kontrollierte Redundanz). :contentReference[oaicite:32]{index=32} :contentReference[oaicite:33]{index=33} :contentReference[oaicite:34]{index=34}</p>
<p>„<em>Werkzeuge des maschinellen Lernens einsetzen</em>“, <strong>Lernfeld 10c</strong> (Datenqualitätsmerkmale inkl. Konsistenz & Redundanzfreiheit). :contentReference[oaicite:35]{index=35}</p>
