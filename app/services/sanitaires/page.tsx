import Hero from '../../components/Hero';
import Link from 'next/link';

export const metadata = {
  title: "Installation Sanitaires Strasbourg | Création Salles d'eau & Réseaux | G.TRAVAUX",
  description:
    "Solutions sanitaires complètes à Strasbourg : création de salles d'eau, réseaux d'alimentation, évacuation, chauffe-eau et équipements premium avec garantie décennale.",
  keywords:
    'sanitaires Strasbourg, installation salle de bain, réseau eau chaude, évacuation sanitaire, remplacement chauffe-eau, plomberie sanitaire, rénovation salle de bain',
};

const expertiseCards = [
  {
    title: "Conception d'espaces sanitaires",
    gradient: 'from-blue-50 to-blue-100',
    items: [
      "Études techniques et plans 3D pour salle d'eau complète",
      'Optimisation des réseaux eau chaude/froide et évacuation',
      'Choix des appareils sanitaires haut rendement',
      'Normes PMR et DTU 60.1 intégrées au projet',
    ],
  },
  {
    title: 'Installations techniques',
    gradient: 'from-primary/10 to-cyan-100',
    items: [
      'Alimentations PER/Multicouche avec collecteurs calibrés',
      'Groupes de sécurité et protections anti-retour conformes',
      'Systèmes de traitement d\'eau (adoucisseurs, filtres)',
      'Chauffe-eau thermodynamiques, électriques ou gaz',
    ],
  },
  {
    title: 'Étanchéité & finitions',
    gradient: 'from-rose-50 to-rose-100',
    items: [
      "Douches à l'italienne, receveurs extra-plats, parois vitrées",
      'Systèmes SEL/Spec pour zones humides et pièces d\'eau',
      'Pose carrelage grands formats et revêtements muraux',
      'Mobilier sur mesure, miroirs chauffants et accessoires',
    ],
  },
];

const processSteps = [
  {
    title: 'Audit & dimensionnement',
    description:
      "Relevés existants, contrôles pression et débit, calculs de sections, mise en conformité des arrivées et évacuations.",
  },
  {
    title: 'Installation & raccordements',
    description:
      "Pose des réseaux, intégration des appareils sanitaires, tests d'étanchéité, réglages et équilibrage des débits.",
  },
  {
    title: 'Mise en service & garanties',
    description:
      'Nettoyage, essais en charge, remise des notices, garantie décennale et contrat de maintenance optionnel.',
  },
];

const highlights = [
  {
    icon: '💧',
    title: "Gestion intelligente de l'eau",
    description:
      'Réducteurs de débit, mitigeurs thermostatiques et robinets temporisés pour une consommation optimisée.',
  },
  {
    icon: '⚙️',
    title: 'Équipements premium',
    description:
      'Partenariats fabricants (Grohe, Jacob Delafon, Geberit) pour garantir fiabilité et SAV rapide.',
  },
  {
    icon: '🛡️',
    title: 'Conformité & sécurité',
    description:
      'Respect des normes NF DTU 60.1, 60.11 et 36.5, protections anti-retours et dispositifs anti-brûlures.',
  },
];

const ctaList = [
  'Diagnostic sanitaire sous 48h avec relevé complet',
  'Devis détaillé avec variantes équipements',
  'Accompagnement assurance en cas de sinistre',
  'Interventions Strasbourg • Eurométropole • Bas-Rhin',
];

