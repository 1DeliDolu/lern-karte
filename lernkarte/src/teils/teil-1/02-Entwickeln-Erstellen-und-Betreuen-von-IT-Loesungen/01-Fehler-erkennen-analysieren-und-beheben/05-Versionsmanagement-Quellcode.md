<h1>Versionsmanagement des Quellcodes</h1>

<h2>
  Einordnung in die Lernfelder
  <span style="background-color:#1f77b4; color:white; padding:4px 8px; border-radius:12px;">Lernfeld 5</span>
  <span style="background-color:#d62728; color:white; padding:4px 8px; border-radius:12px;">Lernfeld 7</span>
  <span style="background-color:#17becf; color:white; padding:4px 8px; border-radius:12px;">Lernfeld 11a</span>
  <span style="background-color:#8c564b; color:white; padding:4px 8px; border-radius:12px;">Lernfeld 12a</span>
</h2>
<p><strong>Versionsverwaltung</strong> ist ein Kernbaustein professioneller Softwareentwicklung: In LF5 wird sie als Entwicklungswerkzeug und Bestandteil der Systemdokumentation („Programmversionen, Versionsverwaltung“) verankert. In LF7 ist sie Basis der DevOps-Kette (Plan–Code–Build–Test–Release–Deploy–Operate–Monitor) und wird praxisnah mit <em>Git</em> behandelt. LF11a adressiert strukturiertes Quellcode- und Schnittstellen-Design, das die Nachvollziehbarkeit im Repository stärkt, und LF12a fordert projekttaugliche Nachweise/Abnahmen, die auf sauber versionierten Artefakten beruhen.</p>

<h2>
  Grundlagen & Ziele des Versionsmanagements
  <span style="background-color:#1f77b4; color:white; padding:4px 8px; border-radius:12px;">LF5</span>
</h2>
<p>Ein Versionsverwaltungssystem (VCS) speichert Zustände von Dateien, erlaubt parallele Arbeit, stellt Historie/Autorschaft bereit und macht Änderungen rückholbar. Es schafft die Basis für <em>Rückverfolgbarkeit</em>, <em>Qualitätssicherung</em> und <em>Wartbarkeit</em> – und gehört in moderne IDE-/Tool-Stacks.</p>
<ul>
  <li><strong>Commit:</strong> logisch zusammengehörige Änderung mit Nachricht, Zeitstempel und Autor.</li>
  <li><strong>Branch:</strong> isolierte Entwicklungslinie (Feature/Release/Hotfix).</li>
  <li><strong>Tag:</strong> unveränderliche Markierung (z. B. Release-Stand). </li>
  <li><strong>Remote/Clone/Pull/Push:</strong> Zusammenarbeit via zentralem/geteilt verteiltem Repository.</li>
</ul>

<h2>
  Git in der Praxis: Grundbefehle & Historienpflege
  <span style="background-color:#d62728; color:white; padding:4px 8px; border-radius:12px;">LF7</span>
</h2>
<p><em>Git</em> ist ein verbreitetes, verteiltes VCS: lokale Arbeitskopien, späterer Abgleich mit Remote, effiziente Branches und schnelle History-Operationen.</p>
<ul>
  <li><code>git add</code> &amp; <code>git commit</code> (mit aussagekräftigen Nachrichten), <code>--amend</code> für letzte Korrektur.</li>
  <li><code>git log</code> für Historie/Autoren; <code>git tag</code> zur Release-Markierung.</li>
  <li><code>git branch</code>, <code>git checkout</code>/<code>switch</code> für Zweige; <code>git merge</code> zum Zusammenführen. </li>
  <li><code>git pull</code>/<code>git push</code> für Team-Synchronisation; <code>git reset --soft/--hard</code> mit Bedacht einsetzen.</li>
</ul>

<h2>
  Branching- & Release-Strategien
  <span style="background-color:#d62728; color:white; padding:4px 8px; border-radius:12px;">LF7</span>
</h2>
<p>Ziele sind kurze Feedbackzyklen, beherrschbare Konflikte und reproduzierbare Releases. Typische Muster:</p>
<ul>
  <li><strong>Feature-Branching:</strong> pro Änderung eigener Branch → Code Review → Merge.</li>
  <li><strong>Release-/Hotfix-Branches:</strong> stabile Pflegezweige für Auslieferung und dringende Korrekturen.</li>
  <li><strong>Tags für Releases/Meilensteine:</strong> z. B. <em>v1.4.0</em>, <em>RC</em>-Stände.</li>
</ul>

<h2>
  DevOps-Integration: Von Commit bis Deployment
  <span style="background-color:#d62728; color:white; padding:4px 8px; border-radius:12px;">LF7</span>
