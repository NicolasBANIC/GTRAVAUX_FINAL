// Types pour les métadonnées Next.js

// Types pour les métadonnées Next.js spécifiques au projet
export interface PageMetadata {
  title: string;
  description: string;
  keywords?: string | string[];
  metadataBase?: URL;
  openGraph?: {
    title?: string;
    description?: string;
    url?: string | URL;
    siteName?: string;
    images?: Array<{
      url: string | URL;
      width?: number;
      height?: number;
      alt?: string;
    }>;
    type?: 'website' | 'article';
    locale?: string;
  };
}

// Types pour les services de l'entreprise
export interface ServiceMetadata {
  title: string;
  description: string;
  service: string;
  keywords: string[];
  location?: string;
}

// Types pour le SEO local
export interface LocalSEOData {
  businessName?: string;
  address?: string;
  city?: string;
  postalCode?: string;
  phone?: string;
  email?: string;
  website?: string;
  openingHours?: string[];
}