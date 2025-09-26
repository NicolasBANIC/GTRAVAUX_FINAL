import Hero from '../../components/Hero';
import Link from 'next/link';

export const metadata = {
  title:
    'Électricité & Plomberie Strasbourg | Installation, Mise aux Normes NF C15-100 | G.TRAVAUX',
  description:
    'Expert électricien plombier Strasbourg, Colmar, Mulhouse. Installation électrique NF C15-100, plomberie sanitaire, dépannage 24h. Devis gratuit, artisan certifié.',
  keywords:
    'électricien Strasbourg, plombier Strasbourg, installation électrique, norme NF C15-100, plomberie sanitaire, dépannage électricité, mise aux normes électriques, VMC, tableau électrique, evacuation eaux usées',
};

export default function ElectricitePlomberiePage() {
  const steps = [
    {
      title: 'Diagnostic électrique & hydraulique',
      description:
        "Analyse complète de vos installations, vérification de la conformité NF C15-100, test d'étanchéité des circuits, évaluation des besoins en rénovation et établissement d'un devis détaillé transparent.",
    },
    {
      title: 'Mise aux normes & sécurisation',
      description:
        'Remise aux normes électriques NF C15-100, installation de protections différentielles 30mA, mise à la terre, pose de disjoncteurs adaptés et conformité plomberie sanitaire selon DTU 60.1.',
    },
    {
      title: 'Installation & remplacement',
      description:
        'Pose de tableaux électriques, câblage prise 16A/32A, installation VMC simple/double flux, remplacement canalisations cuivre/PER, raccordements eau chaude sanitaire.',
    },
    {
      title: 'Contrôles qualité & dépannage',
      description:
        "Tests de fonctionnement, vérifications étanchéité, contrôle isolement, dépannage électrique 24h/24, intervention plomberie d'urgence, maintenance préventive.",
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

      {/* Schema.org pour le SEO */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            '@context': 'https://schema.org',
            '@type': 'Service',
            name: 'Électricité & Plomberie',
            serviceType: 'Installation électrique et plomberie',
            provider: {
              '@type': 'LocalBusiness',
              '@id': 'https://g-travaux.fr/#business',
              name: 'G.TRAVAUX',
            },
            areaServed: ['Strasbourg', 'Colmar', 'Mulhouse'],
            brand: 'G.TRAVAUX',
            description:
              'Installation électrique NF C15-100, plomberie sanitaire, mise aux normes, dépannage électricité et plomberie en Alsace',
          }),
        }}
      />

      <section className="container mx-auto space-y-16 px-4 py-16 text-center">
        {/* Section principale */}
        <div>
          <h2 className="mb-6 text-3xl font-bold uppercase tracking-widest text-primary">
            Des installations électriques et plomberie conformes aux normes
          </h2>
          <p className="mx-auto mb-8 max-w-4xl text-lg leading-relaxed text-darkGray">
            Nous garantissons des{' '}
            <strong>installations électriques aux normes NF C15-100</strong> et
            une <strong>plomberie sanitaire</strong> conforme au DTU 60.1. Notre
            expertise couvre l'installation complète de{' '}
            <strong>tableaux électriques</strong>, la pose de{' '}
            <strong>protections différentielles</strong>, les systèmes de{' '}
            <strong>VMC simple et double flux</strong>, ainsi que les réseaux de
            plomberie étanches avec canalisations cuivre et PER.
          </p>
        </div>

        {/* Nos expertises techniques */}
        <div className="grid grid-cols-1 gap-12 lg:grid-cols-2">
          <div>
            <h3 className="mb-6 border-l-4 border-accent-600 pl-4 text-2xl font-bold text-primary">
              ⚡ Électricité générale
            </h3>
            <div className="space-y-4">
              <div className="rounded-lg border-l-4 border-blue-500 bg-white p-4 shadow-sm">
                <h4 className="mb-2 font-semibold text-primary">
                  Installation tableau électrique
                </h4>
                <p className="text-sm text-darkGray">
                  Pose de tableaux pré-câblés, disjoncteurs modulaires
                  16A/20A/32A, interrupteurs différentiels 30mA type A et AC
                  selon besoins.
                </p>
              </div>
              <div className="border-green-500 rounded-lg border-l-4 bg-white p-4 shadow-sm">
                <h4 className="mb-2 font-semibold text-primary">
                  Mise aux normes NF C15-100
                </h4>
                <p className="text-sm text-darkGray">
                  Rénovation complète installations anciennes, ajout prise de
                  terre, liaison équipotentielle salle de bain, protection
                  cuisine.
                </p>
              </div>
              <div className="rounded-lg border-l-4 border-purple-500 bg-white p-4 shadow-sm">
                <h4 className="mb-2 font-semibold text-primary">
                  Éclairage & domotique
                </h4>
                <p className="text-sm text-darkGray">
                  Circuits d'éclairage LED, variateurs, détecteurs de mouvement,
                  prises USB intégrées, solutions domotiques basiques.
                </p>
              </div>
            </div>
          </div>

          <div>
            <h3 className="mb-6 border-l-4 border-accent-600 pl-4 text-2xl font-bold text-primary">
              🔧 Plomberie sanitaire
            </h3>
            <div className="space-y-4">
              <div className="rounded-lg border-l-4 border-blue-500 bg-white p-4 shadow-sm">
                <h4 className="mb-2 font-semibold text-primary">
                  Réseaux eau chaude/froide
                </h4>
                <p className="text-sm text-darkGray">
                  Installation tubes cuivre ou PER, raccordements chauffe-eau,
                  robinetterie, mitigeurs thermostatiques, calorifugeage.
                </p>
              </div>
              <div className="rounded-lg border-l-4 border-orange-500 bg-white p-4 shadow-sm">
                <h4 className="mb-2 font-semibold text-primary">
                  Évacuation eaux usées
                </h4>
                <p className="text-sm text-darkGray">
                  Pose canalisations PVC évacuation, siphons, regards de visite,
                  raccordements tout-à-l'égout, ventilation primaire.
                </p>
              </div>
              <div className="rounded-lg border-l-4 border-teal-500 bg-white p-4 shadow-sm">
                <h4 className="mb-2 font-semibold text-primary">
                  VMC & ventilation
                </h4>
                <p className="text-sm text-darkGray">
                  Installation VMC simple flux, double flux, extracteurs salle
                  de bain, gaines isolées, bouches hygroréglables.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Notre processus d'intervention */}
        <div>
          <h2 className="mb-8 text-center text-3xl font-bold uppercase tracking-widest text-primary">
            Notre méthode d'intervention certifiée
          </h2>
          <div className="grid grid-cols-1 gap-8 md:grid-cols-2">
            {steps.map((step, index) => (
              <div
                key={step.title}
                className="premium-card group transition-all duration-300 hover:shadow-xl"
              >
                <span className="mb-3 inline-block text-4xl font-bold text-accent-600 transition-transform group-hover:scale-110">
                  {index + 1}
                </span>
                <h3 className="mb-3 text-lg font-bold uppercase tracking-widest text-primary">
                  {step.title}
                </h3>
                <p className="text-sm leading-relaxed text-darkGray/90">
                  {step.description}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Garanties et certifications */}
        <div className="rounded-xl bg-gradient-to-r from-primary/10 to-accent-600/10 p-8">
          <h2 className="mb-6 text-center text-2xl font-bold text-primary">
            🛡️ Nos garanties qualité
          </h2>
          <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
            <div className="text-center">
              <div className="bg-green-100 mx-auto mb-4 flex size-16 items-center justify-center rounded-full">
                <span className="text-2xl">✓</span>
              </div>
              <h3 className="mb-2 font-semibold">Conformité garantie</h3>
              <p className="text-sm text-darkGray">
                Installations conformes NF C15-100 et DTU plomberie
              </p>
            </div>
            <div className="text-center">
              <div className="mx-auto mb-4 flex size-16 items-center justify-center rounded-full bg-blue-100">
                <span className="text-2xl">🔧</span>
              </div>
              <h3 className="mb-2 font-semibold">Dépannage 24h/24</h3>
              <p className="text-sm text-darkGray">
                Intervention urgence électricité et plomberie
              </p>
            </div>
            <div className="text-center">
              <div className="mx-auto mb-4 flex size-16 items-center justify-center rounded-full bg-yellow-100">
                <span className="text-2xl">📋</span>
              </div>
              <h3 className="mb-2 font-semibold">Devis détaillé gratuit</h3>
              <p className="text-sm text-darkGray">
                Chiffrage transparent avec matériaux et main d'œuvre
              </p>
            </div>
          </div>
        </div>

        <div className="text-center">
          <Link href="/contact" className="button-accent px-8 py-4 text-lg">
            Demander un diagnostic gratuit
          </Link>
          <p className="mt-4 text-sm text-darkGray">
            Intervention sur Strasbourg, Colmar, Mulhouse et environs
          </p>
        </div>
      </section>
    </div>
  );
}
