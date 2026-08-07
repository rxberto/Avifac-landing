import { useEffect } from 'react';
import { Navbar } from './Navbar';
import { Footer } from './Footer';
import { motion } from 'framer-motion';
import { ArrowRight, Code2, Globe, HeartHandshake, Lightbulb, Rocket, ShieldCheck, Target, Zap } from 'lucide-react';
import { Button } from './Button';

export const AboutUsPage = () => {
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
            <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold tracking-tight mb-8 leading-[1.1]">
              Transformación <span className="text-emerald-600 dark:text-emerald-400">Digital</span> Integrada.
            </h1>
            
            <p className="text-lg sm:text-xl text-[rgba(10,12,11,0.72)] dark:text-white/70 max-w-4xl mx-auto leading-relaxed mb-6">
              En Avialo lideramos la digitalización empresarial mediante dos frentes principales: nuestro producto estrella, <strong>Avialo Facturas</strong> (un SaaS de facturación electrónica con cumplimiento fiscal avanzado), y nuestra división de <strong>Desarrollo de Software Empresarial a Medida</strong>.
            </p>
            <p className="text-lg sm:text-xl text-[rgba(10,12,11,0.72)] dark:text-white/70 max-w-4xl mx-auto leading-relaxed">
              No construimos simples webs; construimos sistemas completos, funcionales y ultrarrápidos, pensados para captar clientes, automatizar procesos y multiplicar tus ventas.
            </p>
          </motion.div>
        </section>

        {/* Content Section - Story & Evolution */}
        <section className="px-6 max-w-4xl mx-auto mb-20 sm:mb-28">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            className="prose prose-lg dark:prose-invert max-w-none text-[rgba(10,12,11,0.8)] dark:text-white/80"
          >
            <h2 className="text-2xl sm:text-3xl font-bold text-[#0A0C0B] dark:text-white mb-6">Avialo Facturas: El SaaS Definitivo</h2>
            <p className="mb-12">
              Hoy en día, nuestro producto principal es <strong>Avialo Facturas</strong>. Una plataforma SaaS de facturación electrónica diseñada para cumplir a rajatabla con normativas como <strong>VeriFactu, TicketBAI/Batuz, NaTicket e IGIC/IPSI</strong>. Cuenta con workspaces colaborativos, personalización extrema, su propio asistente de Inteligencia Artificial (con motores RAG deterministas) y un motor fiscal aislado, inmutable e indestructible. Todo respaldado por un soporte humano premium. 
            </p>

            <h2 className="text-2xl sm:text-3xl font-bold text-[#0A0C0B] dark:text-white mb-6">El Origen: Una servilleta y una frustración</h2>
            <p className="mb-6">
              Fundada en 2026 en Coslada (Madrid), <strong>Avialo (Avialo Soluciones, S.L.)</strong> nació oficialmente tras observar el desolador panorama digital en los pequeños y medianos negocios de España. Nuestro CEO y Fundador, <strong>Roberto Niculescu Toma</strong>, veía dos extremos peligrosos en el mercado:
            </p>
            <ul className="mb-6 space-y-2">
              <li><strong>Agencias Low-Cost:</strong> Webs de plantilla por 500€, lentas, inseguras y clónicas. La "comida rápida" digital.</li>
              <li><strong>Consultoras "Big Four":</strong> Proyectos de millones de euros, inalcanzables para una empresa que factura 1 o 2 millones al año.</li>
            </ul>
            <p className="mb-6">
              ¿Qué pasaba en el medio? Nada. El empresario exitoso que quería calidad de ingeniería real y un soporte estelar no tenía a quién llamar. Se financiaban solos, competían solos y se digitalizaban solos (mal y a precio de oro). Avialo nació como respuesta directa para llenar ese vacío y lograr que ningún negocio con ambición quede atrás por falta de tecnología accesible, moderna y útil.
            </p>
            <p className="mb-12">
              Comenzamos desde nuestra base operativa en Coslada atendiendo a empresas del <em>Corredor del Henares (Alcalá de Henares, Torrejón de Ardoz, San Fernando)</em> y a clientes del corazón de Madrid capital (Salamanca, Chamberí, Moncloa-Aravaca, Retiro, AZCA). Hoy, nos extendemos por polos como Alcobendas, Majadahonda o Las Rozas, brindando infraestructura nacional y tecnología de primer nivel a cualquier empresa de España que busque una agencia de desarrollo seria y orientada a resultados.
            </p>

            <h2 className="text-2xl sm:text-3xl font-bold text-[#0A0C0B] dark:text-white mb-6">Nuestra Filosofía: "Ingeniería sobre Marketing"</h2>
            <p className="mb-12">
              La mayoría de agencias son creativas primero y técnicas después. Nosotros somos al revés. Creemos que el diseño más bonito del mundo no sirve de nada si la web tarda 3 segundos en cargar o si la arquitectura SEO no permite a Google indexar el contenido. En Avialo escribimos código, no arrastramos cajitas. Usamos React, Node.js, Inteligencia Artificial y arquitecturas Serverless. Construimos <em>Ferraris</em>, no alquilamos patinetes.
            </p>
          </motion.div>
        </section>

        {/* El Consejo de Gobierno */}
        <section className="px-6 max-w-5xl mx-auto mb-24">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl font-bold text-[#0A0C0B] dark:text-white mb-4">El Consejo de Gobierno</h2>
            <p className="text-lg text-[rgba(10,12,11,0.72)] dark:text-white/70 max-w-3xl mx-auto">
              Para garantizar la calidad mientras escalamos, Avialo Soluciones S.L. se rige por un Consejo de Gobierno con estrictos protocolos internos. No dependemos del "buen día" de un freelancer.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-white dark:bg-[#131517] p-8 rounded-2xl border border-[#D2D2CE] dark:border-[#303131] shadow-sm">
              <div className="flex items-center gap-4 mb-4">
                <div className="w-12 h-12 rounded-xl bg-violet-500/10 text-violet-600 dark:text-violet-400 flex items-center justify-center shrink-0">
                  <Rocket className="w-6 h-6" />
                </div>
                <h3 className="text-xl font-bold text-[#0A0C0B] dark:text-white">1. CEO & Fundador</h3>
              </div>
              <p className="text-[rgba(10,12,11,0.72)] dark:text-white/70 leading-relaxed">
                <strong>Roberto Niculescu Toma.</strong> La visión de Avialo. Obsesionado con el rendimiento web y la experiencia de usuario (UX). Se encarga de que la tecnología que usamos hoy sea la que el resto usará dentro de dos años. Roberto ejerce como CEO y CTO (Lead Digital Architect) a nivel técnico.
              </p>
            </div>

            <div className="bg-white dark:bg-[#131517] p-8 rounded-2xl border border-[#D2D2CE] dark:border-[#303131] shadow-sm">
              <div className="flex items-center gap-4 mb-4">
                <div className="w-12 h-12 rounded-xl bg-emerald-500/10 text-emerald-600 dark:text-emerald-400 flex items-center justify-center shrink-0">
                  <ShieldCheck className="w-6 h-6" />
                </div>
                <h3 className="text-xl font-bold text-[#0A0C0B] dark:text-white">2. Operaciones & Calidad</h3>
              </div>
              <p className="text-[rgba(10,12,11,0.72)] dark:text-white/70 leading-relaxed">
                Ningún proyecto sale sin pasar el <em>"Avialo Quality Gate"</em>: Auditoría Lighthouse &gt; 90/100, revisión de seguridad OWASP y accesibilidad WCAG. Garantizan que tu web opere 24/7 de forma óptima y sin fisuras.
              </p>
            </div>

            <div className="bg-white dark:bg-[#131517] p-8 rounded-2xl border border-[#D2D2CE] dark:border-[#303131] shadow-sm">
              <div className="flex items-center gap-4 mb-4">
                <div className="w-12 h-12 rounded-xl bg-blue-500/10 text-blue-600 dark:text-blue-400 flex items-center justify-center shrink-0">
                  <Lightbulb className="w-6 h-6" />
                </div>
                <h3 className="text-xl font-bold text-[#0A0C0B] dark:text-white">3. Unidad de I+D+i</h3>
              </div>
              <p className="text-[rgba(10,12,11,0.72)] dark:text-white/70 leading-relaxed">
                Dedicamos el 20% de nuestro tiempo a investigar. Exploramos la inteligencia artificial, nuevos frameworks y estrategias de SEO. Cuando implementamos algo en tu negocio, ya lo hemos roto y arreglado cien veces en nuestro laboratorio.
              </p>
            </div>

            <div className="bg-white dark:bg-[#131517] p-8 rounded-2xl border border-[#D2D2CE] dark:border-[#303131] shadow-sm">
              <div className="flex items-center gap-4 mb-4">
                <div className="w-12 h-12 rounded-xl bg-orange-500/10 text-orange-600 dark:text-orange-400 flex items-center justify-center shrink-0">
                  <HeartHandshake className="w-6 h-6" />
                </div>
                <h3 className="text-xl font-bold text-[#0A0C0B] dark:text-white">4. Relaciones Públicas</h3>
              </div>
              <p className="text-[rgba(10,12,11,0.72)] dark:text-white/70 leading-relaxed">
                Encargados de comunicar nuestra metodología, generar contenido de valor en el blog y, lo más importante: mantener una cercanía real y transparente entre nuestros clientes y el equipo de desarrollo.
              </p>
            </div>
          </div>
        </section>

        {/* Nuestra Promesa */}
        <section className="px-6 max-w-6xl mx-auto mb-24">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl font-bold text-[#0A0C0B] dark:text-white mb-4">Nuestra Promesa</h2>
            <p className="text-lg text-[rgba(10,12,11,0.72)] dark:text-white/70 max-w-3xl mx-auto">
              No queremos ser tu proveedor "para hacerte la web". Queremos ser tu Socio Tecnológico. Llámanos para preguntarnos si deberías implementar un CRM o cómo la IA puede automatizar tus ventas. Somos el motor digital de tu futuro.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              {
                icon: <Zap className="w-5 h-5" />,
                title: 'Velocidad Supersónica',
                description: 'En 2026 nadie espera. Optimizamos cada línea de código para que Google te ame y tus clientes no se vayan.'
              },
              {
                icon: <Globe className="w-5 h-5" />,
                title: 'Calidad Internacional',
                description: 'Diseñamos experiencias de usuario (UX) dignas de premios. Tu negocio local parecerá una franquicia global.'
              },
              {
                icon: <Target className="w-5 h-5" />,
                title: 'SEO Dominante',
                description: 'Una web bonita sin visitas es un cuadro en un sótano. Posicionamiento agresivo desde el día uno.'
              },
              {
                icon: <Code2 className="w-5 h-5" />,
                title: 'Servicio Premium',
                description: 'Hosting, dominios, seguridad y actualizaciones. Nosotros nos encargamos de los tecnicismos, tú de facturar.'
              }
            ].map((val, idx) => (
              <div key={idx} className="bg-[#F2F2F0] dark:bg-[#131517] p-6 rounded-2xl border border-[#D2D2CE] dark:border-[#303131]">
                <div className="flex items-center gap-3 mb-3 text-emerald-600 dark:text-emerald-400 font-bold">
                  {val.icon}
                  <h4 className="text-base text-[#0A0C0B] dark:text-white">{val.title}</h4>
                </div>
                <p className="text-[rgba(10,12,11,0.72)] dark:text-white/70 text-sm leading-relaxed">{val.description}</p>
              </div>
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
                Comienza a facturar de forma inteligente hoy mismo con nuestro SaaS, o contáctanos para desarrollar el software a medida que tu empresa necesita.
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
