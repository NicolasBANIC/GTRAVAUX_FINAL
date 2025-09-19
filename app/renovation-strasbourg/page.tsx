import Hero from '../components/Hero';
import ServiceCard from '../components/ServiceCard';
import TestimonialCard from '../components/TestimonialCard';
import CallbackForm from '../components/CallbackForm';
import StatsSection from '../components/StatsSection';
import { FaPaintBrush, FaThLarge, FaHardHat, FaBolt, FaCubes, FaTools } from 'react-icons/fa';

export const metadata = {
  title: 'Rénovation Strasbourg | G.TRAVAUX - Entreprise Locale Expert',
  description: 'Rénovation complète à Strasbourg ⭐ Intervention rapide après sinistre ⭐ Devis gratuit sous 48h ⭐ 15 ans d\'expérience en Alsace',
  openGraph: {
    title: 'Rénovation Strasbourg | G.TRAVAUX',
    description: 'Rénovation complète à Strasbourg. Intervention rapide après sinistre. Devis gratuit sous 48h.',
    url: 'https://gtravaux.fr/renovation-strasbourg',
    type: 'website',
  }
};

export default function RenovationStrasbourgPage() {
  const services = [
    {
      title: 'Peinture & finitions',
      description: 'Rafraîchissement et embellissement de vos intérieurs strasbourgeois avec des finitions impeccables.',
      href: '/services/peinture-finitions',
      Icon: FaPaintBrush,
    },
    {
      title: 'Pose de sol',
      description: 'Parquets, carrelage, vinyle : pose professionnelle adaptée au climat alsacien.',
      href: '/services/pose-de-sol',
      Icon: FaThLarge,
    },
    {
      title: 'Plâtrerie & placo',
      description: 'Réagencement des appartements strasbourgeois, cloisons et isolation phonique.',
      href: '/services/platrerie-placo',
      Icon: FaHardHat,
    },
    {
      title: 'Électricité & plomberie',
      description: 'Mise aux normes dans l\'ancien bâti strasbourgeois, installations modernes.',
      href: '/services/electricite-plomberie',
      Icon: FaBolt,
    },
    {
      title: 'Isolation intérieure',
      description: 'Isolation thermique performante contre les hivers rigoureux d\'Alsace.',
      href: '/services/isolation-interieure',
      Icon: FaCubes,
    },
    {
      title: 'Maçonnerie légère',
      description: 'Ouvertures, réparations dans le respect de l\'architecture strasbourgeoise.',
      href: '/services/maconnerie-legere',
      Icon: FaTools,
    },
  ];

  const testimonials = [
    {
      name: 'Marie Dupont',
      location: 'Strasbourg Centre',
      message: 'Rénovation complète de mon appartement rue du Faubourg National. Travail impeccable et équipe très professionnelle !',
    },
    {
      name: 'Jean-Claude Weber',
      location: 'Cronenbourg, Strasbourg',
      message: 'Intervention rapide après dégât des eaux. G.TRAVAUX a su gérer l\'assurance et rénover ma cuisine en 3 semaines.',
    },
    {
      name: 'Émilie Schneider',
      location: 'Neudorf, Strasbourg',
      message: 'Isolation de ma maison alsacienne avec préservation du cachet. Excellent conseil et finitions parfaites.',
    },
  ];

  const stats = [
    { label: "Projets à Strasbourg", value: 45, suffix: '+' },
    { label: 'Quartiers couverts', value: 15, suffix: '' },
    { label: 'Interventions après sinistre', value: 20, suffix: '+' },
    { label: 'Clients satisfaits', value: 98, suffix: '%' },
  ];

  return (
    <div>
      <Hero
        title="Rénovation à Strasbourg"
        subtitle="Entreprise locale expert depuis 15 ans • Intervention dans tous les quartiers de Strasbourg • Devis gratuit sous 48h • Accompagnement assurance après sinistre"
        imageSrc="/images/placeholder/strasbourg-renovation.jpg"
        cta={{ label: 'Devis gratuit', href: '/contact' }}
        showForm={true}
        formComponent={
          <div className="bg-white/95 backdrop-blur-sm p-6 rounded-lg shadow-xl max-w-md w-full">
            <div className="mb-4 text-center">
              <h3 className="text-xl font-bold text-darkGray mb-2">Devis Strasbourg</h3>
              <p className="text-sm text-darkGray">
                Remplissez ce formulaire pour un devis personnalisé
              </p>
            </div>
            <CallbackForm />
          </div>
        }
      />

      {/* Section spécifique Strasbourg */}
      <section className="container mx-auto px-4 py-16">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl font-bold mb-6">Rénovation à Strasbourg : Notre expertise locale</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 text-left">
            <div className="bg-lightGray p-6 rounded-lg">
              <h3 className="font-semibold mb-3 text-primary">🏛️ Architecture strasbourgeoise</h3>
              <p className="text-sm text-darkGray">
                Nous maîtrisons les spécificités du bâti alsacien : colombages, grès rose, 
                toitures pentues. Rénovation respectueuse du patrimoine architectural.
              </p>
            </div>
            <div className="bg-lightGray p-6 rounded-lg">
              <h3 className="font-semibold mb-3 text-primary">❄️ Isolation climat continental</h3>
              <p className="text-sm text-darkGray">
                Solutions d'isolation adaptées aux hivers rigoureux (-10°C) et étés chauds (+35°C) 
                de la région strasbourgeoise.
              </p>
            </div>
            <div className="bg-lightGray p-6 rounded-lg">
              <h3 className="font-semibold mb-3 text-primary">🚨 Urgences 24h/24</h3>
              <p className="text-sm text-darkGray">
                Interventions d'urgence dans tous les quartiers : Centre-ville, Cronenbourg, 
                Neudorf, Hautepierre, Robertsau, Bischheim.
              </p>
            </div>
            <div className="bg-lightGray p-6 rounded-lg">
              <h3 className="font-semibold mb-3 text-primary">📋 Normes locales</h3>
              <p className="text-sm text-darkGray">
                Respect des PLU strasbourgeois, déclarations en mairie, coordination 
                avec les services d'urbanisme de l'Eurométropole.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Quartiers d'intervention */}
      <section className="bg-lightGray py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-8">Nos interventions par quartier</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              "Centre-ville / Grande Île",
              "Cronenbourg / Hautepierre", 
              "Neudorf / Meinau",
              "Robertsau / Wacken",
              "Bischheim / Schiltigheim",
              "Illkirch / Lingolsheim",
              "Hoenheim / Reichstett",
              "Ostwald / Geispolsheim"
            ].map((quartier) => (
              <div key={quartier} className="bg-white p-4 rounded-lg shadow text-center">
                <h4 className="font-medium text-primary mb-2">{quartier}</h4>
                <p className="text-xs text-darkGray">Devis gratuit • Intervention sous 48h</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Services */}
      <section className="container mx-auto px-4 py-16">
        <h2 className="text-3xl font-bold text-center mb-8">Nos services à Strasbourg</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service) => (
            <ServiceCard key={service.title} {...service} />
          ))}
        </div>
      </section>

      {/* Témoignages clients Strasbourg */}
      <section className="bg-lightGray py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-8">Clients satisfaits à Strasbourg</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.map((testimonial) => (
              <TestimonialCard key={testimonial.name} {...testimonial} />
            ))}
          </div>
        </div>
      </section>

      {/* Statistiques Strasbourg */}
      <section className="container mx-auto px-4 py-16">
        <h2 className="text-3xl font-bold text-center mb-8">G.TRAVAUX à Strasbourg en chiffres</h2>
        <StatsSection stats={stats} />
      </section>

      {/* CTA local */}
      <section className="bg-primary text-white py-12">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-2xl font-bold mb-4">Un projet de rénovation à Strasbourg ?</h2>
          <p className="mb-6">Devis gratuit • Intervention rapide • Accompagnement assurance</p>
          <div className="space-x-4">
            <a 
              href="tel:+33972123456" 
              className="bg-white text-primary px-6 py-3 rounded-full font-medium hover:bg-lightGray transition-colors duration-300 inline-block"
            >
              Appeler maintenant
            </a>
            <a 
              href="/contact" 
              className="bg-green text-white px-6 py-3 rounded-full font-medium hover:bg-green/90 transition-colors duration-300 inline-block"
            >
              Demander un devis
            </a>
          </div>
        </div>
      </section>

      {/* SEO local schema */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "LocalBusiness",
            "name": "G.TRAVAUX Strasbourg",
            "description": "Entreprise de rénovation à Strasbourg - Intervention après sinistre, tous corps de métier",
            "url": "https://gtravaux.fr/renovation-strasbourg",
            "telephone": "+33972123456",
            "address": {
              "@type": "PostalAddress",
              "streetAddress": "3 Rue du Vingt-Deux Novembre",
              "addressLocality": "Strasbourg",
              "postalCode": "67000",
              "addressCountry": "FR"
            },
            "geo": {
              "@type": "GeoCoordinates",
              "latitude": 48.5734053,
              "longitude": 7.7521113
            },
            "areaServed": [
              "Strasbourg", "Schiltigheim", "Bischheim", "Hoenheim", "Illkirch-Graffenstaden"
            ],
            "serviceType": ["Rénovation", "Plomberie", "Électricité", "Peinture", "Isolation"]
          })
        }}
      />
    </div>
  );
}