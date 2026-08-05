import { Suspense, lazy, useState, useEffect } from 'react';
import { ThemeProvider } from './context/ThemeContext';
import { LanguageProvider } from './context/LanguageContext';
import { Hero } from './components/Hero';
import { NotFoundPage } from './components/NotFoundPage';

// Lazy load below-the-fold components para optimización de rendimiento y carga móvil
const HeroActionRow = lazy(() => import('./components/HeroActionRow').then(m => ({ default: m.HeroActionRow })));
const Footer = lazy(() => import('./components/Footer').then(m => ({ default: m.Footer })));
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
const PrivacyPolicyPage = lazy(() => import('./components/PrivacyPolicyPage').then(m => ({ default: m.PrivacyPolicyPage })));
const DataProtectionPage = lazy(() => import('./components/DataProtectionPage').then(m => ({ default: m.DataProtectionPage })));
const TermsPage = lazy(() => import('./components/TermsPage').then(m => ({ default: m.TermsPage })));
const PricingPage = lazy(() => import('./components/PricingPage').then(m => ({ default: m.PricingPage })));
const VeriFactuPage = lazy(() => import('./components/VeriFactuPage').then(m => ({ default: m.VeriFactuPage })));
const CobrosRecurrentesPage = lazy(() => import('./components/CobrosRecurrentesPage').then(m => ({ default: m.CobrosRecurrentesPage })));
const PortalClientesPage = lazy(() => import('./components/PortalClientesPage').then(m => ({ default: m.PortalClientesPage })));
const SolucionesPage = lazy(() => import('./components/SolucionesPage').then(m => ({ default: m.SolucionesPage })));
const SolucionDetallePage = lazy(() => import('./components/SolucionDetallePage').then(m => ({ default: m.SolucionDetallePage })));
const IntegracionApiPage = lazy(() => import('./components/IntegracionApiPage').then(m => ({ default: m.IntegracionApiPage })));
const IntegracionPagosPage = lazy(() => import('./components/IntegracionPagosPage').then(m => ({ default: m.IntegracionPagosPage })));
const ControlGastosPage = lazy(() => import('./components/ControlGastosPage').then(m => ({ default: m.ControlGastosPage })));

