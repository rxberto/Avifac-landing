import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ArrowUpRight, Plus, Minus } from 'lucide-react';
import { Button } from './Button';
import { useLanguage } from '../context/LanguageContext';

interface FAQItem {
  id: number;
  q: string;
  a: string;
}

export const FAQSection = () => {
  const { t } = useLanguage();
  const [openId, setOpenId] = useState<number | null>(1);

  const faqs: FAQItem[] = [
    {
      id: 1,
      q: t('¿Cumple Avialo con la normativa VeriFactu y FACe / FacturaE?', 'Is Avialo fully compliant with Spanish VeriFactu & FACe regulations?'),
      a: t(
        'Sí, 100%. Avialo está diseñado desde la primera línea de código para cumplir el RD 1007/2023 (VeriFactu), la integración con FACe (Administración Pública) y la Ley Crea y Crece B2B. Registra alta y anulación con hash encadenado SHA-256 y código QR oficial.',
        'Yes, 100%. Avialo is engineered to comply with Spanish RD 1007/2023 (VeriFactu), FACe public invoicing, and B2B mandatory e-invoicing. Every invoice generates secure SHA-256 chained hashes and official QR codes.'
      ),
    },
    {
      id: 2,
      q: t('¿En qué se diferencia Avialo de un ERP complejo tradicional?', 'How does Avialo differ from complex legacy ERPs?'),
      a: t(
        'Ganamos por enfoque y velocidad. No somos un ERP pesado con menús que jamás usas. Avialo ofrece el ciclo completo (presupuestos, albaranes, facturas y gastos OCR) en un entorno tipo workspace ágil, estable y limpio.',
        'We win on speed and clarity. No bloated menus or steep learning curves. Avialo delivers the complete billing workflow (quotes, delivery notes, invoices & OCR expense scanning) in a fast, modern workspace.'
      ),
    },
    {
      id: 3,
      q: t('¿Cómo funciona el acceso para mi gestoría o asesor?', 'How does accountant / agency access work?'),
      a: t(
        'Todos los planes incluyen acceso para tu gestor en modo solo lectura de forma 100% gratuita. Además, si eres una gestoría, dispones de un panel multi-empresa consolidado con tu propio logo.',
        'All plans include free read-only access for your external accountant. If you are an accounting agency, our Multi-Company plan provides a branded multi-tenant portal.'
      ),
    },
    {
      id: 4,
      q: t('¿Existen límites en la cantidad de facturas que puedo emitir?', 'Are there limits on invoice volume?'),
      a: t(
        'Ninguno. Mantenemos una política de precio plano y honesto: todos nuestros planes incluyen facturación e ingresos ilimitados con VeriFactu, sin sorpresas ni costes ocultos por volumen.',
        'Zero. We enforce a transparent flat-rate model: all plans include unlimited invoices with full VeriFactu certification and zero volume penalties.'
      ),
    },
    {
      id: 5,
      q: t('¿Qué tipo de soporte recibo ante cualquier duda?', 'What support options are included?'),
      a: t(
        'Soporte humano real por expertos de nuestro equipo en menos de 24-48 h laborables (o menos de 8 h / 4 h según el plan). Sin bots que te hagan perder el tiempo.',
        'Real human support from tax software specialists within 24-48 business hours (or under 4h on priority plans). No time-wasting chatbots.'
      ),
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
                {t('Preguntas', 'Questions')}
              </span>
            </div>

            <h2 className="text-[32px] sm:text-[36px] font-normal leading-[1.1] tracking-[-0.04em] text-[#0A0C0B] dark:text-white">
              {t('Respuestas rápidas', 'Quick answers')}
            </h2>

            <p className="text-base font-normal leading-[1.5] tracking-[-0.02em] text-[rgba(10,12,11,0.72)] dark:text-white/80">
              {t(
                'Encuentra detalles sobre la plataforma, seguridad y planes.',
                'Find key details about the platform, security, and plans.'
              )}
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
                  {t('¿Aún tienes dudas?', 'Still have questions?')}
                </h6>
                <p className="text-sm font-normal leading-[1.45] tracking-[-0.02em] text-[rgba(10,12,11,0.72)] dark:text-white/80">
                  {t('Nuestro equipo está disponible para ayudarte.', 'Our support specialists are here to help.')}
                </p>
              </div>

              <Button variant="primary" href="#cta" className="w-full justify-between mt-1">
                <span>{t('Contactar al equipo', 'Contact Support')}</span>
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
