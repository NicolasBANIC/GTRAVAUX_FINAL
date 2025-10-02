# 🚀 Checklist de Déploiement - Standardisation Contact

## ✅ Travail Accompli

### 📞 Nouvelles Coordonnées Standardisées
- **Téléphone (affichage)** : `03 67 10 26 53`
- **Téléphone (liens tel:)** : `tel:+33367102653`
- **Email** : `contact@g-travaux.fr`

### 📊 Statistiques
- ✅ **14 fichiers modifiés**
- ✅ **8 liens tel: standardisés**
- ✅ **12 emails standardisés**
- ✅ **0 ancienne référence restante**
- ✅ **2 commits créés** sur branche `chore/contact-refresh`

### 📁 Fichiers Modifiés
1. `app/page.tsx` - Page d'accueil
2. `app/about/page.tsx` - Page À propos
3. `app/contact/page.tsx` - Page Contact
4. `app/confidentialite/page.tsx` - Politique de confidentialité
5. `app/mentions-legales/page.tsx` - Mentions légales
6. `app/cookies/page.tsx` - Politique cookies
7. `app/layout.tsx` - Layout principal + JSON-LD
8. `app/components/Header.tsx` - En-tête navigation
9. `app/components/Footer.tsx` - Pied de page
10. `app/components/StickyCta.tsx` - Bouton flottant
11. `app/components/LiveChat.tsx` - Chat en direct
12. `app/components/LocalSEO.tsx` - SEO local
13. `api/config.example.php` - Configuration API exemple
14. `api/README.md` - Documentation API

---

## 🔄 Étapes de Déploiement

### 1️⃣ Tests Locaux (OBLIGATOIRE)

```bash
# Démarrer le serveur de développement
npm run dev

# Ouvrir http://localhost:3000
# Vérifier :
```

- [ ] Cliquer sur tous les boutons "Appeler" → doit ouvrir `tel:+33367102653`
- [ ] Vérifier l'affichage du numéro → doit afficher `03 67 10 26 53`
- [ ] Cliquer sur les liens email → doit ouvrir `mailto:contact@g-travaux.fr`
- [ ] Tester le chat en direct → vérifier les numéros affichés
- [ ] Vérifier le footer → coordonnées correctes
- [ ] Vérifier le header → bouton urgence correct
- [ ] Tester le formulaire de contact
- [ ] Tester le formulaire de devis

### 2️⃣ Régénération de l'Export Statique

```bash
# Nettoyer et rebuilder
npm run build

# Vérifier le dossier out/
# Les fichiers HTML doivent contenir les nouvelles coordonnées
```

- [ ] Export statique généré sans erreur
- [ ] Vérifier `out/index.html` → nouvelles coordonnées présentes
- [ ] Vérifier `out/contact/index.html` → nouvelles coordonnées présentes

### 3️⃣ Merge et Push vers Production

```bash
# Vérifier le statut
git status

# Merger vers main
git checkout main
git merge chore/contact-refresh

# Pousser vers origin
git push origin main

# Optionnel : supprimer la branche de travail
git branch -d chore/contact-refresh
git push origin --delete chore/contact-refresh
```

- [ ] Branche mergée sans conflit
- [ ] Commits poussés vers origin
- [ ] Branche de travail supprimée (optionnel)

### 4️⃣ Mise à Jour du Serveur Hostinger

#### A. Mise à jour de `api/config.php` (CRITIQUE)

⚠️ **ATTENTION** : Ce fichier contient des secrets et n'est PAS dans Git !

```bash
# Se connecter au serveur via FTP/SSH/File Manager
# Éditer api/config.php

# Remplacer :
define('SMTP_USER', 'info@gtravaux.fr');
define('MAIL_TO', 'info@gtravaux.fr');
define('MAIL_FROM', 'info@gtravaux.fr');

# Par :
define('SMTP_USER', 'contact@g-travaux.fr');
define('MAIL_TO', 'contact@g-travaux.fr');
define('MAIL_FROM', 'contact@g-travaux.fr');
```

- [ ] `api/config.php` mis à jour sur le serveur
- [ ] Mot de passe SMTP conservé (ne pas modifier)
- [ ] Permissions correctes (644)

#### B. Upload des Fichiers Modifiés

Uploader vers le serveur :
- [ ] Tous les fichiers du dossier `app/`
- [ ] Tous les fichiers du dossier `out/` (export statique)
- [ ] `api/config.example.php` (pour référence)
- [ ] `api/README.md` (documentation)

### 5️⃣ Configuration Email (Hostinger)

#### Option A : Créer la boîte email `contact@g-travaux.fr`

1. Se connecter au panneau Hostinger
2. Aller dans **Emails** → **Créer un compte email**
3. Créer : `contact@g-travaux.fr`
4. Définir un mot de passe fort
5. Mettre à jour `api/config.php` avec ce mot de passe

- [ ] Boîte email créée
- [ ] Mot de passe défini
- [ ] `api/config.php` mis à jour avec le nouveau mot de passe

#### Option B : Redirection email (si `info@gtravaux.fr` existe)

1. Panneau Hostinger → **Emails** → **Redirections**
2. Créer une redirection :
   - De : `contact@g-travaux.fr`
   - Vers : `info@gtravaux.fr` (ou votre email principal)

- [ ] Redirection configurée
- [ ] Test d'envoi effectué

