# 📧 Intégration SMTP & RGPD - G.TRAVAUX

## ✅ Modifications effectuées

### 🔧 Backend PHP créé

#### Structure des fichiers
```
/out/api/
├── config.php          # Configuration SMTP Hostinger
├── contact.php         # Endpoint formulaire de rappel (Homepage)
├── devis.php          # Endpoint formulaire de devis (Contact)
├── .htaccess          # Configuration Apache/PHP
└── vendor/
    └── PHPMailer/     # Bibliothèque PHPMailer v6.9.1
```

#### Configuration SMTP (config.php)
- **Host**: smtp.hostinger.com
- **Port**: 465
- **Sécurité**: SSL
- **Utilisateur**: info@gtravaux.fr
- **Mot de passe**: `[VOIR api/config.php - NON VERSIONNÉ]`
- **Destinataire**: info@gtravaux.fr

> ⚠️ **IMPORTANT**: Les identifiants SMTP réels sont dans `api/config.php` qui n'est PAS versionné dans git. Utilisez `api/config.example.php` comme modèle.

### 📝 Formulaires modifiés

#### 1. Formulaire de rappel (Homepage)
**Fichier**: `app/components/CallbackFormEnhanced.tsx`

**Champs**:
- ✅ Nom et prénom (obligatoire)
- ✅ Téléphone (obligatoire)
- ✅ Email (optionnel)
- ✅ Date souhaitée (obligatoire)
- ✅ Créneau horaire (obligatoire)
- ✅ Message (optionnel)
- ✅ **Consentement RGPD** (obligatoire) ⭐ NOUVEAU
- ✅ Honeypot anti-bot (_gotcha)

**Action**: `POST /api/contact.php`

**Fonctionnalités**:
- Envoi d'email via Hostinger SMTP
- Validation côté client et serveur
- Protection anti-bot (honeypot)
- Conformité RGPD avec lien vers politique de confidentialité
- Messages d'erreur clairs
- Indicateur de chargement pendant l'envoi
- Message de confirmation après envoi réussi

#### 2. Formulaire de devis (Contact page)
**Fichier**: `app/components/ContactForm.tsx`

**Champs**:
- ✅ Nom (obligatoire)
- ✅ Email (obligatoire)
- ✅ Téléphone (optionnel)
- ✅ Service souhaité (optionnel)
- ✅ Message (obligatoire)
- ✅ Projection 3D souhaitée (checkbox optionnel)
- ✅ **Consentement RGPD** (obligatoire) ⭐ NOUVEAU
- ✅ Honeypot anti-bot (_gotcha)

**Action**: `POST /api/devis.php`

**Fonctionnalités**:
- Envoi d'email via Hostinger SMTP
- Validation côté client et serveur
- Protection anti-bot (honeypot)
- Conformité RGPD avec lien vers politique de confidentialité
- Messages d'erreur clairs
- Indicateur de chargement pendant l'envoi
- Message de confirmation après envoi réussi

### 🔒 Sécurité & RGPD

#### Protection anti-bot
1. **Honeypot** (`_gotcha`): Champ caché qui piège les bots
2. **Validation serveur**: Vérification de tous les champs côté PHP
3. **Rate limiting**: À configurer sur Hostinger si nécessaire

#### Conformité RGPD
- ✅ Checkbox de consentement obligatoire
- ✅ Lien vers la politique de confidentialité (`/confidentialite/`)
- ✅ Texte explicite: "J'accepte que mes informations soient utilisées pour me recontacter"
- ✅ Validation du consentement côté client et serveur
- ✅ Pas de stockage des données (envoi direct par email)

#### Headers de sécurité
```
X-Content-Type-Options: nosniff
X-Frame-Options: DENY
X-XSS-Protection: 1; mode=block
```

### 📧 Format des emails

#### Email de rappel (contact.php)
**Sujet**: 🔔 Nouvelle demande de rappel - Site G.TRAVAUX

**Contenu HTML**:
- En-tête orange avec logo
- Informations du client (nom, téléphone, email)
- Date et créneau horaire souhaités
- Message éventuel
- Source et horodatage
- Pied de page avec coordonnées

#### Email de devis (devis.php)
**Sujet**: 📋 Nouvelle demande de devis - Site G.TRAVAUX

**Contenu HTML**:
- En-tête orange avec logo
- Informations du client (nom, email, téléphone)
- Service souhaité
- Projection 3D (Oui/Non)
- Description du projet (mise en évidence)
- Source et horodatage
- Pied de page avec coordonnées

### 🚀 Déploiement sur Hostinger

