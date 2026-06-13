import type { Lang } from '../translations';
import { translations } from '../translations';

interface DublinCityProps {
  lang: Lang;
}

export default function DublinCity({ lang }: DublinCityProps) {
  const t = translations[lang].dublin;

  return (
    <section id="dublin" className="relative min-h-[70vh] flex items-center overflow-hidden">
      {/* Dublin background image */}
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage:
            'url(https://images.pexels.com/photos/2416600/pexels-photo-2416600.jpeg?auto=compress&cs=tinysrgb&w=1920)',
        }}
      />

      {/* Dark overlay with grain */}
      <div className="absolute inset-0 bg-gradient-to-r from-volt-black/90 to-volt-black/60" />
      <div className="absolute inset-0 bg-volt-black/30" />
      <div
        className="absolute inset-0 opacity-[0.08] mix-blend-overlay pointer-events-none"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='300' height='300'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.75' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='300' height='300' filter='url(%23n)'/%3E%3C/svg%3E")`,
        }}
      />

      {/* Bottom gradient to connect to next section */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-volt-black to-transparent" />

      <div className="relative z-10 max-w-7xl mx-auto px-6 py-24 w-full">
        <div className="max-w-2xl">
          <p className="text-volt-yellow font-body font-semibold text-xs tracking-[0.3em] uppercase mb-5">
            {t.label}
          </p>
          <h2 className="font-display text-[clamp(3rem,8vw,7rem)] leading-[0.9] tracking-tight text-white mb-8">
            {t.headline.split('\n').map((line, i) => (
              <span key={i} className="block">
                {line}
              </span>
            ))}
          </h2>
          <p className="text-white/70 font-body font-light text-lg leading-relaxed mb-10 max-w-lg">
            {t.body}
          </p>
          <button
            onClick={() => document.getElementById('services')?.scrollIntoView({ behavior: 'smooth' })}
            className="inline-flex items-center gap-3 bg-volt-yellow hover:bg-volt-yellow-dark text-volt-black font-body font-bold text-sm tracking-widest uppercase px-8 py-4 transition-all duration-200 hover:shadow-[0_0_30px_rgba(255,222,0,0.35)] active:scale-95"
          >
            {t.cta}
          </button>
        </div>
      </div>
    </section>
  );
}
