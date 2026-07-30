import { motion } from 'framer-motion';
import { SectionHeader } from './SectionHeader';

export const FeaturesSection = () => {
  const cards = [
    {
      title: 'Configuración rápida',
      desc: 'Conecta tus sistemas financieros en menos de 2 minutos.',
      img: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=500&auto=format&fit=crop&q=80',
      delay: 0,
    },
    {
      title: 'Modelos a medida',
      desc: 'Personaliza plantillas y flujos según tus necesidades fiscales.',
      img: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=500&auto=format&fit=crop&q=80',
      delay: 0.2,
    },
    {
      title: 'Datos seguros',
      desc: 'Cifrado bancario AES-256 y registros inalterables VeriFactu.',
      img: 'https://images.unsplash.com/photo-1563986768609-322da13575f3?w=500&auto=format&fit=crop&q=80',
      delay: 0.4,
    },
  ];

  return (
    <section id="features" className="w-full bg-[#F7F7F5]/60 dark:bg-[#0d0f0e]/60 py-[72px] relative z-10 transition-colors duration-300 overflow-hidden">
      
      {/* Background Dots Texture */}
      <div className="absolute top-0 right-0 w-[920px] h-[780px] bg-dot-texture animate-dot-pulse pointer-events-none opacity-50 z-0" />

      <div className="max-w-[1080px] mx-auto px-4 sm:px-0 flex flex-col gap-12 relative z-10">
        
        {/* Section Header */}
        <SectionHeader
          dotColor="var(--accent-yellow)"
          tagText="Infraestructura"
          title="Adaptado a tu flujo"
          description="Arquitectura modular integrada con tu contabilidad y pasarelas de pago."
        />

        {/* 3 Content Cards Row */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 w-full">
          {cards.map((card) => (
            <motion.div
              key={card.title}
              initial={{ opacity: 0, y: 32 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 1, delay: card.delay, ease: [0.12, 0.23, 0.5, 1] }}
              className="flex flex-col w-full rounded-[4px] overflow-hidden bg-[#F2F2F0] dark:bg-[#131517] border border-[#D2D2CE] dark:border-[#303131] hover:border-[#0A0C0B]/30 dark:hover:border-white/30 transition-colors duration-300 text-left"
            >
              {/* Top Image */}
              <div className="w-full h-[236px] overflow-hidden bg-[#E6E6E3] dark:bg-[#232326]">
                <img
                  src={card.img}
                  alt={card.title}
                  className="w-full h-full object-cover opacity-85 hover:scale-105 transition-transform duration-500"
                />
              </div>

              {/* Body Container */}
              <div className="w-full p-[32px_24px] flex flex-col gap-3 flex-1">
                <div className="flex items-center gap-3">
                  <span className="w-[8px] h-[14px] rounded-full bg-[rgb(154,112,12)] dark:bg-[rgb(212,177,68)] shrink-0" />
                  <h4 className="text-2xl font-medium leading-[1.1] tracking-[-0.04em] text-[#0A0C0B] dark:text-white">
                    {card.title}
                  </h4>
                </div>
                <p className="text-base font-normal leading-[1.5] tracking-[-0.02em] text-[rgba(10,12,11,0.72)] dark:text-white/80">
                  {card.desc}
                </p>
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
};
