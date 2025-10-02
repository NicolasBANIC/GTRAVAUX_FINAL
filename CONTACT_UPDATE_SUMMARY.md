# Résumé de la mise à jour des contacts - G.TRAVAUX

## 📅 Date
Mise à jour effectuée le : $(Get-Date -Format "yyyy-MM-dd HH:mm")

## 🎯 Objectif
Uniformiser tous les contacts téléphone et email à travers l'ensemble du projet Next.js G.TRAVAUX.

## 📞 Nouvelles coordonnées standardisées

### Téléphone
- **Affichage** : `03 67 10 26 53`
- **Lien tel:** : `tel:+33367102653` (format E.164)

### Email
- **Affichage et mailto:** : `contact@g-travaux.fr`

## 🗑️ Anciennes références supprimées

### Anciens numéros de téléphone
- ❌ `06 04 00 74 99` / `+33 6 04 00 74 99` / `tel:+33604007499`
- ❌ `+33 9 72 12 34 56` / `tel:+33972123456`
- ❌ `09 00 00 00 00`
- ❌ `+33123456789` (numéro factice)

### Anciens emails
- ❌ `contact.gtravaux@gmail.com`
- ❌ `info@gtravaux.fr`

## 📝 Fichiers modifiés

### Composants React (app/components/)
1. **Footer.tsx**
   - Lien téléphone : `tel:+33367102653`
   - Affichage : `03 67 10 26 53`
   - Email : `contact@g-travaux.fr`

2. **Header.tsx**
   - Bouton d'urgence : `tel:+33367102653`
   - Affichage : `03 67 10 26 53`
   - Mise à jour dans le menu desktop et mobile

3. **StickyCta.tsx**
   - Bouton CTA flottant : `tel:+33367102653`

4. **LiveChat.tsx**
   - Tous les messages automatiques mentionnant le téléphone
   - Mise à jour de toutes les réponses avec `03 67 10 26 53`

5. **LocalSEO.tsx**
   - Paramètre par défaut du téléphone : `+33367102653`
   - Mise à jour dans les props du composant

### Pages (app/)
6. **page.tsx** (Homepage)
   - Section CTA "Besoin d'un conseil ?"
   - Lien téléphone : `tel:+33367102653`
   - Affichage : `03 67 10 26 53`

7. **about/page.tsx**
   - Bouton "Appeler directement" : `tel:+33367102653`

8. **contact/page.tsx**
   - Coordonnées de contact
   - Téléphone : `03 67 10 26 53`
   - Email : `contact@g-travaux.fr`

9. **mentions-legales/page.tsx**
   - Informations légales de l'entreprise
   - Téléphone : `03 67 10 26 53`
   - Email : `contact@g-travaux.fr`

10. **confidentialite/page.tsx**
    - Section "Vos droits"
    - Email : `contact@g-travaux.fr`

11. **cookies/page.tsx**
    - Contact pour questions
    - Email : `contact@g-travaux.fr`

### Layout et métadonnées
12. **layout.tsx**
    - JSON-LD structured data
    - Téléphone : `+33367102653`
    - Email : `contact@g-travaux.fr`

### API (non commité - fichier ignoré)
13. **api/config.php**
    - `SMTP_USER` : `contact@g-travaux.fr`
    - `MAIL_TO` : `contact@g-travaux.fr`
    - `MAIL_FROM` : `contact@g-travaux.fr`
    - ⚠️ **Note** : Ce fichier est dans .gitignore (contient des secrets)

## 🔍 Vérifications effectuées

### ✅ Liens téléphone
```bash
# Tous les liens tel: dans app/
tel:+33367102653 ✓
```

### ✅ Emails
```bash
# Tous les emails dans app/
contact@g-travaux.fr ✓
```

### ✅ Aucune ancienne référence trouvée
- Aucun `06 04 00 74 99`
- Aucun `+33 9 72 12 34 56`
- Aucun `contact.gtravaux@gmail.com`
- Aucun `info@gtravaux.fr`

## 📦 Export statique (out/)

Le dossier `out/` a également été mis à jour avec les nouvelles coordonnées.
**Recommandation** : Régénérer l'export statique avec `npm run build` pour garantir la cohérence complète.

## 🔄 Git

### Branche
```
chore/contact-refresh
```

### Commit
```
commit 2f8998f
Author: [Votre nom]
Date: [Date du commit]

chore(content): unify phone/email and remove obsolete references

- Update phone number to 03 67 10 26 53 (tel:+33367102653) across all components
- Update email to contact@g-travaux.fr across all pages
- Remove old phone numbers (06 04 00 74 99, +33 9 72 12 34 56)
- Remove old emails (contact.gtravaux@gmail.com, info@gtravaux.fr)
- Update JSON-LD structured data in layout
- Update contact information in legal pages
- Update all CTA buttons and links
```

## 📋 Prochaines étapes recommandées

1. **Tester l'application**
   ```bash
   npm run dev
   ```
   - Vérifier tous les liens téléphone (clic pour appeler)
   - Vérifier tous les liens email (ouverture du client mail)
   - Tester le formulaire de contact

2. **Régénérer l'export statique**
   ```bash
   npm run build
   ```

3. **Vérifier le SEO**
   - Valider les données structurées JSON-LD
   - Vérifier les métadonnées OpenGraph
   - Tester avec Google Rich Results Test

4. **Mettre à jour l'API en production**
   - Uploader le fichier `api/config.php` modifié sur Hostinger
   - Vérifier que l'email SMTP est bien configuré

5. **Merger la branche**
   ```bash
   git checkout main
   git merge chore/contact-refresh
   git push origin main
   ```

6. **Déployer**
   - Vercel déploiera automatiquement après le push
   - Vérifier le déploiement sur https://g-travaux.fr

## ⚠️ Points d'attention

1. **api/config.php** : Ce fichier contient des secrets (mot de passe SMTP) et est dans .gitignore. Il doit être mis à jour manuellement sur le serveur de production.

2. **Formulaires de contact** : Vérifier que tous les formulaires envoient bien les emails à `contact@g-travaux.fr`.

3. **Réponses automatiques** : Si vous avez configuré des réponses automatiques sur l'ancien email, pensez à les migrer vers le nouveau.

4. **Redirections email** : Configurer une redirection de `info@gtravaux.fr` vers `contact@g-travaux.fr` si nécessaire.

## ✨ Résultat

Tous les contacts sont maintenant uniformisés à travers l'ensemble du projet :
- ✅ 12 fichiers React/TypeScript mis à jour
- ✅ 1 fichier API PHP mis à jour (local)
- ✅ Export statique mis à jour
- ✅ Aucune ancienne référence restante
- ✅ JSON-LD et métadonnées SEO à jour
- ✅ Commit créé sur la branche `chore/contact-refresh`

---

**Statut** : ✅ Mise à jour complète terminée avec succès