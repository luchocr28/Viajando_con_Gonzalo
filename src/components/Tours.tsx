import { useState } from 'react';
import {
  Clock,
  MapPin,
  Check,
  Hotel,
  ExternalLink,
  Download,
  MessageCircle,
  ChevronRight,
  Sparkles,
  Info,
  Route as RouteIcon,
  ListChecks,
  Calendar,
} from 'lucide-react';
import { useLanguage } from '../hooks/useLanguage';
import { tours } from '../data/content';
import { tourTitles } from '../i18n/translations';
import { buildWhatsAppUrl, WHATSAPP_DEFAULT_MESSAGE } from '../lib/constants';
import type { TourCard } from '../data/content';

type TourAccordionItem = { title: string; body: React.ReactNode; icon: React.ReactNode; empty: boolean };

function TourAccordion({ items, tourId }: { items: TourAccordionItem[]; tourId: string }) {
  const [open, setOpen] = useState(0);
  return (
    <div className="mt-4 divide-y divide-gray-200 overflow-hidden rounded-2xl border border-gray-200 bg-white">
      {items.map((item, i) => {
        const isOpen = open === i;
        const isEmpty = item.empty;
        return (
          <div key={`${tourId}-${i}`} className={isEmpty ? 'opacity-60' : ''}>
            <button
              onClick={() => setOpen(isOpen ? -1 : i)}
              className="flex w-full items-center justify-between gap-3 px-5 py-4 text-left transition-colors hover:bg-gray-50"
              aria-expanded={isOpen}
            >
              <span className="flex items-center gap-2 font-display text-sm font-semibold text-darkblue">
                {item.icon}
                {item.title}
              </span>
              <span
                className={`flex h-6 w-6 shrink-0 items-center justify-center rounded-full text-xs transition-transform duration-300 ${
                  isOpen ? 'rotate-90 bg-primary text-white' : 'bg-gray-100 text-primary'
                }`}
              >
                <ChevronRight className="h-3.5 w-3.5" />
              </span>
            </button>
            <div
              className={`grid transition-all duration-300 ease-in-out ${
                isOpen ? 'grid-rows-[1fr]' : 'grid-rows-[0fr]'
              }`}
            >
              <div className="overflow-hidden">
                <div className="px-5 pb-4 text-sm text-gray-600">{item.body}</div>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
}

function TourCardComponent({ tour, index }: { tour: TourCard; index: number }) {
  const { t, lang } = useLanguage();
  const title = tourTitles[tour.id as keyof typeof tourTitles]?.[lang] ?? tour.id;

  const routeList = tour.route[lang].join(' · ');
  const na = t('common.na');

  const itineraryBody =
    tour.itinerary.length > 0 ? (
      <ol className="space-y-3">
        {tour.itinerary.map((day) => (
          <li key={day.day} className="flex gap-3">
            <span className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-primary text-xs font-bold text-white">
              {day.day}
            </span>
            <div>
              <span className="text-xs uppercase tracking-wider text-gray-400">
                {t('tours.day')} {day.day}
              </span>
              <ul className="mt-1 space-y-0.5">
                {day.items.map((item, j) => (
                  <li key={j} className="flex items-start gap-2">
                    <Check className="mt-0.5 h-3.5 w-3.5 shrink-0 text-lightblue" />
                    <span>{item[lang]}</span>
                  </li>
                ))}
              </ul>
            </div>
          </li>
        ))}
      </ol>
    ) : (
      <p className="text-gray-400">{na}</p>
    );

  const routeBody =
    tour.route[lang].length > 0 ? (
      <div className="flex flex-wrap items-center gap-2">
        {tour.route[lang].map((stop, i) => (
          <span key={i} className="flex items-center gap-2">
            <span className="rounded-full bg-primary/10 px-3 py-1 text-xs font-medium text-primary">
              {stop}
            </span>
            {i < tour.route[lang].length - 1 && (
              <ChevronRight className="h-3 w-3 text-gray-300" />
            )}
          </span>
        ))}
      </div>
    ) : (
      <p className="text-gray-400">{na}</p>
    );

  const includesBody =
    tour.includes[lang].length > 0 ? (
      <ul className="grid grid-cols-1 gap-x-4 gap-y-2 sm:grid-cols-2">
        {tour.includes[lang].map((item, i) => (
          <li key={i} className="flex items-start gap-2">
            <Check className="mt-0.5 h-4 w-4 shrink-0 text-lightblue" />
            <span>{item}</span>
          </li>
        ))}
      </ul>
    ) : (
      <p className="text-gray-400">{na}</p>
    );

  const hotelsBody =
    tour.hotels.length > 0 ? (
      <div className="flex flex-wrap gap-3">
        {tour.hotels.map((hotel) => (
          <a
            key={hotel.name}
            href={hotel.url}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1.5 rounded-full border border-primary/30 bg-primary/5 px-4 py-2 text-xs font-medium text-primary transition-all hover:border-primary hover:bg-primary hover:text-white"
          >
            <Hotel className="h-3.5 w-3.5" />
            {hotel.name}
            <ExternalLink className="h-3 w-3" />
          </a>
        ))}
      </div>
    ) : (
      <p className="text-gray-400">{na}</p>
    );

  const optionalBody =
    tour.optionalActivities.length > 0 ? (
      <div className="space-y-4">
        {tour.optionalActivities.map((group, i) => (
          <div key={i}>
            <p className="mb-2 text-xs font-semibold uppercase tracking-wider text-gray-400">
              {group.title[lang]}
            </p>
            <ul className="space-y-1">
              {group.items.map((item, j) => (
                <li key={j} className="flex items-start gap-2">
                  <Sparkles className="mt-0.5 h-3.5 w-3.5 shrink-0 text-lightblue" />
                  <span>{item[lang]}</span>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    ) : (
      <p className="text-gray-400">{na}</p>
    );

  const departuresBody =
    tour.departures.length > 0 ? (
      <div className="flex flex-wrap gap-3">
        {tour.departures.map((d) => (
          <span
            key={d}
            className="inline-flex items-center gap-2 rounded-full bg-success/10 px-4 py-2 text-xs font-semibold text-success"
          >
            <span className="h-2 w-2 rounded-full bg-success" />
            {d}
          </span>
        ))}
      </div>
    ) : (
      <p className="text-gray-400">{na}</p>
    );

  const IconSm = ({ children }: { children: React.ReactNode }) => (
    <span className="flex h-5 w-5 items-center justify-center text-lightblue">{children}</span>
  );

  const accordionItems: TourAccordionItem[] = [
    {
      title: t('tours.overview'),
      icon: <IconSm><Info className="h-4 w-4" /></IconSm>,
      empty: false,
      body: tour.overview[lang],
    },
    {
      title: t('tours.duration'),
      icon: <IconSm><Clock className="h-4 w-4" /></IconSm>,
      empty: false,
      body: tour.duration[lang],
    },
    {
      title: t('tours.route'),
      icon: <IconSm><RouteIcon className="h-4 w-4" /></IconSm>,
      empty: tour.route[lang].length === 0,
      body: routeBody,
    },
    {
      title: t('tours.includes'),
      icon: <IconSm><ListChecks className="h-4 w-4" /></IconSm>,
      empty: tour.includes[lang].length === 0,
      body: includesBody,
    },
    {
      title: t('tours.hotels'),
      icon: <IconSm><Hotel className="h-4 w-4" /></IconSm>,
      empty: tour.hotels.length === 0,
      body: hotelsBody,
    },
    {
      title: t('tours.optionalActivities'),
      icon: <IconSm><Sparkles className="h-4 w-4" /></IconSm>,
      empty: tour.optionalActivities.length === 0,
      body: optionalBody,
    },
    {
      title: t('tours.guaranteedDepartures'),
      icon: <IconSm><Calendar className="h-4 w-4" /></IconSm>,
      empty: tour.departures.length === 0,
      body: departuresBody,
    },
    {
      title: t('tours.itinerary'),
      icon: <IconSm><MapPin className="h-4 w-4" /></IconSm>,
      empty: tour.itinerary.length === 0,
      body: itineraryBody,
    },
    {
      title: t('tours.additionalInfo'),
      icon: <IconSm><Info className="h-4 w-4" /></IconSm>,
      empty: !tour.additionalInfo[lang],
      body: tour.additionalInfo[lang] || na,
    },
  ];

  const ctaMessage = `${WHATSAPP_DEFAULT_MESSAGE[lang]} — ${title}`;

  return (
    <article className={`reveal reveal-delay-${(index % 3) + 1} group flex flex-col overflow-hidden rounded-3xl bg-white shadow-xl shadow-darkblue/5 ring-1 ring-gray-100 transition-all duration-500 hover:-translate-y-1 hover:shadow-2xl`}>
      <div className="relative h-64 overflow-hidden">
        <img
          src={tour.image}
          alt={title}
          loading="lazy"
          className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-110"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-darkblue/80 via-darkblue/20 to-transparent" />
        <div className="absolute bottom-0 left-0 right-0 p-6 text-white">
          <div className="mb-2 flex flex-wrap items-center gap-3 text-xs">
            <span className="inline-flex items-center gap-1.5 rounded-full bg-white/15 px-3 py-1 backdrop-blur-sm">
              <Clock className="h-3 w-3" />
              {tour.duration[lang]}
            </span>
            {tour.price && (
              <span className="inline-flex items-center gap-1.5 rounded-full bg-primary px-3 py-1 font-semibold">
                {tour.price}
              </span>
            )}
          </div>
          <h3 className="font-display text-2xl font-semibold">{title}</h3>
        </div>
      </div>

      <div className="flex flex-1 flex-col p-6">
        {routeList && (
          <p className="mb-4 flex items-start gap-2 text-sm text-gray-500">
            <MapPin className="mt-0.5 h-4 w-4 shrink-0 text-lightblue" />
            <span>{routeList}</span>
          </p>
        )}

        <TourAccordion items={accordionItems} tourId={tour.id} />

        <div className="mt-6 flex flex-wrap gap-3 border-t border-gray-100 pt-5">
          <a
            href={buildWhatsAppUrl(ctaMessage)}
            target="_blank"
            rel="noopener noreferrer"
            className="btn-primary flex-1 !py-3"
          >
            <MessageCircle className="h-4 w-4" />
            {t('tours.requestInfo')}
          </a>
          <a
            href={tour.brochureUrl}
            className="inline-flex items-center justify-center gap-2 rounded-full border border-primary/30 px-5 py-3 text-sm font-semibold uppercase tracking-wider text-primary transition-all hover:bg-primary hover:text-white"
          >
            <Download className="h-4 w-4" />
            <span className="hidden sm:inline">{t('tours.brochure')}</span>
          </a>
        </div>
      </div>
    </article>
  );
}

export default function Tours() {
  const { t } = useLanguage();
  return (
    <section id="tours" className="bg-gray-50 py-20 sm:py-28">
      <div className="container-px">
        <div className="mx-auto max-w-3xl text-center">
          <span className="reveal section-eyebrow">{t('tours.eyebrow')}</span>
          <h2 className="reveal reveal-delay-1 section-title">{t('tours.title')}</h2>
          <p className="reveal reveal-delay-2 mx-auto mt-5 max-w-2xl text-gray-600">
            {t('tours.subtitle')}
          </p>
        </div>

        <div className="mt-14 grid grid-cols-1 gap-8 lg:grid-cols-3">
          {tours.map((tour, i) => (
            <TourCardComponent key={tour.id} tour={tour} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
}
