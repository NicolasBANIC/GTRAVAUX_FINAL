/**
 * Script d'optimisation des images pour le SEO
 * Convertit les PNG/JPEG lourds en WebP avec compression optimale
 */

const fs = require('fs');
const path = require('path');
const sharp = require('sharp');

const PUBLIC_IMAGES_DIR = path.join(__dirname, '..', 'public', 'images');
const MIN_SIZE_KB = 50; // Convertir seulement les images > 50KB
const WEBP_QUALITY = 85; // Qualité WebP (85 = bon compromis qualité/taille)

// Liste des fichiers à exclure de la conversion
const EXCLUDE_FILES = [
  'peinture-finitions.webp',
  'platrerie-placo.webp',
  'plomberie.webp',
  'pose-de-sol.webp',
];

async function getImageFiles(dir, fileList = []) {
  const files = fs.readdirSync(dir);

  for (const file of files) {
    const filePath = path.join(dir, file);
    const stat = fs.statSync(filePath);

    if (stat.isDirectory()) {
      await getImageFiles(filePath, fileList);
    } else if (/\.(png|jpg|jpeg)$/i.test(file)) {
      const sizeKB = stat.size / 1024;
      if (sizeKB > MIN_SIZE_KB && !EXCLUDE_FILES.includes(file)) {
        fileList.push({
          path: filePath,
          name: file,
          sizeKB: Math.round(sizeKB * 100) / 100,
        });
      }
    }
  }

  return fileList;
}

async function convertToWebP(imagePath) {
  const parsedPath = path.parse(imagePath);
  const webpPath = path.join(parsedPath.dir, `${parsedPath.name}.webp`);

  // Ne pas reconvertir si le fichier WebP existe déjà
  if (fs.existsSync(webpPath)) {
    console.log(`⏭️  Déjà converti: ${parsedPath.name}.webp`);
    return null;
  }

  try {
    const originalSize = fs.statSync(imagePath).size;

    await sharp(imagePath)
      .webp({ quality: WEBP_QUALITY, effort: 6 })
      .toFile(webpPath);

    const newSize = fs.statSync(webpPath).size;
    const savings = ((originalSize - newSize) / originalSize) * 100;

    return {
      original: imagePath,
      webp: webpPath,
      originalSizeKB: Math.round((originalSize / 1024) * 100) / 100,
      newSizeKB: Math.round((newSize / 1024) * 100) / 100,
      savingsPercent: Math.round(savings * 100) / 100,
    };
  } catch (error) {
    console.error(`❌ Erreur lors de la conversion de ${imagePath}:`, error.message);
    return null;
  }
}

async function main() {
  console.log('🔍 Recherche des images à optimiser...\n');

  const images = await getImageFiles(PUBLIC_IMAGES_DIR);

  if (images.length === 0) {
    console.log('✅ Aucune image à optimiser (toutes < 50KB ou déjà en WebP)');
    return;
  }

  console.log(`📊 ${images.length} images trouvées à optimiser:\n`);

  let totalOriginalSize = 0;
  let totalNewSize = 0;
  let convertedCount = 0;

  for (const image of images) {
    console.log(`🖼️  Conversion: ${image.name} (${image.sizeKB} KB)`);
    const result = await convertToWebP(image.path);

    if (result) {
      totalOriginalSize += result.originalSizeKB;
      totalNewSize += result.newSizeKB;
      convertedCount++;
      console.log(
        `   ✅ ${result.originalSizeKB} KB → ${result.newSizeKB} KB (${result.savingsPercent}% économisé)\n`
      );
    }
  }

  if (convertedCount > 0) {
    const totalSavings = totalOriginalSize - totalNewSize;
    const totalSavingsPercent = ((totalSavings / totalOriginalSize) * 100).toFixed(2);

    console.log('\n📈 RÉSUMÉ DE L\'OPTIMISATION:');
    console.log(`   Images converties: ${convertedCount}`);
    console.log(`   Taille originale: ${totalOriginalSize.toFixed(2)} KB`);
    console.log(`   Nouvelle taille: ${totalNewSize.toFixed(2)} KB`);
    console.log(`   Économie totale: ${totalSavings.toFixed(2)} KB (${totalSavingsPercent}%)`);
    console.log('\n⚠️  IMPORTANT: Mettez à jour les références d\'images dans le code pour utiliser les fichiers .webp');
  } else {
    console.log('\n✅ Toutes les images sont déjà optimisées');
  }
}

main().catch(console.error);