import ContactForm from '../components/ContactForm';
import FaqItem from '../components/FaqItem';

export const metadata = {
  title: 'Contact & Devis | G.TRAVAUX',
  description: 'Contactez-nous pour un devis gratuit ou toute question concernant votre projet de rénovation.',
};

export default function ContactPage() {
  const faqs = [
    {
      question: 'Quels sont vos délais d’intervention ?',
      answer: 'Nous intervenons généralement sous 48 h pour les demandes urgentes et planifions les chantiers selon vos disponibilités.',
    },
    {
      question: 'Proposez-vous des devis gratuits ?',
      answer: 'Oui, nous établissons un devis gratuit et détaillé après étude de votre projet.',
    },
    {
      question: 'Travaillez-vous avec les assurances ?',
      answer: 'Nous accompagnons nos clients dans leurs démarches auprès des assurances et intervenons après sinistre.',
    },
    {
      question: 'Dans quelles régions intervenez-vous ?',
      answer: 'Nous sommes basés en Alsace et nous déplaçons également sur des chantiers à Lyon, Nancy et Metz.',
    },
  ];

  return (
    <div className="container mx-auto px-4 py-20">
      <h1 className="text-3xl md:text-5xl lg:text-6xl font-semibold mb-6 leading-tight tracking-[0.12em] uppercase text-center">Contactez-nous</h1>
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
        <div>
          <h2 className="text-2xl font-semibold mb-4 uppercase tracking-widest">Demande de devis</h2>
          <ContactForm />
        </div>
        <div>
          <h2 className="text-2xl font-semibold mb-4 uppercase tracking-widest">Nos coordonnées</h2>
          <p className="mb-2">Téléphone : <a href="tel:+33604007499" className="text-primary hover:underline">+33 6 04 00 74 99</a></p>
          <p className="mb-2">Email : <a href="mailto:contact@g-travaux.fr" className="text-primary hover:underline">contact@g-travaux.fr</a></p>
          <p className="mb-4">Adresse : 3 Rue du Vingt-Deux Novembre, 67000 Strasbourg</p>
          <div className="w-full h-64 rounded overflow-hidden shadow">
            <iframe
              title="Google Maps - G.TRAVAUX Strasbourg"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2630.900613539154!2d7.742795916034977!3d48.582139016504734!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x4796c846f489f2f3%3A0x9f6b17a9ed3e7cd9!2s3%20Rue%20du%20Vingt-Deux%20Novembre%2C%2067000%20Strasbourg!5e0!3m2!1sfr!2sfr!4v1689250844148!5m2!1sfr!2sfr"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
          </div>
        </div>
      </div>
      <div id="faq" className="mt-16">
        <h2 className="text-3xl font-bold mb-6 text-center uppercase tracking-widest">FAQ</h2>
        <div className="max-w-3xl mx-auto">
          {faqs.map((faq) => (
            <FaqItem key={faq.question} question={faq.question} answer={faq.answer} />
          ))}
        </div>
      </div>
    </div>
  );
}
