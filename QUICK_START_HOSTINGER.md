# 🚀 Quick Start - Déploiement Hostinger

## ⚡ En 5 Minutes

### 1️⃣ Récupérer les Infos Hostinger (2 min)

1. Connectez-vous à **hPanel Hostinger**
2. Allez dans **Avancé** → **SSH Access**
3. Notez :
   - Hôte SSH
   - Nom d'utilisateur
   - Mot de passe (ou créez-en un)

### 2️⃣ Configurer GitHub Secrets (2 min)

1. Allez sur **GitHub.com** → Votre repo → **Settings** → **Secrets and variables** → **Actions**
2. Cliquez **New repository secret** et ajoutez :

```
SFTP_HOST = [Votre hôte SSH de Hostinger]
SFTP_USERNAME = [Votre username]
SFTP_PASSWORD = [Votre mot de passe]
SFTP_PORT = 22
SFTP_REMOTE_DIR = /public_html
```

### 3️⃣ Déployer (1 min)

```bash
git add .
git commit -m "Configuration déploiement Hostinger"
git push origin main
```

### 4️⃣ Vérifier

1. GitHub → **Actions** → Vérifiez que le workflow est ✅
2. Visitez votre site : `https://votredomaine.com`

---

## 🆘 Problèmes Courants

### ❌ "SSH not enabled"
**Solution** : Dans hPanel → **Avancé** → **SSH Access** → Activez SSH

### ❌ "Permission denied"
**Solution** : Vérifiez que le mot de passe est correct dans les secrets GitHub

### ❌ "Directory not found"
**Solution** : Changez `SFTP_REMOTE_DIR` en `/domains/votredomaine.com/public_html`

### ❌ Le site ne s'affiche pas
**Solution** : 
1. Vérifiez que le domaine pointe vers Hostinger (DNS)
2. Attendez 24h pour la propagation DNS
3. Vérifiez dans hPanel → **Domaines** que le domaine est actif

---

## 📞 Besoin d'Aide ?

- **Documentation complète** : Voir `DEPLOIEMENT_HOSTINGER.md`
- **Support Hostinger** : https://www.hostinger.fr/support
- **Chat Hostinger** : Disponible 24/7 dans hPanel

---

## ✅ Checklist Rapide

- [ ] Compte Hostinger actif
- [ ] SSH activé dans hPanel
- [ ] Secrets GitHub configurés
- [ ] Code pushé sur GitHub
- [ ] Workflow GitHub Actions réussi
- [ ] Site accessible en ligne

**C'est tout ! Votre site est maintenant déployé automatiquement à chaque push sur `main` 🎉**