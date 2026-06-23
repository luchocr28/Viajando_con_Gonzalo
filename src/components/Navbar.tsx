import { useEffect, useState } from 'react';
import { Menu, X, Globe, ChevronDown } from 'lucide-react';
import { useLanguage } from '../hooks/useLanguage';
import type { TranslationKey } from '../i18n/translations';
import type { Language } from '../i18n/translations';

const navItems: { key: TranslationKey; href: string }[] = [
  { key: 'nav.inicio', href: '#inicio' },
  { key: 'nav.about', href: '#sobre-nosotros' },
  { key: 'nav.tours', href: '#tours' },
  { key: 'nav.gallery', href: '#galeria' },
  { key: 'nav.why', href: '#por-que-elegirnos' },
  { key: 'nav.contact', href: '#contacto' },
];

export default function Navbar() {
  const { t, lang, setLang } = useLanguage();
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [langOpen, setLangOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = mobileOpen ? 'hidden' : '';
    return () => {
      document.body.style.overflow = '';
    };
  }, [mobileOpen]);

  const solid = scrolled || mobileOpen;

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-500 ${
        solid
          ? 'bg-darkblue/95 shadow-lg shadow-darkblue/10 backdrop-blur-md'
          : 'bg-gradient-to-b from-black/60 to-transparent'
      }`}
    >
      <nav className="container-px flex h-24 items-center justify-between lg:h-28">
        {/* Brand logo */}
        <a
          href="#inicio"
          className="group flex items-center"
          aria-label="Viajando con Gonzalo Tours"
        >
          <span className="flex items-center justify-center rounded-2xl bg-white/15 backdrop-blur-sm transition-all duration-300 group-hover:bg-white/20">
            <img
              src="/VG_LOGO.png"
              alt="Viajando con Gonzalo Tours"
              width={320}
              height={320}
              className="h-20 w-auto object-contain lg:h-24"
            />
          </span>
        </a>

        {/* Desktop nav links */}
        <ul className="hidden items-center gap-1 lg:flex">
          {navItems.map((item) => (
            <li key={item.key}>
              <a
                href={item.href}
                className="group relative px-3.5 py-2 text-sm font-medium text-white/90 transition-colors hover:text-white"
              >
                {t(item.key)}
                <span className="absolute inset-x-3.5 -bottom-0.5 h-px origin-left scale-x-0 bg-white transition-transform duration-300 group-hover:scale-x-100" />
              </a>
            </li>
          ))}
        </ul>

        {/* Right controls */}
        <div className="flex items-center gap-2">
          <div className="relative hidden sm:block">
            <button
              onClick={() => setLangOpen((o) => !o)}
              onBlur={() => setTimeout(() => setLangOpen(false), 150)}
              className="flex items-center gap-1.5 rounded-full border border-white/30 px-3 py-1.5 text-xs font-semibold text-white transition-colors hover:bg-white/10"
              aria-label={t('common.language')}
            >
              <Globe className="h-3.5 w-3.5" />
              <span className="uppercase">{lang}</span>
              <ChevronDown
                className={`h-3 w-3 transition-transform ${langOpen ? 'rotate-180' : ''}`}
              />
            </button>
            {langOpen && (
              <div className="absolute right-0 mt-2 w-32 overflow-hidden rounded-xl border border-white/10 bg-darkblue/95 shadow-2xl backdrop-blur-md">
                {(['es', 'en'] as Language[]).map((l) => (
                  <button
                    key={l}
                    onMouseDown={(e) => {
                      e.preventDefault();
                      setLang(l);
                      setLangOpen(false);
                    }}
                    className={`flex w-full items-center justify-between px-3 py-2 text-xs font-medium text-white transition-colors hover:bg-primary/40 ${
                      lang === l ? 'bg-primary/30' : ''
                    }`}
                  >
                    <span>{l === 'es' ? 'Español' : 'English'}</span>
                    <span>{l === 'es' ? '🇨🇷' : '🇺🇸'}</span>
                  </button>
                ))}
              </div>
            )}
          </div>

          <a href="#contacto" className="btn-primary hidden !px-5 !py-2.5 !text-xs xl:inline-flex">
            {t('nav.startTrip')}
          </a>

          <button
            onClick={() => setMobileOpen((o) => !o)}
            className="flex h-10 w-10 items-center justify-center rounded-full text-white transition-colors hover:bg-white/10 lg:hidden"
            aria-label={t('common.menu')}
          >
            {mobileOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </div>
      </nav>

      {/* Mobile drawer */}
      {mobileOpen && (
        <div className="lg:hidden">
          <div className="container-px border-t border-white/10 py-4">
            <ul className="flex flex-col gap-1">
              {navItems.map((item) => (
                <li key={item.key}>
                  <a
                    href={item.href}
                    onClick={() => setMobileOpen(false)}
                    className="block rounded-lg px-3 py-2.5 text-sm font-medium text-white/90 transition-colors hover:bg-white/10"
                  >
                    {t(item.key)}
                  </a>
                </li>
              ))}
            </ul>
            <div className="mt-4 flex items-center gap-2 border-t border-white/10 pt-4">
              {(['es', 'en'] as Language[]).map((l) => (
                <button
                  key={l}
                  onClick={() => setLang(l)}
                  className={`flex items-center gap-1.5 rounded-full border px-3 py-1.5 text-xs font-semibold transition-colors ${
                    lang === l
                      ? 'border-primary bg-primary text-white'
                      : 'border-white/20 text-white/80'
                  }`}
                >
                  <span>{l === 'es' ? '🇨🇷' : '🇺🇸'}</span>
                  <span className="uppercase">{l}</span>
                </button>
              ))}
            </div>
            <a
              href="#contacto"
              onClick={() => setMobileOpen(false)}
              className="btn-primary mt-4 w-full"
            >
              {t('nav.startTrip')}
            </a>
          </div>
        </div>
      )}
    </header>
  );
}
