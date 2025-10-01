<h1>Datenbankabfrage & Datenpflege</h1>

<h2>Einordnung im Ausbildungsrahmen <span style="background-color:#0ea5e9; color:white; padding:4px 8px; border-radius:12px;">Lernfeld 5</span> <span style="background-color:#22c55e; color:white; padding:4px 8px; border-radius:12px;">Lernfeld 8</span> <span style="background-color:#f59e0b; color:white; padding:4px 8px; border-radius:12px;">Lernfeld 11</span></h2>
<p>„Datenbankabfrage“ und „Datenpflege“ gehören inhaltlich zum Datenbank- und Softwareentwicklungsfokus deiner Ausbildung: LF5 behandelt das relationale Datenmodell, Schlüssel, Beziehungen und die praktische Umsetzung mit SQL, LF8 ergänzt dies um Datenqualitätskriterien, Architektur-/Designphasen (inkl. Normalisierung) und die Abgrenzung zu NoSQL, während LF11 die programmgesteuerte DB-Anbindung, Transaktionen und Schnittstellen (ODBC/JDBC) adressiert. </p>

<h2>Grundlagen der Datenhaltung: Relational vs. NoSQL <span style="background-color:#0ea5e9; color:white; padding:4px 8px; border-radius:12px;">Lernfeld 5</span> <span style="background-color:#22c55e; color:white; padding:4px 8px; border-radius:12px;">Lernfeld 8</span></h2>
<p>Relationale Datenbanken organisieren Informationen in Tabellen („Relationen“), die über Schlüssel miteinander verknüpft sind. Zentrale Begriffe sind Primärschlüssel (eindeutige Identifikation), Fremdschlüssel (Beziehungsbildung) und Kardinalitäten (1:1, 1:n, m:n). m:n-Beziehungen werden über Kreuztabellen in zwei 1:n-Beziehungen überführt – ein Kernprinzip, um Redundanzen und Anomalien zu vermeiden. </p>
<p>NoSQL-Datenbanken (Dokumenten-, Key–Value-, Spalten- und Graph-Modelle) ergänzen relationale Systeme, wenn flexible Schemata, horizontale Skalierung oder un-/semistrukturierte Daten im Vordergrund stehen. Relationale DBs folgen dem ACID-Modell, NoSQL tendiert (je nach System) zu BASE-Eigenschaften; die Wahl hängt vom Anwendungsfall ab. </p>

<h2>SQL-Überblick für Datenbankabfragen (SELECT) <span style="background-color:#0ea5e9; color:white; padding:4px 8px; border-radius:12px;">Lernfeld 5</span> <span style="background-color:#22c55e; color:white; padding:4px 8px; border-radius:12px;">Lernfeld 8</span></h2>
<p>Die Structured Query Language (SQL) ist die Standardsprache für Abfragen und Auswertungen. Zentrale Muster sind Selektion (<code>WHERE</code>), Projektion (Spaltenauswahl), Sortierung (<code>ORDER BY</code>), Gruppierung/Aggregation (<code>GROUP BY</code>, <code>HAVING</code>), Verknüpfungen (JOINs) sowie Unterabfragen. Lernfeldübungen fordern u. a. Zählausgaben, Durchschnittswerte pro Gruppe, Musterabfragen und Lösch-/Änderungsoperationen über Bedingungen. :contentReference[oaicite:3]{index=3}</p>
<ul>
  <li>Selektion & Projektion: <em>„Alle Orte mit &gt;200 000 Einwohnern; nur Name &amp; Einwohner anzeigen.“</em> (Selektion + Projektion)</li>
  <li>Aggregation: <em>„Durchschnittliche Einwohnerzahl je Kontinent.“</em> (GROUP BY, Aggregatfunktion)</li>
  <li>Join/Relationen: <em>„Länder inkl. zugehöriger Einwohnerzahlen sortiert ausgeben.“</em> (JOIN + ORDER BY)</li>
  <li>Unterabfrage: <em>„Länder mit höherer Einwohnerzahl als das bevölkerungsreichste europäische Land.“</em> (Subquery) :contentReference[oaicite:4]{index=4}</li>
</ul>

