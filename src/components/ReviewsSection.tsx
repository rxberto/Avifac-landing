import { SectionHeader } from './SectionHeader';
import { useLanguage } from '../context/LanguageContext';

export const ReviewsSection = () => {
  const { t } = useLanguage();

  const reviewsRow1 = [
    {
      name: 'John Williams',
      title: t('Gestor de Carteras', 'Portfolio Manager'),
      avatar: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=150&auto=format&fit=crop&q=80',
      text: t(
        'Avialo ha transformado cómo gestionamos la facturación y los cobros en nuestras empresas.',
        'Avialo transformed how we manage invoicing and collections across all our companies.'
      ),
    },
    {
      name: 'Daniel Brooks',
      title: t('Analista Financiero', 'Financial Analyst'),
      avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&auto=format&fit=crop&q=80',
      text: t(
        'La precisión en los informes fiscales y VeriFactu nos ahorran semanas de trabajo contable.',
        'VeriFactu tax reports and accuracy save us weeks of manual accounting work.'
      ),
    },
    {
      name: 'Emily Watson',
      title: t('Directora de Estrategia', 'Head of Strategy'),
      avatar: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=150&auto=format&fit=crop&q=80',
      text: t(
        'El soporte multi-moneda y los pagos SEPA hacen que Avialo sea indispensable.',
        'Multi-currency support and direct SEPA debits make Avialo essential for us.'
      ),
    },
  ];

  const reviewsRow2 = [
    {
      name: 'Michael Turner',
      title: t('Director Financiero', 'CFO'),
      avatar: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=150&auto=format&fit=crop&q=80',
      text: t(
        'Los recordatorios automáticos por WhatsApp redujeron la morosidad a menos del 1%.',
        'Automated WhatsApp payment reminders reduced defaults to under 1%.'
      ),
    },
    {
      name: 'Sophia Reed',
      title: t('Diseñadora de Producto Lead', 'Lead Product Designer'),
      avatar: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=150&auto=format&fit=crop&q=80',
      text: t(
        'Una interfaz ultralimpia, rápida y profesional con la elegancia que exigimos.',
        'An ultra-clean, fast, and elegant interface with the precision we demand.'
      ),
    },
    {
      name: 'Oliver Bennett',
      title: t('Director de Operaciones', 'Head of Operations'),
      avatar: 'https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?w=150&auto=format&fit=crop&q=80',
      text: t(
        'Despliegue rápido y garantía total de cumplimiento fiscal VeriFactu.',
        'Rapid setup and complete peace of mind for VeriFactu tax compliance.'
      ),
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
          tagText={t('Testimonios', 'Testimonials')}
          title={t('Confianza demostrada', 'Trusted by Leaders')}
          description={t('Opiniones de directores financieros y empresas.', 'Feedback from CFOs, solo pros, and growing businesses.')}
        />
      </div>

      {/* Carrusel Continuo */}
      <div className="relative w-full overflow-hidden flex flex-col gap-6 py-2">
        
        <div className="absolute inset-y-0 left-0 w-24 sm:w-48 bg-gradient-to-r from-[#FCFCFB] dark:from-[#080a09] via-[#FCFCFB]/80 dark:via-[#080a09]/80 to-transparent z-20 pointer-events-none backdrop-blur-[1px]" />
        <div className="absolute inset-y-0 right-0 w-24 sm:w-48 bg-gradient-to-l from-[#FCFCFB] dark:from-[#080a09] via-[#FCFCFB]/80 dark:via-[#080a09]/80 to-transparent z-20 pointer-events-none backdrop-blur-[1px]" />

        {/* Fila 1 */}
        <div className="flex items-center gap-4 sm:gap-6 animate-marquee-reverse whitespace-nowrap">
          {[...reviewsRow1, ...reviewsRow1, ...reviewsRow1, ...reviewsRow1].map((rev, idx) => (
            <div
              key={`row1-${rev.name}-${idx}`}
              className="w-[280px] sm:w-[380px] shrink-0 rounded-[4px] bg-[#F2F2F0] dark:bg-[#131517] p-4 sm:p-6 flex flex-col justify-between gap-3 sm:gap-4 text-left border border-[#D2D2CE] dark:border-[#303131] hover:border-[#0A0C0B]/30 dark:hover:border-white/30 transition-all shadow-sm select-none"
            >
              <p className="text-xs sm:text-base font-normal leading-[1.5] tracking-[-0.02em] text-[rgba(10,12,11,0.72)] dark:text-white/80 whitespace-normal">
                "{rev.text}"
              </p>

              <div className="flex flex-col gap-2 sm:gap-2.5 w-full">
                <div className="w-full h-[1px] bg-[#E6E6E3] dark:bg-[#232326] rounded-full shrink-0" />
                <div className="flex items-center gap-2 sm:gap-3 w-full">
                  <img
                    src={rev.avatar}
                    alt={rev.name}
                    className="w-8 h-8 sm:w-10 sm:h-10 rounded-full object-cover shrink-0"
                  />
                  <div className="flex flex-col">
                    <h6 className="text-xs sm:text-sm font-medium leading-[1.1] tracking-[-0.04em] text-[#0A0C0B] dark:text-white">
                      {rev.name}
                    </h6>
                    <span className="text-[10px] sm:text-xs font-normal text-[rgba(10,12,11,0.72)] dark:text-white/80">
                      {rev.title}
                    </span>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Fila 2 */}
        <div className="flex items-center gap-4 sm:gap-6 animate-marquee whitespace-nowrap">
          {[...reviewsRow2, ...reviewsRow2, ...reviewsRow2, ...reviewsRow2].map((rev, idx) => (
            <div
              key={`row2-${rev.name}-${idx}`}
              className="w-[280px] sm:w-[380px] shrink-0 rounded-[4px] bg-[#F2F2F0] dark:bg-[#131517] p-4 sm:p-6 flex flex-col justify-between gap-3 sm:gap-4 text-left border border-[#D2D2CE] dark:border-[#303131] hover:border-[#0A0C0B]/30 dark:hover:border-white/30 transition-all shadow-sm select-none"
            >
              <p className="text-xs sm:text-base font-normal leading-[1.5] tracking-[-0.02em] text-[rgba(10,12,11,0.72)] dark:text-white/80 whitespace-normal">
                "{rev.text}"
              </p>

              <div className="flex flex-col gap-2 sm:gap-2.5 w-full">
                <div className="w-full h-[1px] bg-[#E6E6E3] dark:bg-[#232326] rounded-full shrink-0" />
                <div className="flex items-center gap-2 sm:gap-3 w-full">
                  <img
                    src={rev.avatar}
                    alt={rev.name}
                    className="w-8 h-8 sm:w-10 sm:h-10 rounded-full object-cover shrink-0"
                  />
                  <div className="flex flex-col">
                    <h6 className="text-xs sm:text-sm font-medium leading-[1.1] tracking-[-0.04em] text-[#0A0C0B] dark:text-white">
                      {rev.name}
                    </h6>
                    <span className="text-[10px] sm:text-xs font-normal text-[rgba(10,12,11,0.72)] dark:text-white/80">
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
