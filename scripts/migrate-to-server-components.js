#!/usr/bin/env node

const fs = require('fs');
const path = require('path');

/**
 * Script de migration automatique vers Server Components
 * 
 * Ce script aide à migrer progressivement les composants Client vers Server
 * en créant des backups et en remplaçant les fichiers étape par étape.
 */

const MIGRATION_STEPS = [
  {
    name: 'Step 1: Backup des fichiers originaux',
    action: 'backup',
    files: [
      'app/page.tsx',
      'app/components/Hero.tsx',
      'app/components/GoogleReviews.tsx',
      'app/components/ServiceParagraph.tsx'
    ]
  },
  {
    name: 'Step 2: Installation des wrappers clients',
    action: 'copy',
    files: [
      {
        src: 'app/components/ClientWrapper.tsx',
        dest: 'app/components/ClientWrapper.tsx'
      },
      {
        src: 'app/components/ClientMotionDiv.tsx', 
        dest: 'app/components/ClientMotionDiv.tsx'
      },
      {
        src: 'lib/staticData.ts',
        dest: 'lib/staticData.ts'
      }
    ]
  },
  {
    name: 'Step 3: Migration des composants Server',
    action: 'migrate',
    files: [
      {
        src: 'app/components/HeroServer.tsx',
        dest: 'app/components/Hero.tsx',
        backup: true
      },
      {
        src: 'app/components/GoogleReviewsServer.tsx',
        dest: 'app/components/GoogleReviews.tsx',
        backup: true
      },
      {
        src: 'app/components/ServiceParagraphServer.tsx',
        dest: 'app/components/ServiceParagraph.tsx',
        backup: true
      }
    ]
  },
  {
    name: 'Step 4: Migration de la page principale',
    action: 'migrate',
    files: [
      {
        src: 'app/page_server.tsx',
        dest: 'app/page.tsx',
        backup: true
      }
    ]
  }
];

class MigrationManager {
  constructor() {
    this.backupDir = path.join(process.cwd(), '.migration-backup');
    this.currentStep = 0;
  }

  async run() {
    console.log('🚀 Début de la migration vers Server Components\n');
    
    // Créer le dossier de backup
    if (!fs.existsSync(this.backupDir)) {
      fs.mkdirSync(this.backupDir, { recursive: true });
    }

    for (const step of MIGRATION_STEPS) {
      console.log(`\n📋 ${step.name}`);
      
      try {
        switch (step.action) {
          case 'backup':
            await this.backupFiles(step.files);
            break;
          case 'copy':
            await this.copyFiles(step.files);
            break;
          case 'migrate':
            await this.migrateFiles(step.files);
            break;
        }
        
        console.log('✅ Étape terminée avec succès');
        this.currentStep++;
        
      } catch (error) {
        console.error(`❌ Erreur durant l'étape: ${error.message}`);
        console.log('🔄 Restauration des backups...');
        await this.rollback();
        return;
      }
    }

    console.log('\n🎉 Migration terminée avec succès !');
    console.log('\n📊 Prochaines étapes:');
    console.log('1. Tester l\'application: npm run dev');
    console.log('2. Vérifier les performances: npm run build');
    console.log('3. Lancer les tests: npm run test');
    console.log('4. Si tout fonctionne: npm run cleanup-migration');
  }

  async backupFiles(files) {
    for (const file of files) {
      const srcPath = path.join(process.cwd(), file);
      const backupPath = path.join(this.backupDir, file);
      
      if (fs.existsSync(srcPath)) {
        // Créer les dossiers nécessaires
        const backupDirPath = path.dirname(backupPath);
        if (!fs.existsSync(backupDirPath)) {
          fs.mkdirSync(backupDirPath, { recursive: true });
        }
        
        fs.copyFileSync(srcPath, backupPath);
        console.log(`   📦 Backup: ${file}`);
      } else {
        console.log(`   ⚠️  Fichier non trouvé: ${file}`);
      }
    }
  }

