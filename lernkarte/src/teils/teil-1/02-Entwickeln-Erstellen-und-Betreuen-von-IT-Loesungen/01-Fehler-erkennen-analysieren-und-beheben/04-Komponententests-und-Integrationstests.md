<h1>Komponententest, Integrationstest, Systemtest</h1>

<h2>
  Einordnung in die Lernfelder
  <span style="background-color:#1f77b4; color:white; padding:4px 8px; border-radius:12px;">Lernfeld 5</span>
  <span style="background-color:#9467bd; color:white; padding:4px 8px; border-radius:12px;">Lernfeld 8</span>
  <span style="background-color:#d62728; color:white; padding:4px 8px; border-radius:12px;">Lernfeld 7</span>
  <span style="background-color:#17becf; color:white; padding:4px 8px; border-radius:12px;">Lernfeld 11a</span>
  <span style="background-color:#8c564b; color:white; padding:4px 8px; border-radius:12px;">Lernfeld 12a</span>
</h2>
<p>Die dreistufige Teststruktur – <strong>Komponententest</strong>, <strong>Integrationstest</strong>, <strong>Systemtest</strong> – ist Kern des Testprozesses (LF5) und knüpft an methodisches Testdesign (LF8), CI/CD-Integration (LF7), Architektur- und Modularisierungsprinzipien (LF11a) sowie dokumentations- und abnahmerelevante Nachweise (LF12a) an.</p>

<h2>
  Komponententest (Unit-/Modultest)
  <span style="background-color:#1f77b4; color:white; padding:4px 8px; border-radius:12px;">LF5</span>
  <span style="background-color:#9467bd; color:white; padding:4px 8px; border-radius:12px;">LF8</span>
  <span style="background-color:#17becf; color:white; padding:4px 8px; border-radius:12px;">LF11a</span>
</h2>
<p><strong>Ziel:</strong> Verhalten einzelner, isolierter Bausteine (Funktionen, Klassen, Module) gegen spezifizierte Vor- und Nachbedingungen prüfen. Fokus auf <em>Korrektheit</em>, <em>Grenzfälle</em>, <em>Fehlerbehandlung</em> und <em>Determinismus</em>.</p>
<p><strong>Testbasis:</strong> Detail-Design, Schnittstellenspezifikationen, Vertragsbedingungen (Pre-/Postconditions), Invarianten. <strong>Testobjekte:</strong> Pure Functions, Services, Repositories, Validatoren.</p>
<ul>
  <li><strong>Isolierung &amp; Testdoubles:</strong> Stubs/Mocks/Fakes für externe Abhängigkeiten (Datenbank, Webservice, Uhrzeit, Zufall); Dependency Injection erleichtert Austauschbarkeit.</li>
  <li><strong>Testdesign:</strong> Äquivalenzklassen, Grenzwertanalyse, Entscheidungs­tabellen; strukturelle Ziele wie Anweisungs- und Zweigüberdeckung.</li>
  <li><strong>Abschlusskriterien:</strong> Definierte Mindestüberdeckung, alle kritischen Branches getestet, bekannte Defekte behoben, Reviews der Tests.</li>
  <li><strong>Automatisierung:</strong> Ausführung bei jedem Commit (CI), schnelle Laufzeiten, deterministische Seeds für Reproduzierbarkeit.</li>
</ul>
<p><strong>Beispiele:</strong></p>
<ul>
  <li>Eingabevalidierung (min/max, Format, leere Werte) inkl. Ausnahmebehandlung.</li>
  <li>Berechnungen (Steuern, Rabatte, Rundungen) inkl. Extremwerten und numerischer Stabilität.</li>
  <li>Zustandsfreie Parser/Mapper mit Negativtests (ungültige Payloads, fehlende Felder).</li>
</ul>

<h2>
  Integrationstest
  <span style="background-color:#1f77b4; color:white; padding:4px 8px; border-radius:12px;">LF5</span>
  <span style="background-color:#9467bd; color:white; padding:4px 8px; border-radius:12px;">LF8</span>
  <span style="background-color:#d62728; color:white; padding:4px 8px; border-radius:12px;">LF7</span>
</h2>
<p><strong>Ziel:</strong> Zusammenwirken mehrerer Komponenten über <em>Schnittstellen</em> prüfen – Datenflüsse, Protokolle, Verträge (Contracts), Fehlerpropagation, Transaktionen. Fokus auf <em>Interoperabilität</em> und <em>Seiteneffekte</em>.</p>
<p><strong>Schnittstellenarten:</strong> Synchron (Funktionsaufruf, REST/gRPC), asynchron (Messaging/Queues), Datenpersistenz (DB/Cache), Files/Events.</p>
<ul>
  <li><strong>Integrationsstrategien:</strong>
    <ul>
      <li><em>Top-down:</em> Frühe UI/Service-Logik, fehlende Tiefe via Stubs ersetzt.</li>
      <li><em>Bottom-up:</em> Erst niedrigere Schichten, fehlende Aufrufer via Treiber.</li>
      <li><em>Sandwich/inkrementell:</em> Kombination nach Risiko/Priorität; vermeidet „Big-Bang“.</li>
      <li><em>Contract-Tests:</em> Produzent–Konsument-Verträge (z. B. Schema, Statuscodes) werden automatisiert verifiziert.</li>
    </ul>
  </li>
  <li><strong>Daten &amp; Konsistenz:</strong> Repliken/Containerdatenbanken, Seed-Skripte, idempotente Setups; Prüfung von Transaktionsgrenzen und eventual consistency (Retries, Outbox).</li>
  <li><strong>Fehlerbilder:</strong> Inkompatible Datenformate, Timeouts/Retries, Dead Letter Queues, Zeichensatz-/Zeitzonenprobleme.</li>
  <li><strong>Automatisierung:</strong> Stage-spezifische Pipelines (CI → Test → Staging); Service-Virtualisierung zur Entkopplung externer Drittsysteme.</li>
