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

export const PrivacyPolicyPage = () => {
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

  // Cierre automático con tecla Escape para máxima accesibilidad por teclado
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
    { id: 'responsable', title: t('1. Identificación del Responsable y Estado del DPD', '1. Data Controller Identification') },
    { id: 'marco-legal', title: t('2. Marco Legal y Principios Normativos', '2. Legal Framework & Normative Principles') },
    { id: 'aeat-verifactu', title: t('3. Homologación AEAT, VeriFactu, FACe y Regímenes Forales', '3. AEAT, VeriFactu, FACe & Regional Tax Offices') },
    { id: 'rol-avialo', title: t('4. Rol de Avialo: Responsable vs Encargado (Art. 28 RGPD)', '4. Role of Avialo: Controller vs Processor') },
    { id: 'categorias-datos', title: t('5. Categorías de Datos Objeto de Tratamiento', '5. Categories of Processed Data') },
    { id: 'finalidades-bases', title: t('6. Finalidades y Bases Jurídicas del Tratamiento', '6. Purposes & Legal Bases of Processing') },
    { id: 'plazos-conservacion', title: t('7. Plazos de Conservación y Custodia Legal (4 y 6 Años)', '7. Retention Periods & Legal Custody') },
    { id: 'residencia-seguridad', title: t('8. Residencia UE, Cifrado y Transferencias Internacionales', '8. EU Residency, Encryption & International Transfers') },
    { id: 'asistente-ia', title: t('9. Tratamiento de Datos por el Copiloto de IA Fiscal', '9. AI Tax Assistant Data Processing') },
    { id: 'decisiones-automatizadas', title: t('10. Decisiones Automatizadas y Protección de Menores', '10. Automated Decisions & Minor Protection') },
    { id: 'inicios-sesion', title: t('11. Control de Acceso, 2FA y Registros de Auditoría', '11. Access Control, 2FA & Audit Logs') },
    { id: 'destinatarios', title: t('12. Destinatarios y Subencargados del Tratamiento', '12. Recipients & Sub-processors') },
    { id: 'derechos', title: t('13. Ejercicio de Derechos de Protección de Datos', '13. Exercise of Data Protection Rights') },
    { id: 'brechas-seguridad', title: t('14. Gestión y Notificación de Brechas de Seguridad', '14. Security Breach Management & Notification') },
    { id: 'redes-sociales', title: t('15. Redes Sociales y Deber de Confidencialidad', '15. Social Media & Duty of Confidentiality') },
    { id: 'cookies', title: t('16. Política de Cookies y Almacenamiento Técnico', '16. Technical Cookie Policy') },
    { id: 'vigencia', title: t('17. Vigencia, Modificaciones y Canal de Atención', '17. Validity, Modifications & Attention Channel') },
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

      {/* Header Principal de la Página Legal */}
      <header className="relative pt-32 pb-10 px-4 sm:px-6 lg:px-8 max-w-5xl mx-auto border-b border-[#D2D2CE] dark:border-[#303131]">
        <div className="text-center space-y-3">
          <h1 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-[#0A0C0B] dark:text-white">
            {t('Política de Privacidad y Protección de Datos', 'Privacy Policy & Data Protection')}
          </h1>
          <p className="text-xs sm:text-sm text-[rgba(10,12,11,0.7)] dark:text-white/70 max-w-2xl mx-auto leading-relaxed">
            {t(
              'Regulación aplicable a los tratamientos de datos personales y fiscales realizados a través de la plataforma Avialo en estricto cumplimiento del RGPD, LOPDGDD y el Reglamento VeriFactu (RD 1007/2023).',
              'Regulation governing personal and tax data processing on the Avialo platform in compliance with GDPR, LOPDGDD, and VeriFactu Regulation.'
            )}
          </p>
          <div className="pt-2 text-xs font-mono text-emerald-700 dark:text-emerald-400 font-bold">
            {t('Documento Oficial • Versión 2.4 SIF • Vigente a 1 de Agosto de 2026', 'Official Document • Version 2.4 SIF • Effective August 1, 2026')}
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
              aria-label={t('Índice navegable de secciones legales', 'Navigable table of contents')}
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
          aria-label={t('Abrir índice de secciones legales', 'Open table of contents')}
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
              <span>1. Identificación del Responsable y Estado del DPD</span>
            </h2>
            <div className={fontClasses[fontSize]}>
              <p className="mb-4">
                En cumplimiento del Reglamento (UE) 2016/679 del Parlamento Europeo y del Consejo, de 27 de abril de 2016, relativo a la protección de las personas físicas en lo que respecta al tratamiento de datos personales y a la libre circulación de estos datos (RGPD), y de la Ley Orgánica 3/2018, de 5 de diciembre, de Protección de Datos Personales y garantía de los derechos digitales (LOPDGDD), se le informa de que el responsable del tratamiento de los datos es:
              </p>

              <div className="border border-[#D2D2CE] dark:border-[#303131] bg-[#FCFCFB] dark:bg-[#131517] p-5 rounded-[4px] space-y-2.5 font-mono text-xs sm:text-sm mb-4">
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
                  <span className="font-bold text-neutral-500">Email de contacto:</span>
                  <a href="mailto:hola@avialo.es" className="font-bold text-emerald-600 dark:text-emerald-400 underline underline-offset-4">hola@avialo.es</a>
                </div>
              </div>
              <p className="font-semibold text-emerald-700 dark:text-emerald-400 bg-emerald-50 dark:bg-emerald-900/20 p-3 rounded-[4px] border border-emerald-200 dark:border-emerald-800">
                Conforme al Art. 34 LOPDGDD, la entidad no requiere la designación obligatoria de DPD, habilitando hola@avialo.es como canal oficial de atención de privacidad.
              </p>
            </div>
          </section>

          {/* SECCIÓN 2: Marco Legal */}
          <section id="marco-legal" className="space-y-4 pt-4 border-t border-[#D2D2CE] dark:border-[#303131]">
            <h2 className="text-xl sm:text-2xl font-bold text-[#0A0C0B] dark:text-white flex items-center gap-2">
              <FileText className="w-5 h-5 text-emerald-600 dark:text-emerald-400 shrink-0" />
              <span>2. Marco Legal y Principios Normativos Aplicables</span>
            </h2>
            <div className={fontClasses[fontSize]}>
              <p className="mb-4">
                La plataforma de facturación electrónica y gestión fiscal Avialo opera en estricta consonancia con los principios fundamentales exigidos por la legislación española e internacional. Todo tratamiento de información personal o fiscal se rige de forma imperativa por las siguientes normas y principios:
              </p>
              
              <ul className="space-y-3 pl-5 list-disc marker:text-emerald-500">
                <li>
                  <strong>Reglamento General de Protección de Datos (RGPD UE 2016/679):</strong> Marco europeo que regula la recogida, tratamiento, conservación y circulación de los datos de carácter personal de personas físicas dentro de la Unión Europea.
                </li>
                <li>
                  <strong>Ley Orgánica 3/2018 (LOPDGDD):</strong> Normativa estatal española de protección de datos personales y garantía de los derechos digitales de los ciudadanos y trabajadores.
                </li>
                <li>
                  <strong>Ley 34/2002 (LSSI-CE):</strong> Regulación aplicable a las comunicaciones electrónicas, servicios de la sociedad de la información y contratación telemática.
                </li>
                <li>
                  <strong>Ley 11/2021, de 9 de julio, de Medidas de Prevención y Lucha contra el Fraude Fiscal:</strong> Disposición legal que prohíbe el software de doble uso o contabilidad paralela y exige la trazabilidad e inalterabilidad de los programas de facturación.
                </li>
                <li>
                  <strong>Real Decreto 1007/2023 (Reglamento VeriFactu / SIF):</strong> Especificación técnica imperativa de la Agencia Tributaria que aprueba el reglamento de requisitos técnicos de los sistemas informáticos de facturación.
                </li>
                <li>
                  <strong>Real Decreto 1619/2012:</strong> Reglamento por el que se regulan las obligaciones de facturación en el territorio español (expedición, plazos, facturas simplificadas, rectificativas y recapitulativas).
                </li>
                <li>
                  <strong>Código de Comercio (Real Decreto de 22 de agosto de 1885, Art. 30):</strong> Relativo al deber de conservación de registros contables y documentación mercantil.
                </li>
                <li>
                  <strong>Ley 25/2007, de 18 de octubre:</strong> Conservación de datos de comunicaciones electrónicas y redes de comunicación.
                </li>
                <li>
                  <strong>Ley 18/2022 de Creación y Crecimiento de Empresas:</strong> Relativa a la obligación y despliegue de la facturación electrónica B2B.
                </li>
              </ul>
            </div>
          </section>

          {/* SECCIÓN 3: Homologación */}
          <section id="aeat-verifactu" className="space-y-4 pt-4 border-t border-[#D2D2CE] dark:border-[#303131]">
            <h2 className="text-xl sm:text-2xl font-bold text-[#0A0C0B] dark:text-white flex items-center gap-2">
              <ShieldCheck className="w-5 h-5 text-emerald-600 dark:text-emerald-400 shrink-0" />
              <span>3. Homologación AEAT, Sistema VeriFactu, Integración FACe y Regímenes Forales</span>
            </h2>
            <div className={fontClasses[fontSize]}>
              <p className="mb-4">
                AVIALO SOLUCIONES S.L. ha estructurado su motor de facturación como un <strong>Sistema Informático de Facturación (SIF) Garante</strong> que garantiza el cumplimiento pleno de la normativa tributaria en todos los regímenes del territorio nacional:
              </p>
              
              <div className="space-y-4 my-4">
                <div className="border border-[#D2D2CE] dark:border-[#303131] p-4 rounded-[4px] bg-[#FCFCFB] dark:bg-[#131517]">
                  <h3 className="font-bold text-sm text-[#0A0C0B] dark:text-white flex items-center gap-2 mb-1.5">
                    <CheckCircle2 className="w-4 h-4 text-emerald-600 dark:text-emerald-400 shrink-0" />
                    <span>Acuerdo Social AEAT Nº 17 & Veri*Factu (Tiempo Real)</span>
                  </h3>
                  <p className="text-xs sm:text-sm text-[rgba(10,12,11,0.8)] dark:text-white/80 leading-relaxed">
                    Avialo Soluciones S.L. cuenta con la condición de colaborador social de la Agencia Estatal de Administración Tributaria (Acuerdo Nº 17), facultada para la presentación telemática directa de registros de facturación. El sistema implementa la modalidad recomendada <strong>Veri*Factu</strong>, enviando cada registro de alta o anulación a la sede electrónica de la AEAT en el mismo instante de su expedición.
                  </p>
                </div>

                <div className="border border-[#D2D2CE] dark:border-[#303131] p-4 rounded-[4px] bg-[#FCFCFB] dark:bg-[#131517]">
                  <h3 className="font-bold text-sm text-[#0A0C0B] dark:text-white flex items-center gap-2 mb-1.5">
                    <CheckCircle2 className="w-4 h-4 text-emerald-600 dark:text-emerald-400 shrink-0" />
                    <span>Integrador Oficial FACe (Administración Pública B2G)</span>
                  </h3>
                  <p className="text-xs sm:text-sm text-[rgba(10,12,11,0.8)] dark:text-white/80 leading-relaxed">
                    La plataforma incorpora conexión telemática con el Punto General de Entrada de Facturas Electrónicas (FACe), permitiendo la emisión y firma digital oficial del esquema FacturaE (versiones 3.2.x) dirigidas a organismos públicos estatales, autonómicos y locales.
                  </p>
                </div>

                <div className="border border-[#D2D2CE] dark:border-[#303131] p-4 rounded-[4px] bg-[#FCFCFB] dark:bg-[#131517]">
                  <h3 className="font-bold text-sm text-[#0A0C0B] dark:text-white flex items-center gap-2 mb-1.5">
                    <AlertCircle className="w-4 h-4 text-amber-600 dark:text-amber-400 shrink-0" />
                    <span>Adaptación Foral en Desarrollo: TicketBAI & Batuz (LROE)</span>
                  </h3>
                  <p className="text-xs sm:text-sm text-[rgba(10,12,11,0.8)] dark:text-white/80 leading-relaxed">
                    Respecto a los regímenes tributarios forales del País Vasco (Gipuzkoa, Bizkaia y Araba/Álava), Avialo Soluciones S.L. se encuentra actualmente completando el desarrollo técnico y la adaptación del módulo de firma e integración TicketBAI/Batuz. La homologación e inscripción formal en el registro oficial de software garante de las Haciendas Forales vascas se formalizará con las certificaciones correspondientes de manera previa al despliegue comercial en dichos territorios.
                  </p>
                </div>
              </div>
            </div>
          </section>

          {/* SECCIÓN 4: Rol de Avialo */}
          <section id="rol-avialo" className="space-y-4 pt-4 border-t border-[#D2D2CE] dark:border-[#303131]">
            <h2 className="text-xl sm:text-2xl font-bold text-[#0A0C0B] dark:text-white flex items-center gap-2">
              <Building2 className="w-5 h-5 text-emerald-600 dark:text-emerald-400 shrink-0" />
              <span>4. Rol de Avialo: Responsable vs Encargado (Art. 28 RGPD)</span>
            </h2>
            <div className={fontClasses[fontSize]}>
              <p className="mb-3">
                Para garantizar la correcta aplicación del RGPD, es imperativo distinguir los distintos roles de Avialo en el tratamiento de los datos:
              </p>
              <ul className="space-y-2 pl-5 list-disc marker:text-emerald-500">
                <li>
                  <strong>Avialo como Responsable del Tratamiento:</strong> Avialo actúa como Responsable sobre los datos de los usuarios registrados, clientes directos y datos de facturación relativos al propio servicio SaaS (gestión de suscripciones, soporte y datos de la cuenta).
                </li>
                <li>
                  <strong>Avialo como Encargado del Tratamiento (Art. 28 RGPD):</strong> Avialo asume la condición de Encargado respecto de los datos de terceros (clientes, proveedores) que el usuario introduce o procesa en la plataforma mediante la emisión de facturas y documentos contables. El usuario actúa, en este caso, como Responsable de dichos datos.
                </li>
              </ul>
            </div>
          </section>

          {/* SECCIÓN 5: Categorías de Datos */}
          <section id="categorias-datos" className="space-y-4 pt-4 border-t border-[#D2D2CE] dark:border-[#303131]">
            <h2 className="text-xl sm:text-2xl font-bold text-[#0A0C0B] dark:text-white flex items-center gap-2">
              <Server className="w-5 h-5 text-emerald-600 dark:text-emerald-400 shrink-0" />
              <span>5. Categorías de Datos Objeto de Tratamiento</span>
            </h2>
            <div className={fontClasses[fontSize]}>
              <p className="mb-3">
                Para el desarrollo del servicio SaaS y el cumplimiento de las obligaciones tributarias impuestas por la legislación española, Avialo recoge y trata únicamente las categorías de datos strictly necesarias:
              </p>
              
              <ul className="space-y-2 pl-5 list-disc marker:text-emerald-500">
                <li><strong>Datos de Identificación del Usuario:</strong> Nombre, apellidos, DNI/NIF, correo electrónico, teléfono de contacto y dirección postal.</li>
                <li><strong>Datos de la Entidad Fiscal:</strong> Razones sociales, NIF/CIF, domicilio fiscal, régimen impositivo territorial (Territorio Común, Canarias IGIC, Ceuta/Melilla IPSI, Navarra o País Vasco), serie de numeración e imágenes de logotipos.</li>
                <li><strong>Certificados Digitales:</strong> Custodia encriptada HSM/KMS de certificados cualificados para la firma telemática TicketBAI/FACe.</li>
                <li><strong>Datos de Facturación y Clientes:</strong> Datos identificativos de clientes receptores, descripciones de operaciones, importes, bases imponibles, tipos de IVA/IRPF, recargo de equivalencia y rectificativas.</li>
                <li><strong>Registros de Auditoría Tributaria (SIF):</strong> Ficheros informáticos `FiscalRecord`, huella digital hash encadenada (SHA-256), código QR fiscal y registros normativos de eventos (`EventLog`).</li>
                <li><strong>Datos de Navegación y Sesión:</strong> Direcciones IP de origen, timestamps, identificador de dispositivo, navegador y registros de auditoría de accesos.</li>
              </ul>
            </div>
          </section>

          {/* SECCIÓN 6: Finalidades y Bases */}
          <section id="finalidades-bases" className="space-y-4 pt-4 border-t border-[#D2D2CE] dark:border-[#303131]">
            <h2 className="text-xl sm:text-2xl font-bold text-[#0A0C0B] dark:text-white flex items-center gap-2">
              <CheckCircle2 className="w-5 h-5 text-emerald-600 dark:text-emerald-400 shrink-0" />
              <span>6. Finalidades y Bases Jurídicas del Tratamiento</span>
            </h2>
            <div className={fontClasses[fontSize]}>
              <p className="mb-4">
                Cada tratamiento realizado por Avialo ampara su legitimación en las bases jurídicas contempladas en el artículo 6 del RGPD:
              </p>

              <div className="space-y-3">
                <div className="border border-[#D2D2CE] dark:border-[#303131] p-3.5 rounded-[4px] bg-[#FCFCFB] dark:bg-[#131517]">
                  <strong className="block text-emerald-700 dark:text-emerald-400 mb-1">A) Ejecución del Contrato de Servicios SaaS (Art. 6.1.b RGPD)</strong>
                  <span>Habilitación de cuenta de usuario, emisión y gestión de facturas, presupuestos, albaranes, cobros recurrentes y asistencia técnica al cliente.</span>
                </div>
                <div className="border border-[#D2D2CE] dark:border-[#303131] p-3.5 rounded-[4px] bg-[#FCFCFB] dark:bg-[#131517]">
                  <strong className="block text-emerald-700 dark:text-emerald-400 mb-1">B) Cumplimiento de Obligaciones Legales Tributarias (Art. 6.1.c RGPD)</strong>
                  <span>Generación de registros informáticos SIF inmutables, remisión telemática directa de facturas a la AEAT y conservación imperativa exigida por la Ley General Tributaria y el RD 1007/2023.</span>
                </div>
                <div className="border border-[#D2D2CE] dark:border-[#303131] p-3.5 rounded-[4px] bg-[#FCFCFB] dark:bg-[#131517]">
                  <strong className="block text-emerald-700 dark:text-emerald-400 mb-1">C) Interés Legítimo en Seguridad e Integridad (Art. 6.1.f RGPD)</strong>
                  <span>Protección ante fraudes, conservación de logs de auditoría de inicio de sesión, prevención de intrusiones informáticas y defensa legal de la compañía.</span>
                </div>
                <div className="border border-[#D2D2CE] dark:border-[#303131] p-3.5 rounded-[4px] bg-[#FCFCFB] dark:bg-[#131517]">
                  <strong className="block text-emerald-700 dark:text-emerald-400 mb-1">D) Consentimiento Explícito (Art. 6.1.a RGPD)</strong>
                  <span>Envío de comunicaciones comerciales relativas a actualizaciones del producto y activación de módulos opcionales de IA.</span>
                </div>
              </div>
            </div>
          </section>

          {/* SECCIÓN 7: Plazos de Conservación */}
          <section id="plazos-conservacion" className="space-y-4 pt-4 border-t border-[#D2D2CE] dark:border-[#303131]">
            <h2 className="text-xl sm:text-2xl font-bold text-[#0A0C0B] dark:text-white flex items-center gap-2">
              <Lock className="w-5 h-5 text-emerald-600 dark:text-emerald-400 shrink-0" />
              <span>7. Plazos de Conservación y Custodia Legal (4 y 6 Años)</span>
            </h2>
            <div className={fontClasses[fontSize]}>
              <p className="mb-3">
                Conforme a la normativa vigente aplicable, los datos se conservarán durante los siguientes plazos:
              </p>
              
              <ul className="space-y-2 pl-5 list-disc marker:text-emerald-500 mb-4">
                <li><strong>Documentación Mercantil:</strong> 6 años (Art. 30.1 Código de Comercio).</li>
                <li><strong>Registros Tributarios SIF:</strong> 4 años (Art. 66 Ley General Tributaria).</li>
                <li><strong>Datos de Cuenta:</strong> Durante la vigencia del contrato y 5 años adicionales para posibles acciones personales (Art. 1964 Código Civil).</li>
                <li><strong>Comunicaciones Comerciales:</strong> Hasta la revocación del consentimiento por parte del interesado.</li>
                <li><strong>Logs de Seguridad:</strong> 12 meses, conforme a la Ley 25/2007.</li>
              </ul>

              <div className="border border-amber-500/40 bg-amber-500/10 p-4 rounded-[4px] text-amber-900 dark:text-amber-200 text-xs sm:text-sm leading-relaxed space-y-2">
                <div className="flex items-center gap-2 font-bold uppercase tracking-wider text-amber-800 dark:text-amber-300">
                  <AlertCircle className="w-4 h-4 shrink-0 text-amber-600 dark:text-amber-400" />
                  <span>Aviso de Deber Legal de Conservación Improbable de Borrado:</span>
                </div>
                <p>
                  Una vez emitida una factura oficial o registro fiscal de alta, el ordenamiento jurídico español prohíbe tajantemente su eliminación física o rectificación silenciosa.
                </p>
                <p>
                  En consecuencia, Avialo conservará los datos de facturación e historiales de auditoría durante los plazos legales de <strong>4 y 6 años</strong> mencionados. Esta obligación legal prevalece sobre el derecho de supresión de datos en virtud de la excepción explícita prevista en el <strong>artículo 17.3.b del RGPD</strong>.
                </p>
              </div>
            </div>
          </section>

          {/* SECCIÓN 8: Residencia y Transferencias */}
          <section id="residencia-seguridad" className="space-y-4 pt-4 border-t border-[#D2D2CE] dark:border-[#303131]">
            <h2 className="text-xl sm:text-2xl font-bold text-[#0A0C0B] dark:text-white flex items-center gap-2">
              <Server className="w-5 h-5 text-emerald-600 dark:text-emerald-400 shrink-0" />
              <span>8. Residencia UE, Cifrado y Transferencias Internacionales</span>
            </h2>
            <div className={fontClasses[fontSize]}>
              <p className="mb-4">
                La totalidad de la infraestructura de Avialo radica en centros de datos seguros situados exclusivamente en el territorio de la Unión Europea (España / Región UE), garantizando un nivel adecuado de protección:
              </p>

              <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 text-xs mb-4">
                <div className="border border-[#D2D2CE] dark:border-[#303131] p-3.5 rounded-[4px] bg-[#FCFCFB] dark:bg-[#131517]">
                  <strong className="block text-emerald-700 dark:text-emerald-400 mb-1">Cifrado Bancario TLS 1.3 / AES-256</strong>
                  <span>Protección criptográfica avanzada en el tránsito de red y cifrado completo de bases de datos en reposo.</span>
                </div>
                <div className="border border-[#D2D2CE] dark:border-[#303131] p-3.5 rounded-[4px] bg-[#FCFCFB] dark:bg-[#131517]">
                  <strong className="block text-emerald-700 dark:text-emerald-400 mb-1">Custodia Certificados HSM/KMS</strong>
                  <span>Módulos de seguridad hardware aislados para la firma electrónica cualificada.</span>
                </div>
                <div className="border border-[#D2D2CE] dark:border-[#303131] p-3.5 rounded-[4px] bg-[#FCFCFB] dark:bg-[#131517]">
                  <strong className="block text-emerald-700 dark:text-emerald-400 mb-1">Soportes Inalterables WORM</strong>
                  <span>Evidencias fiscales y logs conservados en almacenamiento de lectura inmutable.</span>
                </div>
              </div>

              <p>
                <strong>Transferencias Internacionales:</strong> Aunque la infraestructura principal está basada en la UE, en caso de utilizar proveedores o subencargados fuera del EEE, dichas transferencias se amparan bajo el <strong>EU-US Data Privacy Framework</strong> o, en su defecto, mediante la suscripción de <strong>Cláusulas Contractuales Tipo (SCC - Art. 46.2.c RGPD)</strong> aprobadas por la Comisión Europea.
              </p>
            </div>
          </section>

          {/* SECCIÓN 9: Copiloto IA */}
          <section id="asistente-ia" className="space-y-4 pt-4 border-t border-[#D2D2CE] dark:border-[#303131]">
            <h2 className="text-xl sm:text-2xl font-bold text-[#0A0C0B] dark:text-white flex items-center gap-2">
              <Sparkles className="w-5 h-5 text-emerald-600 dark:text-emerald-400 shrink-0" />
              <span>9. Tratamiento de Datos por el Copiloto de IA Fiscal</span>
            </h2>
            <div className={fontClasses[fontSize]}>
              <p className="mb-3">
                Avialo incorpora un copiloto de Inteligencia Artificial especializado en la resolución de dudas sobre la normativa fiscal española (VeriFactu, Ley de IVA, IRPF y deducciones):
              </p>

              <ul className="space-y-2.5 pl-5 list-disc marker:text-emerald-500">
                <li>
                  <strong>Inferencia Exclusiva en Servidores de la UE:</strong> Las consultas formuladas al asistente son procesadas en instancias de inferencia ubicadas en territorio europeo.
                </li>
                <li>
                  <strong>Anonimización Previa en Origen:</strong> Antes de procesar la petición, un filtro automatizado elimina nombres, NIFs, cuentas bancarias e identificadores personales.
                </li>
                <li>
                  <strong>Derecho de Exclusión (Opt-Out):</strong> El usuario dispone de la facultad de desactivar la recopilación de consultas para el entrenamiento continuo del modelo.
                </li>
              </ul>
            </div>
          </section>

          {/* SECCIÓN 10: Decisiones Automatizadas y Menores */}
          <section id="decisiones-automatizadas" className="space-y-4 pt-4 border-t border-[#D2D2CE] dark:border-[#303131]">
            <h2 className="text-xl sm:text-2xl font-bold text-[#0A0C0B] dark:text-white flex items-center gap-2">
              <ShieldCheck className="w-5 h-5 text-emerald-600 dark:text-emerald-400 shrink-0" />
              <span>10. Decisiones Automatizadas y Protección de Menores</span>
            </h2>
            <div className={fontClasses[fontSize]}>
              <ul className="space-y-3 pl-5 list-disc marker:text-emerald-500">
                <li>
                  <strong>Decisiones Automatizadas (Art. 22 RGPD):</strong> Avialo no toma decisiones automatizadas ni elabora perfiles que produzcan efectos jurídicos en el usuario o que le afecten significativamente de modo similar.
                </li>
                <li>
                  <strong>Protección de Menores (Art. 8 RGPD / Art. 7 LOPDGDD):</strong> Los servicios de Avialo están dirigidos exclusivamente a profesionales y entidades jurídicas mayores de 18 años. No se recopilan intencionadamente datos personales de menores de 14 años.
                </li>
              </ul>
            </div>
          </section>

          {/* SECCIÓN 11: Inicios Sesion y Auditoría */}
          <section id="inicios-sesion" className="space-y-4 pt-4 border-t border-[#D2D2CE] dark:border-[#303131]">
            <h2 className="text-xl sm:text-2xl font-bold text-[#0A0C0B] dark:text-white flex items-center gap-2">
              <Lock className="w-5 h-5 text-emerald-600 dark:text-emerald-400 shrink-0" />
              <span>11. Control de Acceso, 2FA y Registros de Auditoría</span>
            </h2>
            <div className={fontClasses[fontSize]}>
              <p className="mb-3">
                Con objeto de salvaguardar la cuenta del cliente e impedir accesos no autorizados a la información contable, se registran los eventos de control de acceso:
              </p>

              <div className="border border-[#D2D2CE] dark:border-[#303131] p-4 rounded-[4px] bg-[#FCFCFB] dark:bg-[#131517] space-y-2 text-xs sm:text-sm">
                <p>• <strong>Registros de Sesión (`Session Logs`):</strong> Captura de la dirección IP de acceso, tipo de navegador, sistema operativo y marca de tiempo exacta de login.</p>
                <p>• <strong>Autenticación de Doble Factor (2FA):</strong> Disponible para todas las cuentas e imprescindible para perfiles con permisos de administración.</p>
                <p>• <strong>Log Inmutable de Auditoría Interna:</strong> Todas las acciones efectuadas por el personal de soporte quedan registradas en un fichero inalterable.</p>
              </div>
            </div>
          </section>

          {/* SECCIÓN 12: Destinatarios */}
          <section id="destinatarios" className="space-y-4 pt-4 border-t border-[#D2D2CE] dark:border-[#303131]">
            <h2 className="text-xl sm:text-2xl font-bold text-[#0A0C0B] dark:text-white flex items-center gap-2">
              <Building2 className="w-5 h-5 text-emerald-600 dark:text-emerald-400 shrink-0" />
              <span>12. Destinatarios y Subencargados del Tratamiento</span>
            </h2>
            <div className={fontClasses[fontSize]}>
              <p className="mb-3">
                Avialo Soluciones S.L. no cederá datos a terceros, exceptuando las cesiones legalmente obligatorias y los proveedores indispensables bajo contrato de encargado de tratamiento (Art. 28 RGPD):
              </p>

              <ul className="space-y-2 pl-5 list-disc marker:text-emerald-500">
                <li><strong>Administración Tributaria:</strong> Agencia Estatal de Administración Tributaria (AEAT), Haciendas Forales Vascas y Registro FACe por mandato legal.</li>
                <li><strong>Pasarelas de Pago Certificadas PCI-DSS:</strong> Procesamiento seguro de suscripciones con cifrado bancario.</li>
                <li><strong>Proveedores de Infraestructura:</strong> Empresas de alojamiento de servidores, respaldo cloud y mensajería transaccional certificadas bajo el RGPD.</li>
              </ul>
            </div>
          </section>

          {/* SECCIÓN 13: Ejercicio de Derechos */}
          <section id="derechos" className="space-y-4 pt-4 border-t border-[#D2D2CE] dark:border-[#303131]">
            <h2 className="text-xl sm:text-2xl font-bold text-[#0A0C0B] dark:text-white flex items-center gap-2">
              <ShieldCheck className="w-5 h-5 text-emerald-600 dark:text-emerald-400 shrink-0" />
              <span>13. Ejercicio de Derechos de Protección de Datos</span>
            </h2>
            <div className={fontClasses[fontSize]}>
              <p className="mb-4">
                Cualquier usuario puede ejercitar libremente los derechos garantizados en el RGPD dirigiendo comunicación escrita a la dirección oficial:
              </p>

              <div className="grid grid-cols-2 sm:grid-cols-4 gap-2 text-xs font-bold text-center mb-4">
                <div className="border border-[#D2D2CE] dark:border-[#303131] p-2.5 rounded-[2px] bg-[#F2F2F0] dark:bg-[#131517]">Acceso</div>
                <div className="border border-[#D2D2CE] dark:border-[#303131] p-2.5 rounded-[2px] bg-[#F2F2F0] dark:bg-[#131517]">Rectificación</div>
                <div className="border border-[#D2D2CE] dark:border-[#303131] p-2.5 rounded-[2px] bg-[#F2F2F0] dark:bg-[#131517]">Supresión*</div>
                <div className="border border-[#D2D2CE] dark:border-[#303131] p-2.5 rounded-[2px] bg-[#F2F2F0] dark:bg-[#131517]">Oposición</div>
                <div className="border border-[#D2D2CE] dark:border-[#303131] p-2.5 rounded-[2px] bg-[#F2F2F0] dark:bg-[#131517]">Limitación</div>
                <div className="border border-[#D2D2CE] dark:border-[#303131] p-2.5 rounded-[2px] bg-[#F2F2F0] dark:bg-[#131517]">Portabilidad</div>
                <div className="border border-[#D2D2CE] dark:border-[#303131] p-2.5 rounded-[2px] bg-[#F2F2F0] dark:bg-[#131517]">Retirar Consentimiento</div>
                <div className="border border-[#D2D2CE] dark:border-[#303131] p-2.5 rounded-[2px] bg-[#F2F2F0] dark:bg-[#131517]">No Decisiones Auto. (Art. 22)</div>
              </div>

              <div className="border border-emerald-500/30 bg-emerald-500/10 p-4 rounded-[4px] text-center space-y-1 my-3">
                <p className="text-xs text-[rgba(10,12,11,0.7)] dark:text-white/70">Para solicitar el ejercicio de derechos, envíe correo con copia de documento identificativo a:</p>
                <a href="mailto:hola@avialo.es" className="font-extrabold text-sm text-emerald-700 dark:text-emerald-400 inline-flex items-center gap-1.5 hover:underline underline-offset-4">
                  <span className="no-underline">📧</span>
                  <span>hola@avialo.es</span>
                </a>
              </div>

              <p className="text-xs text-neutral-500 leading-relaxed mb-2">
                *Nota: El derecho de supresión no podrá aplicarse a los datos incluidos en facturas emitidas o registros informáticos SIF dada la obligación legal imperativa de su conservación ante la Administración Tributaria.
              </p>
              <p className="text-xs text-neutral-500 leading-relaxed">
                Asimismo, tiene derecho a presentar una reclamación ante la Autoridad de Control competente: <strong>Agencia Española de Protección de Datos (AEPD)</strong> - C/ Jorge Juan, 6, 28001 Madrid. Tel: 901 100 099 / 912 663 517 (<a href="https://www.aepd.es" target="_blank" rel="noopener noreferrer" className="font-bold underline underline-offset-4">www.aepd.es</a>).
              </p>
            </div>
          </section>

          {/* SECCIÓN 14: Brechas de Seguridad */}
          <section id="brechas-seguridad" className="space-y-4 pt-4 border-t border-[#D2D2CE] dark:border-[#303131]">
            <h2 className="text-xl sm:text-2xl font-bold text-[#0A0C0B] dark:text-white flex items-center gap-2">
              <AlertCircle className="w-5 h-5 text-emerald-600 dark:text-emerald-400 shrink-0" />
              <span>14. Gestión y Notificación de Brechas de Seguridad (Arts. 33 y 34 RGPD)</span>
            </h2>
            <div className={fontClasses[fontSize]}>
              <p className="mb-3">
                En cumplimiento del RGPD, Avialo ha implementado procedimientos específicos para la gestión de incidentes:
              </p>
              <ul className="space-y-2 pl-5 list-disc marker:text-emerald-500">
                <li><strong>Notificación a la AEPD:</strong> Cualquier brecha de seguridad que constituya un riesgo para los derechos y libertades de las personas será notificada a la Autoridad de Control en un plazo máximo de 72 horas.</li>
                <li><strong>Notificación a los Afectados:</strong> En caso de que la brecha entrañe un alto riesgo para los usuarios (compromiso de credenciales, datos financieros), se comunicará a los afectados sin dilación indebida, incluyendo las medidas correctoras adoptadas.</li>
              </ul>
            </div>
          </section>

          {/* SECCIÓN 15: Redes Sociales */}
          <section id="redes-sociales" className="space-y-4 pt-4 border-t border-[#D2D2CE] dark:border-[#303131]">
            <h2 className="text-xl sm:text-2xl font-bold text-[#0A0C0B] dark:text-white flex items-center gap-2">
              <Building2 className="w-5 h-5 text-emerald-600 dark:text-emerald-400 shrink-0" />
              <span>15. Redes Sociales y Deber de Confidencialidad</span>
            </h2>
            <div className={fontClasses[fontSize]}>
              <ul className="space-y-3 pl-5 list-disc marker:text-emerald-500">
                <li>
                  <strong>Redes Sociales:</strong> En el tratamiento de datos para estadísticas de páginas en redes sociales, Avialo actúa en régimen de corresponsabilidad (joint responsibility) junto con la plataforma correspondiente, en virtud de la jurisprudencia del TJUE.
                </li>
                <li>
                  <strong>Deber de Confidencialidad (Art. 5 LOPDGDD):</strong> Todo el personal, colaboradores y subcontratistas de Avialo están sujetos a un estricto deber de secreto profesional sobre los datos tratados, obligación que subsiste incluso una vez finalizada su relación con la empresa.
                </li>
              </ul>
            </div>
          </section>

          {/* SECCIÓN 16: Cookies */}
          <section id="cookies" className="space-y-4 pt-4 border-t border-[#D2D2CE] dark:border-[#303131]">
            <h2 className="text-xl sm:text-2xl font-bold text-[#0A0C0B] dark:text-white flex items-center gap-2">
              <FileText className="w-5 h-5 text-emerald-600 dark:text-emerald-400 shrink-0" />
              <span>16. Política de Cookies y Almacenamiento Técnico</span>
            </h2>
            <div className={fontClasses[fontSize]}>
              <p className="mb-3">
                Avialo emplea exclusivamente cookies técnicas exentas de consentimiento previo destinadas al correcto funcionamiento de la plataforma. Detalle de tipologías utilizadas:
              </p>
              <ul className="space-y-2 pl-5 list-disc marker:text-emerald-500">
                <li><strong>Cookies de Sesión:</strong> Para el mantenimiento seguro del token de autenticación mientras el usuario navega por la plataforma.</li>
                <li><strong>Cookies de Personalización (Tema):</strong> Almacenan la preferencia de visualización (modo claro u oscuro, alto contraste).</li>
                <li><strong>Cookies de Idioma:</strong> Retienen la preferencia lingüística del usuario para futuras visitas.</li>
              </ul>
              <p className="mt-3">
                No se emplean cookies publicitarias o de seguimiento de terceros sin consentimiento explícito.
              </p>
            </div>
          </section>

          {/* SECCIÓN 17: Vigencia */}
          <section id="vigencia" className="space-y-4 pt-4 border-t border-[#D2D2CE] dark:border-[#303131]">
            <h2 className="text-xl sm:text-2xl font-bold text-[#0A0C0B] dark:text-white flex items-center gap-2">
              <Mail className="w-5 h-5 text-emerald-600 dark:text-emerald-400 shrink-0" />
              <span>17. Vigencia, Modificaciones y Canal de Atención</span>
            </h2>
            <div className={fontClasses[fontSize]}>
              <p className="mb-3">
                La presente Política de Privacidad se encuentra vigente desde el 1 de agosto de 2026. AVIALO SOLUCIONES S.L. se reserva el derecho de modificar el texto para adecuarlo a novedades legislativas, jurisprudenciales o dictámenes de la Agencia Tributaria o AEPD.
              </p>
              
              <div className="border border-[#D2D2CE] dark:border-[#303131] p-4 rounded-[4px] bg-[#FCFCFB] dark:bg-[#131517] space-y-1.5 font-mono text-xs">
                <p><strong>AVIALO SOLUCIONES S.L.</strong> • CIF B26802249</p>
                <p>Domicilio: Calle Honduras 20, Puerta B, Planta 4. 28822, Coslada (Madrid), España</p>
                <p>Correo de contacto directo: <a href="mailto:hola@avialo.es" className="text-emerald-600 dark:text-emerald-400 font-bold underline underline-offset-4">hola@avialo.es</a></p>
                <p>Sitio web oficial: <a href="https://avialo.tech" className="text-emerald-600 dark:text-emerald-400 font-bold underline underline-offset-4">https://avialo.tech</a></p>
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

export default PrivacyPolicyPage;
