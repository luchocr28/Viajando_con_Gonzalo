import { Quote } from 'lucide-react';
import { useLanguage } from '../hooks/useLanguage';

export default function Testimonial() {
  const { t } = useLanguage();

  return (
    <section className="bg-darkblue py-24 text-white sm:py-32">
      <div className="container-px">
        <div className="reveal mx-auto max-w-4xl text-center">
          <Quote className="mx-auto mb-8 h-12 w-12 text-white/40" />
          <p className="font-display text-2xl font-medium leading-snug text-white sm:text-3xl lg:text-4xl">
            {t('testimonial.quote')}
          </p>
          <div className="mx-auto mt-8 h-px w-16 bg-white/40" />
          <p className="mt-6 text-xs font-semibold uppercase tracking-[0.3em] text-white/70">
            {t('testimonial.attribute')}
          </p>
        </div>
      </div>
    </section>
  );
}
