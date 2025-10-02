/**
 * Script de vérification des liens internes
 * Détecte les liens cassés et génère un rapport
 */

const fs = require('fs');
const path = require('path');

const ROOT_DIR = path.join(__dirname, '..');
const APP_DIR = path.join(ROOT_DIR, 'app');

// Routes valides dans l'application
const VALID_ROUTES = [
  '/',
  '/about',
  '/contact',
  '/realisations',
  '/services/demolition',
  '/services/electricite',
  '/services/isolation-interieure',
  '/services/maconnerie',
  '/services/peinture-finitions',
  '/services/platrerie-placo',
  '/services/plomberie',
  '/services/pose-de-sol',
  '/services/sanitaires',
  '/mentions-legales',
  '/confidentialite',
  '/cookies',
  '/blog', // Existe mais vide
];

function getAllFiles(dir, fileList = []) {
  if (!fs.existsSync(dir)) return fileList;
  
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

function extractLinks(content) {
  const links = [];
  
  // Regex pour extraire les liens href et to
  const hrefRegex = /(?:href|to)=["']([^"']+)["']/g;
  let match;
  
  while ((match = hrefRegex.exec(content)) !== null) {
    const link = match[1];
    
    // Ignorer les liens externes, ancres, mailto, tel
    if (
      !link.startsWith('http') &&
      !link.startsWith('mailto:') &&
      !link.startsWith('tel:') &&
      !link.startsWith('#')
    ) {
      links.push(link);
    }
  }
  
  return links;
}

function isValidRoute(route) {
  // Nettoyer la route (enlever les query params et ancres)
  const cleanRoute = route.split('?')[0].split('#')[0];
  
  // Vérifier si la route existe
  return VALID_ROUTES.some(validRoute => {
    return cleanRoute === validRoute || cleanRoute === validRoute + '/';
  });
}

function main() {
  console.log('🔍 Vérification des liens internes...\n');

  const files = getAllFiles(APP_DIR);
  console.log(`📊 ${files.length} fichiers à analyser\n`);

  const brokenLinks = [];
  const allLinks = new Set();

  for (const file of files) {
    const content = fs.readFileSync(file, 'utf8');
    const links = extractLinks(content);
    
    for (const link of links) {
      allLinks.add(link);
      
      if (!isValidRoute(link)) {
        const relativePath = path.relative(ROOT_DIR, file);
        brokenLinks.push({
          file: relativePath,
          link: link,
        });
      }
    }
  }

  console.log(`✅ Liens uniques trouvés: ${allLinks.size}`);
  console.log(`❌ Liens cassés: ${brokenLinks.length}\n`);

  if (brokenLinks.length > 0) {
    console.log('⚠️  LIENS CASSÉS DÉTECTÉS:\n');
    
    const groupedByLink = {};
    for (const item of brokenLinks) {
      if (!groupedByLink[item.link]) {
        groupedByLink[item.link] = [];
      }
      groupedByLink[item.link].push(item.file);
    }

    for (const [link, files] of Object.entries(groupedByLink)) {
      console.log(`   🔗 ${link}`);
      files.forEach(file => console.log(`      📄 ${file}`));
      console.log('');
    }

    // Générer un fichier de rapport
    const reportPath = path.join(ROOT_DIR, 'BROKEN_LINKS_REPORT.txt');
    let report = 'RAPPORT DES LIENS CASSÉS\n';
    report += '========================\n\n';
    report += `Date: ${new Date().toISOString()}\n`;
    report += `Liens cassés: ${brokenLinks.length}\n\n`;

    for (const [link, files] of Object.entries(groupedByLink)) {
      report += `Lien: ${link}\n`;
      report += `Fichiers concernés:\n`;
      files.forEach(file => report += `  - ${file}\n`);
      report += '\n';
    }

    fs.writeFileSync(reportPath, report, 'utf8');
    console.log(`📄 Rapport généré: BROKEN_LINKS_REPORT.txt`);
  } else {
    console.log('✅ Aucun lien cassé détecté');
  }

  // Afficher les routes valides
  console.log('\n📋 ROUTES VALIDES:');
  VALID_ROUTES.forEach(route => console.log(`   ✓ ${route}`));
}

main();