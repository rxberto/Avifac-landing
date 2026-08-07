import { motion } from 'framer-motion';
import { Button } from './Button';
import { useLanguage } from '../context/LanguageContext';

const LOGOS = [
  {
    name: 'Stripe',
    svg: 'https://upload.wikimedia.org/wikipedia/commons/b/ba/Stripe_Logo%2C_revised_2016.svg',
    height: 'h-7 sm:h-8',
    filterClass: '',
  },
  {
    name: 'PayPal',
    svg: 'https://upload.wikimedia.org/wikipedia/commons/b/b5/PayPal.svg',
    height: 'h-7 sm:h-8',
    filterClass: '',
  },
  {
    name: 'RedSYS',
    svg: 'https://raw.githubusercontent.com/mabuenox/RedsysTPV/master/redsys.png',
    height: 'h-7 sm:h-8',
    filterClass: '',
  },
  {
    name: 'AEAT',
    svg: 'data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCAxNDAgNDQiPjxyZWN0IHg9IjIiIHk9IjIiIHdpZHRoPSIxMzYiIGhlaWdodD0iNDAiIHJ4PSIyMCIgZmlsbD0iIzBBMEMwQiIgc3Ryb2tlPSIjMzMzMzMzIiBzdHJva2Utd2lkdGg9IjEuNSIvPjxwYXRoIGQ9Ik0yMiAyMiBsIDUgNSBsIDEwIC0xMCIgZmlsbD0ibm9uZSIgc3Ryb2tlPSIjMDBGRjY2IiBzdHJva2Utd2lkdGg9IjMiIHN0cm9rZS1saW5lY2FwPSJyb3VuZCIgc3Ryb2tlLWxpbmVqb2luPSJyb3VuZCIvPjx0ZXh0IHg9IjQ4IiB5PSIyOSIgZm9udC1mYW1pbHk9InN5c3RlbS11aSwgLWFwcGxlLXN5c3RlbSwgc2Fucy1zZXJpZiIgZm9udC13ZWlnaHQ9IjgwMCIgZm9udC1zaXplPSIxOCIgZmlsbD0iI0ZGRkZGRiIgbGV0dGVyLXNwYWNpbmc9IjEuNSI+QUVBVDwvdGV4dD48L3N2Zz4K',
    height: 'h-8 sm:h-9',
    filterClass: '',
  },
  {
    name: 'FACe',
    svg: 'data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA5MCA0MCI+PHRleHQgeD0iMCIgeT0iMzIiIGZvbnQtZmFtaWx5PSJzeXN0ZW0tdWksIHNhbnMtc2VyaWYiIGZvbnQtd2VpZ2h0PSI5MDAiIGZvbnQtc2l6ZT0iMzIiPjx0c3BhbiBmaWxsPSIjMGMxZTQwIj5GQUM8L3RzcGFuPjx0c3BhbiBmaWxsPSIjZTY1YzAwIj5lPC90c3Bhbj48L3RleHQ+PC9zdmc+',
    height: 'h-8 sm:h-9',
    filterClass: '',
  },
  {
    name: 'WooCommerce',
    svg: 'https://upload.wikimedia.org/wikipedia/commons/5/51/WooCommerce_logo_%282015%29.svg',
    height: 'h-6 sm:h-7',
    filterClass: '',
  },
  {
    name: 'Shopify',
    svg: 'https://upload.wikimedia.org/wikipedia/commons/0/0e/Shopify_logo_2018.svg',
    height: 'h-7 sm:h-8',
    filterClass: 'dark:brightness-0 dark:invert',
  },
];

export const IntegrationsSection = () => {
  const { t } = useLanguage();

  return (
    <section id="integrations" className="w-full bg-[#FCFCFB] dark:bg-[#080a09] py-[72px] relative z-10 transition-colors duration-300 overflow-hidden">
      <div className="max-w-[1140px] mx-auto px-4 sm:px-6 flex flex-col gap-14 text-left">
        
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
              {t('Empieza ahora gratis', 'Start 30-day free trial')}
            </Button>
          </motion.div>
        </div>

        {/* Carousel Infinito Rápido y Separado de Logos con Capa de Transparencia Elegante */}
        <div className="w-full h-24 relative overflow-hidden flex items-center">
          {/* Edge Gradient Blur Fades */}
          <div className="absolute top-0 bottom-0 left-0 w-28 sm:w-48 bg-gradient-to-r from-[#FCFCFB] dark:from-[#080a09] via-[#FCFCFB]/90 dark:via-[#080a09]/90 to-transparent z-20 pointer-events-none backdrop-blur-[1px]" />
          <div className="absolute top-0 bottom-0 right-0 w-28 sm:w-48 bg-gradient-to-l from-[#FCFCFB] dark:from-[#080a09] via-[#FCFCFB]/90 dark:via-[#080a09]/90 to-transparent z-20 pointer-events-none backdrop-blur-[1px]" />

          {/* Marquee Fast Track */}
          <div className="flex items-center gap-20 sm:gap-32 animate-marquee-fast whitespace-nowrap">
            {[...LOGOS, ...LOGOS, ...LOGOS, ...LOGOS].map((logo, idx) => (
              <div
                key={`${logo.name}-${idx}`}
                className="flex items-center justify-center shrink-0 w-[110px] sm:w-[140px] h-9 hover:scale-110 transition-all duration-300 cursor-pointer opacity-80 hover:opacity-100 dark:opacity-85 dark:hover:opacity-100"
              >
                <img
                  src={logo.svg}
                  alt={logo.name}
                  width={140}
                  height={36}
                  className={`${logo.height} ${logo.filterClass} w-auto object-contain max-w-full`}
                  loading={idx < LOGOS.length ? 'eager' : 'lazy'}
                  decoding="async"
                  referrerPolicy="no-referrer"
                />
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
};
