<!DOCTYPE html>

<html lang="de">
<head>
<meta charset="utf-8" />
<meta name="viewport" content="width=device-width, initial-scale=1" />
<title>Regelkonformität (Compliance) – FI AE Prüfungsvorbereitung</title>
<style>
  :root{--pill:#2563eb;--pill2:#16a34a;--pill3:#db2777;--pill4:#f59e0b;--pill5:#7c3aed;--muted:#6b7280}
  body{font-family:system-ui,-apple-system,Segoe UI,Roboto,Inter,Arial,sans-serif;line-height:1.5;color:#0f172a;margin:0;padding:2rem;background:#fff}
  h1,h2,h3{line-height:1.2;margin:1.2rem 0 .6rem}
  h1{font-size:1.9rem}
  h2{font-size:1.35rem;margin-top:2rem}
  h3{font-size:1.1rem;margin-top:1.2rem}
  .pill{display:inline-block;font-size:.78rem;font-weight:600;padding:.2rem .6rem;border-radius:999px;color:#fff;background:var(--pill);margin-right:.4rem}
  .pill.g{background:var(--pill2)} .pill.p{background:var(--pill3)} .pill.a{background:var(--pill4)} .pill.v{background:var(--pill5)}
  .card{border:1px solid #e5e7eb;border-radius:12px;padding:1rem;margin:.8rem 0;background:#fafafa}
  ul{margin:.4rem 0 .8rem 1.2rem}
  .muted{color:var(--muted)}
  .src{font-size:.92rem;border-left:4px solid #e5e7eb;padding-left:.8rem;margin-top:1rem}
  code{background:#f1f5f9;padding:.08rem .35rem;border-radius:6px}
  .grid{display:grid;grid-template-columns:repeat(auto-fit,minmax(280px,1fr));gap:12px}
</style>
</head>
<body>

<header>
  <h1>Regelkonformität (Compliance) in der Anwendungsentwicklung</h1>
  <p class="muted">Definition, Praxisbeispiele und Prüfungskontext (FI AE)</p>
</header>

<section>
  <span class="pill">Übersicht</span>
  <p><strong>Regelkonformität</strong> (Compliance) bezeichnet das systematische Einhalten von <em>Gesetzen, Normen, Verträgen und internen Richtlinien</em> entlang des gesamten IT-Lebenszyklus – von Anforderung/Vertrag über Umsetzung/ Betrieb bis zur Abnahme/Dokumentation. In der Ausbildung und Prüfung taucht Compliance u. a. in <em>rechtlichen Anforderungen im Service</em>, in <em>nicht-funktionalen Anforderungen</em> (z. B. Sicherheit/Datenschutz) sowie in <em>WISO</em> auf (Arbeitsschutz/DSGVO). Quelle: LF6 Kap. 1.1.4 (rechtl. Anforderungen), LF9 Kap. 4.1–4.5 (Anforderungen inkl. Compliance) und Prüfungskatalog (WISO & IT-Sicherheit/DSGVO). :contentReference[oaicite:0]{index=0} :contentReference[oaicite:1]{index=1} :contentReference[oaicite:2]{index=2}</p>
</section>

<section>
  <span class="pill g">Begriffe & Rahmen</span>
  <div class="card">
    <h3>Was umfasst Compliance in IT-Projekten?</h3>
    <ul>
      <li><strong>Gesetze/Verordnungen:</strong> z. B. DSGVO (Vertraulichkeit, Integrität, Verfügbarkeit), Arbeits-/Brandschutz in WISO. :contentReference[oaicite:3]{index=3}</li>
      <li><strong>Standards/Frameworks:</strong> IT-Service-Management (SLAs, Incident/Eskalation), Informationssicherheit (TOM, Berechtigungskonzepte). :contentReference[oaicite:4]{index=4}</li>
      <li><strong>Verträge/Vergabe:</strong> Lasten-/Pflichtenhefte, SLA-Vorgaben, Vergaberegeln (VOB/A, VOL/A etc.) als nicht-funktionale Vorgaben. :contentReference[oaicite:5]{index=5}</li>
      <li><strong>Interne Richtlinien:</strong> Corporate Policies (z. B. Rollen/Rechte, Code-Qualität, Dokumentation). LF9 verankert Compliance als Kriterium in Lasten-/Pflichtenheften. :contentReference[oaicite:6]{index=6}</li>
    </ul>
  </div>
</section>

<section>
  <span class="pill p">Compliance im Service & Betrieb</span>
  <div class="grid">
    <div class="card">
      <h3>IT-Service: rechtliche Anforderungen</h3>
      <p>In LF6 werden <em>rechtliche Anforderungen</em> als Teil der Servicegestaltung adressiert (z. B. Datenschutz, Vertrags-/SLA-Konformität, Auditierbarkeit). Das Management umfasst u. a. <strong>Incident-/Problem-/Change-Management</strong>, <strong>Service-Level-Management</strong> und <strong>Knowledge-Management</strong> – alles mit Compliance-Bezug. :contentReference[oaicite:7]{index=7}</p>
      <ul>
        <li><strong>SLAs/Eskalation:</strong> definierte Service Level (1–3), Eskalationsstufen im Ticketsystem. :contentReference[oaicite:8]{index=8}</li>
        <li><strong>Nachweisführung:</strong> Betriebs-/Konfig-Dokumentation, Checklisten, SOPs für Audits. :contentReference[oaicite:9]{index=9}</li>
      </ul>
    </div>
    <div class="card">
      <h3>Technisch-organisatorische Maßnahmen (TOM)</h3>
      <ul>
        <li><strong>Organisation:</strong> Rollen, Berechtigungssystem (Zugang/Zutritt/Zugriff), 1st/2nd/3rd-Level-Prozesse. :contentReference[oaicite:10]{index=10}</li>
        <li><strong>Technik:</strong> IAM, Firewall/Webfilter, Port-Security, Verschlüsselung (z. B. BitLocker). :contentReference[oaicite:11]{index=11}</li>
        <li><strong>Physik:</strong> Zugangskontrollen, RZ-Schutz, Umgang mit Elementarrisiken. :contentReference[oaicite:12]{index=12}</li>
      </ul>
    </div>
  </div>
</section>

<section>
  <span class="pill a">Compliance in Anforderung & Architektur</span>
  <div class="card">
    <h3>Nicht-funktionale Anforderungen (NFA) mit Compliance</h3>
    <p>LF9 fordert, Compliance explizit in NFA zu erfassen (z. B. „Einhaltung von Standards und Gesetzen“, „Berechtigungssystem“, „Nachhaltigkeit“). Diese Punkte gehören <em>verbindlich</em> ins Lasten-/Pflichtenheft und in Abnahmekriterien. :contentReference[oaicite:13]{index=13}</p>
    <ul>
      <li><strong>Lastenheft (Kunde):</strong> Rahmenbedingungen wie <em>Normen, Richtlinien, Gewährleistung, Vertragsstrafen, Zertifikate</em>. :contentReference[oaicite:14]{index=14}</li>
      <li><strong>Pflichtenheft (Anbieter):</strong> Umsetzung der Compliance-Anforderungen, inkl. Monitoring, Wartung, SLA. :contentReference[oaicite:15]{index=15}</li>
      <li><strong>Erstgespräch-Check:</strong> explizite Abfrage „<em>Compliance-Anforderungen?</em>“ neben Sicherheit/Kosten. :contentReference[oaicite:16]{index=16}</li>
    </ul>
  </div>
  <div class="card">
    <h3>Beschaffung/Vergabe (öffentl. & privat)</h3>
    <p>Bei Ausschreibungen ist die <strong>Einhaltung rechtlicher Vorgaben zwingend</strong> (Verfahrensarten, Plattformen, Nachweise, digitale Signaturen). Compliance steigert Rechtssicherheit und Angebotsqualität. :contentReference[oaicite:17]{index=17}</p>
  </div>
</section>

<section>
  <span class="pill v">Sicherheit, Datenschutz & WISO</span>
  <div class="grid">
    <div class="card">
      <h3>DSGVO & ISMS in der Prüfung</h3>
      <p>Der Prüfungskatalog WISO fordert Kenntnisse zu <strong>IT-Sicherheitszielen</strong> und den <strong>Zielen der DSGVO</strong> (Verfügbarkeit, Integrität, Vertraulichkeit, Authentizität) – zentrale Compliance-Eckpfeiler. :contentReference[oaicite:18]{index=18}</p>
    </div>
    <div class="card">
      <h3>Arbeitsschutz & Brandschutz</h3>
      <p>WISO prüft auch Arbeitsschutz/Unfallverhütung/Brandschutz (Pflichten, Meldeketten, Fluchtwege, CE/Schutzklassen) – betriebliche Regelkonformität über die IT hinaus. :contentReference[oaicite:19]{index=19}</p>
    </div>
  </div>
</section>

<section>
  <span class="pill">Beispiele (Praxis ↔ Prüfung)</span>
  <div class="grid">
    <div class="card">
      <h3>Beispiel 1 – Lastenheft „Compliance-Kriterien“</h3>
      <ul>
        <li><strong>Gesetz:</strong> „Personenbezogene Daten nur verschlüsselt übertragen/speichern (DSGVO)“</li>
        <li><strong>Standard:</strong> „Protokollierung sicherheitsrelevanter Events (Tickets, Eskalationsstufen, SOP)“ :contentReference[oaicite:20]{index=20}</li>
        <li><strong>Richtlinie:</strong> „RBAC: Rollen & Minimalrechte dokumentiert, jährlicher Rezertifizierungsprozess“ :contentReference[oaicite:21]{index=21}</li>
        <li><strong>Vergabe:</strong> „Nachweis einschlägiger Zertifizierungen im Angebot; digitale Angebotsabgabe mit Signatur“ :contentReference[oaicite:22]{index=22}</li>
      </ul>
    </div>
    <div class="card">
      <h3>Beispiel 2 – Pflichtenheft/Abnahme</h3>
      <ul>
        <li><strong>TOM umgesetzt:</strong> Firewall/Webfilter/Port-Security konfiguriert; <em>Abnahmekriterium:</em> definierte Tests protokolliert. :contentReference[oaicite:23]{index=23}</li>
        <li><strong>SLA lebbar:</strong> KPI-Dashboards + Eskalationsschema im Ticketsystem; <em>Abnahmekriterium:</em> KPI-Bericht generierbar. :contentReference[oaicite:24]{index=24}</li>
        <li><strong>Dokumentation:</strong> Betriebshandbuch/Checklisten vollständig und versioniert. :contentReference[oaicite:25]{index=25}</li>
      </ul>
    </div>
    <div class="card">
      <h3>Beispiel 3 – Service & Helpdesk</h3>
      <ul>
        <li><strong>Incident-Handling:</strong> Ticket mit Priorität/Impact, rechtssicherer Verlauf, Datenminimierung, Löschfristen. :contentReference[oaicite:26]{index=26}</li>
        <li><strong>Eskalation:</strong> definierte Stufen & Reaktionszeiten (SLA), Audit-Trail in der Knowledge Base. :contentReference[oaicite:27]{index=27}</li>
      </ul>
    </div>
  </div>
</section>

<section>
  <span class="pill g">Prüfungskontext (AP1/AP2/WISO)</span>
  <div class="card">
    <ul>
      <li><strong>AP1 (Teil&nbsp;1):</strong> „Einrichten eines IT-gestützten Arbeitsplatzes“ – rechtliche/organisatorische Anforderungen (z. B. Datenschutz/Arbeitsschutz) im Setup berücksichtigen. (Katalogübersicht/LF-Matrix) :contentReference[oaicite:28]{index=28}</li>
      <li><strong>AP2 (Teil&nbsp;2):</strong> <em>Planen/Programmieren</em>: Normen/Qualität/NFA einhalten (z. B. Schnittstellen, Sicherheit, Dokumentation). :contentReference[oaicite:29]{index=29}</li>
      <li><strong>WISO:</strong> Arbeits-/Tarifrecht, Organisation, <em>Sicherheit & Gesundheit</em>, <em>Umweltschutz</em>, <em>digitales Zusammenarbeiten</em>, DSGVO/IT-Sicherheit. :contentReference[oaicite:30]{index=30} :contentReference[oaicite:31]{index=31}</li>
    </ul>
  </div>
</section>

<section>
  <span class="pill p">Merkliste – Regelkonform umsetzen</span>
  <div class="card">
    <ul>
      <li><strong>Explizit erfassen:</strong> Compliance-Anforderungen im Erstgespräch (Checkfrage „Compliance?“) → Lastenheft → Pflichtenheft. :contentReference[oaicite:32]{index=32} :contentReference[oaicite:33]{index=33}</li>
      <li><strong>Sicherheit leben:</strong> TOM (physisch/technisch/organisatorisch), IAM/RBAC, Verschlüsselung, Protokollierung. :contentReference[oaicite:34]{index=34}</li>
      <li><strong>Service steuern:</strong> SLAs/KPIs/Eskalation, SOPs, revisionssichere Doku/KB. :contentReference[oaicite:35]{index=35}</li>
      <li><strong>Vergabe beachten:</strong> Verfahren, Fristen, Signatur, Nachweise – sonst Rechtsrisiko. :contentReference[oaicite:36]{index=36}</li>
      <li><strong>WISO nicht vergessen:</strong> Arbeitsschutz/Brandschutz/DSGVO prüfungsrelevant. :contentReference[oaicite:37]{index=37}</li>
    </ul>
  </div>
</section>

<section class="src">
  <h2>Quelle</h2>
  <ul>
    <li>Prüfungskatalog Fachinformatiker/in Anwendungsentwicklung, ZPA Nord-West, 2. Aufl. 2024 – WISO/IT-Sicherheit/DSGVO, AP-Struktur, Normen/Modelle. :contentReference[oaicite:38]{index=38} :contentReference[oaicite:39]{index=39} :contentReference[oaicite:40]{index=40}</li>
    <li>Westermann IT-Berufe, Fachstufe Technische IT-Berufe – <strong>LF6</strong> Service (rechtliche Anforderungen, SLAs, Incident/Eskalation, TOM) & <strong>LF9</strong> Netzwerke (NFA inkl. Compliance, Lasten-/Pflichtenheft, Vergabe). :contentReference[oaicite:41]{index=41} :contentReference[oaicite:42]{index=42} :contentReference[oaicite:43]{index=43} :contentReference[oaicite:44]{index=44}</li>
    <li>Westermann IT-Berufe, Grundstufe/Lernfelder 1–5 – Rahmen & Einordnung (Grundlagen/Bezüge). :contentReference[oaicite:45]{index=45}</li>
  </ul>
  <p class="muted">Hinweis: Kapitel-/Themenangaben gemäß LF-Struktur (LF6 Kap. 1.1.4; LF9 Kap. 4.1–4.5, Lasten-/Pflichtenheft, Vergabe; WISO/DSGVO im Prüfungskatalog). Einzelstellen sind in den obigen Abschnitten verlinkt.</p>
</section>

</body>
</html>
