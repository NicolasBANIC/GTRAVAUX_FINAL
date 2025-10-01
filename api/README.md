# API Backend - G.TRAVAUX

## 📋 Vue d'ensemble

Ce dossier contient les endpoints PHP pour gérer les formulaires du site G.TRAVAUX :
- **contact.php** : Formulaire de rappel (homepage)
- **devis.php** : Formulaire de devis/contact (page contact)

## 🔐 Configuration (IMPORTANT)

### Étape 1 : Créer le fichier de configuration

```bash
# Copier le fichier exemple
cp config.example.php config.php
```

### Étape 2 : Éditer config.php avec vos vraies valeurs

Ouvrez `config.php` et remplacez les placeholders :

```php
define('SMTP_HOST', 'smtp.hostinger.com');
define('SMTP_PORT', 465);
define('SMTP_SECURE', 'ssl');
define('SMTP_USER', 'info@gtravaux.fr');        // Votre email complet
define('SMTP_PASS', 'VOTRE_VRAI_MOT_DE_PASSE'); // ⚠️ Mot de passe réel ici
define('MAIL_TO', 'info@gtravaux.fr');
define('MAIL_TO_NAME', 'G.TRAVAUX');
define('MAIL_FROM', 'info@gtravaux.fr');
define('MAIL_FROM_NAME', 'Site G.TRAVAUX');
```

⚠️ **ATTENTION** : Ne commitez JAMAIS `config.php` (déjà dans .gitignore)

## 📦 Installation de PHPMailer

### Option 1 : Téléchargement manuel (recommandé pour Hostinger)

1. Téléchargez PHPMailer depuis : https://github.com/PHPMailer/PHPMailer/releases
2. Extrayez les fichiers suivants dans `api/vendor/PHPMailer/` :
   - PHPMailer.php
   - SMTP.php
   - Exception.php

Structure attendue :
```
api/
├── vendor/
│   └── PHPMailer/
│       ├── PHPMailer.php
│       ├── SMTP.php
│       └── Exception.php
├── config.php (à créer, non tracké)
├── config.example.php (tracké)
├── contact.php (tracké)
├── devis.php (tracké)
└── README.md
```

### Option 2 : Via Composer (si disponible)

```bash
cd api
composer require phpmailer/phpmailer
```

## 🧪 Test des endpoints

### Test du formulaire de rappel

```bash
curl -X POST http://localhost/api/contact.php \
  -F "nom=Jean Dupont" \
  -F "telephone=0612345678" \
  -F "preferredDate=2025-02-15" \
  -F "timeSlot=Matin (8h-12h)" \
  -F "consent=1"
```

### Test du formulaire de devis

```bash
curl -X POST http://localhost/api/devis.php \
  -F "nom=Marie Martin" \
  -F "email=marie@example.com" \
  -F "telephone=0698765432" \
  -F "service=Rénovation complète" \
  -F "message=Je souhaite rénover mon appartement" \
  -F "consent=1"
```

## 🔒 Sécurité

### Protections implémentées

✅ **Honeypot anti-spam** : Champ `_gotcha` invisible pour piéger les bots
✅ **RGPD** : Consentement obligatoire avant envoi
✅ **Validation** : Tous les champs sont validés et nettoyés
✅ **CORS** : Headers de sécurité configurés
✅ **Sanitization** : htmlspecialchars + strip_tags sur toutes les entrées

### Fichiers sensibles (JAMAIS commités)

- `api/config.php` ❌ (contient les mots de passe)
- `api/vendor/` ❌ (librairies tierces)

Ces fichiers sont déjà dans `.gitignore`.

## 📧 Format des emails

### Email de rappel (contact.php)

- **Sujet** : 🔔 Nouvelle demande de rappel - G.TRAVAUX
- **Contenu** : Nom, téléphone, date souhaitée, créneau horaire
- **Format** : HTML avec fallback texte

### Email de devis (devis.php)

- **Sujet** : 📋 Nouvelle demande de devis - G.TRAVAUX
- **Contenu** : Nom, email, téléphone, service, message, projection 3D
- **Format** : HTML avec fallback texte

## 🚀 Déploiement sur Hostinger

1. **Uploader les fichiers** :
   ```
   api/contact.php
   api/devis.php
   api/config.example.php
   api/vendor/PHPMailer/ (tous les fichiers)
   ```

2. **Créer config.php sur le serveur** :
   - Via File Manager ou FTP
   - Copier config.example.php → config.php
   - Éditer avec les vraies valeurs SMTP

3. **Vérifier les permissions** :
   ```bash
   chmod 644 api/*.php
   chmod 755 api/vendor/PHPMailer/
   ```

4. **Tester** :
   - Soumettre les formulaires depuis le site
   - Vérifier la réception des emails

## 🐛 Dépannage

### Erreur "Configuration manquante"
→ Créez `api/config.php` depuis `api/config.example.php`

### Erreur "PHPMailer not found"
→ Vérifiez que les fichiers PHPMailer sont dans `api/vendor/PHPMailer/`

### Emails non reçus
→ Vérifiez les logs PHP : `error_log()` enregistre les erreurs PHPMailer
→ Testez les identifiants SMTP avec un client email

### Erreur CORS
→ Ajoutez votre domaine dans `$allowed_origins` dans config.php

## 📝 Logs

Les erreurs PHPMailer sont enregistrées via `error_log()`.
Consultez les logs PHP de votre hébergeur pour déboguer.

## 🔗 Liens utiles

- [PHPMailer Documentation](https://github.com/PHPMailer/PHPMailer)
- [Hostinger SMTP Settings](https://support.hostinger.com/en/articles/1583298-how-to-use-smtp)
- [RGPD Compliance](https://www.cnil.fr/)

## ✅ Checklist de déploiement

- [ ] PHPMailer installé dans `api/vendor/PHPMailer/`
- [ ] `api/config.php` créé avec les vraies valeurs
- [ ] `api/config.php` NON commité (vérifié dans .gitignore)
- [ ] Permissions correctes (644 pour .php)
- [ ] Test formulaire de rappel OK
- [ ] Test formulaire de devis OK
- [ ] Emails reçus correctement
- [ ] Consentement RGPD vérifié
- [ ] Honeypot anti-spam testé