'use client';

import { useState, useEffect } from 'react';
import type { CallbackFormData } from '../../types/forms';
import { CALLBACK_TIME_SLOTS } from '../../types/forms';
import type { ChangeEventHandler, FormEventHandler } from '../../types/events';

interface CallbackFormEnhancedProps {
  className?: string;
}

/**
 * Formulaire de rappel amélioré avec champ date souhaitée
 * - Empêche la redirection vers la page contact
 * - Affiche un message de confirmation après envoi simulé
 * - Prépare les points d'intégration pour l'envoi futur
 * - Validation côté client avec messages d'erreur clairs
 */
export default function CallbackFormEnhanced({ className = '' }: CallbackFormEnhancedProps) {
  const [data, setData] = useState<CallbackFormData>({
    name: '',
    phone: '',
    preferredDate: '',
    timeSlot: '',
    honeypot: '',
  });
  
  const [sent, setSent] = useState<boolean>(false);
  const [error, setError] = useState<string>('');
  const [loading, setLoading] = useState<boolean>(false);

  // Obtenir la date d'aujourd'hui au format YYYY-MM-DD pour l'attribut min
  const getTodayDate = () => {
    const today = new Date();
    return today.toISOString().split('T')[0];
  };

  const handleChange: ChangeEventHandler<HTMLInputElement | HTMLSelectElement> = (e) => {
    const { name, value } = e.target;
    setData(prev => ({ ...prev, [name]: value }));
    // Effacer l'erreur quand l'utilisateur commence à saisir
    if (error) setError('');
  };

  const validateForm = (): string | null => {
    if (!data.name?.trim()) {
      return 'Le nom est obligatoire.';
    }
    
    if (!data.phone?.trim()) {
      return 'Le numéro de téléphone est obligatoire.';
    }
    
    if (!data.preferredDate) {
      return 'La date souhaitée est obligatoire.';
    }
    
    if (!data.timeSlot) {
      return 'Le créneau horaire est obligatoire.';
    }

    // Vérifier que la date n'est pas dans le passé
    const selectedDate = new Date(data.preferredDate);
    const today = new Date();
    today.setHours(0, 0, 0, 0); // Reset time to start of day
    
    if (selectedDate < today) {
      return 'La date souhaitée ne peut pas être dans le passé.';
    }

    return null;
  };

  const handleSubmit: FormEventHandler<HTMLFormElement> = async (e) => {
    console.log('CallbackFormEnhanced: handleSubmit called');
    e.preventDefault();
    e.stopPropagation();

    // Protection honeypot
    if (data.honeypot) {
      console.log('CallbackFormEnhanced: Honeypot detected, blocking submission');
      return;
    }

    // Validation
    const validationError = validateForm();
    if (validationError) {
      setError(validationError);
      return;
    }

    setLoading(true);
    setError('');

    try {
      // PHASE ACTUELLE : Simulation d'envoi (pas d'envoi réel)
      // Point d'intégration futur : ici sera branché l'envoi réel
      await simulateSubmission(data);
      
      setSent(true);
    } catch (err) {
      setError('Une erreur est survenue. Veuillez réessayer.');
    } finally {
      setLoading(false);
    }
  };

  /**
   * Simulation d'envoi pour la phase actuelle
   * POINT D'INTÉGRATION FUTUR : Cette fonction sera remplacée par l'envoi réel
   * vers l'API qui gérera l'envoi d'emails/SMS/WhatsApp
   */
  const simulateSubmission = async (formData: CallbackFormData): Promise<void> => {
    // Simulation d'un délai réseau
    await new Promise(resolve => setTimeout(resolve, 1500));
    
    // Préparer les données qui seront envoyées dans la phase suivante
    const submissionData = {
      ...formData,
      submittedAt: new Date().toISOString(),
      source: 'homepage_hero_form',
      // Ces données seront utilisées pour l'envoi futur :
      // - Nom, téléphone, date souhaitée, créneau horaire
      // - Page d'origine et horodatage
      // - Prêt pour intégration email/SMS/WhatsApp
    };
    
    // En phase de développement, on peut logger les données
    console.log('Données préparées pour envoi futur:', submissionData);
    
    // Simulation de succès (95% de réussite)
    if (Math.random() < 0.05) {
      throw new Error('Simulation d\'erreur');
    }
  };



  // Message de confirmation après envoi réussi
  if (sent) {
    return (
      <div className={`w-full rounded-lg bg-white/95 p-4 sm:p-6 shadow-xl backdrop-blur-sm ${className}`}>
        <div className="text-center">
          <div className="mb-4 text-4xl text-green-600">✓</div>
          <h3 className="mb-3 text-lg sm:text-xl font-bold text-darkGray">
            Demande de rappel enregistrée !
          </h3>
          <div className="space-y-2 text-sm text-darkGray">
            <p className="font-medium">
              Merci <strong>{data.name}</strong> pour votre demande.
            </p>
            <p>
              Notre équipe vous contactera le <strong>{new Date(data.preferredDate).toLocaleDateString('fr-FR', { 
                weekday: 'long', 
                year: 'numeric', 
                month: 'long', 
                day: 'numeric' 
              })}</strong> pendant le créneau <strong>{data.timeSlot.toLowerCase()}</strong>.
            </p>
            <p className="text-xs text-gray-600 mt-4">
              Vous recevrez une confirmation par SMS au {data.phone}.
            </p>
          </div>
        </div>
      </div>
    );
  }

  // Formulaire principal
  return (
    <div className={`w-full rounded-lg bg-white/95 p-4 sm:p-6 shadow-xl backdrop-blur-sm ${className}`}>
      <div className="mb-4 text-center">
        <h3 className="mb-2 text-lg sm:text-xl font-bold text-darkGray">
          Nous vous rappelons !
        </h3>
        <p className="text-sm text-darkGray">
          Remplissez ce formulaire pour être rappelé·e rapidement
        </p>
      </div>

      <form onSubmit={handleSubmit} className="w-full" noValidate>
        {error && (
          <div className="mb-4 rounded-md bg-red-50 border border-red-200 p-3">
            <p className="text-sm text-red-600 font-medium">{error}</p>
          </div>
        )}

        <div className="space-y-4">
          {/* Nom */}
          <div className="space-y-2">
            <label htmlFor="callback-name" className="block text-sm font-medium text-darkGray">
              Nom et prénom *
            </label>
            <input
              type="text"
              id="callback-name"
              name="name"
              value={data.name}
              onChange={handleChange}
              placeholder="Votre nom complet"
              required
              aria-required="true"
              className="w-full px-3 sm:px-4 py-2 border border-lightGray rounded-md focus:ring-2 focus:ring-primary focus:border-transparent transition-colors"
            />
          </div>

          {/* Téléphone */}
          <div className="space-y-2">
            <label htmlFor="callback-phone" className="block text-sm font-medium text-darkGray">
              Téléphone *
            </label>
            <input
              type="tel"
              id="callback-phone"
              name="phone"
              value={data.phone}
              onChange={handleChange}
              placeholder="06 12 34 56 78"
              required
              aria-required="true"
              className="w-full px-3 sm:px-4 py-2 border border-lightGray rounded-md focus:ring-2 focus:ring-primary focus:border-transparent transition-colors"
            />
          </div>

          {/* Date souhaitée */}
          <div className="space-y-2">
            <label htmlFor="callback-date" className="block text-sm font-medium text-darkGray">
              Date souhaitée *
            </label>
            <input
              type="date"
              id="callback-date"
              name="preferredDate"
              value={data.preferredDate}
              onChange={handleChange}
              min={getTodayDate()}
              required
              aria-required="true"
              className="w-full px-3 sm:px-4 py-2 border border-lightGray rounded-md focus:ring-2 focus:ring-primary focus:border-transparent transition-colors"
            />
          </div>

          {/* Créneau horaire */}
          <div className="space-y-2">
            <label htmlFor="callback-timeslot" className="block text-sm font-medium text-darkGray">
              Créneau horaire *
            </label>
            <select
              id="callback-timeslot"
              name="timeSlot"
              value={data.timeSlot}
              onChange={handleChange}
              required
              aria-required="true"
              className="w-full px-3 sm:px-4 py-2 border border-lightGray rounded-md focus:ring-2 focus:ring-primary focus:border-transparent transition-colors bg-white"
            >
              <option value="">Choisir un créneau</option>
              {CALLBACK_TIME_SLOTS.map((slot) => (
                <option key={slot} value={slot}>
                  {slot}
                </option>
              ))}
            </select>
          </div>

          {/* Honeypot (protection anti-spam) */}
          <div className="hidden">
            <input
              name="honeypot"
              value={data.honeypot}
              onChange={handleChange}
              tabIndex={-1}
              autoComplete="off"
            />
          </div>

          {/* Bouton de soumission */}
          <button
            type="submit"
            disabled={loading}
            className="w-full bg-primary hover:bg-primary-800 text-white font-medium py-3 px-6 rounded-md transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2 focus:ring-offset-white/10 disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-2"
            aria-label={loading ? "Envoi en cours..." : "Demander un rappel"}
          >
            {loading ? (
              <>
                <div className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
                Envoi...
              </>
            ) : (
              'Demander un rappel'
            )}
          </button>
        </div>
      </form>
    </div>
  );
}