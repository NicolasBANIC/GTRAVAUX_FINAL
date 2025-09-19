import CalendlyBooking from '../components/CalendlyBooking';
import { FaCalendarCheck, FaCheckCircle, FaClock, FaMapMarkerAlt } from 'react-icons/fa';

export const metadata = {
  title: 'Réservation Diagnostic | G.TRAVAUX - Prise de rendez-vous en ligne',
  description: 'Réservez votre diagnostic gratuit à domicile avec G.TRAVAUX. Prise de rendez-vous en ligne, intervention dans toute l\'Alsace-Lorraine.',
};

export default function ReservationPage() {
  const advantages = [
    {
      icon: FaCalendarCheck,
      title: 'Planification facile',
      description: 'Choisissez votre créneau en quelques clics selon vos disponibilités.'
    },
    {
      icon: FaCheckCircle,
      title: 'Diagnostic gratuit',
      description: 'Évaluation complète de votre projet sans engagement ni frais cachés.'
    },
    {
      icon: FaClock,
      title: 'Confirmation rapide',
      description: 'SMS et email de confirmation, rappel 30 minutes avant l\'intervention.'
    },
    {
      icon: FaMapMarkerAlt,
      title: 'Déplacement inclus',
      description: 'Intervention gratuite dans un rayon de 50km autour de Strasbourg.'
    }
  ];

  return (
    <div className="min-h-screen bg-lightGray">
      {/* Header */}
      <section className="bg-primary text-white py-16">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-3xl md:text-5xl lg:text-6xl font-semibold mb-6 leading-tight tracking-[0.12em] uppercase">Réservation en ligne</h1>
          <p className="text-lg md:text-xl lg:text-2xl leading-relaxed opacity-95 max-w-2xl mx-auto">
            Prenez rendez-vous pour votre diagnostic gratuit à domicile. 
            Notre expert se déplace chez vous pour évaluer votre projet.
          </p>
        </div>
      </section>

      <div className="container mx-auto px-4 py-16">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Formulaire de réservation */}
          <div>
            <CalendlyBooking />
          </div>

          {/* Avantages */}
          <div>
            <h2 className="text-2xl font-bold mb-8">Pourquoi réserver un diagnostic ?</h2>
            <div className="space-y-6">
              {advantages.map((advantage, index) => {
                const Icon = advantage.icon;
                return (
                  <div key={index} className="flex items-start space-x-4">
                    <div className="bg-primary/10 p-3 rounded-lg">
                      <Icon className="text-primary" size={24} />
                    </div>
                    <div>
                      <h3 className="font-semibold mb-2">{advantage.title}</h3>
                      <p className="text-darkGray">{advantage.description}</p>
                    </div>
                  </div>
                );
              })}
            </div>

            {/* Ce qui est inclus */}
            <div className="mt-12 bg-white p-6 rounded-lg shadow">
              <h3 className="text-xl font-bold mb-4">✅ Inclus dans votre diagnostic</h3>
              <ul className="space-y-2 text-sm">
                <li className="flex items-center space-x-2">
                  <span className="text-green">•</span>
                  <span>Évaluation technique complète de votre projet</span>
                </li>
                <li className="flex items-center space-x-2">
                  <span className="text-green">•</span>
                  <span>Conseils personnalisés selon votre budget</span>
                </li>
                <li className="flex items-center space-x-2">
                  <span className="text-green">•</span>
                  <span>Estimation des coûts et des délais</span>
                </li>
                <li className="flex items-center space-x-2">
                  <span className="text-green">•</span>
                  <span>Recommandations matériaux et finitions</span>
                </li>
                <li className="flex items-center space-x-2">
                  <span className="text-green">•</span>
                  <span>Information sur les aides disponibles</span>
                </li>
                <li className="flex items-center space-x-2">
                  <span className="text-green">•</span>
                  <span>Devis détaillé sous 48h (si souhaité)</span>
                </li>
              </ul>
            </div>

            {/* Contact d'urgence */}
            <div className="mt-8 bg-red-50 border border-red-200 rounded-lg p-6">
              <h3 className="font-bold text-red-600 mb-2">🚨 Urgence ?</h3>
              <p className="text-sm text-darkGray mb-3">
                Pour les sinistres ou interventions urgentes, contactez-nous directement :
              </p>
              <div className="space-y-2">
                <a 
                  href="tel:+33972123456" 
                  className="block bg-red-600 text-white px-4 py-2 rounded text-center font-medium hover:bg-red-700 transition-colors"
                >
                  📞 Appel d'urgence : +33 9 72 12 34 56
                </a>
                <p className="text-xs text-darkGray text-center">
                  Disponible 24h/24 pour les urgences
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* FAQ Réservation */}
      <section className="bg-white py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-2xl font-bold text-center mb-8">Questions fréquentes</h2>
          <div className="max-w-3xl mx-auto space-y-6">
            <div className="bg-lightGray p-4 rounded-lg">
              <h3 className="font-semibold mb-2">Le diagnostic est-il vraiment gratuit ?</h3>
              <p className="text-sm text-darkGray">
                Oui, totalement gratuit et sans engagement. Nous nous déplaçons gratuitement 
                dans un rayon de 50km autour de Strasbourg.
              </p>
            </div>
            
            <div className="bg-lightGray p-4 rounded-lg">
              <h3 className="font-semibold mb-2">Combien de temps dure un diagnostic ?</h3>
              <p className="text-sm text-darkGray">
                Entre 45 minutes et 1h30 selon la complexité de votre projet. 
                Nous prenons le temps nécessaire pour bien comprendre vos besoins.
              </p>
            </div>
            
            <div className="bg-lightGray p-4 rounded-lg">
              <h3 className="font-semibold mb-2">Dois-je préparer quelque chose ?</h3>
              <p className="text-sm text-darkGray">
                Ayez avec vous vos plans (si disponibles), une idée de votre budget 
                et vos inspirations/envies. Nous nous occupons du reste !
              </p>
            </div>
            
            <div className="bg-lightGray p-4 rounded-lg">
              <h3 className="font-semibold mb-2">Et si je change d'avis ?</h3>
              <p className="text-sm text-darkGray">
                Aucun problème ! Vous pouvez annuler ou reporter votre rendez-vous 
                jusqu'à 24h avant. Appelez-nous ou envoyez un SMS.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}