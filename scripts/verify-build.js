/**
 * Script de vérification du build statique
 * Vérifie que l'export Next.js est complet et prêt pour le déploiement
 */

const fs = require('fs');
const path = require('path');

const OUT_DIR = path.join(__dirname, '..', 'out');
const REQUIRED_FILES = [
  'index.html',
  '_next',
  'about',
  'contact',
  'confidentialite',
  'services',
  'realisations',
  'mentions-legales',
  'cookies',
  'blog',
  'robots.txt',
  'sitemap.xml',
];

const FORBIDDEN_PATHS = [
  'api',
  'config.php',
  'vendor',
  '.env',
];

console.log('🔍 Vérification du build statique...\n');

// Vérifier que le dossier out/ existe
if (!fs.existsSync(OUT_DIR)) {
  console.error('❌ ERREUR: Le dossier out/ n\'existe pas!');
  console.error('   Exécutez "npm run build" d\'abord.');
  process.exit(1);
}

// Vérifier les fichiers requis
console.log('📋 Vérification des fichiers requis:');
let missingFiles = [];
REQUIRED_FILES.forEach(file => {
  const filePath = path.join(OUT_DIR, file);
  if (fs.existsSync(filePath)) {
    console.log(`   ✅ ${file}`);
  } else {
    console.log(`   ❌ ${file} - MANQUANT`);
    missingFiles.push(file);
  }
});

if (missingFiles.length > 0) {
  console.error(`\n❌ ${missingFiles.length} fichier(s) requis manquant(s)!`);
  process.exit(1);
}

// Vérifier l'absence de fichiers interdits
console.log('\n🚫 Vérification des fichiers interdits:');
let forbiddenFound = [];
FORBIDDEN_PATHS.forEach(file => {
  const filePath = path.join(OUT_DIR, file);
  if (fs.existsSync(filePath)) {
    console.log(`   ❌ ${file} - PRÉSENT (ne devrait pas être là!)`);
    forbiddenFound.push(file);
  } else {
    console.log(`   ✅ ${file} - absent (OK)`);
  }
});

if (forbiddenFound.length > 0) {
  console.error(`\n❌ ${forbiddenFound.length} fichier(s) interdit(s) trouvé(s)!`);
  process.exit(1);
}

// Calculer la taille totale
function getDirSize(dirPath) {
  let size = 0;
  const files = fs.readdirSync(dirPath);
  
  files.forEach(file => {
    const filePath = path.join(dirPath, file);
    const stats = fs.statSync(filePath);
    
    if (stats.isDirectory()) {
      size += getDirSize(filePath);
    } else {
      size += stats.size;
    }
  });
  
  return size;
}

const totalSize = getDirSize(OUT_DIR);
const sizeMB = (totalSize / (1024 * 1024)).toFixed(2);

console.log(`\n📊 Statistiques du build:`);
console.log(`   Taille totale: ${sizeMB} MB`);

// Compter les fichiers HTML
function countFiles(dirPath, extension) {
  let count = 0;
  const files = fs.readdirSync(dirPath);
  
  files.forEach(file => {
    const filePath = path.join(dirPath, file);
    const stats = fs.statSync(filePath);
    
    if (stats.isDirectory()) {
      count += countFiles(filePath, extension);
    } else if (file.endsWith(extension)) {
      count++;
    }
  });
  
  return count;
}

const htmlCount = countFiles(OUT_DIR, '.html');
const jsCount = countFiles(OUT_DIR, '.js');
const cssCount = countFiles(OUT_DIR, '.css');

console.log(`   Pages HTML: ${htmlCount}`);
console.log(`   Fichiers JS: ${jsCount}`);
console.log(`   Fichiers CSS: ${cssCount}`);

console.log('\n✅ Build vérifié avec succès!');
console.log('   Le dossier out/ est prêt pour le déploiement.\n');