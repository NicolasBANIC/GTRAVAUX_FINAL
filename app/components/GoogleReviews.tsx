"use client";

import { FaGoogle, FaStar } from "react-icons/fa";

interface ReviewItem {
  author: string;
  text: string;
  rating: number; // 1..5
  date?: string;
}

interface GoogleReviewsProps {
  rating?: number; // overall rating
  count?: number; // number of reviews
  link?: string; // link to Google profile
  reviews?: ReviewItem[]; // sample reviews to display
}

// Lightweight Google Reviews block for social proof on homepage
export default function GoogleReviews({
  rating = 4.8,
  count = 127,
  link = "https://www.google.com/maps/search/?api=1&query=G.TRAVAUX%20Strasbourg",
  reviews = [
    {
      author: "Camille R.",
      text:
        "Travail très propre et équipe ponctuelle. Ils m'ont bien conseillé sur les teintes.",
      rating: 5,
      date: "il y a 2 mois",
    },
    {
      author: "Nicolas V.",
      text:
        "Intervention rapide après sinistre, accompagnement pour l'assurance au top.",
      rating: 5,
      date: "il y a 1 mois",
    },
    {
      author: "Julie M.",
      text:
        "Devis clair, finitions soignées. Très satisfaite du résultat.",
      rating: 4,
      date: "il y a 3 semaines",
    },
  ],
}: GoogleReviewsProps) {
  const fullStars = Math.floor(rating);
  const hasHalf = rating - fullStars >= 0.5;

  return (
    <div className="bg-white p-6 rounded-lg shadow-lg max-w-5xl mx-auto">
      <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4 mb-6">
        <div className="flex items-center gap-3">
          <div className="flex items-center justify-center w-10 h-10 rounded-full bg-red-50">
            <FaGoogle className="text-red-600" size={20} />
          </div>
          <div>
            <div className="flex items-center gap-2" aria-label={`Note Google ${rating} sur 5`}>
              <div className="flex text-yellow-400">
                {Array.from({ length: fullStars }).map((_, i) => (
                  <FaStar key={`full-${i}`} />
                ))}
                {hasHalf && (
                  <FaStar className="opacity-50" />
                )}
                {Array.from({ length: 5 - fullStars - (hasHalf ? 1 : 0) }).map((_, i) => (
                  <FaStar key={`empty-${i}`} className="opacity-20" />
                ))}
              </div>
              <span className="font-semibold">{rating.toFixed(1)}/5</span>
            </div>
            <div className="text-sm text-darkGray">Basé sur {count}+ avis</div>
          </div>
        </div>
        <a
          href={link}
          target="_blank"
          rel="noopener nofollow"
          className="inline-block button-secondary !text-primary hover:!text-primary border-accent-400"
          aria-label="Voir tous les avis Google"
        >
          Voir tous les avis sur Google
        </a>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        {reviews.slice(0, 3).map((r, idx) => (
          <div key={idx} className="border border-lightGray rounded-lg p-4">
            <div className="flex items-center justify-between mb-2">
              <div className="font-semibold">{r.author}</div>
              <div className="flex text-yellow-400" aria-hidden>
                {Array.from({ length: r.rating }).map((_, i) => (
                  <FaStar key={`r-${idx}-${i}`} />
                ))}
              </div>
            </div>
            <p className="text-sm text-darkGray">{r.text}</p>
            {r.date && <div className="text-xs text-darkGray mt-2">{r.date}</div>}
          </div>
        ))}
      </div>
    </div>
  );
}