export default function SanitairesPage() {
  return (
    <div>
      <Hero
        title="Installations sanitaires complètes"
        subtitle="Des réseaux fiables, des salles d'eau élégantes et performantes pour tous vos projets de rénovation."
        imageSrc="/images/placeholder/sanitaires-hero.jpg"
        cta={{ label: 'Planifier un projet sanitaire', href: '/contact' }}
      />

      {/* Schema.org pour le SEO */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            '@context': 'https://schema.org',
            '@type': 'Service',
            name: 'Installation sanitaires',
            serviceType: "Création et rénovation d'espaces sanitaires",
            provider: {
              '@type': 'LocalBusiness',
              '@id': 'https://g-travaux.fr/#business',
              name: 'G.TRAVAUX',
            },
            areaServed: ['Strasbourg', 'Colmar', 'Mulhouse'],
            brand: 'G.TRAVAUX',
            description:
              "Conception et installation complètes d'espaces sanitaires, réseaux d'eau, chauffe-eau et équipements sur-mesure en Alsace.",
          }),
        }}
      />

      <section className="container mx-auto space-y-16 px-4 py-16">
        {/* Introduction */}
        <div className="mx-auto max-w-4xl text-center lg:text-left">
          <h2 className="mb-6 text-3xl font-bold uppercase tracking-widest text-primary">
            Des solutions sanitaires clés en main pour les particuliers et les pros
          </h2>
          <p className="text-lg leading-relaxed text-darkGray">
            De la <strong>création de salles de bain premium</strong> à la <strong>mise aux normes de réseaux sanitaires</strong>, notre équipe accompagne vos projets avec des solutions techniques fiables et esthétiques. Nous dimensionnons chaque installation selon l'usage, le nombre de points de puisage et les contraintes du bâtiment, tout en assurant la <strong>sécurité et la longévité des équipements</strong>.
          </p>
        </div>

        {/* Expertises */}
        <div className="space-y-8">
          <h2 className="text-center text-3xl font-bold uppercase tracking-widest text-primary">
            Nos domaines d'intervention sanitaire
          </h2>
          <div className="grid grid-cols-1 gap-8 lg:grid-cols-3">
            {expertiseCards.map(card => (
              <article
                key={card.title}
                className={`rounded-xl bg-gradient-to-br ${card.gradient} p-6 shadow-sm transition-transform duration-300 hover:-translate-y-1 hover:shadow-lg`}
              >
                <h3 className="mb-4 text-xl font-semibold text-primary">{card.title}</h3>
                <ul className="space-y-3 text-left text-sm leading-relaxed text-darkGray">
                  {card.items.map(item => (
                    <li key={item} className="flex items-start">
                      <span aria-hidden="true" className="text-green-600 mr-2 mt-1">
                        ✓
                      </span>
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </article>
            ))}
          </div>
        </div>

        {/* Points forts */}
        <div className="rounded-xl bg-gradient-to-r from-primary/10 to-accent-600/10 p-8">
          <h2 className="mb-8 text-center text-3xl font-bold uppercase tracking-widest text-primary">
            L'excellence sanitaire signée G.TRAVAUX
          </h2>
          <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
            {highlights.map(highlight => (
              <article
                key={highlight.title}
                className="rounded-lg bg-white/90 p-6 text-center shadow-sm backdrop-blur transition-transform duration-300 hover:-translate-y-1 hover:shadow-lg"
              >
                <div className="mx-auto mb-4 flex size-16 items-center justify-center rounded-full bg-primary/10">
                  <span aria-hidden="true" className="text-2xl">
                    {highlight.icon}
                  </span>
                </div>
                <h3 className="mb-3 text-lg font-semibold text-primary">{highlight.title}</h3>
                <p className="text-sm leading-relaxed text-darkGray">{highlight.description}</p>
              </article>
            ))}
          </div>
        </div>

        {/* Processus */}
        <div>
          <h2 className="mb-8 text-center text-3xl font-bold uppercase tracking-widest text-primary">
            Une méthodologie sanitaire éprouvée
          </h2>
          <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
            {processSteps.map((step, index) => (
              <article
                key={step.title}
                className="premium-card group flex flex-col space-y-4 border-t-4 border-accent-600 bg-white p-6 shadow-lg transition-all duration-300 hover:-translate-y-1 hover:shadow-xl"
              >
                <span className="inline-block text-4xl font-bold text-accent-600 transition-transform group-hover:scale-110">
                  {index + 1}
                </span>
                <h3 className="text-lg font-bold uppercase tracking-widest text-primary">
                  {step.title}
                </h3>
                <p className="text-sm leading-relaxed text-darkGray/90">{step.description}</p>
              </article>
            ))}
          </div>
        </div>

        {/* CTA list */}
        <div className="rounded-xl border border-primary/20 bg-white p-8 shadow-sm">
          <h2 className="mb-6 text-center text-2xl font-bold uppercase tracking-widest text-primary">
            Contactez-nous pour votre projet sanitaire
          </h2>
          <ul className="mx-auto max-w-3xl space-y-3 text-left text-sm leading-relaxed text-darkGray">
            {ctaList.map(item => (
              <li key={item} className="flex items-start">
                <span aria-hidden="true" className="text-green-600 mr-2 mt-1">
                  ✓
                </span>
                <span>{item}</span>
              </li>
            ))}
          </ul>
        </div>

        <div className="text-center">
          <Link
            href="/contact"
            className="button-accent px-8 py-4 text-lg transition-transform duration-300 hover:scale-105 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary/60"
            aria-label="Planifier un projet sanitaire avec G.TRAVAUX"
          >
            Demander un rendez-vous
          </Link>
          <p className="mt-4 text-sm text-darkGray">
            Strasbourg • Schiltigheim • Obernai • Erstein • Saverne
          </p>
        </div>
      </section>
    </div>
  );
}