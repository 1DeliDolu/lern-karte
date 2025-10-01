<h1>Debugging &amp; Breakpoints – Fehler erkennen, analysieren und beheben</h1>

<h2>
  Einordnung in die Lernfelder
  <span style="background-color:#1f77b4; color:white; padding:4px 8px; border-radius:12px;">Lernfeld 5</span>
  <span style="background-color:#2ca02c; color:white; padding:4px 8px; border-radius:12px;">Lernfeld 6</span>
  <span style="background-color:#d62728; color:white; padding:4px 8px; border-radius:12px;">Lernfeld 7</span>
  <span style="background-color:#9467bd; color:white; padding:4px 8px; border-radius:12px;">Lernfeld 8</span>
  <span style="background-color:#ff7f0e; color:white; padding:4px 8px; border-radius:12px;">Lernfeld 10a</span>
  <span style="background-color:#17becf; color:white; padding:4px 8px; border-radius:12px;">Lernfeld 11a</span>
  <span style="background-color:#8c564b; color:white; padding:4px 8px; border-radius:12px;">Lernfeld 12a</span>
</h2>
<p>Debugging und der gezielte Einsatz von Breakpoints sind Querschnittsthemen: LF5 verankert Testprozess und Dokumentation, LF6 überführt Debugging in Incident-/Problem-Management und Monitoring, LF7 bettet es in DevOps (CI/CD, Staging, Telemetrie) ein, LF8 liefert testmethodische Grundlagen (z. B. Grenzwertanalyse), LF10a fokussiert UI/UX-Fehlerbilder, LF11a stärkt Debuggability durch Modularisierung und Clean Code, LF12a fordert projektsichere Abläufe und Test-/Abnahmedokumente.</p>

<h2>
  Testen vs. Debugging (Begriffsabgrenzung)
  <span style="background-color:#1f77b4; color:white; padding:4px 8px; border-radius:12px;">LF5</span>
</h2>
<p><strong>Testen</strong> deckt Fehlerzustände und -wirkungen auf (dynamisch) bzw. findet diese direkt (statisch); <strong>Debugging</strong> ist die anschließende Ursachenanalyse und Behebung. Typischer Ablauf: Reproduktion &rarr; Diagnose (Fehlerzustand lokalisieren) &rarr; Behebung &rarr; Fehlernachtest &rarr; Regressionstest.</p>
<p>Gute Praxis im SDLC: frühes Testen (Shift-Left), passende Teststufen/-arten und Einbindung in Prozesse (Planung, Steuerung, Reporting). Debugging profitiert davon unmittelbar.</p>

<h2>
  Breakpoints im Detail: Arten, Einsatz, Wirkung
  <span style="background-color:#17becf; color:white; padding:4px 8px; border-radius:12px;">LF11a</span>
</h2>

<h3>
  Arten von Breakpoints
  <span style="background-color:#17becf; color:white; padding:4px 8px; border-radius:12px;">LF11a</span>
</h3>
<ul>
  <li><strong>Zeilen-/Regel-Breakpoint:</strong> Hält an einer spezifischen Codezeile, um Stack, Variablen und Nebenwirkungen zu inspizieren.</li>
  <li><strong>Bedingter Breakpoint:</strong> Stoppt nur, wenn eine Bedingung erfüllt ist (z. B. <em>i == 0</em> oder <em>obj == null</em>) – reduziert Rauschen bei Schleifen/Events.</li>
  <li><strong>Funktions-/Methoden-Breakpoint:</strong> Stoppt bei Eintritt/Austritt, nützlich für Querschnittsfunktionen und Inversion-of-Control.</li>
  <li><strong>Daten-/Watchpoint:</strong> Hält, sobald eine Speicherzelle/Variable gelesen oder verändert wird – ideal bei unerklärten Zustandswechseln.</li>
  <li><strong>Ausnahme-/Exception-Breakpoint:</strong> Stoppt bei geworfenen (auch gefangenen) Exceptions, um früh die Ursache zu sehen.</li>
  <li><strong>Logpoint/Tracepoint:</strong> Schreibt zur Laufzeit Logausgaben statt zu stoppen – geeignet in Live-Systemen mit minimaler Störung.</li>
