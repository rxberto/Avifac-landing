import { motion } from 'framer-motion';
import { SectionHeader } from './SectionHeader';
import { Sliders, ShieldCheck, Eye, Lock, Server, Key } from 'lucide-react';

export const BenefitsSection = () => {
  const benefits = [
    {
      title: 'Flujos a medida',
      desc: 'Adapta la aprobación de facturas y cobros recurrentes a tu estructura.',
      icon: Sliders,
      delay: 0,
    },
    {
      title: 'Auditado y certificado',
      desc: 'Certificado según las leyes de VeriFactu y la normativa europea.',
      icon: ShieldCheck,
      delay: 0.1,
    },
    {
      title: 'Visibilidad total',
      desc: 'Acceso en tiempo real a registros contables e historial inalterable.',
      icon: Eye,
      delay: 0.2,
    },
    {
      title: 'Gobernanza y permisos',
      desc: 'Control de acceso granular para contables, admins y asesores.',
      icon: Lock,
      delay: 0.3,
    },
    {
      title: 'Servidores dedicados',
      desc: 'Infraestructura aislada para equipos corporativos que exigen velocidad.',
      icon: Server,
      delay: 0.4,
    },
    {
      title: 'Cifrado bancario',
      desc: 'Protección con cifrado AES-256 en reposo y TLS 1.3 en tránsito.',
      icon: Key,
      delay: 0.5,
    },
  ];

  return (
    <section className="w-full bg-[#F7F7F5]/60 dark:bg-[#0d0f0e]/60 py-[72px] relative z-10 transition-colors duration-300 overflow-hidden">
      
      {/* Background Dots Texture */}
      <div className="absolute top-0 right-0 w-[920px] h-[780px] bg-dot-texture animate-dot-pulse pointer-events-none opacity-20 z-0" />

      <div className="max-w-[1080px] mx-auto px-4 sm:px-0 flex flex-col gap-12 relative z-10">
        
        {/* Section Header */}
        <SectionHeader
          dotColor="var(--accent-green)"
          tagText="Empresas"
          title="Seguridad y control total"
          description="Flexibilidad operativa y máxima protección para tu información financiera."
        />

        {/* 6 Icon Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-[16px] w-full">
          {benefits.map((item) => {
            const Icon = item.icon;

            return (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, x: -32, y: 32 }}
                whileInView={{ opacity: 1, x: 0, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 1, delay: item.delay, ease: [0.12, 0.23, 0.5, 1] }}
                className="w-full rounded-[4px] bg-[#F2F2F0] dark:bg-[#131517] p-[24px_20px] flex flex-col gap-6 overflow-hidden border border-transparent hover:border-[#D2D2CE] dark:hover:border-[#303131] transition-colors text-left"
              >
                <div className="w-[64px] h-[64px] rounded-full border border-[#D2D2CE] dark:border-[#303131] flex items-center justify-center shrink-0">
                  <Icon className="w-6 h-6 text-[#0A0C0B] dark:text-white opacity-90 stroke-[1.4]" />
                </div>

                <div className="flex flex-col gap-2">
                  <h5 className="text-lg font-medium leading-[1.1] tracking-[-0.04em] text-[#0A0C0B] dark:text-white">
                    {item.title}
                  </h5>
                  <p className="text-base font-normal leading-[1.5] tracking-[-0.02em] text-[rgba(10,12,11,0.72)] dark:text-white/80">
                    {item.desc}
                  </p>
                </div>
              </motion.div>
            );
          })}
        </div>

      </div>
    </section>
  );
};
