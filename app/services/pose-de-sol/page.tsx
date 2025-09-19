import Hero from '../../components/Hero';
import Link from 'next/link';

export const metadata = {
  title: 'Pose de sol | G.TRAVAUX',
  description: 'Confiez la pose de vos sols à des professionnels pour un résultat parfait et durable.',
};

export default function PoseDeSolPage() {
  const steps = [
    {
      title: 'Analyse des besoins',
      description: 'Choix du revêtement (parquet, carrelage, vinyle, etc.) selon vos usages et votre budget.',
    },
    {
      title: 'Préparation du support',
      description: 'Mise à niveau, ragréage et nettoyage pour une base saine et plane.',
    },
    {
      title: 'Pose du revêtement',
      description: 'Installation soignée du sol choisi avec respect des normes et des alignements.',
    },
    {
      title: 'Finitions & entretien',
      description: 'Finition des plinthes et conseils d’entretien pour prolonger la durée de vie de votre sol.',
    },
  ];

  return (
    <div>
      <Hero
        title="Pose de sol"
        subtitle="Des revêtements adaptés à votre mode de vie."
        imageSrc="/images/placeholder/pose-sol-hero.jpg"
        cta={{ label: 'Demander un devis', href: '/contact' }}
      />
      <section className="container mx-auto px-4 py-16 space-y-12">
        <div>
          <h2 className="text-2xl font-bold mb-4 uppercase tracking-widest">Un sol à votre image</h2>
          <p className="text-darkGray max-w-3xl">
            Parquets, carrelages, vinyles ou stratifiés : une pose durable, plane et soignée. Ragréage si nécessaire, 
            conseils sur l’entretien et finitions nettes (plinthes, profils, joints). Notre priorité : un rendu impeccable et durable.
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
