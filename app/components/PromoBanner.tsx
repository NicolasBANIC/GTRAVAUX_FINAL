'use client';

import { useState, useEffect } from 'react';
import { FaTimes, FaClock, FaGift } from 'react-icons/fa';
import Link from 'next/link';

interface PromoBannerProps {
  message?: string;
  cta?: string;
  href?: string;
  urgent?: boolean;
  dismissible?: boolean;
}

export default function PromoBanner({ 
  message = "🔥 OFFRE SPÉCIALE : Devis gratuit sous 24h + Réduction -15% sur votre première intervention",
  cta = "J'en profite",
  href = "/contact",
  urgent = true,
  dismissible = true
}: PromoBannerProps) {
  const [isVisible, setIsVisible] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    // Afficher après 2 secondes
    const timer = setTimeout(() => setIsVisible(true), 2000);
    
    // Gérer le scroll pour version sticky
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 100);
    };

    window.addEventListener('scroll', handleScroll);
    
    return () => {
      clearTimeout(timer);
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const handleDismiss = () => {
    setIsVisible(false);
    // Stocker dans localStorage pour ne pas réafficher pendant 1 jour
    localStorage.setItem('promoBannerDismissed', Date.now().toString());
  };

  // Vérifier si déjà dismissé aujourd'hui
  useEffect(() => {
    const dismissed = localStorage.getItem('promoBannerDismissed');
    if (dismissed) {
      const dismissedTime = parseInt(dismissed);
      const oneDayMs = 24 * 60 * 60 * 1000;
      if (Date.now() - dismissedTime < oneDayMs) {
        setIsVisible(false);
      }
    }
  }, []);

  if (!isVisible) return null;

  return (
    <div className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
      isScrolled ? 'transform translate-y-0' : 'transform translate-y-0'
    }`}>
      <div className={`${
        urgent 
          ? 'bg-gradient-to-r from-red-600 via-red-500 to-red-600' 
          : 'bg-gradient-to-r from-green via-primary to-green'
      } text-white py-2 px-4 shadow-lg animate-pulse`}>
        <div className="container mx-auto flex items-center justify-between text-sm">
          <div className="flex items-center space-x-2 flex-1">
            {urgent ? (
              <FaClock className="text-yellow-300 animate-spin" />
            ) : (
              <FaGift className="text-yellow-300" />
            )}
            <span className="font-medium truncate">{message}</span>
          </div>
          
          <div className="flex items-center space-x-3">
            <Link 
              href={href}
              className="bg-white text-red-600 px-4 py-1 rounded-full text-xs font-bold hover:bg-yellow-100 transition-colors duration-200 whitespace-nowrap"
            >
              {cta}
            </Link>
            
            {dismissible && (
              <button
                onClick={handleDismiss}
                className="text-white/80 hover:text-white transition-colors"
                aria-label="Fermer"
              >
                <FaTimes size={14} />
              </button>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}