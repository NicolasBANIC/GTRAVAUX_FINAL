import Hero from '../../components/Hero';
import Link from 'next/link';

export const metadata = {
  title: 'Maçonnerie légère | G.TRAVAUX',
  description: 'Création d’ouvertures, petits travaux de maçonnerie et réparations structurales pour réinventer vos espaces.',
};

export default function MaconnerieLegerePage() {
  const steps = [
    {
      title: 'Évaluation du bâti',
      description: 'Analyse de la structure existante et identification des travaux nécessaires.',
    },
    {
      title: 'Démolition & préparation',
      description: 'Ouverture de murs porteurs, démolition de cloisons et mise en sécurité.',
    },
    {
      title: 'Construction & ouverture',
      description: 'Montage de nouvelles cloisons, reprises de maçonnerie et création d’ouvertures.',
    },
    {
      title: 'Finitions & sécurisation',
      description: 'Finition des ouvrages, renforcement et conformité aux normes en vigueur.',
    },
  ];

  return (
    <div>
      <Hero
        title="Maçonnerie légère"
        subtitle="Des travaux de maçonnerie pour transformer votre intérieur."
        imageSrc="/images/placeholder/maconnerie-legere-hero.jpg"
        cta={{ label: 'Demander un devis', href: '/contact' }}
      />
      <section className="container mx-auto px-4 py-16 space-y-12">
        <div>
          <h2 className="text-2xl font-bold mb-4">Un intérieur sur mesure</h2>
          <p className="text-darkGray max-w-3xl">
            Notre service de maçonnerie légère vous permet de modifier la structure de votre logement pour répondre à vos
            besoins. Nous réalisons des ouvertures, des extensions et des réparations dans le respect des normes.
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
          <Link href="/contact" className="bg-primary text-white px-6 py-3 rounded-full hover:bg-black transition-colors duration-300">
            Demander un devis
          </Link>
        </div>
      </section>
    </div>
  );
}
