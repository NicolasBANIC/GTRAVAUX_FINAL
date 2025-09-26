# PLAN DE NETTOYAGE - PROJET G.TRAVAUX

## RÉSUMÉ EXÉCUTIF

**Audit effectué le :** 30 décembre 2024  
**Type de projet :** Next.js (App Router) + TypeScript + Tailwind CSS  
**État général :** Bon, mais avec quelques optimisations nécessaires  

### STATISTIQUES CLÉS
- **35 composants** dans app/components/
- **6 composants non utilisés** identifiés (17% du total)
- **3 dépendances** potentiellement non utilisées
- **12 images manquantes** référencées dans le code
- **4 liens internes cassés** (pages non créées)
- **7 pages de services** sans métadonnées SEO

---

## PLAN D'EXÉCUTION (PAR ORDRE DE PRIORITÉ)

### 🔥 PHASE 1 - NETTOYAGE CRITIQUE (Impact immédiat)

#### 1.1 Supprimer les composants non utilisés
**Durée estimée :** 30 minutes  
**Impact :** Réduction de la taille du bundle, clarification du code

```bash
# Composants à supprimer :
- app/components/Accordion.tsx
- app/components/ExitIntentPopup.tsx  
- app/components/Loader.tsx
- app/components/PromoBanner.tsx
- app/components/QuoteGeneratorPDF.tsx
- app/components/Timeline.tsx
```

#### 1.2 Nettoyer les dépendances non utilisées
**Durée estimée :** 15 minutes  
**Impact :** Réduction de node_modules, temps de build plus rapide

```bash
npm uninstall critters html2canvas jspdf
```

#### 1.3 Page de test à supprimer ou isoler
**Durée estimée :** 10 minutes  
**Impact :** Éviter l'exposition d'une page de test en production

```bash
# Supprimer :
- app/test-header/ (dossier entier)
- app/components/HeaderMinimal.tsx (si plus utilisé)
```

### 🚨 PHASE 2 - CORRECTION DES LIENS CASSÉS (UX critique)

#### 2.1 Créer les pages manquantes ou supprimer les liens
**Durée estimée :** 2 heures  
**Impact :** Éviter les erreurs 404, améliorer l'UX

```bash
# Pages à créer ou liens à supprimer :
- app/mentions-legales/page.tsx
- app/confidentialite/page.tsx  
- app/cookies/page.tsx
```

#### 2.2 Corriger les liens vers les articles de blog
**Durée estimée :** 30 minutes  
**Impact :** Système de blog fonctionnel

```bash
# Créer la route dynamique :
- app/blog/[slug]/page.tsx
```

### 📊 PHASE 3 - SEO ET MÉTADONNÉES (Référencement)

#### 3.1 Ajouter les métadonnées manquantes  
**Durée estimée :** 1 heure  
**Impact :** Amélioration du SEO, partage social

```tsx
// Ajouter export const metadata dans :
- app/page.tsx (page d'accueil !)
- app/reservation/page.tsx
- app/services/*/page.tsx (6 pages de services)
```

#### 3.2 Enrichir le données structurées
**Durée estimée :** 1 heure  
**Impact :** Meilleur référencement, rich snippets

```bash
# Ajouter schema.org pour :
- Service pages (LocalBusiness + Service)  
- Blog articles (Article schema)
```

### 🖼️ PHASE 4 - GESTION DES ASSETS (Performance)

#### 4.1 Gérer les images manquantes
**Durée estimée :** 2 heures  
**Impact :** Éviter les erreurs de chargement, améliorer l'UX

```bash
# Options :
1. Créer/fournir les images manquantes
2. Remplacer par des placeholders existants
3. Supprimer les références si non critiques

# Images manquantes :
- avant-*/apres-* (gallery avant/après)
- team-antoine.jpg, team-claire.jpg, team-jean.jpg, team-laura.jpg
```

#### 4.2 Audit des assets orphelins
**Durée estimée :** 30 minutes  
**Impact :** Nettoyage du dossier public/

### ⚡ PHASE 5 - OPTIMISATIONS TECHNIQUES (Performance)

#### 5.1 Configuration du formatage de code
**Durée estimée :** 15 minutes  
**Impact :** Consistance du code, collaboration

```bash
# Ajouter Prettier :
npm install -D prettier
# Créer .prettierrc
```

#### 5.2 Optimisation des imports
**Durée estimée :** 1 heure  
**Impact :** Réduction bundle, performance

```bash
# Analyser et nettoyer :
- Imports non utilisés dans les composants
- Imports dupliqués
```

---

## ORDRE D'EXÉCUTION RECOMMANDÉ

### Séquence optimale :
1. **PHASE 1** → Impact immédiat, faible risque
2. **PHASE 2.1** → Critique pour l'UX  
3. **PHASE 3.1** → Important pour le SEO
4. **PHASE 2.2 + PHASE 4.1** → Selon les priorités métier
5. **PHASE 3.2 + PHASE 5** → Optimisations avancées

### Points d'attention :
- ⚠️ **Tester chaque phase** avant de passer à la suivante
- ⚠️ **Backup** avant les suppressions importantes  
- ⚠️ **Vérifier les builds** après chaque changement majeur

### Temps total estimé : 
**8-10 heures** (étalées sur 2-3 sessions de travail)

### ROI attendu :
- **-15% taille du bundle** (suppression composants + deps)
- **+30% SEO score** (métadonnées + structured data)
- **+20% maintenabilité** (code plus propre)
- **0 erreur 404** (liens corrigés)

---

## VALIDATION POST-NETTOYAGE

### Checklist finale :
- [ ] `npm run build` sans erreurs
- [ ] Aucun lien cassé sur le site  
- [ ] Toutes les images se chargent correctement
- [ ] Métadonnées présentes sur toutes les pages
- [ ] Tests Lighthouse > 90 sur toutes les métriques
- [ ] Aucune dépendance inutile dans package.json

### Outils de vérification :
- `npm run build` (build production)
- `npm run lint` (vérification ESLint)
- Tests manuels sur les principales pages
- Audit Lighthouse sur les pages clés