# 📧 Intégration SMTP Complète - G.TRAVAUX

## ✅ Résumé de l'implémentation

### Fichiers créés/modifiés

#### Backend PHP (dans `api/`)
- ✅ **api/contact.php** - Endpoint pour formulaire de rappel (homepage)
- ✅ **api/devis.php** - Endpoint pour formulaire de devis (page contact)
- ✅ **api/config.example.php** - Configuration SMTP (exemple, TRACKÉ)
- ✅ **api/.htaccess** - Sécurité du dossier API
- ✅ **api/README.md** - Documentation complète

#### Frontend React (déjà en place)
- ✅ **app/components/CallbackFormEnhanced.tsx** - Formulaire de rappel
- ✅ **app/components/ContactForm.tsx** - Formulaire de devis

### Sécurité implémentée

✅ **Honeypot anti-spam** : Champ `_gotcha` invisible  
✅ **RGPD compliant** : Consentement obligatoire avec lien vers politique  
✅ **Validation stricte** : Tous les champs sont validés et nettoyés  
✅ **Protection CORS** : Headers de sécurité configurés  
✅ **Sanitization** : htmlspecialchars + strip_tags sur toutes les entrées  
✅ **Pas de secrets dans le repo** : config.php dans .gitignore  

---

## 🚀 Installation et déploiement

### Étape 1 : Installer PHPMailer

#### Option A : Téléchargement manuel (recommandé pour Hostinger)

1. Téléchargez PHPMailer : https://github.com/PHPMailer/PHPMailer/releases/latest
2. Extrayez et copiez ces 3 fichiers dans `api/vendor/PHPMailer/` :
   - `PHPMailer.php`
   - `SMTP.php`
   - `Exception.php`

Structure finale :
```
api/
├── vendor/
│   └── PHPMailer/
│       ├── PHPMailer.php
│       ├── SMTP.php
│       └── Exception.php
├── .htaccess
├── config.example.php (TRACKÉ)
├── contact.php (TRACKÉ)
├── devis.php (TRACKÉ)
└── README.md
```

#### Option B : Via Composer (si disponible)

```bash
cd api
composer require phpmailer/phpmailer
```

### Étape 2 : Créer le fichier de configuration

**⚠️ IMPORTANT : À faire LOCALEMENT et sur le SERVEUR (jamais commité)**

```bash
# En local
cd api
cp config.example.php config.php
```

Éditez `api/config.php` avec vos vraies valeurs :

```php
<?php
// SMTP Configuration
define('SMTP_HOST', 'smtp.hostinger.com');
define('SMTP_PORT', 465);                    // ou 587
define('SMTP_SECURE', 'ssl');                // 'ssl' pour 465, 'tls' pour 587
define('SMTP_USER', 'info@gtravaux.fr');     // Votre email complet
define('SMTP_PASS', 'VOTRE_VRAI_MOT_DE_PASSE'); // ⚠️ Mot de passe réel

// Email Configuration
define('MAIL_TO', 'info@gtravaux.fr');
define('MAIL_TO_NAME', 'G.TRAVAUX');
define('MAIL_FROM', 'info@gtravaux.fr');
define('MAIL_FROM_NAME', 'Site G.TRAVAUX');

// ... (reste du fichier config.example.php)
```

### Étape 3 : Vérifier .gitignore

✅ Déjà configuré ! Vérifiez que ces lignes sont présentes :

```gitignore
# secrets & vendor (do NOT commit)
api/config.php
api/vendor/
*.env
.env.local
.env.production
```

### Étape 4 : Tester en local

```bash
# Démarrer le serveur PHP (si nécessaire)
php -S localhost:8000

# Tester le formulaire de rappel
curl -X POST http://localhost:8000/api/contact.php \
  -F "nom=Test User" \
  -F "telephone=0612345678" \
  -F "preferredDate=2025-02-15" \
  -F "timeSlot=Matin (8h-12h)" \
  -F "consent=1"

# Tester le formulaire de devis
curl -X POST http://localhost:8000/api/devis.php \
  -F "nom=Test User" \
  -F "email=test@example.com" \
  -F "message=Test message" \
  -F "consent=1"
```

