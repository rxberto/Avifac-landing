import { motion } from 'framer-motion';
import { SectionHeader } from './SectionHeader';
import { ShieldCheck, Lock, Award, FileCheck, Key } from 'lucide-react';

export const ComplianceSection = () => {
  const cards = [
    { code: 'SOC2', label: 'SOC2 TIPO II', icon: ShieldCheck, delay: 0 },
    { code: 'CCPA', label: 'NORMATIVA CCPA', icon: Lock, delay: 0.1 },
    { code: 'ISO 27001', label: 'ISO 27001', icon: Award, delay: 0.2 },
    { code: 'RGPD', label: 'RGPD UNIÓN EUROPEA', icon: FileCheck, delay: 0.3 },
    { code: 'CIFRADO', label: 'CIFRADO AES-256', icon: Key, delay: 0.4 },
  ];

  return (
    <section id="compliance" className="w-full bg-[#F7F7F5]/60 dark:bg-[#0d0f0e]/60 py-[72px] relative z-10 transition-colors duration-300">
      <div className="max-w-[1080px] mx-auto px-4 sm:px-0 flex flex-col gap-12 text-left">
        
        {/* Section Header */}
        <SectionHeader
          dotColor="var(--accent-cyan)"
          tagText="Cumplimiento"
          title="Seguro por diseño"
          description="Infraestructura de seguridad corporativa y protección de datos."
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
                className="w-full rounded-[4px] bg-[#F2F2F0] dark:bg-[#131517] p-[48px_20px_20px_20px] flex flex-col items-center justify-between text-center gap-8 overflow-hidden border border-transparent hover:border-[#D2D2CE] dark:hover:border-[#303131] transition-colors"
              >
                <div className="w-[76px] h-[76px] rounded-full border border-[#0A0C0B]/20 dark:border-white/20 flex items-center justify-center shrink-0 opacity-30">
                  <Icon className="w-8 h-8 text-[#0A0C0B] dark:text-white" />
                </div>

                <div className="flex flex-col gap-1">
                  <span className="text-lg font-medium tracking-[-0.04em] text-[#0A0C0B] dark:text-white font-mono">
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
