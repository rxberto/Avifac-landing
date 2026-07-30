import { useState } from 'react';
import { ArrowRight, Sparkles, CheckCircle2 } from 'lucide-react';
import { ShinyText } from './ShinyText';

export const CTASection = () => {
  const [email, setEmail] = useState('');
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (email) {
      setSubmitted(true);
      setTimeout(() => setSubmitted(false), 3000);
    }
  };

  return (
    <section className="py-24 bg-black relative z-10 overflow-hidden border-t border-neutral-800">
      
      {/* Background glowing gradient orb */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[300px] bg-[#64CEFB]/10 blur-[140px] rounded-full pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="relative rounded-3xl bg-neutral-900/90 border border-neutral-800 p-8 sm:p-16 backdrop-blur-2xl shadow-2xl text-center max-w-4xl mx-auto overflow-hidden">
          
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-black/60 border border-neutral-700 text-[#64CEFB] text-xs font-semibold uppercase tracking-wider mb-6">
            <Sparkles className="w-3.5 h-3.5" />
            Empieza Gratis en 2 Minutos
          </div>

          <h2 className="text-3xl sm:text-6xl font-extrabold tracking-tighter text-white mb-6 leading-tight">
            ¿Listo para Transformar tu <ShinyText text="Facturación?" speed={3} />
          </h2>

          <p className="text-neutral-400 text-base sm:text-lg max-w-2xl mx-auto mb-10">
            Únete a más de 8,000 diseñadores, agencias y startups que automatizan su contabilidad y cobran internacionalmente con Avialo.
          </p>

          <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row items-center justify-center gap-3 max-w-md mx-auto">
            <input
              type="email"
              placeholder="Tu correo electrónico profesional"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
              className="w-full sm:w-80 bg-neutral-950 border border-neutral-700 rounded-full px-5 py-3.5 text-sm text-white placeholder-neutral-500 focus:outline-none focus:border-[#64CEFB] transition-colors"
            />

            <button
              type="submit"
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 bg-[#64CEFB] hover:bg-[#52baeb] text-black font-semibold text-sm px-7 py-3.5 rounded-full transition-all duration-300 shadow-lg shadow-[#64CEFB]/20 shrink-0 hover:scale-105"
            >
              {submitted ? (
                <>
                  <CheckCircle2 className="w-4 h-4 text-black" />
                  ¡Registrado!
                </>
              ) : (
                <>
                  <span>Comenzar Ahora</span>
                  <ArrowRight className="w-4 h-4" />
                </>
              )}
            </button>
          </form>

          <div className="mt-8 flex flex-wrap items-center justify-center gap-6 text-xs text-neutral-500 font-medium">
            <span>✓ Sin tarjeta de crédito</span>
            <span>✓ 14 días de prueba sin compromiso</span>
            <span>✓ Cumplimiento VeriFactu / EU</span>
          </div>

        </div>
      </div>
    </section>
  );
};
