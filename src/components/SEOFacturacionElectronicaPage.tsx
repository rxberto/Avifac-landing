import { motion } from 'framer-motion';
import { Navbar } from './Navbar';
import { Footer } from './Footer';
import { Button } from './Button';
import { useLanguage } from '../context/LanguageContext';
import { APP_URLS } from '../config/urls';
import { FileText, Building2, ShieldCheck } from 'lucide-react';

export const SEOFacturacionElectronicaPage = () => {
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
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[rgba(20,122,132,0.1)] text-[rgb(20,122,132)] dark:text-[rgb(158,250,255)] text-xs font-bold font-mono">
            <span>LEY CREA Y CRECE Y VERIFACTU</span>
          </div>
          <h1 className="text-4xl sm:text-5xl lg:text-[60px] font-bold tracking-[-0.03em] leading-[1.12]">
            {t(
              'Software de Facturación Electrónica en España',
              'Electronic Invoicing Software in Spain'
            )}
          </h1>
          <p className="text-base sm:text-lg text-[rgba(10,12,11,0.72)] dark:text-white/80 max-w-2xl mx-auto leading-[1.5]">
            {t(
              'Prepárate para la facturación electrónica obligatoria en España. Envía y recibe facturas en formato TicketBAI, FACeB2B y homologadas por la AEAT sin complicaciones.',
              'Get ready for mandatory electronic invoicing in Spain. Send and receive invoices in TicketBAI, FACeB2B formats and certified by the AEAT without complications.'
            )}
          </p>

          <div className="pt-4 flex flex-col sm:flex-row gap-4">
            <Button variant="primary" href={APP_URLS.register} className="px-8 py-4 text-base font-bold shadow-md">
              <span>{t('Empieza a facturar digitalmente', 'Start digital invoicing')}</span>
            </Button>
          </div>
        </motion.div>
      </header>

      <main className="max-w-[1240px] mx-auto px-4 sm:px-6 lg:px-8 pb-24 w-full flex flex-col gap-24">
        <section className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div className="order-2 md:order-1 relative h-[500px] w-full rounded-[24px] overflow-hidden border border-[#D2D2CE] dark:border-[#303131]">
            <img src="https://images.unsplash.com/photo-1554224155-6726b3ff858f?w=800&auto=format&fit=crop&q=80" alt="Facturación electrónica" className="w-full h-full object-cover" />
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
            <div className="absolute bottom-6 left-6 text-white">
              <p className="font-bold text-xl">Cumplimiento total</p>
              <p className="text-white/80">Adaptados a la nueva ley</p>
            </div>
          </div>
          
          <div className="order-1 md:order-2 space-y-6">
            <h2 className="text-3xl font-bold">
              ¿Qué necesitas saber sobre la Facturación Electrónica en España?
            </h2>
            <p className="text-[rgba(10,12,11,0.75)] dark:text-white/75 leading-relaxed">
              La Ley Crea y Crece hace obligatoria la facturación electrónica entre empresas (B2B) en España. Avialo te permite adaptarte a estos cambios normativos sin estrés.
            </p>
            <ul className="space-y-4">
              {[
                { icon: Building2, title: 'Facturación B2B obligatoria', desc: 'Con Avialo estás preparado para enviar facturas electrónicas a otras empresas y autónomos en el formato legal requerido.' },
                { icon: ShieldCheck, title: 'Conexión con la Administración', desc: 'Exportación a formatos estándar (FacturaE, FACe) para trabajar con la Administración Pública.' },
                { icon: FileText, title: 'Trazabilidad y estados', desc: 'Conoce en todo momento si tu factura ha sido recibida, aceptada o pagada por el destinatario.' }
              ].map((item, i) => (
                <li key={i} className="flex gap-4 p-4 rounded-2xl bg-[#F2F2F0] dark:bg-[#131517] border border-[#D2D2CE] dark:border-[#303131]">
                  <div className="p-3 bg-white dark:bg-[#0A0C0B] rounded-xl h-fit">
                    <item.icon className="w-6 h-6 text-[rgb(20,122,132)] dark:text-[rgb(158,250,255)]" />
                  </div>
                  <div>
                    <h4 className="font-bold">{item.title}</h4>
                    <p className="text-sm text-[rgba(10,12,11,0.7)] dark:text-white/70">{item.desc}</p>
                  </div>
                </li>
              ))}
            </ul>
          </div>
        </section>

        <section className="text-center space-y-8 bg-[#F2F2F0] dark:bg-[#131517] p-12 rounded-[32px] border border-[#D2D2CE] dark:border-[#303131]">
          <h2 className="text-3xl font-bold">Adelántate a la ley con la Facturación Electrónica</h2>
          <p className="text-[rgba(10,12,11,0.75)] dark:text-white/75 max-w-2xl mx-auto">
            El papel y el Excel ya no son opciones válidas. Asegura la viabilidad de tu negocio utilizando un software certificado para la facturación electrónica en España.
          </p>
          <Button variant="primary" href={APP_URLS.register} className="px-8 py-4 text-lg font-bold">
            Comenzar mi transición digital
          </Button>
        </section>
      </main>

      <Footer />
    </div>
  );
};
