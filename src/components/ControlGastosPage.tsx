import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useLanguage } from '../context/LanguageContext';
import { Navbar } from './Navbar';
import { Footer } from './Footer';
import { APP_URLS } from '../config/urls';
import {
  PieChart,
  Camera,
  Check,
  ArrowRight,
  Scale,
  Sparkles,
  Zap,
  ShieldCheck,
  Clock,
  CheckCircle2,
  Receipt,
  Utensils,
  Fuel,
  Briefcase
} from 'lucide-react';

export const ControlGastosPage: React.FC = () => {
  const { t } = useLanguage();
  const [activeTicket, setActiveTicket] = useState<'restaurant' | 'fuel' | 'office'>('restaurant');
  const [isScanning, setIsScanning] = useState(false);
  const [isScanned, setIsScanned] = useState(false);

  const handleScan = () => {
    setIsScanning(true);
    setIsScanned(false);
    setTimeout(() => {
      setIsScanning(false);
      setIsScanned(true);
    }, 600);
  };

  const ticketData = {
    restaurant: {
      title: 'Restaurante El Retiro S.L.',
      date: 'Hoy, 14:22',
      total: '62,50 €',
      base: '56,82 €',
      iva: '5,68 € (10%)',
      nif: 'B-88392102',
      category: 'Comidas de Empresa (Deducible)',
      icon: Utensils,
      color: 'text-amber-500'
    },
    fuel: {
      title: 'Estación de Servicio Sol S.A.',
      date: 'Ayer, 18:45',
      total: '55,00 €',
      base: '45,45 €',
      iva: '9,55 € (21%)',
      nif: 'A-28991023',
      category: 'Combustible / Vehículo',
      icon: Fuel,
      color: 'text-sky-500'
    },
    office: {
      title: 'Papelería & Tecnologías S.L.',
      date: 'Hace 3 días',
      total: '128,90 €',
      base: '106,53 €',
      iva: '22,37 € (21%)',
      nif: 'B-60192384',
      category: 'Suministros de Oficina',
      icon: Briefcase,
      color: 'text-emerald-500'
    }
  };

  const current = ticketData[activeTicket];

  return (
    <div className="min-h-screen bg-[#FCFCFB] dark:bg-[#080A09] text-[#0A0C0B] dark:text-white font-sans flex flex-col selection:bg-[rgb(52,138,46)]/20 selection:text-[rgb(52,138,46)] dark:selection:bg-[rgb(104,204,88)]/20 dark:selection:text-[rgb(104,204,88)] transition-colors duration-300">
      <Navbar />

      <main className="flex-1 w-full max-w-[1280px] mx-auto px-4 sm:px-6 md:px-8 pt-28 sm:pt-36 lg:pt-44 pb-16 sm:pb-24 overflow-x-hidden">
        
        {/* HERO SECTION - CLEAN MOBILE OCR EXTRAS */}
        <section className="mb-20 sm:mb-28">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
            
            {/* Left Column */}
            <div className="lg:col-span-7 text-left space-y-6 sm:space-y-8">
              <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-[3px] bg-[rgb(52,138,46)]/10 dark:bg-[rgb(104,204,88)]/10 text-[rgb(52,138,46)] dark:text-[rgb(104,204,88)] text-xs sm:text-sm font-semibold tracking-wide uppercase border border-[rgb(52,138,46)]/20 dark:border-[rgb(104,204,88)]/20 shadow-sm">
                <Camera className="size-4 shrink-0" />
                <span>{t('ESCÁNER OCR IA MÓVIL • CERO PICAR DATOS A MANO', 'AI MOBILE OCR SCANNER • ZERO MANUAL DATA ENTRY')}</span>
              </div>

              <h1 className="text-3xl sm:text-5xl lg:text-6xl font-black tracking-tight leading-[1.08] text-[#0A0C0B] dark:text-white">
                {t(
                  'Fotografía tus gastos con el móvil y extrae impuestos con IA al instante',
                  'Snap photos of expenses on mobile and extract taxes with AI instantly'
                )}
              </h1>

              <p className="text-base sm:text-lg lg:text-xl text-[rgba(10,12,11,0.75)] dark:text-white/75 font-medium leading-relaxed max-w-2xl">
                {t(
                  'Olvídate de acumular papeles en el bolsillo, traspasar tickets a mano o cometer errores al calcular el IVA deducible. Nuestro motor OCR con inteligencia artificial lee cualquier ticket o factura de proveedor en 3 segundos desde la cámara de tu teléfono, categorizándolo en automático para tu declaración fiscal.',
                  'Stop accumulating crumpled receipts in your wallet or typing numbers manually. Our advanced AI OCR engine scans any merchant receipt or supplier invoice in 3 seconds directly from your smartphone camera, automating tax category breakdowns instantly.'
                )}
              </p>

              <div className="flex flex-wrap items-center gap-3 sm:gap-4 pt-2">
                <div className="flex items-center gap-2 text-xs sm:text-sm font-bold text-[#0A0C0B] dark:text-white bg-[#E6E6E3]/60 dark:bg-[#232326]/60 px-3.5 py-2 rounded-[6px]">
                  <Check className="size-4 text-[rgb(52,138,46)] dark:text-[rgb(104,204,88)]" />
                  <span>{t('Detección automática de IVA y NIF', 'Automated VAT & Tax ID recognition')}</span>
                </div>
                <div className="flex items-center gap-2 text-xs sm:text-sm font-bold text-[#0A0C0B] dark:text-white bg-[#E6E6E3]/60 dark:bg-[#232326]/60 px-3.5 py-2 rounded-[6px]">
                  <Sparkles className="size-4 text-amber-500" />
                  <span>{t('Clasificación IA por Categorías', 'AI Expense Categorization')}</span>
                </div>
                <div className="flex items-center gap-2 text-xs sm:text-sm font-bold text-[#0A0C0B] dark:text-white bg-[#E6E6E3]/60 dark:bg-[#232326]/60 px-3.5 py-2 rounded-[6px]">
                  <ShieldCheck className="size-4 text-emerald-500" />
                  <span>{t('Válido ante la AEAT 100%', '100% Tax Agency Validated')}</span>
                </div>
              </div>

              <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3.5 pt-4">
                <a
                  href={APP_URLS.register}
                  className="px-8 py-4 rounded-[6px] bg-[rgb(52,138,46)] dark:bg-[rgb(104,204,88)] text-white dark:text-[#0A0C0B] font-bold text-sm sm:text-base hover:opacity-95 shadow-lg hover:shadow-xl hover:scale-[1.01] active:scale-[0.99] transition-all duration-200 flex items-center justify-center gap-2.5 group text-center"
                >
                  <Zap className="size-5 fill-current shrink-0" />
                  <span>{t('Activar Escáner de Gastos Gratis', 'Activate Expense Scanner Free')}</span>
                  <ArrowRight className="size-4 group-hover:translate-x-1 transition-transform" />
                </a>
                <a
                  href="#funcionamiento"
                  className="px-6 py-4 rounded-[6px] bg-[#FCFCFB] dark:bg-[#131517] border border-[#D2D2CE] dark:border-[#303131] hover:border-[#0A0C0B]/40 dark:hover:border-white/40 font-bold text-sm sm:text-base text-[#0A0C0B] dark:text-white transition-all flex items-center justify-center gap-2 text-center"
                >
                  <PieChart className="size-5 text-[rgb(52,138,46)] dark:text-[rgb(104,204,88)] shrink-0" />
                  <span>{t('Ver ventajas contables', 'See accounting benefits')}</span>
                </a>
              </div>
            </div>

            {/* Right Column: Interactive Clean OCR Simulator */}
            <div className="lg:col-span-5">
              <div className="bg-[#FCFCFB] dark:bg-[#080A09] border border-[#D2D2CE] dark:border-[#303131] rounded-[8px] p-6 sm:p-7 shadow-xl relative min-h-[430px] flex flex-col justify-between overflow-hidden text-left">
                
                {/* Top header */}
                <div className="flex items-center justify-between border-b border-[#D2D2CE] dark:border-[#303131] pb-3 text-xs font-mono">
                  <div className="flex items-center gap-2">
                    <span className="w-2 h-2 rounded-full bg-[rgb(52,138,46)] dark:bg-[rgb(104,204,88)] animate-pulse" />
                    <span className="font-extrabold tracking-tight text-[#0A0C0B] dark:text-white uppercase">
                      Escáner OCR • Cámara Móvil
                    </span>
                  </div>
                  <span className="text-[rgba(10,12,11,0.6)] dark:text-white/60">
                    PRECISIÓN IA: 99,9%
                  </span>
                </div>

                <AnimatePresence mode="wait">
                  {isScanned ? (
                    /* RESULTADO EXTRAÍDO POR IA - SUCCESS STATE */
                    <motion.div
                      key="result-state"
                      initial={{ opacity: 0, scale: 0.95 }}
                      animate={{ opacity: 1, scale: 1 }}
                      exit={{ opacity: 0, scale: 0.95 }}
                      transition={{ duration: 0.25, ease: 'easeOut' }}
                      className="my-auto py-3 space-y-4 text-left"
                    >
                      <div className="flex items-center gap-3 bg-[rgb(52,138,46)]/10 dark:bg-[rgb(104,204,88)]/10 border border-[rgb(52,138,46)]/25 dark:border-[rgb(104,204,88)]/25 p-3 rounded-[6px]">
                        <CheckCircle2 className="size-6 text-[rgb(52,138,46)] dark:text-[rgb(104,204,88)] shrink-0 animate-bounce" />
                        <div>
                          <h4 className="font-bold text-xs sm:text-sm text-[#0A0C0B] dark:text-white">¡Gasto Extraído y Contabilizado con IA!</h4>
                          <p className="text-[11px] text-[rgba(10,12,11,0.7)] dark:text-white/70">Asociado automáticamente al Libro de Gastos del Trimestre.</p>
                        </div>
                      </div>

                      <div className="bg-[#F2F2F0] dark:bg-[#131517] p-4 rounded-[6px] border border-[#D2D2CE] dark:border-[#303131] space-y-2.5 text-xs font-mono">
                        <div className="flex justify-between items-center pb-2 border-b border-[#D2D2CE] dark:border-[#303131]">
                          <span className="text-[rgba(10,12,11,0.6)] dark:text-white/60">Comercio:</span>
                          <span className="font-extrabold text-[#0A0C0B] dark:text-white">{current.title}</span>
                        </div>
                        <div className="flex justify-between items-center">
                          <span className="text-[rgba(10,12,11,0.6)] dark:text-white/60">NIF Emisor:</span>
                          <span className="font-bold text-[#0A0C0B] dark:text-white">{current.nif}</span>
                        </div>
                        <div className="flex justify-between items-center">
                          <span className="text-[rgba(10,12,11,0.6)] dark:text-white/60">Base Imponible:</span>
                          <span className="font-bold text-[#0A0C0B] dark:text-white">{current.base}</span>
                        </div>
                        <div className="flex justify-between items-center">
                          <span className="text-[rgba(10,12,11,0.6)] dark:text-white/60">IVA Deducible:</span>
                          <span className="font-bold text-emerald-600 dark:text-emerald-400">{current.iva}</span>
                        </div>
                        <div className="flex justify-between items-center pt-2 border-t border-[#D2D2CE] dark:border-[#303131] font-sans">
                          <span className="text-xs font-extrabold uppercase text-[rgba(10,12,11,0.7)] dark:text-white/70">Categoría Contable:</span>
                          <span className="px-2 py-0.5 rounded-[3px] bg-amber-500/15 text-amber-700 dark:text-amber-300 font-bold text-[10px]">
                            {current.category}
                          </span>
                        </div>
                      </div>

                      <div className="text-center pt-1">
                        <button
                          onClick={() => setIsScanned(false)}
                          className="text-xs font-bold text-[rgba(10,12,11,0.6)] dark:text-white/60 hover:text-[#0A0C0B] dark:hover:text-white underline transition-colors cursor-pointer"
                        >
                          ↩ Escanear otro ticket de prueba
                        </button>
                      </div>
                    </motion.div>
                  ) : (
                    /* ESTADO INITIAL - SELECTOR DE TICKET DE PRUEBA */
                    <motion.div
                      key="select-state"
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      exit={{ opacity: 0 }}
                      transition={{ duration: 0.2 }}
                      className="space-y-4 my-auto py-2"
                    >
                      <span className="text-[11px] font-extrabold text-[rgba(10,12,11,0.6)] dark:text-white/60 uppercase tracking-wider block font-mono">
                        SELECCIONA UN TICKET O GASTO PARA PRUEBA OCR:
                      </span>

                      <div className="space-y-2.5">
                        {(['restaurant', 'fuel', 'office'] as const).map((key) => {
                          const item = ticketData[key];
                          const IconComp = item.icon;
                          const isSelected = activeTicket === key;
                          return (
                            <div
                              key={key}
                              onClick={() => setActiveTicket(key)}
                              className={`p-3.5 rounded-[6px] border transition-all cursor-pointer flex items-center justify-between ${
                                isSelected
                                  ? 'border-[rgb(52,138,46)] dark:border-[rgb(104,204,88)] bg-[rgb(52,138,46)]/10 dark:bg-[rgb(104,204,88)]/10'
                                  : 'border-[#D2D2CE] dark:border-[#303131] hover:border-[#0A0C0B]/40 dark:hover:border-white/40 opacity-75 hover:opacity-100'
                              }`}
                            >
                              <div className="flex items-center gap-3">
                                <IconComp className={`size-5 ${item.color} shrink-0`} />
                                <div>
                                  <h4 className="font-extrabold text-xs sm:text-sm text-[#0A0C0B] dark:text-white">{item.title}</h4>
                                  <p className="text-[11px] text-[rgba(10,12,11,0.6)] dark:text-white/60 font-mono mt-0.5">{item.category}</p>
                                </div>
                              </div>
                              <span className="font-black font-mono text-sm sm:text-base text-[#0A0C0B] dark:text-white">{item.total}</span>
                            </div>
                          );
                        })}
                      </div>

                      <button
                        onClick={handleScan}
                        disabled={isScanning}
                        className="w-full py-3.5 rounded-[6px] font-extrabold text-sm flex items-center justify-center gap-2 transition-all shadow-md bg-[#0A0C0B] text-white dark:bg-white dark:text-[#0A0C0B] hover:opacity-90 active:scale-[0.99] cursor-pointer mt-2"
                      >
                        {isScanning ? (
                          <>
                            <Sparkles className="size-4 animate-spin text-[rgb(104,204,88)]" />
                            <span>Analizando con OCR Inteligente (0.5s)...</span>
                          </>
                        ) : (
                          <>
                            <Camera className="size-4 shrink-0 text-[rgb(104,204,88)]" />
                            <span>Simular Extracción OCR al Instante ({current.total})</span>
                          </>
                        )}
                      </button>
                    </motion.div>
                  )}
                </AnimatePresence>

                {/* Footer del card */}
                <div className="mt-4 pt-3 border-t border-[#D2D2CE] dark:border-[#303131] text-center">
                  <span className="text-[11px] text-[rgba(10,12,11,0.5)] dark:text-white/50 font-medium flex items-center justify-center gap-1.5">
                    <Receipt className="size-3.5 text-[rgb(52,138,46)] dark:text-[rgb(104,204,88)]" />
                    <span>Cero papel • Lectura automática para modelo 303 de IVA</span>
                  </span>
                </div>

              </div>
            </div>

          </div>
        </section>

        {/* VENTAJAS CONTABLES DEL ESCÁNER MÓVIL */}
        <section id="funcionamiento" className="mb-20 sm:mb-28 scroll-mt-28 text-left">
          <div className="max-w-3xl space-y-4 mb-10 sm:mb-14">
            <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-[3px] bg-[rgb(52,138,46)]/10 dark:bg-[rgb(104,204,88)]/10 text-[rgb(52,138,46)] dark:text-[rgb(104,204,88)] text-xs font-bold uppercase tracking-wide">
              <Sparkles className="size-3.5 shrink-0" />
              <span>{t('AUTOMATIZACIÓN FISCAL EN EL MÓVIL', 'MOBILE FISCAL AUTOMATION')}</span>
            </span>
            <h2 className="text-2xl sm:text-4xl lg:text-5xl font-extrabold text-[#0A0C0B] dark:text-white tracking-tight">
              {t(
                'Tu contabilidad de gastos al día sin pisar la oficina ni abrir Excel',
                'Your expense bookkeeping updated automatically without spreadsheets'
              )}
            </h2>
            <p className="text-sm sm:text-base lg:text-lg text-[rgba(10,12,11,0.72)] dark:text-white/70 leading-relaxed">
              {t(
                'El escáner de Avialo está especialmente optimizado para que los autónomos, comerciales y gerentes en movimiento puedan fotografiar un ticket al terminar una comida o en la gasolinera y descartar el papel al instante. La IA ordena y etiqueta el gasto sin intervención humana.',
                'Designed for professionals on the move: take a snapshot right at the restaurant table or gas pump and toss the paper immediately. Our artificial intelligence sorts and categorizes each expense instantly.'
              )}
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="p-6 rounded-[8px] bg-[#FCFCFB] dark:bg-[#131517] border border-[#D2D2CE] dark:border-[#303131] space-y-3 shadow-sm hover:border-[#0A0C0B]/40 dark:hover:border-white/40 transition-all">
              <div className="p-2.5 w-fit rounded-[6px] bg-sky-500/10 text-sky-600 dark:text-sky-400">
                <Clock className="size-6" />
              </div>
              <h3 className="font-extrabold text-lg text-[#0A0C0B] dark:text-white">Ahorra 10 horas cada trimestre</h3>
              <p className="text-xs sm:text-sm text-[rgba(10,12,11,0.7)] dark:text-white/70 leading-relaxed">
                Se acabó pasar un domingo antes del cierre fiscal tecleando cientos de recibos arrugados. Todo se registra en segundos con precisión milimétrica.
              </p>
            </div>

            <div className="p-6 rounded-[8px] bg-[#FCFCFB] dark:bg-[#131517] border border-[#D2D2CE] dark:border-[#303131] space-y-3 shadow-sm hover:border-[#0A0C0B]/40 dark:hover:border-white/40 transition-all">
              <div className="p-2.5 w-fit rounded-[6px] bg-[rgb(52,138,46)]/10 text-[rgb(52,138,46)] dark:text-[rgb(104,204,88)]">
                <ShieldCheck className="size-6" />
              </div>
              <h3 className="font-extrabold text-lg text-[#0A0C0B] dark:text-white">Deducción de IVA sin Errores</h3>
              <p className="text-xs sm:text-sm text-[rgba(10,12,11,0.7)] dark:text-white/70 leading-relaxed">
                El motor OCR discrimina entre facturas simplificadas y completas con tu NIF, asegurando que solo deduzcas lo estrictamente legal ante Hacienda.
              </p>
            </div>

            <div className="p-6 rounded-[8px] bg-[#FCFCFB] dark:bg-[#131517] border border-[#D2D2CE] dark:border-[#303131] space-y-3 shadow-sm hover:border-[#0A0C0B]/40 dark:hover:border-white/40 transition-all">
              <div className="p-2.5 w-fit rounded-[6px] bg-amber-500/10 text-amber-600 dark:text-amber-400">
                <Receipt className="size-6" />
              </div>
              <h3 className="font-extrabold text-lg text-[#0A0C0B] dark:text-white">Conexión con tu Gestor Fiscal</h3>
              <p className="text-xs sm:text-sm text-[rgba(10,12,11,0.7)] dark:text-white/70 leading-relaxed">
                Tu asesoría accede gratis a tu panel de Avialo para descargar en 1 clic los libros contables de gastos junto con la imagen digital oficial de cada recibo.
              </p>
            </div>
          </div>
        </section>

        {/* SOPORTE EN VIVO ESPECIALIZADO EN ESPAÑA */}
        <section className="mb-20 sm:mb-28 text-left">
          <div className="p-6 sm:p-8 rounded-[8px] bg-[rgb(52,138,46)]/5 dark:bg-[rgb(104,204,88)]/5 border border-[rgb(52,138,46)]/30 dark:border-[rgb(104,204,88)]/30 flex flex-col md:flex-row items-start md:items-center gap-6">
            <div className="p-4 rounded-[6px] bg-[rgb(52,138,46)] dark:bg-[rgb(104,204,88)] text-white dark:text-[#0A0C0B] shrink-0 shadow-md">
              <Scale className="size-8" />
            </div>
            <div className="space-y-2 flex-1">
              <h3 className="text-xl sm:text-2xl font-black text-[#0A0C0B] dark:text-white">
                {t('Soporte en Vivo Especializado en España', 'Specialized Live Support in Spain')}
              </h3>
              <p className="text-xs sm:text-sm lg:text-base text-[rgba(10,12,11,0.75)] dark:text-white/75 leading-relaxed">
                {t(
                  '¿No estás seguro de si un gasto de dietas, gasolina o suministros de oficina es deducible para tu actividad? Nuestro equipo de soporte en vivo especializado te asiste directamente en español por chat o teléfono para resolver cualquier duda sobre deducibilidad y cumplimiento legal ante la Agencia Tributaria.',
                  'Not sure if a specific travel or supply expense is tax-deductible? Our specialized live support team in Spain assists you directly in real-time to answer any deduction or regulatory compliance questions.'
                )}
              </p>
            </div>
          </div>
        </section>

        {/* BOTTOM CTA */}
        <section className="bg-[#151816] dark:bg-[#111315] border border-[#303131] rounded-[8px] p-8 sm:p-12 lg:p-14 text-center text-white relative overflow-hidden shadow-2xl">
          <div className="max-w-3xl mx-auto space-y-6 relative z-10">
            <h2 className="text-2xl sm:text-4xl font-extrabold tracking-tight">
              {t(
                'Di adiós al papel y automatiza tus gastos hoy mismo',
                'Say goodbye to paperwork and automate your expense tracking today'
              )}
            </h2>
            <p className="text-xs sm:text-sm lg:text-base text-white/70 leading-relaxed">
              {t(
                'Prueba el escáner OCR con Inteligencia Artificial durante 14 días completamente gratis. Sin tarjeta de crédito ni compromiso de permanencia.',
                'Test our AI-driven OCR receipt scanner for 14 days completely free. No credit card required and zero binding commitments.'
              )}
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-3.5 pt-2">
              <a
                href={APP_URLS.register}
                className="w-full sm:w-auto px-8 py-4 rounded-[6px] bg-[rgb(104,204,88)] text-[#0A0C0B] font-extrabold text-sm sm:text-base hover:opacity-95 transition-all duration-200 flex items-center justify-center gap-2 shadow-lg"
              >
                <Zap className="size-5 fill-current shrink-0" />
                <span>{t('Activar Escáner OCR (14 días gratis)', 'Activate OCR Scanner (14 days free)')}</span>
                <ArrowRight className="size-4" />
              </a>
              <a
                href={APP_URLS.login}
                className="w-full sm:w-auto px-7 py-4 rounded-[6px] bg-white/10 hover:bg-white/15 text-white font-bold text-sm sm:text-base border border-white/20 transition-all flex items-center justify-center gap-2"
              >
                <span>{t('Ya tengo cuenta en Avialo', 'I already have an Avialo account')}</span>
              </a>
            </div>
          </div>
        </section>

      </main>

      <Footer />
    </div>
  );
};
export default ControlGastosPage;
