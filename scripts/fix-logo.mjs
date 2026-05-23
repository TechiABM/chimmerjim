import sharp from '../node_modules/sharp/lib/index.js';

async function fixLogo() {
  const src = './logo/logo_Chimmer_Jim.png';
  const dest = './public/logo.png';

  const { data, info } = await sharp(src)
    .ensureAlpha()
    .raw()
    .toBuffer({ resolveWithObject: true });

  const { width, height } = info;
  const buf = Buffer.from(data); // RGBA

  // Background is neutral grey (~219-225). Logo has dark navy or vivid orange.
  // Mark a pixel as background if it's near-neutral (|R-G|<20, |R-B|<20) AND bright (>170).
  let minX = width, minY = height, maxX = 0, maxY = 0;

  for (let y = 0; y < height; y++) {
    for (let x = 0; x < width; x++) {
      const i = (y * width + x) * 4;
      const r = buf[i], g = buf[i + 1], b = buf[i + 2];
      const isNeutral = Math.abs(r - g) < 25 && Math.abs(r - b) < 25 && Math.abs(g - b) < 25;
      const isBright = r > 160 && g > 160 && b > 160;
      if (isNeutral && isBright) {
        buf[i + 3] = 0; // transparent
      } else {
        if (x < minX) minX = x;
        if (x > maxX) maxX = x;
        if (y < minY) minY = y;
        if (y > maxY) maxY = y;
      }
    }
  }

  console.log('Bounding box:', minX, minY, '→', maxX, maxY);
  const padH = 40, padV = 30;
  const left   = Math.max(0, minX - padH);
  const top    = Math.max(0, minY - padV);
  const cropW  = Math.min(width  - left, maxX - left + padH + 1);
  const cropH  = Math.min(height - top,  maxY - top  + padV + 1);
  console.log('Crop:', left, top, cropW, 'x', cropH);

  await sharp(buf, { raw: { width, height, channels: 4 } })
    .extract({ left, top, width: cropW, height: cropH })
    .png({ compressionLevel: 9 })
    .toFile(dest);

  const meta = await sharp(dest).metadata();
  console.log('Output:', meta.width, 'x', meta.height, 'hasAlpha:', meta.hasAlpha);
}

fixLogo().catch(e => { console.error(e); process.exit(1); });
