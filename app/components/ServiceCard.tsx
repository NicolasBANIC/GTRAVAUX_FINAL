"use client";

import Link from 'next/link';
import { IconType } from 'react-icons';
import { motion } from 'framer-motion';

interface ServiceCardProps {
  title: string;
  description: string;
  href: string;
  Icon: IconType;
}

export default function ServiceCard({ title, description, href, Icon }: ServiceCardProps) {
  return (
    <motion.div
      className="service-card p-6 rounded-2xl card-hover bg-white/95"
      whileHover={{ scale: 1.01 }}
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.4 }}
    >
      <div className="tilt-inner">
        <div className="mb-4 inline-flex items-center justify-center w-12 h-12 rounded-xl bg-accent-400/15 text-accent-600">
          <Icon size={24} />
        </div>
        <h3 className="text-xl font-semibold mb-2 text-primary uppercase tracking-widest">{title}</h3>
        <p className="mb-4 text-sm text-darkGray/80">{description}</p>
        <Link href={href} className="inline-block button-secondary !text-primary border-accent-400">
          En savoir plus
        </Link>
      </div>
    </motion.div>
  );
}
