import { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { ArrowUpRight, TrendingUp, Sparkles, BellRing } from 'lucide-react';

export const CoreFeaturesSection = () => {
  const sectionRef = useRef<HTMLDivElement>(null);

  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ['start end', 'end start'],
  });

  const leftMockupX = useTransform(scrollYProgress, [0, 1], [-20, 20]);
  const leftMockupY = useTransform(scrollYProgress, [0, 1], [40, -20]);
  const rightMockupX = useTransform(scrollYProgress, [0, 1], [20, -20]);
  const rightMockupY = useTransform(scrollYProgress, [0, 1], [40, -10]);

  const riskBadges = [
    'Scoring de riesgo en tiempo real',
    'Control de morosidad activo',
    'Alertas de cobro predictivas',
    'Scoring de riesgo en tiempo real',
    'Control de morosidad activo',
    'Alertas de cobro predictivas',
  ];

  return (
    <section
      id="features"
      ref={sectionRef}
      className="w-full pt-12 sm:pt-[80px] pb-10 sm:pb-[60px] px-0 bg-[#FCFCFB] dark:bg-[#080a09] transition-colors duration-300 flex flex-col items-center relative z-10 overflow-hidden"
    >
      <div className="w-full max-w-[1260px] px-4 sm:px-[30px] flex flex-col items-center gap-[10px]">
        <div className="w-full flex flex-col items-start gap-6 sm:gap-[40px]">
          
          {/* BLOQUE SUPERIOR */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1, delay: 0.1, type: 'spring', stiffness: 100 }}
            className="flex flex-col lg:flex-row items-start lg:items-end justify-between gap-4 sm:gap-[30px] w-full"
          >
            {/* Columna Izquierda */}
            <div className="flex flex-col items-start gap-2 max-w-[545px] w-full">
              <div className="flex items-center gap-2 mb-1">
                <span className="w-[14px] h-[8px] rounded-full bg-[rgb(52,138,46)] dark:bg-[rgb(104,204,88)] shrink-0" />
                <span className="text-sm font-normal leading-[1.5] tracking-[-0.02em] text-[rgba(10,12,11,0.72)] dark:text-white/80">
                  Funciones
                </span>
              </div>
              <h2 className="text-2xl sm:text-3xl md:text-[38px] font-normal leading-[1.1] tracking-[-0.04em] text-[rgb(29,29,29)] dark:text-white text-balance text-left">
                Facturación sin fricción
              </h2>
            </div>

            {/* Columna Derecha */}
            <div className="flex flex-col items-start lg:items-end text-left lg:text-right gap-3 sm:gap-[16px] max-w-[545px] w-full">
              <p className="text-sm sm:text-base font-normal leading-[1.45] tracking-[-0.02em] text-[rgb(77,88,95)] dark:text-white/80">
                Herramientas profesionales para gestionar cobros y optimizar tu tesorería.
              </p>

              <a
                href="#pricing"
                className="inline-flex items-center justify-center gap-2 h-[42px] px-6 rounded-full bg-[#0A0C0B] dark:bg-white text-white dark:text-black text-sm font-medium tracking-[-0.02em] hover:scale-[1.03] active:scale-[0.97] transition-all shadow-sm select-none shrink-0"
              >
                <span>Ver funciones</span>
                <ArrowUpRight className="w-4 h-4" />
              </a>
            </div>
          </motion.div>

          {/* BLOQUE INFERIOR (Bento Grid) */}
          <motion.div
            id="item-move"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1, delay: 0.2, type: 'spring', stiffness: 100 }}
            className="grid grid-cols-1 lg:grid-cols-12 gap-4 sm:gap-[30px] w-full"
          >
            {/* Columna Izquierda */}
            <div className="lg:col-span-8 grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-[30px]">
              
              {/* TARJETA 1 */}
              <div className="w-full min-h-[320px] sm:min-h-[392px] rounded-[20px] bg-[rgb(237,241,244)] dark:bg-[#131517] p-6 sm:p-[40px] overflow-hidden flex flex-col items-center justify-between gap-6 sm:gap-[30px] border border-transparent hover:border-[#D2D2CE] dark:hover:border-[#303131] transition-all text-center relative group">
                <h6 className="text-base sm:text-lg font-medium leading-[1.1] tracking-[-0.04em] text-[rgb(29,29,29)] dark:text-white z-10">
                  Análisis de morosidad
                </h6>

                <div className="w-full max-w-[120px] sm:max-w-[150px] flex items-center justify-center my-auto z-10 group-hover:scale-105 transition-transform duration-300">
                  <img
                    src="https://framerusercontent.com/images/wXWMCe97v6E9fhERLabXGgt0Go.png"
                    alt="Escudo de análisis de riesgo"
                    className="w-full h-auto object-contain drop-shadow-md"
                  />
                </div>

                <div className="w-full overflow-hidden relative z-10">
                  <div className="flex items-center gap-[16px] animate-marquee whitespace-nowrap">
                    {riskBadges.map((badgeText, idx) => (
                      <span
                        key={`${badgeText}-${idx}`}
                        className="px-3 sm:px-4 py-1.5 sm:py-2 rounded-full bg-white dark:bg-[#232326] text-[rgb(77,88,95)] dark:text-white/90 text-[11px] sm:text-xs font-medium border border-[#D2D2CE] dark:border-[#303131] shadow-sm shrink-0"
                      >
                        {badgeText}
                      </span>
                    ))}
                  </div>
                </div>
              </div>

              {/* TARJETA 2 */}
              <div className="w-full min-h-[320px] sm:min-h-[392px] rounded-[20px] bg-[rgb(237,241,244)] dark:bg-[#131517] p-6 sm:p-[40px] overflow-hidden flex flex-col items-center justify-between gap-6 sm:gap-[30px] border border-transparent hover:border-[#D2D2CE] dark:hover:border-[#303131] transition-all text-center relative">
                
                <div className="absolute inset-0 pointer-events-none z-0 overflow-hidden">
                  <img
                    src="https://framerusercontent.com/images/IZgCL46gW5tJW2TUtUKnT2MFgMs.jpg"
                    alt="Fondo métricas"
                    className="w-full h-full object-cover object-top opacity-40 dark:opacity-20"
                  />
                  <div className="absolute top-0 inset-x-0 h-[126px] bg-gradient-to-b from-white via-white/80 to-transparent dark:from-[#131517] dark:via-[#131517]/80 dark:to-transparent opacity-90" />
                </div>

                <h6 className="text-base sm:text-lg font-medium leading-[1.1] tracking-[-0.04em] text-[rgb(29,29,29)] dark:text-white relative z-10">
                  Métricas en vivo
                </h6>

                <div className="w-full flex items-center justify-center my-auto relative z-10">
                  <img
                    src="https://framerusercontent.com/images/G7W3uXGEWJ2M7xixcWnVJPdzxEc.svg"
                    alt="Gráfico de métricas"
                    className="w-full h-auto object-contain max-h-[150px] sm:max-h-[180px] drop-shadow-sm filter dark:invert dark:brightness-125"
                  />
                </div>
              </div>

              {/* TARJETA 3 */}
              <div className="md:col-span-2 w-full min-h-[320px] sm:min-h-[374px] rounded-[20px] bg-[rgb(237,241,244)] dark:bg-[#131517] pt-6 sm:pt-[40px] px-6 sm:px-[40px] pb-0 overflow-hidden flex flex-col justify-between items-center border border-transparent hover:border-[#D2D2CE] dark:hover:border-[#303131] transition-all relative">
                
                <div className="absolute inset-0 pointer-events-none z-0 overflow-hidden">
                  <img
                    src="https://framerusercontent.com/images/subirXJz7lXrSNejZPxoXXA90Ik.jpg"
                    alt="Fondo cartera"
                    className="w-full h-full object-cover object-top opacity-35 dark:opacity-15"
                  />
                  <div className="absolute top-0 inset-x-0 h-[126px] bg-gradient-to-b from-white via-white/90 to-transparent dark:from-[#131517] dark:via-[#131517]/90 dark:to-transparent opacity-90" />
                </div>

                <div className="flex flex-col gap-[4px] items-center text-center max-w-[500px] mx-auto pb-4 sm:pb-6 relative z-10">
                  <h6 className="text-base sm:text-lg font-medium leading-[1.1] tracking-[-0.04em] text-[rgb(29,29,29)] dark:text-white">
                    Seguimiento de facturas y cobros
                  </h6>
                  <p className="text-xs sm:text-sm font-normal leading-[1.5] tracking-[-0.02em] text-[rgb(77,88,95)] dark:text-white/80">
                    Visualiza toda tu salud financiera en un solo lugar con atribución de cobros.
                  </p>
                </div>

                <div className="w-full h-[180px] sm:h-[220px] flex items-center justify-center gap-4 sm:gap-[50px] pt-2 sm:pt-4 relative z-10 overflow-hidden">
                  <motion.div
                    style={{ x: leftMockupX, y: leftMockupY, rotate: -5 }}
                    transition={{ type: 'spring', stiffness: 500, damping: 60, mass: 1 }}
                    className="w-[160px] sm:w-[250px] rounded-[16px] sm:rounded-[20px] overflow-hidden shadow-2xl shrink-0"
                  >
                    <img
                      src="https://framerusercontent.com/images/LLeScfWulZWyA0jZhMBwmQgQHA.svg"
                      alt="Mockup izquierdo"
                      className="w-full h-auto object-cover rounded-[16px] sm:rounded-[20px]"
                    />
                  </motion.div>

                  <motion.div
                    style={{ x: rightMockupX, y: rightMockupY, rotate: 12 }}
                    transition={{ type: 'spring', stiffness: 500, damping: 60, mass: 1 }}
                    className="w-[180px] sm:w-[300px] rounded-[16px] sm:rounded-[20px] overflow-hidden shadow-2xl shrink-0"
                  >
                    <img
                      src="https://framerusercontent.com/images/LP5Ny6NdFTClX39IhTGUIolDygE.svg"
                      alt="Mockup derecho"
                      className="w-full h-auto object-cover rounded-[16px] sm:rounded-[20px]"
                    />
                  </motion.div>
                </div>

              </div>

            </div>

            {/* Columna Derecha */}
            <div className="lg:col-span-4 flex flex-col gap-4 sm:gap-[30px]">
              
              {/* TARJETA 4 - MODELO 303 Y CONTROL FISCAL CON IA */}
              <div className="w-full min-h-[420px] sm:min-h-[528px] rounded-[20px] bg-[#000000] p-6 sm:p-[40px] overflow-hidden flex flex-col justify-between items-center text-center gap-6 sm:gap-[30px] border border-white/10 shadow-2xl relative group">
                
                <h6 className="text-base sm:text-lg font-medium leading-[1.1] tracking-[-0.04em] text-white">
                  Cálculo de Impuestos & Modelo 303 AEAT
                </h6>

                <div className="w-full flex-1 flex flex-col items-center justify-center gap-4 my-auto py-4 sm:py-6">
                  <div className="px-3 py-1 sm:px-3.5 sm:py-1.5 rounded-full bg-emerald-500/20 border border-emerald-500/30 text-emerald-400 text-[10px] sm:text-xs font-mono font-bold flex items-center gap-2 animate-pulse">
                    <Sparkles className="w-3.5 h-3.5" />
                    <span>BORRADOR MODELO 303 • LISTO PARA AEAT</span>
                  </div>

                  <div className="w-full bg-[#131517] border border-[#303131] rounded-2xl p-4 sm:p-5 text-left font-mono space-y-3 shadow-inner">
                    <div className="flex justify-between items-center text-[10px] sm:text-xs">
                      <span className="text-neutral-400">TRIMESTRE EN CURSO (Q3)</span>
                      <span className="text-emerald-400 font-bold flex items-center gap-1">
                        <TrendingUp className="w-3.5 h-3.5" /> AEAT READY
                      </span>
                    </div>

                    <div className="space-y-1.5 text-[10px] sm:text-xs text-neutral-300 py-1">
                      <div className="flex justify-between">
                        <span>Ingresos (Base 21%):</span>
                        <span className="text-white font-bold">€18,450.00</span>
                      </div>
                      <div className="flex justify-between">
                        <span>IVA Repercutido:</span>
                        <span className="text-emerald-400 font-bold">+€3,874.50</span>
                      </div>
                      <div className="flex justify-between">
                        <span>Gastos Deducibles (OCR):</span>
                        <span className="text-white font-bold">€6,200.00</span>
                      </div>
                      <div className="flex justify-between">
                        <span>IVA Soportado:</span>
                        <span className="text-amber-400 font-bold">-€1,302.00</span>
                      </div>
                    </div>

                    <div className="text-[10px] sm:text-[11px] text-neutral-300 pt-2.5 border-t border-[#303131] flex justify-between items-center">
                      <span>A pagar AEAT (Mod. 303):</span>
                      <span className="text-emerald-400 font-bold text-xs sm:text-sm">€2,572.50</span>
                    </div>
                  </div>
                </div>

                <p className="text-xs font-normal leading-[1.5] tracking-[-0.02em] text-[rgb(186,186,186)]">
                  Generación automática de ingresos, gastos e IVA devengado/soportado para presentar tus declaraciones trimestrales sin errores.
                </p>
              </div>

              {/* TARJETA 5 */}
              <div className="w-full min-h-[200px] sm:min-h-[239px] rounded-[20px] bg-[rgb(237,241,244)] dark:bg-[#131517] p-6 sm:p-[40px] overflow-hidden flex flex-col justify-between items-center text-center gap-4 sm:gap-[30px] border border-transparent hover:border-[#D2D2CE] dark:hover:border-[#303131] transition-all relative">
                
                <div className="absolute top-[30px] sm:top-[80px] right-[16px] sm:right-[20px] w-[45px] sm:w-[60px] h-auto z-20 pointer-events-none drop-shadow-lg">
                  <img
                    src="https://framerusercontent.com/images/dIhxLbN1GBZu7TFHjssn0JUI4kY.png"
                    alt="Icono alertas"
                    className="w-full h-auto object-contain hover:rotate-12 transition-transform duration-300"
                  />
                </div>

                <h6 className="text-base sm:text-lg font-medium leading-[1.1] tracking-[-0.04em] text-[rgb(29,29,29)] dark:text-white text-left w-full z-10">
                  Alertas inteligentes
                </h6>

                <div className="w-full bg-white dark:bg-[#232326] border border-[#D2D2CE] dark:border-[#303131] rounded-2xl p-3.5 sm:p-4 text-left shadow-sm flex items-start gap-3 relative z-10">
                  <div className="p-1.5 sm:p-2 rounded-xl bg-blue-500/10 text-blue-600 dark:text-blue-400 shrink-0">
                    <BellRing className="w-4 h-4" />
                  </div>
                  <div className="flex flex-col gap-0.5 sm:gap-1 pr-6">
                    <span className="text-xs font-bold text-[rgb(29,29,29)] dark:text-white">
                      Objetivo de Cobro Alcanzado
                    </span>
                    <p className="text-[10px] sm:text-[11px] text-[rgb(77,88,95)] dark:text-white/70 leading-snug">
                      Factura INV-2026 cobrada (+4.5%). Recordatorio desactivado.
                    </p>
                  </div>
                </div>

              </div>

            </div>

          </motion.div>

        </div>
      </div>
    </section>
  );
};
