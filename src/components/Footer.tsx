import { ArrowUpRight } from 'lucide-react';

export const Footer = () => {
  return (
    <footer className="bg-[#FCFCFB] dark:bg-[#080a09] border-t border-[#D2D2CE] dark:border-[#303131] text-[rgba(10,12,11,0.72)] dark:text-white/80 text-xs py-16 relative z-10 transition-colors duration-300">
      <div className="max-w-[1080px] mx-auto px-4 sm:px-0">
        
        <div className="grid grid-cols-2 md:grid-cols-5 gap-8 pb-12 border-b border-[#D2D2CE] dark:border-[#303131]">
          
          {/* Brand Col */}
          <div className="col-span-2 space-y-4 text-left">
            <a href="#" className="flex items-center gap-2">
              <img
                src="/favicon.svg"
                alt="Avialo Logo"
                className="h-7 w-auto filter brightness-0 dark:invert"
                onError={(e) => {
                  (e.currentTarget as HTMLElement).style.display = 'none';
                }}
              />
              <span className="text-[#0A0C0B] dark:text-white font-bold text-lg tracking-tight">
                Avialo
              </span>
            </a>

            <p className="text-[rgba(10,12,11,0.72)] dark:text-white/80 text-xs leading-relaxed max-w-sm">
              Plataforma SaaS de facturación inteligente y gestión financiera automatizada para creadores, diseñadores de producto y empresas globales.
            </p>

            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#F2F2F0] dark:bg-[#131517] border border-[#D2D2CE] dark:border-[#303131] text-[rgb(52,138,46)] dark:text-[rgb(104,204,88)] font-mono text-[11px]">
              <span className="w-2 h-2 rounded-full bg-[rgb(52,138,46)] dark:bg-[rgb(104,204,88)] animate-pulse" />
              Sistemas Operativos 99.99% Uptime
            </div>
          </div>

          {/* Product Links */}
          <div className="space-y-3 text-left">
            <h4 className="text-[#0A0C0B] dark:text-white font-semibold text-sm">Producto</h4>
            <ul className="space-y-2">
              <li><a href="#features" className="hover:text-[#0A0C0B] dark:hover:text-white transition-colors">Facturación IA</a></li>
              <li><a href="#overview" className="hover:text-[#0A0C0B] dark:hover:text-white transition-colors">Suscripciones Recurrentes</a></li>
              <li><a href="#features" className="hover:text-[#0A0C0B] dark:hover:text-white transition-colors">Cobros Stripe / SEPA</a></li>
              <li><a href="#features" className="hover:text-[#0A0C0B] dark:hover:text-white transition-colors">Escáner OCR Gastos</a></li>
              <li><a href="#pricing" className="hover:text-[#0A0C0B] dark:hover:text-white transition-colors">Precios y Planes</a></li>
            </ul>
          </div>

          {/* Compliance & Resources */}
          <div className="space-y-3 text-left">
            <h4 className="text-[#0A0C0B] dark:text-white font-semibold text-sm">Normativa & Rec.</h4>
            <ul className="space-y-2">
              <li><a href="#faq" className="hover:text-[#0A0C0B] dark:hover:text-white transition-colors">Ley VeriFactu España</a></li>
              <li><a href="#faq" className="hover:text-[#0A0C0B] dark:hover:text-white transition-colors">FacturaE Estructurada</a></li>
              <li><a href="#faq" className="hover:text-[#0A0C0B] dark:hover:text-white transition-colors">Plantillas de Factura PDF</a></li>
              <li><a href="#faq" className="hover:text-[#0A0C0B] dark:hover:text-white transition-colors">API & Webhooks</a></li>
              <li><a href="#faq" className="hover:text-[#0A0C0B] dark:hover:text-white transition-colors font-medium text-[rgb(20,122,132)] dark:text-[rgb(158,250,255)] flex items-center gap-1">Docs API <ArrowUpRight className="w-3 h-3" /></a></li>
            </ul>
          </div>

          {/* Legal */}
          <div className="space-y-3 text-left">
            <h4 className="text-[#0A0C0B] dark:text-white font-semibold text-sm">Empresa & Legal</h4>
            <ul className="space-y-2">
              <li><a href="#" className="hover:text-[#0A0C0B] dark:hover:text-white transition-colors">Sobre Avialo</a></li>
              <li><a href="#" className="hover:text-[#0A0C0B] dark:hover:text-white transition-colors">Política de Privacidad</a></li>
              <li><a href="#" className="hover:text-[#0A0C0B] dark:hover:text-white transition-colors">Términos del Servicio</a></li>
              <li><a href="#" className="hover:text-[#0A0C0B] dark:hover:text-white transition-colors">Seguridad RGPD & eIDAS</a></li>
              <li><a href="#" className="hover:text-[#0A0C0B] dark:hover:text-white transition-colors">Contacto</a></li>
            </ul>
          </div>

        </div>

        {/* Bottom Bar */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-[rgba(10,12,11,0.6)] dark:text-white/60">
          <p>© 2026 Avialo Platform S.L. Todos los derechos reservados.</p>
          <div className="flex gap-6">
            <a href="#" className="hover:text-[#0A0C0B] dark:hover:text-white transition-colors">Twitter / X</a>
            <a href="#" className="hover:text-[#0A0C0B] dark:hover:text-white transition-colors">LinkedIn</a>
            <a href="#" className="hover:text-[#0A0C0B] dark:hover:text-white transition-colors">GitHub</a>
          </div>
        </div>

      </div>
    </footer>
  );
};

