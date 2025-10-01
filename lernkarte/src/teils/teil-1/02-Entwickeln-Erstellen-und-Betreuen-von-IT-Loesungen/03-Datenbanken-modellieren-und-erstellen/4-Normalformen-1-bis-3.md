<h1>Normalisieren relationaler Datenmodelle: 1. bis 3. Normalform (1NF–3NF)</h1>

<h2>
  <span style="background-color:#2563eb; color:white; padding:4px 8px; border-radius:12px;">Lernfeld 8</span>
  Einordnung, Ziel & Prüfungsrelevanz
</h2>
<p>Die <strong>Normalisierung</strong> ist ein systematisches Verfahren, um <em>Datenredundanzen</em> zu verringern und <em>Datenkonsistenz</em> zu erhöhen. In der Praxis konzentriert man sich auf die <strong>erste bis dritte Normalform</strong>; daran wird eine Beispieltabelle schrittweise bis zur 3NF überführt. :contentReference[oaicite:0]{index=0}</p>
<p>Im Designprozess wird nach ER-Modellierung das relationale Modell erstellt und <em>anschließend</em> durch Normalisierung optimiert. Ziel sind Relationen, die vorgegebene Normalformen erfüllen; höhere NF bedeuten strengere Strukturanforderungen. :contentReference[oaicite:1]{index=1} :contentReference[oaicite:2]{index=2}</p>

<h2>
  <span style="background-color:#16a34a; color:white; padding:4px 8px; border-radius:12px;">Lernfeld 5</span>
  Voraussetzungen: Schlüssel, Beziehungen & Integrität
</h2>
<p>Normalisierung wirkt im Kontext des relationalen Modells mit <strong>Primär- und Fremdschlüsseln</strong>, die Eindeutigkeit und referenzielle Integrität sichern. Diese werden im logischen Schema verankert und bilden die Grundlage für eine konsistente Zerlegung in Relationen. :contentReference[oaicite:3]{index=3} :contentReference[oaicite:4]{index=4}</p>

<h2>
  <span style="background-color:#9333ea; color:white; padding:4px 8px; border-radius:12px;">Lernfeld 8</span>
  1. Normalform (1NF): Atomare Werte
</h2>
<p><strong>Definition:</strong> Eine Tabelle erfüllt die 1NF, wenn <em>alle Attribute atomare, unteilbare Werte</em> enthalten (keine Listen, Wiederholgruppen oder zusammengesetzten Felder). :contentReference[oaicite:5]{index=5}</p>
<ul>
  <li><strong>Typische Verletzung:</strong> Spalte „Bestellpositionen“ enthält Aufzählungen.</li>
  <li><strong>Abhilfe (Beispiel):</strong> Aufspalten der Sammelspalten in einzelne Attribute (z. B. <em>Pos</em>, <em>Anzahl</em>, <em>Bezeichnung</em>, <em>ANr</em>) und ggf. Erweiterung des Schlüssels (z. B. <em>BestellNr + Pos</em>). :contentReference[oaicite:6]{index=6}</li>
</ul>

<h2>
  <span style="background-color:#0ea5e9; color:white; padding:4px 8px; border-radius:12px;">Lernfeld 8</span>
  2. Normalform (2NF): Vollständige Abhängigkeit vom (zusammengesetzten) Schlüssel
</h2>
<p><strong>Kernidee:</strong> Jedes <em>Nicht-Schlüsselattribut</em> hängt <em>vollständig</em> vom <em>gesamten</em> Primärschlüssel ab, nicht nur von einem Teil (relevant bei zusammengesetzten Schlüsseln). Partielle Abhängigkeiten werden durch Auslagern in eigene Relationen beseitigt. Die Lehrunterlagen führen die Normalisierung schrittweise von der 1NF weiter, indem solche Abhängigkeiten identifiziert und getrennt werden. :contentReference[oaicite:7]{index=7}</p>

<h2>
  <span style="background-color:#22c55e; color:white; padding:4px 8px; border-radius:12px;">Lernfeld 8</span>
  3. Normalform (3NF): Keine transitiven Abhängigkeiten
</h2>
<p><strong>Definition:</strong> Es existieren <em>keine transitiven Abhängigkeiten</em> von Schlüsseln über andere Nicht-Schlüsselattribute (z. B. <em>ANr → Bezeichnung</em> innerhalb einer Positionstabelle). Abhilfe: auslagern in eigene Tabellen und 1:n-Beziehungen herstellen. Das Ergebnis sind voneinander unabhängige Relationen in 3NF. :contentReference[oaicite:8]{index=8}</p>

<h2>
  <span style="background-color:#ef4444; color:white; padding:4px 8px; border-radius:12px;">Lernfeld 8</span>
  Vorgehen: Schrittweise Normalisierung eines Bestellmodells
