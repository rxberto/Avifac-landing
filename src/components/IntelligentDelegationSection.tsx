import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Bot, Sparkles, ShieldCheck, Cpu, ArrowRight, CheckCircle2, TrendingUp, RefreshCw } from 'lucide-react';
import { SectionHeader } from './SectionHeader';
import { useLanguage } from '../context/LanguageContext';

export const IntelligentDelegationSection = () => {
  const { t } = useLanguage();
  const [activeTab, setActiveTab] = useState(0);

  const tabs = [
    {
      id: 0,
      badge: t('Motor IA Autónomo', 'Autonomous AI Engine'),
      title: t('Procesamiento Autónomo de Facturas', 'Autonomous Invoice Processing'),
      desc: t('Avialo procesa facturas PDF entrantes, extrae datos fiscales mediante OCR y concilia pagos automáticamente.', 'Avialo parses incoming PDFs, extracts tax data via OCR, and auto-reconciles bank payments.'),
      icon: Bot,
      preview: {
        title: t('Factura Recibida: Provider Tech S.L.', 'Invoice Received: Provider Tech Ltd.'),
        status: t('Autoprocesada por Avialo AI', 'Auto-processed by Avialo AI'),
        amount: '€4,250.00',
        subtext: t('Procesado en 14ms • Confianza 99.8%', 'Processed in 14ms • 99.8% Accuracy'),
        details: [
          { label: t('Proveedor NIF', 'Supplier Tax ID'), val: 'B-87654321' },
          { label: t('Retención IRPF', 'Tax Withholding'), val: '15.0% (-€637.50)' },
          { label: t('Conciliación SEPA', 'SEPA Matching'), val: 'AUTO-MATCHED #8821' },
          { label: t('Estado VeriFactu', 'VeriFactu Status'), val: t('FIRMADO DIGITAL', 'DIGITALLY SIGNED') },
        ],
        chartData: [40, 65, 85, 60, 95, 100, 90],
      },
    },
    {
      id: 1,
      badge: t('Analítica ML en Vivo', 'Live ML Analytics'),
      title: t('Predicción de Tesorería en Tiempo Real', 'Real-Time Cash Flow Forecast'),
      desc: t('Anticipa tu flujo de caja, proyección de ingresos y liquidaciones tributarias con analítica predictiva.', 'Predict cash flow, revenue trends, and quarterly tax liabilities with predictive analytics.'),
      icon: Sparkles,
      preview: {
        title: t('Proyección de Tesorería Q3 / Q4', 'Q3 / Q4 Cash Flow Forecast'),
        status: t('Previsión Liquidez Positiva (+28.4%)', 'Positive Liquidity Outlook (+28.4%)'),
        amount: '€184,920.00',
        subtext: t('IA Predictiva • Margen Neto 34.2%', 'Predictive AI • Net Margin 34.2%'),
        details: [
          { label: t('Margen Bruto Estimado', 'Est. Gross Margin'), val: '€142,100.00' },
          { label: t('Reserva Fiscal IVA/IRPF', 'Tax Reserve Fund'), val: '€28,450.00' },
          { label: t('Riesgo de Impago', 'Default Risk'), val: t('< 0.2% Bajo Control', '< 0.2% Low Risk') },
          { label: t('Ratio de Liquidez', 'Liquidity Ratio'), val: t('2.84 Óptimo', '2.84 Optimal') },
        ],
        chartData: [30, 45, 55, 70, 85, 90, 110],
      },
    },
    {
      id: 2,
      badge: t('VeriFactu 2026 Preparado', 'VeriFactu 2026 Ready'),
      title: t('Cumplimiento Fiscal Automatizado', 'Automated Tax Compliance'),
      desc: t('Facturas firmadas digitalmente con huella inalterable VeriFactu enviadas automáticamente a la AEAT.', 'Digitally signed invoices with tamper-proof VeriFactu hashes sent directly to the Tax Agency.'),
      icon: ShieldCheck,
      preview: {
        title: t('VeriFactu Audit Trail #VF-2026-981', 'VeriFactu Audit Trail #VF-2026-981'),
        status: t('Huella Digital Firmada (eIDAS)', 'Digitally Signed Hash (eIDAS)'),
        amount: t('VERIFICADO OK', 'VERIFIED OK'),
        subtext: t('Hash SHA-256 Inalterable', 'Immutable SHA-256 Hash'),
        details: [
          { label: t('Hash Criptográfico', 'Crypto Hash'), val: 'e3b0c44298fc1c149afbf4c8' },
          { label: t('Sede Electrónica AEAT', 'AEAT Endpoint'), val: 'Response OK 200' },
          { label: t('Registro Inalterable', 'Immutable Block'), val: 'Block #14298' },
          { label: t('Timestamp Canónico', 'Canonical Timestamp'), val: '2026-07-30T02:44:00Z' },
        ],
        chartData: [100, 100, 100, 100, 100, 100, 100],
      },
    },
    {
      id: 3,
      badge: t('Automatización Multicanal', 'Multi-Channel Automation'),
      title: t('Cobro Multicanal de Clientes', 'Multi-Channel Client Billing'),
      desc: t('Enlaces de cobro por WhatsApp, email y SMS con remesas SEPA directas y autoconciliación.', 'Payment links via WhatsApp, email & SMS with instant SEPA direct debits & reconciliation.'),
      icon: Cpu,
      preview: {
        title: t('Recordatorio WhatsApp Enviado', 'WhatsApp Reminder Sent'),
        status: t('Cobrado vía Stripe TPV Virtual', 'Paid via Virtual POS Gateway'),
        amount: '€1,850.00',
        subtext: t('Velocidad de Cobro: 0.8 días', 'Collection Speed: 0.8 days'),
        details: [
          { label: t('Cliente', 'Client Name'), val: 'Estudio Creativo Barcelona' },
          { label: t('Canal Enviado', 'Channel Used'), val: 'WhatsApp Business API' },
          { label: t('Demora Reducida', 'DSO Reduction'), val: t('-84% Días de Cobro', '-84% Payment Days') },
          { label: t('Conciliación Bancaria', 'Bank Reconciliation'), val: 'SEPA AUTO-MATCH' },
        ],
        chartData: [20, 35, 50, 75, 80, 95, 100],
      },
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

          {/* Columna Derecha: Interfaz Adaptativa a Modo Claro y Oscuro */}
          <div className="w-full flex-1 max-w-[680px]">
            <div className="w-full min-h-[320px] sm:min-h-[380px] rounded-2xl bg-[#F2F2F0] dark:bg-[#131517] border border-[#D2D2CE] dark:border-[#303131] p-4 sm:p-6 shadow-xl flex items-center justify-start text-[#0A0C0B] dark:text-white relative transition-colors duration-300">
              
              <div className="absolute top-0 right-0 w-[300px] sm:w-[400px] h-[300px] sm:h-[400px] bg-emerald-500/10 rounded-full blur-3xl pointer-events-none" />

              <AnimatePresence mode="wait">
                <motion.div
                  key={currentTab.id}
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -20 }}
                  transition={{ duration: 0.3, ease: 'easeOut' }}
                  className="w-full bg-[#FCFCFB] dark:bg-[#1a1c1e] border border-[#D2D2CE] dark:border-[#303131] rounded-xl p-4 sm:p-6 shadow-lg flex flex-col gap-5 font-mono text-left relative z-10 transition-colors duration-300"
                >
                  <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between pb-3 border-b border-[#E6E6E3] dark:border-[#303131] gap-2">
                    <div className="flex items-center gap-2">
                      <span className="w-2.5 h-2.5 rounded-full bg-emerald-500 dark:bg-emerald-400 animate-pulse shrink-0" />
                      <span className="text-xs text-neutral-600 dark:text-neutral-400 font-bold tracking-wider">{currentTab.badge}</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <span className="text-[10px] sm:text-xs font-bold text-[rgb(52,138,46)] dark:text-emerald-400 bg-emerald-500/10 px-2.5 py-0.5 rounded-full border border-emerald-500/20 flex items-center gap-1.5">
                        <CheckCircle2 className="w-3.5 h-3.5" />
                        {currentTab.preview.status}
                      </span>
                    </div>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-12 gap-4 items-stretch">
                    
                    <div className="md:col-span-5 bg-[#F2F2F0] dark:bg-[#080a09] border border-[#D2D2CE] dark:border-[#303131] rounded-xl p-4 flex flex-col justify-between gap-3 transition-colors duration-300">
                      <div>
                        <p className="text-[11px] text-neutral-500 dark:text-neutral-400">{currentTab.preview.title}</p>
                        <p className="text-xl sm:text-3xl font-bold text-[#0A0C0B] dark:text-white mt-1">
                          {currentTab.preview.amount}
                        </p>
                        <span className="text-[10px] text-[rgb(52,138,46)] dark:text-emerald-400 font-medium inline-block mt-0.5">
                          {currentTab.preview.subtext}
                        </span>
                      </div>

                      <div className="pt-2 border-t border-[#E6E6E3] dark:border-[#303131]">
                        <div className="flex justify-between items-center text-[9px] text-neutral-500 dark:text-neutral-400 mb-1.5">
                          <span>Tendencia en Tiempo Real</span>
                          <TrendingUp className="w-3 h-3 text-[rgb(52,138,46)] dark:text-emerald-400" />
                        </div>
                        <div className="h-10 w-full flex items-end gap-1">
                          {currentTab.preview.chartData.map((val, i) => (
                            <div
                              key={i}
                              style={{ height: `${val}%` }}
                              className={`flex-1 rounded-t transition-all duration-500 ${
                                i >= 4 ? 'bg-[rgb(52,138,46)] dark:bg-emerald-400' : 'bg-neutral-300 dark:bg-neutral-700'
                              }`}
                            />
                          ))}
                        </div>
                      </div>
                    </div>

                    <div className="md:col-span-7 bg-[#F2F2F0] dark:bg-[#080a09] border border-[#D2D2CE] dark:border-[#303131] rounded-xl p-4 flex flex-col justify-between gap-2.5 transition-colors duration-300">
                      <div className="flex justify-between items-center text-[11px] pb-1.5 border-b border-[#E6E6E3] dark:border-[#303131]">
                        <span className="text-neutral-600 dark:text-neutral-400 font-bold">DESGLOSE DE OPERACIÓN</span>
                        <span className="text-[rgb(20,122,132)] dark:text-emerald-400 text-[10px] flex items-center gap-1 font-bold">
                          <RefreshCw className="w-3 h-3 animate-spin" /> LIVE SYNC
                        </span>
                      </div>

                      <div className="space-y-1.5">
                        {currentTab.preview.details.map((row, i) => (
                          <div
                            key={i}
                            className="flex justify-between items-center bg-[#FCFCFB] dark:bg-[#131517] p-2 rounded-lg border border-[#D2D2CE] dark:border-[#303131] text-[11px] transition-colors duration-300"
                          >
                            <span className="text-neutral-600 dark:text-neutral-400 truncate pr-2">{row.label}</span>
                            <span className="text-[#0A0C0B] dark:text-white font-bold shrink-0">{row.val}</span>
                          </div>
                        ))}
                      </div>
                    </div>

                  </div>

                  <div className="pt-3 border-t border-[#E6E6E3] dark:border-[#303131] flex flex-col sm:flex-row justify-between items-start sm:items-center text-[10px] sm:text-[11px] text-neutral-500 dark:text-neutral-400 gap-1.5">
                    <span className="truncate">Motor de Automatización Avialo • VeriFactu Validado</span>
                    <span className="flex items-center gap-1 text-[rgb(52,138,46)] dark:text-emerald-400 font-bold cursor-pointer hover:underline">
                      Ver Auditoría Completa <ArrowRight className="w-3.5 h-3.5" />
                    </span>
                  </div>

                </motion.div>
              </AnimatePresence>

            </div>
          </div>

        </div>

      </div>
    </section>
  );
};
