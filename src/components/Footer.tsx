import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import {
  ArrowRight,
  ShieldCheck,
  CheckCircle2,
  X,
  Send,
} from 'lucide-react';

interface FooterProps {
  locale?: string;
}

// 1. LogoMark con Fallback
const LogoMark = () => {
  const [hasError, setHasError] = useState(false);

  return (
    <div className="flex items-center gap-2.5">
      {!hasError ? (
        <img
          src="/favicon.svg"
          alt="Avialo Logo"
          className="h-7 w-auto object-contain brightness-0 invert"
          onError={() => setHasError(true)}
        />
      ) : (
        <div className="w-7 h-7 rounded-lg bg-white/10 flex items-center justify-center border border-white/20">
          <span className="text-white font-bold text-sm">A</span>
        </div>
      )}
      <span className="text-white font-bold text-xl tracking-tight">Avialo</span>
    </div>
  );
};

// 2. AppStoreBadge & GooglePlayBadge
const AppStoreBadge = ({ onClick }: { onClick: () => void }) => (
  <button
    onClick={onClick}
    className="bg-neutral-950 border border-neutral-900 hover:bg-neutral-900 hover:border-neutral-800 hover:scale-105 transition-all duration-200 cursor-pointer rounded-xl px-3.5 py-2 flex items-center gap-3 group text-left"
  >
    <svg className="w-5 h-5 fill-white" viewBox="0 0 24 24">
      <path d="M18.71 19.5c-.83 1.24-1.71 2.45-3.05 2.47-1.34.03-1.77-.79-3.29-.79-1.53 0-2 .77-3.27.82-1.31.05-2.3-1.32-3.14-2.53C4.25 17 2.94 12.45 4.7 9.39c.87-1.52 2.43-2.48 4.12-2.51 1.28-.02 2.5.87 3.29.87.78 0 2.26-1.07 3.81-.91.65.03 2.47.26 3.64 1.98-.09.06-2.17 1.28-2.15 3.81.03 3.02 2.65 4.03 2.68 4.04-.03.07-.42 1.44-1.38 2.83M15.97 6.85c.66-.8 1.11-1.92.99-3.04-1 .04-2.16.67-2.85 1.48-.6.7-1.13 1.83-.99 2.93 1.12.09 2.22-.57 2.85-1.37z" />
    </svg>
    <div className="flex flex-col">
      <span className="text-[9px] uppercase tracking-wider text-neutral-400 font-medium">Consíguelo en el</span>
      <span className="text-xs font-semibold text-white tracking-tight -mt-0.5">App Store</span>
    </div>
  </button>
);

const GooglePlayBadge = ({ onClick }: { onClick: () => void }) => (
  <button
    onClick={onClick}
    className="bg-neutral-950 border border-neutral-900 hover:bg-neutral-900 hover:border-neutral-800 hover:scale-105 transition-all duration-200 cursor-pointer rounded-xl px-3.5 py-2 flex items-center gap-3 group text-left"
  >
    <svg className="w-5 h-5 fill-white" viewBox="0 0 24 24">
      <path d="M3,20.5V3.5C3,2.91 3.34,2.39 3.84,2.15L13.69,12L3.84,21.85C3.34,21.6 3,21.09 3,20.5M16.81,15.12L14.81,13.12L17.75,10.18C18.23,9.7 19,9.7 19.47,10.18C19.95,10.66 19.95,11.43 19.47,11.91L16.81,15.12M14.81,10.88L16.81,8.88L19.47,12.09C19.95,12.57 19.95,13.34 19.47,13.82C19,14.3 18.23,14.3 17.75,13.82L14.81,10.88Z" />
    </svg>
    <div className="flex flex-col">
      <span className="text-[9px] uppercase tracking-wider text-neutral-400 font-medium">Disponible en</span>
      <span className="text-xs font-semibold text-white tracking-tight -mt-0.5">Google Play</span>
    </div>
  </button>
);

