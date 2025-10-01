'use client';

import { useState } from 'react';
import type { ContactFormData } from '../../types/forms';
import { AVAILABLE_SERVICES } from '../../types/forms';
import type { ChangeEventHandler, FormEventHandler } from '../../types/events';

export default function ContactForm() {
  const [data, setData] = useState<ContactFormData>({
    name: '',
    email: '',
    phone: '',
    service: '',
    message: '',
    want3D: false,
    honeypot: '',
  });
  const [consent, setConsent] = useState<boolean>(false);
  const [sent, setSent] = useState<boolean>(false);
  const [error, setError] = useState<string>('');
  const [loading, setLoading] = useState<boolean>(false);

  const handleChange: ChangeEventHandler<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement> = (e) => {
    const { name, value, type } = e.target;
    const checked = type === 'checkbox' ? (e.target as HTMLInputElement).checked : undefined;
    
    setData(prev => ({
      ...prev,
      [name]: type === 'checkbox' ? checked : value,
    }));
  };

  const handleSubmit: FormEventHandler<HTMLFormElement> = async (e) => {
    e.preventDefault();
    
    // Protection honeypot
    if (data.honeypot) {
      setSent(true);
      return;
    }
    
    // Validation
    if (!data.name || !data.email || !data.message) {
      setError('Veuillez remplir tous les champs obligatoires (nom, email, message).');
      return;
    }
    
    if (!consent) {
      setError('Vous devez accepter la politique de confidentialité pour continuer.');
      return;
    }
    
    setError('');
    setLoading(true);

    try {
      // Envoi vers l'API PHP
      const formData = new FormData();
      formData.append('nom', data.name);
      formData.append('email', data.email);
      formData.append('telephone', data.phone);
      formData.append('service', data.service);
      formData.append('message', data.message);
      formData.append('projection_3d', data.want3D ? '1' : '');
      formData.append('_gotcha', data.honeypot);
      if (consent) {
        formData.append('consent', '1');
      }

      const response = await fetch('/api/devis.php', {
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

  if (sent) {
    return (
      <div className="rounded-lg border border-brand-orange-600 bg-brand-orange-500/10 p-6">
        <p className="font-medium text-brand-orange-700">
          Merci pour votre message ! Nous vous répondrons dans les plus brefs
          délais.
        </p>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="form-glass space-y-4" noValidate>
      {error && (
        <div className="rounded-lg border border-red-200 bg-red-50 p-4">
          <p className="text-sm text-red-800">{error}</p>
        </div>
      )}

      <div>
        <label htmlFor="contact-name" className="form-label">
          Nom *
        </label>
        <input
          type="text"
          id="contact-name"
          name="name"
          value={data.name}
          onChange={handleChange}
          required
          className="form-input"
        />
      </div>

      <div>
        <label htmlFor="contact-email" className="form-label">
          Email *
        </label>
        <input
          type="email"
          id="contact-email"
          name="email"
          value={data.email}
          onChange={handleChange}
          required
          className="form-input"
        />
      </div>

      <div>
        <label htmlFor="contact-phone" className="form-label">
          Téléphone
        </label>
        <input
          type="tel"
          id="contact-phone"
          name="phone"
          value={data.phone}
          onChange={handleChange}
          className="form-input"
        />
      </div>

      <div>
        <label htmlFor="contact-service" className="form-label">
          Service souhaité
        </label>
        <select
          id="contact-service"
          name="service"
          value={data.service}
          onChange={handleChange}
          className="form-input bg-white text-gray-900"
        >
          <option value="" className="text-gray-500">
            Sélectionnez un service
          </option>
          {AVAILABLE_SERVICES.map((service) => (
            <option key={service} value={service} className="text-gray-900">
              {service}
            </option>
          ))}
        </select>
      </div>

      <div>
        <label htmlFor="contact-message" className="form-label">
          Message *
        </label>
        <textarea
          id="contact-message"
          name="message"
          value={data.message}
          onChange={handleChange}
          rows={5}
          required
          className="form-input resize-none"
          placeholder="Décrivez votre projet..."
        />
      </div>

      <div className="flex items-start space-x-3">
        <input
          type="checkbox"
          id="contact-want3d"
          name="want3D"
          checked={data.want3D}
          onChange={handleChange}
          className="mt-1 size-4 rounded border-lightGray text-primary focus:ring-primary"
        />
        <label
          htmlFor="contact-want3d"
          className="text-sm leading-5 text-darkGray"
        >
          Je souhaite une projection 3D de mon projet (nécessite l'envoi de
          plans)
        </label>
      </div>

      {/* RGPD - Consentement obligatoire */}
      <div className="flex items-start space-x-3">
        <input
          type="checkbox"
          id="contact-consent"
          name="consent"
          checked={consent}
          onChange={(e) => setConsent(e.target.checked)}
          required
          aria-required="true"
          className="mt-1 size-4 rounded border-lightGray text-brand-orange-600 focus:ring-brand-orange-600"
        />
        <label htmlFor="contact-consent" className="text-sm leading-5 text-darkGray">
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

      {/* Honeypot */}
      <div className="hidden" aria-hidden="true">
        <input
          name="_gotcha"
          value={data.honeypot}
          onChange={handleChange}
          tabIndex={-1}
          autoComplete="off"
        />
      </div>

      <button 
        type="submit" 
        disabled={loading}
        className="button-accent w-full font-semibold disabled:cursor-not-allowed disabled:opacity-50"
      >
        {loading ? (
          <>
            <span className="inline-block size-4 animate-spin rounded-full border-2 border-white border-t-transparent mr-2"></span>
            Envoi en cours...
          </>
        ) : (
          'Envoyer le message'
        )}
      </button>
    </form>
  );
}
