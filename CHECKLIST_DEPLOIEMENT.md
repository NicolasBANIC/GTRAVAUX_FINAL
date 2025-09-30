# ✅ Checklist de Déploiement Hostinger

## 📋 Avant de Commencer

- [ ] Vous avez un compte Hostinger actif
- [ ] Vous avez un plan d'hébergement web (pas seulement un domaine)
- [ ] Vous avez un repository GitHub avec votre code
- [ ] Vous avez Git installé sur votre machine

---

## 🔧 Configuration Hostinger

### Étape 1 : Activer SSH/SFTP

- [ ] Connectez-vous à **hPanel Hostinger**
- [ ] Allez dans **Avancé** → **SSH Access**
- [ ] Activez l'accès SSH si ce n'est pas déjà fait
- [ ] Notez les informations suivantes :

```
Hôte SSH : _______________________
Username : _______________________
Password : _______________________
Port     : 22
```

### Étape 2 : Vérifier le Répertoire Web

- [ ] Dans hPanel, allez dans **Fichiers** → **Gestionnaire de fichiers**
- [ ] Identifiez le répertoire de votre site :
  - [ ] `/public_html` (hébergement partagé)
  - [ ] `/domains/votredomaine.com/public_html` (multi-domaines)
  - [ ] Autre : _______________________

---

## 🐙 Configuration GitHub

### Étape 3 : Pousser le Code sur GitHub

- [ ] Créez un nouveau repository sur GitHub.com
- [ ] Copiez l'URL du repository : _______________________

```bash
# Dans votre terminal, à la racine du projet
git init
git add .
git commit -m "Initial commit - Configuration déploiement Hostinger"
git branch -M main
git remote add origin [URL_DE_VOTRE_REPO]
git push -u origin main
```

### Étape 4 : Configurer les Secrets GitHub

- [ ] Allez sur votre repository GitHub
- [ ] Cliquez sur **Settings** (en haut à droite)
- [ ] Dans le menu de gauche : **Secrets and variables** → **Actions**
- [ ] Cliquez sur **New repository secret**

Ajoutez les secrets suivants (un par un) :

#### Secret 1 : SFTP_HOST
- [ ] Name : `SFTP_HOST`
- [ ] Secret : [Votre hôte SSH de Hostinger]
- [ ] Cliquez sur **Add secret**

#### Secret 2 : SFTP_USERNAME
- [ ] Name : `SFTP_USERNAME`
- [ ] Secret : [Votre username SSH]
- [ ] Cliquez sur **Add secret**

#### Secret 3 : SFTP_PASSWORD
- [ ] Name : `SFTP_PASSWORD`
- [ ] Secret : [Votre mot de passe SSH]
- [ ] Cliquez sur **Add secret**

#### Secret 4 : SFTP_PORT
- [ ] Name : `SFTP_PORT`
- [ ] Secret : `22`
- [ ] Cliquez sur **Add secret**

