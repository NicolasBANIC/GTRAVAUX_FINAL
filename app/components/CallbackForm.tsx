'use client';

import { useState } from 'react';
import type { ContactApiResponse } from '../../types/api';
import type { CallbackFormData } from '../../types/forms';
import { CALLBACK_TIME_SLOTS } from '../../types/forms';
import type { ChangeEventHandler, FormEventHandler } from '../../types/events';

/**
 * Formulaire de rappel rapide. Permet de récupérer rapidement le nom,
 * le numéro de téléphone et le service souhaité. Empêche le spam via un champ
 * caché (honeypot).
 */
export default function CallbackForm() {
  const [data, setData] = useState<CallbackFormData>({
    name: '',
    phone: '',
    timeSlot: '',
    honeypot: '',
  });
  const [sent, setSent] = useState<boolean>(false);
  const [error, setError] = useState<string>('');
  const [loading, setLoading] = useState<boolean>(false);

  const handleChange: ChangeEventHandler<HTMLInputElement | HTMLSelectElement> = (e) => {
    const { name, value } = e.target;
    setData(prev => ({ ...prev, [name]: value }));
    // Clear error when user starts typing
    if (error) setError('');
  };

  const handleSubmit: FormEventHandler<HTMLFormElement> = async (e) => {
    e.preventDefault();

    // Honeypot check
    if (data.honeypot) return;

    // Basic validation
    if (!data.name?.trim() || !data.phone?.trim()) {
      setError('Veuillez saisir votre nom et votre numéro de téléphone.');
      return;
    }

    setLoading(true);
    setError('');

    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(data),
      });

      const result = (await response.json()) as ContactApiResponse;

      if (response.ok && result.success) {
        setSent(true);
      } else {
        setError(
          result.message || 'Une erreur est survenue. Veuillez réessayer.'
        );
      }
    } catch (_err) {
      setError(
        'Erreur de connexion. Veuillez vérifier votre connexion internet et réessayer.'
      );
    } finally {
      setLoading(false);
    }
  };

  if (sent) {
    return (
      <div className="rounded-lg border-2 border-green/20 bg-green/10 p-6 text-center">
        <div className="mb-2 text-2xl text-green">✓</div>
        <h3 className="mb-2 text-lg font-bold text-green">Demande envoyée !</h3>
        <p className="font-medium text-green">
          Merci ! Nous vous rappellerons dans les plus brefs délais.
        </p>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="form-glass space-y-4" noValidate>
      {error && <p className="text-sm text-red-500">{error}</p>}
      <div>
        <label htmlFor="callback-name" className="form-label">
          Nom *
        </label>
        <input
          type="text"
          id="callback-name"
          name="name"
          value={data.name}
          onChange={handleChange}
          required
          className="form-input"
        />
      </div>
      <div>
        <label htmlFor="callback-phone" className="form-label">
          Téléphone *
        </label>
        <input
          type="tel"
          id="callback-phone"
          name="phone"
          value={data.phone}
          onChange={handleChange}
          required
          className="form-input"
        />
      </div>
      <div>
        <label htmlFor="callback-timeslot" className="form-label">
          Créneau préféré pour le rappel
        </label>
        <select
          id="callback-timeslot"
          name="timeSlot"
          value={data.timeSlot}
          onChange={handleChange}
          className="form-input bg-white text-gray-900"
        >
          <option value="" className="text-gray-500">
            Choisissez un créneau
          </option>
          {CALLBACK_TIME_SLOTS.map((slot) => (
            <option key={slot} value={slot} className="text-gray-900">
              {slot}
            </option>
          ))}
        </select>
      </div>
      {/* Honeypot */}
      <div className="hidden">
        <input name="honeypot" value={data.honeypot} onChange={handleChange} />
      </div>
      <button
        type="submit"
        disabled={loading}
        className="button-accent flex w-full items-center justify-center gap-2 disabled:cursor-not-allowed disabled:opacity-50"
      >
        {loading ? (
          <>
            <div className="size-4 animate-spin rounded-full border-2 border-white border-t-transparent"></div>
            Envoi...
          </>
        ) : (
          'Être rappelé(e)'
        )}
      </button>
    </form>
  );
}
