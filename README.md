# G-Travaux

Site web de G-Travaux - Entreprise de travaux de rénovation en Alsace.

## 🚀 Déploiement sur Hostinger

Ce site est configuré pour un déploiement automatique sur Hostinger via GitHub Actions.

### Quick Start
👉 **[Guide Rapide (5 min)](./QUICK_START_HOSTINGER.md)**

### Documentation Complète
📚 **[Guide Complet de Déploiement](./DEPLOIEMENT_HOSTINGER.md)**

### Déploiement Automatique

À chaque push sur la branche `main`, le site est automatiquement :
1. ✅ Compilé (Next.js build)
2. ✅ Exporté en fichiers statiques
3. ✅ Déployé sur Hostinger via SFTP

## 🛠️ Technologies Utilisées

- **Framework** : Next.js 15 (App Router)
- **UI** : React 19 + TypeScript
- **Styling** : Tailwind CSS
- **Animations** : Framer Motion
- **Tests** : Playwright
- **CI/CD** : GitHub Actions
- **Hébergement** : Hostinger

## 📦 Scripts Disponibles

```bash
# Développement
npm run dev              # Lancement en mode développement (http://localhost:3000)

# Build & Export
npm run build            # Build de production + export statique
npm run start            # Démarrage du serveur de production

# Tests
npm run test             # Lancer les tests Playwright
npm run test:ui          # Interface UI pour les tests
npm run test:debug       # Mode debug des tests

# Qualité du code
npm run lint             # Vérifier le code (ESLint)
npm run lint:fix         # Corriger automatiquement les erreurs
npm run format           # Formater le code (Prettier)
npm run format:check     # Vérifier le formatage

# Déploiement
npm run deploy:test      # Test du build en local
```

## 🏗️ Structure du Projet

```
g-travaux/
├── app/                    # Pages et composants Next.js (App Router)
│   ├── components/         # Composants réutilisables
│   ├── services/           # Pages des services
│   ├── realisations/       # Pages des réalisations
│   └── layout.tsx          # Layout principal
├── lib/                    # Utilitaires et données statiques
├── public/                 # Assets statiques (images, vidéos)
├── types/                  # Types TypeScript
├── .github/workflows/      # GitHub Actions (CI/CD)
└── out/                    # Fichiers exportés (générés après build)
```

## 🌐 Déploiement

### Automatique (Recommandé)

```bash
git add .
git commit -m "Votre message"
git push origin main
```

Le déploiement se lance automatiquement ! Suivez la progression dans **GitHub Actions**.

### Manuel (via script PowerShell)

```powershell
.\deploy-local.ps1
```

## 🔧 Configuration

### Variables d'Environnement

Créez un fichier `.env.local` pour le développement local :

```env
# Voir .env.example pour la liste complète
```

### Secrets GitHub (pour le déploiement)

Configurez ces secrets dans **GitHub Settings** → **Secrets and variables** → **Actions** :

- `SFTP_HOST` : Hôte SFTP Hostinger
- `SFTP_USERNAME` : Nom d'utilisateur
- `SFTP_PASSWORD` : Mot de passe
- `SFTP_PORT` : Port (22)
- `SFTP_REMOTE_DIR` : Répertoire distant (/public_html)

## 📝 Développement

### Installation

```bash
npm install
```

### Lancement en développement

```bash
npm run dev
```

Ouvrez [http://localhost:3000](http://localhost:3000) dans votre navigateur.

### Build de production

```bash
npm run build
```

Les fichiers statiques seront générés dans le dossier `out/`.

## 🧪 Tests

```bash
# Lancer tous les tests
npm run test

# Mode interactif
npm run test:ui

# Mode debug
npm run test:debug
```

## 📄 Pages Disponibles

- `/` - Page d'accueil
- `/about` - À propos
- `/services` - Liste des services
- `/services/[service]` - Pages détaillées des services
- `/realisations` - Portfolio des réalisations
- `/contact` - Page de contact
- `/mentions-legales` - Mentions légales
- `/confidentialite` - Politique de confidentialité
- `/cookies` - Politique des cookies

## 🎨 Personnalisation

### Couleurs et Styles

Modifiez `tailwind.config.js` pour personnaliser les couleurs, polices, etc.

### Contenu

Les données statiques sont dans `lib/staticData.ts`.

## 📞 Support

- **Documentation** : Voir les fichiers `.md` à la racine
- **Issues** : Créez une issue sur GitHub
- **Hostinger Support** : https://www.hostinger.fr/support

## 📜 Licence

Tous droits réservés - G-Travaux © 2024

---

**Développé avec ❤️ pour G-Travaux**