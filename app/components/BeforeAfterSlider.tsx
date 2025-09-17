"use client";

import { useState } from 'react';
import Image from 'next/image';

interface BeforeAfterSliderProps {
  beforeSrc: string;
  afterSrc: string;
  alt?: string;
}

/**
 * A simple before/after comparison slider. Shows two images layered on top of
 * each other with an adjustable handle to reveal the after image. Accessible
 * via keyboard by using the range input.
 */
export default function BeforeAfterSlider({ beforeSrc, afterSrc, alt = '' }: BeforeAfterSliderProps) {
  const [value, setValue] = useState(50);
  return (
    <div className="relative w-full h-72 md:h-96 overflow-hidden rounded-lg">
      {/* After image (full) */}
      <Image 
        src={afterSrc} 
        alt={alt} 
        fill 
        sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
        className="object-cover object-center" 
      />
      {/* Before image (clipped) */}
      <div
        className="absolute inset-0 overflow-hidden"
        style={{ width: `${value}%` }}
      >
        <Image 
          src={beforeSrc} 
          alt={alt} 
          fill 
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          className="object-cover object-center" 
        />
      </div>
      {/* Slider handle */}
      <input
        type="range"
        min={0}
        max={100}
        value={value}
        onChange={(e) => setValue(Number(e.target.value))}
        className="absolute bottom-2 left-1/2 -translate-x-1/2 w-1/2"
        aria-label="Comparateur avant-après"
      />
    </div>
  );
}
