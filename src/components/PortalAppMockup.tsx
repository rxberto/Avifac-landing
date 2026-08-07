import React, { useEffect, useLayoutEffect, useRef, useState } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import {
  LayoutGrid,
  FileText,
  History,
  LogOut,
  Download,
  MessageSquare,
  Send,
  ArrowLeft,
  Lock,
  Check,
  ShieldCheck,
  Mail,
  ExternalLink,
  CreditCard,
  Zap,
  Building2
} from 'lucide-react';

gsap.registerPlugin(ScrollTrigger);

/**
 * Réplica fiel del Portal del Cliente real de Avialo (sidebar + dashboard + detalle
 * de factura + chat), animada íntegramente con GSAP:
 *  - Entrada 3D del panel con ScrollTrigger
 *  - Transición cruzada entre vistas + barrido de luz (sheen)
 *  - Stagger de filas, contadores numéricos animados
 *  - Indicador de navegación lateral que se desplaza con easing
 *  - Timeline de confirmación de pago
 */

interface PortalAppMockupProps {
  /** 0 = acceso por enlace · 1 = inicio · 2 = factura/pago · 3 = chat */
  view: number;
  onViewChange: (view: number) => void;
  t: (es: string, en: string) => string;
}

const ISSUER = 'Tech Solutions Madrid S.L.';
const CLIENT = 'Innovaciones Digitales S.L.';
const INVOICE = 'FA-2027-0089';

/** Respeta la preferencia de sistema de movimiento reducido */
const prefersReducedMotion = () =>
  typeof window !== 'undefined' && window.matchMedia('(prefers-reduced-motion: reduce)').matches;

const euro = (n: number) =>
  `${n.toLocaleString('es-ES', { minimumFractionDigits: 2, maximumFractionDigits: 2 })} €`;

/** Contador numérico animado con GSAP */
const AnimatedValue: React.FC<{
  value: number;
  format: (n: number) => string;
  className?: string;
  delay?: number;
}> = ({ value, format, className, delay = 0.2 }) => {
  const ref = useRef<HTMLSpanElement>(null);
  // El formateador se guarda en una ref para que un callback inline no reinicie el contador
  const formatRef = useRef(format);
  formatRef.current = format;
  const delayRef = useRef(delay);
  delayRef.current = delay;

  useLayoutEffect(() => {
    const el = ref.current;
    if (!el) return;
    if (prefersReducedMotion()) {
      el.textContent = formatRef.current(value);
      return;
    }
    const counter = { v: 0 };
    const tween = gsap.to(counter, {
      v: value,
      duration: 1.1,
      delay: delayRef.current,
      ease: 'power2.out',
      onUpdate: () => {
        el.textContent = formatRef.current(counter.v);
      }
    });
    return () => {
      tween.kill();
    };
  }, [value]);

  return (
    <span ref={ref} className={className}>
      {format(0)}
    </span>
  );
};

