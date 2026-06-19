import { Clock, Wallet, Star, Mountain, Landmark, Leaf, Send } from 'lucide-react';
import { useLanguage } from '../hooks/useLanguage';
import { buildWhatsAppUrl, WHATSAPP_DEFAULT_MESSAGE } from '../lib/constants';
import Accordion from './Accordion';
import type { TranslationKey } from '../i18n/translations';

const cards: { icon: typeof Clock; titleKey: TranslationKey; descKey: TranslationKey }[] = [
  { icon: Clock, titleKey: 'custom.card1Title', descKey: 'custom.card1Desc' },
  { icon: Wallet, titleKey: 'custom.card2Title', descKey: 'custom.card2Desc' },
  { icon: Star, titleKey: 'custom.card3Title', descKey: 'custom.card3Desc' },
  { icon: Mountain, titleKey: 'custom.card4Title', descKey: 'custom.card4Desc' },
  { icon: Landmark, titleKey: 'custom.card5Title', descKey: 'custom.card5Desc' },
  { icon: Leaf, titleKey: 'custom.card6Title', descKey: 'custom.card6Desc' },
];

export default function CustomTours() {
  const { t, lang } = useLanguage();

  return (
    <section id="viajes-personalizados" className="relative overflow-hidden bg-darkblue py-20 text-white sm:py-28">
      <div className="absolute inset-0 opacity-20">
        <img
          src="https://images.pexels.com/photos/2161467/pexels-photo-2161467.jpeg?auto=compress&cs=tinysrgb&w=1800"
          alt=""
          loading="lazy"
          className="h-full w-full object-cover"
        />
      </div>
      <div className="absolute inset-0 bg-gradient-to-b from-darkblue via-darkblue/90 to-darkblue" />

      <div className="container-px relative z-10">
        <div className="mx-auto max-w-3xl text-center">
          <span className="reveal section-eyebrow !text-lightblue">
            {t('custom.eyebrow')}
          </span>
          <h2 className="reveal reveal-delay-1 font-display text-3xl font-semibold leading-tight text-white sm:text-4xl lg:text-5xl">
            {t('custom.title')}
          </h2>
          <p className="reveal reveal-delay-2 mx-auto mt-5 max-w-2xl text-white/75">
            {t('custom.description')}
          </p>
        </div>

        <div className="mt-14 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {cards.map((card, i) => {
            const Icon = card.icon;
            return (
              <div
                key={card.titleKey}
                className={`reveal reveal-delay-${(i % 3) + 1} group relative overflow-hidden rounded-2xl border border-white/10 bg-white/5 p-7 backdrop-blur-sm transition-all duration-500 hover:-translate-y-2 hover:border-lightblue/50 hover:bg-white/10`}
              >
                <div className="absolute -right-8 -top-8 h-24 w-24 rounded-full bg-lightblue/10 transition-transform duration-500 group-hover:scale-150" />
                <div className="relative z-10">
                  <div className="mb-5 flex h-14 w-14 items-center justify-center rounded-2xl bg-gradient-to-br from-lightblue to-primary text-white shadow-lg transition-transform duration-500 group-hover:scale-110 group-hover:rotate-6">
                    <Icon className="h-6 w-6" />
                  </div>
                  <h3 className="font-display text-xl font-semibold text-white">
                    {t(card.titleKey)}
                  </h3>
                  <p className="mt-2 text-sm text-white/70">{t(card.descKey)}</p>
                </div>
              </div>
            );
          })}
        </div>

        <div className="reveal reveal-delay-3 mx-auto mt-14 max-w-3xl">
          <Accordion
            items={[
              { title: t('custom.accordion1Title'), body: t('custom.accordion1Body') },
              { title: t('custom.accordion2Title'), body: t('custom.accordion2Body') },
              { title: t('custom.accordion3Title'), body: t('custom.accordion3Body') },
            ]}
          />
        </div>

        <div className="reveal reveal-delay-4 mt-12 text-center">
          <a
            href={buildWhatsAppUrl(WHATSAPP_DEFAULT_MESSAGE[lang])}
            target="_blank"
            rel="noopener noreferrer"
            className="btn-primary"
          >
            <Send className="h-4 w-4" />
            {t('custom.cta')}
          </a>
        </div>
      </div>
    </section>
  );
}
