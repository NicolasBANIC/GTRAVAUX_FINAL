"use client";

import { useState } from 'react';

interface CallbackFormData {
  name: string;
  phone: string;
  service: string;
  honeypot: string;
}

/**
 * Formulaire de rappel rapide. Permet de récupérer rapidement le nom,
 * le numéro de téléphone et le service souhaité. Empêche le spam via un champ
 * caché (honeypot).
 */
export default function CallbackForm() {
  const [data, setData] = useState<CallbackFormData>({ name: '', phone: '', service: '', honeypot: '' });
  const [sent, setSent] = useState(false);
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setData((prev) => ({ ...prev, [name]: value }));
    // Clear error when user starts typing
    if (error) setError('');
  };

  const handleSubmit = async (e: React.FormEvent) => {
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

      const result = await response.json();

      if (response.ok && result.success) {
        setSent(true);
      } else {
        setError(result.message || 'Une erreur est survenue. Veuillez réessayer.');
      }
    } catch (err) {
      setError('Erreur de connexion. Veuillez vérifier votre connexion internet et réessayer.');
    } finally {
      setLoading(false);
    }
  };

  if (sent) {
    return (
      <div className="bg-green/10 border-2 border-green/20 rounded-lg p-6 text-center">
        <div className="text-green text-2xl mb-2">✓</div>
        <h3 className="text-green font-bold text-lg mb-2">Demande envoyée !</h3>
        <p className="text-green font-medium">
          Merci ! Nous vous rappellerons dans les plus brefs délais.
        </p>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="form-glass space-y-4" noValidate>
      {error && <p className="text-red-500 text-sm">{error}</p>}
      <div>
        <label htmlFor="callback-name" className="form-label">Nom *</label>
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
        <label htmlFor="callback-phone" className="form-label">Téléphone *</label>
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
        <label htmlFor="callback-service" className="form-label">Service souhaité</label>
        <select
          id="callback-service"
          name="service"
          value={data.service}
          onChange={handleChange}
          className="form-input text-gray-900 bg-white"
        >
          <option value="" className="text-gray-500">Choisissez un service</option>
          <option value="Maçonnerie légère" className="text-gray-900">Maçonnerie légère</option>
          <option value="Électricité & plomberie" className="text-gray-900">Électricité & plomberie</option>
          <option value="Isolation intérieure" className="text-gray-900">Isolation intérieure</option>
          <option value="Plâtrerie & placo" className="text-gray-900">Plâtrerie & placo</option>
          <option value="Pose de sol" className="text-gray-900">Pose de sol</option>
          <option value="Peinture & finitions" className="text-gray-900">Peinture & finitions</option>
          <option value="Autres" className="text-gray-900">Autres</option>
        </select>
      </div>
      {/* Honeypot */}
      <div className="hidden">
        <input name="honeypot" value={data.honeypot} onChange={handleChange} />
      </div>
      <button 
        type="submit" 
        disabled={loading}
        className="button-accent disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-2 w-full"
      >
        {loading ? (
          <>
            <div className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
            Envoi...
          </>
        ) : (
          'Être rappelé(e)'
        )}
      </button>
    </form>
  );
}
