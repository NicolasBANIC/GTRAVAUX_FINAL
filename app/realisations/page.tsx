import Hero from '../components/Hero';
import GalleryGrid from '../components/GalleryGrid';
import StatsSection from '../components/StatsSection';
import Link from 'next/link';

export const metadata = {
  title: 'Réalisations | G.TRAVAUX',
  description:
    'Découvrez nos projets de rénovation et nos interventions après sinistre dans toute la région.',
};

export default function RealisationsPage() {
  const gallery = [
    {
      src: '/images/placeholder/realisations-strasbourg.jpg',
      title: 'Appartement rénové',
      location: 'Strasbourg',
    },
    {
      src: '/images/placeholder/realisations-colmar.jpg',
      title: 'Maison contemporaine',
      location: 'Colmar',
    },
    {
      src: '/images/placeholder/realisations-mulhouse.jpg',
      title: 'Rénovation complète',
      location: 'Mulhouse',
    },
    {
      src: '/images/placeholder/realisations-lyon.jpg',
      title: 'Projet design',
      location: 'Lyon',
    },
    {
      src: '/images/placeholder/realisations-nancy.jpg',
      title: 'Cuisine moderne',
      location: 'Nancy',
    },
    {
      src: '/images/placeholder/realisations-metz.jpg',
      title: 'Salle de bains zen',
      location: 'Metz',
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
        imageSrc="/images/placeholder/realisations-hero.jpg"
        cta={{ label: 'Demander un devis', href: '/contact' }}
      />
      <section className="container mx-auto space-y-16 px-4 py-20 text-center">
        <h2 className="mb-8 text-center text-3xl font-bold uppercase tracking-widest">
          Galerie de projets
        </h2>
        <p className="mx-auto mb-8 max-w-4xl text-center text-darkGray">
          Découvrez une sélection de chantiers avant/après : appartements,
          maisons et commerces. Rénovations complètes, interventions après
          sinistre et finitions premium.
        </p>
        <GalleryGrid items={gallery} />
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