<h2>Datenpflege (CRUD) in relationalen Systemen <span style="background-color:#0ea5e9; color:white; padding:4px 8px; border-radius:12px;">Lernfeld 5</span> <span style="background-color:#22c55e; color:white; padding:4px 8px; border-radius:12px;">Lernfeld 8</span></h2>
<p>Datenpflege umfasst das Erstellen, Ändern und Löschen von Daten (CRUD: <strong>Create/Read/Update/Delete</strong>). In SQL entspricht dies i. d. R. <code>INSERT</code>, <code>SELECT</code>, <code>UPDATE</code>, <code>DELETE</code>. Typische Aufgaben sind das Einfügen neuer Datensätze, das Anpassen von Attributen (z. B. Werteerhöhungen, Formatkorrekturen) sowie das Entfernen obsoleter Einträge – jeweils konsistenzsicher und konform zu Schlüssel-/Constraint-Vorgaben. :contentReference[oaicite:5]{index=5}</p>
<ul>
  <li><strong>CREATE/DDL:</strong> Tabellenanlage, Schlüssel/Datentypen festlegen; z. B. im Design/Implementationsschritt einer neuen DB. :contentReference[oaicite:6]{index=6}</li>
  <li><strong>INSERT/UPDATE/DELETE:</strong> Datenpflege-Operationen, oft begleitet von Prüfungen (z. B. Fremdschlüssel, NOT NULL). :contentReference[oaicite:7]{index=7}</li>
  <li><strong>Praktisch:</strong> Auch in Lernumgebungen wie SQLite (in Python integriert) werden Standard-SQL-Anweisungen unterstützt. :contentReference[oaicite:8]{index=8}</li>
</ul>

<h2>Transaktionen & Konsistenzsicherung (ACID) <span style="background-color:#f59e0b; color:white; padding:4px 8px; border-radius:12px;">Lernfeld 11</span> <span style="background-color:#22c55e; color:white; padding:4px 8px; border-radius:12px;">Lernfeld 8</span></h2>
<p>Mehrere Pflegeschritte werden zu <strong>Transaktionen</strong> gebündelt: <code>BEGIN/START TRANSACTION</code>, fachliche Operationen, dann <code>COMMIT</code> (dauerhaft) oder <code>ROLLBACK</code> (rückgängig). So bleiben Daten atomar, konsistent, isoliert und dauerhaft („ACID“). Beispielhaft: Artikel hinzufügen und einen anderen löschen, dann per <code>COMMIT</code> festschreiben; Teständerungen per <code>ROLLBACK</code> zurücknehmen. </p>

<h2>Datenqualität als Teil der Datenpflege <span style="background-color:#22c55e; color:white; padding:4px 8px; border-radius:12px;">Lernfeld 8</span></h2>
<p>Hohe Datenqualität ist Voraussetzung für „gute Informationen“: Kriterien sind u. a. Vollständigkeit, Korrektheit, Eindeutigkeit, Konsistenz, Redundanzfreiheit und Aktualität. Typische Qualitätsprobleme sind Dubletten, widersprüchliche oder fehlende Werte sowie Formatfehler – alle erfordern gezielte Bereinigung, Validierung und Prozesse (z. B. Dublettenprüfung, Pflichtfelder, Referenzwerte). :contentReference[oaicite:10]{index=10}</p>
<ul>
  <li><strong>Prävention:</strong> Konsistente Schlüssel- und Fremdschlüsselstrategie, valide Datentypen/Constraints, sauberes ER-Design. :contentReference[oaicite:11]{index=11}</li>
  <li><strong>Korrektur:</strong> Bereinigungs-Updates (Format harmonisieren), Dublettenauflösung, Vervollständigung fehlender Attribute. :contentReference[oaicite:12]{index=12}</li>
</ul>

<h2>Modellierung & Normalisierung als Basis der Pflege <span style="background-color:#0ea5e9; color:white; padding:4px 8px; border-radius:12px;">Lernfeld 5</span> <span style="background-color:#22c55e; color:white; padding:4px 8px; border-radius:12px;">Lernfeld 8</span></h2>
<p>Ein tragfähiges Schema macht Pflege planbar: Aus den Anforderungen wird ein <strong>ER-Modell</strong> (Entitäten, Attribute, Beziehungen, Kardinalitäten) entwickelt, in ein relationales Modell überführt und anschließend <strong>normalisiert</strong> (z. B. Auflösung von m:n-Beziehungen über Kreuztabellen, Wahl geeigneter Primärschlüssel). Dies senkt Redundanz und Anomalierisiken und erleichtert langfristig die Datenpflege. </p>

