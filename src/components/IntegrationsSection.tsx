import { motion } from 'framer-motion';
import { Button } from './Button';

export const IntegrationsSection = () => {
  const logos = [
    { name: 'Stripe', tag: 'Pagos Globales' },
    { name: 'RedSYS', tag: 'TPV España' },
    { name: 'Ministerio', tag: 'VeriFactu / FacturaE' },
    { name: 'WooCommerce', tag: 'eCommerce Auto' },
    { name: 'Shopify', tag: 'Sincro Tienda' },
    { name: 'PayPal', tag: 'Checkout Global' },
    { name: 'Holded', tag: 'Open Banking' },
    { name: 'Wise', tag: 'Multi-Moneda' },
    { name: 'Revolut', tag: 'Banca Empresas' },
  ];

  return (
    <section id="integrations" className="w-full bg-[#FCFCFB] dark:bg-[#080a09] py-[64px] relative z-10 transition-colors duration-300">
      <div className="max-w-[1080px] mx-auto px-4 sm:px-0 flex flex-col gap-10 text-left">
        
        {/* Header wrapper */}
        <div className="max-w-[480px] flex flex-col gap-8">
          <div className="flex flex-col gap-4">
            <motion.div
              initial={{ opacity: 0, y: 32 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 1, delay: 0 }}
              className="flex items-center gap-2"
            >
              <span className="w-[14px] h-[8px] rounded-full bg-[rgb(20,122,132)] dark:bg-[rgb(158,250,255)] shrink-0" />
              <span className="text-sm font-normal leading-[1.5] tracking-[-0.02em] text-[rgba(10,12,11,0.72)] dark:text-white/80">
                Integraciones
              </span>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 32 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 1, delay: 0.2 }}
              className="flex flex-col gap-3"
            >
              <h2 className="text-[32px] sm:text-[36px] font-normal leading-[1.1] tracking-[-0.04em] text-[#0A0C0B] dark:text-white">
                Conexión total
              </h2>
              <p className="text-base font-normal leading-[1.5] tracking-[-0.02em] text-[rgba(10,12,11,0.72)] dark:text-white/80">
                Sincroniza con tus pasarelas de pago y bancos nativamente.
              </p>
            </motion.div>
          </div>

          <motion.div
            initial={{ opacity: 0, y: 32 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1, delay: 0.3 }}
          >
            <Button variant="primary" href="#pricing">
              Empieza ahora gratis
            </Button>
          </motion.div>
        </div>

        {/* Carousel de Marcas */}
        <div className="w-full h-[112px] overflow-hidden relative rounded-[4px] bg-[#F2F2F0] dark:bg-[#131517] border border-[#D2D2CE] dark:border-[#303131]">
          <div className="absolute inset-y-0 left-0 w-[60px] bg-gradient-to-r from-[#F2F2F0] dark:from-[#131517] to-transparent z-10 pointer-events-none" />
          <div className="absolute inset-y-0 right-0 w-[60px] bg-gradient-to-l from-[#F2F2F0] dark:from-[#131517] to-transparent z-10 pointer-events-none" />

          <div className="flex items-center gap-[12px] h-full animate-marquee whitespace-nowrap px-4">
            {[...logos, ...logos].map((logo, idx) => (
              <div
                key={`${logo.name}-${idx}`}
                className="w-[146px] h-[80px] rounded-[4px] bg-[#E6E6E3] dark:bg-[#232326] border border-[#D2D2CE] dark:border-[#303131] hover:border-[#0A0C0B]/30 dark:hover:border-white/30 transition-colors shrink-0 flex flex-col justify-center items-center text-center p-3 select-none"
              >
                <span className="text-sm font-medium text-[#0A0C0B] dark:text-white tracking-[-0.02em]">
                  {logo.name}
                </span>
                <span className="text-[10px] font-normal text-[rgba(10,12,11,0.6)] dark:text-white/70 tracking-[-0.02em] mt-1 font-mono">
                  {logo.tag}
                </span>
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
};
