import { FaTools, FaClock, FaShieldAlt, FaSmile } from 'react-icons/fa';
import Hero from './components/Hero';
import ServiceParagraph from './components/ServiceParagraph';
import TestimonialCard from './components/TestimonialCard';
import GoogleReviews from './components/GoogleReviews';
import InterventionZones from './components/InterventionZones';
import LocalSEO from './components/LocalSEO';
import Link from 'next/link';
import CertificationsBadge from './components/CertificationsBadge';
import { getServices, getCompanyStats } from '../lib/staticData';
import ClientMotionDiv from './components/ClientMotionDiv';
// Removed dynamic component imports - using inline forms instead

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

  const testimonials = [
    {
      name: 'Marie D.',
      location: 'Strasbourg',
      message: "Équipe à l'écoute et travail de qualité. Mon appartement a retrouvé tout son charme !",
    },
    {
      name: 'Thomas B.',
      location: 'Colmar',
      message: 'Intervention rapide après un dégât des eaux. Je recommande vivement G.TRAVAUX.',
    },
    {
      name: 'Sophie L.',
      location: 'Mulhouse',
      message: 'Projet 3D réaliste et finitions impeccables. Merci pour votre professionnalisme.',
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
        title="Rénovation haut de gamme & après sinistre"
        subtitle={`Forte de ${stats.yearsExperience} années d'expérience et plus de ${stats.projectsCompleted} projets réalisés, notre équipe coordonne tous les corps de métier pour un résultat durable, esthétique et conforme aux normes. Basés à Strasbourg, nous intervenons partout en France.`}
        videoSrc={["/videos/videoHeroGT.mp4", "/videos/videoHeroAc.mp4"]}
        imageSrc="/images/placeholder/home-hero.jpg"
        cta={{ label: 'Demander un devis', href: '/contact' }}
        showForm={true}
        fullScreen={true}
        centerText={true}
        formComponent={
          <div className="w-full rounded-lg bg-white/95 p-4 sm:p-6 shadow-xl backdrop-blur-sm">
            <div className="mb-4 text-center">
              <h3 className="mb-2 text-lg sm:text-xl font-bold text-darkGray">
                Nous vous rappelons !
              </h3>
              <p className="text-sm text-darkGray">
                Remplissez ce formulaire pour être rappelé·e rapidement
              </p>
            </div>
            <div className="w-full">
              <div className="space-y-4">
                <div className="space-y-2">
                  <label htmlFor="hero-name" className="block text-sm font-medium text-darkGray">
                    Nom et prénom *
                  </label>
                  <input
                    type="text"
                    id="hero-name"
                    name="name"
                    placeholder="Votre nom complet"
                    required
                    aria-required="true"
                    className="w-full px-3 sm:px-4 py-2 border border-lightGray rounded-md focus:ring-2 focus:ring-primary focus:border-transparent transition-colors"
                  />
                </div>
                
                <div className="space-y-2">
                  <label htmlFor="hero-phone" className="block text-sm font-medium text-darkGray">
                    Téléphone *
                  </label>
                  <input
                    type="tel"
                    id="hero-phone"
                    name="phone"
                    placeholder="06 12 34 56 78"
                    required
                    aria-required="true"
                    className="w-full px-3 sm:px-4 py-2 border border-lightGray rounded-md focus:ring-2 focus:ring-primary focus:border-transparent transition-colors"
                  />
                </div>
                
                <div className="space-y-2">
                  <label htmlFor="hero-time" className="block text-sm font-medium text-darkGray">
                    Meilleur moment pour vous rappeler
                  </label>
                  <select 
                    id="hero-time"
                    name="preferredTime"
                    className="w-full px-3 sm:px-4 py-2 border border-lightGray rounded-md focus:ring-2 focus:ring-primary focus:border-transparent transition-colors bg-white"
                  >
                    <option value="">Choisir un créneau</option>
                    <option value="matin">Matin (8h-12h)</option>
                    <option value="apres-midi">Après-midi (12h-18h)</option>
                    <option value="soir">Soir (18h-20h)</option>
                  </select>
                </div>
                
                <Link 
                  href="/contact" 
                  className="block w-full bg-primary hover:bg-primary-dark text-white font-medium py-3 px-6 rounded-md transition-colors duration-200 text-center focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2 focus:ring-offset-white/10"
                  aria-label="Demander un rappel - Ouvre la page de contact"
                >
                  Demander un rappel
                </Link>
              </div>
            </div>
          </div>
        }
      />

      {/* Statistiques de l'entreprise */}
      <section className="bg-white py-16">
        <div className="container mx-auto px-4">
          <ClientMotionDiv>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
              <div className="text-center">
                <div className="text-4xl font-bold text-primary mb-2">
                  {stats.projectsCompleted}+
                </div>
                <div className="text-darkGray">Projets réalisés</div>
              </div>
              <div className="text-center">
                <div className="text-4xl font-bold text-primary mb-2">
                  {stats.yearsExperience}
                </div>
                <div className="text-darkGray">Années d'expérience</div>
              </div>
              <div className="text-center">
                <div className="text-4xl font-bold text-primary mb-2">
                  {stats.satisfactionRate}%
                </div>
                <div className="text-darkGray">Clients satisfaits</div>
              </div>
              <div className="text-center">
                <div className="text-4xl font-bold text-primary mb-2">
                  {stats.coverageArea}
                </div>
                <div className="text-darkGray">Départements couverts</div>
              </div>
            </div>
          </ClientMotionDiv>
        </div>
      </section>

      {/* Pourquoi nous choisir */}
      <section className="bg-lightGray py-16" id="pourquoi">
        <div className="container mx-auto px-4">
          <ClientMotionDiv>
            <h2 className="mb-12 text-center text-3xl font-bold text-primary">
              Pourquoi nous choisir ?
            </h2>
          </ClientMotionDiv>
          <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-4">
            {reasons.map((reason, index) => {
              const Icon = reason.Icon;
              return (
                <ClientMotionDiv key={reason.title} delay={index * 0.1}>
                  <div className="rounded-lg border border-gray-200 bg-white p-6 text-center h-full hover:shadow-lg transition-shadow">
                    <Icon className="mx-auto mb-4 text-primary" size={40} />
                    <h3 className="mb-3 font-semibold text-primary text-lg">
                      {reason.title}
                    </h3>
                    <p className="text-sm text-darkGray leading-relaxed">
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
      <section className="bg-white py-20" id="services">
        <div className="container mx-auto px-4">
          <ClientMotionDiv>
            <h2 className="mb-16 text-center text-3xl font-bold text-primary">
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

      {/* Calculateur de devis - Client-side component */}
      <section className="bg-lightGray py-16" id="devis">
        <div className="container mx-auto px-4">
          <ClientMotionDiv>
            <h2 className="mb-12 text-center text-3xl font-bold text-primary">
              Estimez votre projet
            </h2>
            <p className="text-center text-darkGray mb-8 max-w-4xl mx-auto">
              Obtenez une première estimation de votre projet de rénovation avec notre calculateur interactif.
            </p>
          </ClientMotionDiv>
          <div className="mx-auto max-w-4xl rounded-lg bg-white p-8 shadow-lg">
            <div className="text-center mb-6">
              <h3 className="text-2xl font-bold text-primary mb-2">
                Calculateur de devis
              </h3>
              <p className="text-darkGray">
                Obtenez une estimation rapide de votre projet
              </p>
            </div>
            
            <div className="space-y-6">
              <fieldset>
                <legend className="block text-sm font-medium text-darkGray mb-3">
                  Type de projet
                </legend>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                  {['Rénovation complète', 'Rénovation partielle', 'Après sinistre', 'Aménagement'].map((type) => (
                    <div key={type} className="border border-lightGray rounded-lg p-4 cursor-pointer hover:border-primary transition-colors">
                      <div className="text-center">
                        <div className="text-sm font-medium text-darkGray">{type}</div>
                      </div>
                    </div>
                  ))}
                </div>
              </fieldset>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <label htmlFor="calc-surface" className="block text-sm font-medium text-darkGray mb-2">
                    Surface (m²)
                  </label>
                  <input
                    id="calc-surface"
                    name="surface"
                    type="number"
                    placeholder="Ex: 80"
                    className="w-full px-4 py-2 border border-lightGray rounded-md focus:ring-2 focus:ring-primary"
                  />
                </div>
                
                <div>
                  <label htmlFor="calc-rooms" className="block text-sm font-medium text-darkGray mb-2">
                    Nombre de pièces
                  </label>
                  <input
                    id="calc-rooms"
                    name="rooms"
                    type="number"
                    placeholder="Ex: 4"
                    className="w-full px-4 py-2 border border-lightGray rounded-md focus:ring-2 focus:ring-primary"
                  />
                </div>
              </div>
              
              <Link href="/contact" className="block w-full bg-primary hover:bg-primary-dark text-white font-medium py-3 px-6 rounded-md transition-colors duration-200 text-center">
                Obtenir un devis précis
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Engagements */}
      <section className="bg-white py-16" id="engagements">
        <div className="container mx-auto px-4">
          <ClientMotionDiv>
            <h2 className="mb-12 text-center text-3xl font-bold text-primary">
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
                <div className="rounded-lg border border-gray-200 bg-white p-6 h-full hover:shadow-md transition-shadow">
                  <h3 className="mb-3 font-semibold text-primary text-lg">
                    {engagement.title}
                  </h3>
                  <p className="text-sm text-darkGray">
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
      <section className="bg-lightGray py-16" id="processus">
        <div className="container mx-auto px-4">
          <ClientMotionDiv>
            <h2 className="mb-12 text-center text-3xl font-bold text-primary">
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
                <div className="rounded-lg border border-gray-200 bg-white p-6 text-center h-full">
                  <div className="mb-4 text-4xl font-bold text-primary">
                    {i + 1}
                  </div>
                  <div className="mb-3 font-semibold text-primary text-lg">
                    {item.step}
                  </div>
                  <div className="text-sm text-darkGray">
                    {item.description}
                  </div>
                </div>
              </ClientMotionDiv>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="bg-white py-20" id="temoignages">
        <div className="container mx-auto px-4">
          <ClientMotionDiv>
            <h2 className="mb-12 text-center text-3xl font-bold text-primary">
              Ils nous ont fait confiance
            </h2>
          </ClientMotionDiv>
          <div className="grid grid-cols-1 gap-10 md:grid-cols-3">
            {testimonials.map((testimonial, index) => (
              <ClientMotionDiv key={testimonial.name} delay={index * 0.1}>
                <TestimonialCard {...testimonial} />
              </ClientMotionDiv>
            ))}
          </div>
        </div>
      </section>

      {/* Google Reviews block - Server-side */}
      <section className="bg-lightGray py-20" aria-labelledby="avis-google-title">
        <div className="container mx-auto px-4">
          <ClientMotionDiv>
            <h2
              id="avis-google-title"
              className="mb-12 text-center text-3xl font-bold text-primary"
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
              <h2 className="text-3xl font-bold text-primary">
                Leader de la rénovation en Alsace & Lorraine
              </h2>
              <p className="text-lg text-darkGray leading-relaxed">
                Forts de plus de {stats.yearsExperience} ans d'expérience, nous maîtrisons l'ensemble des 
                métiers de la rénovation et intervenons aussi bien pour des projets 
                complets que pour des dépannages après sinistre. Notre priorité est 
                votre sécurité et la conformité de nos réalisations : toutes nos 
                interventions sont couvertes par une assurance décennale et 
                respectent les normes en vigueur.
              </p>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-8">
                <div className="bg-lightGray p-6 rounded-lg">
                  <div className="text-2xl font-bold text-primary mb-2">RGE</div>
                  <div className="text-sm text-darkGray">Reconnu Garant Environnement</div>
                </div>
                <div className="bg-lightGray p-6 rounded-lg">
                  <div className="text-2xl font-bold text-primary mb-2">QUALIBAT</div>
                  <div className="text-sm text-darkGray">Certification métiers</div>
                </div>
                <div className="bg-lightGray p-6 rounded-lg">
                  <div className="text-2xl font-bold text-primary mb-2">10 ans</div>
                  <div className="text-sm text-darkGray">Garantie décennale</div>
                </div>
              </div>
            </div>
          </ClientMotionDiv>
        </div>
      </section>

      {/* Secondary CTA for call */}
      <section className="bg-primary py-16 text-white">
        <div className="container mx-auto px-4">
          <ClientMotionDiv>
            <div className="max-w-3xl mx-auto text-center">
              <h2 className="mb-4 text-3xl font-bold">Besoin d'un conseil ?</h2>
              <p className="mb-8 text-xl text-white/90">
                Notre équipe est disponible pour répondre à toutes vos questions
                et vous accompagner dans votre projet de rénovation.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link
                  href="tel:+33604007499"
                  className="button-accent text-lg px-8 py-4 inline-flex items-center justify-center"
                >
                  <svg className="w-5 h-5 mr-2" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z" />
                  </svg>
                  06 04 00 74 99
                </Link>
                <Link
                  href="/contact"
                  className="button-secondary text-lg px-8 py-4 inline-flex items-center justify-center"
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