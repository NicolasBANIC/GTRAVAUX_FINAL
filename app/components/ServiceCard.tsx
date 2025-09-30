'use client';

import Link from 'next/link';
import { IconType } from 'react-icons';
import { motion } from 'framer-motion';

interface ServiceCardProps {
  title: string;
  description: string;
  href: string;
  Icon: IconType;
}

export default function ServiceCard({
  title,
  description,
  href,
  Icon,
}: ServiceCardProps) {
  return (
    <motion.div
      className="service-card card-hover rounded-2xl bg-white/95 p-6"
      whileHover={{ scale: 1.01 }}
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.4 }}
    >
      <div className="tilt-inner">
        <div className="bg-accent-400/15 text-accent-600 mb-4 inline-flex size-12 items-center justify-center rounded-xl">
          <Icon size={24} />
        </div>
        <h3 className="mb-2 text-xl font-semibold uppercase tracking-widest text-primary">
          {title}
        </h3>
        <p className="mb-4 text-sm text-darkGray/80">{description}</p>
        <Link
          href={href}
          className="button-secondary border-accent-400 inline-block !text-primary"
        >
          En savoir plus
        </Link>
      </div>
    </motion.div>
  );
}
