<h1>Testdaten – Planung, Gestaltung und Management für wirksames Testen</h1>

<h2>
  Einordnung in die Lernfelder
  <span style="background-color:#1f77b4; color:white; padding:4px 8px; border-radius:12px;">Lernfeld 5</span>
  <span style="background-color:#9467bd; color:white; padding:4px 8px; border-radius:12px;">Lernfeld 8</span>
  <span style="background-color:#d62728; color:white; padding:4px 8px; border-radius:12px;">Lernfeld 7</span>
  <span style="background-color:#17becf; color:white; padding:4px 8px; border-radius:12px;">Lernfeld 11a</span>
  <span style="background-color:#8c564b; color:white; padding:4px 8px; border-radius:12px;">Lernfeld 12a</span>
</h2>
<p><strong>Testdaten</strong> sind alle Daten, die zur Planung, Durchführung und Auswertung von Tests benötigt werden. In <strong>LF5</strong> werden sie als Bestandteil eines strukturierten Testprozesses definiert (Planung, Kriterien, Dokumentation). <strong>LF8</strong> liefert die methodische Ableitung (Äquivalenzklassen, Grenzwerte, Entscheidungstabellen). <strong>LF7</strong> verankert Bereitstellung und Bereinigung in CI/CD-Pipelines. <strong>LF11a</strong> stärkt Testbarkeit und Reproduzierbarkeit durch Architektur, Modularität und saubere Schnittstellen. <strong>LF12a</strong> fordert revisionssichere Nachweise und Datenschutz-/Compliance-Konformität.</p>

<h2>
  Ziele &amp; Qualitätskriterien für Testdaten
  <span style="background-color:#1f77b4; color:white; padding:4px 8px; border-radius:12px;">LF5</span>
</h2>
<p>Gute Testdaten sorgen für <em>Reproduzierbarkeit</em>, <em>Aussagekraft</em> und <em>Risikofokus</em>. Sie sollen fachlich repräsentativ sein, Randfälle sichtbar machen und klare Orakel (erwartete Ergebnisse) ermöglichen.</p>
<ul>
  <li><strong>Repräsentativität:</strong> Abdeckung typischer und kritischer realer Eingangsdaten/Kombinationen.</li>
  <li><strong>Vollständigkeit &amp; Granularität:</strong> Positive/negative Fälle, Normal- und Extremwerte, leere/fehlende/duplizierte Daten.</li>
  <li><strong>Nachvollziehbarkeit:</strong> Versionierte Datenquellen, dokumentierte Generierungsregeln, deterministische Seeds.</li>
  <li><strong>Datenschutz &amp; Compliance:</strong> DSGVO-konforme Anonymisierung/Pseudonymisierung; Minimalprinzip.</li>
</ul>

<h2>
  Arten von Testdaten
  <span style="background-color:#9467bd; color:white; padding:4px 8px; border-radius:12px;">LF8</span>
</h2>
<ul>
  <li><strong>Synthetische Daten:</strong> Künstlich erzeugt (z. B. per Faker/Generatoren) – hohe Kontrolle, keine personenbezogenen Risiken.</li>
  <li><strong>Anonymisierte/Pseudonymisierte Produktionsdaten:</strong> Realitätsnah; Identifizierbarkeit muss ausgeschlossen sein (Masking, Generalisierung, Tokenisierung).</li>
  <li><strong>Subsets aus Produktionssystemen:</strong> Extrahierte, repräsentative Teilmengen mit Wahrung von Referenzintegrität.</li>
  <li><strong>Domänenspezifische Spezialdaten:</strong> Extremwerte (max. Länge, Min/Max-Zahlen), ungültige Formate, internationale Zeichen, Zeitzonen/Schaltjahrwerte.</li>
  <li><strong>Massendaten:</strong> Für Last-/Performancetests (Volumen, Varianz, Wachstum).</li>
</ul>

<h2>
  Testdaten-Design: Von der Anforderung zum Datensatz
  <span style="background-color:#9467bd; color:white; padding:4px 8px; border-radius:12px;">LF8</span>
