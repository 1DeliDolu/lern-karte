<h1>Relationale und nicht-relationale Datenbanken (NoSQL) — Überblick, Vergleich und Einsatzempfehlungen</h1>

<h2>
  <span style="background-color:#2563eb; color:white; padding:4px 8px; border-radius:12px;">Lernfeld 5</span>
  Grundbegriffe & Abgrenzung
</h2>
<p>Relationale Datenbanken (RDBMS) organisieren Daten in <em>Tabellen</em> mit festem Schema (Relationen). Beziehungen werden über Primär-/Fremdschlüssel modelliert; Datenmanipulation und -abfrage erfolgen mit SQL. Dieses Modell ist besonders geeignet, wenn <strong>starke Konsistenz, Transaktionen (ACID)</strong> und eine klar strukturierte Domäne im Vordergrund stehen. :contentReference[oaicite:0]{index=0}</p>
<p>Nicht-relationale bzw. <em>NoSQL</em>-Datenbanken lösen sich vom starren Tabellenmodell. Sie bieten flexible Schemata und sind oft für horizontale Skalierung sowie große, heterogene Datenmengen konzipiert (z. B. Dokument-, Key-Value-, Spaltenfamilien- und Graphdatenbanken). Sie werden in modernen, cloudbasierten Architekturen und bei Big-Data-Szenarien eingesetzt. :contentReference[oaicite:1]{index=1}</p>

<h2>
  <span style="background-color:#16a34a; color:white; padding:4px 8px; border-radius:12px;">Lernfeld 5</span>
  Relationale Datenbanken (RDBMS)
</h2>
<h3>Modell & Prinzipien</h3>
<p>Das relationale Modell basiert auf <strong>Normalisierung</strong> (Redundanzvermeidung), <strong>juristischer Datenintegrität</strong> (Constraints) und <strong>ACID-Transaktionen</strong>. Typische Operationen sind Selektionen, Projektionen und <strong>Joins</strong>; komplexe Zusammenhänge werden über Referenzen sauber nachvollziehbar. :contentReference[oaicite:2]{index=2}</p>
<h3>Stärken</h3>
<ul>
  <li>Hohe Datenqualität und Eindeutigkeit durch Strukturen und Constraints.</li>
  <li>Leistungsfähige Abfragen mit SQL (Ad-hoc-Analysen, komplexe Reports). :contentReference[oaicite:3]{index=3}</li>
  <li>Starke Transaktionssicherheit (ACID) für Finanz-, Auftrags- oder Buchungssysteme.</li>
</ul>
<h3>Grenzen</h3>
<ul>
  <li>Schemaänderungen sind formal und können aufwendig sein.</li>
  <li>Horizontale Skalierung (Sharding) ist möglich, aber komplexer als in vielen NoSQL-Systemen.</li>
</ul>

<h2>
  <span style="background-color:#9333ea; color:white; padding:4px 8px; border-radius:12px;">Lernfeld 8</span>
  Nicht-relationale Datenbanken (NoSQL)
</h2>
<h3>Motivation & Architekturmerkmale</h3>
<p>NoSQL adressiert Anforderungen wie <strong>hohe Schreib-/Lesezuwächse, variable Datenstrukturen</strong> und <strong>Globale Verteilung</strong>. Viele Systeme priorisieren <em>Skalierbarkeit und Verfügbarkeit</em> und nutzen <em>Replikation, Partitionierung</em> und flexible Konsistenzmodelle (z. B. eventual consistency) — passend für Cloud- und Microservice-Umfelder. :contentReference[oaicite:4]{index=4}</p>

<h3>
  <span style="background-color:#f97316; color:white; padding:4px 8px; border-radius:12px;">Lernfeld 8</span>
  NoSQL-Haupttypen & typische Anwendungsfälle
</h3>
<ul>
  <li><strong>Key-Value-Stores</strong>: extrem schnelle Lookups per Schlüssel (Caching, Sitzungsdaten, Feature-Flags).</li>
  <li><strong>Dokumentdatenbanken</strong>: JSON/ BSON-Dokumente für <em>aggregatorientiertes</em> Modellieren (Produktkataloge, Nutzerprofile, Content). :contentReference[oaicite:5]{index=5}</li>
  <li><strong>Spaltenfamilien-Datenbanken</strong>: breite Tabellen mit spärlicher Belegung für Zeitreihen, Telemetrie, Log-Analytik.</li>
  <li><strong>Graphdatenbanken</strong>: Knoten/Kanten für hochgradig vernetzte Domänen (Empfehlungen, Betrugserkennung, Netzwerk-/IAM-Analysen). :contentReference[oaicite:6]{index=6}</li>
</ul>

<h2>
  <span style="background-color:#0ea5e9; color:white; padding:4px 8px; border-radius:12px;">Lernfeld 5</span>
  Datenmodellierung: ERM vs. Aggregat-Orientierung