export const PortalAppMockup: React.FC<PortalAppMockupProps> = ({ view, onViewChange, t }) => {
  const [renderedView, setRenderedView] = useState<number>(view);
  const [isPaid, setIsPaid] = useState<boolean>(false);
  const [chatInput, setChatInput] = useState<string>('');
  const [isTyping, setIsTyping] = useState<boolean>(false);
  const [messages, setMessages] = useState<Array<{ sender: 'client' | 'issuer'; text: string; time: string }>>([
    {
      sender: 'client',
      text: '¿Podéis desglosar la partida de soporte adicional para nuestro gestor fiscal?',
      time: '10:14'
    },
    {
      sender: 'issuer',
      text: 'Claro: son 5 horas de soporte fuera de contrato. Ya lo hemos detallado en el concepto y la factura sigue firmada bajo VeriFactu.',
      time: '10:18'
    }
  ]);

  const shellRef = useRef<HTMLDivElement>(null);
  const stageRef = useRef<HTMLDivElement>(null);
  const sheenRef = useRef<HTMLDivElement>(null);
  const sidebarRef = useRef<HTMLElement>(null);
  const indicatorRef = useRef<HTMLDivElement>(null);
  const navRefs = useRef<(HTMLButtonElement | null)[]>([]);
  const paidRef = useRef<HTMLDivElement>(null);
  const typingRef = useRef<HTMLDivElement>(null);
  const pendingView = useRef<number>(view);

  /* ---------- Entrada 3D del panel al hacer scroll ---------- */
  useLayoutEffect(() => {
    const el = shellRef.current;
    if (!el || prefersReducedMotion()) return;
    const ctx = gsap.context(() => {
      gsap.from(el, {
        opacity: 0,
        y: 56,
        scale: 0.96,
        rotateX: 8,
        duration: 1.1,
        ease: 'power3.out',
        clearProps: 'transform',
        scrollTrigger: { trigger: el, start: 'top 88%', once: true }
      });
    }, el);
    return () => ctx.revert();
  }, []);

  /* ---------- Salida de la vista actual antes de cambiar ---------- */
  useEffect(() => {
    if (view === pendingView.current) return;
    pendingView.current = view;
    const el = stageRef.current;
    if (!el || prefersReducedMotion()) {
      setRenderedView(view);
      return;
    }
    gsap.killTweensOf(el);
    gsap.to(el, {
      opacity: 0,
      y: -10,
      duration: 0.16,
      ease: 'power2.in',
      onComplete: () => setRenderedView(view)
    });
  }, [view]);

  /* ---------- Entrada de la nueva vista + stagger de filas + sheen ---------- */
  useLayoutEffect(() => {
    const el = stageRef.current;
    if (!el) return;

    gsap.killTweensOf(el);
    if (prefersReducedMotion()) {
      gsap.set(el, { opacity: 1, y: 0 });
      return;
    }
    gsap.set(el, { opacity: 0, y: 10 });

    const rows = el.querySelectorAll('[data-anim="row"]');
    const tl = gsap.timeline();
    tl.to(el, { opacity: 1, y: 0, duration: 0.32, ease: 'power2.out' });
    if (rows.length) {
      tl.fromTo(
        rows,
        { opacity: 0, y: 16 },
        { opacity: 1, y: 0, duration: 0.5, stagger: 0.055, ease: 'power3.out', clearProps: 'transform' },
        0.06
      );
    }

    let sheen: gsap.core.Tween | undefined;
    if (sheenRef.current) {
      sheen = gsap.fromTo(
        sheenRef.current,
        { xPercent: -130, opacity: 0 },
        { xPercent: 240, opacity: 1, duration: 1.15, ease: 'power2.inOut' }
      );
    }

    return () => {
      tl.kill();
      sheen?.kill();
    };
  }, [renderedView]);

  /* ---------- Barra lateral: desenfoque hasta autenticarse ---------- */
  useLayoutEffect(() => {
    const el = sidebarRef.current;
    if (!el) return;
    gsap.to(el, {
      opacity: view === 0 ? 0.35 : 1,
      filter: view === 0 ? 'blur(2px)' : 'blur(0px)',
      duration: 0.55,
      ease: 'power2.out'
    });
  }, [view]);

  /* ---------- Indicador de navegación deslizante ---------- */
  useLayoutEffect(() => {
    const idx = view <= 1 ? 0 : 1;
    const item = navRefs.current[idx];
    const indicator = indicatorRef.current;
    if (!item || !indicator) return;
    gsap.to(indicator, {
      y: item.offsetTop,
      height: item.offsetHeight,
      opacity: view === 0 ? 0 : 1,
      duration: 0.45,
      ease: 'power3.out'
    });
  }, [view, renderedView]);

  /* ---------- Timeline de pago confirmado ---------- */
  useLayoutEffect(() => {
    if (!isPaid || !paidRef.current) return;
    const ctx = gsap.context(() => {
      const tl = gsap.timeline();
      tl.fromTo('[data-paid="badge"]', { scale: 0, rotate: -35 }, { scale: 1, rotate: 0, duration: 0.6, ease: 'back.out(2.2)' })
        .fromTo('[data-paid="ring"]', { scale: 0.6, opacity: 0.6 }, { scale: 1.9, opacity: 0, duration: 1, ease: 'power2.out' }, 0.1)
        .fromTo('[data-paid="line"]', { opacity: 0, y: 12 }, { opacity: 1, y: 0, duration: 0.45, stagger: 0.08, ease: 'power3.out' }, 0.2);
    }, paidRef);
    return () => ctx.revert();
  }, [isPaid]);

  /* ---------- Puntos de "escribiendo…" ---------- */
  useLayoutEffect(() => {
    if (!isTyping || !typingRef.current) return;
    const ctx = gsap.context(() => {
      gsap.to('[data-typing="dot"]', {
        y: -4,
        duration: 0.35,
        repeat: -1,
        yoyo: true,
        stagger: 0.12,
        ease: 'sine.inOut'
      });
    }, typingRef);
    return () => ctx.revert();
  }, [isTyping]);

  const handlePay = () => {
    setIsPaid(true);
    window.setTimeout(() => setIsPaid(false), 9000);
  };

  const handleSend = (e: React.FormEvent) => {
    e.preventDefault();
    if (!chatInput.trim()) return;
    setMessages((prev) => [...prev, { sender: 'client', text: chatInput, time: 'Ahora' }]);
    setChatInput('');
    setIsTyping(true);
    window.setTimeout(() => {
      setIsTyping(false);
      setMessages((prev) => [
        ...prev,
        {
          sender: 'issuer',
          text: `Consulta recibida sobre la factura ${INVOICE}. Nuestro departamento contable la ha revisado y confirmado conforme al registro VeriFactu.`,
          time: 'Ahora'
        }
      ]);
    }, 1400);
  };

  const navItems = [
    { label: t('Inicio', 'Home'), icon: LayoutGrid, target: 1 },
    { label: t('Facturas', 'Invoices'), icon: FileText, target: 2 },
    { label: t('Proformas', 'Proformas'), icon: History, target: null }
  ];

  const activeNav = view <= 1 ? 0 : 1;

  return (
    <div className="w-full" style={{ perspective: '1600px' }}>
      <div
        ref={shellRef}
        className="w-full rounded-[10px] border border-[#242424] bg-[#0a0a0a] shadow-[0_30px_80px_-30px_rgba(0,0,0,0.75)] overflow-hidden"
      >
        {/* Barra del navegador */}
        <div className="h-10 flex items-center gap-3 px-3.5 border-b border-[#1d1d1d] bg-[#0e0e0e]">
          <div className="flex items-center gap-1.5">
            <span className="w-2.5 h-2.5 rounded-full bg-[#2e2e2e]" />
            <span className="w-2.5 h-2.5 rounded-full bg-[#2e2e2e]" />
            <span className="w-2.5 h-2.5 rounded-full bg-[#2e2e2e]" />
          </div>
          <div className="flex-1 min-w-0 flex items-center gap-2 px-2.5 py-1 rounded-[5px] bg-[#151515] border border-[#242424]">
            <Lock className="w-3 h-3 text-[rgb(124,224,108)] shrink-0" />
            <span className="font-mono text-[10px] text-white/60 truncate">
              portal.avialo.es/c/{INVOICE.toLowerCase()}?t=tok_s82a9e…
            </span>
          </div>
          <span className="hidden sm:inline font-mono text-[9px] font-bold uppercase tracking-wide px-1.5 py-0.5 rounded-[3px] bg-[rgba(124,224,108,0.12)] text-[rgb(124,224,108)]">
            SSL 256
          </span>
        </div>

        {/* Cuerpo de la app */}
        <div className="flex min-h-[560px] relative">
          {/* SIDEBAR */}
          <aside
            ref={sidebarRef}
            className="hidden sm:flex w-[190px] lg:w-[205px] shrink-0 flex-col border-r border-[#1d1d1d] bg-[#0b0b0b] p-3"
          >
            <div className="flex items-center gap-2.5 px-1 py-1.5">
              <div className="w-8 h-8 rounded-[7px] bg-white text-[#0a0a0a] flex items-center justify-center font-mono font-extrabold text-[11px]">
                TS
              </div>
              <div className="min-w-0">
                <p className="text-[12px] font-bold text-white leading-tight truncate">{ISSUER}</p>
                <p className="text-[10px] text-white/45 leading-tight">{t('Portal del cliente', 'Client portal')}</p>
              </div>
            </div>

            <nav className="relative mt-5 space-y-1">
              <div
                ref={indicatorRef}
                className="absolute left-0 right-0 rounded-[6px] bg-[#1c1c1c] border border-[#2a2a2a] pointer-events-none"
                style={{ top: 0, height: 34, opacity: 0 }}
              />
              {navItems.map((item, i) => {
                const Icon = item.icon;
                const isActive = i === activeNav && view !== 0;
                return (
                  <button
                    key={item.label}
                    ref={(el) => {
                      navRefs.current[i] = el;
                    }}
                    onClick={() => item.target !== null && onViewChange(item.target)}
                    className={`relative w-full flex items-center gap-2.5 px-2.5 py-2 rounded-[6px] text-[12.5px] font-semibold transition-colors ${
                      isActive ? 'text-white' : 'text-white/45 hover:text-white/75'
                    } ${item.target === null ? 'cursor-default' : ''}`}
                  >
                    <Icon className="w-4 h-4 shrink-0" />
                    <span>{item.label}</span>
                  </button>
                );
              })}
            </nav>

            <div className="mt-auto space-y-3">
              <div className="p-2.5 rounded-[7px] border border-[#242424] bg-[#101010]">
                <p className="text-[9.5px] text-white/40 leading-tight">
                  {t('Estás viendo el portal como', 'You are viewing the portal as')}
                </p>
                <p className="text-[11.5px] font-semibold text-white leading-tight mt-1">{CLIENT}</p>
              </div>
              <button className="flex items-center gap-2 px-1 text-[11.5px] text-white/45 hover:text-white/70 transition-colors">
                <LogOut className="w-3.5 h-3.5" />
                <span>{t('Cerrar sesión', 'Sign out')}</span>
              </button>
              <p className="px-1 text-[9.5px] text-white/25">{t('con tecnología de Avialo', 'powered by Avialo')}</p>
            </div>
          </aside>

          {/* ÁREA PRINCIPAL */}
          <section className="flex-1 min-w-0 relative bg-[#0a0a0a] px-4 sm:px-6 py-5 sm:py-6 overflow-hidden">
            {/* Barrido de luz GSAP en cada cambio de vista */}
            <div
              ref={sheenRef}
              className="pointer-events-none absolute top-0 -left-1/3 h-full w-1/3 opacity-0 bg-gradient-to-r from-transparent via-white/[0.045] to-transparent skew-x-12"
            />

            <div ref={stageRef} className="relative">
              {/* ---------- VISTA 0 · ACCESO POR ENLACE ---------- */}
              {renderedView === 0 && (
                <div className="space-y-4">
                  <div data-anim="row" className="rounded-[8px] border border-[#242424] bg-[#101010] overflow-hidden">
                    <div className="flex items-center justify-between px-4 py-2.5 border-b border-[#1f1f1f] bg-[#0e0e0e]">
                      <span className="inline-flex items-center gap-2 font-mono text-[10px] font-bold uppercase tracking-wide text-[rgb(158,250,255)]">
                        <Mail className="w-3.5 h-3.5" />
                        {t('Bandeja de tu cliente', "Client's inbox")}
                      </span>
                      <span className="font-mono text-[10px] text-white/35">10:02</span>
                    </div>
                    <div className="p-4 sm:p-5 space-y-3">
                      <p className="font-mono text-[10.5px] text-white/45">
                        {t('De:', 'From:')} <span className="text-white/80 font-bold">facturacion@techsolutions.es</span>
                      </p>
                      <h4 className="text-[15px] sm:text-base font-bold text-white leading-snug">
                        {t(
                          `Nueva factura ${INVOICE} disponible en tu portal`,
                          `New invoice ${INVOICE} available in your portal`
                        )}
                      </h4>
                      <p className="text-[12.5px] text-white/60 leading-relaxed">
                        {t(
                          `Hola ${CLIENT}, ya tienes disponible la factura de agosto. Puedes verla, descargar el PDF con QR VeriFactu o pagarla online. No necesitas contraseña: este enlace ya te identifica.`,
                          `Hello ${CLIENT}, your August invoice is ready. View it, download the VeriFactu QR PDF or pay online. No password needed — this link already identifies you.`
                        )}
                      </p>
                      <button
                        onClick={() => onViewChange(1)}
                        className="mt-1 inline-flex items-center gap-2 px-4 py-2.5 rounded-[6px] bg-white text-[#0a0a0a] text-[12.5px] font-bold hover:opacity-90 active:scale-[0.98] transition-all"
                      >
                        <span>{t('Entrar al portal', 'Open the portal')}</span>
                        <ExternalLink className="w-3.5 h-3.5" />
                      </button>
                    </div>
                  </div>

                  <div
                    data-anim="row"
                    className="flex items-start gap-2.5 p-3.5 rounded-[8px] border border-[rgba(124,224,108,0.22)] bg-[rgba(124,224,108,0.06)]"
                  >
                    <ShieldCheck className="w-4 h-4 mt-0.5 shrink-0 text-[rgb(124,224,108)]" />
                    <p className="text-[11.5px] text-[rgb(124,224,108)] font-semibold leading-relaxed">
                      {t(
                        'Token cifrado de un solo cliente, caducidad configurable y sin registro. Tu cliente entra en 1 clic desde cualquier dispositivo.',
                        'Encrypted single-client token, configurable expiry, no sign-up. Your client is in with one click from any device.'
                      )}
                    </p>
                  </div>
                </div>
              )}

              {/* ---------- VISTA 1 · INICIO (DASHBOARD) ---------- */}
              {renderedView === 1 && (
                <div className="space-y-5">
                  <div data-anim="row">
                    <h4 className="text-[19px] sm:text-[22px] font-bold text-white tracking-[-0.02em]">
                      {t('Hola,', 'Hi,')} {CLIENT}
                    </h4>
                    <p className="text-[12.5px] text-white/50 mt-1">
                      {t(`Aquí tienes tus facturas con ${ISSUER}.`, `Here are your invoices with ${ISSUER}.`)}
                    </p>
                  </div>

                  <div data-anim="row" className="grid grid-cols-3 gap-2.5 sm:gap-3">
                    <div className="p-3 sm:p-4 rounded-[8px] border border-[#242424] bg-[#101010]">
                      <p className="text-[10.5px] text-white/45">{t('Pendiente de pago', 'Outstanding')}</p>
                      <AnimatedValue
                        value={isPaid ? 0 : 1210}
                        format={euro}
                        className="block mt-1.5 font-mono text-[15px] sm:text-[17px] font-bold text-[#e8b62c]"
                      />
                    </div>
                    <div className="p-3 sm:p-4 rounded-[8px] border border-[#242424] bg-[#101010]">
                      <p className="text-[10.5px] text-white/45">{t('Ya pagado', 'Already paid')}</p>
                      <AnimatedValue
                        value={isPaid ? 4840 : 3630}
                        format={euro}
                        delay={0.3}
                        className="block mt-1.5 font-mono text-[15px] sm:text-[17px] font-bold text-white"
                      />
                    </div>
                    <div className="p-3 sm:p-4 rounded-[8px] border border-[#242424] bg-[#101010]">
                      <p className="text-[10.5px] text-white/45">{t('Facturas recibidas', 'Invoices received')}</p>
                      <AnimatedValue
                        value={4}
                        format={(n) => String(Math.round(n))}
                        delay={0.4}
                        className="block mt-1.5 font-mono text-[15px] sm:text-[17px] font-bold text-white"
                      />
                    </div>
                  </div>

                  {/* Pendiente de pago */}
                  <div data-anim="row" className="rounded-[8px] border border-[#242424] bg-[#0e0e0e] overflow-hidden">
                    <div className="flex items-center justify-between px-4 py-3 border-b border-[#1f1f1f]">
                      <span className="text-[13px] font-semibold text-white">{t('Pendiente de pago', 'Outstanding')}</span>
                      <button
                        onClick={() => onViewChange(2)}
                        className="text-[11.5px] text-white/45 hover:text-white transition-colors"
                      >
                        {t('Ver todas', 'View all')}
                      </button>
                    </div>
                    <button
                      onClick={() => onViewChange(2)}
                      className="w-full group flex items-center justify-between gap-3 px-4 py-3.5 text-left hover:bg-[#141414] transition-colors"
                    >
                      <div className="min-w-0">
                        <p className="text-[13px] font-semibold text-white">{INVOICE}</p>
                        <p className="text-[10.5px] text-white/40 mt-0.5">
                          {t('15 ago 2027 · vence 14 sept 2027', '15 Aug 2027 · due 14 Sep 2027')}
                        </p>
                      </div>
                      <div className="flex items-center gap-3 shrink-0">
                        <span
                          className={`px-2.5 py-1 rounded-full text-[10.5px] font-semibold ${
                            isPaid ? 'bg-[rgba(124,224,108,0.14)] text-[rgb(124,224,108)]' : 'bg-[#262626] text-white/80'
                          }`}
                        >
                          {isPaid ? t('Pagada', 'Paid') : t('Pendiente', 'Pending')}
                        </span>
                        <span className="font-mono text-[13px] font-semibold text-white">{euro(1210)}</span>
                      </div>
                    </button>
                  </div>

                  {/* Últimas facturas */}
                  <div data-anim="row" className="rounded-[8px] border border-[#242424] bg-[#0e0e0e] overflow-hidden">
                    <div className="flex items-center justify-between px-4 py-3 border-b border-[#1f1f1f]">
                      <span className="text-[13px] font-semibold text-white">{t('Últimas facturas', 'Latest invoices')}</span>
                      <button
                        onClick={() => onViewChange(2)}
                        className="text-[11.5px] text-white/45 hover:text-white transition-colors"
                      >
                        {t('Ver todas', 'View all')}
                      </button>
                    </div>
                    <div className="divide-y divide-[#1a1a1a]">
                      {[
                        { num: INVOICE, date: t('15 ago 2027 · vence 14 sept 2027', '15 Aug 2027 · due 14 Sep 2027'), paid: isPaid },
                        { num: 'FA-2027-0042', date: t('15 jul 2027 · pagada el 16 jul', '15 Jul 2027 · paid 16 Jul'), paid: true }
                      ].map((row) => (
                        <div
                          key={row.num}
                          className="flex items-center justify-between gap-3 px-4 py-3.5 hover:bg-[#141414] transition-colors"
                        >
                          <button onClick={() => onViewChange(2)} className="min-w-0 text-left">
                            <p className="text-[13px] font-semibold text-white">{row.num}</p>
                            <p className="text-[10.5px] text-white/40 mt-0.5">{row.date}</p>
                          </button>
                          <div className="flex items-center gap-2.5 shrink-0">
                            <span
                              className={`px-2.5 py-1 rounded-full text-[10.5px] font-semibold ${
                                row.paid ? 'bg-[rgba(124,224,108,0.14)] text-[rgb(124,224,108)]' : 'bg-[#262626] text-white/80'
                              }`}
                            >
                              {row.paid ? t('Pagada', 'Paid') : t('Pendiente', 'Pending')}
                            </span>
                            <span className="font-mono text-[13px] font-semibold text-white">{euro(1210)}</span>
                            <span
                              title={t('Descargar PDF VeriFactu', 'Download VeriFactu PDF')}
                              className="p-1.5 rounded-[5px] bg-[#1a1a1a] border border-[#262626] text-white/60 hover:text-white transition-colors"
                            >
                              <Download className="w-3.5 h-3.5" />
                            </span>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              )}

              {/* ---------- VISTA 2 · DETALLE DE FACTURA + PAGO ---------- */}
              {renderedView === 2 && (
                <div className="space-y-4">
                  <button
                    data-anim="row"
                    onClick={() => onViewChange(1)}
                    className="inline-flex items-center gap-2 text-[12px] text-white/45 hover:text-white transition-colors"
                  >
                    <ArrowLeft className="w-3.5 h-3.5" />
                    <span>{t('Todas las facturas', 'All invoices')}</span>
                  </button>

                  <div data-anim="row" className="flex flex-wrap items-start justify-between gap-3">
                    <div>
                      <h4 className="text-[19px] sm:text-[21px] font-bold text-white tracking-[-0.02em]">
                        {t('Factura', 'Invoice')} {INVOICE}
                      </h4>
                      <p className="text-[12px] text-white/45 mt-1">
                        {t('Emitida el 15 ago 2027 · vence el 14 sept 2027', 'Issued 15 Aug 2027 · due 14 Sep 2027')}
                      </p>
                    </div>
                    <div className="flex items-center gap-2.5">
                      <span
                        className={`px-2.5 py-1 rounded-full text-[10.5px] font-semibold ${
                          isPaid ? 'bg-[rgba(124,224,108,0.14)] text-[rgb(124,224,108)]' : 'bg-[#262626] text-white/80'
                        }`}
                      >
                        {isPaid ? t('Pagada', 'Paid') : t('Pendiente', 'Pending')}
                      </span>
                      <span className="inline-flex items-center gap-2 px-3 py-2 rounded-[6px] bg-[#e6e6e3] text-[#0a0a0a] text-[12px] font-semibold">
                        <Download className="w-3.5 h-3.5" />
                        {t('Descargar PDF', 'Download PDF')}
                      </span>
                    </div>
                  </div>

                  <div data-anim="row" className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                    <div className="p-3.5 rounded-[8px] border border-[#242424] bg-[#0e0e0e]">
                      <p className="text-[10.5px] text-white/40">{t('De', 'From')}</p>
                      <p className="text-[13px] font-semibold text-white mt-1">{ISSUER}</p>
                      <p className="text-[11px] text-white/45 mt-1 leading-relaxed">
                        NIF B87654321
                        <br />
                        Calle Serrano 41, 28001 Madrid, España
                      </p>
                    </div>
                    <div className="p-3.5 rounded-[8px] border border-[#242424] bg-[#0e0e0e]">
                      <p className="text-[10.5px] text-white/40">{t('Para', 'To')}</p>
                      <p className="text-[13px] font-semibold text-white mt-1">{CLIENT}</p>
                      <p className="text-[11px] text-white/45 mt-1 leading-relaxed">
                        NIF B12345678
                        <br />
                        Gran Vía 28, 28013 Madrid, España
                      </p>
                    </div>
                  </div>

                  {/* Tabla de conceptos */}
                  <div data-anim="row" className="rounded-[8px] border border-[#242424] bg-[#0e0e0e] overflow-hidden">
                    <div className="grid grid-cols-12 gap-2 px-4 py-2.5 border-b border-[#1f1f1f] text-[10.5px] text-white/40">
                      <span className="col-span-5">{t('Concepto', 'Description')}</span>
                      <span className="col-span-2 text-right">{t('Cant.', 'Qty')}</span>
                      <span className="col-span-2 text-right">{t('Precio', 'Price')}</span>
                      <span className="col-span-1 text-right">IVA</span>
                      <span className="col-span-2 text-right">Total</span>
                    </div>
                    <div className="grid grid-cols-12 gap-2 px-4 py-3 border-b border-[#1a1a1a] text-[12px] text-white items-center">
                      <span className="col-span-5">{t('Desarrollo y mantenimiento web · Agosto', 'Web development & maintenance · August')}</span>
                      <span className="col-span-2 text-right font-mono">1</span>
                      <span className="col-span-2 text-right font-mono">{euro(1000)}</span>
                      <span className="col-span-1 text-right font-mono">21 %</span>
                      <span className="col-span-2 text-right font-mono">{euro(1210)}</span>
                    </div>
                    <div className="flex justify-end px-4 py-3.5">
                      <div className="w-full sm:w-[260px] space-y-1.5 font-mono text-[12px]">
                        <div className="flex justify-between text-white/55">
                          <span className="font-sans">{t('Base imponible', 'Subtotal')}</span>
                          <span>{euro(1000)}</span>
                        </div>
                        <div className="flex justify-between text-white/55">
                          <span className="font-sans">IVA (21 %)</span>
                          <span>{euro(210)}</span>
                        </div>
                        <div className="flex justify-between pt-2 mt-1 border-t border-[#242424] text-white font-bold text-[13.5px]">
                          <span className="font-sans">Total</span>
                          <span>{euro(1210)}</span>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Bloque de pago */}
                  {isPaid ? (
                    <div
                      ref={paidRef}
                      className="relative p-6 rounded-[8px] border border-[rgba(124,224,108,0.25)] bg-[rgba(124,224,108,0.06)] text-center overflow-hidden"
                    >
                      <div className="relative inline-flex items-center justify-center">
                        <span
                          data-paid="ring"
                          className="absolute w-11 h-11 rounded-full border border-[rgb(124,224,108)]"
                        />
                        <span
                          data-paid="badge"
                          className="w-11 h-11 rounded-full bg-[rgb(52,138,46)] text-white flex items-center justify-center"
                        >
                          <Check className="w-6 h-6" />
                        </span>
                      </div>
                      <p data-paid="line" className="mt-3 text-[14px] font-bold text-[rgb(124,224,108)]">
                        {t('Pago completado', 'Payment completed')}
                      </p>
                      <p data-paid="line" className="mt-1 text-[11.5px] text-white/60 max-w-sm mx-auto leading-relaxed">
                        {t(
                          'El importe ha llegado directo a la cuenta del emisor. La factura se ha conciliado y firmado con hash SHA-256 VeriFactu.',
                          'Funds landed straight in the issuer account. The invoice is reconciled and signed with a VeriFactu SHA-256 hash.'
                        )}
                      </p>
                      <button
                        data-paid="line"
                        onClick={() => setIsPaid(false)}
                        className="mt-3 text-[11px] text-white/40 underline hover:text-white/70 transition-colors"
                      >
                        {t('Reiniciar simulación', 'Reset simulation')}
                      </button>
                    </div>
                  ) : (
                    <div data-anim="row" className="p-4 rounded-[8px] border border-[#242424] bg-[#0e0e0e] space-y-3">
                      <div className="grid grid-cols-3 gap-2 text-[11px]">
                        <span className="flex items-center justify-center gap-1.5 py-2 rounded-[6px] bg-white text-[#0a0a0a] font-semibold">
                          <CreditCard className="w-3.5 h-3.5" /> {t('Tarjeta', 'Card')}
                        </span>
                        <span className="flex items-center justify-center gap-1.5 py-2 rounded-[6px] bg-[#151515] border border-[#262626] text-white/60">
                          <Zap className="w-3.5 h-3.5" /> Bizum
                        </span>
                        <span className="flex items-center justify-center gap-1.5 py-2 rounded-[6px] bg-[#151515] border border-[#262626] text-white/60">
                          <Building2 className="w-3.5 h-3.5" /> SEPA
                        </span>
                      </div>
                      <button
                        onClick={handlePay}
                        className="w-full py-3.5 rounded-[6px] bg-[rgb(43,115,38)] hover:bg-[rgb(35,95,30)] text-white text-[13.5px] font-bold flex items-center justify-center gap-2 active:scale-[0.99] transition-all"
                      >
                        <ShieldCheck className="w-4 h-4" />
                        {t(`Pagar ${euro(1210)} ahora`, `Pay ${euro(1210)} now`)}
                      </button>
                      <p className="text-center text-[10.5px] text-white/35">
                        {t(
                          'El dinero va directo a la cuenta del emisor · Avialo no cobra comisión por transacción',
                          'Money goes straight to the issuer account · Avialo charges no transaction fee'
                        )}
                      </p>
                    </div>
                  )}
                </div>
              )}

              {/* ---------- VISTA 3 · CHAT EN LA FACTURA ---------- */}
              {renderedView === 3 && (
                <div className="space-y-4">
                  <button
                    data-anim="row"
                    onClick={() => onViewChange(2)}
                    className="inline-flex items-center gap-2 text-[12px] text-white/45 hover:text-white transition-colors"
                  >
                    <ArrowLeft className="w-3.5 h-3.5" />
                    <span>{t('Volver a la factura', 'Back to invoice')}</span>
                  </button>

                  <div data-anim="row" className="flex items-center justify-between gap-3">
                    <div>
                      <h4 className="text-[17px] sm:text-[19px] font-bold text-white tracking-[-0.02em]">
                        {t('Factura', 'Invoice')} {INVOICE}
                      </h4>
                      <p className="text-[11.5px] text-white/45 mt-0.5">{euro(1210)} · {t('Pendiente', 'Pending')}</p>
                    </div>
                    <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-[rgba(124,224,108,0.12)] text-[rgb(124,224,108)] text-[10.5px] font-semibold">
                      ● {t('Equipo en línea', 'Team online')}
                    </span>
                  </div>

                  <div data-anim="row" className="rounded-[8px] border border-[#242424] bg-[#0e0e0e] overflow-hidden">
                    <div className="flex items-center gap-2 px-4 py-3 border-b border-[#1f1f1f]">
                      <MessageSquare className="w-4 h-4 text-white/60" />
                      <span className="text-[13px] font-semibold text-white">
                        {t('¿Alguna duda con esta factura?', 'Any questions about this invoice?')}
                      </span>
                    </div>

                    <div className="p-4 space-y-3 max-h-[240px] overflow-y-auto">
                      {messages.map((msg, i) => (
                        <div key={i} className={`flex flex-col ${msg.sender === 'client' ? 'items-end' : 'items-start'}`}>
                          <span className="text-[9.5px] text-white/30 mb-1">
                            {msg.sender === 'client' ? t('Tú', 'You') : ISSUER} · {msg.time}
                          </span>
                          <div
                            className={`max-w-[85%] px-3 py-2 rounded-[8px] text-[12px] leading-relaxed ${
                              msg.sender === 'client'
                                ? 'bg-white text-[#0a0a0a] rounded-br-[2px] font-medium'
                                : 'bg-[#161616] border border-[#242424] text-white/85 rounded-bl-[2px]'
                            }`}
                          >
                            {msg.text}
                          </div>
                        </div>
                      ))}

                      {isTyping && (
                        <div ref={typingRef} className="flex items-center gap-1.5 px-3 py-2.5 w-fit rounded-[8px] bg-[#161616] border border-[#242424]">
                          <span data-typing="dot" className="w-1.5 h-1.5 rounded-full bg-white/45" />
                          <span data-typing="dot" className="w-1.5 h-1.5 rounded-full bg-white/45" />
                          <span data-typing="dot" className="w-1.5 h-1.5 rounded-full bg-white/45" />
                        </div>
                      )}
                    </div>

                    <form onSubmit={handleSend} className="p-3 border-t border-[#1f1f1f] bg-[#0b0b0b] space-y-2">
                      <textarea
                        value={chatInput}
                        onChange={(e) => setChatInput(e.target.value)}
                        rows={2}
                        placeholder={t('Escribe tu mensaje…', 'Write your message…')}
                        className="w-full resize-none px-3 py-2.5 rounded-[6px] bg-[#101010] border border-[#242424] text-[12px] text-white placeholder:text-white/30 focus:outline-none focus:border-[#3a3a3a]"
                      />
                      <div className="flex justify-end">
                        <button
                          type="submit"
                          className="inline-flex items-center gap-2 px-4 py-2 rounded-[6px] bg-[#e6e6e3] text-[#0a0a0a] text-[12px] font-semibold hover:opacity-90 active:scale-[0.98] transition-all"
                        >
                          <Send className="w-3.5 h-3.5" />
                          {t('Enviar', 'Send')}
                        </button>
                      </div>
                    </form>
                  </div>

                  <p data-anim="row" className="text-[10.5px] text-white/35 text-center">
                    {t(
                      'Cada mensaje queda vinculado a la factura: sin hilos de correo perdidos.',
                      'Every message stays attached to the invoice: no more lost email threads.'
                    )}
                  </p>
                </div>
              )}
            </div>
          </section>
        </div>

        {/* Pie del panel */}
        <div className="flex items-center justify-between px-4 py-2.5 border-t border-[#1d1d1d] bg-[#0b0b0b] font-mono text-[9.5px] text-white/30">
          <span>{t('PORTAL CERTIFICADO VERIFACTU · SHA-256', 'VERIFACTU CERTIFIED PORTAL · SHA-256')}</span>
          <span>AVIALO SOLUCIONES S.L.</span>
        </div>
      </div>
    </div>
  );
};
