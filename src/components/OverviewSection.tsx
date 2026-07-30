import { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { UserCheck, ShieldCheck, Zap } from 'lucide-react';
import { SectionHeader } from './SectionHeader';
import { useLanguage } from '../context/LanguageContext';

export const OverviewSection = () => {
  const { t } = useLanguage();
  const containerRef = useRef<HTMLDivElement>(null);
  const cardsRef = useRef<HTMLDivElement>(null);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ['start end', 'center center'],
  });

  const card1X = useTransform(scrollYProgress, [0, 1], [120, 0]);
  const card3X = useTransform(scrollYProgress, [0, 1], [-120, 0]);

  const cardsData = [
    {
      id: 'card-1',
      step: t('Paso 01', 'Step 01'),
      title: t('Configura tu Entidad', 'Set Up Your Company'),
      desc: t('Configura tu empresa o perfil de autónomo VeriFactu en menos de 1 minuto.', 'Set up your company or freelancer VeriFactu profile in under 1 minute.'),
      gradient: 'from-[#F8F6FE] to-[#CAC7F5] dark:from-[#1A1829] dark:to-[#2E2854]',
      icon: UserCheck,
      zIndex: 1,
    },
    {
      id: 'card-2',
      step: t('Paso 02', 'Step 02'),
      title: t('Presupuestos a Factura', 'Quotes to Invoice'),
      desc: t('Genera presupuestos o albaranes y conviértelos a factura legal con un solo clic.', 'Create quotes or delivery notes and turn them into legal invoices in one click.'),
      gradient: 'from-[#FFEEF9] to-[#FFD0EE] dark:from-[#291724] dark:to-[#4D2342]',
      icon: ShieldCheck,
      zIndex: 2,
    },
    {
      id: 'card-3',
      step: t('Paso 03', 'Step 03'),
      title: t('Emisión & Cumplimiento', 'Issue & Compliance'),
      desc: t('Generación inmutable con hash SHA-256, código QR y envío automático a Hacienda.', 'Immutable generation with SHA-256 hash, QR code, and automatic tax submission.'),
      gradient: 'from-[#FFEEF9] to-[#FFD9E6] dark:from-[#291724] dark:to-[#4A2033]',
      icon: Zap,
      zIndex: 3,
    },
  ];

  return (
    <section
      id="overview"
      ref={containerRef}
      className="w-full bg-[#FCFCFB] dark:bg-[#080a09] py-[64px] sm:py-[72px] px-4 sm:px-6 relative z-10 transition-colors duration-300 overflow-hidden"
    >
      <div className="max-w-[1140px] mx-auto w-full flex flex-col items-center gap-10 sm:gap-14">
        
        {/* Cabecera de Sección concisa y traducida */}
        <SectionHeader
          dotColor="var(--accent-green)"
          tagText={t('Cómo Funciona', 'How It Works')}
          title={t('Soluciones de cobro potentes', 'Powerful billing solutions')}
          description={t(
            'Diseñadas para simplificar cada paso de tu facturación electrónica.',
            'Designed to simplify every step of your billing workflow.'
          )}
        />

        {/* Bloque de Cards de 3 Pasos */}
        <div
          id="card-wrap"
          ref={cardsRef}
          className="flex flex-col lg:flex-row justify-center items-stretch gap-4 sm:gap-5 w-full"
        >
          {cardsData.map((card, idx) => {
            const Icon = card.icon;
            const xTransform = idx === 0 ? card1X : idx === 2 ? card3X : 0;

            return (
              <motion.div
                key={card.id}
                id={card.id}
                style={{
                  x: typeof window !== 'undefined' && window.innerWidth >= 1024 ? xTransform : 0,
                  zIndex: card.zIndex,
                }}
                className={`flex-1 rounded-[12px] bg-gradient-to-b ${card.gradient} p-5 sm:p-7 flex flex-col justify-between items-center text-center shadow-md border border-black/5 dark:border-white/10 min-h-[300px] sm:min-h-[340px] relative overflow-hidden transition-all duration-300 group`}
              >
                {/* Pill "Paso 0X" */}
                <div className="self-start px-3.5 py-1 rounded-full bg-white dark:bg-[#131517] text-xs font-medium text-[#0A0C0B] dark:text-white border border-black/5 dark:border-white/10 shadow-sm">
                  {card.step}
                </div>

                {/* Círculo de Icono */}
                <div className="my-auto py-4">
                  <motion.div
                    initial={{ scale: 0 }}
                    whileInView={{ scale: 1 }}
                    viewport={{ once: true }}
                    transition={{
                      type: 'spring',
                      stiffness: 250,
                      damping: 40,
                      mass: 1,
                      delay: 0.1 * (idx + 1),
                    }}
                    className="w-[72px] sm:w-[80px] h-[72px] sm:h-[80px] rounded-full bg-white dark:bg-[#131517] border-2 border-[rgba(32,0,96,0.1)] dark:border-white/20 flex items-center justify-center shadow-md group-hover:scale-105 transition-transform duration-300"
                  >
                    <Icon className="w-7 h-7 sm:w-8 sm:h-8 text-[#0A0C0B] dark:text-white stroke-[1.8]" />
                  </motion.div>
                </div>

                {/* Textos de la Card */}
                <div className="flex flex-col gap-1.5 w-full max-w-[300px] mx-auto">
                  <motion.h3
                    initial={{ opacity: 0, y: 25 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{
                      type: 'spring',
                      stiffness: 250,
                      damping: 40,
                      mass: 1,
                      delay: 0.2,
                    }}
                    className="text-lg sm:text-xl font-medium tracking-[-0.03em] leading-[1.2] text-[#0A0C0B] dark:text-white"
                  >
                    {card.title}
                  </motion.h3>

                  <motion.p
                    initial={{ opacity: 0, y: 25 }}
                    whileInView={{ opacity: 0.8, y: 0 }}
                    viewport={{ once: true }}
                    transition={{
                      type: 'spring',
                      stiffness: 250,
                      damping: 40,
                      mass: 1,
                      delay: 0.3,
                    }}
                    className="text-xs sm:text-sm font-normal leading-[1.45] tracking-[-0.02em] text-[rgba(10,12,11,0.72)] dark:text-white/80"
                  >
                    {card.desc}
                  </motion.p>
                </div>
              </motion.div>
            );
          })}
        </div>

      </div>
    </section>
  );
};
