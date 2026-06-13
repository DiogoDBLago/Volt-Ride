import type { Lang } from '../translations';
import { translations } from '../translations';

interface AboutProps {
  lang: Lang;
}

export default function About({ lang }: AboutProps) {
  const t = translations[lang].about;

  return (
    <section id="about" className="bg-volt-black py-28 px-6 relative overflow-hidden">
      {/* Decorative grain overlay */}
      <div
        className="absolute inset-0 opacity-[0.03] pointer-events-none"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='300' height='300'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.85' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='300' height='300' filter='url(%23n)'/%3E%3C/svg%3E")`,
        }}
      />

      {/* Yellow vertical accent */}
      <div className="absolute right-0 top-1/4 bottom-1/4 w-0.5 bg-volt-yellow/20" />

      <div className="max-w-7xl mx-auto relative">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-center">
          {/* Left: text */}
          <div>
            <p className="text-volt-yellow font-body font-semibold text-xs tracking-[0.3em] uppercase mb-5">
              {t.label}
            </p>
            <h2 className="font-display text-[clamp(2.8rem,6vw,5rem)] leading-[0.95] tracking-tight text-white mb-8">
              {t.headline}
            </h2>
            <div className="space-y-5">
              <p className="text-volt-gray-200 font-body font-light text-base leading-[1.8]">
                {t.body1}
              </p>
              <p className="text-volt-gray-200 font-body font-light text-base leading-[1.8]">
                {t.body2}
              </p>
            </div>
          </div>

          {/* Right: stats */}
          <div className="grid grid-cols-1 gap-px bg-white/10 border border-white/10">
            {[t.stat1, t.stat2, t.stat3].map((stat, i) => (
              <div
                key={i}
                className="bg-volt-gray-800 p-10 group hover:bg-volt-gray-700 transition-colors duration-200"
              >
                <div className="flex items-end gap-4">
                  <span className="font-display text-[clamp(3rem,7vw,5.5rem)] leading-none text-volt-yellow tracking-tight">
                    {stat.value}
                  </span>
                  <div className="pb-2 border-l border-white/20 pl-4">
                    <p className="text-white/60 font-body font-medium text-sm tracking-widest uppercase">
                      {stat.label}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