</ul>
<p><strong>Beispiel:</strong> Bestellservice ruft Zahlungs- und Lagerdienst: Prüfe Erfolgsfall, Teilfehler (Zahlung ok, Lager fail → Rollback), Idempotenz bei Retry, korrekte Events bei Erfolg/Fehlschlag.</p>

<h2>
  Systemtest (End-to-End)
  <span style="background-color:#1f77b4; color:white; padding:4px 8px; border-radius:12px;">LF5</span>
  <span style="background-color:#9467bd; color:white; padding:4px 8px; border-radius:12px;">LF8</span>
  <span style="background-color:#8c564b; color:white; padding:4px 8px; border-radius:12px;">LF12a</span>
</h2>
<p><strong>Ziel:</strong> Vollständiges, integriertes System gegen <em>funktionale</em> und <em>nicht-funktionale</em> Anforderungen prüfen – produktionsähnliche Umgebung, realistische Workloads, Endnutzerperspektive.</p>
<ul>
  <li><strong>Funktional:</strong> Use-Cases/Anwendungsfälle, Geschäftsregeln, End-to-End-Durchstiche inkl. Fehlermeldungen und Wiederherstellbarkeit.</li>
  <li><strong>Nicht-funktional:</strong> Performance (Antwortzeit/Throughput), Sicherheit (AuthZ/AuthN, OWASP), Zuverlässigkeit (Fehlertoleranz), Benutzbarkeit, Barrierefreiheit, Kompatibilität.</li>
  <li><strong>Umgebung:</strong> Produktionsnahe Konfiguration (Skalierung, Caching, TLS, Observability), kontrollierte Testdaten und reale Integrationspartner oder freigegebene Mocks.</li>
  <li><strong>Regression &amp; Orchestrierung:</strong> Smoke-/Sanity-Tests, risikobasierte Regression, Versionierung und Rückverfolgbarkeit (Anforderung ↔ Testfall ↔ Build).</li>
</ul>
<p><strong>Abgrenzung:</strong> Der <em>Abnahmetest</em> (UAT) folgt häufig nach dem Systemtest und wird durch Auftraggeber:in/Key-User durchgeführt – formale Grundlage für Freigabe/Abnahme.</p>

<h2>
  Zusammenspiel der Teststufen &amp; Risiken
  <span style="background-color:#17becf; color:white; padding:4px 8px; border-radius:12px;">LF11a</span>
</h2>
<p>Architektur (Kapselung, saubere Schnittstellen, klare Verträge) bestimmt die Wirksamkeit der Stufen. Hohe <em>Testbarkeit</em> (DI, Ports/Adapter, stabile IDs, deterministische Zeit) verschiebt Fehler früh in Komponententests; Integrationstests bestätigen Verträge; Systemtests bewerten Nutzerwert und Betriebseigenschaften.</p>
<ul>
  <li><strong>Anti-Pattern:</strong> „Big-Bang“-Integration, unklare Verantwortlichkeiten, unzureichende Testdaten, versteckte Umgebungsdrift.</li>
  <li><strong>Best Practice:</strong> Risikobasierte Testfallauswahl, Testpyramide (viel Unit, angemessen Integration, gezielt E2E), kontinuierliche Regression in CI/CD.</li>
</ul>

<h2>
  Artefakte, Kriterien &amp; Dokumentation je Stufe
  <span style="background-color:#1f77b4; color:white; padding:4px 8px; border-radius:12px;">LF5</span>
  <span style="background-color:#8c564b; color:white; padding:4px 8px; border-radius:12px;">LF12a</span>
</h2>
<ul>
  <li><strong>Eintrittskriterien:</strong> Build grün, Umgebungen bereit, Testdaten/Seeds vorhanden, Abhängigkeiten verfügbar, Risiken priorisiert.</li>
  <li><strong>Austrittskriterien:</strong> Definierte Abdeckungsziele erreicht, kritische Defekte geschlossen, Status-/Abschlussbericht erstellt, bekannte Restrisiken dokumentiert.</li>
  <li><strong>Nachweise:</strong> Testplan, Testfallspezifikationen, Protokolle, Defektberichte, Traceability-Matrix, Abnahmebericht (für System/UAT).</li>
</ul>

<h2>
  Beispiel-Mapping (kompakt)
  <span style="background-color:#9467bd; color:white; padding:4px 8px; border-radius:12px;">LF8</span>
</h2>
<ul>
  <li><strong>Komponente:</strong> Rabattberechnung – Äquivalenzklassen (Kundengruppe), Grenzwerte (100 €), Negativtests (ungültiger Gutschein).</li>
  <li><strong>Integration:</strong> Warenkorb ↔ Zahlservice ↔ Lager – Contract-Tests (API-Schema), Timeouts/Retry-Logik, Transaktionsgrenzen.</li>
  <li><strong>System:</strong> End-to-End „Bestellung bis Lieferung“ – Leistung bei Lastspitzen, Sicherheit (Rechte, Datenzugriff), Usability (Checkout-Fluss).</li>
</ul>

<hr/>
<p><strong>Quelle:</strong> Lernfelder 5 (Testprozess &amp; Stufen), 7 (CI/CD &amp; Orchestrierung), 8 (Testdesign &amp; Risikobewertung), 11a (Architektur &amp; Testbarkeit), 12a (Dokumentation &amp; Abnahme); ISTQB® CTFL Lehrplan 2025 (Begriffe, Teststufen, Kriterien, Testpyramide, nicht-funktionale Qualitätsmerkmale).</p>
