// /d:/lern-karte/lernkarte/src/utils/utils.ts

/**
 *
 * Kleine Hilfsfunktionen zum Einfügen eines Zeilenumbruchs,
 * wenn das türkische Wort "görünce" (oder Varianten ohne Umlaut)
 * im Text vorkommt.
 */

/**
 * Ersetzt Vorkommen von "görünce" (auch "gorunce") durch einen Zeilenumbruch,
 * normalisiert Zeilenenden und trimmt leere Zeilen.
 *
 * Beispiel:
 * "Recht auf Information\nRecht  \n görünce yeni satir basi yap"
 * -> "Recht auf Information\nRecht\nyeni satir basi yap"
 */
export function insertNewlinesOnGorunce(input: string): string {
    if (!input) return input;
    // Erlaube Varianten mit/ohne Umlaut: g[oö]r[uü]nce
    const markerRe = /\s*g[oö]r[uü]nce\s*/gi;

    // 1) Ersetze Marker durch '\n'
    let normalized = input.replace(markerRe, '\n');

    // 2) Normalisiere Zeilenenden auf '\n'
    normalized = normalized.replace(/\r\n?/g, '\n');

    // 3) Teile in Zeilen, trimme jeweils und entferne leere Zeilen
    const lines = normalized
        .split('\n')
        .map(line => line.trim())
        .filter(line => line.length > 0);

    // 4) Füge Zeilen wieder mit genau einem '\n' zusammen
    return lines.join('\n');
}

/**
 * Hilfsfunktion: gibt die Zeilen als Array zurück (nach derselben Normalisierung).
 */
export function linesAfterInsertGorunce(input: string): string[] {
    const processed = insertNewlinesOnGorunce(input);
    return processed ? processed.split('\n') : [];
}


/**
 * Split an input string into parts and mark which parts match any of the provided keywords.
 * Returns an array of { text, bold } where bold === true when the part equals one of the keywords
 * (case-insensitive). This is intentionally data-only (no JSX) so it can be used in both
 * server and client code; the caller maps parts to React elements as needed.
 */
export function splitByKeywords(input: string, keywords: string[]): Array<{ text: string; bold: boolean }> {
    if (!input) return [{ text: '', bold: false }];
    if (!keywords || keywords.length === 0) return [{ text: input, bold: false }];

    // Escape keywords for regex and join into a capturing group
    const escaped = keywords.map(k => k.replace(/[.*+?^${}()|[\]\\]/g, '\\$&'));
    const pattern = `(${escaped.join('|')})`;
    const re = new RegExp(pattern, 'gi');

    // Split while keeping the delimiters (capturing group): split by the regex
    const parts = input.split(re).filter(p => p !== undefined && p !== null && p.length > 0);
    const lowerKeywords = keywords.map(k => k.toLowerCase());

    return parts.map(p => ({
        text: p,
        bold: lowerKeywords.includes(p.toLowerCase()),
    }));
}


/**
 * If a line starts with a leading label followed by a colon (e.g. "Normal:", "Sehr hoch:"),
 * split it into [{text: label+':', bold: true}, {text: rest, bold: false}].
 * Otherwise return [{text: input, bold: false}].
 *
 * This is useful to bold severity/label prefixes that appear at the start of lines.
 */
export function splitByLeadingLabelColon(input: string): Array<{ text: string; bold: boolean }> {
    if (!input) return [{ text: '', bold: false }];

    // Match start-of-line optional whitespace, then a label composed of letters, spaces or hyphens,
    // followed immediately by a colon. Capture the label and the rest.
    // e.g. "Sehr hoch: ..." or "Normal: ..."
    const m = input.match(/^\s*([\p{L}\d\- ]+?):\s*(.*)$/u);
    if (!m) return [{ text: input, bold: false }];

    const label = m[1];
    const rest = m[2] ?? '';
    return [
        { text: label + ':', bold: true },
        { text: rest, bold: false },
    ];
}