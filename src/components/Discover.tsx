import { ArrowRight } from 'lucide-react';
import { useLanguage } from '../hooks/useLanguage';
import { discoverCategories } from '../data/content';

export default function Discover() {
  const { t, lang } = useLanguage();

  return (
    <section id="descubrir" className="bg-darkblue py-20 text-white sm:py-28">
      <div className="container-px">
        <div className="mx-auto max-w-3xl text-center">
          <span className="reveal section-eyebrow !text-lightblue">{t('discover.eyebrow')}</span>
          <h2 className="reveal reveal-delay-1 font-display text-3xl font-semibold text-white sm:text-4xl lg:text-5xl">
            {t('discover.title')}
          </h2>
          <p className="reveal reveal-delay-2 mx-auto mt-5 max-w-2xl text-white/70">
            {t('discover.subtitle')}
          </p>
        </div>

        <div className="mt-14 grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-6">
          {discoverCategories.map((cat, i) => (
            <a
              key={cat.id}
              href="#tours"
              className={`reveal reveal-delay-${(i % 6) + 1} group relative aspect-[3/4] overflow-hidden rounded-2xl`}
            >
              <img
                src={cat.image}
                alt={cat.title[lang]}
                loading="lazy"
                className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-darkblue via-darkblue/40 to-transparent transition-opacity duration-300 group-hover:from-primary" />
              <div className="absolute bottom-0 left-0 right-0 flex items-center justify-between p-5">
                <h3 className="font-display text-sm font-semibold text-white sm:text-base">
                  {cat.title[lang]}
                </h3>
                <ArrowRight className="h-4 w-4 -translate-x-2 text-white opacity-0 transition-all duration-300 group-hover:translate-x-0 group-hover:opacity-100" />
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
