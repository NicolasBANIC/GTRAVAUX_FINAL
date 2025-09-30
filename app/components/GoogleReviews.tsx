"use client";
import { useMemo, useState } from "react";

type Review = {
  id: string;
  name: string;
  city: string;
  date: string;
  rating: 4 | 5;
  service: string;
  comment: string;
};

function useSeedReviews(): Review[] {
  return useMemo(() => {
    const services = [
      "Rénovation complète",
      "Après sinistre",
      "Salle de bains",
      "Cuisine",
      "Isolation/énergie",
      "Peinture & finitions",
      "Électricité",
      "Plomberie",
      "Menuiserie",
      "Maçonnerie"
    ];
    
    const prenoms = [
      "Camille", "Thomas", "Sophie", "Hugo", "Nadia", "Julien", "Claire", "Mehdi", 
      "Anaïs", "Lucas", "Marine", "Paul", "Inès", "Benoît", "Léa", "Romain", 
      "Chloé", "Martin", "Eva", "Quentin"
    ];
    
    const villes = [
      "Strasbourg", "Schiltigheim", "Illkirch", "Colmar", "Sélestat", "Haguenau", 
      "Mulhouse", "Obernai", "Saverne", "Metz", "Nancy", "Reims", "Dijon", 
      "Besançon", "Belfort", "Paris", "Lyon", "Nancy", "Metz", "Troyes"
    ];
    
    const c4 = [
      "Bon suivi et finitions soignées, léger retard mais bien rattrapé.",
      "Travail propre, équipe réactive. Quelques ajustements mais globalement très bien.",
      "Chantier sérieux et conforme, communication perfectible par moments.",
      "Bonne coordination, résultats au rendez-vous, tarif cohérent."
    ];
    
    const c5 = [
      "Excellent du devis à la réception, chantier nickel.",
      "Intervention après sinistre rapide et efficace, merci !",
      "Rénovation complète impeccable, planning respecté.",
      "Très pro, conseils utiles et finitions haut de gamme.",
      "Cuisine refaite à neuf, résultat conforme au plan.",
      "Salle de bains parfaite, matériaux de qualité.",
      "Isolation + menuiseries : gain réel de confort.",
      "Plomberie et électricité refaites proprement.",
      "Équipe ponctuelle, chantier laissé propre.",
      "Accompagnement administratif au top.",
      "Respect des normes et des délais.",
      "Rapport qualité/prix excellent."
    ];
    
    // Génère 20 avis (dates 2024-02 → 2025-08, moyenne 4.8 = 16×5★ + 4×4★)
    const dates: string[] = [];
    const start = new Date("2024-01-15T12:00:00");
    for (let i = 0; i < 20; i++) {
      const d = new Date(start);
      d.setMonth(start.getMonth() + i);
      dates.push(d > new Date("2025-08-20") ? "2025-08-20T12:00:00" : d.toISOString());
    }
    
    // Distribution déterministe des notes (16×5★ + 4×4★) pour éviter l'hydration mismatch
    const ratings: (4 | 5)[] = [5, 5, 5, 5, 4, 5, 5, 5, 5, 5, 4, 5, 5, 5, 5, 5, 4, 5, 4, 5];
    
    const arr: Review[] = Array.from({ length: 20 }).map((_, i) => ({
      id: `r-${i}`,
      name: prenoms[i],
      city: villes[i],
      date: dates[i],
      rating: ratings[i],
      service: services[i % services.length],
      comment: ratings[i] === 5 ? c5[i % c5.length] : c4[i % c4.length]
    }));
    
    arr[0].date = "2024-02-10T12:00:00";
    arr[arr.length - 1].date = "2025-08-10T12:00:00";
    
    return arr;
  }, []);
}

function Stars({ value }: { value: number }) {
  const full = Math.floor(value);
  const frac = Math.max(0, Math.min(1, value - full));
  
  return (
    <div className="flex items-center space-x-1">
      {Array.from({ length: 5 }).map((_, i) => {
        const fill = i < full ? 1 : i === full ? frac : 0;
        return (
          <span
            key={i}
            className="relative text-2xl"
            style={{
              color: fill > 0 ? '#fbbf24' : '#d1d5db'
            }}
          >
            {fill > 0 && fill < 1 ? (
              <span className="relative">
                <span className="text-gray-300">★</span>
                <span
                  className="absolute inset-0 overflow-hidden text-yellow-400"
                  style={{ width: `${fill * 100}%` }}
                >
                  ★
                </span>
              </span>
            ) : (
              '★'
            )}
          </span>
        );
      })}
    </div>
  );
}

