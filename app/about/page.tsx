import Hero from '../components/Hero';
import Image from 'next/image';
import TrustBar from '../components/TrustBar';

export const metadata = {
  title: 'A propos | G.TRAVAUX - Ali Gherib',
  description:
    'Decouvrez Ali Gherib, artisan passionne avec plus de 35 ans d\'experience dans tous les corps de metiers du batiment.',
};

export default function AboutPage() {
  return (
    <div>
      <Hero
        title="Votre artisan de confiance"
        subtitle="Ali Gherib, plus de 35 ans d'expertise au service de vos projets"
        imageSrc="/images/about-hero.png"
        cta={{ label: 'Demander un devis', href: '/contact' }}
      />
      
      <section className="container mx-auto space-y-16 px-4 py-16">
        {/* Présentation d'Ali Gherib */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="order-2 lg:order-1">
            <h2 className="mb-6 text-3xl font-bold uppercase tracking-widest text-center lg:text-left">
              Ali Gherib
            </h2>
            <div className="space-y-4 text-darkGray">
              <p className="text-lg leading-relaxed">
                Avec <strong>plus de 35 ans d'expérience</strong> dans le bâtiment, Ali Gherib est un 
                <strong> homme de terrain</strong> qui a consacré sa carrière entière à perfectionner son art. 
                Sa polyvalence exceptionnelle lui permet de maîtriser tous les corps de métiers : 
                <strong> maçonnerie, plomberie, électricité, menuiserie, rénovation intérieure et extérieure</strong>.
              </p>
              <p className="text-lg leading-relaxed">
                Cette expertise rare, acquise au fil des décennies, fait d'Ali un professionnel 
                <strong> fiable et passionné</strong>, capable de comprendre chaque aspect de votre projet 
                et de vous conseiller avec justesse. Sa réputation s'est bâtie sur la qualité irréprochable 
                de ses réalisations et sa proximité avec ses clients.
              </p>
              <p className="text-lg leading-relaxed">
                Que votre projet soit de petite ou grande envergure, Ali s'adapte à vos besoins et 
                vous accompagne personnellement de la conception à la réalisation. 
                <strong> Proche de ses clients</strong>, il privilégie l'écoute et le conseil pour 
                que chaque chantier reflète parfaitement vos attentes.
              </p>
            </div>
          </div>
          <div className="order-1 lg:order-2 flex justify-center">
            <div className="relative">
              <div className="w-80 h-80 overflow-hidden rounded-2xl shadow-2xl">
                <Image
                  src="/images/ali-gherib.png"
                  alt="Ali Gherib - Artisan expert en bâtiment"
                  width={320}
                  height={320}
                  className="w-full h-full object-cover"
                  priority
                />
              </div>
              <div className="absolute -bottom-4 -right-4 bg-primary text-white px-4 py-2 rounded-lg shadow-lg">
                <span className="font-bold text-sm">+35 ans d'expérience</span>
              </div>
            </div>
          </div>
        </div>

        {/* Expertise et savoir-faire */}
        <div className="text-center">
          <h2 className="mb-8 text-3xl font-bold uppercase tracking-widest">
            Une expertise complète
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <div className="premium-card">
              <h3 className="mb-3 font-semibold uppercase tracking-widest text-primary">
                Maçonnerie & Gros œuvre
              </h3>
              <p className="text-sm text-darkGray">
                Fondations, murs porteurs, cloisons. Une maîtrise technique 
                acquise sur le terrain depuis des décennies.
              </p>
            </div>
            <div className="premium-card">
              <h3 className="mb-3 font-semibold uppercase tracking-widest text-primary">
                Plomberie & Électricité
              </h3>
              <p className="text-sm text-darkGray">
                Installations complètes, rénovations, mises aux normes. 
                Une polyvalence rare dans ces métiers techniques.
              </p>
            </div>
            <div className="premium-card">
              <h3 className="mb-3 font-semibold uppercase tracking-widest text-primary">
                Menuiserie & Finitions
              </h3>
              <p className="text-sm text-darkGray">
                Pose, rénovation, finitions d'exception. 
                Le souci du détail qui fait la différence.
              </p>
            </div>
            <div className="premium-card">
              <h3 className="mb-3 font-semibold uppercase tracking-widest text-primary">
                Rénovation Intérieure
              </h3>
              <p className="text-sm text-darkGray">
                Transformation complète d'espaces, aménagements sur mesure, 
                modernisation respectueuse du bâti existant.
              </p>
            </div>
            <div className="premium-card">
              <h3 className="mb-3 font-semibold uppercase tracking-widest text-primary">
                Rénovation Extérieure
              </h3>
              <p className="text-sm text-darkGray">
                Façades, toitures, isolation extérieure. 
                Protection et embellissement de votre patrimoine.
              </p>
            </div>
            <div className="premium-card">
              <h3 className="mb-3 font-semibold uppercase tracking-widest text-primary">
                Gestion de Projet
              </h3>
              <p className="text-sm text-darkGray">
                Coordination, planning, suivi qualité. 
                Une approche globale pour des projets réussis.
              </p>
            </div>
          </div>
        </div>

        {/* Valeurs et approche */}
        <div className="text-center">
          <h2 className="mb-8 text-3xl font-bold uppercase tracking-widest">
            Une approche humaine
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="premium-card">
              <h3 className="mb-3 font-semibold uppercase tracking-widest text-primary">
                Proximité Client
              </h3>
              <p className="text-sm text-darkGray">
                Écoute attentive, conseils personnalisés, relation de confiance. 
                Ali privilégie le contact direct et la transparence.
              </p>
            </div>
            <div className="premium-card">
              <h3 className="mb-3 font-semibold uppercase tracking-widest text-primary">
                Passion du Métier
              </h3>
              <p className="text-sm text-darkGray">
                35 ans de passion intacte, perfectionnement constant, 
                fierté du travail bien fait transmise sur chaque chantier.
              </p>
            </div>
            <div className="premium-card">
              <h3 className="mb-3 font-semibold uppercase tracking-widest text-primary">
                Fiabilité Absolue
              </h3>
              <p className="text-sm text-darkGray">
                Respect des délais, qualité constante, engagement tenu. 
                Une réputation bâtie sur la confiance et les résultats.
              </p>
            </div>
          </div>
        </div>

        {/* Réseau de partenaires */}
        <div className="text-center bg-gray-50 rounded-2xl p-8">
          <h2 className="mb-6 text-3xl font-bold uppercase tracking-widest">
            Un réseau d'experts
          </h2>
          <p className="mx-auto max-w-4xl text-darkGray text-lg leading-relaxed">
            Pour les projets d'envergure nécessitant des compétences spécialisées, 
            Ali collabore avec un <strong>réseau d'experts du secteur</strong> soigneusement sélectionnés. 
            Cette approche collaborative garantit une <strong>qualité irréprochable</strong> sur tous les aspects 
            de votre projet, tout en conservant la coordination et le suivi personnalisé qui font sa réputation.
          </p>
          <div className="mt-8 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 text-sm">
            <div className="bg-white rounded-lg p-4 shadow-sm">
              <strong className="text-primary">Architectes</strong>
              <p className="text-darkGray mt-1">Conception et plans</p>
            </div>
            <div className="bg-white rounded-lg p-4 shadow-sm">
              <strong className="text-primary">Spécialistes</strong>
              <p className="text-darkGray mt-1">Techniques avancées</p>
            </div>
            <div className="bg-white rounded-lg p-4 shadow-sm">
              <strong className="text-primary">Artisans</strong>
              <p className="text-darkGray mt-1">Savoir-faire d'exception</p>
            </div>
            <div className="bg-white rounded-lg p-4 shadow-sm">
              <strong className="text-primary">Fournisseurs</strong>
              <p className="text-darkGray mt-1">Matériaux premium</p>
            </div>
          </div>
        </div>

        {/* Garanties et confiance */}
        <div className="text-center">
          <h2 className="mb-6 text-3xl font-bold uppercase tracking-widest">
            Assurances & Garanties
          </h2>
          <p className="mx-auto max-w-4xl text-darkGray text-lg leading-relaxed mb-8">
            <strong>Assurance décennale, RC Professionnelle</strong>. 
            Tous les documents sont fournis sur demande. Respect strict des normes en vigueur, 
            PV de conformité et fiches techniques disponibles. 
            <strong>Accompagnement complet après sinistre</strong> et relations privilégiées avec les assurances.
          </p>
          <TrustBar variant="full" />
        </div>

        {/* Call to action final */}
        <div className="text-center bg-primary/5 rounded-2xl p-8">
          <h2 className="mb-4 text-2xl font-bold uppercase tracking-widest text-primary">
            Prêt à démarrer votre projet ?
          </h2>
          <p className="mb-6 text-darkGray text-lg">
            Confiez votre projet à un professionnel expérimenté. 
            Ali vous accompagne de A à Z pour concrétiser vos idées.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="/contact"
              className="inline-block bg-primary text-white px-8 py-3 rounded-lg font-semibold hover:bg-primary/90 transition-colors"
            >
              Demander un devis gratuit
            </a>
            <a
              href="tel:+33123456789"
              className="inline-block border-2 border-primary text-primary px-8 py-3 rounded-lg font-semibold hover:bg-primary hover:text-white transition-colors"
            >
              Appeler directement
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}