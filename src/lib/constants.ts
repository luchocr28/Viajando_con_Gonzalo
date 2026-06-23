import type { Language } from '../i18n/translations';

export const WHATSAPP_NUMBER = '50671248717';
export const WHATSAPP_DISPLAY = '(+506) 71248717';
export const CONTACT_EMAIL = 'gonzalo@viajandocongonzalo506.com';
export const COMPANY_NAME = 'Viajando con Gonzalo Tours';

export const buildWhatsAppUrl = (message: string): string => {
  const text = encodeURIComponent(message);
  return `https://wa.me/${WHATSAPP_NUMBER}?text=${text}`;
};

export const WHATSAPP_DEFAULT_MESSAGE: Record<Language, string> = {
  es: 'Hola Viajando con Gonzalo Tours, me gustaría recibir información sobre los tours a Costa Rica.',
  en: 'Hello Viajando con Gonzalo Tours, I would like more information about Costa Rica tours.',
};

export const INSTAGRAM_URL = 'https://www.instagram.com/viajandocongonzalotours';
export const FACEBOOK_URL = 'https://www.facebook.com/profile.php?id=61590193317847';
export const INSTAGRAM_HANDLE = 'Viajando con Gonzalo Tours';
export const FACEBOOK_HANDLE = 'Viajando con Gonzalo Tours';
