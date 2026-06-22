import { Instagram, Facebook, MessageCircle, Phone, Mail } from 'lucide-react';
import { useLanguage } from '../hooks/useLanguage';
import {
  WHATSAPP_DISPLAY,
  CONTACT_EMAIL,
  INSTAGRAM_URL,
  FACEBOOK_URL,
  buildWhatsAppUrl,
  WHATSAPP_DEFAULT_MESSAGE,
} from '../lib/constants';
import type { TranslationKey } from '../i18n/translations';

const footerNav: { key: TranslationKey; href: string }[] = [
  { key: 'nav.inicio', href: '#inicio' },
  { key: 'nav.about', href: '#sobre-nosotros' },
  { key: 'nav.tours', href: '#tours' },
  { key: 'nav.gallery', href: '#galeria' },
  { key: 'nav.why', href: '#por-que-elegirnos' },
  { key: 'nav.contact', href: '#contacto' },
];

export default function Footer() {
  const { t, lang } = useLanguage();

  return (
    <footer className="bg-darkblue text-white">
      <div className="container-px py-16">
        <div className="grid grid-cols-1 gap-10 md:grid-cols-3">
          {/* Brand column */}
          <div>
            <a href="#inicio" aria-label="Viajando con Gonzalo Tours" className="inline-flex items-center justify-center rounded-2xl bg-white/10 px-4 py-3 backdrop-blur-sm transition-all duration-300 hover:bg-white/15">
              <img
                src="/VG_LOGO.png"
                alt="Viajando con Gonzalo Tours"
                width={440}
                height={440}
                className="h-48 w-auto object-contain"
              />
            </a>
            <p className="mt-5 max-w-xs text-sm leading-relaxed text-white/70">
              {t('footer.tagline')}
            </p>
            <div className="mt-5 flex gap-2">
              <a
                href={INSTAGRAM_URL}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Instagram"
                className="flex h-10 w-10 items-center justify-center rounded-full bg-white/10 transition-colors hover:bg-primary"
              >
                <Instagram className="h-4 w-4" />
              </a>
              <a
                href={FACEBOOK_URL}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Facebook"
                className="flex h-10 w-10 items-center justify-center rounded-full bg-white/10 transition-colors hover:bg-primary"
              >
                <Facebook className="h-4 w-4" />
              </a>
              <a
                href={buildWhatsAppUrl(WHATSAPP_DEFAULT_MESSAGE[lang])}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="WhatsApp"
                className="flex h-10 w-10 items-center justify-center rounded-full bg-white/10 transition-colors hover:bg-primary"
              >
                <MessageCircle className="h-4 w-4" />
              </a>
            </div>
          </div>

          {/* Quick links */}
          <div>
            <h4 className="text-xs font-semibold uppercase tracking-[0.25em] text-white/50">
              {t('footer.quickLinks')}
            </h4>
            <ul className="mt-5 space-y-2.5">
              {footerNav.map((item) => (
                <li key={item.key}>
                  <a
                    href={item.href}
                    className="group inline-flex items-center gap-2 text-sm text-white/80 transition-colors hover:text-white"
                  >
                    <span className="h-px w-0 bg-lightblue transition-all duration-300 group-hover:w-4" />
                    {t(item.key)}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-xs font-semibold uppercase tracking-[0.25em] text-white/50">
              {t('footer.contact')}
            </h4>
            <ul className="mt-5 space-y-3">
              <li>
                <a
                  href={`tel:+${WHATSAPP_DISPLAY.replace(/[^0-9]/g, '')}`}
                  className="flex items-center gap-3 text-sm text-white/80 transition-colors hover:text-white"
                >
                  <Phone className="h-4 w-4 text-lightblue" />
                  {WHATSAPP_DISPLAY}
                </a>
              </li>
              <li>
                <a
                  href={`mailto:${CONTACT_EMAIL}`}
                  className="flex items-center gap-3 text-sm text-white/80 transition-colors hover:text-white"
                >
                  <Mail className="h-4 w-4 text-lightblue" />
                  {CONTACT_EMAIL}
                </a>
              </li>
              <li className="flex items-center gap-3 text-sm text-white/80">
                <MessageCircle className="h-4 w-4 text-lightblue" />
                WhatsApp · {t('contact.whatsapp')}
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-12 flex flex-col items-center justify-between gap-3 border-t border-white/10 pt-6 sm:flex-row">
          <p className="text-xs text-white/50">{t('footer.copyright')}</p>
          <p className="text-xs text-white/40">
            Costa Rica · <span className="text-lightblue">Pura Vida</span>
          </p>
        </div>
      </div>
    </footer>
  );
}
