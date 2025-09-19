import Hero from '../components/Hero';
import GalleryGrid from '../components/GalleryGrid';
import BeforeAfterSlider from '../components/BeforeAfterSlider';
import StatsSection from '../components/StatsSection';
import Link from 'next/link';

export const metadata = {
  title: 'Réalisations | G.TRAVAUX',
  description: 'Découvrez nos projets de rénovation et nos interventions après sinistre dans toute la région.',
};

export default function RealisationsPage() {
  const gallery = [
    { src: '/images/placeholder/realisations-strasbourg.jpg', title: 'Appartement rénové', location: 'Strasbourg' },
    { src: '/images/placeholder/realisations-colmar.jpg', title: 'Maison contemporaine', location: 'Colmar' },
    { src: '/images/placeholder/realisations-mulhouse.jpg', title: 'Rénovation complète', location: 'Mulhouse' },
    { src: '/images/placeholder/realisations-lyon.jpg', title: 'Projet design', location: 'Lyon' },
    { src: '/images/placeholder/realisations-nancy.jpg', title: 'Cuisine moderne', location: 'Nancy' },
    { src: '/images/placeholder/realisations-metz.jpg', title: 'Salle de bains zen', location: 'Metz' },
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
      <section className="container mx-auto px-4 py-20 space-y-16">
        <h2 className="text-3xl font-bold text-center mb-8 uppercase tracking-widest">Galerie de projets</h2>
        <p className="text-darkGray max-w-3xl mx-auto text-center mb-8">
          Découvrez une sélection de chantiers avant/après : appartements, maisons et commerces.
          Rénovations complètes, interventions après sinistre et finitions premium.
        </p>
        <GalleryGrid items={gallery} />
        <div className="mt-20">
          <h2 className="text-3xl font-bold text-center mb-8 uppercase tracking-widest">Avant / Après</h2>
          <div className="max-w-4xl mx-auto">
            <BeforeAfterSlider
              beforeSrc="/images/placeholder/before-1.jpg"
              afterSrc="/images/placeholder/after-1.jpg"
              alt="Comparateur avant/après"
            />
          </div>
        </div>
        <div className="mt-20">
          <h2 className="text-3xl font-bold text-center mb-8 uppercase tracking-widest">Nos chiffres clés</h2>
          <StatsSection stats={stats} />
        </div>
        <div className="text-center mt-20">
          <Link href="/contact" className="button-accent">
            Demander un devis
          </Link>
        </div>
      </section>
    </div>
  );
}