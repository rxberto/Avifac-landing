import { motion } from 'framer-motion';
import { Button } from './Button';
import { useLanguage } from '../context/LanguageContext';
import { APP_URLS } from '../config/urls';

export const FinalCTASection = () => {
  const { t } = useLanguage();

  return (
    <section id="cta" className="w-full bg-[#FCFCFB] dark:bg-[#080a09] py-[72px] sm:py-[96px] relative z-10 transition-colors duration-300 overflow-hidden">
      
      {/* Background Dots Texture */}
      <div className="absolute inset-0 bg-dot-texture animate-dot-pulse pointer-events-none opacity-25 z-0" />

      <div className="max-w-[1080px] mx-auto px-4 sm:px-6 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 32 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, ease: [0.12, 0.23, 0.5, 1] }}
          className="rounded-[12px] bg-[#F2F2F0] dark:bg-[#131517] border border-[#D2D2CE] dark:border-[#303131] p-8 sm:p-12 lg:p-14 flex flex-col lg:flex-row items-center lg:items-center justify-between gap-8 lg:gap-12 shadow-xl relative overflow-hidden text-center lg:text-left"
        >
          {/* Left Text Block (Título y Descripción) */}
          <div className="max-w-[620px] flex flex-col gap-3.5 items-center lg:items-start">
            <h2 className="text-[28px] sm:text-[40px] lg:text-[44px] font-normal leading-[1.1] tracking-[-0.04em] text-[#0A0C0B] dark:text-white">
              {t(
                'Empieza a facturar con un software certificado hoy mismo',
                'Start invoicing with certified software today'
              )}
            </h2>
            <p className="text-base sm:text-lg font-normal leading-[1.5] tracking-[-0.02em] text-[rgba(10,12,11,0.72)] dark:text-white/80">
              {t(
                'Únete a miles de autónomos y pymes que ya cumplen con la normativa fiscal y ahorran horas con la potencia de la IA y la garantía de Avialo.',
                'Join thousands of professionals complying with tax regulations and saving hours with AI power and guaranteed peace of mind.'
              )}
            </p>
          </div>

          {/* Right Action Button Block */}
          <div className="shrink-0 flex items-center justify-center w-full lg:w-auto">
            <Button variant="primary" href={APP_URLS.register} className="w-full sm:w-auto text-base px-9 py-4 justify-center shadow-lg hover:scale-[1.02] transition-transform duration-200">
              {t('Prueba 14 días gratis', 'Start 14-day free trial')}
            </Button>
          </div>
        </motion.div>
      </div>
    </section>
  );
};
