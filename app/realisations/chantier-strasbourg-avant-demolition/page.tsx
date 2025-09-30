import Link from 'next/link';
import Image from 'next/image';

export const metadata = {
  title: 'Chantier Strasbourg avant démolition | G.TRAVAUX',
  description: 'Découvrez notre intervention avant les travaux de démolition à Strasbourg. Photos complètes de l\'état initial de l\'appartement : salon avec parquet en point de Hongrie, chambres, cuisine équipée, bureau avec bibliothèque, salle de bain avec carrelage bleu et couloir de distribution.',
};

export default function ChantierStrasbourgAvantDemolitionPage() {
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
            <span className="text-gray-900">Chantier Strasbourg avant démolition</span>
          </nav>
          <h1 className="text-3xl font-bold text-gray-900 md:text-4xl">
            Chantier Strasbourg avant démolition
          </h1>
        </div>
      </div>

      {/* Contenu principal */}
      <div className="container mx-auto px-4 py-12">
        <div className="mx-auto max-w-4xl">
          {/* Introduction */}
          <div className="mb-12">
            <p className="text-lg leading-relaxed text-gray-700">
              Ce projet présente notre intervention avant les travaux de démolition à Strasbourg. 
              Découvrez l'état initial complet de l'appartement avec tous ses espaces : salon avec parquet en point de Hongrie, chambres, cuisine équipée, bureau avec bibliothèque intégrée, salle de bain et couloir avant notre intervention de démolition.
            </p>
          </div>

          {/* Galerie photos - Salon */}
          <div className="mb-12">
            <h2 className="mb-6 text-2xl font-bold text-gray-900">
              Salon avant démolition
            </h2>
            <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-2">
              <div className="group relative overflow-hidden rounded-lg bg-white shadow-lg">
                <div className="relative aspect-[4/3] overflow-hidden">
                  <Image
                    src="/images/realisations/chantier-strasbourg-avant-demolition/salon-1.jpg"
                    alt="Salon avant démolition - Vue d'ensemble avec parquet et fenêtres"
                    fill
                    className="object-cover transition-transform duration-300 group-hover:scale-105"
                  />
                </div>
                <div className="p-4">
                  <h3 className="font-medium text-gray-900">Vue d'ensemble du salon</h3>
                  <p className="text-sm text-gray-600">Parquet en point de Hongrie et grandes fenêtres</p>
                </div>
              </div>
              
              <div className="group relative overflow-hidden rounded-lg bg-white shadow-lg">
                <div className="relative aspect-[4/3] overflow-hidden">
                  <Image
                    src="/images/realisations/chantier-strasbourg-avant-demolition/salon-2.jpg"
                    alt="Salon avant démolition - Angle avec luminaire et applique murale"
                    fill
                    className="object-cover transition-transform duration-300 group-hover:scale-105"
                  />
                </div>
                <div className="p-4">
                  <h3 className="font-medium text-gray-900">Angle du salon</h3>
                  <p className="text-sm text-gray-600">Luminaire suspendu et applique murale</p>
                </div>
              </div>

              <div className="group relative overflow-hidden rounded-lg bg-white shadow-lg">
                <div className="relative aspect-[4/3] overflow-hidden">
                  <Image
                    src="/images/realisations/chantier-strasbourg-avant-demolition/salon-3.jpg"
                    alt="Salon avant démolition - Vue depuis l'entrée"
                    fill
                    className="object-cover transition-transform duration-300 group-hover:scale-105"
                  />
                </div>
                <div className="p-4">
                  <h3 className="font-medium text-gray-900">Vue depuis l'entrée</h3>
                  <p className="text-sm text-gray-600">Perspective sur le salon et les fenêtres</p>
                </div>
              </div>

              <div className="group relative overflow-hidden rounded-lg bg-white shadow-lg">
                <div className="relative aspect-[4/3] overflow-hidden">
                  <Image
                    src="/images/realisations/chantier-strasbourg-avant-demolition/salon-4.jpg"
                    alt="Salon avant démolition - Autre angle avec éclairage naturel"
                    fill
                    className="object-cover transition-transform duration-300 group-hover:scale-105"
                  />
                </div>
                <div className="p-4">
                  <h3 className="font-medium text-gray-900">Éclairage naturel</h3>
                  <p className="text-sm text-gray-600">Belle luminosité avec vue sur l'extérieur</p>
                </div>
              </div>
            </div>
          </div>

          {/* Galerie photos - Chambres */}
          <div className="mb-12">
            <h2 className="mb-6 text-2xl font-bold text-gray-900">
              Chambres avant démolition
            </h2>
            <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
              <div className="group relative overflow-hidden rounded-lg bg-white shadow-lg">
                <div className="relative aspect-[4/3] overflow-hidden">
                  <Image
                    src="/images/realisations/chantier-strasbourg-avant-demolition/chambre-1.jpg"
                    alt="Chambre avant démolition - Vue d'ensemble avec parquet et fenêtre"
                    fill
                    className="object-cover transition-transform duration-300 group-hover:scale-105"
                  />
                </div>
                <div className="p-4">
                  <h3 className="font-medium text-gray-900">Chambre principale</h3>
                  <p className="text-sm text-gray-600">Parquet en point de Hongrie et fenêtre avec rideaux</p>
                </div>
              </div>
              
              <div className="group relative overflow-hidden rounded-lg bg-white shadow-lg">
                <div className="relative aspect-[4/3] overflow-hidden">
                  <Image
                    src="/images/realisations/chantier-strasbourg-avant-demolition/chambre-2.jpg"
                    alt="Chambre avant démolition - Vue d'ensemble du parquet"
                    fill
                    className="object-cover transition-transform duration-300 group-hover:scale-105"
                  />
                </div>
                <div className="p-4">
                  <h3 className="font-medium text-gray-900">Seconde chambre</h3>
                  <p className="text-sm text-gray-600">Belle surface avec parquet traditionnel</p>
                </div>
              </div>

              <div className="group relative overflow-hidden rounded-lg bg-white shadow-lg">
                <div className="relative aspect-[4/3] overflow-hidden">
                  <Image
                    src="/images/realisations/chantier-strasbourg-avant-demolition/parquet-detail.jpg"
                    alt="Détail du parquet en point de Hongrie avant démolition"
                    fill
                    className="object-cover transition-transform duration-300 group-hover:scale-105"
                  />
                </div>
                <div className="p-4">
                  <h3 className="font-medium text-gray-900">Détail du parquet</h3>
                  <p className="text-sm text-gray-600">Motif en point de Hongrie traditionnel</p>
                </div>
              </div>
            </div>
          </div>

          {/* Galerie photos - Bureau/Bibliothèque */}
          <div className="mb-12">
            <h2 className="mb-6 text-2xl font-bold text-gray-900">
              Bureau et bibliothèque avant démolition
            </h2>
            <div className="grid gap-6 md:grid-cols-2">
              <div className="group relative overflow-hidden rounded-lg bg-white shadow-lg">
                <div className="relative aspect-[4/3] overflow-hidden">
                  <Image
                    src="/images/realisations/chantier-strasbourg-avant-demolition/bureau-bibliotheque.jpg"
                    alt="Bureau avec bibliothèque intégrée avant démolition"
                    fill
                    className="object-cover transition-transform duration-300 group-hover:scale-105"
                  />
                </div>
                <div className="p-4">
                  <h3 className="font-medium text-gray-900">Bureau avec bibliothèque</h3>
                  <p className="text-sm text-gray-600">Aménagement sur mesure avec étagères et plan de travail</p>
                </div>
              </div>
              
              <div className="group relative overflow-hidden rounded-lg bg-white shadow-lg">
                <div className="relative aspect-[4/3] overflow-hidden">
                  <Image
                    src="/images/realisations/chantier-strasbourg-avant-demolition/bureau-bibliotheque-2.jpg"
                    alt="Vue détaillée de la bibliothèque avant démolition"
                    fill
                    className="object-cover transition-transform duration-300 group-hover:scale-105"
                  />
                </div>
                <div className="p-4">
                  <h3 className="font-medium text-gray-900">Détail de la bibliothèque</h3>
                  <p className="text-sm text-gray-600">Rangements optimisés avec structure bois</p>
                </div>
              </div>
            </div>
          </div>

          {/* Galerie photos - Cuisine */}
          <div className="mb-12">
            <h2 className="mb-6 text-2xl font-bold text-gray-900">
              Cuisine avant démolition
            </h2>
            <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
              <div className="group relative overflow-hidden rounded-lg bg-white shadow-lg">
                <div className="relative aspect-[4/3] overflow-hidden">
                  <Image
                    src="/images/realisations/chantier-strasbourg-avant-demolition/cuisine-1.jpg"
                    alt="Cuisine avant démolition - Vue d'ensemble avec hotte et carrelage"
                    fill
                    className="object-cover transition-transform duration-300 group-hover:scale-105"
                  />
                </div>
                <div className="p-4">
                  <h3 className="font-medium text-gray-900">Vue d'ensemble cuisine</h3>
                  <p className="text-sm text-gray-600">Cuisine équipée avec hotte et carrelage mural</p>
                </div>
              </div>
              
              <div className="group relative overflow-hidden rounded-lg bg-white shadow-lg">
                <div className="relative aspect-[4/3] overflow-hidden">
                  <Image
                    src="/images/realisations/chantier-strasbourg-avant-demolition/cuisine-2.jpg"
                    alt="Cuisine avant démolition - Plan de travail et fenêtre"
                    fill
                    className="object-cover transition-transform duration-300 group-hover:scale-105"
                  />
                </div>
                <div className="p-4">
                  <h3 className="font-medium text-gray-900">Plan de travail</h3>
                  <p className="text-sm text-gray-600">Évier intégré et éclairage naturel</p>
                </div>
              </div>

              <div className="group relative overflow-hidden rounded-lg bg-white shadow-lg">
                <div className="relative aspect-[4/3] overflow-hidden">
                  <Image
                    src="/images/realisations/chantier-strasbourg-avant-demolition/cuisine-3.jpg"
                    alt="Cuisine avant démolition - Angle avec placards et évier"
                    fill
                    className="object-cover transition-transform duration-300 group-hover:scale-105"
                  />
                </div>
                <div className="p-4">
                  <h3 className="font-medium text-gray-900">Angle cuisine</h3>
                  <p className="text-sm text-gray-600">Configuration en L avec rangements hauts et bas</p>
                </div>
              </div>
            </div>
          </div>

          {/* Galerie photos - Salle de bain */}
          <div className="mb-12">
            <h2 className="mb-6 text-2xl font-bold text-gray-900">
              Salle de bain avant démolition
            </h2>
            <div className="grid gap-6 md:grid-cols-2">
              <div className="group relative overflow-hidden rounded-lg bg-white shadow-lg">
                <div className="relative aspect-[4/3] overflow-hidden">
                  <Image
                    src="/images/realisations/chantier-strasbourg-avant-demolition/salle-de-bain-1.jpg"
                    alt="Salle de bain avant démolition - Vue d'ensemble avec baignoire et carrelage bleu"
                    fill
                    className="object-cover transition-transform duration-300 group-hover:scale-105"
                  />
                </div>
                <div className="p-4">
                  <h3 className="font-medium text-gray-900">Vue d'ensemble</h3>
                  <p className="text-sm text-gray-600">Baignoire et carrelage bleu d'origine</p>
                </div>
              </div>
              
              <div className="group relative overflow-hidden rounded-lg bg-white shadow-lg">
                <div className="relative aspect-[4/3] overflow-hidden">
                  <Image
                    src="/images/realisations/chantier-strasbourg-avant-demolition/salle-de-bain-2.jpg"
                    alt="Salle de bain avant démolition - Espace toilettes avec carrelage bleu"
                    fill
                    className="object-cover transition-transform duration-300 group-hover:scale-105"
                  />
                </div>
                <div className="p-4">
                  <h3 className="font-medium text-gray-900">Espace toilettes</h3>
                  <p className="text-sm text-gray-600">WC et carrelage bleu avec sol carrelé beige</p>
                </div>
              </div>
            </div>
          </div>

          {/* Galerie photos - Couloir */}
          <div className="mb-12">
            <h2 className="mb-6 text-2xl font-bold text-gray-900">
              Couloir et circulation
            </h2>
            <div className="grid gap-6 md:grid-cols-1 lg:grid-cols-2">
              <div className="group relative overflow-hidden rounded-lg bg-white shadow-lg">
                <div className="relative aspect-[4/3] overflow-hidden">
                  <Image
                    src="/images/realisations/chantier-strasbourg-avant-demolition/couloir.jpg"
                    alt="Couloir avant démolition - Vue sur les portes et parquet"
                    fill
                    className="object-cover transition-transform duration-300 group-hover:scale-105"
                  />
                </div>
                <div className="p-4">
                  <h3 className="font-medium text-gray-900">Couloir de distribution</h3>
                  <p className="text-sm text-gray-600">Accès aux différentes pièces avec parquet continu</p>
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
                  <dd className="text-gray-900">Avant démolition</dd>
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
                  Évaluation de l'état initial
                </li>
                <li className="flex items-center">
                  <span className="mr-2 text-primary">✓</span>
                  Documentation photographique
                </li>
                <li className="flex items-center">
                  <span className="mr-2 text-primary">✓</span>
                  Préparation du chantier
                </li>
              </ul>
            </div>
          </div>

          {/* Navigation */}
          <div className="flex flex-col gap-4 sm:flex-row sm:justify-between">
            <Link
              href="/realisations"
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
              Retour aux réalisations
            </Link>
            
            <Link
              href="/realisations/chantier-strasbourg-apres-demolition"
              className="inline-flex items-center rounded-lg bg-primary px-4 py-2 text-sm font-medium text-white hover:bg-primary/90"
            >
              Voir après démolition
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