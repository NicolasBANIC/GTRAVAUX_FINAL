'use client';

import { FaTools, FaClock, FaShieldAlt, FaSmile, FaPaintBrush, FaThLarge, FaHardHat, FaBolt, FaCubes } from 'react-icons/fa';
import Hero from './components/Hero';
import ServiceCard from './components/ServiceCard';
import TestimonialCard from './components/TestimonialCard';
import CallbackForm from './components/CallbackForm';
import InterventionZones from './components/InterventionZones';
import LocalSEO from './components/LocalSEO';
import Link from 'next/link';
import CertificationsBadge from './components/CertificationsBadge';
import dynamic from 'next/dynamic';

// Dynamically import interactive components to prevent hydration issues
const QuoteCalculator = dynamic(() => import('./components/QuoteCalculator'), {
  ssr: false,
  loading: () => (
    <div className="bg-white rounded-lg shadow-lg p-6 max-w-2xl mx-auto">
      <div className="animate-pulse">
        <div className="h-8 bg-lightGray rounded mb-4"></div>
        <div className="h-4 bg-lightGray rounded mb-2"></div>
        <div className="h-32 bg-lightGray rounded"></div>
      </div>
    </div>
  )
});


export default function HomePage() {
  // Reasons to choose the company
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
      description: 'Priorité donnée à la qualité du travail et à votre satisfaction.',
      Icon: FaSmile,
    },
  ];

  // List of services for quick access on home page
  const services = [
    {
      title: 'Peinture & finitions',
      description: 'Des finitions irréprochables pour des intérieurs éclatants et harmonieux.',
      href: '/services/peinture-finitions',
      Icon: FaPaintBrush,
    },
    {
      title: 'Pose de sol',
      description: 'Parquets, carrelage ou vinyle, nous posons le revêtement adapté à votre espace.',
      href: '/services/pose-de-sol',
      Icon: FaThLarge,
    },
    {
      title: 'Plâtrerie & placo',
      description: 'Réagencement intérieur, création de cloisons et finitions soignées.',
      href: '/services/platrerie-placo',
      Icon: FaHardHat,
    },
    {
      title: 'Électricité & plomberie',
      description: 'Mise aux normes, installations neuves et dépannages en toute sécurité.',
      href: '/services/electricite-plomberie',
      Icon: FaBolt,
    },
    {
      title: 'Isolation intérieure',
      description: 'Améliorez votre confort thermique et acoustique grâce à des solutions performantes.',
      href: '/services/isolation-interieure',
      Icon: FaCubes,
    },
    {
      title: 'Maçonnerie légère',
      description: 'Création d\'ouvertures, petits travaux de maçonnerie et réparations structurales.',
      href: '/services/maconnerie-legere',
      Icon: FaHardHat,
    },
  ];

  const testimonials = [
    {
      name: 'Marie D.',
      location: 'Strasbourg',
      message: 'Équipe à l\'écoute et travail de qualité. Mon appartement a retrouvé tout son charme !',
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
    <div>
      {/* Hero section avec formulaire intégré */}
      <Hero
        title="Rénovation haut de gamme & après sinistre"
        /* Inspiré du site House‑Rénovation qui met en avant sa localisation dès le hero【882952368121044†L146-L149】,
           nous précisons notre présence nationale et notre expertise premium. */
        subtitle="Entreprise basée à Strasbourg — interventions dans toute la France. Interventions rapides, finitions d'excellence, accompagnement assurance."
        imageSrc="/images/placeholder/home-hero.jpg"
        cta={{ label: 'Demander un devis', href: '/contact' }}
        showForm={true}
        formComponent={
          <div className="bg-white/95 backdrop-blur-sm p-6 rounded-lg shadow-xl max-w-md w-full">
            <div className="mb-4 text-center">
              <h3 className="text-xl font-bold text-darkGray mb-2">Nous vous rappelons !</h3>
              <p className="text-sm text-darkGray">
                Remplissez ce formulaire pour être rappelé·e rapidement
              </p>
            </div>
            <CallbackForm />
          </div>
        }
      />
      {/* Pourquoi nous choisir */}
      <section className="container mx-auto px-4 py-16" id="pourquoi">
        <h2 className="text-3xl font-bold text-center mb-8">Pourquoi nous choisir ?</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {reasons.map((reason) => {
            const Icon = reason.Icon;
            return (
              <div key={reason.title} className="text-center p-4 bg-lightGray rounded-lg shadow hover:shadow-lg transition-shadow duration-300">
                <Icon className="text-primary mx-auto mb-4" size={40} />
                <h3 className="font-semibold mb-2">{reason.title}</h3>
                <p className="text-sm text-darkGray">{reason.description}</p>
              </div>
            );
          })}
        </div>
      </section>
      {/* Engagements */}
      <section className="container mx-auto px-4 py-16" id="engagements">
        <h2 className="text-3xl font-bold text-center mb-8">Nos engagements</h2>
        <div className="max-w-4xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="p-6 bg-lightGray rounded-lg shadow">
            <h3 className="font-semibold mb-2">Devis sous 48h</h3>
            <p className="text-sm text-darkGray">Diagnostic rapide et devis transparent, détaillé et sans surprise.</p>
          </div>
          <div className="p-6 bg-lightGray rounded-lg shadow">
            <h3 className="font-semibold mb-2">Assurance décennale</h3>
            <p className="text-sm text-darkGray">Interventions couvertes 10 ans, dans le respect strict des normes.</p>
          </div>
          <div className="p-6 bg-lightGray rounded-lg shadow">
            <h3 className="font-semibold mb-2">Finitions d'excellence</h3>
            <p className="text-sm text-darkGray">Exigence artisanale et contrôle qualité à chaque étape.</p>
          </div>
          <div className="p-6 bg-lightGray rounded-lg shadow">
            <h3 className="font-semibold mb-2">Prise en charge assurance</h3>
            <p className="text-sm text-darkGray">Accompagnement après sinistre pour vos démarches assurantielles.</p>
          </div>
        </div>
        <div className="mt-8 text-center">
          <CertificationsBadge />
        </div>
      </section>

      {/* Processus en 4 étapes */}
      <section className="bg-white py-16" id="processus">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-8">Notre processus</h2>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
            {["Diagnostic","Projection 3D & devis","Réalisation","Réception & garanties"].map((step, i) => (
              <div key={step} className="p-6 bg-lightGray rounded-lg text-center shadow">
                <div className="text-primary text-3xl font-bold mb-2">{i+1}</div>
                <div className="font-semibold mb-1">{step}</div>
                <div className="text-sm text-darkGray">
                  {i===0 && 'Analyse de votre besoin et évaluation du projet.'}
                  {i===1 && 'Proposition claire, maquette 3D (si pertinent) et planning.'}
                  {i===2 && 'Exécution aux normes, coordination des corps de métier.'}
                  {i===3 && 'Contrôle qualité, réception et garanties activées.'}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Services overview */}
      <section className="bg-lightGray py-16" id="services">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-8">Nos services</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service) => (
              <ServiceCard key={service.title} {...service} />
            ))}
          </div>
        </div>
      </section>
      {/* Testimonials */}
      <section className="container mx-auto px-4 py-16" id="temoignages">
        <h2 className="text-3xl font-bold text-center mb-8">Ils nous ont fait confiance</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((t) => (
            <TestimonialCard key={t.name} {...t} />
          ))}
        </div>
      </section>

      {/* Zones d'intervention */}
      <InterventionZones />

      {/* Section leadership et engagement */}
      <section className="bg-lightGray py-16" id="leadership">
        <div className="container mx-auto px-4 text-center space-y-6">
          <h2 className="text-3xl font-bold">Leader de la rénovation en Alsace & Lorraine</h2>
          <p className="max-w-3xl mx-auto text-darkGray">
            Forts de plus de 15 ans d'expérience, nous maîtrisons l'ensemble des métiers de la rénovation et
            intervenons aussi bien pour des projets complets que pour des dépannages après sinistre. Notre priorité est
            votre sécurité et la conformité de nos réalisations : toutes nos interventions sont couvertes par une
            assurance décennale et respectent les normes en vigueur. Comme le souligne l'analyse de House Rénovation,
            mettre en avant son leadership et ses garanties rassure le client【882952368121044†L279-L330】. Nous assumons ce
            rôle en proposant un accompagnement personnalisé et une qualité irréprochable.
          </p>
        </div>
      </section>
      {/* Secondary CTA for call */}
      <section className="bg-primary text-white py-12">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-2xl font-bold mb-4">Besoin d'un conseil ?</h2>
          <p className="mb-6">Notre équipe est à votre écoute pour répondre à toutes vos questions.</p>
          <a href="tel:+33972123456" className="bg-white text-green px-6 py-3 rounded-full font-medium hover:bg-lightGray transition-colors duration-300">
            Appelez-nous
          </a>
        </div>
      </section>
      {/* Outils interactifs */}
      <section className="bg-white py-16" id="outils">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">Notre outil en ligne</h2>
          <div className="max-w-2xl mx-auto">
            {/* Calculateur de devis */}
            <QuoteCalculator />
          </div>
        </div>
      </section>

      {/* FAQ reminder */}
      <section className="container mx-auto px-4 py-16 text-center">
        <h2 className="text-3xl font-bold mb-4">Une question ?</h2>
        <p className="mb-6">Consultez notre FAQ ou contactez-nous pour plus d'informations.</p>
        <Link href="/contact#faq" className="text-primary font-medium hover:underline">
          Voir la FAQ
        </Link>
      </section>

      {/* SEO local */}
      <LocalSEO />
    </div>
  );
}
