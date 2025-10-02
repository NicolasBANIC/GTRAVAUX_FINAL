# ⚡ VÉRIFICATION RAPIDE - CHANTIER CONTACT REFRESH

Ce fichier contient les commandes pour vérifier rapidement que tout est en ordre.

---

## 🔍 VÉRIFICATIONS GIT

### 1. Vérifier l'état actuel
```bash
git status
git branch -vv
```

**Attendu :**
- Branche `main` active
- Working directory propre
- Commit `58ae708` (ou plus récent)

### 2. Vérifier qu'aucun fichier API n'a été modifié
```bash
git diff --name-only origin/main~2..origin/main | Select-String "^api/"
```

**Attendu :** Aucun résultat (ligne vide)

### 3. Vérifier les commits récents
```bash
git log --oneline -5
```

**Attendu :**
```
58ae708 docs: add final deployment report and Hostinger guide
c38342d chore(content): unify phone/email + cleanup front (no api changes)
24652ec Remove RGE/Qualibat certifications, replace with neutral trust signals
...
```

### 4. Vérifier le tag
```bash
git tag -l "v1.0.0-*"
```

**Attendu :** `v1.0.0-contact-refresh`

---

## 📦 VÉRIFICATIONS ARCHIVE

### 1. Vérifier la présence de l'archive
```bash
Test-Path "site_deploy_posix.tar.gz"
```

**Attendu :** `True`

### 2. Vérifier la taille
```bash
(Get-Item "site_deploy_posix.tar.gz").Length / 1MB
```

**Attendu :** ~69.3 MB

### 3. Vérifier le SHA256
```bash
(Get-FileHash "site_deploy_posix.tar.gz" -Algorithm SHA256).Hash
```

**Attendu :** `D7D5607B8B0FCE9C0FE8CD783B676B07D1B9EB66166FC489AE05B63DCE69CFD8`

### 4. Vérifier le contenu (30 premières entrées)
```bash
tar -tzf site_deploy_posix.tar.gz | Select-Object -First 30
```

**Attendu :**
- `./index.html` présent
- `./_next/` présent
- `./about/`, `./contact/`, `./images/`, `./services/` présents
- Aucune entrée `./api/`

### 5. Vérifier qu'il n'y a PAS d'entrée api/
```bash
tar -tzf site_deploy_posix.tar.gz | Select-String "^\.?/?api/"
```

**Attendu :** Aucun résultat (ligne vide)

---

## 🔍 VÉRIFICATIONS CONTACT (CODE SOURCE)

### 1. Vérifier les liens téléphone
```bash
Get-ChildItem -Recurse -File -Path "app" -Include "*.tsx","*.ts" | Select-String 'href="tel:' | Select-Object -ExpandProperty Line
```

**Attendu :** Tous les résultats contiennent `tel:+33367102653`

### 2. Vérifier les liens email
```bash
Get-ChildItem -Recurse -File -Path "app" -Include "*.tsx","*.ts" | Select-String 'href="mailto:' | Select-Object -ExpandProperty Line
```

**Attendu :** Tous les résultats contiennent `mailto:contact@g-travaux.fr`

### 3. Vérifier le texte téléphone affiché
```bash
Get-ChildItem -Recurse -File -Path "app" -Include "*.tsx","*.ts" | Select-String "03 67 10 26 53" | Measure-Object
```

**Attendu :** Count > 10 (au moins 10 occurrences)

### 4. Vérifier le texte email affiché
```bash
Get-ChildItem -Recurse -File -Path "app" -Include "*.tsx","*.ts" | Select-String "contact@g-travaux.fr" | Measure-Object
```

**Attendu :** Count > 5 (au moins 5 occurrences)

### 5. Vérifier les données structurées (JSON-LD)
```bash
Get-Content "app/components/LocalSEO.tsx" | Select-String -Pattern "telephone|email" -Context 1
```

**Attendu :**
- `telephone: phone` ou `telephone: '+33367102653'`
- `email: email` ou `email: 'contact@g-travaux.fr'`

---

## 🏗️ VÉRIFICATIONS BUILD

### 1. Vérifier que le dossier out/ existe
```bash
Test-Path "out"
```

**Attendu :** `True`

### 2. Vérifier index.html
```bash
Test-Path "out/index.html"
```

**Attendu :** `True`

### 3. Vérifier les dossiers principaux
```bash
Get-ChildItem "out" -Directory | Select-Object -ExpandProperty Name
```

**Attendu :**
- `_next`
- `about`
- `contact`
- `images`
- `services`
- etc.

### 4. Vérifier qu'il n'y a PAS de dossier api/
```bash
Test-Path "out/api"
```

**Attendu :** `False`

---

## 📄 VÉRIFICATIONS DOCUMENTATION

### 1. Vérifier les fichiers générés
```bash
Get-ChildItem -Filter "*.md" | Where-Object { $_.Name -match "RAPPORT|CHECKLIST|RELEASE|RESUME|VERIFICATION" } | Select-Object Name
```

**Attendu :**
- `RAPPORT_FINAL_LIVRAISON.md`
- `CHECKLIST_DEPLOIEMENT_HOSTINGER.md`
- `RELEASE_NOTES.md`
- `RESUME_EXECUTION.md`
- `VERIFICATION_RAPIDE.md`

---

## ✅ CHECKLIST RAPIDE

Cochez chaque élément après vérification :

- [ ] Git : Branche `main` à jour
- [ ] Git : Aucun fichier API modifié
- [ ] Git : Tag `v1.0.0-contact-refresh` créé
- [ ] Archive : `site_deploy_posix.tar.gz` présente (69.3 MB)
- [ ] Archive : SHA256 correct
- [ ] Archive : Aucune entrée `api/`
- [ ] Code : Liens téléphone uniformes (`tel:+33367102653`)
- [ ] Code : Liens email uniformes (`mailto:contact@g-travaux.fr`)
- [ ] Code : Textes uniformes (`03 67 10 26 53`, `contact@g-travaux.fr`)
- [ ] Build : Dossier `out/` présent avec `index.html`
- [ ] Build : Aucun dossier `out/api/`
- [ ] Docs : 5 fichiers de documentation générés

---

## 🚨 EN CAS DE PROBLÈME

### Si un fichier API a été modifié
```bash
git restore --source origin/main --staged --worktree api/
```

### Si l'archive contient api/
```bash
# Recréer l'archive
Remove-Item site_deploy_posix.tar.gz
Set-Location out
tar -czf ..\site_deploy_posix.tar.gz .
Set-Location ..
```

### Si les contrôles contact échouent
```bash
# Vérifier les fichiers modifiés
git diff origin/main~2..origin/main -- app/
```

---

## 📞 VALEURS DE RÉFÉRENCE

### Téléphone
```
Lien href  : tel:+33367102653
Texte      : 03 67 10 26 53
JSON-LD    : +33367102653
```

### Email
```
Lien href  : mailto:contact@g-travaux.fr
Texte      : contact@g-travaux.fr
JSON-LD    : contact@g-travaux.fr
```

---

**Dernière mise à jour :** 30 janvier 2025  
**Version :** 1.0.0-contact-refresh