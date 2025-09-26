import { getStaticReviews } from '../../lib/staticData';
import ClientMotionDiv from './ClientMotionDiv';

/**
 * Google Reviews Component - Version Server
 * Migration d'un composant Client vers Server pour améliorer les performances
 * Récupère les données côté serveur et utilise ClientMotionDiv pour les animations
 */
export default async function GoogleReviews() {
  const reviews = await getStaticReviews();
  
  // Calculer les statistiques des avis
  const totalReviews = reviews.length;
  const averageRating = reviews.reduce((sum, review) => sum + review.rating, 0) / totalReviews;
  
  return (
    <div className="mx-auto max-w-6xl">
      {/* Header avec statistiques */}
      <ClientMotionDiv>
        <div className="mb-12 text-center">
          <div className="mb-6 flex items-center justify-center space-x-1">
            {[...Array(5)].map((_, i) => (
              <span 
                key={i} 
                className={`text-3xl ${i < Math.floor(averageRating) ? 'text-yellow-400' : 'text-gray-300'}`}
              >
                ★
              </span>
            ))}
          </div>
          <div className="space-y-2">
            <p className="text-2xl font-bold text-primary">
              {averageRating.toFixed(1)}/5
            </p>
            <p className="text-darkGray">
              Basé sur <span className="font-bold">{totalReviews} avis</span> clients vérifiés
            </p>
            <div className="flex items-center justify-center space-x-2 mt-4">
              <svg className="w-6 h-6" viewBox="0 0 24 24">
                <path 
                  fill="#4285f4" 
                  d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"
                />
                <path 
                  fill="#34a853" 
                  d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"
                />
                <path 
                  fill="#fbbc05" 
                  d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z"
                />
                <path 
                  fill="#ea4335" 
                  d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"
                />
              </svg>
              <span className="text-sm font-medium text-darkGray">Avis Google</span>
            </div>
          </div>
        </div>
      </ClientMotionDiv>

      {/* Grille des avis */}
      <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
        {reviews.map((review, index) => (
          <ClientMotionDiv 
            key={review.id}
            delay={index * 0.1}
          >
            <div className="h-full rounded-lg border border-gray-200 bg-white p-6 shadow-sm hover:shadow-md transition-shadow">
              {/* Header de l'avis */}
              <div className="mb-4 flex items-start justify-between">
                <div className="flex-1">
                  <div className="font-semibold text-primary">{review.name}</div>
                  {review.location && (
                    <div className="text-sm text-gray-500">{review.location}</div>
                  )}
                </div>
                <div className="flex space-x-1 ml-2">
                  {[...Array(5)].map((_, i) => (
                    <span 
                      key={i}
                      className={`text-sm ${i < review.rating ? 'text-yellow-400' : 'text-gray-300'}`}
                    >
                      ★
                    </span>
                  ))}
                </div>
              </div>

              {/* Contenu de l'avis */}
              <p className="text-sm text-darkGray leading-relaxed mb-4">
                {review.text}
              </p>

              {/* Date */}
              <div className="text-xs text-gray-400 border-t border-gray-100 pt-3">
                {new Date(review.date).toLocaleDateString('fr-FR', {
                  year: 'numeric',
                  month: 'long',
                  day: 'numeric'
                })}
              </div>
            </div>
          </ClientMotionDiv>
        ))}
      </div>

      {/* Call to action */}
      <ClientMotionDiv delay={0.5}>
        <div className="mt-12 text-center">
          <p className="text-darkGray mb-4">
            Rejoignez nos clients satisfaits
          </p>
          <a
            href="https://g.page/r/your-google-business-url/review"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center space-x-2 button-primary"
          >
            <svg className="w-5 h-5" viewBox="0 0 24 24">
              <path 
                fill="currentColor" 
                d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"
              />
            </svg>
            <span>Laisser un avis</span>
          </a>
        </div>
      </ClientMotionDiv>
    </div>
  );
}