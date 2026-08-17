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

<<<<<<< HEAD
  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-500 ${
        solid
          ? 'bg-darkblue/95 shadow-lg shadow-darkblue/10 backdrop-blur-md'
          : 'bg-gradient-to-b from-black/60 to-transparent'
      }`}
=======
  const headerBg = solid
    ? 'bg-white shadow-lg shadow-black/5'
    : 'bg-gradient-to-b from-black/60 to-transparent';

  const linkText = solid
    ? 'text-black/80 hover:text-black'
    : 'text-white/90 hover:text-white';

  const underlineBg = solid ? 'bg-black' : 'bg-white';

  const toggleBorder = solid
    ? 'border-black/20 text-black hover:bg-black/5'
    : 'border-white/30 text-white hover:bg-white/10';

  const dropdownBg = solid
    ? 'border-black/10 bg-white'
    : 'border-white/10 bg-darkblue/95';

  const dropdownText = solid ? 'text-black' : 'text-white';

  const menuBtn = solid
    ? 'text-black hover:bg-black/5'
    : 'text-white hover:bg-white/10';

  const drawerBorder = solid ? 'border-black/10' : 'border-white/10';
  const drawerLink = solid
    ? 'text-black/80 hover:bg-black/5'
    : 'text-white/90 hover:bg-white/10';
  const drawerLang = solid
    ? 'border-black/20 text-black/80'
    : 'border-white/20 text-white/80';

  const logoWrap = solid
    ? 'bg-transparent'
    : 'bg-white/15 backdrop-blur-sm group-hover:bg-white/20';

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-300 ${headerBg}`}
>>>>>>> 2e783f770f9eea0744c7f745962db93abbbfe08c
    >
      <nav className="container-px flex h-16 items-center justify-between sm:h-20 lg:h-28">
        {/* Brand logo */}
        <a
          href="#inicio"
          className="group flex items-center"
          aria-label="Viajando con Gonzalo Tours"
        >
<<<<<<< HEAD
          <span className="flex items-center justify-center rounded-xl bg-white/15 px-2 py-1 backdrop-blur-sm transition-all duration-300 group-hover:bg-white/20 sm:px-3 sm:py-1.5">
=======
          <span className={`flex items-center justify-center rounded-xl px-2 py-1 transition-all duration-300 sm:px-3 sm:py-1.5 ${logoWrap}`}>
>>>>>>> 2e783f770f9eea0744c7f745962db93abbbfe08c
            <img
              src="VG_LOGO.png"
              alt="Viajando con Gonzalo Tours"
              width={320}
              height={320}
              className="h-11 w-auto object-contain sm:h-16 lg:h-24"
            />
          </span>
        </a>

        {/* Desktop nav links */}
        <ul className="hidden items-center gap-1 lg:flex">
          {navItems.map((item) => (
            <li key={item.key}>
              <a
                href={item.href}
<<<<<<< HEAD
                className="group relative px-3.5 py-2 text-sm font-medium text-white/90 transition-colors hover:text-white"
              >
                {t(item.key)}
                <span className="absolute inset-x-3.5 -bottom-0.5 h-px origin-left scale-x-0 bg-white transition-transform duration-300 group-hover:scale-x-100" />
=======
                className={`group relative px-3.5 py-2 text-sm font-medium transition-colors duration-300 ${linkText}`}
              >
                {t(item.key)}
                <span className={`absolute inset-x-3.5 -bottom-0.5 h-px origin-left scale-x-0 transition-transform duration-300 group-hover:scale-x-100 ${underlineBg}`} />
>>>>>>> 2e783f770f9eea0744c7f745962db93abbbfe08c
              </a>
            </li>
          ))}
        </ul>

        {/* Right controls */}
        <div className="flex items-center gap-2">
          <div className="relative">
            <button
              onClick={() => setLangOpen((o) => !o)}
              onBlur={() => setTimeout(() => setLangOpen(false), 150)}
<<<<<<< HEAD
              className="flex items-center gap-1.5 rounded-full border border-white/30 px-2.5 py-1.5 text-xs font-semibold text-white transition-colors hover:bg-white/10 sm:px-3"
=======
              className={`flex items-center gap-1.5 rounded-full border px-2.5 py-1.5 text-xs font-semibold transition-colors duration-300 sm:px-3 ${toggleBorder}`}
