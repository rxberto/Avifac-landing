import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
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
  Type,
  Sun,
  BookOpen,
  Mail,
  Building2,
  CheckCircle2,
  AlertCircle,
  ChevronRight,
  ArrowUp,
} from 'lucide-react';

export const PrivacyPolicyPage = () => {
  const { t } = useLanguage();

  // Controles de Accesibilidad Exclusivos de esta página
  const [fontSize, setFontSize] = useState<'normal' | 'large' | 'xlarge'>('normal');
  const [highContrast, setHighContrast] = useState(false);
  const [dyslexicFont, setDyslexicFont] = useState(false);
  const [activeSection, setActiveSection] = useState<string>('intro');

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const fontClasses = {
    normal: 'text-sm sm:text-base leading-relaxed',
    large: 'text-base sm:text-lg leading-loose',
    xlarge: 'text-lg sm:text-xl leading-loose',
  };

  const sections = [
    { id: 'responsable', title: t('1. Responsable del Tratamiento', '1. Data Controller Details') },
    { id: 'marco-legal', title: t('2. Marco Legal y Normativa Aplicable', '2. Legal Framework & Regulations') },
    { id: 'aeat-verifactu', title: t('3. Certificación AEAT, VeriFactu y FACe', '3. AEAT, VeriFactu & FACe Certification') },
    { id: 'finalidades', title: t('4. Finalidades del Tratamiento de Datos', '4. Purposes of Data Processing') },
    { id: 'inalterabilidad', title: t('5. Inalterabilidad y Registros SIF (4 años)', '5. SIF Immutability & 4-Year Retention') },
    { id: 'residencia-seguridad', title: t('6. Residencia de Datos en la UE y Seguridad', '6. EU Data Residency & Security') },
    { id: 'asistente-ia', title: t('7. Tratamiento por Asistente de IA Fiscal', '7. AI Tax Assistant Data Processing') },
    { id: 'inicios-sesion', title: t('8. Inicios de Sesión, 2FA y Auditoría', '8. Logins, 2FA & Audit Logs') },
    { id: 'destinatarios', title: t('9. Destinatarios y Encargados de Tratamiento', '9. Recipients & Data Processors') },
    { id: 'derechos', title: t('10. Ejercicio de Derechos ARCO+', '10. User Rights (ARCO+)') },
    { id: 'cookies', title: t('11. Política de Cookies y Tecnologías', '11. Cookie & Technology Policy') },
    { id: 'contacto', title: t('12. Contacto y Delegado de Protección', '12. Contact & Protection Officer') },
  ];

  const scrollToSection = (id: string) => {
    setActiveSection(id);
    const element = document.getElementById(id);
    if (element) {
      const yOffset = -100;
      const y = element.getBoundingClientRect().top + window.pageYOffset + yOffset;
      window.scrollTo({ top: y, behavior: 'smooth' });
    }
  };

  return (
    <div
      className={`min-h-screen w-full transition-colors duration-300 ${
        highContrast
          ? 'bg-black text-yellow-300 dark:bg-black dark:text-yellow-300 font-mono'
          : 'bg-[#FCFCFB] dark:bg-[#080a09] text-[#0A0C0B] dark:text-white'
      } ${dyslexicFont ? 'font-sans tracking-wide' : ''}`}
    >
      <Navbar />

      {/* Hero Header de la Página Legal */}
      <section className="relative pt-32 pb-16 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto border-b border-[#D2D2CE] dark:border-[#303131]">
        <div className="max-w-4xl mx-auto text-center space-y-4">
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4 }}
            className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-500/10 border border-emerald-500/30 text-emerald-700 dark:text-emerald-400 text-xs font-bold uppercase tracking-wider"
          >
            <ShieldCheck className="w-4 h-4" />
            <span>{t('Protección de Datos & Cumplimiento Fiscal AEAT', 'Data Protection & AEAT Tax Compliance')}</span>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, delay: 0.1 }}
            className="text-3xl sm:text-5xl font-extrabold tracking-tight text-[#0A0C0B] dark:text-white"
          >
            {t('Política de Privacidad y Protección de Datos', 'Privacy Policy & Data Protection')}
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, delay: 0.2 }}
            className="text-sm sm:text-base text-[rgba(10,12,11,0.7)] dark:text-white/70 max-w-2xl mx-auto"
          >
            {t(
              'Garantizamos la máxima transparencia en el tratamiento de tus datos personales y fiscales en estricto cumplimiento del RGPD, LOPDGDD y el Reglamento VeriFactu (RD 1007/2023) de la Agencia Tributaria.',
              'We ensure maximum transparency regarding personal and tax data processing under GDPR, LOPDGDD, and Spanish Tax Agency VeriFactu Regulation (RD 1007/2023).'
            )}
          </motion.p>

          <div className="pt-2 text-xs font-mono text-emerald-800 dark:text-emerald-400 font-bold">
            {t('Última actualización: 1 de Agosto de 2026 • Versión 2.4 SIF', 'Last updated: August 1, 2026 • Version 2.4 SIF')}
          </div>
        </div>
      </section>

      {/* Barra Flotante de Accesibilidad Web (Exclusiva de la página /privacidad) */}
      <div className="sticky top-20 z-30 bg-[#F2F2F0]/90 dark:bg-[#131517]/90 backdrop-blur-md border-b border-[#D2D2CE] dark:border-[#303131] py-2.5 px-4 sm:px-6">
        <div className="max-w-6xl mx-auto flex flex-wrap items-center justify-between gap-3 text-xs">
          <div className="flex items-center gap-2 text-[rgba(10,12,11,0.8)] dark:text-white/80 font-bold">
            <Eye className="w-4 h-4 text-emerald-600 dark:text-emerald-400" />
            <span>{t('Opciones de Accesibilidad Lectora:', 'Reader Accessibility Options:')}</span>
          </div>

          <div className="flex flex-wrap items-center gap-2 sm:gap-4">
            {/* Control de Tamaño de Letra */}
            <div className="flex items-center gap-1 bg-white dark:bg-[#1f2124] border border-[#D2D2CE] dark:border-[#303131] p-1 rounded-lg">
              <Type className="w-3.5 h-3.5 text-neutral-500 ml-1" />
              <button
                onClick={() => setFontSize('normal')}
                className={`px-2 py-0.5 rounded text-[11px] font-bold transition-colors ${
                  fontSize === 'normal'
                    ? 'bg-emerald-600 text-white dark:bg-emerald-400 dark:text-black'
                    : 'text-neutral-600 dark:text-neutral-300 hover:bg-neutral-200 dark:hover:bg-neutral-800'
                }`}
              >
                A
              </button>
              <button
                onClick={() => setFontSize('large')}
                className={`px-2 py-0.5 rounded text-xs font-bold transition-colors ${
                  fontSize === 'large'
                    ? 'bg-emerald-600 text-white dark:bg-emerald-400 dark:text-black'
                    : 'text-neutral-600 dark:text-neutral-300 hover:bg-neutral-200 dark:hover:bg-neutral-800'
                }`}
              >
                A+
              </button>
              <button
                onClick={() => setFontSize('xlarge')}
                className={`px-2 py-0.5 rounded text-sm font-bold transition-colors ${
                  fontSize === 'xlarge'
                    ? 'bg-emerald-600 text-white dark:bg-emerald-400 dark:text-black'
                    : 'text-neutral-600 dark:text-neutral-300 hover:bg-neutral-200 dark:hover:bg-neutral-800'
                }`}
              >
                A++
              </button>
            </div>

            {/* Alternar Alto Contraste */}
            <button
              onClick={() => setHighContrast(!highContrast)}
              className={`flex items-center gap-1.5 px-2.5 py-1.5 rounded-lg border font-bold text-[11px] transition-colors cursor-pointer ${
                highContrast
                  ? 'bg-yellow-300 text-black border-yellow-400'
                  : 'bg-white dark:bg-[#1f2124] border-[#D2D2CE] dark:border-[#303131] text-neutral-700 dark:text-neutral-200 hover:border-emerald-500'
              }`}
            >
              <Sun className="w-3.5 h-3.5" />
              <span>{highContrast ? t('Alto Contraste ON', 'High Contrast ON') : t('Alto Contraste', 'High Contrast')}</span>
            </button>

            {/* Tipografía Lectura Fácil */}
            <button
              onClick={() => setDyslexicFont(!dyslexicFont)}
              className={`flex items-center gap-1.5 px-2.5 py-1.5 rounded-lg border font-bold text-[11px] transition-colors cursor-pointer ${
                dyslexicFont
                  ? 'bg-emerald-600 text-white border-emerald-700'
                  : 'bg-white dark:bg-[#1f2124] border-[#D2D2CE] dark:border-[#303131] text-neutral-700 dark:text-neutral-200 hover:border-emerald-500'
              }`}
            >
              <BookOpen className="w-3.5 h-3.5" />
              <span>{t('Lectura Fácil', 'Dyslexia Friendly')}</span>
            </button>
          </div>
        </div>
      </div>

      {/* Contenido Principal con Navegación Lateral e Índice */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* Columna Izquierda: Índice Navegable Fijo */}
          <aside className="hidden lg:block lg:col-span-4 sticky top-36 p-5 rounded-2xl bg-[#F2F2F0] dark:bg-[#131517] border border-[#D2D2CE] dark:border-[#303131] space-y-4">
            <div className="flex items-center gap-2 text-xs font-black uppercase tracking-wider text-[#0A0C0B] dark:text-white border-b border-[#D2D2CE] dark:border-[#303131] pb-3">
              <FileText className="w-4 h-4 text-emerald-600 dark:text-emerald-400" />
              <span>{t('Índice Legal de Secciones', 'Legal Table of Contents')}</span>
            </div>
            <nav className="space-y-1 text-xs">
              {sections.map((sec) => (
                <button
                  key={sec.id}
                  onClick={() => scrollToSection(sec.id)}
                  className={`w-full text-left px-3 py-2 rounded-lg font-medium transition-all flex items-center justify-between cursor-pointer ${
                    activeSection === sec.id
                      ? 'bg-emerald-600 text-white font-bold shadow-sm'
                      : 'text-[rgba(10,12,11,0.7)] dark:text-white/70 hover:bg-black/5 dark:hover:bg-white/5 hover:text-black dark:hover:text-white'
                  }`}
                >
                  <span className="truncate">{sec.title}</span>
                  <ChevronRight className="w-3.5 h-3.5 shrink-0 opacity-70" />
                </button>
              ))}
            </nav>

            <div className="pt-3 border-t border-[#D2D2CE] dark:border-[#303131] space-y-2">
              <div className="text-[11px] text-[rgba(10,12,11,0.6)] dark:text-white/60">
                {t('¿Dudas sobre tus datos personales?', 'Questions about your personal data?')}
              </div>
              <a
                href="mailto:hola@avialo.es"
                className="inline-flex items-center gap-1.5 text-xs font-bold text-emerald-700 dark:text-emerald-400 hover:underline"
              >
                <Mail className="w-3.5 h-3.5" />
                <span>hola@avialo.es</span>
              </a>
            </div>
          </aside>

          {/* Columna Derecha: Texto Normativo Completo */}
          <main className="lg:col-span-8 space-y-10 text-left">
            
            {/* Banner Destacado de Compromiso RGPD + AEAT */}
            <div className="p-6 rounded-2xl bg-emerald-500/10 border-2 border-emerald-500/30 space-y-3">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-emerald-600 text-white flex items-center justify-center font-bold shrink-0">
                  <ShieldCheck className="w-6 h-6" />
                </div>
                <div>
                  <h2 className="text-base sm:text-lg font-extrabold text-[#0A0C0B] dark:text-white leading-tight">
                    {t('Compromiso Blindado de Privacidad y Cumplimiento Tributario', 'Armored Privacy & Tax Compliance Commitment')}
                  </h2>
                  <p className="text-xs text-emerald-800 dark:text-emerald-300 font-medium">
                    {t('AVIALO SOLUCIONES, S.L. (NIF B26802249) • Residencia 100% de datos en España y la Unión Europea', 'AVIALO SOLUCIONES, S.L. (Tax ID B26802249) • 100% EU & Spain Data Residency')}
                  </p>
                </div>
              </div>
              <p className="text-xs text-[rgba(10,12,11,0.75)] dark:text-white/80 leading-relaxed">
                {t(
                  'El presente documento constituye la Política de Privacidad oficial aplicable a la plataforma de facturación electrónica Avialo. Todos los tratamientos de datos respetan los principios de licitud, lealtad, transparencia, limitación de la finalidad, minimización, exactitud, limitación del plazo de conservación, integridad y confidencialidad.',
                  'This document constitutes the official Privacy Policy for the Avialo e-invoicing platform. All data processing respects the principles of lawfulness, fairness, transparency, purpose limitation, data minimization, and integrity.'
                )}
              </p>
            </div>

            {/* SECCIÓN 1: Responsable del Tratamiento */}
            <section id="responsable" className="space-y-4 pt-4 border-t border-[#D2D2CE] dark:border-[#303131]">
              <h2 className="text-xl sm:text-2xl font-bold text-[#0A0C0B] dark:text-white flex items-center gap-2">
                <Building2 className="w-6 h-6 text-emerald-600 dark:text-emerald-400" />
                <span>{t('1. Identificación del Responsable del Tratamiento', '1. Data Controller Identification')}</span>
              </h2>
              <div className={fontClasses[fontSize]}>
                <p className="mb-3">
                  En cumplimiento del artículo 10 de la Ley 34/2002, de 11 de julio, de Servicios de la Sociedad de la Información y de Comercio Electrónico (LSSI-CE) y del Reglamento General de Protección de Datos (RGPD UE 2016/679), se informan los datos identificativos del responsable legal del tratamiento:
                </p>
                <div className="p-4 rounded-xl bg-[#F2F2F0] dark:bg-[#131517] border border-[#D2D2CE] dark:border-[#303131] space-y-2 text-xs font-mono">
                  <div className="flex justify-between border-b border-[#D2D2CE] dark:border-[#303131] pb-1.5">
                    <span className="font-bold text-neutral-500">Denominación Social:</span>
                    <span className="font-extrabold text-[#0A0C0B] dark:text-white">AVIALO SOLUCIONES, S.L. (Sociedad Unipersonal)</span>
                  </div>
                  <div className="flex justify-between border-b border-[#D2D2CE] dark:border-[#303131] pb-1.5">
                    <span className="font-bold text-neutral-500">Número de Identificación Fiscal (NIF):</span>
                    <span className="font-extrabold text-emerald-700 dark:text-emerald-400">B26802249</span>
                  </div>
                  <div className="flex justify-between border-b border-[#D2D2CE] dark:border-[#303131] pb-1.5">
                    <span className="font-bold text-neutral-500">Domicilio Social:</span>
                    <span>Calle de Honduras 20, 4B, 28822 Coslada (Madrid), España</span>
                  </div>
                  <div className="flex justify-between border-b border-[#D2D2CE] dark:border-[#303131] pb-1.5">
                    <span className="font-bold text-neutral-500">Correo Electrónico Oficial:</span>
                    <a href="mailto:hola@avialo.es" className="font-bold text-emerald-600 dark:text-emerald-400 underline">hola@avialo.es</a>
                  </div>
                  <div className="flex justify-between">
                    <span className="font-bold text-neutral-500">Actividad Principal:</span>
                    <span>Desarrollo de Software de Facturación Certificado (SIF)</span>
                  </div>
                </div>
              </div>
            </section>

            {/* SECCIÓN 2: Marco Legal y Normativa Aplicable */}
            <section id="marco-legal" className="space-y-4 pt-4 border-t border-[#D2D2CE] dark:border-[#303131]">
              <h2 className="text-xl sm:text-2xl font-bold text-[#0A0C0B] dark:text-white flex items-center gap-2">
                <FileText className="w-6 h-6 text-emerald-600 dark:text-emerald-400" />
                <span>{t('2. Marco Legal y Normativa Aplicable', '2. Legal Framework & Regulations')}</span>
              </h2>
              <div className={fontClasses[fontSize]}>
                <p className="mb-3">
                  La plataforma Avialo está diseñada y operada bajo el estricto cumplimiento de los marcos normativos europeos y españoles en materia de privacidad, comercio electrónico y legislación tributaria:
                </p>
                <ul className="space-y-2 text-xs sm:text-sm pl-4 list-disc marker:text-emerald-500">
                  <li><strong>RGPD (Reglamento UE 2016/679):</strong> Protección de las personas físicas en lo que respecta al tratamiento de datos personales.</li>
                  <li><strong>LOPDGDD (Ley Orgánica 3/2018):</strong> Garantía de los derechos digitales y protección de datos en España.</li>
                  <li><strong>LSSI-CE (Ley 34/2002):</strong> Servicios de la sociedad de la información y comercio electrónico.</li>
                  <li><strong>Ley 11/2021 de Medidas de Prevención y Lucha contra el Fraude Fiscal:</strong> Exigencia de inalterabilidad y trazabilidad en los programas informáticos de facturación.</li>
                  <li><strong>Real Decreto 1007/2023 (Reglamento VeriFactu / SIF):</strong> Requisitos técnicos obligatorios para los sistemas informáticos de facturación.</li>
                  <li><strong>Real Decreto 1619/2012:</strong> Reglamento por el que se regulan las obligaciones de facturación en España.</li>
                </ul>
              </div>
            </section>

            {/* SECCIÓN 3: Certificación AEAT, VeriFactu y FACe */}
            <section id="aeat-verifactu" className="space-y-4 pt-4 border-t border-[#D2D2CE] dark:border-[#303131]">
              <h2 className="text-xl sm:text-2xl font-bold text-[#0A0C0B] dark:text-white flex items-center gap-2">
                <ShieldCheck className="w-6 h-6 text-emerald-600 dark:text-emerald-400" />
                <span>{t('3. Certificación AEAT, Sistema VeriFactu y Registro FACe', '3. AEAT Certification, VeriFactu & FACe Register')}</span>
              </h2>
              <div className={fontClasses[fontSize]}>
                <p className="mb-3">
                  Avialo Soluciones S.L. ostenta la condición de <strong>Software de Facturación Certificado (SIF)</strong> respaldado por las siguientes garantías institucionales:
                </p>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 my-4">
                  <div className="p-4 rounded-xl bg-emerald-500/10 border border-emerald-500/30 space-y-2">
                    <div className="flex items-center gap-2 font-bold text-xs text-emerald-800 dark:text-emerald-300">
                      <CheckCircle2 className="w-4 h-4" />
                      <span>Acuerdo Social AEAT Nº 17</span>
                    </div>
                    <p className="text-xs text-[rgba(10,12,11,0.7)] dark:text-white/70">
                      Autorizados oficialmente por la Agencia Estatal de Administración Tributaria para la remisión telemática directa de registros de facturación, SII, SILICIE y sistemas Veri*Factu en representación de terceros.
                    </p>
                  </div>
                  <div className="p-4 rounded-xl bg-emerald-500/10 border border-emerald-500/30 space-y-2">
                    <div className="flex items-center gap-2 font-bold text-xs text-emerald-800 dark:text-emerald-300">
                      <CheckCircle2 className="w-4 h-4" />
                      <span>Integrador Oficial FACe (B2G)</span>
                    </div>
                    <p className="text-xs text-[rgba(10,12,11,0.7)] dark:text-white/70">
                      Conexión técnica habilitada con el Punto General de Entrada de Facturas Electrónicas de la Administración Pública para la emisión oficial del formato FacturaE firmado digitalmente.
                    </p>
                  </div>
                </div>
                <p>
                  Asimismo, la arquitectura soporta de forma nativa los requerimientos forales de <strong>TicketBAI y Batuz/LROE</strong> en el País Vasco (Araba, Bizkaia y Gipuzkoa) mediante firma de ficheros XML con certificado cualificado XAdES.
                </p>
              </div>
            </section>

            {/* SECCIÓN 4: Finalidades del Tratamiento de Datos */}
            <section id="finalidades" className="space-y-4 pt-4 border-t border-[#D2D2CE] dark:border-[#303131]">
              <h2 className="text-xl sm:text-2xl font-bold text-[#0A0C0B] dark:text-white flex items-center gap-2">
                <CheckCircle2 className="w-6 h-6 text-emerald-600 dark:text-emerald-400" />
                <span>{t('4. Finalidades del Tratamiento de Datos', '4. Purposes of Data Processing')}</span>
              </h2>
              <div className={fontClasses[fontSize]}>
                <p className="mb-3">
                  Tratamos la información proporcionada por los usuarios para las siguientes finalidades legítimas:
                </p>
                <div className="space-y-3 text-xs sm:text-sm">
                  <div className="p-3 rounded-lg bg-[#F2F2F0] dark:bg-[#131517] border border-[#D2D2CE] dark:border-[#303131]">
                    <strong>A) Prestación del Servicio SaaS de Facturación:</strong> Gestión de cuentas de usuario, emisión de facturas completas/simplificadas, presupuestos, albaranes, cobros recurrentes y exportación de libros registros.
                  </div>
                  <div className="p-3 rounded-lg bg-[#F2F2F0] dark:bg-[#131517] border border-[#D2D2CE] dark:border-[#303131]">
                    <strong>B) Remisión Telemática Tributaria (AEAT):</strong> Envío en tiempo real o diferido de los registros fiscales de alta y anulación al servicio web de la Agencia Tributaria en modalidad Veri*Factu.
                  </div>
                  <div className="p-3 rounded-lg bg-[#F2F2F0] dark:bg-[#131517] border border-[#D2D2CE] dark:border-[#303131]">
                    <strong>C) Facturación a Administraciones Públicas (FACe):</strong> Tramitación de facturas electrónicas dirigidas a órganos administrativos del Estado, Comunidades Autónomas y Entidades Locales.
                  </div>
                  <div className="p-3 rounded-lg bg-[#F2F2F0] dark:bg-[#131517] border border-[#D2D2CE] dark:border-[#303131]">
                    <strong>D) Asistencia Técnica y Soporte al Cliente:</strong> Resolución de incidencias, consultas fiscales y atención personalizada mediante correo o widget de ayuda.
                  </div>
                </div>
              </div>
            </section>

            {/* SECCIÓN 5: Inalterabilidad y Registros SIF (Conservación 4 años) */}
            <section id="inalterabilidad" className="space-y-4 pt-4 border-t border-[#D2D2CE] dark:border-[#303131]">
              <h2 className="text-xl sm:text-2xl font-bold text-[#0A0C0B] dark:text-white flex items-center gap-2">
                <Lock className="w-6 h-6 text-emerald-600 dark:text-emerald-400" />
                <span>{t('5. Principios SIF: Inalterabilidad y Custodia Imperativa (4 años)', '5. SIF Immutability & Mandatory 4-Year Custody')}</span>
              </h2>
              <div className={fontClasses[fontSize]}>
                <p className="mb-3">
                  En virtud de la Ley 11/2021 y del artículo 66 de la Ley General Tributaria (Ley 58/2003), los registros informáticos de facturación expedidos a través de Avialo poseen carácter <strong>inmutable, encadenado e inalterable (`append-only`)</strong>.
                </p>
                <div className="p-4 rounded-xl bg-amber-500/10 border border-amber-500/30 text-amber-900 dark:text-amber-200 text-xs leading-relaxed space-y-2">
                  <div className="flex items-center gap-2 font-bold uppercase tracking-wider">
                    <AlertCircle className="w-4 h-4 text-amber-600 dark:text-amber-400 shrink-0" />
                    <span>Aviso Imperativo de Conservación Legal:</span>
                  </div>
                  <p>
                    Una vez emitida una factura o registro de alta, la legislación tributaria española <strong>prohíbe expresamente su borrado o modificación destructiva</strong>. Las correcciones se realizan únicamente mediante facturas rectificativas o registros fiscales de anulación encadenados.
                  </p>
                  <p>
                    Avialo conservará los datos de facturación e historiales de eventos de auditoría durante el plazo legal de prescripción tributaria de <strong>al menos 4 años</strong>, prevaleciendo este deber legal sobre la solicitud de supresión de datos conforme al art. 17.3.b del RGPD.
                  </p>
                </div>
              </div>
            </section>

            {/* SECCIÓN 6: Residencia de Datos en la UE y Seguridad */}
            <section id="residencia-seguridad" className="space-y-4 pt-4 border-t border-[#D2D2CE] dark:border-[#303131]">
              <h2 className="text-xl sm:text-2xl font-bold text-[#0A0C0B] dark:text-white flex items-center gap-2">
                <Server className="w-6 h-6 text-emerald-600 dark:text-emerald-400" />
                <span>{t('6. Residencia de Datos en la Unión Europea y Seguridad', '6. EU Data Residency & Technical Security')}</span>
              </h2>
              <div className={fontClasses[fontSize]}>
                <p className="mb-3">
                  Toda la infraestructura tecnológica, bases de datos PostgreSQL, almacenamiento WORM de evidencias fiscales e instancias de procesamiento de Avialo residen <strong>100% en centros de datos ubicados en territorio de la Unión Europea (España / Región UE)</strong>.
                </p>
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 my-3 text-xs">
                  <div className="p-3 rounded-lg bg-[#F2F2F0] dark:bg-[#131517] border border-[#D2D2CE] dark:border-[#303131] space-y-1">
                    <strong className="block text-emerald-700 dark:text-emerald-400">Cifrado de Extremo a Extremo</strong>
                    <span>Cifrado TLS 1.3 en tránsito y AES-256 en reposo para todas las bases de datos.</span>
                  </div>
                  <div className="p-3 rounded-lg bg-[#F2F2F0] dark:bg-[#131517] border border-[#D2D2CE] dark:border-[#303131] space-y-1">
                    <strong className="block text-emerald-700 dark:text-emerald-400">Custodia en KMS/HSM</strong>
                    <span>Certificados digitales para TicketBAI custodiados en módulos de seguridad hardware aislados.</span>
                  </div>
                  <div className="p-3 rounded-lg bg-[#F2F2F0] dark:bg-[#131517] border border-[#D2D2CE] dark:border-[#303131] space-y-1">
                    <strong className="block text-emerald-700 dark:text-emerald-400">Almacenamiento WORM</strong>
                    <span>Ficheros XML y registros de auditoría guardados en soportes inalterables de solo lectura.</span>
                  </div>
                </div>
              </div>
            </section>

            {/* SECCIÓN 7: Tratamiento por Asistente de IA Fiscal */}
            <section id="asistente-ia" className="space-y-4 pt-4 border-t border-[#D2D2CE] dark:border-[#303131]">
              <h2 className="text-xl sm:text-2xl font-bold text-[#0A0C0B] dark:text-white flex items-center gap-2">
                <Sparkles className="w-6 h-6 text-emerald-600 dark:text-emerald-400" />
                <span>{t('7. Tratamiento de Datos por el Copiloto de IA Fiscal', '7. AI Tax Assistant Data Processing')}</span>
              </h2>
              <div className={fontClasses[fontSize]}>
                <p className="mb-3">
                  Avialo integra un asistente de Inteligencia Artificial propio especializado en la normativa tributaria española (VeriFactu, LIVA, LIRPF):
                </p>
                <ul className="space-y-2 text-xs sm:text-sm pl-4 list-disc marker:text-emerald-500">
                  <li><strong>Inferencia Local en la UE:</strong> Los modelos se ejecutan en servidores seguros ubicados en la Unión Europea sin enviar datos a plataformas públicas de terceros fuera de la UE.</li>
                  <li><strong>Anonimización en Origen:</strong> Las consultas enviadas al copiloto eliminan automáticamente nombres, NIFs y datos de contacto sensibles mediante canal de anonimización previo.</li>
                  <li><strong>Derecho de Exclusión (Opt-Out):</strong> El usuario puede desactivar en cualquier momento el almacenamiento de sus consultas para el entrenamiento futuro del modelo desde el panel de ajustes de su cuenta.</li>
                </ul>
              </div>
            </section>

            {/* SECCIÓN 8: Inicios de Sesión, 2FA y Auditoría */}
            <section id="inicios-sesion" className="space-y-4 pt-4 border-t border-[#D2D2CE] dark:border-[#303131]">
              <h2 className="text-xl sm:text-2xl font-bold text-[#0A0C0B] dark:text-white flex items-center gap-2">
                <Lock className="w-6 h-6 text-emerald-600 dark:text-emerald-400" />
                <span>{t('8. Control de Acceso, Autenticación 2FA y Registros de Auditoría', '8. Access Control, 2FA Authentication & Audit Logs')}</span>
              </h2>
              <div className={fontClasses[fontSize]}>
                <p className="mb-3">
                  Para prevenir accesos no autorizados y garantizar la trazabilidad exigida por la normativa SIF, Avialo recopila y almacena datos de control de acceso:
                </p>
                <div className="p-4 rounded-xl bg-[#F2F2F0] dark:bg-[#131517] border border-[#D2D2CE] dark:border-[#303131] space-y-2 text-xs">
                  <p>• <strong>Registros de Sesión (`Session Log`):</strong> Dirección IP de origen, tipo de navegador, sistema operativo, fecha y hora exacta de cada inicio de sesión.</p>
                  <p>• <strong>Autenticación de Doble Factor (2FA):</strong> Recomendada y disponible para todos los usuarios, obligatoria para perfiles de administración.</p>
                  <p>• <strong>Registro de Eventos de Seguridad (`EventLog`):</strong> Registro append-only de modificaciones de permisos, invitaciones a workspaces y operaciones de emisión o anulación fiscal.</p>
                </div>
              </div>
            </section>

            {/* SECCIÓN 9: Destinatarios y Encargados de Tratamiento */}
            <section id="destinatarios" className="space-y-4 pt-4 border-t border-[#D2D2CE] dark:border-[#303131]">
              <h2 className="text-xl sm:text-2xl font-bold text-[#0A0C0B] dark:text-white flex items-center gap-2">
                <Building2 className="w-6 h-6 text-emerald-600 dark:text-emerald-400" />
                <span>{t('9. Destinatarios de los Datos y Encargados de Tratamiento', '9. Data Recipients & Sub-processors')}</span>
              </h2>
              <div className={fontClasses[fontSize]}>
                <p className="mb-3">
                  Sus datos personales y fiscales no serán cedidos a terceros, salvo imperativo legal o prestación de servicios auxiliares indispensables:
                </p>
                <ul className="space-y-2 text-xs sm:text-sm pl-4 list-disc marker:text-emerald-500">
                  <li><strong>Organismos Públicos y Administración Tributaria:</strong> AEAT, Haciendas Forales Vascas y Registro FACe por obligación legal derivada de la emisión de registros fiscales.</li>
                  <li><strong>Entidades Bancarias y Pasarelas de Pago:</strong> Procesamiento de suscripciones SaaS (Stripe / Redsys) bajo estándares PCI-DSS.</li>
                  <li><strong>Proveedores de Infraestructura en la UE:</strong> Proveedores de alojamiento cloud, custodia de certificados y envío de correo transaccional en la Región UE con contratos de Encargado de Tratamiento (art. 28 RGPD).</li>
                </ul>
              </div>
            </section>

            {/* SECCIÓN 10: Ejercicio de Derechos ARCO+ */}
            <section id="derechos" className="space-y-4 pt-4 border-t border-[#D2D2CE] dark:border-[#303131]">
              <h2 className="text-xl sm:text-2xl font-bold text-[#0A0C0B] dark:text-white flex items-center gap-2">
                <ShieldCheck className="w-6 h-6 text-emerald-600 dark:text-emerald-400" />
                <span>{t('10. Ejercicio de Derechos (Acceso, Rectificación, Supresión y Oposición)', '10. Exercise of User Rights (ARCO+)')}</span>
              </h2>
              <div className={fontClasses[fontSize]}>
                <p className="mb-3">
                  El usuario puede ejercitar en todo momento sus derechos reconocidos en los artículos 15 a 22 del RGPD:
                </p>
                <div className="grid grid-cols-2 sm:grid-cols-3 gap-2 text-xs font-bold text-center my-3">
                  <div className="p-2.5 rounded-lg bg-[#F2F2F0] dark:bg-[#131517] border border-[#D2D2CE] dark:border-[#303131]">Acceso (Art. 15)</div>
                  <div className="p-2.5 rounded-lg bg-[#F2F2F0] dark:bg-[#131517] border border-[#D2D2CE] dark:border-[#303131]">Rectificación (Art. 16)</div>
                  <div className="p-2.5 rounded-lg bg-[#F2F2F0] dark:bg-[#131517] border border-[#D2D2CE] dark:border-[#303131]">Supresión (Art. 17)*</div>
                  <div className="p-2.5 rounded-lg bg-[#F2F2F0] dark:bg-[#131517] border border-[#D2D2CE] dark:border-[#303131]">Oposición (Art. 21)</div>
                  <div className="p-2.5 rounded-lg bg-[#F2F2F0] dark:bg-[#131517] border border-[#D2D2CE] dark:border-[#303131]">Limitación (Art. 18)</div>
                  <div className="p-2.5 rounded-lg bg-[#F2F2F0] dark:bg-[#131517] border border-[#D2D2CE] dark:border-[#303131]">Portabilidad (Art. 20)</div>
                </div>
                <p className="text-xs text-[rgba(10,12,11,0.7)] dark:text-white/70">
                  Para ejercitar cualquiera de estos derechos, basta con enviar una solicitud escrita acompañada de copia de documento acreditativo de identidad a la dirección oficial:
                </p>
                <div className="p-3 rounded-xl bg-emerald-500/10 border border-emerald-500/30 text-center my-2">
                  <a href="mailto:hola@avialo.es" className="font-extrabold text-sm text-emerald-700 dark:text-emerald-400 hover:underline">
                    📧 hola@avialo.es
                  </a>
                </div>
                <p className="text-xs text-neutral-500">
                  *Nota: El derecho de supresión está supeditado al cumplimiento del deber legal de conservación de registros fiscales durante 4 años ante la Agencia Tributaria. Asimismo, si considera vulnerados sus derechos, puede presentar una reclamación ante la Agencia Española de Protección de Datos (AEPD en <a href="https://www.aepd.es" target="_blank" rel="noopener noreferrer" className="underline font-bold">www.aepd.es</a>).
                </p>
              </div>
            </section>

            {/* SECCIÓN 11: Política de Cookies */}
            <section id="cookies" className="space-y-4 pt-4 border-t border-[#D2D2CE] dark:border-[#303131]">
              <h2 className="text-xl sm:text-2xl font-bold text-[#0A0C0B] dark:text-white flex items-center gap-2">
                <FileText className="w-6 h-6 text-emerald-600 dark:text-emerald-400" />
                <span>{t('11. Política de Cookies y Tecnologías de Almacenamiento', '11. Cookies & Storage Technology Policy')}</span>
              </h2>
              <div className={fontClasses[fontSize]}>
                <p className="mb-3">
                  Avialo utiliza únicamente cookies técnicas estrictamente necesarias para el funcionamiento seguro de la plataforma, el mantenimiento de sesiones autenticadas y la preferencia de idioma/tema. No utilizamos cookies publicitarias ni de seguimiento de terceros sin consentimiento explícito.
                </p>
              </div>
            </section>

            {/* SECCIÓN 12: Contacto y Delegado de Protección */}
            <section id="contacto" className="space-y-4 pt-4 border-t border-[#D2D2CE] dark:border-[#303131]">
              <h2 className="text-xl sm:text-2xl font-bold text-[#0A0C0B] dark:text-white flex items-center gap-2">
                <Mail className="w-6 h-6 text-emerald-600 dark:text-emerald-400" />
                <span>{t('12. Contacto Legal y Atributos de Empresa', '12. Legal Contact & Corporate Details')}</span>
              </h2>
              <div className={fontClasses[fontSize]}>
                <p className="mb-3">
                  Para cualquier duda o aclaración sobre esta Política de Privacidad o el tratamiento de sus datos de facturación:
                </p>
                <div className="p-5 rounded-2xl bg-[#F2F2F0] dark:bg-[#131517] border border-[#D2D2CE] dark:border-[#303131] space-y-2 text-xs">
                  <p><strong>AVIALO SOLUCIONES, S.L.</strong> (Sociedad Unipersonal)</p>
                  <p>NIF: <strong>B26802249</strong></p>
                  <p>Dirección: Calle de Honduras 20, 4B, 28822 Coslada (Madrid), España</p>
                  <p>Correo de atención: <a href="mailto:hola@avialo.es" className="text-emerald-600 dark:text-emerald-400 font-bold underline">hola@avialo.es</a></p>
                  <p>Web oficial: <a href="https://avialo.tech" className="text-emerald-600 dark:text-emerald-400 font-bold underline">https://avialo.tech</a></p>
                </div>
              </div>
            </section>

            {/* Botón Volver Arriba */}
            <div className="pt-8 flex justify-center">
              <button
                onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
                className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-[#0A0C0B] dark:bg-white text-white dark:text-black font-bold text-xs hover:opacity-90 transition-opacity shadow-md cursor-pointer"
              >
                <ArrowUp className="w-4 h-4" />
                <span>{t('Volver al inicio de la página', 'Back to top')}</span>
              </button>
            </div>

          </main>

        </div>
      </div>

      <Footer />
    </div>
  );
};

export default PrivacyPolicyPage;
