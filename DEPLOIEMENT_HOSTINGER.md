# 🚀 Guide de Déploiement sur Hostinger

## Configuration Actuelle

Ce projet est configuré pour un déploiement automatique sur Hostinger via GitHub Actions et SFTP.

## 📋 Prérequis

1. Un compte Hostinger avec un hébergement web
2. Un repository GitHub avec ce code
3. Accès SSH/SFTP activé sur Hostinger

## 🔧 Configuration Initiale

### 1. Récupérer les Informations SFTP de Hostinger

1. Connectez-vous à votre **hPanel Hostinger**
2. Allez dans **Avancé** → **SSH Access** (ou **Fichiers** → **FTP Accounts**)
3. Notez les informations suivantes :
   - **Hôte** : Généralement votre domaine ou une IP
   - **Nom d'utilisateur** : Votre username SSH/SFTP
   - **Port** : 22 (pour SFTP)
   - **Répertoire** : `/public_html` ou `/domains/votredomaine.com/public_html`

### 2. Configurer les Secrets GitHub

1. Allez sur votre repository GitHub
2. Cliquez sur **Settings** → **Secrets and variables** → **Actions**
3. Cliquez sur **New repository secret** et ajoutez :

| Nom du Secret | Valeur | Exemple |
|---------------|--------|---------|
| `SFTP_HOST` | Votre hôte SFTP | `ssh.votredomaine.com` ou `123.45.67.89` |
| `SFTP_USERNAME` | Votre nom d'utilisateur | `u123456789` |
| `SFTP_PASSWORD` | Votre mot de passe SFTP | `VotreMotDePasse123!` |
| `SFTP_PORT` | Port SFTP | `22` |
| `SFTP_REMOTE_DIR` | Répertoire distant | `/public_html` |

### 3. Structure du Projet

```
.github/
  workflows/
    deploy-sftp.yml          # Workflow actif (SFTP)
    deploy-ftp.yml.backup    # Backup du workflow FTP
```

## 🚀 Déploiement

### Déploiement Automatique

Le déploiement se fait automatiquement à chaque push sur la branche `main` :

```bash
git add .
git commit -m "Votre message de commit"
git push origin main
```

### Déploiement Manuel

Vous pouvez aussi déclencher un déploiement manuellement :

1. Allez sur GitHub → **Actions**
2. Sélectionnez **Build & Deploy to Hostinger (SFTP)**
3. Cliquez sur **Run workflow**

## 📦 Processus de Build

Le workflow effectue les étapes suivantes :

1. **Checkout** : Récupère le code du repository
2. **Setup Node** : Installe Node.js 20
3. **Install** : Installe les dépendances (`npm ci`)
4. **Build** : Compile le projet Next.js (`npm run build`)
5. **Export** : Génère les fichiers statiques dans `/out`
6. **Deploy** : Upload les fichiers vers Hostinger via SFTP

## 🔍 Vérification du Déploiement

### Sur GitHub

1. Allez dans **Actions**
2. Vérifiez que le workflow s'est exécuté avec succès (✅)
3. Consultez les logs en cas d'erreur

### Sur Hostinger

1. Connectez-vous au **Gestionnaire de fichiers**
2. Vérifiez que les fichiers sont dans `/public_html`
3. Vérifiez la présence de :
   - `index.html`
   - `.htaccess`
   - Dossiers `_next/`, `images/`, `videos/`

### Sur le Site

1. Visitez votre domaine : `https://votredomaine.com`
2. Vérifiez que le site s'affiche correctement
3. Testez la navigation entre les pages

## 🛠️ Dépannage

### Erreur : "Permission denied"

**Solution** : Vérifiez que :
- Le compte SFTP a les droits d'écriture sur `/public_html`
- Le chemin `SFTP_REMOTE_DIR` est correct

### Erreur : "Connection refused"

**Solution** : Vérifiez que :
- SSH/SFTP est activé sur votre hébergement Hostinger
- Le port est bien `22`
- L'hôte est correct

### Le site affiche une page blanche

**Solution** : Vérifiez que :
- Le fichier `.htaccess` est présent dans `/public_html`
- Les fichiers ont été correctement uploadés
- Consultez les logs d'erreur dans hPanel → **Avancé** → **Error Logs**

### Les images ne s'affichent pas

**Solution** : Vérifiez que :
- Les dossiers `images/` et `videos/` sont présents
- Les permissions des fichiers sont correctes (644 pour les fichiers, 755 pour les dossiers)

## 🔄 Passer de SFTP à FTP

Si SFTP ne fonctionne pas, vous pouvez utiliser FTP :

1. Renommez le workflow :
   ```bash
   mv .github/workflows/deploy-sftp.yml .github/workflows/deploy-sftp.yml.backup
   mv .github/workflows/deploy-ftp.yml.backup .github/workflows/deploy-ftp.yml
   ```

2. Configurez les secrets FTP dans GitHub :
   - `FTP_HOST`
   - `FTP_USERNAME`
   - `FTP_PASSWORD`
   - `FTP_PORT` (généralement `21`)
   - `FTP_SECURE` (`false` ou `true` pour FTPS)
   - `FTP_REMOTE_DIR`

## 📝 Configuration du Domaine

### Pointer le Domaine vers Hostinger

1. Dans hPanel, allez dans **Domaines**
2. Ajoutez votre domaine ou vérifiez qu'il pointe vers votre hébergement
3. Attendez la propagation DNS (jusqu'à 24h)

### Configurer HTTPS

1. Dans hPanel, allez dans **Sécurité** → **SSL**
2. Activez le certificat SSL gratuit (Let's Encrypt)
3. Forcez HTTPS dans le `.htaccess` (déjà configuré)

## 🎯 Commandes Utiles

### Build Local

```bash
npm run build
```

### Test du Build

```bash
npm run deploy:test
```

### Vérifier les Fichiers Générés

```bash
ls -la out/
```

## 📞 Support

- **Hostinger** : https://www.hostinger.fr/support
- **GitHub Actions** : https://docs.github.com/actions
- **Next.js** : https://nextjs.org/docs

## ✅ Checklist de Déploiement

- [ ] Repository GitHub créé et code pushé
- [ ] Secrets GitHub configurés (SFTP_*)
- [ ] SSH/SFTP activé sur Hostinger
- [ ] Workflow GitHub Actions testé
- [ ] Site accessible sur le domaine
- [ ] HTTPS activé
- [ ] Navigation testée
- [ ] Images et vidéos chargées
- [ ] Formulaires fonctionnels

---

**Dernière mise à jour** : $(Get-Date -Format "yyyy-MM-dd")