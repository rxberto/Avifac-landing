import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ArrowUpRight, Plus, Minus } from 'lucide-react';
import { Button } from './Button';

interface FAQItem {
  id: number;
  q: string;
  a: string;
}

export const FAQSection = () => {
  const [openId, setOpenId] = useState<number | null>(1);

  const faqs: FAQItem[] = [
    {
      id: 1,
      q: '¿Cómo protege la plataforma mis datos?',
      a: 'Aplicamos cifrado de extremo a extremo, controles de acceso y una infraestructura segura para proteger tu información.',
    },
    {
      id: 2,
      q: '¿Puedo conectar varias cuentas o bancos?',
      a: 'Sí. Puedes centralizar varias cuentas y bancos para consultar tu información desde un único lugar.',
    },
    {
      id: 3,
      q: '¿Cómo funcionan las alertas con IA?',
      a: 'Analiza patrones, tendencias y facturación pendiente para avisarte de cobros importantes.',
    },
    {
      id: 4,
      q: '¿Puedo probar la plataforma gratis?',
      a: 'Sí. Dispones de 14 días de prueba sin necesidad de tarjeta de crédito.',
    },
    {
      id: 5,
      q: '¿Qué plan debería elegir?',
      a: 'Elige según el volumen de facturación y miembros de tu equipo. Puedes cambiar en cualquier momento.',
    },
  ];

  const avatars = [
    'https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=100&auto=format&fit=crop&q=80',
    'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&auto=format&fit=crop&q=80',
    'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=100&auto=format&fit=crop&q=80',
  ];

  return (
    <section
      id="faq"
      className="w-full bg-[#FCFCFB] dark:bg-[#080a09] py-[72px] relative z-10 transition-colors duration-300"
    >
      <div className="max-w-[1080px] mx-auto px-4 sm:px-0 flex flex-col gap-10">
        
        {/* Composición a Dos Columnas */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, ease: [0.12, 0.23, 0.5, 1] }}
          className="flex flex-col lg:flex-row items-start justify-between gap-10 lg:gap-14 w-full"
        >
          {/* Columna Izquierda */}
          <div className="w-full lg:w-[380px] flex flex-col gap-5 shrink-0 text-left">
            
            <div className="flex items-center gap-2">
              <span className="w-[14px] h-[8px] rounded-full bg-[rgb(52,138,46)] dark:bg-[rgb(104,204,88)] shrink-0" />
              <span className="text-sm font-normal leading-[1.5] tracking-[-0.02em] text-[rgba(10,12,11,0.72)] dark:text-white/80">
                Preguntas
              </span>
            </div>

            <h2 className="text-[32px] sm:text-[36px] font-normal leading-[1.1] tracking-[-0.04em] text-[#0A0C0B] dark:text-white">
              Respuestas rápidas
            </h2>

            <p className="text-base font-normal leading-[1.5] tracking-[-0.02em] text-[rgba(10,12,11,0.72)] dark:text-white/80">
              Encuentra detalles sobre la plataforma, seguridad y planes.
            </p>

            {/* Tarjeta de Contacto */}
            <div className="w-full rounded-[4px] bg-[#F2F2F0] dark:bg-[#131517] border border-[#D2D2CE] dark:border-[#303131] p-5 flex flex-col gap-4 mt-2 shadow-sm">
              <div className="flex items-center -space-x-2">
                {avatars.map((imgUrl, i) => (
                  <img
                    key={i}
                    src={imgUrl}
                    alt="Soporte Avialo"
                    className="w-8 h-8 rounded-full object-cover border-2 border-[#F2F2F0] dark:border-[#131517]"
                  />
                ))}
              </div>

              <div className="flex flex-col gap-1">
                <h6 className="text-base font-medium leading-[1.2] tracking-[-0.04em] text-[#0A0C0B] dark:text-white">
                  ¿Aún tienes dudas?
                </h6>
                <p className="text-sm font-normal leading-[1.45] tracking-[-0.02em] text-[rgba(10,12,11,0.72)] dark:text-white/80">
                  Nuestro equipo está disponible para ayudarte.
                </p>
              </div>

              <Button variant="primary" href="#cta" className="w-full justify-between mt-1">
                <span>Contactar al equipo</span>
                <div className="w-6 h-6 rounded-full bg-white/20 dark:bg-black/20 flex items-center justify-center shrink-0">
                  <ArrowUpRight className="w-3.5 h-3.5" />
                </div>
              </Button>
            </div>

          </div>

          {/* Columna Derecha */}
          <div className="w-full flex-1 flex flex-col gap-3.5">
            {faqs.map((item) => {
              const isOpen = openId === item.id;

              return (
                <div
                  key={item.id}
                  onClick={() => setOpenId(isOpen ? null : item.id)}
                  className={`w-full rounded-[4px] p-5 flex flex-col gap-3 cursor-pointer select-none transition-all duration-300 border ${
                    isOpen
                      ? 'bg-[#FCFCFB] dark:bg-[#131517] border-[#0A0C0B]/40 dark:border-white/40 shadow-sm'
                      : 'bg-[#F2F2F0] dark:bg-[#131517]/80 border-[#D2D2CE] dark:border-[#303131] hover:border-[#0A0C0B]/30 dark:hover:border-white/30'
                  }`}
                >
                  <div className="flex items-center justify-between gap-4 w-full">
                    <h6 className="text-base sm:text-lg font-medium leading-[1.2] tracking-[-0.04em] text-[#0A0C0B] dark:text-white text-left">
                      {item.q}
                    </h6>
                    <div className="w-7 h-7 rounded-full bg-[#E6E6E3] dark:bg-[#232326] text-[#0A0C0B] dark:text-white flex items-center justify-center shrink-0 transition-transform duration-200">
                      {isOpen ? <Minus className="w-3.5 h-3.5" /> : <Plus className="w-3.5 h-3.5" />}
                    </div>
                  </div>

                  <AnimatePresence>
                    {isOpen && (
                      <motion.div
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: 'auto' }}
                        exit={{ opacity: 0, height: 0 }}
                        transition={{ duration: 0.25, ease: 'easeOut' }}
                        className="overflow-hidden"
                      >
                        <p className="text-sm sm:text-base font-normal leading-[1.5] tracking-[-0.02em] text-[rgba(10,12,11,0.72)] dark:text-white/80 text-left pt-2 border-t border-[#E6E6E3] dark:border-[#232326] max-w-xl">
                          {item.a}
                        </p>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              );
            })}
          </div>

        </motion.div>

      </div>
    </section>
  );
};
