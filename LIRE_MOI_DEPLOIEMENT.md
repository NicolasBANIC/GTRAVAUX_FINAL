# 🚀 GUIDE DE DÉPLOIEMENT RAPIDE

**Projet :** G-Travaux - Site vitrine Next.js  
**Version :** 1.0.0-contact-refresh  
**Date :** 30 janvier 2025  
**Statut :** ✅ PRÊT POUR DÉPLOIEMENT

---

## 🎯 OBJECTIF

Déployer le nouveau site G-Travaux sur Hostinger avec les contacts uniformisés.

---

## ⚡ DÉMARRAGE RAPIDE (3 ÉTAPES)

### 1️⃣ Lire la documentation
```
📖 Ouvrir : INDEX_DOCUMENTATION.md
```

### 2️⃣ Suivre la checklist de déploiement
```
📋 Ouvrir : CHECKLIST_DEPLOIEMENT_HOSTINGER.md
```

### 3️⃣ Déployer sur Hostinger
```
📦 Uploader : site_deploy_posix.tar.gz (69.3 MB)
📂 Extraire dans : public_html/
⚠️ Vérifier que /api/ reste intact
```

---

## 📚 DOCUMENTATION DISPONIBLE

### 🌟 Priorité haute (à lire en premier)

| Fichier | Description |
|---------|-------------|
| **INDEX_DOCUMENTATION.md** | Index complet de toute la documentation |
| **CHECKLIST_DEPLOIEMENT_HOSTINGER.md** | Checklist de déploiement étape par étape |
| **RAPPORT_FINAL_COMPACT.txt** | Résumé ultra-compact (vue d'ensemble) |

### 📖 Documentation détaillée

| Fichier | Description |
|---------|-------------|
| **RESUME_EXECUTION.md** | Résumé détaillé de l'exécution du chantier |
| **RAPPORT_FINAL_LIVRAISON.md** | Rapport complet de livraison |
| **VERIFICATION_RAPIDE.md** | Commandes de vérification rapide |
| **RELEASE_NOTES.md** | Notes de release pour GitHub |
| **CONTROLES_CONTACT_FINAL.txt** | Résultats des contrôles de contact |
| **LISTE_FICHIERS_GENERES.txt** | Liste de tous les fichiers générés |

---

## 📦 FICHIER À DÉPLOYER

```
Fichier  : site_deploy_posix.tar.gz
Taille   : 69.3 MB
SHA256   : D7D5607B8B0FCE9C0FE8CD783B676B07D1B9EB66166FC489AE05B63DCE69CFD8
Contenu  : Front-only (AUCUNE entrée api/)
```

---

## 🚀 PROCÉDURE DE DÉPLOIEMENT (RÉSUMÉ)

### Étape 1 : Connexion
- Se connecter au File Manager Hostinger
- Naviguer vers `public_html/`

### Étape 2 : Sauvegarde (recommandé)
- Créer un dossier `.backup_YYYYMMDD/`
- Copier les fichiers front actuels (PAS `/api/`)

### Étape 3 : Upload
- Uploader `site_deploy_posix.tar.gz` dans `public_html/`

### Étape 4 : Extraction
- Extraire l'archive dans `public_html/`
- ⚠️ Vérifier que l'extraction se fait à la racine

### Étape 5 : Vérification
- Vérifier la présence de `index.html`, `_next/`, etc.
- **Vérifier que `/api/` est intact**

### Étape 6 : Tests
- Ouvrir https://g-travaux.fr
- Tester les liens téléphone/email
- Tester le formulaire de contact

---

## ⚠️ GARDE-FOUS CRITIQUES

### ❌ INTERDICTIONS ABSOLUES

1. **NE PAS toucher au dossier `/api/`** sur le serveur
2. **NE PAS supprimer `api/config.php`** ou `api/vendor/`
3. **NE PAS écraser les fichiers `.htaccess`** d'API

### ✅ VÉRIFICATIONS OBLIGATOIRES

1. Vérifier que `public_html/api/` existe après déploiement
2. Vérifier que les formulaires fonctionnent (API)
3. Vérifier les liens téléphone/email

---

## 📞 VALEURS DE CONTACT

### Téléphone
```
Lien href  : tel:+33367102653
Texte      : 03 67 10 26 53
JSON-LD    : +33367102653
```

### Email
```
Lien href  : mailto:contact@g-travaux.fr
Texte      : contact@g-travaux.fr
JSON-LD    : contact@g-travaux.fr
```

---

## 🔍 VÉRIFICATIONS POST-DÉPLOIEMENT

### Tests de base
- [ ] Page d'accueil s'affiche
- [ ] Images chargées
- [ ] Styles CSS appliqués

### Tests contact
- [ ] Lien téléphone fonctionne
- [ ] Lien email fonctionne
- [ ] Textes affichés corrects

### Tests formulaires
- [ ] Formulaire de contact accessible
- [ ] Envoi de formulaire fonctionne
- [ ] API répond correctement

### Tests SEO
- [ ] Données structurées présentes (JSON-LD)
- [ ] Balises meta correctes

---

## 🆘 EN CAS DE PROBLÈME

### Si la page ne s'affiche pas
1. Vérifier que `index.html` est à la racine de `public_html/`
2. Vérifier les permissions (644 pour `index.html`)
3. Vider le cache du navigateur (Ctrl+F5)

### Si les formulaires ne fonctionnent pas
1. Vérifier que `/api/` existe et n'a pas été modifié
2. Vérifier que `api/contact.php` existe
3. Tester l'API directement : `https://g-travaux.fr/api/contact.php`

### Rollback (si nécessaire)
1. Supprimer les fichiers front de `public_html/`
2. Restaurer depuis `.backup_YYYYMMDD/`
3. Vérifier que `/api/` est toujours intact

---

## 📊 RÉSUMÉ DU CHANTIER

### Objectifs atteints
- [x] Uniformisation complète téléphone/email
- [x] Aucune modification dans `/api/`
- [x] Merge propre vers `main`
- [x] Build de production réussi
- [x] Archive POSIX front-only créée
- [x] Contrôles de qualité passés (100%)

### Statistiques
- **Fichiers modifiés :** 18 (front uniquement)
- **Fichiers API touchés :** 0 ✅
- **Commits mergés :** 3
- **Pages statiques générées :** 23
- **Taille archive :** 69.3 MB
- **Contrôles passés :** 5/5 (100%)

---

## 🔗 LIENS UTILES

- **Repository GitHub** : https://github.com/NicolasBANIC/GTRAVAUX_FINAL
- **Site web** : https://g-travaux.fr
- **Tag de release** : v1.0.0-contact-refresh
- **Commit principal** : d266b17

---

## 📞 SUPPORT

- **Email** : contact@g-travaux.fr
- **Téléphone** : 03 67 10 26 53

---

## ✅ CHECKLIST FINALE

Avant de déployer, vérifier :

- [ ] J'ai lu `INDEX_DOCUMENTATION.md`
- [ ] J'ai lu `CHECKLIST_DEPLOIEMENT_HOSTINGER.md`
- [ ] J'ai téléchargé `site_deploy_posix.tar.gz`
- [ ] J'ai vérifié le SHA256 de l'archive
- [ ] J'ai accès au File Manager Hostinger
- [ ] J'ai créé une sauvegarde (optionnel mais recommandé)
- [ ] Je sais que je ne dois PAS toucher à `/api/`

---

**🎉 PRÊT À DÉPLOYER !**

Suivez la checklist dans `CHECKLIST_DEPLOIEMENT_HOSTINGER.md` et tout se passera bien.

---

**Document généré le :** 30 janvier 2025  
**Par :** Assistant Zencoder  
**Version :** 1.0.0-contact-refresh