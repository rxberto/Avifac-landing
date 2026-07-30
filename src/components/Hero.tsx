import { useEffect, useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { Navbar } from './Navbar';
import { ShinyText } from './ShinyText';
import { Button } from './Button';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

export const Hero = () => {
  const heroContainerRef = useRef<HTMLElement>(null);
  const dashboardRef = useRef<HTMLDivElement>(null);

  // Smooth 3D Perspective Scroll Animation adaptative for mobile and desktop
  const { scrollYProgress } = useScroll({
    target: dashboardRef,
    offset: ['start end', 'center center'],
  });

  const rotateX = useTransform(scrollYProgress, [0, 1], [16, 0]);
  const scale = useTransform(scrollYProgress, [0, 1], [0.92, 1]);
  const translateY = useTransform(scrollYProgress, [0, 1], [30, 0]);

  useEffect(() => {
    if (dashboardRef.current) {
      ScrollTrigger.refresh();
    }
  }, []);

  return (
    <section
      ref={heroContainerRef}
      className="relative w-full bg-[#FCFCFB] dark:bg-[#080a09] text-[#0A0C0B] dark:text-white overflow-hidden flex flex-col justify-start pt-20 sm:pt-28 pb-10 sm:pb-14 transition-colors duration-300"
    >
      {/* Dots Texture */}
      <div className="absolute top-0 left-0 w-full sm:w-[920px] h-[780px] bg-dot-texture animate-dot-pulse pointer-events-none opacity-25 z-0" />

      {/* Background Video */}
      <video
        autoPlay
        loop
        muted
        playsInline
        preload="none"
        className="absolute inset-0 w-full h-full object-cover z-0 opacity-20 sm:opacity-25 dark:opacity-65 pointer-events-none filter brightness-110 contrast-105 dark:brightness-120 dark:contrast-110 transition-opacity duration-300"
      >
        <source
          src="https://d8j0ntlcm91z4.cloudfront.net/user_38xzZboKViGWJOttwIXH07lWA1P/hf_20260328_105406_16f4600d-7a92-4292-b96e-b19156c7830a.mp4"
          type="video/mp4"
        />
      </video>

      {/* Overlay Gradient */}
      <div className="absolute inset-0 bg-gradient-to-b from-[#FCFCFB]/90 via-[#FCFCFB]/60 to-[#FCFCFB] dark:from-[#080a09]/70 dark:via-[#080a09]/40 dark:to-[#080a09] z-0 pointer-events-none transition-colors duration-300" />

      {/* Navbar Component (z-50) */}
      <Navbar />

      {/* Main Content Area */}
      <div className="relative z-10 w-full max-w-[1140px] mx-auto px-4 sm:px-6 flex flex-col items-center justify-start text-center pt-4 sm:pt-10">
        
        {/* Main Heading & Subtitle */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="flex flex-col items-center max-w-[960px] px-2 sm:px-0"
        >
          <h1 className="font-normal tracking-[-0.04em] text-3xl sm:text-6xl md:text-7xl xl:text-8xl leading-[1.15] sm:leading-[1.1] select-none text-center text-[#0A0C0B] dark:text-white">
            <span className="block">Tu facturación</span>
            <ShinyText text="simple." speed={2.5} className="font-semibold block" />
          </h1>

          {/* Subpárrafo ajustado */}
          <p className="mt-4 sm:mt-5 text-base sm:text-xl md:text-2xl font-normal leading-[1.45] tracking-[-0.02em] text-[rgba(10,12,11,0.72)] dark:text-white/80 max-w-[860px] text-center px-1 sm:px-0">
            Automatiza facturas, cobros recurrentes y el cumplimiento VeriFactu 2026 en una única plataforma intuitiva diseñada para impulsar tu negocio.
          </p>
        </motion.div>

        {/* CTA Button */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="mt-5 sm:mt-8 w-full sm:w-auto px-4 sm:px-0"
        >
          <Button variant="primary" href="#pricing" className="w-full sm:w-auto text-base px-8 py-3.5 justify-center">
            Pruébanos 14 días gratis
          </Button>
        </motion.div>

        {/* Extended 3D Scroll Dashboard Panel (Compatible con Modo Claro y Modo Oscuro) */}
        <div className="w-full max-w-7xl mt-6 sm:mt-10 [perspective:1000px] relative z-20 px-1 sm:px-0">
          <motion.div
            ref={dashboardRef}
            style={{
              rotateX,
              scale,
              opacity: 1,
              y: translateY,
              transformStyle: 'preserve-3d',
              willChange: 'transform',
            }}
            className="relative rounded-[8px] sm:rounded-[12px] bg-[#F2F2F0] dark:bg-[#131517] border border-[#D2D2CE] dark:border-[#303131] p-4 sm:p-8 md:p-10 shadow-2xl overflow-hidden transition-colors duration-300 text-[#0A0C0B] dark:text-white min-h-[420px] sm:min-h-[560px] md:min-h-[640px] flex flex-col justify-between"
          >
            {/* Top Bar with window controls */}
            <div className="flex items-center justify-between pb-3 sm:pb-6 mb-4 sm:mb-6 border-b border-[#D2D2CE] dark:border-[#303131]">
              <div className="flex items-center gap-1.5 sm:gap-2">
                <span className="w-2.5 sm:w-3.5 h-2.5 sm:h-3.5 rounded-full bg-red-500/80" />
                <span className="w-2.5 sm:w-3.5 h-2.5 sm:h-3.5 rounded-full bg-amber-500/80" />
                <span className="w-2.5 sm:w-3.5 h-2.5 sm:h-3.5 rounded-full bg-emerald-500/80" />
                <span className="ml-2 sm:ml-3 text-[10px] sm:text-sm font-mono text-neutral-600 dark:text-neutral-400 truncate max-w-[140px] sm:max-w-none">
                  app.avialo.es/dashboard
                </span>
              </div>
              <div className="flex items-center gap-2 sm:gap-3">
                <span className="px-2 sm:px-3 py-0.5 sm:py-1 rounded-full bg-emerald-500/10 dark:bg-emerald-500/20 text-emerald-700 dark:text-emerald-400 text-[10px] sm:text-xs font-medium border border-emerald-500/20 dark:border-emerald-500/30 flex items-center gap-1">
                  <span className="w-1.5 sm:w-2 h-1.5 sm:h-2 rounded-full bg-emerald-600 dark:bg-emerald-400 animate-pulse" />
                  VeriFactu 2026
                </span>
              </div>
            </div>

            {/* Mockup Dashboard Body */}
            <div id="hero-dashboard-panel" className="grid grid-cols-1 md:grid-cols-12 gap-4 sm:gap-6 text-left flex-1">
              
              {/* Sidebar stats & metrics */}
              <div className="md:col-span-4 bg-[#FCFCFB] dark:bg-[#232326] border border-[#D2D2CE] dark:border-[#303131] rounded-xl sm:rounded-2xl p-4 sm:p-6 space-y-4 sm:space-y-6 flex flex-col justify-between shadow-sm transition-colors duration-300">
                <div>
                  <p className="text-xs sm:text-sm text-[rgba(10,12,11,0.6)] dark:text-neutral-400">Ingresos este Mes</p>
                  <p className="text-2xl sm:text-4xl font-bold text-[#0A0C0B] dark:text-white mt-1 font-mono">
                    €24,850.00
                  </p>
                  <span className="text-[11px] sm:text-xs text-[rgb(52,138,46)] dark:text-emerald-400 font-semibold inline-block mt-1">
                    +18.4% vs mes anterior
                  </span>
                </div>

                <div className="pt-3 sm:pt-4 border-t border-[#E6E6E3] dark:border-[#303131]">
                  <p className="text-xs sm:text-sm text-[rgba(10,12,11,0.6)] dark:text-neutral-400">Facturas Emitidas</p>
                  <p className="text-xl sm:text-2xl font-bold text-[#0A0C0B] dark:text-white mt-1 font-mono">142 / 142 Cobradas</p>
                </div>

                <div className="pt-3 sm:pt-4 border-t border-[#E6E6E3] dark:border-[#303131]">
                  <p className="text-xs sm:text-sm text-[rgba(10,12,11,0.6)] dark:text-neutral-400">Impuestos Estimados (IVA/IRPF)</p>
                  <p className="text-lg sm:text-xl font-bold text-[rgb(20,122,132)] dark:text-[rgb(158,250,255)] mt-1 font-mono">€5,218.50</p>
                </div>
              </div>

              {/* Main Table & Automation Activity Preview */}
              <div className="md:col-span-8 bg-[#FCFCFB] dark:bg-[#1a1c1e] border border-[#D2D2CE] dark:border-[#303131] rounded-xl sm:rounded-2xl p-4 sm:p-6 flex flex-col justify-between shadow-sm transition-colors duration-300">
                <div>
                  <div className="flex items-center justify-between mb-3 sm:mb-4">
                    <h4 className="text-xs sm:text-sm font-bold text-[#0A0C0B] dark:text-white uppercase tracking-wider">
                      Facturas Automatizadas
                    </h4>
                    <span className="text-[10px] sm:text-xs text-[rgb(20,122,132)] bg-[rgb(20,122,132)]/10 dark:text-[rgb(158,250,255)] dark:bg-[rgb(158,250,255)]/10 px-2.5 py-0.5 sm:py-1 rounded-full border border-[rgb(20,122,132)]/20 dark:border-[rgb(158,250,255)]/20 font-mono">
                      Auto-Sync
                    </span>
                  </div>

                  <div className="space-y-2.5 sm:space-y-3 text-xs sm:text-sm">
                    <div className="flex justify-between items-center bg-[#F2F2F0] dark:bg-[#080a09] p-3 sm:p-3.5 rounded-xl border border-[#D2D2CE] dark:border-[#303131]">
                      <div>
                        <p className="font-semibold text-[#0A0C0B] dark:text-white text-xs sm:text-sm">Acme Design Studio</p>
                        <p className="text-[10px] sm:text-xs text-neutral-500 font-mono">INV-2026-098 • Stripe</p>
                      </div>
                      <div className="text-right">
                        <p className="font-mono text-[#0A0C0B] dark:text-white font-bold text-xs sm:text-sm">€3,200.00</p>
                        <span className="text-[10px] sm:text-xs text-[rgb(52,138,46)] dark:text-emerald-400 font-semibold">PAGADA</span>
                      </div>
                    </div>

                    <div className="flex justify-between items-center bg-[#F2F2F0] dark:bg-[#080a09] p-3 sm:p-3.5 rounded-xl border border-[#D2D2CE] dark:border-[#303131]">
                      <div>
                        <p className="font-semibold text-[#0A0C0B] dark:text-white text-xs sm:text-sm">Nexa Labs Tech Ltd</p>
                        <p className="text-[10px] sm:text-xs text-neutral-500 font-mono">INV-2026-099 • Redsys</p>
                      </div>
                      <div className="text-right">
                        <p className="font-mono text-[#0A0C0B] dark:text-white font-bold text-xs sm:text-sm">€1,850.00</p>
                        <span className="text-[10px] sm:text-xs text-[rgb(52,138,46)] dark:text-emerald-400 font-semibold">PAGADA</span>
                      </div>
                    </div>

                    <div className="flex justify-between items-center bg-[#F2F2F0] dark:bg-[#080a09] p-3 sm:p-3.5 rounded-xl border border-[#D2D2CE] dark:border-[#303131]">
                      <div>
                        <p className="font-semibold text-[#0A0C0B] dark:text-white text-xs sm:text-sm">Studio UX Global</p>
                        <p className="text-[10px] sm:text-xs text-neutral-500 font-mono">INV-2026-100 • SEPA</p>
                      </div>
                      <div className="text-right">
                        <p className="font-mono text-[#0A0C0B] dark:text-white font-bold text-xs sm:text-sm">€4,500.00</p>
                        <span className="text-[10px] sm:text-xs text-[rgb(52,138,46)] dark:text-emerald-400 font-semibold">PAGADA</span>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="mt-3 sm:mt-4 pt-3 sm:pt-4 border-t border-[#E6E6E3] dark:border-[#303131] flex justify-between items-center text-[10px] sm:text-xs font-mono text-neutral-500 dark:text-neutral-400">
                  <span>Conexión PSD2 Activa</span>
                  <span>VeriFactu Hash Verified</span>
                </div>
              </div>
            </div>

            {/* Bottom Overlay Hint */}
            <div className="absolute inset-0 bg-gradient-to-t from-[#FCFCFB]/95 dark:from-[#080a09]/95 via-transparent to-transparent flex items-end justify-center pb-3 sm:pb-5 pointer-events-none transition-colors duration-300">
              <span className="text-[10px] sm:text-xs text-[#0A0C0B] dark:text-neutral-300 font-medium bg-[#F2F2F0] dark:bg-[#080a09] px-3 sm:px-4 py-1 sm:py-1.5 rounded-full border border-[#D2D2CE] dark:border-[#303131] shadow-lg text-center mx-2 truncate max-w-[90%]">
                Panel del Sistema de Facturación Avialo • Modo Demo
              </span>
            </div>
          </motion.div>
        </div>

      </div>
    </section>
  );
};
