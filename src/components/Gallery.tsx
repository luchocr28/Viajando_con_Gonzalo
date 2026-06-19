import { useState, useEffect, useCallback } from 'react';
import { X, ChevronLeft, ChevronRight, MapPin, ZoomIn } from 'lucide-react';
import { useLanguage } from '../hooks/useLanguage';
import { galleryItems } from '../data/content';

const spanClass: Record<string, string> = {
  tall: 'row-span-2',
  wide: 'col-span-2',
  normal: '',
};

export default function Gallery() {
  const { t, lang } = useLanguage();
  const [activeIndex, setActiveIndex] = useState<number | null>(null);

  const close = useCallback(() => setActiveIndex(null), []);
  const next = useCallback(
    () => setActiveIndex((i) => (i === null ? i : (i + 1) % galleryItems.length)),
    [],
  );
  const prev = useCallback(
    () =>
      setActiveIndex((i) =>
        i === null ? i : (i - 1 + galleryItems.length) % galleryItems.length,
      ),
    [],
  );

  useEffect(() => {
    if (activeIndex === null) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') close();
      if (e.key === 'ArrowRight') next();
      if (e.key === 'ArrowLeft') prev();
    };
    document.addEventListener('keydown', onKey);
    document.body.style.overflow = 'hidden';
    return () => {
      document.removeEventListener('keydown', onKey);
      document.body.style.overflow = '';
    };
  }, [activeIndex, close, next, prev]);

  return (
    <section id="galeria" className="bg-white py-20 sm:py-28">
      <div className="container-px">
        <div className="mx-auto max-w-3xl text-center">
          <span className="reveal section-eyebrow">{t('gallery.eyebrow')}</span>
          <h2 className="reveal reveal-delay-1 section-title">{t('gallery.title')}</h2>
          <p className="reveal reveal-delay-2 mx-auto mt-5 max-w-2xl text-gray-600">
            {t('gallery.subtitle')}
          </p>
        </div>

        <div className="reveal reveal-delay-3 mt-12 auto-rows-[200px] grid grid-cols-2 gap-4 sm:auto-rows-[220px] lg:grid-cols-4">
          {galleryItems.map((item, i) => (
            <button
              key={item.id}
              onClick={() => setActiveIndex(i)}
              className={`group relative overflow-hidden rounded-2xl ${spanClass[item.span]}`}
              aria-label={item.location[lang]}
            >
              <img
                src={item.image}
                alt={item.location[lang]}
                loading="lazy"
                className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-darkblue/90 via-darkblue/20 to-transparent opacity-70 transition-opacity duration-300 group-hover:opacity-90" />
              <div className="absolute inset-0 flex items-center justify-center opacity-0 transition-opacity duration-300 group-hover:opacity-100">
                <span className="flex h-12 w-12 items-center justify-center rounded-full bg-white/20 backdrop-blur-md">
                  <ZoomIn className="h-5 w-5 text-white" />
                </span>
              </div>
              <div className="absolute bottom-0 left-0 right-0 p-5 text-left text-white">
                <p className="flex items-center gap-1.5 text-xs uppercase tracking-wider text-white/70">
                  <MapPin className="h-3 w-3" />
                  {String(i + 1).padStart(2, '0')}
                </p>
                <h3 className="mt-1 font-display text-lg font-semibold">
                  {item.location[lang]}
                </h3>
              </div>
            </button>
          ))}
        </div>
      </div>

      {activeIndex !== null && (
        <div
          className="fixed inset-0 z-[100] flex items-center justify-center bg-darkblue/95 backdrop-blur-md"
          onClick={close}
        >
          <button
            onClick={close}
            className="absolute right-5 top-5 flex h-11 w-11 items-center justify-center rounded-full bg-white/10 text-white transition-colors hover:bg-white/20"
            aria-label="Close"
          >
            <X className="h-5 w-5" />
          </button>

          <button
            onClick={(e) => {
              e.stopPropagation();
              prev();
            }}
            className="absolute left-4 flex h-12 w-12 items-center justify-center rounded-full bg-white/10 text-white transition-colors hover:bg-white/20 sm:left-8"
            aria-label="Previous"
          >
            <ChevronLeft className="h-6 w-6" />
          </button>

          <div
            className="mx-auto max-w-4xl px-6"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="overflow-hidden rounded-2xl">
              <img
                src={galleryItems[activeIndex].image}
                alt={galleryItems[activeIndex].location[lang]}
                className="max-h-[70vh] w-full object-contain"
              />
            </div>
            <div className="mt-6 text-center text-white">
              <h3 className="font-display text-2xl font-semibold">
                {galleryItems[activeIndex].location[lang]}
              </h3>
              <p className="mx-auto mt-2 max-w-2xl text-sm text-white/75">
                {galleryItems[activeIndex].description[lang]}
              </p>
              <p className="mt-3 text-xs uppercase tracking-[0.3em] text-white/50">
                {activeIndex + 1} / {galleryItems.length}
              </p>
            </div>
          </div>

          <button
            onClick={(e) => {
              e.stopPropagation();
              next();
            }}
            className="absolute right-4 flex h-12 w-12 items-center justify-center rounded-full bg-white/10 text-white transition-colors hover:bg-white/20 sm:right-8"
            aria-label="Next"
          >
            <ChevronRight className="h-6 w-6" />
          </button>
        </div>
      )}
    </section>
  );
}
