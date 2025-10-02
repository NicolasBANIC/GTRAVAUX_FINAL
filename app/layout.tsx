import './globals.css';
import Header from './components/Header';
import Footer from './components/Footer';
import StickyCta from './components/StickyCta';
import BackgroundGradients from './components/BackgroundGradients';
import LiveChat from './components/LiveChat';
import { ReactNode } from 'react';
import { Raleway } from 'next/font/google';

// Import Raleway via Next.js font API (aligné avec ATB)
const raleway = Raleway({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-raleway',
});

export const metadata = {
  title: {
    default: 'G.TRAVAUX | Rénovation haut de gamme & après sinistre',
    template: '%s | G.TRAVAUX',
  },
  description:
    'Entreprise basée à Strasbourg — interventions dans toute la France. Rénovation haut de gamme & après sinistre, interventions rapides et finitions d’excellence.',
  metadataBase: new URL('https://g-travaux.fr'),
  alternates: {
    canonical: 'https://g-travaux.fr',
    languages: {
      'fr-FR': 'https://g-travaux.fr',
    },
  },
  openGraph: {
    type: 'website',
    locale: 'fr_FR',
    url: 'https://g-travaux.fr',
    siteName: 'G.TRAVAUX',
    title: 'Rénovation haut de gamme & après sinistre',
    description:
      'Interventions rapides, finitions d’excellence, accompagnement assurance.',
    images: [
      {
        url: '/images/placeholder/home-hero.webp',
        width: 1200,
        height: 630,
        alt: 'G.TRAVAUX - Entreprise de rénovation à Strasbourg',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'G.TRAVAUX | Rénovation haut de gamme',
    description: 'Rénovation haut de gamme & après sinistre - Strasbourg et toute la France',
    images: ['/images/placeholder/home-hero.webp'],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  verification: {
    // À compléter avec les codes de vérification Google Search Console, Bing, etc.
  },
};

export default function RootLayout({ children }: { children: ReactNode }) {
  // JSON-LD for LocalBusiness schema (enrichi pour SEO)
  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'LocalBusiness',
    '@id': 'https://g-travaux.fr/#business',
    name: 'G.TRAVAUX',
    legalName: 'G.TRAVAUX',
    description:
      'Entreprise de rénovation haut de gamme & après sinistre, basée à Strasbourg. Interventions dans toute la France.',
    url: 'https://g-travaux.fr',
    telephone: '+33367102653',
    email: 'contact@g-travaux.fr',
    address: {
      '@type': 'PostalAddress',
      streetAddress: '3 Rue du Vingt-Deux Novembre',
      addressLocality: 'Strasbourg',
      postalCode: '67000',
      addressCountry: 'FR',
    },
    geo: {
      '@type': 'GeoCoordinates',
      latitude: 48.5734,
      longitude: 7.7521,
    },
    areaServed: [
      {
        '@type': 'City',
        name: 'Strasbourg',
      },
      {
        '@type': 'City',
        name: 'Colmar',
      },
      {
        '@type': 'City',
        name: 'Mulhouse',
      },
      {
        '@type': 'State',
        name: 'Grand Est',
      },
      {
        '@type': 'Country',
        name: 'France',
      },
    ],
    priceRange: '$$',
    openingHoursSpecification: [
      {
        '@type': 'OpeningHoursSpecification',
        dayOfWeek: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday'],
        opens: '08:00',
        closes: '18:00',
      },
    ],
    sameAs: [
      // À compléter avec les réseaux sociaux si disponibles
    ],
  };
  return (
    <html lang="fr">
      <head>
        {/* Inject structured data for SEO */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className={`${raleway.variable} relative font-sans`}>
        <a
          href="#main"
          className="sr-only rounded bg-white px-4 py-2 text-darkGray shadow focus:not-sr-only focus:fixed focus:left-2 focus:top-2"
        >
          Aller au contenu
        </a>
        <BackgroundGradients />
        <Header />
        {/* Main content without padding-top - header and hero are now flush */}
        <main id="main" className="mt-0 min-h-screen pt-0">
          {children}
        </main>
        <Footer />
        <StickyCta />
        <LiveChat />
      </body>
    </html>
  );
}
