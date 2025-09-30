import Hero from '../../components/Hero';
import Link from 'next/link';

export const metadata = {
  title:
    'Isolation Intérieure Strasbourg | Thermique, Phonique, Combles | G.TRAVAUX',
  description:
    'Spécialiste isolation intérieure Strasbourg, Colmar, Mulhouse. Isolation thermique phonique, combles, murs, sols. Laine minérale, biosourcée. RGE QualiPac, devis gratuit.',
  keywords:
    'isolation intérieure Strasbourg, isolation thermique, isolation phonique, isolation combles, laine de verre, laine de roche, isolation biosourcée, RGE, DPE, économies énergie',
};

export default function IsolationInterieurePage() {
  const steps = [
    {
      title: 'Audit énergétique & diagnostic',
      description:
        "Analyse thermographique des déperditions, mesure étanchéité à l'air, calcul résistance thermique R, identification ponts thermiques, recommandations techniques personnalisées selon RE2020.",
    },
    {
      title: 'Choix matériaux & performance',
      description:
        'Sélection isolants certifiés (laine minérale λ=0,032-0,040 W/m.K, biosourcés chanvre/ouate), calcul épaisseurs R≥4-8 m².K/W, pare-vapeur adapté, solutions anti-tassement.',
    },
    {
      title: 'Mise en œuvre technique',
      description:
        'Pose continue sans pont thermique, étanchéité périphérique, membrane pare-vapeur Sd>18m, traitement singularités, respect DTU 25.41, protection incendie.',
    },
    {
      title: 'Contrôles & certification',
      description:
        'Test étanchéité infiltrométrie, mesures acoustiques DnT,w, vérification performances thermiques, attestation conformité, conseils entretien, suivi 10 ans.',
    },
  ];

  return (
    <div>
      <Hero
        title="Isolation intérieure"
        subtitle="Confort thermique et acoustique grâce à des solutions performantes."
        imageSrc="/images/placeholder/isolation-interieure-hero.png"
        cta={{ label: 'Demander un devis', href: '/contact' }}
      />

      {/* Schema.org pour le SEO */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            '@context': 'https://schema.org',
            '@type': 'Service',
            name: 'Isolation Intérieure',
            serviceType: 'Isolation thermique et phonique',
            provider: {
              '@type': 'LocalBusiness',
              '@id': 'https://g-travaux.fr/#business',
              name: 'G.TRAVAUX',
            },
            areaServed: ['Strasbourg', 'Colmar', 'Mulhouse'],
            brand: 'G.TRAVAUX',
            description:
              'Isolation intérieure thermique et phonique, combles, murs, sols en Alsace. Matériaux écologiques, certification RGE',
          }),
        }}
      />

      <section className="container mx-auto space-y-16 px-4 py-16 text-center">
        {/* Section principale */}
        <div>
          <h2 className="mb-6 text-3xl font-bold uppercase tracking-widest text-primary">
            Isolation haute performance pour votre confort énergétique
          </h2>
          <p className="mx-auto mb-8 max-w-4xl text-lg leading-relaxed text-darkGray">
            Spécialistes en{' '}
            <strong>isolation thermique et phonique intérieure</strong>, nous
            améliorons drastiquement les{' '}
            <strong>performances énergétiques</strong>
            de votre habitat. Nos solutions d'<strong>isolation combles</strong>
            , <strong>doublage murs</strong> et <strong>sols</strong> utilisent
            des matériaux certifiés (laine minérale,{' '}
            <strong>isolants biosourcés</strong>) pour atteindre les exigences{' '}
            <strong>RE2020</strong> et <strong>BBC</strong>.
          </p>
        </div>

        {/* Types d'isolation */}
        <div className="grid grid-cols-1 gap-8 lg:grid-cols-3">
          <div className="rounded-xl bg-gradient-to-br from-brand-orange-500/10 to-orange-100 p-6">
            <h3 className="mb-4 border-b-2 border-brand-orange-600 pb-2 text-xl font-bold text-primary">
              🏠 Isolation des combles
            </h3>
            <div className="space-y-3">
              <div className="rounded-lg bg-white p-3 shadow-sm">
                <h4 className="mb-1 text-sm font-semibold">Combles perdus</h4>
                <p className="text-xs text-darkGray">
                  Soufflage laine 300-400mm, R≥7-10 m².K/W, pare-vapeur continu,
                  étanchéité trappes d'accès.
                </p>
              </div>
              <div className="rounded-lg bg-white p-3 shadow-sm">
                <h4 className="mb-1 text-sm font-semibold">
                  Combles aménageables
                </h4>
                <p className="text-xs text-darkGray">
                  Isolation rampants 200-240mm, lambda≤0,036, membrane
                  frein-vapeur, finition placo BA13.
                </p>
              </div>
              <div className="rounded-lg bg-white p-3 shadow-sm">
                <h4 className="mb-1 text-sm font-semibold">Plancher combles</h4>
                <p className="text-xs text-darkGray">
                  Panneaux rigides ou rouleaux entre solives, R≥6 m².K/W minimum
                  selon zone climatique.
                </p>
              </div>
            </div>
          </div>

          <div className="from-brand-orange-500/10 to-orange-100 rounded-xl bg-gradient-to-br p-6">
            <h3 className="border-brand-orange-600 mb-4 border-b-2 pb-2 text-xl font-bold text-primary">
              🏢 Isolation des murs
            </h3>
            <div className="space-y-3">
              <div className="rounded-lg bg-white p-3 shadow-sm">
                <h4 className="mb-1 text-sm font-semibold">Doublage collé</h4>
                <p className="text-xs text-darkGray">
                  Complexe isolant PSE/PU 80-140mm, R≥2,5-4 m².K/W, pare-vapeur
                  intégré, finition prête à peindre.
                </p>
              </div>
              <div className="rounded-lg bg-white p-3 shadow-sm">
                <h4 className="mb-1 text-sm font-semibold">
                  Cloison distributive
                </h4>
                <p className="text-xs text-darkGray">
                  Ossature métal + laine 85-200mm, double parement BA13,
                  performances RT2012 garanties.
                </p>
              </div>
              <div className="rounded-lg bg-white p-3 shadow-sm">
                <h4 className="mb-1 text-sm font-semibold">
                  Contre-cloison maçonnée
                </h4>
                <p className="text-xs text-darkGray">
                  Lame d'air + isolation continue, traitement ponts thermiques,
                  étanchéité périphérique.
                </p>
              </div>
            </div>
          </div>

          <div className="rounded-xl bg-gradient-to-br from-purple-50 to-purple-100 p-6">
            <h3 className="mb-4 border-b-2 border-purple-300 pb-2 text-xl font-bold text-primary">
              🏗️ Isolation phonique
            </h3>
            <div className="space-y-3">
              <div className="rounded-lg bg-white p-3 shadow-sm">
                <h4 className="mb-1 text-sm font-semibold">
                  Cloisons acoustiques
                </h4>
                <p className="text-xs text-darkGray">
                  Double parement BA13, laine haute densité 45kg/m³, DnT,w
                  ≥50-55dB, joints désolidarisés.
                </p>
              </div>
              <div className="rounded-lg bg-white p-3 shadow-sm">
                <h4 className="mb-1 text-sm font-semibold">
                  Plafonds suspendus
                </h4>
                <p className="text-xs text-darkGray">
                  Isolation 200mm laine acoustique, suspentes antivibratiles,
                  amélioration 15-20dB.
                </p>
              </div>
              <div className="rounded-lg bg-white p-3 shadow-sm">
                <h4 className="mb-1 text-sm font-semibold">Sols flottants</h4>
                <p className="text-xs text-darkGray">
                  Sous-couche résiliente, chape sèche désolidarisée, ΔR≥15dB
                  bruits d'impact.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Matériaux isolants */}
        <div>
          <h2 className="mb-8 text-center text-3xl font-bold uppercase tracking-widest text-primary">
            Notre gamme de matériaux isolants certifiés
          </h2>
          <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-4">
            <div className="rounded-lg border-t-4 border-brand-orange-600 bg-white p-4 shadow-lg">
              <h4 className="mb-2 font-bold text-primary">Laine de verre</h4>
              <ul className="space-y-1 text-xs">
                <li>• λ = 0,032-0,040 W/m.K</li>
                <li>• Incombustible A1</li>
                <li>• Hydrofuge ACERMI</li>
                <li>• Rapport qualité/prix optimal</li>
              </ul>
            </div>
            <div className="border-brand-orange-600 rounded-lg border-t-4 bg-white p-4 shadow-lg">
              <h4 className="mb-2 font-bold text-primary">Laine de roche</h4>
              <ul className="space-y-1 text-xs">
                <li>• λ = 0,033-0,042 W/m.K</li>
                <li>• Résistance 1000°C</li>
                <li>• Excellente acoustique</li>
                <li>• Durabilité 50+ ans</li>
              </ul>
            </div>
            <div className="rounded-lg border-t-4 border-orange-500 bg-white p-4 shadow-lg">
              <h4 className="mb-2 font-bold text-primary">Ouate cellulose</h4>
              <ul className="space-y-1 text-xs">
                <li>• λ = 0,035-0,042 W/m.K</li>
                <li>• 100% recyclé</li>
                <li>• Déphasage thermique 10h</li>
                <li>• Biosourcé écologique</li>
              </ul>
            </div>
            <div className="rounded-lg border-t-4 border-purple-500 bg-white p-4 shadow-lg">
              <h4 className="mb-2 font-bold text-primary">Chanvre/lin</h4>
              <ul className="space-y-1 text-xs">
                <li>• λ = 0,039-0,045 W/m.K</li>
                <li>• Régulation hygrométrique</li>
                <li>• Origine France</li>
                <li>• Carbone négatif</li>
              </ul>
            </div>
          </div>
        </div>

        {/* Notre processus d'intervention */}
        <div>
          <h2 className="mb-8 text-center text-3xl font-bold uppercase tracking-widest text-primary">
            Processus d'isolation haute performance
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

        {/* Performances et économies */}
        <div className="rounded-xl bg-gradient-to-r from-primary/10 to-accent-600/10 p-8">
          <h2 className="mb-6 text-center text-2xl font-bold text-primary">
            📊 Performances énergétiques garanties
          </h2>
          <div className="grid grid-cols-1 gap-6 md:grid-cols-4">
            <div className="text-center">
              <div className="bg-brand-orange-500/10 mx-auto mb-4 flex size-16 items-center justify-center rounded-full">
                <span className="text-2xl">🌡️</span>
              </div>
              <h3 className="mb-2 font-semibold">-40% consommation</h3>
              <p className="text-sm text-darkGray">
                Réduction factures chauffage
              </p>
            </div>
            <div className="text-center">
              <div className="mx-auto mb-4 flex size-16 items-center justify-center rounded-full bg-brand-orange-500/10">
                <span className="text-2xl">🔇</span>
              </div>
              <h3 className="mb-2 font-semibold">+15dB acoustique</h3>
              <p className="text-sm text-darkGray">
                Amélioration confort sonore
              </p>
            </div>
            <div className="text-center">
              <div className="mx-auto mb-4 flex size-16 items-center justify-center rounded-full bg-yellow-100">
                <span className="text-2xl">⭐</span>
              </div>
              <h3 className="mb-2 font-semibold">Gain DPE A-B-C</h3>
              <p className="text-sm text-darkGray">Valorisation patrimoniale</p>
            </div>
            <div className="text-center">
              <div className="mx-auto mb-4 flex size-16 items-center justify-center rounded-full bg-purple-100">
                <span className="text-2xl">🛡️</span>
              </div>
              <h3 className="mb-2 font-semibold">Garantie 10 ans</h3>
              <p className="text-sm text-darkGray">Assurance décennale</p>
            </div>
          </div>
        </div>

        <div className="text-center">
          <Link href="/contact" className="button-accent px-8 py-4 text-lg">
            Demander un audit énergétique gratuit
          </Link>
          <p className="mt-4 text-sm text-darkGray">
            Éligible MaPrimeRénov' et aides CEE • Intervention Strasbourg,
            Colmar, Mulhouse
          </p>
        </div>
      </section>
    </div>
  );
}
