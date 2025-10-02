import { Metadata } from 'next';

interface LocalSEOProps {
  businessName?: string;
  address?: string;
  city?: string;
  postalCode?: string;
  phone?: string;
  email?: string;
  services?: string[];
  openingHours?: string[];
}

export function generateLocalSEOMetadata({
  businessName = 'G.TRAVAUX',
  address = 'Strasbourg, France',
  city = 'Strasbourg',
  postalCode = '67000',
  phone = '+33367102653',
  email = 'contact@g-travaux.fr',
  services = [
    'Rénovation complète',
    'Après sinistre',
    'Plomberie',
    'Électricité',
    'Peinture',
    'Isolation',
    'Plâtrerie',
    'Pose de sol',
  ],
  openingHours = ['Mo-Fr 08:00-18:00', 'Sa 09:00-17:00'],
}: LocalSEOProps = {}): Metadata {
  const structuredData = {
    '@context': 'https://schema.org',
    '@graph': [
      {
        '@type': 'LocalBusiness',
        '@id': 'https://g-travaux.fr/#business',
        name: businessName,
        image: 'https://g-travaux.fr/images/logo.png',
        telephone: phone,
        email: email,
        address: {
          '@type': 'PostalAddress',
          streetAddress: address,
          addressLocality: city,
          postalCode: postalCode,
          addressCountry: 'FR',
        },
        geo: {
          '@type': 'GeoCoordinates',
          latitude: 48.5734,
          longitude: 7.7521,
        },
        url: 'https://g-travaux.fr',
        sameAs: [
          'https://www.facebook.com/gtravaux',
          'https://www.instagram.com/gtravaux',
        ],
        openingHoursSpecification: openingHours.map(hours => {
          const [days, time] = hours.split(' ');
          const [open, close] = time.split('-');
          return {
            '@type': 'OpeningHoursSpecification',
            dayOfWeek: days.split('-').map(day => {
              const dayMap: { [key: string]: string } = {
                Mo: 'Monday',
                Tu: 'Tuesday',
                We: 'Wednesday',
                Th: 'Thursday',
                Fr: 'Friday',
                Sa: 'Saturday',
                Su: 'Sunday',
              };
              return dayMap[day] || day;
            }),
            opens: open,
            closes: close,
          };
        }),
        priceRange: '€€',
        areaServed: [
          {
            '@type': 'City',
            name: 'Strasbourg',
          },
          {
            '@type': 'City',
            name: 'Metz',
          },
          {
            '@type': 'City',
            name: 'Nancy',
          },
          {
            '@type': 'City',
            name: 'Mulhouse',
          },
          {
            '@type': 'City',
            name: 'Colmar',
          },
        ],
        hasOfferCatalog: {
          '@type': 'OfferCatalog',
          name: 'Services de rénovation',
          itemListElement: services.map(service => ({
            '@type': 'Offer',
            itemOffered: {
              '@type': 'Service',
              name: service,
              provider: {
                '@id': 'https://g-travaux.fr/#business',
              },
            },
          })),
        },
        knowsAbout: [
          'Rénovation énergétique',
          'Rénovation après sinistre',
          'Plâtrerie',
          'Peinture',
          'Électricité',
          'Plomberie',
          'Isolation intérieure',
          'Pose de sol',
          'Maçonnerie légère',
        ],
        hasCredential: ['RGE', 'QUALIBAT'],
        aggregateRating: {
          '@type': 'AggregateRating',
          ratingValue: '4.8',
          reviewCount: '127',
          bestRating: '5',
          worstRating: '1',
        },
      },
      {
        '@type': 'WebSite',
        '@id': 'https://g-travaux.fr/#website',
        url: 'https://g-travaux.fr',
        name: businessName,
        description:
          'Entreprise de rénovation et travaux après sinistre en Alsace-Lorraine',
        publisher: {
          '@id': 'https://g-travaux.fr/#business',
        },
        potentialAction: [
          {
            '@type': 'SearchAction',
            target: {
              '@type': 'EntryPoint',
              urlTemplate: 'https://g-travaux.fr/search?q={search_term_string}',
            },
            'query-input': 'required name=search_term_string',
          },
        ],
      },
      {
        '@type': 'Organization',
        '@id': 'https://g-travaux.fr/#organization',
        name: businessName,
        url: 'https://g-travaux.fr',
        logo: {
          '@type': 'ImageObject',
          url: 'https://g-travaux.fr/images/logo.png',
          width: 300,
          height: 100,
        },
        contactPoint: [
          {
            '@type': 'ContactPoint',
            telephone: phone,
            contactType: 'customer service',
            availableLanguage: 'French',
            areaServed: 'FR',
          },
          {
            '@type': 'ContactPoint',
            telephone: phone,
            contactType: 'emergency',
            availableLanguage: 'French',
            areaServed: 'FR',
            hoursAvailable: '24/7',
          },
        ],
        sameAs: [
          'https://www.facebook.com/gtravaux',
          'https://www.instagram.com/gtravaux',
        ],
      },
    ],
  };

  return {
    title: `${businessName} - Rénovation et Travaux après Sinistre | ${city}`,
    description: `Expert en rénovation complète et intervention après sinistre à ${city}. Devis gratuit, intervention rapide. Plomberie, électricité, peinture, isolation. ☎️ ${phone}`,
    keywords: [
      'rénovation Strasbourg',
      'travaux après sinistre',
      'plomberie urgence',
      'électricité Strasbourg',
      'peinture rénovation',
      'isolation intérieure',
      'entreprise travaux Alsace',
      'dégât des eaux',
      'rénovation complète',
      'artisan Strasbourg',
    ],
    authors: [{ name: businessName }],
    creator: businessName,
    publisher: businessName,
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
    openGraph: {
      type: 'website',
      locale: 'fr_FR',
      url: 'https://g-travaux.fr',
      siteName: businessName,
      title: `${businessName} - Rénovation et Travaux après Sinistre | ${city}`,
      description: `Expert en rénovation complète et intervention après sinistre à ${city}. Devis gratuit, intervention rapide.`,
      images: [
        {
          url: 'https://g-travaux.fr/images/og-image.jpg',
          width: 1200,
          height: 630,
          alt: `${businessName} - Rénovation ${city}`,
        },
      ],
    },
    twitter: {
      card: 'summary_large_image',
      title: `${businessName} - Rénovation ${city}`,
      description: `Expert en rénovation complète et intervention après sinistre à ${city}. Devis gratuit.`,
      images: ['https://g-travaux.fr/images/twitter-image.jpg'],
    },
    alternates: {
      canonical: 'https://g-travaux.fr',
    },
    other: {
      'application/ld+json': JSON.stringify(structuredData),
    },
  };
}