Réponse attendue :
```json
{"ok":true}
```

---

## 📋 Détails des formulaires

### Formulaire 1 : RAPPEL (Homepage)

**Emplacement** : `app/components/CallbackFormEnhanced.tsx`  
**Endpoint** : `/api/contact.php`  
**Méthode** : POST

**Champs** :
- `nom` (text, required)
- `telephone` (tel, required)
- `email` (email, optional)
- `preferredDate` (date, required)
- `timeSlot` (select, required)
- `message` (textarea, optional)
- `consent` (checkbox, required) ✅ RGPD
- `_gotcha` (hidden) ✅ Honeypot

**Email envoyé** :
- Sujet : 🔔 Nouvelle demande de rappel - G.TRAVAUX
- Format : HTML avec fallback texte
- Contenu : Nom, téléphone, date/créneau souhaités

### Formulaire 2 : DEVIS (Page Contact)

**Emplacement** : `app/components/ContactForm.tsx`  
**Endpoint** : `/api/devis.php`  
**Méthode** : POST

**Champs** :
- `nom` (text, required)
- `email` (email, required)
- `telephone` (tel, optional)
- `service` (select, optional)
- `budget` (text, optional)
- `message` (textarea, required)
- `projection_3d` (checkbox, optional)
- `consent` (checkbox, required) ✅ RGPD
- `_gotcha` (hidden) ✅ Honeypot

**Email envoyé** :
- Sujet : 📋 Nouvelle demande de devis - G.TRAVAUX
- Format : HTML avec fallback texte
- Contenu : Nom, email, téléphone, service, message, projection 3D

---

## 🔒 Sécurité et RGPD

### Protection anti-spam (Honeypot)

Les deux formulaires incluent un champ caché `_gotcha` :
- Invisible pour les humains
- Rempli automatiquement par les bots
- Si rempli → réponse factice (bot piégé)

```html
<input type="text" name="_gotcha" style="display:none" tabindex="-1" autocomplete="off">
```

### Consentement RGPD

Checkbox obligatoire avec lien vers la politique de confidentialité :

```html
<input type="checkbox" name="consent" required />
<label>
  J'accepte que mes informations soient utilisées pour me recontacter
  <a href="/confidentialite/" target="_blank">(voir Politique de confidentialité)</a>. *
</label>
```

Validation côté serveur :
```php
if (!$consent) {
    $errors[] = 'Vous devez accepter la politique de confidentialité';
}
```

### Validation et sanitization

Toutes les entrées sont nettoyées :

```php
function sanitize_input($data) {
    return htmlspecialchars(strip_tags(trim($data)), ENT_QUOTES, 'UTF-8');
}
```

---

## 🚀 Déploiement sur Hostinger

### 1. Préparer les fichiers

```bash
# Build Next.js
npm run build

# Les fichiers à uploader :
api/
├── .htaccess
├── contact.php
├── devis.php
├── config.example.php
└── vendor/PHPMailer/
    ├── PHPMailer.php
    ├── SMTP.php
    └── Exception.php
```

### 2. Upload via FTP/File Manager

1. Connectez-vous au File Manager Hostinger
2. Uploadez le dossier `api/` complet
3. Uploadez le dossier `out/` (build Next.js)

### 3. Créer config.php sur le serveur

**⚠️ NE PAS uploader votre config.php local !**

Sur le serveur :
1. Copiez `api/config.example.php` → `api/config.php`
2. Éditez `api/config.php` avec les vraies valeurs SMTP
3. Vérifiez les permissions : `chmod 644 api/config.php`

### 4. Configurer SMTP Hostinger

Dans le panneau Hostinger :
1. Allez dans **Emails** → **Comptes email**
2. Créez/utilisez `info@gtravaux.fr`
3. Notez le mot de passe
4. Paramètres SMTP :
   - Host : `smtp.hostinger.com`
   - Port : `465` (SSL) ou `587` (TLS)
   - User : `info@gtravaux.fr`
   - Pass : (votre mot de passe email)

### 5. Tester

