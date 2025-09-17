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
      className="tilt-card bg-lightGray p-6 rounded-lg shadow hover:shadow-xl transition-shadow duration-300"
      whileHover={{ scale: 1.02 }}
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.4 }}
    >
      <div className="tilt-inner">
        <div className="text-primary mb-4">
          {/* Render the Icon component directly */}
          <Icon size={36} />
        </div>
        <h3 className="text-xl font-semibold mb-2">{title}</h3>
        <p className="mb-4 text-sm text-darkGray">{description}</p>
        <Link href={href} className="text-primary font-medium hover:underline">
          En savoir plus →
        </Link>
      </div>
    </motion.div>
  );
}
