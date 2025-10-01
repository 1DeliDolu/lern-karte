import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';
import { marked } from 'marked';

const p = path.join('D:', 'lern-karte', 'lernkarte', 'src', 'teil', 'teil-2', '01-betreiben-von-it-systemen', '01-schichtenmodelle-osi-tcp-ip', 'arp.md');

try {
  console.log('PATH:', p);
  const exists = fs.existsSync(p);
  console.log('EXISTS:', exists);
  if (!exists) process.exit(2);
  const raw = fs.readFileSync(p, 'utf8');
  const parsed = matter(raw);
  const md = parsed.content || '';
  const html = marked(md);
  console.log('MD_LEN:', md.length);
  console.log('HTML_LEN:', html.length);
  console.log('---MD START---');
  console.log(md);
  console.log('---MD END---');
  console.log('---HTML START---');
  console.log(html.slice(0,2000));
  console.log('---HTML END---');
} catch (err) {
  console.error('ERROR', err && err.message);
  process.exit(1);
}
