import { motion } from 'framer-motion';
import { Star, Quote } from 'lucide-react';

export const Testimonials = () => {
  const reviews = [
    {
      name: 'Sofia Alarcón',
      role: 'Lead UI/UX Designer & Mentor',
      company: 'Studio UX Europe',
      avatar: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=150&auto=format&fit=crop&q=80',
      text: 'Avialo transformó completamente nuestra gestión de cobros en los cursos internacionales. El cobro recurrente automático y el generador de facturas nos ahorra 15 horas al mes.',
      rating: 5,
    },
    {
      name: 'Marc Torrent',
      role: 'Head of Product',
      company: 'Nexa SaaS Platform',
      avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&auto=format&fit=crop&q=80',
      text: 'La integración con la normativa VeriFactu y el cálculo automático de IVA nos dio la tranquilidad total frente a la Agencia Tributaria. Recomendado 100%.',
      rating: 5,
    },
    {
      name: 'Elena Rostova',
      role: 'Freelance Product Designer',
      company: 'Design Leadership Academy',
      avatar: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=150&auto=format&fit=crop&q=80',
      text: 'La interfaz es simplemente impecable. Transmite un nivel de sofisticación y seguridad que mis clientes internacionales aprecian desde la primera factura.',
      rating: 5,
    },
  ];

  return (
    <section className="py-24 bg-neutral-950 relative z-10 border-t border-neutral-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <p className="text-xs uppercase tracking-widest text-[#64CEFB] font-semibold mb-3">
            Casos de Éxito
          </p>
          <h2 className="text-3xl sm:text-5xl font-bold tracking-tight text-white mb-4">
            Avalado por Más de 8,000 Creadores y Diseñadores
          </h2>
          <p className="text-neutral-400 text-base sm:text-lg">
            Descubre cómo Avialo está ayudando a profesionales y empresas a escalar globalmente.
          </p>
        </div>

        {/* Reviews Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {reviews.map((rev, index) => (
            <motion.div
              key={rev.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="p-8 rounded-3xl bg-neutral-900/60 border border-neutral-800 backdrop-blur-xl flex flex-col justify-between hover:border-neutral-700 transition-colors"
            >
              <div>
                <div className="flex items-center justify-between mb-6">
                  <div className="flex gap-1 text-amber-400">
                    {[...Array(rev.rating)].map((_, i) => (
                      <Star key={i} className="w-4 h-4 fill-amber-400" />
                    ))}
                  </div>
                  <Quote className="w-6 h-6 text-neutral-700" />
                </div>

                <p className="text-neutral-300 text-sm leading-relaxed mb-6 italic">
                  "{rev.text}"
                </p>
              </div>

              <div className="flex items-center gap-4 pt-4 border-t border-neutral-800/80">
                <img
                  src={rev.avatar}
                  alt={rev.name}
                  className="w-11 h-11 rounded-full object-cover border border-[#64CEFB]/40"
                />
                <div>
                  <h4 className="text-sm font-bold text-white">{rev.name}</h4>
                  <p className="text-xs text-neutral-400">{rev.role}</p>
                  <p className="text-[10px] text-[#64CEFB] font-mono mt-0.5">{rev.company}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
};
