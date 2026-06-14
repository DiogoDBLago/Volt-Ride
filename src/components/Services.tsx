import { Bike, Wrench, ShoppingBag, ArrowRight } from 'lucide-react';
import type { Lang } from '../translations';
import { translations } from '../translations';

interface ServicesProps {
  lang: Lang;
}

const SERVICE_IMAGES = [
  '/images/blue_ebike.png',
  '/images/maintenance.jpg',
  '/images/trek_ebike.jpg',
];

const SERVICE_ICONS = [Bike, Wrench, ShoppingBag];

export default function Services({ lang }: ServicesProps) {
  const t = translations[lang].services;

  return (
    <section id="services" className="bg-volt-black py-28 px-6 relative overflow-hidden">
      {/* Decorative elements */}
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-volt-yellow/30 to-transparent" />

      <div className="max-w-7xl mx-auto">
        {/* Section header */}
        <div className="mb-16">
          <p className="text-volt-yellow font-body font-semibold text-xs tracking-[0.3em] uppercase mb-5">
            {t.label}
          </p>
          <h2 className="font-display text-[clamp(3rem,7vw,6rem)] leading-[0.9] tracking-tight text-white">
            {t.headline.split('\n').map((line, i) => (
              <span key={i} className="block">
                {line}
              </span>
            ))}
          </h2>
        </div>

        {/* Cards grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-px bg-white/8">
          {t.items.map((item, i) => {
            const Icon = SERVICE_ICONS[i];
            return (
              <div
                key={i}
                className="group bg-volt-gray-800 hover:bg-volt-gray-700 transition-all duration-300 overflow-hidden relative flex flex-col"
              >
                {/* Card image */}
                <div className="relative h-56 overflow-hidden">
                  <div
                    className="absolute inset-0 bg-cover bg-center transition-transform duration-500 group-hover:scale-105"
                    style={{ backgroundImage: `url(${SERVICE_IMAGES[i]})` }}
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-volt-gray-800 via-volt-black/40 to-transparent" />
                  {/* Icon badge */}
                  <div className="absolute bottom-4 left-6">
                    <div className="w-12 h-12 bg-volt-yellow flex items-center justify-center group-hover:bg-volt-yellow-dark transition-colors duration-200">
                      <Icon size={22} className="text-volt-black" strokeWidth={2} />
                    </div>
                  </div>
                  {/* Number */}
                  <div className="absolute top-4 right-5">
                    <span className="font-display text-5xl text-white/10 leading-none select-none">
                      0{i + 1}
                    </span>
                  </div>
                </div>

                {/* Card content */}
                <div className="p-8 flex flex-col flex-1">
                  <h3 className="font-display text-3xl tracking-tight text-white mb-4 group-hover:text-volt-yellow transition-colors duration-200">
                    {item.title}
                  </h3>
                  <p className="text-volt-gray-300 font-body font-light text-sm leading-[1.8] flex-1 mb-6">
                    {item.desc}
                  </p>
                  <button
                    onClick={() => document.getElementById('footer')?.scrollIntoView({ behavior: 'smooth' })}
                    className="inline-flex items-center gap-2 text-volt-yellow font-body font-semibold text-xs tracking-widest uppercase group-hover:gap-3 transition-all duration-200"
                  >
                    {item.cta}
                    <ArrowRight size={14} className="transition-transform duration-200 group-hover:translate-x-1" />
                  </button>
                </div>

                {/* Bottom accent line */}
                <div className="h-0.5 bg-volt-yellow scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left" />
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
