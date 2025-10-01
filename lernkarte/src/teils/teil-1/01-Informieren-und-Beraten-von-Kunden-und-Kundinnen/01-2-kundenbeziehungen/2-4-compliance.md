<!DOCTYPE html>

<html lang="de">
<head>
<meta charset="utf-8" />
<meta name="viewport" content="width=device-width, initial-scale=1" />
<title>Compliance – FI AE Prüfungsvorbereitung</title>
<style>
  :root{--b1:#7c3aed;--b2:#2563eb;--b3:#059669;--b4:#e11d48;--b5:#0ea5e9}
  body{font-family:system-ui,-apple-system,Segoe UI,Roboto,Inter,Arial,sans-serif;line-height:1.6;margin:0;background:#fafafa;color:#0f172a}
  header{padding:2rem 1.25rem 1rem;border-bottom:1px solid #e5e7eb;background:linear-gradient(180deg,#fff,#fafafa)}
  h1{margin:.2rem 0 1rem;font-size:1.9rem}
  .badges{display:flex;flex-wrap:wrap;gap:.5rem}
  .badge{display:inline-flex;align-items:center;font-weight:700;font-size:.8rem;border-radius:999px;padding:.35rem .65rem;color:#fff}
  .b-k{background:var(--b1)} .b-lf{background:var(--b2)} .b-h{background:var(--b3)} .b-p{background:var(--b4)} .b-w{background:var(--b5)}
  main{padding:1.25rem;max-width:1100px;margin:auto}
  h2{font-size:1.35rem;margin:1.5rem 0 .7rem}
  h3{font-size:1.05rem;margin:1rem 0 .4rem}
  .card{background:#fff;border:1px solid #e5e7eb;border-radius:14px;padding:1rem 1.05rem;box-shadow:0 1px 0 rgba(2,6,23,.04)}
  .grid{display:grid;gap:1rem}
  .g-2{grid-template-columns:repeat(auto-fit,minmax(260px,1fr))}
  .pill{display:inline-block;background:#eef2ff;color:#3730a3;border:1px solid #c7d2fe;border-radius:999px;padding:.18rem .55rem;font-size:.78rem;font-weight:600;margin-right:.35rem}
  .note{background:#ecfeff;border-left:4px solid #06b6d4;padding:.75rem;border-radius:10px}
  .warn{background:#fff7ed;border-left:4px solid #fb923c;padding:.75rem;border-radius:10px}
  .ok{background:#f0fdf4;border-left:4px solid #22c55e;padding:.75rem;border-radius:10px}
  code{background:#f3f4f6;border:1px solid #e5e7eb;border-radius:6px;padding:.05rem .35rem}
  .src{font-size:.92rem;color:#334155;border-top:1px dashed #e5e7eb;margin-top:1.2rem;padding-top:.8rem}
  ul,ol{padding-left:1.2rem}
</style>
</head>
<body>

<header>
  <h1>Compliance – Regelkonformität in der Anwendungsentwicklung</h1>
  <div class="badges">
    <span class="badge b-k">Prüfungskatalog • WISO & IT-Sicherheit/DSGVO</span>
    <span class="badge b-lf">LF 6 • Service, Verträge, rechtliche Anforderungen</span>
    <span class="badge b-lf">LF 9 • Anforderungen, Sicherheit & Qualität</span>
    <span class="badge b-lf">LF 12 • Prozesse steuern, Audit & KVP</span>
    <span class="badge b-h">IT-Handbuch (Westermann) • WGP/Datenschutz/IT-Sicherheit</span>
  </div>
</header>

<main>

  <section class="card">
    <h2>1) Definition & Einordnung (Prüfungskontext)</h2>
    <p><strong>Compliance</strong> bedeutet die <em>Einhaltung</em> externer Regeln (Gesetze, Normen, Verträge) und interner Vorgaben (Richtlinien/Policies) durch Unternehmen und Mitarbeitende. Für FI AE ist Compliance in <strong>WISO</strong> (rechtliche/organisatorische Grundlagen), in <strong>Serviceprozessen</strong> (LF 6), bei <strong>Anforderungen & Qualität</strong> (LF 9) sowie in <strong>Prozesssteuerung & Audits</strong> (LF 12) prüfungsrelevant.</p>
    <div class="note"><strong>Merke:</strong> Compliance ist kein „Add-on“, sondern Teil von <em>Lasten-/Pflichtenheft</em>, <em>Implementierung</em>, <em>Abnahme</em> und <em>Betrieb</em>.</div>
  </section>

  <section class="card">
    <h2>2) Rechts- und Normrahmen (Überblick)</h2>
    <div class="grid g-2">
      <div>
        <h3>Gesetze & Verträge</h3>
        <ul>
          <li><strong>DSGVO/BDSG</strong>: Rechtmäßigkeit, Zweckbindung, Datensparsamkeit, TOM, Betroffenenrechte.</li>
          <li><strong>BGB/HGB</strong>: Vertragsrecht, Haftung, Gewährleistung; AGB-Kontrolle (§§ 305 ff. BGB).</li>
          <li><strong>UrhG/Lizenzen</strong>: OSS-Compliance (GPL/MIT/Apache), Drittanbieterhinweise.</li>
          <li><strong>SLA/OLA/UC</strong>: vertragliche Service-Pflichten & interne/lieferantenseitige Vereinbarungen.</li>
        </ul>
      </div>
      <div>
        <h3>Standards & Frameworks</h3>
        <ul>
          <li><strong>ISO/IEC 27001</strong>: ISMS & Controls (Zugriff, Kryptografie, Betrieb, Lieferanten).</li>
          <li><strong>ISO 9001</strong>: Qualitätsmanagement & Dokumentation (PDCA, Audit).</li>
          <li><strong>ISO 37301</strong>: Compliance-Management-Systeme (CMS).</li>
          <li><strong>ITIL/COBIT</strong>: Serviceprozesse, Governance & Steuerung.</li>
        </ul>
      </div>
    </div>
  </section>

  <section class="card">
    <h2>3) Compliance entlang des Lebenszyklus</h2>
    <div class="grid g-2">
      <div>
        <h3>Anforderungen & Architektur (LF 9)</h3>
        <ul>
          <li><strong>Lastenheft</strong>: Gesetze/Normen, Zertifikate, Vertragsstrafen, Datenschutzvorgaben.</li>
          <li><strong>Pflichtenheft</strong>: Umsetzung (Rollen/Berechtigungen, Logging, Verschlüsselung, Monitoring).</li>
          <li><strong>Nicht-funktionale Anforderungen</strong>: Sicherheit, Datenschutz, Compliance, Nachhaltigkeit.</li>
        </ul>
      </div>
      <div>
        <h3>Entwicklung & Build</h3>
        <ul>
          <li><strong>Privacy/Security by Design & Default</strong>: Minimierung, Pseudonymisierung, sichere Defaults.</li>
          <li><strong>Lizenz-Compliance</strong>: Dependency-Scans, Third-Party-Notices, Lizenzinventar.</li>
          <li><strong>Qualität</strong>: Code-Reviews, Testabdeckung, Sicherheits-/Fuzz-Tests.</li>
        </ul>
      </div>
      <div>
        <h3>Test & Abnahme</h3>
        <ul>
          <li>Definition of Done enthält <em>Rechts-/Norm-Checks</em> (TOM, Protokolle, Evidenzen).</li>
          <li>Pen-Tests/Scans dokumentiert; Abnahmekriterien messbar (z. B. SLA-KPIs im Monitoring).</li>
        </ul>
      </div>
      <div>
        <h3>Betrieb & Service (LF 6)</h3>
        <ul>
          <li><strong>ITIL-Prozesse</strong>: Incident/Problem/Change, Wissensmanagement, Eskalationsmatrix.</li>
          <li><strong>SLA-Steuerung</strong>: Verfügbarkeit, Reaktions-/Lösungszeiten, Reports & Reviews.</li>
          <li><strong>Rezertifizierung</strong>: Rechteprüfungen, Backup-Tests, Notfallübungen.</li>
        </ul>
      </div>
    </div>
  </section>

  <section class="card">
    <h2>4) Artefakte & Nachweise (prüfungsnah)</h2>
    <ul>
      <li><strong>Compliance-Register</strong> (Vorgabe → Maßnahme → Owner → Fälligkeit → Nachweis).</li>
      <li><strong>Lizenzinventar</strong> (Paket, Version, Lizenztyp, Pflichten, Quelle, Freigabe).</li>
      <li><strong>Policy-Set</strong> (Passwort, Logging, Change, Backup, Löschkonzept, RBAC).</li>
      <li><strong>Audit-Evidenzen</strong> (Testprotokolle, Monitoring-Reports, Tickets mit SLA-Historie).</li>
    </ul>
    <div class="ok"><strong>Praxis-Tipp:</strong> Verknüpfe jede Anforderung im Backlog mit einer <em>Evidence</em> (Dokument/Report/Ticket-ID). So ist die Erfüllung jederzeit belegbar.</div>
  </section>

  <section class="card">
    <h2>5) Mini-Fälle & Lösungen</h2>
    <ol>
      <li><strong>OSS im Produkt</strong> (GPL-Komponente geplant): <em>Prüfe</em> Kopplung (statisch/dynamisch), Pflichten (Weitergabe von Quellcode), Alternativen (MIT/Apache), dokumentiere in Third-Party-Notices.</li>
      <li><strong>Personenbezogene Logs</strong> im Webshop: <em>Maßnahmen</em> Pseudonymisierung/Maskierung, Aufbewahrungsfristen, Zugriffsrollen, Zweckbindung dokumentieren.</li>
      <li><strong>SLA 99,9 %</strong> ohne Messung: <em>Einführen</em> von Uptime-Checks, KPI-Dashboards, Alarmierung, Eskalationsregeln; monatliche SLA-Reports.</li>
      <li><strong>Ex-Admin mit Restrechten</strong>: <em>Rezertifizierungsprozess</em>, Joiner–Mover–Leaver, 4-Augen-Prinzip, Audit-Trail.</li>
    </ol>
  </section>

  <section class="card">
    <h2>6) Typische Prüfungsfragen</h2>
    <ul>
      <li>Begriffe <strong>Governance – Risk – Compliance</strong> abgrenzen und Beispiele nennen.</li>
      <li><strong>Vier konkrete TOM</strong> für eine neue Webanwendung erläutern (technisch + organisatorisch).</li>
      <li>Wie stellen Sie <strong>Lizenz-Compliance</strong> in CI/CD sicher? (Tooling, Freigaben, Nachweise)</li>
      <li>Welche <strong>SLA-Kennzahlen</strong> sind sinnvoll und wie werden sie gemessen/berichtet?</li>
      <li>Skizzieren Sie einen <strong>Audit-Zyklus</strong> (Plan–Do–Check–Act) mit Beispielen aus dem Betrieb.</li>
    </ul>
  </section>

  <section class="src">
    <h2>Quelle</h2>
    <p>
      <span class="badge b-k">Prüfungskatalog</span> Fachinformatiker/in AE – WISO (Organisation, Arbeitsschutz, Datenschutz) sowie IT-Sicherheit/DSGVO in den Fachaufgaben; Struktur AP1/AP2.<br/>
      <span class="badge b-lf">Lernfelder</span>:
      <strong>LF 6</strong> – Serviceprozesse, rechtliche Anforderungen, SLAs/Eskalation, Wissensmanagement;
      <strong>LF 9</strong> – Anforderungen (inkl. Compliance), Lasten-/Pflichtenheft, Qualität & Sicherheit;
      <strong>LF 12</strong> – Prozesse steuern, Kennzahlen, Audits & KVP.<br/>
      <span class="badge b-h">IT-Handbuch (Westermann)</span> Wirtschafts- & Geschäftsprozesse / Datenschutz & IT-Sicherheit / Projektmanagement – Kapitel zu DSGVO/TOM, ISMS/ISO 27001, Qualitätsmanagement/ISO 9001, Service-Management (ITIL).
    </p>
    <p><em>Hinweis:</em> Seitenzahlen variieren je nach Ausgabe/Auflage; nutze die genannten Kapitelüberschriften in deinem Buch zum gezielten Nachschlagen.</p>
  </section>

</main>
</body>
</html>
