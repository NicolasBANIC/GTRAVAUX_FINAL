/**
 * Script pour mettre à jour les références d'images PNG/JPG vers WebP
 * Parcourt les fichiers TypeScript/TSX et remplace les extensions
 */

const fs = require('fs');
const path = require('path');

const APP_DIR = path.join(__dirname, '..', 'app');
const LIB_DIR = path.join(__dirname, '..', 'lib');

// Mapping des fichiers à convertir (seulement ceux qui existent en WebP)
const IMAGE_MAPPINGS = {
  '/images/about-hero.png': '/images/about-hero.webp',
  '/images/ali-gherib.png': '/images/ali-gherib.webp',
  '/images/contact-hero.png': '/images/contact-hero.webp',
  '/images/demolition-hero.jpg': '/images/demolition-hero.webp',
  '/images/demolition.png': '/images/demolition.webp',
  '/images/electricite.png': '/images/electricite.webp',
  '/images/isolation-interieure.png': '/images/isolation-interieure.webp',
  '/images/maconnerie-hero.png': '/images/maconnerie-hero.webp',
  '/images/peinture-hero.jpg': '/images/peinture-hero.webp',
  '/images/realisations-hero.png': '/images/realisations-hero.webp',
  '/images/sanitaires-hero.jpg': '/images/sanitaires-hero.webp',
  '/images/sanitaires.jpg': '/images/sanitaires.webp',
  '/images/placeholder/home-hero.jpg': '/images/placeholder/home-hero.webp',
  '/images/placeholder/electricite-hero.png': '/images/placeholder/electricite-hero.webp',
  '/images/placeholder/isolation-interieure-hero.png': '/images/placeholder/isolation-interieure-hero.webp',
  '/images/placeholder/platrerie-placo-hero.png': '/images/placeholder/platrerie-placo-hero.webp',
  '/images/placeholder/plomberie-hero.jpg': '/images/placeholder/plomberie-hero.webp',
  '/images/placeholder/pose-sol-hero.jpg': '/images/placeholder/pose-sol-hero.webp',
  '/images/placeholder/avant.png': '/images/placeholder/avant.webp',
  '/images/placeholder/apres.png': '/images/placeholder/apres.webp',
};

function getAllFiles(dir, fileList = []) {
  const files = fs.readdirSync(dir);

  for (const file of files) {
    const filePath = path.join(dir, file);
    const stat = fs.statSync(filePath);

    if (stat.isDirectory()) {
      getAllFiles(filePath, fileList);
    } else if (/\.(tsx?|jsx?)$/i.test(file)) {
      fileList.push(filePath);
    }
  }

  return fileList;
}

function updateImageReferences(filePath) {
  let content = fs.readFileSync(filePath, 'utf8');
  let modified = false;
  let changes = [];

  for (const [oldPath, newPath] of Object.entries(IMAGE_MAPPINGS)) {
    // Échapper les caractères spéciaux pour la regex
    const escapedOldPath = oldPath.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
    const regex = new RegExp(escapedOldPath, 'g');

    if (regex.test(content)) {
      content = content.replace(regex, newPath);
      modified = true;
      changes.push(`${oldPath} → ${newPath}`);
    }
  }

  if (modified) {
    fs.writeFileSync(filePath, content, 'utf8');
    return changes;
  }

  return null;
}

function main() {
  console.log('🔍 Recherche des fichiers à mettre à jour...\n');

  const appFiles = getAllFiles(APP_DIR);
  const libFiles = getAllFiles(LIB_DIR);
  const allFiles = [...appFiles, ...libFiles];

  console.log(`📊 ${allFiles.length} fichiers à analyser\n`);

  let updatedCount = 0;
  let totalChanges = 0;

  for (const file of allFiles) {
    const changes = updateImageReferences(file);

    if (changes) {
      updatedCount++;
      totalChanges += changes.length;
      const relativePath = path.relative(path.join(__dirname, '..'), file);
      console.log(`✅ ${relativePath}`);
      changes.forEach((change) => console.log(`   ${change}`));
      console.log('');
    }
  }

  if (updatedCount > 0) {
    console.log(`\n📈 RÉSUMÉ:`);
    console.log(`   Fichiers modifiés: ${updatedCount}`);
    console.log(`   Références mises à jour: ${totalChanges}`);
  } else {
    console.log('✅ Aucune référence à mettre à jour');
  }
}

main();