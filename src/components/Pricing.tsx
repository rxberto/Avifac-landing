import { useState } from 'react';
import { motion } from 'framer-motion';
import { SectionHeader } from './SectionHeader';
import { Button } from './Button';

export const Pricing = () => {
  const [isYearly, setIsYearly] = useState(false);

  const plans = [
    {
      name: 'Starter',
      desc: 'Herramientas esenciales para autónomos.',
      priceMonthly: 19,
      priceYearly: 15,
      features: [
        'Hasta 30 facturas / mes',
        'Plantillas PDF profesionales',
        'Conexión a 1 cuenta bancaria',
        'Cobros Stripe y SEPA directo',
        'Soporte por email 24/7',
      ],
    },
    {
      name: 'Profesional',
      desc: 'Motor completo para empresas en crecimiento.',
      priceMonthly: 49,
      priceYearly: 39,
      popular: true,
      features: [
        'Facturas e ingresos ilimitados',
        'Suscripciones recurrentes automáticas',
        'Multi-moneda (EUR, USD, GBP)',
        'Recordatorios por WhatsApp y Email',
        'Escáner OCR de gastos ilimitado',
        'Cumplimiento VeriFactu / FacturaE',
        'Acceso para tu gestor o asesor',
      ],
    },
    {
      name: 'Enterprise',
      desc: 'Infraestructura dedicada y SLAs garantizados.',
      priceMonthly: 129,
      priceYearly: 99,
      features: [
        'Todo lo incluido en Profesional',
        'API REST y Webhooks ilimitados',
        'Portal de clientes en dominio propio',
        'Gestor de cuenta dedicado',
        'SLA del 99.99% de disponibilidad',
        'Contrato a medida y configuración fiscal',
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
          tagText="Precios"
          title="Planes transparentes"
          description="Sin costes ocultos. Prueba 14 días gratis."
        />

        {/* Pricing Module Container */}
        <motion.div
          initial={{ opacity: 0, y: 32 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1, delay: 0.2 }}
          className="flex flex-col gap-6 w-full"
        >
          {/* Switch Bar */}
          <div className="flex items-center gap-3">
            <span className={`text-base font-normal tracking-[-0.02em] ${!isYearly ? 'text-[#0A0C0B] dark:text-white' : 'text-[rgba(10,12,11,0.72)] dark:text-white/80'}`}>
              Mensual
            </span>

            <div
              onClick={() => setIsYearly(!isYearly)}
              className={`w-[36px] h-[18px] rounded-[48px] border border-[#D2D2CE] dark:border-[#303131] bg-[#F2F2F0] dark:bg-[#131517] p-[4px] flex items-center cursor-pointer select-none transition-all ${
                isYearly ? 'justify-end' : 'justify-start'
              }`}
            >
              <div className="w-[8px] h-[8px] rounded-full bg-[#0A0C0B] dark:bg-white shadow-sm" />
            </div>

            <span className={`text-base font-normal tracking-[-0.02em] ${isYearly ? 'text-[#0A0C0B] dark:text-white' : 'text-[rgba(10,12,11,0.72)] dark:text-white/80'}`}>
              Anual
            </span>

            <span className="px-[10px] py-[4px] rounded-[100px] border border-[#D2D2CE] dark:border-[#303131] bg-[#F2F2F0] dark:bg-[#131517] text-xs font-medium tracking-[-0.02em] text-[rgb(20,122,132)] dark:text-[#9efaff]">
              Ahorra 20%
            </span>
          </div>

          {/* Pricing Cards Grid */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-[16px] w-full items-stretch">
            {plans.map((plan) => {
              const price = isYearly ? plan.priceYearly : plan.priceMonthly;

              return (
                <div
                  key={plan.name}
                  className={`w-full rounded-[2px] bg-[#F2F2F0] dark:bg-[#131517] p-[24px_24px_32px_24px] flex flex-col justify-between gap-8 border transition-all ${
                    plan.popular ? 'border-[#0A0C0B]/40 dark:border-white/40 shadow-xl' : 'border-transparent hover:border-[#0A0C0B]/30 dark:hover:border-white/30'
                  }`}
                >
                  <div className="flex flex-col gap-6">
                    <div>
                      <div className="flex items-center justify-between mb-2">
                        <h5 className="text-lg font-medium leading-[1.1] tracking-[-0.04em] text-[#0A0C0B] dark:text-white">
                          {plan.name}
                        </h5>
                        {plan.popular && (
                          <span className="text-[10px] font-medium tracking-[-0.02em] text-white bg-[#0A0C0B] dark:text-black dark:bg-white px-2 py-0.5 rounded">
                            Más Popular
                          </span>
                        )}
                      </div>
                      <p className="text-sm font-normal leading-[1.5] tracking-[-0.02em] text-[rgba(10,12,11,0.72)] dark:text-white/80 min-h-[36px]">
                        {plan.desc}
                      </p>
                    </div>

                    <div className="flex items-baseline gap-1 py-4 border-y border-[#E6E6E3] dark:border-[#232326]">
                      <span className="text-[38px] font-normal leading-[1.1] tracking-[-0.04em] text-[#0A0C0B] dark:text-white">
                        €{price}
                      </span>
                      <span className="text-sm font-normal text-[rgba(10,12,11,0.72)] dark:text-white/80">/ mes</span>
                    </div>

                    <div className="flex flex-col gap-2">
                      <span className="text-xs font-medium text-[rgba(10,12,11,0.6)] dark:text-white/70 uppercase tracking-wider mb-1">
                        Incluye:
                      </span>
                      {plan.features.map((feat) => (
                        <div key={feat} className="flex items-center gap-2 text-sm font-normal text-[rgba(10,12,11,0.72)] dark:text-white/80">
                          <span className="w-1.5 h-1.5 rounded-full bg-[rgb(52,138,46)] dark:bg-[rgb(104,204,88)] shrink-0" />
                          <span>{feat}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  <Button variant={plan.popular ? 'primary' : 'secondary'} href="#cta" className="w-full">
                    Empezar ahora gratis
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
