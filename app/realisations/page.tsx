import Hero from '../components/Hero';
import StatsSection from '../components/StatsSection';
import Link from 'next/link';
import Image from 'next/image';

export const metadata = {
  title: 'Réalisations | G.TRAVAUX',
  description:
    'Découvrez nos projets de rénovation et nos interventions après sinistre dans toute la région.',
};

export default function RealisationsPage() {
  const projects = [
    {
      title: 'Chantier Strasbourg avant démolition',
      slug: 'chantier-strasbourg-avant-demolition',
      description: 'Découvrez notre intervention avant les travaux de démolition à Strasbourg.',
      coverImage: '/images/realisations/chantier-strasbourg-avant-demolition/salle-de-bain-1.jpg',
      hasImages: true,
    },
    {
      title: 'Chantier Strasbourg après démolition',
      slug: 'chantier-strasbourg-apres-demolition',
      description: 'Résultat de notre intervention après les travaux de démolition à Strasbourg.',
      coverImage: '/images/realisations/chantier-strasbourg-apres-demolition/salon-poutres-apparentes.jpg',
      hasImages: true,
    },
  ];

  const stats = [
    { label: "Années d'expérience", value: 15, suffix: '+' },
    { label: 'Projets réalisés', value: 120, suffix: '+' },
    { label: 'Chantiers après sinistre', value: 30, suffix: '+' },
    { label: 'Clients satisfaits', value: 98, suffix: '%' },
  ];

  return (
    <div>
      <Hero
        title="Nos réalisations"
        subtitle="Parcourez nos projets et laissez-vous inspirer."
        imageSrc="/images/realisations-hero.webp"
        cta={{ label: 'Demander un devis', href: '/contact' }}
      />
      <section className="container mx-auto space-y-16 px-4 py-20 text-center">
        <h2 className="mb-8 text-center text-3xl font-bold uppercase tracking-widest">
          Nos projets
        </h2>
        <p className="mx-auto mb-8 max-w-4xl text-center text-darkGray">
          Découvrez nos interventions de démolition et de rénovation. 
          Explorez nos projets avec photos détaillées de nos réalisations.
        </p>
        
        {/* Grille des projets */}
        <div className="grid grid-cols-1 gap-8 md:grid-cols-2">
          {projects.map((project) => (
            <div
              key={project.slug}
              className="group relative overflow-hidden rounded-lg border border-gray-200 bg-white shadow-lg transition-all duration-300 hover:shadow-xl"
            >
              {/* Image de couverture ou placeholder */}
              <div className="relative h-64 overflow-hidden">
                {project.hasImages && project.coverImage ? (
                  <Image
                    src={project.coverImage}
                    alt={project.title}
                    fill
                    className="object-cover transition-transform duration-300 group-hover:scale-105"
                  />
                ) : (
                  <div className="flex h-full items-center justify-center bg-gradient-to-br from-gray-100 to-gray-200">
                    <div className="text-center text-gray-600">
                      <div className="mx-auto mb-4 flex size-16 items-center justify-center rounded-lg bg-gray-300 text-2xl">
                        🏗️
                      </div>
                      <p className="text-sm font-medium text-gray-500">
                        TODO: Ajouter photo de couverture
                      </p>
                    </div>
                  </div>
                )}
              </div>
              
              {/* Contenu de la carte */}
              <div className="p-6">
                <h3 className="mb-3 text-xl font-bold text-gray-900">
                  {project.title}
                </h3>
                <p className="mb-4 text-gray-600">
                  {project.description}
                </p>
                <Link
                  href={`/realisations/${project.slug}`}
                  className="inline-flex items-center rounded-lg bg-primary px-4 py-2 text-sm font-medium text-white transition-colors hover:bg-primary/90"
                >
                  Voir le projet
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
          ))}
        </div>

        <div className="mt-20">
          <h2 className="mb-8 text-center text-3xl font-bold uppercase tracking-widest">
            Nos chiffres clés
          </h2>
          <StatsSection stats={stats} />
        </div>
        <div className="mt-20 text-center">
          <Link href="/contact" className="button-accent">
            Demander un devis
          </Link>
        </div>
      </section>
    </div>
  );
}