export function App() {
  const [currentRoute, setCurrentRoute] = useState<'home' | 'privacy' | 'data-protection' | 'terms' | 'pricing' | 'verifactu' | 'cobros' | 'portal' | 'control-gastos' | 'soluciones' | 'soluciones-autonomos' | 'soluciones-agencias' | 'soluciones-startups' | 'soluciones-gestorias' | 'soluciones-transformacion' | 'api' | 'pagos' | '404'>('home');

  useEffect(() => {
    const checkPath = () => {
      const pathname = window.location.pathname.toLowerCase();
      const hash = window.location.hash.toLowerCase();

      const isPrivacyRoute =
        pathname === '/privacidad' ||
        pathname === '/privacidad/' ||
        pathname === '/politica-de-privacidad' ||
        pathname === '/politica-de-privacidad/' ||
        hash === '#privacidad' ||
        hash === '#privacy';

      const isDataProtectionRoute =
        pathname === '/proteccion-datos' ||
        pathname === '/proteccion-datos/' ||
        pathname === '/proteccion-de-datos' ||
        pathname === '/proteccion-de-datos/' ||
        hash === '#proteccion-datos' ||
        hash === '#dataprotection';

      const isTermsRoute =
        pathname === '/terminos' ||
        pathname === '/terminos/' ||
        pathname === '/terminos-y-condiciones' ||
        pathname === '/terminos-y-condiciones/' ||
        hash === '#terminos' ||
        hash === '#terms';

      const isPricingRoute =
        pathname === '/precios' ||
        pathname === '/precios/' ||
        pathname === '/pricing' ||
        pathname === '/pricing/' ||
        hash === '#precios';

      const isVeriFactuRoute =
        pathname === '/verifactu' ||
        pathname === '/verifactu/' ||
        pathname === '/facturacion-verifactu' ||
        pathname === '/facturacion-verifactu/' ||
        hash === '#verifactu';

      const isCobrosRoute =
        pathname === '/cobros-recurrentes' ||
        pathname === '/cobros-recurrentes/' ||
        pathname === '/cobros' ||
        pathname === '/cobros/' ||
        pathname === '/recurring-billing' ||
        pathname === '/recurring-billing/' ||
        hash === '#cobros-recurrentes' ||
        hash === '#cobros';

      const isPortalRoute =
        pathname === '/portal-clientes' ||
        pathname === '/portal-clientes/' ||
        pathname === '/portal' ||
        pathname === '/portal/' ||
        pathname === '/client-portal' ||
        pathname === '/client-portal/' ||
        hash === '#portal-clientes' ||
        hash === '#portal';

      const isControlGastosRoute =
        pathname === '/control-gastos' ||
        pathname === '/control-gastos/' ||
        pathname === '/gastos' ||
        pathname === '/gastos/' ||
        pathname === '/ocr-gastos' ||
        pathname === '/ocr-gastos/' ||
        hash === '#control-gastos' ||
        hash === '#gastos';

      const isAutonomosRoute = pathname.includes('/soluciones/autonomos') || pathname.includes('/soluciones-autonomos') || hash.includes('#autonomos');
      const isAgenciasRoute = pathname.includes('/soluciones/agencias') || pathname.includes('/soluciones-agencias') || hash.includes('#agencias');
      const isStartupsRoute = pathname.includes('/soluciones/startups') || pathname.includes('/soluciones-startups') || hash.includes('#startups');
      const isGestoriasRoute = pathname.includes('/soluciones/gestorias') || pathname.includes('/soluciones-gestorias') || hash.includes('#gestorias');
      const isTransformacionRoute = pathname.includes('/soluciones/transformacion') || pathname.includes('/soluciones-transformacion') || pathname.includes('/transformacion-digital') || hash.includes('#transformacion');

      const isApiRoute = pathname.includes('/integraciones/api') || pathname.includes('/integraciones-api') || hash.includes('#api-webhooks') || hash.includes('#api');
      const isPagosRoute = pathname.includes('/integraciones/pagos') || pathname.includes('/integraciones-pagos') || hash.includes('#pagos') || hash.includes('#pasarelas');

      const isSolucionesRoute =
        !isAutonomosRoute &&
        !isAgenciasRoute &&
        !isStartupsRoute &&
        !isGestoriasRoute &&
        !isTransformacionRoute &&
        (pathname === '/soluciones' ||
          pathname === '/soluciones/' ||
          pathname === '/solutions' ||
          pathname === '/solutions/' ||
          hash === '#soluciones' ||
          hash === '#solutions');

      const validLandingPaths = ['/', '/index.html', '/en', '/en/', '/es', '/es/'];
      const isExplicit404 = pathname === '/404' || pathname === '/404/' || hash === '#404';
      const isValidLanding = validLandingPaths.includes(pathname) || hash.startsWith('#');

      if (isPrivacyRoute) {
        setCurrentRoute('privacy');
      } else if (isDataProtectionRoute) {
        setCurrentRoute('data-protection');
      } else if (isTermsRoute) {
        setCurrentRoute('terms');
      } else if (isPricingRoute) {
        setCurrentRoute('pricing');
      } else if (isVeriFactuRoute) {
        setCurrentRoute('verifactu');
      } else if (isCobrosRoute) {
        setCurrentRoute('cobros');
      } else if (isPortalRoute) {
        setCurrentRoute('portal');
      } else if (isControlGastosRoute) {
        setCurrentRoute('control-gastos');
      } else if (isAutonomosRoute) {
        setCurrentRoute('soluciones-autonomos');
      } else if (isAgenciasRoute) {
        setCurrentRoute('soluciones-agencias');
      } else if (isStartupsRoute) {
        setCurrentRoute('soluciones-startups');
      } else if (isGestoriasRoute) {
        setCurrentRoute('soluciones-gestorias');
      } else if (isTransformacionRoute) {
        setCurrentRoute('soluciones-transformacion');
      } else if (isSolucionesRoute) {
        setCurrentRoute('soluciones');
      } else if (isApiRoute) {
        setCurrentRoute('api');
      } else if (isPagosRoute) {
        setCurrentRoute('pagos');
      } else if (isExplicit404 || !isValidLanding) {
        setCurrentRoute('404');
      } else {
        setCurrentRoute('home');
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
        <Suspense fallback={<div className="h-32 w-full flex items-center justify-center text-[rgba(10,12,11,0.5)] dark:text-white/50 animate-pulse">Cargando...</div>}>
          {currentRoute === '404' ? (
            <NotFoundPage />
          ) : currentRoute === 'privacy' ? (
            <PrivacyPolicyPage />
          ) : currentRoute === 'data-protection' ? (
            <DataProtectionPage />
          ) : currentRoute === 'terms' ? (
            <TermsPage />
          ) : currentRoute === 'pricing' ? (
            <PricingPage />
          ) : currentRoute === 'verifactu' ? (
            <VeriFactuPage />
          ) : currentRoute === 'cobros' ? (
            <CobrosRecurrentesPage />
          ) : currentRoute === 'portal' ? (
            <PortalClientesPage />
          ) : currentRoute === 'control-gastos' ? (
            <ControlGastosPage />
          ) : currentRoute === 'soluciones' ? (
            <SolucionesPage />
          ) : currentRoute === 'soluciones-autonomos' ? (
            <SolucionDetallePage type="autonomos" />
          ) : currentRoute === 'soluciones-agencias' ? (
            <SolucionDetallePage type="agencias" />
          ) : currentRoute === 'soluciones-startups' ? (
            <SolucionDetallePage type="startups" />
          ) : currentRoute === 'soluciones-gestorias' ? (
            <SolucionDetallePage type="gestorias" />
          ) : currentRoute === 'soluciones-transformacion' ? (
            <SolucionDetallePage type="transformacion-digital" />
          ) : currentRoute === 'api' ? (
            <IntegracionApiPage />
          ) : currentRoute === 'pagos' ? (
            <IntegracionPagosPage />
          ) : (
            <main className="min-h-screen bg-[#FCFCFB] dark:bg-[#080a09] w-full overflow-x-hidden antialiased text-[#0A0C0B] dark:text-white transition-colors duration-300">
              {/* Above the fold (carga inmediata pura y sin bloqueo) */}
              <Hero />

              {/* Below the fold (carga diferida/lazy) */}
              <Suspense fallback={<div className="h-32 w-full flex items-center justify-center text-[rgba(10,12,11,0.5)] dark:text-white/50 animate-pulse">Cargando sección...</div>}>
                <HeroActionRow />
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
                <Footer />
              </Suspense>
            </main>
          )}
        </Suspense>
      </LanguageProvider>
    </ThemeProvider>
  );
}

export default App;
