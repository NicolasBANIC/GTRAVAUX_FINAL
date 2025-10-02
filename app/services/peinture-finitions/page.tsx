import Hero from '../../components/Hero';
import Link from 'next/link';

export const metadata = {
  title:
    'Peinture & Finitions Strasbourg | Intérieur, Enduits Décoratifs | G.TRAVAUX',
  description:
    'Peintre professionnel Strasbourg, Colmar, Mulhouse. Peinture intérieure, enduits décoratifs, papier peint, préparation supports. Finitions haut de gamme, devis gratuit.',
  keywords:
    'peintre Strasbourg, peinture intérieure, enduit décoratif, papier peint, préparation murs, peinture acrylique glycéro, finitions décoratives, laque satinée mate',
};

export default function PeinturePage() {
  const steps = [
    {
      title: 'Diagnostic & conseils chromatiques',
      description:
        'Analyse support existant, test adhérence, conseil couleurs RAL/NCS personnalisé selon exposition lumière, choix peintures techniques (lessivable, mate, satinée) adaptées usage et budget.',
    },
    {
      title: 'Préparation minutieuse supports',
      description:
        'Dégraissage lessivage St Marc, grattage écailles, rebouchage fissures enduit garnissant, ponçage 120-220 grains, égrenage, aspiration poussières, sous-couche spécifique.',
    },
    {
      title: 'Application professionnelle multicouches',
      description:
        'Peinture rouleau mohair/spalter, rechampis pinceau précision, 2-3 couches croisées, temps séchage respecté 4-6h, protection zones sensibles film adhésif.',
    },
    {
      title: 'Finitions & réception qualité',
      description:
        'Contrôle opacité/uniformité, retouches localisées, dépose protections, nettoyage chantier aspirateur HEPA, remise conseils entretien personnalisés, garantie 5 ans.',
    },
  ];

  return (
    <div>
      <Hero
        title="Peinture & finitions"
        subtitle="Des finitions impeccables pour des intérieurs éclatants."
        imageSrc="/images/peinture-hero.webp"
        cta={{ label: 'Demander un devis', href: '/contact' }}
      />

      {/* Schema.org: FAQ et Service pour SEO optimisé */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            '@context': 'https://schema.org',
            '@type': 'FAQPage',
            mainEntity: [
              {
                '@type': 'Question',
                name: 'Quels délais pour des travaux de peinture intérieure ?',
                acceptedAnswer: {
                  '@type': 'Answer',
                  text: 'Selon la surface et la préparation nécessaire, comptez généralement 2 à 5 jours ouvrés pour un logement standard. Les délais incluent préparation supports, sous-couche et 2-3 couches finition.',
                },
              },
              {
                '@type': 'Question',
                name: 'Quel est le prix peinture au m² ?',
                acceptedAnswer: {
                  '@type': 'Answer',
                  text: "Le prix dépend de l'état des supports et du type de peinture. À partir de 25€/m² pour une finition standard, 35-45€/m² pour du haut de gamme. Un devis gratuit détaillé est fourni après visite.",
                },
              },
              {
                '@type': 'Question',
                name: 'La protection du chantier est-elle incluse ?',
                acceptedAnswer: {
                  '@type': 'Answer',
                  text: 'Oui, la protection des sols, meubles et zones sensibles est systématiquement incluse. Nous utilisons films plastique, cartons et bâches respirantes de qualité professionnelle.',
                },
              },
              {
                '@type': 'Question',
                name: 'Proposez-vous des peintures écologiques ?',
                acceptedAnswer: {
                  '@type': 'Answer',
                  text: "Oui, nous proposons des peintures à l'eau, biosourcées et écolabellisées (NF Environnement, Ecolabel européen) pour préserver la qualité de l'air intérieur.",
                },
              },
            ],
          }),
        }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            '@context': 'https://schema.org',
            '@type': 'Service',
            name: 'Peinture & Finitions',
            serviceType: 'Peinture intérieure professionnelle',
            provider: {
              '@type': 'LocalBusiness',
              '@id': 'https://g-travaux.fr/#business',
              name: 'G.TRAVAUX',
            },
            areaServed: ['Strasbourg', 'Colmar', 'Mulhouse'],
            brand: 'G.TRAVAUX',
            description:
              'Peinture intérieure, enduits décoratifs, papier peint, finitions haut de gamme en Alsace',
          }),
        }}
      />

      <section className="container mx-auto space-y-16 px-4 py-16 text-center">
        {/* Section principale */}
        <div>
          <h2 className="mb-6 text-3xl font-bold uppercase tracking-widest text-primary">
            Peinture intérieure et finitions décoratives haut de gamme
          </h2>
          <p className="mx-auto mb-8 max-w-4xl text-lg leading-relaxed text-darkGray">
            Artisans <strong>peintres décorateurs</strong> spécialisés en{' '}
            <strong>peinture intérieure</strong>, nous sublimons vos espaces
            avec des
            <strong>finitions impeccables</strong>. Notre expertise couvre la{' '}
            <strong>peinture acrylique et glycéro</strong>, les{' '}
            <strong>enduits décoratifs</strong>, la{' '}
            <strong>pose de papier peint</strong> et les{' '}
            <strong>techniques décoratives</strong> pour créer des ambiances
            uniques adaptées à votre style de vie.
          </p>
        </div>

        {/* Gamme de prestations */}
        <div className="grid grid-cols-1 gap-12 lg:grid-cols-2">
          <div>
            <h3 className="border-accent-600 mb-6 border-l-4 pl-4 text-2xl font-bold text-primary">
              🎨 Peintures techniques
            </h3>
            <div className="space-y-4">
              <div className="rounded-lg border-l-4 border-brand-orange-600 bg-white p-4 shadow-sm">
                <h4 className="mb-2 font-semibold text-primary">
                  Peinture acrylique haut de gamme
                </h4>
                <p className="text-sm text-darkGray">
                  Phase aqueuse, séchage rapide 2h, lessivable classe 2-3,
                  microporeuse, faible odeur, 150+ teintes RAL/NCS disponibles.
                </p>
              </div>
              <div className="rounded-lg border-l-4 border-brand-orange-600 bg-white p-4 shadow-sm">
                <h4 className="mb-2 font-semibold text-primary">
                  Glycérophtalique traditionnelle
                </h4>
                <p className="text-sm text-darkGray">
                  Finition tendue parfaite, résistance lavage intensif,
                  durabilité 8-12 ans, idéale boiseries/radiateurs, application
                  spatule/rouleau.
                </p>
              </div>
              <div className="rounded-lg border-l-4 border-purple-500 bg-white p-4 shadow-sm">
                <h4 className="mb-2 font-semibold text-primary">
                  Peintures spéciales écologiques
                </h4>
                <p className="text-sm text-darkGray">
                  Biosourcées algues/résine végétale, écolabel NF Environnement,
                  COV &lt;1g/L, dépolluantes formaldéhyde, régulation
                  hygrométrie.
                </p>
              </div>
            </div>
          </div>

          <div>
            <h3 className="border-accent-600 mb-6 border-l-4 pl-4 text-2xl font-bold text-primary">
              ✨ Finitions décoratives
            </h3>
            <div className="space-y-4">
              <div className="rounded-lg border-l-4 border-amber-500 bg-white p-4 shadow-sm">
                <h4 className="mb-2 font-semibold text-primary">
                  Enduits décoratifs relief
                </h4>
                <p className="text-sm text-darkGray">
                  Tadelakt, stuc, chaux gratté, béton ciré, application taloche
                  inox, finition cire naturelle, personnalisation
                  textures/couleurs.
                </p>
              </div>
              <div className="rounded-lg border-l-4 border-brand-orange-600 bg-white p-4 shadow-sm">
                <h4 className="mb-2 font-semibold text-primary">
                  Papier peint & revêtements muraux
                </h4>
                <p className="text-sm text-darkGray">
                  Intissé, vinyle expansé, fibres naturelles, panoramiques
                  sur-mesure, colle spécifique, raccords parfaits, finition
                  baguettes.
                </p>
              </div>
              <div className="rounded-lg border-l-4 border-teal-500 bg-white p-4 shadow-sm">
                <h4 className="mb-2 font-semibold text-primary">
                  Techniques artistiques
                </h4>
                <p className="text-sm text-darkGray">
                  Patines, effets matières, faux-finis bois/pierre, dorure à la
                  feuille, fresques murales, pochoirs décoratifs personnalisés.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Solutions par pièce */}
        <div>
          <h2 className="mb-8 text-center text-3xl font-bold uppercase tracking-widest text-primary">
            Solutions adaptées à chaque environnement
          </h2>
          <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-4">
            <div className="rounded-xl bg-gradient-to-br from-brand-orange-500/10 to-orange-100 p-6">
              <h3 className="mb-4 text-xl font-bold text-primary">
                🛏️ Chambres
              </h3>
              <ul className="space-y-2 text-sm">
                <li className="flex items-center">
                  <span className="mr-2 text-brand-orange-600">✓</span> Peinture mate
                  anti-reflet
                </li>
                <li className="flex items-center">
                  <span className="mr-2 text-brand-orange-600">✓</span> Couleurs
                  apaisantes
                </li>
                <li className="flex items-center">
                  <span className="mr-2 text-brand-orange-600">✓</span> COV ultra-bas
                  &lt;5g/L
                </li>
                <li className="flex items-center">
                  <span className="mr-2 text-brand-orange-600">✓</span> Tête de lit
                  décorative
                </li>
                <li className="flex items-center">
                  <span className="mr-2 text-brand-orange-600">✓</span> Finition
                  velours
                </li>
              </ul>
            </div>
            <div className="rounded-xl bg-gradient-to-br from-brand-orange-500/10 to-orange-100 p-6">
              <h3 className="mb-4 text-xl font-bold text-primary">
                🍳 Cuisines
              </h3>
              <ul className="space-y-2 text-sm">
                <li className="flex items-center">
                  <span className="mr-2 text-brand-orange-600">✓</span> Lessivable
                  classe 1
                </li>
                <li className="flex items-center">
                  <span className="mr-2 text-brand-orange-600">✓</span> Résistance
                  graisse/vapeur
                </li>
                <li className="flex items-center">
                  <span className="mr-2 text-brand-orange-600">✓</span> Finition
                  satinée brillante
                </li>
                <li className="flex items-center">
                  <span className="mr-2 text-brand-orange-600">✓</span> Protection
                  anti-moisissures
                </li>
                <li className="flex items-center">
                  <span className="mr-2 text-brand-orange-600">✓</span> Carrelage mural
                  rénové
                </li>
              </ul>
            </div>
            <div className="rounded-xl bg-gradient-to-br from-purple-50 to-purple-100 p-6">
              <h3 className="mb-4 text-xl font-bold text-primary">
                🛁 Salles de bains
              </h3>
              <ul className="space-y-2 text-sm">
                <li className="flex items-center">
                  <span className="mr-2 text-brand-orange-600">✓</span> Peinture
                  anti-humidité
                </li>
                <li className="flex items-center">
                  <span className="mr-2 text-brand-orange-600">✓</span> Fongicide
                  intégré
                </li>
                <li className="flex items-center">
                  <span className="mr-2 text-brand-orange-600">✓</span> Joint silicone
                  sanitaire
                </li>
                <li className="flex items-center">
                  <span className="mr-2 text-brand-orange-600">✓</span> Enduit étanche
                  douche
                </li>
                <li className="flex items-center">
                  <span className="mr-2 text-brand-orange-600">✓</span> Ventilation
                  optimisée
                </li>
              </ul>
            </div>
            <div className="rounded-xl bg-gradient-to-br from-orange-50 to-orange-100 p-6">
              <h3 className="mb-4 text-xl font-bold text-primary">
                🏢 Espaces pro
              </h3>
              <ul className="space-y-2 text-sm">
                <li className="flex items-center">
                  <span className="mr-2 text-brand-orange-600">✓</span> Peinture NF
                  Environnement
                </li>
                <li className="flex items-center">
                  <span className="mr-2 text-brand-orange-600">✓</span> Résistance
                  trafic intensif
                </li>
                <li className="flex items-center">
                  <span className="mr-2 text-brand-orange-600">✓</span> Couleurs
                  corporate
                </li>
                <li className="flex items-center">
                  <span className="mr-2 text-brand-orange-600">✓</span> Signalétique
                  intégrée
                </li>
                <li className="flex items-center">
                  <span className="mr-2 text-brand-orange-600">✓</span> Intervention
                  hors horaires
                </li>
              </ul>
            </div>
          </div>
        </div>

        {/* Préparation supports */}
        <div>
          <h2 className="mb-8 text-center text-3xl font-bold uppercase tracking-widest text-primary">
            Préparation professionnelle des supports
          </h2>
          <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
            <div className="rounded-xl border-t-4 border-red-500 bg-white p-6 shadow-lg">
              <h4 className="mb-4 text-center text-xl font-bold text-primary">
                🔧 Diagnostic support
              </h4>
              <ul className="space-y-2 text-sm">
                <li>• Test adhérence quadrillage</li>
                <li>• Mesure pH/alcalinité</li>
                <li>• Détection salpêtre/moisissures</li>
                <li>• Analyse fissures structurelles</li>
                <li>• Préconisations techniques</li>
              </ul>
            </div>
            <div className="rounded-xl border-t-4 border-orange-500 bg-white p-6 shadow-lg">
              <h4 className="mb-4 text-center text-xl font-bold text-primary">
                🧽 Nettoyage intensif
              </h4>
              <ul className="space-y-2 text-sm">
                <li>• Lessivage dégraissant alcalin</li>
                <li>• Grattage écailles/cloquages</li>
                <li>• Décapage peinture ancienne</li>
                <li>• Traitement anti-moisissures</li>
                <li>• Rinçage neutralisation pH</li>
              </ul>
            </div>
            <div className="rounded-xl border-t-4 border-brand-orange-600 bg-white p-6 shadow-lg">
              <h4 className="mb-4 text-center text-xl font-bold text-primary">
                🏗️ Réparation finition
              </h4>
              <ul className="space-y-2 text-sm">
                <li>• Rebouchage fissures enduit garnissant</li>
                <li>• Ponçage égrenage 120-220 grains</li>
                <li>• Sous-couche fixatrice spécifique</li>
                <li>• Ratissage lissage parfait</li>
                <li>• Contrôle planéité/rugosité</li>
              </ul>
            </div>
          </div>
        </div>

        {/* Notre processus d'intervention */}
        <div>
          <h2 className="mb-8 text-center text-3xl font-bold uppercase tracking-widest text-primary">
            Notre méthode d'application professionnelle
          </h2>
          <div className="grid grid-cols-1 gap-8 md:grid-cols-2">
            {steps.map((step, index) => (
              <div
                key={step.title}
                className="premium-card group transition-all duration-300 hover:shadow-xl"
              >
                <span className="text-accent-600 mb-3 inline-block text-4xl font-bold transition-transform group-hover:scale-110">
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

        {/* Garanties et services */}
        <div className="to-accent-600/10 rounded-xl bg-gradient-to-r from-primary/10 p-8">
          <h2 className="mb-6 text-center text-2xl font-bold text-primary">
            🏆 Garanties qualité & services inclus
          </h2>
          <div className="grid grid-cols-1 gap-6 md:grid-cols-4">
            <div className="text-center">
              <div className="mx-auto mb-4 flex size-16 items-center justify-center rounded-full bg-brand-orange-500/10">
                <span className="text-2xl">🎨</span>
              </div>
              <h3 className="mb-2 font-semibold">Garantie finition 5 ans</h3>
              <p className="text-sm text-darkGray">Tenue couleur & adhérence</p>
            </div>
            <div className="text-center">
              <div className="mx-auto mb-4 flex size-16 items-center justify-center rounded-full bg-brand-orange-500/10">
                <span className="text-2xl">🛡️</span>
              </div>
              <h3 className="mb-2 font-semibold">Protection complète</h3>
              <p className="text-sm text-darkGray">Sols, meubles, végétaux</p>
            </div>
            <div className="text-center">
              <div className="mx-auto mb-4 flex size-16 items-center justify-center rounded-full bg-yellow-100">
                <span className="text-2xl">🧪</span>
              </div>
              <h3 className="mb-2 font-semibold">Test couleur gratuit</h3>
              <p className="text-sm text-darkGray">Échantillon 50x50cm</p>
            </div>
            <div className="text-center">
              <div className="mx-auto mb-4 flex size-16 items-center justify-center rounded-full bg-purple-100">
                <span className="text-2xl">♻️</span>
              </div>
              <h3 className="mb-2 font-semibold">Recyclage déchets</h3>
              <p className="text-sm text-darkGray">
                Évacuation écologique incluse
              </p>
            </div>
          </div>
        </div>

        <div className="text-center">
          <Link href="/contact" className="button-accent px-8 py-4 text-lg">
            Demander un devis peinture personnalisé
          </Link>
          <p className="mt-4 text-sm text-darkGray">
            Conseil couleurs gratuit • Intervention Strasbourg, Colmar, Mulhouse
            et environs
          </p>
        </div>
      </section>
    </div>
  );
}