</h2>
<p>Testdaten werden aus der Testbasis (Anforderungen, Schnittstellenspezifikationen, Datenmodelle) systematisch abgeleitet.</p>
<ul>
  <li><strong>Äquivalenzklassen:</strong> Eingabebereiche in gültige/ungültige Klassen aufteilen; je Klasse ein repräsentativer Wert.</li>
  <li><strong>Grenzwertanalyse/Extremwertetest:</strong> min−1, min, min+1 / max−1, max, max+1 zur Aufdeckung typischer Randfehler.</li>
  <li><strong>Entscheidungstabellen:</strong> Regeln und Kombinationen (z. B. Rabatt-/Berechtigungslogik) als Datentabellen ableiten.</li>
  <li><strong>Zustandsbasiert:</strong> Zustände/Übergänge (z. B. Bestellung → Versand → Retoure) mit dazugehörigen Datenzuständen.</li>
  <li><strong>Kombinatorik (Pairwise/Orthogonal Arrays):</strong> Minimale Datenmengen mit maximaler Interaktionsabdeckung.</li>
  <li><strong>Property-based Testing:</strong> Generatoren erzeugen viele Varianten; Eigenschaften/Invariantien prüfen (z. B. Sortier-Idempotenz).</li>
</ul>

<h2>
  Bereitstellung in CI/CD &amp; Umgebungsmanagement
  <span style="background-color:#d62728; color:white; padding:4px 8px; border-radius:12px;">LF7</span>
</h2>
<p>Testdaten gehören als <em>Infrastruktur-Artefakte</em> in die Pipeline. Ziel: reproduzierbare, isolierte und kurzlebige Umgebungen.</p>
<ul>
  <li><strong>Seeding &amp; Fixtures:</strong> Datenbank-Seeds pro Teststufe (Komponente/Integration/System); versioniert, idempotent, mit Rollback/Teardown.</li>
  <li><strong>Ephemere Umgebungen:</strong> Containerisierte Datenbanken (z. B. Testcontainers), Snapshots, „Infrastructure as Code“.</li>
  <li><strong>Service-Virtualisierung/Mocks:</strong> Externe Abhängigkeiten durch Stub/Mock/Contract-Tests ersetzen; kontrollierte Testdaten an Endpunkten.</li>
  <li><strong>Subset- &amp; Masking-Jobs:</strong> Nightly-Extrakte aus Produktion → Masking → Referenz-Subset → Artefakt-Registry.</li>
  <li><strong>Aufräumen &amp; Data Lifecycle:</strong> Automatisiertes Löschen nach Lauf (Retention Policies), Vermeidung von Datenakkumulation.</li>
</ul>

<h2>
  Datenschutz, Sicherheit &amp; Compliance
  <span style="background-color:#8c564b; color:white; padding:4px 8px; border-radius:12px;">LF12a</span>
</h2>
<p>Der Umgang mit realitätsnahen Daten erfordert klare Richtlinien und Nachweise.</p>
<ul>
  <li><strong>DSGVO-Prinzipien:</strong> Datensparsamkeit, Zweckbindung, Speicherbegrenzung; personenbezogene Daten nur anonymisiert/pseudonymisiert.</li>
  <li><strong>Masking-Verfahren:</strong> Substitution (realistisch), Shuffling, Hashing/Tokenisierung, Rauschen/Verrauschung, Generalisierung.</li>
  <li><strong>Rechts- &amp; Auditfähigkeit:</strong> Datenherkunft, Maskingregeln, Freigaben und Löschkonzepte dokumentieren (Testdatenkataster).</li>
  <li><strong>Sicherheitsaspekte:</strong> Geheimnisse/Schlüssel nie in Testdatensätzen; Zugriff über Rollen/Rechte, Logging &amp; Monitoring.</li>
</ul>

<h2>
  Domänenspezifische Testdaten (Auswahl)
  <span style="background-color:#1f77b4; color:white; padding:4px 8px; border-radius:12px;">LF5</span>
</h2>
<ul>
  <li><strong>E-Commerce:</strong> Warenkörbe mit Gutscheinen, Preisstaffeln, Mehrwertsteuersätzen; Ausreißer (0 €, sehr hoher Betrag), Lagerbestände 0/1/Max.</li>
  <li><strong>Finanzen:</strong> IBAN/BIC-Formate (gültig/ungültig), Rundungsgrenzen, Negativ-/Nullbeträge, Zinsperioden, Valutadaten.</li>
  <li><strong>Internationalisierung:</strong> Unicode (Emoji, nicht-lateinische Schriften), Mehrsprachigkeit, Lokalisierung von Datums-/Zahlenformaten.</li>
  <li><strong>Zeitabhängigkeit:</strong> Zeitzonen, Sommerzeit-Umstellungen, Monatsenden, Schaltsekunde/-jahr („Time-Travel“-Tests).</li>
