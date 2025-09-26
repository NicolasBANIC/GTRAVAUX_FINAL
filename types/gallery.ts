// Types pour les composants de galerie et d'images
export interface GalleryItem {
  src: string;
  title: string;
  location?: string;
  category?: string;
  description?: string;
  date?: string;
  tags?: string[];
}

export interface GalleryGridProps {
  items: GalleryItem[];
  columns?: number;
  masonry?: boolean;
  className?: string;
}

export interface InteractiveGalleryProps {
  items?: GalleryItem[];
  showCategories?: boolean;
  defaultCategory?: string;
}

export interface ImageGalleryProps {
  images: Array<{
    src: string;
    alt: string;
    title?: string;
    description?: string;
  }>;
  columns?: number;
  masonry?: boolean;
  showLightbox?: boolean;
  className?: string;
}

export interface BeforeAfterSliderProps {
  beforeSrc: string;
  afterSrc: string;
  alt?: string;
  className?: string;
}

export interface OptimizedImageProps {
  src: string;
  alt: string;
  width?: number;
  height?: number;
  fill?: boolean;
  priority?: boolean;
  quality?: number;
  sizes?: string;
  className?: string;
  placeholder?: 'blur' | 'empty';
  blurDataURL?: string;
  onLoad?: () => void;
  onError?: () => void;
}

// États pour la gestion des images
export interface ImageState {
  loading: Set<number>;
  errors: Set<number>;
  loaded: Set<number>;
}

export type ImageStateAction = 
  | { type: 'LOADING_START'; index: number }
  | { type: 'LOADING_END'; index: number }
  | { type: 'ERROR'; index: number }
  | { type: 'LOADED'; index: number }
  | { type: 'RESET' };

// Types pour les catégories de galerie
export interface GalleryCategory {
  key: string;
  label: string;
  count?: number;
}

export interface GalleryCategoryFilter {
  categories: GalleryCategory[];
  activeCategory: string;
  onCategoryChange: (category: string) => void;
}