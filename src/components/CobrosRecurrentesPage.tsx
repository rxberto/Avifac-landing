import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  Check, 
  CreditCard, 
  RefreshCw, 
  ShieldCheck, 
  ChevronDown, 
  CheckCircle2, 
  XCircle, 
  Clock, 
  Building2, 
  TrendingUp, 
  ArrowRight
} from 'lucide-react';
import { Navbar } from './Navbar';
import { Footer } from './Footer';
import { ShinyText } from './ShinyText';
import { APP_URLS } from '../config/urls';

interface FAQItem {
  id: number;
  q: string;
  a: string;
}

export const CobrosRecurrentesPage: React.FC = () => {
  const [activeTab, setActiveTab] = useState<'cards' | 'sepa'>('cards');
  const [simulatedStep, setSimulatedStep] = useState<number>(3);
  const [openFaq, setOpenFaq] = useState<number | null>(1);
  const [lang, setLang] = useState<'es' | 'en'>('es');

  // Detect basic bilingual toggle from document or localStorage if needed
  React.useEffect(() => {
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

  const triggerSimulation = () => {
    setSimulatedStep(0);
    setTimeout(() => setSimulatedStep(1), 600);
    setTimeout(() => setSimulatedStep(2), 1400);
    setTimeout(() => setSimulatedStep(3), 2200);
  };

  const faqs: FAQItem[] = [
    {
      id: 1,
      q: t('¿Avialo cobra alguna comisión por transacción o porcentaje sobre mis cobros recurrentes?', 'Does Avialo charge transaction fees or a percentage on recurring collections?'),
      a: t(
        'No. Cero por ciento (0%). A diferencia de herramientas de suscripción tradicionales y otros ERPs que imponen un recargo de software (del 0,5% al 2%) además de tu pasarela bancaria, en Avialo operamos bajo una filosofía honesta de tarifa plana pura. Con tu plan suscrito cobras ilimitadas facturas recurrentes y solo asumes las tasas en bruto de tu pasarela bancaria (Stripe, Redsys o tu banco SEPA), sin recargos opacos ni comisiones intermedias.',
        'No. Zero percent (0%). Unlike traditional subscription billing platforms and ERPs that levy software markup fees (from 0.5% up to 2%) on top of bank gateway costs, Avialo strictly enforces a pure flat-rate model. You can charge unlimited recurring invoices under your subscription and only pay the clean direct gateway rates (Stripe, Redsys, or SEPA banks) with zero middleman charges or volume penalties.'
      )
    },
    {
      id: 2,
      q: t('¿Cómo se integra la facturación legal VeriFactu 2027 en los cobros automáticos?', 'How does official VeriFactu 2027 compliance work with automatic charges?'),
      a: t(
        'De forma completamente imperceptible para ti y instantánea para el cliente. En el milisegundo exacto en que nuestra pasarela confirma el cobro exitoso (por tarjeta o confirmación de remesa SEPA), el motor de Avialo genera la factura electrónica normativa con su huella criptográfica SHA-256 encadenada, inserta el código QR oficial de la Agencia Tributaria y remite automáticamente el PDF al cliente en un plazo inferior a 0,2 segundos.',
        'Seamlessly in the background and instantaneously for your client. In the exact millisecond our gateway verifies a successful payment (via card or SEPA batch settlement), Avialo calculates and signs an official e-invoice containing the immutable SHA-256 cryptographic chaining hash, inserts the Tax Agency official QR stamp, and distributes the legally compliant PDF to your customer in under 0.2 seconds.'
      )
    },
    {
      id: 3,
      q: t('¿Qué sucede si el cobro falla porque una tarjeta ha caducado o no tiene saldo (Smart Dunning)?', 'What happens if a charge fails due to expired cards or insufficient bank funds (Smart Dunning)?'),
      a: t(
        'Aquí reside una de nuestras mayores ventajas comerciales frente al cobro manual o ERPs rígidos. Nuestro módulo Smart Dunning con IA no bloquea al cliente ni te obliga a llamar por teléfono. El sistema analiza las ventanas de liquidez habituales y reprograma reintentos inteligentes de forma automática. Al mismo tiempo, envía al cliente correos electrónicos cortesiada y personalizados con un enlace de pago seguro en 1 clic para actualizar su tarjeta, recuperando hasta el 68% de los cobros fallidos sin tu intervención en 72 horas.',
        'This is one of our biggest commercial victories over manual banking or rigid legacy ERPs. Our AI Smart Dunning engine will not abruptly lock your client or force you into awkward recovery phone calls. The algorithm analyses optimal customer liquidity timing windows to schedule intelligent re-attempts automatically. Concurrently, it sends courteous, automated email notices containing a secure 1-click update card link, successfully rescuing up to 68% of failed collections within 72 hours with zero manual effort.'
      )
    },
    {
      id: 4,
      q: t('¿Puedo gestionar tanto cobros con tarjeta como domiciliaciones bancarias SEPA B2B?', 'Can I handle both card billing and B2B SEPA direct debit transfers?'),
      a: t(
        'Sí, combinados en un mismo panel y adaptados a tu cartera de clientes. Para consumidores o suscripciones SaaS puedes utilizar cobros recurrentes con tarjeta bancaria (Visa, Mastercard, Amex via Stripe/Redsys). Para clientes empresariales, pymes, colegios profesionales, alquileres o mantenimiento B2B, puedes generar mandatos SEPA digitales (Core y B2B) y exportar tus remesas automáticas en formato normalizado XML ISO 20022 conciliables con cualquier entidad bancaria en España y la Unión Europea.',
        'Yes, combined inside one unified workspace and tailored to your client spectrum. For consumers or digital subscriptions, utilize automatic credit card billing (Visa, Mastercard, Amex via Stripe/Redsys). For corporate retainers, B2B maintenance, professional service fees, or real estate leasing, manage digital SEPA mandates (Core & B2B) and generate standardized SEPA XML ISO 20022 billing batches instantly recognizable by all banks across Spain and Europe.'
      )
    },
    {
      id: 5,
      q: t('¿Es fácil migrar mis suscripciones actuales desde Excel, Holded u otro sistema?', 'Is it easy to migrate my active subscriptions from Excel or legacy accounting apps?'),
      a: t(
        'Extremadamente ágil. Dispones de un importador masivo inteligente que te permite cargar en minutos tus listas de clientes, cuotas mensuales, trimestrales o anuales y mandatos bancarios. Nuestro equipo de soporte técnico humano en España te acompaña en todo el proceso de transición para que no experimentes ni una sola hora de interrupción ni pierdas el ciclo contable en curso.',
        'Extremely fast. You have access to our smart bulk onboarding importer designed to ingest your client rolls, recurring monthly/quarterly fee structures, and banking details in minutes. Furthermore, our specialized human technical support team in Spain guides your whole migration journey to ensure zero downtime or billing disruptions across your active fiscal cycles.'
      )
    }
  ];

  return (
    <div className="min-h-screen bg-[#FCFCFB] dark:bg-[#080a09] text-[#0A0C0B] dark:text-white w-full overflow-x-hidden antialiased transition-colors duration-300 flex flex-col">
      <Navbar />

      <main className="flex-1 w-full max-w-[1240px] mx-auto px-4 sm:px-6 md:px-8 pt-12 sm:pt-16 md:pt-24 pb-20 sm:pb-28 space-y-24 sm:space-y-36">
        
        {/* SECCIÓN 1: ASYMMETRIC HERO DE COBROS RECURRENTES (SIN TAGS, ESTILO ARQUITECTÓNICO & MOCKUP VIVO) */}
        <section className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center pt-4 sm:pt-8">
          
          {/* Columna Izquierda: Titular potente y copy de alta conversión */}
          <div className="lg:col-span-6 space-y-6 text-center lg:text-left">
            <h1 className="text-3xl sm:text-5xl lg:text-6xl font-extrabold tracking-[-0.04em] text-[#0A0C0B] dark:text-white leading-[1.08] sm:leading-[1.1]">
              <span className="block">{t('Cobros recurrentes', 'Recurring billing')}</span>
              <ShinyText text={t('que funcionan solos.', 'on automatic pilot.')} speed={2.5} className="font-extrabold block mt-1" />
            </h1>
            
            <p className="text-base sm:text-xl text-[rgba(10,12,11,0.75)] dark:text-white/80 leading-relaxed font-normal max-w-xl mx-auto lg:mx-0">
              {t(
                'Automatiza tus suscripciones B2B y B2C mediante domiciliación SEPA y tarjeta bancaria. Nuestro motor inteligente elimina la morosidad y adjunta tu factura legal VeriFactu 2027 al instante sin comisiones abusivas por transacción.',
                'Automate B2B and B2C subscriptions via SEPA direct debits and card gateways. Our smart dunning engine obliterates unpaid invoices and instantly delivers 100% legal VeriFactu 2027 invoices with zero markup commission traps.'
              )}
            </p>

            <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4 pt-2">
              <a
                href={APP_URLS.register}
                className="w-full sm:w-auto text-center px-7 py-4 rounded-[12px] bg-[#0A0C0B] dark:bg-white text-white dark:text-[#0A0C0B] font-bold text-base shadow-lg hover:opacity-90 active:scale-[0.99] transition-all duration-200"
              >
                {t('Empezar prueba de 14 días', 'Start 14-Day Free Trial')}
              </a>
              <a
                href="#flujo-cobros"
                className="w-full sm:w-auto text-center inline-flex items-center justify-center gap-2 px-6 py-4 rounded-[12px] border border-[#D2D2CE] dark:border-[#303131] bg-[#F2F2F0] dark:bg-[#131517] text-[#0A0C0B] dark:text-white font-semibold text-sm hover:border-[#0A0C0B]/40 dark:hover:border-white/40 transition-all duration-200"
              >
                <span>{t('Explorar motor de cobros', 'Explore billing engine')}</span>
                <ArrowRight className="w-4 h-4" />
              </a>
            </div>

            <div className="pt-4 border-t border-[#D2D2CE] dark:border-[#303131] flex flex-wrap items-center justify-center lg:justify-start gap-x-6 gap-y-2 text-xs font-semibold text-[rgba(10,12,11,0.7)] dark:text-white/70">
              <span className="inline-flex items-center gap-1.5">
                <Check className="w-4 h-4 text-[rgb(52,138,46)] dark:text-[rgb(124,224,108)]" />
                {t('Tarjetas Visa, Mastercard & Amex', 'Visa, Mastercard & Amex cards')}
              </span>
              <span className="inline-flex items-center gap-1.5">
                <Check className="w-4 h-4 text-[rgb(52,138,46)] dark:text-[rgb(124,224,108)]" />
                {t('Remesas y Mandatos SEPA B2B', 'SEPA B2B & Core Mandates')}
              </span>
              <span className="inline-flex items-center gap-1.5 text-[rgb(43,115,38)] dark:text-[rgb(124,224,108)] font-bold">
                <ShieldCheck className="w-4 h-4" />
                {t('0% comisiones añadidas de software', '0% software transaction fee')}
              </span>
            </div>
          </div>

          {/* Columna Derecha: Mockup Interactivo de Motor de Cobros y Smart Dunning */}
          <div className="lg:col-span-6 w-full">
            <div className="w-full rounded-[20px] bg-[#F2F2F0] dark:bg-[#131517] border border-[#D2D2CE] dark:border-[#303131] p-5 sm:p-6 shadow-2xl space-y-5 relative overflow-hidden">
              <div className="flex items-center justify-between border-b border-[#D2D2CE] dark:border-[#303131] pb-4">
                <div className="flex items-center gap-2">
                  <div className="w-3 h-3 rounded-full bg-[rgb(219,68,55)]" />
                  <div className="w-3 h-3 rounded-full bg-[rgb(244,180,0)]" />
                  <div className="w-3 h-3 rounded-full bg-[rgb(15,157,88)]" />
                  <span className="ml-2 font-mono text-xs font-bold text-[#0A0C0B] dark:text-white uppercase tracking-wider">
                    {t('AVIALO ENGINE // AUTO-PAYMENTS', 'AVIALO ENGINE // AUTO-PAYMENTS')}
                  </span>
                </div>
                <button 
                  onClick={triggerSimulation} 
                  className="inline-flex items-center gap-1.5 px-3 py-1 rounded-[6px] bg-[#0A0C0B] dark:bg-white text-white dark:text-[#0A0C0B] font-mono text-[11px] font-bold hover:opacity-90 transition-opacity"
                  title="Simular ejecución de ciclo de cobro"
                >
                  <RefreshCw className="w-3 h-3 animate-spin text-[rgb(158,250,255)] dark:text-[rgb(20,122,132)]" />
                  <span>{t('Simular Cobro', 'Simulate Charge')}</span>
                </button>
              </div>

              {/* Selector de canal de cobro en tiempo real */}
              <div className="flex items-center gap-2 p-1.5 rounded-[12px] bg-[#FCFCFB] dark:bg-[#080a09] border border-[#D2D2CE] dark:border-[#303131]">
                <button
                  onClick={() => setActiveTab('cards')}
                  className={`flex-1 py-2 px-3 rounded-[9px] text-xs sm:text-sm font-bold flex items-center justify-center gap-2 transition-all ${
                    activeTab === 'cards'
                      ? 'bg-[#0A0C0B] text-white dark:bg-white dark:text-[#0A0C0B] shadow-sm'
                      : 'text-[rgba(10,12,11,0.65)] dark:text-white/65 hover:text-[#0A0C0B] dark:hover:text-white'
                  }`}
                >
                  <CreditCard className="w-4 h-4 shrink-0" />
                  <span>{t('Tarjeta (Stripe / Redsys)', 'Cards (Stripe / Redsys)')}</span>
                </button>
                <button
                  onClick={() => setActiveTab('sepa')}
                  className={`flex-1 py-2 px-3 rounded-[9px] text-xs sm:text-sm font-bold flex items-center justify-center gap-2 transition-all ${
                    activeTab === 'sepa'
                      ? 'bg-[#0A0C0B] text-white dark:bg-white dark:text-[#0A0C0B] shadow-sm'
                      : 'text-[rgba(10,12,11,0.65)] dark:text-white/65 hover:text-[#0A0C0B] dark:hover:text-white'
                  }`}
                >
                  <Building2 className="w-4 h-4 shrink-0" />
                  <span>{t('Domiciliación SEPA (B2B)', 'SEPA B2B Mandate')}</span>
                </button>
              </div>

              {/* Contenido interactivo de la tarjeta del cliente y suscripción */}
              <AnimatePresence mode="wait">
                {activeTab === 'cards' ? (
                  <motion.div
                    key="tab-card"
                    initial={{ opacity: 0, x: -10 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: 10 }}
                    transition={{ duration: 0.2 }}
                    className="p-4 sm:p-5 rounded-[14px] bg-[#FCFCFB] dark:bg-[#080a09] border border-[#D2D2CE] dark:border-[#303131] space-y-4 shadow-inner"
                  >
                    <div className="flex items-start justify-between gap-2">
                      <div>
                        <div className="inline-flex items-center gap-1 px-2 py-0.5 rounded-[4px] bg-[rgba(52,138,46,0.12)] text-[rgb(43,115,38)] dark:text-[rgb(124,224,108)] font-mono text-[10px] font-bold uppercase">
                          {t('Suscripción Activa', 'Active Subscription')}
                        </div>
                        <h3 className="text-base font-bold text-[#0A0C0B] dark:text-white mt-1.5">
                          {t('Plan Corporativo - Software de Gestión', 'Enterprise SaaS Retainer')}
                        </h3>
                        <p className="text-xs text-[rgba(10,12,11,0.65)] dark:text-white/65 font-mono">
                          Cliente: Tech Solutions Madrid S.L.
                        </p>
                      </div>
                      <div className="text-right">
                        <span className="text-xl sm:text-2xl font-extrabold text-[#0A0C0B] dark:text-white">450,00 €</span>
                        <span className="block text-[10px] text-[rgba(10,12,11,0.6)] dark:text-white/60">/ {t('mes (IVA incluido)', 'mth (VAT incl.)')}</span>
                      </div>
                    </div>

                    <div className="grid grid-cols-2 gap-3 pt-2 text-xs font-mono border-t border-[#D2D2CE] dark:border-[#303131]">
                      <div className="p-2.5 rounded-[8px] bg-[#F2F2F0] dark:bg-[#131517] border border-[#D2D2CE] dark:border-[#303131]">
                        <span className="text-[10px] text-[rgba(10,12,11,0.6)] dark:text-white/60 block">{t('MÉTODO DE COBRO', 'BILLING METHOD')}</span>
                        <span className="font-bold flex items-center gap-1 mt-1 text-[#0A0C0B] dark:text-white">
                          <CreditCard className="w-3.5 h-3.5 text-[rgb(20,122,132)] dark:text-[rgb(158,250,255)]" />
                          Visa •••• 4242
                        </span>
                      </div>
                      <div className="p-2.5 rounded-[8px] bg-[#F2F2F0] dark:bg-[#131517] border border-[#D2D2CE] dark:border-[#303131]">
                        <span className="text-[10px] text-[rgba(10,12,11,0.6)] dark:text-white/60 block">{t('PRÓXIMA EJECUCIÓN', 'NEXT EXECUTION')}</span>
                        <span className="font-bold flex items-center gap-1 mt-1 text-[rgb(52,138,46)] dark:text-[rgb(124,224,108)]">
                          <Clock className="w-3.5 h-3.5" />
                          01/09/2027 (09:00h)
                        </span>
                      </div>
                    </div>
                  </motion.div>
                ) : (
                  <motion.div
                    key="tab-sepa"
                    initial={{ opacity: 0, x: -10 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: 10 }}
                    transition={{ duration: 0.2 }}
                    className="p-4 sm:p-5 rounded-[14px] bg-[#FCFCFB] dark:bg-[#080a09] border border-[#D2D2CE] dark:border-[#303131] space-y-4 shadow-inner"
                  >
                    <div className="flex items-start justify-between gap-2">
                      <div>
                        <div className="inline-flex items-center gap-1 px-2 py-0.5 rounded-[4px] bg-[rgba(20,122,132,0.12)] text-[rgb(20,122,132)] dark:text-[rgb(158,250,255)] font-mono text-[10px] font-bold uppercase">
                          {t('Mandato SEPA B2B Firmado', 'Signed SEPA B2B Mandate')}
                        </div>
                        <h3 className="text-base font-bold text-[#0A0C0B] dark:text-white mt-1.5">
                          {t('Mantenimiento y Auditoría Contable', 'Financial & Audit Retainer Services')}
                        </h3>
                        <p className="text-xs text-[rgba(10,12,11,0.65)] dark:text-white/65 font-mono">
                          Ref Mandato: MND-2027-ES9283
                        </p>
                      </div>
                      <div className="text-right">
                        <span className="text-xl sm:text-2xl font-extrabold text-[#0A0C0B] dark:text-white">1.250,00 €</span>
                        <span className="block text-[10px] text-[rgba(10,12,11,0.6)] dark:text-white/60">/ {t('trimestre', 'quarter')}</span>
                      </div>
                    </div>

                    <div className="grid grid-cols-2 gap-3 pt-2 text-xs font-mono border-t border-[#D2D2CE] dark:border-[#303131]">
                      <div className="p-2.5 rounded-[8px] bg-[#F2F2F0] dark:bg-[#131517] border border-[#D2D2CE] dark:border-[#303131]">
                        <span className="text-[10px] text-[rgba(10,12,11,0.6)] dark:text-white/60 block">{t('CUENTA CLIENTE (IBAN)', 'CLIENT ACCOUNT (IBAN)')}</span>
                        <span className="font-bold flex items-center gap-1 mt-1 text-[#0A0C0B] dark:text-white">
                          <Building2 className="w-3.5 h-3.5 text-[rgb(20,122,132)] dark:text-[rgb(158,250,255)]" />
                          ES21 •••• •••• 8841
                        </span>
                      </div>
                      <div className="p-2.5 rounded-[8px] bg-[#F2F2F0] dark:bg-[#131517] border border-[#D2D2CE] dark:border-[#303131]">
                        <span className="text-[10px] text-[rgba(10,12,11,0.6)] dark:text-white/60 block">{t('NORMATIVA REMESA', 'BANKING BATCH NORM')}</span>
                        <span className="font-bold flex items-center gap-1 mt-1 text-[rgb(52,138,46)] dark:text-[rgb(124,224,108)]">
                          <CheckCircle2 className="w-3.5 h-3.5" />
                          SEPA XML ISO 20022
                        </span>
                      </div>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>

              {/* Registro de eventos del ciclo de cobro y facturación automática */}
              <div className="space-y-2 pt-2">
                <div className="flex items-center justify-between text-[11px] font-mono font-bold text-[rgba(10,12,11,0.7)] dark:text-white/70">
                  <span>{t('REGISTRO DE EJECUCIÓN DEL MOTOR (TIEMPO REAL)', 'AUTOMATED ENGINE LOG (REAL-TIME)')}</span>
                  <span className="text-[rgb(52,138,46)] dark:text-[rgb(124,224,108)] flex items-center gap-1">
                    <span className="w-2 h-2 rounded-full bg-[rgb(52,138,46)] dark:bg-[rgb(124,224,108)] animate-ping inline-block" />
                    ONLINE
                  </span>
                </div>
                <div className="p-3.5 rounded-[12px] bg-[#FCFCFB] dark:bg-[#080a09] border border-[#D2D2CE] dark:border-[#303131] font-mono text-[11px] space-y-2">
                  <div className={`flex items-center gap-2 transition-opacity duration-300 ${simulatedStep >= 0 ? 'opacity-100' : 'opacity-30'}`}>
                    <CheckCircle2 className="w-3.5 h-3.5 text-[rgb(52,138,46)] shrink-0" />
                    <span className="text-[#0A0C0B] dark:text-white">{t('[00:00.0] Cobro programado detectado en calendario', '[00:00.0] Scheduled billing event triggered')}</span>
                  </div>
                  <div className={`flex items-center gap-2 transition-opacity duration-300 ${simulatedStep >= 1 ? 'opacity-100' : 'opacity-30'}`}>
                    <CheckCircle2 className="w-3.5 h-3.5 text-[rgb(52,138,46)] shrink-0" />
                    <span className="text-[#0A0C0B] dark:text-white">{t('[00:00.3] Cargo procesado con éxito sin comisiones añadidas', '[00:00.3] Charge processed successfully via gateway (0% fees)')}</span>
                  </div>
                  <div className={`flex items-center gap-2 transition-opacity duration-300 ${simulatedStep >= 2 ? 'opacity-100' : 'opacity-30'}`}>
                    <CheckCircle2 className="w-3.5 h-3.5 text-[rgb(52,138,46)] shrink-0" />
                    <span className="font-bold text-[rgb(20,122,132)] dark:text-[rgb(158,250,255)]">
                      {t('[00:00.5] Factura AV-2027-891 generada con hash SHA-256 VeriFactu', '[00:00.5] Invoice AV-2027-891 stamped with SHA-256 VeriFactu hash')}
                    </span>
                  </div>
                  <div className={`flex items-center gap-2 transition-opacity duration-300 ${simulatedStep >= 3 ? 'opacity-100' : 'opacity-30'}`}>
                    <CheckCircle2 className="w-3.5 h-3.5 text-[rgb(52,138,46)] shrink-0" />
                    <span className="text-[rgb(52,138,46)] dark:text-[rgb(124,224,108)] font-bold">
                      {t('[00:00.8] PDF enviado por email al cliente y conciliado en contabilidad', '[00:00.8] PDF dispatched via email & auto-reconciled in ledger')}
                    </span>
                  </div>
                </div>
              </div>

            </div>
          </div>

        </section>

        {/* SECCIÓN 2: EL FLUJO DE COBROS AUTOMATIZADO EN 3 PASOS (ESTILO EDITORIAL ASIMÉTRICO CON NUEVAS FOTografías) */}
        <section id="flujo-cobros" className="space-y-16 pt-10 border-t border-[#D2D2CE] dark:border-[#303131]">
          <div className="text-center sm:text-left max-w-3xl space-y-3">
            <h2 className="text-2xl sm:text-4xl font-bold tracking-[-0.03em] text-[#0A0C0B] dark:text-white">
              {t('El fin de perseguir facturas impagadas: cómo funciona en 3 pasos', 'The end of chasing unpaid invoices: how it works in 3 clean steps')}
            </h2>
            <p className="text-sm sm:text-base text-[rgba(10,12,11,0.75)] dark:text-white/75 leading-relaxed font-normal">
              {t(
                'Olvídate de redactar facturas manualmente cada mes y esperar semanas a que tu cliente ordene la transferencia. Con Avialo tomas el control de tu flujo de caja.',
                'Say goodbye to typing monthly invoice drafts and waiting weeks for client bank transfers. With Avialo, take absolute command over your cash flow architecture.'
              )}
            </p>
          </div>

          <div className="space-y-12 sm:space-y-16">
            
            {/* Paso 1: Configuración en 25 segundos */}
            <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-center rounded-[20px] bg-[#F2F2F0] dark:bg-[#131517] border border-[#D2D2CE] dark:border-[#303131] p-6 sm:p-10 overflow-hidden">
              <div className="md:col-span-6 space-y-4">
                <div className="inline-flex items-center gap-2 font-mono font-bold text-xs sm:text-sm text-[rgb(20,122,132)] dark:text-[rgb(158,250,255)] uppercase">
                  <span>01 // {t('CONFIGURACIÓN AGIL', 'FAST SETUP')}</span>
                </div>
                <h3 className="text-2xl sm:text-3xl font-extrabold text-[#0A0C0B] dark:text-white leading-tight">
                  {t('Define tu suscripción y calendario de cobro en 25 segundos', 'Define your billing terms & schedule in 25 seconds')}
                </h3>
                <p className="text-sm sm:text-base text-[rgba(10,12,11,0.75)] dark:text-white/75 leading-relaxed font-normal">
                  {t(
                    'Selecciona el cliente, el importe y la periodicidad (mensual, trimestral, anual o personalizada). Puedes aplicar retenciones de IRPF para autónomos, IVA intracomunitario o reglas de recargo de equivalencia. Una vez guardado, el sistema se programa automáticamente sin fecha de caducidad.',
                    'Select the client, billing fee, and recurring cycle (monthly, quarterly, annual, or custom schedules). Apply personal income tax withholdings (IRPF), VAT rules, or international tax parameters. Once executed, the clockwork schedule handles everything.'
                  )}
                </p>
                <ul className="space-y-2 text-xs sm:text-sm font-semibold text-[#0A0C0B] dark:text-white pt-2">
                  <li className="flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-[rgb(52,138,46)] shrink-0" />
                    <span>{t('Plantillas recurrentes duplicables en un clic', 'Duplicate recurring contract templates in 1 click')}</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-[rgb(52,138,46)] shrink-0" />
                    <span>{t('Ajuste automático para años bisiestos y festivos bancarios', 'Auto-adjusts for leap years and bank holiday execution')}</span>
                  </li>
                </ul>
              </div>
              <div className="md:col-span-6 w-full h-full min-h-[280px] rounded-[14px] overflow-hidden relative border border-[#D2D2CE] dark:border-[#303131] shadow-md">
                <img
                  src="https://images.unsplash.com/photo-1556742049-0a67d55febc2?w=800&auto=format&fit=crop&q=80"
                  alt="Terminal de pago digital y configuración ágil de suscripciones"
                  className="w-full h-full object-cover min-h-[280px] filter saturate-[1.05] contrast-[1.05] hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute top-4 right-4 bg-[#0A0C0B]/90 backdrop-blur-md px-3 py-1 rounded-[6px] border border-white/20 text-[11px] font-mono text-[#00FF66] font-bold">
                  {t('TIEMPO DE CREACIÓN: 25s', 'CREATION TIME: 25s')}
                </div>
              </div>
            </div>

            {/* Paso 2: Ejecución multicanal sin comisiones */}
            <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-center rounded-[20px] bg-[#F2F2F0] dark:bg-[#131517] border border-[#D2D2CE] dark:border-[#303131] p-6 sm:p-10 overflow-hidden">
              <div className="md:col-span-6 order-2 md:order-1 w-full h-full min-h-[280px] rounded-[14px] overflow-hidden relative border border-[#D2D2CE] dark:border-[#303131] shadow-md">
                <img
                  src="https://images.unsplash.com/photo-1559526324-4b87b5e36e44?w=800&auto=format&fit=crop&q=80"
                  alt="Analítica de cobros recurrentes y transacciones SEPA en tiempo real"
                  className="w-full h-full object-cover min-h-[280px] filter saturate-[1.05] contrast-[1.05] hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute top-4 left-4 bg-[#0A0C0B]/90 backdrop-blur-md px-3 py-1 rounded-[6px] border border-white/20 text-[11px] font-mono text-[rgb(158,250,255)] font-bold">
                  {t('COMISIÓN DE AVIALO: 0%', 'AVIALO TRANSACTION FEE: 0%')}
                </div>
              </div>
              <div className="md:col-span-6 order-1 md:order-2 space-y-4">
                <div className="inline-flex items-center gap-2 font-mono font-bold text-xs sm:text-sm text-[rgb(20,122,132)] dark:text-[rgb(158,250,255)] uppercase">
                  <span>02 // {t('EJECUCIÓN MULTICANAL', 'MULTI-CHANNEL BILLING')}</span>
                </div>
                <h3 className="text-2xl sm:text-3xl font-extrabold text-[#0A0C0B] dark:text-white leading-tight">
                  {t('Cobro automático por Tarjeta o Remesa SEPA sin peajes de software', 'Automated card charges & SEPA batches without software toll fees')}
                </h3>
                <p className="text-sm sm:text-base text-[rgba(10,12,11,0.75)] dark:text-white/75 leading-relaxed font-normal">
                  {t(
                    'Muchos programas de gestión engordan tu factura a final de mes quedándose con hasta un 1,5% de cada cobro recurrente que procesas. Con Avialo eso se acabó. Conecta tu propia cuenta de Stripe, Redsys o genera remesas XML bancarias bajo norma SEPA con 0% de comisiones por nuestra parte.',
                    'Many billing platforms inflate your costs by taking up to a 1.5% commission cut on every subscription charge you process. Avialo stops this unfair practice. Link your own Stripe/Redsys gateway or generate direct bank SEPA XML batches with 0% software transaction fee overhead.'
                  )}
                </p>
                <ul className="space-y-2 text-xs sm:text-sm font-semibold text-[#0A0C0B] dark:text-white pt-2">
                  <li className="flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-[rgb(52,138,46)] shrink-0" />
                    <span>{t('Abono directo e instantáneo en tu propia cuenta bancaria', 'Direct settlement into your corporate banking account')}</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-[rgb(52,138,46)] shrink-0" />
                    <span>{t('Gestión completa de mandatos SEPA Core y B2B en PDF', 'Complete automated SEPA Core & B2B digital mandate vault')}</span>
                  </li>
                </ul>
              </div>
            </div>

            {/* Paso 3: Emisión legal VeriFactu 2027 y conciliación */}
            <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-center rounded-[20px] bg-[#F2F2F0] dark:bg-[#131517] border border-[#D2D2CE] dark:border-[#303131] p-6 sm:p-10 overflow-hidden">
              <div className="md:col-span-6 space-y-4">
                <div className="inline-flex items-center gap-2 font-mono font-bold text-xs sm:text-sm text-[rgb(20,122,132)] dark:text-[rgb(158,250,255)] uppercase">
                  <span>03 // {t('LEGALIDAD Y CONCILIACIÓN', 'LEGAL & LEDGER RECONCILIATION')}</span>
                </div>
                <h3 className="text-2xl sm:text-3xl font-extrabold text-[#0A0C0B] dark:text-white leading-tight">
                  {t('Emisión automática con huella VeriFactu 2027 y cierre contable', 'Instant 2027 VeriFactu tax signing & automatic general ledger posting')}
                </h3>
                <p className="text-sm sm:text-base text-[rgba(10,12,11,0.75)] dark:text-white/75 leading-relaxed font-normal">
                  {t(
                    'No se trata solo de cobrar, sino de facturar dentro de la estricta legalidad tributaria. Cada cobro exitoso dispara al segundo la generación de la factura electrónica oficial, la firma con hash SHA-256 encadenado y la anotación contable conciliada, blindando a tu empresa ante cualquier auditoría en 2027.',
                    'True automation involves strict tax regulatory alignment. Every successful payment execution instantly fires official e-invoice generation, signs the immutable SHA-256 cryptographic chain hash, distributes the stamped PDF, and registers reconciled bookkeeping totals ready for 2027 audits.'
                  )}
                </p>
                <ul className="space-y-2 text-xs sm:text-sm font-semibold text-[#0A0C0B] dark:text-white pt-2">
                  <li className="flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-[rgb(52,138,46)] shrink-0" />
                    <span>{t('Cumple el Real Decreto 1007/2023 y la Ley Antifraude 100%', '100% compliant with Royal Decree 1007/2023 & Anti-Fraud law')}</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-[rgb(52,138,46)] shrink-0" />
                    <span>{t('Acceso de lectura en tiempo real para tu asesor o gestoría', 'Real-time transparent tax view for your accountant & CPA')}</span>
                  </li>
                </ul>
              </div>
              <div className="md:col-span-6 w-full h-full min-h-[280px] rounded-[14px] overflow-hidden relative border border-[#D2D2CE] dark:border-[#303131] shadow-md">
                <img
                  src="https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?w=800&auto=format&fit=crop&q=80"
                  alt="Auditoría fiscal y contabilidad conciliada con VeriFactu 2027"
                  className="w-full h-full object-cover min-h-[280px] filter saturate-[1.05] contrast-[1.05] hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute top-4 right-4 bg-[#0A0C0B]/90 backdrop-blur-md px-3 py-1 rounded-[6px] border border-white/20 text-[11px] font-mono text-[#00FF66] font-bold">
                  {t('100% HOMOLOGADO AEAT', '100% TAX AGENCY CERTIFIED')}
                </div>
              </div>
            </div>

          </div>
        </section>

        {/* SECCIÓN 3: INTELIGENCIA ANTI-IMPAGOS (SMART DUNNING IA) */}
        <section className="space-y-12 pt-10 border-t border-[#D2D2CE] dark:border-[#303131]">
          <div className="text-center sm:text-left max-w-3xl space-y-3">
            <h2 className="text-2xl sm:text-4xl font-bold tracking-[-0.03em] text-[#0A0C0B] dark:text-white">
              {t('Smart Dunning IA: recupera cobros devueltos sin levantar el teléfono', 'Smart Dunning AI: rescue failed charges without making awkward calls')}
            </h2>
            <p className="text-sm sm:text-base text-[rgba(10,12,11,0.75)] dark:text-white/75 leading-relaxed font-normal">
              {t(
                'Las tarjetas caducan y las cuentas bancarias en ocasiones sufren retrasos en ingresos. Avialo gestiona las incidencias de cobro de forma cortés, estratégica y automatizada para salvaguardar la retención de tus clientes.',
                'Credit cards expire and business bank balances experience temporary transaction mismatches. Avialo resolves payment failures courteously, strategically, and automatically to protect your monthly recurring revenues.'
              )}
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-stretch">
            
            {/* Tarjeta 1: Algoritmo de reintento por ventana de liquidez */}
            <div className="rounded-[16px] bg-[#F2F2F0] dark:bg-[#131517] border border-[#D2D2CE] dark:border-[#303131] p-6 sm:p-8 flex flex-col justify-between gap-6 hover:border-[#0A0C0B]/40 dark:hover:border-white/40 transition-all">
              <div className="space-y-4">
                <div className="w-12 h-12 rounded-[12px] bg-[#0A0C0B] dark:bg-white text-white dark:text-[#0A0C0B] flex items-center justify-center font-bold text-xl shadow-md">
                  <TrendingUp className="w-6 h-6 text-[rgb(158,250,255)] dark:text-[rgb(20,122,132)]" />
                </div>
                <h3 className="text-xl sm:text-2xl font-extrabold text-[#0A0C0B] dark:text-white">
                  {t('Reintentos en Horas de Máxima Liquidez', 'Smart Liquidity Window Retry')}
                </h3>
                <p className="text-xs sm:text-sm text-[rgba(10,12,11,0.75)] dark:text-white/75 leading-relaxed font-normal">
                  {t(
                    'Los sistemas antiguos reintentan un cobro fallido a las 24 horas exactas, fracasando una y otra vez. Nuestro motor IA estudia los ciclos bancarios habituales de ingreso (días 1 a 5 y mediados de mes) para reprogramar el cargo en el instante de mayor probabilidad de éxito, reduciendo el rechazo por saldo insuficiente.',
                    'Outdated ERPs clumsily retry failed charges precisely 24 hours later, failing repeatedly. Our intelligent engine analyses statistical payroll and banking inflow deposit days (1st to 5th of every month) to intelligently trigger retries during high-liquidity hours, slashing rejection rates.'
                  )}
                </p>
              </div>
              <div className="pt-3 border-t border-[#D2D2CE] dark:border-[#303131] flex items-center justify-between text-xs font-mono font-bold text-[rgb(52,138,46)] dark:text-[rgb(124,224,108)]">
                <span>{t('+68% TASA DE RECUPERACIÓN', '+68% RECOVERY SUCCESS RATE')}</span>
              </div>
            </div>

            {/* Tarjeta 2: Notificaciones de tarjeta próxima a caducar */}
            <div className="rounded-[16px] bg-[#F2F2F0] dark:bg-[#131517] border border-[#D2D2CE] dark:border-[#303131] p-6 sm:p-8 flex flex-col justify-between gap-6 hover:border-[#0A0C0B]/40 dark:hover:border-white/40 transition-all">
              <div className="space-y-4">
                <div className="w-12 h-12 rounded-[12px] bg-[#0A0C0B] dark:bg-white text-white dark:text-[#0A0C0B] flex items-center justify-center font-bold text-xl shadow-md">
                  <RefreshCw className="w-6 h-6 text-[rgb(124,224,108)] dark:text-[rgb(43,115,38)]" />
                </div>
                <h3 className="text-xl sm:text-2xl font-extrabold text-[#0A0C0B] dark:text-white">
                  {t('Aviso Previo de Caducidad de Tarjeta', 'Proactive Expiring Card Alerts')}
                </h3>
                <p className="text-xs sm:text-sm text-[rgba(10,12,11,0.75)] dark:text-white/75 leading-relaxed font-normal">
                  {t(
                    '¿Por qué esperar a que el cobro sea rechazado? Treinta días antes de que la tarjeta de tu cliente caduque, Avialo remite automáticamente un aviso amable con un enlace seguro y cifrado en el que puede actualizar sus datos en 15 segundos sin necesidad de registrarse ni crear cuentas en portales externos.',
                    'Why wait for a failed transaction? Thirty days before a stored payment method expires, Avialo proactively dispatches a polite, customized note accompanied by an encrypted update link where your client updates card details in 15 seconds without cumbersome logins.'
                  )}
                </p>
              </div>
              <div className="pt-3 border-t border-[#D2D2CE] dark:border-[#303131] flex items-center justify-between text-xs font-mono font-bold text-[rgb(52,138,46)] dark:text-[rgb(124,224,108)]">
                <span>{t('PREVENCIÓN ANTES DE LA DEVOLUCIÓN', 'PREVENTS INVOLUNTARY CHURN')}</span>
              </div>
            </div>

            {/* Tarjeta 3: Gestión cortés sin cortar servicios brutalmente */}
            <div className="rounded-[16px] bg-[#F2F2F0] dark:bg-[#131517] border border-[#D2D2CE] dark:border-[#303131] p-6 sm:p-8 flex flex-col justify-between gap-6 hover:border-[#0A0C0B]/40 dark:hover:border-white/40 transition-all">
              <div className="space-y-4">
                <div className="w-12 h-12 rounded-[12px] bg-[#0A0C0B] dark:bg-white text-white dark:text-[#0A0C0B] flex items-center justify-center font-bold text-xl shadow-md">
                  <ShieldCheck className="w-6 h-6 text-[rgb(158,250,255)] dark:text-[rgb(20,122,132)]" />
                </div>
                <h3 className="text-xl sm:text-2xl font-extrabold text-[#0A0C0B] dark:text-white">
                  {t('Protección de la Relación Comercial', 'Commercial Relationship Protection')}
                </h3>
                <p className="text-xs sm:text-sm text-[rgba(10,12,11,0.75)] dark:text-white/75 leading-relaxed font-normal">
                  {t(
                    'Reclamar facturas impagadas genera tensión y fricción personal. Al delegar la gestión de cobros devueltos en los flujos de correo elegantes y objetivos de Avialo, mantienes una relación comercial impecable con tu cliente mientras la tecnología se encarga con eficacia y tacto diplomático del cierre del cobro.',
                    'Chasing unpaid accounts breeds unpleasant personal friction. By delegating failed payment recoveries to Avialo refined, professional communication sequences, you preserve spotless business relationship good will while technology handles successful billing resolution.'
                  )}
                </p>
              </div>
              <div className="pt-3 border-t border-[#D2D2CE] dark:border-[#303131] flex items-center justify-between text-xs font-mono font-bold text-[rgb(52,138,46)] dark:text-[rgb(124,224,108)]">
                <span>{t('CERO FRICCIÓN PERSONAL CON CLIENTES', 'ZERO AWKWARD RECOVERY CALLS')}</span>
              </div>
            </div>

          </div>
        </section>

        {/* SECCIÓN 4: MATRIZ DE MERCADO: COBRO MANUAL VS ERPS ABUSIVOS VS AVIALO COBROS CERTIFICADOS */}
        <section className="space-y-8 pt-10 border-t border-[#D2D2CE] dark:border-[#303131]">
          <div className="text-center sm:text-left space-y-2 max-w-4xl">
            <h2 className="text-2xl sm:text-4xl font-bold tracking-[-0.03em] text-[#0A0C0B] dark:text-white">
              {t('Por qué Avialo es superior a la gestión manual y a las plataformas con comisiones', 'Why Avialo beats manual processing and platforms charging unfair payment fees')}
            </h2>
            <p className="text-sm sm:text-base text-[rgba(10,12,11,0.75)] dark:text-white/75 leading-relaxed font-normal">
              {t(
                'Comprueba cómo ganamos en transparencia de costes (0% de comisión de software), simplicidad en conciliación de remesas y soporte técnico humano en España frente a otras alternativas.',
                'Examine how we triumph in zero cost markup transparency (0% software transaction fees), effortless SEPA reconciliation, and real Spanish human support compared to market alternatives.'
              )}
            </p>
          </div>

          <div className="block lg:hidden text-center text-xs font-semibold text-[rgba(10,12,11,0.65)] dark:text-white/65 mb-2 animate-pulse">
            {t('← Desliza horizontalmente para comparar todas las opciones →', '← Swipe horizontally to view full recurring billing comparison →')}
          </div>

          <div className="w-full overflow-x-auto rounded-[16px] border border-[#D2D2CE] dark:border-[#303131] bg-[#F2F2F0] dark:bg-[#131517] [scrollbar-width:thin]">
            <table className="w-full text-left border-collapse min-w-[940px]">
              <thead className="bg-[#FCFCFB] dark:bg-[#080a09] border-b border-[#D2D2CE] dark:border-[#303131]">
                <tr>
                  <th className="py-5 px-5 text-xs sm:text-sm font-bold text-[#0A0C0B] dark:text-white w-[22%]">
                    {t('Criterio de Evaluación', 'Evaluation Criterion')}
                  </th>
                  <th className="py-5 px-5 text-xs sm:text-sm font-bold text-[rgb(219,68,55)] dark:text-[rgb(255,107,91)] w-[25%] border-l border-[#D2D2CE] dark:border-[#303131] bg-[rgba(219,68,55,0.02)]">
                    <div className="flex items-center gap-2">
                      <XCircle className="w-4 h-4 shrink-0 text-[rgb(219,68,55)] dark:text-[rgb(255,107,91)]" />
                      <span>{t('Transferencias manuales y Excel', 'Manual Bank Transfers & Excel')}</span>
                    </div>
                  </th>
                  <th className="py-5 px-5 text-xs sm:text-sm font-bold text-[rgb(205,125,20)] dark:text-[rgb(255,175,70)] w-[27%] border-l border-[#D2D2CE] dark:border-[#303131] bg-[rgba(205,125,20,0.02)]">
                    <div className="flex items-center gap-2">
                      <Clock className="w-4 h-4 shrink-0 text-[rgb(205,125,20)] dark:text-[rgb(255,175,70)]" />
                      <span>{t('Herramientas de cobro y ERPs pesados', 'Complex ERPs & Subscription Apps')}</span>
                    </div>
                  </th>
                  <th className="py-5 px-5 text-xs sm:text-sm font-bold text-[rgb(43,115,38)] dark:text-[rgb(124,224,108)] w-[26%] border-l border-[#D2D2CE] dark:border-[#303131] bg-[rgba(52,138,46,0.04)]">
                    <div className="flex items-center gap-2">
                      <CheckCircle2 className="w-5 h-5 text-[rgb(52,138,46)] shrink-0" />
                      <span className="text-base font-bold">{t('Avialo Cobros Certificados', 'Avialo Certified Billing')}</span>
                    </div>
                  </th>
                </tr>
              </thead>
              <tbody className="divide-y divide-[#D2D2CE] dark:divide-[#303131] text-xs sm:text-sm">
                <tr>
                  <td className="py-4 px-5 font-bold text-[#0A0C0B] dark:text-white">
                    {t('Comisiones por transacción cobrada', 'Software Transaction Fee Cut')}
                  </td>
                  <td className="py-4 px-5 text-[rgba(10,12,11,0.75)] dark:text-white/80 border-l border-[#D2D2CE] dark:border-[#303131]">
                    {t('Sin comisiones, pero asumiendo decenas de horas mensuales perdidas persiguiendo transferencias bancarias retrasadas.', '0% fee, at the expense of dozens of wasted monthly hours manually chasing late bank account transfers.')}
                  </td>
                  <td className="py-4 px-5 text-[rgba(10,12,11,0.8)] dark:text-white/85 border-l border-[#D2D2CE] dark:border-[#303131] text-[rgb(200,50,40)] dark:text-[rgb(255,90,75)] font-semibold">
                    {t('Cobran una cuota mensual elevada Y ADEMÁS se quedan entre el 0,5% y el 2% del importe de cada factura que cobras.', 'Charges high monthly subscriptions AND takes an extra software tax between 0.5% and 2% on every dollar you process.')}
                  </td>
                  <td className="py-4 px-5 text-[#0A0C0B] dark:text-white border-l border-[#D2D2CE] dark:border-[#303131] font-bold text-[rgb(43,115,38)] dark:text-[rgb(124,224,108)] bg-[rgba(52,138,46,0.02)]">
                    {t('0% de comisión por parte de Avialo. Tarifa plana pura. Solo pagas la tasa en bruto del banco o pasarela sin sobrecoste alguno.', '0% software transaction fees. Pure flat pricing. You only pay clean direct bank/gateway processing tolls with zero markup.')}
                  </td>
                </tr>
                <tr>
                  <td className="py-4 px-5 font-bold text-[#0A0C0B] dark:text-white">
                    {t('Gestión de impagos y tarjetas caducadas', 'Unpaid Accounts & Expired Cards')}
                  </td>
                  <td className="py-4 px-5 text-[rgba(10,12,11,0.75)] dark:text-white/80 border-l border-[#D2D2CE] dark:border-[#303131]">
                    {t('Reclamaciones telefónicas incómodas al cliente y alta tasa de morosidad involuntaria al finalizar el trimestre.', 'Awkward phone recovery calls and high involuntary quarterly default rates due to human billing delay.')}
                  </td>
                  <td className="py-4 px-5 text-[rgba(10,12,11,0.8)] dark:text-white/85 border-l border-[#D2D2CE] dark:border-[#303131]">
                    {t('Reintentos rígidos que bloquean las tarjetas o exigen contratar costosos módulos externos de recuperación de cobros.', 'Rigid consecutive retry routines that get blocked by banks or require paying for third-party billing recovery add-on apps.')}
                  </td>
                  <td className="py-4 px-5 text-[#0A0C0B] dark:text-white border-l border-[#D2D2CE] dark:border-[#303131] font-semibold bg-[rgba(52,138,46,0.02)]">
                    {t('Motor inteligente Smart Dunning IA: reintentos en horas de máxima liquidez y correos amables que recuperan el 68% de cobros.', 'AI Smart Dunning engine: targeted liquidity window retries and polite automated notices rescuing 68% of failed collections.')}
                  </td>
                </tr>
                <tr>
                  <td className="py-4 px-5 font-bold text-[#0A0C0B] dark:text-white">
                    {t('Conexión con Normativa VeriFactu 2027', '2027 VeriFactu Tax Compliance')}
                  </td>
                  <td className="py-4 px-5 text-[rgba(10,12,11,0.75)] dark:text-white/80 border-l border-[#D2D2CE] dark:border-[#303131] font-medium text-[rgb(200,50,40)] dark:text-[rgb(255,90,75)]">
                    {t('Ilegal si se apoya en plantillas de Word o Excel. Multas tributarias de hasta 50.000 € por usuario en 2027.', 'Illegal if operating on spreadsheets. Exposes business owners to €50,000 regulatory fines in 2027.')}
                  </td>
                  <td className="py-4 px-5 text-[rgba(10,12,11,0.8)] dark:text-white/85 border-l border-[#D2D2CE] dark:border-[#303131]">
                    {t('Muchas plataformas de cobros extranjeras generan recibos que NO cumplen el formato legal ni envían hash SHA-256 a la AEAT.', 'Many generic subscription tools issue non-compliant receipts lacking required SHA-256 hash chains and Spanish tax formats.')}
                  </td>
                  <td className="py-4 px-5 text-[#0A0C0B] dark:text-white border-l border-[#D2D2CE] dark:border-[#303131] font-bold text-[rgb(43,115,38)] dark:text-[rgb(124,224,108)] bg-[rgba(52,138,46,0.02)]">
                    {t('Emisión SIF nativa en el segundo exacto del cobro. Insertado automático de código QR fiscal y Declaración SIF Garante 2027.', 'Instant native SIF execution at the precise second of payment. Automatic QR stamping & binding 2027 Tax Guaranteed statement.')}
                  </td>
                </tr>
                <tr>
                  <td className="py-4 px-5 font-bold text-[#0A0C0B] dark:text-white">
                    {t('Soporte Técnico en Incidencias de Cobro', 'Payment Support & Issue Resolution')}
                  </td>
                  <td className="py-4 px-5 text-[rgba(10,12,11,0.75)] dark:text-white/80 border-l border-[#D2D2CE] dark:border-[#303131]">
                    {t('Estás solo ante tu oficina bancaria para solucionar devoluciones o problemas de remesas.', 'You are completely on your own dealing with physical bank branch clerks to troubleshoot rejected SEPA runs.')}
                  </td>
                  <td className="py-4 px-5 text-[rgba(10,12,11,0.8)] dark:text-white/85 border-l border-[#D2D2CE] dark:border-[#303131]">
                    {t('Bots automatizados o tickets de soporte con respuestas genéricas que tardan días en solucionar un bloqueo de remesa.', 'Automated chatbots or slow ticket queues that delay resolving urgent subscription pipeline blockages by several days.')}
                  </td>
                  <td className="py-4 px-5 text-[#0A0C0B] dark:text-white border-l border-[#D2D2CE] dark:border-[#303131] font-semibold bg-[rgba(52,138,46,0.02)]">
                    {t('Soporte humano real por expertos financieros en España. Atención rápida en minutos/horas sin barreras automatizadas.', 'Real human technical and banking specialists located in Spain. Rapid personal assistance in hours without chatbot hurdles.')}
                  </td>
                </tr>
                <tr>
                  <td className="py-4 px-5 font-bold text-[#0A0C0B] dark:text-white">
                    {t('Conciliación y Remesas SEPA B2B', 'SEPA Mandates & Ledger Reconciliation')}
                  </td>
                  <td className="py-4 px-5 text-[rgba(10,12,11,0.75)] dark:text-white/80 border-l border-[#D2D2CE] dark:border-[#303131]">
                    {t('Punteo manual tedioso factura por factura comparando con extractos PDF del banco a final de mes.', 'Tedious manual checking line by line against bank account PDF statements at month end.')}
                  </td>
                  <td className="py-4 px-5 text-[rgba(10,12,11,0.8)] dark:text-white/85 border-l border-[#D2D2CE] dark:border-[#303131]">
                    {t('Menús abrumadores y falta de adaptación nativa para mandatos bancarios españoles SEPA Core y B2B.', 'Overcomplicated accounting screens lacking intuitive support for Spanish European SEPA Core & B2B mandate mandates.')}
                  </td>
                  <td className="py-4 px-5 text-[#0A0C0B] dark:text-white border-l border-[#D2D2CE] dark:border-[#303131] font-semibold bg-[rgba(52,138,46,0.02)]">
                    {t('Generación instantánea de remesas XML ISO 20022 conciliadas en 1 clic. Repositorio seguro de mandatos bancarios.', 'Instant automated creation of SEPA XML ISO 20022 bank runs reconciled in 1 click. Secure vault for all digital mandates.')}
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </section>

        {/* SECCIÓN 5: PREGUNTAS FRECUENTES SOBRE COBROS RECURRENTES & VERIFACTU 2027 */}
        <section className="space-y-8 pt-10 border-t border-[#D2D2CE] dark:border-[#303131] max-w-4xl mx-auto w-full">
          <div className="text-center sm:text-left space-y-2">
            <h2 className="text-2xl sm:text-4xl font-bold tracking-[-0.03em] text-[#0A0C0B] dark:text-white">
              {t('Preguntas Frecuentes sobre Cobros Recurrentes y SEPA', 'Frequently Asked Questions on Recurring Billing & SEPA')}
            </h2>
            <p className="text-sm sm:text-base text-[rgba(10,12,11,0.75)] dark:text-white/75 leading-relaxed font-normal">
              {t(
                'Resolvemos tus dudas sobre cómo Avialo automatiza tus suscripciones, elimina comisiones intermedias y asegura la legalidad fiscal.',
                'We clarify all your questions regarding subscription automation, zero software fee advantages, and 2027 tax compliance.'
              )}
            </p>
          </div>

          <div className="space-y-3.5">
            {faqs.map((faq) => {
              const isOpen = openFaq === faq.id;
              return (
                <div
                  key={faq.id}
                  className="rounded-[12px] border border-[#D2D2CE] dark:border-[#303131] bg-[#FCFCFB] dark:bg-[#080a09] overflow-hidden transition-all duration-200"
                >
                  <button
                    onClick={() => setOpenFaq(isOpen ? null : faq.id)}
                    className="w-full text-left py-4 sm:py-5 px-5 sm:px-6 flex items-center justify-between gap-4 font-bold text-sm sm:text-base text-[#0A0C0B] dark:text-white hover:text-[rgb(20,122,132)] dark:hover:text-[rgb(158,250,255)] transition-colors"
                  >
                    <span>{faq.q}</span>
                    <div className={`w-7 h-7 rounded-full flex items-center justify-center border border-[#D2D2CE] dark:border-[#303131] shrink-0 transition-transform duration-300 ${isOpen ? 'rotate-180 bg-[#F2F2F0] dark:bg-[#131517]' : ''}`}>
                      <ChevronDown className="w-4 h-4 text-[rgba(10,12,11,0.7)] dark:text-white/70" />
                    </div>
                  </button>
                  
                  <AnimatePresence>
                    {isOpen && (
                      <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: 'auto', opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.25 }}
                      >
                        <div className="px-5 sm:px-6 pb-5 pt-1 text-xs sm:text-sm text-[rgba(10,12,11,0.75)] dark:text-white/75 leading-relaxed font-normal border-t border-[#D2D2CE]/40 dark:border-[#303131]/40">
                          {faq.a}
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              );
            })}
          </div>
        </section>

        {/* SECCIÓN 6: CTA FINAL DE ALTA CONVERSIÓN */}
        <section className="pt-10 border-t border-[#D2D2CE] dark:border-[#303131]">
          <div className="rounded-[24px] bg-[#0A0C0B] dark:bg-[#131517] text-white p-8 sm:p-14 md:p-16 text-center space-y-6 shadow-2xl relative overflow-hidden border border-white/10">
            
            {/* Fondo decorativo subtle */}
            <div className="absolute top-0 right-0 w-[450px] h-[450px] bg-gradient-to-br from-[rgba(20,122,132,0.15)] via-transparent to-transparent rounded-full blur-3xl pointer-events-none" />
            <div className="absolute bottom-0 left-0 w-[450px] h-[450px] bg-gradient-to-tr from-[rgba(52,138,46,0.12)] via-transparent to-transparent rounded-full blur-3xl pointer-events-none" />

            <div className="max-w-2xl mx-auto space-y-4 relative z-10">
              <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold tracking-[-0.03em] text-white leading-tight">
                {t('Haz que tus cobros recurrentes funcionen como un reloj', 'Make your recurring collections run like clockwork')}
              </h2>
              <p className="text-base sm:text-lg text-white/80 leading-relaxed font-normal">
                {t(
                  'Empieza tu prueba gratuita hoy mismo. Cobra por Stripe, Redsys o remesas SEPA sin comisiones añadidas por transacción y con facturación legal VeriFactu 2027 100% automatizada.',
                  'Start your free trial today. Collect via Stripe, Redsys, or SEPA batches with 0% added software fees and automated 2027 VeriFactu tax compliance.'
                )}
              </p>
              
              <div className="pt-4 flex flex-col sm:flex-row items-center justify-center gap-4">
                <a
                  href={APP_URLS.register}
                  className="w-full sm:w-auto text-center px-8 py-4 rounded-[12px] bg-white text-[#0A0C0B] font-extrabold text-base shadow-lg hover:opacity-90 active:scale-[0.99] transition-all duration-200"
                >
                  {t('Empieza hoy — Gratis 14 días', 'Start Today — 14 Days Free')}
                </a>
                <a
                  href="/precios"
                  className="w-full sm:w-auto text-center px-7 py-4 rounded-[12px] border border-white/30 bg-transparent text-white font-bold text-base hover:bg-white/10 transition-all duration-200"
                >
                  {t('Ver todos los planes', 'View all pricing plans')}
                </a>
              </div>

              <div className="pt-6 flex flex-wrap items-center justify-center gap-4 sm:gap-8 text-xs text-white/70 font-mono">
                <span>⚡ {t('SIN TARJETA DE CRÉDITO', 'NO CREDIT CARD NEEDED')}</span>
                <span>🔒 {t('CERO COMISIONES POR COBRO', 'ZERO ADDED PAYMENT FEES')}</span>
                <span>🇪🇸 {t('SOPORTE HUMANO EN ESPAÑA', 'REAL HUMAN SPANISH SUPPORT')}</span>
              </div>
            </div>
          </div>
        </section>

      </main>

      <Footer />
    </div>
  );
};
