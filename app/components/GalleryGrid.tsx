"use client";

import Image from 'next/image';
import { motion } from 'framer-motion';
import { useState } from 'react';

interface GalleryItem {
  src: string;
  title: string;
  location: string;
}

interface GalleryGridProps {
  items: GalleryItem[];
}

export default function GalleryGrid({ items }: GalleryGridProps) {
  const [imageErrors, setImageErrors] = useState<Set<number>>(new Set());
  const [imageLoading, setImageLoading] = useState<Set<number>>(new Set());

  const handleImageError = (index: number) => {
    setImageErrors(prev => new Set([...prev, index]));
    setImageLoading(prev => {
      const newSet = new Set(prev);
      newSet.delete(index);
      return newSet;
    });
  };

  const handleImageLoad = (index: number) => {
    setImageLoading(prev => {
      const newSet = new Set(prev);
      newSet.delete(index);
      return newSet;
    });
  };

  const handleImageLoadStart = (index: number) => {
    setImageLoading(prev => new Set([...prev, index]));
  };

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
      {items.map((item, idx) => (
        <motion.div
          key={`${item.src}-${idx}`}
          className="relative overflow-hidden rounded-lg shadow-lg hover:shadow-xl transition-all duration-300 group"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ delay: idx * 0.1 }}
        >
          <div className="relative w-full h-64 bg-gray-200">
            {!imageErrors.has(idx) ? (
              <>
                <Image 
                  src={item.src} 
                  alt={`${item.title} - ${item.location}`} 
                  fill
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                  className="object-cover transition-transform duration-500 group-hover:scale-110"
                  onError={() => handleImageError(idx)}
                  onLoad={() => handleImageLoad(idx)}
                  onLoadStart={() => handleImageLoadStart(idx)}
                  priority={idx < 3}
                  quality={85}
                />
                {imageLoading.has(idx) && (
                  <div className="absolute inset-0 bg-gray-200 animate-pulse flex items-center justify-center">
                    <div className="w-8 h-8 border-4 border-primary border-t-transparent rounded-full animate-spin"></div>
                  </div>
                )}
              </>
            ) : (
              <div className="w-full h-full bg-gradient-to-br from-gray-200 to-gray-300 flex items-center justify-center">
                <div className="text-center text-gray-600">
                  <div className="w-16 h-16 mx-auto mb-3 bg-gray-400 rounded-lg flex items-center justify-center text-2xl">
                    🏠
                  </div>
                  <p className="text-sm font-medium">{item.title}</p>
                  <p className="text-xs text-gray-500 mt-1">{item.location}</p>
                </div>
              </div>
            )}
          </div>
          <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-6 text-white">
            <h3 className="font-bold text-xl mb-2 transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300">{item.title}</h3>
            <p className="text-sm opacity-90 transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300 delay-75">{item.location}</p>
          </div>
        </motion.div>
      ))}
    </div>
  );
}
