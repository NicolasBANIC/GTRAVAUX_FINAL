import Hero from '../../components/Hero';
import Link from 'next/link';

export const metadata = {
  title: 'Démolition Contrôlée Strasbourg | Curage, Dépose, Débarras | G.TRAVAUX',
  description:
    'Entreprise de démolition intérieure à Strasbourg : curage, dépose de cloisons et revêtements, évacuation des gravats, préparation de chantier sécurisée.',
  keywords:
    'démolition Strasbourg, curage intérieur, dépose cloisons, évacuation gravats, strip-out, démolition contrôlée, g-travaux',
};

const interventionCards = [
  {
    title: 'Curage complet',
    gradient: 'from-primary/10 to-amber-100',
    items: [
      'Dépose maîtrisée des doublages, isolants et faux-plafonds',
      'Retrait des revêtements muraux, carrelages et sols souples',
      'Mise à nu des structures porteuses avant reconstruction',
      'Confinement anti-poussière et protections de circulation',
    ],
  },
  {
    title: 'Dépose ciblée',
    gradient: 'from-brand-orange-500/10 to-orange-100',
    items: [
      'Ouverture de murs non porteurs et démantèlement partiel',
      'Remplacement sécurisé de menuiseries, vitrines et escaliers',
      'Gestion des réseaux secondaires (plomberie, électricité)',
      'Maintien des structures conservées et protection des ouvrages',
    ],
  },
  {
    title: 'Débarras & logistique',
    gradient: 'from-brand-orange-500/10 to-orange-100',
    items: [
      'Location de bennes, big-bags et ascenseurs de chantier',
      'Tri à la source et valorisation des matériaux réutilisables',
      'Bordereaux de suivi des déchets (BSD BTP) conformes',
      'Nettoyage fin de chantier et remise en sécurité du site',
    ],
  },
];

const processSteps = [
  {
    title: 'Diagnostic structure & sécurisation',
    description:
      'Repérage réseaux (eau, gaz, électricité), étude de portance, confinements, protections collectives et planification des zones de coupe.',
  },
  {
    title: 'Curage & dépose sélective',
    description:
      "Retrait méthodique des cloisons, plafonds, sols, menuiseries et équipements, tri des matériaux valorisables et respect des éléments conservés.",
  },
  {
    title: 'Évacuation & nettoyage complet',
    description:
      "Évacuation contrôlée par big-bag ou benne, aspiration des poussières fines, remise en sécurité du site et préparation à la reconstruction.",
  },
];

const highlights = [
  {
    icon: '🛠️',
    title: 'Sécurité & préparation',
    description:
      'Analyse des structures, balisage des zones sensibles et communication chantier pour garantir une intervention sans risques.',
  },
  {
    icon: '♻️',
    title: 'Gestion réglementée des déchets',
    description:
      'Filières de traitement agréées, traçabilité et reporting environnemental pour chaque lot de dépose.',
  },
  {
    icon: '🏢',
    title: 'Interventions multi-sites',
    description:
      'Habitat, commerces, bureaux ou ERP : interventions en horaires adaptés (nuit/week-end) pour limiter les interruptions.',
  },
];

const commitments = [
  {
    icon: '🛡️',
    background: 'bg-brand-orange-500/10',
    title: 'Sécurité renforcée',
    description:
      "Respect strict des normes, protections collectives, consignation des réseaux et contrôle d'accès.",
  },
  {
    icon: '⏱️',
    background: 'bg-brand-orange-500/10',
    title: 'Délais maîtrisés',
    description:
      'Planning chantier optimisé, interventions coordonnées avec les autres corps d’état.',
  },
  {
    icon: '♻️',
    background: 'bg-yellow-100',
    title: 'Gestion des déchets',
    description:
      'Tri sélectif, filières réglementées et suivi documentaire conforme aux obligations.',
  },
  {
    icon: '📄',
    background: 'bg-purple-100',
    title: 'Reporting complet',
    description:
      "Compte rendu photo, point d'avancement hebdomadaire et PV de réception de curage.",
  },
];

