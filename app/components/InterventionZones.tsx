"use client";

import { motion } from 'framer-motion';
import { FaMapMarkerAlt } from 'react-icons/fa';

/**
 * Section mettant en avant les principales zones d'intervention de G.TRAVAUX.
 * Inspiré du site House‑Rénovation qui met en avant sa présence régionale【882952368121044†L279-L330】,
 * cette section rassure l'utilisateur sur la disponibilité de l'entreprise dans plusieurs villes.
 */
export default function InterventionZones() {
  const zones = [
    {
      city: 'Strasbourg',
      description: 'Nos équipes sont basées à Strasbourg et interviennent dans tout le Bas‑Rhin.'
    },
    {
      city: 'Colmar',
      description: 'Des chantiers réguliers à Colmar et ses environs pour vos projets de rénovation.'
    },
    {
      city: 'Mulhouse',
      description: 'Nous rénovons maisons et appartements à Mulhouse avec savoir‑faire.'
    },
    {
      city: 'Lyon',
      description: 'Présence dans la région lyonnaise pour vos projets de transformation intérieure.'
    },
    {
      city: 'Nancy',
      description: 'Interventions rapides à Nancy pour la rénovation et l’après‑sinistre.'
    },
    {
      city: 'Metz',
      description: 'Nos artisans se déplacent également à Metz et en Lorraine.'
    },
  ];

  return (
    <section className="bg-white py-16" id="zones">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-8">Nos zones d’intervention</h2>
        <p className="text-center text-darkGray mb-12 max-w-3xl mx-auto">
          Basés à Strasbourg, nous intervenons dans toute la France. Voici quelques villes où nous intervenons régulièrement.
        </p>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {zones.map((zone) => (
            <motion.div
              key={zone.city}
              className="flex items-start space-x-4 p-6 bg-lightGray rounded-lg shadow hover:shadow-lg transition-shadow"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.4 }}
            >
              <FaMapMarkerAlt className="text-primary mt-1" size={24} />
              <div>
                <h3 className="font-semibold text-lg mb-1">{zone.city}</h3>
                <p className="text-sm text-darkGray">{zone.description}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
