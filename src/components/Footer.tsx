import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import {
  ArrowUpRight,
  ShieldCheck,
  CheckCircle2,
  X,
  Send,
} from 'lucide-react';

import { useLanguage } from '../context/LanguageContext';
import { APP_URLS } from '../config/urls';

interface FooterProps {
  locale?: string;
}

// 1. LogoMark con Fallback
const LogoMark = () => {
  const [hasError, setHasError] = useState(false);

  return (
    <a href="/" className="flex items-center gap-2.5 hover:opacity-90 transition-opacity">
      {!hasError ? (
        <img
          src="/favicon.svg?v=2"
          alt="Avialo Logo"
          className="h-7 w-auto object-contain"
          onError={() => setHasError(true)}
        />
      ) : (
        <div className="w-7 h-7 rounded-lg bg-[#0A0C0B] dark:bg-white flex items-center justify-center">
          <span className="text-white dark:text-black font-bold text-sm">A</span>
        </div>
      )}
      <span className="text-[#0A0C0B] dark:text-white font-bold text-xl tracking-tight">Avialo</span>
    </a>
  );
};

// 2. AppStoreBadge & GooglePlayBadge
const AppStoreBadge = ({ onClick }: { onClick: () => void }) => {
  const { t } = useLanguage();
  return (
    <button
      onClick={onClick}
      className="bg-[#FCFCFB] dark:bg-[#131517] border border-[#D2D2CE] dark:border-[#303131] hover:border-[#0A0C0B]/40 dark:hover:border-white/40 hover:scale-[1.03] transition-all duration-200 cursor-pointer rounded-xl px-3.5 py-2 flex items-center gap-3 group text-left shadow-sm"
    >
      <svg className="w-5 h-5 fill-[#0A0C0B] dark:fill-white shrink-0" viewBox="0 0 24 24">
        <path d="M18.71 19.5c-.83 1.24-1.71 2.45-3.05 2.47-1.34.03-1.77-.79-3.29-.79-1.53 0-2 .77-3.27.82-1.31.05-2.3-1.32-3.14-2.53C4.25 17 2.94 12.45 4.7 9.39c.87-1.52 2.43-2.48 4.12-2.51 1.28-.02 2.5.87 3.29.87.78 0 2.26-1.07 3.81-.91.65.03 2.47.26 3.64 1.98-.09.06-2.17 1.28-2.15 3.81.03 3.02 2.65 4.03 2.68 4.04-.03.07-.42 1.44-1.38 2.83M15.97 6.85c.66-.8 1.11-1.92.99-3.04-1 .04-2.16.67-2.85 1.48-.6.7-1.13 1.83-.99 2.93 1.12.09 2.22-.57 2.85-1.37z" />
      </svg>
      <div className="flex flex-col">
        <span className="text-[9px] uppercase tracking-wider text-[rgba(10,12,11,0.6)] dark:text-white/60 font-medium">
          {t('Consíguelo en el', 'Get it on')}
        </span>
        <span className="text-xs font-semibold text-[#0A0C0B] dark:text-white tracking-tight -mt-0.5">App Store</span>
      </div>
    </button>
  );
};

const GooglePlayBadge = ({ onClick }: { onClick: () => void }) => {
  const { t } = useLanguage();
  return (
    <button
      onClick={onClick}
      className="bg-[#FCFCFB] dark:bg-[#131517] border border-[#D2D2CE] dark:border-[#303131] hover:border-[#0A0C0B]/40 dark:hover:border-white/40 hover:scale-[1.03] transition-all duration-200 cursor-pointer rounded-xl px-3.5 py-2 flex items-center gap-3 group text-left shadow-sm"
    >
      <svg className="w-5 h-5 fill-[#0A0C0B] dark:fill-white shrink-0" viewBox="0 0 24 24">
        <path d="M3.609 1.814L13.792 12 3.61 22.186a.996.996 0 0 1-.61-.92V2.734a1 1 0 0 1 .609-.92zm10.89 10.893l2.302 2.302-10.937 6.333 8.635-8.635zm3.199-3.198l2.807 1.626a1 1 0 0 1 0 1.73l-2.808 1.626L15.206 12l2.492-2.491zM5.864 2.658L16.802 8.99l-2.303 2.303-8.635-8.635z" />
      </svg>
      <div className="flex flex-col">
        <span className="text-[9px] uppercase tracking-wider text-[rgba(10,12,11,0.6)] dark:text-white/60 font-medium">
          {t('Disponible en', 'Get it on')}
        </span>
        <span className="text-xs font-semibold text-[#0A0C0B] dark:text-white tracking-tight -mt-0.5">Google Play</span>
      </div>
    </button>
  );
};

