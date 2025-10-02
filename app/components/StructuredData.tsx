/**
 * Composant pour injecter des données structurées JSON-LD
 * Optimisé pour le SEO et la visibilité dans les moteurs de recherche
 */

interface BreadcrumbItem {
  name: string;
  url: string;
}

interface StructuredDataProps {
  type: 'WebSite' | 'BreadcrumbList' | 'FAQPage' | 'Service';
  data?: Record<string, unknown>;
  breadcrumbs?: BreadcrumbItem[];
  faqItems?: Array<{ question: string; answer: string }>;
  serviceName?: string;
  serviceDescription?: string;
}

export default function StructuredData({
  type,
  data,
  breadcrumbs,
  faqItems,
  serviceName,
  serviceDescription,
}: StructuredDataProps) {
  let jsonLd: Record<string, unknown> = {};

  switch (type) {
    case 'WebSite':
      jsonLd = {
        '@context': 'https://schema.org',
        '@type': 'WebSite',
        '@id': 'https://g-travaux.fr/#website',
        url: 'https://g-travaux.fr',
        name: 'G.TRAVAUX',
        description:
          'Entreprise de rénovation haut de gamme & après sinistre à Strasbourg',
        publisher: {
          '@id': 'https://g-travaux.fr/#business',
        },
        potentialAction: {
          '@type': 'SearchAction',
          target: {
            '@type': 'EntryPoint',
            urlTemplate: 'https://g-travaux.fr/services?q={search_term_string}',
          },
          'query-input': 'required name=search_term_string',
        },
      };
      break;

    case 'BreadcrumbList':
      if (breadcrumbs && breadcrumbs.length > 0) {
        jsonLd = {
          '@context': 'https://schema.org',
          '@type': 'BreadcrumbList',
          itemListElement: breadcrumbs.map((item, index) => ({
            '@type': 'ListItem',
            position: index + 1,
            name: item.name,
            item: item.url,
          })),
        };
      }
      break;

    case 'FAQPage':
      if (faqItems && faqItems.length > 0) {
        jsonLd = {
          '@context': 'https://schema.org',
          '@type': 'FAQPage',
          mainEntity: faqItems.map((item) => ({
            '@type': 'Question',
            name: item.question,
            acceptedAnswer: {
              '@type': 'Answer',
              text: item.answer,
            },
          })),
        };
      }
      break;

    case 'Service':
      if (serviceName && serviceDescription) {
        jsonLd = {
          '@context': 'https://schema.org',
          '@type': 'Service',
          serviceType: serviceName,
          name: serviceName,
          description: serviceDescription,
          provider: {
            '@type': 'LocalBusiness',
            '@id': 'https://g-travaux.fr/#business',
            name: 'G.TRAVAUX',
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
          brand: {
            '@type': 'Brand',
            name: 'G.TRAVAUX',
          },
        };
      }
      break;

    default:
      if (data) {
        jsonLd = data;
      }
  }

  if (Object.keys(jsonLd).length === 0) {
    return null;
  }

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
    />
  );
}