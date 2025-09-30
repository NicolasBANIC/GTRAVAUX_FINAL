import Hero from '../../components/Hero';
import Link from 'next/link';

export const metadata = {
  title:
    'Plâtrerie & Placo Strasbourg | Cloisons, Faux Plafonds, Isolation Phonique | G.TRAVAUX',
  description:
    'Spécialiste plâtrerie placo Strasbourg, Colmar, Mulhouse. Cloisons sèches, faux plafonds, doublage isolation phonique thermique. Artisan plaquiste certifié, devis gratuit.',
  keywords:
    'plâtrier Strasbourg, plaquiste Strasbourg, cloison placo, faux plafond, plâtrerie sèche, doublage isolation, ossature métallique, BA13, plaques plâtre, enduit joint',
};

export default function PlatreriePage() {
  const steps = [
    {
      title: 'Étude technique & planification',
      description:
        'Définition des cloisons selon contraintes acoustiques et portances, choix des matériaux (BA13, BA15, hydrofuge), calcul ossatures métalliques, intégration réseaux techniques.',
    },
    {
      title: 'Montage ossatures métalliques',
      description:
        'Installation rails haute qualité, montants 48/36, 70/36, 90/36mm selon besoins, vérification niveaux laser, respect entraxes 60cm, renforts pour charges lourdes.',
    },
    {
      title: 'Pose plaques & isolation',
      description:
        'Fixation plaques BA13/BA15, découpes précises pour gaines électriques, pose isolation laine minérale ou biosourcée, étanchéité périphérique, joints acoustiques.',
    },
    {
      title: 'Enduit, ponçage & finitions',
      description:
        'Application bandes calicot, enduit de jointoiement 3 couches, ponçage fin grain 220, finition prête à peindre, nettoyage chantier, contrôle planéité.',
    },
  ];

  return (
    <div>
      <Hero
        title="Plâtrerie & placo"
        subtitle="Reconfigurez vos espaces avec des cloisons sur mesure."
        imageSrc="/images/placeholder/platrerie-placo-hero.png"
        cta={{ label: 'Demander un devis', href: '/contact' }}
      />

      {/* Schema.org pour le SEO */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            '@context': 'https://schema.org',
            '@type': 'Service',
            name: 'Plâtrerie & Placo',
            serviceType: 'Plâtrerie cloisons sèches',
            provider: {
              '@type': 'LocalBusiness',
              '@id': 'https://g-travaux.fr/#business',
              name: 'G.TRAVAUX',
            },
            areaServed: ['Strasbourg', 'Colmar', 'Mulhouse'],
            brand: 'G.TRAVAUX',
            description:
              'Spécialiste plâtrerie placo, cloisons sèches, faux plafonds, doublage isolation en Alsace',
          }),
        }}
      />

      <section className="container mx-auto space-y-16 px-4 py-16 text-center">
        {/* Section principale */}
        <div>
          <h2 className="mb-6 text-3xl font-bold uppercase tracking-widest text-primary">
            Cloisons sèches et aménagements placo de qualité professionnelle
          </h2>
          <p className="mx-auto mb-8 max-w-4xl text-lg leading-relaxed text-darkGray">
            Expert en <strong>plâtrerie sèche</strong> et{' '}
            <strong>cloisons placo</strong>, nous réalisons vos{' '}
            <strong>aménagements intérieurs</strong>
            avec précision technique. Nos <strong>
              cloisons BA13/BA15
            </strong>{' '}
            intègrent parfaitement l'
            <strong>isolation phonique et thermique</strong>, les{' '}
            <strong>faux plafonds</strong> et le{' '}
            <strong>doublage des murs</strong> pour optimiser confort et
            esthétique de vos espaces.
          </p>
        </div>

        {/* Nos prestations techniques */}
        <div className="grid grid-cols-1 gap-12 lg:grid-cols-2">
          <div>
            <h3 className="mb-6 border-l-4 border-accent-600 pl-4 text-2xl font-bold text-primary">
              🏗️ Cloisons & séparations
            </h3>
            <div className="space-y-4">
              <div className="rounded-lg border-l-4 border-brand-orange-600 bg-white p-4 shadow-sm">
                <h4 className="mb-2 font-semibold text-primary">
                  Cloisons distributives
                </h4>
                <p className="text-sm text-darkGray">
                  Ossature métal 48/36, plaques BA13 simple ou double parement,
                  isolation laine 85mm, finition enduit 3 couches prêt à
                  peindre.
                </p>
              </div>
              <div className="border-brand-orange-600 rounded-lg border-l-4 bg-white p-4 shadow-sm">
                <h4 className="mb-2 font-semibold text-primary">
                  Cloisons acoustiques
                </h4>
                <p className="text-sm text-darkGray">
                  Ossature 70/36 ou 90/36, double parement BA13, laine haute
                  performance DnT,w 50-55dB, joints périphériques acoustiques.
                </p>
              </div>
              <div className="rounded-lg border-l-4 border-purple-500 bg-white p-4 shadow-sm">
                <h4 className="mb-2 font-semibold text-primary">
                  Cloisons techniques
                </h4>
                <p className="text-sm text-darkGray">
                  Intégration gaines électriques/plomberie, trappes de visite,
                  renforts pour charges, plaques hydrofuge salle de bain.
                </p>
              </div>
            </div>
          </div>

          <div>
            <h3 className="mb-6 border-l-4 border-accent-600 pl-4 text-2xl font-bold text-primary">
              🏢 Plafonds & doublages
            </h3>
            <div className="space-y-4">
              <div className="rounded-lg border-l-4 border-brand-orange-600 bg-white p-4 shadow-sm">
                <h4 className="mb-2 font-semibold text-primary">
                  Faux plafonds suspendus
                </h4>
                <p className="text-sm text-darkGray">
                  Ossature primaire/secondaire, suspentes antivibratiles,
                  isolation 200mm, plaques BA13 vissées, finition enduit lisse.
                </p>
              </div>
              <div className="rounded-lg border-l-4 border-orange-500 bg-white p-4 shadow-sm">
                <h4 className="mb-2 font-semibold text-primary">
                  Doublage thermique
                </h4>
                <p className="text-sm text-darkGray">
                  Complexe isolant PSE/laine, épaisseur 80-140mm, pare-vapeur
                  intégré, collage/fixation mécanique selon support.
                </p>
              </div>
              <div className="rounded-lg border-l-4 border-brand-orange-600 bg-white p-4 shadow-sm">
                <h4 className="mb-2 font-semibold text-primary">
                  Habillage technique
                </h4>
                <p className="text-sm text-darkGray">
                  Coffrages VMC, poutres, canalisations, trappes d'accès
                  esthétiques, intégration spot LED, respect DTU 25.41.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Solutions par type de local */}
        <div>
          <h2 className="mb-8 text-center text-3xl font-bold uppercase tracking-widest text-primary">
            Solutions adaptées à chaque environnement
          </h2>
          <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
            <div className="rounded-xl bg-gradient-to-br from-brand-orange-500/10 to-orange-100 p-6">
              <h3 className="mb-4 text-xl font-bold text-primary">
                🏠 Habitat résidentiel
              </h3>
              <ul className="space-y-2 text-sm">
                <li className="flex items-center">
                  <span className="text-brand-orange-600 mr-2">✓</span> Cloisons
                  chambre/salon BA13
                </li>
                <li className="flex items-center">
                  <span className="text-brand-orange-600 mr-2">✓</span> SDB plaques
                  hydrofuge BA15
                </li>
                <li className="flex items-center">
                  <span className="text-brand-orange-600 mr-2">✓</span> Faux plafonds
                  cuisine/salon
                </li>
                <li className="flex items-center">
                  <span className="text-brand-orange-600 mr-2">✓</span> Doublage
                  isolation combles
                </li>
              </ul>
            </div>
            <div className="from-brand-orange-500/10 to-orange-100 rounded-xl bg-gradient-to-br p-6">
              <h3 className="mb-4 text-xl font-bold text-primary">
                🏢 Bureaux & commerces
              </h3>
              <ul className="space-y-2 text-sm">
                <li className="flex items-center">
                  <span className="text-brand-orange-600 mr-2">✓</span> Cloisons
                  modulaires bureaux
                </li>
                <li className="flex items-center">
                  <span className="text-brand-orange-600 mr-2">✓</span> Plafonds
                  acoustiques open-space
                </li>
                <li className="flex items-center">
                  <span className="text-brand-orange-600 mr-2">✓</span> Habillages
                  techniques ERP
                </li>
                <li className="flex items-center">
                  <span className="text-brand-orange-600 mr-2">✓</span> Finitions
                  commerciales haut de gamme
                </li>
              </ul>
            </div>
            <div className="rounded-xl bg-gradient-to-br from-purple-50 to-purple-100 p-6">
              <h3 className="mb-4 text-xl font-bold text-primary">
                🏗️ Rénovation complète
              </h3>
              <ul className="space-y-2 text-sm">
                <li className="flex items-center">
                  <span className="text-brand-orange-600 mr-2">✓</span> Redistribution
                  volumes
                </li>
                <li className="flex items-center">
                  <span className="text-brand-orange-600 mr-2">✓</span> Isolation
                  thermique renforcée
                </li>
                <li className="flex items-center">
                  <span className="text-brand-orange-600 mr-2">✓</span> Correction
                  acoustique
                </li>
                <li className="flex items-center">
                  <span className="text-brand-orange-600 mr-2">✓</span> Mise aux normes
                  technique
                </li>
              </ul>
            </div>
          </div>
        </div>

        {/* Notre processus d'intervention */}
        <div>
          <h2 className="mb-8 text-center text-3xl font-bold uppercase tracking-widest text-primary">
            Notre processus plâtrerie haute qualité
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

        {/* Matériaux et certifications */}
        <div className="rounded-xl bg-gradient-to-r from-primary/10 to-accent-600/10 p-8">
          <h2 className="mb-6 text-center text-2xl font-bold text-primary">
            🏆 Matériaux haute qualité & certifications
          </h2>
          <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
            <div className="text-center">
              <div className="bg-brand-orange-500/10 mx-auto mb-4 flex size-16 items-center justify-center rounded-full">
                <span className="text-2xl">📋</span>
              </div>
              <h3 className="mb-2 font-semibold">Conformité DTU 25.41</h3>
              <p className="text-sm text-darkGray">
                Respect des règles de l'art plâtrerie sèche
              </p>
            </div>
            <div className="text-center">
              <div className="mx-auto mb-4 flex size-16 items-center justify-center rounded-full bg-brand-orange-500/10">
                <span className="text-2xl">🔧</span>
              </div>
              <h3 className="mb-2 font-semibold">Matériaux certifiés</h3>
              <p className="text-sm text-darkGray">
                Placoplatre®, Knauf, ossatures Stil® haute qualité
              </p>
            </div>
            <div className="text-center">
              <div className="mx-auto mb-4 flex size-16 items-center justify-center rounded-full bg-yellow-100">
                <span className="text-2xl">✨</span>
              </div>
              <h3 className="mb-2 font-semibold">Finition parfaite</h3>
              <p className="text-sm text-darkGray">
                Enduit 3 couches, ponçage professionnel
              </p>
            </div>
          </div>
        </div>

        <div className="text-center">
          <Link href="/contact" className="button-accent px-8 py-4 text-lg">
            Demander un devis plâtrerie
          </Link>
          <p className="mt-4 text-sm text-darkGray">
            Intervention sur Strasbourg, Colmar, Mulhouse et environs
          </p>
        </div>
      </section>
    </div>
  );
}
