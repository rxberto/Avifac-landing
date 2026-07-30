import { motion } from 'framer-motion';
import { ShieldCheck, Zap, Globe2, Award } from 'lucide-react';

export const SocialProof = () => {
  const logos = [
    { name: 'Redsys', label: 'REDSYS' },
    { name: 'Stripe', label: 'STRIPE' },
    { name: 'Shopify', label: 'SHOPIFY' },
    { name: 'WooCommerce', label: 'WOOCOMMERCE' },
    { name: 'PayPal', label: 'PAYPAL' },
    { name: 'Holded', label: 'HOLDED' },
    { name: 'Wise', label: 'WISE' },
    { name: 'Revolut', label: 'REVOLUT' },
  ];

  const metrics = [
    { value: '€50M+', label: 'Facturados Anualmente', icon: Zap },
    { value: '99.9%', label: 'Cobros a Tiempo', icon: ShieldCheck },
    { value: '120+', label: 'Países Compatibles', icon: Globe2 },
    { value: 'VeriFactu', label: '100% Legal España/UE', icon: Award },
  ];

  return (
    <section className="py-16 bg-black border-y border-neutral-800/80 relative z-10 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Metrics Grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-16">
          {metrics.map((metric, index) => {
            const Icon = metric.icon;
            return (
              <motion.div
                key={metric.label}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="p-6 rounded-2xl bg-neutral-900/40 border border-neutral-800 hover:border-neutral-700 backdrop-blur-sm transition-all duration-300 group"
              >
                <div className="flex items-center justify-between mb-3">
                  <span className="text-3xl md:text-4xl font-extrabold text-white tracking-tight group-hover:text-[#64CEFB] transition-colors">
                    {metric.value}
                  </span>
                  <div className="p-2 rounded-xl bg-white/5 text-[#64CEFB]">
                    <Icon className="w-5 h-5" />
                  </div>
                </div>
                <p className="text-sm text-neutral-400 font-medium">{metric.label}</p>
              </motion.div>
            );
          })}
        </div>

        {/* Integration logos title */}
        <p className="text-center text-xs uppercase tracking-widest text-neutral-500 font-semibold mb-8">
          Integrado Sin Fricción con las Mejores Pasarelas y Plataformas de Cobro
        </p>

        {/* Logos Grid */}
        <div className="flex flex-wrap items-center justify-center gap-6 md:gap-12 opacity-80 transition-all duration-500">
          {logos.map((logo) => (
            <div
              key={logo.name}
              className="flex items-center gap-2 px-4 py-2 rounded-xl bg-neutral-900/50 border border-neutral-800 text-neutral-300 hover:text-white font-bold text-sm tracking-wider transition-colors duration-200"
            >
              <div className="w-2 h-2 rounded-full bg-[#64CEFB]" />
              <span>{logo.label}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
