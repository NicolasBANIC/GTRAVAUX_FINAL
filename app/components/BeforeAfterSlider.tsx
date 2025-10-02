"use client";
import { useEffect, useId, useRef, useState } from "react";
import Image from "next/image";

type BeforeAfterProps = {
  nomProjet?: string;
  srcBefore?: string; // état AVANT
  srcAfter?: string;  // état APRÈS
  altBefore?: string;
  altAfter?: string;
};

export default function BeforeAfterSlider({
  nomProjet = "Réalisation",
  srcBefore = "/images/placeholder/apres.webp",  // BEFORE = nouvelle image "apres.png"
  srcAfter = "/images/placeholder/avant.webp",  // AFTER  = nouvelle image "avant.png"
  altBefore = "Cuisine avant rénovation — projet",
  altAfter = "Cuisine après rénovation — projet",
}: BeforeAfterProps) {
  const [value, setValue] = useState(50);
  const rangeId = useId();
  const clipRef = useRef<HTMLDivElement>(null);
  const rafRef = useRef<number>(0);

  // Handler performant avec requestAnimationFrame
  useEffect(() => {
    const input = document.getElementById(rangeId) as HTMLInputElement | null;
    if (!input || !clipRef.current) return;

    const onInput = () => {
      const v = Number(input.value); // 0..100
      setValue(v);
      if (rafRef.current) cancelAnimationFrame(rafRef.current);
      rafRef.current = requestAnimationFrame(() => {
        if (clipRef.current) {
          clipRef.current.style.clipPath = `inset(0 ${100 - v}% 0 0)`;
        }
      });
    };

    // Support clavier avancé
    const onKeyDown = (e: KeyboardEvent) => {
      const currentValue = Number(input.value);
      let newValue = currentValue;
      
      switch (e.key) {
        case 'ArrowLeft':
        case 'ArrowDown':
          e.preventDefault();
          newValue = Math.max(0, currentValue - 1);
          break;
        case 'ArrowRight':
        case 'ArrowUp':
          e.preventDefault();
          newValue = Math.min(100, currentValue + 1);
          break;
        case 'Home':
          e.preventDefault();
          newValue = 0;
          break;
        case 'End':
          e.preventDefault();
          newValue = 100;
          break;
        case 'PageDown':
          e.preventDefault();
          newValue = Math.max(0, currentValue - 10);
          break;
        case 'PageUp':
          e.preventDefault();
          newValue = Math.min(100, currentValue + 10);
          break;
      }
      
      if (newValue !== currentValue) {
        input.value = String(newValue);
        onInput();
      }
    };

    input.addEventListener("input", onInput, { passive: true });
    input.addEventListener("keydown", onKeyDown);
    
    // Initialisation
    onInput();

    return () => {
      input.removeEventListener("input", onInput);
      input.removeEventListener("keydown", onKeyDown);
      if (rafRef.current) cancelAnimationFrame(rafRef.current);
    };
  }, [rangeId]);

  // Respect de prefers-reduced-motion
  const prefersReducedMotion = typeof window !== 'undefined' && 
    window.matchMedia('(prefers-reduced-motion: reduce)').matches;

  return (
    <div className="relative w-full">
      {/* Conteneur principal avec ratio fixe */}
      <div className="relative aspect-[16/9] w-full overflow-hidden rounded-brand bg-brand-graphite-100 shadow-brand">
        
        {/* AVANT (fond) */}
        <Image
          src={srcBefore}
          alt={altBefore}
          fill
          sizes="(max-width: 768px) 100vw, 1200px"
          className="object-cover object-center"
          priority={false}
          loading="lazy"
        />
        
        {/* APRÈS (au-dessus, révélé par clip-path) */}
        <div
          ref={clipRef}
          className="absolute inset-0"
          style={{
            clipPath: `inset(0 ${100 - value}% 0 0)`,
            willChange: prefersReducedMotion ? 'auto' : 'clip-path',
          }}
        >
          <Image
            src={srcAfter}
            alt={altAfter}
            fill
            sizes="(max-width: 768px) 100vw, 1200px"
            className="object-cover object-center"
            priority={false}
            loading="lazy"
          />
        </div>

        {/* Repère central (ligne de séparation) */}
        <div 
          className="pointer-events-none absolute inset-y-0 z-10 w-0.5 bg-brand-orange-600 shadow-lg"
          style={{ left: `${value}%`, transform: 'translateX(-50%)' }}
        >
          {/* Poignée circulaire */}
          <div className="absolute left-1/2 top-1/2 flex size-8 -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full border-2 border-brand-orange-600 bg-white shadow-brand">
            <div className="h-4 w-1 rounded-full bg-brand-orange-600"></div>
          </div>
        </div>

        {/* Contrôle range (invisible mais accessible) */}
        <input
          id={rangeId}
          type="range"
          min={0}
          max={100}
          defaultValue={50}
          className="range-modern absolute inset-0 size-full cursor-ew-resize opacity-0 focus-visible:outline focus-visible:outline-2 focus-visible:outline-brand-orange-700"
          aria-label={`Comparateur avant-après pour ${nomProjet}. Utilisez les flèches ou glissez pour révéler l'image après rénovation.`}
          aria-valuetext={`${value}% de révélation de l'image après rénovation`}
        />
      </div>

      {/* Légende */}
      <div className="mt-4 flex justify-between text-sm text-brand-graphite-600">
        <span className="font-medium">Avant</span>
        <span className="text-brand-graphite-500">Glisser pour comparer</span>
        <span className="font-medium">Après</span>
      </div>
    </div>
  );
}
