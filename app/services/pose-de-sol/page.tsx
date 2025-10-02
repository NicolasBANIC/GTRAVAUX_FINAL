import Hero from '../../components/Hero';
import Link from 'next/link';

export const metadata = {
  title:
    'Pose de Sol Strasbourg | Parquet, Carrelage, Vinyle, Stratifié | G.TRAVAUX',
  description:
    'Poseur de sol professionnel Strasbourg, Colmar, Mulhouse. Parquet massif, flottant, carrelage, sol vinyle LVT, stratifié. Ragréage, finitions. Devis gratuit, garantie décennale.',
  keywords:
    'poseur sol Strasbourg, pose parquet, pose carrelage, sol vinyle, stratifié, ragréage sol, ponçage parquet, pose flottante, collée, clouée, finitions plinthes',
};

export default function PoseDeSolPage() {
  const steps = [
    {
      title: 'Diagnostic support & préconisations',
      description:
        'Analyse planéité support ±5mm/2m, mesure hygrométrie <2,5% CM, test adhérence, évaluation contraintes passage, choix technique pose adaptée (flottante, collée, clouée).',
    },
    {
      title: 'Préparation support professionnel',
      description:
        "Ragréage fibré autolissant, ponçage/dégraissage, primaire d'accrochage, film polyane, sous-couche acoustique selon UPEC/NF DTU 53.1, planéité ±3mm/2m.",
    },
    {
      title: 'Pose technique & finitions',
      description:
        "Pose selon règles de l'art DTU, joints périphériques 8-10mm, coupes précises scie radiale, collage acrylique/PU selon trafic, contrôle alignements laser.",
    },
    {
      title: 'Finitions & protection chantier',
      description:
        'Pose plinthes MDF/massif, barres de seuil adaptées, masticage joints acrylique, protection film pendant séchage 48h, conseils entretien personnalisés.',
    },
  ];

  return (
    <div>
      <Hero
        title="Pose de sol"
        subtitle="Des revêtements adaptés à votre mode de vie."
        imageSrc="/images/placeholder/pose-sol-hero.webp"
        cta={{ label: 'Demander un devis', href: '/contact' }}
      />

      {/* Schema.org pour le SEO */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            '@context': 'https://schema.org',
            '@type': 'Service',
            name: 'Pose de Sol',
            serviceType: 'Pose revêtements de sol',
            provider: {
              '@type': 'LocalBusiness',
              '@id': 'https://g-travaux.fr/#business',
              name: 'G.TRAVAUX',
            },
            areaServed: ['Strasbourg', 'Colmar', 'Mulhouse'],
            brand: 'G.TRAVAUX',
            description:
              'Pose parquet, carrelage, sol vinyle, stratifié en Alsace. Ragréage, finitions professionnelles',
          }),
        }}
      />

      <section className="container mx-auto space-y-16 px-4 py-16 text-center">
        {/* Section principale */}
        <div>
          <h2 className="mb-6 text-3xl font-bold uppercase tracking-widest text-primary">
            Pose de sols techniques et esthétiques par des artisans qualifiés
          </h2>
          <p className="mx-auto mb-8 max-w-4xl text-lg leading-relaxed text-darkGray">
            Spécialistes en <strong>pose de revêtements de sols</strong>, nous
            maîtrisons toutes les techniques : <strong>parquet massif</strong>,
            <strong>parquet flottant</strong>,{' '}
            <strong>carrelage grand format</strong>,{' '}
            <strong>sol vinyle LVT</strong> et{' '}
            <strong>stratifié haute densité</strong>. Nos prestations incluent
            le <strong>ragréage autolissant</strong>, les{' '}
            <strong>finitions plinthes</strong> et le respect des normes{' '}
            <strong>DTU 53.1</strong>
            pour un résultat durable et esthétique.
          </p>
        </div>

        {/* Types de sols par catégorie */}
        <div className="grid grid-cols-1 gap-12 lg:grid-cols-2">
          <div>
            <h3 className="border-accent-600 mb-6 border-l-4 pl-4 text-2xl font-bold text-primary">
              🪵 Parquets & bois
            </h3>
            <div className="space-y-4">
              <div className="rounded-lg border-l-4 border-amber-500 bg-white p-4 shadow-sm">
                <h4 className="mb-2 font-semibold text-primary">
                  Parquet massif traditionnel
                </h4>
                <p className="text-sm text-darkGray">
                  Chêne, hêtre, châtaignier 14-23mm, pose clouée/collée, ponçage
                  3 grains, vitrification 3 couches polyuréthane.
                </p>
              </div>
              <div className="border-brown-500 rounded-lg border-l-4 bg-white p-4 shadow-sm">
                <h4 className="mb-2 font-semibold text-primary">
                  Parquet contrecollé 2/3 plis
                </h4>
                <p className="text-sm text-darkGray">
                  Parement noble 3-6mm, pose flottante/collée, sous-couche
                  phonique 2-5mm, finition usine ou chantier.
                </p>
              </div>
              <div className="rounded-lg border-l-4 border-orange-500 bg-white p-4 shadow-sm">
                <h4 className="mb-2 font-semibold text-primary">
                  Parquet bambou écologique
                </h4>
                <p className="text-sm text-darkGray">
                  Densité 900kg/m³, classe 33 trafic élevé, pose clipsable,
                  résistance rayures optimale, PEFC certifié.
                </p>
              </div>
            </div>
          </div>

          <div>
            <h3 className="border-accent-600 mb-6 border-l-4 pl-4 text-2xl font-bold text-primary">
              🏠 Carrelages & sols durs
            </h3>
            <div className="space-y-4">
              <div className="rounded-lg border-l-4 border-slate-500 bg-white p-4 shadow-sm">
                <h4 className="mb-2 font-semibold text-primary">
                  Carrelage grand format
                </h4>
                <p className="text-sm text-darkGray">
                  Grès cérame 60x60-120x120cm, rectifié 2mm, pose
                  double-encollage, joint époxy, UPEC U4P3E3C2.
                </p>
              </div>
              <div className="rounded-lg border-l-4 border-gray-500 bg-white p-4 shadow-sm">
                <h4 className="mb-2 font-semibold text-primary">
                  Pierre naturelle & marbre
                </h4>
                <p className="text-sm text-darkGray">
                  Travertin, granit, ardoise, traitement hydrofuge, joints
                  flexibles, finition polie/vieillie selon usage.
                </p>
              </div>
              <div className="rounded-lg border-l-4 border-zinc-500 bg-white p-4 shadow-sm">
                <h4 className="mb-2 font-semibold text-primary">
                  Carrelage technique SDB
                </h4>
                <p className="text-sm text-darkGray">
                  Antidérapant R10-R13, étanchéité SEL, siphon de sol, pente
                  1-2%, résistance gel-dégel.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Sols souples et modernes */}
        <div>
          <h2 className="mb-8 text-center text-3xl font-bold uppercase tracking-widest text-primary">
            Sols souples haute technologie
          </h2>
          <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
            <div className="rounded-xl bg-gradient-to-br from-brand-orange-500/10 to-orange-100 p-6">
              <h3 className="mb-4 text-xl font-bold text-primary">
                💎 Sol vinyle LVT
              </h3>
              <ul className="space-y-2 text-sm">
                <li className="flex items-center">
                  <span className="mr-2 text-brand-orange-600">✓</span> Épaisseur
                  2,5-4mm
                </li>
                <li className="flex items-center">
                  <span className="mr-2 text-brand-orange-600">✓</span> Classe 33-34
                  commercial
                </li>
                <li className="flex items-center">
                  <span className="mr-2 text-brand-orange-600">✓</span> Pose
                  libre/collée
                </li>
                <li className="flex items-center">
                  <span className="mr-2 text-brand-orange-600">✓</span> 100% étanche
                </li>
                <li className="flex items-center">
                  <span className="mr-2 text-brand-orange-600">✓</span> Imitation
                  bois/pierre
                </li>
              </ul>
            </div>
            <div className="rounded-xl bg-gradient-to-br from-brand-orange-500/10 to-orange-100 p-6">
              <h3 className="mb-4 text-xl font-bold text-primary">
                🏢 Stratifié haute densité
              </h3>
              <ul className="space-y-2 text-sm">
                <li className="flex items-center">
                  <span className="mr-2 text-brand-orange-600">✓</span> HDF 850kg/m³
                  minimum
                </li>
                <li className="flex items-center">
                  <span className="mr-2 text-brand-orange-600">✓</span> AC4-AC6 usage
                  intensif
                </li>
                <li className="flex items-center">
                  <span className="mr-2 text-brand-orange-600">✓</span> Chanfrein V2-V4
                </li>
                <li className="flex items-center">
                  <span className="mr-2 text-brand-orange-600">✓</span> Pose clipsable
                  5G
                </li>
                <li className="flex items-center">
                  <span className="mr-2 text-brand-orange-600">✓</span> Garantie 20-25
                  ans
                </li>
              </ul>
            </div>
            <div className="rounded-xl bg-gradient-to-br from-purple-50 to-purple-100 p-6">
              <h3 className="mb-4 text-xl font-bold text-primary">
                🧪 Résines & bétons cirés
              </h3>
              <ul className="space-y-2 text-sm">
                <li className="flex items-center">
                  <span className="mr-2 text-brand-orange-600">✓</span> Résine époxy
                  2-3mm
                </li>
                <li className="flex items-center">
                  <span className="mr-2 text-brand-orange-600">✓</span> Béton ciré
                  taloché
                </li>
                <li className="flex items-center">
                  <span className="mr-2 text-brand-orange-600">✓</span> Finition
                  satinée/mate
                </li>
                <li className="flex items-center">
                  <span className="mr-2 text-brand-orange-600">✓</span> Joint de
                  dilatation
                </li>
                <li className="flex items-center">
                  <span className="mr-2 text-brand-orange-600">✓</span>{' '}
                  Personnalisation couleur
                </li>
              </ul>
            </div>
          </div>
        </div>

        {/* Techniques de pose */}
        <div>
          <h2 className="mb-8 text-center text-3xl font-bold uppercase tracking-widest text-primary">
            Techniques de pose professionnelles
          </h2>
          <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-4">
            <div className="rounded-lg border-t-4 border-brand-orange-600 bg-white p-4 shadow-lg">
              <h4 className="mb-3 text-center font-bold text-primary">
                🔨 Pose clouée
              </h4>
              <ul className="space-y-1 text-xs">
                <li>• Parquet massif ≥14mm</li>
                <li>• Solives bois traditionnelles</li>
                <li>• Clous tête homme 50mm</li>
                <li>• Cloueur pneumatique</li>
                <li>• Durabilité maximale</li>
              </ul>
            </div>
            <div className="rounded-lg border-t-4 border-brand-orange-600 bg-white p-4 shadow-lg">
              <h4 className="mb-3 text-center font-bold text-primary">
                🧴 Pose collée
              </h4>
              <ul className="space-y-1 text-xs">
                <li>• Colle PU/MS polymère</li>
                <li>• Spatule crantée 6-10mm</li>
                <li>• Temps ouvert 20-40min</li>
                <li>• Sol chauffant compatible</li>
                <li>• Stabilité dimensionnelle</li>
              </ul>
            </div>
            <div className="rounded-lg border-t-4 border-orange-500 bg-white p-4 shadow-lg">
              <h4 className="mb-3 text-center font-bold text-primary">
                🔗 Pose flottante
              </h4>
              <ul className="space-y-1 text-xs">
                <li>• Rainure-languette collée</li>
                <li>• Joint périphérique 8-10mm</li>
                <li>• Sous-couche phonique</li>
                <li>• Démontable réversible</li>
                <li>• Pose rapide économique</li>
              </ul>
            </div>
            <div className="rounded-lg border-t-4 border-purple-500 bg-white p-4 shadow-lg">
              <h4 className="mb-3 text-center font-bold text-primary">
                📏 Pose clipsable
              </h4>
              <ul className="space-y-1 text-xs">
                <li>• Système clic 5G-7G</li>
                <li>• Angle 30° assemblage</li>
                <li>• Sans colle ni clous</li>
                <li>• Réparation par lame</li>
                <li>• Installation immédiate</li>
              </ul>
            </div>
          </div>
        </div>

        {/* Notre processus d'intervention */}
        <div>
          <h2 className="mb-8 text-center text-3xl font-bold uppercase tracking-widest text-primary">
            Notre processus de pose certifié
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

        {/* Garanties et entretien */}
        <div className="to-accent-600/10 rounded-xl bg-gradient-to-r from-primary/10 p-8">
          <h2 className="mb-6 text-center text-2xl font-bold text-primary">
            🔧 Garanties & conseils entretien
          </h2>
          <div className="grid grid-cols-1 gap-6 md:grid-cols-4">
            <div className="text-center">
              <div className="mx-auto mb-4 flex size-16 items-center justify-center rounded-full bg-brand-orange-500/10">
                <span className="text-2xl">✅</span>
              </div>
              <h3 className="mb-2 font-semibold">Garantie pose 5 ans</h3>
              <p className="text-sm text-darkGray">
                Assurance décennale incluse
              </p>
            </div>
            <div className="text-center">
              <div className="mx-auto mb-4 flex size-16 items-center justify-center rounded-full bg-brand-orange-500/10">
                <span className="text-2xl">📐</span>
              </div>
              <h3 className="mb-2 font-semibold">Planéité garantie</h3>
              <p className="text-sm text-darkGray">±3mm/2m conformité DTU</p>
            </div>
            <div className="text-center">
              <div className="mx-auto mb-4 flex size-16 items-center justify-center rounded-full bg-yellow-100">
                <span className="text-2xl">🧽</span>
              </div>
              <h3 className="mb-2 font-semibold">Guide entretien</h3>
              <p className="text-sm text-darkGray">
                Produits & périodicité adaptés
              </p>
            </div>
            <div className="text-center">
              <div className="mx-auto mb-4 flex size-16 items-center justify-center rounded-full bg-purple-100">
                <span className="text-2xl">🛠️</span>
              </div>
              <h3 className="mb-2 font-semibold">SAV 48h</h3>
              <p className="text-sm text-darkGray">
                Intervention réparation rapide
              </p>
            </div>
          </div>
        </div>

        <div className="text-center">
          <Link href="/contact" className="button-accent px-8 py-4 text-lg">
            Demander un devis pose de sol
          </Link>
          <p className="mt-4 text-sm text-darkGray">
            Déplacement gratuit • Intervention Strasbourg, Colmar, Mulhouse et
            environs
          </p>
        </div>
      </section>
    </div>
  );
}
