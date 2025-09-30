'use client';

import { useState } from 'react';

export default function SimpleCallbackForm() {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    preferredDate: '',
    timeSlot: ''
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
    alert('Form submitted successfully!');
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  return (
    <div className="w-full rounded-lg bg-white/95 p-4 shadow-xl backdrop-blur-sm sm:p-6">
      <div className="mb-4 text-center">
        <h3 className="mb-2 text-lg font-bold text-darkGray sm:text-xl">
          Nous vous rappelons !
        </h3>
        <p className="text-sm text-darkGray">
          Remplissez ce formulaire pour être rappelé·e rapidement
        </p>
      </div>

      <form onSubmit={handleSubmit} className="w-full">
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
              value={formData.name}
              onChange={handleChange}
              placeholder="Votre nom complet"
              required
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
              value={formData.phone}
              onChange={handleChange}
              placeholder="06 12 34 56 78"
              required
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
              value={formData.preferredDate}
              onChange={handleChange}
              required
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
              value={formData.timeSlot}
              onChange={handleChange}
              required
              className="w-full rounded-md border border-lightGray bg-white px-3 py-2 transition-colors focus:border-transparent focus:ring-2 focus:ring-brand-orange-600 sm:px-4"
            >
              <option value="">Choisir un créneau</option>
              <option value="Matin (8h-12h)">Matin (8h-12h)</option>
              <option value="Après-midi (12h-18h)">Après-midi (12h-18h)</option>
              <option value="Soirée (18h-20h)">Soirée (18h-20h)</option>
            </select>
          </div>

          {/* Bouton de soumission */}
          <button
            type="submit"
            className="btn btn-primary w-full focus:outline-none focus:ring-2 focus:ring-brand-orange-700 focus:ring-offset-2"
          >
            Demander un rappel
          </button>
        </div>
      </form>
    </div>
  );
}