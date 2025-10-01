# 📦 Livraison : Intégration SMTP + RGPD + Honeypot

## ✅ Résumé de la livraison

Implémentation complète d'un backend PHP SMTP pour les formulaires G.TRAVAUX, avec protection RGPD et anti-spam. **Aucun secret n'est présent dans le repository.**

---

## 📁 Fichiers créés/modifiés

### Backend PHP (dans `api/`)

| Fichier | Statut | Description |
|---------|--------|-------------|
| **api/contact.php** | ✅ Créé (TRACKÉ) | Endpoint formulaire de rappel (homepage) |
| **api/devis.php** | ✅ Créé (TRACKÉ) | Endpoint formulaire de devis (page contact) |
| **api/config.example.php** | ✅ Modifié (TRACKÉ) | Configuration SMTP exemple (NO SECRETS) |
| **api/.htaccess** | ✅ Créé (TRACKÉ) | Sécurité du dossier API |
| **api/README.md** | ✅ Créé (TRACKÉ) | Documentation complète |
| **api/install-phpmailer.ps1** | ✅ Créé (TRACKÉ) | Script installation Windows |
| **api/install-phpmailer.sh** | ✅ Créé (TRACKÉ) | Script installation Linux/Mac |

### Documentation

| Fichier | Statut | Description |
|---------|--------|-------------|
| **INTEGRATION_SMTP_COMPLETE.md** | ✅ Créé | Guide complet d'intégration |
| **LIVRAISON_SMTP_RGPD.md** | ✅ Créé | Ce fichier (résumé de livraison) |

### Frontend React (déjà en place)

| Fichier | Statut | Description |
|---------|--------|-------------|
| **app/components/CallbackFormEnhanced.tsx** | ✅ Déjà en place | Formulaire de rappel (homepage) |
| **app/components/ContactForm.tsx** | ✅ Déjà en place | Formulaire de devis (page contact) |

### Fichiers NON trackés (à créer localement)

