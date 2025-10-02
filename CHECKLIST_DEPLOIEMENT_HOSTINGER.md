# ✅ CHECKLIST DÉPLOIEMENT HOSTINGER

## 🎯 OBJECTIF
Déployer le front uniquement (SANS toucher à `/api/`)

---

## 📋 AVANT LE DÉPLOIEMENT

### Vérifications locales
- [ ] Archive `site_deploy_posix.tar.gz` présente (69.3 MB)
- [ ] SHA256 vérifié : `D7D5607B8B0FCE9C0FE8CD783B676B07D1B9EB66166FC489AE05B63DCE69CFD8`
- [ ] Aucune entrée `api/` dans l'archive (vérifier avec `tar -tzf`)

### Préparation serveur
- [ ] Accès File Manager Hostinger OK
- [ ] Connexion à `public_html/` réussie
- [ ] Vérification que `/api/` existe et fonctionne

---

## 🚀 DÉPLOIEMENT (ÉTAPE PAR ÉTAPE)

### 1. Sauvegarde (RECOMMANDÉ)
- [ ] Créer dossier `.backup_YYYYMMDD/` dans `public_html/`
- [ ] Copier les fichiers front actuels (PAS `/api/`)
- [ ] Vérifier la sauvegarde

### 2. Upload
- [ ] Uploader `site_deploy_posix.tar.gz` dans `public_html/`
- [ ] Vérifier la taille du fichier uploadé (~69 MB)

### 3. Extraction
- [ ] Extraire l'archive dans `public_html/`
- [ ] ⚠️ VÉRIFIER : extraction à la racine (pas dans sous-dossier)
- [ ] Si sous-dossier créé : déplacer le contenu à la racine

### 4. Vérification structure
- [ ] `public_html/index.html` existe
- [ ] `public_html/_next/` existe
- [ ] `public_html/about/` existe
- [ ] `public_html/contact/` existe
- [ ] `public_html/images/` existe
- [ ] `public_html/services/` existe
- [ ] `public_html/api/` existe ET n'a PAS été modifié ⚠️

### 5. Nettoyage
- [ ] Supprimer `site_deploy_posix.tar.gz` du serveur
- [ ] Vérifier les permissions (755/644)

---

## 🧪 TESTS POST-DÉPLOIEMENT

### Tests de base
- [ ] Ouvrir https://g-travaux.fr
- [ ] Page d'accueil s'affiche correctement
- [ ] Images chargées
- [ ] Styles CSS appliqués

### Tests contact
- [ ] Cliquer sur lien téléphone → ouvre `tel:+33367102653`
- [ ] Cliquer sur lien email → ouvre `mailto:contact@g-travaux.fr`
- [ ] Texte affiché : "03 67 10 26 53"
- [ ] Texte affiché : "contact@g-travaux.fr"

### Tests formulaires
- [ ] Aller sur `/contact`
- [ ] Remplir le formulaire
- [ ] Envoyer le formulaire
- [ ] Vérifier que l'API répond (message de confirmation)

### Tests navigation
- [ ] Menu de navigation fonctionne
- [ ] Page `/about` accessible
- [ ] Page `/services` accessible
- [ ] Page `/contact` accessible
- [ ] Footer s'affiche correctement

### Tests SEO
- [ ] Inspecter la page (F12)
- [ ] Vérifier les balises `<meta>` dans `<head>`
- [ ] Vérifier le JSON-LD (données structurées)
- [ ] Confirmer : telephone = `+33367102653`
- [ ] Confirmer : email = `contact@g-travaux.fr`

---

## 🔍 VÉRIFICATIONS CRITIQUES

### ⚠️ GARDE-FOUS
- [ ] Le dossier `/api/` n'a PAS été modifié
- [ ] Le fichier `api/config.php` existe toujours
- [ ] Le dossier `api/vendor/` existe toujours
- [ ] Les formulaires envoient toujours vers `/api/contact.php`

### 🔒 Sécurité
- [ ] Aucun fichier `.env` uploadé
- [ ] Aucun secret exposé
- [ ] Permissions correctes (755/644)

---

## 🐛 EN CAS DE PROBLÈME

### Si la page ne s'affiche pas
1. Vérifier que `index.html` est à la racine de `public_html/`
2. Vérifier les permissions (644 pour `index.html`)
3. Vider le cache du navigateur (Ctrl+F5)
4. Vérifier les logs d'erreur Hostinger

### Si les formulaires ne fonctionnent pas
1. Vérifier que `/api/` existe et n'a pas été modifié
2. Vérifier que `api/contact.php` existe
3. Vérifier les permissions de `/api/` (755)
4. Tester l'API directement : `https://g-travaux.fr/api/contact.php`

### Si les liens téléphone/email ne fonctionnent pas
1. Inspecter l'élément (F12)
2. Vérifier le `href` : doit être `tel:+33367102653` ou `mailto:contact@g-travaux.fr`
3. Vérifier que le navigateur supporte les liens `tel:` et `mailto:`

### Rollback (si nécessaire)
1. Supprimer les fichiers front de `public_html/`
2. Restaurer depuis `.backup_YYYYMMDD/`
3. Vérifier que `/api/` est toujours intact
4. Tester à nouveau

---

## 📞 CONTACTS SUPPORT

### Hostinger
- Support : https://www.hostinger.fr/contact
- Documentation : https://support.hostinger.com/

### Développeur
- Email : contact@g-travaux.fr
- Téléphone : 03 67 10 26 53

---

## ✅ VALIDATION FINALE

- [ ] Tous les tests passés
- [ ] Aucune erreur détectée
- [ ] Performance OK (temps de chargement < 3s)
- [ ] SEO OK (données structurées présentes)
- [ ] Formulaires OK (envoi réussi)
- [ ] `/api/` intact et fonctionnel

**Date de déploiement :** _______________  
**Déployé par :** _______________  
**Statut :** ✅ SUCCÈS / ❌ ÉCHEC

---

**Checklist générée le :** 2025-01-30  
**Version :** 1.0.0-contact-refresh