  async copyFiles(files) {
    for (const file of files) {
      const srcPath = path.join(process.cwd(), typeof file === 'string' ? file : file.src);
      const destPath = path.join(process.cwd(), typeof file === 'string' ? file : file.dest);
      
      if (fs.existsSync(srcPath)) {
        // Créer les dossiers nécessaires
        const destDirPath = path.dirname(destPath);
        if (!fs.existsSync(destDirPath)) {
          fs.mkdirSync(destDirPath, { recursive: true });
        }
        
        fs.copyFileSync(srcPath, destPath);
        console.log(`   📄 Copié: ${typeof file === 'string' ? file : file.src} → ${typeof file === 'string' ? file : file.dest}`);
      } else {
        console.log(`   ⚠️  Fichier source non trouvé: ${typeof file === 'string' ? file : file.src}`);
      }
    }
  }

  async migrateFiles(files) {
    for (const file of files) {
      const srcPath = path.join(process.cwd(), file.src);
      const destPath = path.join(process.cwd(), file.dest);
      
      // Backup automatique si demandé
      if (file.backup && fs.existsSync(destPath)) {
        const backupPath = path.join(this.backupDir, file.dest);
        const backupDirPath = path.dirname(backupPath);
        
        if (!fs.existsSync(backupDirPath)) {
          fs.mkdirSync(backupDirPath, { recursive: true });
        }
        
        fs.copyFileSync(destPath, backupPath);
      }
      
      if (fs.existsSync(srcPath)) {
        fs.copyFileSync(srcPath, destPath);
        console.log(`   🔄 Migré: ${file.src} → ${file.dest}`);
        
        // Supprimer le fichier temporaire
        fs.unlinkSync(srcPath);
      } else {
        console.log(`   ⚠️  Fichier de migration non trouvé: ${file.src}`);
      }
    }
  }

  async rollback() {
    console.log('🔄 Restauration des fichiers depuis le backup...');
    
    // Parcourir le dossier de backup et restaurer tous les fichiers
    const restoreFiles = (dir, relativePath = '') => {
      const items = fs.readdirSync(dir);
      
      for (const item of items) {
        const fullPath = path.join(dir, item);
        const stats = fs.statSync(fullPath);
        
        if (stats.isDirectory()) {
          restoreFiles(fullPath, path.join(relativePath, item));
        } else {
          const originalPath = path.join(process.cwd(), relativePath, item);
          const originalDirPath = path.dirname(originalPath);
          
          if (!fs.existsSync(originalDirPath)) {
            fs.mkdirSync(originalDirPath, { recursive: true });
          }
          
          fs.copyFileSync(fullPath, originalPath);
          console.log(`   🔙 Restauré: ${path.join(relativePath, item)}`);
        }
      }
    };
    
    if (fs.existsSync(this.backupDir)) {
      restoreFiles(this.backupDir);
      console.log('✅ Restauration terminée');
    }
  }
}

// Script de nettoyage pour supprimer les backups après confirmation
class CleanupManager {
  constructor() {
    this.backupDir = path.join(process.cwd(), '.migration-backup');
  }

  async cleanup() {
    console.log('🧹 Nettoyage des fichiers de migration...');
    
    if (fs.existsSync(this.backupDir)) {
      // Supprimer récursivement le dossier de backup
      fs.rmSync(this.backupDir, { recursive: true, force: true });
      console.log('✅ Backups supprimés');
    }
    
    // Supprimer les fichiers temporaires de migration
    const tempFiles = [
      'app/page_server.tsx',
      'app/components/HeroServer.tsx',
      'app/components/GoogleReviewsServer.tsx',
      'app/components/ServiceParagraphServer.tsx'
    ];
    
    for (const file of tempFiles) {
      const filePath = path.join(process.cwd(), file);
      if (fs.existsSync(filePath)) {
        fs.unlinkSync(filePath);
        console.log(`   🗑️  Supprimé: ${file}`);
      }
    }
    
    console.log('🎉 Nettoyage terminé !');
  }
}

// Gestion des arguments de ligne de commande
const args = process.argv.slice(2);

if (args.includes('--cleanup')) {
  const cleanup = new CleanupManager();
  cleanup.cleanup().catch(console.error);
} else if (args.includes('--rollback')) {
  const migration = new MigrationManager();
  migration.rollback().catch(console.error);
} else {
  const migration = new MigrationManager();
  migration.run().catch(console.error);
}

module.exports = { MigrationManager, CleanupManager };