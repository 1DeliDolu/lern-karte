<h1>Software-Test – Dynamische &amp; Statische Testverfahren (Black Box, White Box, Review, Extremwertetest)</h1>

<h2>
  Einordnung in die Lernfelder
  <span style="background-color:#1f77b4; color:white; padding:4px 8px; border-radius:12px;">Lernfeld 5</span>
  <span style="background-color:#9467bd; color:white; padding:4px 8px; border-radius:12px;">Lernfeld 8</span>
  <span style="background-color:#17becf; color:white; padding:4px 8px; border-radius:12px;">Lernfeld 11a</span>
  <span style="background-color:#8c564b; color:white; padding:4px 8px; border-radius:12px;">Lernfeld 12a</span>
</h2>
<p>Software-Test ist ein systematischer Prozess zur Feststellung von Fehlerwirkungen und Risiken in Software-Artefakten. In <strong>LF5</strong> wird der vollständige Testprozess (Planung, Durchführung, Auswertung, Dokumentation) verankert. <strong>LF8</strong> fokussiert Testdesign-Verfahren (z. B. Äquivalenzklassen, Grenzwerte, Überdeckungsmaße). <strong>LF11a</strong> stärkt Testbarkeit durch Architektur/Modularisierung. <strong>LF12a</strong> fordert prüf- und abnahmefähige Nachweise (Testfälle, Protokolle, Abnahmebericht).</p>

<h2>
  Grundlagen des Software-Testens (Begriffe, Ziele)
  <span style="background-color:#1f77b4; color:white; padding:4px 8px; border-radius:12px;">LF5</span>
</h2>
<p>Testen ist das <em>planmäßige</em> Ausführen oder Prüfen von Software, um Abweichungen zwischen <strong>Ist</strong>- und <strong>Soll</strong>-Verhalten aufzudecken, Qualitätseigenschaften zu bewerten und Risiken zu reduzieren. Zentrale Ziele: Fehlerwirkungen sichtbar machen, Vertrauen in Releases erhöhen, regressionsbedingte Risiken kontrollieren, objektive Entscheidungsgrundlagen (Go/No-Go) liefern.</p>
<ul>
  <li><strong>Artefakte:</strong> Teststrategie/-plan, Testfälle, Testdaten, Testumgebung, Protokolle, Abweichungsberichte.</li>
  <li><strong>Kriterien:</strong> Eintritts-/Austrittskriterien (z. B. „Build grün, Datenbank-Mock bereit“, „&ge; 80 % Zweigüberdeckung erreicht, kritische Defekte geschlossen“).</li>
  <li><strong>Teststufen:</strong> Komponente → Integration → System → Abnahme (jeweils mit klaren Zielen &amp; Verantwortlichkeiten).</li>
</ul>

<h2>
  Statische Testverfahren (ohne Ausführung des Codes)
  <span style="background-color:#1f77b4; color:white; padding:4px 8px; border-radius:12px;">LF5</span>
</h2>
<p>Statische Verfahren identifizieren Mängel früh und kosteneffizient, bevor sie in der Ausführung sichtbar werden. Sie verbessern Verständlichkeit, Wartbarkeit und Konformität.</p>

<h3>
  Reviews &amp; Inspektionen
  <span style="background-color:#1f77b4; color:white; padding:4px 8px; border-radius:12px;">LF5</span>
</h3>
<ul>
  <li><strong>Informelles Review/Peer-Review:</strong> Schnelle Durchsicht (z. B. Pull Request) mit Fokus auf Verständlichkeit, Stil, offensichtliche Fehler.</li>
  <li><strong>Walkthrough:</strong> Autor:in führt das Team strukturiert durch Artefakt (z. B. Architekturentscheidung, Testplan), Feedback wird gesammelt.</li>
  <li><strong>Technisches Review:</strong> Expert:innen prüfen Normkonformität, Architekturprinzipien, Sicherheitsaspekte.</li>
  <li><strong>Inspektion:</strong> Streng formal (Rollen: Moderator:in, Autor:in, Protokollant:in); Checklisten, Metriken (z. B. Defekte pro Seite), Nachverfolgung.</li>
</ul>
<ul>
  <li><strong>Typische Befunde:</strong> Verstoß gegen Codierregeln, unklare Anforderungen, nicht testbare Akzeptanzkriterien, fehlende Fehlerbehandlung.</li>
  <li><strong>Ergebnisartefakte:</strong> Review-Protokoll, Maßnahmenliste, aktualisierte Artefakte (Code, Tests, Doku).</li>
</ul>

