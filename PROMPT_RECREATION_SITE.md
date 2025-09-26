# PROMPT COMPLET POUR RECREATION DU SITE G.TRAVAUX

## 🎯 MISSION
Créer un site web professionnel pour G.TRAVAUX, entreprise de rénovation haut de gamme et après sinistre basée à Strasbourg, avec interventions dans toute la France.

## 🏗️ 1. STRUCTURE DU SITE

### Page d'accueil (100vh - pleine hauteur)
- **Section héros** : Vidéo d'arrière-plan "/videos/videoHeroAc.mp4" avec overlay sombre semi-transparent
- **Layout desktop** : Texte à gauche (titre principal + sous-titre + CTA), formulaire de rappel à droite
- **Layout mobile** : Éléments empilés, texte centré au-dessus, formulaire en dessous
- **Titre principal** : "Rénovation haut de gamme & après sinistre" (blanc, très large, gras)
- **Sous-titre** : "Forte de 15 années d'expérience et plus de 150 projets réalisés, notre équipe coordonne tous les corps de métier pour un résultat durable, esthétique et conforme aux normes. Basés à Strasbourg, nous intervenons partout en France."
- **CTA primaire** : "Demander un devis" (bouton orange/accent visible)

#### Formulaire de contact héros :
- Titre : "Nous vous rappelons !"
- Champs : Nom et prénom*, Téléphone*, Meilleur moment (select avec options Matin/Après-midi/Soir)
- Bouton : "Demander un rappel" → redirige vers /contact
- Style : Carte blanche semi-transparente avec ombre, coins arrondis

#### Sections supplémentaires page d'accueil :
1. **Statistiques** (fond blanc) : 150+ projets, 15 ans d'expérience, 98% clients satisfaits, 5 départements
2. **Pourquoi nous choisir** (fond gris clair) : 4 cartes avec icônes (Expertise, Réactivité, Garantie, Satisfaction)
3. **Nos services** : 6 services en paragraphes alternés image/texte
4. **Calculateur devis** : Formulaire interactif basique (type projet, surface, pièces)
5. **Engagements** : Devis 48h, intervention rapide, garantie décennale, suivi personnalisé
6. **Témoignages** : 3 avis clients avec noms et villes

### Pages Services (60vh - héros plus petit)
Structure identique pour les 6 services :
- **Peinture & finitions** (/services/peinture-finitions)
- **Pose de sol** (/services/pose-de-sol)  
- **Plâtrerie & placo** (/services/platrerie-placo)
- **Électricité & plomberie** (/services/electricite-plomberie)
- **Isolation intérieure** (/services/isolation-interieure)
- **Maçonnerie légère** (/services/maconnerie-legere)

**Layout pages services** :
- Héros 60vh avec image spécifique, titre service, sous-titre, CTA devis
- Texte centré verticalement et horizontalement dans le héros
- Contenu détaillé : techniques, matériaux, processus, normes
- Grilles de cards pour présenter les différentes options
- CTA final vers contact

### Page Réalisations (/realisations)
- Héros 60vh standard
- **Galerie responsive** : Grille d'images avec titres et localisations
- **Composant avant/après** : Slider horizontal révélant deux images superposées (pas de zoom, juste révélation gauche/droite avec curseur)
- Chiffres clés : années d'expérience, projets, chantiers sinistres, satisfaction
- CTA final devis

### Page À propos (/about)  
- Héros 60vh standard
- Mission, valeurs (3 colonnes : Proximité, Excellence, Confiance)
- Équipe (4 membres avec photos rondes placeholder)
- Assurances et certifications
- CTA devis

### Page Contact (/contact)
- Pas de héros, directement contenu
- Layout 2 colonnes desktop : Formulaire contact / Coordonnées + carte
- **Formulaire complet** : nom, email, téléphone, type projet, message, validation
- Coordonnées : tél 06 04 00 74 99, email contact@g-travaux.fr, adresse Strasbourg
- Carte Google Maps intégrée
- FAQ section en bas (4 questions/réponses)

## 🎨 2. DESIGN & ESTHÉTIQUE

### Palette couleurs harmonieuse (bleu pétrole + orange)
- **Primaire** : #163B4D (bleu pétrole foncé)
- **Nuances bleu** : #0F2C3A (très foncé), #1E4B60, #275E77, #3A6F84, #5B8CA2
- **Accent/Success** : #A65816 (orange), #D88A3D, #B7671B
- **Neutres** : #0F2C3A (texte foncé), #F1F5F9 (gris clair fond), blanc #FFFFFF
- **Éviter** : tons criards, couleurs saturées non harmonieuses

### Typographie élégante
- **Police titres ET texte** : Raleway (unique police, différents graisses)
- **Titres** : Raleway 600-800 (semi-bold à black), MAJUSCULES avec espacement lettres
- **Texte courant** : Raleway 400-500 (regular à medium)
- **Tailles responsives** : Mobile 2xl-3xl, Desktop 4xl-6xl pour H1

### Espacements & proportions
- Sections : padding 16 (4rem) desktop, 12 (3rem) mobile
- Container max-width centré avec padding horizontal 4 (1rem)
- Grilles : gap-8 desktop, gap-6 mobile
- Cards : padding 6 (1.5rem), border radius 8px, ombres légères au hover

### Éléments visuels
- **Cartes** : fond blanc, bordures grises légères, ombres au hover
- **Boutons primaires** : orange/accent, coins arrondis, effet hover scale 105%
- **Boutons secondaires** : bordure bleu, fond transparent, hover inversé
- **Images** : coins arrondis, ratios stables, formats WebP/AVIF optimisés

## 🧭 3. NAVIGATION & COHÉRENCE

