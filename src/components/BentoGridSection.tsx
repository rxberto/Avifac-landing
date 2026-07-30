import { useEffect, useRef } from 'react';
import { Bot, Zap, ShieldCheck, PieChart, MessageSquare, ArrowUpRight } from 'lucide-react';
import { SectionHeader } from './SectionHeader';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

export const BentoGridSection = () => {
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (sectionRef.current) {
      const cards = sectionRef.current.querySelectorAll('.bento-card');
      gsap.fromTo(
        cards,
        {
          y: 40,
          opacity: 0,
          scale: 0.95,
        },
        {
          y: 0,
          opacity: 1,
          scale: 1,
          duration: 0.6,
          stagger: 0.12,
          ease: 'power2.out',
          scrollTrigger: {
            trigger: sectionRef.current,
            start: 'top 80%',
            end: 'bottom 20%',
            toggleActions: 'play none none reverse',
          },
        }
      );
    }
  }, []);

  return (
    <section id="bento" className="py-[72px] bg-[#FCFCFB] dark:bg-[#080a09] relative z-10 border-b border-[#D2D2CE] dark:border-[#303131] transition-colors duration-300">
      <div className="max-w-[1080px] mx-auto px-4 sm:px-0 flex flex-col gap-16">
        
        {/* Section Header */}
        <SectionHeader
          dotColor="var(--accent-green)"
          tagText="Financial Intelligence"
          title="A financial platform that drives investing forward"
          description="Centralise all invoicing, recurring payments, and cash flow intelligence into a single infrastructure built for scale."
        />

        {/* Bento Grid Layout */}
        <div ref={sectionRef} className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-6">
          
          {/* Card 1: Large Featured Card (2 cols, 2 rows) */}
          <div className="bento-card lg:col-span-2 lg:row-span-2 rounded-[4px] bg-[#F2F2F0] dark:bg-[#131517] border border-[#D2D2CE] dark:border-[#303131] p-8 flex flex-col justify-between relative overflow-hidden group hover:border-[#0A0C0B]/30 dark:hover:border-white/30 transition-all shadow-sm">
            <div>
              <div className="flex items-center justify-between mb-6">
                <div className="p-3 rounded-2xl bg-[#E6E6E3] dark:bg-[#232326] text-[#0A0C0B] dark:text-white">
                  <Bot className="w-6 h-6" />
                </div>
                <span className="text-[10px] font-bold text-white bg-[#0A0C0B] dark:bg-white dark:text-black px-2.5 py-1 rounded-full uppercase tracking-wider">
                  VeriFactu AI Engine
                </span>
              </div>

              <h3 className="text-2xl sm:text-3xl font-medium tracking-[-0.04em] text-[#0A0C0B] dark:text-white mb-3 leading-tight text-left">
                Emisión de Facturas Electrónicas con Hash Inmutable
              </h3>

              <p className="text-[rgba(10,12,11,0.72)] dark:text-white/80 text-sm leading-relaxed tracking-[-0.02em] mb-6 text-left">
                Cumplimiento garantizado de la Ley Crea y Crece en España. Avialo genera el registro estructurado FacturaE con código QR oficial y envío automático a la Agencia Tributaria.
              </p>

              {/* Product Interface Dark Mockup */}
              <div className="bg-[#131517] border border-[#303131] rounded-[4px] p-4 font-mono text-xs space-y-2 text-white">
                <div className="flex justify-between items-center text-neutral-400">
                  <span>Factura ID: #INV-2026-889</span>
                  <span className="text-emerald-400 font-bold">FIRMADA DIGITALMENTE</span>
                </div>
                <div className="flex justify-between items-center text-white pt-2 border-t border-[#303131]">
                  <span>Cliente: Studio Design S.L.</span>
                  <span className="text-[rgb(158,250,255)] font-bold">€4,840.00 (IVA 21% Incl.)</span>
                </div>
              </div>
            </div>

            <div className="pt-6 mt-6 border-t border-[#D2D2CE] dark:border-[#303131] flex items-center justify-between text-xs text-[rgba(10,12,11,0.72)] dark:text-white/80">
              <span className="flex items-center gap-1.5 text-[rgb(52,138,46)] dark:text-[rgb(104,204,88)] font-semibold">
                <ShieldCheck className="w-4 h-4" /> Certificado eIDAS Activo
              </span>
              <span className="text-[#0A0C0B] dark:text-white font-bold flex items-center gap-1">
                Ver Detalles <ArrowUpRight className="w-3.5 h-3.5" />
              </span>
            </div>
          </div>

          {/* Card 2: Automatic WhatsApp Reminders */}
          <div className="bento-card lg:col-span-1 lg:row-span-2 rounded-[4px] bg-[#F2F2F0] dark:bg-[#131517] border border-[#D2D2CE] dark:border-[#303131] p-6 flex flex-col justify-between relative overflow-hidden group hover:border-[#0A0C0B]/30 dark:hover:border-white/30 transition-all text-left">
            <div>
              <div className="p-3 rounded-2xl bg-[rgb(52,138,46)]/10 text-[rgb(52,138,46)] dark:text-[rgb(104,204,88)] w-fit mb-6 border border-[rgb(52,138,46)]/20">
                <MessageSquare className="w-6 h-6" />
              </div>

              <h3 className="text-xl font-medium tracking-[-0.04em] text-[#0A0C0B] dark:text-white mb-2">
                Recordatorios por WhatsApp
              </h3>

              <p className="text-xs text-[rgba(10,12,11,0.72)] dark:text-white/80 leading-relaxed tracking-[-0.02em] mb-6">
                Reduce la morosidad un 65% enviando notificaciones automáticas antes del vencimiento.
              </p>

              <div className="bg-[#FCFCFB] dark:bg-[#080a09] border border-[#D2D2CE] dark:border-[#303131] rounded-2xl p-3.5 space-y-2 text-[11px]">
                <div className="bg-[rgb(52,138,46)]/10 border border-[rgb(52,138,46)]/30 p-2.5 rounded-xl text-[rgb(52,138,46)] dark:text-[rgb(104,204,88)] leading-tight font-medium">
                  💬 "Hola Marc, tu factura INV-2026-042 por €1,200 vence en 3 días. Puedes pagar con 1 clic aquí: link.avialo.es/pay"
                </div>
                <div className="text-right text-[9px] text-[rgba(10,12,11,0.6)] dark:text-white/60 font-mono">Enviado por Avialo Bot</div>
              </div>
            </div>

            <div className="pt-4 border-t border-[#D2D2CE] dark:border-[#303131] text-[11px] text-[rgba(10,12,11,0.72)] dark:text-white/80 font-mono flex items-center justify-between">
              <span>Tasa de Cobro: 99.4%</span>
              <span className="text-[rgb(52,138,46)] dark:text-[rgb(104,204,88)]">WhatsApp API</span>
            </div>
          </div>

          {/* Card 3: Multi-Currency */}
          <div className="bento-card lg:col-span-1 rounded-[4px] bg-[#F2F2F0] dark:bg-[#131517] border border-[#D2D2CE] dark:border-[#303131] p-6 flex flex-col justify-between hover:border-[#0A0C0B]/30 dark:hover:border-white/30 transition-all text-left">
            <div>
              <div className="p-2.5 rounded-xl bg-[rgb(154,112,12)]/10 text-[rgb(154,112,12)] dark:text-[rgb(212,177,68)] w-fit mb-4 border border-[rgb(154,112,12)]/20">
                <Zap className="w-5 h-5" />
              </div>

              <h4 className="text-lg font-medium tracking-[-0.04em] text-[#0A0C0B] dark:text-white mb-1">Cobros Multimoneda</h4>
              <p className="text-xs text-[rgba(10,12,11,0.72)] dark:text-white/80 leading-relaxed tracking-[-0.02em]">
                Factura en EUR, USD o GBP con conversión automática del tipo de cambio oficial BCE.
              </p>
            </div>

            <div className="pt-3 mt-4 border-t border-[#D2D2CE] dark:border-[#303131] flex items-center justify-between text-[11px] font-mono text-[rgba(10,12,11,0.72)] dark:text-white/80">
              <span>EUR • USD • GBP</span>
              <span className="text-[rgb(20,122,132)] dark:text-[rgb(158,250,255)]">Auto-Exchange</span>
            </div>
          </div>

          {/* Card 4: OCR Expense Scanner */}
          <div className="bento-card lg:col-span-1 rounded-[4px] bg-[#F2F2F0] dark:bg-[#131517] border border-[#D2D2CE] dark:border-[#303131] p-6 flex flex-col justify-between hover:border-[#0A0C0B]/30 dark:hover:border-white/30 transition-all text-left">
            <div>
              <div className="p-2.5 rounded-xl bg-[rgb(104,72,200)]/10 text-[rgb(104,72,200)] dark:text-[rgb(170,130,255)] w-fit mb-4 border border-[rgb(104,72,200)]/20">
                <PieChart className="w-5 h-5" />
              </div>

              <h4 className="text-lg font-medium tracking-[-0.04em] text-[#0A0C0B] dark:text-white mb-1">Escáner OCR de Gastos</h4>
              <p className="text-xs text-[rgba(10,12,11,0.72)] dark:text-white/80 leading-relaxed tracking-[-0.02em]">
                Sube fotos de tickets o facturas recibidas y la IA extraerá el CIF e IVA soportado.
              </p>
            </div>

            <div className="pt-3 mt-4 border-t border-[#D2D2CE] dark:border-[#303131] flex items-center justify-between text-[11px] font-mono text-[rgba(10,12,11,0.72)] dark:text-white/80">
              <span>Smart OCR Engine</span>
              <span className="text-[rgb(104,72,200)] dark:text-[rgb(170,130,255)]">100% Precisión</span>
            </div>
          </div>

          {/* Card 5: Open Banking PSD2 */}
          <div className="bento-card lg:col-span-2 rounded-[4px] bg-[#F2F2F0] dark:bg-[#131517] border border-[#D2D2CE] dark:border-[#303131] p-6 flex flex-col justify-between hover:border-[#0A0C0B]/30 dark:hover:border-white/30 transition-all text-left">
            <div className="flex items-start justify-between">
              <div>
                <div className="p-2.5 rounded-xl bg-[rgb(20,122,132)]/10 text-[rgb(20,122,132)] dark:text-[rgb(158,250,255)] w-fit mb-3 border border-[rgb(20,122,132)]/20">
                  <ShieldCheck className="w-5 h-5" />
                </div>
                <h4 className="text-xl font-medium tracking-[-0.04em] text-[#0A0C0B] dark:text-white mb-1">Conciliación Bancaria Automática PSD2</h4>
                <p className="text-xs text-[rgba(10,12,11,0.72)] dark:text-white/80 leading-relaxed tracking-[-0.02em] max-w-md">
                  Conexión directa con cuentas de BBVA, Santander, CaixaBank, Revolut y Wise. Las facturas se concilian automáticamente al detectar la entrada del dinero.
                </p>
              </div>

              <div className="hidden sm:block text-right font-mono text-xs text-[rgba(10,12,11,0.72)] dark:text-white/80">
                <span className="block text-[rgb(52,138,46)] dark:text-[rgb(104,204,88)] font-bold text-sm">Open Banking</span>
                <span>Auto-Matching 100%</span>
              </div>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
};
