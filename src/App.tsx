import { useEffect } from 'react';
import { Hero } from './components/Hero';
import { Problem } from './components/Problem';
import { Solution } from './components/Solution';
import { HowItWorks } from './components/HowItWorks';
import { Benefits } from './components/Benefits';
import { DashboardV2 } from './components/DashboardV2';
import { ParentsAudience } from './components/ParentsAudience';
import { ParentsValue } from './components/ParentsValue';
import { KidsValue } from './components/KidsValue';
import { TrialMission } from './components/TrialMission';
import { FinalCTA } from './components/FinalCTA';
import { Navigation } from './components/Navigation';
import { SpeedInsights } from "@vercel/speed-insights/react";

function App() {
  useEffect(() => {
// --- VK реклама ---
  window._tmr = window._tmr || [];

  window._tmr.push({
    id: "3766213",
    type: "pageView",
    start: new Date().getTime(),
  });

  const script = document.createElement("script");

  script.src = "https://top-fwz1.mail.ru/js/code.js";
  script.async = true;
  script.id = "tmr-code";

  document.head.appendChild(script);

}, []);

  useEffect(() => {
    // --- Яндекс Метрика ---
    (function(m: any,e: any,t: any,r: any,i: any,k: any,a: any){
      m[i]=m[i]||function(){(m[i].a=m[i].a||[]).push(arguments)};
      m[i].l=1*new Date();
      for (let j = 0; j < document.scripts.length; j++) {
        if (document.scripts[j].src === r) { return; }
      }
      k=e.createElement(t),a=e.getElementsByTagName(t)[0];
      k.async=1;
      k.src=r;
      a.parentNode.insertBefore(k,a);
    })(window, document,'script','https://mc.yandex.ru/metrika/tag.js','ym');

    (window as any).ym(108670356, 'init', {
      clickmap: true,
      trackLinks: true,
      accurateTrackBounce: true,
      webvisor: true,
    });

    // --- Smooth scroll ---
    const handleAnchorClick = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      const anchor = target.closest('a[href^="#"]');
      if (anchor) {
        e.preventDefault();
        const id = anchor.getAttribute('href');
        if (id && id !== '#') {
          const element = document.querySelector(id);
          if (element) {
            element.scrollIntoView({ behavior: 'smooth' });
          }
        }
      }
    };

    document.addEventListener('click', handleAnchorClick);

    return () => {
      document.removeEventListener('click', handleAnchorClick);
    };
  }, []);

  return (
    <div className="min-h-screen bg-white dark:bg-black font-sans dark:text-white transition-colors">
      <Navigation />
      <main>
        <Hero />
        <ParentsAudience />
        {/* <Problem /> */}
        {/* <Solution /> */}
        <DashboardV2 />
        <FinalCTA />
        {/* <HowItWorks /> */}
        {/* <ParentsValue /> */}
        <KidsValue />
        <Benefits />
        <TrialMission />
      </main>
      <footer className="py-12 bg-gray-50 border-t border-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <p className="text-gray-500 text-sm">
            © 2026 ULKA Platform. Все права защищены.
          </p>
        </div>
      </footer>
    </div>
  );
}

export default App;
