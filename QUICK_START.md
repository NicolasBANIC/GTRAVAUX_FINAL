# 🚀 Quick Start - Déploiement Contact Standardisé

## ✅ Travail Terminé

**Branche Git** : `chore/contact-refresh` (3 commits)  
**Statut** : ✅ Prêt pour déploiement

### Nouvelles Coordonnées
- 📱 **Téléphone** : `03 67 10 26 53` (liens: `tel:+33367102653`)
- 📧 **Email** : `contact@g-travaux.fr`

### Fichiers Modifiés
- 12 composants React/TypeScript
- 2 fichiers API/Config
- 2 fichiers documentation

---

## 🎯 Déploiement en 5 Minutes

### 1. Test Local (2 min)
```bash
npm run dev
# Ouvrir http://localhost:3000
# Vérifier les boutons "Appeler" et liens email
```

### 2. Build (1 min)
```bash
npm run build
```

### 3. Merge & Push (1 min)
```bash
git checkout main
git merge chore/contact-refresh
git push origin main
```

### 4. Serveur Hostinger (1 min)
Éditer `api/config.php` sur le serveur :
```php
define('SMTP_USER', 'contact@g-travaux.fr');
define('MAIL_TO', 'contact@g-travaux.fr');
define('MAIL_FROM', 'contact@g-travaux.fr');
```

### 5. Test Production (30 sec)
- Cliquer sur "Appeler" → doit ouvrir `tel:+33367102653`
- Soumettre formulaire → email reçu à `contact@g-travaux.fr`

---

## 📚 Documentation Complète

- **DEPLOYMENT_CHECKLIST.md** - Guide détaillé étape par étape
- **CONTACT_UPDATE_SUMMARY.md** - Résumé complet des modifications
- **api/README.md** - Documentation API

---

## ⚠️ Important

Le fichier `api/config.php` contient des secrets et doit être mis à jour **manuellement** sur le serveur.

---

**Prêt à déployer !** 🚀