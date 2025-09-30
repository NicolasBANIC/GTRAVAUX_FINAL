import Link from 'next/link';
import ClientMotionDiv from './ClientMotionDiv';

interface ServiceParagraphServerProps {
  title: string;
  description: string;
  href: string;
  imagePosition: 'left' | 'right';
  imageSrc?: string;
}

/**
 * Service Paragraph Component - Version Server
 * Migration d'un composant Client vers Server pour améliorer les performances
 * Structure statique avec animations déportées vers ClientMotionDiv
 */
export default function ServiceParagraph({
  title,
  description,
  href,
  imagePosition,
  imageSrc,
}: ServiceParagraphServerProps) {
  // Génération automatique du chemin d'image si non fourni
  const defaultImageSrc = imageSrc || `/images/${href.split('/').pop()}.png`;
  
  return (
    <div className="mb-16 last:mb-0">
      <div
        className={`grid grid-cols-1 items-center gap-12 lg:grid-cols-2 ${
          imagePosition === 'right' ? '' : 'lg:grid-flow-col-dense'
        }`}
      >
        {/* Contenu textuel */}
        <ClientMotionDiv 
          className={imagePosition === 'left' ? 'lg:col-start-2' : ''}
        >
          <div className="space-y-6">
            <h3 className="text-3xl font-bold leading-tight text-primary">
              {title}
            </h3>
            
            <p className="text-lg leading-relaxed text-darkGray">
              {description}
            </p>
            
            <div className="pt-2">
              <Link
                href={href}
                className="button-primary group inline-flex items-center"
              >
                <span>En savoir plus</span>
                <svg 
                  className="ml-2 size-5 transition-transform group-hover:translate-x-1" 
                  fill="currentColor" 
                  viewBox="0 0 20 20"
                  aria-hidden="true"
                >
                  <path 
                    fillRule="evenodd" 
                    d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" 
                    clipRule="evenodd" 
                  />
                </svg>
              </Link>
            </div>

            {/* Indicateurs de confiance */}
            <div className="flex items-center space-x-6 border-t border-gray-100 pt-4">
              <div className="flex items-center space-x-2">
                <svg className="text-success-500 size-5" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                </svg>
                <span className="text-sm text-darkGray">Devis gratuit</span>
              </div>
              <div className="flex items-center space-x-2">
                <svg className="text-success-500 size-5" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M6.267 3.455a3.066 3.066 0 001.745-.723 3.066 3.066 0 013.976 0 3.066 3.066 0 001.745.723 3.066 3.066 0 012.812 2.812c.051.643.304 1.254.723 1.745a3.066 3.066 0 010 3.976 3.066 3.066 0 00-.723 1.745 3.066 3.066 0 01-2.812 2.812 3.066 3.066 0 00-1.745.723 3.066 3.066 0 01-3.976 0 3.066 3.066 0 00-1.745-.723 3.066 3.066 0 01-2.812-2.812 3.066 3.066 0 00-.723-1.745 3.066 3.066 0 010-3.976 3.066 3.066 0 00.723-1.745 3.066 3.066 0 012.812-2.812zm7.44 5.252a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                </svg>
                <span className="text-sm text-darkGray">Garantie décennale</span>
              </div>
            </div>
          </div>
        </ClientMotionDiv>

        {/* Image */}
        <ClientMotionDiv 
          className={imagePosition === 'left' ? 'lg:col-start-1' : ''}
          delay={0.2}
        >
          <div className="relative">
            <div className="relative overflow-hidden rounded-xl shadow-xl">
              {/* Using standard img tag to avoid server-side rendering issues */}
              <img
                src={defaultImageSrc}
                alt={`Service ${title} – illustration chantier`}
                className="h-auto w-full transition-transform duration-300 hover:scale-105"
                loading="lazy"
              />
              
              {/* Overlay avec icône de service */}
              <div className="absolute inset-0 flex items-end bg-gradient-to-t from-primary/20 to-transparent opacity-0 transition-opacity duration-300 hover:opacity-100">
                <div className="p-6">
                  <div className="flex size-12 items-center justify-center rounded-full bg-white/90 backdrop-blur-sm">
                    <svg className="size-6 text-primary" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M11.49 3.17c-.38-1.56-2.6-1.56-2.98 0a1.532 1.532 0 01-2.286.948c-1.372-.836-2.942.734-2.106 2.106.54.886.061 2.042-.947 2.287-1.561.379-1.561 2.6 0 2.978a1.532 1.532 0 01.947 2.287c-.836 1.372.734 2.942 2.106 2.106a1.532 1.532 0 012.287.947c.379 1.561 2.6 1.561 2.978 0a1.533 1.533 0 012.287-.947c1.372.836 2.942-.734 2.106-2.106a1.533 1.533 0 01.947-2.287c1.561-.379 1.561-2.6 0-2.978a1.532 1.532 0 01-.947-2.287c.836-1.372-.734-2.942-2.106-2.106a1.532 1.532 0 01-2.287-.947zM10 13a3 3 0 100-6 3 3 0 000 6z" clipRule="evenodd" />
                    </svg>
                  </div>
                </div>
              </div>
            </div>
            
            {/* Badge de qualité */}
            <div className="bg-accent-500 absolute -right-4 -top-4 rounded-full px-3 py-2 text-xs font-bold text-white shadow-lg">
              Premium
            </div>
          </div>
        </ClientMotionDiv>
      </div>
    </div>
  );
}