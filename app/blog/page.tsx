import Link from 'next/link';
import { FaClock, FaUser, FaTags } from 'react-icons/fa';

export const metadata = {
  title: 'Blog Rénovation | G.TRAVAUX - Conseils & Actualités',
  description: 'Découvrez nos conseils de rénovation, guides techniques et actualités du bâtiment. Expertise G.TRAVAUX en Alsace.',
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
      excerpt: 'Découvrez toutes les étapes pour rénover efficacement après un sinistre. De la déclaration assurance aux finitions.',
      content: '',
      author: 'Équipe G.TRAVAUX',
      date: '2025-01-15',
      category: 'Sinistres',
      tags: ['dégâts des eaux', 'assurance', 'rénovation', 'urgence'],
      featured: true,
      readTime: 8
    },
    {
      slug: 'isolation-thermique-maison-alsacienne-guide',
      title: 'Isoler sa maison alsacienne : Solutions adaptées au climat continental',
      excerpt: 'Les spécificités de l\'isolation en Alsace-Lorraine. Matériaux, techniques et aides financières disponibles.',
      content: '',
      author: 'Thomas Weiss, Technicien',
      date: '2025-01-10',
      category: 'Isolation',
      tags: ['isolation', 'alsace', 'économies énergie', 'aides'],
      readTime: 6
    },
    {
      slug: 'renovation-appartement-strasbourg-permis-requis',
      title: 'Rénover un appartement à Strasbourg : Quels permis requis ?',
      excerpt: 'Guide pratique des démarches administratives pour votre rénovation dans l\'Eurométropole de Strasbourg.',
      content: '',
      author: 'Marie Dupont, Chef de projet',
      date: '2025-01-08',
      category: 'Réglementation',
      tags: ['strasbourg', 'permis', 'réglementation', 'démarches'],
      readTime: 5
    },
    {
      slug: 'cout-renovation-salle-bain-2025-alsace',
      title: 'Coût d\'une rénovation de salle de bain en 2025 en Alsace',
      excerpt: 'Analyse détaillée des prix, matériaux et main-d\'œuvre pour rénover votre salle de bain en Alsace.',
      content: '',
      author: 'Jean Weber, Estimateur',
      date: '2025-01-05',
      category: 'Prix & Devis',
      tags: ['prix', 'salle de bain', 'devis', '2025'],
      readTime: 7
    },
    {
      slug: 'tendances-renovation-2025-alsace-lorraine',
      title: 'Tendances rénovation 2025 : Ce qui cartonne en Alsace-Lorraine',
      excerpt: 'Découvrez les tendances déco et techniques qui dominent les rénovations cette année en région.',
      content: '',
      author: 'Sophie Klein, Architecte d\'intérieur',
      date: '2025-01-02',
      category: 'Tendances',
      tags: ['tendances', '2025', 'déco', 'style'],
      readTime: 4
    },
    {
      slug: 'maprimerenov-2025-nouveautes-alsace',
      title: 'MaPrimeRénov\' 2025 : Les nouveautés pour l\'Alsace-Lorraine',
      excerpt: 'Toutes les évolutions des aides à la rénovation énergétique pour cette année. Montants et conditions.',
      content: '',
      author: 'Pierre Muller, Conseiller énergie',
      date: '2024-12-28',
      category: 'Aides & Subventions',
      tags: ['maprimerenov', 'aides', '2025', 'énergie'],
      readTime: 6
    }
  ];

  const categories = [...new Set(blogPosts.map(post => post.category))];
  const featuredPost = blogPosts.find(post => post.featured);
  const recentPosts = blogPosts.filter(post => !post.featured).slice(0, 5);

  return (
    <div className="container mx-auto px-4 py-20">
      <header className="text-center mb-16">
        <h1 className="text-3xl md:text-5xl lg:text-6xl font-semibold mb-6 leading-tight tracking-[0.12em] uppercase">Blog G.TRAVAUX</h1>
        <p className="text-lg md:text-xl lg:text-2xl leading-relaxed opacity-95 text-darkGray max-w-2xl mx-auto">
          Conseils d'experts, guides pratiques et actualités de la rénovation en Alsace-Lorraine. 
          Profitez de notre expertise pour vos projets !
        </p>
      </header>

      {/* Article mis en avant */}
      {featuredPost && (
        <section className="mb-20">
          <h2 className="text-2xl font-bold mb-8 text-center uppercase tracking-widest">📌 Article à la une</h2>
          <div className="bg-gradient-to-r from-primary to-steelBlue text-white rounded-lg overflow-hidden shadow-xl">
            <div className="p-8">
              <div className="flex flex-wrap items-center space-x-4 text-sm mb-4">
                <span className="bg-white/20 px-3 py-1 rounded-full">{featuredPost.category}</span>
                <div className="flex items-center space-x-2">
                  <FaClock size={14} />
                  <span>{featuredPost.readTime} min de lecture</span>
                </div>
                <div className="flex items-center space-x-2">
                  <FaUser size={14} />
                  <span>{featuredPost.author}</span>
                </div>
              </div>
              
              <h3 className="text-2xl font-bold mb-4">{featuredPost.title}</h3>
              <p className="text-lg mb-6 opacity-90">{featuredPost.excerpt}</p>
              
              <div className="flex items-center justify-between">
                <Link 
                  href={`/blog/${featuredPost.slug}`}
                  className="button-secondary"
                >
                  Lire l'article complet
                </Link>
                
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
        <h2 className="text-xl font-bold mb-6 uppercase tracking-widest">Catégories</h2>
        <div className="flex flex-wrap gap-3">
          <Link 
            href="/blog"
            className="bg-primary text-white px-4 py-2 rounded-full text-sm hover:bg-primary/90 transition-colors"
          >
            Tous les articles
          </Link>
          {categories.map((category) => (
            <Link 
              key={category}
              href={`/blog/category/${category.toLowerCase().replace(/\s+/g, '-')}`}
              className="bg-lightGray text-darkGray px-4 py-2 rounded-full text-sm hover:bg-primary hover:text-white transition-colors"
            >
              {category}
            </Link>
          ))}
        </div>
      </section>

      {/* Articles récents */}
      <section className="mt-16">
        <h2 className="text-xl font-bold mb-8 uppercase tracking-widest">Articles récents</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {recentPosts.map((post) => (
            <article key={post.slug} className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow duration-300">
              <div className="p-6">
                <div className="flex items-center justify-between text-xs text-darkGray mb-3">
                  <span className="bg-primary/10 text-primary px-2 py-1 rounded">
                    {post.category}
                  </span>
                  <span>{new Date(post.date).toLocaleDateString('fr-FR')}</span>
                </div>
                
                <h3 className="font-bold text-lg mb-3 hover:text-primary transition-colors">
                  <Link href={`/blog/${post.slug}`}>
                    {post.title}
                  </Link>
                </h3>
                
                <p className="text-sm text-darkGray mb-4 leading-relaxed">
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
                
                <div className="mt-4 pt-4 border-t border-lightGray">
                  <div className="flex flex-wrap gap-1">
                    <FaTags className="text-darkGray mt-1" size={12} />
                    {post.tags.slice(0, 3).map((tag) => (
                      <span key={tag} className="text-xs bg-lightGray px-2 py-1 rounded">
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
      <section className="bg-lightGray rounded-lg p-8 mt-16 text-center">
        <h2 className="text-2xl font-bold mb-4">Restez informé !</h2>
        <p className="text-darkGray mb-6 max-w-xl mx-auto">
          Recevez nos derniers conseils et actualités directement dans votre boîte mail. 
          <strong>1 email par mois maximum, promis !</strong>
        </p>
        
        <div className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
          <input
            type="email"
            placeholder="Votre email"
            className="form-input flex-1"
          />
          <button className="bg-primary text-white px-6 py-3 rounded-full font-medium hover:bg-primary/90 transition-colors whitespace-nowrap">
            S'abonner
          </button>
        </div>
        
        <p className="text-xs text-darkGray mt-4">
          🔒 Pas de spam • Désinscription en 1 clic
        </p>
      </section>
    </div>
  );
}