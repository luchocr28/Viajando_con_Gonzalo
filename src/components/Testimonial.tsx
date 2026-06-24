import { Quote } from 'lucide-react';
import { useLanguage } from '../hooks/useLanguage';

export default function Testimonial() {
  const { t } = useLanguage();

  return (
    <section className="bg-darkblue py-16 text-white sm:py-24 lg:py-32">
      <div className="container-px">
        <div className="reveal mx-auto max-w-4xl text-center">
          <Quote className="mx-auto mb-6 h-10 w-10 text-white/40 sm:h-12 sm:w-12 sm:mb-8" />
          <p className="font-display text-xl font-medium leading-snug text-white sm:text-2xl lg:text-4xl">
            {t('testimonial.quote')}
          </p>
          <div className="mx-auto mt-6 h-px w-16 bg-white/40 sm:mt-8" />
          <p className="mt-5 text-[10px] font-semibold uppercase tracking-[0.25em] text-white/70 sm:mt-6 sm:text-xs sm:tracking-[0.3em]">
            {t('testimonial.attribute')}
          </p>
        </div>
      </div>
    </section>
  );
}
