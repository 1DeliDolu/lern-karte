import React from "react";

/**
 * Modern, accessible footer with typical legal information required in Germany (Impressum / Angaben gemäß § 5 TMG).
 * Replace placeholder data with your real company details.
 *
 * Usage: save as src/components/Footer.tsx and import <Footer /> in your layout.
 */

const styles: { [k: string]: React.CSSProperties } = {
    footer: {
        background: "linear-gradient(180deg,#0f172a,#0b1220)",
        color: "#e6eef8",
        padding: "2.25rem 1rem",
        fontSize: "0.95rem",
    },
    container: {
        maxWidth: 1100,
        margin: "0 auto",
        display: "flex",
        flexWrap: "wrap",
        gap: "1.5rem",
        alignItems: "flex-start",
    },
    column: {
        flex: "1 1 220px",
        minWidth: 220,
    },
    brand: {
        fontSize: "1.05rem",
        fontWeight: 700,
        marginBottom: ".5rem",
        color: "#ffffff",
    },
    small: {
        color: "#bcd0ea",
        fontSize: ".9rem",
        lineHeight: 1.5,
    },
    linkList: {
        listStyle: "none",
        padding: 0,
        margin: 0,
    },
    link: {
        color: "#cfe7ff",
        textDecoration: "none",
        display: "inline-block",
        padding: "4px 0",
    },
    footerBottom: {
        borderTop: "1px solid rgba(255,255,255,0.04)",
        marginTop: "1.5rem",
        paddingTop: "1rem",
        display: "flex",
        flexWrap: "wrap",
        justifyContent: "space-between",
        gap: ".75rem",
        alignItems: "center",
        color: "#9fb8da",
        fontSize: ".88rem",
    },
    legalBadge: {
        background: "rgba(255,255,255,0.02)",
        padding: ".25rem .5rem",
        borderRadius: 6,
        color: "#dbefff",
        fontSize: ".85rem",
    },
    icon: {
        width: 16,
        height: 16,
        verticalAlign: "middle",
        marginRight: 8,
        fill: "currentColor",
    },
};

const Footer: React.FC = () => {
    const year = new Date().getFullYear();

    return (
        <footer style={styles.footer} aria-labelledby="footer-heading">
            <div style={styles.container}>
                <div style={styles.column}>
                    <div id="footer-heading" style={styles.brand}>
                        Musterfirma GmbH
                    </div>
                    <div style={styles.small}>
                        Angaben gemäß § 5 TMG:
                        <div style={{ marginTop: 8 }}>
                            Musterfirma GmbH
                            <br />
                            Musterstraße 12
                            <br />
                            12345 Musterstadt, Deutschland
                            <br />
                            Geschäftsführer: Max Mustermann
                        </div>
                    </div>
                </div>

                <div style={styles.column} aria-label="Kontakt und Rechtliches">
                    <h4 style={{ margin: "0 0 .6rem 0", color: "#e8f6ff" }}>Kontakt</h4>
                    <div style={styles.small}>
                        <div>
                            <a style={styles.link} href="tel:+491234567890">
                                <svg style={styles.icon} viewBox="0 0 24 24" aria-hidden>
                                    <path d="M6.62 10.79a15.053 15.053 0 006.59 6.59l2.2-2.2a1 1 0 011.01-.24c1.12.37 2.33.57 3.57.57a1 1 0 011 1V20a1 1 0 01-1 1C10.07 21 3 13.93 3 4a1 1 0 011-1h3.5a1 1 0 011 1c0 1.24.2 2.45.57 3.57a1 1 0 01-.24 1.01l-2.2 2.21z" />
                                </svg>
                                +49 123 4567890
                            </a>
                        </div>
                        <div>
                            <a style={styles.link} href="mailto:info@musterfirma.de">
                                <svg style={styles.icon} viewBox="0 0 24 24" aria-hidden>
                                    <path d="M20 4H4a2 2 0 00-2 2v12a2 2 0 002 2h16a2 2 0 002-2V6a2 2 0 00-2-2zm-1.4 4.25L12 13 5.4 8.25A1 1 0 016 7h12a1 1 0 01.6.25z" />
                                </svg>
                                info@musterfirma.de
                            </a>
                        </div>
                        <div style={{ marginTop: 8 }}>
                            Handelsregister: HRB 123456 (Amtsgericht Musterstadt)
                            <br />
                            USt-ID: DE123456789
                        </div>
                    </div>
                </div>

                <div style={styles.column}>
                    <h4 style={{ margin: "0 0 .6rem 0", color: "#e8f6ff" }}>Rechtliches</h4>
                    <ul style={styles.linkList}>
                        <li>
                            <a style={styles.link} href="/impressum">
                                Impressum
                            </a>
                        </li>
                        <li>
                            <a style={styles.link} href="/datenschutz">
                                Datenschutzerklärung
                            </a>
                        </li>
                        <li>
                            <a style={styles.link} href="/agb">
                                AGB
                            </a>
                        </li>
                        <li>
                            <a style={styles.link} href="/cookies">
                                Cookie-Hinweis
                            </a>
                        </li>
                    </ul>
                    <div style={{ marginTop: 12 }} className="accessible-note" aria-hidden>
                        <span style={styles.legalBadge}>Angaben gemäß § 5 TMG</span>
                    </div>
                </div>
            </div>

            <div style={{ ...styles.container, ...styles.footerBottom }}>
                <div>
                    &copy; {year} Musterfirma GmbH — Alle Rechte vorbehalten.
                </div>
                <div style={{ textAlign: "right" }}>
                    <a style={styles.link} href="/datenschutz">
                        Datenschutzerklärung
                    </a>
                    {" • "}
                    <a style={styles.link} href="/impressum">
                        Impressum
                    </a>
                </div>
            </div>

            <div style={{ maxWidth: 1100, margin: "0.75rem auto 0", color: "#94b6da", fontSize: ".82rem" }}>
                Hinweis: Die oben stehenden Angaben sind Platzhalter. Ersetzen Sie diese durch Ihre firmenspezifischen Daten (Anschrift,
                vertretungsberechtigte Personen, Handelsregister-Nummer, USt-IdNr. etc.), damit Ihr Impressum den gesetzlichen Anforderungen in Deutschland entspricht.
            </div>
        </footer>
    );
};

export default Footer;