// 3. FooterLink
interface FooterLinkProps {
  href: string;
  children: React.ReactNode;
  highlight?: boolean;
  external?: boolean;
  target?: string;
  rel?: string;
}

const FooterLink = ({ href, children, highlight, external, target, rel }: FooterLinkProps) => {
  return (
    <a
      href={href}
      target={target}
      rel={rel}
      className={`inline-flex items-center gap-1 text-xs transition-all duration-200 hover:translate-x-0.5 ${
        highlight
          ? 'text-violet-600 dark:text-violet-400 font-semibold hover:text-violet-700 dark:hover:text-violet-300'
          : 'text-[rgba(10,12,11,0.72)] dark:text-white/70 hover:text-[#0A0C0B] dark:hover:text-white'
      }`}
    >
      <span>{children}</span>
      {external && <ArrowUpRight className="size-3 text-[rgba(10,12,11,0.5)] dark:text-white/50 shrink-0" />}
    </a>
  );
};

export const Footer = ({ locale = 'es' }: FooterProps) => {
  const { lang, setLang, t } = useLanguage();
  const [showModal, setShowModal] = useState(false);
  const [showAeatModal, setShowAeatModal] = useState(false);
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
    <footer data-locale={locale} className="bg-[#FCFCFB] dark:bg-[#080a09] text-[rgba(10,12,11,0.72)] dark:text-white/80 font-sans relative border-t border-[#D2D2CE] dark:border-[#303131] transition-colors duration-300">

      {/* 2. SECCIÓN DE ENLACES Y NAVEGACIÓN PRINCIPAL */}
      <div className="max-w-7xl mx-auto px-6 sm:px-8 py-20">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 md:gap-y-12 mb-16">
          
          {/* Columna 1: Brand & Social */}
          <div className="md:col-span-4 space-y-6 pr-0 md:pr-4 text-left">
            <LogoMark />
            
            <p className="text-xs text-[rgba(10,12,11,0.72)] dark:text-white/70 leading-relaxed max-w-sm">
              {t(
                'Avialo es una marca y tecnología desarrollada y operada por Avialo (Avialo Soluciones S.L.), adaptada al 100% a la normativa tributaria española.',
                'Avialo is a technology platform operated by Avialo Soluciones S.L., 100% tailored to Spanish tax & invoicing regulations.'
              )}
            </p>

            {/* Redes Sociales: X (Twitter), LinkedIn, Instagram */}
            <div className="flex items-center gap-4 text-[rgba(10,12,11,0.6)] dark:text-white/60">
              <a href="#" aria-label="X (Twitter)" className="hover:scale-125 hover:text-[#0A0C0B] dark:hover:text-white transition-all duration-300 transform ease-out cursor-pointer">
                <svg className="size-4 fill-current" viewBox="0 0 24 24"><path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/></svg>
              </a>
              <a href="#" aria-label="LinkedIn" className="hover:scale-125 hover:text-[#0A0C0B] dark:hover:text-white transition-all duration-300 transform ease-out cursor-pointer">
                <svg className="size-4 fill-current" viewBox="0 0 24 24"><path d="M19 3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14m-.5 15.5v-5.3a3.26 3.26 0 0 0-3.26-3.26c-.85 0-1.84.52-2.28 1.3v-1.11h-2.79v8.37h2.79v-4.93c0-.77.62-1.4 1.39-1.4a1.4 1.4 0 0 1 1.4 1.4v4.93h2.75M6.88 8.56a1.68 1.68 0 0 0 1.68-1.68c0-.93-.75-1.69-1.68-1.69a1.69 1.69 0 0 0-1.69 1.69c0 .93.76 1.68 1.69 1.68m1.39 9.94v-8.37H5.5v8.37h2.77z"/></svg>
              </a>
              <a href="#" aria-label="Instagram" className="hover:scale-125 hover:text-[#0A0C0B] dark:hover:text-white transition-all duration-300 transform ease-out cursor-pointer">
                <svg className="size-4 fill-current" viewBox="0 0 24 24"><path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/></svg>
              </a>
            </div>

            {/* Badges Móviles */}
            <div className="flex flex-wrap items-center gap-2.5 pt-1">
              <AppStoreBadge onClick={() => setShowModal(true)} />
              <GooglePlayBadge onClick={() => setShowModal(true)} />
            </div>

            {/* Selector de Idioma */}
            <div className="flex items-center gap-2 text-xs text-[rgba(10,12,11,0.6)] dark:text-white/60 pt-2 font-mono">
              <button
                onClick={() => setLang('es')}
                className={`transition-colors cursor-pointer ${
                  lang === 'es'
                    ? 'text-[#0A0C0B] dark:text-white font-bold underline underline-offset-4'
                    : 'hover:text-[#0A0C0B] dark:hover:text-white'
                }`}
              >
                Español
              </button>
              <span>·</span>
              <button
                onClick={() => setLang('en')}
                className={`transition-colors cursor-pointer ${
                  lang === 'en'
                    ? 'text-[#0A0C0B] dark:text-white font-bold underline underline-offset-4'
                    : 'hover:text-[#0A0C0B] dark:hover:text-white'
                }`}
              >
                English
              </button>
            </div>
          </div>

          {/* Columna 2: Acceso Rápido */}
          <div className="md:col-span-2 space-y-3.5 text-left">
            <h4 className="text-xs font-bold uppercase tracking-wider text-[#0A0C0B] dark:text-white">{t('Acceso Rápido', 'Quick Links')}</h4>
            <ul className="space-y-2.5">
              <li><FooterLink href={APP_URLS.register} external>{t('Crea una cuenta gratis', 'Create free account')}</FooterLink></li>
              <li><FooterLink href={APP_URLS.login} external>{t('Iniciar sesión', 'Log in')}</FooterLink></li>
              <li><FooterLink href="/precios">{t('Precios y Planes', 'Pricing & Plans')}</FooterLink></li>
              <li><FooterLink href="https://digital.avialo.tech" external target="_blank" rel="noopener noreferrer">{t('Transformación Digital ↗', 'Digital Transformation ↗')}</FooterLink></li>
              <li><FooterLink href="https://avialo.statuspage.io/" external target="_blank" rel="noopener noreferrer">{t('Estado del sistema', 'System status')}</FooterLink></li>
            </ul>
          </div>

          {/* Columna 3: Funcionalidades */}
          <div className="md:col-span-2 space-y-3.5 text-left">
            <h4 className="text-xs font-bold uppercase tracking-wider text-[#0A0C0B] dark:text-white">{t('Funcionalidades', 'Features')}</h4>
            <ul className="space-y-2.5">
              <li><FooterLink href="/verifactu">{t('Facturación VeriFactu', 'VeriFactu Invoicing')}</FooterLink></li>
              <li><FooterLink href="/cobros-recurrentes">{t('Cobros Recurrentes', 'Recurring Billing')}</FooterLink></li>
              <li><FooterLink href="/portal-clientes">{t('Portal de Clientes', 'Client Portal')}</FooterLink></li>
              <li><FooterLink href="/integraciones/api">{t('API & Webhooks para Devs', 'Developer API & Webhooks')}</FooterLink></li>
              <li><FooterLink href="/integraciones/pagos">{t('Pasarelas de Pago & Bancos', 'Payment Gateways & Banks')}</FooterLink></li>
              <li><FooterLink href="/control-gastos">{t('Control de Gastos', 'Expense Management')}</FooterLink></li>
            </ul>
          </div>

          {/* Columna 4: Soluciones */}
          <div className="md:col-span-2 space-y-3.5 text-left">
            <h4 className="text-xs font-bold uppercase tracking-wider text-[#0A0C0B] dark:text-white">{t('Soluciones', 'Solutions')}</h4>
            <ul className="space-y-2.5">
              <li><FooterLink href="/soluciones/autonomos">{t('Para Autónomos y Freelance', 'For Solo Pros & Freelancers')}</FooterLink></li>
              <li><FooterLink href="/soluciones/agencias">{t('Para Pymes, Agencias y Estudios', 'For SMEs & Agencies')}</FooterLink></li>
              <li><FooterLink href="/soluciones/startups">{t('Para Startups SaaS y E-commerce', 'For SaaS & E-commerce Startups')}</FooterLink></li>
              <li><FooterLink href="/soluciones/gestorias">{t('Para Asesorías y Gestores', 'For Accountants & Advisors')}</FooterLink></li>
              <li><FooterLink href="https://digital.avialo.tech" external target="_blank" rel="noopener noreferrer">{t('Transformación Digital & Desarrollo a Medida ↗', 'Digital Transformation & Custom Dev ↗')}</FooterLink></li>
              <li><FooterLink href="/soluciones">{t('Ver Todas las Soluciones', 'Explore All Solutions')}</FooterLink></li>
            </ul>
          </div>

          {/* Columna 5: Hacienda y Legal */}
          <div className="md:col-span-2 space-y-3.5 text-left">
            <h4 className="text-xs font-bold uppercase tracking-wider text-[#0A0C0B] dark:text-white">{t('Hacienda y Legal', 'Tax & Legal')}</h4>
            <ul className="space-y-2.5">
              <li><FooterLink href="#faq">{t('Ley Verifactu (AEAT)', 'VeriFactu Regulation')}</FooterLink></li>
              <li><FooterLink href="#faq">{t('FACe & FacturaE B2B', 'FACe Public Invoicing')}</FooterLink></li>
              <li><FooterLink href="https://www.avialo.tech/ACUERDO_AVIALO_SOLUCIONES_SL.pdf" highlight={true} external>{t('Declaración SIF Garante', 'Guaranteed SIF Statement')}</FooterLink></li>
              <li><FooterLink href="/privacidad">{t('Política de Privacidad', 'Privacy Policy')}</FooterLink></li>
              <li><FooterLink href="/proteccion-datos">{t('Protección de Datos SIF', 'Tax Data Protection')}</FooterLink></li>
              <li><FooterLink href="/terminos">{t('Términos y Condiciones', 'Terms & Conditions')}</FooterLink></li>
            </ul>
          </div>

        </div>

        {/* 3. PARTE INFERIOR (Legal y Sello Oficial AEAT Interactivo) */}
        <div className="border-t border-[#D2D2CE] dark:border-[#303131] pt-10 grid grid-cols-1 lg:grid-cols-12 gap-8 items-start text-left">
          
          {/* Textos Legales */}
          <div className="lg:col-span-8 space-y-3.5 text-xs text-[rgba(10,12,11,0.72)] dark:text-white/70 leading-relaxed">
            <p>© {new Date().getFullYear()} Avialo Soluciones S.L. {t('Avialo es una marca registrada de Avialo Soluciones S.L. Todos los derechos reservados.', 'Avialo is a registered trademark of Avialo Soluciones S.L. All rights reserved.')}</p>
            <p>
              {t(
                'Avialo es un Sistema de Facturación Certificado (SIF) que cumple estrictamente con los requisitos establecidos en la Ley 11/2021 de medidas de prevención y lucha contra el fraude fiscal y el Reglamento Verifactu (Real Decreto 1007/2023) de la Agencia Tributaria (AEAT). El sistema garantiza la integridad, conservación, accesibilidad, legibilidad, trazabilidad e inalterabilidad de todos los registros de facturación generados.',
                'Avialo is a Certified Invoicing System (SIF) strictly compliant with Spanish Law 11/2021 against tax fraud and the VeriFactu Regulation (Royal Decree 1007/2023) of the Spanish Tax Agency (AEAT). The platform ensures full record integrity, traceability, and immutability.'
              )}
            </p>
            <p>
              {t(
                'Avialo es un producto desarrollado y comercializado por la empresa matriz Avialo Soluciones S.L., C.I.F. B26802249, inscrita en el Registro Mercantil.',
                'Avialo is developed and operated by Avialo Soluciones S.L. (Tax ID B26802249, Madrid, Spain).'
              )}
            </p>
          </div>

          {/* Sello de Homologación Fiscal Interactivo (Botón Modal AEAT) */}
          <div className="lg:col-span-4 flex lg:justify-end shrink-0">
            <button
              onClick={() => setShowAeatModal(true)}
              className="border border-[rgb(52,138,46)]/40 dark:border-[rgb(104,204,88)]/40 bg-[rgb(52,138,46)]/5 dark:bg-[rgb(104,204,88)]/5 hover:bg-[rgb(52,138,46)]/10 dark:hover:bg-[rgb(104,204,88)]/10 hover:scale-[1.02] transition-all duration-200 shadow-md rounded-[4px] p-4 max-w-[270px] w-full flex items-start gap-3 text-left cursor-pointer group"
            >
              <ShieldCheck className="text-[rgb(52,138,46)] dark:text-[rgb(104,204,88)] size-5 shrink-0 mt-0.5" />
              <div className="flex flex-col w-full">
                <div className="flex items-center justify-between w-full">
                  <span className="text-[9px] font-extrabold tracking-wider uppercase text-[rgb(52,138,46)] dark:text-[rgb(104,204,88)] block">
                    {t('SOFTWARE HOMOLOGADO', 'HOMOLOGATED SOFTWARE')}
                  </span>
                  <ArrowUpRight className="size-3 text-[rgb(52,138,46)] dark:text-[rgb(104,204,88)] opacity-70 group-hover:opacity-100 transition-opacity shrink-0" />
                </div>
                <span className="text-xs font-bold text-[#0A0C0B] dark:text-white tracking-wide mt-0.5 block">
                  {t('SISTEMA VERI*FACTU', 'VERI*FACTU SYSTEM')}
                </span>
                <span className="text-[9px] text-[rgba(10,12,11,0.6)] dark:text-white/60 leading-snug mt-0.5 block font-medium group-hover:underline">
                  {t('Ver acuerdo AEAT Nº 17 →', 'View AEAT Agreement Nº 17 →')}
                </span>
              </div>
            </button>
          </div>

        </div>
      </div>

      {/* 4. MODAL POP-UP ELEGANTE: ACUERDO DE COLABORACIÓN AEAT Nº 17 */}
      <AnimatePresence>
        {showAeatModal && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black/60 backdrop-blur-md z-50 flex items-center justify-center p-4"
            onClick={() => setShowAeatModal(false)}
          >
            <motion.div
              initial={{ opacity: 0, scale: 0.96, y: 8 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.96, y: 8 }}
              transition={{ duration: 0.2 }}
              className="bg-[#FCFCFB] dark:bg-[#131517] border border-[#D2D2CE] dark:border-[#303131] p-6 sm:p-7 rounded-[4px] max-w-lg w-full relative shadow-2xl space-y-5 text-left"
              onClick={(e) => e.stopPropagation()}
            >
              {/* Botón de Cierre */}
              <button
                onClick={() => setShowAeatModal(false)}
                className="absolute top-4 right-4 text-[rgba(10,12,11,0.6)] dark:text-white/60 hover:text-[#0A0C0B] dark:hover:text-white transition-colors p-1.5 rounded-[2px] bg-[#E6E6E3]/40 dark:bg-[#232326]/40 cursor-pointer"
                aria-label="Cerrar ventana"
              >
                <X className="size-4" />
              </button>

              {/* Título */}
              <div className="space-y-1">
                <h3 className="text-lg font-bold text-[#0A0C0B] dark:text-white tracking-tight">
                  {t('Acuerdo de Colaboración Social con la Agencia Tributaria', 'AEAT Collaboration Agreement for Tax Records')}
                </h3>
                <p className="text-xs text-[rgba(10,12,11,0.6)] dark:text-white/60 font-mono">
                  Avialo Soluciones S.L. • C.I.F. B26802249
                </p>
              </div>

              {/* Cita Oficial del Acuerdo */}
              <div className="p-3.5 rounded-[2px] bg-[#F2F2F0] dark:bg-[#080a09] border border-[#D2D2CE] dark:border-[#303131] space-y-2">
                <span className="text-[10px] font-bold font-mono uppercase tracking-wider text-[rgb(20,122,132)] dark:text-[rgb(158,250,255)] block">
                  {t('TEXTO DEL ACUERDO DE COLABORACIÓN SOCIAL (Nº 17):', 'OFFICIAL SOCIAL COLLABORATION AGREEMENT (Nº 17):')}
                </span>
                <p className="text-xs font-serif leading-relaxed text-[#0A0C0B] dark:text-white/90 italic">
                  "{t(
                    'ACUERDO DE COLABORACIÓN ENTRE LA AGENCIA ESTATAL DE ADMINISTRACIÓN TRIBUTARIA Y AVIALO SOLUCIONES, S.L., PARA EL SUMINISTRO ELECTRÓNICO DE REGISTROS DE FACTURACIÓN (SII), EL SUMINISTRO ELECTRÓNICO DE LOS ASIENTOS CONTABLES DE LOS ESTABLECIMIENTOS AFECTADOS POR LA NORMATIVA DE LOS IMPUESTOS ESPECIALES (SILICIE) Y EL ENVÍO DE LOS FICHEROS QUE CONTIENEN REGISTROS DE FACTURACIÓN GENERADOS POR SISTEMAS DE EMISIÓN DE FACTURAS (VERIFACTU), EN REPRESENTACIÓN DE TERCEROS.',
                    'COLLABORATION AGREEMENT BETWEEN THE SPANISH TAX AGENCY (AEAT) AND AVIALO SOLUCIONES, S.L., FOR THE ELECTRONIC PROVISION OF INVOICING RECORDS (SII), SPECIAL TAXES ACCOUNTING ENTRIES (SILICIE), AND TRANSMISSION OF INVOICING SYSTEM FILES (VERIFACTU), ON BEHALF OF THIRD PARTIES.'
                  )}"
                </p>
              </div>

              {/* Explicación en palabras claras */}
              <p className="text-xs text-[rgba(10,12,11,0.72)] dark:text-white/80 leading-relaxed">
                {t(
                  'Este acuerdo oficial ratifica que la plataforma Avialo Soluciones S.L. ha sido auditada y aprobada por la Agencia Tributaria (AEAT) para la remisión telemática segura de facturación electrónica, SILICIE, SII y registros inalterables VeriFactu en representación de autónomos, empresas y gestorías.',
                  'This official agreement confirms that Avialo Soluciones S.L. is audited and approved by the Spanish Tax Agency (AEAT) for secure electronic invoicing submission, SILICIE, SII, and immutable VeriFactu tax compliance on behalf of freelancers and businesses.'
                )}
              </p>

              {/* Ficha Resumen */}
              <div className="grid grid-cols-2 gap-2 pt-1 text-[11px]">
                <div className="p-2.5 rounded-[2px] bg-[#E6E6E3]/50 dark:bg-[#232326]/50 border border-[#D2D2CE] dark:border-[#303131]">
                  <span className="text-[9px] uppercase tracking-wider text-[rgba(10,12,11,0.6)] dark:text-white/60 block font-mono">
                    {t('Sistemas Homologados', 'Certified Systems')}
                  </span>
                  <span className="font-semibold text-[#0A0C0B] dark:text-white block mt-0.5">
                    VeriFactu • SII • SILICIE
                  </span>
                </div>
                <div className="p-2.5 rounded-[2px] bg-[#E6E6E3]/50 dark:bg-[#232326]/50 border border-[#D2D2CE] dark:border-[#303131]">
                  <span className="text-[9px] uppercase tracking-wider text-[rgba(10,12,11,0.6)] dark:text-white/60 block font-mono">
                    {t('Ámbito de Aplicación', 'Jurisdiction')}
                  </span>
                  <span className="font-semibold text-[#0A0C0B] dark:text-white block mt-0.5">
                    Nacional (AEAT España)
                  </span>
                </div>
              </div>

              {/* Botón de Cierre Secundario */}
              <div className="pt-2">
                <button
                  onClick={() => setShowAeatModal(false)}
                  className="w-full bg-[#0A0C0B] dark:bg-white text-white dark:text-black font-semibold text-xs py-2.5 rounded-[2px] hover:opacity-90 transition-opacity cursor-pointer shadow-sm text-center"
                >
                  {t('Entendido y cerrar', 'Understood & close')}
                </button>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* 5. MODAL INTERACTIVO "PRÓXIMAMENTE" (APPS MÓVILES) */}
      <AnimatePresence>
        {showModal && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black/60 backdrop-blur-md z-50 flex items-center justify-center p-4"
            onClick={() => setShowModal(false)}
          >
            <motion.div
              initial={{ opacity: 0, scale: 0.95, y: 10 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: 10 }}
              transition={{ duration: 0.2 }}
              className="bg-[#FCFCFB] dark:bg-[#131517] border border-[#D2D2CE] dark:border-[#303131] p-6 rounded-[4px] max-w-sm w-full relative shadow-2xl space-y-4 text-left"
              onClick={(e) => e.stopPropagation()}
            >
              {/* Close Button */}
              <button
                onClick={() => setShowModal(false)}
                className="absolute top-4 right-4 text-[rgba(10,12,11,0.6)] dark:text-white/60 hover:text-[#0A0C0B] dark:hover:text-white transition-colors p-1"
                aria-label="Cerrar modal"
              >
                <X className="size-4" />
              </button>

              {/* Badge */}
              <div className="text-[9px] tracking-widest font-mono text-[rgba(10,12,11,0.6)] dark:text-white/60 uppercase border border-[#D2D2CE] dark:border-[#303131] px-2.5 py-0.5 rounded-[2px] bg-[#E6E6E3]/60 dark:bg-[#232326]/60 w-fit">
                PRÓXIMAMENTE
              </div>

              {/* Title & Desc */}
              <div className="space-y-1.5">
                <h3 className="text-base font-bold text-[#0A0C0B] dark:text-white tracking-tight">Apps de iOS y Android</h3>
                <p className="text-xs text-[rgba(10,12,11,0.72)] dark:text-white/70 leading-relaxed">
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
                    className="w-full border border-[#D2D2CE] dark:border-[#303131] bg-[#FCFCFB] dark:bg-[#080a09] text-[#0A0C0B] dark:text-white placeholder-[rgba(10,12,11,0.4)] dark:placeholder-white/40 text-xs px-3.5 py-2.5 rounded-[2px] focus:outline-none focus:border-[#0A0C0B] dark:focus:border-white transition-colors"
                  />
                  <button
                    type="submit"
                    className="w-full bg-[#0A0C0B] dark:bg-white text-white dark:text-black font-semibold text-xs px-4 py-2.5 rounded-[2px] hover:opacity-90 transition-opacity flex items-center justify-center gap-1.5 cursor-pointer shadow-sm"
                  >
                    <span>Avisarme</span>
                    <Send className="size-3.5" />
                  </button>
                </form>
              ) : (
                <motion.div
                  initial={{ opacity: 0, y: 5 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="p-3 rounded-[2px] border border-[rgb(52,138,46)]/40 dark:border-[rgb(104,204,88)]/40 bg-[rgb(52,138,46)]/10 dark:bg-[rgb(104,204,88)]/10 text-[rgb(52,138,46)] dark:text-[rgb(104,204,88)] text-xs flex items-center gap-2 font-medium"
                >
                  <CheckCircle2 className="size-4 shrink-0" />
                  <span>¡Apuntado! Te avisaremos al instante.</span>
                </motion.div>
              )}

              {/* Modal Footer Note */}
              <p className="text-[10px] text-[rgba(10,12,11,0.6)] dark:text-white/60 leading-normal border-t border-[#D2D2CE] dark:border-[#303131] pt-3">
                Mientras tanto, la plataforma web está optimizada para pantallas móviles desde cualquier navegador.
              </p>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </footer>
  );
};
