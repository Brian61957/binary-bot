const fs = require('fs');
const path = require('path');

const srcDir = path.join(__dirname, '..', 'static', 'xml', 'freebots');
const outDir = path.join(__dirname, '..', 'static', 'data');

if (!fs.existsSync(srcDir)) {
    console.error('❌ Folder not found:', srcDir);
    process.exit(1);
}
if (!fs.existsSync(outDir)) {
    fs.mkdirSync(outDir, { recursive: true });
}

const bots = fs
    .readdirSync(srcDir)
    .filter(f => f.endsWith('.xml'))
    .map(f => {
        const content = fs.readFileSync(path.join(srcDir, f), 'utf8');
        const nameMatch = content.match(/<title>(.*?)<\/title>/i) || content.match(/<!--\s*(.?)\s-->/);
        const name = nameMatch ? nameMatch[1].trim() : f.replace('.xml', '');
        return {
            file: `xml/freebots/${  f}`,
            name,
            desc: 'Auto-discovered trading bot XML',
        };
    });

fs.writeFileSync(path.join(outDir, 'freebots.json'), JSON.stringify(bots, null, 2), 'utf8');

console.log(`✅ Generated freebots.json with ${  bots.length  } entries`);
