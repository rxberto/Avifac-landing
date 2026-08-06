import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useLanguage } from '../context/LanguageContext';
import { Navbar } from './Navbar';
import { Footer } from './Footer';
import { APP_URLS } from '../config/urls';
import {
  CreditCard,
  Building2,
  Zap,
  Check,
  ArrowRight,
  Lock,
  Scale,
  Smartphone,
  Percent,
  Shield,
  Clock,
  Award,
  CheckCircle2,
  Sparkles
} from 'lucide-react';

export const IntegracionPagosPage: React.FC = () => {
  const { t } = useLanguage();
  const [activeTab, setActiveTab] = useState<'card' | 'bizum' | 'wallets'>('card');
  const [paymentSuccess, setPaymentSuccess] = useState(false);

  const handleSimulatePayment = () => {
    setPaymentSuccess(true);
  };

  // Bancos y TPVs virtuales compatibles en España y Europa (SIN MENCIONAR COMPETIDORES)
  const banksList = [
    { name: 'BBVA', bg: 'bg-[#004481]', textColor: 'text-white', abbr: 'BBVA', desc: 'TPV Virtual Redsys Compatible' },
    { name: 'Banco Santander', bg: 'bg-[#EC0000]', textColor: 'text-white', abbr: 'SAN', desc: 'Datáfono Web Homologado' },
    { name: 'CaixaBank', bg: 'bg-[#0072CE]', textColor: 'text-yellow-300', abbr: 'CXB', desc: 'TPV Comercio Online Directo' },
    { name: 'Banco Sabadell', bg: 'bg-[#004E98]', textColor: 'text-white', abbr: 'SAB', desc: 'TPV Virtual Redsys Compatible' },
    { name: 'Stripe Global', bg: 'bg-[#635BFF]', textColor: 'text-white font-black', abbr: 'STRP', desc: 'Conexión API Inmediata 1-clic' },
    { name: 'Bankinter', bg: 'bg-[#FF6C00]', textColor: 'text-white', abbr: 'BKT', desc: 'Datáfono Virtual Homologado' },
    { name: 'ING España', bg: 'bg-[#FF6200]', textColor: 'text-white', abbr: 'ING', desc: 'Conexión Pasarela Directa' },
    { name: 'Revolut Business', bg: 'bg-[#111315]', textColor: 'text-fuchsia-400', abbr: 'REV', desc: 'Merchant Accounts Compatible' },
    { name: 'Wise Business', bg: 'bg-[#9FE870]', textColor: 'text-black font-extrabold', abbr: 'WISE', desc: 'Cobros Directos IBAN SEPA' },
    { name: 'Unicaja Banco', bg: 'bg-[#00823F]', textColor: 'text-white', abbr: 'UNI', desc: 'TPV Virtual Redsys Compatible' },
    { name: 'Kutxabank', bg: 'bg-[#D2001A]', textColor: 'text-white', abbr: 'KTX', desc: 'Datáfono Web Homologado' },
    { name: 'Abanca / Ibercaja', bg: 'bg-[#005F9E]', textColor: 'text-white', abbr: 'ABA', desc: 'Pasarelas Redsys Homologadas' },
  ];

  return (
    <div className="min-h-screen bg-[#FCFCFB] dark:bg-[#080A09] text-[#0A0C0B] dark:text-white font-sans flex flex-col selection:bg-[rgb(52,138,46)]/20 selection:text-[rgb(52,138,46)] dark:selection:bg-[rgb(104,204,88)]/20 dark:selection:text-[rgb(104,204,88)] transition-colors duration-300">
      <Navbar />

      <main className="flex-1 w-full max-w-[1280px] mx-auto px-4 sm:px-6 md:px-8 pt-28 sm:pt-36 lg:pt-44 pb-12 sm:pb-16 lg:pb-24 overflow-x-hidden">
        
        {/* HERO SECTION - PASARELA DE TU PASARELA & ULTRA CLEAN UI CHECKOUT */}
        <section className="mb-20 sm:mb-28">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
            
            {/* Left Column: Authentic Value Proposition */}
            <div className="lg:col-span-7 text-left space-y-6 sm:space-y-8">
              <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-[3px] bg-[rgb(52,138,46)]/10 dark:bg-[rgb(104,204,88)]/10 text-[rgb(52,138,46)] dark:text-[rgb(104,204,88)] text-xs sm:text-sm font-semibold tracking-wide uppercase border border-[rgb(52,138,46)]/20 dark:border-[rgb(104,204,88)]/20 shadow-sm">
                <Percent className="size-4 shrink-0" />
                <span>{t('PASARELA DE TU PASARELA • 0% COMISIONES DE AVIALO', 'GATEWAY FOR YOUR GATEWAY • 0% AVIALO FEES')}</span>
              </div>

              <h1 className="text-3xl sm:text-5xl lg:text-6xl font-black tracking-tight leading-[1.08] text-[#0A0C0B] dark:text-white">
                {t(
                  'Cobra en tu Portal de Clientes conectando tu propio Datáfono Virtual o Stripe',
                  'Collect in your Client Portal by connecting your own Virtual POS or Stripe'
                )}
              </h1>

              <p className="text-base sm:text-lg lg:text-xl text-[rgba(10,12,11,0.75)] dark:text-white/75 font-medium leading-relaxed max-w-2xl">
                {t(
                  'Sin mentiras ni intermediarios financieros: Avialo no retiene tus cobros ni intermedia con tu dinero. Funcionamos como la tecnología de pasarela de tu propia pasarela dentro de tu Portal de Clientes. Conecta en 2 minutos tu Datáfono Virtual (TPV Redsys) o tu cuenta de Stripe y permite a tus clientes liquidar facturas en 20 segundos con 0% comisiones por nuestra parte.',
                  'No gimmicks or financial middlemen: Avialo never withholds your collections or mediates with your revenue. We act purely as the ultra-fast interface gateway for your own gateway inside your Client Portal. Connect your Bank Virtual Terminal (Redsys) or Stripe account in 2 minutes and let clients pay in 20 seconds with 0% fees from us.'
                )}
              </p>

              <div className="flex flex-wrap items-center gap-3 sm:gap-4 pt-2">
                <div className="flex items-center gap-2 text-xs sm:text-sm font-bold text-[#0A0C0B] dark:text-white bg-[#E6E6E3]/60 dark:bg-[#232326]/60 px-3.5 py-2 rounded-[6px]">
                  <Check className="size-4 text-[rgb(52,138,46)] dark:text-[rgb(104,204,88)]" />
                  <span>{t('Conexión Directa TPV / Stripe', 'Direct Virtual POS / Stripe Link')}</span>
                </div>
                <div className="flex items-center gap-2 text-xs sm:text-sm font-bold text-[#0A0C0B] dark:text-white bg-[#E6E6E3]/60 dark:bg-[#232326]/60 px-3.5 py-2 rounded-[6px]">
                  <Lock className="size-4 text-sky-500" />
                  <span>{t('Estándar 3D Secure 2.0 / PSD2', '3D Secure 2.0 / PSD2 Standard')}</span>
                </div>
                <div className="flex items-center gap-2 text-xs sm:text-sm font-bold text-[#0A0C0B] dark:text-white bg-[#E6E6E3]/60 dark:bg-[#232326]/60 px-3.5 py-2 rounded-[6px]">
                  <Zap className="size-4 text-amber-500" />
                  <span>{t('0% Comisiones de Plataforma', '0% Platform Fee Markups')}</span>
                </div>
              </div>

              <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3.5 pt-4">
                <a
                  href={APP_URLS.register}
                  className="px-8 py-4 rounded-[6px] bg-[rgb(52,138,46)] dark:bg-[rgb(104,204,88)] text-white dark:text-[#0A0C0B] font-bold text-sm sm:text-base hover:opacity-95 shadow-lg hover:shadow-xl hover:scale-[1.01] active:scale-[0.99] transition-all duration-200 flex items-center justify-center gap-2.5 group text-center"
                >
                  <Zap className="size-5 fill-current shrink-0" />
                  <span>{t('Conectar mi Datáfono / Stripe Gratis', 'Connect My Virtual Terminal / Stripe Free')}</span>
                  <ArrowRight className="size-4 group-hover:translate-x-1 transition-transform" />
                </a>
                <a
                  href="#bancos"
                  className="px-6 py-4 rounded-[6px] bg-[#FCFCFB] dark:bg-[#131517] border border-[#D2D2CE] dark:border-[#303131] hover:border-[#0A0C0B]/40 dark:hover:border-white/40 font-bold text-sm sm:text-base text-[#0A0C0B] dark:text-white transition-all flex items-center justify-center gap-2 text-center"
                >
                  <Building2 className="size-5 text-[rgb(52,138,46)] dark:text-[rgb(104,204,88)] shrink-0" />
                  <span>{t('Ver Bancos y TPVs Compatibles', 'View Supported Banks & POS')}</span>
                </a>
              </div>
            </div>

            {/* Right Column: Ultra Clean, Minimal Client Portal Checkout UI */}
            <div className="lg:col-span-5">
              <div className="bg-[#FCFCFB] dark:bg-[#080A09] border border-[#D2D2CE] dark:border-[#303131] rounded-[8px] p-6 sm:p-7 shadow-xl relative min-h-[430px] flex flex-col justify-between overflow-hidden text-left">
                
                {/* Header Clean */}
                <div className="flex items-center justify-between border-b border-[#D2D2CE] dark:border-[#303131] pb-3 text-xs">
                  <div className="flex items-center gap-2">
                    <span className="w-2 h-2 rounded-full bg-[rgb(52,138,46)] dark:bg-[rgb(104,204,88)] animate-pulse" />
                    <span className="font-extrabold tracking-tight text-[#0A0C0B] dark:text-white uppercase font-mono">
                      Portal de Clientes • Checkout
                    </span>
                  </div>
                  <span className="text-[rgba(10,12,11,0.6)] dark:text-white/60 font-mono">
                    REF: F-2026-0104
                  </span>
                </div>

                <AnimatePresence mode="wait">
                  {paymentSuccess ? (
                    /* PAGO ACEPTADO - PANEL INTERACTIVO DE ÉXITO */
                    <motion.div
                      key="success-state"
                      initial={{ opacity: 0, scale: 0.95 }}
                      animate={{ opacity: 1, scale: 1 }}
                      exit={{ opacity: 0, scale: 0.95 }}
                      transition={{ duration: 0.25, ease: 'easeOut' }}
                      className="my-auto py-4 flex flex-col items-center justify-center text-center space-y-4"
                    >
                      <div className="size-20 rounded-full bg-[rgb(52,138,46)]/15 dark:bg-[rgb(104,204,88)]/15 text-[rgb(52,138,46)] dark:text-[rgb(104,204,88)] flex items-center justify-center shadow-inner border border-[rgb(52,138,46)]/30 dark:border-[rgb(104,204,88)]/30">
                        <CheckCircle2 className="size-11 animate-bounce" />
                      </div>

                      <div className="space-y-1">
                        <span className="px-2.5 py-0.5 rounded-[3px] bg-[rgb(52,138,46)]/15 dark:bg-[rgb(104,204,88)]/20 text-[rgb(52,138,46)] dark:text-[rgb(104,204,88)] font-mono text-[10px] font-extrabold uppercase tracking-widest">
                          ABONADO DIRECTO EN TU TPV
                        </span>
                        <h3 className="text-xl sm:text-2xl font-black text-[#0A0C0B] dark:text-white pt-1">
                          ¡Pago Aceptado al Instante!
                        </h3>
                        <p className="text-xs sm:text-sm text-[rgba(10,12,11,0.7)] dark:text-white/70 font-medium max-w-xs mx-auto">
                          Los <strong className="text-[#0A0C0B] dark:text-white font-mono">890,00 €</strong> se han ingresado directamente en tu cuenta de banco / Stripe.
                        </p>
                      </div>

                      <div className="w-full bg-[#F2F2F0] dark:bg-[#131517] rounded-[6px] p-3.5 border border-[#D2D2CE] dark:border-[#303131] text-left space-y-2 text-xs font-mono">
                        <div className="flex justify-between items-center">
                          <span className="text-[rgba(10,12,11,0.6)] dark:text-white/60">Conciliación Avialo:</span>
                          <span className="font-extrabold text-emerald-600 dark:text-emerald-400 flex items-center gap-1">
                            <Check className="size-3.5" /> FACTURA COBRADA
                          </span>
                        </div>
                        <div className="flex justify-between items-center">
                          <span className="text-[rgba(10,12,11,0.6)] dark:text-white/60">Comisión por cobro Avialo:</span>
                          <span className="font-extrabold text-[#0A0C0B] dark:text-white">0,00 € (0%)</span>
                        </div>
                      </div>

                      <button
                        onClick={() => setPaymentSuccess(false)}
                        className="text-xs font-bold text-[rgba(10,12,11,0.6)] dark:text-white/60 hover:text-[#0A0C0B] dark:hover:text-white underline pt-1 transition-colors cursor-pointer"
                      >
                        ↩ Reiniciar demostración de cobro
                      </button>
                    </motion.div>
                  ) : (
                    /* ESTADO INITIAL - FORMULARIO LIMPIO Y ELEGANTE */
                    <motion.div
                      key="form-state"
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      exit={{ opacity: 0 }}
                      transition={{ duration: 0.2 }}
                      className="space-y-5 my-auto py-2"
                    >
                      {/* Resumen Factura Minimal */}
                      <div className="flex justify-between items-center pt-2">
                        <div>
                          <h4 className="font-bold text-sm text-[#0A0C0B] dark:text-white">Servicios de Arquitectura S.L.</h4>
                          <p className="text-xs text-[rgba(10,12,11,0.6)] dark:text-white/60">Vencimiento: Hoy • Emisor VeriFactu</p>
                        </div>
                        <div className="text-right">
                          <span className="text-2xl font-black font-mono text-[#0A0C0B] dark:text-white">890,00 €</span>
                        </div>
                      </div>

                      {/* Selector de Método Ultra Clean */}
                      <div className="space-y-2.5">
                        <span className="text-[11px] font-extrabold text-[rgba(10,12,11,0.6)] dark:text-white/60 uppercase tracking-wider block font-mono">
                          SELECCIONA TU MÉTODO DE PAGO RÁPIDO:
                        </span>
                        
                        <div className="grid grid-cols-3 gap-2">
                          <button
                            onClick={() => setActiveTab('card')}
                            className={`p-3 rounded-[6px] border text-center transition-all cursor-pointer flex flex-col items-center justify-center gap-1 ${
                              activeTab === 'card'
                                ? 'border-[rgb(52,138,46)] dark:border-[rgb(104,204,88)] bg-[rgb(52,138,46)]/10 dark:bg-[rgb(104,204,88)]/10 font-bold text-[#0A0C0B] dark:text-white'
                                : 'border-[#D2D2CE] dark:border-[#303131] hover:border-[#0A0C0B]/40 dark:hover:border-white/40 opacity-70 hover:opacity-100'
                            }`}
                          >
                            <CreditCard className="size-4" />
                            <span className="text-[11px]">Tarjeta (TPV)</span>
                          </button>

                          <button
                            onClick={() => setActiveTab('bizum')}
                            className={`p-3 rounded-[6px] border text-center transition-all cursor-pointer flex flex-col items-center justify-center gap-1 ${
                              activeTab === 'bizum'
                                ? 'border-[rgb(52,138,46)] dark:border-[rgb(104,204,88)] bg-[rgb(52,138,46)]/10 dark:bg-[rgb(104,204,88)]/10 font-bold text-[#0A0C0B] dark:text-white'
                                : 'border-[#D2D2CE] dark:border-[#303131] hover:border-[#0A0C0B]/40 dark:hover:border-white/40 opacity-70 hover:opacity-100'
                            }`}
                          >
                            <Smartphone className="size-4 text-sky-500" />
                            <span className="text-[11px]">Bizum Rápido</span>
                          </button>

                          <button
                            onClick={() => setActiveTab('wallets')}
                            className={`p-3 rounded-[6px] border text-center transition-all cursor-pointer flex flex-col items-center justify-center gap-1 ${
                              activeTab === 'wallets'
                                ? 'border-[rgb(52,138,46)] dark:border-[rgb(104,204,88)] bg-[rgb(52,138,46)]/10 dark:bg-[rgb(104,204,88)]/10 font-bold text-[#0A0C0B] dark:text-white'
                                : 'border-[#D2D2CE] dark:border-[#303131] hover:border-[#0A0C0B]/40 dark:hover:border-white/40 opacity-70 hover:opacity-100'
                            }`}
                          >
                            <Sparkles className="size-4 text-amber-500" />
                            <span className="text-[11px]">Apple / Stripe</span>
                          </button>
                        </div>
                      </div>

                      {/* Display Limpio y Minimal según el método */}
                      <div className="p-3.5 rounded-[6px] bg-[#F2F2F0] dark:bg-[#131517] border border-[#D2D2CE] dark:border-[#303131] flex items-center justify-between text-xs font-mono">
                        {activeTab === 'card' && (
                          <>
                            <span className="text-[#0A0C0B] dark:text-white">4901 •••• •••• 8892 (3D Secure 2.0)</span>
                            <span className="text-[10px] font-bold text-[rgb(52,138,46)] dark:text-[rgb(104,204,88)] uppercase">DATÁFONO VIRTUAL</span>
                          </>
                        )}
                        {activeTab === 'bizum' && (
                          <>
                            <span className="text-[#0A0C0B] dark:text-white">Móvil Bizum: +34 682 ••• •91</span>
                            <span className="text-[10px] font-bold text-sky-500 uppercase">INMEDIATO</span>
                          </>
                        )}
                        {activeTab === 'wallets' && (
                          <>
                            <span className="text-[#0A0C0B] dark:text-white">Apple Pay / Google Pay / PayPal</span>
                            <span className="text-[10px] font-bold text-amber-500 uppercase">STRIPE CONECTADO</span>
                          </>
                        )}
                      </div>

                      {/* Botón de Acción Limpio */}
                      <button
                        onClick={handleSimulatePayment}
                        className="w-full py-3.5 rounded-[6px] font-extrabold text-sm flex items-center justify-center gap-2 transition-all shadow-md bg-[#0A0C0B] text-white dark:bg-white dark:text-[#0A0C0B] hover:opacity-90 active:scale-[0.99] cursor-pointer mt-2"
                      >
                        <Lock className="size-4 shrink-0" />
                        <span>Simular Cobro Ahora (890,00 €)</span>
                      </button>
                    </motion.div>
                  )}
                </AnimatePresence>

                {/* Footer del card */}
                <div className="mt-4 pt-3 border-t border-[#D2D2CE] dark:border-[#303131] text-center">
                  <span className="text-[11px] text-[rgba(10,12,11,0.5)] dark:text-white/50 font-medium flex items-center justify-center gap-1.5">
                    <Shield className="size-3.5 text-[rgb(52,138,46)] dark:text-[rgb(104,204,88)]" />
                    <span>Conectas tu Datáfono / Stripe • 0% comisiones por Avialo</span>
                  </span>
                </div>

              </div>
            </div>

          </div>
        </section>

        {/* EL COMPROMISO DE REALIDAD OPERATIVA Y 0% COMISIONES */}
        <section className="mb-20 sm:mb-28">
          <div className="bg-gradient-to-r from-[rgb(52,138,46)] to-emerald-700 dark:from-[rgb(104,204,88)] dark:to-emerald-600 text-white dark:text-[#0A0C0B] rounded-[8px] p-6 sm:p-10 lg:p-14 shadow-2xl text-left relative overflow-hidden">
            <div className="max-w-3xl relative z-10 space-y-4 sm:space-y-6">
              <span className="px-3 py-1 rounded-[3px] bg-black/20 text-white font-mono font-bold text-xs uppercase tracking-widest inline-block">
                {t('REALIDAD OPERATIVA Y TRANSPARENCIA', 'OPERATIONAL REALITY & TRANSPARENCY')}
              </span>
              <h2 className="text-3xl sm:text-5xl font-black tracking-tight leading-tight">
                {t('Hacemos de pasarela para tu pasarela: Nunca intermediamos con tu dinero', 'We act as the software interface for your gateway: Zero fund holding or meddling')}
              </h2>
              <p className="text-sm sm:text-base lg:text-lg font-medium opacity-95 leading-relaxed">
                {t(
                  'A diferencia de otras plataformas que se proclaman intermediarias financieras para cobrarte porcentajes en cada transacción o tardan días en soltar tus fondos, la filosofía de Avialo es transparente: tú conectas el Datáfono Virtual (TPV Redsys) de tu banco o tu cuenta de Stripe. Nosotros aportamos la interfaz de cobro ultra rápida en tu Portal de Clientes. Toda la operación ocurre entre tu cliente y tu entidad bancaria sin retenciones ni comisiones por nuestra parte.',
                  'Unlike softwares that act as billing middlemen just to surcharge percentages or delay payouts, Avialo remains simple and honest: you plug in your commercial Bank POS (Redsys) or Stripe API keys. We provide the frictionless checkout UI inside your Client Portal. All funds process directly between your customer and your bank with 0% platform cuts.'
                )}
              </p>
              <div className="pt-2 flex items-center gap-6">
                <div>
                  <span className="text-3xl sm:text-5xl font-extrabold block font-mono">0,0%</span>
                  <span className="text-xs sm:text-sm font-bold opacity-90 uppercase">Comisión por cobro en Avialo</span>
                </div>
                <div className="h-12 w-0.5 bg-black/20" />
                <div>
                  <span className="text-3xl sm:text-5xl font-extrabold block font-mono">100%</span>
                  <span className="text-xs sm:text-sm font-bold opacity-90 uppercase">Ingresado en tu TPV / Stripe</span>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ECOSYSTEM OF REAL BANKS & STRIPE FOR VIRTUAL POS CONNECTION */}
        <section id="bancos" className="mb-20 sm:mb-28 scroll-mt-28 text-left">
          <div className="max-w-3xl space-y-4 mb-10 sm:mb-14">
            <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-[3px] bg-[rgb(52,138,46)]/10 dark:bg-[rgb(104,204,88)]/10 text-[rgb(52,138,46)] dark:text-[rgb(104,204,88)] text-xs font-bold uppercase tracking-wide">
              <Building2 className="size-3.5 shrink-0" />
              <span>{t('DATÁFONOS VIRTUALES Y PASARELAS HOMOLOGADAS', 'VIRTUAL POS TERMINALS & REGULATED GATEWAYS')}</span>
            </span>
            <h2 className="text-2xl sm:text-4xl lg:text-5xl font-extrabold text-[#0A0C0B] dark:text-white tracking-tight">
              {t(
                'Compatible con el Datáfono Virtual (TPV Redsys) de tu banco principal o con Stripe',
                'Compatible with the Virtual POS (Redsys) of your commercial bank or Stripe'
              )}
            </h2>
            <p className="text-sm sm:text-base lg:text-lg text-[rgba(10,12,11,0.72)] dark:text-white/70 leading-relaxed">
              {t(
                '¿Tienes una cuenta empresa o de autónomo? Solicita a tu banco habitual (BBVA, Banco Santander, CaixaBank, Sabadell, Bankinter, Unicaja...) tu Datáfono Virtual web para e-commerce o utiliza tu cuenta de Stripe. Enlázala con Avialo en 2 minutos para que tu Portal de Clientes pueda procesar pagos de forma nativa e instantánea.',
                'Have a business or freelancer bank account? Request an e-commerce Virtual POS from your bank (BBVA, Santander, CaixaBank, Sabadell...) or simply connect your Stripe API keys. Integrate in 2 minutes so your Client Portal collects payments seamlessly.'
              )}
            </p>
          </div>

          {/* Grid de Logos y Colores Corporativos de Bancos y TPVs */}
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4 sm:gap-6">
            {banksList.map((bank, idx) => (
              <div
                key={idx}
                className="bg-[#FCFCFB] dark:bg-[#131517] border border-[#D2D2CE] dark:border-[#303131] rounded-[8px] p-4 sm:p-5 hover:border-[#0A0C0B]/40 dark:hover:border-white/40 hover:shadow-lg hover:-translate-y-0.5 transition-all duration-200 flex flex-col justify-between group"
              >
                <div className="space-y-3">
                  <div className="flex items-center justify-between">
                    <div className={`px-3 py-1.5 rounded-[4px] font-black font-mono text-xs shadow-sm ${bank.bg} ${bank.textColor} tracking-wider`}>
                      {bank.abbr}
                    </div>
                    <span className="w-2 h-2 rounded-full bg-emerald-500" title="TPV / Datáfono Compatible" />
                  </div>
                  
                  <h3 className="font-bold text-base sm:text-lg text-[#0A0C0B] dark:text-white group-hover:text-[rgb(52,138,46)] dark:group-hover:text-[rgb(104,204,88)] transition-colors">
                    {bank.name}
                  </h3>
                </div>

                <div className="pt-3 mt-3 border-t border-[#D2D2CE] dark:border-[#303131] text-[11px] text-[rgba(10,12,11,0.6)] dark:text-white/60 font-semibold flex items-center gap-1.5">
                  <Check className="size-3.5 text-emerald-500 shrink-0" />
                  <span>{bank.desc}</span>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-8 p-4 sm:p-5 rounded-[8px] bg-[#E6E6E3]/50 dark:bg-[#232326]/50 border border-[#D2D2CE] dark:border-[#303131] flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
            <div className="flex items-center gap-3">
              <Shield className="size-6 text-[rgb(52,138,46)] dark:text-[rgb(104,204,88)] shrink-0" />
              <div className="text-xs sm:text-sm">
                <strong className="text-[#0A0C0B] dark:text-white block">¿Tienes dudas sobre cómo conectar el Datáfono Virtual de tu banco?</strong>
                <span className="text-[rgba(10,12,11,0.7)] dark:text-white/70">Es tan sencillo como introducir tu código de comercio Redsys, terminal y clave secreta SIS o tus claves API de Stripe en tu panel de ajustes.</span>
              </div>
            </div>
            <a
              href={APP_URLS.register}
              className="px-5 py-2.5 rounded-[6px] bg-[#0A0C0B] text-white dark:bg-white dark:text-[#0A0C0B] font-bold text-xs sm:text-sm whitespace-nowrap hover:opacity-90 transition-opacity"
            >
              Conectar mi TPV / Stripe
            </a>
          </div>
        </section>

        {/* EL PORTAL DE CLIENTES EXPLICADO: ULTRA SIMPLE, SEGURO Y SIN INTERMEDIACIÓN */}
        <section className="mb-20 sm:mb-28 text-left">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-14 items-center">
            <div className="space-y-6">
              <span className="px-2.5 py-1 rounded-[3px] bg-[rgb(52,138,46)]/10 dark:bg-[rgb(104,204,88)]/10 text-[rgb(52,138,46)] dark:text-[rgb(104,204,88)] font-bold text-xs uppercase tracking-wider inline-block">
                {t('EXPERIENCIA DE USUARIO INMEJORABLE', 'UNBEATABLE USER EXPERIENCE')}
              </span>
              <h2 className="text-2xl sm:text-4xl font-extrabold text-[#0A0C0B] dark:text-white tracking-tight leading-tight">
                {t(
                  'El Portal de Clientes transforma tus facturas en una experiencia de cobro inmediata',
                  'The Client Portal turns your invoices into an instantaneous payment experience'
                )}
              </h2>
              <p className="text-sm sm:text-base text-[rgba(10,12,11,0.72)] dark:text-white/70 leading-relaxed">
                {t(
                  'Olvídate de enviar PDF fríos por correo y esperar semanas una transferencia. Al emitir una factura en Avialo, el cliente hace clic en el botón "Pagar Ahora", que abre tu Portal de Clientes seguro. Desde allí elige pagar con su Tarjeta (procesada por tu Datáfono o Stripe), Bizum o PayPal, acelerando en un 65% tus cobros.',
                  'Forget cold static PDFs and weeks waiting for bank transfers. When invoicing in Avialo, clients click "Pay Now", launching your secure Client Portal. They settle via Card (processed directly through your POS or Stripe), Bizum, or PayPal, cutting collection cycles by 65%.'
                )}
              </p>

              <div className="space-y-4 pt-2">
                <div className="flex items-start gap-3.5 p-4 rounded-[8px] bg-[#FCFCFB] dark:bg-[#131517] border border-[#D2D2CE] dark:border-[#303131]">
                  <div className="p-2 rounded-[6px] bg-[rgb(52,138,46)]/10 text-[rgb(52,138,46)] dark:text-[rgb(104,204,88)] shrink-0">
                    <Clock className="size-5" />
                  </div>
                  <div>
                    <h4 className="font-extrabold text-sm sm:text-base text-[#0A0C0B] dark:text-white">
                      {t('Sin Contraseñas ni Registros para tu Cliente', 'No Passwords or Registrations for your Client')}
                    </h4>
                    <p className="text-xs sm:text-sm text-[rgba(10,12,11,0.7)] dark:text-white/70 mt-0.5">
                      {t(
                        'El enlace seguro y cifrado abre directamente la factura y los métodos de pago de tu comercio. Una experiencia tan fluida y directa como pagar en un comercio electrónico moderno.',
                        'Signed encrypted links open directly to the invoice and your merchant payment methods, offering a seamless checkout experience.'
                      )}
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-3.5 p-4 rounded-[8px] bg-[#FCFCFB] dark:bg-[#131517] border border-[#D2D2CE] dark:border-[#303131]">
                  <div className="p-2 rounded-[6px] bg-[rgb(52,138,46)]/10 text-[rgb(52,138,46)] dark:text-[rgb(104,204,88)] shrink-0">
                    <Award className="size-5" />
                  </div>
                  <div>
                    <h4 className="font-extrabold text-sm sm:text-base text-[#0A0C0B] dark:text-white">
                      {t('Conciliación Automática en Tiempo Real', 'Automated Real-Time Reconciliation')}
                    </h4>
                    <p className="text-xs sm:text-sm text-[rgba(10,12,11,0.7)] dark:text-white/70 mt-0.5">
                      {t(
                        'En cuanto tu Datáfono Virtual (Redsys) o Stripe confirma el cobro, Avialo marca la factura en verde de forma automática. Adiós a puntear extractos y descargar ficheros manuales.',
                        'The second your Virtual POS or Stripe signals successful payment, Avialo stamps the invoice paid in green immediately.'
                      )}
                    </p>
                  </div>
                </div>
              </div>

              {/* MANDATORY SPECIALIZED SUPPORT SECTION */}
              <div className="p-4 sm:p-5 rounded-[8px] bg-[rgb(52,138,46)]/5 dark:bg-[rgb(104,204,88)]/5 border border-[rgb(52,138,46)]/30 dark:border-[rgb(104,204,88)]/30 flex items-center gap-4">
                <div className="p-3 rounded-[6px] bg-[rgb(52,138,46)] dark:bg-[rgb(104,204,88)] text-white dark:text-[#0A0C0B] shrink-0 shadow-sm">
                  <Scale className="size-6" />
                </div>
                <div>
                  <h4 className="text-sm sm:text-base font-extrabold text-[#0A0C0B] dark:text-white">
                    {t('Soporte en Vivo Especializado', 'Specialized Live Support')}
                  </h4>
                  <p className="text-xs text-[rgba(10,12,11,0.72)] dark:text-white/70 mt-0.5">
                    {t(
                      '¿Es la primera vez que configuras tu Datáfono Virtual con Redsys o enlázas Stripe? Nuestro equipo de soporte técnico y tributario te acompaña en directo por chat para dejar tu pasarela operando a la primera sin errores de configuración.',
                      'First time integrating your Bank Virtual POS or Stripe? Our live chat support team guides you step-by-step to get your merchant checkout running flawlessly on day one.'
                    )}
                  </p>
                </div>
              </div>
            </div>

            {/* Visual Step-by-Step Payment Journey */}
            <div className="bg-[#151816] dark:bg-[#111315] border border-[#303131] rounded-[8px] p-6 sm:p-8 md:p-10 text-white shadow-xl space-y-8">
              <h3 className="text-lg sm:text-xl font-black border-b border-white/10 pb-3">
                {t('Cómo funciona la pasarela de tu pasarela (3 pasos):', 'How our gateway-to-your-gateway works (3 steps):')}
              </h3>

              <div className="space-y-6 relative before:absolute before:left-4 before:top-4 before:bottom-4 before:w-0.5 before:bg-[rgb(104,204,88)]/30">
                <div className="flex items-start gap-4 relative">
                  <div className="w-8 h-8 rounded-full bg-[rgb(104,204,88)] text-[#0A0C0B] font-black flex items-center justify-center text-sm shrink-0 shadow-md">
                    1
                  </div>
                  <div className="space-y-1">
                    <h4 className="font-bold text-sm sm:text-base text-white">Conecta tu TPV Virtual bancario o Stripe</h4>
                    <p className="text-xs sm:text-sm text-white/70">
                      En tus ajustes de Avialo, pegas las credenciales de tu Datáfono Virtual (Redsys de BBVA, Santander, CaixaBank, Sabadell...) o tus claves API de Stripe.
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4 relative">
                  <div className="w-8 h-8 rounded-full bg-[rgb(104,204,88)] text-[#0A0C0B] font-black flex items-center justify-center text-sm shrink-0 shadow-md">
                    2
                  </div>
                  <div className="space-y-1">
                    <h4 className="font-bold text-sm sm:text-base text-white">El cliente paga en 1 clic desde su Portal</h4>
                    <p className="text-xs sm:text-sm text-white/70">
                      Al recibir tu factura por email o SMS, abre su Portal de Clientes exclusivo y abona con Tarjeta, Bizum o PayPal bajo la máxima seguridad 3D Secure 2.0.
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4 relative">
                  <div className="w-8 h-8 rounded-full bg-[rgb(104,204,88)] text-[#0A0C0B] font-black flex items-center justify-center text-sm shrink-0 shadow-md">
                    3
                  </div>
                  <div className="space-y-1">
                    <h4 className="font-bold text-sm sm:text-base text-white">El dinero entra en tu banco sin comisiones</h4>
                    <p className="text-xs sm:text-sm text-white/70">
                      El 100% de los fondos aterriza en tu cuenta mercantil bancaria de inmediato sin recargos de Avialo. La factura se concilia al segundo de forma automática.
                    </p>
                  </div>
                </div>
              </div>

              <div className="p-4 rounded-[6px] bg-white/5 border border-white/10 text-center text-xs text-white/80">
                ⚡ Cero retenciones financieras: Tú eres el único dueño de tus flujos de caja y de tus fondos
              </div>
            </div>
          </div>
        </section>

        {/* BOTTOM CTA */}
        <section className="bg-[#151816] dark:bg-[#111315] border border-[#303131] rounded-[8px] p-8 sm:p-12 lg:p-14 text-center text-white relative overflow-hidden shadow-2xl">
          <div className="max-w-3xl mx-auto space-y-6 relative z-10">
            <h2 className="text-2xl sm:text-4xl font-extrabold tracking-tight">
              {t(
                'Conecta hoy mismo tu Datáfono Virtual o Stripe y empieza a cobrar al momento',
                'Connect your Bank Virtual POS or Stripe today and start collecting payments instantly'
              )}
            </h2>
            <p className="text-xs sm:text-sm lg:text-base text-white/70 leading-relaxed">
              {t(
                'Activa tu Portal de Clientes y prueba todas las funcionalidades durante 30 días completamente gratis. Sin compromiso de permanencia ni tarjeta de crédito.',
                'Activate your Client Portal and evaluate all merchant checkout capabilities for 30 days completely free. No binding commitments or credit card required.'
              )}
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-3.5 pt-2">
              <a
                href={APP_URLS.register}
                className="w-full sm:w-auto px-8 py-4 rounded-[6px] bg-[rgb(104,204,88)] text-[#0A0C0B] font-extrabold text-sm sm:text-base hover:opacity-95 transition-all duration-200 flex items-center justify-center gap-2 shadow-lg"
              >
                <Zap className="size-5 fill-current shrink-0" />
                <span>{t('Activar Portal y Cobros (30 días gratis)', 'Activate Portal & Payments (30 days free)')}</span>
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
export default IntegracionPagosPage;
