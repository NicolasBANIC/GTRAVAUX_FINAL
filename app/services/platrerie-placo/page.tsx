import Hero from '../../components/Hero';
import Link from 'next/link';

export const metadata = {
  title: 'Plâtrerie & placo | G.TRAVAUX',
  description: 'Cloisons, faux plafonds et aménagements sur mesure pour optimiser votre intérieur.',
};

export default function PlatreriePage() {
  const steps = [
    {
      title: 'Étude et planification',
      description: 'Définition des cloisons, contraintes techniques et choix des matériaux.',
    },
    {
      title: 'Montage des structures',
      description: 'Installation des ossatures métalliques et vérification des niveaux.',
    },
    {
      title: 'Pose des plaques',
      description: 'Fixation des plaques de plâtre, percement des gaines et isolation intégrée si nécessaire.',
    },
    {
      title: 'Enduit et finitions',
      description: 'Bandes, enduit de jointoiement et ponçage pour une surface parfaite prête à peindre.',
    },
  ];

  return (
    <div>
      <Hero
        title="Plâtrerie & placo"
        subtitle="Reconfigurez vos espaces avec des cloisons sur mesure."
        imageSrc="/images/placeholder/platrerie-placo-hero.jpg"
        cta={{ label: 'Demander un devis', href: '/contact' }}
      />
      <section className="container mx-auto px-4 py-16 space-y-12">
        <div>
          <h2 className="text-2xl font-bold mb-4">Des cloisons parfaitement intégrées</h2>
          <p className="text-darkGray max-w-3xl">
            Cloisons, doublages, faux plafonds : optimisez volumes, isolation et finitions. Joints parfaits prêts à peindre, 
            intégration des réseaux techniques et solutions acoustiques pour des espaces modulables et confortables.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {steps.map((step, index) => (
            <div key={step.title} className="p-6 bg-lightGray rounded-lg shadow">
              <span className="text-primary text-3xl font-bold mb-2 inline-block">{index + 1}</span>
              <h3 className="font-semibold mb-2">{step.title}</h3>
              <p className="text-sm text-darkGray">{step.description}</p>
            </div>
          ))}
        </div>
        <div className="text-center mt-12">
          <Link href="/contact" className="button-accent">
            Demander un devis
          </Link>
        </div>
      </section>
    </div>
  );
}
