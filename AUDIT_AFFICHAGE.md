# AUDIT AFFICHAGE - G.TRAVAUX

## PROBLÈMES IDENTIFIÉS

### 🔵 PRIORITÉ 1 : Sections « héros » - Filtre bleu indésirable
**Statut**: 🔍 Détecté  
**Localisation**: `app/components/Hero.tsx` ligne 41  
**Problème**: `<div className="absolute inset-0 bg-gradient-to-r from-primary/80 to-primary/60"></div>` applique un overlay bleu pétrole (#163B4D) sur toutes les sections héros  
**Impact**: Teinte bleue indésirable sur l'image/vidéo de fond  

### 🎯 PRIORITÉ 2 : Sections « héros » - Centrage du texte
**Statut**: 🔍 Détecté  
**Localisation**: `app/components/Hero.tsx` ligne 71  
**Problème**: `text-center lg:text-left` applique le même alignement sur toutes les pages  
**Besoin**: Centrer le texte sur toutes les pages SAUF la home  

### 📸 PRIORITÉ 3 : Galerie d'images - Affichage
**Statut**: 🔍 Analysé  
**Localisation**: `app/components/GalleryGrid.tsx`  
**État**: Semble correct (ratio fixé à h-64, object-cover, responsive), mais à vérifier en runtime  

### 🔄 PRIORITÉ 4 : Composant « avant / après » - Fonctionnalité
**Statut**: 🔍 Détecté  
**Localisation**: `app/components/BeforeAfterSlider.tsx`  
**Problème**: Implémentation simple mais pas d'effet de zoom détecté. Composant semble déjà conforme aux besoins (slider de révélation sans zoom)  
**À vérifier**: Confirmation visuelle nécessaire  

## PAGES ANALYSÉES
- ✅ Page d'accueil (`app/page.tsx`) 
- ✅ À propos (`app/about/page.tsx`)
- ✅ Réalisations (`app/realisations/page.tsx`)

## COMPOSANTS ANALYSÉS
- ✅ Hero.tsx
- ✅ GalleryGrid.tsx  
- ✅ BeforeAfterSlider.tsx

## NEXT STEPS
1. DIFF pour supprimer le filtre bleu des sections héros
2. DIFF pour implémenter le centrage conditionnel du texte héros
3. Vérification runtime de la galerie et du slider avant/après
4. Tests E2E (avec approbation utilisateur)

## FRAMEWORK DE TEST DÉTERMINÉ
**targetFramework**: Playwright (confirmé dans package.json)