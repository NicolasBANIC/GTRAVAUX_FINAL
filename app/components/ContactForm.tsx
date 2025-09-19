"use client";

import { useState } from 'react';

interface ContactFormData {
  name: string;
  email: string;
  phone: string;
  service: string;
  message: string;
  want3D: boolean;
  honeypot: string;
}

export default function ContactForm() {
  const [data, setData] = useState<ContactFormData>({
    name: '',
    email: '',
    phone: '',
    service: '',
    message: '',
    want3D: false,
    honeypot: ''
  });
  const [sent, setSent] = useState(false);
  const [error, setError] = useState('');

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    const { name, value, type } = e.target;
    const checked = type === 'checkbox' ? (e.target as HTMLInputElement).checked : undefined;
    setData((prev) => ({ 
      ...prev, 
      [name]: type === 'checkbox' ? checked : value 
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
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
      <div className="bg-green-50 border border-green-200 rounded-lg p-6">
        <p className="text-green-800 font-medium">
          Merci pour votre message ! Nous vous répondrons dans les plus brefs délais.
        </p>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="form-glass space-y-4" noValidate>
      {error && (
        <div className="bg-red-50 border border-red-200 rounded-lg p-4">
          <p className="text-red-800 text-sm">{error}</p>
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
          className="form-input text-gray-900 bg-white"
        >
          <option value="" className="text-gray-500">Sélectionnez un service</option>
          <option value="Maçonnerie légère" className="text-gray-900">Maçonnerie légère</option>
          <option value="Électricité & plomberie" className="text-gray-900">Électricité & plomberie</option>
          <option value="Isolation intérieure" className="text-gray-900">Isolation intérieure</option>
          <option value="Plâtrerie & placo" className="text-gray-900">Plâtrerie & placo</option>
          <option value="Pose de sol" className="text-gray-900">Pose de sol</option>
          <option value="Peinture & finitions" className="text-gray-900">Peinture & finitions</option>
          <option value="Rénovation complète" className="text-gray-900">Rénovation complète</option>
          <option value="Après sinistre" className="text-gray-900">Après sinistre</option>
          <option value="Autres" className="text-gray-900">Autres</option>
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
          className="mt-1 h-4 w-4 text-primary focus:ring-primary border-lightGray rounded"
        />
        <label htmlFor="contact-want3d" className="text-sm text-darkGray leading-5">
          Je souhaite une projection 3D de mon projet (nécessite l'envoi de plans)
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

      <button
        type="submit"
        className="w-full button-accent font-semibold"
      >
        Envoyer le message
      </button>
    </form>
  );
}
