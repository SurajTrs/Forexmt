const fs = require('fs');
const path = require('path');
const { createCanvas } = require('canvas');

const outputDir = path.join(__dirname, '../public/images/competitions');

// Create output directory if it doesn't exist
if (!fs.existsSync(outputDir)) {
  fs.mkdirSync(outputDir, { recursive: true });
}

// Create 3 placeholder images
for (let i = 1; i <= 3; i++) {
  const width = 800;
  const height = 400;
  const canvas = createCanvas(width, height);
  const ctx = canvas.getContext('2d');

  // Background color
  ctx.fillStyle = '#1e293b';
  ctx.fillRect(0, 0, width, height);

  // Text
  ctx.font = '48px Arial';
  ctx.fillStyle = '#ffffff';
  ctx.textAlign = 'center';
  ctx.textBaseline = 'middle';
  ctx.fillText(`Competition ${i}`, width / 2, height / 2);

  // Save to file
  const buffer = canvas.toBuffer('image/jpeg');
  fs.writeFileSync(path.join(outputDir, `competition${i}.jpg`), buffer);
}

console.log('Generated 3 placeholder competition images');
