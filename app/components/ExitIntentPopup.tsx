'use client';

import { useState, useEffect } from 'react';
import { FaTimes, FaPhoneAlt, FaClock, FaGift } from 'react-icons/fa';
import CallbackForm from './CallbackForm';

export default function ExitIntentPopup() {
  const [isVisible, setIsVisible] = useState(false);
  const [hasShown, setHasShown] = useState(false);

  useEffect(() => {
    // Vérifier si déjà montré dans cette session
    const shown = sessionStorage.getItem('exitIntentShown');
    if (shown) return;

    let isExiting = false;

    const handleMouseLeave = (e: MouseEvent) => {
      // Si la souris sort vers le haut de la page (intention de fermer)
      if (e.clientY <= 5 && !hasShown && !isExiting) {
        isExiting = true;
        setIsVisible(true);
        setHasShown(true);
        sessionStorage.setItem('exitIntentShown', 'true');
      }
    };

    // Fallback: montrer après 45 secondes si pas encore montré
    const fallbackTimer = setTimeout(() => {
      if (!hasShown) {
        setIsVisible(true);
        setHasShown(true);
        sessionStorage.setItem('exitIntentShown', 'true');
      }
    }, 45000);

    document.addEventListener('mouseleave', handleMouseLeave);

    return () => {
      document.removeEventListener('mouseleave', handleMouseLeave);
      clearTimeout(fallbackTimer);
    };
  }, [hasShown]);

  const handleClose = () => {
    setIsVisible(false);
  };

  const handleCallNow = () => {
    window.location.href = 'tel:+33604007499';
  };

  if (!isVisible) return null;

  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center">
      {/* Overlay */}
      <div 
        className="absolute inset-0 bg-black/60 backdrop-blur-sm"
        onClick={handleClose}
      ></div>
      
      {/* Popup */}
      <div className="relative bg-white rounded-lg shadow-2xl max-w-md w-full mx-4 animate-scale-in">
        {/* Header urgent */}
        <div className="bg-gradient-to-r from-red-600 to-red-500 text-white p-4 rounded-t-lg">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-2">
              <FaClock className="animate-pulse" />
              <span className="font-bold text-sm">ATTENDEZ !</span>
            </div>
            <button 
              onClick={handleClose}
              className="text-white/80 hover:text-white transition-colors"
            >
              <FaTimes size={16} />
            </button>
          </div>
        </div>

        {/* Contenu */}
        <div className="p-6">
          <div className="text-center mb-6">
            <FaGift className="text-red-500 text-3xl mx-auto mb-3" />
            <h2 className="text-xl font-bold text-darkGray mb-2">
              Avant de partir...
            </h2>
            <p className="text-sm text-darkGray mb-4">
              Profitez de notre <strong className="text-red-600">offre exclusive</strong> :
            </p>
            
            <div className="bg-red-50 border border-red-200 rounded-lg p-4 mb-4">
              <ul className="text-sm text-left space-y-2">
                <li className="flex items-center">
                  <span className="text-green-600 mr-2">✓</span>
                  <span><strong>Devis gratuit</strong> sous 24h</span>
                </li>
                <li className="flex items-center">
                  <span className="text-green-600 mr-2">✓</span>
                  <span><strong>-15% de réduction</strong> sur votre première intervention</span>
                </li>
                <li className="flex items-center">
                  <span className="text-green-600 mr-2">✓</span>
                  <span><strong>Accompagnement assurance</strong> gratuit</span>
                </li>
              </ul>
            </div>
            
            <p className="text-xs text-red-600 font-medium">
              ⏰ Offre valable 48h seulement !
            </p>
          </div>

          <div className="space-y-3">
            {/* Bouton d'appel immédiat */}
            <button
              onClick={handleCallNow}
              className="w-full bg-green text-white py-3 rounded-full font-bold hover:bg-green/90 transition-colors flex items-center justify-center space-x-2"
            >
              <FaPhoneAlt />
              <span>Appeler maintenant</span>
            </button>

            {/* Ou formulaire rapide */}
            <div className="text-center">
              <p className="text-xs text-darkGray mb-3">Ou laissez-nous vos coordonnées :</p>
              <div className="bg-lightGray p-4 rounded-lg">
                <CallbackForm />
              </div>
            </div>
          </div>

          <div className="text-center mt-4">
            <p className="text-xs text-darkGray">
              🔒 Vos données sont sécurisées • Pas de spam
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}