import { useEffect, useRef, useState } from 'react';
import { createPortal } from 'react-dom';
import { useLanguage } from '../context/LanguageContext';
import { motion, useScroll, useTransform, AnimatePresence } from 'framer-motion';
import { Navbar } from './Navbar';
import { ShinyText } from './ShinyText';
import { Button } from './Button';
import { APP_URLS } from '../config/urls';
import { Search, Plus, Sparkles, Bell, Sun, ArrowUpRight, CheckCircle2, ShieldCheck, X } from 'lucide-react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

type InvoiceStatus = 'Emitida' | 'Pendiente';
interface Invoice {
  id: string;
  client: string;
  date: string;
  amount: number;
  status: InvoiceStatus;
}

const CLIENT_POOL = [
  'Bright Studio', 'Norte Ingeniería', 'Estudio Creativo BCN', 'Delta Consulting', 'Vela Software', 'Orbit Media',
];

const INITIAL_INVOICES: Invoice[] = [
  { id: 'AV-2026-100', client: 'Studio UX Global', date: '29/07/2026', amount: 4500, status: 'Emitida' },
  { id: 'AV-2026-099', client: 'Nexa Labs Tech Ltd', date: '26/07/2026', amount: 1850, status: 'Emitida' },
  { id: 'AV-2026-098', client: 'Acme Design Studio', date: '24/07/2026', amount: 3200, status: 'Emitida' },
  { id: 'AV-2026-097', client: 'Bright Studio', date: '21/07/2026', amount: 2100, status: 'Pendiente' },
];

const QUARTERS: Record<string, { iva: number; soportado: number; resultado: number; ingresos: number; gastos: number }> = {
  T1: { iva: 1980.4, soportado: -320.5, resultado: 1659.9, ingresos: 12680, gastos: -1526 },
  T2: { iva: 2640.2, soportado: -540.1, resultado: 2100.1, ingresos: 16820, gastos: -2571 },
  T3: { iva: 3215.4, soportado: -682.1, resultado: 2533.3, ingresos: 19935, gastos: -3248 },
  T4: { iva: 2890.0, soportado: -455.6, resultado: 2434.4, ingresos: 18100, gastos: -2170 },
};

const MONTHLY = [
  { m: 'Feb', v: 3120 }, { m: 'Mar', v: 4581 }, { m: 'Abr', v: 3965 },
  { m: 'May', v: 5123 }, { m: 'Jun', v: 6012 }, { m: 'Jul', v: 1936 },
];

const TOP_CLIENTS = [
  { name: 'Studio UX Global', amount: 4500 },
  { name: 'Acme Design Studio', amount: 3200 },
  { name: 'Nexa Labs Tech Ltd', amount: 1850 },
];

const euro = (n: number) => `€${n.toLocaleString('es-ES', { minimumFractionDigits: 2, maximumFractionDigits: 2 })}`;

