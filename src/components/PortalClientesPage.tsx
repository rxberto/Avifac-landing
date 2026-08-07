import React, { useState, useEffect, useLayoutEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import {
  Check,
  ArrowRight,
  FileText,
  CreditCard,
  MessageSquare,
  ShieldCheck,
  Lock,
  Mail,
  User,
  Zap,
  Scale
} from 'lucide-react';
import { Navbar } from './Navbar';
import { Footer } from './Footer';
import { ShinyText } from './ShinyText';
import { PortalAppMockup } from './PortalAppMockup';
import { APP_URLS } from '../config/urls';

gsap.registerPlugin(ScrollTrigger);

interface ScrollStep {
  id: number;
  stepNum: string;
  titleEs: string;
  titleEn: string;
  descEs: string;
  descEn: string;
  badgeEs: string;
  badgeEn: string;
  icon: React.FC<{ className?: string }>;
}

export const PortalClientesPage: React.FC = () => {
  const [activeStep, setActiveStep] = useState<number>(0);
  const [lang, setLang] = useState<'es' | 'en'>('es');

  // Referencias para la animación GSAP y ScrollTrigger
  const containerRef = useRef<HTMLDivElement>(null);
  const sectionRefs = useRef<(HTMLDivElement | null)[]>([]);

  // Detect language translation helper
  useEffect(() => {
    const checkLang = () => {
      if (window.location.pathname.startsWith('/en')) {
        setLang('en');
      } else {
        setLang('es');
      }
    };
    checkLang();
    window.addEventListener('popstate', checkLang);
    return () => window.removeEventListener('popstate', checkLang);
  }, []);

  const t = (es: string, en: string) => (lang === 'en' ? en : es);

  // Configuración de GSAP ScrollTrigger para seguimiento del scroll y activación del panel
  useEffect(() => {
    const ctx = gsap.context(() => {
      sectionRefs.current.forEach((el, index) => {
        if (!el) return;
        ScrollTrigger.create({
          trigger: el,
          start: 'top 55%',
          end: 'bottom 45%',
          onEnter: () => setActiveStep(index),
          onEnterBack: () => setActiveStep(index),
        });
      });
    }, containerRef);

    return () => ctx.revert();
  }, []);

  // Revelado escalonado con GSAP de las tarjetas narrativas al entrar en viewport
  useLayoutEffect(() => {
    const ctx = gsap.context(() => {
      sectionRefs.current.forEach((el) => {
        if (!el) return;
        gsap.from(el, {
          opacity: 0,
          y: 36,
          duration: 0.8,
          ease: 'power3.out',
          scrollTrigger: { trigger: el, start: 'top 90%', once: true }
        });
      });
    }, containerRef);

    return () => ctx.revert();
  }, []);

  const steps: ScrollStep[] = [
    {
      id: 0,
      stepNum: '01',
      titleEs: 'Acceso seguro por enlace al correo: cero contraseñas y cero fricción',
      titleEn: 'Secure email magic link access: zero passwords & zero friction',
      descEs: 'Tus clientes no tienen que registrarse en terceras páginas ni recordar tediosas contraseñas. Cada vez que emites una factura o reclamo, les enviamos un enlace único, cifrado y seguro que les da acceso directo y autenticado a su portal en tu empresa.',
      descEn: 'Your clients never have to register on external portals or memorize tricky passwords. Whenever you issue an invoice or billing note, they receive an encrypted magic link providing immediate, authenticated access to their business space.',
      badgeEs: 'AUTENTICACIÓN POR TOKEN CIFRADO',
      badgeEn: 'ENCRYPTED TOKEN AUTHENTICATION',
      icon: Lock
    },
    {
      id: 1,
      stepNum: '02',
      titleEs: 'Visibilidad de todas las facturas y descarga en formato legal VeriFactu 2027',
      titleEn: 'Full invoice visibility & 2027 legal VeriFactu document download',
      descEs: 'Se acabó que tus clientes te llamen pidiendo copia de la factura de hace seis meses para presentar sus impuestos. Desde su portal revisan en tiempo real todas sus facturas pagadas y pendientes, sus fechas de vencimiento y descargan el PDF oficial con código QR y huella SHA-256.',
      descEn: 'No more receiving urgent emails asking for copies of invoices from six months ago for tax returns. Inside their portal, clients inspect real-time logs of paid and pending bills and instantly download official PDFs stamped with 2027 VeriFactu QR codes and SHA-256 hashes.',
      badgeEs: 'HISTORIAL Y DESCARGAS EN 1 CLIC',
      badgeEn: 'INSTANT LEDGER & 1-CLICK DOWNLOADS',
      icon: FileText
    },
    {
      id: 2,
      stepNum: '03',
      titleEs: 'Pago online directo al emisor en 1 clic y sin comisiones intermedias',
      titleEn: 'Direct online payment to issuer with 1 click and zero added commission fees',
      descEs: 'Junto a cada factura pendiente de cobro, tu cliente encontrará un botón de pago inmediato. Puede liquidar la deuda utilizando Tarjeta (Stripe/Redsys), Bizum o transferencia SEPA instantánea. El dinero va directo a tu cuenta bancaria sin que Avialo retenga comisiones por transacción.',
      descEn: 'Next to every pending invoice, your customer encounters a seamless pay button. They settle balances utilizing credit card gateways (Stripe/Redsys) or SEPA instant banking. Money hits your account directly without Avialo deducting any markup commissions.',
      badgeEs: 'PAGO MULTICANAL VÍA TARJETA O SEPA',
      badgeEn: 'MULTI-CHANNEL CARD OR SEPA BILLING',
      icon: CreditCard
    },
    {
      id: 3,
      stepNum: '04',
      titleEs: 'Canal de comunicación integrado en la propia factura: adiós correos caóticos',
      titleEn: 'In-context invoice chat channel: say goodbye to chaotic email threads',
      descEs: '¿Alguna duda con un concepto, un presupuesto o una retención? En lugar de cruzar cadenas eternas de correo con capturas de pantalla, tu cliente puede abrir el chat interno integrado en la factura específica y dialogar directamente con tu departamento administrativo o tu gestoría.',
      descEn: 'Questions regarding a line item, VAT withholding, or invoice reference? Instead of exchanging chaotic email threads, your client launches an integrated context-aware chat directly on the specific invoice to confer with your administrative or accounting team.',
      badgeEs: 'CHAT INTERACTIVO CON EL EMISOR',
      badgeEn: 'IN-CONTEXT INVOICE MESSENGER',
      icon: MessageSquare
    }
  ];

  return (
    <div className="min-h-screen bg-[#FCFCFB] dark:bg-[#080a09] text-[#0A0C0B] dark:text-white w-full overflow-x-hidden antialiased transition-colors duration-300 flex flex-col" ref={containerRef}>
      <Navbar />

      <main className="flex-1 w-full max-w-[1240px] mx-auto px-4 sm:px-6 md:px-8 pt-12 sm:pt-16 md:pt-20 pb-20 sm:pb-28 space-y-20 sm:space-y-28">
        
        {/* HERO SIMPLIFICADO Y ELEGANTE (SIN TAGS, DIRECTO AL SCROLL) */}
        <section className="text-center max-w-4xl mx-auto space-y-6 pt-4">
          <h1 className="text-3xl sm:text-5xl lg:text-6xl font-extrabold tracking-[-0.04em] text-[#0A0C0B] dark:text-white leading-[1.08]">
            <span className="block">{t('Portal del Cliente:', 'Client Portal:')}</span>
            <ShinyText text={t('tus facturas, pagos y soporte en un solo lugar.', 'invoices, payments & team chat in one dedicated hub.')} speed={2.5} className="font-extrabold block mt-1" />
          </h1>

          <p className="text-base sm:text-xl text-[rgba(10,12,11,0.75)] dark:text-white/80 leading-relaxed font-normal max-w-3xl mx-auto">
            {t(
              'Una interfaz interactiva donde tus clientes acceden con un enlace seguro por correo sin contraseñas, consultan su historial de facturación bajo normativa VeriFactu 2027, liquidan recibos pendientes en 1 clic y resuelven dudas en directo con tu equipo.',
              'A zero-password interactive portal where your clients login via secure email links, review their 2027 VeriFactu compliant billing history, settle pending balances in one click, and interact directly with your billing staff.'
            )}
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-2">
            <a
              href={APP_URLS.register}
              className="w-full sm:w-auto text-center px-8 py-4 rounded-[6px] bg-[#0A0C0B] dark:bg-white text-white dark:text-[#0A0C0B] font-bold text-base shadow-lg hover:opacity-90 active:scale-[0.99] transition-all duration-200"
            >
              {t('Probar Portal de Clientes — Gratis 30 días', 'Try Client Portal — 30 Days Free')}
            </a>
            <a
              href="#portal-scroll-experience"
              className="w-full sm:w-auto text-center inline-flex items-center justify-center gap-2 px-6 py-4 rounded-[6px] border border-[#D2D2CE] dark:border-[#303131] bg-[#F2F2F0] dark:bg-[#131517] text-[#0A0C0B] dark:text-white font-semibold text-sm hover:border-[#0A0C0B]/40 dark:hover:border-white/40 transition-all duration-200"
            >
              <span>{t('Explorar experiencia interactiva', 'Explore interactive workspace')}</span>
              <ArrowRight className="w-4 h-4" />
            </a>
          </div>

          <div className="pt-4 flex flex-wrap items-center justify-center gap-x-8 gap-y-2 text-xs font-mono font-semibold text-[rgba(10,12,11,0.7)] dark:text-white/70">
            <span className="inline-flex items-center gap-1.5">
              <Check className="w-4 h-4 text-[rgb(52,138,46)] dark:text-[rgb(124,224,108)]" />
              {t('Sin registro para el cliente final', 'No registration required for clients')}
            </span>
            <span className="inline-flex items-center gap-1.5">
              <Check className="w-4 h-4 text-[rgb(52,138,46)] dark:text-[rgb(124,224,108)]" />
              {t('Cobro en 1 clic con 0% comisiones', '1-click billing with 0% software fees')}
            </span>
            <span className="inline-flex items-center gap-1.5 text-[rgb(43,115,38)] dark:text-[rgb(124,224,108)] font-bold">
              <ShieldCheck className="w-4 h-4" />
              {t('Descarga certificada VeriFactu 2027', 'Certified VeriFactu 2027 vault')}
            </span>
          </div>
        </section>

        {/* EXPERIENCIA PRINCIPAL DE SCROLL INTERACTIVA PORTAL CLIENTES (GSAP & STICKY PANEL) */}
        {/* Nota de Arquitectura para el usuario: Estas estructuras modulares son representaciones fieles en vivo del panel, optimizadas en HTML/CSS arquitectónico y dispuestas de forma limpia para ser sustituidas o acompañadas de capturas reales de la interfaz de usuario en el futuro cuando estén listas */}
        <section id="portal-scroll-experience" className="pt-8 border-t border-[#D2D2CE] dark:border-[#303131]">
          
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start relative">
            
            {/* COLUMNA IZQUIERDA: BLOQUES DE SCROLL NARRATIVO QUE ACTIVAN LOS ESTADOS DEL PANEL CON GSAP */}
            <div className="lg:col-span-5 space-y-24 sm:space-y-36 pb-16 lg:pb-32">
              {steps.map((step, index) => {
                const isSelected = activeStep === index;
                const IconComp = step.icon;
                return (
                  <div
                    key={step.id}
                    ref={(el) => { sectionRefs.current[index] = el; }}
                    onClick={() => setActiveStep(index)}
                    className={`p-6 sm:p-8 rounded-[8px] border transition-all duration-300 cursor-pointer space-y-5 ${
                      isSelected
                        ? 'bg-[#F2F2F0] dark:bg-[#131517] border-[#0A0C0B] dark:border-white shadow-lg lg:scale-[1.02]'
                        : 'bg-[#FCFCFB] dark:bg-[#080a09] border-[#D2D2CE] dark:border-[#303131] opacity-70 hover:opacity-100'
                    }`}
                  >
                    <div className="flex items-center justify-between">
                      <div className="inline-flex items-center gap-2 font-mono font-bold text-xs text-[rgb(20,122,132)] dark:text-[rgb(158,250,255)] uppercase tracking-wide">
                        <span>// PASO {step.stepNum}</span>
                      </div>
                      <div className={`p-2 rounded-[4px] ${isSelected ? 'bg-[#0A0C0B] text-white dark:bg-white dark:text-[#0A0C0B]' : 'bg-[#E5E5E2] dark:bg-[#202224] text-[#0A0C0B] dark:text-white'}`}>
                        <IconComp className="w-4 h-4" />
                      </div>
                    </div>

                    <h3 className="text-xl sm:text-2xl font-extrabold text-[#0A0C0B] dark:text-white leading-snug">
                      {t(step.titleEs, step.titleEn)}
                    </h3>

                    <p className="text-sm sm:text-base text-[rgba(10,12,11,0.75)] dark:text-white/80 leading-relaxed font-normal">
                      {t(step.descEs, step.descEn)}
                    </p>

                    <div className="pt-4 border-t border-[#D2D2CE]/50 dark:border-[#303131]/50 flex items-center justify-between text-xs font-mono font-bold text-[rgb(43,115,38)] dark:text-[rgb(124,224,108)]">
                      <span>✓ {t(step.badgeEs, step.badgeEn)}</span>
                      <span className={`text-[10px] uppercase font-mono ${isSelected ? 'opacity-100' : 'opacity-40'}`}>
                        {isSelected ? t('▶ VISTA EN PANEL', '▶ LIVE IN PANEL') : t('HAZ CLIC O SCROLL', 'CLICK TO VIEW')}
                      </span>
                    </div>
                  </div>
                );
              })}
            </div>

            {/* COLUMNA DERECHA: RÉPLICA REAL DEL PORTAL DEL CLIENTE (STICKY + ANIMACIONES GSAP) */}
            <div className="lg:col-span-7 lg:sticky lg:top-24 w-full pt-4 lg:pt-0 space-y-3">

              {/* Selector rápido de vistas del panel (navegación manual y móvil) */}
              <div className="flex overflow-x-auto gap-2 text-xs font-mono [scrollbar-width:none]">
                {[
                  { icon: Mail, es: 'Acceso', en: 'Login' },
                  { icon: FileText, es: 'Facturas', en: 'Invoices' },
                  { icon: CreditCard, es: 'Pago 1-clic', en: 'Instant pay' },
                  { icon: MessageSquare, es: 'Dudas', en: 'Chat' }
                ].map((tab, i) => {
                  const TabIcon = tab.icon;
                  return (
                    <button
                      key={tab.es}
                      onClick={() => setActiveStep(i)}
                      className={`px-3 py-1.5 rounded-[4px] font-bold whitespace-nowrap flex items-center gap-1.5 border transition-all ${
                        activeStep === i
                          ? 'bg-[#0A0C0B] text-white dark:bg-white dark:text-[#0A0C0B] border-transparent'
                          : 'border-[#D2D2CE] dark:border-[#303131] text-[rgba(10,12,11,0.6)] dark:text-white/60 hover:text-[#0A0C0B] dark:hover:text-white'
                      }`}
                    >
                      <TabIcon className="w-3.5 h-3.5" />
                      <span>0{i + 1} // {t(tab.es, tab.en)}</span>
                    </button>
                  );
                })}
              </div>

              <PortalAppMockup view={activeStep} onViewChange={setActiveStep} t={t} />

              <p className="text-[11px] font-mono text-[rgba(10,12,11,0.5)] dark:text-white/40 text-center">
                {t(
                  'Interfaz real del portal · datos de demostración · puedes interactuar con el panel',
                  'Real portal interface · demo data · the panel is interactive'
                )}
              </p>
            </div>

          </div>

        </section>

        {/* SECCIÓN 3 DE TEXTO EXTRA AL FINAL: EL PORQUÉ UN PORTAL CLIENTES DISPARA TU LIQUIDACIÓN (BORDER RADIUS MENOR Y ESTILO ARQUITECTÓNICO) */}
        <section className="space-y-12 pt-12 border-t border-[#D2D2CE] dark:border-[#303131]">
          <div className="max-w-3xl space-y-3 text-center sm:text-left">
            <h2 className="text-2xl sm:text-4xl font-bold tracking-[-0.03em] text-[#0A0C0B] dark:text-white">
              {t('Por qué el Portal de Clientes revoluciona tu flujo de caja en 2027', 'Why the Client Portal accelerates your business cash flow in 2027')}
            </h2>
            <p className="text-sm sm:text-base text-[rgba(10,12,11,0.75)] dark:text-white/75 leading-relaxed font-normal">
              {t(
                'Al eliminar la burocracia de los PDFs por correo estático y las esperas bancarias manuales, ofreces a tu cartera de clientes una experiencia de pago digna de una empresa corporativa líder.',
                'By eliminating static PDF attachments and slow manual bank transfer delays, you elevate your brand with an enterprise-grade automated billing experience.'
              )}
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="p-6 sm:p-8 rounded-[8px] bg-[#F2F2F0] dark:bg-[#131517] border border-[#D2D2CE] dark:border-[#303131] flex flex-col justify-between space-y-6 hover:border-[#0A0C0B]/40 dark:hover:border-white/40 transition-all">
              <div className="space-y-4">
                <div className="w-10 h-10 rounded-[4px] bg-[#0A0C0B] dark:bg-white text-white dark:text-[#0A0C0B] flex items-center justify-center font-bold">
                  <Zap className="w-5 h-5 text-[rgb(158,250,255)] dark:text-[rgb(20,122,132)]" />
                </div>
                <h3 className="text-lg sm:text-xl font-extrabold text-[#0A0C0B] dark:text-white">
                  {t('Cobras 18 días más rápido (DSO)', 'Collect 18 days faster on average')}
                </h3>
                <p className="text-xs sm:text-sm text-[rgba(10,12,11,0.75)] dark:text-white/75 leading-relaxed">
                  {t(
                    'Estudios contables demuestran que facilitar el pago online mediante un botón de 1 clic en un portal seguro reduce el tiempo medio de cobro en un 45% respecto a la exigencia de transferencias bancarias manuales con IBAN.',
                    'Accounting metrics reveal that providing a 1-click payment button inside a verified portal slashes days sales outstanding (DSO) by 45% compared to demanding manual IBAN bank transfers.'
                  )}
                </p>
              </div>
              <div className="pt-3 border-t border-[#D2D2CE] dark:border-[#303131] text-xs font-mono font-bold text-[rgb(43,115,38)] dark:text-[rgb(124,224,108)]">
                <span>⚡ {t('-45% TIEMPO MEDIO DE COBRO', '-45% AVERAGE COLLECTION TIME')}</span>
              </div>
            </div>

            <div className="p-6 sm:p-8 rounded-[8px] bg-[#F2F2F0] dark:bg-[#131517] border border-[#D2D2CE] dark:border-[#303131] flex flex-col justify-between space-y-6 hover:border-[#0A0C0B]/40 dark:hover:border-white/40 transition-all">
              <div className="space-y-4">
                <div className="w-10 h-10 rounded-[4px] bg-[#0A0C0B] dark:bg-white text-white dark:text-[#0A0C0B] flex items-center justify-center font-bold">
                  <ShieldCheck className="w-5 h-5 text-[rgb(124,224,108)] dark:text-[rgb(43,115,38)]" />
                </div>
                <h3 className="text-lg sm:text-xl font-extrabold text-[#0A0C0B] dark:text-white">
                  {t('Cumplimiento Inmutable VeriFactu 2027', 'Immovable 2027 VeriFactu Compliance')}
                </h3>
                <p className="text-xs sm:text-sm text-[rgba(10,12,11,0.75)] dark:text-white/75 leading-relaxed">
                  {t(
                    'El portal custodia automáticamente todas tus facturas con la huella criptográfica SHA-256 encadenada y el código QR de la AEAT. Tanto tú como tu cliente estáis protegidos al 100% ante inspecciones tributarias de la Ley 2027.',
                    'The portal automatically custodies all invoices with chained SHA-256 cryptographic hashes and Tax Agency QR codes. You and your clients remain 100% shielded against 2027 regulatory audits.'
                  )}
                </p>
              </div>
              <div className="pt-3 border-t border-[#D2D2CE] dark:border-[#303131] text-xs font-mono font-bold text-[rgb(43,115,38)] dark:text-[rgb(124,224,108)]">
                <span>🔒 {t('100% HOMOLOGADO LEY 2027', '100% 2027 TAX LAW CERTIFIED')}</span>
              </div>
            </div>

            <div className="p-6 sm:p-8 rounded-[8px] bg-[#F2F2F0] dark:bg-[#131517] border border-[#D2D2CE] dark:border-[#303131] flex flex-col justify-between space-y-6 hover:border-[#0A0C0B]/40 dark:hover:border-white/40 transition-all">
              <div className="space-y-4">
                <div className="w-10 h-10 rounded-[4px] bg-[#0A0C0B] dark:bg-white text-white dark:text-[#0A0C0B] flex items-center justify-center font-bold">
                  <User className="w-5 h-5 text-[rgb(158,250,255)] dark:text-[rgb(20,122,132)]" />
                </div>
                <h3 className="text-lg sm:text-xl font-extrabold text-[#0A0C0B] dark:text-white">
                  {t('Cero Tareas Administrativas Repetitivas', 'Zero Repetitive Admin Workload')}
                </h3>
                <p className="text-xs sm:text-sm text-[rgba(10,12,11,0.75)] dark:text-white/75 leading-relaxed">
                  {t(
                    'Elimina para siempre la redacción de correos con copias de facturas duplicadas para contabilidad. Al centralizar las descargas y el chat en este portal de autoservicio, recuperas más de 12 horas mensuales de gestión.',
                    'Put an end to drafting redundant emails containing duplicate invoice copies for bookkeepers. Centralizing downloads and communication inside this self-service space reclaims over 12 administrative hours monthly.'
                  )}
                </p>
              </div>
              <div className="pt-3 border-t border-[#D2D2CE] dark:border-[#303131] text-xs font-mono font-bold text-[rgb(43,115,38)] dark:text-[rgb(124,224,108)]">
                <span>⏱️ {t('AHORRAS 12 HORAS / MES', 'SAVE 12 ADMIN HOURS / MONTH')}</span>
              </div>
            </div>
          </div>
        </section>

        {/* SECCIÓN 4: CTA FINAL DE ALTA CONVERSIÓN CON ESTILO ARQUITECTÓNICO */}
        <section className="pt-10 border-t border-[#D2D2CE] dark:border-[#303131]">
          <div className="rounded-[8px] bg-[#0A0C0B] dark:bg-[#131517] text-white p-8 sm:p-14 md:p-16 text-center space-y-6 shadow-2xl relative overflow-hidden border border-white/10">
            
            <div className="absolute top-0 right-0 w-[450px] h-[450px] bg-gradient-to-br from-[rgba(20,122,132,0.15)] via-transparent to-transparent rounded-full blur-3xl pointer-events-none" />
            <div className="absolute bottom-0 left-0 w-[450px] h-[450px] bg-gradient-to-tr from-[rgba(52,138,46,0.12)] via-transparent to-transparent rounded-full blur-3xl pointer-events-none" />

            <div className="max-w-2xl mx-auto space-y-4 relative z-10">
              <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold tracking-[-0.03em] text-white leading-tight">
                {t('Ofrece a tus clientes un Portal de Cobros que impone respeto', 'Offer your clients a Billing Portal that commands respect')}
              </h2>
              <p className="text-base sm:text-lg text-white/80 leading-relaxed font-normal">
                {t(
                  'Empieza tu prueba gratuita hoy mismo. Activa tu portal de clientes personalizado con 0% comisiones de software y cumplimiento VeriFactu 2027 automático.',
                  'Start your free trial today. Activate your custom branded client portal with 0% software commission fees and automated 2027 VeriFactu tax adherence.'
                )}
              </p>
              
              <div className="pt-4 flex flex-col sm:flex-row items-center justify-center gap-4">
                <a
                  href={APP_URLS.register}
                  className="w-full sm:w-auto text-center px-8 py-4 rounded-[6px] bg-white text-[#0A0C0B] font-extrabold text-base shadow-lg hover:opacity-90 active:scale-[0.99] transition-all duration-200"
                >
                  {t('Empieza hoy — Gratis 30 días', 'Start Today — 30 Days Free')}
                </a>
                <a
                  href="/precios"
                  className="w-full sm:w-auto text-center px-7 py-4 rounded-[6px] border border-white/30 bg-transparent text-white font-bold text-base hover:bg-white/10 transition-all duration-200"
                >
                  {t('Ver todos los planes', 'View all pricing plans')}
                </a>
              </div>

              <div className="pt-6 flex flex-wrap items-center justify-center gap-4 sm:gap-8 text-xs text-white/70 font-mono">
                <span>⚡ {t('SIN TARJETA DE CRÉDITO', 'NO CREDIT CARD NEEDED')}</span>
                <span>🔒 {t('CERO COMISIONES POR COBRO', 'ZERO ADDED PAYMENT FEES')}</span>
                <span className="flex items-center gap-1.5"><Scale className="w-3.5 h-3.5 text-[rgb(158,250,255)]" /> {t('SOPORTE EN VIVO ESPECIALIZADO', 'SPECIALIZED LIVE SUPPORT')}</span>
              </div>
            </div>
          </div>
        </section>

      </main>

      <Footer />
    </div>
  );
};
