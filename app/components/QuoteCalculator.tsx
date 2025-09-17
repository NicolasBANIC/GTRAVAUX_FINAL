'use client';

import { useState } from 'react';
import { FaCalculator, FaHome, FaRuler, FaPaintBrush, FaTools } from 'react-icons/fa';

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
    budget: ''
  });
  const [estimatedPrice, setEstimatedPrice] = useState<number | null>(null);

  const projectTypes = [
    { id: 'renovation-complete', label: 'Rénovation complète', multiplier: 1.5 },
    { id: 'renovation-partielle', label: 'Rénovation partielle', multiplier: 1.0 },
    { id: 'apres-sinistre', label: 'Après sinistre', multiplier: 1.2 },
    { id: 'amenagement', label: 'Aménagement', multiplier: 0.8 }
  ];

  const services = [
    { id: 'peinture', label: 'Peinture & finitions', basePrice: 25, icon: FaPaintBrush },
    { id: 'placo', label: 'Plâtrerie & placo', basePrice: 35, icon: FaTools },
    { id: 'sol', label: 'Pose de sol', basePrice: 40, icon: FaHome },
    { id: 'electricite', label: 'Électricité', basePrice: 50, icon: FaTools },
    { id: 'plomberie', label: 'Plomberie', basePrice: 45, icon: FaTools },
    { id: 'isolation', label: 'Isolation', basePrice: 30, icon: FaHome },
    { id: 'maconnerie', label: 'Maçonnerie légère', basePrice: 60, icon: FaTools }
  ];

  const urgencyMultipliers = {
    'normal': 1.0,
    'urgent': 1.3,
    'tres-urgent': 1.6
  };

  const calculateEstimate = () => {
    const projectMultiplier = projectTypes.find(p => p.id === quoteData.projectType)?.multiplier || 1;
    const selectedServices = services.filter(s => quoteData.services.includes(s.id));
    const servicesCost = selectedServices.reduce((sum, service) => sum + service.basePrice, 0);
    const urgencyMultiplier = urgencyMultipliers[quoteData.urgency as keyof typeof urgencyMultipliers] || 1;
    
    const basePrice = servicesCost * quoteData.surface * projectMultiplier * urgencyMultiplier;
    setEstimatedPrice(Math.round(basePrice));
  };

  const handleServiceToggle = (serviceId: string) => {
    setQuoteData(prev => ({
      ...prev,
      services: prev.services.includes(serviceId)
        ? prev.services.filter(s => s !== serviceId)
        : [...prev.services, serviceId]
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
    <div className="bg-white rounded-lg shadow-lg p-6 max-w-2xl mx-auto">
      <div className="flex items-center mb-6">
        <FaCalculator className="text-primary mr-3" size={24} />
        <h3 className="text-2xl font-bold">Calculateur de devis</h3>
      </div>

      {/* Progress bar */}
      <div className="mb-8">
        <div className="flex justify-between text-sm text-darkGray mb-2">
          <span>Étape {step} sur 4</span>
          <span>{Math.round((step / 4) * 100)}%</span>
        </div>
        <div className="w-full bg-lightGray rounded-full h-2">
          <div 
            className="bg-primary h-2 rounded-full transition-all duration-300"
            style={{ width: `${(step / 4) * 100}%` }}
          ></div>
        </div>
      </div>

      {step === 1 && (
        <div>
          <h4 className="text-lg font-semibold mb-4">Type de projet</h4>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {projectTypes.map(type => (
              <button
                key={type.id}
                onClick={() => setQuoteData(prev => ({ ...prev, projectType: type.id }))}
                className={`p-4 border-2 rounded-lg text-left transition-all ${
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
          <h4 className="text-lg font-semibold mb-4">Informations sur l'espace</h4>
          <div className="space-y-4">
            <div>
              <label className="block text-sm font-medium mb-2">Surface (m²)</label>
              <input
                type="number"
                value={quoteData.surface || ''}
                onChange={(e) => setQuoteData(prev => ({ ...prev, surface: parseInt(e.target.value) || 0 }))}
                className="w-full p-3 border border-lightGray rounded-lg focus:border-primary focus:outline-none"
                placeholder="Ex: 80"
              />
            </div>
            <div>
              <label className="block text-sm font-medium mb-2">Nombre de pièces</label>
              <input
                type="number"
                value={quoteData.rooms || ''}
                onChange={(e) => setQuoteData(prev => ({ ...prev, rooms: parseInt(e.target.value) || 0 }))}
                className="w-full p-3 border border-lightGray rounded-lg focus:border-primary focus:outline-none"
                placeholder="Ex: 4"
              />
            </div>
          </div>
        </div>
      )}

      {step === 3 && (
        <div>
          <h4 className="text-lg font-semibold mb-4">Services souhaités</h4>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
            {services.map(service => {
              const Icon = service.icon;
              return (
                <button
                  key={service.id}
                  onClick={() => handleServiceToggle(service.id)}
                  className={`p-3 border-2 rounded-lg text-left transition-all flex items-center ${
                    quoteData.services.includes(service.id)
                      ? 'border-primary bg-primary/10'
                      : 'border-lightGray hover:border-primary/50'
                  }`}
                >
                  <Icon className="mr-3 text-primary" />
                  <div>
                    <div className="font-medium">{service.label}</div>
                    <div className="text-sm text-darkGray">À partir de {service.basePrice}€/m²</div>
                  </div>
                </button>
              );
            })}
          </div>
        </div>
      )}

      {step === 4 && (
        <div>
          <h4 className="text-lg font-semibold mb-4">Urgence et budget</h4>
          <div className="space-y-4">
            <div>
              <label className="block text-sm font-medium mb-2">Délai souhaité</label>
              <select
                value={quoteData.urgency}
                onChange={(e) => setQuoteData(prev => ({ ...prev, urgency: e.target.value }))}
                className="w-full p-3 border border-lightGray rounded-lg focus:border-primary focus:outline-none"
              >
                <option value="">Sélectionnez un délai</option>
                <option value="normal">Dans les 2-3 mois</option>
                <option value="urgent">Dans le mois</option>
                <option value="tres-urgent">Urgent (sous 15 jours)</option>
              </select>
            </div>
            <div>
              <label className="block text-sm font-medium mb-2">Budget approximatif</label>
              <select
                value={quoteData.budget}
                onChange={(e) => setQuoteData(prev => ({ ...prev, budget: e.target.value }))}
                className="w-full p-3 border border-lightGray rounded-lg focus:border-primary focus:outline-none"
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
        <div className="mt-6 p-6 bg-green/10 border border-green rounded-lg">
          <h4 className="text-lg font-semibold text-green mb-2">Estimation indicative</h4>
          <div className="text-3xl font-bold text-green mb-4">
            {estimatedPrice.toLocaleString('fr-FR')}€
          </div>
          <p className="text-sm text-darkGray mb-4">
            Cette estimation est indicative et basée sur les informations fournies. 
            Un devis précis nécessite une visite sur site.
          </p>
          <button
            onClick={() => window.location.href = '/contact'}
            className="bg-green text-white px-6 py-3 rounded-lg font-medium hover:bg-green/90 transition-colors"
          >
            Demander un devis précis
          </button>
        </div>
      )}

      {/* Navigation buttons */}
      <div className="flex justify-between mt-8">
        {step > 1 && !estimatedPrice && (
          <button
            onClick={prevStep}
            className="px-6 py-3 border border-primary text-primary rounded-lg hover:bg-primary/10 transition-colors"
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
            className="px-6 py-3 bg-primary text-white rounded-lg hover:bg-primary/90 transition-colors disabled:opacity-50 disabled:cursor-not-allowed ml-auto"
          >
            {step === 4 ? 'Calculer' : 'Suivant'}
          </button>
        )}
      </div>
    </div>
  );
}
