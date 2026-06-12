import { useState, useEffect } from 'react';
import { Zap, ChevronDown, Menu, X } from 'lucide-react';
import type { Lang } from '../translations';
import { translations } from '../translations';

interface HeaderProps {
  lang: Lang;
  setLang: (lang: Lang) => void;
}

const LANGS: Lang[] = ['EN', 'PT', 'ES'];

export default function Header({ lang, setLang }: HeaderProps) {
  const t = translations[lang].nav;
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [langOpen, setLangOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const scrollTo = (id: string) => {
    setMobileOpen(false);
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled || mobileOpen ? 'bg-volt-black/95 backdrop-blur-md border-b border-white/5 py-3' : 'bg-transparent py-5'
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 flex items-center justify-between">
        {/* Logo */}
        <button
          onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
          className="flex items-center gap-2 group"
          aria-label="Volt Ride"
        >
          <div className="relative flex items-center">
            <span className="font-display text-3xl tracking-wider text-white leading-none">VOLT</span>
            <Zap
              className="text-volt-yellow fill-volt-yellow mx-0.5 transition-transform duration-200 group-hover:scale-110"
              size={22}
              strokeWidth={0}
            />
            <span className="font-display text-3xl tracking-wider text-white leading-none">RIDE</span>
          </div>
        </button>

        {/* Desktop nav */}
        <nav className="hidden md:flex items-center gap-8">
          {[
            { label: t.about, id: 'about' },
            { label: t.services, id: 'services' },
            { label: t.dublin, id: 'dublin' },
            { label: t.contact, id: 'footer' },
          ].map(({ label, id }) => (
            <button
              key={id}
              onClick={() => scrollTo(id)}
              className="text-sm font-medium tracking-widest uppercase text-white/70 hover:text-volt-yellow transition-colors duration-200"
            >
              {label}
            </button>
          ))}
        </nav>

        {/* Right actions */}
        <div className="flex items-center gap-4">
          {/* Language selector */}
          <div className="relative">
            <button
              onClick={() => setLangOpen(!langOpen)}
              className="flex items-center gap-1.5 text-sm font-medium tracking-widest text-white/70 hover:text-volt-yellow transition-colors duration-200 border border-white/20 hover:border-volt-yellow/50 px-3 py-1.5 rounded"
            >
              {lang}
              <ChevronDown
                size={14}
                className={`transition-transform duration-200 ${langOpen ? 'rotate-180' : ''}`}
              />
            </button>
            {langOpen && (
              <div className="absolute right-0 top-full mt-2 bg-volt-gray-700 border border-white/10 rounded shadow-2xl overflow-hidden min-w-[80px]">
                {LANGS.map((l) => (
                  <button
                    key={l}
                    onClick={() => { setLang(l); setLangOpen(false); }}
                    className={`w-full text-left px-4 py-2.5 text-sm font-medium tracking-widest transition-colors duration-150 ${
                      l === lang
                        ? 'text-volt-yellow bg-white/5'
                        : 'text-white/70 hover:text-white hover:bg-white/5'
                    }`}
                  >
                    {l}
                  </button>
                ))}
              </div>
            )}
          </div>

          {/* Mobile menu toggle */}
          <button
            onClick={() => setMobileOpen(!mobileOpen)}
            className="md:hidden text-white/70 hover:text-volt-yellow transition-colors"
            aria-label="Toggle menu"
          >
            {mobileOpen ? <X size={22} /> : <Menu size={22} />}
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      {mobileOpen && (
        <div className="md:hidden absolute top-full left-0 right-0 bg-volt-black border-t border-white/10 px-6 py-8 shadow-2xl animate-slide-in">
          <nav className="flex flex-col gap-6">
            {[
              { label: t.about, id: 'about' },
              { label: t.services, id: 'services' },
              { label: t.dublin, id: 'dublin' },
              { label: t.contact, id: 'footer' },
            ].map(({ label, id }) => (
              <button
                key={id}
                onClick={() => scrollTo(id)}
                className="text-left text-xl font-medium tracking-widest uppercase text-white/90 hover:text-volt-yellow transition-colors"
              >
                {label}
              </button>
            ))}
          </nav>
        </div>
      )}
    </header>
  );
}
