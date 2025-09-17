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
    <form onSubmit={handleSubmit} className="bg-white p-6 rounded-lg shadow space-y-4" noValidate>
      {error && <p className="text-red-500 text-sm">{error}</p>}
      <div>
        <label htmlFor="callback-name" className="block text-sm font-medium text-darkGray">Nom *</label>
        <input
          type="text"
          id="callback-name"
          name="name"
          value={data.name}
          onChange={handleChange}
          required
          className="mt-1 w-full border border-lightGray rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-primary"
        />
      </div>
      <div>
        <label htmlFor="callback-phone" className="block text-sm font-medium text-darkGray">Téléphone *</label>
        <input
          type="tel"
          id="callback-phone"
          name="phone"
          value={data.phone}
          onChange={handleChange}
          required
          className="mt-1 w-full border border-lightGray rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-primary"
        />
      </div>
      <div>
        <label htmlFor="callback-service" className="block text-sm font-medium text-darkGray">Service souhaité</label>
        <select
          id="callback-service"
          name="service"
          value={data.service}
          onChange={handleChange}
          className="mt-1 w-full border border-lightGray rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-primary text-gray-900 bg-white"
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
        className="bg-green text-white px-4 py-2 rounded-full hover:bg-green/90 transition-colors disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-2"
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