#### Étape 1: Upload des fichiers
```bash
# Uploader le dossier /out/ complet vers le serveur Hostinger
# Via FTP, cPanel File Manager, ou Git
```

#### Étape 2: Vérifier les permissions
```bash
# Les fichiers PHP doivent être exécutables
chmod 644 /api/*.php
chmod 755 /api/
```

#### Étape 3: Tester les endpoints
```bash
# Test formulaire de rappel
curl -X POST https://g-travaux.fr/api/contact.php \
  -F "nom=Test User" \
  -F "telephone=0612345678" \
  -F "preferredDate=2025-02-01" \
  -F "timeSlot=Matin (9h-12h)" \
  -F "consent=1"

# Test formulaire de devis
curl -X POST https://g-travaux.fr/api/devis.php \
  -F "nom=Test User" \
  -F "email=test@example.com" \
  -F "message=Test message" \
  -F "consent=1"
```

#### Étape 4: Vérifier les logs
```bash
# Vérifier les logs d'erreur PHP sur Hostinger
# Via cPanel > Error Log ou SSH
tail -f /home/username/public_html/error_log
```

### 🔍 Tests à effectuer

#### Tests fonctionnels
- [ ] Formulaire de rappel envoie bien l'email
- [ ] Formulaire de devis envoie bien l'email
- [ ] Les emails arrivent à info@gtravaux.fr
- [ ] Le format HTML des emails est correct
- [ ] Les accents français sont bien affichés

#### Tests de validation
- [ ] Champs obligatoires vérifiés (nom, email, message)
- [ ] Validation de l'email
- [ ] Validation du téléphone (format français)
- [ ] Consentement RGPD obligatoire
- [ ] Messages d'erreur clairs

#### Tests de sécurité
- [ ] Honeypot bloque les bots
- [ ] Headers de sécurité présents
- [ ] Pas d'accès direct à config.php
- [ ] Pas d'accès au dossier vendor/
- [ ] Protection XSS (htmlspecialchars)

#### Tests UX
- [ ] Indicateur de chargement pendant l'envoi
- [ ] Message de confirmation après envoi
- [ ] Messages d'erreur compréhensibles
- [ ] Lien RGPD fonctionne
- [ ] Responsive sur mobile

### 📊 Monitoring

#### Métriques à surveiller
- Taux de soumission des formulaires
- Taux d'erreur d'envoi
- Temps de réponse des endpoints
- Détection de bots (honeypot)

#### Logs recommandés
```php
// Dans contact.php et devis.php
error_log("Form submission from: " . $_SERVER['REMOTE_ADDR']);
error_log("PHPMailer error: " . $mail->ErrorInfo);
```

### 🐛 Dépannage

#### Problème: Les emails ne sont pas reçus
**Solutions**:
1. Vérifier les identifiants SMTP dans config.php
2. Vérifier les logs d'erreur PHP
3. Tester la connexion SMTP depuis le serveur
4. Vérifier les filtres anti-spam
5. Vérifier que le port 465 est ouvert

#### Problème: Erreur 500 sur les endpoints
**Solutions**:
1. Vérifier que PHP est activé
2. Vérifier les permissions des fichiers
3. Vérifier que PHPMailer est bien uploadé
4. Consulter les logs d'erreur PHP

#### Problème: Le consentement RGPD n'est pas validé
**Solutions**:
1. Vérifier que la checkbox est cochée
2. Vérifier que `consent=1` est envoyé dans le POST
3. Vérifier la validation côté serveur

### 📝 Notes importantes

1. **Pas de redirection**: Les formulaires restent sur la même page et affichent un message de confirmation
2. **Préservation des styles**: Toutes les classes Tailwind CSS sont conservées
3. **Accessibilité**: Labels, aria-labels et attributs required maintenus
4. **Progressive enhancement**: Fonctionne même si JavaScript est désactivé (soumission HTML classique)

### 🔄 Prochaines étapes (optionnel)

- [ ] Ajouter un système de captcha (reCAPTCHA v3)
- [ ] Implémenter un rate limiting côté serveur
- [ ] Ajouter des notifications SMS via Twilio
- [ ] Créer un dashboard admin pour voir les soumissions
- [ ] Ajouter des tests automatisés (PHPUnit)
- [ ] Mettre en place un système de logs centralisé

---

## 📞 Support

Pour toute question ou problème:
- Email: info@gtravaux.fr
- Téléphone: 06 04 00 74 99

---

**Date de création**: 10 janvier 2025  
**Version**: 1.0  
**Auteur**: Zencoder