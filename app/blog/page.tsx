import { FaClock, FaUser, FaTags } from 'react-icons/fa';

export const metadata = {
  title: 'Blog Rénovation | G.TRAVAUX - Conseils & Actualités',
  description:
    'Découvrez nos conseils de rénovation, guides techniques et actualités du bâtiment. Expertise G.TRAVAUX en Alsace.',
};

interface BlogPost {
  slug: string;
  title: string;
  excerpt: string;
  content: string;
  author: string;
  date: string;
  category: string;
  tags: string[];
  featured?: boolean;
  readTime: number;
}

export default function BlogPage() {
  // Articles de blog (à terme dans un CMS ou base de données)
  const blogPosts: BlogPost[] = [
    {
      slug: 'renovation-apres-degats-des-eaux-guide-complet',
      title: 'Rénovation après dégâts des eaux : Guide complet 2025',
      excerpt:
        'Découvrez toutes les étapes pour rénover efficacement après un sinistre. De la déclaration assurance aux finitions.',
      content: '',
      author: 'Équipe G.TRAVAUX',
      date: '2025-01-15',
      category: 'Sinistres',
      tags: ['dégâts des eaux', 'assurance', 'rénovation', 'urgence'],
      featured: true,
      readTime: 8,
    },
    {
      slug: 'isolation-thermique-maison-alsacienne-guide',
      title:
        'Isoler sa maison alsacienne : Solutions adaptées au climat continental',
      excerpt:
        "Les spécificités de l'isolation en Alsace-Lorraine. Matériaux, techniques et aides financières disponibles.",
      content: '',
      author: 'Thomas Weiss, Technicien',
      date: '2025-01-10',
      category: 'Isolation',
      tags: ['isolation', 'alsace', 'économies énergie', 'aides'],
      readTime: 6,
    },
    {
      slug: 'renovation-appartement-strasbourg-permis-requis',
      title: 'Rénover un appartement à Strasbourg : Quels permis requis ?',
      excerpt:
        "Guide pratique des démarches administratives pour votre rénovation dans l'Eurométropole de Strasbourg.",
      content: '',
      author: 'Marie Dupont, Chef de projet',
      date: '2025-01-08',
      category: 'Réglementation',
      tags: ['strasbourg', 'permis', 'réglementation', 'démarches'],
      readTime: 5,
    },
    {
      slug: 'cout-renovation-salle-bain-2025-alsace',
      title: "Coût d'une rénovation de salle de bain en 2025 en Alsace",
      excerpt:
        "Analyse détaillée des prix, matériaux et main-d'œuvre pour rénover votre salle de bain en Alsace.",
      content: '',
      author: 'Jean Weber, Estimateur',
      date: '2025-01-05',
      category: 'Prix & Devis',
      tags: ['prix', 'salle de bain', 'devis', '2025'],
      readTime: 7,
    },
    {
      slug: 'tendances-renovation-2025-alsace-lorraine',
      title: 'Tendances rénovation 2025 : Ce qui cartonne en Alsace-Lorraine',
      excerpt:
        'Découvrez les tendances déco et techniques qui dominent les rénovations cette année en région.',
      content: '',
      author: "Sophie Klein, Architecte d'intérieur",
      date: '2025-01-02',
      category: 'Tendances',
      tags: ['tendances', '2025', 'déco', 'style'],
      readTime: 4,
    },
    {
      slug: 'maprimerenov-2025-nouveautes-alsace',
      title: "MaPrimeRénov' 2025 : Les nouveautés pour l'Alsace-Lorraine",
      excerpt:
        'Toutes les évolutions des aides à la rénovation énergétique pour cette année. Montants et conditions.',
      content: '',
      author: 'Pierre Muller, Conseiller énergie',
      date: '2024-12-28',
      category: 'Aides & Subventions',
      tags: ['maprimerenov', 'aides', '2025', 'énergie'],
      readTime: 6,
    },
  ];

  const categories = [...new Set(blogPosts.map(post => post.category))];
  const featuredPost = blogPosts.find(post => post.featured);
  const recentPosts = blogPosts.filter(post => !post.featured).slice(0, 5);

  return (
    <div className="container mx-auto px-4 py-20">
      <header className="mb-16 text-center">
        <h1 className="mb-6 text-3xl font-semibold uppercase leading-tight tracking-[0.12em] md:text-5xl lg:text-6xl">
          Blog G.TRAVAUX
        </h1>
        <p className="mx-auto max-w-4xl text-lg leading-relaxed text-darkGray opacity-95 md:text-xl lg:text-2xl">
          Conseils d'experts, guides pratiques et actualités de la rénovation en
          Alsace-Lorraine. Profitez de notre expertise pour vos projets !
        </p>
      </header>

      {/* Article mis en avant */}
      {featuredPost && (
        <section className="mb-20">
          <h2 className="mb-8 text-center text-2xl font-bold uppercase tracking-widest">
            📌 Article à la une
          </h2>
          <div className="overflow-hidden rounded-lg bg-gradient-to-r from-primary to-steelBlue text-white shadow-xl">
            <div className="p-8">
              <div className="mb-4 flex flex-wrap items-center space-x-4 text-sm">
                <span className="rounded-full bg-white/20 px-3 py-1">
                  {featuredPost.category}
                </span>
                <div className="flex items-center space-x-2">
                  <FaClock size={14} />
                  <span>{featuredPost.readTime} min de lecture</span>
                </div>
                <div className="flex items-center space-x-2">
                  <FaUser size={14} />
                  <span>{featuredPost.author}</span>
                </div>
              </div>

              <h3 className="mb-4 text-2xl font-bold">{featuredPost.title}</h3>
              <p className="mb-6 text-lg opacity-90">{featuredPost.excerpt}</p>

              <div className="flex items-center justify-between">
                <span className="button-secondary cursor-not-allowed opacity-50">
                  Article bientôt disponible
                </span>

                <div className="text-sm opacity-80">
                  {new Date(featuredPost.date).toLocaleDateString('fr-FR')}
                </div>
              </div>
            </div>
          </div>
        </section>
      )}

      {/* Catégories */}
      <section className="mb-16">
        <h2 className="mb-6 text-xl font-bold uppercase tracking-widest">
          Catégories
        </h2>
        <div className="flex flex-wrap gap-3">
          <span className="rounded-full bg-primary px-4 py-2 text-sm text-white">
            Tous les articles
          </span>
          {categories.map(category => (
            <span
              key={category}
              className="cursor-not-allowed rounded-full bg-lightGray px-4 py-2 text-sm text-darkGray opacity-50"
            >
              {category}
            </span>
          ))}
        </div>
      </section>

      {/* Articles récents */}
      <section className="mt-16">
        <h2 className="mb-8 text-xl font-bold uppercase tracking-widest">
          Articles récents
        </h2>
        <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
          {recentPosts.map(post => (
            <article
              key={post.slug}
              className="overflow-hidden rounded-lg bg-white shadow-md transition-shadow duration-300 hover:shadow-lg"
            >
              <div className="p-6">
                <div className="mb-3 flex items-center justify-between text-xs text-darkGray">
                  <span className="rounded bg-primary/10 px-2 py-1 text-primary">
                    {post.category}
                  </span>
                  <span>{new Date(post.date).toLocaleDateString('fr-FR')}</span>
                </div>

                <h3 className="mb-3 text-lg font-bold text-gray-600">
                  {post.title}
                </h3>

                <p className="mb-4 text-sm leading-relaxed text-darkGray">
                  {post.excerpt}
                </p>

                <div className="flex items-center justify-between text-xs text-darkGray">
                  <div className="flex items-center space-x-4">
                    <div className="flex items-center space-x-1">
                      <FaUser />
                      <span>{post.author}</span>
                    </div>
                    <div className="flex items-center space-x-1">
                      <FaClock />
                      <span>{post.readTime} min</span>
                    </div>
                  </div>
                </div>

                <div className="mt-4 border-t border-lightGray pt-4">
                  <div className="flex flex-wrap gap-1">
                    <FaTags className="mt-1 text-darkGray" size={12} />
                    {post.tags.slice(0, 3).map(tag => (
                      <span
                        key={tag}
                        className="rounded bg-lightGray px-2 py-1 text-xs"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </article>
          ))}
        </div>
      </section>

      {/* CTA Newsletter */}
      <section className="mt-16 rounded-lg bg-lightGray p-8 text-center">
        <h2 className="mb-4 text-2xl font-bold">Restez informé !</h2>
        <p className="mx-auto mb-6 max-w-lg text-darkGray">
          Recevez nos derniers conseils et actualités directement dans votre
          boîte mail.
          <strong>1 email par mois maximum, promis !</strong>
        </p>

        <div className="mx-auto flex max-w-lg flex-col gap-4 sm:flex-row">
          <input
            type="email"
            placeholder="Votre email"
            className="form-input flex-1"
          />
          <button className="whitespace-nowrap rounded-full bg-primary px-6 py-3 font-medium text-white transition-colors hover:bg-primary/90">
            S'abonner
          </button>
        </div>

        <p className="mt-4 text-xs text-darkGray">
          🔒 Pas de spam • Désinscription en 1 clic
        </p>
      </section>
    </div>
  );
}