</ul>
<p>Die Wirksamkeit steigt mit einer modularen Architektur und klaren Schnittstellen (SRP/SoC, Kapselung): Fehlerorte werden enger eingegrenzt, Breakpoints lassen sich gezielt setzen.</p>

<h3>
  Schrittsteuerung &amp; Inspektion
  <span style="background-color:#17becf; color:white; padding:4px 8px; border-radius:12px;">LF11a</span>
</h3>
<ul>
  <li><strong>Step Over / Step Into / Step Out:</strong> Steuerung der Ausführungstiefe entlang der Call-Chain.</li>
  <li><strong>Call-Stack-Analyse:</strong> Kontextwechsel, Rekursion, asynchrone Ketten sichtbar machen.</li>
  <li><strong>Watches &amp; Evaluate Expressions:</strong> Hypothesen schnell verifizieren (z. B. Vor-/Nachbedingungen).</li>
  <li><strong>Thread-/Task-Debugging:</strong> Thread-Freeze, Breakpoint-Filter, „stop all/one“ zur Jagd auf Race Conditions/Deadlocks.</li>
</ul>

<h2>
  Systematischer Debugging-Prozess im Betrieb (Incident &amp; Problem)
  <span style="background-color:#2ca02c; color:white; padding:4px 8px; border-radius:12px;">LF6</span>
</h2>
<p>Im Betrieb beginnt Debugging oft mit einem <em>Incident</em> (Störung). Strukturierte Bearbeitung: Ticket &rarr; Monitoring-Befunde &rarr; Reproduktion &rarr; Workaround/Behebung &rarr; <em>Known-Error</em> dokumentieren &amp; nachhaltig beseitigen (Problem-Management). FitSM fordert u. a. Trendanalysen, Erfassung bekannter Fehler und Pflege effektiver Workarounds.</p>
<p>Technische Basis ist lückenloses Monitoring (Systeme, Dienste, Netz, Logs, Ressourcen), das Alarme auslöst und Analysen stützt; Dashboards und Remote-Tools unterstützen die Ursachenfindung.</p>

<h2>
  Debugging in DevOps/CI-Kontexten
  <span style="background-color:#d62728; color:white; padding:4px 8px; border-radius:12px;">LF7</span>
</h2>
<p>DevOps verkürzt Feedbackschleifen: Fehler tauchen früh in CI auf, werden in produktionsähnlichen Umgebungen verifiziert und über Telemetrie/Monitoring zurückgespielt. Praktiken: CI, CD, Release-/Deploy-Stufen, Operate &amp; Monitor – jeweils mit klaren Kontrollpunkten für Debugging und Rollback.</p>

<h2>
  Testmethodik als Debugging-Hebel (Daten/Backend)
  <span style="background-color:#9467bd; color:white; padding:4px 8px; border-radius:12px;">LF8</span>
</h2>
<p>Äquivalenzklassen und Grenzwertanalyse führen zielgerichtet zu Fehlerwirkungen; passende Testdaten provozieren problematische Pfade, an denen Breakpoints ansetzen. So werden z. B. Off-by-One-Fehler am Rand sichtbar.</p>

<h2>
  Debugging in der UI/UX-Entwicklung
  <span style="background-color:#ff7f0e; color:white; padding:4px 8px; border-radius:12px;">LF10a</span>
</h2>
<p>UX-Tests unterscheiden sich vom Akzeptanztest: Sie untersuchen Nutzbarkeit, Erwartungskonformität und Dialogprinzipien – oft früh und iterativ. Debugging nutzt hier DevTools (Layout/Events/Netzwerk), Logpoints und gezielte Breakpoints in Event-Handlern.</p>
<p>Fehlerbehandlung gehört in die Anwenderdokumentation (z. B. typische Fehlermeldungen, Schritte zur Behebung) – das schließt den Debugging-Kreislauf zur Nutzerseite.</p>

<h2>
  Architektur &amp; Clean Code erhöhen die Debuggability
  <span style="background-color:#17becf; color:white; padding:4px 8px; border-radius:12px;">LF11a</span>
</h2>
<p>Modularisierung, saubere Schnittstellen und Clean-Code-Prinzipien (KISS, DRY, SoC, SOLID) verbessern Lesbarkeit, Wartbarkeit und Beobachtbarkeit – und damit die Wirksamkeit von Breakpoints und die Geschwindigkeit der Ursachenanalyse.</p>

