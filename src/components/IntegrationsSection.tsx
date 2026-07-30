import { motion } from 'framer-motion';
import { Button } from './Button';
import { useLanguage } from '../context/LanguageContext';

export const IntegrationsSection = () => {
  const { t } = useLanguage();

  const integrations = [
    {
      name: 'Stripe',
      tag: t('Pagos Globales', 'Global Payments'),
      svg: 'https://upload.wikimedia.org/wikipedia/commons/b/ba/Stripe_Logo%2C_revised_2016.svg',
      customClass: 'h-6 w-auto dark:brightness-0 dark:invert opacity-90 group-hover:opacity-100 transition-all',
    },
    {
      name: 'PayPal',
      tag: t('Checkout Global', 'Global Checkout'),
      svg: 'https://upload.wikimedia.org/wikipedia/commons/b/b5/PayPal.svg',
      customClass: 'h-6 w-auto dark:brightness-0 dark:invert opacity-90 group-hover:opacity-100 transition-all',
    },
    {
      name: 'RedSYS',
      tag: t('TPV España', 'Spain POS Gateway'),
      svg: 'https://cdn.brandfetch.io/idimpIFIlt/theme/dark/logo.svg?c=1dxbfHSJFAPEGdCLU4o5B',
      customClass: 'h-6 w-auto brightness-0 dark:invert opacity-90 group-hover:opacity-100 transition-all',
    },
    {
      name: 'Agencia Tributaria',
      tag: t('VeriFactu / AEAT', 'VeriFactu / AEAT'),
      svg: 'https://upload.wikimedia.org/wikipedia/commons/7/7a/Agencia_Tributaria.svg',
      customClass: 'h-7 w-auto dark:brightness-0 dark:invert opacity-90 group-hover:opacity-100 transition-all',
    },
    {
      name: 'Ministerio Digital',
      tag: t('Normativa 2026', 'Act 2026'),
      svg: 'https://upload.wikimedia.org/wikipedia/commons/e/e4/Logotipo_del_Ministerio_para_la_Transformación_Digital_y_de_la_Función_Pública.svg',
      customClass: 'h-7 w-auto dark:brightness-0 dark:invert opacity-90 group-hover:opacity-100 transition-all',
    },
    {
      name: 'WooCommerce',
      tag: t('eCommerce Auto', 'Auto eCommerce'),
      svg: 'https://upload.wikimedia.org/wikipedia/commons/5/51/WooCommerce_logo_%282015%29.svg',
      customClass: 'h-5 w-auto dark:brightness-0 dark:invert opacity-90 group-hover:opacity-100 transition-all',
    },
    {
      name: 'Shopify',
      tag: t('Sincro Tienda', 'Store Sync'),
      svg: 'https://upload.wikimedia.org/wikipedia/commons/0/0e/Shopify_logo_2018.svg',
      customClass: 'h-7 w-auto dark:brightness-0 dark:invert opacity-90 group-hover:opacity-100 transition-all',
    },
  ];

  return (
    <section id="integrations" className="w-full bg-[#FCFCFB] dark:bg-[#080a09] py-[72px] relative z-10 transition-colors duration-300 overflow-hidden">
      <div className="max-w-[1140px] mx-auto px-4 sm:px-6 flex flex-col gap-12 text-left">
        
        {/* Header wrapper */}
        <div className="flex flex-col lg:flex-row items-start lg:items-end justify-between gap-6">
          <div className="max-w-[540px] flex flex-col gap-3">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0 }}
              className="flex items-center gap-2 mb-1"
            >
              <span className="w-[14px] h-[8px] rounded-full bg-[rgb(20,122,132)] dark:bg-[rgb(158,250,255)] shrink-0" />
              <span className="text-sm font-normal leading-[1.5] tracking-[-0.02em] text-[rgba(10,12,11,0.72)] dark:text-white/80">
                {t('Integraciones', 'Integrations')}
              </span>
            </motion.div>

            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.1 }}
              className="text-[32px] sm:text-[40px] font-normal leading-[1.1] tracking-[-0.04em] text-[#0A0C0B] dark:text-white"
            >
              {t('Conexión total con tu ecosistema', 'Seamless Connection with Your Ecosystem')}
            </motion.h2>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="text-base font-normal leading-[1.5] tracking-[-0.02em] text-[rgba(10,12,11,0.72)] dark:text-white/80"
            >
              {t(
                'Sincroniza pasarelas de pago, organismos oficiales y tu tienda online de forma nativa.',
                'Sync payment gateways, official tax endpoints, and e-commerce stores natively.'
              )}
            </motion.p>
          </div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.3 }}
          >
            <Button variant="primary" href="#pricing">
              {t('Empieza ahora gratis', 'Start 14-day free trial')}
            </Button>
          </motion.div>
        </div>

        {/* Carousel de Marcas Moderno */}
        <div className="w-full h-[120px] overflow-hidden relative rounded-2xl bg-[#F2F2F0] dark:bg-[#131517] border border-[#D2D2CE] dark:border-[#303131] flex items-center shadow-sm">
          {/* Edge Blur Fades */}
          <div className="absolute inset-y-0 left-0 w-24 bg-gradient-to-r from-[#F2F2F0] dark:from-[#131517] to-transparent z-20 pointer-events-none" />
          <div className="absolute inset-y-0 right-0 w-24 bg-gradient-to-l from-[#F2F2F0] dark:from-[#131517] to-transparent z-20 pointer-events-none" />

          {/* Continuous Infinite Marquee */}
          <div className="flex items-center gap-4 animate-marquee whitespace-nowrap px-4">
            {[...integrations, ...integrations, ...integrations].map((item, idx) => (
              <div
                key={`${item.name}-${idx}`}
                className="group h-[88px] min-w-[200px] sm:min-w-[220px] rounded-xl bg-[#FCFCFB] dark:bg-[#080a09] border border-[#D2D2CE] dark:border-[#303131] hover:border-[#0A0C0B]/40 dark:hover:border-white/40 hover:scale-[1.02] transition-all duration-200 shrink-0 flex flex-col justify-center items-center p-4 text-center cursor-pointer shadow-xs"
              >
                <div className="h-8 flex items-center justify-center mb-1">
                  <img
                    src={item.svg}
                    alt={item.name}
                    className={item.customClass}
                    loading="lazy"
                  />
                </div>
                <span className="text-[10px] font-mono font-medium text-[rgba(10,12,11,0.6)] dark:text-white/60 tracking-wider uppercase">
                  {item.tag}
                </span>
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
};