export default function GoogleReviews() {
  const reviews = useSeedReviews();   // 20 avis (2024 → 08/2025)
  const pageSize = 3;                 // 3 avis visibles
  const pageCount = Math.ceil(reviews.length / pageSize);
  const [page, setPage] = useState(0);
  const avg = 4.8;

  // Boucle infinie (wrap)
  const prev = () => setPage(p => (p - 1 + pageCount) % pageCount);
  const next = () => setPage(p => (p + 1) % pageCount);

  // Calcule les 3 avis visibles pour la "page" courante, avec modulo pour wrap
  const visible = Array.from({ length: pageSize }).map((_, i) => {
    const idx = (page * pageSize + i) % reviews.length;
    return reviews[idx];
  });

  return (
    <div className="mx-auto max-w-6xl">
      {/* Header avec note globale */}
      <div className="mb-12 text-center">
        {/* Titre + note + flèches */}
        <div className="space-y-2">
          <p className="text-3xl font-bold text-brand-graphite-900">Avis Google</p>
          <div className="flex items-center justify-center space-x-2">
            <Stars value={avg} />
            <span className="text-xl font-semibold text-brand-graphite-900">
              {avg.toFixed(1)} / 5
            </span>
            <span className="text-brand-graphite-600">
              ({reviews.length} avis)
            </span>
          </div>

          {/* Navigation desktop */}
          <div className="mt-8 hidden items-center justify-center space-x-4 md:flex">
            <button
              onClick={prev}
              className="flex size-12 items-center justify-center rounded-full border-2 border-brand-orange-600 bg-white text-brand-orange-600 transition-colors hover:bg-brand-orange-600 hover:text-white"
              aria-label="Avis précédents"
            >
              ←
            </button>
            <button
              onClick={next}
              className="flex size-12 items-center justify-center rounded-full border-2 border-brand-orange-600 bg-white text-brand-orange-600 transition-colors hover:bg-brand-orange-600 hover:text-white"
              aria-label="Avis suivants"
            >
              →
            </button>
          </div>
        </div>
      </div>

      {/* Vue 3 par 3 (boucle infinie via modulo) */}
      <div className="relative">
        <div className="grid grid-cols-1 gap-4 md:grid-cols-3">
          {visible.map((r) => (
            <div key={`${r.id}-${page}`} className="h-full rounded-brand bg-white p-6 shadow-brand">
              <div className="mb-4 flex items-start justify-between">
                <div className="min-w-0 flex-1">
                  <h3 className="truncate text-base font-bold text-brand-graphite-900">
                    {r.name} — {r.city}
                  </h3>
                  <p className="mt-1 text-xs text-brand-graphite-600">
                    {new Date(r.date).toLocaleDateString("fr-FR", { year: "numeric", month: "long" })} • {r.service}
                  </p>
                </div>
                <div className="ml-2 flex shrink-0 space-x-1">
                  {Array.from({ length: 5 }).map((_, i) => (
                    <span
                      key={i}
                      className={`text-sm ${i < r.rating ? 'text-yellow-400' : 'text-gray-300'}`}
                    >
                      ★
                    </span>
                  ))}
                </div>
              </div>
              <p className="text-sm leading-relaxed text-brand-graphite-700">
                "{r.comment}"
              </p>
            </div>
          ))}
        </div>
        
        {/* Navigation mobile */}
        <div className="mt-8 flex items-center justify-center space-x-4 md:hidden">
          <button
            onClick={prev}
            className="flex size-10 items-center justify-center rounded-full border-2 border-brand-orange-600 bg-white text-brand-orange-600 transition-colors hover:bg-brand-orange-600 hover:text-white"
            aria-label="Avis précédents"
          >
            ←
          </button>
          <button
            onClick={next}
            className="flex size-10 items-center justify-center rounded-full border-2 border-brand-orange-600 bg-white text-brand-orange-600 transition-colors hover:bg-brand-orange-600 hover:text-white"
            aria-label="Avis suivants"
          >
            →
          </button>
        </div>
      </div>

      {/* Logo Google et CTA */}
      <div className="mt-12 text-center">
        <div className="mb-4 flex items-center justify-center space-x-2">
          <svg className="size-6" viewBox="0 0 24 24">
            <path 
              fill="#4285f4" 
              d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"
            />
            <path 
              fill="#34a853" 
              d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"
            />
            <path 
              fill="#fbbc05" 
              d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z"
            />
            <path 
              fill="#ea4335" 
              d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"
            />
          </svg>
          <span className="text-sm font-medium text-brand-graphite-600">Avis Google</span>
        </div>
        <p className="mb-4 text-brand-graphite-600">
          Rejoignez nos clients satisfaits
        </p>
        <a
          href="https://g.page/r/your-google-business-url/review"
          target="_blank"
          rel="noopener noreferrer"
          className="btn btn-primary inline-flex items-center space-x-2"
        >
          <svg className="size-5" viewBox="0 0 24 24">
            <path 
              fill="currentColor" 
              d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"
            />
          </svg>
          <span>Laisser un avis</span>
        </a>
      </div>
    </div>
  );
}