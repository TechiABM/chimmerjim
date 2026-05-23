import sharp from '../node_modules/sharp/lib/index.js';

async function inspect() {
  const src = './logo/logo_Chimmer_Jim.png';
  const meta = await sharp(src).metadata();
  console.log('Metadata:', JSON.stringify(meta, null, 2));

  // Sample pixels in the top-left corner (should be "background")
  const { data, info } = await sharp(src)
    .raw()
    .toBuffer({ resolveWithObject: true });

  console.log('\nInfo:', info);
  console.log('\nTop-left 4 pixels (first corner — background area):');
  for (let i = 0; i < 4; i++) {
    const off = i * info.channels;
    const vals = [];
    for (let c = 0; c < info.channels; c++) vals.push(data[off + c]);
    console.log(`  pixel[${i}]:`, vals);
  }

  // Sample at position (200, 200) — should be well inside background
  const px200 = (200 * info.width + 200) * info.channels;
  const sample = [];
  for (let c = 0; c < info.channels; c++) sample.push(data[px200 + c]);
  console.log('\nPixel at (200,200):', sample);

  // Count unique pixel values in top row
  const topRowUniq = new Set();
  for (let x = 0; x < info.width; x++) {
    const off = x * info.channels;
    topRowUniq.add(data.slice(off, off + info.channels).join(','));
  }
  console.log('\nUnique values in top row:', topRowUniq.size, '(first 10)', [...topRowUniq].slice(0, 10));
}

inspect().catch(e => { console.error(e); process.exit(1); });
