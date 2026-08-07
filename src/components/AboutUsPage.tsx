import React, { useEffect } from 'react';
import { Navbar } from './Navbar';
import { Footer } from './Footer';
import { motion } from 'framer-motion';
import { useLanguage } from '../context/LanguageContext';
import { ArrowRight, Code2, Target, Zap } from 'lucide-react';
import { Button } from './ui/Button';

export const AboutUsPage = () => {
  const { t } = useLanguage();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="min-h-screen bg-[#FCFCFB] dark:bg-[#080a09] text-[#0A0C0B] dark:text-white font-sans selection:bg-emerald-500/30 selection:text-emerald-900 dark:selection:text-emerald-100 flex flex-col transition-colors duration-300">
      <Navbar />

      <main className="flex-1 pt-32 pb-24">
        {/* Hero Section */}
        <section className="relative px-6 max-w-5xl mx-auto text-center mb-20 sm:mb-28">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-emerald-500/10 border border-emerald-500/20 text-emerald-700 dark:text-emerald-400 text-xs font-bold uppercase tracking-wider mb-8">
              <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse"></span>
              {t('Nuestra Historia', 'Our Story')}
            </div>
            
            <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold tracking-tight mb-8 leading-[1.1]">
              Transformación <span className="text-emerald-600 dark:text-emerald-400">Digital</span> Integrada.
            </h1>
            
            <p className="text-lg sm:text-xl text-[rgba(10,12,11,0.72)] dark:text-white/70 max-w-3xl mx-auto leading-relaxed">
              {t(
                'Impulsamos startups y modernizamos negocios tradicionales creando soluciones web a medida y plataformas de alto rendimiento. Construimos una presencia digital diseñada para captar clientes y multiplicar tus ventas.',
                'We drive startups and modernize traditional businesses by creating custom web solutions and high-performance platforms. We build a digital presence designed to capture clients and multiply your sales.'
              )}
            </p>
          </motion.div>
        </section>

        {/* Content Section */}
        <section className="px-6 max-w-4xl mx-auto mb-20 sm:mb-28">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            className="prose prose-lg dark:prose-invert max-w-none text-[rgba(10,12,11,0.8)] dark:text-white/80"
          >
            <h2 className="text-2xl sm:text-3xl font-bold text-[#0A0C0B] dark:text-white mb-6">Quiénes Somos</h2>
            <p className="mb-6">
              <strong>Avialo S.L.</strong>, fundada por Roberto Niculescu Toma, nació con una misión clara: democratizar el acceso a tecnología de élite para empresas de todos los tamaños. No somos solo una agencia de desarrollo; somos tus socios tecnológicos estratégicos.
            </p>
            <p className="mb-12">
              Desde la creación de plataformas web corporativas de alto rendimiento hasta soluciones SaaS complejas como <strong>Avialo Facturas</strong>, fusionamos un diseño visual impecable y rompedor con una ingeniería de software extremadamente robusta.
            </p>

            <h2 className="text-2xl sm:text-3xl font-bold text-[#0A0C0B] dark:text-white mb-6">¿Por qué creamos Avialo Facturas?</h2>
            <p className="mb-6">
              Viendo la enorme complejidad técnica y el estrés que suponía para las empresas españolas adaptarse a la nueva normativa de Hacienda (<strong>VeriFactu</strong>) y la conexión B2G (<strong>FACe</strong>), decidimos construir la plataforma de facturación electrónica definitiva. 
            </p>
            <p className="mb-12">
              Aplicamos nuestros estándares más altos de <em>Transformación Digital</em> para crear una herramienta que fuera rápida, moderna, segura y, sobre todo, extremadamente fácil de usar. Cumplir con el gobierno ya no tiene por qué ser un proceso arcaico y frustrante; ahora es un trámite invisible y automatizado bajo una interfaz que da gusto utilizar.
            </p>
          </motion.div>
        </section>

        {/* Grid de Valores */}
        <section className="px-6 max-w-6xl mx-auto mb-24">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              {
                icon: <Code2 className="w-6 h-6" />,
                title: 'Desarrollo a Medida',
                description: 'Plataformas de código limpio, escalables e indestructibles, diseñadas para crecer junto a tu volumen de negocio.'
              },
              {
                icon: <Zap className="w-6 h-6" />,
                title: 'Alto Rendimiento',
                description: 'Optimización extrema en velocidad y rendimiento (SEO) para tiempos de carga que retienen a tus clientes.'
              },
              {
                icon: <Target className="w-6 h-6" />,
                title: 'Orientados a Ventas',
                description: 'Diseño UX/UI pensado estratégicamente para convertir visitantes curiosos en clientes recurrentes.'
              }
            ].map((val, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ delay: idx * 0.15 }}
                className="bg-white dark:bg-[#131517] p-8 sm:p-10 rounded-2xl border border-[#D2D2CE] dark:border-[#303131] shadow-sm hover:shadow-xl transition-all duration-300"
              >
                <div className="w-14 h-14 rounded-xl bg-emerald-500/10 text-emerald-600 dark:text-emerald-400 flex items-center justify-center mb-6">
                  {val.icon}
                </div>
                <h3 className="text-xl font-bold mb-3 text-[#0A0C0B] dark:text-white">{val.title}</h3>
                <p className="text-[rgba(10,12,11,0.72)] dark:text-white/70 leading-relaxed text-sm sm:text-base">
                  {val.description}
                </p>
              </motion.div>
            ))}
          </div>
        </section>

        {/* CTA */}
        <section className="px-6 max-w-5xl mx-auto text-center mt-32">
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true, margin: "-100px" }}
            className="bg-neutral-900 dark:bg-white rounded-[2rem] p-12 sm:p-16 lg:p-20 text-white dark:text-[#0A0C0B] relative overflow-hidden shadow-2xl"
          >
            <div className="absolute inset-0 bg-gradient-to-br from-emerald-500/20 to-transparent pointer-events-none" />
            <div className="relative z-10 flex flex-col items-center">
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-6 tracking-tight">
                ¿Listo para transformar tu negocio?
              </h2>
              <p className="text-lg text-white/80 dark:text-[#0A0C0B]/80 mb-10 max-w-2xl leading-relaxed">
                Descubre cómo nuestra agencia de desarrollo puede llevar tu presencia digital al siguiente nivel, o empieza a facturar de forma inteligente ahora mismo con nuestra plataforma SaaS.
              </p>
              <div className="flex flex-col sm:flex-row items-center gap-4 sm:gap-6 w-full sm:w-auto">
                <Button variant="primary" href="/registro" className="px-8 py-4 w-full sm:w-auto text-base">
                  Prueba Avialo Facturas
                </Button>
                <a 
                  href="https://www.avialo.tech" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="px-8 py-4 rounded-xl font-bold bg-white/10 dark:bg-black/5 hover:bg-white/20 dark:hover:bg-black/10 transition-colors w-full sm:w-auto flex items-center justify-center gap-2.5 text-base border border-white/20 dark:border-black/10"
                >
                  Visitar Agencia Web <ArrowRight className="w-5 h-5" />
                </a>
              </div>
            </div>
          </motion.div>
        </section>

      </main>

      <Footer />
    </div>
  );
};

export default AboutUsPage;
