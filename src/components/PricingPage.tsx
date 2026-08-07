import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Navbar } from './Navbar';
import { Footer } from './Footer';
import { Button } from './Button';
import { useLanguage } from '../context/LanguageContext';
import { APP_URLS } from '../config/urls';
import {
  Check,
  X,
  ShieldCheck,
  Zap,
  Sparkles,
  Lock,
  ChevronDown,
  Building2,
  Users,
  FileText,
  RefreshCw,
  TrendingUp,
  Scale,
} from 'lucide-react';

interface ComparisonRow {
  nameEs: string;
  nameEn: string;
  esencial: boolean | string;
  completo: boolean | string;
  multiempresa: boolean | string;
}

interface ComparisonCategory {
  titleEs: string;
  titleEn: string;
  icon: any;
  rows: ComparisonRow[];
}

export const PricingPage = () => {
  const { t } = useLanguage();
  const [isYearly, setIsYearly] = useState(true);
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const toggleFaq = (index: number) => {
    setOpenFaq(openFaq === index ? null : index);
  };

  const plans = [
    {
      name: 'Esencial',
      desc: t(
        'Facturación rápida, impecable y sin complicaciones. Diseñado a medida para <strong>profesionales freelance y autónomos</strong> que buscan agilidad.',
        'Fast, spotless invoicing without complexity. Tailored for <strong>solo freelancers</strong> needing agility and compliance.'
      ),
      priceMonthly: 15,
      priceYearly: 12,
      target: t('1 Empresa • 1 Usuario + Gestor Gratis', '1 Business • 1 User + Free Accountant'),
      cta: t('Empezar prueba de 30 días', 'Start 30-Day Free Trial'),
      keyFeatures: [
        { text: t('Facturas y presupuestos ilimitados', 'Unlimited invoices & estimates'), included: true },
        { text: t('Cumplimiento total VeriFactu 2027 (AEAT)', 'Full VeriFactu 2027 compliance (AEAT)'), included: true },
        { text: t('Escáner OCR de tickets y gastos con IA', 'AI OCR receipt & expense scanner'), included: true },
        { text: t('Cobro online por enlace de pago', 'Online payment link billing'), included: true },
        { text: t('Asistente Copiloto IA: 100 consultas/mes', 'AI Tax Copilot: 100 queries/month'), included: true },
        { text: t('Acceso dedicado para tu gestoría (Gratis)', 'Dedicated accountant portal (Free)'), included: true },
        { text: t('Soporte por correo electrónico en 24-48h', 'Email support within 24-48h'), included: true },
        { text: t('Facturas recurrentes (suscripciones)', 'Recurring invoices (subscriptions)'), included: false },
        { text: t('API REST, webhooks y tiendas online', 'REST API, webhooks & e-commerce'), included: false },
        { text: t('Facturación pública a Administración (FACe)', 'Public administration invoicing (FACe)'), included: false },
      ],
    },
    {
      name: 'Completo',
      desc: t(
        'El motor fiscal y operativo definitivo. Creado para <strong>pymes, startups y empresas</strong> en pleno crecimiento que necesitan automatizar su facturación.',
        'The definitive operational and tax engine. Built for <strong>growing SMEs, startups and companies</strong> needing to automate billing.'
      ),
      priceMonthly: 29,
      priceYearly: 24,
      target: t('1 Empresa • 3 Usuarios + Gestor Gratis', '1 Business • 3 Users + Free Accountant'),
      cta: t('Empezar prueba de 30 días', 'Start 30-Day Free Trial'),
      keyFeatures: [
        { text: t('Todo lo incluido en el Plan Esencial', 'Everything in Essential plan'), included: true },
        { text: t('Facturación recurrente automatizada y cuotas', 'Automated recurring billing & subscriptions'), included: true },
        { text: t('Facturar a Administraciones Públicas (FACe B2G)', 'Public Administration B2G Invoicing (FACe)'), included: true },
        { text: t('API REST completa, webhooks y conectores TPV', 'Full REST API, webhooks & POS gateways'), included: true },
        { text: t('Sincronización tiendas Shopify & WooCommerce', 'Shopify & WooCommerce e-commerce auto-sync'), included: true },
        { text: t('Portal de cliente web para descarga y pagos', 'Dedicated client web portal for downloads & payments'), included: true },
        { text: t('Asistente Copiloto IA: 500 consultas/mes', 'AI Tax Copilot: 500 queries/month'), included: true },
        { text: t('Equipo, roles y permisos de acceso granulares', 'Team access, roles & granular permissions'), included: true },
        { text: t('Plantillas de factura personalizadas y campos', 'Custom invoice templates & custom branding'), included: true },
        { text: t('Soporte preferente con SLA de respuesta de 8h', 'Priority support with 8h response SLA'), included: true },
      ],
    },
    {
      name: 'Multiempresa',
      desc: t(
        'Control integral de múltiples sociedades bajo un solo panel. La herramienta perfecta para <strong>gestorías, asesorías, holdings y emprendedores en serie</strong>.',
        'Comprehensive multi-entity control in a single console. The perfect tool for <strong>accounting firms, advisors, holdings and serial entrepreneurs</strong>.'
      ),
      priceMonthly: 99,
      priceYearly: 79,
      target: t('10 Empresas • Usuarios ilimitados + Gestores', '10 Businesses • Unlimited Users + Accountants'),
      cta: t('Empezar prueba de 30 días', 'Start 30-Day Free Trial'),
      keyFeatures: [
        { text: t('Todo lo incluido en el Plan Completo', 'Everything in Complete plan'), included: true },
        { text: t('Hasta 10 sociedades / NIFs en un solo panel', 'Up to 10 businesses / tax IDs in a unified panel'), included: true },
        { text: t('Asientos de usuario y equipo ilimitados', 'Unlimited user seats and team members'), included: true },
        { text: t('Consultas ilimitadas al Asistente IA Fiscal', 'Unlimited AI Tax Copilot advisory queries'), included: true },
        { text: t('Panel de gestión con cartera de clientes', 'Client portfolio management dashboard'), included: true },
        { text: t('Marca blanca con el logotipo de tu gestoría', 'White-labeling with your agency/firm logo'), included: true },
        { text: t('Exportación avanzada y conectores contables', 'Advanced export & ERP accounting connectors'), included: true },
        { text: t('Soporte directo inmediato (SLA < 4h)', 'Direct immediate support (SLA < 4 hours)'), included: true },
        { text: t('Puesta en marcha ágil con configuración guiada', 'Agile deployment and guided initial setup'), included: true },
        { text: t('Gestor de cuenta y onboarding personalizado', 'Account manager and custom onboarding'), included: true },
      ],
    },
  ];

  const comparisonCategories: ComparisonCategory[] = [
    {
      titleEs: 'Facturación, Cobros y Normativa Fiscal (AEAT 2027)',
      titleEn: 'Invoicing, Payments & Tax Compliance (AEAT 2027)',
      icon: FileText,
      rows: [
        {
          nameEs: 'Facturas ordinarias y simplificadas',
          nameEn: 'Standard & simplified invoices',
          esencial: t('Ilimitadas', 'Unlimited'),
          completo: t('Ilimitadas', 'Unlimited'),
          multiempresa: t('Ilimitadas', 'Unlimited'),
        },
        {
          nameEs: 'Presupuestos, albaranes y facturas proforma',
          nameEn: 'Estimates, delivery notes & proforma',
          esencial: true,
          completo: true,
          multiempresa: true,
        },
        {
          nameEs: 'Homologación VeriFactu (RD 1007/2023)',
          nameEn: 'VeriFactu Compliance (RD 1007/2023)',
          esencial: true,
          completo: true,
          multiempresa: true,
        },
        {
          nameEs: 'Código QR Fiscal en cada factura expedida',
          nameEn: 'Mandatory Tax QR Code on every invoice',
          esencial: true,
          completo: true,
          multiempresa: true,
        },
        {
          nameEs: 'Encadenamiento criptográfico SHA-256 (Inmutable)',
          nameEn: 'Cryptographic SHA-256 chaining (Immutable)',
          esencial: true,
          completo: true,
          multiempresa: true,
        },
        {
          nameEs: 'Facturas rectificativas y notas de crédito',
          nameEn: 'Credit notes & amending invoices',
          esencial: true,
          completo: true,
          multiempresa: true,
        },
        {
          nameEs: 'Cobro online con tarjeta y pasarela (enlaces pago)',
          nameEn: 'Online card payment links & gateways',
          esencial: true,
          completo: true,
          multiempresa: true,
        },
        {
          nameEs: 'Facturación recurrente y automatización de cuotas',
          nameEn: 'Automated recurring billing & subscriptions',
          esencial: false,
          completo: true,
          multiempresa: true,
        },
        {
          nameEs: 'Facturación Electrónica Pública (FACe / B2G FacturaE)',
          nameEn: 'Public Administration e-Invoicing (FACe / B2G)',
          esencial: false,
          completo: true,
          multiempresa: true,
        },
        {
          nameEs: 'Custodia legal tributaria y mercantil (4 y 6 años)',
          nameEn: 'Mandatory tax & legal record archiving (4-6 yrs)',
          esencial: true,
          completo: true,
          multiempresa: true,
        },
      ],
    },
    {
      titleEs: 'Inteligencia Artificial & Automatización Contable',
      titleEn: 'Artificial Intelligence & Accounting Automation',
      icon: Sparkles,
      rows: [
        {
          nameEs: 'Consultas al Copiloto IA Fiscal y Asistente Legal',
          nameEn: 'AI Tax Copilot advisory queries & legal help',
          esencial: '100 / mes',
          completo: '500 / mes',
          multiempresa: t('Ilimitadas', 'Unlimited'),
        },
        {
          nameEs: 'Escáner OCR para tickets, facturas de proveedor y gastos',
          nameEn: 'OCR scanner for receipts & expense bills',
          esencial: true,
          completo: true,
          multiempresa: true,
        },
        {
          nameEs: 'Detección automática de IVA, IRPF y base imponible',
          nameEn: 'Auto-detection of VAT, income tax & amounts',
          esencial: true,
          completo: true,
          multiempresa: true,
        },
        {
          nameEs: 'Alertas automáticas de vencimiento, morosidad e impagos',
          nameEn: 'Automated due dates, overdue & reminder alerts',
          esencial: false,
          completo: true,
          multiempresa: true,
        },
        {
          nameEs: 'Sugerencias inteligentes para deducciones de gastos',
          nameEn: 'Smart tax deduction savings suggestions',
          esencial: false,
          completo: true,
          multiempresa: true,
        },
      ],
    },
    {
      titleEs: 'Empresas, Equipo y Colaboración con Gestoría',
      titleEn: 'Companies, Team Seats & Accountant Collaboration',
      icon: Building2,
      rows: [
        {
          nameEs: 'Número de sociedades / NIFs incluidos',
          nameEn: 'Number of businesses / tax entities included',
          esencial: t('1 Empresa', '1 Business'),
          completo: t('1 Empresa', '1 Business'),
          multiempresa: t('10 Empresas', '10 Businesses'),
        },
        {
          nameEs: 'Asientos de usuarios de equipo en panel',
          nameEn: 'Team user seats in operational dashboard',
          esencial: t('1 Usuario', '1 User'),
          completo: t('3 Usuarios', '3 Users'),
          multiempresa: t('Ilimitada', 'Unlimited'),
        },
        {
          nameEs: 'Acceso dedicado para tu gestoría o asesor fiscal',
          nameEn: 'Dedicated accountant / tax advisor portal access',
          esencial: t('Incluido (Gratis)', 'Included (Free)'),
          completo: t('Incluido (Gratis)', 'Included (Free)'),
          multiempresa: t('Incluido (Gratis)', 'Included (Free)'),
        },
        {
          nameEs: 'Control de roles y permisos granulares de acceso',
          nameEn: 'Role management & granular permission access',
          esencial: false,
          completo: true,
          multiempresa: true,
        },
        {
          nameEs: 'Portal web de cliente (descarga PDF/XML y pago 1 clic)',
          nameEn: 'Client self-service web portal (PDF/XML & 1-click pay)',
          esencial: false,
          completo: true,
          multiempresa: true,
        },
        {
          nameEs: 'Panel multi-cliente y cartera para gestorías',
          nameEn: 'Multi-client accounting management console',
          esencial: false,
          completo: false,
          multiempresa: true,
        },
        {
          nameEs: 'Marca blanca con logo y colores de tu despacho / holding',
          nameEn: 'White-label custom agency branding & logos',
          esencial: false,
          completo: false,
          multiempresa: true,
        },
      ],
    },
    {
      titleEs: 'API REST, Conectividad y E-commerce',
      titleEn: 'REST API, Connectors & E-commerce',
      icon: Zap,
      rows: [
        {
          nameEs: 'Pasarelas de cobros online (Redsys, Stripe, PayPal)',
          nameEn: 'Payment gateways (Redsys, Stripe, PayPal)',
          esencial: true,
          completo: true,
          multiempresa: true,
        },
        {
          nameEs: 'API REST completa para desarrollo a medida',
          nameEn: 'Full REST API for developer integration',
          esencial: false,
          completo: true,
          multiempresa: true,
        },
        {
          nameEs: 'Webhooks en tiempo real y eventos automáticos',
          nameEn: 'Real-time Webhooks & automated event triggering',
          esencial: false,
          completo: true,
          multiempresa: true,
        },
        {
          nameEs: 'Sincronización con tiendas Shopify y WooCommerce',
          nameEn: 'Shopify & WooCommerce online store sync',
          esencial: false,
          completo: true,
          multiempresa: true,
        },
        {
          nameEs: 'Exportación en formatos contables (A3, Sage, CSV y Excel)',
          nameEn: 'Export to accounting formats (A3, Sage, CSV & Excel)',
          esencial: false,
          completo: true,
          multiempresa: true,
        },
      ],
    },
    {
      titleEs: 'Soporte Técnico, Seguridad y Garantías SLA',
      titleEn: 'Technical Support, Security & SLA Guarantees',
      icon: ShieldCheck,
      rows: [
        {
          nameEs: 'Servidor y residencia de datos 100% en la UE (España)',
          nameEn: '100% EU Server Data Residency (Madrid, Spain)',
          esencial: true,
          completo: true,
          multiempresa: true,
        },
        {
          nameEs: 'Cifrado bancario AES-256 en reposo y TLS 1.3 en tránsito',
          nameEn: 'AES-256 banking encryption & TLS 1.3 transit',
          esencial: true,
          completo: true,
          multiempresa: true,
        },
        {
          nameEs: 'Autenticación de Doble Factor (2FA) y auditoría SIF',
          nameEn: 'Two-Factor Authentication (2FA) & SIF audit logs',
          esencial: true,
          completo: true,
          multiempresa: true,
        },
        {
          nameEs: 'Copias de seguridad diarias automatizadas e inmutables',
          nameEn: 'Daily automated immutable WORM backups',
          esencial: true,
          completo: true,
          multiempresa: true,
        },
        {
          nameEs: 'Nivel de asistencia y tiempo de respuesta (SLA)',
          nameEn: 'Support tier and target response time (SLA)',
          esencial: t('Email 24-48h', 'Email 24-48h'),
          completo: t('Priorente < 8h', 'Priority < 8h'),
          multiempresa: t('Directo < 4h', 'Direct < 4h'),
        },
        {
          nameEs: 'Onboarding y configuración inicial guiada',
          nameEn: 'Assisted onboarding & guided initial setup',
          esencial: t('Guías intuitivas', 'Intuitive guides'),
          completo: t('Soporte en vivo', 'Live chat support'),
          multiempresa: t('Especialista dedicado', 'Dedicated Specialist'),
        },
      ],
    },
  ];

  const advantages = [
    {
      icon: ShieldCheck,
      title: t('Todo incluido, sin costes adicionales', 'All-inclusive, zero extra add-on costs'),
      desc: t(
        'A diferencia de otros sistemas que cobran extras por cada nueva regulación, módulo de OCR o conector bancario, en Avialo tu cuota cubre todo el ecosistema y sus futuras actualizaciones legales sin facturas sorpresas.',
        'Unlike other software that charges extra for new regulations, OCR tools, or bank feeds, your Avialo subscription covers the entire ecosystem and future regulatory compliance with zero surprise costs.'
      ),
    },
    {
      icon: Scale,
      title: t('Cumplimiento legal garantizado 2027', 'Guaranteed legal compliance for 2027'),
      desc: t(
        'El Reglamento VeriFactu y la Ley Antifraude imponen duras sanciones al software no homologado. Avialo incorpora de serie registros inmutables, códigos QR fiscales y la Declaración SIF Garante ante Hacienda.',
        'The VeriFactu Regulation and Anti-Fraud Law impose severe fines for uncertified software. Avialo inherently builds immutable record chaining, tax QR codes, and official Tax Agency SIF declarations.'
      ),
    },
    {
      icon: Lock,
      title: t('Libertad total sin permanencia', 'Total operational freedom, zero lock-in'),
      desc: t(
        'Tu negocio evoluciona y tu software de facturación debe adaptarse con fluidez. Puedes mejorar, reducir de nivel, pausar o cancelar tu suscripción cuando lo desees con un solo clic desde tu panel de usuario.',
        'Your business evolves and your invoicing tool must adapt smoothly. Upgrade, downgrade, pause, or cancel your subscription whenever you wish with one click from your admin console.'
      ),
    },
    {
      icon: RefreshCw,
      title: t('Puesta en marcha en menos de 5 minutos', 'Go live in under 5 minutes'),
      desc: t(
        'Olvídate de procesos complejos de instalación o configuraciones engorrosas. Avialo está listo desde el primer instante para emitir facturas legales VeriFactu, conectar tu Datáfono Virtual o Stripe y gestionar tus cobros al momento.',
        'Forget complex installations or cumbersome setups. Avialo is ready immediately to issue legal VeriFactu e-invoices, connect your Virtual POS or Stripe, and manage your billing operations seamlessly.'
      ),
    },
    {
      icon: Users,
      title: t('Acceso gratuito para tu asesor fiscal', 'Free portal access for your tax advisor'),
      desc: t(
        'Facilitamos el trabajo colaborativo sin coste adicional. Tu gestor fiscal dispone de un acceso dedicado en tiempo real para revisar y descargar los libros de IVA, impuestos y modelos oficiales sin consumir una licencia de tu plan.',
        'We streamline teamwork with zero extra charges. Your tax advisor gets a dedicated real-time login to review and export VAT logs, taxes, and government models without taking up a paid team license.'
      ),
    },
    {
      icon: TrendingUp,
      title: t('Garantía de tarifa congelada por 2 años', 'Price-lock guarantee for 2 full years'),
      desc: t(
        'Al suscribir cualquier plan en modalidad anual durante este periodo de lanzamiento, tu tarifa con un descuento del 30% queda automáticamente blindada contra la inflación y futuras revisiones de precio durante 24 meses.',
        'By subscribing to any plan on an annual billing cycle during this launch window, your 30% discounted rate is automatically protected against inflation and rate revisions for 24 months.'
      ),
    },
  ];

  const faqs = [
    {
      q: t('¿Cómo funcionan los 30 días de prueba gratuita sin riesgo?', 'How does the 30-day risk-free free trial work?'),
      a: t(
        'Te das de alta en menos de 30 segundos únicamente con tu email y el nombre de tu empresa. Durante 30 días disfrutas de acceso completo a todas las herramientas operativas de la plataforma: emisión de facturas VeriFactu reales o de prueba, lectura OCR de gastos y consultas al Copiloto de IA. No es necesario introducir tarjeta de crédito o datos bancarios al iniciar, eliminando cualquier riesgo de cargo accidental al concluir el periodo de prueba.',
        'Sign up in under 30 seconds using only your email and company name. For 30 days, you enjoy complete access to all platform tools: issuing real or test VeriFactu invoices, running OCR receipts, and querying the AI Copilot. No credit card is required upon sign-up, removing any possibility of unwanted charges when the trial completes.'
      ),
    },
    {
      q: t('¿Qué sucede cuando finaliza mi periodo de prueba de 30 días?', 'What happens when my 30-day trial period ends?'),
      a: t(
        'Al acercarse el final de los 30 días, el sistema te notificará para que decidas con tranquilidad si deseas suscribir el Plan Esencial, Completo o Multiempresa. Si optas por no continuar, podrás exportar todo tu histórico de facturas, clientes y gastos en formato estándar. En ningún caso realizaremos cobros bancarios ni eliminaremos de golpe tus registros tributarios.',
        'As the 30-day mark approaches, the platform will calmly notify you to choose between the Essential, Complete, or Multi-Entity tier. If you opt not to proceed, you can cleanly export all your billing history, clients, and receipts in open formats. We never apply unauthorized bank charges or delete tax records abruptly.'
      ),
    },
    {
      q: t('¿Cómo funciona el acceso dedicado y gratuito para mi gestoría?', 'How does the free dedicated accountant access work?'),
      a: t(
        'En Avialo entendemos que el intercambio de documentación fiscal al final de cada trimestre debe ser ágil. Por ello, todos nuestros planes te permiten invitar a tu asesor, despacho o gestor fiscal mediante su propio correo electrónico. Accederán a un portal optimizado para la consulta, revisión y descarga de libros registro de IVA y ficheros contables, sin ocupar ninguna de las licencias de usuario de tu equipo.',
        'At Avialo, we understand quarterly tax exchange must be effortless. Therefore, all our plans let you invite your accountant or agency via their email. They access a simplified dashboard optimized for auditing and downloading VAT register books and accounting exports without consuming any of your paid team user licenses.'
      ),
    },
    {
      q: t('¿Los importes detallados en las tablas incluyen el IVA?', 'Do the amounts shown in the pricing tables include VAT?'),
      a: t(
        'Siguiendo el estándar en software profesional enfocado a empresas, sociedades y trabajadores autónomos (entorno B2B), los precios mostrados en esta página no incluyen el Impuesto sobre el Valor Añadido (IVA) ni otros impuestos indirectos que pudieran corresponder. En tu factura mensual o anual se desglosará el impuesto según la normativa legal aplicable, el cual podrás deducirte íntegramente en tus declaraciones periódicas.',
        'In accordance with standard practice for B2B professional software designed for companies and freelancers, prices displayed on this page do not include Value Added Tax (VAT) or other indirect taxes. Your monthly or annual receipt will transparently itemize taxes according to applicable law, which are fully deductible in your regulatory filings.'
      ),
    },
    {
      q: t('¿Es posible modificar mi suscripción o cambiar de modalidad mensual a anual en cualquier momento?', 'Is it possible to modify my tier or switch from monthly to annual billing anytime?'),
      a: t(
        'Sí, totalmente. Desde tu sección de configuración, dentro de "Suscripción y Planes", puedes cambiar tu nivel o frecuencia de facturación de forma instantánea. Si decides mejorar de plan para aumentar el tamaño de tu equipo o cambiar de pago mensual a anual para aplicar el descuento de fundador del 30%, nuestro sistema calculará en tiempo real el prorrateo exacto por el periodo restante.',
        'Yes, entirely. From your settings under "Subscription & Plans", you can adjust your tier or billing frequency instantly. Whether you upgrade to expand your team seats or shift from monthly to annual to secure the 30% founder discount, our system automatically calculates the real-time prorated amount for the remaining cycle.'
      ),
    },
    {
      q: t('¿Qué garantías ofrece el acuerdo de precio congelado durante 2 años?', 'What guarantees does the 2-year price-lock commitment provide?'),
      a: t(
        'Nuestra garantía de precio congelado es un compromiso formal con los clientes que confían en Avialo durante nuestra fase de despliegue ("Usuarios Fundadores"). Al contratar tu plan en modalidad Anual, garantizamos contractualmente en los Términos de Uso que el precio acordado, con el 30% de descuento incluido, se renovará exactamente al mismo coste durante 24 meses continuos, sin ser afectado por incrementos en nuestras tarifas generales o IPC.',
        'Our price-lock commitment is a binding guarantee to users joining Avialo during our deployment window ("Founding Users"). By subscribing to an Annual billing plan, we contractually ensure under our Terms of Service that your agreed fee, including the 30% discount, will renew at the exact same rate for 24 continuous months without being affected by general pricing adjustments or inflation.'
      ),
    },
    {
      q: t('¿Cuáles son los métodos de pago habilitados para formalizar la suscripción?', 'What payment methods are supported to formalize my subscription?'),
      a: t(
        'Aceptamos el pago de forma segura a través de tarjetas de crédito y débito bancarias (Visa, Mastercard, American Express) procesadas bajo el estándar de cifrado y autenticación de máxima seguridad internacional (Stripe / Redsys con 3D-Secure 2). Para modalidades de facturación anual y cuentas multiempresa, asimismo posibilitamos la tramitación mediante domiciliación bancaria europea SEPA o transferencia directa.',
        'We securely accept payments via credit and debit cards (Visa, Mastercard, Amex) processed under peak global encryption and authentication security standards (Stripe / Redsys with 3D-Secure 2). For annual billing schedules and corporate accounts, we also support European SEPA direct debit processing or wire transfer.'
      ),
    },
    {
      q: t('¿Cuándo es obligatorio VeriFactu y por qué es imprescindible operar con un software certificado?', 'When is VeriFactu mandatory and why is operating with certified software essential?'),
      a: t(
        'La Ley 11/2021 de medidas contra el fraude y el reglamento técnico VeriFactu (Real Decreto 1007/2023) establecen la prohibición rotunda de emitir facturas mediante programas no verificables como Excel o Word. La obligatoriedad de operar con un software certificado entra en vigor el 1 de enero de 2027 para pymes y empresas, y el 1 de julio de 2027 para autónomos y profesionales independientes. Las sanciones por utilizar programas no homologados pueden ascender hasta 50.000 € por usuario y año. Con Avialo dispones en todo momento del respaldo de la Declaración de Responsabilidad SIF Garante ante la Agencia Tributaria.',
        'Spanish Law 11/2021 and its VeriFactu technical framework (Royal Decree 1007/2023) strictly ban issuing invoices via unverified tools like Excel or Word. Mandatory compliance with certified software begins on January 1st, 2027 for SMEs and businesses, and on July 1st, 2027 for self-employed freelancers. Fines for operating uncertified tools reach up to €50,000 per user per year. With Avialo, you hold the definitive protection of our official Guaranteed SIF Statement filed before the Tax Agency.'
      ),
    },
  ];

  return (
    <div className="min-h-screen bg-[#FCFCFB] dark:bg-[#080a09] text-[#0A0C0B] dark:text-white w-full overflow-x-hidden antialiased transition-colors duration-300 flex flex-col">
      <Navbar />

      {/* Cabecera / Hero Limpio al estilo de la Landing */}
      <header className="relative pt-36 pb-16 px-4 sm:px-6 lg:px-8 max-w-[1280px] mx-auto text-center w-full">
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="flex flex-col items-center gap-5 max-w-4xl mx-auto"
        >
          <h1 className="text-4xl sm:text-5xl lg:text-[56px] font-bold tracking-[-0.03em] text-[#0A0C0B] dark:text-white leading-[1.12]">
            {t('Planes claros y transparentes para cada etapa de tu negocio', 'Clear, transparent plans for every stage of your business')}
          </h1>

          <p className="text-base sm:text-lg text-[rgba(10,12,11,0.72)] dark:text-white/80 max-w-2xl mx-auto leading-[1.5] font-normal">
            {t(
              'Todo incluido en cada nivel, sin módulos que se pagan aparte ni comisiones sorpresa. Sin permanencia, con 30 días de prueba gratuita sin tarjeta y cumplimiento 100% VeriFactu 2027.',
              'All-inclusive across every tier, with no extra paid modules or surprise fees. No lock-in contracts, a 30-day free trial without a card, and 100% VeriFactu 2027 compliance.'
            )}
          </p>

          {/* Lista limpia de garantías (sin cajas ni colores recargados) */}
          <div className="flex flex-wrap items-center justify-center gap-x-8 gap-y-3 pt-4 text-sm font-medium text-[rgba(10,12,11,0.85)] dark:text-white/85">
            <div className="inline-flex items-center gap-2">
              <Check className="w-4 h-4 text-[rgb(52,138,46)] dark:text-[rgb(104,204,88)] shrink-0" />
              <span>{t('30 días de prueba sin tarjeta', '30-day trial, no credit card')}</span>
            </div>
            <div className="inline-flex items-center gap-2">
              <Check className="w-4 h-4 text-[rgb(52,138,46)] dark:text-[rgb(104,204,88)] shrink-0" />
              <span>{t('Cancelación libre en 1 clic', 'Cancel anytime in 1 click')}</span>
            </div>
            <div className="inline-flex items-center gap-2">
              <Check className="w-4 h-4 text-[rgb(52,138,46)] dark:text-[rgb(104,204,88)] shrink-0" />
              <span>{t('Software Homologado VeriFactu', 'Certified VeriFactu Software')}</span>
            </div>
            <div className="inline-flex items-center gap-2">
              <Check className="w-4 h-4 text-[rgb(52,138,46)] dark:text-[rgb(104,204,88)] shrink-0" />
              <span>{t('Residencia de datos en España (UE)', 'Data Residency in Spain (EU)')}</span>
            </div>
          </div>
        </motion.div>
      </header>

      {/* Contenido Principal */}
      <main className="max-w-[1200px] mx-auto px-4 sm:px-6 lg:px-8 pb-24 w-full flex flex-col gap-20">
        
        {/* SECCIÓN 1: SELECTOR LIMPIO Y TARJETAS DE PLANES UNIFORMES */}
        <section className="flex flex-col gap-8 w-full">
          
          {/* Barra de Conmutador de Facturación y Nota de Lanzamiento */}
          <div className="flex flex-col md:flex-row items-center justify-between gap-4 w-full bg-[#F2F2F0] dark:bg-[#131517] p-4 sm:p-5 rounded-[12px] border border-[#D2D2CE] dark:border-[#303131]">
            <div className="flex items-center gap-3 w-full md:w-auto justify-center md:justify-start">
              <div className="flex flex-col sm:flex-row items-stretch sm:items-center p-1 rounded-[8px] bg-[#FCFCFB] dark:bg-[#080a09] border border-[#D2D2CE] dark:border-[#303131] w-full sm:w-auto gap-1 sm:gap-0">
                <button
                  onClick={() => setIsYearly(false)}
                  className={`px-5 py-2 rounded-[6px] text-xs sm:text-sm font-semibold transition-all duration-200 cursor-pointer ${
                    !isYearly
                      ? 'bg-[#0A0C0B] dark:bg-white text-white dark:text-black font-bold shadow-sm'
                      : 'text-[rgba(10,12,11,0.7)] dark:text-white/70 hover:text-[#0A0C0B] dark:hover:text-white'
                  }`}
                >
                  {t('Pago Mensual', 'Monthly Billing')}
                </button>
                <button
                  onClick={() => setIsYearly(true)}
                  className={`px-5 py-2 rounded-[6px] text-xs sm:text-sm font-semibold transition-all duration-200 cursor-pointer ${
                    isYearly
                      ? 'bg-[#0A0C0B] dark:bg-white text-white dark:text-black font-bold shadow-sm'
                      : 'text-[rgba(10,12,11,0.7)] dark:text-white/70 hover:text-[#0A0C0B] dark:hover:text-white'
                  }`}
                >
                  {t('Pago Anual (30% Dto.)', 'Annual Billing (30% Off)')}
                </button>
              </div>
            </div>

            <div className="text-xs sm:text-sm text-[rgba(10,12,11,0.8)] dark:text-white/80 text-center md:text-left">
              <span>
                {t(
                  'Descuento de Fundador: Ahorras un 30% con el pago anual y tu tarifa queda protegida sin subidas durante 2 años.',
                  'Founder Discount: Save 30% with annual billing and keep your fee shielded against rate increases for 2 straight years.'
                )}
              </span>
            </div>
          </div>

          {/* Rejilla de 3 Tarjetas de Precios - TODAS POR IGUAL SIN FAVORITISMO NI TAGS RECARGADOS */}
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 w-full items-stretch">
            {plans.map((plan) => {
              const price = isYearly ? plan.priceYearly : plan.priceMonthly;

              return (
                <div
                  key={plan.name}
                  className="w-full rounded-[12px] bg-[#F2F2F0] dark:bg-[#131517] p-6 sm:p-8 flex flex-col justify-between gap-8 border border-[#D2D2CE] dark:border-[#303131] transition-all duration-200 hover:border-[#0A0C0B]/40 dark:hover:border-white/40"
                >
                  <div className="flex flex-col gap-6">
                    
                    {/* Encabezado del Plan */}
                    <div className="space-y-2">
                      <h2 className="text-2xl sm:text-3xl font-bold tracking-tight text-[#0A0C0B] dark:text-white">
                        {plan.name}
                      </h2>
                      <p 
                        className="text-xs sm:text-sm text-[rgba(10,12,11,0.72)] dark:text-white/80 leading-relaxed min-h-[50px]"
                        dangerouslySetInnerHTML={{ __html: plan.desc }}
                      />
                    </div>

                    {/* Bloque de Precio Limpio */}
                    <div className="flex flex-col py-5 border-y border-[#E6E6E3] dark:border-[#232326]">
                      <div className="flex items-baseline gap-1.5">
                        <AnimatePresence mode="wait">
                          <motion.span
                            key={isYearly ? 'y' : 'm'}
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            exit={{ opacity: 0 }}
                            transition={{ duration: 0.15 }}
                            className="text-4xl sm:text-5xl font-extrabold tracking-tight text-[#0A0C0B] dark:text-white inline-block"
                          >
                            {price},00 €
                          </motion.span>
                        </AnimatePresence>
                        <span className="text-sm font-medium text-[rgba(10,12,11,0.7)] dark:text-white/70">
                          {t('/ mes', '/ month')}
                        </span>
                      </div>

                      <div className="mt-1.5 text-xs text-[rgba(10,12,11,0.7)] dark:text-white/70 font-normal">
                        {isYearly ? (
                          <span>
                            {price * 12}{t(',00 € / año (facturación anual, IVA no incl.)', '.00 € / yr (billed annually, ex. VAT)')}
                          </span>
                        ) : (
                          <span>{t('Facturación mensual sin permanencia (IVA no incl.)', 'Billed monthly, cancel anytime (ex. VAT)')}</span>
                        )}
                      </div>
                    </div>

                    {/* Resumen de capacidad (sin cajas de colores ni tags recargados) */}
                    <div className="text-xs sm:text-sm font-bold text-[#0A0C0B] dark:text-white border-b border-[#E6E6E3] dark:border-[#232326] pb-4">
                      {plan.target}
                    </div>

                    {/* Lista de Características con tipografía limpia y sin brillos artificiales */}
                    <div className="space-y-3 pt-1">
                      <div className="space-y-2.5">
                        {plan.keyFeatures.map((feat, i) => (
                          <div
                            key={i}
                            className={`flex items-start gap-2.5 text-xs sm:text-sm transition-colors ${
                              feat.included
                                ? 'text-[rgba(10,12,11,0.88)] dark:text-white/90 font-normal'
                                : 'text-[rgba(10,12,11,0.35)] dark:text-white/30 line-through'
                            }`}
                          >
                            {feat.included ? (
                              <Check className="w-4 h-4 text-[rgb(52,138,46)] dark:text-[rgb(104,204,88)] shrink-0 mt-0.5" />
                            ) : (
                              <X className="w-4 h-4 text-[rgba(10,12,11,0.25)] dark:text-white/20 shrink-0 mt-0.5" />
                            )}
                            <span className="leading-tight">{feat.text}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>

                  {/* Acción CTA - Todos por igual usando el botón principal de la Landing */}
                  <div className="pt-4">
                    <Button
                      variant="primary"
                      href={APP_URLS.register}
                      className="w-full justify-center py-3.5 text-sm font-bold"
                    >
                      <span>{plan.cta}</span>
                    </Button>
                  </div>
                </div>
              );
            })}
          </div>

          {/* Bloque Enterprise Limpio */}
          <div className="w-full bg-[#F2F2F0] dark:bg-[#131517] p-6 sm:p-8 rounded-[12px] border border-[#D2D2CE] dark:border-[#303131] flex flex-col md:flex-row items-center justify-between gap-6">
            <div className="space-y-1.5 text-center md:text-left max-w-3xl">
              <h3 className="text-base sm:text-lg font-bold text-[#0A0C0B] dark:text-white">
                {t('¿Necesitas más de 10 empresas, nube privada o integración con sistemas heredados?', 'Need more than 10 entities, private cloud, or legacy system integration?')}
              </h3>
              <p className="text-xs sm:text-sm text-[rgba(10,12,11,0.72)] dark:text-white/80 leading-relaxed">
                {t(
                  'Desarrollamos arquitecturas corporativas a medida con conectores ERP (SAP, Salesforce, Navision), servidores dedicados en AWS España y SLA de disponibilidad del 99.99%.',
                  'We build bespoke enterprise architectures with legacy ERP connectors (SAP, Salesforce, Navision), dedicated instances in AWS Spain, and 99.99% uptime SLAs.'
                )}
              </p>
            </div>
            <Button
              variant="secondary"
              href="mailto:hola@avialo.es?subject=Consulta%20Plan%20Enterprise%20Avialo"
              className="w-full md:w-auto shrink-0 whitespace-normal sm:whitespace-nowrap px-6 py-3 font-bold justify-center text-center"
            >
              <span>{t('Contactar con Soluciones Corporativas', 'Contact Corporate Solutions')}</span>
            </Button>
          </div>
        </section>

        {/* SECCIÓN 2: TABLA DE COMPARATIVA TÉCNICA (LIMPIA, SIN COLUMNAS RESALTADAS EN VERDE) */}
        <section className="space-y-8 pt-10 border-t border-[#D2D2CE] dark:border-[#303131]">
          <div className="text-left space-y-2 max-w-3xl">
            <h2 className="text-2xl sm:text-4xl font-bold tracking-[-0.03em] text-[#0A0C0B] dark:text-white">
              {t('Comparativa técnica detallada de planes', 'Detailed Technical Plan Comparison')}
            </h2>
            <p className="text-sm sm:text-base text-[rgba(10,12,11,0.72)] dark:text-white/75 leading-relaxed">
              {t(
                'Consulta todas las especificaciones operativas y legales que incluye cada modalidad para cumplir con la normativa fiscal española sin zonas grises.',
                'Check all operational and legal specifications included in each billing tier for complete Spanish tax compliance without grey areas.'
              )}
            </p>
          </div>

          <div className="block md:hidden text-center text-xs font-semibold text-[rgba(10,12,11,0.65)] dark:text-white/65 mb-2 animate-pulse">
            {t('← Desliza horizontalmente para explorar toda la comparativa →', '← Swipe horizontally to explore full table →')}
          </div>

          <div className="w-full overflow-x-auto rounded-[12px] border border-[#D2D2CE] dark:border-[#303131] bg-[#F2F2F0] dark:bg-[#131517] [scrollbar-width:thin]">
            <table className="w-full text-left border-collapse min-w-[700px]">
              
              {/* Cabecera de tabla uniforme para todos los planes */}
              <thead className="bg-[#FCFCFB] dark:bg-[#080a09] border-b border-[#D2D2CE] dark:border-[#303131] sticky top-0 z-20">
                <tr>
                  <th className="py-5 px-6 text-sm font-bold text-[#0A0C0B] dark:text-white w-[40%]">
                    {t('Características y Módulos', 'Features & Modules')}
                  </th>
                  <th className="py-5 px-4 text-center w-[20%] border-l border-[#D2D2CE] dark:border-[#303131]">
                    <div className="font-bold text-sm text-[#0A0C0B] dark:text-white">Esencial</div>
                    <div className="text-xs text-[rgba(10,12,11,0.6)] dark:text-white/60 font-normal mt-0.5">{isYearly ? '12€ / mes' : '15€ / mes'}</div>
                  </th>
                  <th className="py-5 px-4 text-center w-[20%] border-l border-[#D2D2CE] dark:border-[#303131]">
                    <div className="font-bold text-sm text-[#0A0C0B] dark:text-white">Completo</div>
                    <div className="text-xs text-[rgba(10,12,11,0.6)] dark:text-white/60 font-normal mt-0.5">{isYearly ? '24€ / mes' : '29€ / mes'}</div>
                  </th>
                  <th className="py-5 px-4 text-center w-[20%] border-l border-[#D2D2CE] dark:border-[#303131]">
                    <div className="font-bold text-sm text-[#0A0C0B] dark:text-white">Multiempresa</div>
                    <div className="text-xs text-[rgba(10,12,11,0.6)] dark:text-white/60 font-normal mt-0.5">{isYearly ? '79€ / mes' : '99€ / mes'}</div>
                  </th>
                </tr>
              </thead>

              <tbody className="divide-y divide-[#D2D2CE] dark:divide-[#303131] text-xs sm:text-sm">
                {comparisonCategories.map((cat, catIdx) => {
                  return (
                    <span key={catIdx} className="contents">
                      
                      {/* Fila de Título de Categoría */}
                      <tr className="bg-[#E6E6E3] dark:bg-[#232326] font-bold text-[#0A0C0B] dark:text-white">
                        <td colSpan={4} className="py-3.5 px-6 border-y border-[#D2D2CE] dark:border-[#303131]">
                          <span>{t(cat.titleEs, cat.titleEn)}</span>
                        </td>
                      </tr>

                      {/* Filas de características */}
                      {cat.rows.map((row, rowIdx) => (
                        <tr
                          key={rowIdx}
                          className="bg-[#FCFCFB]/40 dark:bg-[#131517] hover:bg-[#FCFCFB] dark:hover:bg-[#181a1c] transition-colors"
                        >
                          <td className="py-3.5 px-6 font-normal text-[rgba(10,12,11,0.88)] dark:text-white/90">
                            <span>{t(row.nameEs, row.nameEn)}</span>
                          </td>

                          <td className="py-3.5 px-4 text-center border-l border-[#D2D2CE] dark:border-[#303131]">
                            {typeof row.esencial === 'boolean' ? (
                              row.esencial ? (
                                <Check className="w-4 h-4 text-[rgb(52,138,46)] dark:text-[rgb(104,204,88)] mx-auto" />
                              ) : (
                                <X className="w-4 h-4 text-[rgba(10,12,11,0.25)] dark:text-white/20 mx-auto" />
                              )
                            ) : (
                              <span className="font-medium text-xs text-[#0A0C0B] dark:text-white">{row.esencial}</span>
                            )}
                          </td>

                          <td className="py-3.5 px-4 text-center border-l border-[#D2D2CE] dark:border-[#303131]">
                            {typeof row.completo === 'boolean' ? (
                              row.completo ? (
                                <Check className="w-4 h-4 text-[rgb(52,138,46)] dark:text-[rgb(104,204,88)] mx-auto" />
                              ) : (
                                <X className="w-4 h-4 text-[rgba(10,12,11,0.25)] dark:text-white/20 mx-auto" />
                              )
                            ) : (
                              <span className="font-medium text-xs text-[#0A0C0B] dark:text-white">{row.completo}</span>
                            )}
                          </td>

                          <td className="py-3.5 px-4 text-center border-l border-[#D2D2CE] dark:border-[#303131]">
                            {typeof row.multiempresa === 'boolean' ? (
                              row.multiempresa ? (
                                <Check className="w-4 h-4 text-[rgb(52,138,46)] dark:text-[rgb(104,204,88)] mx-auto" />
                              ) : (
                                <X className="w-4 h-4 text-[rgba(10,12,11,0.25)] dark:text-white/20 mx-auto" />
                              )
                            ) : (
                              <span className="font-medium text-xs text-[#0A0C0B] dark:text-white">{row.multiempresa}</span>
                            )}
                          </td>
                        </tr>
                      ))}
                    </span>
                  );
                })}
              </tbody>
            </table>
          </div>
        </section>

        {/* SECCIÓN 3: VENTAJAS DEL MODELO DE PRECIOS DE AVIALO */}
        <section className="space-y-10 pt-10 border-t border-[#D2D2CE] dark:border-[#303131]">
          <div className="text-left space-y-2 max-w-3xl">
            <h2 className="text-2xl sm:text-4xl font-bold tracking-[-0.03em] text-[#0A0C0B] dark:text-white">
              {t('Por qué el modelo de Avialo es la decisión más inteligente', 'Why Avialo’s framework is the smartest decision')}
            </h2>
            <p className="text-sm sm:text-base text-[rgba(10,12,11,0.72)] dark:text-white/75 leading-relaxed">
              {t(
                'Una filosofía de precios transparente: sin tarifas por módulo, sin encierro de datos y con seguridad jurídica total ante la Agencia Tributaria en 2027.',
                'A transparent pricing philosophy: zero add-on module fees, zero data traps, and complete legal security with the Spanish Tax Agency in 2027.'
              )}
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {advantages.map((adv, idx) => {
              const AdvIcon = adv.icon;
              return (
                <div
                  key={idx}
                  className="bg-[#F2F2F0] dark:bg-[#131517] p-7 rounded-[12px] border border-[#D2D2CE] dark:border-[#303131] flex flex-col gap-4"
                >
                  <div className="w-10 h-10 rounded-[8px] bg-[#FCFCFB] dark:bg-[#232326] border border-[#D2D2CE] dark:border-[#404141] flex items-center justify-center text-[#0A0C0B] dark:text-white shrink-0">
                    <AdvIcon className="w-5 h-5" />
                  </div>
                  <div className="space-y-2">
                    <h3 className="text-base sm:text-lg font-bold text-[#0A0C0B] dark:text-white tracking-tight">
                      {adv.title}
                    </h3>
                    <p className="text-xs sm:text-sm text-[rgba(10,12,11,0.72)] dark:text-white/75 leading-relaxed font-normal">
                      {adv.desc}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>

          {/* Bloque de Garantía Oficial SIF */}
          <div className="p-6 sm:p-8 rounded-[12px] bg-[#F2F2F0] dark:bg-[#131517] border border-[#D2D2CE] dark:border-[#303131] text-left flex flex-col sm:flex-row items-center justify-between gap-6">
            <div className="space-y-2 max-w-3xl">
              <h3 className="text-base sm:text-lg font-bold text-[#0A0C0B] dark:text-white">
                {t('Garantía Oficial: Software SIF Homologado ante la AEAT', 'Official Guarantee: Certified SIF Software for the Tax Agency')}
              </h3>
              <p className="text-xs sm:text-sm text-[rgba(10,12,11,0.72)] dark:text-white/80 leading-relaxed">
                {t(
                  'Al suscribirte a cualquier plan (Esencial, Completo o Multiempresa), descargas de forma inmediata el certificado vinculante de Software Garante firmado por AVIALO SOLUCIONES S.L., conforme al artículo 12 del Real Decreto 1007/2023. Cubriendo al 100% tu responsabilidad legal frente a inspecciones fiscales.',
                  'Upon subscribing to any tier, you immediately download the legally binding Guaranteed Software Statement signed by AVIALO SOLUCIONES S.L. under Art. 12 of Royal Decree 1007/2023, covering 100% of your legal compliance in tax audits.'
                )}
              </p>
            </div>
            <Button
              variant="secondary"
              href="https://www.avialo.es/ACUERDO_AVIALO_SOLUCIONES_SL.pdf"
              external
              className="w-full sm:w-auto shrink-0 whitespace-normal sm:whitespace-nowrap px-5 py-3 text-xs font-bold justify-center text-center"
            >
              <span>{t('Ver Declaración SIF (PDF)', 'View SIF Statement (PDF)')}</span>
            </Button>
          </div>
        </section>

        {/* SECCIÓN 4: PREGUNTAS FRECUENTES (FAQ) DE PRECIOS Y CONTRATACIÓN */}
        <section className="space-y-8 pt-10 border-t border-[#D2D2CE] dark:border-[#303131] max-w-4xl mx-auto w-full">
          <div className="text-left space-y-2">
            <h2 className="text-2xl sm:text-4xl font-bold tracking-[-0.03em] text-[#0A0C0B] dark:text-white">
              {t('Preguntas frecuentes sobre precios y contratación', 'Frequently Asked Questions on Pricing & Billing')}
            </h2>
            <p className="text-sm sm:text-base text-[rgba(10,12,11,0.72)] dark:text-white/75">
              {t(
                'Si necesitas resolver dudas específicas sobre tu contabilidad actual o una importación a medida, escríbenos directamente a hola@avialo.es.',
                'If you need to discuss specific accounting configurations or custom migrations, reach out to us directly at hola@avialo.es.'
              )}
            </p>
          </div>

          <div className="space-y-3">
            {faqs.map((faq, idx) => {
              const isOpen = openFaq === idx;
              return (
                <div
                  key={idx}
                  className="rounded-[12px] bg-[#F2F2F0] dark:bg-[#131517] border border-[#D2D2CE] dark:border-[#303131] overflow-hidden transition-colors"
                >
                  <button
                    onClick={() => toggleFaq(idx)}
                    aria-expanded={isOpen}
                    className="w-full text-left p-6 flex items-center justify-between gap-4 font-bold text-sm sm:text-base text-[#0A0C0B] dark:text-white hover:opacity-90 transition-opacity cursor-pointer focus:outline-none"
                  >
                    <span className="leading-snug">{faq.q}</span>
                    <div className={`p-1.5 rounded-[6px] bg-[#E6E6E3] dark:bg-[#232326] text-[#0A0C0B] dark:text-white shrink-0 transition-transform duration-200 ${isOpen ? 'rotate-180' : ''}`}>
                      <ChevronDown className="w-4 h-4" />
                    </div>
                  </button>
                  <AnimatePresence>
                    {isOpen && (
                      <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: 'auto', opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.2, ease: 'easeInOut' }}
                      >
                        <div className="px-6 pb-6 text-xs sm:text-sm text-[rgba(10,12,11,0.78)] dark:text-white/80 border-t border-[#D2D2CE]/60 dark:border-[#303131]/60 pt-4 leading-relaxed font-normal">
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

        {/* SECCIÓN 5: CTA FINAL LIMPIO ESTILO LANDING */}
        <section className="pt-8">
          <div className="w-full rounded-[12px] bg-[#F2F2F0] dark:bg-[#131517] border border-[#D2D2CE] dark:border-[#303131] p-10 sm:p-16 text-center space-y-6">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-[-0.03em] text-[#0A0C0B] dark:text-white leading-[1.15] max-w-2xl mx-auto">
              {t('Empieza a facturar con un software certificado en menos de 30 segundos', 'Start invoicing with certified software in under 30 seconds')}
            </h2>
            <p className="text-sm sm:text-base text-[rgba(10,12,11,0.72)] dark:text-white/75 max-w-xl mx-auto leading-relaxed font-normal">
              {t(
                'Cumple al 100% con la normativa VeriFactu y Antifraude con un software certificado ante la AEAT. Sin esperas de activación, sin permanencia y sin tarjeta de crédito.',
                'Comply 100% with VeriFactu and Anti-Fraud regulations using Tax Agency certified software. Zero activation delays, zero lock-in contracts, and no credit card required.'
              )}
            </p>
            <div className="pt-2 flex flex-col sm:flex-row items-center justify-center gap-4">
              <Button
                variant="primary"
                href={APP_URLS.register}
                className="w-full sm:w-auto px-8 py-3.5 text-sm font-bold shadow-sm"
              >
                <span>{t('Empezar 30 días de prueba gratis', 'Start 30-Day Free Trial')}</span>
              </Button>
              <Button
                variant="secondary"
                href="mailto:hola@avialo.es?subject=Duda%20previa%20contratacion"
                className="w-full sm:w-auto px-6 py-3.5 text-sm font-semibold"
              >
                <span>{t('Hablar con nuestro equipo', 'Talk to our team')}</span>
              </Button>
            </div>
          </div>
        </section>

      </main>

      <Footer />
    </div>
  );
};

export default PricingPage;
