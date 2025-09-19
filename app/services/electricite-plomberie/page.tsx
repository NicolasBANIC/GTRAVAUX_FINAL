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
          <h2 className="text-2xl font-bold mb-4 uppercase tracking-widest">Des réseaux parfaitement maîtrisés</h2>
          <p className="text-darkGray max-w-3xl">
            Mise aux normes (NFC 15‑100), protections différentielles, VMC, réseaux plomberie étanches : sécurité, 
            efficacité et confort au cœur de nos interventions. Installation, remplacement et dépannage rapide.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {steps.map((step, index) => (
            <div key={step.title} className="premium-card">
              <span className="text-accent-600 text-3xl font-bold mb-2 inline-block">{index + 1}</span>
              <h3 className="font-semibold mb-2 uppercase tracking-widest text-primary">{step.title}</h3>
              <p className="text-sm text-darkGray/90">{step.description}</p>
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
