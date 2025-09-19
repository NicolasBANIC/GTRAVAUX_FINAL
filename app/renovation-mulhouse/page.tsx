import Hero from '../components/Hero';
import ServiceCard from '../components/ServiceCard';
import TestimonialCard from '../components/TestimonialCard';
import CallbackForm from '../components/CallbackForm';
import StatsSection from '../components/StatsSection';
import { FaPaintBrush, FaThLarge, FaHardHat, FaBolt, FaCubes, FaIndustry } from 'react-icons/fa';

export const metadata = {
  title: 'Rénovation Mulhouse | G.TRAVAUX - Expert Sud-Alsace',
  description: 'Rénovation Mulhouse et Sud-Alsace ⭐ Habitat industriel ⭐ Intervention rapide ⭐ Devis gratuit ⭐ Accompagnement assurance',
  openGraph: {
    title: 'Rénovation Mulhouse | G.TRAVAUX',
    description: 'Rénovation complète à Mulhouse. Expert habitat industriel et résidentiel.',
    url: 'https://gtravaux.fr/renovation-mulhouse',
    type: 'website',
  }
};

export default function RenovationMulhousePage() {
  const services = [
    {
      title: 'Habitat industriel',
      description: 'Rénovation de maisons ouvrières, lofts industriels, anciennes usines.',
      href: '/services/maconnerie-legere',
      Icon: FaIndustry,
    },
    {
      title: 'Isolation performante',
      description: 'Solutions d\'isolation contre l\'humidité et les nuisances urbaines.',
      href: '/services/isolation-interieure',
      Icon: FaCubes,
    },
    {
      title: 'Rénovation énergétique',
      description: 'Amélioration énergétique des logements, aides CEE et MaPrimeRénov.',
      href: '/services/isolation-interieure',
      Icon: FaBolt,
    },
    {
      title: 'Aménagement moderne',
      description: 'Transformation d\'espaces industriels en lofts contemporains.',
      href: '/services/platrerie-placo',
      Icon: FaHardHat,
    },
    {
      title: 'Sols techniques',
      description: 'Béton ciré, résine, parquets industriels pour espaces atypiques.',
      href: '/services/pose-de-sol',
      Icon: FaThLarge,
    },
    {
      title: 'Finitions urbaines',
      description: 'Styles industriel, loft, contemporain adaptés à l\'habitat mulhousien.',
      href: '/services/peinture-finitions',
      Icon: FaPaintBrush,
    },
  ];

  const testimonials = [
    {
      name: 'Ahmed Benali',
      location: 'Mulhouse Centre',
      message: 'Transformation de mon loft industriel rue de la Fonderie. G.TRAVAUX a respecté l\'esprit industriel tout en modernisant.',
    },
    {
      name: 'Sandra Klein',
      location: 'Illzach',
      message: 'Rénovation énergétique avec accompagnement MaPrimeRénov. Économies de chauffage visibles dès le premier hiver !',
    },
    {
      name: 'Laurent Muller',
      location: 'Kingersheim',
      message: 'Après dégâts suite à rupture canalisation, G.TRAVAUX a tout géré : assurance, travaux, délais respectés.',
    },
  ];

  const stats = [
    { label: "Logements rénovés", value: 35, suffix: '+' },
    { label: 'Communes M2A', value: 8, suffix: '' },
    { label: 'Projets énergétiques', value: 18, suffix: '+' },
    { label: 'Clients satisfaits', value: 97, suffix: '%' },
  ];

  return (
    <div>
      <Hero
        title="Rénovation à Mulhouse"
        subtitle="Expert Sud-Alsace • Habitat industriel et résidentiel • M2A Mulhouse Alsace Agglomération • Rénovation énergétique • Accompagnement aides publiques"
        imageSrc="/images/placeholder/mulhouse-renovation.jpg"
        cta={{ label: 'Devis Mulhouse', href: '/contact' }}
        showForm={true}
        formComponent={
          <div className="bg-white/95 backdrop-blur-sm p-6 rounded-lg shadow-xl max-w-md w-full">
            <div className="mb-4 text-center">
              <h3 className="text-xl font-bold text-darkGray mb-2">Devis Sud-Alsace</h3>
              <p className="text-sm text-darkGray">
                Expert habitat industriel
              </p>
            </div>
            <CallbackForm />
          </div>
        }
      />

      {/* Section Mulhouse spécifique */}
      <section className="container mx-auto px-4 py-16">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl font-bold mb-6">Rénovation à Mulhouse : Notre expertise Sud-Alsace</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 text-left">
            <div className="bg-lightGray p-6 rounded-lg">
              <h3 className="font-semibold mb-3 text-primary">🏭 Patrimoine industriel</h3>
              <p className="text-sm text-darkGray">
                Spécialistes de la rénovation de l'habitat ouvrier : maisons de cité, 
                lofts industriels, transformation d'anciens bâtiments d'usine.
              </p>
            </div>
            <div className="bg-lightGray p-6 rounded-lg">
              <h3 className="font-semibold mb-3 text-primary">💰 Aides énergétiques</h3>
              <p className="text-sm text-darkGray">
                Accompagnement MaPrimeRénov', CEE, aides M2A. Optimisation 
                énergétique des logements mulhousiens énergivores.
              </p>
            </div>
            <div className="bg-lightGray p-6 rounded-lg">
              <h3 className="font-semibold mb-3 text-primary">🌍 Éco-rénovation</h3>
              <p className="text-sm text-darkGray">
                Solutions écologiques : isolation chanvre, enduits terre, 
                récupération eaux pluviales. Mulhouse Ville Durable.
              </p>
            </div>
            <div className="bg-lightGray p-6 rounded-lg">
              <h3 className="font-semibold mb-3 text-primary">🚇 Proximité transports</h3>
              <p className="text-sm text-darkGray">
                Interventions optimisées : Tram, proximité gares SNCF/TER. 
                Coordination chantiers centre-ville et périphérie.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Communes M2A */}
      <section className="bg-lightGray py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-8">Nos interventions M2A</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              "Mulhouse Centre",
              "Illzach", 
              "Kingersheim",
              "Wittenheim",
              "Rixheim",
              "Riedisheim",
              "Pfastatt",
              "Brunstatt-Didenheim"
            ].map((commune) => (
              <div key={commune} className="bg-white p-4 rounded-lg shadow text-center">
                <h4 className="font-medium text-primary mb-2">{commune}</h4>
                <p className="text-xs text-darkGray">Rénovation • Énergie</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Services */}
      <section className="container mx-auto px-4 py-16">
        <h2 className="text-3xl font-bold text-center mb-8">Nos services à Mulhouse</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service) => (
            <ServiceCard key={service.title} {...service} />
          ))}
        </div>
      </section>

      {/* Section aides */}
      <section className="bg-primary text-white py-16">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-8">Rénovation énergétique : Jusqu'à 90% d'aides</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white/10 p-6 rounded-lg">
              <h3 className="font-bold mb-2">MaPrimeRénov'</h3>
              <p className="text-sm">Jusqu'à 20 000€ pour isolation, chauffage, ventilation</p>
            </div>
            <div className="bg-white/10 p-6 rounded-lg">
              <h3 className="font-bold mb-2">CEE (Certificats)</h3>
              <p className="text-sm">Primes énergie cumulables avec MaPrimeRénov'</p>
            </div>
            <div className="bg-white/10 p-6 rounded-lg">
              <h3 className="font-bold mb-2">Aides M2A</h3>
              <p className="text-sm">Subventions locales agglomération mulhousienne</p>
            </div>
          </div>
        </div>
      </section>

      {/* Témoignages */}
      <section className="container mx-auto px-4 py-16">
        <h2 className="text-3xl font-bold text-center mb-8">Clients satisfaits à Mulhouse</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((testimonial) => (
            <TestimonialCard key={testimonial.name} {...testimonial} />
          ))}
        </div>
      </section>

      {/* Statistiques */}
      <section className="bg-lightGray py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-8">G.TRAVAUX à Mulhouse en chiffres</h2>
          <StatsSection stats={stats} />
        </div>
      </section>

      {/* CTA Mulhouse */}
      <section className="bg-green text-white py-12">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-2xl font-bold mb-4">Un projet dans le Sud-Alsace ?</h2>
          <p className="mb-6">Habitat industriel • Rénovation énergétique • Aides jusqu'à 90%</p>
          <div className="space-x-4">
            <a 
              href="tel:+33972123456" 
              className="bg-white text-green px-6 py-3 rounded-full font-medium hover:bg-lightGray transition-colors duration-300 inline-block"
            >
              03 89 XX XX XX
            </a>
            <a 
              href="/contact" 
              className="bg-primary text-white px-6 py-3 rounded-full font-medium hover:bg-primary/90 transition-colors duration-300 inline-block"
            >
              Calculer mes aides
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}