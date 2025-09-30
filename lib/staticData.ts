/**
 * Données statiques pour Server Components
 * Remplace les appels API client-side pour améliorer les performances
 */

export interface Review {
  id: number;
  name: string;
  rating: number;
  text: string;
  date: string;
  location?: string;
}

export interface CompanyStats {
  projectsCompleted: number;
  yearsExperience: number;
  satisfactionRate: number;
  coverageArea: number;
}

export interface Service {
  title: string;
  description: string;
  href: string;
  image?: string;
}

/**
 * Avis clients statiques - remplace le fetching client-side
 */
export async function getStaticReviews(): Promise<Review[]> {
  // Simulation d'un délai API minimal pour le développement
  await new Promise(resolve => setTimeout(resolve, 100));
  
  return [
    {
      id: 1,
      name: 'Marie D.',
      rating: 5,
      text: 'Service exceptionnel ! L\'équipe de G.TRAVAUX a rénové entièrement ma salle de bain après un dégât des eaux. Travail soigné, délais respectés et prix transparent.',
      date: '2024-01-15',
      location: 'Strasbourg'
    },
    {
      id: 2,
      name: 'Thomas B.',
      rating: 5,
      text: 'Intervention rapide et efficace pour des travaux de plomberie d\'urgence. Très professionnel, je recommande vivement.',
      date: '2024-01-10',
      location: 'Colmar'
    },
    {
      id: 3,
      name: 'Sophie L.',
      rating: 5,
      text: 'Rénovation complète de mon appartement. La projection 3D m\'a permis de visualiser le projet avant les travaux. Résultat parfait !',
      date: '2024-01-05',
      location: 'Mulhouse'
    },
    {
      id: 4,
      name: 'Pierre M.',
      rating: 4,
      text: 'Excellente prise en charge après sinistre incendie. L\'équipe a coordonné tous les corps de métier. Très satisfait.',
      date: '2023-12-20',
      location: 'Nancy'
    },
    {
      id: 5,
      name: 'Catherine R.',
      rating: 5,
      text: 'Pose de parquet et peinture dans toute la maison. Finitions impeccables et respect du budget initial.',
      date: '2023-12-15',
      location: 'Metz'
    },
    {
      id: 6,
      name: 'Lucas H.',
      rating: 5,
      text: 'Travaux d\'isolation et plâtrerie. Amélioration notable du confort thermique. Équipe ponctuelle et propre.',
      date: '2023-12-10',
      location: 'Strasbourg'
    }
  ];
}

/**
 * Statistiques de l'entreprise - calculées côté serveur
 */
export async function getCompanyStats(): Promise<CompanyStats> {
  // Ces données pourraient venir d'une base de données en production
  return {
    projectsCompleted: 150,
    yearsExperience: 15,
    satisfactionRate: 98,
    coverageArea: 5, // nombre de départements couverts
  };
}

/**
 * Liste des services - données statiques structurées
 */
