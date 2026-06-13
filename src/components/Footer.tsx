import { Instagram, Mail, Phone, MapPin, ExternalLink } from 'lucide-react';
import type { Lang } from '../translations';
import { translations } from '../translations';

interface FooterProps {
  lang: Lang;
}

const INSTAGRAM_PHOTOS = [
  '/images/instagram/instagram_1.png',
  '/images/instagram/instagram_2.png',
  '/images/instagram/instagram_4.png',
  '/images/instagram/instagram_3.png',
  '/images/instagram/instagram_5.png',
];
export default function Footer({ lang }: FooterProps) {
  const t = translations[lang].footer;

  return (
    <footer id="footer" className="bg-volt-black border-t border-white/10">
      {/* Instagram section */}
      <div className="py-20 px-6 border-b border-white/10">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-6 mb-10">
            <div>
              <p className="text-volt-yellow font-body font-semibold text-xs tracking-[0.3em] uppercase mb-3">
                {t.follow}
              </p>
              <a
                href="https://www.instagram.com/voltride_ebikes"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 group"
              >
                <Instagram size={20} className="text-white/40 group-hover:text-volt-yellow transition-colors" />
                <span className="font-body font-medium text-white/60 group-hover:text-volt-yellow transition-colors text-sm tracking-wide">
                  {t.followSub}
                </span>
                <ExternalLink size={12} className="text-white/30 group-hover:text-volt-yellow transition-colors" />
              </a>
            </div>
            <a
              href="https://www.instagram.com/voltride_ebikes"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 border border-white/20 hover:border-volt-yellow text-white/60 hover:text-volt-yellow font-body font-medium text-xs tracking-widest uppercase px-5 py-3 transition-all duration-200"
            >
              <Instagram size={14} />
              Follow Us
            </a>
          </div>

          {/* Instagram grid */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-2 md:gap-3">
            {INSTAGRAM_PHOTOS.map((src, i) => (
              <a
                key={i}
                href="https://www.instagram.com/voltride_ebikes"
                target="_blank"
                rel="noopener noreferrer"
                className={`group relative overflow-hidden bg-volt-gray-700 rounded-lg border border-white/5 transition-all duration-300 ${
                  i === 0 ? 'col-span-2 row-span-2 aspect-square' : 'col-span-1 row-span-1 aspect-square'
                }`}
              >
                <img
                  src={src}
                  alt={`Volt Ride Instagram post ${i + 1}`}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-volt-black/0 group-hover:bg-volt-black/60 backdrop-blur-[2px] transition-all duration-300 flex flex-col items-center justify-center gap-2">
                  <Instagram
                    size={i === 0 ? 28 : 20}
                    className="text-volt-yellow scale-75 group-hover:scale-100 opacity-0 group-hover:opacity-100 transition-all duration-300 ease-out"
                  />
                  <span className={`font-body tracking-[0.2em] uppercase text-white opacity-0 group-hover:opacity-100 transition-all duration-300 delay-75 ${
                    i === 0 ? 'text-xs' : 'text-[10px]'
                  }`}>
                    Volt Ride
                  </span>
                </div>
              </a>
            ))}
          </div>
        </div>
      </div>

      {/* Main footer content */}
      <div className="py-16 px-6 border-b border-white/10">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-12">
          {/* Brand */}
          <div>
            <div className="flex items-center gap-1.5 mb-5">
              <img
                src="/images/volt_logo.png"
                alt="Volt Ride"
                className="h-10 w-auto"
              />
            </div>
            <p className="text-volt-gray-300 font-body font-light text-sm leading-[1.8] max-w-xs mb-6">
              Dublin's premier bicycle services company. Empowering the city to move freely, sustainably, and stylishly on two wheels.
            </p>
            <p className="text-volt-yellow font-body font-semibold text-xs tracking-[0.3em] uppercase">
              {t.tagline}
            </p>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-body font-bold text-white text-xs tracking-[0.25em] uppercase mb-6">
              {t.contact}
            </h4>
            <ul className="space-y-4">
              <li>
                <a
                  href={`mailto:${t.email}`}
                  className="flex items-start gap-3 text-volt-gray-300 hover:text-volt-yellow transition-colors group"
                >
                  <Mail size={15} className="mt-0.5 shrink-0 text-volt-yellow/60 group-hover:text-volt-yellow" />
                  <span className="font-body font-light text-sm">{t.email}</span>
                </a>
              </li>
              <li>
                <a
                  href={`tel:${t.phone.replace(/\s/g, '')}`}
                  className="flex items-start gap-3 text-volt-gray-300 hover:text-volt-yellow transition-colors group"
                >
                  <Phone size={15} className="mt-0.5 shrink-0 text-volt-yellow/60 group-hover:text-volt-yellow" />
                  <span className="font-body font-light text-sm">{t.phone}</span>
                </a>
              </li>
              <li>
                <div className="flex items-start gap-3 text-volt-gray-300">
                  <MapPin size={15} className="mt-0.5 shrink-0 text-volt-yellow/60" />
                  <span className="font-body font-light text-sm">{t.address}</span>
                </div>
              </li>
            </ul>
          </div>

          {/* WhatsApp CTA */}
          <div>
            <h4 className="font-body font-bold text-white text-xs tracking-[0.25em] uppercase mb-6">
              Chat With Us
            </h4>
            <p className="text-volt-gray-300 font-body font-light text-sm leading-[1.7] mb-6">
              Have a question or want to book a service? Reach us instantly on WhatsApp — we're always here to help.
            </p>
            <a
              href="https://wa.me/353838269704"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-3 bg-[#25D366] hover:bg-[#20b757] text-white font-body font-bold text-xs tracking-widest uppercase px-6 py-3.5 transition-all duration-200 hover:shadow-[0_0_20px_rgba(37,211,102,0.3)]"
            >
              <svg viewBox="0 0 24 24" className="w-4 h-4 fill-current" xmlns="http://www.w3.org/2000/svg">
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
              </svg>
              WhatsApp
            </a>
          </div>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="py-6 px-6">
        <div className="max-w-7xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-3">
          <p className="text-volt-gray-400 font-body font-light text-xs">
            {t.rights}
          </p>
          <p className="text-volt-gray-400 font-body font-light text-xs">
            Dublin, Ireland — Est. 2021
          </p>
        </div>
      </div>
    </footer>
  );
}
