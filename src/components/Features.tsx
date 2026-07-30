import { motion } from 'framer-motion';
import {
  Sparkles,
  Zap,
  TrendingUp,
  CreditCard,
  BellRing,
  PieChart,
  FileCheck,
} from 'lucide-react';

export const Features = () => {
  const featureList = [
    {
      icon: Zap,
      title: 'Facturación Automática con IA',
      description:
        'Genera y envía facturas en pdf en milisegundos con cálculo automático de retenciones de IRPF e IVA.',
      badge: 'Smart Automation',
    },
    {
      icon: CreditCard,
      title: 'Cobros Recurrentes & Stripe',
      description:
        'Suscripciones automáticas para tus clientes con reintentos inteligentes de pago sin fricción.',
      badge: 'Global Payments',
    },
    {
      icon: TrendingUp,
      title: 'Analytics Financiero en Real-Time',
      description:
        'Dashboards interactivos de MRR, ARR, flujo de caja y proyección de impuestos trimestrales.',
      badge: 'Real-Time Insights',
    },
    {
      icon: BellRing,
      title: 'Recordatorios por WhatsApp & Email',
      description:
        'Reduce el tiempo de cobro un 65% enviando notificaciones automatizadas y educadas a tus clientes.',
      badge: 'Zero Delinquency',
    },
    {
      icon: FileCheck,
      title: 'Normativa VeriFactu & FacturaE',
      description:
        'Cumplimiento legal garantizado con la Agencia Tributaria en España y la Unión Europea.',
      badge: '100% Tax Compliant',
    },
    {
      icon: PieChart,
      title: 'Gestión de Gastos con Escáner OCR',
      description:
        'Sube fotos de tickets o facturas recibidas y Avialo extraerá los datos e impuestos automáticamente.',
      badge: 'OCR Scanner',
    },
  ];

  return (
    <section id="features" className="py-24 bg-black relative z-10 border-t border-neutral-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-neutral-900 border border-neutral-700 text-[#64CEFB] text-xs font-semibold uppercase tracking-wider mb-4">
            <Sparkles className="w-3.5 h-3.5" />
            Características Principales
          </div>
          <h2 className="text-3xl sm:text-5xl font-bold tracking-tight text-white mb-4">
            Diseñado para Impulsar Líderes de Producto y Startups
          </h2>
          <p className="text-neutral-400 text-base sm:text-lg">
            Todas las herramientas financieras y de facturación unificadas en una plataforma ultrarrápida y elegante.
          </p>
        </div>

        {/* Feature Cards Grid (shadcn ui dark style) */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {featureList.map((feat, index) => {
            const Icon = feat.icon;
            return (
              <motion.div
                key={feat.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.08 }}
                className="group relative p-8 rounded-3xl bg-neutral-900/40 border border-neutral-800 hover:border-neutral-700 backdrop-blur-xl transition-all duration-300 hover:shadow-2xl hover:shadow-[#64CEFB]/10 flex flex-col justify-between"
              >
                {/* Subtle top glow line */}
                <div className="absolute top-0 left-8 right-8 h-[1px] bg-gradient-to-r from-transparent via-[#64CEFB]/0 group-hover:via-[#64CEFB]/50 to-transparent transition-all duration-500" />

                <div>
                  <div className="flex items-center justify-between mb-6">
                    <div className="w-12 h-12 rounded-2xl bg-neutral-800/80 border border-neutral-700 flex items-center justify-center text-[#64CEFB] group-hover:scale-110 group-hover:bg-[#64CEFB] group-hover:text-black transition-all duration-300 shadow-md">
                      <Icon className="w-6 h-6" />
                    </div>
                    <span className="text-[10px] font-semibold uppercase tracking-wider text-neutral-400 bg-neutral-800/60 px-2.5 py-1 rounded-md border border-neutral-700/50">
                      {feat.badge}
                    </span>
                  </div>

                  <h3 className="text-xl font-bold text-white mb-3 group-hover:text-[#64CEFB] transition-colors">
                    {feat.title}
                  </h3>

                  <p className="text-sm text-neutral-400 leading-relaxed font-normal">
                    {feat.description}
                  </p>
                </div>

                <div className="pt-6 mt-6 border-t border-neutral-800/60 flex items-center text-xs font-semibold text-white/80 group-hover:text-white group-hover:translate-x-1 transition-all">
                  <span>Saber más sobre {feat.title.split(' ')[0]}</span>
                  <span className="ml-1 text-[#64CEFB]">→</span>
                </div>
              </motion.div>
            );
          })}
        </div>

      </div>
    </section>
  );
};