<h2>
  Dokumentation, Fehlermanagement &amp; Reports
  <span style="background-color:#1f77b4; color:white; padding:4px 8px; border-radius:12px;">LF5</span>
  <span style="background-color:#8c564b; color:white; padding:4px 8px; border-radius:12px;">LF12a</span>
</h2>
<p>LF5 verankert einen vollständigen Testprozess (Planung, Kriterien, Umgebungen, Steuerung, Dokumentation). Debugging-Erkenntnisse fließen in Fehlerberichte, Nachtests und Regressionen ein.</p>
<p>ISTQB konkretisiert Status-/Abschlussberichte, Metriken und das Fehlermanagement (z. B. klare Fehlerberichte, Rückverfolgbarkeit, Konfigurationsmanagement).</p>
<p>LF12a fordert projekttaugliche Test- und Abnahmedokumente (Testplanung, Spezifikation, Abnahmebericht) sowie Benutzer-/Installationsunterlagen, die auch typische Fehlerszenarien adressieren.</p>

<h2>
  Typische Fehlerarten &amp; gezielter Breakpoint-Einsatz
  <span style="background-color:#9467bd; color:white; padding:4px 8px; border-radius:12px;">LF8</span>
</h2>
<ul>
  <li><strong>Rechen-/Operatorfehler:</strong> Breakpoints an Berechnungsstellen + Watches für Operanden/Ergebnisse.</li>
  <li><strong>Schnittstellen-/Typinkompatibilitäten:</strong> Funktions-Breakpoints an Übergabepunkten; Exception-Breakpoints auf Serialisierung/Mapping.</li>
  <li><strong>Datenfehler/Initialisierung:</strong> Daten-Breakpoints/Watchpoints auf kritische Felder; frühe Validierungen.</li>
</ul>

<h2>
  Praxisleitfaden: Vorgehensmuster beim Debuggen
  <span style="background-color:#1f77b4; color:white; padding:4px 8px; border-radius:12px;">LF5</span>
</h2>
<ul>
  <li><strong>Kontext sichern:</strong> Log/Monitoring, genaue Fehlermeldung, betroffene Version, Schritte zur Reproduktion.</li>
  <li><strong>Hypothesen bilden:</strong> Annahmen notieren und mit Breakpoints/Watches gezielt prüfen („falsifizieren“).</li>
  <li><strong>Divide &amp; Conquer:</strong> Komponenten/Schichten isolieren; Binärsuche im Codepfad (Breakpoints als Marker).</li>
  <li><strong>Shift-Left nutzen:</strong> TDD/ATDD/BDD: Vorab-Tests minimieren Debuggingaufwand und beschleunigen Reproduktion.</li>
  <li><strong>Nachhaltig abschließen:</strong> Fehlernachtest &amp; Regression, Dokumentation, Monitoring-Alarm prüfen, Lessons Learned.</li>
</ul>

<h2>
  Do’s &amp; Don’ts beim Einsatz von Breakpoints
  <span style="background-color:#17becf; color:white; padding:4px 8px; border-radius:12px;">LF11a</span>
</h2>
<ul>
  <li><strong>Do:</strong> Bedingte Breakpoints statt „Stop-Flut“; Logpoints in zeitkritischen Pfaden; Exception-Breakpoints global aktivieren.</li>
  <li><strong>Do:</strong> Daten-Breakpoints an invarianten Domänenwerten; Thread-spezifische Filter in Konkurrenzsituationen.</li>
  <li><strong>Don’t:</strong> Kein Debuggen in Prod ohne Abstimmung; kein „printf-Debugging“ ohne Struktur – Log-Levels/-Kontext beachten (KM/CI-Dashboards nutzen).</li>
</ul>

<hr/>
<p><strong>Quelle:</strong> LF5 „Software testen und dokumentieren“; LF6 „Serviceanfragen bearbeiten/analysieren (Monitoring, FitSM)“; LF7 „DevOps (Plan–Code–Build–Test–Release–Deploy–Operate–Monitor)“; LF8 „Testverfahren (Äquivalenzklassen/Grenzwerte)“; LF10a „Benutzerschnittstellen testen/dokumentieren“; LF11a „Modularisierung, Clean Code“; LF12a „Test-/Abnahme-/Benutzer-/Installationsdokumente“; ISTQB® CTFL Lehrplan 2025.</p>
