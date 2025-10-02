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
        url: '/images/placeholder/home-hero.jpg',
        width: 1200,
        height: 630,
        alt: 'G.TRAVAUX',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'G.TRAVAUX',
    description: 'Rénovation haut de gamme & après sinistre',
    images: ['/images/placeholder/home-hero.jpg'],
  },
};

export default function RootLayout({ children }: { children: ReactNode }) {
  // JSON-LD for LocalBusiness schema
  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'LocalBusiness',
    name: 'G.TRAVAUX',
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
    areaServed: 'FR',
    priceRange: '$$',
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