// 3. FooterLink
interface FooterLinkProps {
  href: string;
  children: React.ReactNode;
  highlight?: boolean;
}

const FooterLink = ({ href, children, highlight }: FooterLinkProps) => {
  return (
    <a
      href={href}
      className={`inline-block text-xs transition-all duration-200 hover:translate-x-0.5 ${
        highlight
          ? 'text-violet-400 font-semibold hover:text-violet-300'
          : 'text-neutral-400 hover:text-white'
      }`}
    >
      {children}
    </a>
  );
};

export const Footer = ({ locale = 'es' }: FooterProps) => {
  const [showModal, setShowModal] = useState(false);
  const [email, setEmail] = useState('');
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault();
    if (email && email.includes('@')) {
      setIsSubmitted(true);
      setTimeout(() => {
        setIsSubmitted(false);
        setEmail('');
        setShowModal(false);
      }, 3500);
    }
  };

  return (
    <footer data-locale={locale} className="bg-[#050505] text-[#8e8e8e] font-sans relative border-t border-neutral-800 transition-colors duration-300">
      {/* Línea superior de acento multicolor ultra sutil */}
      <div className="absolute top-0 left-0 right-0 h-[1.5px] bg-gradient-to-r from-transparent via-violet-500/60 via-emerald-500/50 to-transparent z-20 pointer-events-none" />

      {/* 1. SECCIÓN PRE-FOOTER CTA (Brillo Fintech Aurora) */}
      <div className="relative py-24 px-6 overflow-hidden border-b border-neutral-800/80">
        {/* Auroras de fondo */}
        <div className="bg-violet-600/20 w-[350px] h-[350px] rounded-full blur-[100px] pointer-events-none -z-10 absolute top-[-20%] left-[10%]" />
        <div className="bg-emerald-500/12 w-[350px] h-[350px] rounded-full blur-[100px] pointer-events-none -z-10 absolute bottom-[-20%] right-[10%]" />

        <div className="max-w-4xl mx-auto flex flex-col items-center text-center space-y-6 relative z-10">
          <h2 className="text-4xl sm:text-5xl font-extrabold tracking-tight text-white">
            Prueba Avialo gratis durante 14 días
          </h2>

          <p className="text-sm sm:text-base text-[#a3a3a3] max-w-xl mx-auto leading-relaxed">
            Sin tarjeta de crédito. Sin permanencia ni compromisos. Configura tu cuenta en 2 minutos y empieza a facturar bajo la normativa Verifactu.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-3.5 pt-2 w-full sm:w-auto">
            <a
              href="https://app.avialo.tech/registro"
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-8 py-3.5 rounded-full bg-white text-black font-bold text-sm shadow-lg hover:scale-[1.01] transition-all cursor-pointer"
            >
              <span>Empezar ahora gratis</span>
              <ArrowRight className="size-4" />
            </a>

            <a
              href="#pricing"
              className="w-full sm:w-auto inline-flex items-center justify-center px-8 py-3.5 rounded-full bg-neutral-900/40 border border-neutral-800 text-white font-medium text-sm hover:bg-neutral-800 hover:border-neutral-700 transition-all cursor-pointer"
            >
              Ver precios
            </a>
          </div>

          {/* Badges de Garantía */}
          <div className="flex flex-wrap items-center justify-center gap-6 pt-4 text-xs text-neutral-400">
            <div className="flex items-center gap-2">
              <CheckCircle2 className="text-violet-500 size-4 shrink-0" />
              <span>14 días de prueba completa</span>
            </div>
            <div className="flex items-center gap-2">
              <CheckCircle2 className="text-violet-500 size-4 shrink-0" />
              <span>Sin tarjeta bancaria</span>
            </div>
            <div className="flex items-center gap-2">
              <CheckCircle2 className="text-violet-500 size-4 shrink-0" />
              <span>Cancela cuando quieras</span>
            </div>
          </div>
        </div>
      </div>

      {/* 2. SECCIÓN DE ENLACES Y NAVEGACIÓN PRINCIPAL */}
      <div className="max-w-7xl mx-auto px-6 sm:px-8 py-20">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 md:gap-y-12 mb-16">
          
          {/* Columna 1: Brand & Social */}
          <div className="md:col-span-4 space-y-6 pr-0 md:pr-4 text-left">
            <LogoMark />
            
            <p className="text-xs text-[#8e8e8e] leading-relaxed max-w-sm">
              Avialo es una marca y tecnología desarrollada y operada por Avialo (Avialo Soluciones S.L.), adaptada al 100% a la normativa tributaria española.
            </p>

            {/* Redes Sociales */}
            <div className="flex items-center gap-4 text-neutral-500">
              <a href="#" aria-label="Twitter" className="hover:scale-125 hover:text-white transition-all duration-300 transform ease-out cursor-pointer">
                <svg className="size-4 fill-current" viewBox="0 0 24 24"><path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/></svg>
              </a>
              <a href="#" aria-label="LinkedIn" className="hover:scale-125 hover:text-white transition-all duration-300 transform ease-out cursor-pointer">
                <svg className="size-4 fill-current" viewBox="0 0 24 24"><path d="M19 3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14m-.5 15.5v-5.3a3.26 3.26 0 0 0-3.26-3.26c-.85 0-1.84.52-2.28 1.3v-1.11h-2.79v8.37h2.79v-4.93c0-.77.62-1.4 1.39-1.4a1.4 1.4 0 0 1 1.4 1.4v4.93h2.75M6.88 8.56a1.68 1.68 0 0 0 1.68-1.68c0-.93-.75-1.69-1.68-1.69a1.69 1.69 0 0 0-1.69 1.69c0 .93.76 1.68 1.69 1.68m1.39 9.94v-8.37H5.5v8.37h2.77z"/></svg>
              </a>
              <a href="#" aria-label="Facebook" className="hover:scale-125 hover:text-white transition-all duration-300 transform ease-out cursor-pointer">
                <svg className="size-4 fill-current" viewBox="0 0 24 24"><path d="M22 12c0-5.52-4.48-10-10-10S2 6.48 2 12c0 4.84 3.44 8.87 8 9.8V15H7.5v-3H10V9.5C10 7.01 11.49 5.65 13.75 5.65c1.08 0 2.21.19 2.21.19v2.43h-1.25c-1.23 0-1.61.77-1.61 1.56V12h2.74l-.44 3h-2.3v6.8c4.56-.93 8-4.96 8-9.8z"/></svg>
              </a>
              <a href="#" aria-label="Instagram" className="hover:scale-125 hover:text-white transition-all duration-300 transform ease-out cursor-pointer">
                <svg className="size-4 fill-current" viewBox="0 0 24 24"><path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/></svg>
              </a>
              <a href="#" aria-label="YouTube" className="hover:scale-125 hover:text-white transition-all duration-300 transform ease-out cursor-pointer">
                <svg className="size-4 fill-current" viewBox="0 0 24 24"><path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/></svg>
              </a>
            </div>

            {/* Badges Móviles */}
            <div className="flex flex-wrap items-center gap-2.5 pt-1">
              <AppStoreBadge onClick={() => setShowModal(true)} />
              <GooglePlayBadge onClick={() => setShowModal(true)} />
            </div>

            {/* Selector de Idioma */}
            <div className="flex flex-wrap items-center gap-2 text-xs text-[#8e8e8e] pt-2">
              <span className="text-white font-semibold cursor-default">Español</span>
              <span>·</span>
              <a href="#" className="hover:text-white transition-colors">English</a>
              <span>·</span>
              <a href="#" className="hover:text-white transition-colors">Català</a>
              <span>·</span>
              <a href="#" className="hover:text-white transition-colors">Galego</a>
              <span>·</span>
              <a href="#" className="hover:text-white transition-colors">Euskera</a>
            </div>
          </div>

          {/* Columna 2: Acceso Rápido */}
          <div className="md:col-span-2 space-y-3.5 text-left">
            <h4 className="text-xs font-bold uppercase tracking-wider text-neutral-300">Acceso Rápido</h4>
            <ul className="space-y-2.5">
              <li><FooterLink href="https://app.avialo.tech/registro">Crea una cuenta gratis</FooterLink></li>
              <li><FooterLink href="https://app.avialo.tech/login">Iniciar sesión</FooterLink></li>
              <li><FooterLink href="#pricing">Precios y Planes</FooterLink></li>
              <li><FooterLink href="#">Estado del sistema</FooterLink></li>
            </ul>
          </div>

          {/* Columna 3: Funcionalidades */}
          <div className="md:col-span-2 space-y-3.5 text-left">
            <h4 className="text-xs font-bold uppercase tracking-wider text-neutral-300">Funcionalidades</h4>
            <ul className="space-y-2.5">
              <li><FooterLink href="#features">Facturación Online</FooterLink></li>
              <li><FooterLink href="#features">Tickets Simplificados</FooterLink></li>
              <li><FooterLink href="#features">Presupuestos y Albaranes</FooterLink></li>
              <li><FooterLink href="#features">Control de Gastos</FooterLink></li>
              <li><FooterLink href="#features">Inventario de Stock</FooterLink></li>
              <li><FooterLink href="#features">Copiloto IA Fiscal</FooterLink></li>
            </ul>
          </div>

          {/* Columna 4: Soluciones */}
          <div className="md:col-span-2 space-y-3.5 text-left">
            <h4 className="text-xs font-bold uppercase tracking-wider text-neutral-300">Soluciones</h4>
            <ul className="space-y-2.5">
              <li><FooterLink href="#pricing">Para Autónomos</FooterLink></li>
              <li><FooterLink href="#pricing">Para Pymes y Equipos</FooterLink></li>
              <li><FooterLink href="#overview">Para Asesorías y Gestores</FooterLink></li>
              <li><FooterLink href="#features">Migración desde Excel</FooterLink></li>
              <li><FooterLink href="#faq">Soluciones API</FooterLink></li>
            </ul>
          </div>

          {/* Columna 5: Hacienda y Legal */}
          <div className="md:col-span-2 space-y-3.5 text-left">
            <h4 className="text-xs font-bold uppercase tracking-wider text-neutral-300">Hacienda y Legal</h4>
            <ul className="space-y-2.5">
              <li><FooterLink href="#faq">Ley Verifactu (AEAT)</FooterLink></li>
              <li><FooterLink href="#faq">FACe & FacturaE B2B</FooterLink></li>
              <li><FooterLink href="#" highlight={true}>Declaración SIF Garante</FooterLink></li>
              <li><FooterLink href="#">Términos de Servicio</FooterLink></li>
              <li><FooterLink href="#">Política de Privacidad</FooterLink></li>
            </ul>
          </div>

        </div>

        {/* 3. PARTE INFERIOR (Legal y Sello Oficial AEAT) */}
        <div className="border-t border-neutral-800 pt-10 grid grid-cols-1 lg:grid-cols-12 gap-8 items-start text-left">
          
          {/* Textos Legales */}
          <div className="lg:col-span-8 space-y-3.5 text-xs text-[#8e8e8e] leading-relaxed">
            <p>© {new Date().getFullYear()} Avialo Soluciones S.L. Avialo es una marca registrada de Avialo Soluciones S.L. Todos los derechos reservados.</p>
            <p>
              Avialo es un Sistema de Facturación Certificado (SIF) que cumple estrictamente con los requisitos establecidos en la Ley 11/2021 de medidas de prevención y lucha contra el fraude fiscal y el Reglamento Verifactu (Real Decreto 1007/2023) de la Agencia Tributaria (AEAT). El sistema garantiza la integridad, conservación, accesibilidad, legibilidad, trazabilidad e inalterabilidad de todos los registros de facturación generados.
            </p>
            <p>
              Avialo es un producto desarrollado y comercializado por la empresa matriz Avialo Soluciones S.L., C.I.F. B26802249, inscrita en el Registro Mercantil.
            </p>
          </div>

          {/* Sello de Homologación Fiscal */}
          <div className="lg:col-span-4 flex lg:justify-end shrink-0">
            <div className="border border-emerald-500/30 bg-emerald-500/[0.04] shadow-lg shadow-emerald-950/20 rounded-xl p-4 max-w-[260px] w-full flex items-start gap-3">
              <ShieldCheck className="text-emerald-400 size-5 shrink-0 mt-0.5" />
              <div className="flex flex-col">
                <span className="text-[9px] font-extrabold tracking-wider uppercase text-emerald-400 block">SOFTWARE HOMOLOGADO</span>
                <span className="text-xs font-bold text-white tracking-wide mt-0.5 block">SISTEMA VERI*FACTU</span>
                <span className="text-[9px] text-[#8e8e8e] leading-snug mt-0.5 block">Conforme al Real Decreto 1007/2023 de la AEAT</span>
              </div>
            </div>
          </div>

        </div>
      </div>

      {/* 4. MODAL INTERACTIVO "PRÓXIMAMENTE" */}
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
              className="bg-[#0a0a0a] border border-neutral-800 p-6 rounded-2xl max-w-sm w-full relative shadow-2xl space-y-4 text-left"
              onClick={(e) => e.stopPropagation()}
            >
              {/* Close Button */}
              <button
                onClick={() => setShowModal(false)}
                className="absolute top-4 right-4 text-neutral-500 hover:text-white transition-colors p-1"
                aria-label="Cerrar modal"
              >
                <X className="size-4" />
              </button>

              {/* Badge */}
              <div className="text-[9px] tracking-widest font-mono text-neutral-400 uppercase border border-neutral-800 px-2.5 py-0.5 rounded-full bg-neutral-900/50 w-fit">
                PRÓXIMAMENTE
              </div>

              {/* Title & Desc */}
              <div className="space-y-1.5">
                <h3 className="text-base font-bold text-white tracking-tight">Apps de iOS y Android</h3>
                <p className="text-xs text-neutral-400 leading-relaxed">
                  Estamos ultimando los detalles para el lanzamiento en App Store y Google Play. Si quieres que te avisemos en cuanto estén disponibles, déjanos tu correo para la lista de espera beta.
                </p>
              </div>

              {/* Form */}
              {!isSubmitted ? (
                <form onSubmit={handleSubscribe} className="space-y-2.5 pt-1">
                  <input
                    type="email"
                    required
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="Tu correo electrónico"
                    className="w-full border border-neutral-800 bg-neutral-900 text-white placeholder-neutral-500 text-xs px-3.5 py-2.5 rounded-xl focus:outline-none focus:border-neutral-700 transition-colors"
                  />
                  <button
                    type="submit"
                    className="w-full bg-white text-black font-semibold text-xs px-4 py-2.5 rounded-xl hover:bg-neutral-200 transition-colors flex items-center justify-center gap-1.5 cursor-pointer"
                  >
                    <span>Avisarme</span>
                    <Send className="size-3.5" />
                  </button>
                </form>
              ) : (
                <motion.div
                  initial={{ opacity: 0, y: 5 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="p-3 rounded-xl border border-emerald-500/30 bg-emerald-500/10 text-emerald-400 text-xs flex items-center gap-2 font-medium"
                >
                  <CheckCircle2 className="size-4 shrink-0" />
                  <span>¡Apuntado! Te avisaremos al instante.</span>
                </motion.div>
              )}

              {/* Modal Footer Note */}
              <p className="text-[10px] text-neutral-500 leading-normal border-t border-neutral-900/50 pt-3">
                Mientras tanto, la plataforma web está optimizada para pantallas móviles desde cualquier navegador.
              </p>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </footer>
  );
};
