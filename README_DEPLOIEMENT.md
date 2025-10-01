# 🚀 Déploiement G.TRAVAUX sur Hostinger

## 📁 Fichiers Créés pour Vous

| Fichier | Description |
|---------|-------------|
| `DEPLOIEMENT_RAPIDE.md` | ⚡ Guide ultra-rapide (5 min) |
| `GUIDE_DEPLOIEMENT_HOSTINGER.md` | 📖 Guide complet et détaillé |
| `creer-zip-deploiement.ps1` | 🤖 Script automatique pour créer le ZIP |
| `.htaccess-optimise` | ⚙️ Configuration Apache optimisée (optionnel) |

---

## 🎯 Démarrage Rapide (2 Méthodes)

### Méthode A : ZIP (Recommandée pour débutants)

```powershell
# 1. Créer le ZIP automatiquement
.\creer-zip-deploiement.ps1

# 2. Uploader sur Hostinger via le gestionnaire de fichiers
# 3. Extraire dans /public_html/
```

**Temps estimé : 10 minutes**

---

### Méthode B : FTP (Recommandée pour experts)

```
1. Installer FileZilla
2. Connecter à Hostinger (FTP)
3. Uploader le dossier out/ vers /public_html/
```

**Temps estimé : 5-15 minutes (selon connexion)**

---

## 📊 Contenu à Déployer

**Dossier source :** `out/`

**Contenu :**
- ✅ 23 pages HTML
- ✅ Assets Next.js (_next/)
- ✅ Images (images/)
- ✅ Vidéos (videos/)
- ✅ Configuration (.htaccess)

**Taille totale :** ~122 MB

---

## ✅ Checklist de Déploiement

### Avant le déploiement
- [x] Build réussi (`npm run build`)
- [x] Dossier `out/` généré
- [x] Fichiers de déploiement créés
- [ ] Identifiants Hostinger récupérés
- [ ] Backup de l'ancien site (si nécessaire)

### Pendant le déploiement
- [ ] Connexion FTP/hPanel établie
- [ ] Anciens fichiers supprimés de `public_html/`
- [ ] Tous les fichiers uploadés
- [ ] Vérification de la taille des fichiers

### Après le déploiement
- [ ] Site accessible via le navigateur
- [ ] Page d'accueil s'affiche
- [ ] Navigation fonctionne
- [ ] Images chargent
- [ ] Vidéos jouent
- [ ] Formulaire de contact fonctionne
- [ ] HTTPS activé
- [ ] Test sur mobile

---

## 🔧 Configuration Optionnelle

### Améliorer les performances

Remplacez le fichier `.htaccess` dans `public_html/` par `.htaccess-optimise` pour :
- ✅ Cache navigateur optimisé
- ✅ Compression GZIP
- ✅ Headers de sécurité
- ✅ Redirection HTTPS automatique

**Comment faire :**
1. Renommez `.htaccess-optimise` en `.htaccess`
2. Uploadez-le dans `/public_html/`
3. Remplacez l'ancien fichier

---

## 📖 Documentation Complète

Pour plus de détails, consultez :

- **Guide rapide :** `DEPLOIEMENT_RAPIDE.md`
- **Guide complet :** `GUIDE_DEPLOIEMENT_HOSTINGER.md`

---

## 🆘 Besoin d'Aide ?

### Problèmes courants

**Page blanche après déploiement**
```
→ Vérifiez que index.html est à la racine de public_html/
→ Vérifiez les permissions (644 pour fichiers, 755 pour dossiers)
```

**CSS/JS ne charge pas**
```
→ Vérifiez que le dossier _next/ est bien uploadé
→ Videz le cache du navigateur (Ctrl+Shift+R)
```

**Erreur 404 sur les sous-pages**
```
→ Vérifiez que .htaccess est présent
→ Vérifiez que mod_rewrite est activé (normalement oui sur Hostinger)
```

**Images ne s'affichent pas**
```
→ Vérifiez que le dossier images/ est bien uploadé
→ Vérifiez les permissions (644)
```

### Support Hostinger

- **Chat 24/7 :** Disponible dans hPanel
- **Email :** support@hostinger.com
- **Base de connaissances :** https://support.hostinger.com/

---

## 🎉 Félicitations !

Une fois déployé, votre site sera accessible sur :
```
https://votredomaine.com
```

**Le site est prêt pour la production !** ✨

---

## 📝 Notes Importantes

1. **Sauvegardez régulièrement** votre site via FTP
2. **Testez toujours** après chaque mise à jour
3. **Activez SSL/HTTPS** dans les paramètres Hostinger
4. **Configurez les emails** si vous utilisez le formulaire de contact
5. **Surveillez les performances** avec Google PageSpeed Insights

---

## 🔄 Mises à Jour Futures

Pour mettre à jour le site après modifications :

```powershell
# 1. Modifier le code
# 2. Rebuild
npm run build

# 3. Créer nouveau ZIP
.\creer-zip-deploiement.ps1

# 4. Re-uploader sur Hostinger
```

---

**Créé le :** $(Get-Date -Format "dd/MM/yyyy HH:mm")
**Version :** 1.0
**Statut :** ✅ Prêt pour déploiement