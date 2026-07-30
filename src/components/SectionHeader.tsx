import React from 'react';
import { motion } from 'framer-motion';

interface SectionHeaderProps {
  dotColor?: string; // e.g. "rgb(52, 138, 46)"
  tagText: string;
  title: string;
  description?: string;
  className?: string;
}

export const SectionHeader = React.memo(({
  dotColor = 'rgb(52, 138, 46)',
  tagText,
  title,
  description,
  className = '',
}: SectionHeaderProps) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.8, ease: [0.12, 0.23, 0.5, 1] }}
      className={`flex flex-col lg:flex-row items-start lg:items-end justify-between gap-6 lg:gap-[50px] w-full ${className}`}
    >
      {/* Columna Izquierda: Tag estilo Financial Intelligence + Titular H2 Grande */}
      <div className="flex flex-col items-start gap-3 max-w-[620px] w-full text-left">
        {/* Tag Node con indicador tipo Financial Intelligence */}
        <div className="flex items-center gap-2">
          <span
            className="w-[14px] h-[8px] rounded-full shrink-0"
            style={{ backgroundColor: dotColor }}
          />
          <span className="text-sm font-normal leading-[1.5] tracking-[-0.02em] text-[rgba(10,12,11,0.72)] dark:text-white/80">
            {tagText}
          </span>
        </div>

        {/* Titular H2 con escala editorial "Everything you need..." */}
        <h2 className="text-[32px] sm:text-[44px] md:text-[48px] font-normal leading-[1.1] tracking-[-0.04em] text-[#0A0C0B] dark:text-white text-balance">
          {title}
        </h2>
      </div>

      {/* Columna Derecha: Descripción de apoyo a 2 columnas */}
      {description && (
        <div className="max-w-[520px] w-full text-left lg:text-right">
          <p className="text-base sm:text-lg font-normal leading-[1.5] tracking-[-0.02em] text-[rgba(10,12,11,0.72)] dark:text-white/80">
            {description}
          </p>
        </div>
      )}
    </motion.div>
  );
});

SectionHeader.displayName = 'SectionHeader';
