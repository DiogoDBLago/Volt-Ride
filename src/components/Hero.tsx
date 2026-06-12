import { ArrowDown } from 'lucide-react';
import type { Lang } from '../translations';
import { translations } from '../translations';

interface HeroProps {
  lang: Lang;
}

export default function Hero({ lang }: HeroProps) {
  const t = translations[lang].hero;

  return (
    <section className="relative min-h-screen flex flex-col justify-center overflow-hidden">
      {/* Background image */}
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage:
            'url(https://images.pexels.com/photos/1149601/pexels-photo-1149601.jpeg?auto=compress&cs=tinysrgb&w=1920)',
        }}
      />

      {/* Layered overlays for depth and grain feel */}
      <div className="absolute inset-0 bg-gradient-to-r from-volt-black/92 via-volt-black/75 to-volt-black/40" />
      <div className="absolute inset-0 bg-gradient-to-t from-volt-black via-transparent to-volt-black/30" />
      {/* Noise texture overlay */}
      <div
        className="absolute inset-0 opacity-20 mix-blend-overlay pointer-events-none"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='400' height='400'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.75' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='400' height='400' filter='url(%23n)' opacity='1'/%3E%3C/svg%3E")`,
        }}
      />

      {/* Yellow accent bar */}
      <div className="absolute left-0 top-0 bottom-0 w-1 bg-volt-yellow" />

      <div className="relative z-10 max-w-7xl mx-auto px-6 pt-24 pb-20 w-full">
        <div className="max-w-3xl">
          {/* Tagline */}
          <p className="text-volt-yellow font-body font-semibold text-xs tracking-[0.3em] uppercase mb-6 animate-fade-in">
            {t.tagline}
          </p>

          {/* Main headline */}
          <h1 className="font-display text-[clamp(4rem,12vw,9rem)] leading-[0.9] tracking-tight text-white mb-8 animate-fade-up">
            {t.headline.split('\n').map((line, i) => (
              <span key={i} className="block">
                {i === 1 ? (
                  <>
                    <span className="text-volt-yellow">{line.charAt(0)}</span>
                    {line.slice(1)}
                  </>
                ) : (
                  line
                )}
              </span>
            ))}
          </h1>

          {/* Subtext */}
          <p className="text-white/65 font-body font-light text-lg leading-relaxed max-w-xl mb-10 animate-fade-up">
            {t.sub}
          </p>

          {/* CTAs */}
          <div className="flex flex-wrap items-center gap-4 animate-fade-up">
            <button
              onClick={() => document.getElementById('services')?.scrollIntoView({ behavior: 'smooth' })}
              className="group bg-volt-yellow hover:bg-volt-yellow-dark text-volt-black font-body font-bold text-sm tracking-widest uppercase px-8 py-4 transition-all duration-200 hover:shadow-[0_0_30px_rgba(255,222,0,0.4)] active:scale-95"
            >
              {t.cta}
            </button>
            <button
              onClick={() => document.getElementById('about')?.scrollIntoView({ behavior: 'smooth' })}
              className="text-white/70 hover:text-volt-yellow font-body font-medium text-sm tracking-widest uppercase border border-white/30 hover:border-volt-yellow/60 px-8 py-4 transition-all duration-200"
            >
              {t.ctaSub}
            </button>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <button
        onClick={() => document.getElementById('about')?.scrollIntoView({ behavior: 'smooth' })}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10 flex flex-col items-center gap-2 text-white/40 hover:text-volt-yellow transition-colors group"
        aria-label="Scroll down"
      >
        <span className="font-body text-[10px] tracking-[0.3em] uppercase">Scroll</span>
        <ArrowDown size={16} className="animate-bounce" />
      </button>
    </section>
  );
}
