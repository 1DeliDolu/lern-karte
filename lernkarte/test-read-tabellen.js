import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';
import { marked } from 'marked';

const category = 'teil-1';
const segs = ['01-Informieren-und-Beraten-von-Kunden-und-Kundinnen','01-3-daten-und-sachverhalte','01-3-4-tabellenkalkulation'];
const p = path.join('D:', 'lern-karte', 'lernkarte', 'src', 'teil', category, ...segs) + '.md';
console.log('PATH', p);
console.log('EXISTS', fs.existsSync(p));
if (fs.existsSync(p)) {
  const raw = fs.readFileSync(p, 'utf8');
  const parsed = matter(raw);
  console.log('MD_LEN', parsed.content.length);
  console.log('HTML_LEN', marked(parsed.content).length);
  console.log('---MD PREVIEW---\n', parsed.content.slice(0, 1000));
} else {
  console.error('NOT FOUND');
  process.exit(2);
}