### 6️⃣ Tests en Production

```bash
# Ouvrir le site en production
# Exemple : https://g-travaux.fr
```

- [ ] Page d'accueil → numéro et email corrects
- [ ] Page contact → formulaire fonctionne
- [ ] Boutons "Appeler" → ouvrent le bon numéro
- [ ] Liens email → ouvrent le bon email
- [ ] Chat en direct → affiche le bon numéro
- [ ] Footer → coordonnées correctes
- [ ] Header → bouton urgence correct
- [ ] Formulaire de rappel → email reçu à `contact@g-travaux.fr`
- [ ] Formulaire de devis → email reçu à `contact@g-travaux.fr`

### 7️⃣ SEO et Indexation

- [ ] Vérifier Google Search Console → pas d'erreurs
- [ ] Vérifier les données structurées (JSON-LD) :
  - Aller sur : https://search.google.com/test/rich-results
  - Tester l'URL du site
  - Vérifier que `telephone: +33367102653` est présent
- [ ] Soumettre le sitemap à Google (si modifié)

### 8️⃣ Communication et Documentation

- [ ] Informer l'équipe des nouvelles coordonnées
- [ ] Mettre à jour les cartes de visite (si nécessaire)
- [ ] Mettre à jour les signatures email
- [ ] Mettre à jour Google My Business
- [ ] Mettre à jour les réseaux sociaux (Facebook, LinkedIn, etc.)
- [ ] Mettre à jour les annuaires professionnels

---

## 🔍 Vérifications Post-Déploiement

### Tests Automatisés

```bash
# Rechercher d'anciennes références (doit retourner 0 résultats)
grep -r "06 04 00 74 99" app/
grep -r "604007499" app/
grep -r "contact.gtravaux@gmail.com" app/
grep -r "info@gtravaux.fr" app/

# Vérifier les nouvelles coordonnées (doit retourner des résultats)
grep -r "03 67 10 26 53" app/
grep -r "tel:+33367102653" app/
grep -r "contact@g-travaux.fr" app/
```

### Tests Manuels

1. **Test d'appel téléphonique**
   - [ ] Cliquer sur un bouton "Appeler" depuis mobile
   - [ ] Vérifier que le bon numéro s'affiche

2. **Test d'email**
   - [ ] Soumettre le formulaire de contact
   - [ ] Vérifier la réception à `contact@g-travaux.fr`
   - [ ] Vérifier le format de l'email reçu

3. **Test du chat**
   - [ ] Ouvrir le chat en direct
   - [ ] Vérifier les messages automatiques
   - [ ] Vérifier les numéros affichés

---

## 📝 Notes Importantes

### ⚠️ Fichiers Sensibles (NE JAMAIS COMMITER)

- `api/config.php` - Contient les mots de passe SMTP
- `api/vendor/` - Librairies tierces (PHPMailer)

Ces fichiers sont déjà dans `.gitignore`.

### 🔐 Sécurité

- Les mots de passe SMTP ne doivent JAMAIS être dans Git
- Utiliser des mots de passe forts pour les comptes email
- Vérifier régulièrement les logs d'erreur PHP
- Surveiller les tentatives de spam via les formulaires

### 📊 Monitoring

Après le déploiement, surveiller pendant 48h :
- Réception des emails de formulaires
- Logs d'erreur PHP
- Taux de conversion des formulaires
- Appels téléphoniques reçus

---

## 🆘 Dépannage

### Problème : Emails non reçus

1. Vérifier `api/config.php` :
   - SMTP_USER = `contact@g-travaux.fr`
   - MAIL_TO = `contact@g-travaux.fr`
   - Mot de passe correct

2. Vérifier les logs PHP sur Hostinger
3. Tester les identifiants SMTP avec un client email (Thunderbird, Outlook)

### Problème : Anciennes coordonnées encore visibles

1. Vider le cache du navigateur (Ctrl+Shift+R)
2. Vérifier que les fichiers ont bien été uploadés
3. Vérifier le cache CDN (si utilisé)
4. Régénérer l'export statique : `npm run build`

### Problème : Liens tel: ne fonctionnent pas

- Vérifier le format : `tel:+33367102653` (pas d'espaces)
- Tester sur mobile (les liens tel: ne fonctionnent que sur mobile)
- Vérifier les permissions du navigateur

---

## ✅ Validation Finale

Une fois toutes les étapes complétées :

- [ ] ✅ Tous les tests locaux passent
- [ ] ✅ Export statique régénéré
- [ ] ✅ Code mergé et poussé vers main
- [ ] ✅ `api/config.php` mis à jour sur le serveur
- [ ] ✅ Fichiers uploadés sur Hostinger
- [ ] ✅ Configuration email effectuée
- [ ] ✅ Tous les tests en production passent
- [ ] ✅ SEO vérifié (JSON-LD, données structurées)
- [ ] ✅ Communication effectuée
- [ ] ✅ Monitoring en place

---

## 📞 Support

En cas de problème, consulter :
- `CONTACT_UPDATE_SUMMARY.md` - Résumé détaillé des modifications
- `api/README.md` - Documentation de l'API
- Logs PHP sur Hostinger
- Google Search Console pour les problèmes SEO

---

**Date de création** : 2025-01-XX  
**Branche Git** : `chore/contact-refresh`  
**Commits** : 2f8998f, 3830358  
**Statut** : ✅ Prêt pour déploiement