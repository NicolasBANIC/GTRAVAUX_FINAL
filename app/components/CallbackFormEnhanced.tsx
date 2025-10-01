'use client';

import { useState } from 'react';
import type { CallbackFormData } from '../../types/forms';
import { CALLBACK_TIME_SLOTS } from '../../types/forms';
import type { ChangeEventHandler, FormEventHandler } from '../../types/events';

interface CallbackFormEnhancedProps {
  className?: string;
}

/**
 * Formulaire de rappel amélioré avec champ date souhaitée
 * - Envoi via API PHP (Hostinger SMTP)
 * - RGPD compliant avec consentement obligatoire
 * - Protection anti-bot (honeypot)
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
  const [consent, setConsent] = useState<boolean>(false);
  
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

    if (!consent) {
      return 'Vous devez accepter la politique de confidentialité pour continuer.';
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
    e.preventDefault();
    e.stopPropagation();

    // Protection honeypot
    if (data.honeypot) {
      // Bot détecté, on fait semblant que tout va bien
      setSent(true);
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
      // Envoi vers l'API PHP
      const formData = new FormData();
      formData.append('nom', data.name);
      formData.append('telephone', data.phone);
      formData.append('email', ''); // Optionnel pour ce formulaire
      formData.append('message', ''); // Optionnel pour ce formulaire
      formData.append('preferredDate', data.preferredDate);
      formData.append('timeSlot', data.timeSlot);
      formData.append('_gotcha', data.honeypot);
      if (consent) {
        formData.append('consent', '1');
      }

      const response = await fetch('/api/contact.php', {
        method: 'POST',
        body: formData,
      });

      const result = await response.json();

      if (!response.ok || !result.ok) {
        throw new Error(result.error || 'Erreur lors de l\'envoi');
      }
      
      setSent(true);
    } catch (err) {
      const errorMessage = err instanceof Error ? err.message : 'Une erreur est survenue. Veuillez réessayer.';
      setError(errorMessage);
    } finally {
      setLoading(false);
    }
  };



  // Message de confirmation après envoi réussi
  if (sent) {
    return (
      <div className={`w-full rounded-lg bg-white/95 p-4 shadow-xl sm:p-6 ${className}`}>
        <div className="text-center">
          <div className="mb-4 text-4xl text-brand-orange-600">✓</div>
          <h3 className="mb-3 text-lg font-bold text-darkGray sm:text-xl">
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
            <p className="mt-4 text-xs text-gray-600">
              Vous recevrez une confirmation par SMS au {data.phone}.
            </p>
          </div>
        </div>
      </div>
    );
  }

  // Formulaire principal
  return (
    <div className={`w-full rounded-lg bg-white/95 p-4 shadow-xl sm:p-6 ${className}`}>
      <div className="mb-4 text-center">
        <h3 className="mb-2 text-lg font-bold text-darkGray sm:text-xl">
          Nous vous rappelons !
        </h3>
        <p className="text-sm text-darkGray">
          Remplissez ce formulaire pour être rappelé·e rapidement
        </p>
      </div>

      <form onSubmit={handleSubmit} className="w-full" noValidate>
        {error && (
          <div className="mb-4 rounded-md border border-red-200 bg-red-50 p-3">
            <p className="text-sm font-medium text-red-600">{error}</p>
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
              className="w-full rounded-md border border-lightGray px-3 py-2 transition-colors focus:border-transparent focus:ring-2 focus:ring-brand-orange-600 sm:px-4"
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
              className="w-full rounded-md border border-lightGray px-3 py-2 transition-colors focus:border-transparent focus:ring-2 focus:ring-brand-orange-600 sm:px-4"
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
              className="w-full rounded-md border border-lightGray px-3 py-2 transition-colors focus:border-transparent focus:ring-2 focus:ring-brand-orange-600 sm:px-4"
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
              className="w-full rounded-md border border-lightGray bg-white px-3 py-2 transition-colors focus:border-transparent focus:ring-2 focus:ring-brand-orange-600 sm:px-4"
            >
              <option value="">Choisir un créneau</option>
              {CALLBACK_TIME_SLOTS.map((slot) => (
                <option key={slot} value={slot}>
                  {slot}
                </option>
              ))}
            </select>
          </div>

          {/* RGPD - Consentement obligatoire */}
          <div className="flex items-start space-x-3">
            <input
              type="checkbox"
              id="callback-consent"
              name="consent"
              checked={consent}
              onChange={(e) => setConsent(e.target.checked)}
              required
              aria-required="true"
              className="mt-1 size-4 rounded border-lightGray text-brand-orange-600 focus:ring-brand-orange-600"
            />
            <label htmlFor="callback-consent" className="text-sm leading-5 text-darkGray">
              J'accepte que mes informations soient utilisées pour me recontacter{' '}
              <a 
                href="/confidentialite/" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-brand-orange-600 underline hover:text-brand-orange-700"
              >
                (voir Politique de confidentialité)
              </a>
              . *
            </label>
          </div>

          {/* Honeypot (protection anti-spam) */}
          <div className="hidden" aria-hidden="true">
            <input
              name="_gotcha"
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
            className="btn btn-primary w-full focus:outline-none focus:ring-2 focus:ring-brand-orange-700 focus:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
            aria-label={loading ? "Envoi en cours..." : "Demander un rappel"}
          >
            {loading ? (
              <>
                <div className="size-4 animate-spin rounded-full border-2 border-white border-t-transparent"></div>
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