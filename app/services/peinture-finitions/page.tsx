import Hero from '../../components/Hero';
import Link from 'next/link';

export const metadata = {
  title: 'Peinture & finitions | G.TRAVAUX',
  description: 'Donnez du caractère à vos espaces grâce à notre service de peinture et finitions soignées.',
};

export default function PeinturePage() {
  const steps = [
    {
      title: 'Choix des couleurs & matières',
      description: 'Nous vous conseillons sur les teintes et textures adaptées à votre style et à votre budget.',
    },
    {
      title: 'Préparation des supports',
      description: 'Ponçage, lessivage, enduit… Nous préparons minutieusement les murs et plafonds.',
    },
    {
      title: 'Application & finitions',
      description: 'Peinture, enduit décoratif ou papier peint, nous assurons une pose irréprochable.',
    },
    {
      title: 'Nettoyage & réception',
      description: 'Nous laissons un chantier propre et vérifions ensemble la qualité des finitions.',
    },
  ];

  return (
    <div>
      <Hero
        title="Peinture & finitions"
        subtitle="Des finitions impeccables pour des intérieurs éclatants."
        imageSrc="/images/placeholder/peinture-hero.jpg"
        cta={{ label: 'Demander un devis', href: '/contact' }}
      />

      {/* Schema.org: FAQ and Service for SEO */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "FAQPage",
            "mainEntity": [
              {
                "@type": "Question",
                "name": "Quels délais pour des travaux de peinture intérieure ?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "Selon la surface et la préparation nécessaire, comptez généralement 2 à 5 jours ouvrés pour un logement standard."
                }
              },
              {
                "@type": "Question",
                "name": "Quel est le prix au m² ?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "Le prix dépend de l'état des supports et du type de peinture. À partir de 25€/m² pour une finition standard. Un devis gratuit est fourni après visite."
                }
              },
              {
                "@type": "Question",
                "name": "Est-ce que la protection du chantier est incluse ?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "Oui, la protection des sols, meubles et zones sensibles est systématiquement incluse avant toute intervention."
                }
              }
            ]
          })
        }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Service",
            "name": "Peinture & finitions",
            "serviceType": "Peinture intérieure",
            "provider": {
              "@type": "LocalBusiness",
              "@id": "https://g-travaux.fr/#business",
              "name": "G.TRAVAUX"
            },
            "areaServed": ["Strasbourg","Colmar","Mulhouse"],
            "brand": "G.TRAVAUX"
          })
        }}
      />

      <section className="container mx-auto px-4 py-16 space-y-12">
        <div>
          <h2 className="text-2xl font-bold mb-4 uppercase tracking-widest">Des finitions à la hauteur de vos attentes</h2>
          <p className="text-darkGray max-w-3xl">
            Sublimez vos espaces avec des teintes durables, des supports préparés avec soin et des finitions impeccables. 
            Peintures lessivables, éco‑responsables ou techniques selon vos usages. Tracés nets, raccords invisibles, 
            protection des sols et zones sensibles systématique.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {steps.map((step, index) => (
            <div key={step.title} className="premium-card">
              <span className="text-accent-600 text-3xl font-bold mb-2 inline-block">{index + 1}</span>
              <h3 className="font-semibold mb-2 uppercase tracking-widest text-primary">{step.title}</h3>
              <p className="text-sm text-darkGray/90">{step.description}</p>
            </div>
          ))}
        </div>
        <div className="text-center mt-12">
          <Link href="/contact" className="button-accent">
            Demander un devis
          </Link>
        </div>
      </section>
    </div>
  );
}
