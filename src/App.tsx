import { Suspense, lazy, useState, useEffect } from 'react';
import { ThemeProvider } from './context/ThemeContext';
import { LanguageProvider } from './context/LanguageContext';
import { Hero } from './components/Hero';
import { HeroActionRow } from './components/HeroActionRow';
import { Footer } from './components/Footer';
import { NotFoundPage } from './components/NotFoundPage';

// Lazy load below-the-fold components para optimización de rendimiento y carga móvil
const IntelligentDelegationSection = lazy(() => import('./components/IntelligentDelegationSection').then(m => ({ default: m.IntelligentDelegationSection })));
const OverviewSection = lazy(() => import('./components/OverviewSection').then(m => ({ default: m.OverviewSection })));
const CoreFeaturesSection = lazy(() => import('./components/CoreFeaturesSection').then(m => ({ default: m.CoreFeaturesSection })));
const FeaturesSection = lazy(() => import('./components/FeaturesSection').then(m => ({ default: m.FeaturesSection })));
const IntegrationsSection = lazy(() => import('./components/IntegrationsSection').then(m => ({ default: m.IntegrationsSection })));
const BenefitsSection = lazy(() => import('./components/BenefitsSection').then(m => ({ default: m.BenefitsSection })));
const AboutSection = lazy(() => import('./components/AboutSection').then(m => ({ default: m.AboutSection })));
const ReviewsSection = lazy(() => import('./components/ReviewsSection').then(m => ({ default: m.ReviewsSection })));
const Pricing = lazy(() => import('./components/Pricing').then(m => ({ default: m.Pricing })));
const ComplianceSection = lazy(() => import('./components/ComplianceSection').then(m => ({ default: m.ComplianceSection })));
const FAQSection = lazy(() => import('./components/FAQSection').then(m => ({ default: m.FAQSection })));
const FinalCTASection = lazy(() => import('./components/FinalCTASection').then(m => ({ default: m.FinalCTASection })));

export function App() {
  const [isNotFound, setIsNotFound] = useState(false);

  useEffect(() => {
    const checkPath = () => {
      const pathname = window.location.pathname.toLowerCase();
      const hash = window.location.hash.toLowerCase();

      const validLandingPaths = ['/', '/index.html', '/en', '/en/', '/es', '/es/'];
      const isExplicit404 = pathname === '/404' || pathname === '/404/' || hash === '#404';
      const isValidRoute = validLandingPaths.includes(pathname) || hash.startsWith('#');

      if (isExplicit404 || !isValidRoute) {
        setIsNotFound(true);
      } else {
        setIsNotFound(false);
      }
    };

    checkPath();
    window.addEventListener('popstate', checkPath);
    window.addEventListener('hashchange', checkPath);
    return () => {
      window.removeEventListener('popstate', checkPath);
      window.removeEventListener('hashchange', checkPath);
    };
  }, []);

  return (
    <ThemeProvider>
      <LanguageProvider>
        {isNotFound ? (
          <NotFoundPage />
        ) : (
          <main className="min-h-screen bg-[#FCFCFB] dark:bg-[#080a09] w-full overflow-x-hidden antialiased text-[#0A0C0B] dark:text-white transition-colors duration-300">
            {/* Above the fold (carga inmediata) */}
            <Hero />
            <HeroActionRow />

            {/* Below the fold (carga diferida/lazy) */}
            <Suspense fallback={<div className="h-32 w-full flex items-center justify-center text-[rgba(10,12,11,0.5)] dark:text-white/50 animate-pulse">Cargando sección...</div>}>
              <IntelligentDelegationSection />
              <OverviewSection />
              <CoreFeaturesSection />
              <FeaturesSection />
              <IntegrationsSection />
              <BenefitsSection />
              <AboutSection />
              <ReviewsSection />
              <Pricing />
              <ComplianceSection />
              <FAQSection />
              <FinalCTASection />
            </Suspense>

            <Footer />
          </main>
        )}
      </LanguageProvider>
    </ThemeProvider>
  );
}

export default App;
