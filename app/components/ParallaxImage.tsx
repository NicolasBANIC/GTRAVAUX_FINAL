'use client';

import Image from 'next/image';
import { useRef, useEffect, useState } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';

interface ParallaxImageProps {
  src: string;
  alt: string;
  className?: string;
  width?: number;
  height?: number;
  priority?: boolean;
  parallaxIntensity?: number; // 0-1, où 1 est l'effet maximum
}

export default function ParallaxImage({
  src,
  alt,
  className = '',
  width = 1200,
  height = 800,
  priority = false,
  parallaxIntensity = 0.2,
}: ParallaxImageProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  const [elementTop, setElementTop] = useState(0);
  const [clientHeight, setClientHeight] = useState(0);

  const { scrollY } = useScroll();

  // Mettre à jour les mesures lors du défilement ou du redimensionnement
  useEffect(() => {
    const element = containerRef.current;
    if (!element) return undefined;

    const updatePosition = () => {
      const rect = element.getBoundingClientRect();
      setElementTop(rect.top + window.scrollY);
      setClientHeight(window.innerHeight);
    };

    updatePosition();
    window.addEventListener('resize', updatePosition);
    return () => window.removeEventListener('resize', updatePosition);
  }, []);

  // Calculer l'effet de parallaxe
  const y = useTransform(
    scrollY,
    [elementTop - clientHeight, elementTop + clientHeight],
    [`-${parallaxIntensity * 100}%`, `${parallaxIntensity * 100}%`]
  );

  return (
    <div ref={containerRef} className={`relative overflow-hidden ${className}`}>
      <motion.div style={{ y }} className="size-full">
        <Image
          src={src}
          alt={alt}
          width={width}
          height={height}
          priority={priority}
          className="size-full object-cover"
        />
      </motion.div>
    </div>
  );
}
