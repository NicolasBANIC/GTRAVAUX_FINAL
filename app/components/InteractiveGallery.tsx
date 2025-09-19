'use client';

import { useState, useEffect } from 'react';
import { FaFilter, FaTimes, FaExpand, FaMapMarkerAlt, FaCalendarAlt } from 'react-icons/fa';
import { motion, AnimatePresence } from 'framer-motion';

interface GalleryItem {
  id: string;
  title: string;
  category: string;
  location: string;
  date: string;
  description: string;
  beforeImage: string;
  afterImage: string;
  tags: string[];
  surface?: number;
  duration?: string;
  budget?: string;
}

interface InteractiveGalleryProps {
  items?: GalleryItem[];
}

export default function InteractiveGallery({ items = [] }: InteractiveGalleryProps) {
  const [selectedCategory, setSelectedCategory] = useState<string>('all');
  const [selectedItem, setSelectedItem] = useState<GalleryItem | null>(null);
  const [filteredItems, setFilteredItems] = useState<GalleryItem[]>([]);
  const [viewMode, setViewMode] = useState<'before-after' | 'after'>('after');

  // Données exemple si pas d'items fournis
  const defaultItems: GalleryItem[] = [
    {
      id: '1',
      title: 'Appartement Strasbourg Centre',
      category: 'Rénovation complète',
      location: 'Strasbourg',
      date: '2024-12',
      description: 'Rénovation complète d\'un F3 de 75m² dans le centre historique de Strasbourg.',
      beforeImage: '/images/placeholder/avant-strasbourg-1.jpg',
      afterImage: '/images/placeholder/apres-strasbourg-1.jpg',
      tags: ['appartement', 'centre-ville', 'moderne'],
      surface: 75,
      duration: '6 semaines',
      budget: '45 000€'
    },
    {
      id: '2',
      title: 'Maison Alsacienne Colmar',
      category: 'Patrimoine',
      location: 'Colmar',
      date: '2024-11',
      description: 'Restauration d\'une maison à colombages avec respect du patrimoine alsacien.',
      beforeImage: '/images/placeholder/avant-colmar-1.jpg',
      afterImage: '/images/placeholder/apres-colmar-1.jpg',
      tags: ['maison', 'patrimoine', 'colombages'],
      surface: 120,
      duration: '8 semaines',
      budget: '65 000€'
    },
    {
      id: '3',
      title: 'Salle de Bain Moderne Mulhouse',
      category: 'Salle de bain',
      location: 'Mulhouse',
      date: '2024-10',
      description: 'Transformation complète d\'une salle de bain avec douche italienne.',
      beforeImage: '/images/placeholder/avant-sdb-1.jpg',
      afterImage: '/images/placeholder/apres-sdb-1.jpg',
      tags: ['salle-bain', 'moderne', 'douche-italienne'],
      surface: 8,
      duration: '2 semaines',
      budget: '12 000€'
    },
    {
      id: '4',
      title: 'Cuisine Ouverte Nancy',
      category: 'Cuisine',
      location: 'Nancy',
      date: '2024-09',
      description: 'Création d\'une cuisine ouverte avec îlot central et verrière.',
      beforeImage: '/images/placeholder/avant-cuisine-1.jpg',
      afterImage: '/images/placeholder/apres-cuisine-1.jpg',
      tags: ['cuisine', 'ouverte', 'moderne', 'ilot'],
      surface: 25,
      duration: '4 semaines',
      budget: '28 000€'
    },
    {
      id: '5',
      title: 'Rénovation après Sinistre Lyon',
      category: 'Après sinistre',
      location: 'Lyon',
      date: '2024-08',
      description: 'Rénovation complète après dégât des eaux avec accompagnement assurance.',
      beforeImage: '/images/placeholder/avant-sinistre-1.jpg',
      afterImage: '/images/placeholder/apres-sinistre-1.jpg',
      tags: ['sinistre', 'dégâts-eaux', 'assurance'],
      surface: 90,
      duration: '5 semaines',
      budget: '52 000€'
    },
    {
      id: '6',
      title: 'Loft Industriel Metz',
      category: 'Aménagement',
      location: 'Metz',
      date: '2024-07',
      description: 'Aménagement d\'un loft industriel avec préservation de l\'esprit factory.',
      beforeImage: '/images/placeholder/avant-loft-1.jpg',
      afterImage: '/images/placeholder/apres-loft-1.jpg',
      tags: ['loft', 'industriel', 'moderne'],
      surface: 110,
      duration: '7 semaines',
      budget: '48 000€'
    }
  ];

  const galleryItems = items.length > 0 ? items : defaultItems;
  const categories = ['all', ...new Set(galleryItems.map(item => item.category))];

  useEffect(() => {
    if (selectedCategory === 'all') {
      setFilteredItems(galleryItems);
    } else {
      setFilteredItems(galleryItems.filter(item => item.category === selectedCategory));
    }
  }, [selectedCategory, galleryItems]);

  const openModal = (item: GalleryItem) => {
    setSelectedItem(item);
    document.body.style.overflow = 'hidden';
  };

  const closeModal = () => {
    setSelectedItem(null);
    document.body.style.overflow = 'unset';
  };

  return (
    <div>
      {/* Filtres */}
      <div className="mb-8">
        <div className="flex items-center space-x-4 mb-4">
          <FaFilter className="text-primary" />
          <span className="font-semibold">Filtrer par catégorie :</span>
        </div>
        <div className="flex flex-wrap gap-3">
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setSelectedCategory(category)}
              className={`px-4 py-2 rounded-full text-sm font-medium transition-all duration-300 ${
                selectedCategory === category
                  ? 'bg-primary text-white shadow-lg'
                  : 'bg-lightGray text-darkGray hover:bg-primary/10 hover:text-primary'
              }`}
            >
              {category === 'all' ? 'Tous les projets' : category}
            </button>
          ))}
        </div>
      </div>

      {/* Mode d'affichage */}
      <div className="mb-6 flex items-center space-x-4">
        <span className="text-sm font-medium">Mode d'affichage :</span>
        <div className="bg-lightGray p-1 rounded-lg">
          <button
            onClick={() => setViewMode('after')}
            className={`px-3 py-1 text-xs rounded transition-colors ${
              viewMode === 'after' 
                ? 'bg-primary text-white' 
                : 'text-darkGray hover:text-primary'
            }`}
          >
            Résultat final
          </button>
          <button
            onClick={() => setViewMode('before-after')}
            className={`px-3 py-1 text-xs rounded transition-colors ${
              viewMode === 'before-after' 
                ? 'bg-primary text-white' 
                : 'text-darkGray hover:text-primary'
            }`}
          >
            Avant / Après
          </button>
        </div>
      </div>

      {/* Galerie */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        <AnimatePresence>
          {filteredItems.map((item) => (
            <motion.div
              key={item.id}
              layout
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.9 }}
              transition={{ duration: 0.3 }}
              className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-xl transition-shadow duration-300 group cursor-pointer"
              onClick={() => openModal(item)}
            >
              <div className="relative h-48 overflow-hidden">
                {viewMode === 'before-after' ? (
                  <div className="flex h-full">
                    <div className="w-1/2 relative">
                      <img 
                        src={item.beforeImage} 
                        alt={`Avant - ${item.title}`}
                        className="w-full h-full object-cover"
                      />
                      <div className="absolute top-2 left-2 bg-red-600 text-white px-2 py-1 text-xs rounded">
                        Avant
                      </div>
                    </div>
                    <div className="w-1/2 relative">
                      <img 
                        src={item.afterImage} 
                        alt={`Après - ${item.title}`}
                        className="w-full h-full object-cover"
                      />
                      <div className="absolute top-2 right-2 bg-green text-white px-2 py-1 text-xs rounded">
                        Après
                      </div>
                    </div>
                  </div>
                ) : (
                  <img 
                    src={item.afterImage} 
                    alt={item.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                )}
                
                <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-colors duration-300 flex items-center justify-center">
                  <FaExpand className="text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300" size={24} />
                </div>
              </div>
              
              <div className="p-4">
                <div className="flex items-start justify-between mb-2">
                  <h3 className="font-bold text-lg group-hover:text-primary transition-colors duration-300">
                    {item.title}
                  </h3>
                  <span className="text-xs bg-primary/10 text-primary px-2 py-1 rounded">
                    {item.category}
                  </span>
                </div>
                
                <p className="text-sm text-darkGray mb-3 line-clamp-2">
                  {item.description}
                </p>
                
                <div className="flex items-center justify-between text-xs text-darkGray">
                  <div className="flex items-center space-x-1">
                    <FaMapMarkerAlt />
                    <span>{item.location}</span>
                  </div>
                  <div className="flex items-center space-x-1">
                    <FaCalendarAlt />
                    <span>{item.date}</span>
                  </div>
                </div>
                
                {item.surface && (
                  <div className="mt-2 text-xs text-primary font-medium">
                    {item.surface}m² • {item.duration}
                  </div>
                )}
              </div>
            </motion.div>
          ))}
        </AnimatePresence>
      </div>

      {filteredItems.length === 0 && (
        <div className="text-center py-12">
          <p className="text-darkGray mb-4">Aucun projet trouvé pour cette catégorie.</p>
          <button
            onClick={() => setSelectedCategory('all')}
            className="text-primary hover:underline"
          >
            Voir tous les projets
          </button>
        </div>
      )}

      {/* Modal */}
      <AnimatePresence>
        {selectedItem && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80"
            onClick={closeModal}
          >
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              className="bg-white rounded-lg max-w-4xl w-full max-h-[90vh] overflow-y-auto"
              onClick={(e) => e.stopPropagation()}
            >
              {/* Header */}
              <div className="p-6 border-b border-lightGray">
                <div className="flex items-center justify-between">
                  <div>
                    <h2 className="text-2xl font-bold">{selectedItem.title}</h2>
                    <div className="flex items-center space-x-4 mt-2 text-sm text-darkGray">
                      <span className="bg-primary/10 text-primary px-3 py-1 rounded">
                        {selectedItem.category}
                      </span>
                      <div className="flex items-center space-x-1">
                        <FaMapMarkerAlt />
                        <span>{selectedItem.location}</span>
                      </div>
                      <div className="flex items-center space-x-1">
                        <FaCalendarAlt />
                        <span>{selectedItem.date}</span>
                      </div>
                    </div>
                  </div>
                  <button
                    onClick={closeModal}
                    className="text-darkGray hover:text-primary transition-colors"
                  >
                    <FaTimes size={24} />
                  </button>
                </div>
              </div>

              {/* Contenu */}
              <div className="p-6">
                {/* Images avant/après */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                  <div>
                    <h4 className="font-semibold mb-2 text-red-600">Avant</h4>
                    <img 
                      src={selectedItem.beforeImage} 
                      alt={`Avant - ${selectedItem.title}`}
                      className="w-full h-64 object-cover rounded-lg shadow"
                    />
                  </div>
                  <div>
                    <h4 className="font-semibold mb-2 text-green">Après</h4>
                    <img 
                      src={selectedItem.afterImage} 
                      alt={`Après - ${selectedItem.title}`}
                      className="w-full h-64 object-cover rounded-lg shadow"
                    />
                  </div>
                </div>

                {/* Détails */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <h4 className="font-semibold mb-3">Description du projet</h4>
                    <p className="text-darkGray leading-relaxed">
                      {selectedItem.description}
                    </p>
                    
                    <div className="mt-4">
                      <h5 className="font-medium mb-2">Tags</h5>
                      <div className="flex flex-wrap gap-2">
                        {selectedItem.tags.map((tag) => (
                          <span 
                            key={tag}
                            className="text-xs bg-lightGray px-2 py-1 rounded"
                          >
                            #{tag}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>

                  <div className="space-y-4">
                    <h4 className="font-semibold">Informations techniques</h4>
                    
                    <div className="bg-lightGray p-4 rounded-lg space-y-2">
                      {selectedItem.surface && (
                        <div className="flex justify-between">
                          <span className="text-darkGray">Surface :</span>
                          <span className="font-medium">{selectedItem.surface}m²</span>
                        </div>
                      )}
                      {selectedItem.duration && (
                        <div className="flex justify-between">
                          <span className="text-darkGray">Durée :</span>
                          <span className="font-medium">{selectedItem.duration}</span>
                        </div>
                      )}
                      {selectedItem.budget && (
                        <div className="flex justify-between">
                          <span className="text-darkGray">Budget :</span>
                          <span className="font-medium text-primary">{selectedItem.budget}</span>
                        </div>
                      )}
                    </div>

                    <div className="pt-4">
                      <button
                        onClick={() => {
                          closeModal();
                          window.location.href = '/contact';
                        }}
                        className="w-full bg-primary text-white py-3 rounded-lg font-medium hover:bg-primary/90 transition-colors"
                      >
                        Un projet similaire ?
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}