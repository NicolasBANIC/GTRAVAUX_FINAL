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
  const [sent, setSent] = useState<boolean>(false);
  const [error, setError] = useState<string>('');

  const handleChange: ChangeEventHandler<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement> = (e) => {
    const { name, value, type } = e.target;
    const checked = type === 'checkbox' ? (e.target as HTMLInputElement).checked : undefined;
    
    setData(prev => ({
      ...prev,
      [name]: type === 'checkbox' ? checked : value,
    }));
  };

  const handleSubmit: FormEventHandler<HTMLFormElement> = (e) => {
    e.preventDefault();
    if (data.honeypot) return;
    if (!data.name || !data.email || !data.message) {
      setError('Veuillez remplir tous les champs obligatoires.');
      return;
    }
    setError('');
    // TODO: Envoyer les données à l'API
    setSent(true);
  };

  if (sent) {
    return (
      <div className="bg-green-50 border-green-200 rounded-lg border p-6">
        <p className="text-green-800 font-medium">
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

      {/* Honeypot */}
      <div className="hidden">
        <input
          name="honeypot"
          value={data.honeypot}
          onChange={handleChange}
          tabIndex={-1}
          autoComplete="off"
        />
      </div>

      <button type="submit" className="button-accent w-full font-semibold">
        Envoyer le message
      </button>
    </form>
  );
}
