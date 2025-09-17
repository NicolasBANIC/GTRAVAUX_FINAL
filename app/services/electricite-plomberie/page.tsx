import Hero from '../../components/Hero';
import Link from 'next/link';

export const metadata = {
  title: 'Électricité & plomberie | G.TRAVAUX',
  description: 'Installations, mises aux normes et dépannages en électricité et plomberie pour un habitat sûr et fonctionnel.',
};

export default function ElectricitePlomberiePage() {
  const steps = [
    {
      title: 'Diagnostic & devis',
      description: 'Analyse de vos installations et établissement d’un devis transparent.',
    },
    {
      title: 'Mise aux normes',
      description: 'Remise aux normes électriques et plomberie pour garantir votre sécurité.',
    },
    {
      title: 'Installation & remplacement',
      description: 'Pose de nouveaux équipements et remplacement des installations obsolètes.',
    },
    {
      title: 'Contrôles & dépannage',
      description: 'Vérifications régulières et interventions rapides en cas de panne.',
    },
  ];

  return (
    <div>
      <Hero
        title="Électricité & plomberie"
        subtitle="Des installations fiables pour votre confort et votre sécurité."
        imageSrc="/images/placeholder/electricite-plomberie-hero.jpg"
        cta={{ label: 'Demander un devis', href: '/contact' }}
      />
      <section className="container mx-auto px-4 py-16 space-y-12">
        <div>
          <h2 className="text-2xl font-bold mb-4">Des réseaux parfaitement maîtrisés</h2>
          <p className="text-darkGray max-w-3xl">
            Nos électriciens et plombiers s’occupent de vos installations de A à Z. Sécurité, efficacité énergétique et confort
            sont au cœur de nos interventions.
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
