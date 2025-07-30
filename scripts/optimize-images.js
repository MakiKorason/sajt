const imagemin = require('imagemin');
const imageminWebp = require('imagemin-webp');
const imageminMozjpeg = require('imagemin-mozjpeg');
const imageminPngquant = require('imagemin-pngquant');
const fs = require('fs');
const path = require('path');

const optimizeImages = async () => {
  try {
    console.log('🔄 Optimizujem slike...');
    
    // Optimizuj slike iz src/images
    const srcImages = await imagemin(['src/images/*.{jpg,jpeg,png}'], {
      destination: 'src/images/optimized',
      plugins: [
        imageminMozjpeg({ quality: 80 }),
        imageminPngquant({ quality: [0.6, 0.8] }),
        imageminWebp({ quality: 80 })
      ]
    });

    // Optimizuj slike iz public
    const publicImages = await imagemin(['public/*.{jpg,jpeg,png}'], {
      destination: 'public/optimized',
      plugins: [
        imageminMozjpeg({ quality: 80 }),
        imageminPngquant({ quality: [0.6, 0.8] }),
        imageminWebp({ quality: 80 })
      ]
    });

    console.log(`✅ Optimizovano ${srcImages.length + publicImages.length} slika`);
    
    // Kreiraj optimized direktorijume ako ne postoje
    if (!fs.existsSync('src/images/optimized')) {
      fs.mkdirSync('src/images/optimized', { recursive: true });
    }
    if (!fs.existsSync('public/optimized')) {
      fs.mkdirSync('public/optimized', { recursive: true });
    }

  } catch (error) {
    console.error('❌ Greška pri optimizaciji slika:', error);
  }
};

optimizeImages(); 