### Header sticky (fixe en haut)
- **Logo** : "G.TRAVAUX" (texte blanc, gras, tracking large)
- **Menu horizontal** : Accueil, Services (dropdown), Réalisations, À propos, Contact
- **Dropdown Services** : 6 sous-pages listées avec animations fluides
- **Zone droite** : 
  - Téléphone urgence avec style orange pulsant : "URGENCE 24h/24 - 06 04 00 74 99"
  - Bouton "Devis gratuit" orange
- **Version mobile** : Menu hamburger, overlay complet

### Footer complet
- **4 colonnes** (responsive → empilées mobile) :
  1. Coordonnées : logo, adresse, téléphone, email avec icônes
  2. Navigation : liens principales pages
  3. Aides : mentions légales (à venir), confidentialité, cookies
  4. Infos : zones intervention, SIRET, assurances, certifications, copyright

### Navigation fluide
- Scroll smooth entre sections
- Préchargement pages (prefetch links)
- Transitions douces entre pages
- Focus visible pour accessibilité
- États hover cohérents

## ⚙️ 4. FONCTIONNALITÉS TECHNIQUES

### Formulaires fonctionnels avec validation
- **Champs obligatoires** marqués * avec validation visuelle
- **Messages d'erreur** en rouge, succès en vert
- **Validation email** et téléphone format français
- **Retour visuel** : loading states, confirmation envoi
- **Action formulaires** : redirection vers page confirmation ou message toast

### Galerie réalisations responsive
- **Grille adaptative** : 3 colonnes desktop, 2 tablette, 1 mobile
- **Images proportionnées** : ratio 4:3 ou 16:9 stable
- **Hover effects** : overlay avec titre/localisation
- **Lazy loading** : chargement progressif images

### Slider avant/après interactif
- **Deux images superposées** identiques dimensions
- **Curseur horizontal** : révèle image "après" par glissement gauche/droite
- **Pas de zoom** : seulement révélation par masque
- **Accessible** : utilisable clavier et écran tactile
- **Control visuel** : handle central visible, étiquettes "Avant"/"Après"

### Optimisations SEO essentielles
- **Balises title** spécifiques par page avec pattern "Page | G.TRAVAUX"
- **Meta descriptions** uniques et accrocheuses par page
- **Balises H1-H6** structure hiérarchique correcte
- **Images alt** descriptifs précis
- **Open Graph** : title, description, image pour partages sociaux
- **Schema.org** : LocalBusiness, Service, FAQ selon pages
- **Sitemap XML** et robots.txt
- **URL canoniques** et structure claire

### Performances optimisées
- **Images** : formats modernes WebP/AVIF avec fallback
- **Compression** : code CSS/JS minifié
- **Cache** : headers appropriés pour assets statiques
- **Fonts** : Google Fonts avec display:swap, préchargement
- **Lazy loading** : images et vidéos hors viewport initial
- **Score Lighthouse** : >90 Performance, Accessibility, SEO

## 📱 5. RESPONSIVE DESIGN

### Breakpoints principaux
- **Mobile** : 320px-767px (éléments empilés)
- **Tablette** : 768px-1023px (colonnes réduites)
- **Desktop** : 1024px+ (layout complet colonnes)

### Adaptations mobile critiques
- **Héros homepage** : 
  - Texte centré au lieu d'aligné gauche
  - Formulaire sous le texte au lieu de côte à côte
  - Tailles police réduites mais lisibles
- **Menu navigation** : hamburger complet avec overlay
- **Grilles** : 3→1 colonnes services, 4→2→1 équipe
- **Images** : ratios stables, éviter débordements
- **Boutons** : tailles tactiles minimum 44px, espacements suffisants

### Tests compatibilité
- **Navigateurs** : Chrome, Firefox, Safari, Edge
- **Mobiles** : iOS Safari, Chrome Android
- **Largeurs** : 320px (iPhone SE) à 1920px+ (grands écrans)
- **Orientations** : portrait et paysage

## 🔧 6. ACCESSIBILITÉ DE BASE

### Contrastes suffisants
- **Texte sur fond** : ratio minimum 4.5:1
- **Texte blanc sur bleu pétrole** : validé
- **Texte bleu sur fond blanc** : validé
- **États focus** : bordures visibles, couleurs contrastées

### Navigation clavier
- **Tab order** : logique et prévisible
- **Focus visible** : outlines bleus sur éléments interactifs
- **Skip links** : "Aller au contenu" masqué sauf focus
- **Dropdown** : flèches clavier, Echap fermeture

### Balises sémantiques
- **Structure** : header, nav, main, section, footer
- **Titres** : hiérarchie H1-H6 logique
- **Formulaires** : labels associés, fieldsets si groupes
- **Images** : alt descriptifs, decoratives alt=""
- **Liens** : texte explicite, aria-label si contexte insuffisant

## 🎯 RÉSULTAT ATTENDU

Un site web professionnel reproduisant fidèlement :
- **Visuellement** : couleurs bleu pétrole/orange, typographie Raleway, espacements harmonieux
- **Structurellement** : navigation claire, sections bien définies, formulaires fonctionnels  
- **Techniquement** : responsive parfait, performances optimisées, SEO complet
- **Fonctionnellement** : slider avant/après fluide, galerie responsive, formulaires validés

Le site doit transmettre professionnalisme et confiance pour une entreprise de rénovation haut de gamme, avec des call-to-actions clairs pour générer des demandes de devis.

---

**Note importante** : Ce prompt contient toutes les spécifications pour recréer intégralement le site G.TRAVAUX avec un outil de création no-code ou IA, sans nécessiter de connaissances techniques du code source original.