import { motion } from 'framer-motion';
import { Layers, Bot, ShieldCheck, Award } from 'lucide-react';

interface ActionCardProps {
  icon: any;
  title: string;
  description: string;
  delay: number;
}

const ActionCard = ({ icon: Icon, title, description, delay }: ActionCardProps) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{
        duration: 1.4,
        ease: [0.25, 0.1, 0.25, 1],
        delay: delay,
      }}
      className="flex flex-col gap-2 w-full sm:w-[195px] flex-1 bg-transparent p-0 border-none rounded-none text-center sm:text-left select-none items-center sm:items-start"
    >
      {/* Fila superior — horizontal, centrada verticalmente */}
      <div className="flex items-center justify-center sm:justify-start gap-2 w-full">
        <Icon className="w-4 h-4 shrink-0 text-[#0A0C0B] dark:text-white stroke-[1.8]" />
        <h6 className="text-base font-medium text-[#0A0C0B] dark:text-white leading-[1.1] tracking-[-0.04em] truncate">
          {title}
        </h6>
      </div>

      {/* Descripción debajo */}
      <p className="text-sm font-normal text-[rgba(10,12,11,0.72)] dark:text-white/80 leading-[1.5] tracking-[-0.02em]">
        {description}
      </p>
    </motion.div>
  );
};

export const HeroActionRow = () => {
  const cards = [
    {
      icon: Layers,
      title: 'Espacio Inteligente',
      description: 'Inteligencia centralizada para operaciones financieras',
      delay: 0,
    },
    {
      icon: Bot,
      title: 'Agentes Financieros',
      description: 'Flujos autónomos y automatización de facturas',
      delay: 0.1,
    },
    {
      icon: ShieldCheck,
      title: 'Ecosistema Seguro',
      description: 'Seguridad bancaria y cumplimiento VeriFactu',
      delay: 0.2,
    },
    {
      icon: Award,
      title: 'Líder en Industria',
      description: 'Diseñado para SaaS y equipos financieros modernos',
      delay: 0.3,
    },
  ];

  return (
    <div className="w-full bg-transparent py-8 relative z-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-[900px] mx-auto flex flex-col sm:flex-row items-center justify-center gap-8 sm:gap-10 h-auto sm:h-[68px]">
          {cards.map((card) => (
            <ActionCard
              key={card.title}
              icon={card.icon}
              title={card.title}
              description={card.description}
              delay={card.delay}
            />
          ))}
        </div>
      </div>
    </div>
  );
};
