import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import {
  Check,
  ShieldCheck,
  Lock,
  QrCode,
  ChevronDown,
  CheckCircle2,
  XCircle,
  Clock,
  Building2,
  UserCheck,
} from 'lucide-react';
import { Navbar } from './Navbar';
import { Footer } from './Footer';
import { Button } from './Button';
import { useLanguage } from '../context/LanguageContext';
import { APP_URLS } from '../config/urls';

interface FAQItem {
  id: number;
  q: string;
  a: string;
}

export const VeriFactuPage = () => {
  const { t } = useLanguage();
  const [openFaqId, setOpenFaqId] = useState<number | null>(1);
  const [selectedTab, setSelectedTab] = useState<'companies' | 'freelancers'>('companies');

  const faqs: FAQItem[] = [
    {
      id: 1,
      q: t('¿Qué es exactamente VeriFactu y qué leyes lo regulan?', 'What exactly is VeriFactu and what legal framework regulates it?'),
      a: t(
        'VeriFactu es la especificación técnica y reglamentaria derivada del Real Decreto 1007/2023, en desarrollo de la Ley 11/2021 de medidas de prevención y lucha contra el fraude fiscal. Define las condiciones de inalterabilidad, trazabilidad, conservación, accesibilidad y legibilidad que debe cumplir de forma obligatoria cualquier sistema informático de facturación en España.',
        'VeriFactu is the official regulatory and technical specification established by Royal Decree 1007/2023 under Law 11/2021 (Anti-Fraud Act). It enforces strict standards of data immutability, traceability, preservation, accessibility, and readability required for all billing systems operating in Spain.'
      ),
    },
    {
      id: 2,
      q: t('¿Cuándo entra en vigor la obligatoriedad legal para mi negocio?', 'When do these regulations become mandatory for my business?'),
      a: t(
        'El calendario normativo de la Agencia Tributaria establece un despliegue escalonado pero inexorable: para las pymes y empresas (sociedades mercantiles), la obligatoriedad entra en vigor el 1 de enero de 2027. Para los autónomos y profesionales independientes, la fecha límite vinculante es el 1 de julio de 2027. Operar tras esas fechas sin un software SIF homologado implica infracciones muy graves.',
        'The Tax Agency timeline sets a mandatory phased rollout: for SMEs and corporate companies, full legal compliance begins January 1st, 2027. For self-employed individuals and freelancers, the binding deadline is July 1st, 2027. Invoicing without certified SIF software after these deadlines constitutes a severe regulatory breach.'
      ),
    },
    {
      id: 3,
      q: t('¿Por qué está totalmente prohibido seguir facturando en Excel, Word o PDF casero?', 'Why is invoicing via Excel, Word, or manual PDFs strictly illegal now?'),
      a: t(
        'La Ley Antifraude (Art. 201 bis de la Ley General Tributaria) prohíbe taxativamente la tenencia y uso de software o herramientas ofimáticas como Excel y Word para la emisión de facturas, ya que permiten la modificación o alteración posterior de registros sin dejar rastro informático. La sanción económica por el simple hecho de utilizar o poseer herramientas de facturación no certificadas asciende hasta 50.000 € por ejercicio.',
        'The Anti-Fraud Law (Art. 201 bis of the General Tax Code) expressly prohibits owning or utilizing spreadsheet tools like Excel or Word for billing, as they allow retro-active edits without an indelible cryptographic audit trail. Fines merely for operating or possessing non-certified invoicing solutions reach up to €50,000 per fiscal year.'
      ),
    },
    {
      id: 4,
      q: t('¿Cómo funciona el encadenamiento criptográfico SHA-256 de Avialo?', 'How does Avialo SHA-256 cryptographic chaining work?'),
      a: t(
        'Cada vez que generas una factura o ticket simplificado en Avialo, nuestro motor criptográfico genera un código resumen único (hash SHA-256) que contiene los datos contables de esa factura junto al hash identificativo de la factura inmediatamente anterior. Esto crea una cadena sellada e irrompible: es matemáticamente imposible alterar una factura pasada sin invalidar toda la secuencia, garantizando tu integridad ante la AEAT.',
        'Each time an invoice or receipt is generated in Avialo, our cryptographic engine creates a unique digital fingerprint (SHA-256 hash) containing the invoice data plus the hash of the immediately preceding invoice. This links invoices into an unbreakable chained ledger, proving 100% audit integrity to Tax authorities.'
      ),
    },
    {
      id: 5,
      q: t('¿Si cometo un error en una factura emitida, puedo borrarla o editarla?', 'If I make a mistake on an issued invoice, can I edit or delete it?'),
      a: t(
        'Bajo el amparo legal de VeriFactu, ninguna factura emitida puede ser borrada, sobrescrita o eliminada de la base de datos. Si detectas un error o una devolución, Avialo te permite emitir de forma sencilla una "Factura Rectificativa" homologada con un solo clic. Esta rectificativa queda debidamente referenciada y encadenada en el registro contable SIF, cumpliendo escrupulosamente con el reglamento.',
        'Under strict VeriFactu law, issued records can never be deleted, overwritten, or scrubbed. If an error occurs or a refund is needed, Avialo enables you to generate a fully certified "Credit Note / Rectifying Invoice" in one click. This keeps the accounting sequence seamless and totally compliant.'
      ),
    },
    {
      id: 6,
      q: t('¿Qué diferencia existe entre el modo "VeriFactu de envío directo" y el "SIF de custodia"?', 'What is the difference between "VeriFactu Live Submission" and "SIF Custody" mode?'),
      a: t(
        'El Real Decreto 1007/2023 permite dos modalidades de cumplimiento. El modo VeriFactu remite telemática y automáticamente el hash de cada factura a los servidores de la AEAT en el mismo momento de su emisión, dispensándote de ciertas obligaciones formales y mostrando la leyenda "Factura verificable en sede de la AEAT" junto al QR. El modo SIF de Custodia almacena de forma inmutable la cadena criptográfica en nuestros servidores seguros en AWS España, listos para su inspección inmediata si la autoridad lo requiere.',
        'Royal Decree 1007/2023 allows two operating modes. VeriFactu live mode automatically submits cryptographic hashes directly to Tax Agency servers in real-time upon issuance, displaying an official verification banner on your QR code. SIF Custody mode stores the immutable hash chains securely on our AWS Spain instances, immediately accessible in case of an official fiscal inspection.'
      ),
    },
    {
      id: 7,
      q: t('¿Qué pasa con las normativas regionales como TicketBAI en el País Vasco y Navarra?', 'What about regional frameworks like TicketBAI in the Basque Country and Navarre?'),
      a: t(
        'Avialo cumple como Software Garante SIF a nivel estatal con VeriFactu y FACe. RESPECTO A TICKETBAI Y SISTEMAS FORALES REGIONALES, ACTUALMENTE NOS ENCONTRAMOS DESARROLLANDO E INTEGRANDO LOS MÓDULOS Y CERTIFICACIONES CORRESPONDIENTES PARA SU DESPLIEGUE, SI HICIERAN FALTA, ASEGURANDO LA MISMA EXCELENCIA TÉCNICA Y GARANTÍA NORMATIVA.',
        'Avialo complies nationwide as a Certified SIF under VeriFactu and FACe standards. REGARDING TICKETBAI AND REGIONAL FORAL FRAMEWORKS, WE ARE CURRENTLY IN THE PROCESS OF DEVELOPING AND INTEGRATING THE CORRESPONDING REGIONAL CERTIFICATIONS AND MODULES AS NEEDED, ENSURING THE SAME ARCHITECTURAL EXCELLENCE AND COMPLIANCE.'
      ),
    },
    {
      id: 8,
      q: t('¿Cómo obtengo el certificado de Declaración Responsable ante una inspección?', 'How do I obtain the official Guaranteed Software Statement for a tax audit?'),
      a: t(
        'Al suscribirte a cualquier plan de Avialo, accedes al instante y de forma automática al PDF firmado electrónicamente con nuestra Declaración de Responsabilidad SIF conforme al Artículo 12 del Reglamento. Este documento vinculante acredita formalmente que tu infraestructura de facturación cumple con todos los estándares técnicos legales exigidos por la Hacienda Española.',
        'By subscribing to any Avialo plan, you immediately gain automatic access to the digitally signed PDF containing our official SIF Guaranteed Software Statement under Article 12. This binding legal document officially proves to inspectors that your billing infrastructure adheres to all technical standards mandated by Spanish Tax Authorities.'
      ),
    },
  ];

  return (
    <div className="min-h-screen bg-[#FCFCFB] dark:bg-[#080a09] text-[#0A0C0B] dark:text-white w-full overflow-x-hidden antialiased transition-colors duration-300 flex flex-col">
      <Navbar />

      {/* CABECERA / HERO LIMPIO ESTILO LANDING (SIN TAGS SOBREPUESTOS) */}
      <header className="relative pt-36 pb-20 px-4 sm:px-6 lg:px-8 max-w-[1280px] mx-auto text-center w-full">
        
        {/* Fondo de textura sutil */}
        <div className="absolute inset-0 bg-dot-texture opacity-25 pointer-events-none -z-10" />

        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="flex flex-col items-center gap-6 max-w-4xl mx-auto"
        >
          <h1 className="text-4xl sm:text-5xl lg:text-[60px] font-bold tracking-[-0.03em] text-[#0A0C0B] dark:text-white leading-[1.12]">
            {t(
              'Facturación VeriFactu 2027: Seguridad fiscal sin fisuras ni letra pequeña',
              'VeriFactu 2027 Invoicing: Ironclad tax compliance without compromises'
            )}
          </h1>

          <p className="text-base sm:text-lg text-[rgba(10,12,11,0.72)] dark:text-white/80 max-w-2xl mx-auto leading-[1.5] font-normal">
            {t(
              'Sistema de Facturación Certificado (SIF) 100% homologado ante la Agencia Tributaria. Encadenamiento criptográfico SHA-256, códigos QR reglamentarios y cero riesgo de sanciones para autónomos, pymes y despachos contables.',
              '100% Tax Agency Certified Invoicing System (SIF). Built-in SHA-256 cryptographic hash chaining, official tax QR codes, and zero compliance risks for freelancers, corporations, and agencies.'
            )}
          </p>

          {/* Botones de acción limpios e inmersivos */}
          <div className="pt-2 flex flex-col sm:flex-row items-stretch sm:items-center justify-center gap-4 w-full sm:w-auto">
            <Button
              variant="primary"
              href={APP_URLS.register}
              className="w-full sm:w-auto px-8 py-4 text-base font-bold shadow-md justify-center text-center"
            >
              <span>{t('Empezar a facturar 100% legal gratis', 'Start Invoicing 100% Compliant for Free')}</span>
            </Button>
            <Button
              variant="secondary"
              href="https://www.avialo.es/ACUERDO_AVIALO_SOLUCIONES_SL.pdf"
              external
              className="w-full sm:w-auto whitespace-normal sm:whitespace-nowrap px-6 py-4 text-sm font-semibold justify-center text-center"
            >
              <span>{t('Ver Declaración SIF Garante (PDF)', 'View Official SIF Certificate (PDF)')}</span>
            </Button>
          </div>

          <div className="pt-4 flex justify-center w-full px-4 sm:px-0">
            <a 
              href="https://sede.agenciatributaria.gob.es/Sede/colaborar-agencia-tributaria/colaboracion-social-presentacion-declaraciones/relacion-entidades-acuerdo/tipo-17-empresas-sistemas-informaticos-facturacion/madrid.html" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="inline-flex flex-col sm:flex-row items-center justify-center text-center gap-1 sm:gap-2 px-4 py-3 sm:py-2 rounded-[16px] sm:rounded-full bg-[rgba(52,138,46,0.08)] dark:bg-[rgba(104,204,88,0.08)] hover:bg-[rgba(52,138,46,0.12)] dark:hover:bg-[rgba(104,204,88,0.12)] border border-[rgba(52,138,46,0.2)] dark:border-[rgba(104,204,88,0.2)] text-xs sm:text-sm text-[rgb(43,115,38)] dark:text-[rgb(124,224,108)] font-semibold transition-colors duration-200"
            >
              <ShieldCheck className="w-5 h-5 sm:w-4 sm:h-4 shrink-0" />
              <span>{t('Avialo figura como software autorizado en el listado oficial de la AEAT', 'Avialo is listed as an authorized software in the official Tax Agency registry')}</span>
            </a>
          </div>

          {/* Lista de garantías arquitectónicas (sin cajas estridentes) */}
          <div className="flex flex-wrap items-center justify-center gap-x-8 gap-y-3 pt-6 text-xs sm:text-sm font-medium text-[rgba(10,12,11,0.85)] dark:text-white/85">
            <div className="inline-flex items-center gap-2">
              <Check className="w-4 h-4 text-[rgb(52,138,46)] dark:text-[rgb(104,204,88)] shrink-0" />
              <span>{t('Cumple Real Decreto 1007/2023', 'Complies with RD 1007/2023')}</span>
            </div>
            <div className="inline-flex items-center gap-2">
              <Check className="w-4 h-4 text-[rgb(52,138,46)] dark:text-[rgb(104,204,88)] shrink-0" />
              <span>{t('Ley Antifraude 11/2021', 'Anti-Fraud Law 11/2021')}</span>
            </div>
            <div className="inline-flex items-center gap-2">
              <Check className="w-4 h-4 text-[rgb(52,138,46)] dark:text-[rgb(104,204,88)] shrink-0" />
              <span>{t('Hash inmutable SHA-256', 'Immutable SHA-256 Hashes')}</span>
            </div>
            <div className="inline-flex items-center gap-2">
              <Check className="w-4 h-4 text-[rgb(52,138,46)] dark:text-[rgb(104,204,88)] shrink-0" />
              <span>{t('Conexión telemática AEAT', 'AEAT Live Telematic Routing')}</span>
            </div>
          </div>
        </motion.div>
      </header>

      {/* CONTENIDO PRINCIPAL DE PRODUCTO */}
      <main className="max-w-[1240px] mx-auto px-4 sm:px-6 lg:px-8 pb-24 w-full flex flex-col gap-24">
        
        {/* SECCIÓN 1: SHOWCASE VISUAL - SIMULADOR UI & FOTO REAL (SIN TAGS RECARGADOS) */}
        <section className="w-full">
          <div className="rounded-[20px] bg-[#F2F2F0] dark:bg-[#131517] border border-[#D2D2CE] dark:border-[#303131] p-6 sm:p-10 lg:p-12 shadow-2xl overflow-hidden grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
            
            {/* Explicación de la tecnología (Col 5) */}
            <div className="lg:col-span-5 space-y-6 text-left">
              <div className="space-y-3">
                <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold tracking-[-0.03em] text-[#0A0C0B] dark:text-white leading-tight">
                  {t('Tecnología invisible, protección fiscal absoluta', 'Invisible engine, absolute tax protection')}
                </h2>
                <p className="text-sm sm:text-base text-[rgba(10,12,11,0.75)] dark:text-white/75 leading-relaxed font-normal">
                  {t(
                    'No necesitas conocimientos informáticos ni tediosas configuraciones fiscales. El motor de Avialo incrusta el sello de inviolabilidad en el fondo de tu facturación mientras tú te enfocas en liderar tu negocio.',
                    'Zero programming logic or convoluted tax installations needed. Avialo engine embeds regulatory immutability directly in your billing backend while you focus entirely on scaling your venture.'
                  )}
                </p>
              </div>

              <div className="space-y-4 pt-2">
                <div className="flex items-start gap-3.5 p-4 rounded-[12px] bg-[#FCFCFB] dark:bg-[#080a09] border border-[#D2D2CE] dark:border-[#303131]">
                  <div className="p-2 rounded-[8px] bg-[rgba(52,138,46,0.1)] text-[rgb(52,138,46)] dark:text-[rgb(104,204,88)] shrink-0 mt-0.5">
                    <ShieldCheck className="w-5 h-5" />
                  </div>
                  <div className="text-left">
                    <h4 className="text-sm font-bold text-[#0A0C0B] dark:text-white">
                      {t('Sello QR SIF Normativo', 'Official SIF QR Stamp')}
                    </h4>
                    <p className="text-xs text-[rgba(10,12,11,0.7)] dark:text-white/70 mt-1 leading-relaxed">
                      {t(
                        'Código QR de alta resolución listo para lectura por parte de clientes e inspectores en cada PDF e impresión.',
                        'High-resolution QR stamp embedded in every PDF and thermal ticket for instant verification by clients and tax officers.'
                      )}
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-3.5 p-4 rounded-[12px] bg-[#FCFCFB] dark:bg-[#080a09] border border-[#D2D2CE] dark:border-[#303131]">
                  <div className="p-2 rounded-[8px] bg-[rgba(20,122,132,0.1)] text-[rgb(20,122,132)] dark:text-[rgb(158,250,255)] shrink-0 mt-0.5">
                    <Lock className="w-5 h-5" />
                  </div>
                  <div className="text-left">
                    <h4 className="text-sm font-bold text-[#0A0C0B] dark:text-white">
                      {t('Encadenamiento de Hash Criptográfico', 'Cryptographic Hash Chaining')}
                    </h4>
                    <p className="text-xs text-[rgba(10,12,11,0.7)] dark:text-white/70 mt-1 leading-relaxed">
                      {t(
                        'Registro de eventos que vincula cada factura con la anterior mediante huella digital SHA-256, blindando tu contabilidad.',
                        'Event ledger linking every invoice to the previous one via SHA-256 fingerprints, bulletproofing your accounting history.'
                      )}
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Simulación Gráfica de Factura VeriFactu (Col 7) */}
            <div className="lg:col-span-7 relative">
              <div className="w-full rounded-[16px] bg-[#FCFCFB] dark:bg-[#080a09] border border-[#D2D2CE] dark:border-[#303131] p-6 sm:p-8 shadow-xl space-y-6 text-left overflow-hidden">
                
                {/* Cabecera del Documento Simulated */}
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-5 border-b border-[#D2D2CE] dark:border-[#303131]">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-[10px] bg-[#0A0C0B] dark:bg-white flex items-center justify-center text-white dark:text-[#0A0C0B] font-bold text-lg">
                      AV
                    </div>
                    <div>
                      <div className="text-xs font-semibold text-[rgba(10,12,11,0.5)] dark:text-white/50 uppercase tracking-wider font-mono">
                        {t('FACTURA OFICIAL VERIFACTU', 'OFFICIAL VERIFACTU INVOICE')}
                      </div>
                      <div className="text-sm sm:text-base font-bold text-[#0A0C0B] dark:text-white font-mono">
                        FAC-2027-00489
                      </div>
                    </div>
                  </div>
                  <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-[rgba(52,138,46,0.12)] text-[rgb(43,115,38)] dark:text-[rgb(124,224,108)] text-xs font-bold font-mono self-start sm:self-auto">
                    <span className="w-2 h-2 rounded-full bg-[rgb(52,138,46)] animate-pulse" />
                    <span>{t('VERIFICA AEAT: OK', 'AEAT VERIFIED: OK')}</span>
                  </div>
                </div>

                {/* Cuerpo del Mockup */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 py-2">
                  <div className="space-y-1">
                    <div className="text-xs text-[rgba(10,12,11,0.55)] dark:text-white/55 font-medium uppercase">
                      {t('EMISOR GARANTE', 'ISSUER GARANTE')}
                    </div>
                    <div className="text-sm font-bold text-[#0A0C0B] dark:text-white">
                      AVIALO SOLUCIONES S.L.
                    </div>
                    <div className="text-xs text-[rgba(10,12,11,0.7)] dark:text-white/70 font-mono">
                      NIF: B26802249 • Coslada (Madrid)
                    </div>
                  </div>
                  <div className="space-y-1 sm:text-right">
                    <div className="text-xs text-[rgba(10,12,11,0.55)] dark:text-white/55 font-medium uppercase">
                      {t('CLIENTE RECEPTOR', 'RECIPIENT CLIENT')}
                    </div>
                    <div className="text-sm font-bold text-[#0A0C0B] dark:text-white">
                      Tech Innovations España S.L.
                    </div>
                    <div className="text-xs text-[rgba(10,12,11,0.7)] dark:text-white/70 font-mono">
                      NIF: B87654321 • Madrid
                    </div>
                  </div>
                </div>

                {/* Tabla Simulated */}
                <div className="rounded-[10px] bg-[#F2F2F0]/80 dark:bg-[#131517] border border-[#D2D2CE] dark:border-[#303131] p-4 text-xs sm:text-sm font-mono space-y-2">
                  <div className="flex items-center justify-between pb-2 border-b border-[#D2D2CE]/60 dark:border-[#303131]">
                    <span className="font-bold">{t('Concepto de Facturación', 'Billing Item')}</span>
                    <span className="font-bold">{t('Importe Total', 'Total Amount')}</span>
                  </div>
                  <div className="flex items-center justify-between text-[rgba(10,12,11,0.85)] dark:text-white/85 py-1">
                    <span>{t('Servicios de Consultoría Informática (CNAE 6220)', 'IT Consulting Services (CNAE 6220)')}</span>
                    <span className="font-bold">1.250,00 €</span>
                  </div>
                  <div className="flex items-center justify-between text-xs text-[rgba(10,12,11,0.6)] dark:text-white/60 pt-1 border-t border-[#D2D2CE]/60 dark:border-[#303131]">
                    <span>{t('IVA Aplicado (21%) + Retención IRPF', 'VAT (21%) + Income Tax Withholding')}</span>
                    <span className="text-[rgb(52,138,46)] dark:text-[rgb(104,204,88)] font-bold">{t('Cálculo Automático IA', 'AI Auto-Calculated')}</span>
                  </div>
                </div>

                {/* Pie Criptográfico VeriFactu con QR */}
                <div className="pt-3 flex flex-col sm:flex-row items-center sm:items-start justify-between gap-5 border-t border-[#D2D2CE] dark:border-[#303131]">
                  <div className="space-y-1.5 w-full min-w-0">
                    <div className="text-[10px] sm:text-xs font-bold text-[rgba(10,12,11,0.65)] dark:text-white/65 uppercase tracking-wider font-mono">
                      {t('HUELLA CRIPTOGRÁFICA SHA-256 (INMUTABLE)', 'CRYPTOGRAPHIC SHA-256 FINGERPRINT (IMMUTABLE)')}
                    </div>
                    <div className="p-2.5 rounded-[8px] bg-[#0A0C0B] text-[#00FF66] font-mono text-[10px] sm:text-xs overflow-x-auto whitespace-nowrap tracking-wide border border-[#303131]">
                      e9f4c8b2a3d7e6f1a8c5b9e0d4a7c2b3e8d1a6c4f9e3b7a2...
                    </div>
                    <div className="text-[11px] text-[rgba(10,12,11,0.6)] dark:text-white/60 flex items-center gap-1.5 pt-0.5">
                      <Check className="w-3.5 h-3.5 text-[rgb(52,138,46)] shrink-0" />
                      <span>{t('Encadenada exitosamente al hash anterior #00488', 'Chained successfully to previous hash #00488')}</span>
                    </div>
                  </div>

                  {/* QR Simulated Stamp */}
                  <div className="shrink-0 p-2.5 bg-white rounded-[10px] border border-[#D2D2CE] shadow-sm flex flex-col items-center gap-1 text-[#0A0C0B]">
                    <QrCode className="w-14 h-14 text-black" />
                    <span className="text-[8px] font-mono font-bold tracking-tighter uppercase">{t('VERIFACTU SIF', 'VERIFACTU SIF')}</span>
                  </div>
                </div>

              </div>
            </div>

          </div>
        </section>

        {/* SECCIÓN 2: CALENDARIO NORMATIVO 2027 - FECHAS OBLIGATORIAS VINCULANTES */}
        <section className="space-y-10">
          <div className="text-center sm:text-left space-y-3 max-w-3xl">
            <h2 className="text-2xl sm:text-4xl font-bold tracking-[-0.03em] text-[#0A0C0B] dark:text-white">
              {t('Calendario Normativo 2027: ¿Cuándo entra en vigor para tu empresa?', '2027 Legal Timeline: When does it become binding for your business?')}
            </h2>
            <p className="text-sm sm:text-base text-[rgba(10,12,11,0.75)] dark:text-white/75 leading-relaxed font-normal">
              {t(
                'El Gobierno y la Agencia Tributaria establecen fechas oficiales improrrogables para el abandono de herramientas tradicionales y la adopción obligatoria de sistemas VeriFactu.',
                'The Spanish Tax Authority sets non-extendable legal deadlines for retiring traditional spreadsheet billing and enforcing mandatory adoption of VeriFactu systems.'
              )}
            </p>
          </div>

          {/* Selector interactivo de modalidad (Pymes vs Autónomos) */}
          <div className="w-full bg-[#F2F2F0] dark:bg-[#131517] rounded-[20px] border border-[#D2D2CE] dark:border-[#303131] p-6 sm:p-10">
            <div className="flex flex-col md:flex-row items-center justify-between gap-6 pb-8 border-b border-[#D2D2CE] dark:border-[#303131]">
              <div className="space-y-1 text-center md:text-left">
                <h3 className="text-lg sm:text-xl font-bold text-[#0A0C0B] dark:text-white">
                  {t('Selecciona tu tipo de sociedad para conocer tu fecha límite oficial:', 'Select your business entity type to check your legal deadline:')}
                </h3>
              </div>
              <div className="flex flex-col sm:flex-row items-stretch sm:items-center p-1.5 rounded-[10px] bg-[#FCFCFB] dark:bg-[#080a09] border border-[#D2D2CE] dark:border-[#303131] w-full sm:w-auto gap-1 sm:gap-0 shrink-0">
                <button
                  onClick={() => setSelectedTab('companies')}
                  className={`px-6 py-2.5 rounded-[8px] text-xs sm:text-sm transition-all duration-200 cursor-pointer flex items-center justify-center gap-2 ${
                    selectedTab === 'companies'
                      ? 'bg-[#0A0C0B] dark:bg-white text-white dark:text-black font-bold shadow-md'
                      : 'text-[rgba(10,12,11,0.7)] dark:text-white/70 hover:text-[#0A0C0B] dark:hover:text-white font-medium'
                  }`}
                >
                  <Building2 className="w-4 h-4 shrink-0" />
                  <span>{t('Pymes & Empresas (1 de Enero)', 'SMEs & Companies (Jan 1st)')}</span>
                </button>
                <button
                  onClick={() => setSelectedTab('freelancers')}
                  className={`px-6 py-2.5 rounded-[8px] text-xs sm:text-sm transition-all duration-200 cursor-pointer flex items-center justify-center gap-2 ${
                    selectedTab === 'freelancers'
                      ? 'bg-[#0A0C0B] dark:bg-white text-white dark:text-black font-bold shadow-md'
                      : 'text-[rgba(10,12,11,0.7)] dark:text-white/70 hover:text-[#0A0C0B] dark:hover:text-white font-medium'
                  }`}
                >
                  <UserCheck className="w-4 h-4 shrink-0" />
                  <span>{t('Autónomos & Profesionales (1 de Julio)', 'Freelancers & Professionals (July 1st)')}</span>
                </button>
              </div>
            </div>

            <AnimatePresence mode="wait">
              {selectedTab === 'companies' ? (
                <motion.div
                  key="comp"
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -10 }}
                  transition={{ duration: 0.3 }}
                  className="pt-8 grid grid-cols-1 md:grid-cols-2 gap-8 items-center"
                >
                  <div className="space-y-5 text-left">
                    <div className="inline-flex items-center gap-2 px-3 py-1 rounded-[6px] bg-[rgba(20,122,132,0.12)] text-[rgb(20,122,132)] dark:text-[rgb(158,250,255)] font-bold text-xs font-mono uppercase">
                      <Clock className="w-3.5 h-3.5" />
                      <span>{t('FECHA LEGAL VINCULANTE: 01/01/2027', 'MANDATORY DEADLINE: 01/01/2027')}</span>
                    </div>
                    <h3 className="text-2xl sm:text-3xl font-bold text-[#0A0C0B] dark:text-white leading-tight">
                      {t('1 de Enero de 2027: Obligatorio para Sociedades y Pymes', 'January 1st, 2027: Mandatory for SMEs & Corporations')}
                    </h3>
                    <p className="text-sm sm:text-base text-[rgba(10,12,11,0.75)] dark:text-white/75 leading-relaxed">
                      {t(
                        'A partir del 1 de enero de 2027, todas las empresas emisoras de facturas y sociedades mercantiles que operen en el territorio común español tienen terminantemente prohibido utilizar softwares informáticos no homologados ante VeriFactu.',
                        'Starting January 1st, 2027, all corporations and businesses operating under common Spanish tax law are strictly legally forbidden from generating bills using software lacking official VeriFactu SIF certification.'
                      )}
                    </p>
                    <ul className="space-y-2.5 text-xs sm:text-sm font-medium text-[#0A0C0B] dark:text-white">
                      <li className="flex items-center gap-2.5">
                        <CheckCircle2 className="w-4 h-4 text-[rgb(52,138,46)] shrink-0" />
                        <span>{t('Afecta a SL, SA, Cooperativas y Entidades Mercantiles', 'Applies to LLPs, Corps, Cooperatives and Mercantile Entities')}</span>
                      </li>
                      <li className="flex items-center gap-2.5">
                        <CheckCircle2 className="w-4 h-4 text-[rgb(52,138,46)] shrink-0" />
                        <span>{t('Obligatoriedad de código QR y hash en facturación B2B / B2C', 'Mandatory QR codes and cryptographic chaining in B2B / B2C invoices')}</span>
                      </li>
                      <li className="flex items-center gap-2.5">
                        <CheckCircle2 className="w-4 h-4 text-[rgb(52,138,46)] shrink-0" />
                        <span>{t('Puesta en marcha ágil con soporte en vivo especializado en España', 'Agile deployment with specialized live support in Spain')}</span>
                      </li>
                    </ul>
                  </div>
                  <div className="w-full h-full min-h-[260px] rounded-[14px] overflow-hidden relative shadow-lg border border-[#D2D2CE] dark:border-[#303131]">
                    <img
                      src="https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&auto=format&fit=crop&q=80"
                      alt="Equipo de gestión financiera de empresa"
                      className="w-full h-full object-cover min-h-[260px] filter saturate-[1.05] contrast-[1.05]"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-[#080a09] via-transparent to-transparent opacity-80" />
                    <div className="absolute bottom-4 left-4 right-4 text-white text-left">
                      <div className="text-xs font-bold font-mono text-[rgb(158,250,255)] uppercase">{t('AUDITORÍA FISCAL AEAT', 'TAX AGENCY AUDIT READY')}</div>
                      <div className="text-sm font-semibold">{t('Transición transparente para tu equipo financiero', 'Seamless transition for your financial & accounting team')}</div>
                    </div>
                  </div>
                </motion.div>
              ) : (
                <motion.div
                  key="free"
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -10 }}
                  transition={{ duration: 0.3 }}
                  className="pt-8 grid grid-cols-1 md:grid-cols-2 gap-8 items-center"
                >
                  <div className="space-y-5 text-left">
                    <div className="inline-flex items-center gap-2 px-3 py-1 rounded-[6px] bg-[rgba(52,138,46,0.15)] text-[rgb(43,115,38)] dark:text-[rgb(124,224,108)] font-bold text-xs font-mono uppercase">
                      <Clock className="w-3.5 h-3.5" />
                      <span>{t('FECHA LEGAL VINCULANTE: 01/07/2027', 'MANDATORY DEADLINE: 01/07/2027')}</span>
                    </div>
                    <h3 className="text-2xl sm:text-3xl font-bold text-[#0A0C0B] dark:text-white leading-tight">
                      {t('1 de Julio de 2027: Obligatorio para Autónomos y Profesionales', 'July 1st, 2027: Mandatory for Freelancers & Independent Professionals')}
                    </h3>
                    <p className="text-sm sm:text-base text-[rgba(10,12,11,0.75)] dark:text-white/75 leading-relaxed">
                      {t(
                        'Los trabajadores autónomos, profesionales liberales y gremios independientes disponen hasta el 1 de julio de 2027 para abandonar plantillas manuales, hojas de cálculo o carnets en papel y operar exclusivamente bajo software SIF.',
                        'Self-employed professionals, freelancers, and independent contractors have until July 1st, 2027 to retire manual templates, paper notebooks, or basic Excel files, moving 100% to certified SIF tools.'
                      )}
                    </p>
                    <ul className="space-y-2.5 text-xs sm:text-sm font-medium text-[#0A0C0B] dark:text-white">
                      <li className="flex items-center gap-2.5">
                        <CheckCircle2 className="w-4 h-4 text-[rgb(52,138,46)] shrink-0" />
                        <span>{t('Para todos los regímenes y profesionales colegiados', 'Applies to all self-employed regimes and professionals')}</span>
                      </li>
                      <li className="flex items-center gap-2.5">
                        <CheckCircle2 className="w-4 h-4 text-[rgb(52,138,46)] shrink-0" />
                        <span>{t('Generación instantánea de facturas desde el móvil en 15 segundos', 'Instant mobile invoice generation in under 15 seconds')}</span>
                      </li>
                      <li className="flex items-center gap-2.5">
                        <CheckCircle2 className="w-4 h-4 text-[rgb(52,138,46)] shrink-0" />
                        <span>{t('Acceso gratuito para tu gestoría, adiós al envío manual de tickets', 'Free read access for your accountant, goodbye manual receipt scanning')}</span>
                      </li>
                    </ul>
                  </div>
                  <div className="w-full h-full min-h-[260px] rounded-[14px] overflow-hidden relative shadow-lg border border-[#D2D2CE] dark:border-[#303131]">
                    <img
                      src="https://images.unsplash.com/photo-1551836022-d5d88e9218df?w=800&auto=format&fit=crop&q=80"
                      alt="Autónomo gestionando facturación ágil"
                      className="w-full h-full object-cover min-h-[260px] filter saturate-[1.05] contrast-[1.05]"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-[#080a09] via-transparent to-transparent opacity-80" />
                    <div className="absolute bottom-4 left-4 right-4 text-white text-left">
                      <div className="text-xs font-bold font-mono text-[rgb(124,224,108)] uppercase">{t('TRANQUILIDAD PARA AUTÓNOMOS', 'PEACE OF MIND FOR FREELANCERS')}</div>
                      <div className="text-sm font-semibold">{t('Factura desde cualquier lugar, cumpliendo la ley en 1 clic', 'Invoice from anywhere, strictly legal in 1 click')}</div>
                    </div>
                  </div>
                </motion.div>
              )}
            </AnimatePresence>

          </div>
        </section>

        {/* SECCIÓN 3: LOS 4 PILARES DE LA LEY ANTIFRAUDE Y VERIFACTU (CON FOTOS & TARJETAS UNIFORMES) */}
        <section className="space-y-10">
          <div className="text-center sm:text-left space-y-3 max-w-3xl">
            <h2 className="text-2xl sm:text-4xl font-bold tracking-[-0.03em] text-[#0A0C0B] dark:text-white">
              {t('Los 4 Pilares Arquitectónicos de la Legalidad VeriFactu', 'The 4 Architectural Pillars of VeriFactu Compliance')}
            </h2>
            <p className="text-sm sm:text-base text-[rgba(10,12,11,0.75)] dark:text-white/75 leading-relaxed font-normal">
              {t(
                'Avialo incorpora en su código fuente las cuatro exigencias técnicas innegociables establecidas por el Ministerio de Hacienda para obtener el estatus de Sistema de Facturación Homologado.',
                'Avialo embeds directly inside its core runtime the four mandatory regulatory specifications demanded by the Spanish Ministry of Finance to achieve Certified SIF Status.'
              )}
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-stretch">
            
            {/* Pilar 1: Hash Inmutable */}
            <div className="w-full rounded-[16px] bg-[#F2F2F0] dark:bg-[#131517] border border-[#D2D2CE] dark:border-[#303131] p-6 sm:p-8 flex flex-col justify-between gap-6 overflow-hidden transition-all hover:border-[#0A0C0B]/40 dark:hover:border-white/40">
              <div className="space-y-4">
                <div className="w-full h-[200px] rounded-[12px] overflow-hidden relative border border-[#D2D2CE] dark:border-[#303131]">
                  <img
                    src="https://images.unsplash.com/photo-1558494949-ef010cbdcc31?w=700&auto=format&fit=crop&q=80"
                    alt="Encadenamiento de datos e infraestructura criptográfica"
                    className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute top-3 left-3 bg-[#0A0C0B]/90 backdrop-blur-md px-3 py-1 rounded-[6px] border border-white/20 text-[11px] font-mono text-[#00FF66] font-bold">
                    {t('01 // INALTERABILIDAD', '01 // IMMUTABLE HASHEING')}
                  </div>
                </div>
                <h3 className="text-xl sm:text-2xl font-bold text-[#0A0C0B] dark:text-white">
                  {t('Encadenamiento Criptográfico SHA-256', 'SHA-256 Cryptographic Hash Chaining')}
                </h3>
                <p className="text-xs sm:text-sm text-[rgba(10,12,11,0.75)] dark:text-white/75 leading-relaxed font-normal">
                  {t(
                    'Cada registro contable genera una huella digital irreversible entrelazada con la factura anterior. Este encadenado criptográfico imposibilita matemáticamente la alteración, borrado o modificación posterior de cualquier factura una vez emitida, erradicando el riesgo de inspecciones negativas.',
                    'Every accounting ledger record creates an irreversible digital fingerprint inextricably chained to the prior invoice. This cryptographic linking mathematically disables post-issuance edits, modifications, or deletions, totally eliminating audit liabilities.'
                  )}
                </p>
              </div>
              <div className="pt-2 border-t border-[#D2D2CE] dark:border-[#303131] flex items-center justify-between text-xs font-semibold text-[#0A0C0B] dark:text-white">
                <span className="inline-flex items-center gap-1.5 text-[rgb(52,138,46)] dark:text-[rgb(104,204,88)]">
                  <Check className="w-4 h-4" /> {t('Sello automático por cada emisión', 'Automatic stamp on every issuance')}
                </span>
              </div>
            </div>

            {/* Pilar 2: Código QR SIF */}
            <div className="w-full rounded-[16px] bg-[#F2F2F0] dark:bg-[#131517] border border-[#D2D2CE] dark:border-[#303131] p-6 sm:p-8 flex flex-col justify-between gap-6 overflow-hidden transition-all hover:border-[#0A0C0B]/40 dark:hover:border-white/40">
              <div className="space-y-4">
                <div className="w-full h-[200px] rounded-[12px] overflow-hidden relative border border-[#D2D2CE] dark:border-[#303131]">
                  <img
                    src="https://images.unsplash.com/photo-1563986768609-322da13575f3?w=700&auto=format&fit=crop&q=80"
                    alt="Verificación digital mediante QR"
                    className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute top-3 left-3 bg-[#0A0C0B]/90 backdrop-blur-md px-3 py-1 rounded-[6px] border border-white/20 text-[11px] font-mono text-[rgb(158,250,255)] font-bold">
                    {t('02 // LEGIBILIDAD & QR', '02 // QR VERIFIABILITY')}
                  </div>
                </div>
                <h3 className="text-xl sm:text-2xl font-bold text-[#0A0C0B] dark:text-white">
                  {t('Código QR Normativo y Leyenda AEAT', 'Official Tax QR Stamp & AEAT Legend')}
                </h3>
                <p className="text-xs sm:text-sm text-[rgba(10,12,11,0.75)] dark:text-white/75 leading-relaxed font-normal">
                  {t(
                    'El Reglamento obliga a que todas las facturas e impresos térmicos muestren un código QR normalizado y la leyenda legal identificativa ("Factura Verificable en sede de la AEAT"). Avialo renderiza este elemento en menos de 50 milisegundos en cada PDF que descargas o envías a tu cliente.',
                    'Regulations mandate all invoices and thermal receipts display a standardized tax QR stamp accompanied by the official identification legend. Avialo renders this verification block in under 50ms inside every generated PDF.'
                  )}
                </p>
              </div>
              <div className="pt-2 border-t border-[#D2D2CE] dark:border-[#303131] flex items-center justify-between text-xs font-semibold text-[#0A0C0B] dark:text-white">
                <span className="inline-flex items-center gap-1.5 text-[rgb(52,138,46)] dark:text-[rgb(104,204,88)]">
                  <Check className="w-4 h-4" /> {t('Verificación ciudadana instantánea', 'Instant verification capability')}
                </span>
              </div>
            </div>

            {/* Pilar 3: Registro de Eventos SIF */}
            <div className="w-full rounded-[16px] bg-[#F2F2F0] dark:bg-[#131517] border border-[#D2D2CE] dark:border-[#303131] p-6 sm:p-8 flex flex-col justify-between gap-6 overflow-hidden transition-all hover:border-[#0A0C0B]/40 dark:hover:border-white/40">
              <div className="space-y-4">
                <div className="w-full h-[200px] rounded-[12px] overflow-hidden relative border border-[#D2D2CE] dark:border-[#303131]">
                  <img
                    src="https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?w=700&auto=format&fit=crop&q=80"
                    alt="Registro de eventos y servidores de AWS España"
                    className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute top-3 left-3 bg-[#0A0C0B]/90 backdrop-blur-md px-3 py-1 rounded-[6px] border border-white/20 text-[11px] font-mono text-[#00FF66] font-bold">
                    {t('03 // TRAZABILIDAD SIF', '03 // SIF EVENT AUDITING')}
                  </div>
                </div>
                <h3 className="text-xl sm:text-2xl font-bold text-[#0A0C0B] dark:text-white">
                  {t('Registro de Eventos y Custodia Segura', 'Event Logs & Secure Cloud Custody')}
                </h3>
                <p className="text-xs sm:text-sm text-[rgba(10,12,11,0.75)] dark:text-white/75 leading-relaxed font-normal">
                  {t(
                    'Además de las facturas, la ley exige que el software preserve un registro interno de eventos (inicios de sesión, anomalías, copias de seguridad). Avialo custodia todo el historial de auditoría en servidores dedicados con residencia de datos 100% en España (AWS Madrid) bajo cifrado militar.',
                    'Beyond invoice totals, Spanish regulations require the software to maintain an unalterable system event log (login actions, backups, diagnostic anomalies). Avialo preserves your complete audit timeline on dedicated servers in Spain (AWS Madrid) under enterprise-grade encryption.'
                  )}
                </p>
              </div>
              <div className="pt-2 border-t border-[#D2D2CE] dark:border-[#303131] flex items-center justify-between text-xs font-semibold text-[#0A0C0B] dark:text-white">
                <span className="inline-flex items-center gap-1.5 text-[rgb(52,138,46)] dark:text-[rgb(104,204,88)]">
                  <Check className="w-4 h-4" /> {t('Servidores soberanos en España (UE)', 'Sovereign servers in Spain (EU)')}
                </span>
              </div>
            </div>

            {/* Pilar 4: Declaración Garante */}
            <div className="w-full rounded-[16px] bg-[#F2F2F0] dark:bg-[#131517] border border-[#D2D2CE] dark:border-[#303131] p-6 sm:p-8 flex flex-col justify-between gap-6 overflow-hidden transition-all hover:border-[#0A0C0B]/40 dark:hover:border-white/40">
              <div className="space-y-4">
                <div className="w-full h-[200px] rounded-[12px] overflow-hidden relative border border-[#D2D2CE] dark:border-[#303131]">
                  <img
                    src="https://images.unsplash.com/photo-1551836022-d5d88e9218df?w=700&auto=format&fit=crop&q=80"
                    alt="Certificación legal y declaración responsable"
                    className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute top-3 left-3 bg-[#0A0C0B]/90 backdrop-blur-md px-3 py-1 rounded-[6px] border border-white/20 text-[11px] font-mono text-[rgb(158,250,255)] font-bold">
                    {t('04 // RESPONSABILIDAD', '04 // LEGAL LIABILITY')}
                  </div>
                </div>
                <h3 className="text-xl sm:text-2xl font-bold text-[#0A0C0B] dark:text-white">
                  {t('Declaración de Responsabilidad SIF Garante', 'Binding SIF Guaranteed Statement')}
                </h3>
                <p className="text-xs sm:text-sm text-[rgba(10,12,11,0.75)] dark:text-white/75 leading-relaxed font-normal">
                  {t(
                    'No te juegues el patrimonio de tu empresa con software sin respaldo. AVIALO SOLUCIONES S.L. firma y emite la Declaración Responsable formal exigida en el artículo 12 del RD 1007/2023, asumiendo ante la Agencia Tributaria la conformidad técnica absoluta de tu plataforma de facturación.',
                    'Do not risk your enterprise wealth with uncertified software tools. AVIALO SOLUCIONES S.L. formally issues and executes the binding Guaranteed Statement mandated under Article 12 of RD 1007/2023, standing behind the technical conformity of your entire billing workflow.'
                  )}
                </p>
              </div>
              <div className="pt-2 border-t border-[#D2D2CE] dark:border-[#303131] flex items-center justify-between text-xs font-semibold text-[#0A0C0B] dark:text-white">
                <span className="inline-flex items-center gap-1.5 text-[rgb(52,138,46)] dark:text-[rgb(104,204,88)]">
                  <Check className="w-4 h-4" /> {t('Descarga inmediata del PDF firmado', 'Instant download of signed certificate')}
                </span>
              </div>
            </div>

          </div>
        </section>

        {/* SECCIÓN 4: COMPARATIVA DE MERCADO: EXCEL VS ERPS COMPLEJOS VS AVIALO SIF */}
        <section className="space-y-8 pt-6 border-t border-[#D2D2CE] dark:border-[#303131]">
          <div className="text-center sm:text-left space-y-2 max-w-4xl">
            <h2 className="text-2xl sm:text-4xl font-bold tracking-[-0.03em] text-[#0A0C0B] dark:text-white">
              {t('Por qué Avialo supera a las hojas de cálculo y a los ERPs tradicionales', 'Why Avialo outperforms spreadsheets and complex legacy ERPs')}
            </h2>
            <p className="text-sm sm:text-base text-[rgba(10,12,11,0.75)] dark:text-white/75 leading-relaxed font-normal">
              {t(
                'No cambies el caos de las hojas de cálculo manuales por la lentitud y los costes ocultos de los ERPs anticuados. Descubre la diferencia de facturar con una plataforma de nueva generación.',
                'Do not trade manual spreadsheet chaos for the slowness, automated bot support, and hidden fee traps of outdated ERPs. See why scaling teams choose next-generation invoicing.'
              )}
            </p>
          </div>

          <div className="block lg:hidden text-center text-xs font-semibold text-[rgba(10,12,11,0.65)] dark:text-white/65 mb-2 animate-pulse">
            {t('← Desliza horizontalmente para comparar todas las opciones →', '← Swipe horizontally to view full market comparison →')}
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
                      <span>{t('Excel, Word y PDFs caseros', 'Excel, Word & Manual PDFs')}</span>
                    </div>
                  </th>
                  <th className="py-5 px-5 text-xs sm:text-sm font-bold text-[rgb(205,125,20)] dark:text-[rgb(255,175,70)] w-[27%] border-l border-[#D2D2CE] dark:border-[#303131] bg-[rgba(205,125,20,0.02)]">
                    <div className="flex items-center gap-2">
                      <Clock className="w-4 h-4 shrink-0 text-[rgb(205,125,20)] dark:text-[rgb(255,175,70)]" />
                      <span>{t('ERPs Complejos Generalistas', 'Complex Generalist ERPs')}</span>
                    </div>
                  </th>
                  <th className="py-5 px-5 text-xs sm:text-sm font-bold text-[rgb(43,115,38)] dark:text-[rgb(124,224,108)] w-[26%] border-l border-[#D2D2CE] dark:border-[#303131] bg-[rgba(52,138,46,0.04)]">
                    <div className="flex items-center gap-2">
                      <CheckCircle2 className="w-5 h-5 text-[rgb(52,138,46)] shrink-0" />
                      <span className="text-base font-bold">{t('Avialo Certificado SIF', 'Avialo Certified SIF')}</span>
                    </div>
                  </th>
                </tr>
              </thead>
              <tbody className="divide-y divide-[#D2D2CE] dark:divide-[#303131] text-xs sm:text-sm">
                <tr>
                  <td className="py-4 px-5 font-bold text-[#0A0C0B] dark:text-white">
                    {t('Soporte Técnico y Atención en Inspecciones', 'Technical Support & Audit Assistance')}
                  </td>
                  <td className="py-4 px-5 text-[rgba(10,12,11,0.75)] dark:text-white/80 border-l border-[#D2D2CE] dark:border-[#303131]">
                    {t('Ninguno. Estás completamente solo ante un requerimiento de la Agencia Tributaria.', 'None. You are completely alone during a Tax Agency audit or inspection.')}
                  </td>
                  <td className="py-4 px-5 text-[rgba(10,12,11,0.8)] dark:text-white/85 border-l border-[#D2D2CE] dark:border-[#303131]">
                    {t('Bots automatizados, colas de tickets interminables (48h+) y soporte telefónico de pago adicional.', 'Automated bots, endless ticket queues (48h+), and paywalled human phone support tiers.')}
                  </td>
                  <td className="py-4 px-5 text-[#0A0C0B] dark:text-white border-l border-[#D2D2CE] dark:border-[#303131] font-bold text-[rgb(43,115,38)] dark:text-[rgb(124,224,108)] bg-[rgba(52,138,46,0.02)]">
                    {t('Soporte humano real por expertos fiscales y técnicos. Atención ágil en horas, sin bots ni cuotas extra.', 'Real human support by tax & tech specialists. Fast response times in hours without bot barriers.')}
                  </td>
                </tr>
                <tr>
                  <td className="py-4 px-5 font-bold text-[#0A0C0B] dark:text-white">
                    {t('Claridad de Uso y Curva de Aprendizaje', 'Interface Clarity & Learning Curve')}
                  </td>
                  <td className="py-4 px-5 text-[rgba(10,12,11,0.75)] dark:text-white/80 border-l border-[#D2D2CE] dark:border-[#303131]">
                    {t('Plantillas tediosas con alto riesgo de error manual al aplicar IVA, retenciones y recargo.', 'Tedious spreadsheets prone to human error when calculating VAT, withholdings or tax rules.')}
                  </td>
                  <td className="py-4 px-5 text-[rgba(10,12,11,0.8)] dark:text-white/85 border-l border-[#D2D2CE] dark:border-[#303131]">
                    {t('Abarrotados de menús superfluos (CRM, almacenes complejos, RRHH) que confunden y ralentizan el trabajo diario.', 'Cluttered with hundreds of complex sub-modules (CRM, HR, warehousing) that slow down daily billing.')}
                  </td>
                  <td className="py-4 px-5 text-[#0A0C0B] dark:text-white border-l border-[#D2D2CE] dark:border-[#303131] font-semibold bg-[rgba(52,138,46,0.02)]">
                    {t('Diseño arquitectónico ultralimpio y directo. Cero curva de aprendizaje: emites facturas legales con IA en 15 segundos.', 'Clean, direct architectural workspace. Zero learning curve: generate legal AI-calculated invoices in 15s.')}
                  </td>
                </tr>
                <tr>
                  <td className="py-4 px-5 font-bold text-[#0A0C0B] dark:text-white">
                    {t('Estructura de Precios y Límite por Volumen', 'Pricing Transparency & Volume Limits')}
                  </td>
                  <td className="py-4 px-5 text-[rgba(10,12,11,0.75)] dark:text-white/80 border-l border-[#D2D2CE] dark:border-[#303131] text-[rgb(200,50,40)] dark:text-[rgb(255,90,75)] font-medium">
                    {t('«Gratis», pero asumiendo un coste administrativo enorme y multas inminentes de 50.000 €.', '«Free», at the cost of massive tedious administrative labor and imminent €50,000 regulatory fines.')}
                  </td>
                  <td className="py-4 px-5 text-[rgba(10,12,11,0.8)] dark:text-white/85 border-l border-[#D2D2CE] dark:border-[#303131]">
                    {t('Precios gancho engañosos que se disparan exponencialmente al superar cierto límite de facturas, bancos o usuarios.', 'Deceptively low starter rates that spike exponentially once you exceed limits on invoices, banks, or users.')}
                  </td>
                  <td className="py-4 px-5 text-[#0A0C0B] dark:text-white border-l border-[#D2D2CE] dark:border-[#303131] font-bold text-[rgb(43,115,38)] dark:text-[rgb(124,224,108)] bg-[rgba(52,138,46,0.02)]">
                    {t('Tarifas planas 100% transparentes, todo incluido. Sin trampas de módulos adicionales ni sobrecostes al crecer.', '100% transparent flat pricing, all-inclusive. No paid add-on traps or penalties as your business grows.')}
                  </td>
                </tr>
                <tr>
                  <td className="py-4 px-5 font-bold text-[#0A0C0B] dark:text-white">
                    {t('Cumplimiento VeriFactu y Sanciones LGT', 'VeriFactu Compliance & Tax Penalties')}
                  </td>
                  <td className="py-4 px-5 text-[rgba(10,12,11,0.75)] dark:text-white/80 border-l border-[#D2D2CE] dark:border-[#303131] font-bold text-[rgb(200,50,40)] dark:text-[rgb(255,90,75)]">
                    {t('Ilegal. Hasta 50.000 € de multa por usuario y año fiscal (Art. 201 bis LGT).', 'Illegal. Up to €50,000 fine per user and fiscal year under Art. 201 bis LGT.')}
                  </td>
                  <td className="py-4 px-5 text-[rgba(10,12,11,0.8)] dark:text-white/85 border-l border-[#D2D2CE] dark:border-[#303131]">
                    {t('Cumplen la ley, pero exigen complejas configuraciones técnicas o recargos de pago por activar conectores fiscales.', 'Complies with law, but often requires cumbersome manual setup or add-on fees to activate official tax connectors.')}
                  </td>
                  <td className="py-4 px-5 text-[#0A0C0B] dark:text-white border-l border-[#D2D2CE] dark:border-[#303131] font-bold text-[rgb(43,115,38)] dark:text-[rgb(124,224,108)] bg-[rgba(52,138,46,0.02)]">
                    {t('100% Homologado de serie en 1 clic. Encadenamiento SHA-256 automático, QR normativo y 0 € de riesgo fiscal.', '100% Certified out of the box in 1 click. Automated SHA-256 chains, official QR stamp, and €0 audit risk.')}
                  </td>
                </tr>
                <tr>
                  <td className="py-4 px-5 font-bold text-[#0A0C0B] dark:text-white">
                    {t('Conectividad con tu Gestoría y Equipo', 'Accountant Collaboration & Team Access')}
                  </td>
                  <td className="py-4 px-5 text-[rgba(10,12,11,0.75)] dark:text-white/80 border-l border-[#D2D2CE] dark:border-[#303131]">
                    {t('Envío caótico por correo electrónico con carpetas desordenadas de PDFs a final de cada trimestre.', 'Chaotic quarterly email dumping of zipped folders filled with messy, unorganized PDFs.')}
                  </td>
                  <td className="py-4 px-5 text-[rgba(10,12,11,0.8)] dark:text-white/85 border-l border-[#D2D2CE] dark:border-[#303131]">
                    {t('Cobran licencias mensuales adicionales por cada usuario extra del equipo o imponen accesos rígidos al asesor.', 'Charges recurring fees per additional team user license or forces rigid, non-intuitive setups for external CPAs.')}
                  </td>
                  <td className="py-4 px-5 text-[#0A0C0B] dark:text-white border-l border-[#D2D2CE] dark:border-[#303131] font-semibold bg-[rgba(52,138,46,0.02)]">
                    {t('Acceso gratuito en tiempo real para tu asesor o gestoría en modo lectura, agilizando el cierre contable en minutos.', 'Free real-time read access for your accounting firm, completing tax filings in mere minutes.')}
                  </td>
                </tr>
                <tr>
                  <td className="py-4 px-5 font-bold text-[#0A0C0B] dark:text-white">
                    {t('Velocidad y Experiencia en Móvil / Tablet', 'Performance & Mobile/Tablet Experience')}
                  </td>
                  <td className="py-4 px-5 text-[rgba(10,12,11,0.75)] dark:text-white/80 border-l border-[#D2D2CE] dark:border-[#303131]">
                    {t('Archivos locales frágiles o aplicaciones de hojas de cálculo difíciles de manejar desde la pantalla de un móvil.', 'Fragile spreadsheet files that are clunky, painful, and prone to breaking when edited on mobile phones.')}
                  </td>
                  <td className="py-4 px-5 text-[rgba(10,12,11,0.8)] dark:text-white/85 border-l border-[#D2D2CE] dark:border-[#303131]">
                    {t('Plataformas pesadas y lentas al cargar tablas que se vuelven poco manejables fuera del ordenador de oficina.', 'Heavy platforms with slow loading tables that become sluggish and clumsy on mobile browsers.')}
                  </td>
                  <td className="py-4 px-5 text-[#0A0C0B] dark:text-white border-l border-[#D2D2CE] dark:border-[#303131] font-semibold bg-[rgba(52,138,46,0.02)]">
                    {t('Plataforma nube ultralight de última generación, fluida, instantánea y 100% responsive desde cualquier teléfono.', 'Ultralight next-generation cloud architecture, instantaneous, and 100% responsive on any mobile device.')}
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </section>

        {/* SECCIÓN 5: PREGUNTAS FRECUENTES SOBRE VERIFACTU & LEY ANTIFRAUDE (ACCORDION) */}
        <section className="space-y-8 pt-10 border-t border-[#D2D2CE] dark:border-[#303131] max-w-4xl mx-auto w-full">
          <div className="text-center sm:text-left space-y-2">
            <h2 className="text-2xl sm:text-4xl font-bold tracking-[-0.03em] text-[#0A0C0B] dark:text-white">
              {t('Preguntas Frecuentes sobre la Ley VeriFactu y SIF', 'Frequently Asked Questions on VeriFactu & SIF Compliance')}
            </h2>
            <p className="text-sm sm:text-base text-[rgba(10,12,11,0.75)] dark:text-white/75 leading-relaxed font-normal">
              {t(
                'Resolvemos todas tus inquietudes legales y técnicas sobre cómo Avialo protege tu empresa y garantiza el cumplimiento normativo en España.',
                'We resolve all legal and architecture inquiries on how Avialo secures your venture and ensures flawless regulatory compliance across Spain.'
              )}
            </p>
          </div>

          <div className="space-y-3 pt-2">
            {faqs.map((faq) => {
              const isOpen = openFaqId === faq.id;
              return (
                <div
                  key={faq.id}
                  className="rounded-[12px] bg-[#F2F2F0] dark:bg-[#131517] border border-[#D2D2CE] dark:border-[#303131] overflow-hidden transition-all duration-200"
                >
                  <button
                    onClick={() => setOpenFaqId(isOpen ? null : faq.id)}
                    className="w-full text-left p-5 sm:p-6 flex items-center justify-between gap-4 cursor-pointer"
                  >
                    <span className="font-bold text-sm sm:text-base text-[#0A0C0B] dark:text-white pr-2">
                      {faq.q}
                    </span>
                    <div className={`w-7 h-7 rounded-full flex items-center justify-center bg-[#FCFCFB] dark:bg-[#080a09] border border-[#D2D2CE] dark:border-[#303131] text-[#0A0C0B] dark:text-white shrink-0 transition-transform duration-200 ${isOpen ? 'rotate-180' : ''}`}>
                      <ChevronDown className="w-4 h-4" />
                    </div>
                  </button>

                  <AnimatePresence>
                    {isOpen && (
                      <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: 'auto', opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.25, ease: 'easeInOut' }}
                      >
                        <div className="px-5 sm:px-6 pb-6 text-xs sm:text-sm text-[rgba(10,12,11,0.75)] dark:text-white/75 leading-relaxed border-t border-[#D2D2CE]/50 dark:border-[#303131]/50 pt-4 font-normal text-left">
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

        {/* SECCIÓN 6: CTA FINAL ("EL DE ABAJO") ALINEADO CON SOFTWARE CERTIFICADO */}
        <section className="pt-8">
          <div className="w-full rounded-[16px] bg-[#F2F2F0] dark:bg-[#131517] border border-[#D2D2CE] dark:border-[#303131] p-10 sm:p-16 text-center space-y-6 shadow-xl relative overflow-hidden">
            
            <div className="absolute inset-0 bg-dot-texture opacity-15 pointer-events-none" />

            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-[-0.03em] text-[#0A0C0B] dark:text-white leading-[1.15] max-w-2xl mx-auto relative z-10">
              {t(
                'Empieza a facturar con un software certificado hoy mismo',
                'Start invoicing with certified software today'
              )}
            </h2>
            <p className="text-sm sm:text-base text-[rgba(10,12,11,0.75)] dark:text-white/75 max-w-xl mx-auto leading-relaxed font-normal relative z-10">
              {t(
                'Cumple al 100% con la normativa VeriFactu y Antifraude con un software homologado ante la AEAT. Sin esperas de activación, sin permanencia y con 30 días gratis sin tarjeta.',
                'Comply 100% with VeriFactu and Anti-Fraud rules using Tax Agency certified software. Zero activation delays, zero lock-in contracts, and a 30-day free trial without credit card.'
              )}
            </p>
            <div className="pt-2 flex flex-col sm:flex-row items-stretch sm:items-center justify-center gap-4 w-full sm:w-auto relative z-10">
              <Button
                variant="primary"
                href={APP_URLS.register}
                className="w-full sm:w-auto px-9 py-4 text-base font-bold shadow-md justify-center text-center"
              >
                <span>{t('Empezar 30 días de prueba gratis', 'Start 30-Day Free Trial')}</span>
              </Button>
              <Button
                variant="secondary"
                href="/precios"
                className="w-full sm:w-auto px-7 py-4 text-sm font-semibold justify-center text-center"
              >
                <span>{t('Ver Planes y Tarifas con 30% Dto.', 'Explore Pricing & 30% Discount')}</span>
              </Button>
            </div>
          </div>
        </section>

      </main>

      <Footer />
    </div>
  );
};

export default VeriFactuPage;
