# 🚀 DÉMARRAGE RAPIDE - Déploiement Hostinger

```
╔══════════════════════════════════════════════════════════════╗
║                                                              ║
║   🎉  VOTRE SITE EST PRÊT POUR LE DÉPLOIEMENT !  🎉         ║
║                                                              ║
╚══════════════════════════════════════════════════════════════╝
```

## 📖 Par où commencer ?

### 🏃 Vous êtes pressé ? (5 minutes)
👉 **[QUICK_START_HOSTINGER.md](./QUICK_START_HOSTINGER.md)**

### 📋 Vous voulez une checklist détaillée ? (15 minutes)
👉 **[CHECKLIST_DEPLOIEMENT.md](./CHECKLIST_DEPLOIEMENT.md)**

### 📚 Vous voulez tout comprendre ? (30 minutes)
👉 **[DEPLOIEMENT_HOSTINGER.md](./DEPLOIEMENT_HOSTINGER.md)**

### 📦 Vous voulez voir ce qui a été configuré ?
👉 **[RESUME_CONFIGURATION.md](./RESUME_CONFIGURATION.md)**

---

## ⚡ Déploiement en 3 Étapes

### 1️⃣ Récupérer les Infos Hostinger

```
📍 hPanel → Avancé → SSH Access
```

Notez :
- Hôte SSH
- Username  
- Password

### 2️⃣ Configurer GitHub Secrets

```
📍 GitHub → Settings → Secrets and variables → Actions
```

Ajoutez 5 secrets :
- `SFTP_HOST`
- `SFTP_USERNAME`
- `SFTP_PASSWORD`
- `SFTP_PORT` = `22`
- `SFTP_REMOTE_DIR` = `/public_html`

### 3️⃣ Déployer

```bash
git add .
git commit -m "Configuration déploiement Hostinger"
git push origin main
```

✅ **C'est tout !** Votre site sera en ligne dans 3-5 minutes.

---

## 📁 Structure de la Documentation

```
📦 Documentation de Déploiement
│
├── 📄 START_HERE.md                    ← VOUS ÊTES ICI
│   └── Point d'entrée principal
│
├── 🏃 QUICK_START_HOSTINGER.md         ← Démarrage rapide (5 min)
│   └── Guide express pour déployer rapidement
│
├── 📋 CHECKLIST_DEPLOIEMENT.md         ← Checklist complète (15 min)
│   └── Liste à cocher étape par étape
│
├── 📚 DEPLOIEMENT_HOSTINGER.md         ← Documentation complète (30 min)
│   └── Guide détaillé avec dépannage
│
├── 📦 RESUME_CONFIGURATION.md          ← Résumé technique
│   └── Ce qui a été configuré
│
├── 🔧 deploy-local.ps1                 ← Script de build local
│   └── Pour tester le build localement
│
└── 📝 .env.example                     ← Variables d'environnement
    └── Template de configuration
```

---

## 🎯 Workflow de Déploiement

```
┌──────────────────┐
│  Modifier Code   │
└────────┬─────────┘
         │
         ↓
┌──────────────────┐
│  git push main   │
└────────┬─────────┘
         │
         ↓
┌──────────────────┐
│ GitHub Actions   │  ← Automatique
│  - Build         │
│  - Export        │
└────────┬─────────┘
         │
         ↓
┌──────────────────┐
│ Upload Hostinger │  ← Automatique
│  via SFTP        │
└────────┬─────────┘
         │
         ↓
┌──────────────────┐
│  Site en Ligne   │  ✅
│  3-5 minutes     │
└──────────────────┘
```

---

## 🛠️ Commandes Utiles

### Développement Local
```bash
npm run dev              # Lancer en mode dev
npm run build            # Build de production
npm run deploy:test      # Tester le build
```

### Déploiement
```bash
git add .
git commit -m "Votre message"
git push origin main     # Déploiement automatique
```

### Vérification
```bash
# Voir les fichiers générés
ls out/

# Tester localement
npm run start
```

---

## 🆘 Problèmes Courants

### ❌ "SSH not enabled"
**Solution** : Activez SSH dans hPanel → Avancé → SSH Access

### ❌ "Permission denied"  
**Solution** : Vérifiez le mot de passe dans les secrets GitHub

### ❌ Le site ne s'affiche pas
**Solution** : Vérifiez que le domaine pointe vers Hostinger (DNS)

### ❌ Workflow GitHub échoue
**Solution** : Vérifiez les logs dans Actions → Cliquez sur le workflow rouge

---

## 📞 Support

| Besoin | Ressource |
|--------|-----------|
| 🏃 Démarrage rapide | [QUICK_START_HOSTINGER.md](./QUICK_START_HOSTINGER.md) |
| 📋 Checklist | [CHECKLIST_DEPLOIEMENT.md](./CHECKLIST_DEPLOIEMENT.md) |
| 📚 Documentation | [DEPLOIEMENT_HOSTINGER.md](./DEPLOIEMENT_HOSTINGER.md) |
| 💬 Support Hostinger | Chat 24/7 dans hPanel |
| 📖 GitHub Actions | https://docs.github.com/actions |

---

## ✅ Checklist Rapide

Avant de déployer, vérifiez que vous avez :

- [ ] Un compte Hostinger avec hébergement web
- [ ] SSH/SFTP activé sur Hostinger
- [ ] Un repository GitHub
- [ ] Les 5 secrets GitHub configurés
- [ ] Le code poussé sur GitHub

**Tout est prêt ?** 🎉 Suivez le **[QUICK_START_HOSTINGER.md](./QUICK_START_HOSTINGER.md)** !

---

```
╔══════════════════════════════════════════════════════════════╗
║                                                              ║
║  🚀  PRÊT À DÉPLOYER ?                                      ║
║                                                              ║
║  Suivez le guide QUICK_START_HOSTINGER.md                   ║
║  et votre site sera en ligne dans 5 minutes !               ║
║                                                              ║
╚══════════════════════════════════════════════════════════════╝
```

**Bonne chance ! 🍀**