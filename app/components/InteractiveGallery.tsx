'use client';

import { useState, useEffect } from 'react';
import {
  FaFilter,
  FaTimes,
  FaExpand,
  FaMapMarkerAlt,
  FaCalendarAlt,
} from 'react-icons/fa';
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

export default function InteractiveGallery({
  items = [],
}: InteractiveGalleryProps) {
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
      description:
        "Rénovation complète d'un F3 de 75m² dans le centre historique de Strasbourg.",
      beforeImage: '/images/placeholder/avant-strasbourg-1.jpg',
      afterImage: '/images/placeholder/apres-strasbourg-1.jpg',
      tags: ['appartement', 'centre-ville', 'moderne'],
      surface: 75,
      duration: '6 semaines',
      budget: '45 000€',
    },
    {
      id: '2',
      title: 'Maison Alsacienne Colmar',
      category: 'Patrimoine',
      location: 'Colmar',
      date: '2024-11',
      description:
        "Restauration d'une maison à colombages avec respect du patrimoine alsacien.",
      beforeImage: '/images/placeholder/avant-colmar-1.jpg',
      afterImage: '/images/placeholder/apres-colmar-1.jpg',
      tags: ['maison', 'patrimoine', 'colombages'],
      surface: 120,
      duration: '8 semaines',
      budget: '65 000€',
    },
    {
      id: '3',
      title: 'Salle de Bain Moderne Mulhouse',
      category: 'Salle de bain',
      location: 'Mulhouse',
      date: '2024-10',
      description:
        "Transformation complète d'une salle de bain avec douche italienne.",
      beforeImage: '/images/placeholder/avant-sdb-1.jpg',
      afterImage: '/images/placeholder/apres-sdb-1.jpg',
      tags: ['salle-bain', 'moderne', 'douche-italienne'],
      surface: 8,
      duration: '2 semaines',
      budget: '12 000€',
    },
    {
      id: '4',
      title: 'Cuisine Ouverte Nancy',
      category: 'Cuisine',
      location: 'Nancy',
      date: '2024-09',
      description:
        "Création d'une cuisine ouverte avec îlot central et verrière.",
      beforeImage: '/images/placeholder/avant-cuisine-1.jpg',
      afterImage: '/images/placeholder/apres-cuisine-1.jpg',
      tags: ['cuisine', 'ouverte', 'moderne', 'ilot'],
      surface: 25,
      duration: '4 semaines',
      budget: '28 000€',
    },
    {
      id: '5',
      title: 'Rénovation après Sinistre Lyon',
      category: 'Après sinistre',
      location: 'Lyon',
      date: '2024-08',
      description:
        'Rénovation complète après dégât des eaux avec accompagnement assurance.',
      beforeImage: '/images/placeholder/avant-sinistre-1.jpg',
      afterImage: '/images/placeholder/apres-sinistre-1.jpg',
      tags: ['sinistre', 'dégâts-eaux', 'assurance'],
      surface: 90,
      duration: '5 semaines',
      budget: '52 000€',
    },
    {
      id: '6',
      title: 'Loft Industriel Metz',
      category: 'Aménagement',
      location: 'Metz',
      date: '2024-07',
      description:
        "Aménagement d'un loft industriel avec préservation de l'esprit factory.",
      beforeImage: '/images/placeholder/avant-loft-1.jpg',
      afterImage: '/images/placeholder/apres-loft-1.jpg',
      tags: ['loft', 'industriel', 'moderne'],
      surface: 110,
      duration: '7 semaines',
      budget: '48 000€',
    },
  ];

  const galleryItems = items.length > 0 ? items : defaultItems;
  const categories = [
    'all',
    ...new Set(galleryItems.map(item => item.category)),
  ];

  useEffect(() => {
    if (selectedCategory === 'all') {
      setFilteredItems(galleryItems);
    } else {
      setFilteredItems(
        galleryItems.filter(item => item.category === selectedCategory)
      );
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
        <div className="mb-4 flex items-center space-x-4">
          <FaFilter className="text-primary" />
          <span className="font-semibold">Filtrer par catégorie :</span>
        </div>
        <div className="flex flex-wrap gap-3">
          {categories.map(category => (
            <button
              key={category}
              onClick={() => setSelectedCategory(category)}
              className={`rounded-full px-4 py-2 text-sm font-medium transition-all duration-300 ${
                selectedCategory === category
                  ? 'bg-brand-orange-600 text-white shadow-lg'
                  : 'bg-lightGray text-darkGray hover:bg-brand-orange-50 hover:text-brand-orange-700'
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
        <div className="rounded-lg bg-lightGray p-1">
          <button
            onClick={() => setViewMode('after')}
            className={`rounded px-3 py-1 text-xs transition-colors ${
              viewMode === 'after'
                ? 'bg-brand-orange-600 text-white'
                : 'text-darkGray hover:text-brand-orange-700'
            }`}
          >
            Résultat final
          </button>
          <button
            onClick={() => setViewMode('before-after')}
            className={`rounded px-3 py-1 text-xs transition-colors ${
              viewMode === 'before-after'
                ? 'bg-brand-orange-600 text-white'
                : 'text-darkGray hover:text-brand-orange-700'
            }`}
          >
            Avant / Après
          </button>
        </div>
      </div>

      {/* Galerie */}
      <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
        <AnimatePresence>
          {filteredItems.map(item => (
            <motion.div
              key={item.id}
              layout
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.9 }}
              transition={{ duration: 0.3 }}
              className="group cursor-pointer overflow-hidden rounded-lg bg-white shadow-md transition-shadow duration-300 hover:shadow-xl"
              onClick={() => openModal(item)}
            >
              <div className="relative h-48 overflow-hidden">
                {viewMode === 'before-after' ? (
                  <div className="flex h-full">
                    <div className="relative w-1/2">
                      <img
                        src={item.beforeImage}
                        alt={`Avant - ${item.title}`}
                        className="size-full object-cover"
                      />
                      <div className="absolute left-2 top-2 rounded bg-red-600 px-2 py-1 text-xs text-white">
                        Avant
                      </div>
                    </div>
                    <div className="relative w-1/2">
                      <img
                        src={item.afterImage}
                        alt={`Après - ${item.title}`}
                        className="size-full object-cover"
                      />
                      <div className="absolute right-2 top-2 rounded bg-brand-orange-600 px-2 py-1 text-xs text-white">
                        Après
                      </div>
                    </div>
                  </div>
                ) : (
                  <img
                    src={item.afterImage}
                    alt={item.title}
                    className="size-full object-cover transition-transform duration-300 group-hover:scale-105"
                  />
                )}

                <div className="absolute inset-0 flex items-center justify-center bg-black/0 transition-colors duration-300 group-hover:bg-black/20">
                  <FaExpand
                    className="text-white opacity-0 transition-opacity duration-300 group-hover:opacity-100"
                    size={24}
                  />
                </div>
              </div>

              <div className="p-4">
                <div className="mb-2 flex items-start justify-between">
                  <h3 className="text-lg font-bold transition-colors duration-300 group-hover:text-primary">
                    {item.title}
                  </h3>
                  <span className="rounded bg-primary/10 px-2 py-1 text-xs text-primary">
                    {item.category}
                  </span>
                </div>

                <p className="mb-3 line-clamp-2 text-sm text-darkGray">
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
                  <div className="mt-2 text-xs font-medium text-primary">
                    {item.surface}m² • {item.duration}
                  </div>
                )}
              </div>
            </motion.div>
          ))}
        </AnimatePresence>
      </div>

      {filteredItems.length === 0 && (
        <div className="py-12 text-center">
          <p className="mb-4 text-darkGray">
            Aucun projet trouvé pour cette catégorie.
          </p>
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
            className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 p-4"
            onClick={closeModal}
          >
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              className="max-h-[90vh] w-full max-w-4xl overflow-y-auto rounded-lg bg-white"
              onClick={e => e.stopPropagation()}
            >
              {/* Header */}
              <div className="border-b border-lightGray p-6">
                <div className="flex items-center justify-between">
                  <div>
                    <h2 className="text-2xl font-bold">{selectedItem.title}</h2>
                    <div className="mt-2 flex items-center space-x-4 text-sm text-darkGray">
                      <span className="rounded bg-primary/10 px-3 py-1 text-primary">
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
                    className="text-darkGray transition-colors hover:text-primary"
                  >
                    <FaTimes size={24} />
                  </button>
                </div>
              </div>

              {/* Contenu */}
              <div className="p-6">
                {/* Images avant/après */}
                <div className="mb-6 grid grid-cols-1 gap-6 md:grid-cols-2">
                  <div>
                    <h4 className="mb-2 font-semibold text-red-600">Avant</h4>
                    <img
                      src={selectedItem.beforeImage}
                      alt={`Avant - ${selectedItem.title}`}
                      className="h-64 w-full rounded-lg object-cover shadow"
                    />
                  </div>
                  <div>
                    <h4 className="mb-2 font-semibold text-green">Après</h4>
                    <img
                      src={selectedItem.afterImage}
                      alt={`Après - ${selectedItem.title}`}
                      className="h-64 w-full rounded-lg object-cover shadow"
                    />
                  </div>
                </div>

                {/* Détails */}
                <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
                  <div>
                    <h4 className="mb-3 font-semibold">
                      Description du projet
                    </h4>
                    <p className="leading-relaxed text-darkGray">
                      {selectedItem.description}
                    </p>

                    <div className="mt-4">
                      <h5 className="mb-2 font-medium">Tags</h5>
                      <div className="flex flex-wrap gap-2">
                        {selectedItem.tags.map(tag => (
                          <span
                            key={tag}
                            className="rounded bg-lightGray px-2 py-1 text-xs"
                          >
                            #{tag}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>

                  <div className="space-y-4">
                    <h4 className="font-semibold">Informations techniques</h4>

                    <div className="space-y-2 rounded-lg bg-lightGray p-4">
                      {selectedItem.surface && (
                        <div className="flex justify-between">
                          <span className="text-darkGray">Surface :</span>
                          <span className="font-medium">
                            {selectedItem.surface}m²
                          </span>
                        </div>
                      )}
                      {selectedItem.duration && (
                        <div className="flex justify-between">
                          <span className="text-darkGray">Durée :</span>
                          <span className="font-medium">
                            {selectedItem.duration}
                          </span>
                        </div>
                      )}
                      {selectedItem.budget && (
                        <div className="flex justify-between">
                          <span className="text-darkGray">Budget :</span>
                          <span className="font-medium text-brand-orange-600">
                            {selectedItem.budget}
                          </span>
                        </div>
                      )}
                    </div>

                    <div className="pt-4">
                      <button
                        onClick={() => {
                          closeModal();
                          window.location.href = '/contact';
                        }}
                        className="btn btn-primary w-full"
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
