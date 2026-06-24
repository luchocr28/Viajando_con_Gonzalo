import { ChevronDown, MessageCircle } from 'lucide-react';
import { useLanguage } from '../hooks/useLanguage';
import { buildWhatsAppUrl, WHATSAPP_DEFAULT_MESSAGE } from '../lib/constants';

export default function Hero() {
  const { t, lang } = useLanguage();

  return (
    <section id="inicio" className="relative flex h-screen min-h-[560px] w-full items-center justify-center overflow-hidden">
      <video
        className="absolute inset-0 h-full w-full object-cover"
        autoPlay
        muted
        loop
        playsInline
        poster="/CR_COVER.jpg"
      >
        <source
          src="CR_comprimido.mp4"
          type="video/mp4"
        />
      </video>

      <div className="absolute inset-0 bg-gradient-to-b from-darkblue/70 via-darkblue/40 to-darkblue/80" />
      <div className="absolute inset-0 bg-black/20" />

      <div className="container-px relative z-10 text-center text-white">
        {/* Brand logo lockup */}
        <div
          className="mb-8 flex justify-center opacity-0 animation-fade-in-down"
          style={{ animationDelay: '0s' }}
        >
          <span className="inline-flex items-center justify-center rounded-2xl bg-white/15 px-4 py-3 shadow-xl shadow-black/10 backdrop-blur-md transition-all duration-300 sm:px-6 sm:py-5">
            <img
              src="VG_LOGO.png"
              alt="Viajando con Gonzalo Tours"
              width={640}
              height={640}
              className="h-28 w-auto object-contain sm:h-56 lg:h-64"
            />
          </span>
        </div>

        <p
          className="mb-4 text-[10px] font-semibold uppercase tracking-[0.25em] text-white/80 opacity-0 animation-fade-in-down sm:mb-5 sm:text-xs sm:tracking-[0.35em]"
          style={{ animationDelay: '0.2s' }}
        >
          Costa Rica · Turismo
        </p>
        <h1
          className="mx-auto max-w-5xl font-display text-2xl font-semibold leading-[1.2] sm:text-5xl lg:text-6xl opacity-0 animation-fade-in-up"
          style={{ animationDelay: '0.4s' }}
        >
          {t('hero.title')}
        </h1>
        <p
          className="mx-auto mt-5 max-w-2xl text-sm text-white/85 sm:mt-6 sm:text-lg opacity-0 animation-fade-in-up"
          style={{ animationDelay: '0.7s' }}
        >
          {t('hero.subtitle')}
        </p>
        <div
          className="mt-7 flex w-full flex-col items-center justify-center gap-3 px-4 opacity-0 animation-fade-in-up sm:mt-9 sm:w-auto sm:flex-row sm:gap-4 sm:px-0"
          style={{ animationDelay: '0.95s' }}
        >
          <a href="#tours" className="btn-primary">
            {t('hero.ctaPrimary')}
          </a>
          <a
            href={buildWhatsAppUrl(WHATSAPP_DEFAULT_MESSAGE[lang])}
            target="_blank"
            rel="noopener noreferrer"
            className="btn-whatsapp"
          >
            <MessageCircle className="h-4 w-4" />
            {t('hero.ctaWhatsApp')}
          </a>
        </div>
      </div>

      <a
        href="#promo"
        className="absolute bottom-5 left-1/2 z-10 flex -translate-x-1/2 flex-col items-center gap-1.5 text-white/70 transition-colors hover:text-white sm:bottom-7 sm:gap-2"
        aria-label={t('hero.scroll')}
      >
        <span className="text-[10px] uppercase tracking-[0.3em]">{t('hero.scroll')}</span>
        <span className="flex h-10 w-6 justify-center rounded-full border border-white/40 p-1">
          <span className="h-2 w-1 animate-bounce rounded-full bg-white/80" />
        </span>
        <ChevronDown className="h-4 w-4 animate-bounce" />
      </a>
    </section>
  );
}
