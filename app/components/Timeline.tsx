'use client';

import { ReactNode } from 'react';
import { motion } from 'framer-motion';

interface TimelineItem {
  title: string;
  description: string;
  icon?: ReactNode;
  date?: string;
}

interface TimelineProps {
  items: TimelineItem[];
  className?: string;
  alternating?: boolean;
}

export default function Timeline({
  items,
  className = '',
  alternating = true,
}: TimelineProps) {
  return (
    <div className={`relative ${className}`}>
      {/* Ligne centrale */}
      <div className="absolute left-4 sm:left-1/2 top-0 bottom-0 w-0.5 bg-primary/30 transform sm:translate-x-[-0.5px]" />
      
      {/* Éléments de la timeline */}
      <div className="relative">
        {items.map((item, index) => {
          const isEven = index % 2 === 0;
          const alignment = alternating && isEven ? 'right' : 'left';
          
          return (
            <motion.div
              key={index}
              className={`relative mb-12 last:mb-0 ${
                alternating ? 'sm:flex' : 'flex flex-col sm:flex-row'
              }`}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-50px' }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              {/* Point sur la ligne */}
              <div className="absolute left-4 sm:left-1/2 w-4 h-4 bg-primary rounded-full transform sm:translate-x-[-8px] mt-1.5" />
              
              {/* Contenu */}
              <div
                className={`
                  pl-12 sm:pl-0 sm:w-1/2
                  ${alternating && alignment === 'right' ? 'sm:pr-12 sm:pl-0' : 'sm:pl-12 sm:pr-0'}
                  ${alternating && alignment === 'left' ? 'sm:ml-auto' : ''}
                `}
              >
                <div className="bg-white p-5 rounded-lg shadow-md">
                  <div className="flex items-center mb-2">
                    {item.icon && <div className="text-primary mr-2">{item.icon}</div>}
                    <h3 className="text-xl font-bold text-darkGray">{item.title}</h3>
                  </div>
                  
                  {item.date && (
                    <div className="text-sm text-gray-500 mb-2">{item.date}</div>
                  )}
                  
                  <p className="text-darkGray">{item.description}</p>
                </div>
              </div>
            </motion.div>
          );
        })}
      </div>
    </div>
  );
}