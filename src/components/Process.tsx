import { getWhatsAppUrl } from "@/lib/constants";
import { MessageCircle } from "lucide-react";

const steps = [
  {
    step: "01",
    title: "Conte sua ideia",
    subtitle: "Primeiro contato & escuta",
    description:
      "Pelo WhatsApp, você compartilha o momento que deseja registrar, quem estará presente e as expectativas para o ensaio.",
  },
  {
    step: "02",
    title: "Alinhe os detalhes",
    subtitle: "Locação, luz & figurino",
    description:
      "Tiramos dúvidas sobre locações com luz natural, sugerimos paletas de roupas e definimos a data com tranquilidade.",
  },
  {
    step: "03",
    title: "Viva a experiência",
    subtitle: "Leveza diante da câmera",
    description:
      "No dia do ensaio, nada de poses duras. Criamos um ambiente calmo para que o afeto e os gestos espontâneos surjam com naturalidade.",
  },
];

export default function Process() {
  return (
    <section className="py-32 lg:py-44 bg-canvas relative">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        {/* Section Header */}
        <div className="max-w-2xl mx-auto text-center mb-20 lg:mb-28">
          <span className="font-body text-xs uppercase tracking-[0.25em] text-muted block mb-3 font-medium">
            O Caminho do Ensaio
          </span>
          <h2 className="font-heading text-4xl sm:text-5xl lg:text-[60px] font-light leading-[1.08] text-primary-dark tracking-tight">
            Vamos começar <br />
            <span className="italic font-light text-muted">com uma conversa.</span>
          </h2>
          <p className="mt-5 font-body text-base lg:text-lg text-muted leading-relaxed">
            Uma jornada simples, acolhedora e transparente. Sem burocracias ou inseguranças antes de estar diante da câmera.
          </p>
        </div>

        {/* Continuous Horizontal Connected Journey (Scout Clean Lines) */}
        <div className="relative">
          {/* Connecting line on desktop */}
          <div 
            className="hidden md:block absolute top-7 left-[15%] right-[15%] h-[1px] bg-border-soft" 
            aria-hidden="true" 
          />

          <div className="grid md:grid-cols-3 gap-12 lg:gap-16 relative z-10">
            {steps.map((item) => (
              <div key={item.step} className="flex flex-col items-center text-center">
                {/* Clean Number Node */}
                <div className="w-14 h-14 rounded-lg bg-surface border border-border-soft flex items-center justify-center font-heading text-xl font-light text-primary-dark mb-8 shadow-xs">
                  {item.step}
                </div>

                {/* Content */}
                <span className="font-body text-xs uppercase tracking-widest text-muted block mb-1.5 font-medium">
                  {item.subtitle}
                </span>
                <h3 className="font-heading text-2xl lg:text-[28px] font-light text-primary-dark">
                  {item.title}
                </h3>
                <p className="mt-3 font-body text-sm text-muted leading-relaxed max-w-sm">
                  {item.description}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Reassurance Callout — Rounded-lg (Image 1 reference) */}
        <div className="mt-20 max-w-3xl mx-auto rounded-lg bg-surface border border-border-soft p-8 sm:p-10 text-center">
          <p className="font-heading text-xl sm:text-2xl font-light text-primary-dark italic">
            &ldquo;Nunca sei como me portar em fotos... posso fazer um ensaio assim mesmo?&rdquo;
          </p>
          <p className="mt-3 font-body text-sm sm:text-base text-muted max-w-xl mx-auto leading-relaxed">
            A maioria absoluta das pessoas nunca fez um ensaio profissional. Nosso processo é pensado para ser uma tarde leve, como um passeio em família ou uma conversa à luz do sol.
          </p>

          <div className="mt-8">
            <a
              href={getWhatsAppUrl("geral")}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2.5 bg-primary-dark hover:bg-accent text-canvas px-7 py-3.5 rounded-lg font-body font-semibold text-xs tracking-wider uppercase transition-colors shadow-xs"
            >
              <MessageCircle className="w-4 h-4 text-canvas" />
              <span>Vamos planejar seu ensaio</span>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
