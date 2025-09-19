import Hero from '../../components/Hero';
import Link from 'next/link';

export const metadata = {
  title: 'Isolation intérieure | G.TRAVAUX',
  description: 'Améliorez votre confort thermique et acoustique grâce à des solutions d’isolation adaptées.',
};

export default function IsolationInterieurePage() {
  const steps = [
    {
      title: 'Analyse & conseils',
      description: 'Étude des déperditions et recommandations sur les techniques d’isolation les plus efficaces.',
    },
    {
      title: 'Choix des matériaux',
      description: 'Sélection d’isolants performants (laine de verre, laine de roche, biosourcés…) selon vos besoins.',
    },
    {
      title: 'Pose des isolants',
      description: 'Mise en œuvre soignée des isolants dans les cloisons, les planchers ou les combles.',
    },
    {
      title: 'Contrôle des performances',
      description: 'Vérification de l’étanchéité et du confort acoustique pour garantir un résultat optimal.',
    },
  ];

  return (
    <div>
      <Hero
        title="Isolation intérieure"
        subtitle="Confort thermique et acoustique grâce à des solutions performantes."
        imageSrc="/images/placeholder/isolation-interieure-hero.jpg"
        cta={{ label: 'Demander un devis', href: '/contact' }}
      />
      <section className="container mx-auto px-4 py-16 space-y-12">
        <div>
          <h2 className="text-2xl font-bold mb-4 uppercase tracking-widest">Une maison bien isolée, c’est une maison confortable</h2>
          <p className="text-darkGray max-w-3xl">
            Confort thermique et acoustique, économies d’énergie, matériaux durables. Étanchéité (freins vapeur), 
            traitement des ponts thermiques et solutions adaptées à chaque configuration, pour des résultats durables.
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
