import { useState, useRef } from 'react';
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
  Globe2,
  PieChart,
  ShoppingBag,
  Store,
  Sun,
  Moon,
} from 'lucide-react';
import { Button } from './Button';
import { useTheme } from '../context/ThemeContext';

export const Navbar = () => {
  const { theme, toggleTheme } = useTheme();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);
  const leaveTimeoutRef = useRef<ReturnType<typeof setTimeout> | null>(null);

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
      items: { title: string; desc: string; icon: any; badge?: string }[];
      featured?: { title: string; desc: string; cta: string };
    }
  > = {
    Producto: {
      title: 'Soluciones de Facturación & Cobros',
      items: [
        {
          title: 'Facturación VeriFactu',
          desc: '100% adaptado a la normativa fiscal española.',
          icon: FileText,
          badge: 'Ley 2026',
        },
        {
          title: 'Cobros Recurrentes',
          desc: 'Automatiza suscripciones y pagos con reintentos.',
          icon: CreditCard,
          badge: 'Popular',
        },
        {
          title: 'Escáner OCR Gastos',
          desc: 'Sube tickets y extrae impuestos con IA.',
          icon: PieChart,
        },
        {
          title: 'Portal de Clientes',
          desc: 'Descarga facturas y paga en 1 clic.',
          icon: Building2,
        },
      ],
      featured: {
        title: 'Prueba la Facturación en Vivo',
        desc: 'Genera tu primera factura electrónica en 30 segundos.',
        cta: 'Probar Simulador',
      },
    },
    Integraciones: {
      title: 'Integraciones Compatibles',
      items: [
        {
          title: 'Redsys & Pasarelas TPV',
          desc: 'Cobros directos con tarjetas bancarias.',
          icon: Zap,
        },
        {
          title: 'Stripe & PayPal',
          desc: 'Procesamiento global multi-moneda.',
          icon: Globe2,
        },
        {
          title: 'Shopify & WooCommerce',
          desc: 'Sincroniza pedidos e impuestos automáticamente.',
          icon: ShoppingBag,
          badge: 'E-commerce',
        },
        {
          title: 'Holded & Wise & Revolut',
          desc: 'Conciliación bancaria mediante Open Banking.',
          icon: Store,
        },
      ],
      featured: {
        title: 'API Abierta para Developers',
        desc: 'Conecta Avialo con tu backend mediante Webhooks.',
        cta: 'Ver Documentación',
      },
    },
    Soluciones: {
      title: 'Diseñado para tu Tipo de Empresa',
      items: [
        {
          title: 'Autónomos y Freelancers',
          desc: 'Control de IRPF, IVA trimestral y libros oficiales.',
          icon: ShieldCheck,
        },
        {
          title: 'Agencias y Estudios',
          desc: 'Gestión de proyectos y presupuestos avanzados.',
          icon: Sparkles,
        },
        {
          title: 'Startups SaaS',
          desc: 'Métricas de MRR y facturación recurrente.',
          icon: Zap,
        },
        {
          title: 'Gestorías y Asesores',
          desc: 'Acceso para tu asesor con descarga en Excel/PDF.',
          icon: Building2,
        },
      ],
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
          <a href="#" className="flex items-center gap-3 group shrink-0">
            <img
              src="https://avialo.es/logo.svg"
              alt="Avialo Logo"
              className="h-7 md:h-8 w-auto filter brightness-0 dark:brightness-0 dark:invert transition-transform duration-300 group-hover:scale-105"
              onError={(e) => {
                (e.currentTarget as HTMLElement).style.display = 'none';
              }}
            />
            <span className="text-[#0A0C0B] dark:text-white font-bold text-xl tracking-tight">
              Avialo
            </span>
          </a>

          {/* Desktop Center Nav Links */}
          <nav className="hidden lg:flex items-center space-x-1">
            {Object.keys(megaMenus).map((key, idx) => (
              <div
                key={key}
                className="relative"
                onMouseEnter={() => handleMouseEnter(key)}
                onMouseLeave={handleMouseLeave}
              >
                <button
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

                {/* Mega Dropdown Menu (Con ancho responsivo acotado a la pantalla y sin desbordamientos) */}
                <AnimatePresence>
                  {activeDropdown === key && (
                    <motion.div
                      initial={{ opacity: 0, y: 10, scale: 0.98 }}
                      animate={{ opacity: 1, y: 0, scale: 1 }}
                      exit={{ opacity: 0, y: 6, scale: 0.98 }}
                      transition={{ duration: 0.2, ease: 'easeOut' }}
                      onMouseEnter={() => handleMouseEnter(key)}
                      onMouseLeave={handleMouseLeave}
                      className={`absolute top-full mt-3 w-[min(760px,calc(100vw-64px))] bg-[#F2F2F0] dark:bg-[#131517] border border-[#D2D2CE] dark:border-[#303131] rounded-3xl p-6 shadow-2xl text-sm z-50 grid grid-cols-12 gap-5 overflow-hidden ${
                        idx === 0
                          ? 'left-0'
                          : idx === 1
                          ? 'left-1/2 -translate-x-1/2'
                          : 'right-0'
                      }`}
                    >
                      {/* Items Grid */}
                      <div className={`${megaMenus[key].featured ? 'col-span-8' : 'col-span-12'} grid grid-cols-2 gap-3.5`}>
                        {megaMenus[key].items.map((item) => {
                          const Icon = item.icon;
                          return (
                            <a
                              key={item.title}
                              href="#features"
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
                      {megaMenus[key].featured && (
                        <div className="col-span-4 bg-[#FCFCFB] dark:bg-[#080a09] border border-[#D2D2CE] dark:border-[#303131] rounded-2xl p-5 flex flex-col justify-between">
                          <div>
                            <div className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full bg-[#0A0C0B]/10 dark:bg-white/10 text-[#0A0C0B] dark:text-white text-[10px] font-bold mb-2.5">
                              <Sparkles className="w-3 h-3" />
                              Destacado
                            </div>
                            <h4 className="text-[#0A0C0B] dark:text-white font-bold text-xs sm:text-sm mb-1.5 leading-snug">
                              {megaMenus[key].featured.title}
                            </h4>
                            <p className="text-[11px] text-[rgba(10,12,11,0.72)] dark:text-white/70 leading-relaxed">
                              {megaMenus[key].featured.desc}
                            </p>
                          </div>
                          <a
                            href="#overview"
                            className="mt-4 flex items-center justify-center gap-1.5 bg-[#0A0C0B] dark:bg-white text-white dark:text-black text-xs font-bold py-2 rounded-xl hover:bg-[#0A0C0B]/80 dark:hover:bg-white/90 transition-colors"
                          >
                            <span>{megaMenus[key].featured.cta}</span>
                            <ArrowRight className="w-3.5 h-3.5" />
                          </a>
                        </div>
                      )}
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            ))}

            <a
              href="#pricing"
              className="px-4 py-2 text-sm text-[rgba(10,12,11,0.72)] dark:text-white/80 hover:text-[#0A0C0B] dark:hover:text-white font-medium transition-colors rounded-full hover:bg-[#E6E6E3] dark:hover:bg-[#232326]"
            >
              Precios
            </a>
          </nav>

          {/* Desktop Action Buttons + Theme Toggle Elegante */}
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
              href="https://app.avialo.tech/login"
              className="text-sm text-[rgba(10,12,11,0.72)] dark:text-white/80 hover:text-[#0A0C0B] dark:hover:text-white font-medium px-3 py-2 transition-colors"
            >
              Iniciar Sesión
            </a>
            <Button variant="primary" href="https:/app.avialo.tech/registro">
              Prueba 14 días gratis
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

        {/* Mobile Animated Dropdown Drawer */}
        <AnimatePresence>
          {mobileMenuOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.3 }}
              className="lg:hidden overflow-hidden bg-[#FCFCFB] dark:bg-[#080a09] border-t border-[#D2D2CE] dark:border-[#303131]"
            >
              <div className="max-w-xl mx-auto px-6 py-6 space-y-4 text-sm">
                <a href="#features" className="block text-[#0A0C0B] dark:text-white font-medium py-2 border-b border-[#D2D2CE] dark:border-[#303131]">
                  Producto & Características
                </a>
                <a href="#integrations" className="block text-[#0A0C0B] dark:text-white font-medium py-2 border-b border-[#D2D2CE] dark:border-[#303131]">
                  Integraciones (Redsys, Stripe, Shopify)
                </a>
                <a href="#pricing" className="block text-[#0A0C0B] dark:text-white font-medium py-2 border-b border-[#D2D2CE] dark:border-[#303131]">
                  Precios
                </a>
                <div className="pt-4 flex flex-col gap-3">
                  <Button variant="primary" href="#pricing" className="w-full">
                    Prueba 14 días gratis
                  </Button>
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </header>
    </>
  );
};
