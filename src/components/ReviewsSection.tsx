import { SectionHeader } from './SectionHeader';

export const ReviewsSection = () => {
  const reviewsRow1 = [
    {
      name: 'John Williams',
      title: 'Gestor de Carteras',
      avatar: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=150&auto=format&fit=crop&q=80',
      text: 'Avialo ha transformado cómo gestionamos la facturación y los cobros en nuestras empresas.',
    },
    {
      name: 'Daniel Brooks',
      title: 'Analista Financiero',
      avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&auto=format&fit=crop&q=80',
      text: 'La precisión en los informes fiscales y VeriFactu nos ahorran semanas de trabajo contable.',
    },
    {
      name: 'Emily Watson',
      title: 'Directora de Estrategia',
      avatar: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=150&auto=format&fit=crop&q=80',
      text: 'El soporte multi-moneda y los pagos SEPA hacen que Avialo sea indispensable.',
    },
  ];

  const reviewsRow2 = [
    {
      name: 'Michael Turner',
      title: 'Director Financiero',
      avatar: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=150&auto=format&fit=crop&q=80',
      text: 'Los recordatorios automáticos por WhatsApp redujeron la morosidad a menos del 1%.',
    },
    {
      name: 'Sophia Reed',
      title: 'Diseñadora de Producto Lead',
      avatar: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=150&auto=format&fit=crop&q=80',
      text: 'Una interfaz ultralimpia, rápida y profesional con la elegancia que exigimos.',
    },
    {
      name: 'Oliver Bennett',
      title: 'Director de Operaciones',
      avatar: 'https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?w=150&auto=format&fit=crop&q=80',
      text: 'Despliegue rápido y garantía total de cumplimiento fiscal VeriFactu.',
    },
  ];

  return (
    <section id="reviews" className="w-full bg-[#FCFCFB] dark:bg-[#080a09] py-[72px] relative z-10 transition-colors duration-300 overflow-hidden">
      
      {/* Background Dots Texture */}
      <div className="absolute top-0 right-0 w-[920px] h-[780px] bg-dot-texture animate-dot-pulse pointer-events-none opacity-20 z-0" />

      <div className="max-w-[1080px] mx-auto px-4 sm:px-0 flex flex-col gap-10 relative z-10 mb-8">
        {/* Section Header */}
        <SectionHeader
          dotColor="var(--accent-green)"
          tagText="Testimonios"
          title="Confianza demostrada"
          description="Opiniones de directores financieros y empresas."
        />
      </div>

      {/* Carrusel Continuo */}
      <div className="relative w-full overflow-hidden flex flex-col gap-6 py-2">
        
        <div className="absolute inset-y-0 left-0 w-24 sm:w-48 bg-gradient-to-r from-[#FCFCFB] dark:from-[#080a09] via-[#FCFCFB]/80 dark:via-[#080a09]/80 to-transparent z-20 pointer-events-none backdrop-blur-[1px]" />
        <div className="absolute inset-y-0 right-0 w-24 sm:w-48 bg-gradient-to-l from-[#FCFCFB] dark:from-[#080a09] via-[#FCFCFB]/80 dark:via-[#080a09]/80 to-transparent z-20 pointer-events-none backdrop-blur-[1px]" />

        {/* Fila 1 */}
        <div className="flex items-center gap-6 animate-marquee-reverse whitespace-nowrap">
          {[...reviewsRow1, ...reviewsRow1, ...reviewsRow1, ...reviewsRow1].map((rev, idx) => (
            <div
              key={`row1-${rev.name}-${idx}`}
              className="w-[340px] sm:w-[380px] shrink-0 rounded-[4px] bg-[#F2F2F0] dark:bg-[#131517] p-5 sm:p-6 flex flex-col justify-between gap-4 text-left border border-[#D2D2CE] dark:border-[#303131] hover:border-[#0A0C0B]/30 dark:hover:border-white/30 transition-all shadow-sm select-none"
            >
              <p className="text-sm sm:text-base font-normal leading-[1.5] tracking-[-0.02em] text-[rgba(10,12,11,0.72)] dark:text-white/80 whitespace-normal">
                "{rev.text}"
              </p>

              <div className="flex flex-col gap-2.5 w-full">
                <div className="w-full h-[1px] bg-[#E6E6E3] dark:bg-[#232326] rounded-full shrink-0" />
                <div className="flex items-center gap-3 w-full">
                  <img
                    src={rev.avatar}
                    alt={rev.name}
                    className="w-10 h-10 rounded-full object-cover shrink-0"
                  />
                  <div className="flex flex-col">
                    <h6 className="text-sm font-medium leading-[1.1] tracking-[-0.04em] text-[#0A0C0B] dark:text-white">
                      {rev.name}
                    </h6>
                    <span className="text-xs font-normal text-[rgba(10,12,11,0.72)] dark:text-white/80">
                      {rev.title}
                    </span>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Fila 2 */}
        <div className="flex items-center gap-6 animate-marquee whitespace-nowrap">
          {[...reviewsRow2, ...reviewsRow2, ...reviewsRow2, ...reviewsRow2].map((rev, idx) => (
            <div
              key={`row2-${rev.name}-${idx}`}
              className="w-[340px] sm:w-[380px] shrink-0 rounded-[4px] bg-[#F2F2F0] dark:bg-[#131517] p-5 sm:p-6 flex flex-col justify-between gap-4 text-left border border-[#D2D2CE] dark:border-[#303131] hover:border-[#0A0C0B]/30 dark:hover:border-white/30 transition-all shadow-sm select-none"
            >
              <p className="text-sm sm:text-base font-normal leading-[1.5] tracking-[-0.02em] text-[rgba(10,12,11,0.72)] dark:text-white/80 whitespace-normal">
                "{rev.text}"
              </p>

              <div className="flex flex-col gap-2.5 w-full">
                <div className="w-full h-[1px] bg-[#E6E6E3] dark:bg-[#232326] rounded-full shrink-0" />
                <div className="flex items-center gap-3 w-full">
                  <img
                    src={rev.avatar}
                    alt={rev.name}
                    className="w-10 h-10 rounded-full object-cover shrink-0"
                  />
                  <div className="flex flex-col">
                    <h6 className="text-sm font-medium leading-[1.1] tracking-[-0.04em] text-[#0A0C0B] dark:text-white">
                      {rev.name}
                    </h6>
                    <span className="text-xs font-normal text-[rgba(10,12,11,0.72)] dark:text-white/80">
                      {rev.title}
                    </span>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

      </div>

      <div className="w-full max-w-4xl mx-auto h-[1px] bg-gradient-to-r from-[#D2D2CE]/0 via-[#D2D2CE]/40 dark:via-[#303131]/40 to-[#D2D2CE]/0 mt-12" />
    </section>
  );
};
