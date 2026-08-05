import { useState, useRef, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import {
  ChevronDown,
  ArrowRight,
  FileText,
  CreditCard,
  Building2,
  Sparkles,
  Zap,
  ShieldCheck,
  PieChart,
  Sun,
  Moon,
  Tag,
  Code2,
  Landmark,
  Cpu,
} from 'lucide-react';
import { Button } from './Button';
import { useTheme } from '../context/ThemeContext';
import { useLanguage } from '../context/LanguageContext';
import { APP_URLS } from '../config/urls';

export const Navbar = () => {
  const { theme, toggleTheme } = useTheme();
  const { t } = useLanguage();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);
  const leaveTimeoutRef = useRef<ReturnType<typeof setTimeout> | null>(null);

  useEffect(() => {
    if (mobileMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
    };
  }, [mobileMenuOpen]);

  const handleMouseEnter = (name: string) => {
    if (leaveTimeoutRef.current) {
      clearTimeout(leaveTimeoutRef.current);
      leaveTimeoutRef.current = null;
    }
    setActiveDropdown(name);
  };

  const handleMouseLeave = () => {
    leaveTimeoutRef.current = setTimeout(() => {
      setActiveDropdown(null);
    }, 200);
  };

  const megaMenus: Record<
    string,
    {
      title: string;
      items: { title: string; desc: string; icon: any; badge?: string; href?: string }[];
      featured?: { title: string; desc: string; cta: string; href?: string };
    }
  > = {
    [t('Producto', 'Product')]: {
      title: t('Soluciones de Facturación & Cobros', 'Invoicing & Payment Solutions'),
      items: [
        {
          title: t('Facturación VeriFactu', 'VeriFactu Invoicing'),
          desc: t('100% adaptado a la normativa fiscal española.', '100% compliant with Spanish tax legislation.'),
          icon: FileText,
          badge: t('Ley 2027', 'Act 2027'),
          href: '/verifactu',
        },
        {
          title: t('Cobros Recurrentes', 'Recurring Billing'),
          desc: t('Automatiza suscripciones y pagos con reintentos.', 'Automate subscriptions & recurring payments.'),
          icon: CreditCard,
          badge: t('Popular', 'Popular'),
          href: '/cobros-recurrentes',
        },
        {
          title: t('Escáner OCR Gastos', 'OCR Expense Scanner'),
          desc: t('Sube tickets y extrae impuestos con IA.', 'Scan receipts & extract tax details with AI.'),
          icon: PieChart,
          href: '/control-gastos',
        },
        {
          title: t('Portal de Clientes', 'Client Portal'),
          desc: t('Descarga facturas y paga en 1 clic.', 'Download invoices & pay in one click.'),
          icon: Building2,
          href: '/portal-clientes',
        },
      ],
      featured: {
        title: t('Prueba la Facturación en Vivo', 'Try Live Invoicing'),
        desc: t('Genera tu primera factura electrónica en 30 segundos.', 'Generate your first e-invoice in 30 seconds.'),
        cta: t('Probar Simulador', 'Try Simulator'),
        href: '/verifactu',
      },
    },
    [t('Integraciones', 'Integrations')]: {
      title: t('Integraciones y Conectividad', 'Integrations & Connectivity'),
      items: [
        {
          title: t('API REST & Webhooks', 'REST API & Webhooks'),
          desc: t('Emisión VeriFactu por HTTP JSON y eventos en tiempo real protegidos con HMAC.', 'VeriFactu e-invoicing via JSON & real-time HMAC-secured events.'),
          icon: Code2,
          badge: t('API REST', 'REST API'),
          href: '/integraciones/api',
        },
        {
          title: t('Pasarelas de Pago & Bancos', 'Payment Gateways & Banks'),
          desc: t('Conecta Stripe, Redsys, PayPal y cuentas bancarias con 0% comisión Avialo.', 'Connect Stripe, Redsys, PayPal & banks with 0% Avialo fees.'),
          icon: Landmark,
          badge: t('0% Comisiones', '0% Fees'),
          href: '/integraciones/pagos',
        },
      ],
      featured: {
        title: t('Conectividad Universal', 'Universal Connectivity'),
        desc: t('Compatible con cualquier stack tecnológico a través de peticiones HTTP estándar.', 'Compatible with any tech stack via standard HTTP JSON requests.'),
        cta: t('Explorar Endpoints API', 'Explore API Endpoints'),
        href: '/integraciones/api',
      },
    },
    [t('Soluciones', 'Solutions')]: {
      title: t('Diseñado para tu Tipo de Empresa', 'Tailored for Your Business'),
      items: [
        {
          title: t('Autónomos y Freelancers', 'Freelancers & Solo Pros'),
          desc: t('Control de IRPF, IVA trimestral y libros oficiales.', 'Manage income tax, quarterly VAT & official books.'),
          icon: ShieldCheck,
          href: '/soluciones/autonomos',
        },
        {
          title: t('Agencias y Estudios', 'Agencies & Studios'),
          desc: t('Gestión de proyectos y presupuestos avanzados.', 'Advanced quotes & client project tracking.'),
          icon: Sparkles,
          href: '/soluciones/agencias',
        },
        {
          title: t('Startups SaaS & E-commerce', 'SaaS & E-commerce Startups'),
          desc: t('Métricas de MRR, Stripe y pasarelas digitales.', 'MRR metrics, Stripe & online payment gateways.'),
          icon: Zap,
          href: '/soluciones/startups',
        },
        {
          title: t('Gestorías y Asesores', 'Accountants & Agencies'),
          desc: t('Acceso para tu asesor con descarga en Excel/PDF.', 'Free accountant access with Excel/PDF export.'),
          icon: Building2,
          href: '/soluciones/gestorias',
        },
        {
          title: t('Transformación Digital & Desarrollo a Medida', 'Digital Transformation & Custom Dev'),
          desc: t('Desarrollo de software a medida, automatizaciones e integración para escalar tu negocio.', 'Custom software engineering, legacy integration & automation to scale your enterprise.'),
          icon: Cpu,
          badge: t('A Medida', 'Custom'),
          href: '/soluciones/transformacion-digital',
        },
      ],
      featured: {
        title: t('Transformación Digital & Software a Medida', 'Digital Transformation & Custom Software'),
        desc: t('Impulsa y escala tu empresa con desarrollo propietario, arquitectura cloud e integración de sistemas.', 'Scale your business with enterprise software engineering, cloud architecture, and custom system integration.'),
        cta: t('Ver Proyectos a Medida', 'Explore Custom Projects'),
        href: '/soluciones/transformacion-digital',
      },
    },
  };

  return (
    <>
      {/* Background dimming backdrop */}
      <AnimatePresence>
        {activeDropdown && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            className="fixed inset-0 bg-black/20 dark:bg-black/60 backdrop-blur-sm z-40 pointer-events-none"
          />
        )}
      </AnimatePresence>

      {/* Header Completo a Ancho Total */}
      <header className="fixed top-0 left-0 right-0 z-50 w-full bg-[#FCFCFB]/90 dark:bg-[#080a09]/90 backdrop-blur-2xl border-b border-[#D2D2CE] dark:border-[#303131] transition-colors duration-300 shadow-sm">
        <div className="max-w-[1280px] mx-auto px-6 sm:px-10 py-3.5 flex items-center justify-between">
          
          {/* Logo + Brand Name */}
          <a href="/" className="flex items-center gap-3 group shrink-0">
            <img
              src="/favicon.svg?v=2"
              alt="Avialo Logo"
              className="h-7 md:h-8 w-auto transition-transform duration-300 group-hover:scale-105"
              onError={(e) => {
                (e.currentTarget as HTMLElement).style.display = 'none';
              }}
            />
            <span className="text-[#0A0C0B] dark:text-white font-bold text-xl tracking-tight">
              Avialo
            </span>
          </a>

          {/* Desktop Center Nav Links */}
          <nav
            className="hidden lg:flex items-center space-x-1 relative"
            onMouseLeave={handleMouseLeave}
          >
            {Object.keys(megaMenus).map((key) => (
              <button
                key={key}
                onMouseEnter={() => handleMouseEnter(key)}
                className={`flex items-center gap-1.5 px-4 py-2 text-sm font-medium transition-colors rounded-full hover:bg-[#E6E6E3] dark:hover:bg-[#232326] ${
                  activeDropdown === key
                    ? 'text-[#0A0C0B] dark:text-white bg-[#E6E6E3] dark:bg-[#232326]'
                    : 'text-[rgba(10,12,11,0.72)] dark:text-white/80 hover:text-[#0A0C0B] dark:hover:text-white'
                }`}
              >
                <span>{key}</span>
                <ChevronDown
                  className={`w-3.5 h-3.5 text-[rgba(10,12,11,0.6)] dark:text-white/60 transition-transform duration-200 ${
                    activeDropdown === key ? 'rotate-180 text-[#0A0C0B] dark:text-white' : ''
                  }`}
                />
              </button>
            ))}

            <a
              href="/precios"
              onMouseEnter={() => setActiveDropdown(null)}
              className="px-4 py-2 text-sm text-[rgba(10,12,11,0.72)] dark:text-white/80 hover:text-[#0A0C0B] dark:hover:text-white font-medium transition-colors rounded-full hover:bg-[#E6E6E3] dark:hover:bg-[#232326]"
            >
              {t('Precios', 'Pricing')}
            </a>

            {/* Central Fixed Mega Dropdown Panel (Jamás se mueve horizontalmente) */}
            <AnimatePresence mode="wait">
              {activeDropdown && megaMenus[activeDropdown] && (
                <motion.div
                  key={activeDropdown}
                  initial={{ opacity: 0, y: 10, scale: 0.98 }}
                  animate={{ opacity: 1, y: 0, scale: 1 }}
                  exit={{ opacity: 0, y: 6, scale: 0.98 }}
                  transition={{ duration: 0.18, ease: 'easeOut' }}
                  onMouseEnter={() => handleMouseEnter(activeDropdown)}
                  onMouseLeave={handleMouseLeave}
                  className="absolute top-full mt-3 left-1/2 -translate-x-1/2 w-[720px] max-w-[calc(100vw-48px)] bg-[#F2F2F0] dark:bg-[#131517] border border-[#D2D2CE] dark:border-[#303131] rounded-3xl p-6 shadow-2xl text-sm z-50 grid grid-cols-12 gap-5 overflow-hidden"
                >
                  {/* Items Grid */}
                  <div className={`${megaMenus[activeDropdown].featured ? 'col-span-8' : 'col-span-12'} grid ${megaMenus[activeDropdown].items.length <= 2 ? 'grid-cols-1' : 'grid-cols-2'} gap-3.5`}>
                    {megaMenus[activeDropdown].items.map((item) => {
                      const Icon = item.icon;
                      return (
                        <a
                          key={item.title}
                          href={item.href || "#features"}
                          className="group p-3 rounded-2xl bg-[#FCFCFB] dark:bg-[#080a09] border border-[#D2D2CE] dark:border-[#303131] hover:border-[#0A0C0B]/30 dark:hover:border-white/30 hover:bg-[#E6E6E3]/60 dark:hover:bg-[#232326]/60 transition-all flex items-start gap-3"
                        >
                          <div className="p-2 rounded-xl bg-[#E6E6E3] dark:bg-[#232326] text-[#0A0C0B] dark:text-white group-hover:scale-105 transition-transform shrink-0 mt-0.5">
                            <Icon className="w-4 h-4" />
                          </div>
                          <div className="flex-1 min-w-0">
                            <div className="flex items-center justify-between gap-1.5">
                              <span className="text-[#0A0C0B] dark:text-white font-semibold text-xs sm:text-sm truncate group-hover:text-[rgb(20,122,132)] dark:group-hover:text-[rgb(158,250,255)] transition-colors">
                                {item.title}
                              </span>
                              {item.badge && (
                                <span className="text-[9px] font-bold text-white bg-[#0A0C0B] dark:bg-white dark:text-black px-1.5 py-0.5 rounded uppercase font-mono shrink-0">
                                  {item.badge}
                                </span>
                              )}
                            </div>
                            <p className="text-[11px] text-[rgba(10,12,11,0.72)] dark:text-white/70 mt-0.5 leading-snug line-clamp-2">
                              {item.desc}
                            </p>
                          </div>
                        </a>
                      );
                    })}
                  </div>

                  {/* Featured Sidebar Card */}
                  {megaMenus[activeDropdown].featured && (
                    <div className="col-span-4 bg-[#FCFCFB] dark:bg-[#080a09] border border-[#D2D2CE] dark:border-[#303131] rounded-2xl p-5 flex flex-col justify-between">
                      <div>
                        <div className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full bg-[#0A0C0B]/10 dark:bg-white/10 text-[#0A0C0B] dark:text-white text-[10px] font-bold mb-2.5">
                          <Sparkles className="w-3 h-3" />
                          {t('Destacado', 'Featured')}
                        </div>
                        <h4 className="text-[#0A0C0B] dark:text-white font-bold text-xs sm:text-sm mb-1.5 leading-snug">
                          {megaMenus[activeDropdown].featured.title}
                        </h4>
                        <p className="text-[11px] text-[rgba(10,12,11,0.72)] dark:text-white/70 leading-relaxed">
                          {megaMenus[activeDropdown].featured.desc}
                        </p>
                      </div>
                      <a
                        href={megaMenus[activeDropdown].featured.href || "#features"}
                        className="mt-4 flex items-center justify-center gap-1.5 bg-[#0A0C0B] dark:bg-white text-white dark:text-black text-xs font-bold py-2 rounded-xl hover:bg-[#0A0C0B]/80 dark:hover:bg-white/90 transition-colors"
                      >
                        <span>{megaMenus[activeDropdown].featured.cta}</span>
                        <ArrowRight className="w-3.5 h-3.5" />
                      </a>
                    </div>
                  )}
                </motion.div>
              )}
            </AnimatePresence>
          </nav>

          {/* Desktop Action Buttons + Theme Toggle */}
          <div className="hidden lg:flex items-center gap-3 shrink-0">
            {/* Theme Toggle Button Minimalista & Elegante */}
            <button
              onClick={toggleTheme}
              className="p-2 rounded-full text-[#0A0C0B]/70 hover:text-[#0A0C0B] dark:text-white/70 dark:hover:text-white hover:bg-[#E6E6E3]/60 dark:hover:bg-[#232326]/60 transition-all select-none cursor-pointer"
              aria-label="Cambiar tema modo claro u oscuro"
              title={theme === 'dark' ? 'Modo Claro' : 'Modo Oscuro'}
            >
              {theme === 'dark' ? (
                <Sun className="w-[18px] h-[18px] stroke-[1.75] text-amber-400/90 transition-transform duration-300 hover:rotate-45" />
              ) : (
                <Moon className="w-[18px] h-[18px] stroke-[1.75] text-neutral-700/90 dark:text-neutral-300 transition-transform duration-300 hover:-rotate-12" />
              )}
            </button>

            <a
              href={APP_URLS.login}
              className="text-sm text-[rgba(10,12,11,0.72)] dark:text-white/80 hover:text-[#0A0C0B] dark:hover:text-white font-medium px-3 py-2 transition-colors"
            >
              {t('Iniciar Sesión', 'Log In')}
            </a>
            <Button variant="primary" href={APP_URLS.register}>
              {t('Prueba 14 días gratis', 'Start 14-Day Free Trial')}
            </Button>
          </div>

          {/* Mobile Actions */}
          <div className="flex items-center gap-2 lg:hidden">
            <button
              onClick={toggleTheme}
              className="p-2 rounded-full text-[#0A0C0B]/80 dark:text-white/80 transition-all"
              aria-label="Cambiar tema"
            >
              {theme === 'dark' ? (
                <Sun className="w-5 h-5 text-amber-400" />
              ) : (
                <Moon className="w-5 h-5 text-neutral-700 dark:text-neutral-300" />
              )}
            </button>

            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 rounded-full bg-[#E6E6E3] dark:bg-[#232326] border border-[#D2D2CE] dark:border-[#303131] text-[#0A0C0B] dark:text-white"
              aria-label="Toggle Menu"
            >
              <div className="w-5 h-4 flex flex-col justify-between items-center relative">
                <motion.span
                  animate={mobileMenuOpen ? { rotate: 45, y: 7 } : { rotate: 0, y: 0 }}
                  className="w-5 h-0.5 bg-current rounded-full origin-center transition-transform"
                />
                <motion.span
                  animate={mobileMenuOpen ? { opacity: 0 } : { opacity: 1 }}
                  className="w-5 h-0.5 bg-current rounded-full transition-opacity"
                />
                <motion.span
                  animate={mobileMenuOpen ? { rotate: -45, y: -9 } : { rotate: 0, y: 0 }}
                  className="w-5 h-0.5 bg-current rounded-full origin-center transition-transform"
                />
              </div>
            </button>
          </div>

        </div>

        {/* Mobile Animated Dropdown Drawer - Optimizado con 100dvh y CTAs en la cabecera superior */}
        <AnimatePresence>
          {mobileMenuOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'calc(100dvh - 65px)' }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.25, ease: 'easeInOut' }}
              className="lg:hidden bg-[#FCFCFB] dark:bg-[#080a09] border-t border-[#D2D2CE] dark:border-[#303131] fixed top-[65px] left-0 right-0 bottom-0 z-50 flex flex-col overscroll-contain touch-pan-y max-h-[calc(100dvh-65px)] h-[calc(100dvh-65px)]"
              style={{ height: 'calc(100dvh - 65px)', maxHeight: 'calc(100dvh - 65px)' }}
            >
              {/* CABECERA SUPERIOR FIJA DE ACCIÓN RÁPIDA (Nunca desaparece ni baja de la pantalla) */}
              <div className="shrink-0 p-4 bg-[#FCFCFB] dark:bg-[#080a09] border-b border-[#D2D2CE] dark:border-[#303131] shadow-xs flex flex-col gap-3 z-20">
                <div className="grid grid-cols-2 gap-2.5">
                  <a
                    href={APP_URLS.login}
                    onClick={() => setMobileMenuOpen(false)}
                    className="flex items-center justify-center gap-1.5 px-3.5 py-3 rounded-[8px] bg-[#E6E6E3] dark:bg-[#232326] text-[#0A0C0B] dark:text-white font-bold text-xs hover:bg-[#D2D2CE] dark:hover:bg-[#303131] transition-colors border border-[#D2D2CE] dark:border-[#303131] text-center"
                  >
                    <span>{t('Iniciar Sesión', 'Log In')}</span>
                  </a>
                  <Button
                    variant="primary"
                    href={APP_URLS.register}
                    className="w-full py-3 justify-center text-xs font-black shadow-sm px-2 text-center"
                  >
                    <span>{t('14 Días Gratis', '14-Day Free Trial')}</span>
                  </Button>
                </div>
              </div>

              {/* Contenedor con Scroll de Enlaces */}
              <div className="flex-1 overflow-y-auto px-5 pt-5 pb-16 space-y-7 overscroll-contain touch-pan-y">
                {Object.keys(megaMenus).map((key) => (
                  <div key={key} className="space-y-3">
                    <h3 className="text-[#0A0C0B] dark:text-white font-extrabold text-base tracking-tight mb-2 border-b border-[#D2D2CE] dark:border-[#303131] pb-2 text-left flex items-center justify-between">
                      <span>{key}</span>
                      <ChevronDown className="size-4 opacity-40" />
                    </h3>
                    <div className="grid grid-cols-1 gap-2.5">
                      {megaMenus[key].items.map((item) => {
                        const Icon = item.icon;
                        return (
                          <a
                            key={item.title}
                            href={item.href || "#features"}
                            onClick={() => setMobileMenuOpen(false)}
                            className="flex items-start gap-3.5 p-3.5 rounded-[10px] bg-[#F2F2F0] dark:bg-[#131517] border border-[#D2D2CE] dark:border-[#303131] active:scale-[0.98] transition-transform shadow-2xs text-left"
                          >
                            <div className="p-2.5 rounded-[8px] bg-[#E6E6E3] dark:bg-[#232326] text-[#0A0C0B] dark:text-white shrink-0">
                              <Icon className="w-5 h-5 text-[rgb(52,138,46)] dark:text-[rgb(104,204,88)]" />
                            </div>
                            <div className="flex-1 min-w-0">
                              <div className="flex items-center gap-2 flex-wrap">
                                <span className="font-bold text-sm text-[#0A0C0B] dark:text-white truncate">
                                  {item.title}
                                </span>
                                {item.badge && (
                                  <span className="text-[10px] font-mono uppercase bg-[#0A0C0B] text-white dark:bg-white dark:text-[#0A0C0B] px-1.5 py-0.5 rounded font-black">
                                    {item.badge}
                                  </span>
                                )}
                              </div>
                              <p className="text-xs text-[rgba(10,12,11,0.72)] dark:text-white/70 mt-1 leading-snug">
                                {item.desc}
                              </p>
                            </div>
                          </a>
                        );
                      })}
                    </div>

                    {/* Featured CTA for Mobile */}
                    {megaMenus[key].featured && (
                      <div className="mt-3 p-4 rounded-[10px] bg-gradient-to-br from-[#E6E6E3] to-[#FCFCFB] dark:from-[#232326] dark:to-[#131517] border border-[#D2D2CE] dark:border-[#303131] text-left">
                        <h4 className="text-[#0A0C0B] dark:text-white font-bold text-sm mb-1">
                          {megaMenus[key].featured.title}
                        </h4>
                        <p className="text-xs text-[rgba(10,12,11,0.72)] dark:text-white/70 mb-3">
                          {megaMenus[key].featured.desc}
                        </p>
                        <a
                          href={megaMenus[key].featured.href || "#features"}
                          onClick={() => setMobileMenuOpen(false)}
                          className="inline-flex items-center gap-1.5 text-xs font-bold text-[rgb(52,138,46)] dark:text-[rgb(104,204,88)]"
                        >
                          {megaMenus[key].featured.cta} <ArrowRight className="w-3.5 h-3.5" />
                        </a>
                      </div>
                    )}
                  </div>
                ))}

                {/* Sección de Precios Dedicada en el Menú Móvil */}
                <div className="space-y-3 pt-2">
                  <h3 className="text-[#0A0C0B] dark:text-white font-extrabold text-base mb-2 border-b border-[#D2D2CE] dark:border-[#303131] pb-2 text-left">
                    {t('Planes y Tarifas', 'Pricing & Plans')}
                  </h3>
                  <a
                    href="/precios"
                    onClick={() => setMobileMenuOpen(false)}
                    className="flex items-start gap-3.5 p-4 rounded-[10px] bg-gradient-to-br from-[#E6E6E3] to-[#FCFCFB] dark:from-[#232326] dark:to-[#131517] border-2 border-[rgb(52,138,46)]/50 dark:border-[rgb(104,204,88)]/50 active:scale-[0.98] transition-transform shadow-sm text-left"
                  >
                    <div className="p-2.5 rounded-[8px] bg-[rgb(52,138,46)] dark:bg-[rgb(104,204,88)] text-white dark:text-[#0A0C0B] shrink-0">
                      <Tag className="w-5 h-5" />
                    </div>
                    <div className="flex-1 min-w-0">
                      <div className="flex items-center gap-2 flex-wrap">
                        <span className="font-extrabold text-base text-[#0A0C0B] dark:text-white leading-tight">
                          {t('Ver Precios y Planes', 'View Pricing Plans')}
                        </span>
                        <span className="text-[10px] font-bold text-[rgb(43,115,38)] dark:text-[rgb(124,224,108)] bg-[rgba(52,138,46,0.15)] px-2 py-0.5 rounded-[4px] uppercase font-mono tracking-wider">
                          {t('14 Días Gratis', '14 Days Free')}
                        </span>
                      </div>
                      <p className="text-xs text-[rgba(10,12,11,0.75)] dark:text-white/75 mt-1.5 leading-snug">
                        {t(
                          'Precios transparentes sin sorpresas ni costes ocultos. Licencia todo incluido con 0% comisiones bancarias en tu facturación.',
                          'Transparent all-inclusive pricing with zero hidden costs and 0% banking platform transaction fees.'
                        )}
                      </p>
                    </div>
                  </a>
                </div>
              </div>

            </motion.div>
          )}
        </AnimatePresence>
      </header>
    </>
  );
};