<h2>Systemübergreifende Bereitstellung & Pflege im Unternehmen <span style="background-color:#22c55e; color:white; padding:4px 8px; border-radius:12px;">Lernfeld 8</span></h2>
<p>Für Analyse- und Berichtszwecke werden Daten aus heterogenen Quellen zusammengeführt. <em>Data Warehouses</em> (strukturiert) und <em>Data Lakes</em> (auch un-/semistrukturiert) dienen der Auswertung; Datenvirtualisierung kann Aktualität sichern. Bei all dem bleibt Datenpflege zentral (Qualität, Synchronität, Metadaten). :contentReference[oaicite:14]{index=14}</p>

<h2>Programmierzugriffe & Werkzeuge für Abfrage/Pflege <span style="background-color:#f59e0b; color:white; padding:4px 8px; border-radius:12px;">Lernfeld 11</span></h2>
<p>Applikationen greifen über <strong>ODBC/JDBC</strong> oder spezifische Treiber auf Datenbanken zu; so werden Abfragen automatisiert, Pflegeworkflows umgesetzt und Transaktionen kontrolliert. Beispiele: ODBC als DBMS-unabhängige API; MySQL via JDBC in Java; SQLite direkt aus Python. </p>

<h2>Best Practices für Abfrage & Pflege <span style="background-color:#0ea5e9; color:white; padding:4px 8px; border-radius:12px;">Lernfeld 5</span> <span style="background-color:#22c55e; color:white; padding:4px 8px; border-radius:12px;">Lernfeld 8</span> <span style="background-color:#f59e0b; color:white; padding:4px 8px; border-radius:12px;">Lernfeld 11</span></h2>
<ul>
  <li><strong>Schema zuerst, dann Daten:</strong> Sauberes ER- und Schlüsseldesign vor Implementierung; Normalisierung nutzen. </li>
  <li><strong>Beziehungen explizit abbilden:</strong> m:n über Kreuztabellen; Primärschlüssel eindeutig/minimal; Fremdschlüssel zur Integrität. :contentReference[oaicite:17]{index=17}</li>
  <li><strong>Pflege transaktional:</strong> Logische Änderungen zusammenfassen; <em>Commit/Rollback</em> konsequent einsetzen. :contentReference[oaicite:18]{index=18}</li>
  <li><strong>Datenqualität messen:</strong> Regeln und Prüfungen (Pflichtfelder, Wertebereiche) definieren; Dubletten- und Konsistenzchecks. :contentReference[oaicite:19]{index=19}</li>
  <li><strong>Passende Technologie wählen:</strong> ACID-kritische Domänen relational; flexible, großskalige Domänen ggf. NoSQL. </li>
</ul>

<h3>Beispiele (kompakt) <span style="background-color:#0ea5e9; color:white; padding:4px 8px; border-radius:12px;">Lernfeld 5/8</span></h3>
<ul>
  <li><strong>Abfrage:</strong> „Liste aller deutschen Millionenstädte, absteigend sortiert.“ (Selektion + Bedingung + Sortierung) :contentReference[oaicite:21]{index=21}</li>
  <li><strong>Pflege:</strong> „Erhöhe Einwohnerzahl von Wien um 20 341.“ (UPDATE mit Bedingung) :contentReference[oaicite:22]{index=22}</li>
  <li><strong>Löschen:</strong> „Alle afrikanischen Orte entfernen.“ (DELETE nach Join/Unterabfrage) :contentReference[oaicite:23]{index=23}</li>
  <li><strong>Transaktion:</strong> „Mehrere Inserts/Deletes gemeinsam ausführen und committen – oder bei Fehlern rollbacken.“ :contentReference[oaicite:24]{index=24}</li>
</ul>

<hr>
<p><em>Quelle: Lernfelder 5 (Software zur Verwaltung von Daten anpassen), Lernfelder 8 (Daten systemübergreifend bereitstellen), Lernfelder 11a (Funktionalität in Anwendungen realisieren).</em></p>
