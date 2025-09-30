import Link from 'next/link';
import Image from 'next/image';

export const metadata = {
  title: 'Chantier Strasbourg après démolition | G.TRAVAUX',
  description: 'Découvrez le résultat de notre intervention après les travaux de démolition à Strasbourg. Structure apparente, poutres en bois, cloisons démolies et préparation pour les finitions.',
};

export default function ChantierStrasbourgApresDemolitionPage() {
  return (
    <div className="min-h-screen bg-white">
      {/* Header avec navigation */}
      <div className="border-b border-gray-200 bg-gray-50 py-8">
        <div className="container mx-auto px-4">
          <nav className="mb-4 text-sm text-gray-600">
            <Link href="/" className="hover:text-primary">
              Accueil
            </Link>
            <span className="mx-2">/</span>
            <Link href="/realisations" className="hover:text-primary">
              Réalisations
            </Link>
            <span className="mx-2">/</span>
            <span className="text-gray-900">Chantier Strasbourg après démolition</span>
          </nav>
          <h1 className="text-3xl font-bold text-gray-900 md:text-4xl">
            Chantier Strasbourg après démolition
          </h1>
        </div>
      </div>

      {/* Contenu principal */}
      <div className="container mx-auto px-4 py-12">
        <div className="mx-auto max-w-4xl">
          {/* Introduction */}
          <div className="mb-12">
            <p className="text-lg leading-relaxed text-gray-700">
              Ce projet présente le résultat de notre intervention après les travaux de démolition à Strasbourg. 
              Découvrez les différentes étapes de démolition avec la mise à nu de la structure en bois, 
              l'ouverture des espaces et la préparation minutieuse pour les finitions. Ces photos témoignent 
              de notre savoir-faire dans la démolition contrôlée et la préservation des éléments architecturaux.
            </p>
          </div>

          {/* Salon après démolition */}
          <div className="mb-12">
            <h2 className="mb-6 text-2xl font-bold text-gray-900">
              Salon après démolition
            </h2>
            <p className="mb-6 text-gray-600">
              Mise à nu de la structure en bois et ouverture de l'espace principal
            </p>
            <div className="grid gap-6 md:grid-cols-2">
              <div className="group relative overflow-hidden rounded-lg shadow-lg transition-all duration-300 hover:shadow-xl">
                <Image
                  src="/images/realisations/chantier-strasbourg-apres-demolition/salon-structure-apparente.jpg"
                  alt="Salon avec structure en bois apparente et murs décapés après démolition"
                  width={600}
                  height={400}
                  className="h-64 w-full object-cover transition-transform duration-300 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-black bg-opacity-0 transition-all duration-300 group-hover:bg-opacity-20"></div>
                <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-black/70 to-transparent p-4">
                  <p className="text-sm text-white">Structure en bois apparente et murs décapés</p>
                </div>
              </div>
              
              <div className="group relative overflow-hidden rounded-lg shadow-lg transition-all duration-300 hover:shadow-xl">
                <Image
                  src="/images/realisations/chantier-strasbourg-apres-demolition/salon-poutres-apparentes.jpg"
                  alt="Vue du salon avec poutres en bois apparentes au plafond"
                  width={600}
                  height={400}
                  className="h-64 w-full object-cover transition-transform duration-300 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-black bg-opacity-0 transition-all duration-300 group-hover:bg-opacity-20"></div>
                <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-black/70 to-transparent p-4">
                  <p className="text-sm text-white">Poutres en bois apparentes au plafond</p>
                </div>
              </div>
            </div>
          </div>

          {/* Structure et cloisons */}
          <div className="mb-12">
            <h2 className="mb-6 text-2xl font-bold text-gray-900">
              Structure et cloisons démolies
            </h2>
            <p className="mb-6 text-gray-600">
              Démolition contrôlée des cloisons et mise à nu de la structure porteuse
            </p>
            <div className="grid gap-6 md:grid-cols-2">
              <div className="group relative overflow-hidden rounded-lg shadow-lg transition-all duration-300 hover:shadow-xl">
                <Image
                  src="/images/realisations/chantier-strasbourg-apres-demolition/cloison-demolie-briques.jpg"
                  alt="Cloison démolie montrant les briques et la structure porteuse"
                  width={600}
                  height={400}
                  className="h-64 w-full object-cover transition-transform duration-300 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-black bg-opacity-0 transition-all duration-300 group-hover:bg-opacity-20"></div>
                <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-black/70 to-transparent p-4">
                  <p className="text-sm text-white">Cloison démolie avec briques apparentes</p>
                </div>
              </div>
              
              <div className="group relative overflow-hidden rounded-lg shadow-lg transition-all duration-300 hover:shadow-xl">
                <Image
                  src="/images/realisations/chantier-strasbourg-apres-demolition/structure-bois-plafond.jpg"
                  alt="Structure en bois du plafond mise à nu après démolition"
                  width={600}
                  height={400}
                  className="h-64 w-full object-cover transition-transform duration-300 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-black bg-opacity-0 transition-all duration-300 group-hover:bg-opacity-20"></div>
                <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-black/70 to-transparent p-4">
                  <p className="text-sm text-white">Structure en bois du plafond mise à nu</p>
                </div>
              </div>
            </div>
          </div>

          {/* Salle de bain après démolition */}
          <div className="mb-12">
            <h2 className="mb-6 text-2xl font-bold text-gray-900">
              Salle de bain après démolition
            </h2>
            <p className="mb-6 text-gray-600">
              Démolition de la salle de bain et préparation pour les nouveaux aménagements
            </p>
            <div className="grid gap-6 md:grid-cols-1 lg:grid-cols-2">
              <div className="group relative overflow-hidden rounded-lg shadow-lg transition-all duration-300 hover:shadow-xl">
                <Image
                  src="/images/realisations/chantier-strasbourg-apres-demolition/salle-de-bain-demolie.jpg"
                  alt="Salle de bain après démolition avec carrelage bleu encore visible"
                  width={600}
                  height={400}
                  className="h-64 w-full object-cover transition-transform duration-300 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-black bg-opacity-0 transition-all duration-300 group-hover:bg-opacity-20"></div>
                <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-black/70 to-transparent p-4">
                  <p className="text-sm text-white">Salle de bain démolie avec carrelage bleu visible</p>
                </div>
              </div>
            </div>
          </div>

          {/* Informations du projet */}
          <div className="mb-12 grid gap-8 md:grid-cols-2">
            <div className="rounded-lg bg-gray-50 p-6">
              <h3 className="mb-4 text-lg font-semibold text-gray-900">
                Détails du projet
              </h3>
              <dl className="space-y-2">
                <div>
                  <dt className="text-sm font-medium text-gray-600">Localisation</dt>
                  <dd className="text-gray-900">Strasbourg</dd>
                </div>
                <div>
                  <dt className="text-sm font-medium text-gray-600">Type d'intervention</dt>
                  <dd className="text-gray-900">Après démolition</dd>
                </div>
                <div>
                  <dt className="text-sm font-medium text-gray-600">Statut</dt>
                  <dd className="text-gray-900">Réalisé</dd>
                </div>
              </dl>
            </div>

            <div className="rounded-lg bg-gray-50 p-6">
              <h3 className="mb-4 text-lg font-semibold text-gray-900">
                Services réalisés
              </h3>
              <ul className="space-y-2 text-gray-700">
                <li className="flex items-center">
                  <span className="mr-2 text-primary">✓</span>
                  Démolition contrôlée des cloisons
                </li>
                <li className="flex items-center">
                  <span className="mr-2 text-primary">✓</span>
                  Mise à nu de la structure en bois
                </li>
                <li className="flex items-center">
                  <span className="mr-2 text-primary">✓</span>
                  Préservation des poutres apparentes
                </li>
                <li className="flex items-center">
                  <span className="mr-2 text-primary">✓</span>
                  Démolition salle de bain
                </li>
                <li className="flex items-center">
                  <span className="mr-2 text-primary">✓</span>
                  Nettoyage et évacuation des gravats
                </li>
                <li className="flex items-center">
                  <span className="mr-2 text-primary">✓</span>
                  Préparation pour les finitions
                </li>
              </ul>
            </div>
          </div>

          {/* Navigation */}
          <div className="flex flex-col gap-4 sm:flex-row sm:justify-between">
            <Link
              href="/realisations/chantier-strasbourg-avant-demolition"
              className="inline-flex items-center rounded-lg border border-gray-300 bg-white px-4 py-2 text-sm font-medium text-gray-700 hover:bg-gray-50"
            >
              <svg
                className="mr-2 size-4"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M15 19l-7-7 7-7"
                />
              </svg>
              Voir avant démolition
            </Link>
            
            <Link
              href="/realisations"
              className="inline-flex items-center rounded-lg bg-primary px-4 py-2 text-sm font-medium text-white hover:bg-primary/90"
            >
              Retour aux réalisations
              <svg
                className="ml-2 size-4"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M9 5l7 7-7 7"
                />
              </svg>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}