// Types pour les formulaires de contact et callback

export interface BaseFormData {
  honeypot: string;
}

export interface ContactFormData extends BaseFormData {
  name: string;
  email: string;
  phone: string;
  service: string;
  message: string;
  want3D: boolean;
}

export interface CallbackFormData extends BaseFormData {
  name: string;
  phone: string;
  timeSlot: string;
  message?: string;
}

// Types pour les réponses API
export interface FormSubmissionResponse {
  success: boolean;
  message: string;
  errors?: Record<string, string>;
}

// Types pour la gestion d'état des formulaires
export interface FormState<T> {
  data: T;
  isSubmitting: boolean;
  isSubmitted: boolean;
  errors: Record<keyof T | 'general', string>;
  hasChanges: boolean;
}

// Types pour validation
export interface ValidationRule {
  required?: boolean;
  minLength?: number;
  maxLength?: number;
  pattern?: RegExp;
  custom?: (value: string) => string | null;
}

export type ValidationSchema<T> = {
  [K in keyof T]?: ValidationRule;
};

// Services disponibles pour le formulaire de contact
export const AVAILABLE_SERVICES = [
  'Maçonnerie légère',
  'Électricité & plomberie',
  'Isolation intérieure',
  'Plâtrerie & placo',
  'Pose de sol',
  'Peinture & finitions',
  'Rénovation complète',
  'Après sinistre',
  'Autres'
] as const;

export type ServiceType = typeof AVAILABLE_SERVICES[number];

// Créneaux horaires pour rappel
export const CALLBACK_TIME_SLOTS = [
  'Matin (8h-12h)',
  'Après-midi (12h-18h)',
  'Soirée (18h-20h)'
] as const;

export type CallbackTimeSlot = typeof CALLBACK_TIME_SLOTS[number];