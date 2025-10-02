'use client';

import Image from 'next/image';
import { useState, useRef, useEffect } from 'react';

interface OptimizedImageProps {
  src: string;
  alt: string;
  width?: number;
  height?: number;
  className?: string;
  priority?: boolean;
  fill?: boolean;
  lazy?: boolean;
  quality?: number;
  sizes?: string;
}

export default function OptimizedImage({
  src,
  alt,
  width,
  height,
  className = '',
  priority = false,
  fill = false,
  lazy = true,
  quality = 75,
  sizes,
}: OptimizedImageProps) {
  const [isLoading, setIsLoading] = useState(true);
  const [hasError, setHasError] = useState(false);
  const [isInView, setIsInView] = useState(!lazy || priority);
  const imgRef = useRef<HTMLDivElement>(null);

  // Intersection Observer pour le lazy loading
  useEffect(() => {
    if (!lazy || priority || isInView) return undefined;

    const observer = new IntersectionObserver(
      entries => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            setIsInView(true);
            observer.disconnect();
          }
        });
      },
      {
        rootMargin: '50px', // Commence à charger 50px avant d'être visible
        threshold: 0.1,
      }
    );

    if (imgRef.current) {
      observer.observe(imgRef.current);
    }

    return () => observer.disconnect();
  }, [lazy, priority, isInView]);

  // Placeholder blur data URL pour un meilleur UX
  const shimmer = (w: number, h: number) => `
    <svg width="${w}" height="${h}" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
      <defs>
        <linearGradient id="g">
          <stop stop-color="#f6f7f8" offset="20%" />
          <stop stop-color="#edeef1" offset="50%" />
          <stop stop-color="#f6f7f8" offset="70%" />
        </linearGradient>
      </defs>
      <rect width="${w}" height="${h}" fill="#f6f7f8" />
      <rect id="r" width="${w}" height="${h}" fill="url(#g)" />
      <animate xlink:href="#r" attributeName="x" from="-${w}" to="${w}" dur="1s" repeatCount="indefinite" />
    </svg>`;

  const toBase64 = (str: string) =>
    typeof window === 'undefined'
      ? Buffer.from(str).toString('base64')
      : window.btoa(str);

  const blurDataURL = `data:image/svg+xml;base64,${toBase64(
    shimmer(width || 700, height || 475)
  )}`;

  return (
    <div ref={imgRef} className={`relative overflow-hidden ${className}`}>
      {/* Loading skeleton */}
      {isLoading && !hasError && (
        <div className="absolute inset-0 animate-pulse bg-gradient-to-r from-lightGray via-gray-200 to-lightGray">
          <div className="animate-shimmer absolute inset-0 bg-gradient-to-r from-transparent via-white to-transparent"></div>
        </div>
      )}

      {/* Error state */}
      {hasError ? (
        <div className="absolute inset-0 flex flex-col items-center justify-center bg-lightGray text-darkGray">
          <svg
            className="mb-2 size-12 opacity-50"
            fill="currentColor"
            viewBox="0 0 20 20"
          >
            <path
              fillRule="evenodd"
              d="M4 3a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V5a2 2 0 00-2-2H4zm12 12H4l4-8 3 6 2-4 3 6z"
              clipRule="evenodd"
            />
          </svg>
          <div className="text-sm">Image non disponible</div>
        </div>
      ) : (
        // Image principale
        isInView && (
          <Image
            src={src}
            alt={alt}
            width={fill ? undefined : width}
            height={fill ? undefined : height}
            fill={fill}
            priority={priority}
            quality={quality}
            sizes={sizes || (fill ? '100vw' : undefined)}
            placeholder="blur"
            blurDataURL={blurDataURL}
            className={`transition-all duration-500 ease-out ${
              isLoading ? 'scale-105 opacity-0' : 'scale-100 opacity-100'
            } ${fill ? 'object-cover' : ''}`}
            onLoad={() => setIsLoading(false)}
            onError={() => {
              setHasError(true);
              setIsLoading(false);
            }}
            style={{
              filter: isLoading ? 'blur(5px)' : 'blur(0px)',
            }}
          />
        )
      )}
    </div>
  );
}
