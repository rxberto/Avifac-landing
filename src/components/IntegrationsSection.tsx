import React from 'react';
import { motion } from 'framer-motion';
import { Button } from './Button';
import { useLanguage } from '../context/LanguageContext';

// Componentes vectoriales inline ligeros sin llamadas de red externas (Cero errores HTTP 429 de Wikimedia/Github)
const INTEGRATION_LOGOS = [
  {
    id: 'stripe',
    name: 'Stripe',
    element: (
      <div className="flex items-center gap-2 font-black tracking-tight text-xl text-[#635BFF] dark:text-[#7C74FF]">
        <svg className="size-6 fill-current" viewBox="0 0 24 24">
          <path d="M13.976 9.15c-2.172-.806-3.356-1.426-3.356-2.409 0-.831.683-1.303 1.901-1.303 2.227 0 4.125.66 5.86 1.776V2.6C16.634 1.71 14.868 1.4 12.6 1.4 8.795 1.4 6 3.42 6 6.58c0 4.88 6.787 5.093 6.787 6.643 0 .768-.67 1.34-1.95 1.34-2.13 0-4.32-.73-6.22-1.99v4.773c2.096 1.091 4.225 1.455 6.22 1.455 3.99 0 6.945-1.97 6.945-5.26 0-5.11-6.806-5.188-6.806-6.391z" />
        </svg>
        <span>Stripe</span>
      </div>
    )
  },
  {
    id: 'paypal',
    name: 'PayPal',
    element: (
      <div className="flex items-center gap-1.5 font-extrabold text-lg tracking-tight text-[#003087] dark:text-[#3B7BFF]">
        <span className="px-2 py-0.5 rounded bg-[#0079C1] text-white text-sm font-mono italic font-black">PP</span>
        <span className="text-[#0079C1] dark:text-sky-400">PayPal</span>
      </div>
    )
  },
  {
    id: 'redsys',
    name: 'Redsys TPV',
    element: (
      <div className="flex items-center gap-2 font-black text-base text-[#D32F2F] dark:text-red-400 tracking-wide uppercase">
        <span className="w-5 h-5 rounded-full bg-[#D32F2F] dark:bg-red-500 text-white flex items-center justify-center text-[11px] font-mono">R</span>
        <span>Redsys <small className="text-xs text-[#0A0C0B] dark:text-white font-mono">TPV</small></span>
      </div>
    )
  },
  {
    id: 'aeat',
    name: 'Agencia Tributaria',
    element: (
      <div className="flex items-center gap-2 text-sm font-bold text-[#0A0C0B] dark:text-white uppercase tracking-tight">
        <div className="flex flex-col gap-0.5 w-4 shrink-0">
          <span className="w-full h-1 bg-[#D32F2F]" />
          <span className="w-full h-1 bg-[#FBC02D]" />
          <span className="w-full h-1 bg-[#D32F2F]" />
        </div>
        <span>Agencia Tributaria</span>
      </div>
    )
  },
  {
    id: 'ministerio',
    name: 'FACe & B2B',
    element: (
      <div className="flex items-center gap-2 font-bold text-sm text-[rgb(20,122,132)] dark:text-[rgb(158,250,255)] font-mono">
        <span className="px-2 py-0.5 rounded border border-current font-black text-xs">FACe</span>
        <span>Gobierno B2B</span>
      </div>
    )
  },
  {
    id: 'woocommerce',
    name: 'WooCommerce',
    element: (
      <div className="flex items-center gap-2 font-extrabold text-lg tracking-tight text-[#7F54B3] dark:text-[#AD84DD]">
        <div className="w-6 h-6 rounded bg-[#7F54B3] dark:bg-[#AD84DD] text-white dark:text-[#0A0C0B] flex items-center justify-center font-serif text-sm font-black italic">W</div>
        <span>WooCommerce</span>
      </div>
    )
  },
  {
    id: 'shopify',
    name: 'Shopify',
    element: (
      <div className="flex items-center gap-1.5 font-bold text-lg tracking-tight text-[#95BF47]">
        <svg className="size-5 fill-[#95BF47]" viewBox="0 0 24 24">
          <path d="M21.202 8.705c-.066-.075-.152-.132-.246-.164l-4.137-.99c-.113-.027-.231-.027-.344 0L12 8.761l-4.475-1.21c-.113-.027-.231-.027-.344 0l-4.137.99c-.094.032-.18.089-.246.164-.066.075-.11.166-.128.265L1 18.238c-.012.067-.006.137.017.201.024.064.062.122.112.169.05.048.11.083.177.103l10.5 3.23c.126.039.262.039.388 0l10.5-3.23c.067-.02.127-.055.177-.103.05-.047.088-.105.112-.169.023-.064.029-.134.017-.201l-1.642-9.268c-.018-.099-.062-.19-.128-.265zM12 21.053L2.831 18.23l1.455-8.214 3.737-.895L12 10.19l3.977-1.069 3.737.895 1.455 8.214L12 21.053z" />
        </svg>
        <span className="text-[#0A0C0B] dark:text-white">Shopify</span>
      </div>
    )
  }
];

export const IntegrationsSection: React.FC = () => {
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
              {t('Empieza ahora gratis', 'Start 14-day free trial')}
            </Button>
          </motion.div>
        </div>

        {/* Carousel Infinito Rápido y Separado de Logos con Capa de Transparencia Elegante */}
        <div className="w-full h-20 sm:h-24 relative overflow-hidden flex items-center">
          {/* Edge Gradient Blur Fades */}
          <div className="absolute top-0 bottom-0 left-0 w-20 sm:w-40 bg-gradient-to-r from-[#FCFCFB] dark:from-[#080a09] via-[#FCFCFB]/90 dark:via-[#080a09]/90 to-transparent z-20 pointer-events-none backdrop-blur-[1px]" />
          <div className="absolute top-0 bottom-0 right-0 w-20 sm:w-40 bg-gradient-to-l from-[#FCFCFB] dark:from-[#080a09] via-[#FCFCFB]/90 dark:via-[#080a09]/90 to-transparent z-20 pointer-events-none backdrop-blur-[1px]" />

          {/* Marquee Fast Track */}
          <div className="flex items-center gap-16 sm:gap-28 animate-marquee-fast whitespace-nowrap">
            {[...INTEGRATION_LOGOS, ...INTEGRATION_LOGOS, ...INTEGRATION_LOGOS, ...INTEGRATION_LOGOS].map((logo, idx) => (
              <div
                key={`${logo.id}-${idx}`}
                className="flex items-center justify-center shrink-0 hover:scale-105 transition-all duration-300 cursor-pointer opacity-85 hover:opacity-100 dark:opacity-90 dark:hover:opacity-100 px-2"
              >
                {logo.element}
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
};