#### Secret 5 : SFTP_REMOTE_DIR
- [ ] Name : `SFTP_REMOTE_DIR`
- [ ] Secret : `/public_html` (ou votre répertoire identifié à l'étape 2)
- [ ] Cliquez sur **Add secret**

### Étape 5 : Vérifier les Secrets

- [ ] Vous devez voir 5 secrets dans la liste :
  - [ ] SFTP_HOST
  - [ ] SFTP_USERNAME
  - [ ] SFTP_PASSWORD
  - [ ] SFTP_PORT
  - [ ] SFTP_REMOTE_DIR

---

## 🚀 Premier Déploiement

### Étape 6 : Déclencher le Déploiement

Option A : Push automatique
```bash
git add .
git commit -m "Configuration déploiement"
git push origin main
```

Option B : Déclenchement manuel
- [ ] Allez sur GitHub → Votre repo → **Actions**
- [ ] Sélectionnez **Build & Deploy to Hostinger (SFTP)**
- [ ] Cliquez sur **Run workflow** → **Run workflow**

### Étape 7 : Suivre le Déploiement

- [ ] Allez dans l'onglet **Actions** de votre repository
- [ ] Cliquez sur le workflow en cours d'exécution
- [ ] Attendez que les deux jobs soient verts ✅ :
  - [ ] **build** (environ 2-3 minutes)
  - [ ] **deploy** (environ 1-2 minutes)

### Étape 8 : Vérifier sur Hostinger

- [ ] Retournez dans hPanel → **Gestionnaire de fichiers**
- [ ] Naviguez vers `/public_html` (ou votre répertoire)
- [ ] Vérifiez la présence des fichiers :
  - [ ] `index.html`
  - [ ] `.htaccess`
  - [ ] Dossier `_next/`
  - [ ] Dossier `images/`
  - [ ] Dossier `videos/`

---

## 🌐 Configuration du Domaine

### Étape 9 : Pointer le Domaine

- [ ] Dans hPanel, allez dans **Domaines**
- [ ] Vérifiez que votre domaine pointe vers cet hébergement
- [ ] Si nécessaire, ajoutez ou configurez le domaine

### Étape 10 : Activer HTTPS

- [ ] Dans hPanel, allez dans **Sécurité** → **SSL**
- [ ] Activez le certificat SSL gratuit (Let's Encrypt)
- [ ] Attendez quelques minutes pour l'activation

---

## ✅ Tests Finaux

### Étape 11 : Tester le Site

- [ ] Visitez votre domaine : `https://votredomaine.com`
- [ ] Vérifiez que le site s'affiche correctement
- [ ] Testez la navigation :
  - [ ] Page d'accueil
  - [ ] Page À propos
  - [ ] Pages Services
  - [ ] Page Réalisations
  - [ ] Page Contact
- [ ] Vérifiez que les images s'affichent
- [ ] Vérifiez que les vidéos se chargent
- [ ] Testez le formulaire de contact

### Étape 12 : Vérifier HTTPS

- [ ] Le cadenas 🔒 apparaît dans la barre d'adresse
- [ ] Aucun avertissement de sécurité
- [ ] Les ressources (images, CSS, JS) se chargent en HTTPS

---

## 🎉 Déploiement Réussi !

### Prochaines Étapes

- [ ] Configurez Google Analytics (si nécessaire)
- [ ] Soumettez votre sitemap à Google Search Console
- [ ] Testez les performances avec PageSpeed Insights
- [ ] Configurez les sauvegardes automatiques dans Hostinger

### Déploiements Futurs

Maintenant, à chaque fois que vous voulez mettre à jour votre site :

```bash
git add .
git commit -m "Description de vos modifications"
git push origin main
```

Le site sera automatiquement mis à jour en 3-5 minutes ! 🚀

---

## 🆘 En Cas de Problème

### Le workflow GitHub échoue

1. [ ] Vérifiez les logs dans **Actions** → Cliquez sur le workflow rouge
2. [ ] Vérifiez que tous les secrets sont correctement configurés
3. [ ] Vérifiez que SSH est activé sur Hostinger

### Le site ne s'affiche pas

1. [ ] Vérifiez que les fichiers sont bien dans `/public_html`
2. [ ] Vérifiez que le domaine pointe vers Hostinger (DNS)
3. [ ] Attendez jusqu'à 24h pour la propagation DNS
4. [ ] Consultez les logs d'erreur : hPanel → **Avancé** → **Error Logs**

### Les images ne s'affichent pas

1. [ ] Vérifiez que les dossiers `images/` et `videos/` existent
2. [ ] Vérifiez les permissions (644 pour fichiers, 755 pour dossiers)
3. [ ] Videz le cache de votre navigateur (Ctrl + F5)

### Erreur "Permission denied"

1. [ ] Vérifiez le mot de passe SSH dans les secrets GitHub
2. [ ] Réinitialisez le mot de passe SSH dans hPanel
3. [ ] Mettez à jour le secret `SFTP_PASSWORD` sur GitHub

---

## 📞 Support

- **Documentation** : Consultez `DEPLOIEMENT_HOSTINGER.md`
- **Quick Start** : Consultez `QUICK_START_HOSTINGER.md`
- **Support Hostinger** : Chat 24/7 dans hPanel
- **GitHub Actions** : https://docs.github.com/actions

---

**Date de déploiement** : _______________

**URL du site** : _______________

**Notes** : 
_______________________________________
_______________________________________
_______________________________________