| Fichier | Statut | Description |
|---------|--------|-------------|
| **api/config.php** | ❌ NON TRACKÉ | Configuration avec secrets (à créer) |
| **api/vendor/** | ❌ NON TRACKÉ | PHPMailer (à installer) |

---

## 🔧 Configuration requise

### Constantes utilisées (dans config.example.php)

```php
// SMTP Configuration
define('SMTP_HOST', 'smtp.hostinger.com');   // usually this host
define('SMTP_PORT', 465);                    // or 587
define('SMTP_SECURE', 'ssl');                // 'ssl' for 465, 'tls' for 587
define('SMTP_USER', 'info@gtravaux.fr');     // full email
define('SMTP_PASS', 'CHANGE_ME_LOCALLY');    // PLACEHOLDER ONLY

// Email Configuration
define('MAIL_TO', 'info@gtravaux.fr');
define('MAIL_TO_NAME', 'G.TRAVAUX');
define('MAIL_FROM', 'info@gtravaux.fr');
define('MAIL_FROM_NAME', 'Site G.TRAVAUX');
```

**⚠️ IMPORTANT** : Ces valeurs sont des PLACEHOLDERS. Le fichier `api/config.php` avec les vraies valeurs doit être créé localement et n'est JAMAIS commité.

---

## 📋 Détails des formulaires

### Formulaire 1 : RAPPEL (Homepage)

**Emplacement** : `app/components/CallbackFormEnhanced.tsx`  
**Action** : `/api/contact.php`  
**Méthode** : POST

**Champs** :
- ✅ `nom` (text, required)
- ✅ `telephone` (tel, required)
- ✅ `email` (email, optional)
- ✅ `preferredDate` (date, required)
- ✅ `timeSlot` (select, required)
- ✅ `message` (textarea, optional)
- ✅ `consent` (checkbox, required) - **RGPD**
- ✅ `_gotcha` (hidden) - **Honeypot anti-spam**

**Email envoyé** :
- Sujet : 🔔 Nouvelle demande de rappel - G.TRAVAUX
- Format : HTML avec fallback texte
- Destinataire : MAIL_TO (défini dans config.php)

### Formulaire 2 : DEVIS (Page Contact)

**Emplacement** : `app/components/ContactForm.tsx`  
**Action** : `/api/devis.php`  
**Méthode** : POST

**Champs** :
- ✅ `nom` (text, required)
- ✅ `email` (email, required)
- ✅ `telephone` (tel, optional)
- ✅ `service` (select, optional)
- ✅ `budget` (text, optional)
- ✅ `message` (textarea, required)
- ✅ `projection_3d` (checkbox, optional)
- ✅ `consent` (checkbox, required) - **RGPD**
- ✅ `_gotcha` (hidden) - **Honeypot anti-spam**

**Email envoyé** :
- Sujet : 📋 Nouvelle demande de devis - G.TRAVAUX
- Format : HTML avec fallback texte
- Destinataire : MAIL_TO (défini dans config.php)

---

## 🔒 Sécurité implémentée

### 1. Protection anti-spam (Honeypot)

Champ caché `_gotcha` :
- Invisible pour les humains
- Rempli automatiquement par les bots
- Si rempli → réponse factice (bot piégé)

```html
<input type="text" name="_gotcha" style="display:none" tabindex="-1" autocomplete="off">
```

Validation côté serveur :
```php
if (!empty($honeypot)) {
    // Bot détecté, on retourne un succès factice
    http_response_code(200);
    echo json_encode(['ok' => true]);
    exit;
}
```

### 2. Consentement RGPD

Checkbox obligatoire avec lien vers `/confidentialite/` :

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

### 3. Validation et sanitization

Toutes les entrées sont nettoyées :

```php
function sanitize_input($data) {
    return htmlspecialchars(strip_tags(trim($data)), ENT_QUOTES, 'UTF-8');
}
```

### 4. Protection du dossier API

Fichier `.htaccess` :
- Bloque l'accès direct à `config.php`
- Bloque l'accès au dossier `vendor/`
- Autorise uniquement POST pour les endpoints
- Headers de sécurité (X-Frame-Options, X-XSS-Protection, etc.)

### 5. Secrets hors du repository

`.gitignore` contient :
```gitignore
api/config.php
api/vendor/
*.env
.env.local
.env.production
```

---

## 🚀 Installation et déploiement

### Étape 1 : Installer PHPMailer

#### Option A : Script automatique (Windows)

```powershell
cd api
.\install-phpmailer.ps1
```

#### Option B : Script automatique (Linux/Mac)

```bash
cd api
chmod +x install-phpmailer.sh
./install-phpmailer.sh
```

#### Option C : Manuel

1. Téléchargez : https://github.com/PHPMailer/PHPMailer/releases/latest
2. Extrayez `PHPMailer.php`, `SMTP.php`, `Exception.php`
3. Copiez-les dans `api/vendor/PHPMailer/`

### Étape 2 : Créer config.php

```bash
cd api
cp config.example.php config.php
# Éditez config.php avec vos vraies valeurs SMTP
```

**⚠️ NE JAMAIS commiter config.php !**

### Étape 3 : Tester en local

```bash
# Formulaire de rappel
curl -X POST http://localhost/api/contact.php \
  -F "nom=Test User" \
  -F "telephone=0612345678" \
  -F "preferredDate=2025-02-15" \
  -F "timeSlot=Matin (8h-12h)" \
  -F "consent=1"

# Formulaire de devis
curl -X POST http://localhost/api/devis.php \
  -F "nom=Test User" \
  -F "email=test@example.com" \
  -F "message=Test message" \
  -F "consent=1"
```

Réponse attendue : `{"ok":true}`

### Étape 4 : Déployer sur Hostinger

1. **Upload les fichiers** :
   - `api/contact.php`
   - `api/devis.php`
   - `api/config.example.php`
   - `api/.htaccess`
   - `api/vendor/PHPMailer/` (tous les fichiers)

2. **Créer config.php sur le serveur** :
   - Via File Manager ou FTP
   - Copier `config.example.php` → `config.php`
   - Éditer avec les vraies valeurs SMTP

3. **Vérifier les permissions** :
   ```bash
   chmod 644 api/*.php
   chmod 755 api/vendor/PHPMailer/
   ```

4. **Tester** :
   - Soumettre les formulaires depuis le site
   - Vérifier la réception des emails

---

## ✅ Checklist de vérification

### Avant le commit

- [x] `api/config.php` NON présent dans le repo
- [x] `api/vendor/` NON présent dans le repo
- [x] `.gitignore` contient `api/config.php` et `api/vendor/`
- [x] `api/config.example.php` présent avec placeholders
- [x] `api/contact.php` et `api/devis.php` présents
- [x] `api/.htaccess` présent
- [x] Documentation complète présente

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

## 📊 Résumé technique

### Technologies utilisées

- **Backend** : PHP 7.4+ (compatible Hostinger)
- **SMTP** : PHPMailer 6.9.1
- **Frontend** : React (Next.js) - déjà en place
- **Sécurité** : Honeypot, RGPD, sanitization, CORS

### Endpoints créés

| Endpoint | Méthode | Formulaire | Email |
|----------|---------|------------|-------|
| `/api/contact.php` | POST | Rappel (homepage) | 🔔 Demande de rappel |
| `/api/devis.php` | POST | Devis (contact) | 📋 Demande de devis |

### Réponses API

**Succès** :
```json
{
  "ok": true
}
```

**Erreur** :
```json
{
  "ok": false,
  "error": "Message d'erreur"
}
```

---

## 🐛 Dépannage

### Erreur "Configuration manquante"

**Solution** : Créez `api/config.php` depuis `api/config.example.php`

### Erreur "PHPMailer not found"

**Solution** : Installez PHPMailer dans `api/vendor/PHPMailer/`

### Emails non reçus

**Solutions** :
1. Vérifiez les logs PHP
2. Testez les identifiants SMTP
3. Vérifiez les spams

### Formulaire ne se soumet pas

**Solutions** :
1. Ouvrez la console navigateur (F12)
2. Vérifiez les erreurs réseau
3. Testez l'endpoint avec curl

---

## 📚 Documentation complète

Pour plus de détails, consultez :
- **INTEGRATION_SMTP_COMPLETE.md** - Guide complet d'intégration
- **api/README.md** - Documentation du dossier API

---

## 🎯 Prochaines étapes

1. **Installer PHPMailer** :
   ```bash
   cd api
   .\install-phpmailer.ps1  # Windows
   # ou
   ./install-phpmailer.sh   # Linux/Mac
   ```

2. **Créer config.php** :
   ```bash
   cp api/config.example.php api/config.php
   # Éditez avec vos vraies valeurs SMTP
   ```

3. **Tester en local** :
   - Démarrez le serveur PHP
   - Testez les deux formulaires
   - Vérifiez la réception des emails

4. **Déployer sur Hostinger** :
   - Uploadez les fichiers
   - Créez config.php sur le serveur
   - Testez en production

---

## ✅ Confirmation de livraison

### Fichiers créés (TRACKÉS dans Git)

- ✅ `api/contact.php` - Endpoint formulaire de rappel
- ✅ `api/devis.php` - Endpoint formulaire de devis
- ✅ `api/config.example.php` - Configuration exemple (NO SECRETS)
- ✅ `api/.htaccess` - Sécurité du dossier API
- ✅ `api/README.md` - Documentation API
- ✅ `api/install-phpmailer.ps1` - Script installation Windows
- ✅ `api/install-phpmailer.sh` - Script installation Linux/Mac
- ✅ `INTEGRATION_SMTP_COMPLETE.md` - Guide complet
- ✅ `LIVRAISON_SMTP_RGPD.md` - Ce fichier

### Formulaires modifiés (déjà en place)

- ✅ `app/components/CallbackFormEnhanced.tsx` - Formulaire de rappel
  - Action : `/api/contact.php`
  - Méthode : POST
  - RGPD : ✅ Consentement obligatoire
  - Honeypot : ✅ Champ `_gotcha`

- ✅ `app/components/ContactForm.tsx` - Formulaire de devis
  - Action : `/api/devis.php`
  - Méthode : POST
  - RGPD : ✅ Consentement obligatoire
  - Honeypot : ✅ Champ `_gotcha`

### Sécurité

- ✅ Aucun secret dans le repository
- ✅ `api/config.php` dans .gitignore
- ✅ `api/vendor/` dans .gitignore
- ✅ Protection honeypot anti-spam
- ✅ Consentement RGPD obligatoire
- ✅ Validation et sanitization des données
- ✅ Headers de sécurité (CORS, X-Frame-Options, etc.)

### Styles préservés

- ✅ Aucune modification des styles CSS/Tailwind
- ✅ Aucune modification de la structure HTML
- ✅ Aucun redirect (messages de succès in-place)

---

**✅ Livraison terminée !**

Les deux formulaires sont maintenant connectés au backend PHP SMTP, avec protection RGPD et anti-spam. Aucun secret n'est présent dans le repository. Les styles et l'UX sont préservés.