export async function getServices(): Promise<Service[]> {
  const services = [
    {
      title: 'Démolition',
      description:
        'Curage complet, démolitions sélectives et tronçonnage technique sécurisé pour libérer vos volumes avant reconstruction.',
      href: '/services/demolition',
      image: '/images/demolition.png'
    },
    {
      title: 'Électricité',
      description:
        'Mise aux normes électriques, installations neuves et dépannages en toute sécurité. Nos électriciens qualifiés interviennent sur tous vos équipements électriques.',
      href: '/services/electricite',
      image: '/images/electricite.png'
    },
    {
      title: 'Plomberie',
      description:
        'Installation, réparation et maintenance de vos équipements de plomberie. Nos plombiers expérimentés assurent un service rapide et efficace.',
      href: '/services/plomberie',
      image: '/images/plomberie.webp'
    },
    {
      title: 'Isolation intérieure',
      description:
        'Améliorez votre confort thermique et acoustique grâce à des solutions performantes. Nous sélectionnons les matériaux isolants les plus adaptés à votre habitation.',
      href: '/services/isolation-interieure',
      image: '/images/isolation-interieure.png'
    },
    {
      title: 'Maçonnerie',
      description:
        "Création d'ouvertures, travaux de maçonnerie et réparations structurales. Nos maçons expérimentés interviennent pour tous vos projets de modification structurelle.",
      href: '/services/maconnerie',
      image: '/images/maconnerie-hero.png'
    },
    {
      title: 'Peinture & finitions',
      description:
        'Des finitions irréprochables pour des intérieurs éclatants et harmonieux. Notre équipe maîtrise toutes les techniques de peinture moderne, des préparations de support aux finitions les plus délicates.',
      href: '/services/peinture-finitions',
      image: '/images/peinture-finitions.webp'
    },
    {
      title: 'Plâtrerie & placo',
      description:
        "Réagencement intérieur, création de cloisons et finitions soignées. De la simple réparation à l'aménagement complet d'espaces, nous réalisons tous vos travaux de plâtrerie.",
      href: '/services/platrerie-placo',
      image: '/images/platrerie-placo.webp'
    },
    {
      title: 'Pose de sol',
      description:
        'Parquets, carrelage ou vinyle, nous posons le revêtement adapté à votre espace. Nos artisans spécialisés interviennent sur tous types de sols, en neuf comme en rénovation.',
      href: '/services/pose-de-sol',
      image: '/images/pose-de-sol.webp'
    },
    {
      title: 'Sanitaires',
      description:
        "Conception de salles d'eau, réseaux sanitaires complets et pose d'appareils haut rendement pour un confort durable.",
      href: '/services/sanitaires',
      image: '/images/sanitaires.jpg'
    }
  ];

  // Tri alphabétique français
  return services.sort((a, b) => 
    a.title.localeCompare(b.title, 'fr', { sensitivity: 'base' })
  );
}

/**
 * Zones d'intervention - données géographiques statiques
 */
export async function getInterventionZones() {
  return {
    primary: [
      { name: 'Strasbourg', postalCode: '67000', distance: '0 km' },
      { name: 'Schiltigheim', postalCode: '67300', distance: '5 km' },
      { name: 'Haguenau', postalCode: '67500', distance: '30 km' },
      { name: 'Saverne', postalCode: '67700', distance: '35 km' },
    ],
    secondary: [
      { name: 'Colmar', postalCode: '68000', distance: '70 km' },
      { name: 'Mulhouse', postalCode: '68100', distance: '110 km' },
      { name: 'Nancy', postalCode: '54000', distance: '150 km' },
      { name: 'Metz', postalCode: '57000', distance: '160 km' },
    ],
    coverage: 'Interventions dans toute la France sur devis personnalisé'
  };
}

/**
 * FAQ données - optimisées pour le SEO
 */
export async function getFAQData() {
  return [
    {
      question: 'Quels sont vos délais d\'intervention ?',
      answer: 'Nous proposons un diagnostic sous 48h et intervenons en urgence pour les sinistres. Pour les projets de rénovation, les délais dépendent de l\'ampleur des travaux mais nous respectons toujours les plannings convenus.'
    },
    {
      question: 'Êtes-vous assurés pour tous types de travaux ?',
      answer: 'Oui, nous disposons d\'une assurance décennale couvrant tous nos métiers : plomberie, électricité, peinture, isolation, plâtrerie et maçonnerie légère.'
    },
    {
      question: 'Proposez-vous des devis gratuits ?',
      answer: 'Tous nos devis sont gratuits et détaillés. Nous nous déplaçons pour évaluer vos travaux et vous proposons une estimation transparente sans engagement.'
    },
    {
      question: 'Intervenez-vous après sinistre ?',
      answer: 'Nous sommes spécialisés dans les interventions après sinistre (dégât des eaux, incendie, etc.) et pouvons vous accompagner dans vos démarches avec les assurances.'
    }
  ];
}