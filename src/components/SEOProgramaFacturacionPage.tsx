import { motion } from 'framer-motion';
import { Navbar } from './Navbar';
import { Footer } from './Footer';
import { Button } from './Button';
import { useLanguage } from '../context/LanguageContext';
import { APP_URLS } from '../config/urls';
import { CheckCircle2, Zap, Shield, TrendingUp } from 'lucide-react';

export const SEOProgramaFacturacionPage = () => {
  const { t } = useLanguage();

  return (
    <div className="min-h-screen bg-[#FCFCFB] dark:bg-[#080a09] text-[#0A0C0B] dark:text-white w-full overflow-x-hidden antialiased transition-colors duration-300 flex flex-col">
      <Navbar />

      <header className="relative pt-36 pb-20 px-4 sm:px-6 lg:px-8 max-w-[1280px] mx-auto text-center w-full">
        <div className="absolute inset-0 bg-dot-texture opacity-25 pointer-events-none -z-10" />
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="flex flex-col items-center gap-6 max-w-4xl mx-auto"
        >
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[rgba(52,138,46,0.1)] text-[rgb(43,115,38)] dark:text-[rgb(124,224,108)] text-xs font-bold font-mono">
            <span>#1 SOFTWARE ESPAÑOL</span>
          </div>
          <h1 className="text-4xl sm:text-5xl lg:text-[60px] font-bold tracking-[-0.03em] leading-[1.12]">
            {t(
              'El programa de facturación más rápido y certificado de España',
              'The fastest and most certified invoicing software in Spain'
            )}
          </h1>
          <p className="text-base sm:text-lg text-[rgba(10,12,11,0.72)] dark:text-white/80 max-w-2xl mx-auto leading-[1.5]">
            {t(
              'Avialo es el programa de facturación diseñado para autónomos y pymes que buscan ahorrar tiempo, evitar errores manuales y cumplir 100% con la Ley VeriFactu 2026 y Hacienda.',
              'Avialo is the invoicing software designed for freelancers and SMEs looking to save time, avoid manual errors, and comply 100% with the VeriFactu 2026 Law and Tax Authorities.'
            )}
          </p>

          <div className="pt-4 flex flex-col sm:flex-row gap-4">
            <Button variant="primary" href={APP_URLS.register} className="px-8 py-4 text-base font-bold shadow-md">
              <span>{t('Probar gratis ahora', 'Try for free now')}</span>
            </Button>
          </div>
        </motion.div>
      </header>

      <main className="max-w-[1240px] mx-auto px-4 sm:px-6 lg:px-8 pb-24 w-full flex flex-col gap-24">
        <section className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <h2 className="text-3xl font-bold">
              ¿Por qué elegir Avialo como tu programa de facturación?
            </h2>
            <p className="text-[rgba(10,12,11,0.75)] dark:text-white/75 leading-relaxed">
              Un buen programa de facturación no solo hace facturas, sino que automatiza toda tu gestión financiera. Avialo está homologado por la AEAT, lo que te garantiza tranquilidad ante cualquier inspección.
            </p>
            <ul className="space-y-4">
              {[
                { icon: Zap, title: 'Creación de facturas en 10 segundos', desc: 'Plantillas modernas y cálculo automático de IVA e IRPF.' },
                { icon: Shield, title: 'Homologado por AEAT', desc: 'Cumplimos con la Ley Antifraude y VeriFactu.' },
                { icon: TrendingUp, title: 'Control de gastos y cobros', desc: 'Digitaliza tus tickets y gestiona pagos recurrentes fácilmente.' }
              ].map((item, i) => (
                <li key={i} className="flex gap-4 p-4 rounded-2xl bg-[#F2F2F0] dark:bg-[#131517] border border-[#D2D2CE] dark:border-[#303131]">
                  <div className="p-3 bg-white dark:bg-[#0A0C0B] rounded-xl h-fit">
                    <item.icon className="w-6 h-6 text-[rgb(52,138,46)] dark:text-[rgb(124,224,108)]" />
                  </div>
                  <div>
                    <h4 className="font-bold">{item.title}</h4>
                    <p className="text-sm text-[rgba(10,12,11,0.7)] dark:text-white/70">{item.desc}</p>
                  </div>
                </li>
              ))}
            </ul>
          </div>
          <div className="relative h-[500px] w-full rounded-[24px] overflow-hidden border border-[#D2D2CE] dark:border-[#303131]">
            <img src="https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&auto=format&fit=crop&q=80" alt="Programa de facturación dashboard" className="w-full h-full object-cover" />
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
            <div className="absolute bottom-6 left-6 text-white">
              <p className="font-bold text-xl">Interfaz intuitiva</p>
              <p className="text-white/80">Diseñado para no contables</p>
            </div>
          </div>
        </section>

        <section className="text-center space-y-8 bg-[#F2F2F0] dark:bg-[#131517] p-12 rounded-[32px] border border-[#D2D2CE] dark:border-[#303131]">
          <h2 className="text-3xl font-bold">Empieza a usar el mejor programa de facturación</h2>
          <p className="text-[rgba(10,12,11,0.75)] dark:text-white/75 max-w-2xl mx-auto">
            Únete a los autónomos y pymes que ya han digitalizado su negocio con Avialo. Facturación electrónica, control de gastos, portal de clientes y mucho más.
          </p>
          <Button variant="primary" href={APP_URLS.register} className="px-8 py-4 text-lg font-bold">
            Crear mi cuenta gratuita
          </Button>
        </section>
      </main>

      <Footer />
    </div>
  );
};
