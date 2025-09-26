'use client';

import { useState } from 'react';
import { FaCalculator, FaHome, FaPaintBrush, FaTools } from 'react-icons/fa';

interface QuoteData {
  projectType: string;
  surface: number;
  rooms: number;
  services: string[];
  urgency: string;
  budget: string;
}

export default function QuoteCalculator() {
  const [step, setStep] = useState(1);
  const [quoteData, setQuoteData] = useState<QuoteData>({
    projectType: '',
    surface: 0,
    rooms: 0,
    services: [],
    urgency: '',
    budget: '',
  });
  const [estimatedPrice, setEstimatedPrice] = useState<number | null>(null);

  const projectTypes = [
    {
      id: 'renovation-complete',
      label: 'Rénovation complète',
      multiplier: 1.5,
    },
    {
      id: 'renovation-partielle',
      label: 'Rénovation partielle',
      multiplier: 1.0,
    },
    { id: 'apres-sinistre', label: 'Après sinistre', multiplier: 1.2 },
    { id: 'amenagement', label: 'Aménagement', multiplier: 0.8 },
  ];

  const services = [
    {
      id: 'peinture',
      label: 'Peinture & finitions',
      basePrice: 25,
      icon: FaPaintBrush,
    },
    { id: 'placo', label: 'Plâtrerie & placo', basePrice: 35, icon: FaTools },
    { id: 'sol', label: 'Pose de sol', basePrice: 40, icon: FaHome },
    { id: 'electricite', label: 'Électricité', basePrice: 50, icon: FaTools },
    { id: 'plomberie', label: 'Plomberie', basePrice: 45, icon: FaTools },
    { id: 'isolation', label: 'Isolation', basePrice: 30, icon: FaHome },
    {
      id: 'maconnerie',
      label: 'Maçonnerie légère',
      basePrice: 60,
      icon: FaTools,
    },
  ];

  const urgencyMultipliers = {
    normal: 1.0,
    urgent: 1.3,
    'tres-urgent': 1.6,
  };

  const calculateEstimate = () => {
    const projectMultiplier =
      projectTypes.find(p => p.id === quoteData.projectType)?.multiplier || 1;
    const selectedServices = services.filter(s =>
      quoteData.services.includes(s.id)
    );
    const servicesCost = selectedServices.reduce(
      (sum, service) => sum + service.basePrice,
      0
    );
    const urgencyMultiplier =
      urgencyMultipliers[
        quoteData.urgency as keyof typeof urgencyMultipliers
      ] || 1;

    const basePrice =
      servicesCost * quoteData.surface * projectMultiplier * urgencyMultiplier;
    setEstimatedPrice(Math.round(basePrice));
  };

  const handleServiceToggle = (serviceId: string) => {
    setQuoteData(prev => ({
      ...prev,
      services: prev.services.includes(serviceId)
        ? prev.services.filter(s => s !== serviceId)
        : [...prev.services, serviceId],
    }));
  };

  const nextStep = () => {
    if (step < 4) setStep(step + 1);
    else calculateEstimate();
  };

  const prevStep = () => {
    if (step > 1) setStep(step - 1);
  };

  return (
    <div className="mx-auto max-w-2xl rounded-lg bg-white p-6 shadow-lg">
      <div className="mb-6 flex items-center">
        <FaCalculator className="mr-3 text-primary" size={24} />
        <h3 className="text-2xl font-bold">Calculateur de devis</h3>
      </div>

      {/* Progress bar */}
      <div className="mb-8">
        <div className="mb-2 flex justify-between text-sm text-darkGray">
          <span>Étape {step} sur 4</span>
          <span>{Math.round((step / 4) * 100)}%</span>
        </div>
        <div className="h-2 w-full rounded-full bg-lightGray">
          <div
            className="h-2 rounded-full bg-primary transition-all duration-300"
            style={{ width: `${(step / 4) * 100}%` }}
          ></div>
        </div>
      </div>

      {step === 1 && (
        <div>
          <h4 className="mb-4 text-lg font-semibold">Type de projet</h4>
          <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
            {projectTypes.map(type => (
              <button
                key={type.id}
                onClick={() =>
                  setQuoteData(prev => ({ ...prev, projectType: type.id }))
                }
                className={`rounded-lg border-2 p-4 text-left transition-all ${
                  quoteData.projectType === type.id
                    ? 'border-primary bg-primary/10'
                    : 'border-lightGray hover:border-primary/50'
                }`}
              >
                <div className="font-medium">{type.label}</div>
              </button>
            ))}
          </div>
        </div>
      )}

      {step === 2 && (
        <div>
          <h4 className="mb-4 text-lg font-semibold">
            Informations sur l'espace
          </h4>
          <div className="space-y-4">
            <div>
              <label
                htmlFor="surface-input"
                className="mb-2 block text-sm font-medium"
              >
                Surface (m²)
              </label>
              <input
                id="surface-input"
                type="number"
                value={quoteData.surface || ''}
                onChange={e =>
                  setQuoteData(prev => ({
                    ...prev,
                    surface: parseInt(e.target.value) || 0,
                  }))
                }
                className="w-full rounded-lg border border-lightGray p-3 focus:border-primary focus:outline-none"
                placeholder="Ex: 80"
              />
            </div>
            <div>
              <label
                htmlFor="rooms-input"
                className="mb-2 block text-sm font-medium"
              >
                Nombre de pièces
              </label>
              <input
                id="rooms-input"
                type="number"
                value={quoteData.rooms || ''}
                onChange={e =>
                  setQuoteData(prev => ({
                    ...prev,
                    rooms: parseInt(e.target.value) || 0,
                  }))
                }
                className="w-full rounded-lg border border-lightGray p-3 focus:border-primary focus:outline-none"
                placeholder="Ex: 4"
              />
            </div>
          </div>
        </div>
      )}

      {step === 3 && (
        <div>
          <h4 className="mb-4 text-lg font-semibold">Services souhaités</h4>
          <div className="grid grid-cols-1 gap-3 md:grid-cols-2">
            {services.map(service => {
              const Icon = service.icon;
              return (
                <button
                  key={service.id}
                  onClick={() => handleServiceToggle(service.id)}
                  className={`flex items-center rounded-lg border-2 p-3 text-left transition-all ${
                    quoteData.services.includes(service.id)
                      ? 'border-primary bg-primary/10'
                      : 'border-lightGray hover:border-primary/50'
                  }`}
                >
                  <Icon className="mr-3 text-primary" />
                  <div>
                    <div className="font-medium">{service.label}</div>
                    <div className="text-sm text-darkGray">
                      À partir de {service.basePrice}€/m²
                    </div>
                  </div>
                </button>
              );
            })}
          </div>
        </div>
      )}

      {step === 4 && (
        <div>
          <h4 className="mb-4 text-lg font-semibold">Urgence et budget</h4>
          <div className="space-y-4">
            <div>
              <label
                htmlFor="urgency-select"
                className="mb-2 block text-sm font-medium"
              >
                Délai souhaité
              </label>
              <select
                id="urgency-select"
                value={quoteData.urgency}
                onChange={e =>
                  setQuoteData(prev => ({ ...prev, urgency: e.target.value }))
                }
                className="w-full rounded-lg border border-lightGray p-3 focus:border-primary focus:outline-none"
              >
                <option value="">Sélectionnez un délai</option>
                <option value="normal">Dans les 2-3 mois</option>
                <option value="urgent">Dans le mois</option>
                <option value="tres-urgent">Urgent (sous 15 jours)</option>
              </select>
            </div>
            <div>
              <label
                htmlFor="budget-select"
                className="mb-2 block text-sm font-medium"
              >
                Budget approximatif
              </label>
              <select
                id="budget-select"
                value={quoteData.budget}
                onChange={e =>
                  setQuoteData(prev => ({ ...prev, budget: e.target.value }))
                }
                className="w-full rounded-lg border border-lightGray p-3 focus:border-primary focus:outline-none"
              >
                <option value="">Sélectionnez une fourchette</option>
                <option value="5000-15000">5 000€ - 15 000€</option>
                <option value="15000-30000">15 000€ - 30 000€</option>
                <option value="30000-50000">30 000€ - 50 000€</option>
                <option value="50000+">Plus de 50 000€</option>
              </select>
            </div>
          </div>
        </div>
      )}

      {estimatedPrice && (
        <div className="mt-6 rounded-lg border border-green bg-green/10 p-6">
          <h4 className="mb-2 text-lg font-semibold text-green">
            Estimation indicative
          </h4>
          <div className="mb-4 text-3xl font-bold text-green">
            {estimatedPrice.toLocaleString('fr-FR')}€
          </div>
          <p className="mb-4 text-sm text-darkGray">
            Cette estimation est indicative et basée sur les informations
            fournies. Un devis précis nécessite une visite sur site.
          </p>
          <button
            onClick={() => (window.location.href = '/contact')}
            className="rounded-lg bg-green px-6 py-3 font-medium text-white transition-colors hover:bg-green/90"
          >
            Demander un devis précis
          </button>
        </div>
      )}

      {/* Navigation buttons */}
      <div className="mt-8 flex justify-between">
        {step > 1 && !estimatedPrice && (
          <button
            onClick={prevStep}
            className="rounded-lg border border-primary px-6 py-3 text-primary transition-colors hover:bg-primary/10"
          >
            Précédent
          </button>
        )}
        {!estimatedPrice && (
          <button
            onClick={nextStep}
            disabled={
              (step === 1 && !quoteData.projectType) ||
              (step === 2 && (!quoteData.surface || !quoteData.rooms)) ||
              (step === 3 && quoteData.services.length === 0) ||
              (step === 4 && (!quoteData.urgency || !quoteData.budget))
            }
            className="ml-auto rounded-lg bg-primary px-6 py-3 text-white transition-colors hover:bg-primary/90 disabled:cursor-not-allowed disabled:opacity-50"
          >
            {step === 4 ? 'Calculer' : 'Suivant'}
          </button>
        )}
      </div>
    </div>
  );
}
