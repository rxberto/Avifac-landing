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
    <div className="relative bg-[#060918] text-white">

      {/* ═══ FIRST SCREEN — fills 100vh exactly ═══ */}
      <section className="relative h-screen flex flex-col overflow-hidden">

        {/* Background Video — full viewport */}
        <div className="absolute inset-0 w-full h-full z-0 pointer-events-none">
          <div className="absolute inset-0 bg-gradient-to-b from-[#0a0e24] via-[#060918] to-[#020412]" />

          <video
            autoPlay
            muted
            loop
            playsInline
            preload="auto"
            onCanPlay={() => setVideoLoaded(true)}
            className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-1000 transform-gpu ${
              videoLoaded ? 'opacity-100' : 'opacity-0'
            }`}
          >
            <source
              src="https://d8j0ntlcm91z4.cloudfront.net/user_38xzZboKViGWJOttwIXH07lWA1P/hf_20260613_180732_a54afbf6-b30d-470e-861f-669871f09f67.mp4"
              type="video/mp4"
            />
          </video>

          {/* Gradient overlays */}
          <div className="absolute bottom-0 left-0 right-0 h-[30%] bg-gradient-to-t from-[#060918] to-transparent" />
          <div className="absolute top-0 left-0 right-0 h-[15%] bg-gradient-to-b from-[#060918]/50 to-transparent" />
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,transparent_30%,rgba(6,9,24,0.6)_100%)]" />
        </div>

        {/* Content over video */}
        <div className="relative z-10 flex flex-col h-full">
          <Navbar />

          {/* Centered 404 hero */}
          <div className="flex-1 flex flex-col items-center justify-center text-center px-5 sm:px-6">

            {/* Giant 404 */}
            <motion.div
              initial={{ opacity: 0, scale: 0.85, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              transition={{ duration: 1.4, ease: [0.16, 1, 0.3, 1] }}
              className="select-none pointer-events-none mb-[-20px] sm:mb-[-40px] md:mb-[-60px]"
            >
              <span
                className="four-oh-four block text-[150px] sm:text-[240px] md:text-[340px] lg:text-[420px] font-black leading-[0.85] tracking-tighter"
                style={{
                  color: 'transparent',
                  WebkitTextStroke: '1.5px rgba(255,255,255,0.13)',
                  textShadow: '0 0 80px rgba(255,255,255,0.06), 0 0 200px rgba(100,140,255,0.04)',
                }}
              >
                404
              </span>
            </motion.div>

            {/* Copy + CTA */}
            <motion.div
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.9, delay: 0.4, ease: [0.16, 1, 0.3, 1] }}
              className="relative z-10 flex flex-col items-center max-w-md"
            >
              <h1 className="text-white/90 text-base sm:text-xl md:text-2xl font-light leading-snug tracking-tight mb-2 sm:mb-3">
                {t(
                  'Esta página se ha perdido en el espacio',
                  'This page got lost in space'
                )}
              </h1>
              <p className="text-white/45 text-[11px] sm:text-sm font-normal leading-relaxed tracking-wide max-w-xs sm:max-w-sm mb-8 sm:mb-10">
                {t(
                  'No hemos encontrado lo que buscas. Vuelve al inicio para seguir facturando sin interrupciones.',
                  'We couldn\'t find what you\'re looking for. Head back to keep invoicing without interruptions.'
                )}
              </p>

              <a
                href="/"
                className="liquid-glass group text-white text-[11px] sm:text-xs tracking-[0.18em] font-semibold px-7 sm:px-9 py-3.5 sm:py-4 rounded-full uppercase flex items-center gap-2.5 hover:scale-[1.04] active:scale-[0.97] transition-all duration-300 cursor-pointer"
              >
                <ArrowLeft className="w-3.5 h-3.5 group-hover:-translate-x-0.5 transition-transform duration-300" />
                <span>{t('Volver al Inicio', 'Back to Home')}</span>
              </a>
            </motion.div>
          </div>
        </div>
      </section>

      {/* ═══ FOOTER — only visible on scroll ═══ */}
      <Footer />
    </div>
  );
};
