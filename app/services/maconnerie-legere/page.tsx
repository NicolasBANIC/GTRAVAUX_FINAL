import Hero from '../../components/Hero';
import Link from 'next/link';

export const metadata = {
  title:
    'Maçonnerie Légère Strasbourg | Ouvertures, Cloisons, Réparations | G.TRAVAUX',
  description:
    'Maçon spécialisé travaux légers Strasbourg, Colmar, Mulhouse. Création ouvertures murs, reprises maçonnerie, cloisons béton cellulaire, réparations structurelles. Devis gratuit.',
  keywords:
    'maçon Strasbourg, maçonnerie légère, création ouverture mur, reprise maçonnerie, cloison béton cellulaire, réparation fissures, seuils, linteaux, étaiement',
};

export default function MaconnerieLegerePage() {
  const steps = [
    {
      title: 'Étude structurelle & faisabilité',
      description:
        'Analyse portance murs, identification éléments porteurs, calcul charges admissibles, étude béton armé existant, définition méthodes étaiement, obtention autorisations selon travaux.',
    },
    {
      title: 'Étaiement & sécurisation chantier',
      description:
        'Pose étais métalliques ajustables, protection zones sensibles, confinement poussières, évacuation gravats, respect sécurité EPI, signalisation chantier selon réglementation.',
    },
    {
      title: 'Découpe & ouvertures contrôlées',
      description:
        'Découpe béton tronçonneuse thermique Ø350-400mm, perçage carotteuse, brise-roche hydraulique, pose linteaux acier/béton selon portée, scellement chimique certifié.',
    },
    {
      title: 'Maçonnerie & finitions étanches',
      description:
        'Montage parpaings/béton cellulaire, mortier hydrofuge, enduit grésé talloché, finition prête à carreler/peindre, nettoyage haute pression, réception travaux contrôlée.',
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

      {/* Schema.org pour le SEO */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            '@context': 'https://schema.org',
            '@type': 'Service',
            name: 'Maçonnerie Légère',
            serviceType: 'Travaux maçonnerie intérieure',
            provider: {
              '@type': 'LocalBusiness',
              '@id': 'https://g-travaux.fr/#business',
              name: 'G.TRAVAUX',
            },
            areaServed: ['Strasbourg', 'Colmar', 'Mulhouse'],
            brand: 'G.TRAVAUX',
            description:
              'Maçonnerie légère, création ouvertures, reprises, réparations structurelles en Alsace',
          }),
        }}
      />

      <section className="container mx-auto space-y-16 px-4 py-16 text-center">
        {/* Section principale */}
        <div>
          <h2 className="mb-6 text-3xl font-bold uppercase tracking-widest text-primary">
            Maçonnerie de rénovation et créations d'ouvertures sur mesure
          </h2>
          <p className="mx-auto mb-8 max-w-4xl text-lg leading-relaxed text-darkGray">
            Spécialistes en <strong>maçonnerie légère</strong> et{' '}
            <strong>gros œuvre de rénovation</strong>, nous réalisons vos{' '}
            <strong>créations d'ouvertures</strong>,
            <strong>reprises de maçonnerie</strong>,{' '}
            <strong>cloisons en béton cellulaire</strong> et{' '}
            <strong>réparations structurelles</strong>. Nos interventions
            respectent scrupuleusement les normes de{' '}
            <strong>sécurité chantier</strong>, l'
            <strong>étaiement préventif</strong>
            et les <strong>règles de l'art DTU 20.1</strong> pour des travaux
            durables et conformes.
          </p>
        </div>

        {/* Types d'interventions */}
        <div className="grid grid-cols-1 gap-12 lg:grid-cols-2">
          <div>
            <h3 className="mb-6 border-l-4 border-accent-600 pl-4 text-2xl font-bold text-primary">
              🔨 Ouvertures & percements
            </h3>
            <div className="space-y-4">
              <div className="rounded-lg border-l-4 border-red-500 bg-white p-4 shadow-sm">
                <h4 className="mb-2 font-semibold text-primary">
                  Création portes & fenêtres
                </h4>
                <p className="text-sm text-darkGray">
                  Découpe contrôlée béton/parpaings, pose linteaux acier IPN
                  80-200, étaiement préventif, finitions prêtes à poser
                  menuiseries.
                </p>
              </div>
              <div className="rounded-lg border-l-4 border-orange-500 bg-white p-4 shadow-sm">
                <h4 className="mb-2 font-semibold text-primary">
                  Percement passage/porte
                </h4>
                <p className="text-sm text-darkGray">
                  Carottage Ø100-400mm, treuil électrique, évacuation gravats,
                  reprise maçonnerie, enduit lissé prêt finition.
                </p>
              </div>
              <div className="rounded-lg border-l-4 border-yellow-500 bg-white p-4 shadow-sm">
                <h4 className="mb-2 font-semibold text-primary">
                  Agrandissement baies
                </h4>
                <p className="text-sm text-darkGray">
                  Modification ouvertures existantes, renforcement linteaux,
                  reprise tableaux, seuils pierre/béton, étanchéité
                  périphérique.
                </p>
              </div>
            </div>
          </div>

          <div>
            <h3 className="mb-6 border-l-4 border-accent-600 pl-4 text-2xl font-bold text-primary">
              🏗️ Cloisons & réparations
            </h3>
            <div className="space-y-4">
              <div className="rounded-lg border-l-4 border-blue-500 bg-white p-4 shadow-sm">
                <h4 className="mb-2 font-semibold text-primary">
                  Cloisons béton cellulaire
                </h4>
                <p className="text-sm text-darkGray">
                  Blocs Siporex 5-20cm, colle spécifique, chaînages
                  périphériques, finition enduit grésé taloché, isolation
                  intégrée.
                </p>
              </div>
              <div className="border-green-500 rounded-lg border-l-4 bg-white p-4 shadow-sm">
                <h4 className="mb-2 font-semibold text-primary">
                  Reprises maçonnerie ancienne
                </h4>
                <p className="text-sm text-darkGray">
                  Réfection joints à la chaux NHL, remplacement pierres
                  altérées, traitement humidité, consolidation fondations
                  superficielles.
                </p>
              </div>
              <div className="rounded-lg border-l-4 border-purple-500 bg-white p-4 shadow-sm">
                <h4 className="mb-2 font-semibold text-primary">
                  Réparation fissures structurelles
                </h4>
                <p className="text-sm text-darkGray">
                  Agrafage inox, injection résine époxy, renforcement fibres
                  carbone, suivi évolution, garantie stabilité 10 ans.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Techniques et matériaux */}
        <div>
          <h2 className="mb-8 text-center text-3xl font-bold uppercase tracking-widest text-primary">
            Techniques professionnelles & matériaux certifiés
          </h2>
          <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
            <div className="rounded-xl bg-gradient-to-br from-red-50 to-red-100 p-6">
              <h3 className="mb-4 border-b-2 border-red-300 pb-2 text-xl font-bold text-primary">
                ⚙️ Découpe & démolition
              </h3>
              <ul className="space-y-2 text-sm">
                <li className="flex items-center">
                  <span className="text-green-600 mr-2">✓</span> Tronçonneuse
                  thermique Ø400mm
                </li>
                <li className="flex items-center">
                  <span className="text-green-600 mr-2">✓</span> Carotteuse
                  béton Ø50-400mm
                </li>
                <li className="flex items-center">
                  <span className="text-green-600 mr-2">✓</span> Brise-roche
                  hydraulique 25kg
                </li>
                <li className="flex items-center">
                  <span className="text-green-600 mr-2">✓</span> Aspiration
                  poussières intégrée
                </li>
                <li className="flex items-center">
                  <span className="text-green-600 mr-2">✓</span> Protection
                  bâches étanches
                </li>
              </ul>
            </div>
            <div className="rounded-xl bg-gradient-to-br from-blue-50 to-blue-100 p-6">
              <h3 className="mb-4 border-b-2 border-blue-300 pb-2 text-xl font-bold text-primary">
                🏗️ Structure & renforcement
              </h3>
              <ul className="space-y-2 text-sm">
                <li className="flex items-center">
                  <span className="text-green-600 mr-2">✓</span> Étais
                  métalliques 1,5-4m
                </li>
                <li className="flex items-center">
                  <span className="text-green-600 mr-2">✓</span> Linteaux acier
                  IPN/HEB
                </li>
                <li className="flex items-center">
                  <span className="text-green-600 mr-2">✓</span> Scellement
                  chimique haute résistance
                </li>
                <li className="flex items-center">
                  <span className="text-green-600 mr-2">✓</span> Chaînages béton
                  armé HA8-12
                </li>
                <li className="flex items-center">
                  <span className="text-green-600 mr-2">✓</span> Contrôle
                  portance selon Eurocode
                </li>
              </ul>
            </div>
            <div className="from-green-50 to-green-100 rounded-xl bg-gradient-to-br p-6">
              <h3 className="border-green-300 mb-4 border-b-2 pb-2 text-xl font-bold text-primary">
                🧱 Matériaux & finitions
              </h3>
              <ul className="space-y-2 text-sm">
                <li className="flex items-center">
                  <span className="text-green-600 mr-2">✓</span> Parpaings NF
                  15-20cm B40
                </li>
                <li className="flex items-center">
                  <span className="text-green-600 mr-2">✓</span> Béton
                  cellulaire 5-25cm
                </li>
                <li className="flex items-center">
                  <span className="text-green-600 mr-2">✓</span> Mortier
                  hydrofuge M5/M10
                </li>
                <li className="flex items-center">
                  <span className="text-green-600 mr-2">✓</span> Enduit grésé
                  taloché CP10
                </li>
                <li className="flex items-center">
                  <span className="text-green-600 mr-2">✓</span> Pierre
                  naturelle locale
                </li>
              </ul>
            </div>
          </div>
        </div>

        {/* Applications par type de projet */}
        <div>
          <h2 className="mb-8 text-center text-3xl font-bold uppercase tracking-widest text-primary">
            Applications par type de rénovation
          </h2>
          <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-4">
            <div className="rounded-lg border-t-4 border-amber-500 bg-white p-4 shadow-lg">
              <h4 className="mb-3 text-center font-bold text-primary">
                🏠 Résidentiel
              </h4>
              <ul className="space-y-1 text-xs">
                <li>• Ouverture cuisine/salon</li>
                <li>• Création suite parentale</li>
                <li>• Rénovation cave/sous-sol</li>
                <li>• Agrandissement SDB</li>
                <li>• Porte-fenêtre terrasse</li>
              </ul>
            </div>
            <div className="rounded-lg border-t-4 border-blue-500 bg-white p-4 shadow-lg">
              <h4 className="mb-3 text-center font-bold text-primary">
                🏢 Commercial
              </h4>
              <ul className="space-y-1 text-xs">
                <li>• Réorganisation bureaux</li>
                <li>• Cloisons amovibles</li>
                <li>• Accès handicapés</li>
                <li>• Vitrines commerciales</li>
                <li>• Locaux techniques</li>
              </ul>
            </div>
            <div className="border-green-500 rounded-lg border-t-4 bg-white p-4 shadow-lg">
              <h4 className="mb-3 text-center font-bold text-primary">
                🏛️ Patrimoine
              </h4>
              <ul className="space-y-1 text-xs">
                <li>• Réfection joints pierre</li>
                <li>• Consolidation murs anciens</li>
                <li>• Respect architecture locale</li>
                <li>• Matériaux traditionnels</li>
                <li>• ABF compatible</li>
              </ul>
            </div>
            <div className="rounded-lg border-t-4 border-red-500 bg-white p-4 shadow-lg">
              <h4 className="mb-3 text-center font-bold text-primary">
                🔧 Technique
              </h4>
              <ul className="space-y-1 text-xs">
                <li>• Passage gaines techniques</li>
                <li>• Évacuation VMC</li>
                <li>• Conduits cheminée</li>
                <li>• Trappes accès combles</li>
                <li>• Renforcement plancher</li>
              </ul>
            </div>
          </div>
        </div>

        {/* Notre processus d'intervention */}
        <div>
          <h2 className="mb-8 text-center text-3xl font-bold uppercase tracking-widest text-primary">
            Notre méthode d'intervention sécurisée
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

        {/* Sécurité et conformité */}
        <div className="rounded-xl bg-gradient-to-r from-primary/10 to-accent-600/10 p-8">
          <h2 className="mb-6 text-center text-2xl font-bold text-primary">
            🛡️ Sécurité chantier & conformité réglementaire
          </h2>
          <div className="grid grid-cols-1 gap-6 md:grid-cols-4">
            <div className="text-center">
              <div className="mx-auto mb-4 flex size-16 items-center justify-center rounded-full bg-red-100">
                <span className="text-2xl">⚠️</span>
              </div>
              <h3 className="mb-2 font-semibold">
                Étude préalable obligatoire
              </h3>
              <p className="text-sm text-darkGray">
                Analyse structure & faisabilité
              </p>
            </div>
            <div className="text-center">
              <div className="mx-auto mb-4 flex size-16 items-center justify-center rounded-full bg-orange-100">
                <span className="text-2xl">🦺</span>
              </div>
              <h3 className="mb-2 font-semibold">Protection EPI complète</h3>
              <p className="text-sm text-darkGray">
                Casques, lunettes, masques P3
              </p>
            </div>
            <div className="text-center">
              <div className="mx-auto mb-4 flex size-16 items-center justify-center rounded-full bg-yellow-100">
                <span className="text-2xl">📋</span>
              </div>
              <h3 className="mb-2 font-semibold">Conformité DTU 20.1</h3>
              <p className="text-sm text-darkGray">
                Respect règles de l'art maçonnerie
              </p>
            </div>
            <div className="text-center">
              <div className="bg-green-100 mx-auto mb-4 flex size-16 items-center justify-center rounded-full">
                <span className="text-2xl">✅</span>
              </div>
              <h3 className="mb-2 font-semibold">Assurance décennale</h3>
              <p className="text-sm text-darkGray">Garantie structure 10 ans</p>
            </div>
          </div>
        </div>

        <div className="text-center">
          <Link href="/contact" className="button-accent px-8 py-4 text-lg">
            Demander une étude de faisabilité
          </Link>
          <p className="mt-4 text-sm text-darkGray">
            Consultation technique gratuite • Intervention Strasbourg, Colmar,
            Mulhouse
          </p>
        </div>
      </section>
    </div>
  );
}
