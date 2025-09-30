import Hero from '../components/Hero';
import Image from 'next/image';

export const metadata = {
  title: 'À propos | G.TRAVAUX',
  description:
    'Découvrez l’histoire, les valeurs et l’équipe de G.TRAVAUX, votre partenaire en rénovation.',
};

interface TeamMember {
  name: string;
  role: string;
  image: string;
}

export default function AboutPage() {
  // Toutes les photos d’équipe utilisent un placeholder générique afin d’éviter de représenter des personnes réelles.
  const team: TeamMember[] = [
    {
      name: 'Jean Dupont',
      role: 'Fondateur & chef de chantier',
      image: '/images/placeholder/team-placeholder.jpg',
    },
    {
      name: 'Laura Martin',
      role: 'Architecte d’intérieur',
      image: '/images/placeholder/team-placeholder.jpg',
    },
    {
      name: 'Antoine Schmidt',
      role: 'Chef de projet',
      image: '/images/placeholder/team-placeholder.jpg',
    },
    {
      name: 'Claire Fischer',
      role: 'Responsable après sinistre',
      image: '/images/placeholder/team-placeholder.jpg',
    },
  ];

  return (
    <div>
      <Hero
        title="Qui sommes-nous ?"
        subtitle="Une équipe passionnée dédiée à la rénovation et à votre satisfaction."
        imageSrc="/images/about-hero.png"
        cta={{ label: 'Demander un devis', href: '/contact' }}
      />
      <section className="container mx-auto space-y-12 px-4 py-16 text-center">
        <div>
          <h2 className="mb-4 text-3xl font-bold uppercase tracking-widest">
            Notre mission
          </h2>
          <p className="mx-auto max-w-4xl text-darkGray">
            Concevoir et réaliser des rénovations durables, esthétiques et
            conformes, avec une expérience client irréprochable. De l’étude à la
            réception, nous coordonnons tous les corps de métier pour livrer des
            chantiers impeccables.
          </p>
        </div>
        <div>
          <h2 className="mb-4 text-3xl font-bold uppercase tracking-widest">
            Nos valeurs
          </h2>
          <ul className="grid grid-cols-1 gap-8 md:grid-cols-3">
            <li className="premium-card">
              <h3 className="mb-2 font-semibold uppercase tracking-widest text-primary">
                Proximité
              </h3>
              <p className="text-sm text-darkGray">
                Écoute, conseils, interlocuteur unique. Une relation simple pour
                des projets qui vous ressemblent.
              </p>
            </li>
            <li className="premium-card">
              <h3 className="mb-2 font-semibold uppercase tracking-widest text-primary">
                Excellence
              </h3>
              <p className="text-sm text-darkGray">
                Exigence artisanale, finitions d’exception, contrôle qualité à
                chaque étape.
              </p>
            </li>
            <li className="premium-card">
              <h3 className="mb-2 font-semibold uppercase tracking-widest text-primary">
                Confiance
              </h3>
              <p className="text-sm text-darkGray">
                Transparence, respect des délais, garanties et conformité aux
                normes en vigueur.
              </p>
            </li>
          </ul>
        </div>
        <div>
          <h2 className="mb-8 text-center text-3xl font-bold uppercase tracking-widest">
            Notre équipe
          </h2>
          <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 md:grid-cols-4">
            {team.map(member => (
              <div key={member.name} className="premium-card text-center">
                <div className="mx-auto mb-4 size-32 overflow-hidden rounded-full">
                  <Image
                    src={member.image}
                    alt={member.name}
                    width={128}
                    height={128}
                    className="size-full object-cover"
                  />
                </div>
                <h3 className="font-semibold uppercase tracking-widest text-primary">
                  {member.name}
                </h3>
                <p className="text-sm text-darkGray/90">{member.role}</p>
              </div>
            ))}
          </div>
        </div>
        <div>
          <h2 className="mb-4 text-3xl font-bold uppercase tracking-widest">
            Assurances, certifications & garanties
          </h2>
          <p className="mx-auto max-w-4xl text-darkGray">
            Assurance décennale, RC Pro, certifications RGE & Qualibat selon
            lots concernés. Documents fournis sur demande. Respect strict des
            normes, PV et fiches techniques disponibles. Accompagnement complet
            après sinistre et relations avec votre assurance.
          </p>
        </div>
      </section>
    </div>
  );
}
