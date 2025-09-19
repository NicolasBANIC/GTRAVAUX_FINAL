import Hero from '../components/Hero';
import ServiceCard from '../components/ServiceCard';
import TestimonialCard from '../components/TestimonialCard';
import CallbackForm from '../components/CallbackForm';
import StatsSection from '../components/StatsSection';
import { FaPaintBrush, FaThLarge, FaHardHat, FaBolt, FaCubes, FaTools } from 'react-icons/fa';

export const metadata = {
  title: 'Rénovation Colmar | G.TRAVAUX - Spécialiste Haut-Rhin',
  description: 'Rénovation à Colmar et Haut-Rhin ⭐ Maisons alsaciennes ⭐ Intervention rapide ⭐ Devis gratuit ⭐ Entreprise certifiée RGE',
  openGraph: {
    title: 'Rénovation Colmar | G.TRAVAUX',
    description: 'Rénovation complète à Colmar. Spécialiste maisons alsaciennes. Devis gratuit.',
    url: 'https://gtravaux.fr/renovation-colmar',
    type: 'website',
  }
};

export default function RenovationColmarPage() {
  const services = [
    {
      title: 'Rénovation maisons alsaciennes',
      description: 'Restauration respectueuse du patrimoine alsacien : colombages, toitures, façades.',
      href: '/services/maconnerie-legere',
      Icon: FaTools,
    },
    {
      title: 'Isolation thermique',
      description: 'Solutions d\'isolation performantes pour les hivers rigoureux du Haut-Rhin.',
      href: '/services/isolation-interieure',
      Icon: FaCubes,
    },
    {
      title: 'Peinture & finitions',
      description: 'Mise en valeur de vos intérieurs avec des finitions haut de gamme.',
      href: '/services/peinture-finitions',
      Icon: FaPaintBrush,
    },
    {
      title: 'Plâtrerie moderne',
      description: 'Aménagement intérieur alliant tradition alsacienne et confort moderne.',
      href: '/services/platrerie-placo',
      Icon: FaHardHat,
    },
    {
      title: 'Sols traditionnels',
      description: 'Parquets massifs, tomettes, pierre : pose dans le respect des traditions.',
      href: '/services/pose-de-sol',
      Icon: FaThLarge,
    },
    {
      title: 'Installations techniques',
      description: 'Électricité et plomberie intégrées discrètement dans l\'ancien.',
      href: '/services/electricite-plomberie',
      Icon: FaBolt,
    },
  ];

  const testimonials = [
    {
      name: 'François Meyer',
      location: 'Colmar Centre',
      message: 'Rénovation de ma maison à colombages rue des Tanneurs. G.TRAVAUX a su préserver l\'authenticité tout en modernisant.',
    },
    {
      name: 'Catherine Muller',
      location: 'Turckheim',
      message: 'Isolation de ma ferme alsacienne. Excellent conseil technique et respect des délais. Je recommande !',
    },
    {
      name: 'Pierre Zimmermann',
      location: 'Ribeauvillé',
      message: 'Après un sinistre, G.TRAVAUX a géré l\'assurance et rénové ma cave voûtée. Travail remarquable.',
    },
  ];

  const stats = [
    { label: "Maisons alsaciennes rénovées", value: 25, suffix: '+' },
    { label: 'Villages du Haut-Rhin', value: 12, suffix: '' },
    { label: 'Années d\'expérience locale', value: 8, suffix: '+' },
    { label: 'Clients satisfaits', value: 96, suffix: '%' },
  ];

  return (
    <div>
      <Hero
        title="Rénovation à Colmar"
        subtitle="Spécialiste des maisons alsaciennes • Route des Vins • Turckheim, Ribeauvillé, Kaysersberg • Patrimoine préservé, confort moderne"
        imageSrc="/images/placeholder/colmar-renovation.jpg"
        cta={{ label: 'Devis Colmar', href: '/contact' }}
        showForm={true}
        formComponent={
          <div className="bg-white/95 backdrop-blur-sm p-6 rounded-lg shadow-xl max-w-md w-full">
            <div className="mb-4 text-center">
              <h3 className="text-xl font-bold text-darkGray mb-2">Devis Colmar & Haut-Rhin</h3>
              <p className="text-sm text-darkGray">
                Spécialiste maisons alsaciennes
              </p>
            </div>
            <CallbackForm />
          </div>
        }
      />

      {/* Section Colmar spécifique */}
      <section className="container mx-auto px-4 py-16">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl font-bold mb-6">Rénovation à Colmar : Notre savoir-faire alsacien</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 text-left">
            <div className="bg-lightGray p-6 rounded-lg">
              <h3 className="font-semibold mb-3 text-primary">🏘️ Patrimoine alsacien</h3>
              <p className="text-sm text-darkGray">
                Spécialistes des maisons à colombages, fermes vosgiennes, caves voûtées. 
                Restauration dans le respect des techniques traditionnelles.
              </p>
            </div>
            <div className="bg-lightGray p-6 rounded-lg">
              <h3 className="font-semibold mb-3 text-primary">🍷 Route des Vins</h3>
              <p className="text-sm text-darkGray">
                Interventions dans tous les villages viticoles : Riquewihr, Kaysersberg, 
                Eguisheim, Turckheim. Préservation du cachet authentique.
              </p>
            </div>
            <div className="bg-lightGray p-6 rounded-lg">
              <h3 className="font-semibold mb-3 text-primary">🏔️ Climat continental</h3>
              <p className="text-sm text-darkGray">
                Solutions d'isolation adaptées : hivers froids (-8°C), étés chauds et secs. 
                Matériaux locaux privilégiés (grès, bois).
              </p>
            </div>
            <div className="bg-lightGray p-6 rounded-lg">
              <h3 className="font-semibold mb-3 text-primary">🏛️ Réglementation ABF</h3>
              <p className="text-sm text-darkGray">
                Expertise des contraintes Architectes des Bâtiments de France. 
                Dossiers secteurs sauvegardés, sites classés.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Secteurs d'intervention */}
      <section className="bg-lightGray py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-8">Nos interventions dans le Haut-Rhin</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              "Colmar Centre",
              "Turckheim", 
              "Ribeauvillé",
              "Riquewihr",
              "Kaysersberg",
              "Eguisheim",
              "Munster",
              "Wintzenheim"
            ].map((village) => (
              <div key={village} className="bg-white p-4 rounded-lg shadow text-center">
                <h4 className="font-medium text-primary mb-2">{village}</h4>
                <p className="text-xs text-darkGray">Patrimoine • Devis gratuit</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Services */}
      <section className="container mx-auto px-4 py-16">
        <h2 className="text-3xl font-bold text-center mb-8">Nos services à Colmar</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service) => (
            <ServiceCard key={service.title} {...service} />
          ))}
        </div>
      </section>

      {/* Témoignages */}
      <section className="bg-lightGray py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-8">Clients satisfaits à Colmar</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.map((testimonial) => (
              <TestimonialCard key={testimonial.name} {...testimonial} />
            ))}
          </div>
        </div>
      </section>

      {/* Statistiques */}
      <section className="container mx-auto px-4 py-16">
        <h2 className="text-3xl font-bold text-center mb-8">G.TRAVAUX à Colmar en chiffres</h2>
        <StatsSection stats={stats} />
      </section>

      {/* CTA Colmar */}
      <section className="bg-primary text-white py-12">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-2xl font-bold mb-4">Un projet dans le Haut-Rhin ?</h2>
          <p className="mb-6">Spécialiste maisons alsaciennes • Respect du patrimoine • Devis gratuit</p>
          <div className="space-x-4">
            <a 
              href="tel:+33972123456" 
              className="bg-white text-primary px-6 py-3 rounded-full font-medium hover:bg-lightGray transition-colors duration-300 inline-block"
            >
              03 89 XX XX XX
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
    </div>
  );
}