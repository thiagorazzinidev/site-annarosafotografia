import { getWhatsAppUrl } from "@/lib/constants";
import { MessageCircle, Compass, HeartHandshake, Sparkles } from "lucide-react";

const steps = [
  {
    step: "01",
    icon: Compass,
    title: "Conte sua ideia",
    subtitle: "Primeiro contato & acolhimento",
    description:
      "Pelo WhatsApp, você compartilha o momento que deseja registrar, quem estará presente e as expectativas para o ensaio.",
  },
  {
    step: "02",
    icon: HeartHandshake,
    title: "Alinhe os detalhes",
    subtitle: "Locação, luz & figurino",
    description:
      "Tiramos dúvidas sobre locações com luz natural, sugerimos paletas de roupas e definimos a data com tranquilidade.",
  },
  {
    step: "03",
    icon: Sparkles,
    title: "Viva a experiência",
    subtitle: "Leveza diante da câmera",
    description:
      "No dia do ensaio, nada de poses duras. Criamos um ambiente calmo para que o afeto e os gestos espontâneos surjam com naturalidade.",
  },
];

export default function Process() {
  return (
    <section className="py-28 lg:py-36 bg-canvas relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-6">
        {/* Section Header */}
        <div className="max-w-2xl mx-auto text-center mb-20 lg:mb-28">
          <div className="inline-flex items-center gap-2 mb-3 px-3.5 py-1.5 rounded-full bg-surface border border-border-soft/60">
            <span className="w-1.5 h-1.5 rounded-full bg-accent" />
            <span className="font-body text-xs uppercase tracking-widest text-muted font-medium">
              O Caminho do Ensaio
            </span>
          </div>
          <h2 className="font-heading text-3xl sm:text-4xl lg:text-[48px] font-light leading-tight text-primary-dark">
            Vamos começar com uma conversa.
          </h2>
          <p className="mt-4 font-body text-base lg:text-lg text-muted leading-relaxed">
            Uma jornada simples, acolhedora e transparente. Sem burocracias ou inseguranças antes de estar diante da câmera.
          </p>
        </div>

        {/* Continuous Horizontal Connected Journey (Zero Cards) */}
        <div className="relative">
          {/* Connecting line on desktop */}
          <div 
            className="hidden md:block absolute top-10 left-[12%] right-[12%] h-[1px] bg-border-soft" 
            aria-hidden="true" 
          />

          <div className="grid md:grid-cols-3 gap-12 lg:gap-16 relative z-10">
            {steps.map((item) => {
              const Icon = item.icon;
              return (
                <div key={item.step} className="flex flex-col items-center text-center">
                  {/* Floating Numbered Icon Node */}
                  <div className="relative mb-8">
                    <div className="w-20 h-20 rounded-full bg-surface border border-border-soft flex items-center justify-center shadow-sm group-hover:scale-110 transition-transform">
                      <Icon className="w-7 h-7 text-accent" />
                    </div>
                    <span className="absolute -bottom-2.5 left-1/2 -translate-x-1/2 px-2.5 py-0.5 rounded-full bg-primary-dark text-canvas font-body text-[11px] font-semibold tracking-wider">
                      {item.step}
                    </span>
                  </div>

                  {/* Content */}
                  <span className="font-body text-xs uppercase tracking-widest text-accent font-semibold mb-1">
                    {item.subtitle}
                  </span>
                  <h3 className="font-heading text-2xl lg:text-[26px] font-light text-primary-dark">
                    {item.title}
                  </h3>
                  <p className="mt-3 font-body text-sm text-muted leading-relaxed max-w-sm">
                    {item.description}
                  </p>
                </div>
              );
            })}
          </div>
        </div>

        {/* Intimate Reassurance Note + Action */}
        <div className="mt-20 max-w-3xl mx-auto rounded-3xl bg-surface/60 border border-border-soft/70 p-8 sm:p-10 text-center shadow-xs">
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
              className="inline-flex items-center gap-3 bg-primary-dark hover:bg-accent text-canvas px-8 py-4 rounded-full font-body font-semibold text-xs tracking-wider uppercase transition-all duration-300 shadow-sm hover:shadow-md"
            >
              <MessageCircle className="w-4 h-4 text-accent-light" />
              <span>Vamos planejar seu ensaio</span>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