</h2>
<p>In RDBMS werden Entitäten/Beziehungen mittels <strong>ER-Modell</strong> und Normalformen präzise strukturiert. In NoSQL steht die <strong>zugriffspfadorientierte</strong> Modellierung im Fokus: Daten, die zusammen gelesen werden, werden gemeinsam gespeichert (<em>Denormalisierung</em>, „<em>schema-on-read</em>“/„<em>schema-flexible</em>“). Das reduziert Joins zur Laufzeit und optimiert Latenzen bei großen Datenmengen. :contentReference[oaicite:7]{index=7}</p>

<h2>
  <span style="background-color:#ef4444; color:white; padding:4px 8px; border-radius:12px;">Lernfeld 8</span>
  Abfrage- & Konsistenzmodelle, Transaktionen
</h2>
<ul>
  <li><strong>SQL</strong> (RDBMS) vs. <strong>Abfrage-APIs</strong> (Dokument-/Graph-Queries, Map-Reduce, Aggregation Pipelines) in NoSQL. :contentReference[oaicite:8]{index=8}</li>
  <li><strong>ACID</strong> (strikte Transaktionen, RDBMS) vs. <strong>BASE</strong>/<em>eventual consistency</em> (viele NoSQL-Systeme) — heute bieten manche NoSQL-Engines jedoch auch transaktionale Garantien auf Dokument- oder Partitions-Ebene.</li>
</ul>

<h2>
  <span style="background-color:#64748b; color:white; padding:4px 8px; border-radius:12px;">Lernfeld 8</span>
  Skalierung, Betrieb & Integration
</h2>
<p>NoSQL-Systeme sind häufig für <strong>horizontale Skalierung</strong> (Sharding) konzipiert, RDBMS punkten mit ausgereiften <strong>Transaktionen</strong> und <strong>mächtigen Joins</strong>. In integrativen Umgebungen (REST/Cloud, Streaming, Data Lakes) gilt oft: <em>„Polyglot Persistence“</em> — für jeden Teil der Domäne das passende Datenmodell. :contentReference[oaicite:9]{index=9}</p>

<h2>
  <span style="background-color:#22c55e; color:white; padding:4px 8px; border-radius:12px;">Lernfeld 8</span>
  Sicherheit & Datenqualität (Überblick)
</h2>
<p>Unabhängig vom Modell sind <strong>Informationssicherheit, Datenschutz, Datenqualität</strong> und Testbarkeit entscheidend: Rollen/Rechte, Verschlüsselung „at rest“/„in transit“, Validierungen sowie Test-/Monitoring-Konzepte sichern belastbare Anwendungen und verlässliche Analysen. :contentReference[oaicite:10]{index=10}</p>

<h2>
  <span style="background-color:#ea580c; color:white; padding:4px 8px; border-radius:12px;">Lernfeld 5</span>
  Entscheidungsleitfaden: Wann RDBMS? Wann NoSQL?
</h2>
<ul>
  <li><strong>RDBMS bevorzugen</strong>, wenn: stark normierte Geschäftsprozesse, komplexe Joins/Reports, strenge Konsistenz/ACID, klare, stabile Schemata. :contentReference[oaicite:11]{index=11}</li>
  <li><strong>NoSQL bevorzugen</strong>, wenn: sehr große/heterogene Daten, flexible Strukturen, globale Verteilung, niedrige Latenzen bei hohem Durchsatz, vernetzte Domänen (Graph). :contentReference[oaicite:12]{index=12}</li>
  <li><strong>Kombinieren</strong> (Polyglot): z. B. Transaktionskern in RDBMS, Produkt-/Event-Streams in Dokument/Spalte, Beziehungslogik in Graph.</li>
</ul>

<h2>
  <span style="background-color:#3b82f6; color:white; padding:4px 8px; border-radius:12px;">Lernfeld 8</span>
  Praxisbeispiele (Auswahl)
</h2>
<ul>
  <li><strong>Buchungssystem</strong> (Aufträge, Zahlungen): RDBMS wegen ACID & Integrität.</li>
  <li><strong>Produktkatalog & CMS</strong>: Dokumentdatenbank für variable Attribute/Layouts. :contentReference[oaicite:13]{index=13}</li>
  <li><strong>Telemetry/IoT-Zeitreihen</strong>: Spaltenfamilie für große, sequentielle Messdaten. :contentReference[oaicite:14]{index=14}</li>
  <li><strong>Empfehlungen & Betrugserkennung</strong>: Graphdatenbank für Pfad-/Nachbarschafts-Queries. :contentReference[oaicite:15]{index=15}</li>
</ul>

<h2>Quelle</h2>
<p>„<em>Software zur Verwaltung von Daten anpassen</em>“, <strong>Lernfeld 5</strong> (Daten, Datenbanken, SQL, Grundlagen). :contentReference[oaicite:16]{index=16}</p>
<p>„<em>Daten systemübergreifend bereitstellen</em>“, <strong>Lernfeld 8</strong> (NoSQL-Ansätze, Graphdatenbanken, Cloud-/REST-Kontexte, Datenqualität). :contentReference[oaicite:17]{index=17}</p>
