import { useState } from 'react';
import { useLanguage } from '../context/LanguageContext';
import { Navbar } from './Navbar';
import { Footer } from './Footer';
import { motion } from 'framer-motion';
import { ArrowLeft } from 'lucide-react';

export const NotFoundPage = () => {
  const { t } = useLanguage();
  const [videoLoaded, setVideoLoaded] = useState(false);

  return (
    <div className="relative min-h-screen flex flex-col bg-[#060918] dark:bg-[#060918] text-white overflow-hidden">
      {/* Full-bleed Background Video — Planet Hero */}
      <div className="absolute inset-0 w-full h-full z-0 pointer-events-none">
        {/* Instant dark fallback */}
        <div className="absolute inset-0 bg-gradient-to-b from-[#0a0e24] via-[#060918] to-[#020412]" />

        <video
          autoPlay
          muted
          loop
          playsInline
          onCanPlay={() => setVideoLoaded(true)}
          className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-1000 ${
            videoLoaded ? 'opacity-100' : 'opacity-0'
          }`}
        >
          <source
            src="https://d8j0ntlcm91z4.cloudfront.net/user_38xzZboKViGWJOttwIXH07lWA1P/hf_20260613_180732_a54afbf6-b30d-470e-861f-669871f09f67.mp4"
            type="video/mp4"
          />
        </video>

        {/* Bottom gradient fade for footer readability */}
        <div className="absolute bottom-0 left-0 right-0 h-[35%] bg-gradient-to-t from-[#060918] via-[#060918]/80 to-transparent" />
        {/* Top gradient fade for navbar readability */}
        <div className="absolute top-0 left-0 right-0 h-[20%] bg-gradient-to-b from-[#060918]/70 to-transparent" />
        {/* Side vignette */}
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,transparent_40%,rgba(6,9,24,0.7)_100%)]" />
      </div>

      {/* Content Layer */}
      <div className="relative z-10 flex flex-col min-h-screen">
        {/* Avialo Navbar */}
        <Navbar />

        {/* Hero 404 — Planet-Centric */}
        <main className="flex-1 flex flex-col items-center justify-end sm:justify-center text-center px-5 sm:px-6 pb-12 sm:pb-0 relative">
          {/* Giant 404 — floats behind the planet glow */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
            className="absolute inset-0 flex items-center justify-center pointer-events-none select-none"
          >
            <span className="four-oh-four text-[180px] sm:text-[260px] md:text-[340px] lg:text-[420px] xl:text-[500px] font-black leading-none tracking-tighter text-white/[0.04]">
              404
            </span>
          </motion.div>

          {/* Foreground Copy */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, delay: 0.3, ease: [0.16, 1, 0.3, 1] }}
            className="relative z-10 flex flex-col items-center max-w-lg"
          >
            <h1 className="text-white/90 text-lg sm:text-2xl md:text-3xl font-light leading-snug tracking-tight mb-2 sm:mb-3">
              {t(
                'Esta página se ha perdido',
                'This page got lost'
              )}
            </h1>
            <p className="text-white/50 text-xs sm:text-sm md:text-base font-normal leading-relaxed tracking-wide max-w-sm mb-8 sm:mb-10">
              {t(
                'No hemos encontrado lo que buscas. Vuelve al inicio para seguir facturando sin interrupciones.',
                'We couldn\'t find what you\'re looking for. Head back to keep invoicing without interruptions.'
              )}
            </p>

            {/* Single CTA — Liquid Glass */}
            <a
              href="/"
              className="liquid-glass group text-white text-[11px] sm:text-xs tracking-[0.18em] font-semibold px-7 sm:px-9 py-3.5 sm:py-4 rounded-full uppercase flex items-center gap-2.5 hover:scale-[1.04] active:scale-[0.97] transition-all duration-300 cursor-pointer"
            >
              <ArrowLeft className="w-3.5 h-3.5 group-hover:-translate-x-0.5 transition-transform duration-300" />
              <span>{t('Volver al Inicio', 'Back to Home')}</span>
            </a>
          </motion.div>
        </main>

        {/* Footer */}
        <Footer />
      </div>
    </div>
  );
};
