import { motion } from 'framer-motion';
import { Button } from './Button';

export const FinalCTASection = () => {
  return (
    <section id="cta" className="w-full bg-[#FCFCFB] dark:bg-[#080a09] pt-[56px] pb-[40px] relative z-10 border-b border-[#D2D2CE] dark:border-[#303131] transition-colors duration-300 overflow-hidden">
      
      {/* Background Dots Texture */}
      <div className="absolute inset-0 bg-dot-texture animate-dot-pulse pointer-events-none opacity-20 z-0" />

      <div className="max-w-[1080px] mx-auto px-4 sm:px-0 relative z-10">
        
        <motion.div
          initial={{ opacity: 0, y: 32 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1, delay: 0, ease: [0.12, 0.23, 0.5, 1] }}
          className="flex flex-col lg:flex-row items-center gap-[16px] w-full rounded-[2px] overflow-hidden"
        >
          {/* Left Colored Panel */}
          <div className="w-full lg:flex-1 rounded-[4px] bg-[#F2F2F0] dark:bg-[#131517] p-[32px] sm:p-[40px] flex flex-col justify-between items-start gap-6 text-left border border-[#D2D2CE] dark:border-[#303131] min-h-[320px]">
            <div className="max-w-[400px] flex flex-col gap-3">
              <div className="flex items-center gap-2">
                <span className="w-[14px] h-[8px] rounded-full bg-[#0A0C0B] dark:bg-white shrink-0" />
                <span className="text-sm font-normal leading-[1.5] tracking-[-0.02em] text-[rgba(10,12,11,0.72)] dark:text-white/80">
                  Empieza Hoy
                </span>
              </div>

              <h2 className="text-[28px] sm:text-[36px] font-normal leading-[1.1] tracking-[-0.04em] text-[#0A0C0B] dark:text-white">
                Impulsa tu negocio
              </h2>

              <p className="text-base font-normal leading-[1.45] tracking-[-0.02em] text-[rgba(10,12,11,0.72)] dark:text-white/80">
                Comienza tu prueba de 14 días gratis sin tarjeta de crédito.
              </p>
            </div>

            <Button variant="primary" href="#pricing">
              Empieza ahora gratis
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
