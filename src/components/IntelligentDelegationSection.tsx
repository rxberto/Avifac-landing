import { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import {
  Bot,
  Sparkles,
  ShieldCheck,
  Cpu,
  CheckCircle2,
  QrCode,
  Link2,
  Mail,
  MessageCircle,
  Send,
  Download,
  Plus,
  ArrowLeft,
} from 'lucide-react';
import { SectionHeader } from './SectionHeader';
import { useLanguage } from '../context/LanguageContext';

const Field = ({ label, value }: { label: string; value: string }) => (
  <div className="min-w-0">
    <p className="text-[9px] sm:text-[10px] text-neutral-400 dark:text-neutral-500 mb-1">{label}</p>
    <div className="px-2.5 py-1.5 rounded-lg border border-[#D2D2CE] dark:border-[#303131] bg-[#FCFCFB] dark:bg-[#131517] text-[10px] sm:text-xs truncate">
      {value}
    </div>
  </div>
);

const Row = ({ label, value, accent }: { label: string; value: string; accent?: string }) => (
  <div className="flex justify-between items-center text-[10px] sm:text-[11px] py-1">
    <span className="text-neutral-500 dark:text-neutral-400">{label}</span>
    <span className={`font-semibold ${accent ?? ''}`}>{value}</span>
  </div>
);

const Chrome = ({ url, children }: { url: string; children: React.ReactNode }) => (
  <div className="flex flex-col h-full">
    <div className="flex items-center gap-1.5 pb-2.5 mb-3 sm:mb-4 border-b border-[#E6E6E3] dark:border-[#303131] shrink-0">
      <span className="w-2 h-2 rounded-full bg-red-500/70" />
      <span className="w-2 h-2 rounded-full bg-amber-500/70" />
      <span className="w-2 h-2 rounded-full bg-emerald-500/70" />
      <span className="ml-2 text-[9px] sm:text-[10px] font-mono text-neutral-400 dark:text-neutral-500 truncate">{url}</span>
    </div>
    <div className="flex-1 min-h-0">{children}</div>
  </div>
);

export const IntelligentDelegationSection = () => {
  const { t } = useLanguage();
  const [activeTab, setActiveTab] = useState(0);
  const [invoiceFormOpen, setInvoiceFormOpen] = useState(false);

  useEffect(() => {
    if (activeTab !== 0) setInvoiceFormOpen(false);
  }, [activeTab]);

  const tabs = [
    {
      id: 0,
      badge: t('Facturación Guiada', 'Guided Invoicing'),
      title: t('Genera Facturas en Segundos', 'Generate Invoices in Seconds'),
      desc: t(
        'Pulsa «Nueva factura» y verás el editor real: cliente, conceptos, IVA y totales calculados al instante.',
        'Click "New invoice" and see the real editor: client, line items, VAT and totals calculated instantly.'
      ),
      icon: Bot,
      url: invoiceFormOpen ? 'app.avialo.es/facturas/nueva' : 'app.avialo.es/facturas',
    },
    {
      id: 1,
      badge: t('Informes Fiscales en Vivo', 'Live Tax Reports'),
      title: t('Tus Impuestos, Siempre Claros', 'Your Taxes, Always Clear'),
      desc: t(
        'IVA repercutido, resultado del Modelo 303 y el EBITDA del trimestre, calculados en tiempo real.',
        'Output VAT, quarterly tax return, and quarter EBITDA, calculated in real time.'
      ),
      icon: Sparkles,
      url: 'app.avialo.es/informes',
    },
    {
      id: 2,
      badge: t('VeriFactu 2027 Preparado', 'VeriFactu 2027 Ready'),
      title: t('Cumplimiento Fiscal Automatizado', 'Automated Tax Compliance'),
      desc: t(
        'Cada factura emitida se firma digitalmente, se envía a la AEAT y queda enlazada en una cadena inalterable.',
        'Every issued invoice is digitally signed, sent to the Tax Agency, and chained into a tamper-proof ledger.'
      ),
      icon: ShieldCheck,
      url: 'app.avialo.es/facturas/av-0001',
    },
    {
      id: 3,
      badge: t('Cobro Multicanal', 'Multi-Channel Billing'),
      title: t('Envía y Cobra por Cualquier Canal', 'Send and Collect Anywhere'),
      desc: t(
        'PDF, email, WhatsApp o enlace de cobro directo: tu cliente paga como prefiera, tú lo ves conciliado.',
        'PDF, email, WhatsApp, or a direct payment link: your client pays their way, you see it reconciled.'
      ),
      icon: Cpu,
      url: 'app.avialo.es/facturas/av-0001',
    },
  ];

  const currentTab = tabs[activeTab];

  return (
    <section
      id="delegation"
      className="w-full bg-[#FCFCFB] dark:bg-[#080a09] py-[80px] px-4 sm:px-6 relative z-10 transition-colors duration-300 overflow-hidden"
    >
      <div className="max-w-[1140px] w-full mx-auto flex flex-col gap-10 sm:gap-12">

        {/* Cabecera Concisa */}
        <SectionHeader
          dotColor="var(--accent-green)"
          tagText={t('Delegación Inteligente', 'Intelligent Delegation')}
          title={t('Cuéntaselo a Avialo. Se encarga del resto.', 'Describe your goal to Avialo. It handles the rest.')}
          description={t(
            'Describe tu objetivo en lenguaje claro y Avialo ejecuta cada paso automáticamente.',
            'State your request in plain English and Avialo executes every step automatically.'
          )}
        />

        {/* Bloque Interactivo */}
        <div className="w-full flex flex-col lg:flex-row gap-6 sm:gap-8 items-stretch justify-between">

          {/* Columna Izquierda */}
          <div className="w-full lg:w-[380px] flex flex-col gap-3.5 sm:gap-4 shrink-0 py-1 text-left justify-center">
            {tabs.map((tab) => {
              const isActive = activeTab === tab.id;

              return (
                <div
                  key={tab.id}
                  onClick={() => setActiveTab(tab.id)}
                  className="group flex items-start gap-3 sm:gap-4 cursor-pointer select-none py-1.5 transition-all duration-300"
                >
                  <div className="h-full min-h-[22px] pt-1">
                    <span
                      className={`block w-[2.5px] rounded-full transition-all duration-300 ${
                        isActive
                          ? 'h-full bg-[rgb(52,138,46)] dark:bg-[rgb(104,204,88)] shadow-[0_0_8px_rgba(52,138,46,0.5)]'
                          : 'h-5 sm:h-6 bg-[#E6E6E3] dark:bg-[#232326] group-hover:bg-[#D2D2CE] dark:group-hover:bg-[#303131]'
                      }`}
                    />
                  </div>

                  <div className="flex flex-col flex-1">
                    <h3
                      className={`transition-all duration-300 ${
                        isActive
                          ? 'text-base sm:text-lg font-medium text-[#0A0C0B] dark:text-white'
                          : 'text-sm sm:text-base font-normal text-[rgba(10,12,11,0.45)] dark:text-white/40 group-hover:text-[rgba(10,12,11,0.75)] dark:group-hover:text-white/75'
                      }`}
                    >
                      {tab.title}
                    </h3>

                    {isActive && (
                      <motion.p
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: 'auto' }}
                        exit={{ opacity: 0, height: 0 }}
                        transition={{ duration: 0.25 }}
                        className="text-xs sm:text-sm font-normal leading-[1.45] text-[rgba(10,12,11,0.72)] dark:text-white/80 mt-1"
                      >
                        {tab.desc}
                      </motion.p>
                    )}
                  </div>
                </div>
              );
            })}
          </div>

          {/* Columna Derecha: Interfaz Real de Avialo, Adaptativa a Modo Claro y Oscuro */}
          <div className="w-full flex-1 max-w-[680px]">
            <div className="w-full min-h-[420px] sm:min-h-[480px] rounded-2xl bg-[#F2F2F0] dark:bg-[#131517] border border-[#D2D2CE] dark:border-[#303131] p-4 sm:p-6 shadow-xl flex items-stretch justify-start text-[#0A0C0B] dark:text-white relative transition-colors duration-300">

              <div className="absolute top-0 right-0 w-[300px] sm:w-[400px] h-[300px] sm:h-[400px] bg-emerald-500/10 rounded-full blur-3xl pointer-events-none" />

              <AnimatePresence mode="wait">
                <motion.div
                  key={currentTab.id}
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -20 }}
                  transition={{ duration: 0.3, ease: 'easeOut' }}
                  className="w-full bg-[#FCFCFB] dark:bg-[#1a1c1e] border border-[#D2D2CE] dark:border-[#303131] rounded-xl p-4 sm:p-6 shadow-lg text-left relative z-10 transition-colors duration-300"
                >
                  <Chrome url={currentTab.url}>
                    {activeTab === 0 && (
                      <AnimatePresence mode="wait">
                        {!invoiceFormOpen ? (
                          <motion.div
                            key="lista"
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            exit={{ opacity: 0 }}
                            transition={{ duration: 0.2 }}
                            className="flex flex-col h-full"
                          >
                            <div className="flex items-center justify-between mb-3 shrink-0">
                              <h4 className="text-xs sm:text-sm font-bold">Facturas</h4>
                              <motion.button
                                whileTap={{ scale: 0.95 }}
                                onClick={() => setInvoiceFormOpen(true)}
                                className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-[#0A0C0B] dark:bg-white text-white dark:text-black text-[10px] sm:text-xs font-medium cursor-pointer hover:opacity-90 transition-opacity"
                              >
                                <Plus className="w-3.5 h-3.5" />
                                Nueva factura
                              </motion.button>
                            </div>
                            <div className="flex flex-col divide-y divide-[#E6E6E3] dark:divide-[#303131]">
                              {[
                                { id: 'AV-0142', client: 'Acme Design Studio', amount: '€3,200.00' },
                                { id: 'AV-0141', client: 'Nexa Labs Tech Ltd', amount: '€1,850.00' },
                                { id: 'AV-0140', client: 'Studio UX Global', amount: '€4,500.00' },
                              ].map((inv) => (
                                <div key={inv.id} className="flex items-center justify-between py-2 text-[10px] sm:text-[11px]">
                                  <span className="font-semibold">{inv.id}</span>
                                  <span className="text-neutral-500 dark:text-neutral-400 truncate px-2 flex-1">{inv.client}</span>
                                  <span className="font-mono">{inv.amount}</span>
                                </div>
                              ))}
                            </div>
                            <p className="mt-auto pt-3 flex items-center gap-1.5 text-[9px] sm:text-[10px] text-neutral-400">
                              <Sparkles className="w-3 h-3 shrink-0 text-violet-500" />
                              {t('Pulsa «Nueva factura» para verlo en acción', 'Click "New invoice" to see it in action')}
                            </p>
                          </motion.div>
                        ) : (
                          <motion.div
                            key="form"
                            initial={{ opacity: 0, x: 12 }}
                            animate={{ opacity: 1, x: 0 }}
                            exit={{ opacity: 0, x: -12 }}
                            transition={{ duration: 0.25 }}
                            className="flex flex-col h-full gap-2.5"
                          >
                            <div className="flex items-center justify-between shrink-0">
                              <button
                                onClick={() => setInvoiceFormOpen(false)}
                                className="flex items-center gap-1 text-[10px] sm:text-[11px] text-neutral-500 dark:text-neutral-400 hover:text-[#0A0C0B] dark:hover:text-white transition-colors cursor-pointer"
                              >
                                <ArrowLeft className="w-3.5 h-3.5" /> Facturas
                              </button>
                              <span className="text-[9px] sm:text-[10px] text-neutral-400">
                                {t('Verifactu al emitir', 'Verifactu on issue')}
                              </span>
                            </div>
                            <h4 className="text-xs sm:text-sm font-bold -mt-1 shrink-0">Nueva factura</h4>
                            <div className="grid grid-cols-1 sm:grid-cols-5 gap-3 flex-1 min-h-0">
                              <div className="sm:col-span-3 flex flex-col gap-2">
                                <div className="grid grid-cols-2 gap-2">
                                  <Field label="Cliente" value="Selecciona o escribe..." />
                                  <Field label="Serie" value="AV (próx. nº 143)" />
                                </div>
                                <div className="grid grid-cols-2 gap-2">
                                  <Field label="Tipo" value="F1 — Completa" />
                                  <Field label="Fecha de operación" value="30/07/2027" />
                                </div>
                                <div className="border border-[#D2D2CE] dark:border-[#303131] rounded-lg p-2.5 bg-[#F2F2F0] dark:bg-[#080a09]">
                                  <div className="grid grid-cols-4 text-[8px] sm:text-[9px] text-neutral-400 mb-1.5">
                                    <span>Descripción</span>
                                    <span className="text-center">Cant.</span>
                                    <span className="text-right">IVA</span>
                                    <span className="text-right">Total</span>
                                  </div>
                                  <div className="grid grid-cols-4 text-[10px] sm:text-[11px] font-medium items-center">
                                    <span className="truncate pr-1">Diseño de identidad</span>
                                    <span className="text-center">1</span>
                                    <span className="text-right">21%</span>
                                    <span className="text-right">€1,452.00</span>
                                  </div>
                                </div>
                              </div>
                              <div className="sm:col-span-2 bg-[#F2F2F0] dark:bg-[#080a09] border border-[#D2D2CE] dark:border-[#303131] rounded-lg p-3 flex flex-col justify-between gap-2">
                                <div>
                                  <p className="text-[8px] uppercase text-neutral-400 tracking-wide">Previsualización</p>
                                  <p className="text-[10px] sm:text-[11px] font-semibold mt-1">Avialo Soluciones SL</p>
                                  <p className="text-[9px] sm:text-[10px] text-neutral-400 mt-0.5">Facturar a: Tecnología Alfa SL</p>
                                </div>
                                <div className="border-t border-[#E6E6E3] dark:border-[#303131] pt-1.5">
                                  <Row label="Base imponible" value="€1,200.00" />
                                  <div className="flex justify-between items-center mt-1">
                                    <span className="text-[10px] sm:text-xs font-bold">Total</span>
                                    <span className="text-sm sm:text-base font-bold">€1,452.00</span>
                                  </div>
                                </div>
                                <div className="flex items-center gap-1.5 text-[8px] sm:text-[9px] text-[rgb(52,138,46)] dark:text-emerald-400 font-medium">
                                  <QrCode className="w-3 h-3 shrink-0" />
                                  <span>QR VERI*FACTU incluido</span>
                                </div>
                              </div>
                            </div>
                          </motion.div>
                        )}
                      </AnimatePresence>
                    )}

                    {activeTab === 1 && (
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 h-full">
                        <div className="border border-[#D2D2CE] dark:border-[#303131] rounded-lg p-3 bg-[#F2F2F0] dark:bg-[#080a09] flex flex-col justify-between">
                          <div>
                            <p className="text-[10px] sm:text-[11px] font-bold mb-1.5">Resumen fiscal — 3T 2027</p>
                            <Row label="IVA repercutido (ventas)" value="€3,215.40" />
                            <Row label="IVA soportado deducible" value="-€682.10" />
                          </div>
                          <div className="border-t border-[#E6E6E3] dark:border-[#303131] pt-1.5 mt-1.5 flex justify-between items-center">
                            <span className="text-[10px] sm:text-[11px] font-bold">Resultado Modelo 303</span>
                            <span className="text-xs sm:text-sm font-bold text-[rgb(154,112,12)] dark:text-[rgb(212,177,68)]">
                              €2,533.30
                            </span>
                          </div>
                        </div>
                        <div className="border border-[#D2D2CE] dark:border-[#303131] rounded-lg p-3 bg-[#F2F2F0] dark:bg-[#080a09] flex flex-col justify-between">
                          <div>
                            <p className="text-[10px] sm:text-[11px] font-bold mb-1.5">Resultado del trimestre</p>
                            <Row label="Ingresos (base imponible)" value="€19,935.00" />
                            <Row label="Gastos (base)" value="-€3,248.00" />
                          </div>
                          <div className="border-t border-[#E6E6E3] dark:border-[#303131] pt-1.5 mt-1.5 flex justify-between items-center">
                            <span className="text-[10px] sm:text-[11px] font-bold">EBITDA</span>
                            <span className="text-xs sm:text-sm font-bold text-[rgb(52,138,46)] dark:text-emerald-400">
                              €16,687.00
                            </span>
                          </div>
                        </div>
                        <div className="sm:col-span-2 border border-[#D2D2CE] dark:border-[#303131] rounded-lg p-3 bg-[#F2F2F0] dark:bg-[#080a09] flex flex-col">
                          <p className="text-[10px] sm:text-[11px] font-bold mb-2">Facturación mensual (base)</p>
                          {(() => {
                            const monthly = [
                              { m: 'Feb', v: 3120 },
                              { m: 'Mar', v: 4581 },
                              { m: 'Abr', v: 3965 },
                              { m: 'May', v: 5123 },
                              { m: 'Jun', v: 6012 },
                              { m: 'Jul', v: 1936 },
                            ];
                            const max = Math.max(...monthly.map((d) => d.v));
                            return (
                              <>
                                <div className="flex items-stretch gap-1.5 sm:gap-2 h-14 sm:h-16">
                                  {monthly.map(({ m, v }, i) => (
                                    <div key={m} className="flex-1 h-full flex flex-col justify-end">
                                      <div
                                        style={{ height: `${(v / max) * 100}%` }}
                                        className={`w-full rounded-t transition-all duration-500 ${
                                          i === monthly.length - 1 ? 'bg-indigo-500/40' : 'bg-indigo-500'
                                        }`}
                                      />
                                    </div>
                                  ))}
                                </div>
                                <div className="flex gap-1.5 sm:gap-2 mt-1">
                                  {monthly.map(({ m }) => (
                                    <span key={m} className="flex-1 text-center text-[8px] sm:text-[9px] text-neutral-400">
                                      {m}
                                    </span>
                                  ))}
                                </div>
                              </>
                            );
                          })()}
                          <p className="text-[8px] sm:text-[9px] text-neutral-400 mt-1.5">
                            {t('Julio en curso (atenuado)', 'July in progress (faded)')}
                          </p>
                        </div>
                      </div>
                    )}

                    {activeTab === 2 && (
                      <div className="flex flex-col gap-3 h-full">
                        <div className="flex items-center gap-2 pb-2 border-b border-[#E6E6E3] dark:border-[#303131]">
                          <ShieldCheck className="w-4 h-4 text-[rgb(52,138,46)] dark:text-emerald-400 shrink-0" />
                          <h4 className="text-xs sm:text-sm font-bold">Cumplimiento Verifactu</h4>
                        </div>
                        <div className="border border-[#D2D2CE] dark:border-[#303131] rounded-lg p-3 bg-[#F2F2F0] dark:bg-[#080a09] flex items-center justify-between">
                          <div className="min-w-0">
                            <p className="text-[10px] sm:text-[11px] font-semibold">Registro de alta #1</p>
                            <p className="text-[9px] sm:text-[10px] text-neutral-400 truncate">huella 533FDE383230400C…</p>
                            <p className="text-[9px] sm:text-[10px] text-neutral-400">Aceptado por AEAT · 28 jul 01:15</p>
                          </div>
                          <span className="shrink-0 inline-flex items-center gap-1 text-[9px] sm:text-[10px] font-medium text-[rgb(52,138,46)] dark:text-emerald-400 bg-emerald-500/10 px-2 py-0.5 rounded-full border border-emerald-500/20">
                            <CheckCircle2 className="w-3 h-3" />
                            Enviada a AEAT
                          </span>
                        </div>
                        <div className="flex items-center justify-between border border-[#D2D2CE] dark:border-[#303131] rounded-lg p-2.5 sm:p-3">
                          <span className="flex items-center gap-2 text-[10px] sm:text-[11px] text-neutral-500 dark:text-neutral-400">
                            <QrCode className="w-3.5 h-3.5" /> QR tributario
                          </span>
                          <span className="text-[9px] sm:text-[10px] font-medium text-[rgb(20,122,132)] dark:text-[rgb(158,250,255)]">
                            Cotejar en AEAT
                          </span>
                        </div>
                        <span className="flex items-center gap-1.5 text-[9px] sm:text-[10px] text-neutral-400">
                          <Link2 className="w-3 h-3" /> Verificar integridad de la cadena
                        </span>
                      </div>
                    )}

                    {activeTab === 3 && (
                      <div className="flex flex-col gap-3 h-full">
                        <div className="flex flex-wrap gap-1.5 pb-2 border-b border-[#E6E6E3] dark:border-[#303131]">
                          {[
                            { icon: Download, label: 'PDF' },
                            { icon: Mail, label: 'Email' },
                            { icon: MessageCircle, label: 'WhatsApp' },
                            { icon: Link2, label: 'Enlace' },
                          ].map(({ icon: Icon, label }) => (
                            <span
                              key={label}
                              className="inline-flex items-center gap-1 text-[9px] sm:text-[10px] px-2 py-1 rounded-md border border-[#D2D2CE] dark:border-[#303131] text-neutral-600 dark:text-neutral-300"
                            >
                              <Icon className="w-3 h-3" /> {label}
                            </span>
                          ))}
                        </div>
                        <div className="border border-[#D2D2CE] dark:border-[#303131] rounded-lg p-3 bg-[#F2F2F0] dark:bg-[#080a09] flex flex-col gap-2">
                          <p className="text-[10px] sm:text-[11px] font-bold mb-0.5">Envío al cliente</p>
                          <div className="flex justify-between items-center text-[10px] sm:text-[11px]">
                            <span className="flex items-center gap-1.5 text-neutral-500 dark:text-neutral-400">
                              <MessageCircle className="w-3.5 h-3.5" /> WhatsApp
                            </span>
                            <span className="text-neutral-400">Próximamente</span>
                          </div>
                          <div className="flex justify-between items-center text-[10px] sm:text-[11px]">
                            <span className="flex items-center gap-1.5 text-neutral-500 dark:text-neutral-400">
                              <Mail className="w-3.5 h-3.5" /> Email
                            </span>
                            <span className="text-neutral-400">Sin enviar</span>
                          </div>
                          <button className="mt-1 inline-flex items-center justify-center gap-1.5 px-3 py-1.5 rounded-lg border border-[#D2D2CE] dark:border-[#303131] text-[10px] sm:text-[11px] font-medium bg-[#FCFCFB] dark:bg-[#1a1c1e]">
                            <Send className="w-3.5 h-3.5" /> Enviar ahora
                          </button>
                        </div>
                        <span className="text-[9px] sm:text-[10px] text-[rgb(52,138,46)] dark:text-emerald-400 font-medium">
                          {t('Cobrado en 0.8 días de media', 'Paid in 0.8 days on average')}
                        </span>
                      </div>
                    )}
                  </Chrome>
                </motion.div>
              </AnimatePresence>

            </div>
          </div>

        </div>

      </div>
    </section>
  );
};
