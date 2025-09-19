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
          <h2 className="text-3xl font-bold mb-4 uppercase tracking-widest">Notre mission</h2>
          <p className="text-darkGray max-w-3xl">
            Concevoir et réaliser des rénovations durables, esthétiques et conformes, avec une expérience client irréprochable. 
            De l’étude à la réception, nous coordonnons tous les corps de métier pour livrer des chantiers impeccables.
          </p>
        </div>
        <div>
          <h2 className="text-3xl font-bold mb-4 uppercase tracking-widest">Nos valeurs</h2>
          <ul className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <li className="premium-card">
              <h3 className="font-semibold text-primary mb-2 uppercase tracking-widest">Proximité</h3>
              <p className="text-darkGray text-sm">Écoute, conseils, interlocuteur unique. Une relation simple pour des projets qui vous ressemblent.</p>
            </li>
            <li className="premium-card">
              <h3 className="font-semibold text-primary mb-2 uppercase tracking-widest">Excellence</h3>
              <p className="text-darkGray text-sm">Exigence artisanale, finitions d’exception, contrôle qualité à chaque étape.</p>
            </li>
            <li className="premium-card">
              <h3 className="font-semibold text-primary mb-2 uppercase tracking-widest">Confiance</h3>
              <p className="text-darkGray text-sm">Transparence, respect des délais, garanties et conformité aux normes en vigueur.</p>
            </li>
          </ul>
        </div>
        <div>
          <h2 className="text-3xl font-bold mb-8 text-center uppercase tracking-widest">Notre équipe</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8">
            {team.map((member) => (
              <div key={member.name} className="premium-card text-center">
                <div className="mx-auto w-32 h-32 rounded-full overflow-hidden mb-4">
                  <Image src={member.image} alt={member.name} width={128} height={128} className="object-cover w-full h-full" />
                </div>
                <h3 className="font-semibold uppercase tracking-widest text-primary">{member.name}</h3>
                <p className="text-sm text-darkGray/90">{member.role}</p>
              </div>
            ))}
          </div>
        </div>
        <div>
          <h2 className="text-3xl font-bold mb-4 uppercase tracking-widest">Assurances, certifications & garanties</h2>
          <p className="text-darkGray max-w-3xl">
            Assurance décennale, RC Pro, certifications RGE & Qualibat selon lots concernés. Documents fournis sur demande. 
            Respect strict des normes, PV et fiches techniques disponibles. Accompagnement complet après sinistre et relations 
            avec votre assurance.
          </p>
        </div>
      </section>
    </div>
  );
}
