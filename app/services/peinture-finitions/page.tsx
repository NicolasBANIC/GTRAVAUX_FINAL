import Hero from '../../components/Hero';
import Link from 'next/link';

export const metadata = {
  title: 'Peinture & finitions | G.TRAVAUX',
  description: 'Donnez du caractère à vos espaces grâce à notre service de peinture et finitions soignées.',
};

export default function PeinturePage() {
  const steps = [
    {
      title: 'Choix des couleurs & matières',
      description: 'Nous vous conseillons sur les teintes et textures adaptées à votre style et à votre budget.',
    },
    {
      title: 'Préparation des supports',
      description: 'Ponçage, lessivage, enduit… Nous préparons minutieusement les murs et plafonds.',
    },
    {
      title: 'Application & finitions',
      description: 'Peinture, enduit décoratif ou papier peint, nous assurons une pose irréprochable.',
    },
    {
      title: 'Nettoyage & réception',
      description: 'Nous laissons un chantier propre et vérifions ensemble la qualité des finitions.',
    },
  ];

  return (
    <div>
      <Hero
        title="Peinture & finitions"
        subtitle="Des finitions impeccables pour des intérieurs éclatants."
        imageSrc="/images/placeholder/peinture-hero.jpg"
        cta={{ label: 'Demander un devis', href: '/contact' }}
      />
      <section className="container mx-auto px-4 py-16 space-y-12">
        <div>
          <h2 className="text-2xl font-bold mb-4">Des finitions à la hauteur de vos attentes</h2>
          <p className="text-darkGray max-w-3xl">
            Nos peintres expérimentés mettent leur savoir-faire à votre service pour sublimer vos pièces. Du choix des
            couleurs à la touche finale, chaque étape est réalisée avec soin pour un résultat durable et élégant.
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
          <Link href="/contact" className="bg-green text-white px-6 py-3 rounded-full hover:bg-green/90 transition-colors duration-300">
            Demander un devis
          </Link>
        </div>
      </section>
    </div>
  );
}
