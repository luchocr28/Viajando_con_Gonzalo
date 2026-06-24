import { CalendarCheck, MapPin } from 'lucide-react';
import { useLanguage } from '../hooks/useLanguage';

export default function PromoBanner() {
  const { t } = useLanguage();

  return (
    <section id="promo" className="relative overflow-hidden">
      <div className="absolute inset-0">
        <img
          src="CR_beach.webp"
          alt="Costa Rica rainforest canopy"
          loading="lazy"
          className="h-full w-full object-cover"
        />
        <div className="absolute inset-0 bg-darkblue/80" />
      </div>

      <div className="container-px relative z-10 py-20 text-center text-white sm:py-28">
        <span className="reveal mb-5 inline-flex items-center gap-2 rounded-full bg-lightblue px-4 py-1.5 text-xs font-bold uppercase tracking-[0.2em] text-white shadow-lg">
          <CalendarCheck className="h-3.5 w-3.5" />
          {t('promo.badge')}
        </span>

        <h2 className="reveal reveal-delay-1 mx-auto max-w-4xl font-display text-3xl font-semibold leading-tight sm:text-4xl lg:text-5xl">
          {t('promo.title')}
        </h2>

        <p className="reveal reveal-delay-2 mx-auto mt-5 max-w-2xl text-base text-white/85 sm:text-lg">
          {t('promo.subtitle')}
        </p>

        <div className="reveal reveal-delay-3 mt-10">
          <p className="text-xs font-semibold uppercase tracking-[0.3em] text-white/70">
            {t('promo.departures')}
          </p>
          <div className="mt-5 flex flex-wrap items-center justify-center gap-4">
            {['19 Agosto', '2 Septiembre'].map((date) => (
              <div
                key={date}
                className="flex items-center gap-3 rounded-2xl border border-white/20 bg-white/5 px-6 py-4 backdrop-blur-md transition-all duration-300 hover:-translate-y-1 hover:border-white/40 hover:bg-white/10"
              >
                <MapPin className="h-5 w-5 text-lightblue" />
                <div className="text-left">
                  <p className="text-xs uppercase tracking-wider text-white/60">
                    {date === '19 Agosto' ? 'Agosto' : 'Septiembre'}
                  </p>
                  <p className="font-display text-xl font-semibold text-white">
                    {date.split(' ')[0]}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
