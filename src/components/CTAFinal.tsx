import { MessageCircle } from "lucide-react";
import { getWhatsAppUrl } from "@/lib/constants";

export default function CTAFinal() {
  return (
    <section className="py-36 lg:py-48 bg-night text-canvas relative">
      <div className="max-w-4xl mx-auto px-6 lg:px-8 text-center relative z-10">
        <span className="font-body text-xs uppercase tracking-[0.25em] text-canvas/50 block mb-4 font-medium">
          O Próximo Passo
        </span>

        <h2 className="font-heading text-4xl sm:text-6xl lg:text-[72px] font-light leading-[1.06] text-canvas tracking-tight">
          Qual história você gostaria de <br className="hidden sm:block" />
          <span className="italic font-light text-canvas/70">guardar para sempre?</span>
        </h2>

        <p className="mt-8 font-body text-base lg:text-lg text-canvas/70 leading-relaxed max-w-2xl mx-auto">
          Nem sempre percebemos a importância de uma fase enquanto estamos
          vivendo. Às vezes, são os pequenos detalhes que fazem a gente querer
          voltar no tempo. Vamos conversar sobre o seu ensaio.
        </p>

        <div className="mt-12 flex flex-col sm:flex-row items-center justify-center gap-4">
          <a
            href={getWhatsAppUrl("geral")}
            target="_blank"
            rel="noopener noreferrer"
            className="w-full sm:w-auto inline-flex items-center justify-center gap-3 bg-accent hover:bg-accent-hover text-canvas px-10 py-4.5 rounded-lg font-body font-semibold text-xs tracking-wider uppercase transition-colors shadow-sm"
          >
            <MessageCircle className="w-4 h-4 text-canvas" />
            <span>Vamos conversar pelo WhatsApp</span>
          </a>
        </div>

        {/* Reassurance metadata */}
        <div className="mt-16 pt-10 border-t border-white/10 flex flex-wrap items-center justify-center gap-6 text-xs text-canvas/40 font-body">
          <span>Indaiatuba, Campinas e região</span>
          <span>—</span>
          <span>Atendimento carinhoso &amp; sem compromisso</span>
          <span>—</span>
          <span>Disponibilidade para ensaios externos, em casa e estúdio</span>
        </div>
      </div>
    </section>
  );
}
