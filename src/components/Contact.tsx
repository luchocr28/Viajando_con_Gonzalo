import { MessageCircle, Phone, Mail, Instagram, Facebook, MapPin } from 'lucide-react';
import { useLanguage } from '../hooks/useLanguage';
import {
  buildWhatsAppUrl,
  WHATSAPP_DEFAULT_MESSAGE,
  WHATSAPP_DISPLAY,
  CONTACT_EMAIL,
  INSTAGRAM_URL,
  FACEBOOK_URL,
  INSTAGRAM_HANDLE,
  FACEBOOK_HANDLE,
} from '../lib/constants';

export default function Contact() {
  const { t, lang } = useLanguage();
  const waMessage = WHATSAPP_DEFAULT_MESSAGE[lang];
  const waUrl = buildWhatsAppUrl(waMessage);

  return (
    <section id="contacto" className="relative overflow-hidden bg-gray-50 py-16 sm:py-20 lg:py-28">
      <div className="container-px">
        <div className="grid grid-cols-1 gap-10 lg:grid-cols-2 lg:gap-16 lg:items-center">
          <div>
            <span className="reveal section-eyebrow">{t('contact.eyebrow')}</span>
            <h2 className="reveal reveal-delay-1 section-title">{t('contact.title')}</h2>
            <p className="reveal reveal-delay-2 mt-5 max-w-md text-gray-600">
              {t('contact.text')}
            </p>

            <div className="reveal reveal-delay-3 mt-9 space-y-4">
              <a
                href={waUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-whatsapp"
              >
                <MessageCircle className="h-4 w-4" />
                {t('contact.whatsapp')}
              </a>

              <div className="grid grid-cols-1 gap-3 sm:grid-cols-2">
                <a
                  href={`tel:+${WHATSAPP_DISPLAY.replace(/[^0-9]/g, '')}`}
                  className="group flex items-center gap-3 rounded-2xl border border-gray-200 bg-white p-4 transition-all hover:border-primary/30 hover:shadow-lg"
                >
                  <span className="flex h-10 w-10 items-center justify-center rounded-full bg-primary/10 text-primary transition-colors group-hover:bg-primary group-hover:text-white">
                    <Phone className="h-4 w-4" />
                  </span>
                  <span>
                    <span className="block text-xs uppercase tracking-wider text-gray-400">
                      {t('contact.phoneLabel')}
                    </span>
                    <span className="text-sm font-semibold text-darkblue">
                      {WHATSAPP_DISPLAY}
                    </span>
                  </span>
                </a>

                <a
                  href={`mailto:${CONTACT_EMAIL}`}
                  className="group flex items-center gap-3 rounded-2xl border border-gray-200 bg-white p-4 transition-all hover:border-primary/30 hover:shadow-lg"
                >
                  <span className="flex h-10 w-10 items-center justify-center rounded-full bg-primary/10 text-primary transition-colors group-hover:bg-primary group-hover:text-white">
                    <Mail className="h-4 w-4" />
                  </span>
                  <span className="min-w-0">
                    <span className="block text-xs uppercase tracking-wider text-gray-400">
                      {t('contact.emailLabel')}
                    </span>
                    <span className="block truncate text-sm font-semibold text-darkblue">
                      {CONTACT_EMAIL}
                    </span>
                  </span>
                </a>
              </div>

              <div className="rounded-2xl border border-gray-200 bg-white p-5">
                <p className="mb-3 text-xs uppercase tracking-wider text-gray-400">
                  {t('contact.socialLabel')}
                </p>
                <div className="flex flex-wrap gap-3">
                  <a
                    href={INSTAGRAM_URL}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group inline-flex items-center gap-2 rounded-full border border-gray-200 px-4 py-2 text-sm font-medium text-darkblue transition-all hover:border-primary hover:bg-primary hover:text-white"
                  >
                    <Instagram className="h-4 w-4" />
                    {INSTAGRAM_HANDLE}
                  </a>
                  <a
                    href={FACEBOOK_URL}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group inline-flex items-center gap-2 rounded-full border border-gray-200 px-4 py-2 text-sm font-medium text-darkblue transition-all hover:border-primary hover:bg-primary hover:text-white"
                  >
                    <Facebook className="h-4 w-4" />
                    {FACEBOOK_HANDLE}
                  </a>
                </div>
              </div>

              <div className="flex items-start gap-3 rounded-2xl border border-gray-200 bg-white p-4">
                <MapPin className="mt-0.5 h-4 w-4 shrink-0 text-lightblue" />
                <p className="text-sm text-gray-600">
                  San José, Costa Rica · Turismo receptivo
                </p>
              </div>
            </div>
          </div>

          <div className="reveal reveal-delay-2 relative mt-6 lg:mt-0">
            <div className="overflow-hidden rounded-3xl">
              <img
                src="https://images.pexels.com/photos/2598683/pexels-photo-2598683.jpeg?auto=compress&cs=tinysrgb&w=1000"
                alt="Costa Rica beach"
                loading="lazy"
                className="aspect-[4/3] w-full object-cover"
              />
            </div>
            <div className="absolute -bottom-5 left-4 right-4 max-w-xs rounded-2xl bg-darkblue p-5 text-white shadow-2xl sm:-bottom-6 sm:left-4 sm:right-auto sm:p-6 lg:-bottom-6 lg:-left-6 lg:rounded-3xl lg:p-6">
              <p className="font-display text-2xl font-semibold text-lightblue sm:text-3xl">Pura Vida</p>
              <p className="mt-1 text-sm text-white/80">
                {lang === 'es'
                  ? 'Más de 30 años creando experiencias inolvidables.'
                  : 'Over 30 years creating unforgettable experiences.'}
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
