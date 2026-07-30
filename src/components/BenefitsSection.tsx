import { motion } from 'framer-motion';
import { SectionHeader } from './SectionHeader';
import { Sliders, ShieldCheck, Eye, Lock, Server, Key } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';

export const BenefitsSection = () => {
  const { t } = useLanguage();

  const benefits = [
    {
      title: t('Flujos a medida', 'Custom Workflows'),
      desc: t('Adapta la aprobación de facturas y cobros recurrentes a tu estructura.', 'Tailor invoice approvals and recurring payments to your team structure.'),
      icon: Sliders,
      delay: 0,
    },
    {
      title: t('Auditado y certificado', 'Audited & Certified'),
      desc: t('Certificado según las leyes de VeriFactu y la normativa europea.', 'Certified under VeriFactu laws and EU eIDAS regulations.'),
      icon: ShieldCheck,
      delay: 0.1,
    },
    {
      title: t('Visibilidad total', 'Total Visibility'),
      desc: t('Acceso en tiempo real a registros contables e historial inalterable.', 'Real-time access to accounting logs and immutable audit trail.'),
      icon: Eye,
      delay: 0.2,
    },
    {
      title: t('Gobernanza y permisos', 'Governance & Roles'),
      desc: t('Control de acceso granular para contables, admins y asesores.', 'Granular access control for accountants, admins, and advisors.'),
      icon: Lock,
      delay: 0.3,
    },
    {
      title: t('Servidores dedicados', 'Dedicated Infrastructure'),
      desc: t('Infraestructura aislada para equipos corporativos que exigen velocidad.', 'Isolated cloud infrastructure designed for high throughput.'),
      icon: Server,
      delay: 0.4,
    },
    {
      title: t('Cifrado bancario', 'Bank-Level Encryption'),
      desc: t('Protección con cifrado AES-256 en reposo y TLS 1.3 en tránsito.', 'Protected by AES-256 encryption at rest and TLS 1.3 in transit.'),
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
          tagText={t('Empresas', 'Enterprise')}
          title={t('Seguridad y control total', 'Security & Total Control')}
          description={t(
            'Flexibilidad operativa y máxima protección para tu información financiera.',
            'Operational flexibility and enterprise protection for your financial data.'
          )}
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
