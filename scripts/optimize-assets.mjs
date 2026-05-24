import sharp from '../node_modules/sharp/lib/index.js';
import fs from 'fs';

const fmt = (b) => `${(b / 1024).toFixed(0)} KB`;

// 1. Compress logo source: 3620×970 → 620×166 PNG (Next.js optimizes this at runtime, small source = fast)
await sharp('./public/logo.png')
  .resize({ width: 620 })
  .png({ compressionLevel: 9 })
  .toFile('./public/logo.png.tmp');
fs.renameSync('./public/logo.png.tmp', './public/logo.png');
const logoMeta = await sharp('./public/logo.png').metadata();
console.log(`logo.png  → ${logoMeta.width}×${logoMeta.height}  ${fmt(fs.statSync('./public/logo.png').size)}`);

// 2. Convert all hero JPEGs to WebP
const heroes = [
  'public/heroes/hero-home-desktop.jpg',
  'public/heroes/hero-home-mobile.jpg',
  'public/heroes/hero-home.jpg',
  'public/heroes/hero-metro.jpg',
  'public/heroes/hero-metro-service.jpg',
  'public/heroes/hero-service.jpg',
  'public/heroes/hero-ads.jpg',
];

for (const src of heroes) {
  if (!fs.existsSync(src)) { console.log(`SKIP: ${src}`); continue; }
  const dest = src.replace(/\.jpg$/, '.webp');
  const before = fs.statSync(src).size;
  await sharp(src).webp({ quality: 82 }).toFile(dest);
  const after = fs.statSync(dest).size;
  fs.unlinkSync(src);
  console.log(`${dest.padEnd(48)} ${fmt(before).padStart(8)} → ${fmt(after).padStart(8)}  (-${(((before-after)/before)*100).toFixed(0)}%)`);
}
