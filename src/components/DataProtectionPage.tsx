import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Navbar } from './Navbar';
import { Footer } from './Footer';
import { useLanguage } from '../context/LanguageContext';
import {
  ShieldCheck,
  Lock,
  FileText,
  Server,
  Sparkles,
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
} from 'lucide-react';

export const DataProtectionPage = () => {
  const { t } = useLanguage();

  // Controles de Accesibilidad Flotantes (Esquina Derecha)
  const [fontSize, setFontSize] = useState<'normal' | 'large' | 'xlarge'>('normal');
  const [highContrast, setHighContrast] = useState(false);
  const [dyslexicFont, setDyslexicFont] = useState(false);
  const [showAccessibilityMenu, setShowAccessibilityMenu] = useState(false);

  // Botón Flotante de Índice (Esquina Izquierda, cerrado por defecto)
  const [isIndexOpen, setIsIndexOpen] = useState(false);
  const [activeSection, setActiveSection] = useState<string>('responsable');

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  // Cierre automático con tecla Escape para máxima accesibilidad
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
    { id: 'responsable', title: t('1. Responsable del Tratamiento y Datos Fiscales', '1. Data Controller & Tax Details') },
    { id: 'normativa-tributaria', title: t('2. Normativa Tributaria y Fraude Fiscal (Ley 11/2021)', '2. Tax Regulations & Anti-Fraud Law') },
    { id: 'verifactu-sif', title: t('3. Reglamento VeriFactu (RD 1007/2023) y SIF Garante', '3. VeriFactu Regulation & Guaranteed SIF') },
    { id: 'aeat-face', title: t('4. Acuerdo AEAT Nº 17, FACe y Adaptación Foral TicketBAI', '4. AEAT Agreement Nº 17, FACe & TicketBAI Adaptation') },
    { id: 'inalterabilidad', title: t('5. Inalterabilidad de Registros y Deber Legal de Custodia (4 Años)', '5. Record Immutability & 4-Year Mandatory Custody') },
    { id: 'residencia-seguridad', title: t('6. Residencia de Datos 100% en UE, Cifrado y HSM', '6. 100% EU Data Residency, Encryption & HSM') },
    { id: 'ia-fiscal', title: t('7. Tratamiento de Datos por el Copiloto de IA Fiscal', '7. AI Tax Copilot Data Processing') },
    { id: 'auditoria-2fa', title: t('8. Control de Acceso, Autenticación 2FA e Historial de Auditoría', '8. Access Control, 2FA & Audit History') },
    { id: 'derechos-arco', title: t('9. Ejercicio de Derechos ARCO+ y Excepción Fiscal', '9. Exercise of Rights & Tax Exception') },
    { id: 'contacto-dpo', title: t('10. Contacto de Protección de Datos', '10. Data Protection Contact') },
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
      {/* Inyección CSS de Alto Contraste WCAG AAA */}
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

      {/* Header Principal de la Página de Protección de Datos */}
      <header className="relative pt-32 pb-10 px-4 sm:px-6 lg:px-8 max-w-5xl mx-auto border-b border-[#D2D2CE] dark:border-[#303131]">
        <div className="text-center space-y-3">
          <h1 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-[#0A0C0B] dark:text-white">
            {t('Política de Protección de Datos Fiscales & Cumplimiento SIF', 'Tax Data Protection & SIF Compliance Policy')}
          </h1>
          <p className="text-xs sm:text-sm text-[rgba(10,12,11,0.7)] dark:text-white/70 max-w-2xl mx-auto leading-relaxed">
            {t(
              'Regulación específica del tratamiento, inalterabilidad y custodia de registros informáticos de facturación conforme a la Ley 11/2021 Anti-fraude y el Real Decreto 1007/2023 (VeriFactu) de la Agencia Tributaria.',
              'Specific regulation on processing, immutability, and custody of e-invoicing records under Anti-Fraud Act 11/2021 and VeriFactu RD 1007/2023.'
            )}
          </p>
          <div className="pt-2 text-xs font-mono text-emerald-700 dark:text-emerald-400 font-bold">
            {t('Documento Técnico-Legal • Cumplimiento Ley 11/2021, RD 1007/2023 y Orden HAC/1177/2024 • Versión 2.4 SIF', 'Technical-Legal Document • Ley 11/2021, RD 1007/2023 & Orden HAC/1177/2024 Compliance • Version 2.4 SIF')}
          </div>
        </div>
      </header>

      {/* Botón Flotante de Índice Legal (Esquina Inferior Izquierda) */}
      <aside className="fixed bottom-6 left-6 z-50">
        <AnimatePresence>
          {isIndexOpen && (
            <motion.div
              initial={{ opacity: 0, scale: 0.95, y: 8 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: 8 }}
              role="dialog"
              aria-label={t('Índice de protección de datos fiscales', 'Navigable tax data index')}
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
                    onClick={() => {
                      scrollToSection(sec.id);
                      setIsIndexOpen(false);
                    }}
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
          aria-label={t('Abrir índice de protección de datos', 'Open tax data index')}
          aria-expanded={isIndexOpen}
          aria-haspopup="dialog"
          className="w-11 h-11 rounded-[4px] bg-[#0A0C0B] dark:bg-white text-white dark:text-black shadow-lg flex items-center justify-center hover:opacity-90 transition-opacity focus:ring-2 focus:ring-emerald-500 outline-none cursor-pointer"
        >
          <FileText className="w-5 h-5" />
        </button>
      </aside>

      {/* Botón Flotante de Accesibilidad Web (Esquina Inferior Derecha) */}
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

              {/* Tamaño de Letra */}
              <div className="space-y-1.5">
                <span className="text-[11px] font-semibold text-neutral-500 block">{t('Tamaño de Texto:', 'Text Size:')}</span>
                <div className="grid grid-cols-3 gap-1 bg-[#F2F2F0] dark:bg-[#1f2124] p-1 rounded-[2px]">
                  <button
                    onClick={() => setFontSize('normal')}
                    aria-label="Tamaño normal de texto"
                    className={`py-1 rounded-[2px] font-bold text-[11px] cursor-pointer focus:ring-2 focus:ring-emerald-500 outline-none ${
                      fontSize === 'normal' ? 'bg-[#0A0C0B] text-white dark:bg-white dark:text-black' : 'text-neutral-600 dark:text-neutral-300'
                    }`}
                  >
                    A
                  </button>
                  <button
                    onClick={() => setFontSize('large')}
                    aria-label="Tamaño grande de texto"
                    className={`py-1 rounded-[2px] font-bold text-xs cursor-pointer focus:ring-2 focus:ring-emerald-500 outline-none ${
                      fontSize === 'large' ? 'bg-[#0A0C0B] text-white dark:bg-white dark:text-black' : 'text-neutral-600 dark:text-neutral-300'
                    }`}
                  >
                    A+
                  </button>
                  <button
                    onClick={() => setFontSize('xlarge')}
                    aria-label="Tamaño extra grande de texto"
                    className={`py-1 rounded-[2px] font-bold text-sm cursor-pointer focus:ring-2 focus:ring-emerald-500 outline-none ${
                      fontSize === 'xlarge' ? 'bg-[#0A0C0B] text-white dark:bg-white dark:text-black' : 'text-neutral-600 dark:text-neutral-300'
                    }`}
                  >
                    A++
                  </button>
                </div>
              </div>

              {/* Alto Contraste (WCAG AAA) */}
              <button
                onClick={() => setHighContrast(!highContrast)}
                aria-pressed={highContrast}
                className={`w-full flex items-center justify-between p-2 rounded-[2px] border font-bold text-[11px] transition-colors cursor-pointer focus:ring-2 focus:ring-emerald-500 outline-none ${
                  highContrast
                    ? 'bg-yellow-300 text-black border-yellow-400'
                    : 'bg-[#F2F2F0] dark:bg-[#1f2124] border-[#D2D2CE] dark:border-[#303131] text-neutral-700 dark:text-neutral-200'
                }`}
              >
                <span className="flex items-center gap-1.5">
                  <Sun className="w-3.5 h-3.5" />
                  {t('Alto Contraste (WCAG)', 'High Contrast (WCAG)')}
                </span>
                <span>{highContrast ? 'ON' : 'OFF'}</span>
              </button>

              {/* Lectura Fácil (Dyslexia Friendly) */}
              <button
                onClick={() => setDyslexicFont(!dyslexicFont)}
                aria-pressed={dyslexicFont}
                className={`w-full flex items-center justify-between p-2 rounded-[2px] border font-bold text-[11px] transition-colors cursor-pointer focus:ring-2 focus:ring-emerald-500 outline-none ${
                  dyslexicFont
                    ? 'bg-emerald-600 text-white border-emerald-700'
                    : 'bg-[#F2F2F0] dark:bg-[#1f2124] border-[#D2D2CE] dark:border-[#303131] text-neutral-700 dark:text-neutral-200'
                }`}
              >
                <span className="flex items-center gap-1.5">
                  <BookOpen className="w-3.5 h-3.5" />
                  {t('Lectura Fácil', 'Dyslexia Friendly')}
                </span>
                <span>{dyslexicFont ? 'ON' : 'OFF'}</span>
              </button>

              {/* Botón de Restablecer Ajustes */}
              <button
                onClick={resetAccessibility}
                className="w-full flex items-center justify-center gap-1.5 pt-2 border-t border-[#D2D2CE] dark:border-[#303131] text-[10px] font-bold text-neutral-500 hover:text-black dark:hover:text-white transition-colors cursor-pointer"
              >
                <RotateCcw className="w-3 h-3" />
                <span>{t('Restablecer valores', 'Reset settings')}</span>
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

          {/* SECCIÓN 1: Responsable del Tratamiento */}
          <section id="responsable" className="space-y-4 pt-2">
            <h2 className="text-xl sm:text-2xl font-bold text-[#0A0C0B] dark:text-white flex items-center gap-2">
              <Building2 className="w-5 h-5 text-emerald-600 dark:text-emerald-400 shrink-0" />
              <span>1. Identificación del Responsable del Tratamiento de Datos Fiscales</span>
            </h2>
            <div className={fontClasses[fontSize]}>
              <p className="mb-4">
                En cumplimiento del Reglamento (UE) 2016/679 del Parlamento Europeo y del Consejo (RGPD) y de la Ley Orgánica 3/2018 (LOPDGDD), los datos fiscales incorporados a los registros de facturación de Avialo son tratados bajo la responsabilidad legal de:
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
                  <span>6220 - Actividades de consultoría informática y gestión de instalaciones informáticas</span>
                </div>
                <div className="flex flex-col sm:flex-row sm:justify-between border-b border-[#D2D2CE] dark:border-[#303131] pb-2 gap-1">
                  <span className="font-bold text-neutral-500">Objeto Social:</span>
                  <span>Otros servicios relacionados con las tecnologías de la información y la informática</span>
                </div>
                <div className="flex flex-col sm:flex-row sm:justify-between border-b border-[#D2D2CE] dark:border-[#303131] pb-2 gap-1">
                  <span className="font-bold text-neutral-500">Datos Registrales:</span>
                  <span>Inscrita en el Registro Mercantil de Madrid, Tomo 0, Libro 0, Folio 0, Sección GNE, Hoja M-878808, Inscripción 1ª.</span>
                </div>
                <div className="flex flex-col sm:flex-row sm:justify-between pt-1 gap-1">
                  <span className="font-bold text-neutral-500">Email de contacto DPO:</span>
                  <a href="mailto:hola@avialo.es" className="font-bold text-emerald-600 dark:text-emerald-400 underline underline-offset-4">hola@avialo.es</a>
                </div>
              </div>
            </div>
          </section>

          {/* SECCIÓN 2: Normativa Tributaria y Fraude Fiscal (Ley 11/2021) */}
          <section id="normativa-tributaria" className="space-y-4 pt-4 border-t border-[#D2D2CE] dark:border-[#303131]">
            <h2 className="text-xl sm:text-2xl font-bold text-[#0A0C0B] dark:text-white flex items-center gap-2">
              <FileText className="w-5 h-5 text-emerald-600 dark:text-emerald-400 shrink-0" />
              <span>2. Marco Legal Anti-Fraude Fiscal (Ley 11/2021)</span>
            </h2>
            <div className={fontClasses[fontSize]}>
              <p className="mb-3">
                La arquitectura de protección de datos fiscales de Avialo cumple estrictamente con el mandato legal expresado en la <strong>Ley 11/2021, de 9 de julio, de medidas de prevención y lucha contra el fraude fiscal</strong>:
              </p>
              
              <ul className="space-y-3 pl-5 list-disc marker:text-emerald-500">
                <li>
                  <strong>Prohibición Absoluta de Software de Doble Uso (Art. 29.2.j LGT):</strong> Avialo prohíbe por diseño cualquier funcionalidad de ocultación de ventas, contabilidad paralela o alteración retroactiva de registros expedidos. El incumplimiento de esta obligación legal conlleva sanciones de hasta 150.000 € (Art. 201.2.v LGT).
                </li>
                <li>
                  <strong>Requisitos SIF de Integridad e Inalterabilidad:</strong> Todos los procesos garantizan la integridad, conservación, accesibilidad, legibilidad, trazabilidad e inalterabilidad de los registros de facturación generados.
                </li>
                <li>
                  <strong>Ley 18/2022 (Ley Crea y Crece — Facturación Electrónica B2B):</strong> La plataforma cumple con la obligación de emisión de facturas electrónicas entre empresarios y profesionales autónomos conforme a la Ley 18/2022, de 28 de septiembre, de creación y crecimiento de empresas, garantizando la interoperabilidad mediante formatos estándar (FacturaE, UBL, CII).
                </li>
              </ul>
            </div>
          </section>

          {/* SECCIÓN 3: Reglamento VeriFactu (RD 1007/2023) */}
          <section id="verifactu-sif" className="space-y-4 pt-4 border-t border-[#D2D2CE] dark:border-[#303131]">
            <h2 className="text-xl sm:text-2xl font-bold text-[#0A0C0B] dark:text-white flex items-center gap-2">
              <ShieldCheck className="w-5 h-5 text-emerald-600 dark:text-emerald-400 shrink-0" />
              <span>3. Requisitos Técnicos del Reglamento VeriFactu (RD 1007/2023)</span>
            </h2>
            <div className={fontClasses[fontSize]}>
              <p className="mb-4">
                El motor informático de facturación implementa las especificaciones exigidas por el Real Decreto 1007/2023 (Reglamento SIF de la Agencia Tributaria):
              </p>

              <div className="space-y-3">
                <div className="border border-[#D2D2CE] dark:border-[#303131] p-3.5 rounded-[4px] bg-[#FCFCFB] dark:bg-[#131517]">
                  <strong className="block text-emerald-700 dark:text-emerald-400 mb-1">Encadenamiento Criptográfico de Registros (Hash SHA-256)</strong>
                  <span>Conforme a la Orden HAC/1177/2024, cada registro de facturación (alta o anulación) genera una huella digital criptográfica SHA-256 (cadena hexadecimal de 64 caracteres) encadenada con el hash del registro inmediatamente anterior, garantizando la trazabilidad secuencial absoluta.</span>
                </div>
                <div className="border border-[#D2D2CE] dark:border-[#303131] p-3.5 rounded-[4px] bg-[#FCFCFB] dark:bg-[#131517]">
                  <strong className="block text-emerald-700 dark:text-emerald-400 mb-1">Código QR Fiscal Normativo (ISO/IEC 18004 — Orden HAC/1177/2024)</strong>
                  <span>Impresión obligatoria en cada factura del código QR fiscal (30×30 mm a 40×40 mm) con la leyenda «Factura verificable en la sede electrónica de la AEAT» o «VERI*FACTU», enlazando al portal de verificación ciudadana de la Agencia Tributaria.</span>
                </div>
                <div className="border border-[#D2D2CE] dark:border-[#303131] p-3.5 rounded-[4px] bg-[#FCFCFB] dark:bg-[#131517]">
                  <strong className="block text-emerald-700 dark:text-emerald-400 mb-1">Registro de Eventos del Sistema (`EventLog`)</strong>
                  <span>Registro normativo e inalterable que documenta cualquier encendido, actualización, error de conexión o evento relevante del sistema informático.</span>
                </div>
              </div>
            </div>
          </section>

          {/* SECCIÓN 4: Acuerdo AEAT, FACe y Adaptación TicketBAI */}
          <section id="aeat-face" className="space-y-4 pt-4 border-t border-[#D2D2CE] dark:border-[#303131]">
            <h2 className="text-xl sm:text-2xl font-bold text-[#0A0C0B] dark:text-white flex items-center gap-2">
              <ShieldCheck className="w-5 h-5 text-emerald-600 dark:text-emerald-400 shrink-0" />
              <span>4. Acuerdo AEAT Nº 17, FACe y Adaptación Foral TicketBAI</span>
            </h2>
            <div className={fontClasses[fontSize]}>
              <div className="space-y-4">
                <div className="border border-[#D2D2CE] dark:border-[#303131] p-4 rounded-[4px] bg-[#FCFCFB] dark:bg-[#131517]">
                  <h3 className="font-bold text-sm text-[#0A0C0B] dark:text-white flex items-center gap-2 mb-1.5">
                    <CheckCircle2 className="w-4 h-4 text-emerald-600 dark:text-emerald-400 shrink-0" />
                    <span>Acuerdo Social AEAT Nº 17 & Modalidad Veri*Factu</span>
                  </h3>
                  <p className="text-xs sm:text-sm text-[rgba(10,12,11,0.8)] dark:text-white/80 leading-relaxed">
                    Avialo Soluciones S.L. ostenta el Acuerdo de Colaboración Social con la AEAT Nº 17 para la remisión telemática directa de registros de facturación en tiempo real a la sede telemática de la Agencia Tributaria.
                  </p>
                </div>

                <div className="border border-[#D2D2CE] dark:border-[#303131] p-4 rounded-[4px] bg-[#FCFCFB] dark:bg-[#131517]">
                  <h3 className="font-bold text-sm text-[#0A0C0B] dark:text-white flex items-center gap-2 mb-1.5">
                    <CheckCircle2 className="w-4 h-4 text-emerald-600 dark:text-emerald-400 shrink-0" />
                    <span>Integrador Oficial FACe (Facturación Pública B2G)</span>
                  </h3>
                  <p className="text-xs sm:text-sm text-[rgba(10,12,11,0.8)] dark:text-white/80 leading-relaxed">
                    Conexión telemática habilitada con el Punto General de Entrada de Facturas Electrónicas (FACe) para la firma y remisión oficial del estándar FacturaE.
                  </p>
                </div>

                <div className="border border-[#D2D2CE] dark:border-[#303131] p-4 rounded-[4px] bg-[#FCFCFB] dark:bg-[#131517]">
                  <h3 className="font-bold text-sm text-[#0A0C0B] dark:text-white flex items-center gap-2 mb-1.5">
                    <AlertCircle className="w-4 h-4 text-amber-600 dark:text-amber-400 shrink-0" />
                    <span>Adaptación Foral en Desarrollo: TicketBAI & Batuz (LROE)</span>
                  </h3>
                  <p className="text-xs sm:text-sm text-[rgba(10,12,11,0.8)] dark:text-white/80 leading-relaxed">
                    Respecto a los regímenes forales del País Vasco (Gipuzkoa, Bizkaia y Araba/Álava), Avialo Soluciones S.L. se encuentra completando el desarrollo técnico y la certificación del módulo TicketBAI/Batuz. La homologación e inscripción en el registro de software garante de las Haciendas Forales vascas se formalizará con las certificaciones correspondientes de forma previa al despliegue comercial en dichos territorios.
                  </p>
                </div>
              </div>
            </div>
          </section>

          {/* SECCIÓN 5: Inalterabilidad y Deber Legal de Custodia (4 Años) */}
          <section id="inalterabilidad" className="space-y-4 pt-4 border-t border-[#D2D2CE] dark:border-[#303131]">
            <h2 className="text-xl sm:text-2xl font-bold text-[#0A0C0B] dark:text-white flex items-center gap-2">
              <Lock className="w-5 h-5 text-emerald-600 dark:text-emerald-400 shrink-0" />
              <span>5. Inalterabilidad de Registros y Custodia Imperativa de 4 Años</span>
            </h2>
            <div className={fontClasses[fontSize]}>
              <p className="mb-3">
                Conforme al artículo 66 y 70 de la Ley 58/2003 (General Tributaria) y al artículo 30 del Código de Comercio, la plataforma aplica una estructura de conservación inmutable (<code>append-only</code>) con políticas WORM:
              </p>
              
              <div className="border border-amber-500/40 bg-amber-500/10 p-4 rounded-[4px] text-amber-900 dark:text-amber-200 text-xs sm:text-sm leading-relaxed space-y-2">
                <div className="flex items-center gap-2 font-bold uppercase tracking-wider text-amber-800 dark:text-amber-300">
                  <AlertCircle className="w-4 h-4 shrink-0 text-amber-600 dark:text-amber-400" />
                  <span>Excepción de Borrado Fiscal y Mercantil (Art. 17.3.b RGPD):</span>
                </div>
                <p>
                  Las facturas expedidas y sus registros de eventos no se borran físicamente del sistema. Avialo conservará la documentación durante el plazo de prescripción tributaria (<strong>4 años</strong>, Art. 66 LGT) y la conservación mercantil obligatoria (<strong>6 años</strong>, Art. 30 Código de Comercio), prevaleciendo estos deberes legales sobre solicitudes de supresión RGPD.
                </p>
              </div>
            </div>
          </section>

          {/* SECCIÓN 6: Residencia 100% en la UE, Cifrado y HSM */}
          <section id="residencia-seguridad" className="space-y-4 pt-4 border-t border-[#D2D2CE] dark:border-[#303131]">
            <h2 className="text-xl sm:text-2xl font-bold text-[#0A0C0B] dark:text-white flex items-center gap-2">
              <Server className="w-5 h-5 text-emerald-600 dark:text-emerald-400 shrink-0" />
              <span>6. Residencia de Datos 100% en la UE, Cifrado y HSM</span>
            </h2>
            <div className={fontClasses[fontSize]}>
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 text-xs">
                <div className="border border-[#D2D2CE] dark:border-[#303131] p-3.5 rounded-[4px] bg-[#FCFCFB] dark:bg-[#131517]">
                  <strong className="block text-emerald-700 dark:text-emerald-400 mb-1">Centros de Datos en la UE</strong>
                  <span>Alojamiento e instancias en la Región UE (España), sin transferencias internacionales fuera del espacio económico europeo.</span>
                </div>
                <div className="border border-[#D2D2CE] dark:border-[#303131] p-3.5 rounded-[4px] bg-[#FCFCFB] dark:bg-[#131517]">
                  <strong className="block text-emerald-700 dark:text-emerald-400 mb-1">Cifrado TLS 1.3 / AES-256</strong>
                  <span>Protección en tránsito de red y cifrado de bases de datos PostgreSQL en reposo.</span>
                </div>
                <div className="border border-[#D2D2CE] dark:border-[#303131] p-3.5 rounded-[4px] bg-[#FCFCFB] dark:bg-[#131517]">
                  <strong className="block text-emerald-700 dark:text-emerald-400 mb-1">Custodia KMS/HSM</strong>
                  <span>Custodia en módulos hardware aislados para la firma electrónica cualificada de facturas.</span>
                </div>
              </div>
            </div>
          </section>

          {/* SECCIÓN 7: Tratamiento de Datos por el Copiloto de IA Fiscal */}
          <section id="ia-fiscal" className="space-y-4 pt-4 border-t border-[#D2D2CE] dark:border-[#303131]">
            <h2 className="text-xl sm:text-2xl font-bold text-[#0A0C0B] dark:text-white flex items-center gap-2">
              <Sparkles className="w-5 h-5 text-emerald-600 dark:text-emerald-400 shrink-0" />
              <span>7. Tratamiento de Datos por el Copiloto de IA Fiscal</span>
            </h2>
            <div className={fontClasses[fontSize]}>
              <ul className="space-y-2.5 pl-5 list-disc marker:text-emerald-500">
                <li>
                  <strong>Inferencia Exclusiva en la UE:</strong> Los modelos de IA se ejecutan exclusivamente en servidores comunitarios sin enviar datos fuera de la UE.
                </li>
                <li>
                  <strong>Anonimización Previa:</strong> Las consultas se desvinculan de NIFs, nombres e identificadores personales mediante un filtro previo.
                </li>
                <li>
                  <strong>Opt-Out Disponible:</strong> El usuario puede rechazar el uso de sus consultas para el entrenamiento continuo del modelo.
                </li>
              </ul>
            </div>
          </section>

          {/* SECCIÓN 8: Control de Acceso, Autenticación 2FA e Historial de Auditoría */}
          <section id="auditoria-2fa" className="space-y-4 pt-4 border-t border-[#D2D2CE] dark:border-[#303131]">
            <h2 className="text-xl sm:text-2xl font-bold text-[#0A0C0B] dark:text-white flex items-center gap-2">
              <Lock className="w-5 h-5 text-emerald-600 dark:text-emerald-400 shrink-0" />
              <span>8. Control de Acceso, Autenticación 2FA y Registros de Auditoría</span>
            </h2>
            <div className={fontClasses[fontSize]}>
              <div className="border border-[#D2D2CE] dark:border-[#303131] p-4 rounded-[4px] bg-[#FCFCFB] dark:bg-[#131517] space-y-2 text-xs sm:text-sm">
                <p>• <strong>Control de Sesiones:</strong> Captura de direcciones IP, marcas de tiempo e identificadores de dispositivo.</p>
                <p>• <strong>Autenticación 2FA:</strong> Opción multifactor recomendada para todos los usuarios y obligatoria para administradores.</p>
                <p>• <strong>Log Inmutable de Auditoría:</strong> Registro append-only de accesos y operaciones internas del personal autorizado.</p>
              </div>
            </div>
          </section>

          {/* SECCIÓN 9: Ejercicio de Derechos ARCO+ */}
          <section id="derechos-arco" className="space-y-4 pt-4 border-t border-[#D2D2CE] dark:border-[#303131]">
            <h2 className="text-xl sm:text-2xl font-bold text-[#0A0C0B] dark:text-white flex items-center gap-2">
              <ShieldCheck className="w-5 h-5 text-emerald-600 dark:text-emerald-400 shrink-0" />
              <span>9. Ejercicio de Derechos del Usuario (ARCO+) y Excepción Fiscal</span>
            </h2>
            <div className={fontClasses[fontSize]}>
              <p className="mb-3">
                Los derechos de acceso, rectificación, oposición, limitación y portabilidad se pueden solicitar por correo electrónico a:
              </p>
              <div className="border border-emerald-500/30 bg-emerald-500/10 p-3.5 rounded-[4px] text-center my-3">
                <a href="mailto:hola@avialo.es" className="font-extrabold text-sm text-emerald-700 dark:text-emerald-400 inline-flex items-center gap-1.5 hover:underline underline-offset-4">
                  <span className="no-underline">📧</span>
                  <span>hola@avialo.es</span>
                </a>
              </div>
              <p className="text-xs text-neutral-500 leading-relaxed">
                Se recuerda que la supresión de datos no es aplicable a registros de facturación oficiales durante el periodo de prescripción tributaria de 4 años (Art. 17.3.b RGPD y Art. 66 LGT) ni durante los 6 años de conservación mercantil (Art. 30 Código de Comercio).
              </p>
              <div className="border border-[#D2D2CE] dark:border-[#303131] p-3.5 rounded-[4px] bg-[#FCFCFB] dark:bg-[#131517] space-y-1 font-mono text-[11px] text-neutral-600 dark:text-neutral-400 mt-3">
                <p className="font-bold text-[#0A0C0B] dark:text-white">Autoridad de Control — Agencia Española de Protección de Datos (AEPD)</p>
                <p>Dirección Postal: C/ Jorge Juan, 6, 28001 Madrid (España)</p>
                <p>Teléfonos: 901 100 099 / 912 663 517</p>
                <p>Sede Electrónica: <a href="https://www.aepd.es" target="_blank" rel="noopener noreferrer" className="font-bold underline underline-offset-4 text-emerald-600 dark:text-emerald-400">https://www.aepd.es</a></p>
              </div>
            </div>
          </section>

          {/* SECCIÓN 10: Contacto DPO */}
          <section id="contacto-dpo" className="space-y-4 pt-4 border-t border-[#D2D2CE] dark:border-[#303131]">
            <h2 className="text-xl sm:text-2xl font-bold text-[#0A0C0B] dark:text-white flex items-center gap-2">
              <Mail className="w-5 h-5 text-emerald-600 dark:text-emerald-400 shrink-0" />
              <span>10. Contacto del Delegado de Protección de Datos</span>
            </h2>
            <div className={fontClasses[fontSize]}>
              <div className="border border-[#D2D2CE] dark:border-[#303131] p-4 rounded-[4px] bg-[#FCFCFB] dark:bg-[#131517] space-y-1.5 font-mono text-xs">
                <p><strong>AVIALO SOLUCIONES SL</strong> • CIF B26802249</p>
                <p>Domicilio: Calle Honduras 20, Puerta B, Planta 4. 28822, Coslada (Madrid), España</p>
                <p>Correo de atención legal: <a href="mailto:hola@avialo.es" className="text-emerald-600 dark:text-emerald-400 font-bold underline underline-offset-4">hola@avialo.es</a></p>
                <p>Web oficial: <a href="https://avialo.tech" className="text-emerald-600 dark:text-emerald-400 font-bold underline underline-offset-4">https://avialo.tech</a></p>
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

export default DataProtectionPage;
