/**
 * Script de nettoyage des fichiers orphelins
 * Détecte les fichiers non référencés et les déplace dans .safe_trash_
 */

const fs = require('fs');
const path = require('path');

const ROOT_DIR = path.join(__dirname, '..');
const PUBLIC_IMAGES_DIR = path.join(ROOT_DIR, 'public', 'images');
const APP_DIR = path.join(ROOT_DIR, 'app');
const LIB_DIR = path.join(ROOT_DIR, 'lib');
const TRASH_DIR = path.join(ROOT_DIR, '.safe_trash_20251002_0236');

// Fichiers à exclure du nettoyage (même s'ils semblent orphelins)
const EXCLUDE_PATTERNS = [
  /\.gitkeep$/,
  /^\./, // fichiers cachés
];

function getAllCodeFiles(dir, fileList = []) {
  if (!fs.existsSync(dir)) return fileList;
  
  const files = fs.readdirSync(dir);

  for (const file of files) {
    const filePath = path.join(dir, file);
    const stat = fs.statSync(filePath);

    if (stat.isDirectory()) {
      getAllCodeFiles(filePath, fileList);
    } else if (/\.(tsx?|jsx?|css|scss)$/i.test(file)) {
      fileList.push(filePath);
    }
  }

  return fileList;
}

function getAllImageFiles(dir, fileList = []) {
  if (!fs.existsSync(dir)) return fileList;
  
  const files = fs.readdirSync(dir);

  for (const file of files) {
    const filePath = path.join(dir, file);
    const stat = fs.statSync(filePath);

    if (stat.isDirectory()) {
      getAllImageFiles(filePath, fileList);
    } else if (/\.(png|jpg|jpeg|webp|avif|svg|gif)$/i.test(file)) {
      fileList.push(filePath);
    }
  }

  return fileList;
}

function isImageReferenced(imagePath, codeContent) {
  const relativePath = path.relative(path.join(ROOT_DIR, 'public'), imagePath);
  const webPath = '/' + relativePath.replace(/\\/g, '/');
  
  // Vérifier si le chemin de l'image apparaît dans le code
  return codeContent.includes(webPath);
}

function moveToTrash(filePath) {
  const relativePath = path.relative(PUBLIC_IMAGES_DIR, filePath);
  const trashPath = path.join(TRASH_DIR, 'images', relativePath);
  const trashDir = path.dirname(trashPath);

  // Créer le dossier de destination
  if (!fs.existsSync(trashDir)) {
    fs.mkdirSync(trashDir, { recursive: true });
  }

  // Déplacer le fichier
  fs.renameSync(filePath, trashPath);
  
  return trashPath;
}

function main() {
  console.log('🔍 Analyse des fichiers orphelins...\n');

  // Lire tout le code source
  const codeFiles = [
    ...getAllCodeFiles(APP_DIR),
    ...getAllCodeFiles(LIB_DIR),
  ];

  let allCodeContent = '';
  for (const file of codeFiles) {
    allCodeContent += fs.readFileSync(file, 'utf8') + '\n';
  }

  // Analyser les images
  const imageFiles = getAllImageFiles(PUBLIC_IMAGES_DIR);
  console.log(`📊 ${imageFiles.length} images trouvées\n`);

  const orphans = [];
  const referenced = [];

  for (const imagePath of imageFiles) {
    const fileName = path.basename(imagePath);
    
    // Exclure certains fichiers
    if (EXCLUDE_PATTERNS.some(pattern => pattern.test(fileName))) {
      continue;
    }

    if (isImageReferenced(imagePath, allCodeContent)) {
      referenced.push(imagePath);
    } else {
      orphans.push(imagePath);
    }
  }

  console.log(`✅ Images référencées: ${referenced.length}`);
  console.log(`⚠️  Images orphelines: ${orphans.length}\n`);

  if (orphans.length === 0) {
    console.log('✅ Aucune image orpheline détectée');
    return;
  }

  console.log('📦 Images orphelines à déplacer:\n');
  
  let totalSize = 0;
  const movedFiles = [];

  for (const orphan of orphans) {
    const stat = fs.statSync(orphan);
    const sizeKB = Math.round((stat.size / 1024) * 100) / 100;
    totalSize += sizeKB;
    
    const relativePath = path.relative(PUBLIC_IMAGES_DIR, orphan);
    console.log(`   📄 ${relativePath} (${sizeKB} KB)`);
    
    try {
      const trashPath = moveToTrash(orphan);
      movedFiles.push({ original: orphan, trash: trashPath, size: sizeKB });
    } catch (error) {
      console.error(`   ❌ Erreur: ${error.message}`);
    }
  }

  console.log(`\n📈 RÉSUMÉ:`);
  console.log(`   Fichiers déplacés: ${movedFiles.length}`);
  console.log(`   Taille totale: ${totalSize.toFixed(2)} KB`);
  console.log(`   Destination: ${TRASH_DIR}`);
  console.log(`\n⚠️  Les fichiers ont été déplacés dans .safe_trash_ et peuvent être restaurés si nécessaire`);
}

main();