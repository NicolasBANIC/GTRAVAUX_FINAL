import Hero from '../../components/Hero';
import Link from 'next/link';

export const metadata = {
  title:
    'Plomberie Strasbourg | Installation, Réparation, Dépannage | G.TRAVAUX',
  description:
    'Expert plombier Strasbourg, Colmar, Mulhouse. Installation plomberie sanitaire, réparation, dépannage 24h, VMC. Devis gratuit, artisan certifié.',
  keywords:
    'plombier Strasbourg, plomberie sanitaire, dépannage plomberie, installation eau chaude, VMC, évacuation eaux usées, réparation fuite',
};

export default function PlomberiePage() {
  const steps = [
    {
      title: 'Diagnostic hydraulique complet',
      description:
        "Analyse complète de vos installations, test d'étanchéité des circuits, vérification pression, évaluation des besoins en rénovation et établissement d'un devis détaillé transparent.",
    },
    {
      title: 'Installation & raccordement',
      description:
        'Installation réseaux eau chaude/froide, raccordements chauffe-eau, pose canalisations cuivre/PER, robinetterie, mitigeurs thermostatiques selon DTU 60.1.',
    },
    {
      title: 'Évacuation & ventilation',
      description:
        'Pose canalisations PVC évacuation, siphons, regards de visite, raccordements tout-à-l\'égout, installation VMC simple/double flux, ventilation primaire.',
    },
    {
      title: 'Contrôles & dépannage',
      description:
        "Tests étanchéité, vérifications pression, contrôle évacuation, dépannage plomberie 24h/24, intervention d'urgence, maintenance préventive.",
    },
  ];

  return (
    <div>
      <Hero
        title="Plomberie"
        subtitle="Des installations de plomberie fiables et durables."
        imageSrc="/images/placeholder/plomberie-hero.jpg"
        cta={{ label: 'Demander un devis', href: '/contact' }}
      />

      {/* Schema.org pour le SEO */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            '@context': 'https://schema.org',
            '@type': 'Service',
            name: 'Plomberie',
            serviceType: 'Installation plomberie',
            provider: {
              '@type': 'LocalBusiness',
              '@id': 'https://g-travaux.fr/#business',
              name: 'G.TRAVAUX',
            },
            areaServed: ['Strasbourg', 'Colmar', 'Mulhouse'],
            brand: 'G.TRAVAUX',
            description:
              'Installation plomberie sanitaire, réparation, dépannage plomberie en Alsace',
          }),
        }}
      />

      <section className="container mx-auto space-y-16 px-4 py-16 text-center">
        {/* Section principale */}
        <div>
          <h2 className="mb-6 text-3xl font-bold uppercase tracking-widest text-primary">
            Des installations de plomberie conformes au DTU 60.1
          </h2>
          <p className="mx-auto mb-8 max-w-4xl text-lg leading-relaxed text-darkGray">
            Nous garantissons une{' '}
            <strong>plomberie sanitaire</strong> conforme au DTU 60.1 et
            des installations durables. Notre expertise couvre les{' '}
            <strong>réseaux eau chaude/froide</strong>, l'{' '}
            <strong>évacuation des eaux usées</strong>, les systèmes de{' '}
            <strong>VMC simple et double flux</strong>, ainsi que tous vos{' '}
            <strong>équipements sanitaires</strong>.
          </p>
        </div>

        {/* Nos expertises techniques */}
        <div className="grid grid-cols-1 gap-8 lg:grid-cols-2">
          <div className="space-y-4">
            <div className="rounded-lg border-l-4 border-brand-orange-600 bg-white p-4 shadow-sm">
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

          <div className="space-y-4">
            <div className="rounded-lg border-l-4 border-brand-orange-600 bg-white p-4 shadow-sm">
              <h4 className="mb-2 font-semibold text-primary">
                Équipements sanitaires
              </h4>
              <p className="text-sm text-darkGray">
                Pose lavabos, WC, douches, baignoires, receveurs, parois de
                douche, accessoires salle de bain.
              </p>
            </div>
            <div className="rounded-lg border-l-4 border-purple-500 bg-white p-4 shadow-sm">
              <h4 className="mb-2 font-semibold text-primary">
                Dépannage plomberie
              </h4>
              <p className="text-sm text-darkGray">
                Intervention 24h/24, réparation fuites, débouchage canalisations,
                remplacement robinetterie, mise en sécurité.
              </p>
            </div>
            <div className="rounded-lg border-l-4 border-red-500 bg-white p-4 shadow-sm">
              <h4 className="mb-2 font-semibold text-primary">
                Maintenance préventive
              </h4>
              <p className="text-sm text-darkGray">
                Contrôle installations, détartrage, entretien chauffe-eau,
                vérification étanchéité, diagnostic préventif.
              </p>
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
            🔧 Nos garanties plomberie
          </h2>
          <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
            <div className="text-center">
              <div className="bg-brand-orange-500/10 mx-auto mb-4 flex size-16 items-center justify-center rounded-full">
                <span className="text-2xl">✓</span>
              </div>
              <h3 className="mb-2 font-semibold">Conformité DTU 60.1</h3>
              <p className="text-sm text-darkGray">
                Installations conformes aux normes plomberie en vigueur
              </p>
            </div>
            <div className="text-center">
              <div className="mx-auto mb-4 flex size-16 items-center justify-center rounded-full bg-brand-orange-500/10">
                <span className="text-2xl">🚿</span>
              </div>
              <h3 className="mb-2 font-semibold">Dépannage 24h/24</h3>
              <p className="text-sm text-darkGray">
                Intervention urgence plomberie, réparation fuites
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
            Demander un diagnostic plomberie gratuit
          </Link>
          <p className="mt-4 text-sm text-darkGray">
            Intervention sur Strasbourg, Colmar, Mulhouse et environs
          </p>
        </div>
      </section>
    </div>
  );
}