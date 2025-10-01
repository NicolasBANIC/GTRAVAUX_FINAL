# 🚀 Guide de Déploiement sur Hostinger (Site Statique)

## 📦 Fichiers à Déployer

Tous les fichiers nécessaires sont dans le dossier : `out/`

**Contenu du dossier :**
- ✅ 23 pages HTML statiques
- ✅ Dossier `_next/` (CSS, JS, chunks)
- ✅ Dossier `images/` (toutes les images)
- ✅ Dossier `videos/` (vidéos du site)
- ✅ Fichier `.htaccess` (configuration Apache)
- ✅ Fichier `404.html` (page d'erreur)

---

## 🔧 Méthode 1 : Via FTP (Recommandée)

### Étape 1 : Récupérer vos identifiants FTP Hostinger

1. Connectez-vous à votre **panneau Hostinger** (hpanel)
2. Allez dans **Fichiers** → **Gestionnaire de fichiers** ou **FTP**
3. Notez vos identifiants :
   - **Hôte FTP** : `ftp.votredomaine.com` ou IP fournie
   - **Nom d'utilisateur** : votre username FTP
   - **Mot de passe** : votre mot de passe FTP
   - **Port** : 21 (FTP) ou 22 (SFTP)

### Étape 2 : Installer un client FTP

**Option A : FileZilla (Gratuit, Recommandé)**
- Téléchargez : https://filezilla-project.org/
- Installez et lancez FileZilla

**Option B : WinSCP (Windows uniquement)**
- Téléchargez : https://winscp.net/

### Étape 3 : Se connecter via FTP

**Dans FileZilla :**
1. Cliquez sur **Fichier** → **Gestionnaire de sites**
2. Cliquez sur **Nouveau site**
3. Remplissez :
   - **Hôte** : votre hôte FTP Hostinger
   - **Port** : 21
   - **Protocole** : FTP ou SFTP
   - **Chiffrement** : Connexion FTP explicite sur TLS (recommandé)
   - **Type d'authentification** : Normale
   - **Identifiant** : votre username
   - **Mot de passe** : votre mot de passe
4. Cliquez sur **Connexion**

### Étape 4 : Uploader les fichiers

1. **Côté local (gauche)** : Naviguez vers :
   ```
   c:\Users\Banic\Downloads\g-travaux-v2\g-travaux_v2\out
   ```

2. **Côté serveur (droite)** : Naviguez vers :
   ```
   /public_html/
   ```
   ⚠️ **IMPORTANT** : Supprimez tous les anciens fichiers dans `public_html/` avant d'uploader

3. **Sélectionnez TOUT** dans le dossier `out/` (Ctrl+A)

4. **Faites glisser** vers le dossier `public_html/` sur le serveur

5. **Attendez** la fin du transfert (peut prendre 5-15 minutes selon votre connexion)

### Étape 5 : Vérifier le déploiement

1. Ouvrez votre navigateur
2. Allez sur : `https://votredomaine.com`
3. Vérifiez que le site s'affiche correctement
4. Testez plusieurs pages :
   - Page d'accueil
   - Services
   - Réalisations
   - Contact

---

## 🌐 Méthode 2 : Via le Gestionnaire de Fichiers Hostinger

### Étape 1 : Créer une archive ZIP

Sur votre ordinateur, créez une archive du dossier `out/` :

**Via PowerShell :**
```powershell
Compress-Archive -Path "c:\Users\Banic\Downloads\g-travaux-v2\g-travaux_v2\out\*" -DestinationPath "c:\Users\Banic\Downloads\g-travaux-v2\g-travaux_v2\site-gtravaux.zip" -Force
```

**Ou via l'Explorateur Windows :**
1. Ouvrez le dossier `out/`
2. Sélectionnez TOUT le contenu (Ctrl+A)
3. Clic droit → **Envoyer vers** → **Dossier compressé**
4. Nommez : `site-gtravaux.zip`

### Étape 2 : Uploader via Hostinger

1. Connectez-vous à **hPanel Hostinger**
2. Allez dans **Fichiers** → **Gestionnaire de fichiers**
3. Naviguez vers `/public_html/`
4. **Supprimez** tous les anciens fichiers
5. Cliquez sur **Télécharger** (Upload)
6. Sélectionnez `site-gtravaux.zip`
7. Attendez la fin de l'upload
8. **Clic droit** sur `site-gtravaux.zip` → **Extraire**
9. Sélectionnez `/public_html/` comme destination
10. **Supprimez** le fichier `site-gtravaux.zip` après extraction

---

## ⚙️ Configuration Hostinger Importante

### 1. Vérifier le fichier .htaccess

Le fichier `.htaccess` est déjà inclus dans le dossier `out/`. Il permet :
- ✅ Redirection des URLs propres
- ✅ Gestion des erreurs 404
- ✅ Réécriture des URLs

**Contenu actuel :**
```apache
RewriteEngine On
RewriteBase /
RewriteCond %{REQUEST_FILENAME} !-f
RewriteCond %{REQUEST_FILENAME} !-d
RewriteRule . /index.html [L]
```

### 2. Configurer HTTPS (SSL)

Dans **hPanel Hostinger** :
1. Allez dans **Sécurité** → **SSL**
2. Activez le **certificat SSL gratuit**
3. Activez **Forcer HTTPS**

### 3. Configurer le cache (Optionnel)

Ajoutez ces lignes au fichier `.htaccess` pour améliorer les performances :

```apache
# Cache des fichiers statiques
<IfModule mod_expires.c>
  ExpiresActive On
  ExpiresByType image/jpg "access plus 1 year"
  ExpiresByType image/jpeg "access plus 1 year"
  ExpiresByType image/png "access plus 1 year"
  ExpiresByType image/webp "access plus 1 year"
  ExpiresByType text/css "access plus 1 month"
  ExpiresByType application/javascript "access plus 1 month"
  ExpiresByType video/mp4 "access plus 1 year"
</IfModule>

# Compression GZIP
<IfModule mod_deflate.c>
  AddOutputFilterByType DEFLATE text/html text/plain text/xml text/css application/javascript
</IfModule>
```

---

## 🔄 Mettre à Jour le Site (Futures Modifications)

Quand vous modifiez le site :

### 1. Rebuild local
```powershell
npm run build
```

### 2. Reconnectez-vous via FTP

### 3. Uploadez UNIQUEMENT les fichiers modifiés
- Ou supprimez tout et re-uploadez le dossier `out/` complet

---

## ✅ Checklist de Déploiement

Avant de déployer, vérifiez :

- [ ] Build réussi sans erreurs (`npm run build`)
- [ ] Dossier `out/` généré avec tous les fichiers
- [ ] Fichier `.htaccess` présent dans `out/`
- [ ] Identifiants FTP Hostinger récupérés
- [ ] Anciens fichiers supprimés de `public_html/`
- [ ] Tous les fichiers uploadés (vérifier la taille)
- [ ] Site accessible via le navigateur
- [ ] HTTPS activé et fonctionnel
- [ ] Toutes les pages testées
- [ ] Images et vidéos chargent correctement
- [ ] Formulaire de contact fonctionne

---

## 🐛 Résolution de Problèmes

### Problème : Page blanche après déploiement

**Solution :**
1. Vérifiez que le fichier `index.html` est à la racine de `public_html/`
2. Vérifiez les permissions des fichiers (644 pour les fichiers, 755 pour les dossiers)
3. Vérifiez la console du navigateur (F12) pour les erreurs

### Problème : CSS/JS ne charge pas

**Solution :**
1. Vérifiez que le dossier `_next/` est bien uploadé
2. Vérifiez les chemins dans le code source (F12 → Network)
3. Videz le cache du navigateur (Ctrl+Shift+R)

### Problème : Erreur 404 sur les sous-pages

**Solution :**
1. Vérifiez que le fichier `.htaccess` est présent
2. Vérifiez que `mod_rewrite` est activé sur Hostinger (normalement oui)
3. Contactez le support Hostinger si nécessaire

### Problème : Images ne s'affichent pas

**Solution :**
1. Vérifiez que le dossier `images/` est bien uploadé
2. Vérifiez les permissions (644)
3. Vérifiez les chemins dans le code source

### Problème : Vidéos ne jouent pas

**Solution :**
1. Vérifiez que le dossier `videos/` est bien uploadé
2. Les vidéos sont lourdes, vérifiez qu'elles sont complètement uploadées
3. Vérifiez le type MIME sur le serveur (video/mp4)

---

## 📊 Informations Techniques

**Taille totale du site :** ~122 MB (principalement les vidéos)

**Structure déployée :**
```
public_html/
├── index.html (page d'accueil)
├── 404.html (page d'erreur)
├── .htaccess (configuration)
├── _next/ (assets Next.js)
│   ├── static/
│   │   ├── chunks/
│   │   ├── css/
│   │   └── media/
├── images/ (toutes les images)
├── videos/ (vidéos)
├── about/ (page à propos)
├── services/ (pages services)
├── realisations/ (pages réalisations)
├── contact/ (page contact)
├── blog/ (page blog)
├── mentions-legales/
├── confidentialite/
└── cookies/
```

---

## 🎯 Commande Rapide pour Créer le ZIP

Si vous préférez uploader un ZIP via le gestionnaire de fichiers :

```powershell
Compress-Archive -Path "c:\Users\Banic\Downloads\g-travaux-v2\g-travaux_v2\out\*" -DestinationPath "c:\Users\Banic\Downloads\site-gtravaux.zip" -Force
```

Le fichier sera créé ici : `c:\Users\Banic\Downloads\site-gtravaux.zip`

---

## 📞 Support

**Support Hostinger :**
- Chat en direct : disponible 24/7 dans hPanel
- Email : support@hostinger.com
- Base de connaissances : https://support.hostinger.com/

**Problèmes avec le site :**
- Vérifiez d'abord la console du navigateur (F12)
- Vérifiez les logs d'erreur dans hPanel → Fichiers → Logs

---

## ✨ Optimisations Post-Déploiement

Après le déploiement, vous pouvez :

1. **Configurer un CDN** (Cloudflare gratuit)
2. **Optimiser les images** (compression supplémentaire)
3. **Activer la compression GZIP** (via .htaccess)
4. **Configurer le cache navigateur** (via .htaccess)
5. **Tester les performances** (Google PageSpeed Insights)

---

## 🚀 Prêt à Déployer !

Votre site est prêt dans le dossier `out/`. Suivez les étapes ci-dessus et votre site sera en ligne en quelques minutes !

**Bonne chance ! 🎉**