</h2>
<ul>
  <li><strong>Ausgangslage:</strong> Nicht normalisierte Tabelle „Bestellung“ mit Sammelspalten (Kunde, Bestellpositionen). <em>Problem:</em> Redundanzen und Anomalierisiken. :contentReference[oaicite:9]{index=9}</li>
  <li><strong>→ 1NF:</strong> Zerlegung der Sammelspalten; neue Tabelle mit Schlüssel <em>(BestellNr, Pos)</em>. :contentReference[oaicite:10]{index=10}</li>
  <li><strong>→ 2NF:</strong> Trennung von Attributen, die nur von einem Teil des Schlüssels abhängen (z. B. artikelbezogene Eigenschaften). :contentReference[oaicite:11]{index=11}</li>
  <li><strong>→ 3NF:</strong> Eliminieren transitiver Abhängigkeiten, z. B. <em>ANr → Bezeichnung</em>, durch Auslagerung in „Artikel“ und „Kunde“; Verknüpfung über PK/FK. Ergebnis: Tabellen „Bestellung“, „BestellPosition“, „Kunde“, „Artikel“ in 3NF. :contentReference[oaicite:12]{index=12}</li>
</ul>

<h2>
  <span style="background-color:#a855f7; color:white; padding:4px 8px; border-radius:12px;">Lernfeld 5</span>
  Zusammenhang mit Integritätsregeln & Implementierung
</h2>
<p>Die normalisierte Struktur wird durch <strong>Primär-/Fremdschlüssel</strong> und geeignete Constraints in SQL verankert; so wird referenzielle Integrität gewährleistet und Inkonsistenz verhindert. Diese Kopplung von Modell (PK/FK) und Normalformen ist Teil des sauberen logischen Designs vor der physischen Umsetzung. :contentReference[oaicite:13]{index=13} :contentReference[oaicite:14]{index=14}</p>

<h2>
  <span style="background-color:#64748b; color:white; padding:4px 8px; border-radius:12px;">Lernfeld 8</span>
  Praxis-Tipps & typische Stolpersteine
</h2>
<ul>
  <li><strong>Anomalien vermeiden:</strong> 1NF beseitigt Wiederholgruppen; 2NF entfernt partielle Abhängigkeiten; 3NF eliminiert transitive Abhängigkeiten. :contentReference[oaicite:15]{index=15} :contentReference[oaicite:16]{index=16}</li>
  <li><strong>Übernormalisierung abwägen:</strong> Zu viele kleine Tabellen können Performance und Komplexität negativ beeinflussen; Normalisierung ist gegen Praxisanforderungen (Abfragen, Joins) auszubalancieren. :contentReference[oaicite:17]{index=17}</li>
  <li><strong>Schrittfolge beachten:</strong> ER-Modell → relationales Modell → Normalisierung → SQL-Schema mit PK/FK/Datentypen. :contentReference[oaicite:18]{index=18}</li>
</ul>

<h2>
  <span style="background-color:#f97316; color:white; padding:4px 8px; border-radius:12px;">Lernfeld 8</span>
  Kurz-Checkliste für 1NF–3NF
</h2>
<ul>
  <li><strong>1NF:</strong> Enthält eine Spalte Listen/Wiederholungen? → Aufspalten in atomare Attribute. :contentReference[oaicite:19]{index=19}</li>
  <li><strong>2NF:</strong> Gibt es zusammengesetzte Schlüssel? Hängen alle Nicht-Schlüsselattribute vom <em>gesamten</em> Schlüssel ab? → Partielle Abhängigkeiten auslagern. :contentReference[oaicite:20]{index=20}</li>
  <li><strong>3NF:</strong> Hängen Nicht-Schlüsselattribute <em>über</em> andere Nicht-Schlüsselattribute vom Schlüssel ab? → Transitivitäten trennen (eigene Tabellen, PK/FK). :contentReference[oaicite:21]{index=21}</li>
</ul>

<h2>Quelle</h2>
<p>„<em>Daten systemübergreifend bereitstellen</em>“, <strong>Lernfeld 8</strong> — Normalisierung (1NF–3NF), Designphasen, PK/FK, Praxisbeispiel und Hinweise zu Übernormalisierung. :contentReference[oaicite:22]{index=22} :contentReference[oaicite:23]{index=23} :contentReference[oaicite:24]{index=24} :contentReference[oaicite:25]{index=25}</p>
<p>„<em>Software zur Verwaltung von Daten anpassen</em>“, <strong>Lernfeld 5</strong> — Einbettung von Normalisierung/Integritätsbeziehungen im logischen Schema. :contentReference[oaicite:26]{index=26}</p>
