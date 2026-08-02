import { motion } from 'framer-motion';
import { SectionHeader } from './SectionHeader';
import { ShieldCheck, Lock, Award, FileCheck, Key } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';

export const ComplianceSection = () => {
  const { t } = useLanguage();

  const cards = [
    { code: 'VeriFactu', label: t('RD 1007/2023 AEAT', 'AEAT Regulation'), icon: ShieldCheck, delay: 0 },
    { code: 'FACe B2G', label: t('Facturación Pública', 'Public E-Invoicing'), icon: Lock, delay: 0.1 },
    { code: 'Crea y Crece', label: t('FacturaE B2B 2027', 'B2B Mandatory 2027'), icon: Award, delay: 0.2 },
    { code: 'SHA-256 & QR', label: t('Registros Inmutables', 'Immutable Records'), icon: FileCheck, delay: 0.3 },
    { code: 'RGPD UE', label: t('Datos Alojados en España', 'EU Data Hosted'), icon: Key, delay: 0.4 },
  ];

  return (
    <section id="compliance" className="w-full bg-[#F7F7F5]/60 dark:bg-[#0d0f0e]/60 py-[72px] relative z-10 transition-colors duration-300">
      <div className="max-w-[1080px] mx-auto px-4 sm:px-0 flex flex-col gap-12 text-left">
        
        {/* Section Header */}
        <SectionHeader
          dotColor="var(--accent-cyan)"
          tagText={t('Cumplimiento Fiscal Nacional', 'National Tax Compliance')}
          title={t('Motor VeriFactu y FACe', 'VeriFactu & FACe Engine')}
          description={t(
            'Diseñado para cumplir a rajatabla la normativa fiscal de España (AEAT) y la Ley Crea y Crece. Datos 100% alojados en la Unión Europea.',
            'Engineered for full Spanish Tax Agency (AEAT) & Crea y Crece law compliance. 100% EU data residency.'
          )}
        />

        {/* 5 Media Cards Row */}
        <div className="grid grid-cols-2 sm:grid-cols-5 gap-[16px] w-full">
          {cards.map((card) => {
            const Icon = card.icon;

            return (
              <motion.div
                key={card.code}
                initial={{ opacity: 0, y: 32 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 1, delay: card.delay, ease: [0.12, 0.23, 0.5, 1] }}
                className="w-full rounded-[4px] bg-[#F2F2F0] dark:bg-[#131517] p-[36px_16px_20px_16px] flex flex-col items-center justify-between text-center gap-6 overflow-hidden border border-transparent hover:border-[#D2D2CE] dark:hover:border-[#303131] transition-colors"
              >
                <div className="w-[64px] h-[64px] rounded-full border border-[#0A0C0B]/20 dark:border-white/20 flex items-center justify-center shrink-0 opacity-40 bg-white/50 dark:bg-black/50">
                  <Icon className="w-7 h-7 text-[#0A0C0B] dark:text-white" />
                </div>

                <div className="flex flex-col gap-1">
                  <span className="text-base sm:text-lg font-bold tracking-[-0.04em] text-[#0A0C0B] dark:text-white font-mono">
                    {card.code}
                  </span>
                  <span className="text-xs font-normal tracking-[-0.02em] text-[rgba(10,12,11,0.6)] dark:text-white/70">
                    {card.label}
                  </span>
                </div>
              </motion.div>
            );
          })}
        </div>

      </div>
    </section>
  );
};
