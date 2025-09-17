# G.TRAVAUX – Site vitrine de rénovation

Ce projet est une application web développée avec Next.js (App Router), TypeScript, Tailwind CSS et Framer Motion. Il s’agit du site vitrine fictif de l’entreprise **G.TRAVAUX**, spécialisée dans la rénovation générale et l’intervention après sinistre.

## 🚀 Démarrage rapide

Assurez‑vous d’avoir **Node.js >= 16** et **npm** installés sur votre machine.

1. **Installation des dépendances :**

   ```bash
   npm install
   ```

2. **Démarrer le serveur de développement :**

   ```bash
   npm run dev
   ```

   L’application sera accessible sur `http://localhost:3000`.

3. **Construction pour la production :**

   ```bash
   npm run build
   npm start
   ```

## 🧠 Fonctionnalités clés

- **Routing App Router :** toutes les pages sont définies dans le dossier `app/`. Un layout global gère l’en‑tête, le pied de page et un bouton d’appel d’urgence sticky.
- **Palette Tailwind personnalisée :** couleurs spécifiques de l’entreprise (orange vif, noir, blanc, gris, bleu acier, vert) définies dans `tailwind.config.js`【587334258926104†L1496-L1520】.
- **Animations :** intégration de Framer Motion pour les transitions douces, effets de reveal au scroll et survols magnétiques. Framer Motion est la bibliothèque de mouvements de production pour React【581120204960968†L149-L156】.
- **Pages complètes :**
  - **Accueil :** hero avec slogan et CTA, bloc « Pourquoi nous choisir ? », aperçu des services, témoignages, et rappel vers la FAQ.
  - **Services :** sept sous‑pages détaillant chaque prestation avec étapes et appels à l’action.
  - **Réalisations :** galerie responsive, comparateur avant/après, chiffres clés et CTA vers le devis.
  - **À propos :** histoire de la société, valeurs, équipe fictive, assurance et garanties légales.
  - **Contact / Devis :** formulaire complet avec validation et honeypot anti‑robots, coordonnées cliquables, carte Google Maps et FAQ intégrée.
- **Responsive et accessibilité :** design adaptatif, contraste suffisant, aria‑labels et navigation clavier.
- **SEO :** balises meta, structure sémantique, et place pour insérer des balises JSON‑LD.

## 🖼️ Images

Les images du projet sont stockées dans `public/images/placeholder/` et ont été générées par IA ou proviennent de banques d’images libres de droits. Elles illustrent des intérieurs modernes, des chantiers et des comparatifs avant/après sans représenter de personnes identifiables. Les membres de l’équipe utilisent un placeholder générique pour éviter de montrer des personnes réelles.

## 📁 Structure du projet

- `app/` – Contient les pages (`page.tsx`) et les composants utilisés par les différentes sections du site.
- `app/components/` – Composants réutilisables : Header, Footer, Hero, ServiceCard, TestimonialCard, BeforeAfterSlider, GalleryGrid, StatsSection, FaqItem, ContactForm et StickyCta.
- `app/services/` – Sous‑dossiers pour chaque service avec un contenu dédié.
- `public/images/placeholder/` – Images d’illustration.
- `tailwind.config.js` – Configuration Tailwind avec palette personnalisée étendue【587334258926104†L1496-L1520】.
- `next.config.js` – Configuration Next.js.
- `README.md` – Ce fichier.

## 🛫 Déploiement

Ce projet est prêt à être déployé sur [Vercel](https://vercel.com/) : il suffit d’importer le repository, de configurer le projet avec Node.js, et Vercel détectera automatiquement Next.js.

## 🙏 Remerciements

- [Tailwind CSS – Customizing colors](https://v3.tailwindcss.com/docs/customizing-colors) pour la configuration de la palette personnalisée【587334258926104†L1496-L1520】.
- [LogRocket – Advanced page transitions with Next.js and Framer Motion](https://blog.logrocket.com/advanced-page-transitions-next-js-framer-motion/) pour l’inspiration sur l’intégration de Framer Motion【581120204960968†L149-L156】.

---

© 2025 G.TRAVAUX. Ce site est un projet fictif à des fins démonstratives.