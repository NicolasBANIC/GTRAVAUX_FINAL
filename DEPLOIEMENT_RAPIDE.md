# ⚡ Déploiement Rapide sur Hostinger

## 🎯 Option 1 : Via ZIP (Plus Simple)

### 1️⃣ Créer le ZIP
```powershell
.\creer-zip-deploiement.ps1
```
✅ Un fichier `site-gtravaux-deploiement.zip` sera créé dans `Downloads/`

### 2️⃣ Uploader sur Hostinger
1. Connectez-vous à **hPanel Hostinger**
2. **Fichiers** → **Gestionnaire de fichiers**
3. Allez dans `/public_html/`
4. **Supprimez tout** le contenu ancien
5. **Télécharger** → Sélectionnez le ZIP
6. **Clic droit** sur le ZIP → **Extraire**
7. **Supprimez** le ZIP après extraction

### 3️⃣ Vérifier
Ouvrez `https://votredomaine.com` ✅

---

## 🎯 Option 2 : Via FTP (Plus Rapide pour les MAJ)

### 1️⃣ Installer FileZilla
Téléchargez : https://filezilla-project.org/

### 2️⃣ Connecter à Hostinger
- **Hôte** : Votre FTP Hostinger
- **Port** : 21
- **Identifiant** : Votre username
- **Mot de passe** : Votre password

### 3️⃣ Uploader
- **Gauche** : `c:\Users\Banic\Downloads\g-travaux-v2\g-travaux_v2\out`
- **Droite** : `/public_html/`
- **Glissez-déposez** tout le contenu

### 4️⃣ Vérifier
Ouvrez `https://votredomaine.com` ✅

---

## 📋 Checklist Avant Déploiement

- [ ] Build réussi : `npm run build`
- [ ] Dossier `out/` existe
- [ ] Identifiants Hostinger prêts
- [ ] Backup de l'ancien site (si nécessaire)

---

## 🔄 Pour les Mises à Jour Futures

1. Modifiez votre code
2. `npm run build`
3. Re-uploadez le dossier `out/` (via FTP ou ZIP)

---

## 🆘 Problèmes ?

**Page blanche ?**
→ Vérifiez que `index.html` est à la racine de `public_html/`

**CSS ne charge pas ?**
→ Vérifiez que le dossier `_next/` est bien uploadé

**Erreur 404 ?**
→ Vérifiez que `.htaccess` est présent

**Besoin d'aide ?**
→ Consultez `GUIDE_DEPLOIEMENT_HOSTINGER.md` pour le guide complet

---

## ✨ C'est Tout !

Votre site sera en ligne en **5-10 minutes** ! 🚀