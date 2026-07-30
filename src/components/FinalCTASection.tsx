import { motion } from 'framer-motion';
import { Button } from './Button';
import { useLanguage } from '../context/LanguageContext';
import { APP_URLS } from '../config/urls';

export const FinalCTASection = () => {
  const { t } = useLanguage();

  return (
    <section id="cta" className="w-full bg-[#FCFCFB] dark:bg-[#080a09] py-[96px] relative z-10 transition-colors duration-300 overflow-hidden">
      
      {/* Background Dots Texture */}
      <div className="absolute inset-0 bg-dot-texture animate-dot-pulse pointer-events-none opacity-25 z-0" />

      <div className="max-w-[1080px] mx-auto px-4 sm:px-0 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 32 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1 }}
          className="rounded-[8px] bg-[#F2F2F0] dark:bg-[#131517] border border-[#D2D2CE] dark:border-[#303131] p-8 sm:p-14 text-center flex flex-col items-center gap-6 shadow-xl relative overflow-hidden"
        >
          <div className="max-w-[640px] flex flex-col gap-4">
            <h2 className="text-[32px] sm:text-[44px] font-normal leading-[1.1] tracking-[-0.04em] text-[#0A0C0B] dark:text-white">
              {t(
                'Empieza a facturar con la potencia de la IA hoy mismo',
                'Start invoicing with the power of AI today'
              )}
            </h2>
            <p className="text-base sm:text-lg font-normal leading-[1.5] tracking-[-0.02em] text-[rgba(10,12,11,0.72)] dark:text-white/80">
              {t(
                'Únete a miles de autónomos y pymes que ya ahorran horas de gestión fiscal con la garantía total de Avialo.',
                'Join thousands of freelancers and teams saving hours of accounting work with complete peace of mind.'
              )}
            </p>
          </div>

          <div className="flex flex-col sm:flex-row items-center gap-4 mt-2">
            <Button variant="primary" href={APP_URLS.register}>
              {t('Prueba 14 días gratis', 'Start 14-day free trial')}
            </Button>
          </div>

          {/* Right Image */}
          <div className="w-full lg:w-[480px] h-[320px] rounded-[4px] overflow-hidden shrink-0 bg-[#F2F2F0] dark:bg-[#131517] border border-[#D2D2CE] dark:border-[#303131]">
            <img
              src="https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=600&auto=format&fit=crop&q=80"
              alt="Impulsa tu negocio"
              className="w-full h-full object-cover opacity-85 hover:scale-105 transition-transform duration-500"
            />
          </div>
        </motion.div>

      </div>
    </section>
  );
};
