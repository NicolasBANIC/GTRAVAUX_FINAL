import { FaTools, FaClock, FaShieldAlt, FaSmile } from 'react-icons/fa';
import Hero from './components/Hero';
import ServiceParagraph from './components/ServiceParagraph';
import BeforeAfterSlider from './components/BeforeAfterSlider';
import GoogleReviews from './components/GoogleReviews';
import InterventionZones from './components/InterventionZones';
import LocalSEO from './components/LocalSEO';
import Link from 'next/link';
import CertificationsBadge from './components/CertificationsBadge';
import { getServices, getCompanyStats } from '../lib/staticData';
import ClientMotionDiv from './components/ClientMotionDiv';

/**
 * Page d'accueil - Version Server Component
 * Migration majeure d'un composant client vers server pour optimiser les performances
 * - Données récupérées côté serveur
 * - Rendu initial côté serveur
 * - Composants interactifs chargés dynamiquement
 */
export default async function HomePage() {
  // 🚀 Récupération des données côté serveur
  const [services, stats] = await Promise.all([
    getServices(),
    getCompanyStats()
  ]);

  // Données statiques calculées côté serveur
  const reasons = [
    {
      title: 'Expertise multi-métiers',
      description: 'Des artisans qualifiés dans tous les corps de métier pour une rénovation globale et cohérente.',
      Icon: FaTools,
    },
    {
      title: 'Réactivité & disponibilité',
      description: 'Intervention rapide après sinistre et accompagnement tout au long de votre projet.',
      Icon: FaClock,
    },
    {
      title: 'Garantie & conformité',
      description: 'Assurance décennale et respect des normes pour votre tranquillité.',
      Icon: FaShieldAlt,
    },
    {
      title: 'Satisfaction client',
      description: `${stats.satisfactionRate}% de clients satisfaits sur plus de ${stats.projectsCompleted} projets réalisés.`,
      Icon: FaSmile,
    },
  ];



  return (
    <>
      {/* SEO Local - Server-side */}
      <LocalSEO 
        businessName="G.TRAVAUX"
        city="Strasbourg"
        services={services.map(s => s.title)}
      />

      {/* Hero section avec formulaire intégré */}
      <Hero
        title="Entreprise générale du bâtiment — tous corps d'état"
        subtitle="Rénovation complète, remise en état après sinistre et coordination de chantier. Une équipe unique pour un résultat durable, conforme aux normes et livré clé en main, partout en France."
        videoSrc="/videos/videoLibreGT.mp4"
        cta={{ label: 'Demander un devis', href: '/contact' }}
        showForm={true}
        fullScreen={true}
        centerText={true}
      />

      {/* Statistiques de l'entreprise */}
      <section className="section-light py-16">
        <div className="container mx-auto px-4">
          <ClientMotionDiv>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
              <div className="text-center">
                <div className="text-4xl font-bold text-brand-orange-600 mb-2">
                  {stats.projectsCompleted}+
                </div>
                <div className="text-brand-graphite-700">Projets réalisés</div>
              </div>
              <div className="text-center">
                <div className="text-4xl font-bold text-brand-orange-600 mb-2">
                  {stats.yearsExperience}
                </div>
                <div className="text-brand-graphite-700">Années d'expérience</div>
              </div>
              <div className="text-center">
                <div className="text-4xl font-bold text-brand-orange-600 mb-2">
                  {stats.satisfactionRate}%
                </div>
                <div className="text-brand-graphite-700">Clients satisfaits</div>
              </div>
              <div className="text-center">
                <div className="text-4xl font-bold text-brand-orange-600 mb-2">
                  {stats.coverageArea}
                </div>
                <div className="text-brand-graphite-700">Départements couverts</div>
              </div>
            </div>
          </ClientMotionDiv>
        </div>
      </section>

      {/* Pourquoi nous choisir */}
      <section className="section-light py-16" id="pourquoi">
        <div className="container mx-auto px-4">
          <ClientMotionDiv>
            <h2 className="section-title mb-12 text-center text-brand-graphite-900">
              Pourquoi nous choisir ?
            </h2>
          </ClientMotionDiv>
          <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-4">
            {reasons.map((reason, index) => {
              const Icon = reason.Icon;
              return (
                <ClientMotionDiv key={reason.title} delay={index * 0.1}>
                  <div className="rounded-brand bg-white p-5 shadow-brand text-center h-full hover:shadow-brandSm transition-shadow">
                    <Icon className="mx-auto mb-4 text-brand-orange-600" size={40} />
                    <h3 className="mb-3 font-semibold text-brand-graphite-900 text-lg">
                      {reason.title}
                    </h3>
                    <p className="text-sm text-brand-graphite-600 leading-relaxed">
                      {reason.description}
                    </p>
                  </div>
                </ClientMotionDiv>
              );
            })}
          </div>
        </div>
      </section>

      {/* Services overview - Server-side rendering */}
      <section className="section-light py-20" id="services">
        <div className="container mx-auto px-4">
          <ClientMotionDiv>
            <h2 className="section-title mb-16 text-center text-brand-graphite-900">
              Nos services
            </h2>
          </ClientMotionDiv>
          <div className="mx-auto max-w-6xl">
            {services.map((service, index) => (
              <ServiceParagraph
                key={service.title}
                title={service.title}
                description={service.description}
                href={service.href}
                imageSrc={service.image}
                imagePosition={index % 2 === 0 ? 'right' : 'left'}
              />
            ))}
          </div>
        </div>
      </section>

      {/* Section Avant/Après - Nouvelle section déplacée depuis /realisations */}
      <section className="section-light py-20" id="avant-apres">
        <div className="container mx-auto px-4">
          <ClientMotionDiv>
            <h2 className="section-title mb-8 text-center text-brand-graphite-900">
              Avant / Après — Nous redonnons vie à vos espaces sinistrés
            </h2>
            <p className="section-sub text-center mb-12 max-w-4xl mx-auto">
              Faites glisser le curseur pour comparer l'existant et le résultat final.
            </p>
          </ClientMotionDiv>
          <div className="mx-auto max-w-4xl">
            <ClientMotionDiv delay={0.2}>
              <BeforeAfterSlider
                nomProjet="Cuisine rénovée"
                srcBefore="/images/placeholder/apres.png"
                srcAfter="/images/placeholder/avant.png"
                altBefore="Cuisine avant rénovation — projet"
                altAfter="Cuisine après rénovation — projet"
              />
            </ClientMotionDiv>
          </div>
        </div>
      </section>

      {/* Calculateur de devis - Client-side component */}
      <section className="section-light py-16" id="devis">
        <div className="container mx-auto px-4">
          <ClientMotionDiv>
            <h2 className="section-title mb-12 text-center text-brand-graphite-900">
              Estimez votre projet
            </h2>
            <p className="section-sub text-center mb-8 max-w-4xl mx-auto">
              Obtenez une première estimation de votre projet de rénovation avec notre calculateur interactif.
            </p>
          </ClientMotionDiv>
          <div className="mx-auto max-w-4xl rounded-brand bg-white p-8 shadow-brand">
            <div className="text-center mb-6">
              <h3 className="text-2xl font-bold text-brand-graphite-900 mb-2">
                Calculateur de devis
              </h3>
              <p className="text-brand-graphite-600">
                Obtenez une estimation rapide de votre projet
              </p>
            </div>
            
            <div className="space-y-6">
              <fieldset>
                <legend className="block text-sm font-medium text-brand-graphite-700 mb-3">
                  Type de projet
                </legend>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                  {['Rénovation complète', 'Rénovation partielle', 'Après sinistre', 'Aménagement'].map((type) => (
                    <div key={type} className="border border-brand-graphite-200 rounded-brand p-4 cursor-pointer hover:border-brand-orange-600 transition-colors">
                      <div className="text-center">
                        <div className="text-sm font-medium text-brand-graphite-700">{type}</div>
                      </div>
                    </div>
                  ))}
                </div>
              </fieldset>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <label htmlFor="calc-surface" className="block text-sm font-medium text-brand-graphite-700 mb-2">
                    Surface (m²)
                  </label>
                  <input
                    id="calc-surface"
                    name="surface"
                    type="number"
                    placeholder="Ex: 80"
                    className="w-full px-4 py-2 border border-brand-graphite-200 rounded-brand focus:ring-2 focus:ring-brand-orange-600 focus:border-brand-orange-600"
                  />
                </div>
                
                <div>
                  <label htmlFor="calc-rooms" className="block text-sm font-medium text-brand-graphite-700 mb-2">
                    Nombre de pièces
                  </label>
                  <input
                    id="calc-rooms"
                    name="rooms"
                    type="number"
                    placeholder="Ex: 4"
                    className="w-full px-4 py-2 border border-brand-graphite-200 rounded-brand focus:ring-2 focus:ring-brand-orange-600 focus:border-brand-orange-600"
                  />
                </div>
              </div>
              
              <Link href="/contact" className="btn btn-primary block w-full text-center">
                Obtenir un devis précis
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Engagements */}
      <section className="section-light py-16" id="engagements">
        <div className="container mx-auto px-4">
          <ClientMotionDiv>
            <h2 className="section-title mb-12 text-center text-brand-graphite-900">
              Nos engagements
            </h2>
          </ClientMotionDiv>
          <div className="mx-auto grid max-w-4xl grid-cols-1 gap-6 md:grid-cols-2">
            {[
              {
                title: 'Devis sous 48h',
                description: 'Diagnostic rapide et devis transparent, détaillé et sans surprise.'
              },
              {
                title: 'Assurance décennale',
                description: 'Interventions couvertes 10 ans, dans le respect strict des normes.'
              },
              {
                title: 'Finitions d\'excellence',
                description: 'Exigence artisanale et contrôle qualité à chaque étape.'
              },
              {
                title: 'Prise en charge assurance',
                description: 'Accompagnement après sinistre pour vos démarches assurantielles.'
              }
            ].map((engagement, index) => (
              <ClientMotionDiv key={engagement.title} delay={index * 0.1}>
                <div className="rounded-brand bg-white p-6 shadow-brand h-full hover:shadow-brandSm transition-shadow">
                  <h3 className="mb-3 font-semibold text-brand-graphite-900 text-lg">
                    {engagement.title}
                  </h3>
                  <p className="text-sm text-brand-graphite-600">
                    {engagement.description}
                  </p>
                </div>
              </ClientMotionDiv>
            ))}
          </div>
          <ClientMotionDiv delay={0.4}>
            <div className="mt-12 text-center">
              <CertificationsBadge />
            </div>
          </ClientMotionDiv>
        </div>
      </section>

      {/* Processus en 4 étapes */}
      <section className="section-light py-16" id="processus">
        <div className="container mx-auto px-4">
          <ClientMotionDiv>
            <h2 className="section-title mb-12 text-center text-brand-graphite-900">
              Notre processus
            </h2>
          </ClientMotionDiv>
          <div className="grid grid-cols-1 gap-6 md:grid-cols-4">
            {[
              {
                step: 'Diagnostic',
                description: 'Analyse de votre besoin et évaluation du projet.'
              },
              {
                step: 'Projection 3D & devis',
                description: 'Proposition claire, maquette 3D (si pertinent) et planning.'
              },
              {
                step: 'Réalisation',
                description: 'Exécution aux normes, coordination des corps de métier.'
              },
              {
                step: 'Réception & garanties',
                description: 'Contrôle qualité, réception et garanties activées.'
              }
            ].map((item, i) => (
              <ClientMotionDiv key={item.step} delay={i * 0.1}>
                <div className="rounded-brand bg-white p-6 shadow-brand text-center h-full">
                  <div className="mb-4 text-4xl font-bold text-brand-orange-600">
                    {i + 1}
                  </div>
                  <div className="mb-3 font-semibold text-brand-graphite-900 text-lg">
                    {item.step}
                  </div>
                  <div className="text-sm text-brand-graphite-600">
                    {item.description}
                  </div>
                </div>
              </ClientMotionDiv>
            ))}
          </div>
        </div>
      </section>



      {/* Google Reviews block - Server-side */}
      <section className="section-light py-20" aria-labelledby="avis-google-title">
        <div className="container mx-auto px-4">
          <ClientMotionDiv>
            <h2
              id="avis-google-title"
              className="section-title mb-12 text-center text-brand-graphite-900"
            >
              Avis de nos clients
            </h2>
          </ClientMotionDiv>
          <GoogleReviews />
        </div>
      </section>

      {/* Zones d'intervention */}
      <InterventionZones />

      {/* Section leadership et engagement */}
      <section className="bg-white py-16" id="leadership">
        <div className="container mx-auto px-4">
          <ClientMotionDiv>
            <div className="max-w-4xl mx-auto text-center space-y-6">
              <h2 className="section-title text-brand-graphite-900">
                Leader de la rénovation en Alsace & Lorraine
              </h2>
              <p className="text-lg text-brand-graphite-600 leading-relaxed">
                Forts de plus de {stats.yearsExperience} ans d'expérience, nous maîtrisons l'ensemble des 
                métiers de la rénovation et intervenons aussi bien pour des projets 
                complets que pour des dépannages après sinistre. Notre priorité est 
                votre sécurité et la conformité de nos réalisations : toutes nos 
                interventions sont couvertes par une assurance décennale et 
                respectent les normes en vigueur.
              </p>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-8">
                <div className="rounded-brand bg-brand-bone p-6 shadow-brandSm">
                  <div className="text-2xl font-bold text-brand-orange-600 mb-2">RGE</div>
                  <div className="text-sm text-brand-graphite-600">Reconnu Garant Environnement</div>
                </div>
                <div className="rounded-brand bg-brand-bone p-6 shadow-brandSm">
                  <div className="text-2xl font-bold text-brand-orange-600 mb-2">QUALIBAT</div>
                  <div className="text-sm text-brand-graphite-600">Certification métiers</div>
                </div>
                <div className="rounded-brand bg-brand-bone p-6 shadow-brandSm">
                  <div className="text-2xl font-bold text-brand-orange-600 mb-2">10 ans</div>
                  <div className="text-sm text-brand-graphite-600">Garantie décennale</div>
                </div>
              </div>
            </div>
          </ClientMotionDiv>
        </div>
      </section>

      {/* Secondary CTA for call */}
      <section className="section-dark py-16">
        <div className="container mx-auto px-4">
          <ClientMotionDiv>
            <div className="max-w-3xl mx-auto text-center">
              <h2 className="section-title mb-4 text-white">Besoin d'un conseil ?</h2>
              <p className="mb-8 text-xl text-white/90">
                Notre équipe est disponible pour répondre à toutes vos questions
                et vous accompagner dans votre projet de rénovation.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link
                  href="tel:+33604007499"
                  className="btn btn-primary text-lg px-8 py-4"
                >
                  <svg className="w-5 h-5 mr-2" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z" />
                  </svg>
                  06 04 00 74 99
                </Link>
                <Link
                  href="/contact"
                  className="btn btn-inverse text-lg px-8 py-4"
                >
                  Demander un devis
                </Link>
              </div>
            </div>
          </ClientMotionDiv>
        </div>
      </section>
    </>
  );
}