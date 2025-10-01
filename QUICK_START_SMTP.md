# ⚡ Quick Start - SMTP Backend

## 🚀 Installation en 3 étapes

### 1️⃣ Installer PHPMailer

**Windows** :
```powershell
cd api
.\install-phpmailer.ps1
```

**Linux/Mac** :
```bash
cd api
chmod +x install-phpmailer.sh
./install-phpmailer.sh
```

### 2️⃣ Créer config.php

```bash
cd api
cp config.example.php config.php
```

Éditez `api/config.php` :
```php
define('SMTP_PASS', 'VOTRE_VRAI_MOT_DE_PASSE'); // ⚠️ Changez cette ligne
```

### 3️⃣ Tester

```bash
# Test formulaire de rappel
curl -X POST http://localhost/api/contact.php \
  -F "nom=Test" \
  -F "telephone=0612345678" \
  -F "preferredDate=2025-02-15" \
  -F "timeSlot=Matin (8h-12h)" \
  -F "consent=1"

# Test formulaire de devis
curl -X POST http://localhost/api/devis.php \
  -F "nom=Test" \
  -F "email=test@example.com" \
  -F "message=Test" \
  -F "consent=1"
```

✅ Réponse attendue : `{"ok":true}`

---

## 📋 Formulaires

### Formulaire RAPPEL (Homepage)
- **Endpoint** : `/api/contact.php`
- **Champs** : nom, téléphone, date, créneau
- **Email** : 🔔 Nouvelle demande de rappel

### Formulaire DEVIS (Contact)
- **Endpoint** : `/api/devis.php`
- **Champs** : nom, email, message, service
- **Email** : 📋 Nouvelle demande de devis

---

## 🔒 Sécurité

✅ **Honeypot** : Champ `_gotcha` anti-spam  
✅ **RGPD** : Consentement obligatoire  
✅ **Secrets** : `api/config.php` dans .gitignore  
✅ **Validation** : Tous les champs nettoyés  

---

## 🐛 Dépannage rapide

| Problème | Solution |
|----------|----------|
| "Configuration manquante" | Créez `api/config.php` |
| "PHPMailer not found" | Installez PHPMailer dans `api/vendor/PHPMailer/` |
| Emails non reçus | Vérifiez SMTP_PASS dans config.php |
| Formulaire ne marche pas | Ouvrez la console (F12) |

---

## 📚 Documentation complète

- **INTEGRATION_SMTP_COMPLETE.md** - Guide détaillé
- **LIVRAISON_SMTP_RGPD.md** - Résumé de livraison
- **api/README.md** - Documentation API

---

## ⚠️ IMPORTANT

**NE JAMAIS commiter** :
- ❌ `api/config.php` (contient les mots de passe)
- ❌ `api/vendor/` (librairies tierces)

Ces fichiers sont déjà dans `.gitignore`.

---

**✅ C'est tout !** Les formulaires sont prêts à l'emploi.