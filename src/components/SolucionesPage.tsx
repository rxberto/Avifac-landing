import React, { useState, useEffect } from 'react';
import { 
  ArrowRight, 
  User, 
  Users, 
  ShoppingBag, 
  Briefcase
} from 'lucide-react';
import { Navbar } from './Navbar';
import { Footer } from './Footer';

export const SolucionesPage: React.FC = () => {
  const [lang, setLang] = useState<'es' | 'en'>('es');

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

  const solutionChoices = [
    {
      id: 'autonomos',
      titleEs: 'Autónomos y Freelance',
      titleEn: 'Freelancers & Solo Pros',
      subtitleEs: 'Crea facturas al instante, fotografía tus tickets con el móvil y ten tus impuestos al día sin Excel.',
      subtitleEn: 'Create invoices in seconds, snap photos of receipts, and manage tax deadlines without Excel.',
      badgeEs: 'Profesionales independientes',
      badgeEn: 'Independent professionals',
      icon: User,
      image: 'https://images.unsplash.com/photo-1531403009284-440f080d1e12?auto=format&fit=crop&w=600&q=70',
      href: '/soluciones/autonomos'
    },
    {
      id: 'agencias',
      titleEs: 'Pymes, Agencias y Estudios',
      titleEn: 'SMEs, Agencies & Studios',
      subtitleEs: 'Cobros recurrentes automáticos, conciliación bancaria en vivo y un portal web exclusivo para clientes.',
      subtitleEn: 'Automated recurring billing, live open banking sync, and a premium private client portal.',
      badgeEs: 'Empresas y equipos',
      badgeEn: 'Companies & teams',
      icon: Users,
      image: 'https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&w=600&q=70',
      href: '/soluciones/agencias'
    },
    {
      id: 'startups',
      titleEs: 'Startups SaaS y E-commerce',
      titleEn: 'SaaS Startups & E-commerce',
      subtitleEs: 'Sincroniza tus pagos de Stripe y Shopify con facturación automática y mide tu crecimiento real.',
      subtitleEn: 'Connect Stripe & Shopify checkout volumes seamlessly and supervise live recurring revenue.',
      badgeEs: 'Negocios digitales',
      badgeEn: 'Digital online brands',
      icon: ShoppingBag,
      image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=600&q=70',
      href: '/soluciones/startups'
    },
    {
      id: 'gestorias',
      titleEs: 'Asesorías y Gestoras',
      titleEn: 'Accountants & Advisors',
      subtitleEs: 'Conexión 100% gratuita con tus clientes para descargar libros contables oficiales sin errores ni teclar.',
      subtitleEn: '100% free connection to audit client ledgers and download structured official bookkeeping reports.',
      badgeEs: 'Despachos y asesores',
      badgeEn: 'Accounting firms',
      icon: Briefcase,
      image: 'https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?auto=format&fit=crop&w=600&q=70',
      href: '/soluciones/gestorias'
    }
  ];

  return (
    <div className="min-h-screen bg-[#FCFCFB] dark:bg-[#080a09] text-[#0A0C0B] dark:text-white w-full overflow-x-hidden antialiased transition-colors duration-300 flex flex-col justify-between">
      <Navbar />

      {/* CONTENEDOR PRINCIPAL ULTRA-COMPACTO (VISIBLE COMPLETAMENTE SIN SCROLL EN CUALQUIER PANTALLA) */}
      <main className="flex-1 w-full max-w-[920px] mx-auto px-4 sm:px-6 md:px-8 pt-20 sm:pt-24 pb-14 sm:pb-16 flex flex-col justify-center">
        
        <div className="w-full space-y-6 sm:space-y-7">
          
          <div className="text-center max-w-xl mx-auto space-y-1.5">
            <h1 className="text-2xl sm:text-3xl font-extrabold tracking-[-0.03em] text-[#0A0C0B] dark:text-white leading-tight">
              {t('¿Cómo vas a utilizar Avialo?', 'How will you utilize Avialo?')}
            </h1>

            <p className="text-xs sm:text-sm text-[rgba(10,12,11,0.72)] dark:text-white/70 font-normal">
              {t('Elige tu perfil profesional para explorar todas tus ventajas.', 'Select your operational profile to explore your tailored benefits.')}
            </p>
          </div>

          {/* GRID CENTRAL 2x2 COMPACTO CON FOTOS, APTO PARA VER TODO DE GOLPE SIN SCROLL */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-5 w-full">
            {solutionChoices.map((choice) => {
              const IconComponent = choice.icon;
              return (
                <a
                  key={choice.id}
                  href={choice.href}
                  className="group flex flex-col justify-between rounded-[8px] bg-[#FCFCFB] dark:bg-[#111315] border border-[#D2D2CE] dark:border-[#303131] hover:border-[#0A0C0B] dark:hover:border-white shadow-sm hover:shadow-lg transition-all duration-300 overflow-hidden cursor-pointer"
                >
                  {/* Imagen superior más contenida y elegante en altura (h-28 sm:h-32) */}
                  <div className="relative h-28 sm:h-32 w-full overflow-hidden bg-[#E5E5E2] dark:bg-[#202224] shrink-0">
                    <img
                      src={choice.image}
                      alt={t(choice.titleEs, choice.titleEn)}
                      loading="lazy"
                      decoding="async"
                      className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-500 ease-out brightness-[0.92] group-hover:brightness-100"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/75 via-black/25 to-transparent" />
                    
                    <div className="absolute bottom-2.5 left-3.5 right-3.5 flex items-center justify-between">
                      <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-[4px] bg-white dark:bg-[#181A1C] text-[#0A0C0B] dark:text-white text-[11px] font-bold shadow-sm">
                        <IconComponent className="w-3.5 h-3.5 text-[rgb(20,122,132)] dark:text-[rgb(158,250,255)]" />
                        <span>{t(choice.badgeEs, choice.badgeEn)}</span>
                      </span>
                    </div>
                  </div>

                  {/* Cuerpo de información ultracompacto */}
                  <div className="p-4 sm:p-5 flex flex-col justify-between flex-1 space-y-4">
                    <div className="space-y-1.5">
                      <h2 className="text-base sm:text-lg font-extrabold text-[#0A0C0B] dark:text-white group-hover:text-[rgb(20,122,132)] dark:group-hover:text-[rgb(158,250,255)] transition-colors leading-tight">
                        {t(choice.titleEs, choice.titleEn)}
                      </h2>
                      <p className="text-[11px] sm:text-xs text-[rgba(10,12,11,0.74)] dark:text-white/72 leading-normal font-normal">
                        {t(choice.subtitleEs, choice.subtitleEn)}
                      </p>
                    </div>

                    {/* Fila de acción ágil y clara */}
                    <div className="pt-3 border-t border-[#D2D2CE]/70 dark:border-[#303131]/70 flex items-center justify-between text-[11px] sm:text-xs font-bold text-[rgba(10,12,11,0.8)] dark:text-white/80">
                      <span>{t('Ver ventajas explicadas', 'Explore all benefits')}</span>
                      <span className="inline-flex items-center gap-1 px-2.5 py-1 rounded-[5px] bg-[#F2F2F0] dark:bg-[#1D2022] text-[#0A0C0B] dark:text-white font-extrabold group-hover:bg-[#0A0C0B] group-hover:text-white dark:group-hover:bg-white dark:group-hover:text-[#0A0C0B] transition-all duration-200">
                        {t('Descubrir', 'Discover')} <ArrowRight className="w-3 h-3 group-hover:translate-x-1 transition-transform" />
                      </span>
                    </div>
                  </div>
                </a>
              );
            })}
          </div>

        </div>

      </main>

      <Footer />
    </div>
  );
};
