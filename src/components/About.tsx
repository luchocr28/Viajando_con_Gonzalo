import { Compass, Sparkles } from 'lucide-react';
import { useLanguage } from '../hooks/useLanguage';

export default function About() {
  const { t } = useLanguage();

  return (
    <section id="sobre-nosotros" className="bg-white py-20 sm:py-28">
      <div className="container-px">
        <div className="grid grid-cols-1 gap-12 lg:grid-cols-2 lg:gap-16 lg:items-center">
          <div>
            <span className="reveal section-eyebrow">{t('about.eyebrow')}</span>
            <h2 className="reveal reveal-delay-1 section-title">{t('about.title')}</h2>
            <div className="reveal reveal-delay-2 mt-6 space-y-4 text-base leading-relaxed text-gray-600">
              <p>{t('about.p1')}</p>
              <p>{t('about.p2')}</p>
              <p>{t('about.p3')}</p>
            </div>

            <div className="reveal reveal-delay-3 mt-8 flex items-center gap-6">
              <div className="text-center">
                <p className="font-display text-5xl font-semibold text-primary">
                  {t('about.experience')}
                </p>
                <p className="mt-1 text-xs uppercase tracking-[0.2em] text-gray-500">
                  {t('about.experienceLabel')}
                </p>
              </div>
              <div className="h-14 w-px bg-gray-200" />
              <p className="text-sm text-gray-500">
                Turismo receptivo<br />Costa Rica
              </p>
            </div>
          </div>

          <div className="relative">
            <div className="reveal reveal-delay-2 relative overflow-hidden rounded-3xl">
              <img
                src="/CR_vocalno.webp"
                alt="Costa Rica landscape"
                loading="lazy"
                className="aspect-[4/5] w-full object-cover transition-transform duration-700 hover:scale-105"
              />
            </div>

            <div className="reveal reveal-delay-3 absolute -bottom-6 -left-6 max-w-xs rounded-3xl bg-darkblue p-7 text-white shadow-2xl">
              <div className="mb-3 flex h-11 w-11 items-center justify-center rounded-full bg-lightblue">
                <Compass className="h-5 w-5" />
              </div>
              <h3 className="font-display text-lg font-semibold">{t('about.missionTitle')}</h3>
              <p className="mt-2 text-sm text-white/80">{t('about.missionText')}</p>
            </div>

            <div className="reveal reveal-delay-4 absolute -right-4 -top-4 flex h-16 w-16 items-center justify-center rounded-full bg-primary text-white shadow-xl">
              <Sparkles className="h-6 w-6" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
