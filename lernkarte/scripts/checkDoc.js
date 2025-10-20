(async () => {
  const fs = await import('fs');
  const path = await import('path');
  const matterModule = await import('gray-matter');
  const { marked } = await import('marked');

  const matter = matterModule.default ?? matterModule;

  marked.setOptions({ headerIds: false });

  const file = path.join(
    process.cwd(),
    'src',
    'app',
    'docs',
    'teil-2',
    '01-betreiben-von-it-systemen',
    '01-schichtenmodelle-osi-tcp-ip',
    'IPv4-IPv6.md'
  );

  if (!fs.existsSync(file)) {
    console.error('File not found:', file);
    process.exit(2);
  }

  const raw = fs.readFileSync(file, 'utf8');
  const parsed = matter(raw);
  const html = marked(parsed.content);
  console.log('--- HTML OUTPUT START ---');
  console.log(html);
  console.log('--- HTML OUTPUT END ---');
})();
