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
      desc: t('Facturas rápidas e impecables sin complicaciones', 'Fast & simple invoicing for solo pros'),
      priceMonthly: 15,
      priceYearly: 12,
      cta: t('Contratar Esencial', 'Choose Essential'),
      features: [
        { text: t('Facturas ilimitadas con Verifactu', 'Unlimited invoices with VeriFactu'), included: true },
        { text: t('Presupuestos, albaranes y gastos', 'Quotes, delivery notes & expenses'), included: true },
        { text: t('Cobro online por enlace de pago', 'Online card payment link billing'), included: true },
        { text: t('1 empresa y NIF incluido', '1 company and tax ID included'), included: true },
        { text: t('1 usuario (+ gestor gratis)', '1 user (+ free accountant access)'), included: true },
        { text: t('Asistente: 100 consultas/mes', 'AI Copilot: 100 queries/month'), included: true },
        { text: t('Soporte email 24-48h', 'Email support within 24-48h'), included: true },
        { text: t('Facturas recurrentes y cuotas', 'Recurring invoices and subscriptions'), included: false },
        { text: t('Equipo y roles granulares', 'Team management & roles'), included: false },
        { text: t('API REST, webhooks y tiendas', 'REST API, webhooks & e-commerce'), included: false },
        { text: t('Facturar a la Adm. Pública (FACe)', 'Public Admin invoicing (FACe)'), included: false },
        { text: t('Portal de cliente dedicado', 'Dedicated self-service client portal'), included: false },
        { text: t('Plantillas y campos propios', 'Custom templates & fields'), included: false },
        { text: t('Cartera de clientes en panel', 'Client portfolio in console'), included: false },
        { text: t('Marca blanca de tu gestoría', 'White-label custom branding'), included: false },
      ],
    },
    {
      name: 'Completo',
      desc: t('El motor operativo definitivo para tu negocio', 'The operational and tax engine for your business'),
      priceMonthly: 29,
      priceYearly: 24,
      cta: t('Contratar Completo', 'Choose Complete'),
      features: [
        { text: t('Facturas ilimitadas con Verifactu', 'Unlimited invoices with VeriFactu'), included: true },
        { text: t('Presupuestos, albaranes y gastos', 'Quotes, delivery notes & expenses'), included: true },
        { text: t('Cobro online por enlace de pago', 'Online card payment link billing'), included: true },
        { text: t('1 empresa y NIF incluido', '1 company and tax ID included'), included: true },
        { text: t('3 usuarios (+ gestor gratis)', '3 users (+ free accountant access)'), included: true },
        { text: t('Asistente: 500 consultas/mes', 'AI Copilot: 500 queries/month'), included: true },
        { text: t('Soporte prioritario < 8h', 'Priority support < 8 hours'), included: true },
        { text: t('Facturas recurrentes y cuotas', 'Recurring invoices and subscriptions'), included: true },
        { text: t('Equipo y roles granulares', 'Team management & roles'), included: true },
        { text: t('API REST, webhooks y tiendas', 'REST API, webhooks & e-commerce'), included: true },
        { text: t('Facturar a la Adm. Pública (FACe)', 'Public Admin invoicing (FACe)'), included: true },
        { text: t('Portal de cliente dedicado', 'Dedicated self-service client portal'), included: true },
        { text: t('Plantillas y campos propios', 'Custom templates & fields'), included: true },
        { text: t('Cartera de clientes en panel', 'Client portfolio in console'), included: false },
        { text: t('Marca blanca de tu gestoría', 'White-label custom branding'), included: false },
      ],
    },
    {
      name: 'Multiempresa',
      desc: t('Múltiples sociedades bajo un solo panel', 'Multiple legal entities in a unified console'),
      priceMonthly: 99,
      priceYearly: 79,
      cta: t('Contratar Multiempresa', 'Choose Multi-Entity'),
      features: [
        { text: t('Facturas ilimitadas con Verifactu', 'Unlimited invoices with VeriFactu'), included: true },
        { text: t('Presupuestos, albaranes y gastos', 'Quotes, delivery notes & expenses'), included: true },
        { text: t('Cobro online por enlace de pago', 'Online card payment link billing'), included: true },
        { text: t('10 empresas y NIFs incluidos', '10 companies and tax IDs included'), included: true },
        { text: t('Usuarios ilimitados (+ gestores)', 'Unlimited users (+ free accountants)'), included: true },
        { text: t('Asistente Copiloto sin límite', 'Unlimited AI Copilot advisory queries'), included: true },
        { text: t('Soporte directo SLA < 4h', 'Direct VIP support SLA < 4h'), included: true },
        { text: t('Facturas recurrentes y cuotas', 'Recurring invoices and subscriptions'), included: true },
        { text: t('Equipo y roles granulares', 'Team management & roles'), included: true },
        { text: t('API REST, webhooks y tiendas', 'REST API, webhooks & e-commerce'), included: true },
        { text: t('Facturar a la Adm. Pública (FACe)', 'Public Admin invoicing (FACe)'), included: true },
        { text: t('Portal de cliente dedicado', 'Dedicated self-service client portal'), included: true },
        { text: t('Plantillas y campos propios', 'Custom templates & fields'), included: true },
        { text: t('Cartera de clientes en panel', 'Client portfolio in console'), included: true },
        { text: t('Marca blanca de tu gestoría', 'White-label custom branding'), included: true },
      ],
    },
  ];

  return (
    <section id="pricing" className="w-full bg-[#FCFCFB] dark:bg-[#080a09] py-[72px] relative z-10 overflow-hidden transition-colors duration-300">
      
      {/* Marco Dots */}
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
        
        {/* Section Header Limpio sin exceso de elementos */}
        <SectionHeader
          dotColor="var(--accent-green)"
          tagText={t('Planes y Precios', 'Plans & Pricing')}
          title={t('Planes transparentes para cada negocio', 'Transparent plans for every business')}
          description={t(
            'Todo incluido en cada nivel, sin módulos que se pagan aparte ni sorpresas. Sin permanencia y con facturas VeriFactu ilimitadas en todos los planes.',
            'All-inclusive plans with zero hidden fees. No lock-in contracts and unlimited VeriFactu invoices across every tier.'
          )}
        />

        {/* Pricing Container */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.1 }}
          className="flex flex-col gap-6 w-full"
        >
          {/* Conmutador y Nota Editorial (sin tags recargados ni emojis) */}
          <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 w-full bg-[#F2F2F0] dark:bg-[#131517] p-4 sm:p-5 rounded-[12px] border border-[#D2D2CE] dark:border-[#303131]">
            <div className="flex flex-col sm:flex-row sm:items-center gap-3 w-full sm:w-auto">
              <span className="text-xs sm:text-sm font-bold text-[#0A0C0B] dark:text-white shrink-0">
                {t('Frecuencia:', 'Frequency:')}
              </span>

              <div className="flex flex-col sm:flex-row items-stretch sm:items-center p-1 rounded-[8px] bg-[#FCFCFB] dark:bg-[#080a09] border border-[#D2D2CE] dark:border-[#303131] w-full sm:w-auto gap-1 sm:gap-0">
                <button
                  onClick={() => setIsYearly(false)}
                  className={`px-4 py-1.5 rounded-[6px] text-xs sm:text-sm transition-all duration-200 cursor-pointer ${
                    !isYearly
                      ? 'bg-[#0A0C0B] dark:bg-white text-white dark:text-black font-bold shadow-sm'
                      : 'text-[rgba(10,12,11,0.7)] dark:text-white/70 hover:text-[#0A0C0B] dark:hover:text-white font-medium'
                  }`}
                >
                  {t('Pago Mensual', 'Monthly Billing')}
                </button>
                <button
                  onClick={() => setIsYearly(true)}
                  className={`px-4 py-1.5 rounded-[6px] text-xs sm:text-sm transition-all duration-200 cursor-pointer ${
                    isYearly
                      ? 'bg-[#0A0C0B] dark:bg-white text-white dark:text-black font-bold shadow-sm'
                      : 'text-[rgba(10,12,11,0.7)] dark:text-white/70 hover:text-[#0A0C0B] dark:hover:text-white font-medium'
                  }`}
                >
                  {t('Pago Anual (30% Dto.)', 'Annual Billing (30% Off)')}
                </button>
              </div>
            </div>

            <div className="text-xs sm:text-sm text-[rgba(10,12,11,0.8)] dark:text-white/80 font-normal">
              {t(
                'Descuento de Fundador: Ahorras un 30% en modalidad anual y tu tarifa queda protegida sin subidas durante 2 años.',
                'Founder Discount: Save 30% with annual billing and keep your fee shielded against rate increases for 2 straight years.'
              )}
            </div>
          </div>

          {/* Tarjetas de Precios Uniformes - Todos por igual */}
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-5 w-full items-stretch">
            {plans.map((plan) => {
              const price = isYearly ? plan.priceYearly : plan.priceMonthly;

              return (
                <div
                  key={plan.name}
                  className="w-full rounded-[12px] bg-[#F2F2F0] dark:bg-[#131517] p-7 sm:p-8 flex flex-col justify-between gap-8 border border-[#D2D2CE] dark:border-[#303131] transition-all hover:border-[#0A0C0B]/40 dark:hover:border-white/40"
                >
                  <div className="flex flex-col gap-6">
                    <div>
                      <h3 className="text-2xl font-bold leading-[1.1] tracking-[-0.03em] text-[#0A0C0B] dark:text-white mb-2">
                        {plan.name}
                      </h3>
                      <p className="text-xs sm:text-sm font-normal leading-[1.5] text-[rgba(10,12,11,0.72)] dark:text-white/80 min-h-[42px]">
                        {plan.desc}
                      </p>
                    </div>

                    <div className="flex flex-col py-5 border-y border-[#E6E6E3] dark:border-[#232326] justify-center">
                      <div className="flex items-baseline gap-1.5">
                        <AnimatePresence mode="wait">
                          <motion.span
                            key={isYearly ? 'yearly' : 'monthly'}
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            exit={{ opacity: 0 }}
                            transition={{ duration: 0.15 }}
                            className="text-4xl font-extrabold leading-[1.1] tracking-[-0.04em] text-[#0A0C0B] dark:text-white inline-block"
                          >
                            {price},00 €
                          </motion.span>
                        </AnimatePresence>
                        <span className="text-sm font-medium text-[rgba(10,12,11,0.72)] dark:text-white/80">{t('/ mes', '/ month')}</span>
                      </div>
                      <div className="mt-1.5 text-xs text-[rgba(10,12,11,0.7)] dark:text-white/70 font-normal">
                        {isYearly ? (
                          <span>
                            {price * 12}{t(',00 € al año (facturación anual, IVA no incl.)', '.00 € / year (billed annually, ex. VAT)')}
                          </span>
                        ) : (
                          <span>
                            {t('Facturación mensual sin permanencia (IVA no incl.)', 'Billed monthly, cancel anytime (ex. VAT)')}
                          </span>
                        )}
                      </div>
                    </div>

                    <div className="flex flex-col gap-3">
                      <div className="space-y-2.5">
                        {plan.features.map((feat, idx) => (
                          <div
                            key={idx}
                            className={`flex items-start gap-2.5 text-xs sm:text-sm transition-colors ${
                              feat.included
                                ? 'text-[rgba(10,12,11,0.88)] dark:text-white/90 font-normal'
                                : 'text-[rgba(10,12,11,0.35)] dark:text-white/30 line-through'
                            }`}
                          >
                            {feat.included ? (
                              <Check className="w-4 h-4 text-[rgb(52,138,46)] dark:text-[rgb(104,204,88)] shrink-0 mt-0.5" />
                            ) : (
                              <X className="w-4 h-4 text-[rgba(10,12,11,0.25)] dark:text-white/20 shrink-0 mt-0.5" />
                            )}
                            <span className="leading-snug">{feat.text}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>

                  <div className="pt-2">
                    <Button variant="primary" href={APP_URLS.register} className="w-full justify-center py-3 text-sm font-bold">
                      {plan.cta}
                    </Button>
                  </div>
                </div>
              );
            })}
          </div>

          {/* Banner limpio de acceso a la Página de Precios y Comparativa */}
          <div className="w-full mt-2 flex flex-col sm:flex-row items-center justify-between p-6 sm:p-8 bg-[#F2F2F0] dark:bg-[#131517] rounded-[12px] border border-[#D2D2CE] dark:border-[#303131] gap-6">
            <div className="space-y-1.5 text-left max-w-3xl">
              <h4 className="text-base sm:text-lg font-bold text-[#0A0C0B] dark:text-white tracking-tight">
                {t('¿Quieres comparar todas las especificaciones y ventajas en detalle?', 'Want to compare all specifications and advantages in detail?')}
              </h4>
              <p className="text-xs sm:text-sm text-[rgba(10,12,11,0.72)] dark:text-white/80 leading-relaxed font-normal">
                {t(
                  'Explora nuestra página dedicada de precios con la matriz técnica completa por módulos (IA, OCR, API, VeriFactu) y conoce nuestras garantías SIF ante la Agencia Tributaria.',
                  'Explore our dedicated pricing page featuring the complete technical feature matrix (AI, OCR, API, VeriFactu) and review our official Tax Agency SIF compliance commitments.'
                )}
              </p>
            </div>
            <Button
              variant="secondary"
              href="/precios"
              className="w-full sm:w-auto shrink-0 whitespace-normal sm:whitespace-nowrap px-6 py-3.5 text-xs sm:text-sm font-bold justify-center text-center"
            >
              <span>{t('Ver Página Completa de Precios →', 'Explore Full Pricing Page →')}</span>
            </Button>
          </div>
        </motion.div>

      </div>
    </section>
  );
};
