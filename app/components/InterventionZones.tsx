'use client';

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
      description:
        'Nos équipes sont basées à Strasbourg et interviennent dans tout le Bas‑Rhin.',
    },
    {
      city: 'Colmar',
      description:
        'Des chantiers réguliers à Colmar et ses environs pour vos projets de rénovation.',
    },
    {
      city: 'Mulhouse',
      description:
        'Nous rénovons maisons et appartements à Mulhouse avec savoir‑faire.',
    },
    {
      city: 'Lyon',
      description:
        'Présence dans la région lyonnaise pour vos projets de transformation intérieure.',
    },
    {
      city: 'Nancy',
      description:
        'Interventions rapides à Nancy pour la rénovation et l’après‑sinistre.',
    },
    {
      city: 'Metz',
      description: 'Nos artisans se déplacent également à Metz et en Lorraine.',
    },
  ];

  return (
    <section className="bg-white py-16" id="zones">
      <div className="container mx-auto px-4">
        <h2 className="mb-8 text-center text-3xl font-bold">
          Nos zones d’intervention
        </h2>
        <p className="mx-auto mb-12 max-w-4xl text-center text-darkGray">
          Basés à Strasbourg, nous intervenons dans toute la France. Voici
          quelques villes où nous intervenons régulièrement.
        </p>
        <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {zones.map(zone => (
            <motion.div
              key={zone.city}
              className="flex items-start space-x-4 rounded-lg bg-lightGray p-6 shadow transition-shadow hover:shadow-lg"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.4 }}
            >
              <FaMapMarkerAlt className="mt-1 text-primary" size={24} />
              <div>
                <h3 className="mb-1 text-lg font-semibold">{zone.city}</h3>
                <p className="text-sm text-darkGray">{zone.description}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