</ul>

<h2>
  Datenqualität &amp; Integrität als Testziel
  <span style="background-color:#17becf; color:white; padding:4px 8px; border-radius:12px;">LF11a</span>
</h2>
<p>Testdaten müssen die Regeln des Datenmodells widerspiegeln, um echte Fehler zu entlarven.</p>
<ul>
  <li><strong>Referenzintegrität:</strong> Fremdschlüssel-Beziehungen konsistent; definierte Lösch-/Update-Regeln.</li>
  <li><strong>Constraints &amp; Validierungen:</strong> NOT NULL, Unique, Check-Constraints, fachliche Plausibilitäten (z. B. Alter ≥ 18).</li>
  <li><strong>Qualitätsmetriken:</strong> Fehlende/duplizierte Werte, Ausreißer, Verteilungen – Abgleich gegen Produktionsstatistiken.</li>
</ul>

<h2>
  Best Practices &amp; Anti-Patterns
  <span style="background-color:#9467bd; color:white; padding:4px 8px; border-radius:12px;">LF8</span>
</h2>
<ul>
  <li><strong>Do:</strong> Testdaten aus Risiken ableiten; Randfälle zuerst; deterministische Seeds; Daten &amp; Skripte versionieren; „Given/When/Then“-Orakel dokumentieren.</li>
  <li><strong>Do:</strong> Testdaten je Teststufe differenzieren (klein &amp; isoliert in Unit-Tests, realistischer in System-/Abnahmetests).</li>
  <li><strong>Don’t:</strong> Ungeprüfte Produktionskopien verwenden; manuell „zusammengeklickte“ Daten ohne Nachvollziehbarkeit; geteilte, langlebige Testdatenbanken mit Seiteneffekten.</li>
</ul>

<h2>
  Beispielkataloge für schnelle Anwendung
  <span style="background-color:#1f77b4; color:white; padding:4px 8px; border-radius:12px;">LF5</span>
</h2>
<ul>
  <li><strong>Personenname (I18N):</strong> „Zoë“, „Łukasz“, „李雷“, „O’Connor“, „Anne-Marie“, sehr lange Namen (255 Zeichen), Leer- und Sonderzeichen.</li>
  <li><strong>E-Mail:</strong> gültig (<em>a.b+tag@example.co.uk</em>), ungültig (ohne „@“, führende/trailing Punkte, überlange lokale Teile).</li>
  <li><strong>Datum:</strong> 29.02.2024 (Schaltjahr), 31.04. (ungültig), Übergänge 23:59:59 → 00:00:00; DST-Wechsel.</li>
  <li><strong>Zahl:</strong> 0, −1, sehr große/kleine Werte, Rundung (Bankers’ Rounding), NaN/∞ (falls relevant).</li>
  <li><strong>Beziehungen:</strong> Bestellung ohne Kund:in (negativ), Bestellung mit nicht verfügbarem Artikel (negativ), vollständige Kette (positiv).</li>
</ul>

<h2>
  Dokumentation &amp; Rückverfolgbarkeit
  <span style="background-color:#8c564b; color:white; padding:4px 8px; border-radius:12px;">LF12a</span>
</h2>
<p>Ein <em>Testdatenkataster</em> bündelt Herkunft, Erzeugungslogik, Masking-Regeln, Verantwortlichkeiten, Versionen und Aufbewahrungsfristen. Für Abnahme und Audit werden Testfall ↔ Testdaten ↔ erwartetes Ergebnis ↔ Build/Commit verknüpft.</p>

<hr/>
<p><strong>Quelle:</strong> Lernfelder 5 (Testprozess &amp; Dokumentation), 7 (CI/CD &amp; Umgebungen), 8 (Testdesign-Verfahren), 11a (Architektur &amp; Datenintegrität), 12a (Dokumentation &amp; Compliance); ISTQB® CTFL Lehrplan 2025 (Statische &amp; dynamische Testverfahren, Testdatenableitung, Grenzwertanalyse, Review &amp; Reporting).</p>
