# PLAN DE MISE EN PAGE - G.TRAVAUX v2

## OBJECTIF
Moderniser et harmoniser l'aspect professionnel sur TOUTES les pages avec proportions cohérentes, rendu d'images optimisé et réparation fonctionnelle de l'outil en ligne.

## ÉTAT DES LIEUX

### Structure actuelle
- **Page d'accueil** (`/`) : Hero fullScreen (100vh) + formulaire intégré
- **Pages services** (`/services/*`) : Hero avec min-h-[80vh] 
- **Page À propos** (`/about`) : Hero avec min-h-[80vh]
- **Page Réalisations** (`/realisations`) : Hero avec min-h-[80vh]

### Problèmes identifiés
1. **Sections héros non conformes aux règles** :
   - ❌ Pages services/about/réalisations utilisent 80vh au lieu de 50-70vh
   - ❌ Texte pas parfaitement centré vertical/horizontal
   - ❌ Overlay/filtres indésirables non identifiés

2. **Proportions désharmonisées** :
   - Espacement inconsistant entre sections
   - Largeurs de conteneurs variables
   - Breakpoints mobile/tablette à vérifier

3. **Outil en ligne page d'accueil** :
   - ✅ Calculateur de devis présent
   - ✅ Formulaire de rappel présent
   - ❌ Formulaires statiques (aucune logique fonctionnelle)

4. **Rendu des images** :
   - Images placeholders utilisées
   - Ratios à vérifier
   - Optimisation Next.js Image à valider

## PLANNING D'EXÉCUTION

### LOT 1 : Sections héros (PRIORITÉ 1)
- **Accueil** : Conserver 100vh
- **Toutes autres pages** : Réduire à ~60vh avec centrage parfait
- **Centrage texte** : Horizontal ET vertical sur toutes pages
- **Overlay** : Audit et nettoyage si nécessaire

### LOT 2 : Proportions et rythmes
- Harmoniser conteneurs (max-width cohérente)
- Espacements py-16/py-20 standardisés
- Grille responsive unifiée
- Breakpoints mobile/tablette/desktop

### LOT 3 : Rendu des images
- Vérification ratios et object-fit
- Composant OptimizedImage
- Palette colorimétrique adoucie
- Dimensions explicites

### LOT 4 : Outil en ligne fonctionnel
- Ajout logique formulaire rappel
- Calculateur de devis interactif
- Validation côté client
- Gestion erreurs et états de chargement

### LOT 5 : Tests et validation
- Tests sur breakpoints : 320, 375, 768, 1024, 1280, 1536px
- Audit console errors
- Lint + type-check + build
- UX finale

## STATUS
🔄 **EN COURS** - Préparation DIFF LOT 1 (sections héros)