<h2>
  Dynamische Testverfahren (mit Ausführung des Codes)
  <span style="background-color:#9467bd; color:white; padding:4px 8px; border-radius:12px;">LF8</span>
</h2>
<p>Dynamische Tests setzen das Testobjekt in Bewegung. Sie unterscheiden sich nach <strong>Testbasis</strong> (Fach-/Techniksicht), <strong>Abstraktion</strong> (Komponente–System) und <strong>Ziel</strong> (funktional, nicht-funktional).</p>
<ul>
  <li><strong>Black-Box-Tests:</strong> Ableitung der Testfälle aus Anforderungen/Bedienoberflächen/Use-Cases; interne Struktur bleibt unberücksichtigt.</li>
  <li><strong>White-Box-Tests:</strong> Ableitung aus Code/Design; Ziel ist strukturelle Überdeckung (Anweisung/Zweig/Pfad).</li>
  <li><strong>Grey-Box-Tests:</strong> Kombination – z. B. fachliche Szenarien mit Kenntnis wichtiger Zustände/Schnittstellen.</li>
</ul>

<h3>
  Black-Box-Testdesign (funktionsorientiert)
  <span style="background-color:#9467bd; color:white; padding:4px 8px; border-radius:12px;">LF8</span>
</h3>
<ul>
  <li><strong>Äquivalenzklassenbildung:</strong> Fachlich gleichwertige Eingabebereiche bilden (1 Repräsentant je Klasse). Beispiel: Feld „Alter“ mit gültig 18–65, ungültig &lt;18, &gt;65.</li>
  <li><strong>Grenzwertanalyse/Extremwertetest:</strong> Fälle dicht an Grenzen erzeugen (min−1, min, min+1, max−1, max, max+1).</li>
  <li><strong>Entscheidungstabellen:</strong> Regeln/Kombinationen systematisch abdecken (z. B. Rabattlogik, Berechtigungen).</li>
  <li><strong>Zustandsbasierte Tests:</strong> Zustandsautomat, Übergänge, verbotene Sequenzen (z. B. Warenkorb → Zahlung).</li>
  <li><strong>Kombinatorik (Pairwise):</strong> Minimiert Testfälle bei vielen Parametern, deckt alle Paar-Kombinationen ab.</li>
</ul>

<h3>
  White-Box-Testdesign (strukturell)
  <span style="background-color:#9467bd; color:white; padding:4px 8px; border-radius:12px;">LF8</span>
</h3>
<ul>
  <li><strong>Anweisungsüberdeckung (Statement):</strong> Jede Anweisung mindestens einmal ausführen.</li>
  <li><strong>Zweig-/Entscheidungsüberdeckung (Branch/Decision):</strong> Beide Verzweigungsrichtungen (true/false) durchlaufen.</li>
  <li><strong>Bedingungs-/MC/DC-Überdeckung:</strong> Einzelne Bedingungen und ihre Auswirkung auf Entscheidungen prüfen; in sicherheitskritischen Bereichen relevant.</li>
  <li><strong>Pfadüberdeckung:</strong> Möglichst viele unabhängige Pfade (zyklomatische Komplexität als Anhaltspunkt) testen.</li>
</ul>

<h3>
  Extremwertetest (Grenzwertanalyse) – Vorgehen &amp; Beispiel
  <span style="background-color:#9467bd; color:white; padding:4px 8px; border-radius:12px;">LF8</span>
</h3>
<p><strong>Vorgehen:</strong> (1) Wertebereich und Randwerte bestimmen, (2) gültige/ungültige Klassen trennen, (3) je Grenze min−1/min/min+1 bzw. max−1/max/max+1 testen, (4) Ausgabewerte/Fehlermeldungen überprüfen, (5) negative Tests einschließen.</p>
<ul>
  <li><strong>Beispiel – Altersvalidierung 18–65:</strong>
    <ul>
      <li>Ungültig: 17 (min−1), 66 (max+1) → erwartete Fehlermeldung.</li>
      <li>Grenzen: 18 (min), 65 (max) → erwartete Akzeptanz.</li>
      <li>Innen: 19 (min+1), 64 (max−1) → erwartete Akzeptanz.</li>
    </ul>
  </li>
</ul>

<h2>
  Testplanung, Ausführung &amp; Dokumentation
  <span style="background-color:#1f77b4; color:white; padding:4px 8px; border-radius:12px;">LF5</span>
  <span style="background-color:#8c564b; color:white; padding:4px 8px; border-radius:12px;">LF12a</span>
