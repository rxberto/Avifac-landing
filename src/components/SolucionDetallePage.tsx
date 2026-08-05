import React, { useState, useEffect } from 'react';
import { 
  Check, 
  ArrowRight, 
  User, 
  Sparkles, 
  Zap, 
  Building2, 
  ShieldCheck, 
  Headphones, 
  DollarSign, 
  Clock, 
  Layers, 
  BarChart3, 
  FileCheck, 
  Lock, 
  Cpu, 
  Briefcase, 
  TrendingUp, 
  CheckCircle2,
  HelpCircle,
  Plus,
  Minus,
  ArrowLeft,
  Scale
} from 'lucide-react';
import { Navbar } from './Navbar';
import { Footer } from './Footer';
import { APP_URLS } from '../config/urls';

interface SolucionDetalleProps {
  type: 'autonomos' | 'agencias' | 'startups' | 'gestorias';
}

export const SolucionDetallePage: React.FC<SolucionDetalleProps> = ({ type }) => {
  const [lang, setLang] = useState<'es' | 'en'>('es');
  const [openFaq, setOpenFaq] = useState<number | null>(0);

  useEffect(() => {
    const checkLang = () => {
      if (window.location.pathname.startsWith('/en')) {
        setLang('en');
      } else {
        setLang('es');
      }
    };
    checkLang();
    window.addEventListener('popstate', checkLang);
    return () => window.removeEventListener('popstate', checkLang);
  }, []);

  const t = (es: string, en: string) => (lang === 'en' ? en : es);

  const dataMap = {
    autonomos: {
      profileNameEs: 'Autónomos & Freelancers',
      profileNameEn: 'Freelancers & Solo Pros',
      heroTitleEs: 'El control absoluto de tu facturación e impuestos sin pelearte con Excel ni programas prehistóricos',
      heroTitleEn: 'Total command over invoicing and withholding taxes without battling spreadsheets or dinosaur software',
      heroSubEs: 'Diseñado en exclusiva para profesionales independientes que quieren facturar en 10 segundos, escanear gastos con la cámara del móvil y estar 100% blindados ante la Ley VeriFactu (obligatorio para autónomos desde el 1 de julio de 2027).',
      heroSubEn: 'Engineered specifically for solo specialists who need to generate invoices in 10 seconds, digitize expense slips via smartphone camera, and achieve full readiness for 2027 VeriFactu compliance.',
      badgeDateEs: 'OBLIGATORIEDAD: 1 DE JULIO DE 2027 (AUTÓNOMOS)',
      badgeDateEn: 'MANDATORY ENFORCEMENT: JULY 1, 2027 (SOLO PROS)',
      statEs: 'Ahorra 12 horas al mes en papeleo fiscal y gestión contable',
      statEn: 'Save 12 hours every month on tedious tax bookkeeping and admin',
      metricVal: '10 s',
      metricLabelEs: 'Tiempo medio en crear, firmar con SHA-256 y enviar una factura oficial',
      metricLabelEn: 'Average duration to construct, sign via SHA-256, and send a legal invoice',
      icon: User,
      whyBetter: [
        {
          titleEs: 'Cero Curva de Aprendizaje vs. ERPs Laberínticos',
          titleEn: 'Zero Learning Curve vs. Labyrinthine ERPs',
          descEs: 'Otros programas del mercado están sobrecargados con menús de inventarios industriales y contabilidad avanzada pensada para multinacionales. En Avialo cada acción para tu actividad independiente se hace con un solo clic.',
          descEn: 'Conventional ERP tools are bloated with industrial inventory interfaces designed for enterprises. Avialo gives solo pros a distraction-free UI where every task executes in one click.',
          highlightEs: 'INTERFAZ INTUITIVA DE 1 CLIC',
          highlightEn: '1-CLICK INTUITIVE INTERFACE',
          icon: Layers
        },
        {
          titleEs: 'Soporte Especializado en Vivo vs. Chatbots Robóticos',
          titleEn: 'Specialized Live Support vs. Robot Chatbots',
          descEs: 'Cuando tienes una urgencia sobre tu IVA, retenciones IRPF o un número de factura duplicado, no te enviamos a un bot con respuestas enlatadas. Nuestro equipo en Madrid te atiende por chat de forma rápida y humana.',
          descEn: 'When urgent questions arise regarding VAT ratios or fiscal filings, we never abandon you in automated ticket queues. Our dedicated specialists in Spain assist you swiftly.',
          highlightEs: 'ATENCIÓN HUMANA EN VIVO',
          highlightEn: 'LIVE HUMAN SUPPORT IN SPAIN',
          icon: Headphones
        },
        {
          titleEs: 'Precios Predecibles vs. Comisiones Bancarias Ocultas',
          titleEn: 'Predictable Pricing vs. Hidden Bank Fees',
          descEs: 'A diferencia de otras plataformas que te cobran un peaje o porcentaje cada vez que tu cliente te paga con tarjeta por el enlace, en Avialo tu licencia es todo incluido: 0% de comisiones por nuestra parte en tus cobros.',
          descEn: 'Unlike legacy platforms that penalize your cash flow by grabbing percentage markups on online card settlements, Avialo guarantees an all-inclusive flat fee with 0% gateway commission markup.',
          highlightEs: '0% COMISIONES POR COBRO',
          highlightEn: '0% PAYMENT GATEWAY MARKUP',
          icon: DollarSign
        }
      ],
      features: [
        {
          titleEs: 'Escáner OCR de Tickets desde tu Móvil',
          titleEn: 'Mobile Intelligent OCR Scanner',
          descEs: 'Fotografía el ticket de un restaurante, gasolina or suministros de oficina y nuestra inteligencia artificial rellena al instante la base imponible y el IVA.',
          descEn: 'Snap a photo of any restaurant, fuel, or vendor receipt and our AI automatically parses taxable totals and VAT breakdowns in seconds.',
          icon: Zap
        },
        {
          titleEs: 'Previsión en Vivo de IRPF e IVA Trimestral',
          titleEn: 'Real-time Tax Forecasting (VAT & Withholding)',
          descEs: 'Se acabó el miedo a los meses de enero, abril, julio y octubre. Tu panel muestra exactamente qué cantidad adeuda tu actividad al fisco con semanas de antelación.',
          descEn: 'Say goodbye to quarter-end panic. Your live dashboard continually calculates projected fiscal VAT and withholding debts weeks in advance.',
          icon: BarChart3
        },
        {
          titleEs: 'Presupuestos Convertibles en Factura con 1 Clic',
          titleEn: '1-Click Quotes to Invoices',
          descEs: 'Diseña presupuestos profesionales con tu logotipo. Cuando tu cliente acepte la propuesta online, transfórmalo automáticamente en una factura emitida.',
          descEn: 'Draft elegant branded client proposals. Once approved online, instantly transform approved estimates into verified e-invoices.',
          icon: FileCheck
        },
        {
          titleEs: 'Firma Criptográfica Inalterable VeriFactu 2027',
          titleEn: 'Unalterable 2027 VeriFactu Cryptography',
          descEs: 'Genera el código QR oficial de la Agencia Tributaria en cada PDF, cumpliendo estrictamente con las normas obligatorias desde el 1 de julio de 2027.',
          descEn: 'Embed verified Tax Agency QR codes and immutable SHA-256 cryptographic structures inside every PDF file automatically.',
          icon: ShieldCheck
        }
      ],
      faqs: [
        {
          qEs: '¿Cuándo entra en vigor la Ley VeriFactu para autónomos en España?',
          qEn: 'When does the VeriFactu regulation become mandatory for freelancers in Spain?',
          aEs: 'Para los autónomos y profesionales independientes, la obligatoriedad del sistema VeriFactu y la prohibición de softwares que permitan alterar facturas entra en vigor el 1 de julio de 2027. Al usar Avialo, ya estás completamente homologado y cumples con los requisitos técnicos exigidos.',
          aEn: 'For independent professionals and freelancers in Spain, VeriFactu compliance begins July 1st, 2027. Avialo guarantees full technological readiness well ahead of statutory deadlines.'
        },
        {
          qEs: '¿Cuánto tiempo se tarda en configurar Avialo para empezar a emitir facturas legales?',
          qEn: 'How long does it take to set up Avialo and issue legal e-invoices?',
          aEs: 'Menos de 2 minutos. Al registrarte solo tienes que introducir tu NIF y tus datos fiscales de empresa o autónomo. A partir de ahí, puedes emitir tu primera factura con código QR VeriFactu y enlace de pago en tu Portal de Clientes de forma inmediata.',
          aEn: 'Under 2 minutes. Simply input your Tax ID (NIF) and official corporate profile upon registration. You can immediately issue your first invoice with a legal VeriFactu QR stamp and Client Portal payment checkout without delay.'
        },
        {
          qEs: '¿Mi gestor contable tiene que pagar una licencia extra para descargar mis datos trimestrales?',
          qEn: 'Does my accountant need to pay an extra seat license to access quarterly data?',
          aEs: 'No. El acceso para asesorías y gestorías fiscales es 100% gratuito siempre en Avialo. Puedes invitar a tu asesor y él descargará tus libros oficiales de facturas emitidas y gastos verificados con un solo clic.',
          aEn: 'Never. Dedicated advisor and accountant logins are 100% free forever in Avialo. You can invite your accounting partner to export structured official ledgers in one click.'
        },
        {
          qEs: '¿Qué pasa tras los 14 días de prueba gratuita?',
          qEn: 'What happens when the 14-day free trial expires?',
          aEs: 'Durante los 14 días disfrutas de todas las funcionalidades sin restricciones y sin necesidad de haber introducido ninguna tarjeta de crédito. Pasado ese periodo, eliges la tarifa todo incluido que mejor se adapte a ti.',
          aEn: 'During your 14-day evaluation, experience unrestricted feature execution with zero credit card required. Upon trial expiration, pick the transparent flat-rate tier that best matches your activity.'
        }
      ]
    },
    agencias: {
      profileNameEs: 'Pymes, Agencias & Estudios',
      profileNameEn: 'SMEs, Agencies & Studios',
      heroTitleEs: 'Automatiza tus cobros recurrentes y fideliza a tus clientes con un portal web interactivo y seguro',
      heroTitleEn: 'Automate recurring collections and delight clients with a passwordless interactive hub',
      heroSubEs: 'Elimina las molestas persecuciones por facturas vencidas. Programa el cobro de tus igualas mensuales por tarjeta o SEPA con motor anti-morosidad (Dunning), y ofrece a tus clientes un portal donde ver, descargar y pagar al instante.',
      heroSubEn: 'Erase uncomfortable payment chasing from your calendar. Automate monthly retainer card/SEPA capture with smart Dunning retries and supply clients a passwordless portal to inspect, download, and settle invoices instantly.',
      badgeDateEs: 'OBLIGATORIEDAD: 1 DE ENERO DE 2027 (EMPRESAS & PYMES)',
      badgeDateEn: 'MANDATORY ENFORCEMENT: JANUARY 1, 2027 (COMPANIES)',
      statEs: 'Reducción del 45% en días de retraso de cobro (DSO) tras la implementación',
      statEn: '45% reduction in Days Sales Outstanding (DSO) within the first 60 days',
      metricVal: '99.8%',
      metricLabelEs: 'Tasa de cobro exitoso mensual gracias al reintento automático Dunning',
      metricLabelEn: 'Monthly recurring card settlement success rate powered by Dunning retries',
      icon: Sparkles,
      whyBetter: [
        {
          titleEs: 'Cobros Automáticos Inteligentes vs. Transferencias Manuales',
          titleEn: 'Smart Recurring Billing vs. Manual Chasing',
          descEs: 'Olvida cruzar los dedos para que tu cliente recuerde ordenar una transferencia a fin de mes. Avialo automatiza cobros con tarjeta o SEPA y dispone de un motor Dunning que reintenta pagos rechazados de forma transparente.',
          descEn: 'Never cross your fingers hoping clients remember to dispatch wire transfers on the 30th. Avialo automates recurring billing with smart Dunning retries that silently resolve declined payments.',
          highlightEs: 'MOTOR DUNNING ANTI-MOROSIDAD',
          highlightEn: 'SMART DUNNING ANTI-CHURN ENGINE',
          icon: Clock
        },
        {
          titleEs: 'Portal de Clientes sin Contraseñas vs. Adjuntos Estáticos',
          titleEn: 'Passwordless Client Portal vs. Static Attachments',
          descEs: 'En vez de perder horas enviando duplicados de PDF en hilos interminables de correo, otorgas un portal web de alta gama donde tus clientes acceden con enlace seguro para pagar e inspeccionar sus facturas en 1 clic.',
          descEn: 'Instead of drowning in emails asking for duplicate invoice PDFs, offer clients a passwordless private portal where they inspect ledger records and settle balances immediately.',
          highlightEs: 'PORTAL AUTOSERVICIO 24/7',
          highlightEn: '24/7 PASSWORDLESS CLIENT HUB',
          icon: Building2
        },
        {
          titleEs: 'Puesta en Marcha Instantánea vs. Costosos Consultores',
          titleEn: 'Instant Setup vs. Expensive Consultants',
          descEs: 'Los ERPs antiguos a menudo requieren meses de configuración y pagar miles de euros a empresas de implementación para empezar a funcionar. Con Avialo importas tu cartera y facturas tu primera iguala el primer día.',
          descEn: 'Legacy corporate systems often necessitate weeks of onboarding and thousands of dollars in configuration fees just to start billing. With Avialo, import existing client rosters in minutes.',
          highlightEs: 'LISTO EN 10 MINUTOS',
          highlightEn: 'DEPLOY IN 10 MINUTES FLAT',
          icon: Cpu
        }
      ],
      features: [
        {
          titleEs: 'Facturación Recurrente de Retainers e Igualas',
          titleEn: 'Automated Retainers & Recurring Invoices',
          descEs: 'Programa la emisión y cobro automático de tus servicios periódicos mensuales, trimestrales o anuales con un único ajuste.',
          descEn: 'Schedule seamless automated dispatching and payment capturing for monthly retainer agreements and recurring contracts.',
          icon: Clock
        },
        {
          titleEs: 'Canal de Comunicación Integrado en el Portal',
          titleEn: 'Interactive In-Invoice Chat Channel',
          descEs: 'Tus clientes resuelven dudas o aprueban partidas comentando directamente en la propia factura web sin desordenar tu bandeja de email.',
          descEn: 'Clients easily submit questions or confirm service items via live context-aware chat channels embedded within each invoice.',
          icon: Briefcase
        },
        {
          titleEs: 'Conciliación Bancaria Multisociedad',
          titleEn: 'Multi-Bank Intelligent Reconciliation',
          descEs: 'Sincroniza tus bancos profesionales en tiempo real (Santander, BBVA, Caixabank, Wise, Revolut) y empareja cobros al momento.',
          descEn: 'Connect local and international bank accounts via Open Banking to automatically reconcile incoming deposits with generated invoices.',
          icon: TrendingUp
        },
        {
          titleEs: 'Homologación VeriFactu para Empresas (1 Enero 2027)',
          titleEn: 'Corporate VeriFactu Compliance (Jan 1, 2027)',
          descEs: 'Cumple el calendario oficial del Gobierno para empresas con encadenamiento SHA-256 inalterable y código QR en cada documento.',
          descEn: 'Achieve total adherence to corporate regulatory dates with unalterable SHA-256 cryptographic logs and standardized QR structures.',
          icon: Lock
        }
      ],
      faqs: [
        {
          qEs: '¿Cuál es la fecha límite de VeriFactu para pymes y agencias societarias?',
          qEn: 'What is the mandatory VeriFactu deadline for SMEs and corporate agencies?',
          aEs: 'Para todas las sociedades limitadas, pymes y personas jurídicas en España, el reglamento VeriFactu entra en vigor el 1 de enero de 2027. Avialo integra nativamente el registro de eventos y la firma criptográfica exigida por la Agencia Tributaria.',
          aEn: 'For all incorporated SMEs and companies in Spain, mandatory VeriFactu compliance begins January 1st, 2027. Avialo innately provides the cryptographic hashing and event audit trails required.'
        },
        {
          qEs: '¿Cómo funciona el cobro de facturas en el Portal de Clientes?',
          qEn: 'How does client invoice settlement function within the Client Portal?',
          aEs: 'Tu cliente recibe un correo electrónico con un enlace seguro y único al Portal de Clientes de tu empresa. Desde allí puede pulsar "Pagar factura" mediante Tarjeta de Crédito/Débito, SEPA o Google/Apple Pay con liquidación instantánea.',
          aEn: 'Your client receives an email containing a secure passwordless link to their dedicated Client Portal. From there, they click "Pay Invoice" via card, SEPA, or Apple/Google Pay with instant settlement.'
        },
        {
          qEs: '¿Qué es el motor Dunning y cómo me ayuda con los cobros fallidos?',
          qEn: 'What is the Dunning engine and how does it prevent delinquent retries?',
          aEs: 'Si una tarjeta de tu cliente es rechazado por falta de saldo o caducidad en el cobro de tu iguala mensual, nuestro motor Dunning programa reintentos inteligentes los días posteriores y envía avisos corteses para renovar su método de pago automáticamente.',
          aEn: 'If a monthly charge declines due to temporary account balance limits or card expirations, our smart Dunning engine schedules polite automated retry loops across subsequent days until payment captures successfully.'
        },
        {
          qEs: '¿Podemos dar acceso a diferentes miembros del equipo de nuestra agencia?',
          qEn: 'Can we grant team access to different agency personnel?',
          aEs: 'Por supuesto. Puedes gestionar permisos granulares para tu director financiero, account managers de proyectos o personal administrativo con un control total de qué acciones pueden realizar o consultar.',
          aEn: 'Yes. You can organize granular user roles for financial officers, account project managers, or billing specialists with complete audit trails.'
        }
      ]
    },
    startups: {
      profileNameEs: 'Startups SaaS & E-commerce',
      profileNameEn: 'SaaS Startups & E-commerce',
      heroTitleEs: 'Infraestructura API de facturación y métricas MRR en tiempo real para negocios digitales de alto crecimiento',
      heroTitleEn: 'API-first billing infrastructure and real-time MRR analytics for hypergrowth digital innovators',
      heroSubEs: 'Conecta tus transacciones de Stripe, Redsys, Shopify o WooCommerce sin causar latencia. Automatiza la emisión masiva de facturas electrónicas verificadas para VeriFactu 2027 y obtén paneles visuales en vivo de tu MRR, Churn, LTV y Runway.',
      heroSubEn: 'Synchronize checkout volumes from Stripe, Redsys, Shopify, or WooCommerce with zero latency. Automate massive issuance of verified e-invoices for 2027 VeriFactu compliance while evaluating real-time dashboards mapping MRR, Churn, LTV, and runway.',
      badgeDateEs: 'OBLIGATORIEDAD: 1 DE ENERO DE 2027 (EMPRESAS & STARTUPS)',
      badgeDateEn: 'MANDATORY ENFORCEMENT: JANUARY 1, 2027 (STARTUPS)',
      statEs: '100% Sincronización automática entre tu pasarela web y la Agencia Tributaria',
      statEn: '100% Automated reconciliation bridging POS checkouts with Tax Agency logs',
      metricVal: '0 ms',
      metricLabelEs: 'Latencia añadida en el checkout del cliente durante la firma criptográfica',
      metricLabelEn: 'Added checkout latency during asynchronous cryptographic invoice stamping',
      icon: Zap,
      whyBetter: [
        {
          titleEs: 'Arquitectura API Abierta vs. Ecosistemas Cerrados',
          titleEn: 'Open API Architecture vs. Walled Gardens',
          descEs: 'Muchos sistemas contables carecen de APIs modernas o cobran tarifas prohibitivas para desarrolladores. Avialo dispone de webhooks bidireccionales en tiempo real y documentación REST cristalina lista en 2 tardes.',
          descEn: 'Legacy platforms regularly lack modern developer tooling or lock webhooks behind enterprise paywalls. Avialo provides live bidirectional webhooks and clean REST docs.',
          highlightEs: 'WEBHOOKS Y REST API LISTOS',
          highlightEn: 'WEBHOOKS & REST API READY',
          icon: Cpu
        },
        {
          titleEs: 'Métricas de SaaS en Vivo vs. Contabilidad Estática',
          titleEn: 'Live SaaS Analytics vs. Static Bookkeeping',
          descEs: 'Un balance de sumas y saldos no muestra a qué velocidad creces. En Avialo monitorizas en tiempo real tu Ingreso Mensual Recurrente (MRR), Valor del Ciclo de Vida del Cliente (LTV) y cancelaciones de cuotas (Churn).',
          descEn: 'Static financial statements ignore SaaS growth rates. Inside Avialo, view live dashboards charting Monthly Recurring Revenue (MRR), LTV, and real-time subscriber Churn.',
          highlightEs: 'DASHBOARDS MRR Y CHURN',
          highlightEn: 'LIVE MRR & CHURN METRICS',
          icon: BarChart3
        },
        {
          titleEs: 'Conciliación Global sin Fricción ni Peajes',
          titleEn: 'Global Reconciliation without Payment Markups',
          descEs: 'Vender a clientes europeos y mundiales exige vigilar reglas de IVA intracomunitario (OSS) y tipos de cambio. Avialo calcula y clasifica automáticamente cada operación sin cobrarte porcentajes por transacción.',
          descEn: 'Selling globally necessitates managing cross-border OSS VAT laws and exchange currencies. Avialo tailors jurisdictional tax rules natively without taking gateway commission cuts.',
          highlightEs: 'MULTI-DIVISA Y COMPLIANCE OSS',
          highlightEn: 'MULTI-CURRENCY & OSS COMPLIANT',
          icon: TrendingUp
        }
      ],
      features: [
        {
          titleEs: 'Sincronización con Stripe, Redsys y Shopify',
          titleEn: 'Stripe, Redsys & Shopify Auto-Sync',
          descEs: 'Emite y firma criptográficamente facturas oficiales en tiempo real conforme los usuarios completan pagos en tus aplicaciones.',
          descEn: 'Instantly generate and cryptographically stamp official tax invoices the exact millisecond customers check out on your platform.',
          icon: Zap
        },
        {
          titleEs: 'Webhooks & Conectores Zapier / Make',
          titleEn: 'Webhooks & Zapier / Make Connectors',
          descEs: 'Dispara alertas en Slack o sincroniza datos en tu CRM automáticamente en cuanto un suscriptor renueva su cuota o abona una factura.',
          descEn: 'Trigger operational notifications inside Slack or update CRM leads automatically when a subscriber renews their plan.',
          icon: Layers
        },
        {
          titleEs: 'Firma Masiva SHA-256 para Volúmenes Altos',
          titleEn: 'High-Throughput SHA-256 Cryptographic Stamping',
          descEs: 'Nuestro motor backend soporta picos masivos de miles de transacciones en campañas u horas punta sin saturarse ni bloquearse.',
          descEn: 'Our cloud architecture supports massive traffic surges and high-frequency checkout volumes without throttling or latency bottlenecks.',
          icon: Lock
        },
        {
          titleEs: 'Proyección de Runway y Flujo de Caja',
          titleEn: 'Runway Projection & Cash Reserves',
          descEs: 'Pronostica el tiempo de vida operativa de tu startup en función del historial real de quemado de caja (Burn Rate) y facturación activa.',
          descEn: 'Project remaining startup runway and runway endurance across future fiscal months utilizing live income and burn rate telemetry.',
          icon: BarChart3
        }
      ],
      faqs: [
        {
          qEs: '¿Es compatible Avialo con flujos masivos de checkout en Stripe y Redsys?',
          qEn: 'Is Avialo fully compatible with high-frequency checkout volumes from Stripe and Redsys?',
          aEs: 'Completamente. Nuestra infraestructura API funciona de manera asíncrona mediante Webhooks o integración directa por claves de API. Cada vez que se procesa un pago, Avialo genera el ticket or factura oficial firmada en segundo plano y la envía por correo.',
          aEn: 'Completely. Our infrastructure handles checkout completion asynchronously via Webhooks or direct API tokens, generating stamped official e-invoices directly in the background.'
        },
        {
          qEs: '¿Cómo nos ayuda Avialo con el cumplimiento del IVA OSS (Ventanilla Única Europea)?',
          qEn: 'How does Avialo handle European OSS (One-Stop-Shop) cross-border VAT regulations?',
          aEs: 'Avialo identifica el país de residencia fiscal o dirección IP del cliente B2C/B2B en transacciones europeas y aplica de forma automática la cuota y reglas contables intracomunitarias u OSS precisas.',
          aEn: 'Avialo determines customer regional residency across B2B and B2C European transactions, automatically adjusting cross-border VAT ratios and OSS bookkeeping reports.'
        },
        {
          qEs: '¿Cuándo es obligatoria la Ley VeriFactu para empresas y startups españolas?',
          qEn: 'When does VeriFactu become strictly enforceable for incorporated Spanish startups?',
          aEs: 'Para todas las empresas y sociedades operando en España, el calendario obligatorio de la Agencia Tributaria fija como fecha de cumplimiento ineludible el 1 de enero de 2027. La integración de Avialo te asegura el registro inmutable exigido.',
          aEn: 'For all incorporated companies and startups operating in Spain, Tax Agency legal enforcement mandates strict implementation by January 1st, 2027.'
        },
        {
          qEs: '¿Podemos exportar nuestras métricas MRR o informes de auditoría técnica?',
          qEn: 'Can we export MRR financial trajectories and regulatory technical audit logs?',
          aEs: 'Sí. Puedes exportar historiales de suscripciones, informes de retención y el log criptográfico oficial en formatos CSV, Excel, PDF o directamente en JSON vía API de lectura.',
          aEn: 'Yes. You can export subscription retention trajectories and verified audit ledgers directly in CSV, Excel, PDF, or via JSON readable API endpoints.'
        }
      ]
    },
    gestorias: {
      profileNameEs: 'Asesorías & Gestores Contables',
      profileNameEn: 'Accountants & Advisors',
      heroTitleEs: 'Una alianza ganadora: conecta en vivo con tus clientes y descarga sus libros oficiales sin errores ni papeleos',
      heroTitleEn: 'A winning partnership: connect directly with your clients and export flawless legal accounting ledgers',
      heroSubEs: '¿Cansado de recibir correos desordenados y fotos borrosas a última hora del trimestre? Recomienda Avialo a tus clientes o pymes: obtén un acceso de gestor 100% gratis y descarga el Libro Registro de Facturas y Gastos al instante en Excel, CSV o formato contable.',
      heroSubEn: 'Tired of receiving chaotic emails and blurry receipt scans hours before tax filing deadlines? Recommend Avialo to your clients: claim complimentary 100% free advisor seat logins and export legal ledger spreadsheets instantly.',
      badgeDateEs: 'OBLIGATORIEDAD: 2027 (1 ENERO PYMES // 1 JULIO AUTÓNOMOS)',
      badgeDateEn: 'MANDATORY ENFORCEMENT: 2027 (JAN 1 SMES // JUL 1 SOLO PROS)',
      statEs: 'Ahorro de hasta un 80% en horas dedicadas al tecleado de facturas en periodo tributario',
      statEn: 'Save up to 80% of staff hours previously devoted to manual receipt data entry',
      metricVal: '0 €',
      metricLabelEs: 'Coste para el despacho por acceder a las cuentas fiscales de toda su cartera de clientes',
      metricLabelEn: 'Cost for your accounting advisory firm to manage and view all client ledger profiles',
      icon: Building2,
      whyBetter: [
        {
          titleEs: 'Acceso para Asesor 100% Gratis vs. Licencias Extra',
          titleEn: 'Free Advisor Seats vs. Extra Seat Fees',
          descEs: 'Muchos programas competidores cobran una licencia anual abusiva a la asesoría fiscal u obligan al cliente a pagar más por añadir un usuario gestor. En Avialo vuestro acceso profesional como asesores es completamente gratuito siempre.',
          descEn: 'Many software tools force clients to buy extra seats or charge advisors costly annual fees just to view records. In Avialo, dedicated accounting access is 100% free forever.',
          highlightEs: 'ACCESO GESTOR 100% GRATIS',
          highlightEn: '100% FREE ADVISOR ACCESSIBILITY',
          icon: CheckCircle2
        },
        {
          titleEs: 'Datos Estructurados vs. Teclear Papeles a Mano',
          titleEn: 'Structured Digital Logs vs. Manual Typing',
          descEs: 'El escáner OCR de precisión y la emisión electrónica aseguran que cada base imponible y retención esté en su columna exacta. Tus fiscalistas dejan de malgastar días mecanografiando facturas de papel una a una.',
          descEn: 'High-precision OCR receipt digitizers and e-invoices ensure every tax amount sits in exact table columns. Your team stops wasting weeks typing manual paper entries.',
          highlightEs: 'CERO ERRORES DE TRANSCRIPCIÓN',
          highlightEn: 'ZERO TRANSCRIPTION ERRORS',
          icon: FileCheck
        },
        {
          titleEs: 'Blindaje Jurídico VeriFactu para toda tu Cartera',
          titleEn: '2027 VeriFactu Legal Insulation for All Clients',
          descEs: 'Tus clientes confían en vuestro consejo profesional para estar dentro de la ley. Al prescribir software con huella criptográfica SHA-256 inalterable de Avialo, blindas a tu despacho ante cualquier inspección fiscal.',
          descEn: 'Clients depend on your regulatory counsel. Recommending software that natively generates immovable SHA-256 cryptographic trails completely insulates your professional advisory firm.',
          highlightEs: 'BLINDAJE JURÍDICO Y FISCAL',
          highlightEn: 'TOTAL REGULATORY INSULATION',
          icon: ShieldCheck
        }
      ],
      features: [
        {
          titleEs: 'Exportación en Formatos Oficiales (Excel, CSV, PDF)',
          titleEn: 'Official Ledger Export (Excel, CSV, PDF)',
          descEs: 'Descarga con 1 clic los Libros Registro de Facturas Emitidas, Recibidas y Bienes de Inversión perfectamente formateados y estructurados.',
          descEn: 'Export official accounting tables for emitted invoices, operating expenses, and capital investments with 1 click.',
          icon: FileCheck
        },
        {
          titleEs: 'Panel Centralizado Multicliente',
          titleEn: 'Multi-Client Centralized Workspace',
          descEs: 'Si asesoras a decenas de autónomos y pymes usuarios de Avialo, cambia de una contabilidad a otra desde un único usuario autenticado.',
          descEn: 'If advising multiple businesses utilizing Avialo, transition effortlessly between client accounting ledgers from one single secure login.',
          icon: Building2
        },
        {
          titleEs: 'Canal Directo de Consultas en el Documento',
          titleEn: 'In-Context Fiscal Document Chat',
          descEs: '¿Falta el NIF o ves una anomalía en un ticket subido por tu cliente? Coméntaselo por el chat interno del propio documento y olvidad el correo.',
          descEn: 'Notice a missing Tax ID on a receipt upload? Flag it inside the in-context invoice chat instead of writing formal emails.',
          icon: Headphones
        },
        {
          titleEs: 'Auditoría Criptográfica VeriFactu 2027',
          titleEn: '2027 VeriFactu Audit Trail Verification',
          descEs: 'Verifica la integridad inalterable y el encadenamiento de registros fiscales para responder con solvencia ante cualquier requerimiento de la AEAT.',
          descEn: 'Inspect the unalterable integrity of chained cryptographic records to assure regulators that your accounts remain strictly compliant.',
          icon: Lock
        }
      ],
      faqs: [
        {
          qEs: '¿Cómo funciona el alta gratuita para asesorías y gestores fiscales en Avialo?',
          qEn: 'How does the free advisor and accounting firm enrollment function in Avialo?',
          aEs: 'Tu cliente (autónomo o empresa) accede a la sección "Equipo / Asesores" en su panel y escribe el email de tu despacho. Recibirás una invitación con acceso gratuito de solo lectura y descarga para auditar y exportar toda su contabilidad sin coste alguno.',
          aEn: 'Your client visits "Team & Advisors" in their settings and enters your email. You immediately receive a free read-and-export invitation to download their ledgers and audit records without costs.'
        },
        {
          qEs: '¿Cuáles son las fechas de cumplimiento VeriFactu aplicables a los clientes de nuestro despacho?',
          qEn: 'What are the official VeriFactu implementation deadlines across our client portfolio?',
          aEs: 'El calendario oficial de la Agencia Tributaria establece dos fechas obligatorias: 1 de enero de 2027 para todas las empresas, pymes y personas jurídicas; y 1 de julio de 2027 para los autónomos y personas físicas con actividad empresarial.',
          aEn: 'The Tax Agency official calendar sets two binding deadlines: January 1st, 2027 for all companies and incorporated SMEs; and July 1st, 2027 for self-employed individuals and sole proprietors.'
        },
        {
          qEs: '¿Podemos importar las tablas descargadas directamente a nuestro software de gestión contable de la asesoría?',
          qEn: 'Can we import exported ledger tables straight into our existing accounting firm software?',
          aEs: 'Sí. Nuestras exportaciones Excel y CSV están estructuradas de acuerdo con los modelos oficiales de Libros Registro exigidos por la Agencia Tributaria y son compatibles para su importación rápida en los principales softwares contables del mercado.',
          aEn: 'Yes. Our Excel and CSV ledger exports mirror official Tax Agency bookkeeping table configurations, making them compatible for rapid import into industry accounting programs.'
        },
        {
          qEs: '¿Existe algún programa de Partners o acuerdos especiales si prescribimos Avialo a toda nuestra cartera de clientes?',
          qEn: 'Do you offer a Partnership program or volume agreements if we prescribe Avialo across our client portfolio?',
          aEs: 'Por supuesto. Disponemos de un programa de Partners y Alianzas Profesionales con condiciones preferentes para vuestros clientes, webinars de formación continua en normativa VeriFactu 2027 y soporte directo prioritario para vuestro equipo fiscalista.',
          aEn: 'Certainly. We run a dedicated Professional Advisory Partnership program providing preferred terms for your client portfolio, ongoing regulatory webinars, and priority fiscalist team support.'
        }
      ]
    }
  };

  const current = dataMap[type];
  const IconCmp = current.icon;

  return (
    <div className="min-h-screen bg-[#FCFCFB] dark:bg-[#080a09] text-[#0A0C0B] dark:text-white w-full overflow-x-hidden antialiased transition-colors duration-300 flex flex-col">
      <Navbar />

      <main className="flex-1 w-full max-w-[1280px] mx-auto px-4 sm:px-6 md:px-8 pt-16 sm:pt-20 md:pt-24 pb-24 space-y-20 sm:space-y-28">
        
        {/* HERO DEDICADO Y BOTÓN DE RETROCESO BIEN UBICADO LEJOS DEL HEADER */}
        <section className="space-y-8">
          {/* NAVEGACIÓN DE VUELTA AL HUB CENTRAL */}
          <div>
            <a
              href="/soluciones"
              className="inline-flex items-center gap-2 px-3.5 py-2 rounded-[6px] border border-[#D2D2CE] dark:border-[#303131] bg-[#F2F2F0] dark:bg-[#131517] text-xs font-mono font-bold hover:border-[#0A0C0B] dark:hover:border-white hover:bg-[#E5E5E2] dark:hover:bg-[#1A1C1E] transition-all duration-200 shadow-sm"
            >
              <ArrowLeft className="w-3.5 h-3.5 text-[rgb(20,122,132)] dark:text-[rgb(158,250,255)]" />
              <span>{t('VOLVER AL HUB DE SOLUCIONES', 'RETURN TO SOLUTIONS HUB')}</span>
            </a>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center">
            
            <div className="lg:col-span-8 space-y-5 sm:space-y-6">
              <h1 className="text-2xl sm:text-4xl md:text-5xl lg:text-6xl font-extrabold tracking-[-0.03em] text-[#0A0C0B] dark:text-white leading-[1.12] sm:leading-[1.08] break-words">
                {t(current.heroTitleEs, current.heroTitleEn)}
              </h1>

              <p className="text-sm sm:text-lg md:text-xl text-[rgba(10,12,11,0.78)] dark:text-white/80 leading-relaxed font-normal">
                {t(current.heroSubEs, current.heroSubEn)}
              </p>

              <div className="pt-2 flex flex-col sm:flex-row items-center gap-3.5 sm:gap-4">
                <a
                  href={APP_URLS.register}
                  className="w-full sm:w-auto text-center px-6 sm:px-8 py-3.5 sm:py-4 rounded-[6px] bg-[#0A0C0B] dark:bg-white text-white dark:text-[#0A0C0B] font-extrabold text-sm sm:text-base shadow-lg hover:opacity-90 active:scale-[0.99] transition-all duration-200 flex items-center justify-center gap-2"
                >
                  <span>{t('Empezar prueba gratis 14 días', 'Start 14-Day Free Trial')}</span>
                  <ArrowRight className="w-4 h-4" />
                </a>
                <a
                  href="/precios"
                  className="w-full sm:w-auto text-center px-6 sm:px-7 py-3.5 sm:py-4 rounded-[6px] border border-[#D2D2CE] dark:border-[#303131] bg-[#F2F2F0] dark:bg-[#131517] text-[#0A0C0B] dark:text-white font-semibold text-sm sm:text-base hover:border-[#0A0C0B]/40 dark:hover:border-white/40 transition-all duration-200"
                >
                  {t('Ver Tarifas y Planes', 'View Pricing & Tiers')}
                </a>
              </div>

              <div className="pt-1 flex flex-wrap items-center gap-x-5 gap-y-2 font-mono text-[11px] sm:text-xs font-bold text-[rgba(10,12,11,0.75)] dark:text-white/75">
                <span className="flex items-center gap-1.5 text-[rgb(43,115,38)] dark:text-[rgb(124,224,108)]">
                  ✓ {t('14 Días Gratis sin Tarjeta', '14 Days Free — No Card Needed')}
                </span>
                <span className="flex items-center gap-1.5 text-[rgb(20,122,132)] dark:text-[rgb(158,250,255)]">
                  🔒 {t('0% Comisiones Bancarias', '0% Payment Commission')}
                </span>
                <span className="flex items-center gap-1.5 text-[rgb(20,122,132)] dark:text-[rgb(158,250,255)]">
                  <Scale className="w-3.5 h-3.5 text-[rgb(20,122,132)] dark:text-[rgb(158,250,255)]" />
                  {t('Soporte en Vivo Especializado', 'Specialized Live Support')}
                </span>
              </div>
            </div>

            {/* TARJETA ARQUITECTÓNICA DE IMPACTO RETAIL Y GARANTÍA LEGAL */}
            <div className="lg:col-span-4 w-full">
              <div className="p-5 sm:p-8 md:p-10 rounded-[8px] bg-[#F2F2F0] dark:bg-[#131517] border border-[#0A0C0B]/25 dark:border-white/25 shadow-xl space-y-6 sm:space-y-8 relative overflow-hidden flex flex-col justify-between h-full">
                
                <div className="space-y-4">
                  <div className="w-12 h-12 rounded-[6px] bg-[#0A0C0B] dark:bg-white text-white dark:text-[#0A0C0B] flex items-center justify-center font-extrabold shadow-sm">
                    <IconCmp className="w-6 h-6" />
                  </div>
                  <span className="px-2.5 py-1 rounded-[3px] font-mono text-[10px] font-bold uppercase tracking-wide bg-[rgba(52,138,46,0.15)] text-[rgb(43,115,38)] dark:text-[rgb(124,224,108)] block w-fit">
                    {t(current.badgeDateEs, current.badgeDateEn)}
                  </span>
                  <h3 className="text-base sm:text-lg font-extrabold text-[#0A0C0B] dark:text-white leading-snug">
                    {t(current.statEs, current.statEn)}
                  </h3>
                </div>

                <div className="pt-6 border-t border-[#D2D2CE] dark:border-[#303131] space-y-2">
                  <div className="text-4xl sm:text-5xl font-mono font-extrabold text-[#0A0C0B] dark:text-white tracking-tight">
                    {current.metricVal}
                  </div>
                  <p className="text-xs font-semibold text-[rgba(10,12,11,0.75)] dark:text-white/75 leading-relaxed">
                    {t(current.metricLabelEs, current.metricLabelEn)}
                  </p>
                </div>

                <div className="pt-2 flex items-center justify-between font-mono text-[11px] text-[rgb(20,122,132)] dark:text-[rgb(158,250,255)] font-bold">
                  <span>● // AVIALO SOLUTIONS HUB</span>
                  <span>VERIFACTU 2027</span>
                </div>

              </div>
            </div>
          </div>
        </section>

        {/* POR QUÉ AVIALO ES SUPERIOR A EXCEL Y OTROS ERPS CONVENCIONALES */}
        <section className="space-y-10 pt-10 border-t border-[#D2D2CE] dark:border-[#303131]">
          <div className="max-w-3xl space-y-3">
            <h2 className="text-2xl sm:text-4xl font-extrabold tracking-tight text-[#0A0C0B] dark:text-white leading-tight">
              {t('Por qué Avialo supera con creces a la gestión tradicional y a otros programas del mercado', 'Why Avialo decisively outperforms outdated spreadsheets and cumbersome legacy tools')}
            </h2>
            <p className="text-base sm:text-lg text-[rgba(10,12,11,0.75)] dark:text-white/75 font-normal">
              {t(
                'Hemos analizado dónde fallan las herramientas convencionales: falta de soporte, menús complejos y comisiones bancarias imprevistas. Así es como Avialo soluciona tu operativa diaria.',
                'We dissected where conventional software fails: cold support ticket queues, labyrinthine menus, and unexpected payment commissions. Here is our unmitigated architectural solution.'
              )}
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8">
            {current.whyBetter.map((adv, idx) => {
              const AdvIcon = adv.icon;
              return (
                <div 
                  key={idx} 
                  className="p-5 sm:p-8 md:p-9 rounded-[8px] bg-[#FCFCFB] dark:bg-[#111315] border border-[#D2D2CE] dark:border-[#303131] hover:border-[#0A0C0B] dark:hover:border-white transition-all duration-300 shadow-sm flex flex-col justify-between space-y-6 group"
                >
                  <div className="space-y-5">
                    <div className="flex items-center justify-between">
                      <div className="w-11 h-11 rounded-[6px] bg-[#E5E5E2] dark:bg-[#202224] text-[#0A0C0B] dark:text-white flex items-center justify-center group-hover:bg-[#0A0C0B] group-hover:text-white dark:group-hover:bg-white dark:group-hover:text-[#0A0C0B] transition-colors">
                        <AdvIcon className="w-5 h-5" />
                      </div>
                      <span className="px-2.5 py-0.5 rounded-[3px] font-mono text-[10px] font-bold uppercase bg-[rgba(52,138,46,0.12)] text-[rgb(43,115,38)] dark:text-[rgb(124,224,108)]">
                        {t('VENTAJA AVIALO', 'AVIALO ADVANTAGE')}
                      </span>
                    </div>

                    <h3 className="text-xl font-extrabold text-[#0A0C0B] dark:text-white leading-snug">
                      {t(adv.titleEs, adv.titleEn)}
                    </h3>

                    <p className="text-xs sm:text-sm text-[rgba(10,12,11,0.75)] dark:text-white/75 leading-relaxed font-normal">
                      {t(adv.descEs, adv.descEn)}
                    </p>
                  </div>

                  <div className="pt-4 border-t border-[#D2D2CE] dark:border-[#303131] flex items-center justify-between font-mono text-xs font-bold text-[rgb(20,122,132)] dark:text-[rgb(158,250,255)]">
                    <span>▶ {t(adv.highlightEs, adv.highlightEn)}</span>
                    <Check className="w-4 h-4 text-[rgb(43,115,38)] dark:text-[rgb(124,224,108)]" />
                  </div>
                </div>
              );
            })}
          </div>
        </section>

        {/* SUITE DE HERRAMIENTAS NATIVE INCLUIDAS EN ESTE PERFIL */}
        <section className="space-y-10 pt-10 border-t border-[#D2D2CE] dark:border-[#303131]">
          <div className="max-w-2xl space-y-3">
            <h2 className="text-2xl sm:text-4xl font-extrabold tracking-tight text-[#0A0C0B] dark:text-white leading-tight">
              {t('Herramientas especializadas activadas de serie para ti', 'Specialized operating workflows natively enabled right out of the box')}
            </h2>
            <p className="text-base text-[rgba(10,12,11,0.75)] dark:text-white/75 font-normal">
              {t(
                'Sin módulos de pago separados ni costes adicionales obligados. Todo lo que tu modelo de negocio necesita para triunfar en la era VeriFactu 2027.',
                'Zero separate add-on paywalls or modular upcharges. Every instrument required for your business framework to thrive under 2027 fiscal regulations.'
              )}
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {current.features.map((item, idx) => {
              const FIcon = item.icon;
              return (
                <div
                  key={idx}
                  className="p-7 rounded-[8px] bg-[#F2F2F0] dark:bg-[#131517] border border-[#D2D2CE] dark:border-[#303131] hover:border-[#0A0C0B]/40 dark:hover:border-white/40 transition-all flex flex-col justify-between space-y-6"
                >
                  <div className="space-y-4">
                    <div className="w-10 h-10 rounded-[6px] bg-[#0A0C0B] dark:bg-white text-white dark:text-[#0A0C0B] flex items-center justify-center font-bold shadow-sm">
                      <FIcon className="w-5 h-5" />
                    </div>
                    <h3 className="text-lg font-extrabold text-[#0A0C0B] dark:text-white leading-tight">
                      {t(item.titleEs, item.titleEn)}
                    </h3>
                    <p className="text-xs sm:text-sm text-[rgba(10,12,11,0.75)] dark:text-white/75 leading-relaxed font-normal">
                      {t(item.descEs, item.descEn)}
                    </p>
                  </div>

                  <div className="pt-3 border-t border-[#D2D2CE]/60 dark:border-[#303131]/60 flex items-center gap-1.5 font-mono text-[11px] font-bold text-[rgb(43,115,38)] dark:text-[rgb(124,224,108)]">
                    <CheckCircle2 className="w-3.5 h-3.5" />
                    <span>{t('INCLUIDO EN TU LICENCIA', 'INCLUDED IN LICENSE')}</span>
                  </div>
                </div>
              );
            })}
          </div>
        </section>

        {/* SECCIÓN FAQ DEDICADA PARA ESTE CLIENTE ESPECIALIZADO */}
        <section className="space-y-10 pt-10 border-t border-[#D2D2CE] dark:border-[#303131] max-w-4xl mx-auto">
          <div className="text-center space-y-3">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-[4px] bg-[#F2F2F0] dark:bg-[#131517] border border-[#D2D2CE] dark:border-[#303131] font-mono text-xs font-bold text-[rgb(20,122,132)] dark:text-[rgb(158,250,255)] uppercase">
              <HelpCircle className="w-3.5 h-3.5" />
              <span>// {t('PREGUNTAS FRECUENTES', 'FREQUENTLY ASKED QUESTIONS')}</span>
            </div>
            <h2 className="text-2xl sm:text-4xl font-extrabold tracking-tight text-[#0A0C0B] dark:text-white">
              {t('Resolvemos todas tus dudas sobre tu solución', 'Answers to common operating questions for your profile')}
            </h2>
          </div>

          <div className="space-y-3.5">
            {current.faqs.map((faq, idx) => {
              const isOpen = openFaq === idx;
              return (
                <div
                  key={idx}
                  className={`rounded-[8px] border transition-all duration-200 overflow-hidden ${
                    isOpen
                      ? 'bg-[#F2F2F0] dark:bg-[#131517] border-[#0A0C0B] dark:border-white shadow-md'
                      : 'bg-[#FCFCFB] dark:bg-[#080a09] border-[#D2D2CE] dark:border-[#303131] hover:border-[#0A0C0B]/40 dark:hover:border-white/40'
                  }`}
                >
                  <button
                    onClick={() => setOpenFaq(isOpen ? null : idx)}
                    className="w-full text-left p-6 sm:p-7 font-extrabold text-base sm:text-lg text-[#0A0C0B] dark:text-white flex items-center justify-between gap-4 cursor-pointer"
                  >
                    <span>{t(faq.qEs, faq.qEn)}</span>
                    <div className={`p-1 rounded-[4px] ${isOpen ? 'bg-[#0A0C0B] text-white dark:bg-white dark:text-[#0A0C0B]' : 'bg-[#E5E5E2] dark:bg-[#202224] text-[#0A0C0B] dark:text-white'}`}>
                      {isOpen ? <Minus className="w-4 h-4" /> : <Plus className="w-4 h-4" />}
                    </div>
                  </button>
                  {isOpen && (
                    <div className="px-6 sm:px-7 pb-6 pt-2 text-sm sm:text-base text-[rgba(10,12,11,0.78)] dark:text-white/80 leading-relaxed font-normal border-t border-[#D2D2CE]/60 dark:border-[#303131]/60">
                      {t(faq.aEs, faq.aEn)}
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        </section>

        {/* CTA FINAL DE ALTA CONVERSIÓN ARQUITECTÓNICO */}
        <section className="pt-6 border-t border-[#D2D2CE] dark:border-[#303131]">
          <div className="rounded-[8px] bg-[#0A0C0B] dark:bg-[#131517] text-white p-6 sm:p-12 md:p-16 text-center space-y-7 shadow-2xl relative overflow-hidden border border-white/10">
            <div className="absolute top-0 right-0 w-[450px] h-[450px] bg-gradient-to-br from-[rgba(20,122,132,0.15)] via-transparent to-transparent rounded-full blur-3xl pointer-events-none" />
            
            <div className="max-w-2xl mx-auto space-y-4 relative z-10">
              <span className="font-mono text-xs text-[rgb(158,250,255)] font-bold uppercase tracking-wider block">
                // {t('PUESTA EN MARCHA EN 2 MINUTOS', 'DEPLOY NOW IN UNDER 2 MINUTES')}
              </span>
              <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold tracking-[-0.03em] text-white leading-tight">
                {t('Prueba tu solución especializada 14 días gratis', 'Test drive your specialized workflow for 14 days free')}
              </h2>
              <p className="text-base sm:text-lg text-white/80 leading-relaxed font-normal">
                {t(
                  'Sin tarjeta de crédito, sin comisiones bancarias y con soporte en vivo especializado. Da el salto al sistema financiero de la era VeriFactu 2027.',
                  'No credit card required, zero payment markups, and live specialized support. Leap into the premier 2027 VeriFactu financial architecture.'
                )}
              </p>
              
              <div className="pt-4 flex flex-col sm:flex-row items-center justify-center gap-4">
                <a
                  href={APP_URLS.register}
                  className="w-full sm:w-auto text-center px-8 py-4 rounded-[6px] bg-white text-[#0A0C0B] font-extrabold text-base shadow-lg hover:opacity-90 active:scale-[0.99] transition-all duration-200"
                >
                  {t('Empezar Ahora — 14 Días Gratis', 'Start Now — 14 Days Free')}
                </a>
                <a
                  href="/precios"
                  className="w-full sm:w-auto text-center px-7 py-4 rounded-[6px] border border-white/30 bg-transparent text-white font-bold text-base hover:bg-white/10 transition-all duration-200"
                >
                  {t('Ver Planes y Tarifas', 'View Pricing & Tiers')}
                </a>
              </div>

              <div className="pt-6 flex flex-wrap items-center justify-center gap-4 sm:gap-8 text-xs text-white/70 font-mono">
                <span>⚡ {t('SIN TARJETA DE CRÉDITO', 'NO CREDIT CARD NEEDED')}</span>
                <span>🔒 {t('0% COMISIONES TRANSACCIÓN', 'ZERO ADDED PAYMENT FEES')}</span>
                <span className="flex items-center gap-1.5"><Scale className="w-3.5 h-3.5 text-[rgb(158,250,255)]" /> {t('SOPORTE EN VIVO ESPECIALIZADO', 'SPECIALIZED LIVE SUPPORT')}</span>
              </div>
            </div>
          </div>
        </section>

      </main>

      <Footer />
    </div>
  );
};