const VerifactuSeal = () => {
  const { t } = useLanguage();
  const [showTip, setShowTip] = useState(false);
  const [showModal, setShowModal] = useState(false);
  const [popoverStyle, setPopoverStyle] = useState<React.CSSProperties>({});
  const containerRef = useRef<HTMLDivElement>(null);

  const calculatePlacement = () => {
    if (containerRef.current) {
      const rect = containerRef.current.getBoundingClientRect();
      const centerY = rect.top + rect.height / 2;
      const popoverWidth = Math.min(384, window.innerWidth - 32);

      // Preferred right edge is to the left of seal (rect.left - 16)
      let rightEdge = rect.left - 16;
      // Clamp right edge so left edge (rightEdge - popoverWidth) is at least 16px from viewport left edge
      if (rightEdge - popoverWidth < 16) {
        rightEdge = 16 + popoverWidth;
      }

      setPopoverStyle({
        position: 'fixed',
        top: `${Math.max(120, Math.min(window.innerHeight - 200, centerY))}px`,
        left: `${rightEdge}px`,
        transform: 'translateX(-100%) translateY(-50%)',
        zIndex: 9999,
        maxWidth: 'calc(100vw - 32px)',
      });
    }
  };

  useEffect(() => {
    if (showTip) {
      calculatePlacement();
      window.addEventListener('resize', calculatePlacement);
      window.addEventListener('scroll', calculatePlacement);
      return () => {
        window.removeEventListener('resize', calculatePlacement);
        window.removeEventListener('scroll', calculatePlacement);
      };
    }
  }, [showTip]);

  const handleMouseEnter = () => {
    calculatePlacement();
    setShowTip(true);
  };

  return (
    <>
      <div
        ref={containerRef}
        className="relative shrink-0 z-40"
        onMouseEnter={handleMouseEnter}
        onMouseLeave={() => setShowTip(false)}
      >
        {/* Sello Circular Grande de Homologación AEAT & FACe */}
        <motion.button
          onClick={() => setShowModal(true)}
          whileHover={{ scale: 1.06 }}
          whileTap={{ scale: 0.95 }}
          aria-label={t('Software Certificado por la AEAT', 'Software Certified by AEAT')}
          className="relative w-24 h-24 sm:w-32 sm:h-32 rounded-full bg-[#FCFCFB]/95 dark:bg-[#131517]/95 border-2 border-emerald-500/50 dark:border-emerald-400/50 shadow-2xl shadow-emerald-500/20 backdrop-blur-md flex items-center justify-center cursor-pointer group transition-all duration-300"
        >
          {/* Anillo exterior con destellos */}
          <div className="absolute inset-0 rounded-full border border-emerald-500/30 dark:border-emerald-400/30 animate-pulse pointer-events-none" />

          {/* Texto Curvo Estático Fijo (Sin Girar) SVG */}
          <svg
            viewBox="0 0 100 100"
            className="absolute inset-0 w-full h-full p-1 pointer-events-none"
          >
            <defs>
              <path id="seal-circle-large" d="M 50,50 m -39,0 a 39,39 0 1,1 78,0 a 39,39 0 1,1 -78,0" />
            </defs>
            <circle cx={50} cy={50} r={44} fill="none" strokeWidth={1} strokeDasharray="3 3" className="stroke-emerald-600/50 dark:stroke-emerald-400/50" />
            <text className="fill-emerald-700 dark:fill-emerald-400 font-extrabold tracking-[0.14em]" style={{ fontSize: 7.6 }}>
              <textPath href="#seal-circle-large" startOffset="0%">
                CERTIFICADO AEAT • VERIFACTU • FACe •
              </textPath>
            </text>
          </svg>

          {/* Contenido Central del Sello con Logo Oficial AEAT más pequeño */}
          <div className="relative z-10 flex flex-col items-center justify-center text-center p-1">
            <div className="w-7 h-7 sm:w-9 sm:h-9 rounded-full bg-white flex items-center justify-center p-1 shadow-sm border border-emerald-500/30 group-hover:scale-110 transition-transform overflow-hidden">
              <img
                src="https://agenciatributaria.carm.es/documents/20632/70329/logo-agencia-tributaria.png/6a19f0b1-99f8-46c7-8d8c-16804daa7f7a?version=1.0&t=1775028705126"
                alt="Logo Agencia Tributaria AEAT"
                className="w-full h-full object-contain"
              />
            </div>
            <span className="text-[8px] sm:text-[9.5px] font-black uppercase tracking-tighter text-emerald-950 dark:text-emerald-200 leading-none mt-1">
              AEAT Nº 17
            </span>
          </div>

          {/* Badge flotante "CERTIFICADO" */}
          <span className="absolute -bottom-2 bg-emerald-600 text-white dark:bg-emerald-400 dark:text-black text-[9px] sm:text-[10px] font-black px-2 py-0.5 rounded-full shadow-md uppercase tracking-wider">
            {t('CERTIFICADO', 'CERTIFIED')}
          </span>
        </motion.button>

        {/* Popover Informativo Desplegable a la Izquierda en Portal (Totalmente Plano 2D sin inclinación) */}
        {typeof document !== 'undefined' &&
          createPortal(
            <AnimatePresence>
              {showTip && (
                <motion.div
                  initial={{ opacity: 0, x: 10, scale: 0.92 }}
                  animate={{ opacity: 1, x: 0, scale: 1 }}
                  exit={{ opacity: 0, x: 10, scale: 0.92 }}
                  transition={{ duration: 0.2 }}
                  style={popoverStyle}
                  className="w-80 sm:w-96 p-4 rounded-2xl bg-white dark:bg-[#181a1d] border-2 border-emerald-500/40 dark:border-emerald-400/40 shadow-2xl text-left space-y-3 pointer-events-auto"
                >
                  <div className="flex items-center justify-between border-b border-emerald-500/20 dark:border-emerald-400/20 pb-2.5">
                    <div className="flex items-center gap-2">
                      <div className="w-7 h-7 rounded-full bg-emerald-500/20 dark:bg-emerald-400/20 flex items-center justify-center shrink-0">
                        <ShieldCheck className="w-4 h-4 text-emerald-600 dark:text-emerald-400" />
                      </div>
                      <h4 className="text-xs sm:text-sm font-extrabold text-neutral-900 dark:text-white leading-tight">
                        {t('Software Certificado por la AEAT & FACe', 'Software Certified by AEAT & FACe')}
                      </h4>
                    </div>
                    <span className="text-[10px] font-bold px-2 py-0.5 rounded bg-emerald-100 dark:bg-emerald-950 text-emerald-800 dark:text-emerald-300">
                      {t('Homologado', 'Approved')}
                    </span>
                  </div>

                  <ul className="space-y-2 text-xs text-neutral-700 dark:text-neutral-300">
                    <li className="flex items-start gap-2">
                      <CheckCircle2 className="w-4 h-4 text-emerald-500 shrink-0 mt-0.5" />
                      <span>
                        <strong>{t('Acuerdo de Colaboración Social AEAT Nº 17:', 'AEAT Social Collaboration Agreement Nº 17:')}</strong>{' '}
                        {t(
                          'Autorizados oficialmente para la remisión telemática directa de registros de facturación, SII, SILICIE y VeriFactu.',
                          'Officially authorized for direct tax filing of invoices, SII, SILICIE, and VeriFactu.'
                        )}
                      </span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle2 className="w-4 h-4 text-emerald-500 shrink-0 mt-0.5" />
                      <span>
                        <strong>{t('Integrador Oficial FACe:', 'Official FACe Integrator:')}</strong>{' '}
                        {t(
                          'Conexión directa con el Punto General de Entrada de Facturas Electrónicas de la Administración Pública (B2G).',
                          'Direct integration with Spain Public Administration E-Invoicing portal (FACe B2G).'
                        )}
                      </span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle2 className="w-4 h-4 text-emerald-500 shrink-0 mt-0.5" />
                      <span>
                        <strong>{t('Normativa VeriFactu RD 1007/2023:', 'VeriFactu RD 1007/2023 Law:')}</strong>{' '}
                        {t(
                          'Registros inalterables encadenados con firma digital SHA-256 y código QR regulatorio.',
                          'Immutable records chained with SHA-256 digital signature and regulatory QR.'
                        )}
                      </span>
                    </li>
                  </ul>

                  <button
                    onClick={() => setShowModal(true)}
                    className="w-full mt-2 py-2 px-3 rounded-xl bg-emerald-600 hover:bg-emerald-700 text-white font-bold text-xs flex items-center justify-center gap-1.5 transition-colors cursor-pointer shadow-md"
                  >
                    <span>{t('Ver documento oficial y acuerdo completo →', 'View official agreement & document →')}</span>
                  </button>
                </motion.div>
              )}
            </AnimatePresence>,
            document.body
          )}
      </div>

      {/* Modal Popup Completo del Acuerdo AEAT Nº 17 & FACe */}
      <AnimatePresence>
        {showModal && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black/70 backdrop-blur-md z-50 flex items-center justify-center p-4"
            onClick={() => setShowModal(false)}
          >
            <motion.div
              initial={{ opacity: 0, scale: 0.95, y: 10 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: 10 }}
              transition={{ duration: 0.2 }}
              className="bg-[#FCFCFB] dark:bg-[#131517] border border-[#D2D2CE] dark:border-[#303131] p-6 sm:p-8 rounded-2xl max-w-xl w-full relative shadow-2xl space-y-5 text-left"
              onClick={(e) => e.stopPropagation()}
            >
              <button
                onClick={() => setShowModal(false)}
                className="absolute top-4 right-4 text-neutral-400 hover:text-black dark:hover:text-white p-2 rounded-full bg-neutral-200/50 dark:bg-neutral-800/50 transition-colors cursor-pointer"
              >
                <X className="w-5 h-5" />
              </button>

              <div className="flex items-center gap-3">
                <div className="w-12 h-12 rounded-full bg-emerald-500/20 dark:bg-emerald-400/20 flex items-center justify-center shrink-0">
                  <ShieldCheck className="w-7 h-7 text-emerald-600 dark:text-emerald-400" />
                </div>
                <div>
                  <h3 className="text-lg sm:text-xl font-extrabold text-neutral-900 dark:text-white leading-tight">
                    {t('Certificación Oficial AEAT & Integrador FACe', 'Official AEAT Certification & FACe Integrator')}
                  </h3>
                  <p className="text-xs text-emerald-700 dark:text-emerald-400 font-mono font-bold mt-0.5">
                    Acuerdo Social Nº 17 • Avialo Soluciones S.L. (C.I.F. B26802249)
                  </p>
                </div>
              </div>

              <div className="p-4 rounded-xl bg-emerald-500/10 dark:bg-emerald-400/10 border border-emerald-500/30 dark:border-emerald-400/30 space-y-2">
                <span className="text-[10px] font-black font-mono uppercase tracking-wider text-emerald-800 dark:text-emerald-300 block">
                  {t('TEXTO OFICIAL DEL ACUERDO CON LA AGENCIA TRIBUTARIA (Nº 17):', 'OFFICIAL SOCIAL COLLABORATION AGREEMENT (Nº 17):')}
                </span>
                <p className="text-xs font-serif leading-relaxed text-neutral-800 dark:text-neutral-200 italic">
                  "{t(
                    'ACUERDO DE COLABORACIÓN ENTRE LA AGENCIA ESTATAL DE ADMINISTRACIÓN TRIBUTARIA Y AVIALO SOLUCIONES, S.L., PARA EL SUMINISTRO ELECTRÓNICO DE REGISTROS DE FACTURACIÓN (SII), EL SUMINISTRO ELECTRÓNICO DE LOS ASIENTOS CONTABLES DE LOS ESTABLECIMIENTOS AFECTADOS POR LA NORMATIVA DE LOS IMPUESTOS ESPECIALES (SILICIE) Y EL ENVÍO DE LOS FICHEROS QUE CONTIENEN REGISTROS DE FACTURACIÓN GENERADOS POR SISTEMAS DE EMISIÓN DE FACTURAS (VERIFACTU), EN REPRESENTACIÓN DE TERCEROS.',
                    'COLLABORATION AGREEMENT BETWEEN THE SPANISH TAX AGENCY (AEAT) AND AVIALO SOLUCIONES, S.L., FOR THE ELECTRONIC PROVISION OF INVOICING RECORDS (SII), SPECIAL TAXES ACCOUNTING ENTRIES (SILICIE), AND TRANSMISSION OF INVOICING SYSTEM FILES (VERIFACTU), ON BEHALF OF THIRD PARTIES.'
                  )}"
                </p>
              </div>

              <div className="space-y-2 text-xs leading-relaxed text-neutral-700 dark:text-neutral-300">
                <p>
                  <strong>1. {t('Acuerdo de Colaboración Nº 17:', 'Social Collaboration Agreement Nº 17:')}</strong>{' '}
                  {t(
                    'Avialo Soluciones S.L. ha sido auditada y aprobada por la Agencia Tributaria (AEAT) para actuar como colaborador social en la remisión telemática de datos fiscales.',
                    'Avialo Soluciones S.L. has been audited and approved by the Spanish Tax Agency (AEAT) as a social collaborator for tax filing.'
                  )}
                </p>
                <p>
                  <strong>2. {t('Integrador Oficial FACe (B2G):', 'Official FACe Integrator (B2G):')}</strong>{' '}
                  {t(
                    'La plataforma permite la generación y envío directo de facturas electrónicas a la Administración Pública mediante el formato oficial FacturaE con firma digital.',
                    'The platform generates and directly sends official FacturaE e-invoices with digital signatures to public authorities.'
                  )}
                </p>
                <p>
                  <strong>3. {t('Garantía de Inalterabilidad VeriFactu (RD 1007/2023):', 'VeriFactu Immutability Guarantee (RD 1007/2023):')}</strong>{' '}
                  {t(
                    'Garantiza la integridad, trazabilidad, legibilidad e inalterabilidad de los registros conforme a la Ley 11/2021 de prevención contra el fraude fiscal.',
                    'Ensures complete record integrity, traceability, and immutability according to Spanish Anti-Fraud Law 11/2021.'
                  )}
                </p>
              </div>

              <div className="pt-2">
                <button
                  onClick={() => setShowModal(false)}
                  className="w-full bg-emerald-600 hover:bg-emerald-700 text-white font-bold text-sm py-3 rounded-xl transition-colors cursor-pointer shadow-lg text-center"
                >
                  {t('Entendido y cerrar', 'Understood & close')}
                </button>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export const Hero = () => {
  const { t } = useLanguage();
  const heroContainerRef = useRef<HTMLElement>(null);
  const dashboardRef = useRef<HTMLDivElement>(null);

  const [activeTab, setActiveTab] = useState<'resumen' | 'facturas' | 'informes'>('resumen');
  const [invoices, setInvoices] = useState<Invoice[]>(INITIAL_INVOICES);
  const [nextNumber, setNextNumber] = useState(101);
  const [facturadoMes, setFacturadoMes] = useState(24850);
  const [facturasTotal, setFacturasTotal] = useState(142);
  const [justAdded, setJustAdded] = useState<string | null>(null);
  const [filter, setFilter] = useState<'Todas' | InvoiceStatus>('Todas');
  const [quarter, setQuarter] = useState<'T1' | 'T2' | 'T3' | 'T4'>('T3');

  // Smooth 3D Perspective Scroll Animation adaptative for mobile and desktop
  const { scrollYProgress } = useScroll({
    target: dashboardRef,
    offset: ['start end', 'center center'],
  });

  const rotateX = useTransform(scrollYProgress, [0, 1], [16, 0]);
  const scale = useTransform(scrollYProgress, [0, 1], [0.92, 1]);
  const translateY = useTransform(scrollYProgress, [0, 1], [30, 0]);

  useEffect(() => {
    if (dashboardRef.current) {
      ScrollTrigger.refresh();
    }
  }, []);

  const handleNewInvoice = () => {
    const client = CLIENT_POOL[Math.floor(Math.random() * CLIENT_POOL.length)];
    const amount = Math.floor(900 + Math.random() * 2300);
    const id = `AV-2026-${nextNumber}`;
    const newInvoice: Invoice = { id, client, date: t('Hoy', 'Today'), amount, status: 'Emitida' };

    setInvoices((prev) => [newInvoice, ...prev].slice(0, 6));
    setNextNumber((n) => n + 1);
    setFacturasTotal((n) => n + 1);
    setFacturadoMes((n) => n + amount);
    setJustAdded(id);
    window.setTimeout(() => setJustAdded(null), 1500);
  };

  const filteredInvoices = filter === 'Todas' ? invoices : invoices.filter((inv) => inv.status === filter);
  const q = QUARTERS[quarter];
  const NAV_TABS: { key: 'resumen' | 'facturas' | 'informes' | 'inert'; label: string }[] = [
    { key: 'resumen', label: 'Resumen' },
    { key: 'facturas', label: 'Facturas' },
    { key: 'inert', label: 'Cobros' },
    { key: 'inert', label: 'Gastos' },
    { key: 'inert', label: 'Clientes' },
    { key: 'informes', label: 'Informes' },
  ];

  return (
    <section
      ref={heroContainerRef}
      className="relative w-full bg-[#FCFCFB] dark:bg-[#080a09] text-[#0A0C0B] dark:text-white overflow-hidden flex flex-col justify-start pt-20 sm:pt-28 pb-10 sm:pb-14 transition-colors duration-300"
    >
      {/* Dots Texture */}
      <div className="absolute top-0 left-0 w-full sm:w-[920px] h-[780px] bg-dot-texture animate-dot-pulse pointer-events-none opacity-25 z-0" />

      {/* Background Video */}
      <video
        autoPlay
        loop
        muted
        playsInline
        preload="none"
        className="absolute inset-0 w-full h-full object-cover z-0 opacity-20 sm:opacity-25 dark:opacity-65 pointer-events-none filter brightness-110 contrast-105 dark:brightness-120 dark:contrast-110 transition-opacity duration-300"
      >
        <source
          src="https://d8j0ntlcm91z4.cloudfront.net/user_38xzZboKViGWJOttwIXH07lWA1P/hf_20260328_105406_16f4600d-7a92-4292-b96e-b19156c7830a.mp4"
          type="video/mp4"
        />
      </video>

      {/* Overlay Gradient */}
      <div className="absolute inset-0 bg-gradient-to-b from-[#FCFCFB]/90 via-[#FCFCFB]/60 to-[#FCFCFB] dark:from-[#080a09]/70 dark:via-[#080a09]/40 dark:to-[#080a09] z-0 pointer-events-none transition-colors duration-300" />

      {/* Navbar Component (z-50) */}
      <Navbar />

      {/* Main Content Area */}
      <div className="relative z-10 w-full max-w-[1140px] mx-auto px-4 sm:px-6 flex flex-col items-center justify-start text-center pt-4 sm:pt-10">

        {/* Main Heading & Subtitle */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="flex flex-col items-center max-w-[960px] px-2 sm:px-0"
        >
          <h1 className="font-normal tracking-[-0.04em] text-5xl sm:text-6xl md:text-7xl xl:text-8xl leading-[1.05] sm:leading-[1.1] select-none text-center text-[#0A0C0B] dark:text-white">
            <span className="block">{t('Tu facturación', 'Invoicing made')}</span>
            <ShinyText text={t('simple.', 'effortless.')} speed={2.5} className="font-semibold block mt-1 sm:mt-0" />
          </h1>

          <p className="mt-5 sm:mt-6 text-lg sm:text-xl md:text-2xl font-normal leading-relaxed tracking-[-0.01em] text-[rgba(10,12,11,0.72)] dark:text-white/80 max-w-[860px] text-center px-2 sm:px-0">
            {t(
              'Facturación electrónica y cumplimiento fiscal blindado con VeriFactu 2026 y FACe. Simplicidad de uso, soporte humano real y sin límites de facturas.',
              'Smart e-invoicing and VeriFactu 2026 tax compliance for Spain. Built for speed, real human support, and unlimited invoices.'
            )}
          </p>
        </motion.div>

        {/* CTA Button */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="mt-5 sm:mt-8 w-full sm:w-auto px-4 sm:px-0"
        >
          <Button variant="primary" href={APP_URLS.register} className="w-full sm:w-auto text-base px-8 py-3.5 justify-center">
            {t('Pruébanos 14 días gratis', 'Start 14-day free trial')}
          </Button>
        </motion.div>

        {/* Extended 3D Scroll Dashboard Panel — Interfaz real de Avialo, interactiva (Modo Claro y Oscuro) */}
        <div className="w-full max-w-7xl mt-6 sm:mt-10 [perspective:1000px] relative z-20 px-1 sm:px-0">
          <motion.div
            ref={dashboardRef}
            style={{
              rotateX,
              scale,
              opacity: 1,
              y: translateY,
              transformStyle: 'preserve-3d',
              willChange: 'transform',
            }}
            className="relative rounded-[8px] sm:rounded-[12px] bg-[#F2F2F0] dark:bg-[#131517] border border-[#D2D2CE] dark:border-[#303131] shadow-2xl transition-colors duration-300 text-[#0A0C0B] dark:text-white min-h-[420px] sm:min-h-[600px] md:min-h-[680px] flex flex-col"
          >
            {/* Sello Circular Certificado AEAT pegado a la pantalla (Badge contenido en 3D, Hover Popover 2D plano mediante Portal) */}
            <div className="absolute top-0 right-0 -translate-y-1/2 translate-x-1/2 z-40 pointer-events-auto">
              <VerifactuSeal />
            </div>
            {/* Browser Chrome */}
            <div className="flex items-center justify-between px-4 sm:px-6 py-2.5 sm:py-3 border-b border-[#D2D2CE] dark:border-[#303131] shrink-0">
              <div className="flex items-center gap-1.5 sm:gap-2">
                <span className="w-2.5 sm:w-3 h-2.5 sm:h-3 rounded-full bg-red-500/80" />
                <span className="w-2.5 sm:w-3 h-2.5 sm:h-3 rounded-full bg-amber-500/80" />
                <span className="w-2.5 sm:w-3 h-2.5 sm:h-3 rounded-full bg-emerald-500/80" />
                <span className="ml-2 sm:ml-3 text-[10px] sm:text-xs font-mono text-neutral-500 dark:text-neutral-400 truncate max-w-[140px] sm:max-w-none">
                  app.avialo.es/{activeTab}
                </span>
              </div>
              <div className="flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-emerald-500/10 dark:bg-emerald-400/15 border border-emerald-500/30 text-emerald-700 dark:text-emerald-300 text-[10px] sm:text-xs font-bold">
                <ShieldCheck className="w-3.5 h-3.5 text-emerald-500" />
                <span>VeriFactu & FACe</span>
              </div>
            </div>

            {/* App Navbar (real, con pestañas pulsables) */}
            <div className="flex flex-col gap-2.5 sm:gap-3 px-4 sm:px-6 pt-3 sm:pt-4 pb-2.5 sm:pb-3 border-b border-[#D2D2CE] dark:border-[#303131] shrink-0">
              <div className="flex items-center justify-between gap-3">
                <div className="flex items-center gap-2 sm:gap-2.5 min-w-0">
                  <div className="w-6 h-6 sm:w-7 sm:h-7 rounded-full bg-gradient-to-br from-indigo-500 to-violet-600 flex items-center justify-center text-[10px] sm:text-[11px] font-bold text-white shrink-0">
                    AV
                  </div>
                  <span className="text-xs sm:text-sm font-semibold truncate">Avialo Soluciones SL</span>
                  <span className="hidden sm:inline-flex items-center px-2 py-0.5 rounded-full bg-[#F2F2F0] dark:bg-[#232326] border border-[#D2D2CE] dark:border-[#303131] text-[10px] text-neutral-500 dark:text-neutral-400 shrink-0">
                    Empresa
                  </span>
                </div>
                <div className="flex items-center gap-1.5 sm:gap-2.5 shrink-0">
                  <div className="hidden md:flex items-center gap-2 px-3 py-1.5 rounded-lg border border-[#D2D2CE] dark:border-[#303131] text-[11px] text-neutral-400 dark:text-neutral-500 w-40 lg:w-48">
                    <Search className="w-3.5 h-3.5 shrink-0" />
                    <span className="truncate">Buscar...</span>
                  </div>
                  <div className="hidden sm:flex items-center gap-1.5 px-2.5 py-1.5 rounded-lg bg-[#F2F2F0] dark:bg-[#232326] border border-[#D2D2CE] dark:border-[#303131] text-[11px] font-medium">
                    <Sparkles className="w-3.5 h-3.5 text-violet-500" />
                    <span>Asistente</span>
                  </div>
                  <Bell className="hidden sm:block w-4 h-4 text-neutral-400 dark:text-neutral-500" />
                  <Sun className="hidden sm:block w-4 h-4 text-neutral-400 dark:text-neutral-500" />
                  <div className="w-6 h-6 sm:w-7 sm:h-7 rounded-full bg-orange-500 flex items-center justify-center text-[10px] sm:text-[11px] font-bold text-white shrink-0">
                    RO
                  </div>
                </div>
              </div>
              <div className="flex items-center gap-4 sm:gap-6 text-[11px] sm:text-xs font-medium text-neutral-500 dark:text-neutral-400 overflow-x-auto no-scrollbar">
                {NAV_TABS.map(({ key, label }) => {
                  const isClickable = key !== 'inert';
                  const isActive = key === activeTab;
                  return (
                    <button
                      key={label}
                      disabled={!isClickable}
                      onClick={() => isClickable && setActiveTab(key as 'resumen' | 'facturas' | 'informes')}
                      className={`pb-2 shrink-0 whitespace-nowrap border-b-2 transition-colors duration-200 ${
                        isActive
                          ? 'text-[#0A0C0B] dark:text-white border-[#0A0C0B] dark:border-white'
                          : isClickable
                          ? 'border-transparent hover:text-[#0A0C0B] dark:hover:text-white cursor-pointer'
                          : 'border-transparent cursor-default opacity-70'
                      }`}
                    >
                      {label}
                    </button>
                  );
                })}
              </div>
            </div>

            {/* Mockup Dashboard Body — interactivo */}
            <div className="flex flex-col gap-3.5 sm:gap-5 px-4 sm:px-6 py-4 sm:py-6 flex-1 text-left overflow-hidden">
              <AnimatePresence mode="wait">
                {activeTab === 'resumen' && (
                  <motion.div
                    key="resumen"
                    initial={{ opacity: 0, y: 8 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -8 }}
                    transition={{ duration: 0.25 }}
                    className="flex flex-col gap-3.5 sm:gap-5 flex-1 min-h-0"
                  >
                    {/* Search + Nueva Factura */}
                    <div className="flex flex-col sm:flex-row gap-2.5 sm:gap-3 sm:items-center sm:justify-between shrink-0">
                      <div className="flex-1 max-w-sm flex items-center gap-2 px-3 py-2 rounded-lg border border-[#D2D2CE] dark:border-[#303131] bg-[#FCFCFB] dark:bg-[#1a1c1e] text-xs text-neutral-400 dark:text-neutral-500">
                        <Search className="w-3.5 h-3.5 shrink-0" />
                        <span className="truncate">Buscar facturas, clientes...</span>
                      </div>
                      <motion.button
                        whileTap={{ scale: 0.96 }}
                        onClick={handleNewInvoice}
                        className="inline-flex items-center gap-1.5 px-3.5 py-2 rounded-lg bg-[#0A0C0B] dark:bg-white text-white dark:text-black text-xs font-medium w-fit shrink-0 cursor-pointer hover:opacity-90 transition-opacity"
                      >
                        <Plus className="w-3.5 h-3.5" />
                        Nueva factura
                      </motion.button>
                    </div>

                    {/* Stat Cards */}
                    <div className="grid grid-cols-2 lg:grid-cols-4 gap-2.5 sm:gap-4 shrink-0">
                      {[
                        { label: 'Facturado este mes', value: euro(facturadoMes), sub: `${invoices.length} facturas` },
                        { label: 'Pendiente de cobro', value: '€5,218.50', sub: '3 facturas' },
                        { label: 'Facturas emitidas', value: String(facturasTotal), sub: 'histórico total' },
                        { label: 'Gastos del mes (base)', value: '€3,120.00', sub: 'IVA soportado aparte' },
                      ].map((stat) => (
                        <motion.div
                          key={stat.label}
                          layout
                          className="bg-[#FCFCFB] dark:bg-[#1a1c1e] border border-[#D2D2CE] dark:border-[#303131] rounded-lg sm:rounded-xl p-3 sm:p-4 shadow-sm transition-transform duration-200 hover:-translate-y-0.5 hover:shadow-md"
                        >
                          <p className="text-[10px] sm:text-xs text-neutral-500 dark:text-neutral-400 truncate">{stat.label}</p>
                          <p className="text-base sm:text-2xl font-bold mt-1 truncate">{stat.value}</p>
                          <p className="text-[10px] sm:text-xs text-neutral-400 dark:text-neutral-500 mt-0.5 truncate">{stat.sub}</p>
                        </motion.div>
                      ))}
                    </div>

                    {/* Facturas recientes */}
                    <div className="bg-[#FCFCFB] dark:bg-[#1a1c1e] border border-[#D2D2CE] dark:border-[#303131] rounded-lg sm:rounded-xl p-3.5 sm:p-5 flex-1 min-h-0 flex flex-col shadow-sm">
                      <div className="flex items-center justify-between mb-2.5 sm:mb-4 shrink-0">
                        <h4 className="text-xs sm:text-sm font-bold">Facturas recientes</h4>
                        <button
                          onClick={() => setActiveTab('facturas')}
                          className="text-[10px] sm:text-xs text-neutral-500 dark:text-neutral-400 flex items-center gap-1 cursor-pointer hover:text-[#0A0C0B] dark:hover:text-white transition-colors"
                        >
                          Ver todas <ArrowUpRight className="w-3 h-3" />
                        </button>
                      </div>
                      <div className="hidden sm:grid grid-cols-5 text-[10px] uppercase tracking-wide text-neutral-400 dark:text-neutral-500 pb-2 border-b border-[#E6E6E3] dark:border-[#303131] shrink-0">
                        <span>Factura</span>
                        <span>Cliente</span>
                        <span>Fecha</span>
                        <span className="text-right">Importe</span>
                        <span className="text-right">Estado</span>
                      </div>
                      <div className="flex flex-col divide-y divide-[#E6E6E3] dark:divide-[#303131] overflow-hidden">
                        <AnimatePresence initial={false}>
                          {invoices.slice(0, 4).map((inv) => (
                            <motion.div
                              key={inv.id}
                              layout
                              initial={{ opacity: 0, y: -12 }}
                              animate={{
                                opacity: 1,
                                y: 0,
                                backgroundColor: justAdded === inv.id ? 'rgba(52,138,46,0.08)' : 'rgba(0,0,0,0)',
                              }}
                              exit={{ opacity: 0, y: 12 }}
                              transition={{ duration: 0.35 }}
                              className="grid grid-cols-2 sm:grid-cols-5 items-center py-2 sm:py-2.5 text-[11px] sm:text-xs gap-1 rounded-md px-1.5 -mx-1.5"
                            >
                              <span className="font-semibold">{inv.id}</span>
                              <span className="text-neutral-600 dark:text-neutral-300 truncate">{inv.client}</span>
                              <span className="hidden sm:inline text-neutral-500 dark:text-neutral-400">{inv.date}</span>
                              <span className="text-right sm:text-right font-mono">{euro(inv.amount)}</span>
                              <span className="hidden sm:flex justify-end">
                                <StatusBadge status={inv.status} />
                              </span>
                            </motion.div>
                          ))}
                        </AnimatePresence>
                      </div>
                    </div>
                  </motion.div>
                )}

                {activeTab === 'facturas' && (
                  <motion.div
                    key="facturas"
                    initial={{ opacity: 0, y: 8 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -8 }}
                    transition={{ duration: 0.25 }}
                    className="flex flex-col gap-3.5 sm:gap-5 flex-1 min-h-0"
                  >
                    <div className="flex flex-col sm:flex-row gap-2.5 sm:gap-3 sm:items-center sm:justify-between shrink-0">
                      <h4 className="text-sm sm:text-base font-bold">Todas las facturas</h4>
                      <motion.button
                        whileTap={{ scale: 0.96 }}
                        onClick={handleNewInvoice}
                        className="inline-flex items-center gap-1.5 px-3.5 py-2 rounded-lg bg-[#0A0C0B] dark:bg-white text-white dark:text-black text-xs font-medium w-fit shrink-0 cursor-pointer hover:opacity-90 transition-opacity"
                      >
                        <Plus className="w-3.5 h-3.5" />
                        Nueva factura
                      </motion.button>
                    </div>

                    <div className="flex items-center gap-2 shrink-0">
                      {(['Todas', 'Emitida', 'Pendiente'] as const).map((f) => (
                        <button
                          key={f}
                          onClick={() => setFilter(f)}
                          className={`px-3 py-1.5 rounded-full text-[10px] sm:text-[11px] font-medium border transition-colors cursor-pointer ${
                            filter === f
                              ? 'bg-[#0A0C0B] dark:bg-white text-white dark:text-black border-[#0A0C0B] dark:border-white'
                              : 'border-[#D2D2CE] dark:border-[#303131] text-neutral-500 dark:text-neutral-400 hover:text-[#0A0C0B] dark:hover:text-white'
                          }`}
                        >
                          {f === 'Emitida' ? 'Emitidas' : f === 'Pendiente' ? 'Pendientes' : f}
                        </button>
                      ))}
                    </div>

                    <div className="bg-[#FCFCFB] dark:bg-[#1a1c1e] border border-[#D2D2CE] dark:border-[#303131] rounded-lg sm:rounded-xl p-3.5 sm:p-5 flex-1 min-h-0 flex flex-col shadow-sm">
                      <div className="hidden sm:grid grid-cols-5 text-[10px] uppercase tracking-wide text-neutral-400 dark:text-neutral-500 pb-2 border-b border-[#E6E6E3] dark:border-[#303131] shrink-0">
                        <span>Factura</span>
                        <span>Cliente</span>
                        <span>Fecha</span>
                        <span className="text-right">Importe</span>
                        <span className="text-right">Estado</span>
                      </div>
                      <div className="flex flex-col divide-y divide-[#E6E6E3] dark:divide-[#303131]">
                        <AnimatePresence initial={false}>
                          {filteredInvoices.length === 0 && (
                            <motion.p
                              initial={{ opacity: 0 }}
                              animate={{ opacity: 1 }}
                              className="text-xs text-neutral-400 py-6 text-center"
                            >
                              {t('Sin facturas en este filtro', 'No invoices in this filter')}
                            </motion.p>
                          )}
                          {filteredInvoices.map((inv) => (
                            <motion.div
                              key={inv.id}
                              layout
                              initial={{ opacity: 0, y: -12 }}
                              animate={{ opacity: 1, y: 0 }}
                              exit={{ opacity: 0, y: 12 }}
                              transition={{ duration: 0.3 }}
                              className="grid grid-cols-2 sm:grid-cols-5 items-center py-2 sm:py-2.5 text-[11px] sm:text-xs gap-1"
                            >
                              <span className="font-semibold">{inv.id}</span>
                              <span className="text-neutral-600 dark:text-neutral-300 truncate">{inv.client}</span>
                              <span className="hidden sm:inline text-neutral-500 dark:text-neutral-400">{inv.date}</span>
                              <span className="text-right sm:text-right font-mono">{euro(inv.amount)}</span>
                              <span className="hidden sm:flex justify-end">
                                <StatusBadge status={inv.status} />
                              </span>
                            </motion.div>
                          ))}
                        </AnimatePresence>
                      </div>
                    </div>
                  </motion.div>
                )}

                {activeTab === 'informes' && (
                  <motion.div
                    key="informes"
                    initial={{ opacity: 0, y: 8 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -8 }}
                    transition={{ duration: 0.25 }}
                    className="flex flex-col gap-3.5 sm:gap-5 flex-1 min-h-0"
                  >
                    <div className="flex items-center justify-between shrink-0">
                      <h4 className="text-sm sm:text-base font-bold">Informes</h4>
                      <div className="flex items-center gap-1.5">
                        {(['T1', 'T2', 'T3', 'T4'] as const).map((qk) => (
                          <button
                            key={qk}
                            onClick={() => setQuarter(qk)}
                            className={`px-2.5 py-1 rounded-full text-[10px] sm:text-[11px] font-medium border transition-colors cursor-pointer ${
                              quarter === qk
                                ? 'bg-[#0A0C0B] dark:bg-white text-white dark:text-black border-[#0A0C0B] dark:border-white'
                                : 'border-[#D2D2CE] dark:border-[#303131] text-neutral-500 dark:text-neutral-400 hover:text-[#0A0C0B] dark:hover:text-white'
                            }`}
                          >
                            {qk}
                          </button>
                        ))}
                      </div>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4 flex-1 min-h-0">
                      <div className="bg-[#FCFCFB] dark:bg-[#1a1c1e] border border-[#D2D2CE] dark:border-[#303131] rounded-lg sm:rounded-xl p-3.5 sm:p-4 shadow-sm">
                        <p className="text-[11px] sm:text-xs font-bold mb-2">Resumen fiscal — {quarter} 2026</p>
                        <AnimatePresence mode="wait">
                          <motion.div
                            key={quarter}
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            exit={{ opacity: 0 }}
                            transition={{ duration: 0.2 }}
                          >
                            <div className="flex justify-between text-[11px] sm:text-xs py-1">
                              <span className="text-neutral-500 dark:text-neutral-400">IVA repercutido</span>
                              <span className="font-semibold">{euro(q.iva)}</span>
                            </div>
                            <div className="flex justify-between text-[11px] sm:text-xs py-1">
                              <span className="text-neutral-500 dark:text-neutral-400">IVA soportado</span>
                              <span className="font-semibold">{euro(q.soportado)}</span>
                            </div>
                            <div className="flex justify-between items-center pt-2 mt-1 border-t border-[#E6E6E3] dark:border-[#303131]">
                              <span className="text-[11px] sm:text-xs font-bold">Resultado Modelo 303</span>
                              <span className="text-sm sm:text-base font-bold text-[rgb(154,112,12)] dark:text-[rgb(212,177,68)]">
                                {euro(q.resultado)}
                              </span>
                            </div>
                          </motion.div>
                        </AnimatePresence>
                      </div>

                      <div className="bg-[#FCFCFB] dark:bg-[#1a1c1e] border border-[#D2D2CE] dark:border-[#303131] rounded-lg sm:rounded-xl p-3.5 sm:p-4 shadow-sm">
                        <p className="text-[11px] sm:text-xs font-bold mb-2">Resultado del trimestre</p>
                        <AnimatePresence mode="wait">
                          <motion.div
                            key={quarter}
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            exit={{ opacity: 0 }}
                            transition={{ duration: 0.2 }}
                          >
                            <div className="flex justify-between text-[11px] sm:text-xs py-1">
                              <span className="text-neutral-500 dark:text-neutral-400">Ingresos (base)</span>
                              <span className="font-semibold">{euro(q.ingresos)}</span>
                            </div>
                            <div className="flex justify-between text-[11px] sm:text-xs py-1">
                              <span className="text-neutral-500 dark:text-neutral-400">Gastos (base)</span>
                              <span className="font-semibold">{euro(q.gastos)}</span>
                            </div>
                            <div className="flex justify-between items-center pt-2 mt-1 border-t border-[#E6E6E3] dark:border-[#303131]">
                              <span className="text-[11px] sm:text-xs font-bold">EBITDA</span>
                              <span className="text-sm sm:text-base font-bold text-[rgb(52,138,46)] dark:text-emerald-400">
                                {euro(q.ingresos + q.gastos)}
                              </span>
                            </div>
                          </motion.div>
                        </AnimatePresence>
                      </div>

                      <div className="bg-[#FCFCFB] dark:bg-[#1a1c1e] border border-[#D2D2CE] dark:border-[#303131] rounded-lg sm:rounded-xl p-3.5 sm:p-4 shadow-sm flex flex-col">
                        <p className="text-[11px] sm:text-xs font-bold mb-2">Facturación mensual (base)</p>
                        <div className="flex items-stretch gap-1.5 sm:gap-2 h-14 sm:h-16">
                          {MONTHLY.map(({ m, v }, i) => (
                            <div key={m} className="flex-1 h-full flex flex-col justify-end">
                              <div
                                style={{ height: `${(v / 6012) * 100}%` }}
                                className={`w-full rounded-t transition-all duration-500 ${
                                  i === MONTHLY.length - 1 ? 'bg-indigo-500/40' : 'bg-indigo-500'
                                }`}
                              />
                            </div>
                          ))}
                        </div>
                        <div className="flex gap-1.5 sm:gap-2 mt-1">
                          {MONTHLY.map(({ m }) => (
                            <span key={m} className="flex-1 text-center text-[8px] sm:text-[9px] text-neutral-400">
                              {m}
                            </span>
                          ))}
                        </div>
                      </div>

                      <div className="bg-[#FCFCFB] dark:bg-[#1a1c1e] border border-[#D2D2CE] dark:border-[#303131] rounded-lg sm:rounded-xl p-3.5 sm:p-4 shadow-sm">
                        <p className="text-[11px] sm:text-xs font-bold mb-2.5">Top clientes (histórico)</p>
                        <div className="flex flex-col gap-2">
                          {TOP_CLIENTS.map((c) => (
                            <div key={c.name}>
                              <div className="flex justify-between text-[10px] sm:text-[11px] mb-1">
                                <span className="truncate pr-2">{c.name}</span>
                                <span className="font-semibold shrink-0">{euro(c.amount)}</span>
                              </div>
                              <div className="h-1.5 rounded-full bg-[#E6E6E3] dark:bg-[#303131] overflow-hidden">
                                <div
                                  style={{ width: `${(c.amount / TOP_CLIENTS[0].amount) * 100}%` }}
                                  className="h-full rounded-full bg-[#0A0C0B] dark:bg-white transition-all duration-500"
                                />
                              </div>
                            </div>
                          ))}
                        </div>
                      </div>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>

            {/* Bottom Overlay Hint */}
            <div className="absolute inset-x-0 bottom-0 h-16 bg-gradient-to-t from-[#F2F2F0] dark:from-[#131517] via-[#F2F2F0]/80 dark:via-[#131517]/80 to-transparent flex items-end justify-center pb-3 sm:pb-5 pointer-events-none transition-colors duration-300">
              <span className="text-[10px] sm:text-xs text-[#0A0C0B] dark:text-neutral-300 font-medium bg-[#F2F2F0] dark:bg-[#080a09] px-3 sm:px-4 py-1 sm:py-1.5 rounded-full border border-[#D2D2CE] dark:border-[#303131] shadow-lg text-center mx-2 truncate max-w-[90%]">
                {t('Interfaz real de Avialo · Pruébala tú mismo', 'Real Avialo interface · Try it yourself')}
              </span>
            </div>
          </motion.div>
        </div>

      </div>
    </section>
  );
};

const StatusBadge = ({ status }: { status: InvoiceStatus }) => {
  if (status === 'Pendiente') {
    return (
      <span className="inline-flex items-center gap-1 text-[10px] font-medium text-[rgb(154,112,12)] dark:text-[rgb(212,177,68)] bg-amber-500/10 px-2 py-0.5 rounded-full border border-amber-500/20">
        Pendiente
      </span>
    );
  }
  return (
    <span className="inline-flex items-center gap-1 text-[10px] font-medium text-[rgb(52,138,46)] dark:text-emerald-400 bg-emerald-500/10 px-2 py-0.5 rounded-full border border-emerald-500/20">
      <CheckCircle2 className="w-3 h-3" />
      Emitida
    </span>
  );
};
