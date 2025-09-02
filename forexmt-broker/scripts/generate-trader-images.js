const fs = require('fs');
const path = require('path');
const { createCanvas } = require('canvas');

// Create output directories
const imagesDir = path.join(__dirname, '../public/images');
const tradersDir = path.join(imagesDir, 'traders');

[imagesDir, tradersDir].forEach(dir => {
  if (!fs.existsSync(dir)) {
    fs.mkdirSync(dir, { recursive: true });
  }
});

// Function to create a placeholder image
function createImage(filePath, text, width = 800, height = 600) {
  const canvas = createCanvas(width, height);
  const ctx = canvas.getContext('2d');

  // Background color
  ctx.fillStyle = '#1e293b';
  ctx.fillRect(0, 0, width, height);

  // Text
  ctx.font = 'bold 48px Arial';
  ctx.fillStyle = '#ffffff';
  ctx.textAlign = 'center';
  ctx.textBaseline = 'middle';
  
  // Draw text with word wrap
  const maxWidth = width * 0.8;
  const lineHeight = 60;
  let y = height / 2 - (text.split('\n').length - 1) * lineHeight / 2;
  
  text.split('\n').forEach(line => {
    let x = width / 2;
    ctx.fillText(line, x, y);
    y += lineHeight;
  });

  // Save to file
  const buffer = canvas.toBuffer('image/jpeg');
  fs.writeFileSync(filePath, buffer);
  console.log(`Created: ${filePath}`);
}

// Create trader images
createImage(path.join(tradersDir, 'trader1.jpg'), 'Trader 1\nProfile');
createImage(path.join(tradersDir, 'trader2.jpg'), 'Trader 2\nProfile');
createImage(path.join(tradersDir, 'trader3.jpg'), 'Trader 3\nProfile');

// Create copy trading hero image
createImage(
  path.join(imagesDir, 'copy-trading-hero.png'),
  'Copy Trading\nHero Image',
  1200,
  600
);
