import { ThemeProvider } from './context/ThemeContext';
import { Hero } from './components/Hero';
import { HeroActionRow } from './components/HeroActionRow';
import { IntelligentDelegationSection } from './components/IntelligentDelegationSection';
import { OverviewSection } from './components/OverviewSection';
import { CoreFeaturesSection } from './components/CoreFeaturesSection';
import { FeaturesSection } from './components/FeaturesSection';
import { IntegrationsSection } from './components/IntegrationsSection';
import { BenefitsSection } from './components/BenefitsSection';
import { AboutSection } from './components/AboutSection';
import { ReviewsSection } from './components/ReviewsSection';
import { Pricing } from './components/Pricing';
import { ComplianceSection } from './components/ComplianceSection';
import { FAQSection } from './components/FAQSection';
import { FinalCTASection } from './components/FinalCTASection';
import { Footer } from './components/Footer';

export function App() {
  return (
    <ThemeProvider>
      <main className="min-h-screen bg-[#FCFCFB] dark:bg-[#080a09] w-full overflow-x-hidden antialiased text-[#0A0C0B] dark:text-white transition-colors duration-300">
        {/* Hero Section */}
        <Hero />

        {/* 1. Fila de tarjetas de acción (Intelligent workspace, Financial agents, etc.) */}
        <HeroActionRow />

        {/* 2. Intelligent Delegation — “Tell Avialo once. It handles the rest.” */}
        <IntelligentDelegationSection />

        {/* 3. Overview — “Empowering payment solutions / How it Works” */}
        <OverviewSection />

        {/* BENTO GRID: Core Features Section */}
        <CoreFeaturesSection />

        {/* 4. Features — “Infrastructure that adapts to your workflow” */}
        <FeaturesSection />

        {/* 5. Integrations — “Seamless integrations” */}
        <IntegrationsSection />

        {/* 6. Benefits — “Made for modern finance teams and organisations” */}
        <BenefitsSection />

        {/* 7. About — “Everything you need to manage investing decisions” */}
        <AboutSection />

        {/* 8. Reviews — “Why investors and teams trust our platform” */}
        <ReviewsSection />

        {/* 9. Pricing — “Simple pricing that scales with your needs” */}
        <Pricing />

        {/* 10. Compliance — “Secure by design” */}
        <ComplianceSection />

        {/* 11. Redesigned FAQ Section */}
        <FAQSection />

        {/* 12. CTA final — “Move investing forward with intelligence” */}
        <FinalCTASection />

        {/* Footer */}
        <Footer />
      </main>
    </ThemeProvider>
  );
}

export default App;
