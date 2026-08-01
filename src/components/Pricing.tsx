import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { SectionHeader } from './SectionHeader';
import { Button } from './Button';
import { Check, X } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';
import { APP_URLS } from '../config/urls';

export const Pricing = () => {
  const { t } = useLanguage();
  const [isYearly, setIsYearly] = useState(true);

  const plans = [
    {
      name: 'Esencial',
      desc: t('Facturar bien, sin complicaciones', 'Fast & simple invoicing for solo pros'),
      priceMonthly: 15,
      priceYearly: 12,
      cta: t('Contratar Esencial', 'Choose Essential'),
      features: [
        { text: 'Facturas ilimitadas con Verifactu', included: true },
        { text: 'Presupuestos, albaranes y gastos', included: true },
        { text: 'Cobro online por enlace', included: true },
        { text: '1 empresa', included: true },
        { text: '1 usuario (+ gestor gratis)', included: true },
        { text: 'Asistente: 100 consultas/mes', included: true },
        { text: 'Soporte email 24-48h', included: true },
        { text: t('Facturas recurrentes (cuotas y suscripciones)', 'Recurring invoices (fees and subscriptions)'), included: false },
        { text: 'Equipo y roles', included: false },
        { text: 'API, webhooks y tienda', included: false },
        { text: 'Facturar a la Adm. (FACe)', included: false },
        { text: 'Portal de cliente', included: false },
        { text: 'Plantillas y campos propios', included: false },
        { text: 'Cartera de clientes en panel', included: false },
        { text: 'Logo de tu gestoría', included: false },
      ],
    },
    {
      name: 'Completo',
      desc: 'Todo el producto para tu negocio',
      priceMonthly: 29,
      priceYearly: 24,
      popular: true,
      cta: 'Contratar Completo',
      features: [
        { text: 'Facturas ilimitadas con Verifactu', included: true },
        { text: 'Presupuestos, albaranes y gastos', included: true },
        { text: 'Cobro online por enlace', included: true },
        { text: '1 empresa', included: true },
        { text: '3 usuarios', included: true },
        { text: 'Asistente: 500 consultas/mes', included: true },
        { text: 'Soporte prioritario 8h', included: true },
        { text: t('Facturas recurrentes (cuotas y suscripciones)', 'Recurring invoices (fees and subscriptions)'), included: true },
        { text: 'Equipo y roles', included: true },
        { text: 'API, webhooks y tienda', included: true },
        { text: 'Facturar a la Adm. (FACe)', included: true },
        { text: 'Portal de cliente', included: true },
        { text: 'Plantillas y campos propios', included: true },
        { text: 'Cartera de clientes en panel', included: false },
        { text: 'Logo de tu gestoría', included: false },
      ],
    },
    {
      name: 'Multiempresa',
      desc: 'Varias empresas desde un solo panel',
      priceMonthly: 99,
      priceYearly: 79,
      cta: 'Contratar Multiempresa',
      features: [
        { text: 'Facturas ilimitadas con Verifactu', included: true },
        { text: 'Presupuestos, albaranes y gastos', included: true },
        { text: 'Cobro online por enlace', included: true },
        { text: '10 empresas', included: true },
        { text: 'Usuarios sin límite', included: true },
        { text: 'Asistente sin límite', included: true },
        { text: 'Soporte SLA de 4h directo', included: true },
        { text: t('Facturas recurrentes (cuotas y suscripciones)', 'Recurring invoices (fees and subscriptions)'), included: true },
        { text: 'Equipo y roles', included: true },
        { text: 'API, webhooks y tienda', included: true },
        { text: 'Facturar a la Adm. (FACe)', included: true },
        { text: 'Portal de cliente', included: true },
        { text: 'Plantillas y campos propios', included: true },
        { text: 'Cartera de clientes en panel', included: true },
        { text: 'Logo de tu gestoría', included: true },
      ],
    },
  ];

  return (
    <section id="pricing" className="w-full bg-[#FCFCFB] dark:bg-[#080a09] py-[72px] relative z-10 overflow-hidden transition-colors duration-300">
      
      {/* Marco "Dots" adaptado */}
      <motion.div
        id="Dots"
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: [0.4, 0.8], y: 0 }}
        viewport={{ once: false, amount: 0.3 }}
        transition={{
          y: { duration: 1, delay: 0.2, ease: [0.12, 0.23, 0.17, 0.99] },
          opacity: {
            duration: 2.5,
            repeat: Infinity,
            repeatType: 'mirror',
            ease: [0.44, 0, 0.56, 1],
          },
        }}
        className="absolute inset-0 w-full h-full pointer-events-none z-0 select-none overflow-hidden"
      >
        <img
          src="https://framerusercontent.com/images/zPRaBFP7xkHnnH5NTRJcBW4FPc.png"
          alt="Dots pattern"
          className="w-full h-full object-cover opacity-40 dark:opacity-25 filter dark:invert transition-opacity duration-300"
        />
      </motion.div>

      <div className="max-w-[1080px] mx-auto px-4 sm:px-0 flex flex-col gap-10 text-left relative z-10">
        
        {/* Section Header */}
        <SectionHeader
          dotColor="var(--accent-green)"
          tagText={t('Precios de Avialo', 'Avialo Pricing')}
          title={t('Planes de Avialo', 'Simple & Transparent Plans')}
          description={t(
            'Todo incluido en cada plan, sin módulos que se compran aparte. Sin permanencia y sin límite de facturas en ninguno.',
            'All-inclusive plans with zero hidden add-ons. No lock-in contracts and unlimited invoices on every tier.'
          )}
        />

        {/* Pricing Module Container */}
        <motion.div
          initial={{ opacity: 0, y: 32 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1, delay: 0.2 }}
          className="flex flex-col gap-6 w-full"
        >
          {/* Switch Bar Premium & Launch Offer Note */}
          <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 w-full">
            <div className="flex flex-wrap items-center gap-3 w-full sm:w-auto">
              <div className="flex items-center gap-1 p-1.5 rounded-full bg-[#E6E6E3]/60 dark:bg-[#131517] border border-[#D2D2CE]/60 dark:border-[#303131] shadow-inner shrink-0">
                <button
                  onClick={() => setIsYearly(false)}
                  className={`px-4 sm:px-5 py-2 rounded-full text-xs sm:text-sm font-semibold transition-all duration-300 ${
                    !isYearly
                      ? 'bg-white dark:bg-[#232326] text-[#0A0C0B] dark:text-white shadow-sm border border-[#D2D2CE] dark:border-[#404141]'
                      : 'text-[rgba(10,12,11,0.6)] dark:text-white/60 hover:text-[#0A0C0B] dark:hover:text-white border border-transparent'
                  }`}
                >
                  {t('Mensual', 'Monthly')}
                </button>
                <button
                  onClick={() => setIsYearly(true)}
                  className={`px-4 sm:px-5 py-2 rounded-full text-xs sm:text-sm font-semibold transition-all duration-300 ${
                    isYearly
                      ? 'bg-white dark:bg-[#232326] text-[#0A0C0B] dark:text-white shadow-sm border border-[#D2D2CE] dark:border-[#404141]'
                      : 'text-[rgba(10,12,11,0.6)] dark:text-white/60 hover:text-[#0A0C0B] dark:hover:text-white border border-transparent'
                  }`}
                >
                  {t('Anual', 'Annual')}
                </button>
              </div>
              
              <AnimatePresence>
                {isYearly && (
                  <motion.span
                    initial={{ opacity: 0, scale: 0.8, x: -10 }}
                    animate={{ opacity: 1, scale: 1, x: 0 }}
                    exit={{ opacity: 0, scale: 0.8, x: -10 }}
                    className="px-3 py-1.5 rounded-full border border-[rgb(52,138,46)] dark:border-[rgb(104,204,88)] bg-[rgb(52,138,46)]/10 dark:bg-[rgb(104,204,88)]/10 text-[10px] sm:text-xs font-bold tracking-wider uppercase text-[rgb(52,138,46)] dark:text-[rgb(104,204,88)] shrink-0"
                  >
                    {t('Ahorra 17%', 'Save 17%')}
                  </motion.span>
                )}
              </AnimatePresence>
            </div>

            {/* Launch Offer Text */}
            <AnimatePresence>
              {isYearly && (
                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: 10 }}
                  className="text-xs sm:text-sm text-[rgba(10,12,11,0.72)] dark:text-white/80 bg-gradient-to-r from-[rgb(52,138,46)]/5 to-transparent dark:from-[rgb(104,204,88)]/10 border border-[#D2D2CE] dark:border-[#303131] px-4 py-2.5 rounded-xl shadow-sm"
                >
                  {t(
                    '🎁 Oferta de Lanzamiento: Precio de fundador (−30%) congelado 2 años. Quedan plazas limitadas.',
                    '🎁 Founder Launch Offer: 30% discount locked for 2 years. Limited spots remaining.'
                  )}
                </motion.div>
              )}
            </AnimatePresence>
          </div>

          {/* Pricing Cards Grid */}
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-[16px] w-full items-stretch">
            {plans.map((plan) => {
              const price = isYearly ? plan.priceYearly : plan.priceMonthly;

              return (
                <div
                  key={plan.name}
                  className={`w-full rounded-[12px] bg-[#F2F2F0] dark:bg-[#131517] p-[24px_24px_32px_24px] flex flex-col justify-between gap-8 border transition-all ${
                    plan.popular ? 'border-[#0A0C0B]/40 dark:border-white/40 shadow-xl' : 'border-transparent hover:border-[#0A0C0B]/30 dark:hover:border-white/30'
                  }`}
                >
                  <div className="flex flex-col gap-6">
                    <div>
                      <div className="flex items-center justify-between mb-2">
                        <h5 className="text-xl font-bold leading-[1.1] tracking-[-0.04em] text-[#0A0C0B] dark:text-white">
                          {plan.name}
                        </h5>
                        {plan.popular && (
                          <span className="text-[10px] font-bold tracking-wider uppercase text-white bg-[#0A0C0B] dark:text-black dark:bg-white px-2 py-1 rounded-md">
                            {t('El más elegido', 'Most Popular')}
                          </span>
                        )}
                      </div>
                      <p className="text-sm font-normal leading-[1.5] tracking-[-0.02em] text-[rgba(10,12,11,0.72)] dark:text-white/80 min-h-[42px]">
                        {plan.desc}
                      </p>
                    </div>

                    <div className="flex flex-col py-4 border-y border-[#E6E6E3] dark:border-[#232326] min-h-[104px] justify-center">
                      <div className="flex items-baseline gap-1">
                        <AnimatePresence mode="wait">
                          <motion.span
                            key={isYearly ? 'yearly' : 'monthly'}
                            initial={{ opacity: 0, y: -10 }}
                            animate={{ opacity: 1, y: 0 }}
                            exit={{ opacity: 0, y: 10 }}
                            transition={{ duration: 0.15 }}
                            className="text-4xl font-bold leading-[1.1] tracking-[-0.04em] text-[#0A0C0B] dark:text-white inline-block"
                          >
                            {price},00 €
                          </motion.span>
                        </AnimatePresence>
                        <span className="text-sm font-normal text-[rgba(10,12,11,0.72)] dark:text-white/80">{t('/ mes', '/ month')}</span>
                      </div>
                      <AnimatePresence mode="wait">
                        {isYearly ? (
                          <motion.div
                            key="yearly-text"
                            initial={{ opacity: 0, y: -5 }}
                            animate={{ opacity: 1, y: 0 }}
                            exit={{ opacity: 0, y: 5 }}
                            transition={{ duration: 0.15 }}
                            className="mt-1"
                          >
                            <span className="text-xs text-[rgba(10,12,11,0.6)] dark:text-white/60 font-medium block">
                              {price * 12}{t(',00 € al año, IVA aparte', '.00 € / year, ex. VAT')}
                            </span>
                          </motion.div>
                        ) : (
                          <motion.div
                            key="monthly-text"
                            initial={{ opacity: 0, y: 5 }}
                            animate={{ opacity: 1, y: 0 }}
                            exit={{ opacity: 0, y: -5 }}
                            transition={{ duration: 0.15 }}
                            className="mt-1.5"
                          >
                            <div className="flex items-center gap-1.5">
                              <span className="text-[10px] font-bold tracking-wider uppercase text-[rgb(20,122,132)] dark:text-[#9efaff] bg-[rgb(20,122,132)]/10 dark:bg-[#9efaff]/10 px-1.5 py-0.5 rounded border border-[rgb(20,122,132)]/20 dark:border-[#9efaff]/20">
                                {t('Precio fijo', 'Fixed price')}
                              </span>
                              <span className="text-xs text-[rgba(10,12,11,0.6)] dark:text-white/60 font-medium">
                                {t('Sin permanencia', 'Cancel anytime')}
                              </span>
                            </div>
                          </motion.div>
                        )}
                      </AnimatePresence>
                    </div>

                    <div className="flex flex-col gap-2.5">
                      <span className="text-xs font-semibold text-[rgba(10,12,11,0.6)] dark:text-white/70 uppercase tracking-wider mb-1">
                        Características
                      </span>
                      {plan.features.map((feat, idx) => (
                        <div key={idx} className={`flex items-start gap-2.5 text-sm font-normal transition-colors ${feat.included ? 'text-[rgba(10,12,11,0.85)] dark:text-white/90' : 'text-[rgba(10,12,11,0.4)] dark:text-white/30 line-through'}`}>
                          {feat.included ? (
                            <Check className="w-4 h-4 text-[rgb(52,138,46)] dark:text-[rgb(104,204,88)] shrink-0 mt-0.5" />
                          ) : (
                            <X className="w-4 h-4 text-[rgba(10,12,11,0.3)] dark:text-white/20 shrink-0 mt-0.5" />
                          )}
                          <span className="leading-snug">{feat.text}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  <Button variant={plan.popular ? 'primary' : 'secondary'} href={APP_URLS.register} className="w-full justify-center">
                    {plan.cta}
                  </Button>
                </div>
              );
            })}
          </div>
        </motion.div>

      </div>
    </section>
  );
};
