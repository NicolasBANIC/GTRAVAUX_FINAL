import Hero from '../../components/Hero';
import Link from 'next/link';

export const metadata = {
  title:
    'Électricité Strasbourg | Installation, Mise aux Normes NF C15-100 | G.TRAVAUX',
  description:
    'Expert électricien Strasbourg, Colmar, Mulhouse. Installation électrique NF C15-100, dépannage 24h, tableau électrique. Devis gratuit, artisan certifié.',
  keywords:
    'électricien Strasbourg, installation électrique, norme NF C15-100, dépannage électricité, mise aux normes électriques, tableau électrique, éclairage LED',
};

export default function ElectricitePage() {
  const steps = [
    {
      title: 'Diagnostic électrique complet',
      description:
        "Analyse complète de vos installations, vérification de la conformité NF C15-100, test d'isolement, évaluation des besoins en rénovation et établissement d'un devis détaillé transparent.",
    },
    {
      title: 'Mise aux normes & sécurisation',
      description:
        'Remise aux normes électriques NF C15-100, installation de protections différentielles 30mA, mise à la terre, pose de disjoncteurs adaptés et sécurisation complète.',
    },
    {
      title: 'Installation & câblage',
      description:
        'Pose de tableaux électriques, câblage prise 16A/32A, installation circuits éclairage, prises spécialisées, solutions domotiques et éclairage LED.',
    },
    {
      title: 'Contrôles & dépannage',
      description:
        "Tests de fonctionnement, vérifications isolement, contrôle continuité, dépannage électrique 24h/24, intervention d'urgence, maintenance préventive.",
    },
  ];

  return (
    <div>
      <Hero
        title="Électricité"
        subtitle="Des installations électriques fiables et conformes aux normes."
        imageSrc="/images/placeholder/electricite-hero.png"
        cta={{ label: 'Demander un devis', href: '/contact' }}
      />

      {/* Schema.org pour le SEO */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            '@context': 'https://schema.org',
            '@type': 'Service',
            name: 'Électricité',
            serviceType: 'Installation électrique',
            provider: {
              '@type': 'LocalBusiness',
              '@id': 'https://g-travaux.fr/#business',
              name: 'G.TRAVAUX',
            },
            areaServed: ['Strasbourg', 'Colmar', 'Mulhouse'],
            brand: 'G.TRAVAUX',
            description:
              'Installation électrique NF C15-100, mise aux normes, dépannage électricité en Alsace',
          }),
        }}
      />

      <section className="container mx-auto space-y-16 px-4 py-16 text-center">
        {/* Section principale */}
        <div>
          <h2 className="mb-6 text-3xl font-bold uppercase tracking-widest text-primary">
            Des installations électriques conformes aux normes NF C15-100
          </h2>
          <p className="mx-auto mb-8 max-w-4xl text-lg leading-relaxed text-darkGray">
            Nous garantissons des{' '}
            <strong>installations électriques aux normes NF C15-100</strong> et
            une sécurité optimale. Notre expertise couvre l'installation complète de{' '}
            <strong>tableaux électriques</strong>, la pose de{' '}
            <strong>protections différentielles</strong>, les circuits d'{' '}
            <strong>éclairage LED</strong>, ainsi que les solutions de{' '}
            <strong>domotique moderne</strong> pour votre confort.
          </p>
        </div>

        {/* Nos expertises techniques */}
        <div className="grid grid-cols-1 gap-8 lg:grid-cols-2">
          <div className="space-y-4">
            <div className="rounded-lg border-l-4 border-brand-orange-600 bg-white p-4 shadow-sm">
              <h4 className="mb-2 font-semibold text-primary">
                Installation tableau électrique
              </h4>
              <p className="text-sm text-darkGray">
                Pose de tableaux pré-câblés, disjoncteurs modulaires
                16A/20A/32A, interrupteurs différentiels 30mA type A et AC
                selon besoins.
              </p>
            </div>
            <div className="border-brand-orange-600 rounded-lg border-l-4 bg-white p-4 shadow-sm">
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

          <div className="space-y-4">
            <div className="rounded-lg border-l-4 border-orange-500 bg-white p-4 shadow-sm">
              <h4 className="mb-2 font-semibold text-primary">
                Prises et circuits spécialisés
              </h4>
              <p className="text-sm text-darkGray">
                Installation prises 16A/32A, circuits spécialisés lave-linge,
                lave-vaisselle, four, plaques de cuisson, bornes de recharge.
              </p>
            </div>
            <div className="rounded-lg border-l-4 border-teal-500 bg-white p-4 shadow-sm">
              <h4 className="mb-2 font-semibold text-primary">
                Dépannage électrique
              </h4>
              <p className="text-sm text-darkGray">
                Intervention 24h/24, recherche de pannes, remplacement
                disjoncteurs, réparation circuits défaillants, mise en sécurité.
              </p>
            </div>
            <div className="rounded-lg border-l-4 border-red-500 bg-white p-4 shadow-sm">
              <h4 className="mb-2 font-semibold text-primary">
                Sécurité électrique
              </h4>
              <p className="text-sm text-darkGray">
                Contrôle installations, test isolement, vérification mise à la
                terre, diagnostic sécurité, certification conformité.
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
            ⚡ Nos garanties électricité
          </h2>
          <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
            <div className="text-center">
              <div className="bg-brand-orange-500/10 mx-auto mb-4 flex size-16 items-center justify-center rounded-full">
                <span className="text-2xl">✓</span>
              </div>
              <h3 className="mb-2 font-semibold">Conformité NF C15-100</h3>
              <p className="text-sm text-darkGray">
                Installations conformes aux normes électriques en vigueur
              </p>
            </div>
            <div className="text-center">
              <div className="mx-auto mb-4 flex size-16 items-center justify-center rounded-full bg-brand-orange-500/10">
                <span className="text-2xl">🔧</span>
              </div>
              <h3 className="mb-2 font-semibold">Dépannage 24h/24</h3>
              <p className="text-sm text-darkGray">
                Intervention urgence électricité, mise en sécurité
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
            Demander un diagnostic électrique gratuit
          </Link>
          <p className="mt-4 text-sm text-darkGray">
            Intervention sur Strasbourg, Colmar, Mulhouse et environs
          </p>
        </div>
      </section>
    </div>
  );
}