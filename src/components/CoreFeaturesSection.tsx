import { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { ArrowUpRight, BellRing } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';

export const CoreFeaturesSection = () => {
  const { t } = useLanguage();
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
    t('Scoring de riesgo en tiempo real', 'Real-time risk scoring'),
    t('Control de morosidad activo', 'Active default monitoring'),
    t('Alertas de cobro predictivas', 'Predictive payment alerts'),
    t('Scoring de riesgo en tiempo real', 'Real-time risk scoring'),
    t('Control de morosidad activo', 'Active default monitoring'),
    t('Alertas de cobro predictivas', 'Predictive payment alerts'),
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
                  {t('Funciones', 'Features')}
                </span>
              </div>
              <h2 className="text-2xl sm:text-3xl md:text-[38px] font-normal leading-[1.1] tracking-[-0.04em] text-[rgb(29,29,29)] dark:text-white text-balance text-left">
                {t('Facturación sin fricción', 'Frictionless Invoicing')}
              </h2>
            </div>

            {/* Columna Derecha */}
            <div className="flex flex-col items-start lg:items-end text-left lg:text-right gap-3 sm:gap-[16px] max-w-[545px] w-full">
              <p className="text-sm sm:text-base font-normal leading-[1.45] tracking-[-0.02em] text-[rgb(77,88,95)] dark:text-white/80">
                {t(
                  'Herramientas profesionales para gestionar cobros y optimizar tu tesorería.',
                  'Professional tools to manage collections & streamline cash flow.'
                )}
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
                  {t('Análisis de morosidad', 'Default & Risk Analysis')}
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
                  {t('Métricas en vivo', 'Live Metrics')}
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
                    {t('Seguimiento de facturas y cobros', 'Invoice & Payment Tracking')}
                  </h6>
                  <p className="text-xs sm:text-sm font-normal leading-[1.5] tracking-[-0.02em] text-[rgb(77,88,95)] dark:text-white/80">
                    {t('Visualiza toda tu salud financiera en un solo lugar con atribución de cobros.', 'Track your financial health in one single dashboard with payment attribution.')}
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
              
              {/* TARJETA 4 - CONTROL FISCAL & MODELO 303 CON IA */}
              <div className="w-full min-h-[420px] sm:min-h-[528px] rounded-[20px] bg-[#0A0C0B] dark:bg-[#131517] p-6 sm:p-[36px] overflow-hidden flex flex-col justify-between items-center text-center gap-5 sm:gap-[24px] border border-white/10 dark:border-white/15 shadow-2xl relative group">
                
                {/* Header Card */}
                <div className="flex flex-col items-center gap-1">
                  <span className="text-[10px] font-bold tracking-widest uppercase text-emerald-400 font-mono">
                    {t('Gestión Tributaria AEAT', 'AEAT Tax Management')}
                  </span>
                  <h6 className="text-base sm:text-lg font-medium leading-[1.2] tracking-[-0.03em] text-white">
                    {t('Previsión de Impuestos & Modelo 303', 'Tax Estimator & Form 303')}
                  </h6>
                </div>

                {/* Main Interactive Widget UI */}
                <div className="w-full flex-1 flex flex-col items-center justify-center gap-3 my-auto py-2">
                  <div className="w-full bg-[#16181A] border border-[#2D3033] rounded-2xl p-4 text-left font-sans space-y-3.5 shadow-xl relative overflow-hidden">
                    {/* Glowing background accent */}
                    <div className="absolute top-0 right-0 w-32 h-32 bg-emerald-500/10 rounded-full blur-2xl pointer-events-none" />

                    {/* Widget Top Header */}
                    <div className="flex justify-between items-center text-xs pb-2 border-b border-[#2D3033]">
                      <div className="flex items-center gap-2">
                        <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
                        <span className="text-white/90 font-medium">{t('Modelo 303 - Trimestre Q3', 'Form 303 - Q3 Quarter')}</span>
                      </div>
                      <span className="text-[10px] font-mono font-bold text-emerald-400 bg-emerald-500/15 border border-emerald-500/30 px-2 py-0.5 rounded-full">
                        {t('Previsión Exacta', '100% Accurate')}
                      </span>
                    </div>

                    {/* Line Items */}
                    <div className="space-y-2 text-xs py-0.5">
                      <div className="flex justify-between items-center">
                        <span className="text-white/60">{t('Ventas / Ingresos (21%):', 'Sales / Revenue (21%):')}</span>
                        <span className="text-white font-mono font-semibold">18.450,00 €</span>
                      </div>
                      <div className="flex justify-between items-center">
                        <span className="text-white/60">{t('IVA Repercutido (+21%):', 'VAT Collected (+21%):')}</span>
                        <span className="text-emerald-400 font-mono font-semibold">+3.874,50 €</span>
                      </div>
                      <div className="flex justify-between items-center">
                        <span className="text-white/60">{t('Gastos Deducibles OCR:', 'OCR Deductible Expenses:')}</span>
                        <span className="text-white/90 font-mono">6.200,00 €</span>
                      </div>
                      <div className="flex justify-between items-center">
                        <span className="text-white/60">{t('IVA Soportado (-21%):', 'Deductible VAT (-21%):')}</span>
                        <span className="text-amber-400 font-mono font-semibold">-1.302,00 €</span>
                      </div>
                    </div>

                    {/* Final Result highlight box */}
                    <div className="pt-3 border-t border-[#2D3033] flex justify-between items-center bg-[#0F1113] p-2.5 rounded-xl border border-emerald-500/20">
                      <span className="text-xs text-white/90 font-medium">{t('Resultado Estimado:', 'Estimated Tax Result:')}</span>
                      <span className="text-emerald-400 font-mono font-bold text-sm sm:text-base">2.572,50 €</span>
                    </div>
                  </div>
                </div>

                {/* Footer Caption */}
                <p className="text-xs font-normal leading-[1.5] tracking-[-0.02em] text-[#A1A1AA]">
                  {t(
                    'Extracción automática de ingresos, gastos e IVA devengado para presentar tus liquidaciones trimestrales ante la AEAT en segundos.',
                    'Automatic extraction of income, expenses, and VAT so you can generate quarterly tax filings effortlessly.'
                  )}
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
                  {t('Alertas inteligentes', 'Smart Alerts')}
                </h6>

                <div className="w-full bg-white dark:bg-[#232326] border border-[#D2D2CE] dark:border-[#303131] rounded-2xl p-3.5 sm:p-4 text-left shadow-sm flex items-start gap-3 relative z-10">
                  <div className="p-1.5 sm:p-2 rounded-xl bg-blue-500/10 text-blue-600 dark:text-blue-400 shrink-0">
                    <BellRing className="w-4 h-4" />
                  </div>
                  <div className="flex flex-col gap-0.5 sm:gap-1 pr-6">
                    <span className="text-xs font-bold text-[rgb(29,29,29)] dark:text-white">
                      {t('Objetivo de Cobro Alcanzado', 'Payment Goal Reached')}
                    </span>
                    <p className="text-[10px] sm:text-[11px] text-[rgb(77,88,95)] dark:text-white/70 leading-snug">
                      {t('Factura INV-2026 cobrada (+4.5%). Recordatorio desactivado.', 'Invoice INV-2026 collected (+4.5%). Automated reminder paused.')}
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
