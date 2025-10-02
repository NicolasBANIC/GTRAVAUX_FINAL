# 🚀 GUIDE DE DÉPLOIEMENT HOSTINGER

**Archive:** `site_deploy_posix.tar.gz` (69.31 MB)  
**Format:** POSIX-compliant (chemins avec `/`)  
**Contenu:** Front-end Next.js uniquement (23 pages statiques)

---

## ⚠️ AVERTISSEMENT CRITIQUE

**NE PAS TOUCHER AU RÉPERTOIRE `/api` SUR LE SERVEUR !**

Le backend PHP est déjà en production et fonctionne correctement.  
Cette archive contient UNIQUEMENT le front-end (Next.js static export).

---

## 📋 PRÉ-REQUIS

### Sur votre machine locale
- ✅ Archive `site_deploy_posix.tar.gz` présente à la racine du projet
- ✅ Accès SSH ou File Manager Hostinger
- ✅ Identifiants de connexion Hostinger

### Sur le serveur Hostinger
- ✅ Répertoire web configuré (généralement `public_html/`)
- ✅ Backend `/api` existant et fonctionnel
- ✅ Permissions d'écriture sur le répertoire web

---

## 🔧 MÉTHODE 1 : DÉPLOIEMENT VIA SSH (RECOMMANDÉ)

### Étape 1 : Connexion SSH
```bash
ssh votre-utilisateur@votre-domaine.com
```

### Étape 2 : Sauvegarde de l'ancien site
```bash
cd public_html/
tar -czf backup_site_$(date +%Y%m%d_%H%M%S).tar.gz --exclude='api' .
mv backup_site_*.tar.gz ~/backups/
```

### Étape 3 : Upload de l'archive
```bash
# Depuis votre machine locale
scp site_deploy_posix.tar.gz votre-utilisateur@votre-domaine.com:~/
```

### Étape 4 : Extraction sur le serveur
```bash
# Retour sur le serveur SSH
cd ~/public_html/

# Supprimer l'ancien front-end (SAUF /api)
find . -maxdepth 1 ! -name 'api' ! -name '.' ! -name '..' ! -name '.htaccess' -exec rm -rf {} +

# Extraire la nouvelle archive
tar -xzf ~/site_deploy_posix.tar.gz -C .

# Vérifier les permissions
chmod -R 755 .
find . -type f -exec chmod 644 {} \;
```

### Étape 5 : Vérification
```bash
# Vérifier que /api existe toujours
ls -la api/

# Vérifier la structure du front-end
ls -la

# Devrait afficher :
# - index.html
# - _next/
# - images/
# - about/
# - contact/
# - services/
# - api/ (INTACT)
```

---

## 🖱️ MÉTHODE 2 : DÉPLOIEMENT VIA FILE MANAGER

### Étape 1 : Connexion au File Manager
1. Connectez-vous à votre compte Hostinger
2. Allez dans **Hosting** → **File Manager**
3. Naviguez vers `public_html/`

### Étape 2 : Sauvegarde de l'ancien site
1. Sélectionnez tous les fichiers/dossiers **SAUF** `api/`
2. Clic droit → **Compress** → Nommez `backup_YYYYMMDD.tar.gz`
3. Téléchargez la sauvegarde sur votre machine

### Étape 3 : Nettoyage
1. Sélectionnez tous les fichiers/dossiers **SAUF** `api/` et `.htaccess`
2. Clic droit → **Delete**
3. Confirmez la suppression

### Étape 4 : Upload de la nouvelle archive
1. Cliquez sur **Upload** en haut à droite
2. Sélectionnez `site_deploy_posix.tar.gz`
3. Attendez la fin de l'upload (69.31 MB)

### Étape 5 : Extraction
1. Clic droit sur `site_deploy_posix.tar.gz`
2. Sélectionnez **Extract**
3. Choisissez le répertoire courant (`public_html/`)
4. Confirmez l'extraction

### Étape 6 : Nettoyage post-extraction
1. Supprimez `site_deploy_posix.tar.gz` du serveur
2. Vérifiez que le dossier `api/` est toujours présent

### Étape 7 : Permissions
1. Sélectionnez tous les fichiers/dossiers
2. Clic droit → **Permissions**
3. Dossiers : `755` (rwxr-xr-x)
4. Fichiers : `644` (rw-r--r--)

---

## ✅ VÉRIFICATIONS POST-DÉPLOIEMENT

### 1. Structure des fichiers
Vérifiez que la structure suivante existe :
```
public_html/
├── index.html          ✅ (nouveau)
├── 404.html            ✅ (nouveau)
├── .htaccess           ✅ (existant ou nouveau)
├── _next/              ✅ (nouveau)
│   ├── static/
│   └── ...
├── images/             ✅ (nouveau)
├── about/              ✅ (nouveau)
├── contact/            ✅ (nouveau)
├── services/           ✅ (nouveau)
├── realisations/       ✅ (nouveau)
├── blog/               ✅ (nouveau)
└── api/                ✅ (INTACT - NE PAS TOUCHER)
    ├── contact.php
    ├── devis.php
    ├── .htaccess
    └── ...
```