export default function DemolitionPage() {
  return (
    <div>
      <Hero
        title="Démolition contrôlée"
        subtitle="Préparez vos chantiers de rénovation avec une dépose propre, rapide et sécurisée."
        imageSrc="/images/placeholder/demolition-hero.jpg"
        cta={{ label: 'Planifier un curage', href: '/contact' }}
      />

      {/* Schema.org pour le SEO */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            '@context': 'https://schema.org',
            '@type': 'Service',
            name: 'Démolition contrôlée',
            serviceType: 'Curage et dépose intérieure',
            provider: {
              '@type': 'LocalBusiness',
              '@id': 'https://g-travaux.fr/#business',
              name: 'G.TRAVAUX',
            },
            areaServed: ['Strasbourg', 'Colmar', 'Mulhouse'],
            brand: 'G.TRAVAUX',
            description:
              'Curage sélectif, démolition contrôlée et évacuation des gravats pour vos projets de rénovation intérieure en Alsace.',
          }),
        }}
      />

      <section className="container mx-auto space-y-16 px-4 py-16">
        {/* Présentation générale */}
        <div className="mx-auto max-w-4xl text-center lg:text-left">
          <h2 className="mb-6 text-3xl font-bold uppercase tracking-widest text-primary">
            Démolition intérieure maîtrisée pour des rénovations sereines
          </h2>
          <p className="text-lg leading-relaxed text-darkGray">
            Notre équipe dédiée assure des <strong>curages complets</strong> d'appartements, de maisons et de locaux professionnels. Nous gérons la <strong>dépose des cloisons, plafonds, revêtements et réseaux secondaires</strong> tout en garantissant la sécurité des ouvrages conservés. Chaque chantier est préparé pour permettre une reprise rapide des travaux de rénovation.
          </p>
        </div>

        {/* Expertises */}
        <div className="space-y-8">
          <h2 className="text-center text-3xl font-bold uppercase tracking-widest text-primary">
            Nos expertises de curage et de dépose
          </h2>
          <div className="grid grid-cols-1 gap-8 lg:grid-cols-3">
            {interventionCards.map(card => (
              <article
                key={card.title}
                className={`rounded-xl bg-gradient-to-br ${card.gradient} p-6 shadow-sm transition-transform duration-300 hover:-translate-y-1 hover:shadow-lg`}
              >
                <h3 className="mb-4 text-xl font-semibold text-primary">{card.title}</h3>
                <ul className="space-y-3 text-left text-sm leading-relaxed text-darkGray">
                  {card.items.map(item => (
                    <li key={item} className="flex items-start">
                      <span aria-hidden="true" className="mr-2 mt-1 text-brand-orange-600">
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
            Pourquoi confier votre démolition à G.TRAVAUX
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
            Une méthodologie en trois phases pour un chantier sécurisé
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

        {/* Engagements */}
        <div>
          <h2 className="mb-8 text-center text-3xl font-bold uppercase tracking-widest text-primary">
            Nos engagements sur chaque chantier
          </h2>
          <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-4">
            {commitments.map(commitment => (
              <article key={commitment.title} className="text-center">
                <div className={`mx-auto mb-4 flex size-16 items-center justify-center rounded-full ${commitment.background}`}>
                  <span aria-hidden="true" className="text-2xl">
                    {commitment.icon}
                  </span>
                </div>
                <h3 className="mb-2 font-semibold text-primary">{commitment.title}</h3>
                <p className="text-sm leading-relaxed text-darkGray">{commitment.description}</p>
              </article>
            ))}
          </div>
        </div>

        <div className="text-center">
          <Link
            href="/contact"
            className="button-accent px-8 py-4 text-lg transition-transform duration-300 hover:scale-105 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary/60"
            aria-label="Planifier un curage avec G.TRAVAUX"
          >
            Programmer une dépose
          </Link>
          <p className="mt-4 text-sm text-darkGray">
            Interventions Strasbourg • Colmar • Mulhouse • Metz • Nancy
          </p>
        </div>
      </section>
    </div>
  );
}