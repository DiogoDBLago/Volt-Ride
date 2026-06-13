import { Award, Star, MapPin, DollarSign, Clock, Leaf } from 'lucide-react';
import type { Lang } from '../translations';
import { translations } from '../translations';

interface WhyChooseUsProps {
  lang: Lang;
}

const ICONS = [Award, Star, MapPin, DollarSign, Clock, Leaf];

export default function WhyChooseUs({ lang }: WhyChooseUsProps) {
  const t = translations[lang].why;

  return (
    <section className="bg-volt-gray-800 py-28 px-6 relative overflow-hidden">
      {/* Background accent */}
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-volt-yellow/20 to-transparent" />
      <div className="absolute -top-px right-1/4 w-px h-32 bg-volt-yellow/30" />

      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
          {/* Left: heading */}
          <div className="lg:sticky lg:top-32">
            <p className="text-volt-yellow font-body font-semibold text-xs tracking-[0.3em] uppercase mb-5">
              {t.label}
            </p>
            <h2 className="font-display text-[clamp(3.5rem,7vw,6.5rem)] leading-[0.9] tracking-tight text-white mb-8">
              {t.headline.split('\n').map((line, i) => (
                <span key={i} className="block">
                  {line}
                </span>
              ))}
            </h2>
            <div className="w-16 h-1 bg-volt-yellow" />
          </div>

          {/* Right: benefits grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-px bg-white/8">
            {t.items.map((item, i) => {
              const Icon = ICONS[i];
              return (
                <div
                  key={i}
                  className="group bg-volt-gray-800 hover:bg-volt-gray-700 p-8 transition-all duration-200 relative overflow-hidden"
                >
                  {/* Hover accent */}
                  <div className="absolute top-0 left-0 w-0.5 h-0 bg-volt-yellow group-hover:h-full transition-all duration-300" />

                  <div className="mb-5">
                    <div className="w-10 h-10 border border-volt-yellow/30 group-hover:border-volt-yellow group-hover:bg-volt-yellow/10 flex items-center justify-center transition-all duration-200">
                      <Icon size={18} className="text-volt-yellow" strokeWidth={1.5} />
                    </div>
                  </div>
                  <h3 className="font-body font-bold text-white text-sm tracking-wider uppercase mb-3">
                    {item.title}
                  </h3>
                  <p className="text-volt-gray-300 font-body font-light text-sm leading-[1.7]">
                    {item.desc}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
