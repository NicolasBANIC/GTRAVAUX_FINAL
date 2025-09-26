import { ChangeEvent, FormEvent, KeyboardEvent, MouseEvent } from 'react';

// Types d'événements couramment utilisés dans l'application
export type FormSubmitHandler = (event: FormEvent<HTMLFormElement>) => void | Promise<void>;
export type FormEventHandler<T extends HTMLElement> = (event: FormEvent<T>) => void | Promise<void>;
export type InputChangeHandler = (event: ChangeEvent<HTMLInputElement>) => void;
export type TextareaChangeHandler = (event: ChangeEvent<HTMLTextAreaElement>) => void;
export type SelectChangeHandler = (event: ChangeEvent<HTMLSelectElement>) => void;
export type ChangeEventHandler<T extends HTMLElement> = (event: ChangeEvent<T>) => void;

// Types pour les interactions clavier et souris
export type ButtonClickHandler = (event: MouseEvent<HTMLButtonElement>) => void;
export type KeyDownHandler = (event: KeyboardEvent<HTMLElement>) => void;
export type ImageEventHandler = (event: Event) => void;

// Types pour les callbacks avec données
export type CallbackWithIndex = (index: number) => void;
export type CallbackWithString = (value: string) => void;
export type CallbackWithBoolean = (value: boolean) => void;

// Types pour les composants génériques
export interface ComponentWithClassName {
  className?: string;
}

export interface ComponentWithChildren {
  children?: React.ReactNode;
}

export interface ComponentWithClassNameAndChildren extends ComponentWithClassName, ComponentWithChildren {}

// Types pour les erreurs de gestion d'images
export interface ImageError {
  src: string;
  alt: string;
  error: string;
}