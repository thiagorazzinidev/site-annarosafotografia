import { MessageCircle } from "lucide-react";
import { getWhatsAppUrl } from "@/lib/constants";

export default function CTAFinal() {
  return (
    <section className="py-32 lg:py-44 bg-night relative overflow-hidden text-canvas">
      {/* Cinematic Golden Hour Ambient Glow */}
      <div 
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-accent/20 rounded-full blur-[120px] pointer-events-none" 
        aria-hidden="true" 
      />

      <div className="max-w-4xl mx-auto px-6 text-center relative z-10">
        <div className="inline-flex items-center gap-2 mb-6 px-4 py-1.5 rounded-full bg-white/5 border border-white/10 backdrop-blur-sm">
          <span className="w-1.5 h-1.5 rounded-full bg-accent animate-pulse" />
          <span className="font-body text-xs uppercase tracking-widest text-accent-light font-medium">
            O Próximo Passo
          </span>
        </div>

        <h2 className="font-heading text-4xl sm:text-6xl lg:text-[64px] font-light leading-[1.08] text-canvas tracking-tight">
          Qual história você gostaria de <br className="hidden sm:block" />
          <span className="italic font-light text-accent-light">guardar para sempre?</span>
        </h2>

        <p className="mt-6 font-body text-base lg:text-lg text-canvas/75 leading-relaxed max-w-2xl mx-auto">
          Nem sempre percebemos a importância de uma fase enquanto estamos
          vivendo. Às vezes, são os pequenos detalhes que fazem a gente querer
          voltar no tempo. Vamos conversar sobre o seu ensaio.
        </p>

        <div className="mt-12 flex flex-col sm:flex-row items-center justify-center gap-4">
          <a
            href={getWhatsAppUrl("geral")}
            target="_blank"
            rel="noopener noreferrer"
            className="w-full sm:w-auto inline-flex items-center justify-center gap-3 bg-accent hover:bg-accent-hover text-canvas px-10 py-5 rounded-full font-body font-semibold text-xs tracking-wider uppercase transition-all duration-300 shadow-xl shadow-accent/25 hover:shadow-2xl hover:scale-105"
          >
            <MessageCircle className="w-4 h-4 text-canvas" />
            <span>Vamos conversar pelo WhatsApp</span>
          </a>
        </div>

        {/* Reassurance metadata */}
        <div className="mt-12 flex flex-wrap items-center justify-center gap-6 text-xs text-canvas/50 font-body">
          <span>Indaiatuba, Campinas e região</span>
          <span>•</span>
          <span>Atendimento carinhoso &amp; sem compromisso</span>
          <span>•</span>
          <span>Disponibilidade para ensaios externos, em casa e estúdio</span>
        </div>
      </div>
    </section>
  );
}