</h2>
<p>Ein belastbarer Testprozess umfasst definierte Ziele, Prioritäten und Nachweise. Ergebnisse müssen reproduzierbar und nachvollziehbar sein.</p>
<ul>
  <li><strong>Planung:</strong> Risikoanalyse, Auswahl der Verfahren (z. B. für sicherheitskritische Pfade White-Box mit hoher Überdeckung; für Business-Logik Black-Box mit Entscheidungstabellen).</li>
  <li><strong>Ausführung:</strong> Versionierte Testumgebung, kontrollierte Testdaten, klare Orchestrierung (Build &amp; Deploy), Protokollierung von Ist-Ergebnis/Konsolen- und Logausgaben.</li>
  <li><strong>Dokumentation:</strong> Testfallkatalog (Vorbedingungen, Schritte, erwartete Ergebnisse), Defektberichte (Schweregrad, Reproduktion, Umgebung), Status-/Abschlussberichte.</li>
  <li><strong>Rückverfolgbarkeit:</strong> Anforderungen ↔ Testfälle ↔ Defekte ↔ Commits/Builds – unterstützt Abnahme und Compliance.</li>
</ul>

<h2>
  Testbarkeit, Architektur &amp; Überdeckungsziele
  <span style="background-color:#17becf; color:white; padding:4px 8px; border-radius:12px;">LF11a</span>
</h2>
<p>Hohe Testbarkeit entsteht durch modulare Architektur, klare Schnittstellen, deterministisches Verhalten und Dependency Injection. Messbare Ziele (z. B. &ge; 70 % Branch-Coverage in sicherheitskritischen Modulen, definierte Leistungs-/Sicherheitskriterien) erleichtern die Steuerung.</p>

<h2>
  Best Practices &amp; typische Stolpersteine
  <span style="background-color:#9467bd; color:white; padding:4px 8px; border-radius:12px;">LF8</span>
</h2>
<ul>
  <li><strong>Do:</strong> Risiken priorisieren, Testdesign-Methoden bewusst wählen, Randfälle zuerst, aussagekräftige Orakel (Erwartungswerte), Daten fabrikmäßig erzeugen.</li>
  <li><strong>Do:</strong> Automatisierung in CI/CD integrieren; Metriken (Defektdichte, Review-Yield, Überdeckung) regelmäßig reporten.</li>
  <li><strong>Don’t:</strong> Nur „Happy Path“ testen; nicht reproduzierbare Umgebungen; fehlende Negativtests; unklare Abweichungsberichte.</li>
</ul>

<h2>
  Kompakte Beispiele je Verfahren
  <span style="background-color:#9467bd; color:white; padding:4px 8px; border-radius:12px;">LF8</span>
</h2>
<ul>
  <li><strong>Black Box – Entscheidungstabelle (Rabatt):</strong>
    <ul>
      <li>Regeln: Stammkund:in? (Ja/Nein), Warenwert &gt; 100 €? (Ja/Nein), Gutschein? (Ja/Nein).</li>
      <li>Teste alle Regelkombinationen → korrekter Rabattprozentsatz, Priorisierung/Exklusivität geklärt.</li>
    </ul>
  </li>
  <li><strong>White Box – Zweigüberdeckung (Eingabefilter):</strong>
    <ul>
      <li>Fälle erzwingen <em>if</em>-Äste: leer, nur Buchstaben, alphanumerisch, Sonderzeichen → jeder Zweig (true/false) wird einmal durchlaufen.</li>
    </ul>
  </li>
  <li><strong>Review – Checkliste (Code-Inspektion):</strong>
    <ul>
      <li>Namenskonventionen, Fehlerbehandlung, Nebenläufigkeit, Logging, Testabdeckung, Sicherheitsregeln (Input-Validierung, Geheimnisse).</li>
    </ul>
  </li>
  <li><strong>Extremwertetest – Datumsspanne:</strong>
    <ul>
      <li>Gültig 01.01.2024–31.12.2025 → prüfe 31.12.2023, 01.01.2024, 02.01.2024 … 30.12.2025, 31.12.2025, 01.01.2026 inkl. Zeitzonen-/Schaltjahr-Aspekte.</li>
    </ul>
  </li>
</ul>

<hr/>
<p><strong>Quelle:</strong> Lernfelder 5, 8, 11a, 12a (Unterrichts- &amp; Prüfungsrelevanz); ISTQB® CTFL Lehrplan 2025 (Kapitel zu statischen und dynamischen Testverfahren, Testdesign, Überdeckung, Review-Arten, Berichts- und Dokumentationsanforderungen).</p>
