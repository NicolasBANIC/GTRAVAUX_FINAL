import Hero from '../components/Hero';
import Image from 'next/image';

export const metadata = {
  title: 'À propos | G.TRAVAUX',
  description: 'Découvrez l’histoire, les valeurs et l’équipe de G.TRAVAUX, votre partenaire en rénovation.',
};

interface TeamMember {
  name: string;
  role: string;
  image: string;
}

export default function AboutPage() {
  // Toutes les photos d’équipe utilisent un placeholder générique afin d’éviter de représenter des personnes réelles.
  const team: TeamMember[] = [
    { name: 'Jean Dupont', role: 'Fondateur & chef de chantier', image: '/images/placeholder/team-placeholder.jpg' },
    { name: 'Laura Martin', role: 'Architecte d’intérieur', image: '/images/placeholder/team-placeholder.jpg' },
    { name: 'Antoine Schmidt', role: 'Chef de projet', image: '/images/placeholder/team-placeholder.jpg' },
    { name: 'Claire Fischer', role: 'Responsable après sinistre', image: '/images/placeholder/team-placeholder.jpg' },
  ];

  return (
    <div>
      <Hero
        title="Qui sommes-nous ?"
        subtitle="Une équipe passionnée dédiée à la rénovation et à votre satisfaction."
        imageSrc="/images/placeholder/about-hero.jpg"
        cta={{ label: 'Demander un devis', href: '/contact' }}
      />
      <section className="container mx-auto px-4 py-16 space-y-12">
        <div>
          <h2 className="text-3xl font-bold mb-4">Notre histoire</h2>
          <p className="text-darkGray max-w-3xl">
            Fondée en 2010 à Strasbourg, G.TRAVAUX est née de la passion de son fondateur pour la rénovation et
            l’architecture. Depuis plus de 15 ans, nous accompagnons nos clients dans leurs projets de rénovation et de
            reconstruction après sinistre. Notre expérience nous permet d’intervenir sur tout type de chantier, du petit
            appartement à la grande maison familiale.
          </p>
        </div>
        <div>
          <h2 className="text-3xl font-bold mb-4">Nos valeurs</h2>
          <ul className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <li className="bg-lightGray p-6 rounded-lg shadow">
              <h3 className="font-semibold text-primary mb-2">Proximité</h3>
              <p className="text-darkGray text-sm">Être à l’écoute de nos clients et comprendre leurs besoins pour créer des projets qui leur ressemblent.</p>
            </li>
            <li className="bg-lightGray p-6 rounded-lg shadow">
              <h3 className="font-semibold text-primary mb-2">Excellence</h3>
              <p className="text-darkGray text-sm">Réaliser chaque chantier avec exigence et passion pour un résultat durable et soigné.</p>
            </li>
            <li className="bg-lightGray p-6 rounded-lg shadow">
              <h3 className="font-semibold text-primary mb-2">Confiance</h3>
              <p className="text-darkGray text-sm">Respecter nos engagements et assurer la transparence pour bâtir une relation de confiance.</p>
            </li>
          </ul>
        </div>
        <div>
          <h2 className="text-3xl font-bold mb-8 text-center">Notre équipe</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8">
            {team.map((member) => (
              <div key={member.name} className="text-center">
                <div className="mx-auto w-32 h-32 rounded-full overflow-hidden mb-4">
                  <Image src={member.image} alt={member.name} width={128} height={128} className="object-cover w-full h-full" />
                </div>
                <h3 className="font-semibold">{member.name}</h3>
                <p className="text-sm text-darkGray">{member.role}</p>
              </div>
            ))}
          </div>
        </div>
        <div>
          <h2 className="text-3xl font-bold mb-4">Assurances et garanties</h2>
          <p className="text-darkGray max-w-3xl">
            Chez G.TRAVAUX, votre sérénité est notre priorité. Nous disposons d’une assurance décennale qui couvre l’ensemble
            de nos travaux pendant 10 ans. Nous sommes certifiés RGE et Qualibat, gages de qualité et de conformité.
            Toutes nos interventions respectent strictement les normes en vigueur et les garanties légales. Nous vous
            accompagnons également dans les démarches administratives et les relations avec votre assurance en cas de sinistre.
          </p>
        </div>
      </section>
    </div>
  );
}
