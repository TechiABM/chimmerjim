import sharp from '../node_modules/sharp/lib/index.js';
import fs from 'fs';
import path from 'path';

const QUALITY = 82;

const tasks = [
  // Heroes — re-encode as JPEG (all are actually PNG internally)
  { src: 'public/heroes/hero-home-desktop.png', dest: 'public/heroes/hero-home-desktop.jpg', w: 1376 },
  { src: 'public/heroes/hero-home-mobile.png',  dest: 'public/heroes/hero-home-mobile.jpg',  w: 768  },
  { src: 'public/heroes/hero-home.jpg',          dest: 'public/heroes/hero-home.jpg',          w: 1376 },
  { src: 'public/heroes/hero-metro.jpg',         dest: 'public/heroes/hero-metro.jpg',         w: 1376 },
  { src: 'public/heroes/hero-metro-service.jpg', dest: 'public/heroes/hero-metro-service.jpg', w: 1376 },
  { src: 'public/heroes/hero-service.jpg',       dest: 'public/heroes/hero-service.jpg',       w: 1376 },
  { src: 'public/heroes/hero-ads.jpg',           dest: 'public/heroes/hero-ads.jpg',           w: 1376 },
  // Photos
  { src: 'public/photos/crown-rebuild.png',          dest: 'public/photos/crown-rebuild.jpg',          w: 900 },
  { src: 'public/photos/roofing-vent-install.png',   dest: 'public/photos/roofing-vent-install.jpg',   w: 900 },
  { src: 'public/photos/chimney-liner-install.jpeg', dest: 'public/photos/chimney-liner-install.jpeg', w: 900 },
  { src: 'public/photos/chimney-caps-rusted.jpeg',   dest: 'public/photos/chimney-caps-rusted.jpeg',   w: 900 },
  { src: 'public/photos/dryer-vent-before.jpeg',     dest: 'public/photos/dryer-vent-before.jpeg',     w: 900 },
  { src: 'public/photos/dryer-vent-after.jpeg',      dest: 'public/photos/dryer-vent-after.jpeg',      w: 900 },
  // OG image
  { src: 'public/og-chimmerjim.jpg', dest: 'public/og-chimmerjim.jpg', w: 1376 },
];

const fmt = (bytes) => `${(bytes / 1024).toFixed(0)} KB`;

for (const { src, dest, w } of tasks) {
  if (!fs.existsSync(src)) { console.log(`SKIP (not found): ${src}`); continue; }
  const before = fs.statSync(src).size;
  const tmp = dest + '.tmp';
  await sharp(src)
    .resize({ width: w, withoutEnlargement: true })
    .jpeg({ quality: QUALITY, mozjpeg: true })
    .toFile(tmp);
  fs.renameSync(tmp, dest);
  const after = fs.statSync(dest).size;
  const pct = (((before - after) / before) * 100).toFixed(0);
  console.log(`${dest.padEnd(48)} ${fmt(before).padStart(8)} → ${fmt(after).padStart(8)}  (-${pct}%)`);
}

// Delete old .png originals that were replaced by .jpg
const toDelete = [
  'public/heroes/hero-home-desktop.png',
  'public/heroes/hero-home-mobile.png',
  'public/photos/crown-rebuild.png',
  'public/photos/roofing-vent-install.png',
];
for (const f of toDelete) {
  if (fs.existsSync(f)) { fs.unlinkSync(f); console.log(`DELETED: ${f}`); }
}
