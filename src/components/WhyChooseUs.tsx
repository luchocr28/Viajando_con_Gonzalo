import {
  Award,
  HeartHandshake,
  BadgeCheck,
  Bus,
  Hotel,
  Gem,
  Users,
  MapPinned,
} from 'lucide-react';
import { useLanguage } from '../hooks/useLanguage';
import type { TranslationKey } from '../i18n/translations';

const items: { icon: typeof Award; titleKey: TranslationKey; descKey: TranslationKey }[] = [
  { icon: Award, titleKey: 'why.item1Title', descKey: 'why.item1Desc' },
  { icon: HeartHandshake, titleKey: 'why.item2Title', descKey: 'why.item2Desc' },
  { icon: BadgeCheck, titleKey: 'why.item3Title', descKey: 'why.item3Desc' },
  { icon: Bus, titleKey: 'why.item4Title', descKey: 'why.item4Desc' },
  { icon: Hotel, titleKey: 'why.item5Title', descKey: 'why.item5Desc' },
  { icon: Gem, titleKey: 'why.item6Title', descKey: 'why.item6Desc' },
  { icon: Users, titleKey: 'why.item7Title', descKey: 'why.item7Desc' },
  { icon: MapPinned, titleKey: 'why.item8Title', descKey: 'why.item8Desc' },
];

export default function WhyChooseUs() {
  const { t } = useLanguage();

  return (
    <section id="por-que-elegirnos" className="bg-gray-50 py-20 sm:py-28">
      <div className="container-px">
        <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {items.map((item, i) => {
            const Icon = item.icon;
            return (
              <div
                key={item.titleKey}
                className={`reveal reveal-delay-${(i % 4) + 1} group relative overflow-hidden rounded-2xl border border-gray-100 bg-white p-7 transition-all duration-500 hover:-translate-y-2 hover:border-primary/30 hover:shadow-2xl hover:shadow-primary/10`}
              >
                <div className="absolute -right-6 -top-6 h-20 w-20 rounded-full bg-primary/5 transition-transform duration-500 group-hover:scale-150" />
                <div className="relative z-10">
                  <div className="mb-5 flex h-14 w-14 items-center justify-center rounded-2xl bg-gradient-to-br from-primary to-lightblue text-white shadow-lg transition-transform duration-500 group-hover:scale-110">
                    <Icon className="h-6 w-6" />
                  </div>
                  <h3 className="font-display text-base font-semibold text-darkblue">
                    {t(item.titleKey)}
                  </h3>
                  <p className="mt-2 text-sm text-gray-500">{t(item.descKey)}</p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