1. Visitez votre site : `https://gtravaux.fr`
2. Testez le formulaire de rappel (homepage)
3. Testez le formulaire de devis (page contact)
4. Vérifiez la réception des emails

---

## 🐛 Dépannage

### Erreur "Configuration manquante"

**Cause** : `api/config.php` n'existe pas  
**Solution** : Créez-le depuis `api/config.example.php`

```bash
cd api
cp config.example.php config.php
# Éditez config.php avec les vraies valeurs
```

### Erreur "PHPMailer not found"

**Cause** : Fichiers PHPMailer manquants  
**Solution** : Vérifiez la structure :

```
api/vendor/PHPMailer/
├── PHPMailer.php
├── SMTP.php
└── Exception.php
```

### Emails non reçus

**Causes possibles** :
1. Identifiants SMTP incorrects
2. Port bloqué (essayez 587 au lieu de 465)
3. Email dans les spams

**Solutions** :
1. Vérifiez les logs PHP : `tail -f /path/to/php-error.log`
2. Testez les identifiants avec un client email (Thunderbird, Outlook)
3. Ajoutez l'email expéditeur aux contacts

### Erreur CORS

**Cause** : Domaine non autorisé  
**Solution** : Ajoutez votre domaine dans `config.php` :

```php
$allowed_origins = [
    'https://gtravaux.fr',
    'https://www.gtravaux.fr',
    'http://localhost:3000'
];
```

### Formulaire ne se soumet pas

**Causes possibles** :
1. JavaScript désactivé
2. Erreur de validation
3. Endpoint inaccessible

**Solutions** :
1. Ouvrez la console navigateur (F12)
2. Vérifiez les erreurs réseau
3. Testez l'endpoint directement avec curl

---

## 📊 Monitoring et logs

### Logs PHP

Les erreurs PHPMailer sont enregistrées via `error_log()` :

```php
error_log("PHPMailer Error: {$mail->ErrorInfo}");
```

Consultez les logs :
```bash
# Hostinger
tail -f ~/logs/error_log

# Local
tail -f /var/log/php/error.log
```

### Logs d'envoi

Ajoutez un système de logging personnalisé (optionnel) :

```php
// Dans contact.php ou devis.php
file_put_contents(
    __DIR__ . '/submissions.log',
    date('Y-m-d H:i:s') . " - {$nom} - {$email}\n",
    FILE_APPEND
);
```

---

## ✅ Checklist finale

### Avant le commit

- [ ] `api/config.php` NON présent dans le repo
- [ ] `api/vendor/` NON présent dans le repo
- [ ] `.gitignore` contient `api/config.php` et `api/vendor/`
- [ ] `api/config.example.php` présent (avec placeholders)
- [ ] `api/contact.php` et `api/devis.php` présents
- [ ] `api/.htaccess` présent
- [ ] `api/README.md` présent

### Après le déploiement

- [ ] PHPMailer installé dans `api/vendor/PHPMailer/`
- [ ] `api/config.php` créé sur le serveur avec vraies valeurs
- [ ] Permissions correctes (644 pour .php, 755 pour dossiers)
- [ ] Test formulaire de rappel → email reçu ✅
- [ ] Test formulaire de devis → email reçu ✅
- [ ] Consentement RGPD vérifié ✅
- [ ] Honeypot anti-spam testé ✅
- [ ] Emails HTML bien formatés ✅

---

## 🔗 Ressources

- [PHPMailer Documentation](https://github.com/PHPMailer/PHPMailer)
- [Hostinger SMTP Guide](https://support.hostinger.com/en/articles/1583298-how-to-use-smtp)
- [RGPD - CNIL](https://www.cnil.fr/)
- [Next.js Static Export](https://nextjs.org/docs/app/building-your-application/deploying/static-exports)

---

## 📞 Support

En cas de problème :
1. Consultez les logs PHP
2. Vérifiez la configuration SMTP
3. Testez avec curl
4. Consultez la documentation PHPMailer

---

**✅ Implémentation terminée !**

Les deux formulaires sont maintenant connectés au backend PHP SMTP, avec protection RGPD et anti-spam. Aucun secret n'est présent dans le repository.