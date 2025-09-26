// Types pour les APIs
export interface ApiResponse<T = unknown> {
  success: boolean;
  message: string;
  data?: T;
}

export interface ContactFormData {
  name: string;
  phone: string;
  service?: string;
  honeypot?: string;
}

export interface ContactApiResponse extends ApiResponse {
  success: boolean;
  message: string;
}