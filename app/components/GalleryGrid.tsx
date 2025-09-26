'use client';

import Image from 'next/image';
import { motion } from 'framer-motion';
import { useState } from 'react';
import { CallbackWithIndex } from '../../types/events';
import { GalleryGridProps } from '../../types/gallery';

export default function GalleryGrid({ items }: GalleryGridProps) {
  const [imageErrors, setImageErrors] = useState<Set<number>>(new Set());
  const [imageLoading, setImageLoading] = useState<Set<number>>(new Set());

  const handleImageError: CallbackWithIndex = (index: number) => {
    setImageErrors(prev => new Set([...prev, index]));
    setImageLoading(prev => {
      const newSet = new Set(prev);
      newSet.delete(index);
      return newSet;
    });
  };

  const handleImageLoad: CallbackWithIndex = (index: number) => {
    setImageLoading(prev => {
      const newSet = new Set(prev);
      newSet.delete(index);
      return newSet;
    });
  };

  const handleImageLoadStart: CallbackWithIndex = (index: number) => {
    setImageLoading(prev => new Set([...prev, index]));
  };

  return (
    <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
      {items.map((item, idx) => (
        <motion.div
          key={`${item.src}-${idx}`}
          className="group relative overflow-hidden rounded-lg shadow-lg transition-all duration-300 hover:shadow-xl"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ delay: idx * 0.1 }}
        >
          <div className="relative h-64 w-full bg-gray-200">
            {!imageErrors.has(idx) ? (
              <>
                <Image
                  src={item.src}
                  alt={`${item.title}${item.location ? ` - ${item.location}` : ''}`}
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
                  <div className="absolute inset-0 flex animate-pulse items-center justify-center bg-gray-200">
                    <div className="size-8 animate-spin rounded-full border-4 border-primary border-t-transparent"></div>
                  </div>
                )}
              </>
            ) : (
              <div className="flex size-full items-center justify-center bg-gradient-to-br from-gray-200 to-gray-300">
                <div className="text-center text-gray-600">
                  <div className="mx-auto mb-3 flex size-16 items-center justify-center rounded-lg bg-gray-400 text-2xl">
                    🏠
                  </div>
                  <p className="text-sm font-medium">{item.title}</p>
                  {item.location && <p className="mt-1 text-xs text-gray-500">{item.location}</p>}
                </div>
              </div>
            )}
          </div>
          <div className="absolute inset-0 flex flex-col justify-end bg-gradient-to-t from-black/80 via-black/20 to-transparent p-6 text-white opacity-0 transition-opacity duration-300 group-hover:opacity-100">
            <h3 className="mb-2 translate-y-4 text-xl font-bold transition-transform duration-300 group-hover:translate-y-0">
              {item.title}
            </h3>
            {item.location && (
              <p className="translate-y-4 text-sm opacity-90 transition-transform delay-75 duration-300 group-hover:translate-y-0">
                {item.location}
              </p>
            )}
          </div>
        </motion.div>
      ))}
    </div>
  );
}
