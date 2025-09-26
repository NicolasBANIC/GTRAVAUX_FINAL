// Types pour les composants de layout

// Types pour le composant Hero
export interface HeroCta {
  label: string;
  href: string;
}

export interface HeroProps {
  title: string;
  subtitle: string;
  imageSrc?: string;
  videoSrc?: string;
  cta?: HeroCta;
  secondaryCta?: HeroCta;
  showForm?: boolean;
  formComponent?: React.ReactNode;
  fullScreen?: boolean;
}

// Types pour le composant Header
export interface NavigationItem {
  label: string;
  href: string;
  external?: boolean;
}

export interface HeaderProps {
  navigation?: NavigationItem[];
  showMobileMenu?: boolean;
  className?: string;
}

// Types pour le composant Footer
export interface FooterSection {
  title: string;
  links: NavigationItem[];
}

export interface FooterContact {
  phone?: string;
  email?: string;
  address?: string;
}

export interface FooterProps {
  sections?: FooterSection[];
  contact?: FooterContact;
  socialLinks?: NavigationItem[];
  showLegalLinks?: boolean;
  className?: string;
}

// Types pour les composants de card de service
export interface ServiceFeature {
  title: string;
  description: string;
  icon?: string;
}

export interface ServiceCardProps {
  title: string;
  description: string;
  features?: ServiceFeature[];
  price?: string;
  duration?: string;
  imageSrc?: string;
  ctaLabel?: string;
  ctaHref?: string;
  featured?: boolean;
  className?: string;
}

// Types pour les composants de témoignage
export interface Testimonial {
  id: string;
  name: string;
  title?: string;
  company?: string;
  content: string;
  rating?: number;
  avatarSrc?: string;
  date?: string;
  location?: string;
}

export interface TestimonialCardProps {
  testimonial: Testimonial;
  showRating?: boolean;
  showDate?: boolean;
  className?: string;
}

// Types pour les composants vidéo
export interface VideoProps {
  videoSrc: string;
  fallbackImage?: string;
  title: string;
  autoPlay?: boolean;
  muted?: boolean;
  loop?: boolean;
  controls?: boolean;
  className?: string;
}

// Types pour les composants statistiques
export interface StatItem {
  label: string;
  value: string | number;
  suffix?: string;
  prefix?: string;
}

export interface StatsProps {
  stats: StatItem[];
  title?: string;
  subtitle?: string;
  className?: string;
}

// Types pour les zones d'intervention
export interface InterventionZone {
  name: string;
  postalCode?: string;
  description?: string;
  travelTime?: string;
}

export interface InterventionZonesProps {
  zones: InterventionZone[];
  title?: string;
  subtitle?: string;
  showMap?: boolean;
  className?: string;
}