export default function LocalSEO(props: LocalSEOProps) {
  const structuredData = {
    '@context': 'https://schema.org',
    '@type': 'LocalBusiness',
    name: props.businessName || 'G.TRAVAUX',
    image: 'https://g-travaux.fr/images/logo.png',
    telephone: props.phone || '+33367102653',
    email: props.email || 'contact@g-travaux.fr',
    address: {
      '@type': 'PostalAddress',
      streetAddress: props.address || 'Strasbourg, France',
      addressLocality: props.city || 'Strasbourg',
      postalCode: props.postalCode || '67000',
      addressCountry: 'FR',
    },
    geo: {
      '@type': 'GeoCoordinates',
      latitude: 48.5734,
      longitude: 7.7521,
    },
    url: 'https://g-travaux.fr',
    areaServed: [
      'Strasbourg',
      'Metz',
      'Nancy',
      'Mulhouse',
      'Colmar',
      'Alsace',
      'Lorraine',
    ],
    hasOfferCatalog: {
      '@type': 'OfferCatalog',
      name: 'Services de rénovation',
      itemListElement: (
        props.services || [
          'Rénovation complète',
          'Après sinistre',
          'Plomberie',
          'Électricité',
          'Peinture',
          'Isolation',
        ]
      ).map(service => ({
        '@type': 'Offer',
        itemOffered: {
          '@type': 'Service',
          name: service,
        },
      })),
    },
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
    />
  );
}
