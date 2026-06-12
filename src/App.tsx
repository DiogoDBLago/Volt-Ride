import { useState } from 'react';
import type { Lang } from './translations';
import Header from './components/Header';
import Hero from './components/Hero';
import About from './components/About';
import DublinCity from './components/DublinCity';
import Services from './components/Services';
import WhyChooseUs from './components/WhyChooseUs';
import Footer from './components/Footer';
import WhatsAppButton from './components/WhatsAppButton';

export default function App() {
  const [lang, setLang] = useState<Lang>('EN');

  return (
    <div className="bg-volt-black min-h-screen">
      <Header lang={lang} setLang={setLang} />
      <main>
        <Hero lang={lang} />
        <About lang={lang} />
        <DublinCity lang={lang} />
        <Services lang={lang} />
        <WhyChooseUs lang={lang} />
      </main>
      <Footer lang={lang} />
      <WhatsAppButton />
    </div>
  );
}
