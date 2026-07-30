import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Bot, Sparkles, ShieldCheck, Cpu, ArrowRight, CheckCircle2, TrendingUp, RefreshCw } from 'lucide-react';
import { SectionHeader } from './SectionHeader';

export const IntelligentDelegationSection = () => {
  const [activeTab, setActiveTab] = useState(0);

  const tabs = [
    {
      id: 0,
      badge: 'Motor IA Autónomo',
      title: 'Procesamiento Autónomo de Facturas',
      desc: 'Avialo procesa facturas PDF entrantes, extrae datos fiscales mediante OCR y concilia pagos automáticamente.',
      icon: Bot,
      preview: {
        title: 'Factura Recibida: Provider Tech S.L.',
        status: 'Autoprocesada por Avialo AI',
        amount: '€4,250.00',
        subtext: 'Procesado en 14ms • Confianza 99.8%',
        details: [
          { label: 'Proveedor NIF', val: 'B-87654321' },
          { label: 'Retención IRPF', val: '15.0% (-€637.50)' },
          { label: 'Conciliación SEPA', val: 'AUTO-MATCHED #8821' },
          { label: 'Estado VeriFactu', val: 'FIRMADO DIGITAL' },
        ],
        chartData: [40, 65, 85, 60, 95, 100, 90],
      },
    },
    {
      id: 1,
      badge: 'Analítica ML en Vivo',
      title: 'Predicción de Tesorería en Tiempo Real',
      desc: 'Anticipa tu flujo de caja, proyección de ingresos y liquidaciones tributarias con analítica predictiva.',
      icon: Sparkles,
      preview: {
        title: 'Proyección de Tesorería Q3 / Q4',
        status: 'Previsión Liquidez Positiva (+28.4%)',
        amount: '€184,920.00',
        subtext: 'IA Predictiva • Margen Neto 34.2%',
        details: [
          { label: 'Margen Bruto Estimado', val: '€142,100.00' },
          { label: 'Reserva Fiscal IVA/IRPF', val: '€28,450.00' },
          { label: 'Riesgo de Impago', val: '< 0.2% Bajo Control' },
          { label: 'Ratio de Liquidez', val: '2.84 Óptimo' },
        ],
        chartData: [30, 45, 55, 70, 85, 90, 110],
      },
    },
    {
      id: 2,
      badge: 'VeriFactu 2026 Preparado',
      title: 'Cumplimiento Fiscal Automatizado',
      desc: 'Facturas firmadas digitalmente con huella inalterable VeriFactu enviadas automáticamente a la AEAT.',
      icon: ShieldCheck,
      preview: {
        title: 'VeriFactu Audit Trail #VF-2026-981',
        status: 'Huella Digital Firmada (eIDAS)',
        amount: 'VERIFICADO OK',
        subtext: 'Hash SHA-256 Inalterable',
        details: [
          { label: 'Hash Criptográfico', val: 'e3b0c44298fc1c149afbf4c8' },
          { label: 'Sede Electrónica AEAT', val: 'Respuesta OK 200' },
          { label: 'Registro Inalterable', val: 'Bloque #14298' },
          { label: 'Timestamp Canónico', val: '2026-07-30T02:44:00Z' },
        ],
        chartData: [100, 100, 100, 100, 100, 100, 100],
      },
    },
    {
      id: 3,
      badge: 'Automatización Multicanal',
      title: 'Cobro Multicanal de Clientes',
      desc: 'Enlaces de cobro por WhatsApp, email y SMS con remesas SEPA directas y autoconciliación.',
      icon: Cpu,
      preview: {
        title: 'Recordatorio WhatsApp Enviado',
        status: 'Cobrado vía Stripe TPV Virtual',
        amount: '€1,850.00',
        subtext: 'Velocidad de Cobro: 0.8 días',
        details: [
          { label: 'Cliente', val: 'Estudio Creativo Barcelona' },
          { label: 'Canal Enviado', val: 'WhatsApp Business API' },
          { label: 'Demora Reducida', val: '-84% Días de Cobro' },
          { label: 'Conciliación Bancaria', val: 'SEPA AUTO-MATCH' },
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
          tagText="Delegación Inteligente"
          title="Cuéntaselo a Avialo. Se encarga del resto."
          description="Describe tu objetivo en lenguaje claro y Avialo ejecuta cada paso automáticamente."
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
