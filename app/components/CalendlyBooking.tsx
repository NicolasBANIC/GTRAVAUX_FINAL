'use client';

import { useState } from 'react';
import {
  FaCalendarAlt,
  FaClock,
  FaMapMarkerAlt,
  FaPhone,
} from 'react-icons/fa';

interface CalendlyBookingProps {
  compact?: boolean;
  service?: string;
}

export default function CalendlyBooking({
  compact = false,
  service,
}: CalendlyBookingProps) {
  const [selectedSlot, setSelectedSlot] = useState<string | null>(null);
  const [bookingStep, setBookingStep] = useState<'slots' | 'form' | 'success'>(
    'slots'
  );
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    address: '',
    description: '',
  });

  // Créneaux disponibles (simulation)
  const availableSlots = [
    { date: '2025-01-22', time: '09:00', label: 'Mer 22 Jan - 9h00' },
    { date: '2025-01-22', time: '14:00', label: 'Mer 22 Jan - 14h00' },
    { date: '2025-01-23', time: '10:30', label: 'Jeu 23 Jan - 10h30' },
    { date: '2025-01-23', time: '15:00', label: 'Jeu 23 Jan - 15h00' },
    { date: '2025-01-24', time: '08:30', label: 'Ven 24 Jan - 8h30' },
    { date: '2025-01-24', time: '16:00', label: 'Ven 24 Jan - 16h00' },
  ];

  const handleSlotSelect = (slotId: string) => {
    setSelectedSlot(slotId);
    setBookingStep('form');
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    // Simulation envoi
    await new Promise(resolve => setTimeout(resolve, 1000));

    setBookingStep('success');

    // Dans la vraie vie, envoyer vers API
    console.log('Booking data:', { selectedSlot, formData, service });
  };

  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  if (compact) {
    return (
      <div className="rounded-lg border bg-white p-4 shadow">
        <div className="mb-3 flex items-center space-x-3">
          <FaCalendarAlt className="text-primary" />
          <h3 className="font-semibold">Prendre rendez-vous</h3>
        </div>
        <p className="mb-3 text-sm text-darkGray">
          Diagnostic gratuit à domicile
        </p>
        <button
          className="btn btn-primary w-full text-sm"
          onClick={() => window.open('#booking-modal', '_self')}
        >
          Choisir un créneau
        </button>
      </div>
    );
  }

  return (
    <div className="mx-auto max-w-2xl rounded-lg border bg-white shadow-lg">
      {/* Header */}
      <div className="rounded-t-lg section-dark p-6">
        <div className="flex items-center space-x-3">
          <FaCalendarAlt size={24} />
          <div>
            <h2 className="text-xl font-bold">Réservation en ligne</h2>
            <p className="text-sm opacity-90">
              {service
                ? `Service : ${service}`
                : 'Diagnostic gratuit à domicile'}
            </p>
          </div>
        </div>
      </div>

      <div className="p-6">
        {/* Étape 1: Sélection créneau */}
        {bookingStep === 'slots' && (
          <div>
            <h3 className="mb-4 text-lg font-semibold">
              Choisissez votre créneau
            </h3>
            <div className="grid grid-cols-1 gap-3 sm:grid-cols-2">
              {availableSlots.map(slot => (
                <button
                  key={`${slot.date}-${slot.time}`}
                  onClick={() => handleSlotSelect(`${slot.date}-${slot.time}`)}
                  className="rounded-lg border p-4 text-left transition-colors hover:border-brand-orange-600 hover:bg-brand-orange-50"
                >
                  <div className="flex items-center space-x-3">
                    <FaClock className="text-brand-orange-600" />
                    <div>
                      <div className="font-medium">{slot.label}</div>
                      <div className="text-sm text-darkGray">Disponible</div>
                    </div>
                  </div>
                </button>
              ))}
            </div>

            <div className="mt-6 rounded-lg bg-lightGray p-4">
              <div className="flex items-start space-x-3">
                <FaMapMarkerAlt className="mt-1 text-brand-orange-600" />
                <div className="text-sm">
                  <p className="mb-1 font-medium">Zone d'intervention</p>
                  <p className="text-darkGray">
                    Strasbourg et environs (30km) • Colmar • Mulhouse
                    <br />
                    <strong>Déplacement gratuit</strong> pour diagnostic
                  </p>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* Étape 2: Formulaire */}
        {bookingStep === 'form' && (
          <div>
            <div className="mb-4 flex items-center justify-between">
              <h3 className="text-lg font-semibold">Vos coordonnées</h3>
              <button
                onClick={() => setBookingStep('slots')}
                className="text-sm text-primary hover:underline"
              >
                ← Modifier le créneau
              </button>
            </div>

            <div className="mb-6 rounded-lg border border-green/20 bg-green/10 p-3">
              <div className="flex items-center space-x-2">
                <FaClock className="text-green" />
                <span className="text-sm font-medium text-green">
                  Créneau sélectionné :{' '}
                  {
                    availableSlots.find(
                      s => `${s.date}-${s.time}` === selectedSlot
                    )?.label
                  }
                </span>
              </div>
            </div>

            <form onSubmit={handleSubmit} className="space-y-4">
              <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
                <div>
                  <label htmlFor="booking-name" className="form-label">
                    Nom complet *
                  </label>
                  <input
                    id="booking-name"
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleInputChange}
                    className="form-input"
                    required
                  />
                </div>
                <div>
                  <label htmlFor="booking-phone" className="form-label">
                    Téléphone *
                  </label>
                  <input
                    id="booking-phone"
                    type="tel"
                    name="phone"
                    value={formData.phone}
                    onChange={handleInputChange}
                    className="form-input"
                    required
                  />
                </div>
              </div>

              <div>
                <label htmlFor="booking-email" className="form-label">
                  Email
                </label>
                <input
                  id="booking-email"
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleInputChange}
                  className="form-input"
                />
              </div>

              <div>
                <label htmlFor="booking-address" className="form-label">
                  Adresse de l'intervention *
                </label>
                <input
                  id="booking-address"
                  type="text"
                  name="address"
                  value={formData.address}
                  onChange={handleInputChange}
                  className="form-input"
                  placeholder="Adresse complète pour le diagnostic"
                  required
                />
              </div>

              <div>
                <label htmlFor="booking-description" className="form-label">
                  Description du projet
                </label>
                <textarea
                  id="booking-description"
                  name="description"
                  value={formData.description}
                  onChange={handleInputChange}
                  className="form-input"
                  rows={3}
                  placeholder="Décrivez brièvement votre projet ou problème..."
                ></textarea>
              </div>

              <button type="submit" className="button-primary w-full">
                Confirmer le rendez-vous
              </button>
            </form>
          </div>
        )}

        {/* Étape 3: Succès */}
        {bookingStep === 'success' && (
          <div className="text-center">
            <div className="mb-4 text-4xl text-green">✓</div>
            <h3 className="mb-4 text-xl font-bold text-green">
              Rendez-vous confirmé !
            </h3>

            <div className="mb-6 rounded-lg bg-lightGray p-4 text-left">
              <h4 className="mb-2 font-semibold">Récapitulatif :</h4>
              <p className="text-sm text-darkGray">
                <strong>Date :</strong>{' '}
                {
                  availableSlots.find(
                    s => `${s.date}-${s.time}` === selectedSlot
                  )?.label
                }
                <br />
                <strong>Contact :</strong> {formData.name} - {formData.phone}
                <br />
                <strong>Adresse :</strong> {formData.address}
                {service && (
                  <>
                    <br />
                    <strong>Service :</strong> {service}
                  </>
                )}
              </p>
            </div>

            <div className="space-y-3">
              <div className="flex items-center justify-center space-x-2 text-sm text-darkGray">
                <FaPhone className="text-primary" />
                <span>Un SMS de confirmation vous sera envoyé</span>
              </div>

              <p className="text-sm text-darkGray">
                Notre technicien vous contactera{' '}
                <strong>30 minutes avant</strong> le rendez-vous
              </p>

              <button
                onClick={() => {
                  setBookingStep('slots');
                  setSelectedSlot(null);
                  setFormData({
                    name: '',
                    phone: '',
                    email: '',
                    address: '',
                    description: '',
                  });
                }}
                className="button-secondary"
              >
                Prendre un autre rendez-vous
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