</h2>
<p>Versionskontrolle triggert CI-Jobs (Build, Tests) und speist CD in Staging/Produktion; Probleme aus Betrieb/Monitoring fließen zurück – ein durchgängiger Regelkreis.</p>
<p>Git ist in diese Kette fest eingebunden; Konfigurationsmanagement-Tools und Testautomatisierung liefern schnelle Rückmeldungen zu Codeproblemen. </p>

<h2>
  Dokumentation & Rückverfolgbarkeit (Konfigurationsmanagement)
  <span style="background-color:#1f77b4; color:white; padding:4px 8px; border-radius:12px;">LF5</span>
  <span style="background-color:#8c564b; color:white; padding:4px 8px; border-radius:12px;">LF12a</span>
</h2>
<p>System-/Projektdokumentation referenziert Versionen und die Versionsverwaltung; damit bleiben Änderungen, Freigaben und Abnahmen nachvollziehbar.</p>
<p>Aus Testsicht unterstützt Konfigurationsmanagement die eindeutige Zuordnung von Anforderungen, Builds, Testfällen und Defekten – zentrale Forderung im ISTQB-Lehrplan.</p>

<h2>
  Reviews & Qualitätssicherung im Repository
  <span style="background-color:#1f77b4; color:white; padding:4px 8px; border-radius:12px;">LF5</span>
</h2>
<p>Pull-/Merge-Requests mit Review-Checklisten (Funktion, Architektur, Sicherheit) erhöhen Codequalität und Testbarkeit; Status-/Abschlussberichte beziehen sich auf definierte Versionen/Tags. (Vernetzung zu Testplanung, Reporting und Fehlermanagement nach ISTQB.)</p>

<h2>
  Repository-Layout, Modularität & Dokumentationsgeneratoren
  <span style="background-color:#17becf; color:white; padding:4px 8px; border-radius:12px;">LF11a</span>
</h2>
<p>Saubere Module, Schnittstellen und API-Dokumentation (z. B. mit Werkzeugen wie Sphinx/Doxygen) verbessern die Lesbarkeit der Historie und erleichtern Code-Navigation in großen Repos.</p>

<h2>
  Sicherheit & Compliance im Versionsmanagement
  <span style="background-color:#8c564b; color:white; padding:4px 8px; border-radius:12px;">LF12a</span>
</h2>
<ul>
  <li><strong>Zugriffskontrollen & geschützte Branches:</strong> Schreibrechte und Review-Pflicht für kritische Zweige.</li>
  <li><strong>Signierte Commits/Tags:</strong> Integrität/Autorschaft absichern (GPG/Sigstore).</li>
  <li><strong>Geheimnisse schützen:</strong> keine Secrets ins Repo; Scanner/Pre-Commit-Hooks einsetzen.</li>
  <li><strong>Artefakt-Nachweise:</strong> Releases mit Prüfsummen/Release-Notes dokumentieren (Audit-Tauglichkeit).</li>
</ul>

<h2>
  Anti-Patterns & Do’s
  <span style="background-color:#d62728; color:white; padding:4px 8px; border-radius:12px;">LF7</span>
</h2>
<ul>
  <li><strong>Don’t:</strong> Unstrukturierte „Megacommits“, binäre Großdateien ohne Strategie, erzwungenes Historienumschreiben (<em>force push</em>) auf gemeinsamen Branches.</li>
  <li><strong>Do:</strong> Kleine, thematisch saubere Commits; aussagekräftige Nachrichten; Branch-Namenskonventionen; Tags für Releases; PR-Reviews und CI-Checks vor dem Merge.</li>
</ul>

<h2>
  Kompakte Checkliste für die Prüfung
  <span style="background-color:#1f77b4; color:white; padding:4px 8px; border-radius:12px;">LF5</span>
</h2>
<ul>
  <li><strong>Begriffe:</strong> Commit, Branch, Merge, Tag, Remote, Pull/Push, Reset, Rebase (Konzept).</li>
  <li><strong>Workflows:</strong> Feature-Branch → PR/Review → Merge; Release-/Hotfix-Zweige; Tagging.</li>
  <li><strong>DevOps:</strong> CI-Trigger bei Commit; Tests/Builds/Deploys entlang der Pipeline. </li>
  <li><strong>Doku & CM:</strong> Versionen in System-/Projektdokumentation; Traceability Anforderungen↔Build↔Test↔Defekt. </li>
</ul>

<hr/>
<p><strong>Quelle:</strong> LF5 „Software testen und dokumentieren“ (IDE/Versionsverwaltung; Systemdokumentation: Programmversionen/Versionsverwaltung) ; LF7 „DevOps-Phasen, Versionskontrolle und Git-Praxis (Befehle, Branch/Tag/Merge)“; LF11a „Dokumentationswerkzeuge & Schnittstellen“ ; ISTQB® CTFL 2025 „Konfigurationsmanagement & Testberichterstattung“</p>

<img src="/images/git-workflow.png" alt="Git Workflow" style="max-width:100%;height:auto" />