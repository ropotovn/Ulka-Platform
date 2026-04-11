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

function App() {
  useEffect(() => {
    // Smooth scroll for anchor links
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
    return () => document.removeEventListener('click', handleAnchorClick);
  }, []);

  return (
    <div className="min-h-screen bg-white font-sans">
      <Navigation />
      <main>
        <Hero />
        <ParentsAudience />
        <Problem />
        <Solution />
        <FinalCTA />
        <HowItWorks />
        <Benefits />
        <ParentsValue />
        <DashboardV2 />
        <KidsValue />
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
