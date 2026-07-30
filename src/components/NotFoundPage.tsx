import { useState } from 'react';
import { useLanguage } from '../context/LanguageContext';
import { Navbar } from './Navbar';
import { Footer } from './Footer';
import { Button } from './Button';
import { motion } from 'framer-motion';
import { ArrowLeft, Home, Sparkles } from 'lucide-react';
import { APP_URLS } from '../config/urls';

export const NotFoundPage = () => {
  const { t } = useLanguage();
  const [videoLoaded, setVideoLoaded] = useState(false);

  return (
    <div className="relative min-h-screen flex flex-col bg-[#FCFCFB] dark:bg-[#080a09] text-[#0A0C0B] dark:text-white overflow-hidden transition-colors duration-300">
      {/* Background Gradient & Pattern Layer (Carga Instantánea) */}
      <div className="absolute inset-0 w-full h-full bg-[#FCFCFB] dark:bg-[#080a09] z-0 pointer-events-none">
        <div className="absolute inset-0 bg-gradient-to-b from-[#FCFCFB] via-[#F2F2F0] to-[#FCFCFB] dark:from-[#080a09] dark:via-[#131517] dark:to-[#080a09] opacity-80" />
        <div className="absolute inset-0 bg-dot-texture opacity-25 dark:opacity-35 animate-dot-pulse" />
      </div>

      {/* Video Overlay Layer */}
      <div className="absolute inset-0 w-full h-full overflow-hidden pointer-events-none z-0">
        <video
          autoPlay
          muted
          loop
          playsInline
          onCanPlay={() => setVideoLoaded(true)}
          className={`absolute inset-0 w-full h-full object-cover mix-blend-luminosity dark:mix-blend-normal transition-opacity duration-700 ${
            videoLoaded ? 'opacity-30 dark:opacity-55' : 'opacity-0'
          }`}
        >
          <source
            src="https://d8j0ntlcm91z4.cloudfront.net/user_38xzZboKViGWJOttwIXH07lWA1P/hf_20260613_180732_a54afbf6-b30d-470e-861f-669871f09f67.mp4"
            type="video/mp4"
          />
        </video>
        {/* Subtle Theme Gradient Mask Overlay */}
        <div className="absolute inset-0 bg-gradient-to-b from-[#FCFCFB]/80 via-[#FCFCFB]/60 to-[#FCFCFB] dark:from-[#080a09]/80 dark:via-[#080a09]/60 dark:to-[#080a09] pointer-events-none" />
      </div>

      {/* Content Wrapper */}
      <div className="relative z-10 flex flex-col min-h-screen justify-between">
        {/* Avialo Navbar */}
        <Navbar />

        {/* Hero 404 Main Section */}
        <main className="flex-1 flex flex-col items-center justify-center text-center px-4 sm:px-6 py-16 sm:py-24 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="max-w-3xl flex flex-col items-center"
          >
            {/* Tag Badge */}
            <div className="mb-4 sm:mb-6 inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full border border-[#D2D2CE] dark:border-[#303131] bg-[#F2F2F0]/80 dark:bg-[#131517]/80 backdrop-blur-md text-[11px] font-mono uppercase tracking-wider text-[rgba(10,12,11,0.7)] dark:text-white/80 shadow-sm">
              <Sparkles className="w-3.5 h-3.5 text-[rgb(20,122,132)] dark:text-[rgb(158,250,255)]" />
              <span>{t('Error 404 • Registro no encontrado', 'Error 404 • Page Not Found')}</span>
            </div>

            {/* Subtitle Lines */}
            <h1 className="text-[#0A0C0B] dark:text-white text-xl sm:text-3xl md:text-4xl lg:text-5xl font-light leading-snug tracking-tight mb-1 sm:mb-2">
              {t('Esta página parece haberse', 'This page seems to have')}
            </h1>
            <h2 className="text-[#0A0C0B]/80 dark:text-white/80 text-xl sm:text-3xl md:text-4xl lg:text-5xl font-light leading-snug tracking-tight mb-6 sm:mb-10">
              {t('desplazado fuera de nuestro alcance :/', 'slipped beyond our reach :/')}
            </h2>

            {/* Giant 404 Text */}
            <div className="relative mb-8 sm:mb-12 w-full flex justify-center overflow-visible select-none">
              <span className="four-oh-four text-[100px] sm:text-[160px] md:text-[220px] lg:text-[270px] font-black leading-none tracking-tighter text-[#0A0C0B] dark:text-white">
                404
              </span>
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row items-center gap-4">
              <a
                href="/"
                className="liquid-glass text-[#0A0C0B] dark:text-white text-xs sm:text-sm tracking-[0.15em] sm:tracking-[0.2em] font-bold px-7 sm:px-9 py-3.5 sm:py-4 rounded-full uppercase flex items-center gap-2 hover:scale-[1.03] active:scale-[0.98] transition-all shadow-lg cursor-pointer"
              >
                <Home className="w-4 h-4" />
                <span>{t('Volver al Inicio', 'Return to Main Page')}</span>
              </a>

              <Button variant="secondary" href={APP_URLS.login} className="text-xs sm:text-sm px-6 py-3.5 rounded-full">
                <ArrowLeft className="w-4 h-4 mr-1.5" />
                <span>{t('Ir al Panel de Control', 'Go to Dashboard')}</span>
              </Button>
            </div>
          </motion.div>
        </main>

        {/* Avialo Footer */}
        <Footer />
      </div>
    </div>
  );
};
