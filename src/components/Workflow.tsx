import { motion } from 'framer-motion';
import { UserCheck, Sliders, CheckCircle2, ArrowRight } from 'lucide-react';

export const Workflow = () => {
  const steps = [
    {
      num: '01',
      title: 'Conecta tu banco y NIF/CIF',
      desc: 'Configuración inicial en menos de 2 minutos. Sincronización automática de cuentas de banco Santander, BBVA, Revolut o Wise.',
      icon: UserCheck,
    },
    {
      num: '02',
      title: 'Crea y automatiza tus facturas',
      desc: 'Plantillas de diseño profesional personalizables. Envía facturas de un solo pago o programa suscripciones mensuales.',
      icon: Sliders,
    },
    {
      num: '03',
      title: 'Cobra 3 veces más rápido',
      desc: 'Ofrece pagos integrados con tarjeta, Apple Pay o SEPA Direct Debit y recibe notificaciones en tiempo real al cobrar.',
      icon: CheckCircle2,
    },
  ];

  return (
    <section className="py-24 bg-neutral-950 relative z-10 border-t border-neutral-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <p className="text-xs uppercase tracking-widest text-[#64CEFB] font-semibold mb-3">
            Proceso Simplificado
          </p>
          <h2 className="text-3xl sm:text-5xl font-bold tracking-tight text-white mb-4">
            Facturar nunca fue tan rápido y sencillo
          </h2>
          <p className="text-neutral-400 text-base sm:text-lg">
            De la emisión al cobro en 3 sencillos pasos automatizados.
          </p>
        </div>

        {/* Steps Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 relative">
          {steps.map((step, index) => {
            const Icon = step.icon;
            return (
              <motion.div
                key={step.num}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.15 }}
                className="relative p-8 rounded-3xl bg-neutral-900/60 border border-neutral-800 backdrop-blur-xl flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center justify-between mb-6">
                    <span className="text-4xl font-extrabold text-[#64CEFB]/40 font-mono">
                      {step.num}
                    </span>
                    <div className="p-3 rounded-2xl bg-neutral-800 border border-neutral-700 text-[#64CEFB]">
                      <Icon className="w-6 h-6" />
                    </div>
                  </div>

                  <h3 className="text-xl font-bold text-white mb-3">{step.title}</h3>
                  <p className="text-sm text-neutral-400 leading-relaxed">{step.desc}</p>
                </div>

                {index < 2 && (
                  <div className="hidden md:block absolute -right-4 top-1/2 -translate-y-1/2 z-20 text-neutral-600">
                    <ArrowRight className="w-6 h-6 text-neutral-600" />
                  </div>
                )}
              </motion.div>
            );
          })}
        </div>

      </div>
    </section>
  );
};
