import Hero from '../components/Hero';
import ContactForm from '../components/ContactForm';
import FaqItem from '../components/FaqItem';

export const metadata = {
  title: 'Contact & Devis | G.TRAVAUX',
  description:
    'Contactez-nous pour un devis gratuit ou toute question concernant votre projet de rénovation.',
};

export default function ContactPage() {
  const faqs = [
    {
      question: 'Quels sont vos délais d’intervention ?',
      answer:
        'Nous intervenons généralement sous 48 h pour les demandes urgentes et planifions les chantiers selon vos disponibilités.',
    },
    {
      question: 'Proposez-vous des devis gratuits ?',
      answer:
        'Oui, nous établissons un devis gratuit et détaillé après étude de votre projet.',
    },
    {
      question: 'Travaillez-vous avec les assurances ?',
      answer:
        'Nous accompagnons nos clients dans leurs démarches auprès des assurances et intervenons après sinistre.',
    },
    {
      question: 'Dans quelles régions intervenez-vous ?',
      answer:
        'Nous sommes basés en Alsace et nous déplaçons également sur des chantiers à Lyon, Nancy et Metz.',
    },
  ];

  return (
    <div>
      <Hero
        title="Contact & devis"
        subtitle="Discutons de votre projet : nos équipes vous répondent sous 24 heures ouvrées."
        imageSrc="/images/contact-hero.png"
      />

      <section className="container mx-auto px-4 py-20 text-center">
        <h1 className="mb-6 text-3xl font-semibold uppercase leading-tight tracking-[0.12em] md:text-5xl lg:text-6xl">
          Contactez-nous
        </h1>
        <p className="mx-auto mb-12 max-w-3xl text-lg leading-relaxed text-darkGray">
          Devis gratuit, conseil personnalisé et accompagnement complet de votre chantier. Remplissez le formulaire ou contactez-nous directement par téléphone ou email.
        </p>

        <div className="grid grid-cols-1 gap-16 lg:grid-cols-2">
          <div>
            <h2 className="mb-4 text-2xl font-semibold uppercase tracking-widest">
              Demande de devis
            </h2>
            <ContactForm />
          </div>
          <div>
            <h2 className="mb-4 text-2xl font-semibold uppercase tracking-widest">
              Nos coordonnées
            </h2>
            <p className="mb-2">
              Téléphone :{' '}
              <a href="tel:+33367102653" className="text-primary hover:underline">
                +33 6 04 00 74 99
              </a>
            </p>
            <p className="mb-2">
              Email :{' '}
              <a
                href="mailto:contact@g-travaux.fr"
                className="text-primary hover:underline"
              >
                contact@g-travaux.fr
              </a>
            </p>
            <p className="mb-4">
              Adresse : 3 Rue du Vingt-Deux Novembre, 67000 Strasbourg
            </p>
            <div className="h-64 w-full overflow-hidden rounded shadow">
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
          <h2 className="mb-6 text-center text-3xl font-bold uppercase tracking-widest">
            FAQ
          </h2>
          <div className="mx-auto max-w-4xl">
            {faqs.map(faq => (
              <FaqItem
                key={faq.question}
                question={faq.question}
                answer={faq.answer}
              />
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