>>>>>>> 2e783f770f9eea0744c7f745962db93abbbfe08c
              aria-label={t('common.language')}
            >
              <Globe className="h-3.5 w-3.5" />
              <span className="uppercase">{lang}</span>
              <ChevronDown
                className={`h-3 w-3 transition-transform ${langOpen ? 'rotate-180' : ''}`}
              />
            </button>
            {langOpen && (
<<<<<<< HEAD
              <div className="absolute right-0 mt-2 w-32 overflow-hidden rounded-xl border border-white/10 bg-darkblue/95 shadow-2xl backdrop-blur-md">
=======
              <div className={`absolute right-0 mt-2 w-32 overflow-hidden rounded-xl border shadow-2xl backdrop-blur-md ${dropdownBg}`}>
>>>>>>> 2e783f770f9eea0744c7f745962db93abbbfe08c
                {(['es', 'en'] as Language[]).map((l) => (
                  <button
                    key={l}
                    onMouseDown={(e) => {
                      e.preventDefault();
                      setLang(l);
                      setLangOpen(false);
                    }}
<<<<<<< HEAD
                    className={`flex w-full items-center justify-between px-3 py-2 text-xs font-medium text-white transition-colors hover:bg-primary/40 ${
                      lang === l ? 'bg-primary/30' : ''
                    }`}
=======
                    className={`flex w-full items-center justify-between px-3 py-2 text-xs font-medium transition-colors hover:bg-primary/40 ${
                      lang === l ? 'bg-primary/30' : ''
                    } ${dropdownText}`}
>>>>>>> 2e783f770f9eea0744c7f745962db93abbbfe08c
                  >
                    <span>{l === 'es' ? 'Español' : 'English'}</span>
                    <span>{l === 'es' ? '🇨🇷' : '🇺🇸'}</span>
                  </button>
                ))}
              </div>
            )}
          </div>

          <a href="#contacto" className="btn-primary hidden !px-5 !py-2.5 !text-xs lg:inline-flex">
            {t('nav.startTrip')}
          </a>

          <button
            onClick={() => setMobileOpen((o) => !o)}
<<<<<<< HEAD
            className="flex h-10 w-10 items-center justify-center rounded-full text-white transition-colors hover:bg-white/10 lg:hidden"
=======
            className={`flex h-10 w-10 items-center justify-center rounded-full transition-colors duration-300 lg:hidden ${menuBtn}`}
>>>>>>> 2e783f770f9eea0744c7f745962db93abbbfe08c
            aria-label={t('common.menu')}
          >
            {mobileOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </div>
      </nav>

      {/* Mobile drawer */}
      {mobileOpen && (
        <div className="lg:hidden">
<<<<<<< HEAD
          <div className="container-px border-t border-white/10 py-4">
=======
          <div className={`container-px border-t py-4 transition-colors duration-300 ${drawerBorder}`}>
>>>>>>> 2e783f770f9eea0744c7f745962db93abbbfe08c
            <ul className="flex flex-col gap-1">
              {navItems.map((item) => (
                <li key={item.key}>
                  <a
                    href={item.href}
                    onClick={() => setMobileOpen(false)}
<<<<<<< HEAD
                    className="block rounded-lg px-3 py-2.5 text-sm font-medium text-white/90 transition-colors hover:bg-white/10"
=======
                    className={`block rounded-lg px-3 py-2.5 text-sm font-medium transition-colors ${drawerLink}`}
>>>>>>> 2e783f770f9eea0744c7f745962db93abbbfe08c
                  >
                    {t(item.key)}
                  </a>
                </li>
              ))}
            </ul>
<<<<<<< HEAD
            <div className="mt-4 flex items-center gap-2 border-t border-white/10 pt-4">
=======
            <div className={`mt-4 flex items-center gap-2 border-t pt-4 ${drawerBorder}`}>
>>>>>>> 2e783f770f9eea0744c7f745962db93abbbfe08c
              {(['es', 'en'] as Language[]).map((l) => (
                <button
                  key={l}
                  onClick={() => setLang(l)}
                  className={`flex items-center gap-1.5 rounded-full border px-3 py-1.5 text-xs font-semibold transition-colors ${
                    lang === l
                      ? 'border-primary bg-primary text-white'
<<<<<<< HEAD
                      : 'border-white/20 text-white/80'
=======
                      : drawerLang
>>>>>>> 2e783f770f9eea0744c7f745962db93abbbfe08c
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
