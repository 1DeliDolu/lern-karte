<!DOCTYPE html>

<html lang="de">
<head>
<meta charset="utf-8" />
<meta name="viewport" content="width=device-width, initial-scale=1" />
<title>Customer Relationship Management (CRM) – FI AE Prüfungsvorbereitung</title>
<style>
  :root{--b1:#7c3aed;--b2:#2563eb;--b3:#059669;--b4:#e11d48;--b5:#f59e0b}
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
  .g-3{grid-template-columns:repeat(auto-fit,minmax(220px,1fr))}
  ul,ol{padding-left:1.2rem}
  .pill{display:inline-block;background:#eef2ff;color:#3730a3;border:1px solid #c7d2fe;border-radius:999px;padding:.18rem .55rem;font-size:.78rem;font-weight:600;margin-right:.35rem}
  .note{background:#ecfeff;border-left:4px solid #06b6d4;padding:.75rem;border-radius:10px}
  .warn{background:#fff7ed;border-left:4px solid #fb923c;padding:.75rem;border-radius:10px}
  .ok{background:#f0fdf4;border-left:4px solid #22c55e;padding:.75rem;border-radius:10px}
  code{background:#f3f4f6;border:1px solid #e5e7eb;border-radius:6px;padding:.05rem .35rem}
  .src{font-size:.92rem;color:#334155;border-top:1px dashed #e5e7eb;margin-top:1.2rem;padding-top:.8rem}
  .kpi{display:grid;grid-template-columns:repeat(auto-fit,minmax(180px,1fr));gap:.6rem}
  .kpi div{background:#f8fafc;border:1px solid #e2e8f0;border-radius:12px;padding:.6rem .7rem}
  .tbl{width:100%;border-collapse:separate;border-spacing:0 8px}
  .tbl th,.tbl td{text-align:left;padding:.5rem .6rem}
  .tbl tr{background:#f8fafc;border:1px solid #e2e8f0}
  .tbl tr td:first-child,.tbl tr th:first-child{border-top-left-radius:10px;border-bottom-left-radius:10px}
  .tbl tr td:last-child,.tbl tr th:last-child{border-top-right-radius:10px;border-bottom-right-radius:10px}
</style>
</head>
<body>

<header>
  <h1>Customer Relationship Management (CRM) – Grundlagen, Prozesse & Prüfungsbezug</h1>
  <div class="badges">
    <span class="badge b-k">Prüfungskatalog • WISO & betriebliche Prozesse</span>
    <span class="badge b-lf">LF 3 • Kundenbeziehungen informieren & beraten</span>
    <span class="badge b-lf">LF 6 • Serviceprozesse, SLA & rechtliche Anforderungen</span>
    <span class="badge b-lf">LF 12 • Prozesse steuern, Qualität & KVP</span>
    <span class="badge b-h">IT-Handbuch (Westermann) • WGP/Marketing/Vertrieb/Service</span>
  </div>
</header>

<main>

  <section class="card">
    <h2>1) Begriff & Einordnung</h2>
    <p><strong>CRM</strong> ist die <em>kundenorientierte Ausrichtung</em> von Strategie, Prozessen, Daten und Systemen, um <strong>Neukundengewinnung</strong>, <strong>Bindung</strong> und <strong>Profitabilität</strong> zu steigern. In der IT-Praxis verbindet CRM <em>Marketing, Vertrieb, Service/Support</em> und <em>Datenanalyse</em> über einen gemeinsamen Datenstamm (Kunden- & Interaktionshistorie).</p>
    <div class="grid g-3">
      <div>
        <h3>CRM-Arten</h3>
        <ul>
          <li><strong>Operatives CRM</strong>: Prozesse & Automatisierung in Marketing/Vertrieb/Service (Leads, Angebote, Tickets).</li>
          <li><strong>Kollaboratives CRM</strong>: Kanal- & Teamübergreifende Zusammenarbeit (Callcenter, Chat, E-Mail, Außendienst).</li>
          <li><strong>Analytisches CRM</strong>: Auswertung (Segmente, Churn-Prognosen, Cross/Up-Selling, CLV).</li>
        </ul>
      </div>
      <div>
        <h3>Bezug zu Lernfeldern</h3>
        <ul>
          <li><strong>LF 3:</strong> Kundengespräche, Bedarfsermittlung, Angebots-/Auftragsbearbeitung, Reklamationen.</li>
          <li><strong>LF 6:</strong> Servicequalität, SLA/OLA/UC, Wissensdatenbank, Eskalation.</li>
          <li><strong>LF 12:</strong> Prozesskennzahlen, Audits, kontinuierliche Verbesserung (PDCA).</li>
        </ul>
      </div>
      <div>
        <h3>Prüfungskontext</h3>
        <ul>
          <li>WISO: Organisation, Marketing/Vertrieb, Datenschutz (DSGVO) im Kundenkontakt.</li>
          <li>GA2/Projekt: Prozess-/Datenmodell, Schnittstellen (ERP, Shop, CTI), Ticket-/Sales-Pipeline.</li>
        </ul>
      </div>
    </div>
  </section>

  <section class="card">
    <h2>2) End-to-End-Prozess (Lead-to-Cash & Service)</h2>
    <table class="tbl">
      <thead><tr><th>Schritt</th><th>Ziel</th><th>Artefakte (Beispiele)</th><th>IT-Aspekte</th></tr></thead>
      <tbody>
        <tr><td>Lead Capturing</td><td>Interessenten erfassen/qualifizieren</td><td>Lead-Formular, DSGVO-Einwilligung</td><td>Web-Form, API, Double-Opt-In</td></tr>
        <tr><td>Opportunity & Angebot</td><td>Bedarf klären, Angebot erstellen</td><td>Angebotsvorlage, Preisliste, Rabatte</td><td>Produktkatalog, Workflow, E-Signatur</td></tr>
        <tr><td>Auftrag & Lieferung</td><td>Auftrag anlegen/erfüllen</td><td>Auftragsbestätigung, SLA-Vereinbarung</td><td>ERP-Schnittstelle, Berechtigungen</td></tr>
        <tr><td>Rechnung & Zahlung</td><td>Fakturierung, Offene Posten</td><td>Rechnung, Mahnwesen</td><td>Finanzsystem, Steuerregeln</td></tr>
        <tr><td>Service & Retention</td><td>Support, Zufriedenheit, Loyalität</td><td>Ticket, Wissensartikel, NPS/CSAT</td><td>ITIL-Prozesse, Self-Service-Portal</td></tr>
      </tbody>
    </table>
    <div class="note"><strong>Merke:</strong> Konsistenter <em>Customer 360°-Datenstamm</em> (Stammdaten, Kontakte, Historie, SLAs, Assets) ist die Basis für Qualität und Reporting.</div>
  </section>

  <section class="card">
    <h2>3) Datenmodell & Qualitätsregeln</h2>
    <div class="grid g-2">
      <div>
        <h3>Typische Entitäten</h3>
        <ul>
          <li><strong>Kunde/Account</strong> (Stammdaten, Branche, Größe)</li>
          <li><strong>Kontakt</strong> (Rolle, Präferenzen, Opt-In/Opt-Out)</li>
          <li><strong>Lead/Opportunity</strong> (Quelle, Phase, Wert, Abschlusswahrsch.)</li>
          <li><strong>Angebot/Auftrag/Rechnung</strong></li>
          <li><strong>Ticket/Asset</strong> (Geräte, Verträge, SLAs)</li>
          <li><strong>Aktivitäten</strong> (Anruf, Termin, E-Mail, Chat)</li>
        </ul>
      </div>
      <div>
        <h3>Data-Governance (prüfungsnah)</h3>
        <ul>
          <li><strong>Einzigartigkeit</strong> (Dublettenerkennung), <strong>Validierung</strong> (Pflichtfelder, Formate)</li>
          <li><strong>Vollständigkeit</strong> (Pipeline-Pflege, Ticket-Kategorien)</li>
          <li><strong>Nachvollziehbarkeit</strong> (Änderungs- & Löschprotokolle)</li>
          <li><strong>DSGVO</strong>: Rechtsgrundlage, Einwilligung, Zweckbindung, Löschkonzept</li>
        </ul>
      </div>
    </div>
    <div class="ok"><strong>Praxis-Tipp:</strong> Pflegt <em>Stage-Definitionen</em> (Lead → MQL → SQL → Angebot → Verhandlung → Gewinn/Verlust) und verknüpft sie mit <em>Exit-Kriterien</em> und <em>Automationen</em> (Tasks, E-Mails, Benachrichtigungen).</div>
  </section>

  <section class="card">
    <h2>4) CRM-KPIs & Reporting</h2>
    <div class="kpi">
      <div><strong>Conversion Rate</strong><br><span class="pill">Lead→Opportunity</span> / <span class="pill">Opportunity→Auftrag</span></div>
      <div><strong>Sales Cycle</strong><br>Dauer vom Lead bis zum Abschluss</div>
      <div><strong>Average Deal Size</strong><br>Ø Auftragswert je Abschluss</div>
      <div><strong>Churn / Retention</strong><br>Kündigungs-/Bindungsrate</div>
      <div><strong>NPS / CSAT</strong><br>Kundenzufriedenheit/-loyalität</div>
      <div><strong>FCR / SLA-Einhaltung</strong><br>First Contact Resolution, Reaktions-/Lösungszeit</div>
    </div>
    <p class="note"><strong>In LF 12</strong> werden KPIs genutzt, um Prozesse zu steuern (PDCA) und Maßnahmen abzuleiten (z. B. Schulung, Wissensartikel, Prozessanpassung).</p>
  </section>

  <section class="card">
    <h2>5) Integration & Architektur</h2>
    <div class="grid g-2">
      <div>
        <h3>Typische Schnittstellen</h3>
        <ul>
          <li><strong>ERP/Finanzen</strong>: Stammdaten, Angebote/Aufträge/Rechnungen</li>
          <li><strong>Web/Shop/Formulare</strong>: Leads, Bestellungen, Opt-Ins</li>
          <li><strong>CTI/E-Mail/Chat</strong>: Interaktionen, Anruf-Popups, Transkripte</li>
          <li><strong>Ticket/ITSM</strong>: Incidents, SLAs, Knowledge Base (LF 6)</li>
          <li><strong>BI/ETL/DWH</strong>: analytisches CRM, Prognosen</li>
        </ul>
      </div>
      <div>
        <h3>Sicherheits- & Compliance-Aspekte</h3>
        <ul>
          <li>Rollen & Berechtigungen (Least Privilege, Need-to-Know)</li>
          <li>Protokollierung (Änderungen, Exporte, Zugriffe)</li>
          <li>Verschlüsselung (Transport/Ruhe), Aufbewahrungsfristen</li>
          <li>Auftragsverarbeitung & TOM (DSGVO), Einwilligungsmanagement</li>
        </ul>
      </div>
    </div>
  </section>

  <section class="card">
    <h2>6) CRM im Service (LF 6)</h2>
    <div class="grid g-2">
      <div>
        <h3>ITIL-nahe Prozesse</h3>
        <ul>
          <li><strong>Incident/Request</strong> mit Priorisierung (Impact/Urgency), SLA-Timer</li>
          <li><strong>Problem/Change</strong> mit Wissensartikeln & Lessons Learned</li>
          <li><strong>Service Level Management</strong> (Verfügbarkeit, Reaktions-/Lösungszeit)</li>
        </ul>
      </div>
      <div>
        <h3>Wissensmanagement & Qualität</h3>
        <ul>
          <li>KB-Artikel verlinkt an Ticketkategorien & Self-Service-Portal</li>
          <li>Feedbackschleifen (CSAT nach Ticket, Root-Cause-Analysen)</li>
          <li>Schulung/Enablement (Playbooks, Gesprächsleitfäden)</li>
        </ul>
      </div>
    </div>
  </section>

  <section class="card">
    <h2>7) Mini-Fälle (prüfungsnah) & Lösungen</h2>
    <ol>
      <li><strong>Dublettenchaos:</strong> Vertrieb meldet doppelte Kunden. <em>Lösung:</em> Dublettenregeln (Match-Keys), Merge-Prozess, Pflichtfelder & Validierungen, regelmäßige Datenpflege.</li>
      <li><strong>DSGVO-Export:</strong> Kunde fordert Auskunft/Löschung. <em>Lösung:</em> Datenauszug (alle Entitäten), Rechtsgrundlage prüfen, Anonymisierung/ Löschung nach Richtlinie, Protokoll ablegen.</li>
      <li><strong>Pipeline kippt:</strong> Viele Stornos in „Verhandlung“.</li>
      <ul>
        <li>Analyse nach Segment/Owner/Grund</li>
        <li>Maßnahmen: Stage-Exit-Kriterien, Angebotstemplates, Preisfreigabe-Workflow</li>
      </ul>
      <li><strong>SLA-Verfehlung im Support:</strong> <em>Lösung:</em> Ticket-Kategorien justieren, Auto-Zuweisung, Eskalationsmatrix, KB-Abdeckung erhöhen, Monitoring/Alarmierung.</li>
    </ol>
  </section>

  <section class="card">
    <h2>8) Typische Prüfungsfragen</h2>
    <ul>
      <li>„Grenzen Sie operatives, analytisches und kollaboratives CRM voneinander ab und nennen Sie je zwei Beispiele.“</li>
      <li>„Skizzieren Sie den <strong>Lead-to-Cash</strong>-Prozess mit zentralen Artefakten und Systemübergaben.“</li>
      <li>„Welche <strong>DSGVO-Anforderungen</strong> ergeben sich für ein CRM-System? Wie setzen Sie Einwilligungen um?“</li>
      <li>„Welche <strong>KPIs</strong> nutzen Sie zur Steuerung von Vertrieb und Service, und wie leiten Sie Maßnahmen ab?“</li>
      <li>„Entwerfen Sie ein <strong>Datenmodell</strong> für Tickets inkl. SLA-Zeitfeldern und Statusübergängen.“</li>
    </ul>
  </section>

  <section class="src">
    <h2>Quelle</h2>
    <p>
      <span class="badge b-k">Prüfungskatalog</span> Wirtschafts- und Sozialkunde (Organisation/Marketing/Datenschutz) sowie prozessuale Inhalte für GA/Projekt (Prozess- & Qualitätssteuerung).<br/>
      <span class="badge b-lf">Lernfelder</span>:
      <strong>LF 3</strong> – Kundenbeziehungen aufbauen, informieren & beraten (Bedarf, Angebote, Reklamation); 
      <strong>LF 6</strong> – Serviceprozesse, SLAs, rechtliche Anforderungen (IT-Service-Management, Wissensmanagement); 
      <strong>LF 12</strong> – Prozesse steuern, Kennzahlen, Audits & KVP.<br/>
      <span class="badge b-h">IT-Handbuch (Westermann)</span> Wirtschafts- & Geschäftsprozesse: Kapitel „Kundenbeziehungsmanagement/Marketing & Vertrieb“, „Service/IT-Service-Management“, „Datenschutz & IT-Sicherheit“ (Auflage/Seiten je Ausgabe).
    </p>
  </section>

</main>
</body>
</html>
