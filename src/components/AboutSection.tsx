import { motion } from 'framer-motion';
import { SectionHeader } from './SectionHeader';
import { Button } from './Button';
import { useLanguage } from '../context/LanguageContext';

export const AboutSection = () => {
  const { t } = useLanguage();

  const blocks = [
    {
      id: 1,
      imageLeft: true,
      title: t('Tus operaciones en un solo lugar', 'Operations in One Place'),
      desc: t('Consolida facturación, conciliación bancaria y monitorización de tesorería.', 'Consolidate invoicing, bank reconciliation, and cash flow monitoring.'),
      btnText: t('Explorar operaciones', 'Explore Operations'),
      img: 'https://images.unsplash.com/photo-1551836022-d5d88e9218df?w=600&auto=format&fit=crop&q=80',
    },
    {
      id: 2,
      imageLeft: false,
      title: t('Informes precisos en tiempo real', 'Real-Time Financial Reports'),
      desc: t('Obtén información sobre la salud de tus cobros e historial auditado.', 'Gain real-time insights into your collection metrics and audited logs.'),
      btnText: t('Explorar informes', 'Explore Reports'),
      img: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=600&auto=format&fit=crop&q=80',
    },
    {
      id: 3,
      imageLeft: true,
      title: t('Flujos automatizados con IA', 'AI Automated Workflows'),
      desc: t('Nuestros agentes gestionan cobros por WhatsApp y sincronizan contabilidad.', 'Our financial AI agents manage payment links and sync accounting.'),
      btnText: t('Explorar flujos', 'Explore Workflows'),
      img: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=600&auto=format&fit=crop&q=80',
    },
  ];

  return (
    <section id="about" className="w-full bg-[#FCFCFB] dark:bg-[#080a09] py-[72px] relative z-10 transition-colors duration-300">
      <div className="max-w-[1080px] mx-auto px-4 sm:px-0 flex flex-col gap-12">
        
        {/* Section Header */}
        <SectionHeader
          dotColor="var(--accent-green)"
          tagText={t('Plataforma', 'Platform')}
          title={t('Gestión unificada', 'Unified Management')}
          description={t(
            'Emisión de facturas, cobros y analítica financiera en un solo lugar.',
            'Issue invoices, manage collections, and track cash analytics in one place.'
          )}
        />

        {/* 3 Zig-Zag Alternating Blocks */}
        <div className="flex flex-col gap-12 w-full">
          {blocks.map((b) => (
            <div
              key={b.id}
              className="flex flex-col lg:flex-row items-center gap-12 w-full overflow-hidden"
            >
              {/* Image Element */}
              <motion.div
                initial={{ opacity: 0, x: b.imageLeft ? -100 : 100 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ type: 'spring', stiffness: 240, damping: 80, delay: 0 }}
                className={`w-full lg:w-[508px] h-[360px] rounded-[4px] overflow-hidden shrink-0 bg-[#F2F2F0] dark:bg-[#131517] border border-[#D2D2CE] dark:border-[#303131] ${
                  !b.imageLeft ? 'lg:order-2' : 'lg:order-1'
                }`}
              >
                <img
                  src={b.img}
                  alt={b.title}
                  className="w-full h-full object-cover opacity-85 hover:scale-105 transition-transform duration-500"
                />
              </motion.div>

              {/* Content Element */}
              <motion.div
                initial={{ opacity: 0, x: b.imageLeft ? 100 : -100 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ type: 'spring', stiffness: 240, damping: 80, delay: 0 }}
                className={`w-full lg:w-[508px] flex flex-col items-start gap-5 text-left ${
                  !b.imageLeft ? 'lg:order-1' : 'lg:order-2'
                }`}
              >
                <div className="max-w-[400px] flex flex-col gap-2">
                  <h3 className="text-[28px] font-normal leading-[1.15] tracking-[-0.04em] text-[#0A0C0B] dark:text-white">
                    {b.title}
                  </h3>
                  <p className="text-base font-normal leading-[1.5] tracking-[-0.02em] text-[rgba(10,12,11,0.72)] dark:text-white/80">
                    {b.desc}
                  </p>
                </div>

                <Button variant="primary" href="#features">
                  {b.btnText}
                </Button>
              </motion.div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
