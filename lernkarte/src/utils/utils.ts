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