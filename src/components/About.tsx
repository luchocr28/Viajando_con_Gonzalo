import { Compass, Sparkles } from 'lucide-react';
import { useLanguage } from '../hooks/useLanguage';

export default function About() {
  const { t } = useLanguage();

  return (
    <section id="sobre-nosotros" className="bg-white py-16 sm:py-20 lg:py-28">
      <div className="container-px">
        <div className="grid grid-cols-1 gap-10 lg:grid-cols-2 lg:gap-16 lg:items-center">
          <div>
            <span className="reveal section-eyebrow">{t('about.eyebrow')}</span>
            <h2 className="reveal reveal-delay-1 section-title">{t('about.title')}</h2>
            <div className="reveal reveal-delay-2 mt-6 space-y-4 text-sm leading-relaxed text-gray-600 sm:text-base">
              <p>{t('about.p1')}</p>
              <p>{t('about.p2')}</p>
              <p>{t('about.p3')}</p>
            </div>

            <div className="reveal reveal-delay-3 mt-8 flex items-center gap-5 sm:gap-6">
              <div className="text-center">
                <p className="font-display text-4xl font-semibold text-primary sm:text-5xl">
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

          <div className="relative mt-6 lg:mt-0">
            <div className="reveal reveal-delay-2 relative overflow-hidden rounded-3xl">
              <img
                src="CR_vocalno.webp"
                alt="Costa Rica landscape"
                loading="lazy"
                className="aspect-[4/5] w-full object-cover transition-transform duration-700 hover:scale-105"
              />
            </div>

            <div className="reveal reveal-delay-3 absolute -bottom-5 left-4 right-4 max-w-xs rounded-2xl bg-darkblue p-5 text-white shadow-2xl sm:-bottom-6 sm:left-4 sm:right-auto sm:p-7 lg:-bottom-6 lg:-left-6 lg:rounded-3xl lg:p-7">
              <div className="mb-3 flex h-11 w-11 items-center justify-center rounded-full bg-lightblue">
                <Compass className="h-5 w-5" />
              </div>
              <h3 className="font-display text-base font-semibold sm:text-lg">{t('about.missionTitle')}</h3>
              <p className="mt-2 text-sm text-white/80">{t('about.missionText')}</p>
            </div>

            <div className="reveal reveal-delay-4 absolute -right-2 -top-2 flex h-14 w-14 items-center justify-center rounded-full bg-primary text-white shadow-xl sm:h-16 sm:w-16 lg:-right-4 lg:-top-4">
              <Sparkles className="h-5 w-5 sm:h-6 sm:w-6" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
