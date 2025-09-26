// Types pour les données structurées JSON-LD
export interface LocalBusiness {
  '@context': 'https://schema.org';
  '@type': 'LocalBusiness' | 'HomeAndConstructionBusiness' | 'GeneralContractor';
  name: string;
  image?: string[];
  '@id'?: string;
  url?: string;
  telephone?: string;
  email?: string;
  address?: PostalAddress;
  geo?: GeoCoordinates;
  openingHoursSpecification?: OpeningHoursSpecification[];
  sameAs?: string[];
  aggregateRating?: AggregateRating;
  priceRange?: string;
  areaServed?: Place | string[];
  paymentAccepted?: string[];
  currenciesAccepted?: string;
  description?: string;
  knowsAbout?: string[];
  hasOfferCatalog?: OfferCatalog;
}

export interface PostalAddress {
  '@type': 'PostalAddress';
  streetAddress?: string;
  addressLocality: string;
  addressRegion?: string;
  postalCode?: string;
  addressCountry: string;
}

export interface GeoCoordinates {
  '@type': 'GeoCoordinates';
  latitude: number;
  longitude: number;
}

export interface OpeningHoursSpecification {
  '@type': 'OpeningHoursSpecification';
  dayOfWeek: string | string[];
  opens: string;
  closes: string;
  validFrom?: string;
  validThrough?: string;
}

export interface AggregateRating {
  '@type': 'AggregateRating';
  ratingValue: number;
  reviewCount: number;
  bestRating?: number;
  worstRating?: number;
}

export interface Place {
  '@type': 'Place';
  name: string;
}

export interface OfferCatalog {
  '@type': 'OfferCatalog';
  name: string;
  itemListElement: Service[];
}

export interface Service {
  '@type': 'Service';
  name: string;
  description?: string;
  serviceType?: string;
  areaServed?: Place | string[];
  provider?: LocalBusiness;
}

// Types pour les articles de blog
export interface Article {
  '@context': 'https://schema.org';
  '@type': 'Article' | 'BlogPosting' | 'NewsArticle';
  headline: string;
  description: string;
  image?: string | string[];
  author: Person | Organization;
  publisher: Organization;
  datePublished: string;
  dateModified?: string;
  mainEntityOfPage?: string;
  url?: string;
  wordCount?: number;
  keywords?: string | string[];
  articleSection?: string;
  articleBody?: string;
}

export interface Person {
  '@type': 'Person';
  name: string;
  url?: string;
  image?: string;
}

export interface Organization {
  '@type': 'Organization';
  name: string;
  logo?: ImageObject;
  url?: string;
  sameAs?: string[];
}

export interface ImageObject {
  '@type': 'ImageObject';
  url: string;
  width?: number;
  height?: number;
}

// Types pour les FAQ
export interface FAQPage {
  '@context': 'https://schema.org';
  '@type': 'FAQPage';
  mainEntity: Question[];
}

export interface Question {
  '@type': 'Question';
  name: string;
  acceptedAnswer: Answer;
}

export interface Answer {
  '@type': 'Answer';
  text: string;
}