### 2. Test des pages
Visitez les URLs suivantes et vérifiez qu'elles fonctionnent :
- ✅ https://g-travaux.fr/
- ✅ https://g-travaux.fr/about/
- ✅ https://g-travaux.fr/contact/
- ✅ https://g-travaux.fr/services/
- ✅ https://g-travaux.fr/realisations/

### 3. Test des informations de contact
Sur chaque page, vérifiez :
- ✅ Téléphone affiché : **03 67 10 26 53**
- ✅ Lien téléphone : `tel:+33367102653` (clic doit ouvrir l'app téléphone)
- ✅ Email affiché : **contact@g-travaux.fr**
- ✅ Lien email : `mailto:contact@g-travaux.fr` (clic doit ouvrir l'app email)

### 4. Test du backend (API)
Vérifiez que les formulaires fonctionnent toujours :
- ✅ Formulaire de contact : https://g-travaux.fr/contact/
- ✅ Formulaire de devis (si applicable)
- ✅ Envoi d'email via PHP (backend `/api`)

### 5. Test des données structurées (SEO)
1. Ouvrez https://g-travaux.fr/
2. Clic droit → **Inspecter** (ou F12)
3. Recherchez `application/ld+json`
4. Vérifiez que le JSON contient :
   ```json
   {
     "telephone": "+33367102653",
     "email": "contact@g-travaux.fr"
   }
   ```

### 6. Test de performance
- ✅ Temps de chargement < 3 secondes
- ✅ Images chargées correctement
- ✅ Pas d'erreurs 404 dans la console

---

## 🐛 DÉPANNAGE

### Problème : Page blanche après déploiement
**Cause possible :** Permissions incorrectes  
**Solution :**
```bash
cd public_html/
chmod -R 755 .
find . -type f -exec chmod 644 {} \;
```

### Problème : Images ne s'affichent pas
**Cause possible :** Chemin incorrect ou permissions  
**Solution :**
```bash
cd public_html/images/
chmod -R 755 .
```

### Problème : Formulaire de contact ne fonctionne plus
**Cause possible :** Répertoire `/api` écrasé ou supprimé  
**Solution :**
1. Restaurez le répertoire `/api` depuis la sauvegarde
2. Vérifiez les permissions : `chmod -R 755 api/`
3. Vérifiez le fichier `api/.htaccess`

### Problème : Erreur 404 sur les sous-pages
**Cause possible :** `.htaccess` manquant ou incorrect  
**Solution :**
Créez/modifiez `.htaccess` à la racine :
```apache
# Redirection pour Next.js static export
RewriteEngine On
RewriteCond %{REQUEST_FILENAME} !-f
RewriteCond %{REQUEST_FILENAME} !-d
RewriteRule ^(.*)$ /$1.html [L]

# Protection du répertoire API
<IfModule mod_rewrite.c>
  RewriteRule ^api/ - [L]
</IfModule>
```

### Problème : Ancien numéro de téléphone encore visible
**Cause possible :** Cache du navigateur  
**Solution :**
1. Videz le cache du navigateur (Ctrl+Shift+Delete)
2. Testez en navigation privée
3. Vérifiez le code source de la page (Ctrl+U)

---

## 📞 SUPPORT

### En cas de problème
1. **Vérifiez les logs d'erreur** :
   - Hostinger : File Manager → `error_log`
   - Console navigateur : F12 → Console

2. **Restaurez la sauvegarde** si nécessaire :
   ```bash
   cd public_html/
   tar -xzf ~/backups/backup_site_YYYYMMDD_HHMMSS.tar.gz
   ```

3. **Contactez le support Hostinger** :
   - Chat en ligne : https://www.hostinger.fr/
   - Email : support@hostinger.com

---

## 📊 CHECKLIST FINALE

Avant de considérer le déploiement comme terminé :

- [ ] Archive uploadée et extraite
- [ ] Répertoire `/api` intact et fonctionnel
- [ ] Page d'accueil accessible
- [ ] Toutes les sous-pages accessibles
- [ ] Téléphone affiché : `03 67 10 26 53`
- [ ] Lien téléphone : `tel:+33367102653`
- [ ] Email affiché : `contact@g-travaux.fr`
- [ ] Lien email : `mailto:contact@g-travaux.fr`
- [ ] Formulaire de contact fonctionnel
- [ ] Images chargées correctement
- [ ] Pas d'erreurs 404
- [ ] Données structurées JSON-LD correctes
- [ ] Performance acceptable (< 3s)
- [ ] Test sur mobile
- [ ] Test sur desktop
- [ ] Sauvegarde de l'ancien site effectuée

---

## 🎉 FÉLICITATIONS !

Si toutes les vérifications sont passées, votre site est maintenant déployé avec succès !

**Prochaines étapes :**
1. Surveillez les logs pendant 24-48h
2. Testez régulièrement les formulaires
3. Vérifiez les statistiques de trafic
4. Planifiez les prochaines mises à jour

---

**Document créé le :** 2024  
**Version de l'archive :** `site_deploy_posix.tar.gz` (69.31 MB)  
**Commit associé :** `c38342d`