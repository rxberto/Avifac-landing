import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Navbar } from './Navbar';
import { Footer } from './Footer';
import { useLanguage } from '../context/LanguageContext';
import {
  ShieldCheck,
  Lock,
  FileText,
  Eye,
  Sun,
  BookOpen,
  Mail,
  Building2,
  CheckCircle2,
  AlertCircle,
  ChevronRight,
  ArrowUp,
  RotateCcw,
  Scale,
  CreditCard,
  Ban,
  ScrollText,
  Gavel,
  Users,
  Globe,
} from 'lucide-react';

export const TermsPage = () => {
  const { t } = useLanguage();

  const [fontSize, setFontSize] = useState<'normal' | 'large' | 'xlarge'>('normal');
  const [highContrast, setHighContrast] = useState(false);
  const [dyslexicFont, setDyslexicFont] = useState(false);
  const [showAccessibilityMenu, setShowAccessibilityMenu] = useState(false);
  const [isIndexOpen, setIsIndexOpen] = useState(false);
  const [activeSection, setActiveSection] = useState<string>('objeto');

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        setShowAccessibilityMenu(false);
        setIsIndexOpen(false);
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, []);

  const fontClasses = {
    normal: 'text-sm sm:text-base leading-relaxed',
    large: 'text-base sm:text-lg leading-loose',
    xlarge: 'text-lg sm:text-xl leading-loose',
  };

  const sections = [
    { id: 'objeto', title: t('1. Objeto y Ámbito de Aplicación', '1. Purpose & Scope') },
    { id: 'identificacion', title: t('2. Identificación del Prestador de Servicios', '2. Service Provider Identification') },
    { id: 'definiciones', title: t('3. Definiciones Legales', '3. Legal Definitions') },
    { id: 'aceptacion', title: t('4. Aceptación y Capacidad para Contratar', '4. Acceptance & Capacity to Contract') },
    { id: 'registro', title: t('5. Registro de Cuenta y Obligaciones del Usuario', '5. Account Registration & User Obligations') },
    { id: 'descripcion-servicio', title: t('6. Descripción del Servicio SaaS', '6. SaaS Service Description') },
    { id: 'planes-precios', title: t('7. Planes, Precios y Condiciones de Pago', '7. Plans, Pricing & Payment Terms') },
    { id: 'periodo-prueba', title: t('8. Período de Prueba Gratuita', '8. Free Trial Period') },
    { id: 'duracion-renovacion', title: t('9. Duración, Renovación y Cancelación', '9. Duration, Renewal & Cancellation') },
    { id: 'derecho-desistimiento', title: t('10. Derecho de Desistimiento (14 Días)', '10. Right of Withdrawal (14 Days)') },
    { id: 'licencia-pi', title: t('11. Licencia de Uso y Propiedad Intelectual', '11. License & Intellectual Property') },
    { id: 'obligaciones-fiscales', title: t('12. Obligaciones Fiscales y Normativa SIF/VeriFactu', '12. Tax Obligations & SIF/VeriFactu Compliance') },
    { id: 'niveles-servicio', title: t('13. Niveles de Servicio (SLA) y Disponibilidad', '13. Service Levels (SLA) & Availability') },
    { id: 'limitacion-responsabilidad', title: t('14. Limitación de Responsabilidad', '14. Limitation of Liability') },
    { id: 'uso-prohibido', title: t('15. Usos Prohibidos y Causas de Suspensión', '15. Prohibited Uses & Suspension') },
    { id: 'proteccion-datos', title: t('16. Protección de Datos y Encargado de Tratamiento', '16. Data Protection & Data Processor') },
    { id: 'confidencialidad', title: t('17. Confidencialidad', '17. Confidentiality') },
    { id: 'modificaciones', title: t('18. Modificación de las Condiciones', '18. Modification of Terms') },
    { id: 'resolucion-conflictos', title: t('19. Resolución de Conflictos y Jurisdicción', '19. Dispute Resolution & Jurisdiction') },
    { id: 'contacto', title: t('20. Contacto y Atención al Cliente', '20. Contact & Customer Support') },
  ];

  const scrollToSection = (id: string) => {
    setActiveSection(id);
    const element = document.getElementById(id);
    if (element) {
      const yOffset = -110;
      const y = element.getBoundingClientRect().top + window.pageYOffset + yOffset;
      window.scrollTo({ top: y, behavior: 'smooth' });
    }
  };

  const resetAccessibility = () => {
    setFontSize('normal');
    setHighContrast(false);
    setDyslexicFont(false);
  };

  return (
    <div
      className={`min-h-screen w-full transition-colors duration-300 ${
        highContrast
          ? 'hc-active bg-black text-yellow-300 font-mono'
          : 'bg-[#FCFCFB] dark:bg-[#080a09] text-[#0A0C0B] dark:text-white'
      } ${dyslexicFont ? 'font-sans tracking-wide' : ''}`}
    >
      {highContrast && (
        <style>{`
          .hc-active, .hc-active * {
            background-color: #000000 !important;
            color: #FFFF00 !important;
            border-color: #FFFF00 !important;
          }
          .hc-active a {
            color: #00FFFF !important;
            text-decoration: underline !important;
            font-weight: bold !important;
          }
          .hc-active p, .hc-active li {
            color: #FFFFFF !important;
          }
          .hc-active button {
            background-color: #111111 !important;
            color: #FFFF00 !important;
            border: 2px solid #FFFF00 !important;
          }
        `}</style>
      )}

      <Navbar />

      {/* Header */}
      <header className="relative pt-32 pb-10 px-4 sm:px-6 lg:px-8 max-w-5xl mx-auto border-b border-[#D2D2CE] dark:border-[#303131]">
        <div className="text-center space-y-3">
          <h1 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-[#0A0C0B] dark:text-white">
            {t('Términos y Condiciones Generales de Uso', 'General Terms & Conditions of Use')}
          </h1>
          <p className="text-xs sm:text-sm text-[rgba(10,12,11,0.7)] dark:text-white/70 max-w-2xl mx-auto leading-relaxed">
            {t(
              'Condiciones generales de contratación y uso de la plataforma SaaS de facturación electrónica Avialo, conforme a la LSSI-CE (Ley 34/2002), el Real Decreto Legislativo 1/2007 de defensa de consumidores, el Código Civil español y la normativa tributaria vigente.',
              'General terms and conditions for the Avialo e-invoicing SaaS platform, under LSSI-CE, Spanish Consumer Protection Act, Civil Code, and applicable tax regulations.'
            )}
          </p>
          <div className="pt-2 text-xs font-mono text-emerald-700 dark:text-emerald-400 font-bold">
            {t('Documento Contractual • Versión 1.0 • Vigente a 1 de Agosto de 2026', 'Contractual Document • Version 1.0 • Effective August 1, 2026')}
          </div>
        </div>
      </header>

      {/* Botón Flotante de Índice (Esquina Inferior Izquierda) */}
      <aside className="fixed bottom-6 left-6 z-50">
        <AnimatePresence>
          {isIndexOpen && (
            <motion.div
              initial={{ opacity: 0, scale: 0.95, y: 8 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: 8 }}
              role="dialog"
              aria-label={t('Índice de términos y condiciones', 'Terms table of contents')}
              className="mb-3 p-4 rounded-[4px] bg-[#FCFCFB]/95 dark:bg-[#131517]/95 backdrop-blur-xl border border-[#D2D2CE] dark:border-[#303131] shadow-2xl space-y-2 w-72 sm:w-80 max-h-[70vh] overflow-y-auto text-xs text-left"
            >
              <div className="flex items-center justify-between border-b border-[#D2D2CE] dark:border-[#303131] pb-2 font-bold text-[#0A0C0B] dark:text-white sticky top-0 bg-[#FCFCFB] dark:bg-[#131517] pt-1">
                <span className="flex items-center gap-1.5">
                  <FileText className="w-4 h-4 text-emerald-600 dark:text-emerald-400" />
                  {t('Índice de Secciones', 'Table of Contents')} ({sections.length})
                </span>
                <button
                  onClick={() => setIsIndexOpen(false)}
                  className="text-neutral-400 hover:text-black dark:hover:text-white p-1 rounded cursor-pointer focus:outline-none focus:ring-2 focus:ring-emerald-500"
                  aria-label="Cerrar índice"
                >
                  ✕
                </button>
              </div>
              <div className="space-y-1 pt-1" role="menu">
                {sections.map((sec) => (
                  <button
                    key={sec.id}
                    role="menuitem"
                    onClick={() => { scrollToSection(sec.id); setIsIndexOpen(false); }}
                    className={`w-full text-left px-2.5 py-1.5 rounded-[2px] font-medium transition-colors flex items-center justify-between cursor-pointer focus:outline-none focus:ring-2 focus:ring-emerald-500 ${
                      activeSection === sec.id
                        ? 'bg-[#0A0C0B] text-white dark:bg-white dark:text-black font-bold'
                        : 'text-[rgba(10,12,11,0.8)] dark:text-white/80 hover:bg-[#F2F2F0] dark:hover:bg-[#1f2124]'
                    }`}
                  >
                    <span className="truncate">{sec.title}</span>
                    <ChevronRight className="w-3.5 h-3.5 shrink-0 opacity-60 ml-1" />
                  </button>
                ))}
              </div>
            </motion.div>
          )}
        </AnimatePresence>
        <button
          onClick={() => setIsIndexOpen(!isIndexOpen)}
          tabIndex={0}
          aria-label={t('Abrir índice de términos y condiciones', 'Open terms table of contents')}
          aria-expanded={isIndexOpen}
          aria-haspopup="dialog"
          className="w-11 h-11 rounded-[4px] bg-[#0A0C0B] dark:bg-white text-white dark:text-black shadow-lg flex items-center justify-center hover:opacity-90 transition-opacity focus:ring-2 focus:ring-emerald-500 outline-none cursor-pointer"
        >
          <FileText className="w-5 h-5" />
        </button>
      </aside>

      {/* Botón Flotante de Accesibilidad (Esquina Inferior Derecha) */}
      <aside className="fixed bottom-6 right-6 z-50">
        <AnimatePresence>
          {showAccessibilityMenu && (
            <motion.div
              initial={{ opacity: 0, scale: 0.95, y: 8 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: 8 }}
              role="dialog"
              aria-label={t('Opciones de accesibilidad lectora', 'Reader accessibility options')}
              className="mb-3 p-4 rounded-[4px] bg-[#FCFCFB]/95 dark:bg-[#131517]/95 backdrop-blur-xl border border-[#D2D2CE] dark:border-[#303131] shadow-2xl space-y-3 w-64 text-xs text-left"
            >
              <div className="flex items-center justify-between border-b border-[#D2D2CE] dark:border-[#303131] pb-2 font-bold text-[#0A0C0B] dark:text-white">
                <span className="flex items-center gap-1.5">
                  <Eye className="w-4 h-4 text-emerald-600 dark:text-emerald-400" />
                  {t('Accesibilidad Lectora', 'Reader Accessibility')}
                </span>
                <button
                  onClick={() => setShowAccessibilityMenu(false)}
                  className="text-neutral-400 hover:text-black dark:hover:text-white p-1 rounded cursor-pointer focus:outline-none focus:ring-2 focus:ring-emerald-500"
                  aria-label="Cerrar menú accesibilidad"
                >
                  ✕
                </button>
              </div>
              <div className="space-y-1.5">
                <span className="text-[11px] font-semibold text-neutral-500 block">{t('Tamaño de Texto:', 'Text Size:')}</span>
                <div className="grid grid-cols-3 gap-1 bg-[#F2F2F0] dark:bg-[#1f2124] p-1 rounded-[2px]">
                  {(['normal', 'large', 'xlarge'] as const).map((size, i) => (
                    <button
                      key={size}
                      onClick={() => setFontSize(size)}
                      aria-label={`Tamaño ${size} de texto`}
                      className={`py-1 rounded-[2px] font-bold text-${i === 0 ? '[11px]' : i === 1 ? 'xs' : 'sm'} cursor-pointer focus:ring-2 focus:ring-emerald-500 outline-none ${
                        fontSize === size ? 'bg-[#0A0C0B] text-white dark:bg-white dark:text-black' : 'text-neutral-600 dark:text-neutral-300'
                      }`}
                    >
                      {['A', 'A+', 'A++'][i]}
                    </button>
                  ))}
                </div>
              </div>
              <button
                onClick={() => setHighContrast(!highContrast)}
                aria-pressed={highContrast}
                className={`w-full flex items-center justify-between p-2 rounded-[2px] border font-bold text-[11px] transition-colors cursor-pointer focus:ring-2 focus:ring-emerald-500 outline-none ${
                  highContrast ? 'bg-yellow-300 text-black border-yellow-400' : 'bg-[#F2F2F0] dark:bg-[#1f2124] border-[#D2D2CE] dark:border-[#303131] text-neutral-700 dark:text-neutral-200'
                }`}
              >
                <span className="flex items-center gap-1.5"><Sun className="w-3.5 h-3.5" />{t('Alto Contraste (WCAG)', 'High Contrast (WCAG)')}</span>
                <span>{highContrast ? 'ON' : 'OFF'}</span>
              </button>
              <button
                onClick={() => setDyslexicFont(!dyslexicFont)}
                aria-pressed={dyslexicFont}
                className={`w-full flex items-center justify-between p-2 rounded-[2px] border font-bold text-[11px] transition-colors cursor-pointer focus:ring-2 focus:ring-emerald-500 outline-none ${
                  dyslexicFont ? 'bg-emerald-600 text-white border-emerald-700' : 'bg-[#F2F2F0] dark:bg-[#1f2124] border-[#D2D2CE] dark:border-[#303131] text-neutral-700 dark:text-neutral-200'
                }`}
              >
                <span className="flex items-center gap-1.5"><BookOpen className="w-3.5 h-3.5" />{t('Lectura Fácil', 'Dyslexia Friendly')}</span>
                <span>{dyslexicFont ? 'ON' : 'OFF'}</span>
              </button>
              <button onClick={resetAccessibility} className="w-full flex items-center justify-center gap-1.5 pt-2 border-t border-[#D2D2CE] dark:border-[#303131] text-[10px] font-bold text-neutral-500 hover:text-black dark:hover:text-white transition-colors cursor-pointer">
                <RotateCcw className="w-3 h-3" /><span>{t('Restablecer valores', 'Reset settings')}</span>
              </button>
            </motion.div>
          )}
        </AnimatePresence>
        <button
          onClick={() => setShowAccessibilityMenu(!showAccessibilityMenu)}
          tabIndex={0}
          aria-label={t('Abrir opciones de accesibilidad lectora', 'Open reader accessibility options')}
          aria-expanded={showAccessibilityMenu}
          aria-haspopup="dialog"
          className="w-11 h-11 rounded-[4px] bg-[#0A0C0B] dark:bg-white text-white dark:text-black shadow-lg flex items-center justify-center hover:opacity-90 transition-opacity focus:ring-2 focus:ring-emerald-500 outline-none cursor-pointer"
        >
          <Eye className="w-5 h-5" />
        </button>
      </aside>

      {/* Contenido Principal */}
      <div className="max-w-4xl mx-auto px-4 sm:px-6 py-10">
        <main className="space-y-12 text-left" role="main">

          {/* SECCIÓN 1: Objeto y Ámbito de Aplicación */}
          <section id="objeto" className="space-y-4 pt-2">
            <h2 className="text-xl sm:text-2xl font-bold text-[#0A0C0B] dark:text-white flex items-center gap-2">
              <Scale className="w-5 h-5 text-emerald-600 dark:text-emerald-400 shrink-0" />
              <span>1. Objeto y Ámbito de Aplicación</span>
            </h2>
            <div className={fontClasses[fontSize]}>
              <p className="mb-3">
                Las presentes Condiciones Generales de Contratación y Uso (en adelante, «Condiciones» o «Términos») regulan la relación contractual entre el usuario (en adelante, «Usuario» o «Cliente») y AVIALO SOLUCIONES SL (en adelante, «Avialo», «la Empresa» o «el Prestador») para el acceso y utilización de la plataforma SaaS de facturación electrónica, gestión fiscal y cumplimiento tributario Avialo, accesible a través de <a href="https://avialo.tech" className="text-emerald-600 dark:text-emerald-400 font-bold underline underline-offset-4">avialo.tech</a> y sus subdominios, aplicaciones móviles y servicios API asociados.
              </p>
              <p className="mb-3">
                Estas Condiciones se redactan de conformidad con la <strong>Ley 34/2002, de 11 de julio, de Servicios de la Sociedad de la Información y de Comercio Electrónico (LSSI-CE)</strong>, el <strong>Real Decreto Legislativo 1/2007, de 16 de noviembre, por el que se aprueba el Texto Refundido de la Ley General para la Defensa de los Consumidores y Usuarios</strong>, el <strong>Código Civil español (artículos 1254 y siguientes)</strong>, el <strong>Reglamento (UE) 2016/679 (RGPD)</strong> y la normativa tributaria de facturación electrónica (Ley 11/2021 y RD 1007/2023).
              </p>
              <p>
                Las presentes Condiciones constituyen el acuerdo completo entre las partes y sustituyen cualquier acuerdo previo, verbal o escrito, relativo al objeto del contrato.
              </p>
            </div>
          </section>

          {/* SECCIÓN 2: Identificación del Prestador de Servicios */}
          <section id="identificacion" className="space-y-4 pt-4 border-t border-[#D2D2CE] dark:border-[#303131]">
            <h2 className="text-xl sm:text-2xl font-bold text-[#0A0C0B] dark:text-white flex items-center gap-2">
              <Building2 className="w-5 h-5 text-emerald-600 dark:text-emerald-400 shrink-0" />
              <span>2. Identificación del Prestador de Servicios (Art. 10 LSSI-CE)</span>
            </h2>
            <div className={fontClasses[fontSize]}>
              <p className="mb-4">
                En cumplimiento del artículo 10 de la Ley 34/2002 (LSSI-CE), se informa al Usuario de los datos identificativos del prestador de servicios de la sociedad de la información:
              </p>
              <div className="border border-[#D2D2CE] dark:border-[#303131] bg-[#FCFCFB] dark:bg-[#131517] p-5 rounded-[4px] space-y-2.5 font-mono text-xs sm:text-sm">
                <div className="flex flex-col sm:flex-row sm:justify-between border-b border-[#D2D2CE] dark:border-[#303131] pb-2 gap-1">
                  <span className="font-bold text-neutral-500">Razón Social:</span>
                  <span className="font-extrabold text-[#0A0C0B] dark:text-white">AVIALO SOLUCIONES SL</span>
                </div>
                <div className="flex flex-col sm:flex-row sm:justify-between border-b border-[#D2D2CE] dark:border-[#303131] pb-2 gap-1">
                  <span className="font-bold text-neutral-500">NIF / CIF:</span>
                  <span className="font-extrabold text-emerald-700 dark:text-emerald-400">B26802249</span>
                </div>
                <div className="flex flex-col sm:flex-row sm:justify-between border-b border-[#D2D2CE] dark:border-[#303131] pb-2 gap-1">
                  <span className="font-bold text-neutral-500">Forma Jurídica:</span>
                  <span className="font-bold text-[#0A0C0B] dark:text-white">Sociedad Limitada (S.L.)</span>
                </div>
                <div className="flex flex-col sm:flex-row sm:justify-between border-b border-[#D2D2CE] dark:border-[#303131] pb-2 gap-1">
                  <span className="font-bold text-neutral-500">Domicilio Social:</span>
                  <span>Calle Honduras 20, Puerta B, Planta 4. 28822, Coslada (Madrid), España</span>
                </div>
                <div className="flex flex-col sm:flex-row sm:justify-between border-b border-[#D2D2CE] dark:border-[#303131] pb-2 gap-1">
                  <span className="font-bold text-neutral-500">Actividad CNAE:</span>
                  <span>6220 — Actividades de consultoría informática y gestión de instalaciones informáticas</span>
                </div>
                <div className="flex flex-col sm:flex-row sm:justify-between border-b border-[#D2D2CE] dark:border-[#303131] pb-2 gap-1">
                  <span className="font-bold text-neutral-500">Datos Registrales:</span>
                  <span>Inscrita en el Registro Mercantil de Madrid, Tomo 0, Libro 0, Folio 0, Sección GNE, Hoja M-878808, Inscripción 1ª.</span>
                </div>
                <div className="flex flex-col sm:flex-row sm:justify-between pt-1 gap-1">
                  <span className="font-bold text-neutral-500">Email de contacto:</span>
                  <a href="mailto:hola@avialo.es" className="font-bold text-emerald-600 dark:text-emerald-400 underline underline-offset-4">hola@avialo.es</a>
                </div>
              </div>
            </div>
          </section>

          {/* SECCIÓN 3: Definiciones Legales */}
          <section id="definiciones" className="space-y-4 pt-4 border-t border-[#D2D2CE] dark:border-[#303131]">
            <h2 className="text-xl sm:text-2xl font-bold text-[#0A0C0B] dark:text-white flex items-center gap-2">
              <ScrollText className="w-5 h-5 text-emerald-600 dark:text-emerald-400 shrink-0" />
              <span>3. Definiciones Legales</span>
            </h2>
            <div className={fontClasses[fontSize]}>
              <p className="mb-3">A los efectos de las presentes Condiciones, se establecen las siguientes definiciones:</p>
              <ul className="space-y-2 pl-5 list-disc marker:text-emerald-500">
                <li><strong>«Plataforma» o «Servicio»:</strong> La aplicación web y/o móvil de facturación electrónica, gestión fiscal y cumplimiento tributario ofrecida por Avialo bajo modelo SaaS (Software como Servicio).</li>
                <li><strong>«Usuario» o «Cliente»:</strong> Toda persona física o jurídica que accede, se registra o contrata cualquier plan de la Plataforma.</li>
                <li><strong>«Cuenta»:</strong> El perfil individual creado por el Usuario para acceder al Servicio tras completar el proceso de registro.</li>
                <li><strong>«Plan» o «Suscripción»:</strong> Cada una de las modalidades comerciales de contratación del Servicio (Emprendedor, Pyme, Gestoría, Enterprise) con sus características, límites y precios específicos.</li>
                <li><strong>«Contenido del Usuario»:</strong> Datos, documentos, facturas, presupuestos, albaranes, registros fiscales y cualquier información introducida por el Usuario en la Plataforma.</li>
                <li><strong>«Registro SIF»:</strong> Registro informático de facturación generado conforme al Real Decreto 1007/2023 (VeriFactu), incluyendo huella digital criptográfica y código QR normativo.</li>
                <li><strong>«Período de Facturación»:</strong> El ciclo de pago mensual o anual seleccionado por el Usuario al contratar su Suscripción.</li>
              </ul>
            </div>
          </section>

          {/* SECCIÓN 4: Aceptación y Capacidad para Contratar */}
          <section id="aceptacion" className="space-y-4 pt-4 border-t border-[#D2D2CE] dark:border-[#303131]">
            <h2 className="text-xl sm:text-2xl font-bold text-[#0A0C0B] dark:text-white flex items-center gap-2">
              <CheckCircle2 className="w-5 h-5 text-emerald-600 dark:text-emerald-400 shrink-0" />
              <span>4. Aceptación de las Condiciones y Capacidad para Contratar</span>
            </h2>
            <div className={fontClasses[fontSize]}>
              <p className="mb-3">
                El acceso, registro o utilización de cualquier funcionalidad de la Plataforma supone la aceptación íntegra, expresa e inequívoca de las presentes Condiciones. Si el Usuario no está de acuerdo con alguna de las cláusulas aquí contenidas, deberá abstenerse de utilizar el Servicio.
              </p>
              <p className="mb-3">
                El Usuario declara y garantiza que: (a) es mayor de 18 años o tiene la edad legal mínima en su jurisdicción para contratar; (b) dispone de capacidad legal suficiente para obligarse contractualmente conforme al artículo 1263 del Código Civil; (c) si actúa en nombre de una persona jurídica, posee los poderes de representación necesarios para vincular a la entidad.
              </p>
              <p>
                De acuerdo con el artículo 8 del RGPD y el artículo 7 de la LOPDGDD, la Plataforma no está dirigida a menores de 14 años. El Usuario que registre una cuenta garantiza tener al menos dicha edad.
              </p>
            </div>
          </section>

          {/* SECCIÓN 5: Registro de Cuenta y Obligaciones del Usuario */}
          <section id="registro" className="space-y-4 pt-4 border-t border-[#D2D2CE] dark:border-[#303131]">
            <h2 className="text-xl sm:text-2xl font-bold text-[#0A0C0B] dark:text-white flex items-center gap-2">
              <Users className="w-5 h-5 text-emerald-600 dark:text-emerald-400 shrink-0" />
              <span>5. Registro de Cuenta y Obligaciones del Usuario</span>
            </h2>
            <div className={fontClasses[fontSize]}>
              <p className="mb-3">
                Para utilizar el Servicio, el Usuario deberá crear una Cuenta proporcionando información veraz, exacta, actualizada y completa. El Usuario se compromete a:
              </p>
              <ul className="space-y-2 pl-5 list-disc marker:text-emerald-500">
                <li>Mantener la confidencialidad de sus credenciales de acceso (email y contraseña) y, en su caso, activar la autenticación de doble factor (2FA).</li>
                <li>Notificar inmediatamente a Avialo cualquier uso no autorizado de su Cuenta o sospecha de vulneración de seguridad a través de <a href="mailto:hola@avialo.es" className="text-emerald-600 dark:text-emerald-400 font-bold underline underline-offset-4">hola@avialo.es</a>.</li>
                <li>No compartir su Cuenta con terceros ni crear cuentas múltiples para eludir los límites del plan contratado.</li>
                <li>Utilizar la Plataforma exclusivamente para fines lícitos y conforme a la legislación vigente.</li>
                <li>Garantizar la veracidad de los datos fiscales introducidos (NIF, razón social, domicilio fiscal, régimen tributario).</li>
              </ul>
              <p className="mt-3">
                Avialo se reserva el derecho de suspender o cancelar cualquier Cuenta que proporcione datos falsos o que incumpla las presentes Condiciones, sin perjuicio de las acciones legales que pudieran corresponder.
              </p>
            </div>
          </section>

          {/* SECCIÓN 6: Descripción del Servicio SaaS */}
          <section id="descripcion-servicio" className="space-y-4 pt-4 border-t border-[#D2D2CE] dark:border-[#303131]">
            <h2 className="text-xl sm:text-2xl font-bold text-[#0A0C0B] dark:text-white flex items-center gap-2">
              <Globe className="w-5 h-5 text-emerald-600 dark:text-emerald-400 shrink-0" />
              <span>6. Descripción del Servicio SaaS de Facturación Electrónica</span>
            </h2>
            <div className={fontClasses[fontSize]}>
              <p className="mb-3">
                Avialo proporciona una plataforma de facturación electrónica integral que incluye, según el plan contratado, las siguientes funcionalidades principales:
              </p>
              <ul className="space-y-2 pl-5 list-disc marker:text-emerald-500">
                <li>Emisión de facturas ordinarias, simplificadas, rectificativas y recapitulativas conforme al RD 1619/2012.</li>
                <li>Generación de presupuestos, albaranes, facturas proforma y notas de cargo/abono.</li>
                <li>Cumplimiento automático del Reglamento VeriFactu (RD 1007/2023): generación de registros SIF, encadenamiento hash SHA-256, código QR normativo y remisión telemática a la AEAT.</li>
                <li>Integración con el Punto General de Entrada de Facturas Electrónicas (FACe) para facturación B2G.</li>
                <li>Asistente fiscal basado en Inteligencia Artificial para consultas tributarias.</li>
                <li>Panel de gestión para gestorías y asesorías con gestión multicliente.</li>
                <li>Cobros recurrentes automatizados y pasarelas de pago integradas.</li>
                <li>Exportación de datos en formatos estándar (PDF, XML FacturaE, CSV, Excel).</li>
              </ul>
              <p className="mt-3">
                El catálogo de funcionalidades puede ser ampliado o modificado por Avialo, previa comunicación al Usuario. Las funcionalidades críticas de cumplimiento normativo (SIF/VeriFactu) no serán eliminadas durante la vigencia de la suscripción activa del Usuario.
              </p>
            </div>
          </section>

          {/* SECCIÓN 7: Planes, Precios y Condiciones de Pago */}
          <section id="planes-precios" className="space-y-4 pt-4 border-t border-[#D2D2CE] dark:border-[#303131]">
            <h2 className="text-xl sm:text-2xl font-bold text-[#0A0C0B] dark:text-white flex items-center gap-2">
              <CreditCard className="w-5 h-5 text-emerald-600 dark:text-emerald-400 shrink-0" />
              <span>7. Planes, Precios y Condiciones de Pago</span>
            </h2>
            <div className={fontClasses[fontSize]}>
              <p className="mb-3">
                Avialo ofrece distintos planes de suscripción cuyos precios, características y límites se encuentran detallados en la página de precios de la Plataforma (<a href="/#precios" className="text-emerald-600 dark:text-emerald-400 font-bold underline underline-offset-4">avialo.tech/#precios</a>). Los precios mostrados no incluyen el Impuesto sobre el Valor Añadido (IVA) salvo indicación expresa en contrario.
              </p>
              <ul className="space-y-2 pl-5 list-disc marker:text-emerald-500">
                <li><strong>Modalidad de Pago:</strong> Mensual o anual, mediante tarjeta de crédito/débito, domiciliación bancaria o cualquier método habilitado. El pago anual incluye un descuento respecto al pago mensual, según las promociones vigentes.</li>
                <li><strong>Facturación Anticipada:</strong> Los importes de suscripción se facturan por anticipado al inicio de cada Período de Facturación.</li>
                <li><strong>Impagos:</strong> En caso de impago, Avialo se reserva el derecho de suspender el acceso al Servicio tras un preaviso de 7 días naturales. Los datos del Usuario serán conservados durante un plazo de 90 días desde la suspensión, período durante el cual el Usuario podrá regularizar su situación. Transcurrido dicho plazo sin regularización, la cuenta podrá ser cancelada, sin perjuicio de las obligaciones de conservación de registros fiscales SIF impuestas por la ley.</li>
                <li><strong>Modificación de Precios:</strong> Avialo podrá modificar los precios de sus planes notificándolo al Usuario con al menos 30 días naturales de antelación al siguiente Período de Facturación. El Usuario que no acepte la modificación podrá cancelar su suscripción antes de la entrada en vigor del nuevo precio sin penalización alguna.</li>
              </ul>
            </div>
          </section>

          {/* SECCIÓN 8: Período de Prueba Gratuita */}
          <section id="periodo-prueba" className="space-y-4 pt-4 border-t border-[#D2D2CE] dark:border-[#303131]">
            <h2 className="text-xl sm:text-2xl font-bold text-[#0A0C0B] dark:text-white flex items-center gap-2">
              <CheckCircle2 className="w-5 h-5 text-emerald-600 dark:text-emerald-400 shrink-0" />
              <span>8. Período de Prueba Gratuita</span>
            </h2>
            <div className={fontClasses[fontSize]}>
              <p className="mb-3">
                Avialo podrá ofrecer un período de prueba gratuita (en adelante, «Trial») cuya duración y condiciones específicas se comunicarán al Usuario en el momento del registro.
              </p>
              <ul className="space-y-2 pl-5 list-disc marker:text-emerald-500">
                <li>Durante el Trial, el Usuario tendrá acceso a las funcionalidades del plan seleccionado con los límites propios de la prueba.</li>
                <li>Al finalizar el Trial, si el Usuario no ha contratado un plan de pago, el acceso a las funcionalidades premium se desactivará automáticamente. No se realizará ningún cargo sin autorización expresa del Usuario.</li>
                <li>Cada Usuario tiene derecho a un único período de prueba. La creación de cuentas múltiples para acceder a períodos de prueba adicionales constituye un uso prohibido.</li>
              </ul>
            </div>
          </section>

          {/* SECCIÓN 9: Duración, Renovación y Cancelación */}
          <section id="duracion-renovacion" className="space-y-4 pt-4 border-t border-[#D2D2CE] dark:border-[#303131]">
            <h2 className="text-xl sm:text-2xl font-bold text-[#0A0C0B] dark:text-white flex items-center gap-2">
              <Lock className="w-5 h-5 text-emerald-600 dark:text-emerald-400 shrink-0" />
              <span>9. Duración del Contrato, Renovación Automática y Cancelación</span>
            </h2>
            <div className={fontClasses[fontSize]}>
              <p className="mb-3">
                La suscripción tiene la duración del Período de Facturación seleccionado (mensual o anual) y se <strong>renueva automáticamente</strong> al finalizar cada período por un período idéntico, salvo que el Usuario o Avialo comuniquen su voluntad de no renovar.
              </p>
              <ul className="space-y-2 pl-5 list-disc marker:text-emerald-500">
                <li><strong>Cancelación por el Usuario:</strong> El Usuario puede cancelar su suscripción en cualquier momento desde el panel de configuración de su cuenta o comunicándolo a <a href="mailto:hola@avialo.es" className="text-emerald-600 dark:text-emerald-400 font-bold underline underline-offset-4">hola@avialo.es</a>. La cancelación surtirá efecto al finalizar el Período de Facturación en curso, sin derecho a reembolso de la cuota ya abonada, salvo lo previsto en la cláusula 10 (Derecho de Desistimiento).</li>
                <li><strong>Cancelación por Avialo:</strong> Avialo podrá resolver el contrato y cancelar la cuenta del Usuario por incumplimiento grave de las presentes Condiciones, con preaviso de 15 días naturales salvo en casos de urgencia (fraude, actividad ilícita o amenaza a la seguridad).</li>
                <li><strong>Efectos de la Cancelación:</strong> Tras la cancelación, el Usuario dispondrá de un plazo de 30 días para exportar sus datos en formatos estándar. Avialo conservará los registros SIF conforme al deber legal de custodia de 4 años (Art. 66 Ley General Tributaria).</li>
              </ul>
            </div>
          </section>

          {/* SECCIÓN 10: Derecho de Desistimiento (14 Días) */}
          <section id="derecho-desistimiento" className="space-y-4 pt-4 border-t border-[#D2D2CE] dark:border-[#303131]">
            <h2 className="text-xl sm:text-2xl font-bold text-[#0A0C0B] dark:text-white flex items-center gap-2">
              <Gavel className="w-5 h-5 text-emerald-600 dark:text-emerald-400 shrink-0" />
              <span>10. Derecho de Desistimiento (14 Días Naturales)</span>
            </h2>
            <div className={fontClasses[fontSize]}>
              <p className="mb-3">
                De conformidad con los artículos 68 a 79 del Real Decreto Legislativo 1/2007 (Texto Refundido de la Ley General para la Defensa de los Consumidores y Usuarios), el Usuario que tenga la condición de consumidor o usuario (persona física que actúa con un propósito ajeno a su actividad comercial, empresarial, oficio o profesión) tiene derecho a desistir del contrato en un plazo de <strong>14 días naturales</strong> a contar desde la fecha de contratación del Servicio, sin necesidad de justificación alguna.
              </p>
              <div className="border border-emerald-500/30 bg-emerald-500/10 p-4 rounded-[4px] space-y-2 my-3">
                <p className="text-xs sm:text-sm font-bold text-emerald-800 dark:text-emerald-300">Para ejercer el derecho de desistimiento:</p>
                <p className="text-xs sm:text-sm">Envíe comunicación inequívoca (correo electrónico) a <a href="mailto:hola@avialo.es" className="font-bold underline underline-offset-4">hola@avialo.es</a> indicando su voluntad de desistir del contrato, junto con sus datos identificativos y el plan contratado.</p>
                <p className="text-xs sm:text-sm">Avialo reembolsará todos los pagos recibidos en un plazo máximo de 14 días naturales mediante el mismo medio de pago utilizado en la transacción original.</p>
              </div>
              <div className="border border-amber-500/40 bg-amber-500/10 p-3.5 rounded-[4px] text-amber-900 dark:text-amber-200 text-xs sm:text-sm leading-relaxed">
                <div className="flex items-center gap-2 font-bold text-amber-800 dark:text-amber-300 mb-1">
                  <AlertCircle className="w-4 h-4 shrink-0 text-amber-600 dark:text-amber-400" />
                  <span>Excepción al derecho de desistimiento:</span>
                </div>
                <p>
                  Conforme al artículo 103.a) del RDL 1/2007, si el Usuario ha consentido expresamente que la prestación del servicio comience durante el plazo de desistimiento y ha reconocido que pierde su derecho una vez ejecutado completamente el contrato, el desistimiento no procederá respecto a los servicios ya prestados.
                </p>
              </div>
            </div>
          </section>

          {/* SECCIÓN 11: Licencia de Uso y Propiedad Intelectual */}
          <section id="licencia-pi" className="space-y-4 pt-4 border-t border-[#D2D2CE] dark:border-[#303131]">
            <h2 className="text-xl sm:text-2xl font-bold text-[#0A0C0B] dark:text-white flex items-center gap-2">
              <ShieldCheck className="w-5 h-5 text-emerald-600 dark:text-emerald-400 shrink-0" />
              <span>11. Licencia de Uso y Propiedad Intelectual e Industrial</span>
            </h2>
            <div className={fontClasses[fontSize]}>
              <p className="mb-3">
                Avialo concede al Usuario una licencia de uso <strong>no exclusiva, intransferible, revocable y limitada</strong> al período de vigencia de la suscripción contratada para acceder y utilizar la Plataforma conforme a las presentes Condiciones.
              </p>
              <ul className="space-y-2 pl-5 list-disc marker:text-emerald-500">
                <li><strong>Propiedad de Avialo:</strong> Todos los derechos de propiedad intelectual e industrial sobre la Plataforma, su código fuente, diseño, interfaces, logotipos, marcas, nombres comerciales, algoritmos, documentación técnica y modelos de IA son titularidad exclusiva de AVIALO SOLUCIONES SL, protegidos por la Ley de Propiedad Intelectual (RDL 1/1996) y la Ley de Marcas (Ley 17/2001).</li>
                <li><strong>Propiedad del Usuario:</strong> El Contenido del Usuario (facturas, datos fiscales, documentos) permanece en todo momento como propiedad exclusiva del Usuario. Avialo no adquiere ningún derecho de propiedad sobre dichos contenidos.</li>
                <li><strong>Prohibiciones:</strong> El Usuario no podrá reproducir, distribuir, descompilar, realizar ingeniería inversa, sublicenciar ni crear obras derivadas de la Plataforma o cualquiera de sus componentes.</li>
              </ul>
            </div>
          </section>

          {/* SECCIÓN 12: Obligaciones Fiscales y Normativa SIF/VeriFactu */}
          <section id="obligaciones-fiscales" className="space-y-4 pt-4 border-t border-[#D2D2CE] dark:border-[#303131]">
            <h2 className="text-xl sm:text-2xl font-bold text-[#0A0C0B] dark:text-white flex items-center gap-2">
              <FileText className="w-5 h-5 text-emerald-600 dark:text-emerald-400 shrink-0" />
              <span>12. Obligaciones Fiscales del Usuario y Cumplimiento SIF/VeriFactu</span>
            </h2>
            <div className={fontClasses[fontSize]}>
              <p className="mb-3">
                El Usuario es el único responsable del cumplimiento de sus obligaciones tributarias. Avialo actúa como herramienta tecnológica de soporte y no como asesor fiscal, contable ni jurídico. En particular:
              </p>
              <ul className="space-y-2 pl-5 list-disc marker:text-emerald-500">
                <li>La Plataforma facilita la generación de registros SIF conformes al RD 1007/2023, pero el Usuario es responsable de la exactitud de los datos fiscales introducidos (bases imponibles, tipos de IVA/IRPF, datos del destinatario).</li>
                <li>La remisión telemática de registros a la AEAT se realiza de forma automatizada, pero el Usuario debe verificar que sus obligaciones fiscales (modelos 303, 390, 111, 130, etc.) se presentan correctamente.</li>
                <li>Las sugerencias del Asistente de IA tienen carácter meramente informativo y orientativo. No constituyen asesoramiento fiscal, contable ni jurídico vinculante.</li>
                <li>Los registros SIF emitidos son inalterables por imperativo legal. El Usuario no podrá solicitar la eliminación o modificación retroactiva de facturas expedidas.</li>
              </ul>
            </div>
          </section>

          {/* SECCIÓN 13: Niveles de Servicio (SLA) y Disponibilidad */}
          <section id="niveles-servicio" className="space-y-4 pt-4 border-t border-[#D2D2CE] dark:border-[#303131]">
            <h2 className="text-xl sm:text-2xl font-bold text-[#0A0C0B] dark:text-white flex items-center gap-2">
              <CheckCircle2 className="w-5 h-5 text-emerald-600 dark:text-emerald-400 shrink-0" />
              <span>13. Niveles de Servicio (SLA) y Disponibilidad de la Plataforma</span>
            </h2>
            <div className={fontClasses[fontSize]}>
              <p className="mb-3">
                Avialo se compromete a mantener un objetivo de disponibilidad del Servicio del <strong>99,5%</strong> mensual, excluyendo las ventanas de mantenimiento programado que serán comunicadas con al menos 48 horas de antelación.
              </p>
              <ul className="space-y-2 pl-5 list-disc marker:text-emerald-500">
                <li><strong>Mantenimiento Programado:</strong> Avialo realizará tareas de mantenimiento preventivo preferentemente en horario de bajo tráfico (domingos, 02:00–06:00 CET).</li>
                <li><strong>Fuerza Mayor:</strong> Avialo no será responsable de interrupciones causadas por eventos de fuerza mayor (desastres naturales, fallos de infraestructura de terceros, ciberataques masivos, decisiones gubernamentales o caídas de servicios de la AEAT).</li>
                <li><strong>Copias de Seguridad:</strong> Se realizan copias de seguridad automatizadas diarias de todos los datos de los Usuarios, con retención mínima de 30 días.</li>
              </ul>
            </div>
          </section>

          {/* SECCIÓN 14: Limitación de Responsabilidad */}
          <section id="limitacion-responsabilidad" className="space-y-4 pt-4 border-t border-[#D2D2CE] dark:border-[#303131]">
            <h2 className="text-xl sm:text-2xl font-bold text-[#0A0C0B] dark:text-white flex items-center gap-2">
              <AlertCircle className="w-5 h-5 text-emerald-600 dark:text-emerald-400 shrink-0" />
              <span>14. Limitación de Responsabilidad</span>
            </h2>
            <div className={fontClasses[fontSize]}>
              <p className="mb-3">
                En la medida máxima permitida por la legislación aplicable y sin perjuicio de los derechos irrenunciables del consumidor conforme al RDL 1/2007:
              </p>
              <ul className="space-y-2 pl-5 list-disc marker:text-emerald-500">
                <li>La responsabilidad total acumulada de Avialo frente al Usuario por cualquier concepto no excederá del importe total abonado por el Usuario en los <strong>12 meses inmediatamente anteriores</strong> al hecho causante de la reclamación.</li>
                <li>Avialo no será responsable de daños indirectos, incidentales, especiales, consecuenciales o punitivos, incluidos pero no limitados a: pérdida de beneficios, pérdida de datos (salvo registros SIF custodiados por imperativo legal), interrupción del negocio o pérdida de clientela.</li>
                <li>Avialo no será responsable de los errores, omisiones o inexactitudes en los datos fiscales introducidos por el Usuario en la Plataforma.</li>
                <li>Las recomendaciones del Asistente de IA no generan responsabilidad contractual ni extracontractual alguna para Avialo.</li>
              </ul>
            </div>
          </section>

          {/* SECCIÓN 15: Usos Prohibidos y Causas de Suspensión */}
          <section id="uso-prohibido" className="space-y-4 pt-4 border-t border-[#D2D2CE] dark:border-[#303131]">
            <h2 className="text-xl sm:text-2xl font-bold text-[#0A0C0B] dark:text-white flex items-center gap-2">
              <Ban className="w-5 h-5 text-emerald-600 dark:text-emerald-400 shrink-0" />
              <span>15. Usos Prohibidos y Causas de Suspensión o Cancelación</span>
            </h2>
            <div className={fontClasses[fontSize]}>
              <p className="mb-3">
                Queda expresamente prohibido utilizar la Plataforma para:
              </p>
              <ul className="space-y-2 pl-5 list-disc marker:text-emerald-500">
                <li>Actividades ilícitas, fraudulentas o contrarias a la buena fe y a la legislación vigente.</li>
                <li>Emisión de facturas falsas, simuladas o que no reflejen operaciones reales, conforme a la Ley 11/2021 de prevención del fraude fiscal.</li>
                <li>Vulnerar la seguridad de la Plataforma, acceder a cuentas ajenas o intentar eludir las medidas de protección técnicas.</li>
                <li>Utilizar robots, scrapers o herramientas automatizadas de extracción de datos no autorizadas.</li>
                <li>Sublicenciar, revender o facilitar el acceso a la Plataforma a terceros no autorizados.</li>
                <li>Transmitir malware, virus, código malicioso o cualquier elemento que pueda comprometer la integridad del sistema.</li>
                <li>Sobrecargar deliberadamente la infraestructura mediante ataques de denegación de servicio (DoS/DDoS).</li>
              </ul>
              <p className="mt-3">
                El incumplimiento de esta cláusula faculta a Avialo para suspender o cancelar la cuenta del Usuario de forma inmediata, sin perjuicio de las acciones legales que pudieran corresponder y sin derecho a reembolso.
              </p>
            </div>
          </section>

          {/* SECCIÓN 16: Protección de Datos y Encargado de Tratamiento */}
          <section id="proteccion-datos" className="space-y-4 pt-4 border-t border-[#D2D2CE] dark:border-[#303131]">
            <h2 className="text-xl sm:text-2xl font-bold text-[#0A0C0B] dark:text-white flex items-center gap-2">
              <Lock className="w-5 h-5 text-emerald-600 dark:text-emerald-400 shrink-0" />
              <span>16. Protección de Datos Personales y Condición de Encargado de Tratamiento</span>
            </h2>
            <div className={fontClasses[fontSize]}>
              <p className="mb-3">
                La relación entre Avialo y el Usuario respecto al tratamiento de datos personales de los clientes del Usuario se rige por el artículo 28 del RGPD:
              </p>
              <ul className="space-y-2 pl-5 list-disc marker:text-emerald-500">
                <li><strong>Avialo como Encargado de Tratamiento:</strong> Cuando el Usuario introduce datos personales de sus clientes (nombres, NIFs, direcciones) en las facturas, Avialo actúa como encargado del tratamiento conforme al artículo 28 del RGPD, tratando dichos datos únicamente para la prestación del Servicio y siguiendo las instrucciones documentadas del Usuario (responsable del tratamiento).</li>
                <li><strong>Medidas de Seguridad:</strong> Avialo aplicará las medidas técnicas y organizativas adecuadas conforme al artículo 32 del RGPD (cifrado AES-256, control de accesos, pseudonimización, copias de seguridad).</li>
                <li><strong>Subencargados:</strong> Avialo podrá recurrir a subencargados del tratamiento siempre que: (a) informe al Usuario, (b) imponga al subencargado las mismas obligaciones de protección de datos, y (c) el subencargado opere dentro de la UE/EEE.</li>
                <li><strong>Devolución y Supresión:</strong> A la finalización del contrato, Avialo devolverá los datos al Usuario y suprimirá las copias existentes, salvo aquellos datos cuya conservación sea obligatoria por ley (registros SIF, art. 66 LGT).</li>
              </ul>
              <p className="mt-3">
                El tratamiento de los datos personales del propio Usuario se rige por la <a href="/privacidad" className="text-emerald-600 dark:text-emerald-400 font-bold underline underline-offset-4">Política de Privacidad</a> y la <a href="/proteccion-datos" className="text-emerald-600 dark:text-emerald-400 font-bold underline underline-offset-4">Política de Protección de Datos</a> de Avialo.
              </p>
            </div>
          </section>

          {/* SECCIÓN 17: Confidencialidad */}
          <section id="confidencialidad" className="space-y-4 pt-4 border-t border-[#D2D2CE] dark:border-[#303131]">
            <h2 className="text-xl sm:text-2xl font-bold text-[#0A0C0B] dark:text-white flex items-center gap-2">
              <Lock className="w-5 h-5 text-emerald-600 dark:text-emerald-400 shrink-0" />
              <span>17. Confidencialidad</span>
            </h2>
            <div className={fontClasses[fontSize]}>
              <p className="mb-3">
                Ambas partes se comprometen a mantener la más estricta confidencialidad sobre toda información técnica, comercial, fiscal y financiera a la que tengan acceso como consecuencia de la ejecución del presente contrato.
              </p>
              <p className="mb-3">
                Esta obligación de confidencialidad subsistirá durante la vigencia del contrato y durante un período de <strong>3 años</strong> tras su resolución por cualquier causa, salvo que la información sea de dominio público, deba ser revelada por mandato legal o judicial, o se cuente con autorización expresa de la parte titular.
              </p>
            </div>
          </section>

          {/* SECCIÓN 18: Modificación de las Condiciones */}
          <section id="modificaciones" className="space-y-4 pt-4 border-t border-[#D2D2CE] dark:border-[#303131]">
            <h2 className="text-xl sm:text-2xl font-bold text-[#0A0C0B] dark:text-white flex items-center gap-2">
              <FileText className="w-5 h-5 text-emerald-600 dark:text-emerald-400 shrink-0" />
              <span>18. Modificación de las Condiciones Generales</span>
            </h2>
            <div className={fontClasses[fontSize]}>
              <p className="mb-3">
                Avialo se reserva el derecho de modificar las presentes Condiciones en cualquier momento para adecuarlas a cambios legislativos, jurisprudenciales, regulatorios o comerciales. Cualquier modificación sustancial será notificada al Usuario con al menos <strong>30 días naturales</strong> de antelación mediante correo electrónico a la dirección asociada a su cuenta y/o mediante aviso destacado en la Plataforma.
              </p>
              <p>
                El uso continuado de la Plataforma tras la entrada en vigor de las nuevas Condiciones constituirá la aceptación de las mismas. Si el Usuario no está de acuerdo con las modificaciones, podrá resolver el contrato sin penalización antes de la fecha de entrada en vigor de las nuevas condiciones.
              </p>
            </div>
          </section>

          {/* SECCIÓN 19: Resolución de Conflictos y Jurisdicción */}
          <section id="resolucion-conflictos" className="space-y-4 pt-4 border-t border-[#D2D2CE] dark:border-[#303131]">
            <h2 className="text-xl sm:text-2xl font-bold text-[#0A0C0B] dark:text-white flex items-center gap-2">
              <Gavel className="w-5 h-5 text-emerald-600 dark:text-emerald-400 shrink-0" />
              <span>19. Legislación Aplicable, Resolución de Conflictos y Jurisdicción</span>
            </h2>
            <div className={fontClasses[fontSize]}>
              <p className="mb-3">
                Las presentes Condiciones se rigen e interpretan de conformidad con la <strong>legislación española</strong>.
              </p>
              <ul className="space-y-2 pl-5 list-disc marker:text-emerald-500">
                <li><strong>Resolución Alternativa de Conflictos:</strong> Conforme al Reglamento (UE) 524/2013, los consumidores pueden acudir a la Plataforma de Resolución de Litigios en Línea de la Comisión Europea: <a href="https://ec.europa.eu/consumers/odr" target="_blank" rel="noopener noreferrer" className="font-bold underline underline-offset-4">https://ec.europa.eu/consumers/odr</a>.</li>
                <li><strong>Jurisdicción para Consumidores:</strong> Si el Usuario tiene la condición de consumidor, serán competentes los Juzgados y Tribunales de su domicilio, conforme al artículo 52.3 de la Ley de Enjuiciamiento Civil.</li>
                <li><strong>Jurisdicción para Profesionales y Empresas:</strong> Para las controversias entre empresarios o profesionales, ambas partes se someten expresamente a los Juzgados y Tribunales de la ciudad de Madrid, con renuncia a cualquier otro fuero que pudiera corresponderles.</li>
              </ul>
            </div>
          </section>

          {/* SECCIÓN 20: Contacto y Atención al Cliente */}
          <section id="contacto" className="space-y-4 pt-4 border-t border-[#D2D2CE] dark:border-[#303131]">
            <h2 className="text-xl sm:text-2xl font-bold text-[#0A0C0B] dark:text-white flex items-center gap-2">
              <Mail className="w-5 h-5 text-emerald-600 dark:text-emerald-400 shrink-0" />
              <span>20. Contacto y Atención al Cliente</span>
            </h2>
            <div className={fontClasses[fontSize]}>
              <p className="mb-3">
                Para cualquier consulta, reclamación o solicitud relacionada con las presentes Condiciones, el Usuario puede contactar con Avialo a través de:
              </p>
              <div className="border border-[#D2D2CE] dark:border-[#303131] p-4 rounded-[4px] bg-[#FCFCFB] dark:bg-[#131517] space-y-1.5 font-mono text-xs">
                <p><strong>AVIALO SOLUCIONES SL</strong> • CIF B26802249</p>
                <p>Domicilio: Calle Honduras 20, Puerta B, Planta 4. 28822, Coslada (Madrid), España</p>
                <p>Correo electrónico: <a href="mailto:hola@avialo.es" className="text-emerald-600 dark:text-emerald-400 font-bold underline underline-offset-4">hola@avialo.es</a></p>
                <p>Sitio web: <a href="https://avialo.tech" className="text-emerald-600 dark:text-emerald-400 font-bold underline underline-offset-4">https://avialo.tech</a></p>
              </div>
            </div>
          </section>

          {/* Botón Volver Arriba */}
          <div className="pt-8 flex justify-center">
            <button
              onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
              className="inline-flex items-center gap-2 px-5 py-2.5 rounded-[4px] bg-[#0A0C0B] dark:bg-white text-white dark:text-black font-bold text-xs hover:opacity-90 transition-opacity shadow-sm cursor-pointer"
            >
              <ArrowUp className="w-4 h-4" />
              <span>{t('Volver al inicio de la página', 'Back to top')}</span>
            </button>
          </div>

        </main>
      </div>

      <Footer />
    </div>
  );
};

export default TermsPage;
