'use client';

import { motion, useReducedMotion } from 'framer-motion';
import { FaCheckCircle, FaShieldAlt, FaClock, FaTools, FaCamera, FaMapMarkerAlt } from 'react-icons/fa';

interface TrustBarProps {
  className?: string;
  variant?: 'compact' | 'full';
}

export default function TrustBar({
  className = '',
  variant = 'compact',
}: TrustBarProps) {
  const reduce = useReducedMotion();

  const trustItems = [
    {
      icon: FaCheckCircle,
      text: 'Devis gratuit et détaillé',
    },
    {
      icon: FaShieldAlt,
      text: 'Interlocuteur unique, suivi de chantier',
    },
    {
      icon: FaClock,
      text: 'Respect des délais annoncés',
    },
    {
      icon: FaTools,
      text: 'Matériaux et finitions de qualité pro',
    },
    {
      icon: FaCamera,
      text: 'Photos avant / après sur demande',
    },
    {
      icon: FaMapMarkerAlt,
      text: 'Intervention en Alsace et alentours',
    },
  ];

  if (variant === 'compact') {
    return (
      <motion.div
        className={`inline-flex items-center gap-3 rounded-full border border-brand-orange-600/20 bg-brand-bone px-4 py-2 text-brand-graphite-900 ${className}`}
        initial={reduce ? false : { opacity: 0, y: 10 }}
        whileInView={reduce ? {} : { opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.6 }}
        transition={{ duration: 0.4 }}
        aria-label="G.TRAVAUX — mentions de confiance"
      >
        <span className="inline-flex size-6 items-center justify-center rounded-full bg-brand-orange-600 text-xs font-bold text-white">
          ✓
        </span>
        <span className="font-semibold">Devis gratuit • Suivi personnalisé • Qualité garantie</span>
      </motion.div>
    );
  }

  return (
    <motion.div
      className={`rounded-brand bg-white p-6 shadow-brand ${className}`}
      initial={reduce ? false : { opacity: 0, y: 20 }}
      whileInView={reduce ? {} : { opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.3 }}
      transition={{ duration: 0.5 }}
      aria-label="G.TRAVAUX — mentions de confiance"
    >
      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {trustItems.map((item, index) => {
          const Icon = item.icon;
          return (
            <motion.div
              key={item.text}
              className="flex items-start gap-3"
              initial={reduce ? false : { opacity: 0, x: -10 }}
              whileInView={reduce ? {} : { opacity: 1, x: 0 }}
              viewport={{ once: true, amount: 0.5 }}
              transition={{ duration: 0.3, delay: index * 0.1 }}
            >
              <Icon className="mt-1 size-5 flex-shrink-0 text-brand-orange-600" />
              <span className="text-sm text-brand-graphite-700">{item.text}</span>
            </motion.div>
          );
        })}
      </div>
    </motion.div>
  );
}