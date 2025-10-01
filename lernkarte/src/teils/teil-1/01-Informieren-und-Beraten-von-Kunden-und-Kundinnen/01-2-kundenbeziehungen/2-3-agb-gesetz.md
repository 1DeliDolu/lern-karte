Bu, alıntı/kanıt yer tutucularının (örn. `oaicite`, `filecite`) yanlışlıkla HTML içine karışmasından kaynaklanıyor. Bazı ortamlarda bu yer tutucular işlenemediği için düz metin olarak görünür. Aşağıya **temizlenmiş ve doğrudan render edilebilen** HTML sürümünü bırakıyorum.

<!DOCTYPE html>

<html lang="de">
<head>
<meta charset="utf-8" />
<meta name="viewport" content="width=device-width, initial-scale=1" />
<title>AGB-Gesetz (AGB in den §§ 305 ff. BGB)</title>
<style>
  :root{
    --badge-radius: 999px;
    --pad: .35rem .6rem;
    --fs: .82rem;
  }
  body{font-family:system-ui,-apple-system,Segoe UI,Roboto,Ubuntu,"Helvetica Neue",Arial,sans-serif;line-height:1.6;margin:0;background:#fafafa;color:#111}
  header{padding:2rem 1.25rem 1rem;border-bottom:1px solid #eaeaea;background:linear-gradient(180deg,#ffffff, #fafafa)}
  h1{margin:.2rem 0 1rem;font-size:1.8rem}
  .badges{display:flex;flex-wrap:wrap;gap:.5rem;margin:.25rem 0 0}
  .badge{display:inline-flex;align-items:center;gap:.4rem;border-radius:var(--badge-radius);padding:var(--pad);font-weight:600;font-size:var(--fs);color:#fff;white-space:nowrap}
  .b-katalog{background:#7c3aed}
  .b-lf{background:#2563eb}
  .b-handbuch{background:#059669}
  .b-praxis{background:#e11d48}
  main{padding:1.25rem;max-width:1000px;margin:auto}
  h2{font-size:1.25rem;margin:1.75rem 0 .5rem}
  h3{font-size:1.05rem;margin:1.25rem 0 .4rem}
  .card{background:#fff;border:1px solid #eaeaea;border-radius:14px;padding:1rem 1rem 1rem 1.1rem;box-shadow:0 1px 0 rgba(0,0,0,.03)}
  .grid{display:grid;gap:1rem}
  .g-2{grid-template-columns:repeat(auto-fit,minmax(260px,1fr))}
  .note{font-size:.95rem;background:#0ea5e90f;border-left:4px solid #0ea5e9;padding:.75rem;border-radius:10px}
  .kex{background:#fef3c7;border-left:4px solid #f59e0b;padding:.6rem .75rem;border-radius:10px}
  .list-check li{margin:.25rem 0}
  ul,ol{padding-left:1.2rem}
  .src{font-size:.9rem;color:#374151}
  code{background:#f3f4f6;border:1px solid #e5e7eb;border-radius:6px;padding:.05rem .35rem}
  .pill{font-size:.75rem;display:inline-block;background:#f1f5f9;border:1px solid #e2e8f0;border-radius:999px;padding:.25rem .55rem;margin-right:.35rem}
</style>
</head>
<body>

<header>
  <h1>AGB-Gesetz (AGB nach §§ 305 ff. BGB) – Überblick & Prüfungsrelevanz</h1>
  <div class="badges">
    <span class="badge b-katalog">Prüfungskatalog • WISO & Lernfelder-Übersicht</span>
    <span class="badge b-lf">LF 2 • Vertragsarten & AGB</span>
    <span class="badge b-lf">LF 6 • Governance, Verträge, SLA/OLA/UC</span>
    <span class="badge b-handbuch">IT-Handbuch (Westermann) • AGB-Grundlagen</span>
    <span class="badge b-praxis">Praxis • Verbraucher vs. Unternehmen</span>
  </div>
</header>

<main>

  <section class="card">
    <h2>1) Einordnung in Katalog, Lernfelder & Handbuch</h2>
    <div class="grid g-2">
      <div>
        <h3><span class="pill">Prüfungskatalog (ZPA)</span></h3>
        <p>AGB-Themen tauchen im Bereich <strong>Wirtschafts- und Sozialkunde</strong> sowie in prozessualen Lernfeldern auf (Verträge, Recht, Organisation). Der Katalog benennt WISO als eigenen Prüfungsbereich und listet die <em>Lernfelder LF 1–12</em> als Rahmen für die Fachthemen.</p>
      </div>
      <div>
        <h3><span class="pill">Lernfelder</span></h3>
        <ul>
          <li><strong>LF 2</strong>: <em>Vertragsarten und AGB unterscheiden</em> mit Definition, Zweck & Vor-/Nachteilen; Bezug auf <code>§ 305 BGB</code>.</li>
          <li><strong>LF 6</strong>: Rechtliche Rahmen (BGB/HGB, DSGVO, TMG), Vertragsarten, <strong>SLA/OLA/UC</strong> im Service-Kontext (Governance/Compliance).</li>
        </ul>
      </div>
      <div>
        <h3><span class="pill">IT-Handbuch (Westermann)</span></h3>
        <p>Stellt AGB als <em>vorformulierte Vertragsbedingungen</em> dar, erläutert Einbeziehung/Wirksamkeit (u. a. <code>§ 305</code>, <code>§ 307 BGB</code>) und den Vorrang der <strong>Individualabrede</strong>.</p>
      </div>
    </div>
  </section>

  <section class="card">
    <h2>2) AGB – Begriff, Rechtsgrundlage, Zweck</h2>
    <p><strong>Allgemeine Geschäftsbedingungen (AGB)</strong> sind <em>vorformulierte Vertragsbedingungen</em> für eine Vielzahl von Verträgen, die der Verwender der anderen Partei bei Vertragsschluss stellt (<code>§ 305 BGB</code>). Ziel: Vertragsgestaltung vereinfachen und einen schnellen Überblick über wesentliche Klauseln geben.</p>


<div class="grid g-2">
  <div>
    <h3>Vorteile (aus Sicht beider Seiten)</h3>
    <ul class="list-check">
      <li>Schneller Überblick über zentrale Vertragsbestandteile.</li>
      <li>Wiederverwendbarkeit & rechtliche Vorprüfung durch den Verwender.</li>
    </ul>
  </div>
  <div>
    <h3>Typische Nachteile/Risiken</h3>
    <ul class="list-check">
      <li>Risiken können – soweit zulässig – auf den Vertragspartner verlagert werden; Verbraucher sind besonders zu informieren.</li>
      <li>AGB gelten nur bei wirksamer <strong>Einbeziehung</strong> (Hinweis & Möglichkeit der Kenntnisnahme) und dürfen nicht <em>unangemessen benachteiligen</em> (<code>§ 307 BGB</code>).</li>
    </ul>
  </div>
</div>

<div class="note">
  <strong>Merke:</strong> <em>Individualvereinbarungen</em> gehen AGB vor – betroffene AGB-Klauseln sind dann gegenstandslos.
</div>


  </section>

  <section class="card">
    <h2>3) Einbeziehung & Wirksamkeit im Überblick</h2>
    <div class="grid g-2">
      <div>
        <h3>Einbeziehung (Beispiele)</h3>
        <ul>
          <li><strong>Unternehmergeschäft (B2B):</strong> AGB werden z. B. mit dem Angebot übermittelt; branchenübliches Verhalten kann Einbeziehung erleichtern.</li>
          <li><strong>Verbraucher (B2C):</strong> ausdrücklicher Hinweis + zumutbare Kenntnisnahme + Einverständnis erforderlich (<code>§ 305 II BGB</code>).</li>
        </ul>
      </div>
      <div>
        <h3>Inhaltskontrolle (Auszug)</h3>
        <ul>
          <li><strong>Unangemessene Benachteiligung</strong> → Klausel unwirksam (<code>§ 307 BGB</code>).</li>
          <li><strong>Verbraucherschutz</strong>: Differenzierung zwischen Verbraucher und Unternehmer ist zentral (Privatkauf vs. Handelskauf).</li>
        </ul>
      </div>
    </div>
    <div class="kex"><strong>Prüfungsblick:</strong> Häufig wird geprüft, ob eine Klausel wirksam einbezogen wurde (Hinweis/Einverständnis) und ob sie einer Inhaltskontrolle standhält. Verweise auf <code>§§ 305 ff. BGB</code> erwarten!</div>
  </section>

  <section class="card">
    <h2>4) AGB im IT-Kontext: typische Klauseln & Schnittstellen</h2>
    <div class="grid g-2">
      <div>
        <h3>Gewährleistung (Auszug)</h3>
        <ul>
          <li><strong>B2C:</strong> Gesetzliche Gewährleistung i. d. R. 2 Jahre ab Übergabe; bei Gebrauchtware Verkürzung auf 1 Jahr möglich.</li>
          <li><strong>B2B:</strong> Verkürzungen sind weitergehend möglich, jedoch stets an Transparenz und Angemessenheit messen.</li>
        </ul>
      </div>
      <div>
        <h3>SLA/Service-Verträge</h3>
        <ul>
          <li><strong>SLA</strong> zwischen Anbieter und Kunde; <strong>OLA</strong> intern; <strong>UC</strong> mit Subunternehmern. Klauseln: Verfügbarkeit, Reaktionszeit, Eskalation, Vertragsstrafen.</li>
          <li>Rechtsrahmen in LF 6: BGB/HGB, DSGVO/TMG, UrhG; Governance & Compliance als Organisationsprinzip.</li>
        </ul>
      </div>
    </div>
  </section>

  <section class="card">
    <h2>5) Beispiele & Mini-Fälle (Examensnähe)</h2>
    <ol>
      <li><strong>Einbeziehung B2C im Onlineshop:</strong> Im Bestellprozess sichtbarer Hinweis „AGB gelesen und akzeptiert“ + verlinkter Volltext ⇒ Einbeziehung möglich (<code>§ 305 II BGB</code>). Danach Klauseln mit <code>§ 307 BGB</code> prüfen.</li>
      <li><strong>Werkvertrag IT-Projekt (B2B):</strong> AGB enthalten verkürzte Mängelrüge-/Verjährungsfristen. In B2B teils zulässig; immer Transparenz & Angemessenheit prüfen. Vorrang der Individualabrede beachten.</li>
      <li><strong>SLA-Klauseln:</strong> KPIs (Serviceverfügbarkeit), Reaktions-/Lösungszeiten, Eskalation, Pönalen klar regeln; Zuordnung zu Haupt-/Nebenpflichten dokumentieren.</li>
    </ol>
  </section>

  <section>
    <h2>Quelle</h2>
    <p class="src">
      <strong>Prüfungskatalog Fachinformatiker Anwendungsentwicklung</strong> (ZPA, aktuelle Auflage): Prüfungsbereiche (u. a. WISO) und LF-Übersicht.<br />
      <strong>Lernfelder</strong> (LF 2, LF 6): Vertragsarten & AGB; Rechtsrahmen, Governance & Serviceverträge (SLA/OLA/UC).<br />
      <strong>IT-Handbuch Wirtschafts- & Geschäftsprozesse (Westermann)</strong>: AGB-Begriff, Einbeziehung, Vorrang Individualabrede, <code>§ 307 BGB</code>; Verbraucher/Unternehmen; Gewährleistung.
    </p>
  </section>
<a style="text-decoration:none" href="./2-4-compliance.md">Compliance</a>
</main>
</body>
</html>
