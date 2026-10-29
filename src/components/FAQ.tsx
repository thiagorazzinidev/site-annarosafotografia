import FAQAccordion from "./FAQAccordion";
import { getWhatsAppUrl } from "@/lib/constants";
import { MessageCircle } from "lucide-react";

const faqItems = [
  {
    question: "Onde os ensaios costumam ser realizados?",
    answer:
      "O local é escolhido de acordo com a atmosfera desejada: ao ar livre em campos e parques com luz natural dourada, no aconchego do seu próprio lar (ensaio documental lifestyle) ou em nosso estúdio minimalista com luz difusa em Indaiatuba. Conversamos para definir o que faz mais sentido para o seu momento.",
  },
  {
    question: "Como funciona o agendamento de datas?",
    answer:
      "O agendamento é feito pelo WhatsApp. Conversamos sobre a melhor fase (no caso de gestantes, idealmente entre a 28ª e a 34ª semana) e alinhamos a disponibilidade de datas com margem para imprevistos climáticos.",
  },
  {
    question: "Não sei como posar diante da câmera. Isso é um problema?",
    answer:
      "De forma alguma! A maioria das famílias e casais nunca fez um ensaio fotográfico. Nossa direção é fluida e invisível: sugerimos movimentos, conversas e brincadeiras para que você se sinta livre, leve e em casa.",
  },
  {
    question: "Vocês dão orientações sobre o que vestir?",
    answer:
      "Sim. Compartilhamos um guia de figurino personalizado com sugestões de paletas neutras e tecidos orgânicos (linho, algodão, lã) que harmonizam com a luz natural e mantêm o ensaio atemporal por décadas.",
  },
  {
    question: "Como descubro valores e propostas disponíveis?",
    answer:
      "Basta nos enviar uma mensagem no WhatsApp. Enviamos nosso catálogo completo em PDF com todos os detalhes de investimento, opções de entrega e álbuns impressos de alta fidelidade.",
  },
  {
    question: "Vocês atendem Campinas e outras cidades da região?",
    answer:
      "Sim! Atendemos com frequência em Indaiatuba, Campinas, Salto, Itu, Vinhedo, Valinhos e cidades vizinhas. Consulte-nos sobre eventuais condições de deslocamento.",
  },
];

export default function FAQ() {
  return (
    <section id="duvidas" className="py-32 lg:py-44 bg-surface/50 relative">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="grid lg:grid-cols-12 gap-12 lg:gap-16 items-start">
          {/* Left Column — Editorial Heading & Direct Helpline (5 cols) */}
          <div className="lg:col-span-5 sticky top-28">
            <span className="font-body text-xs uppercase tracking-[0.25em] text-muted block mb-3 font-medium">
              Perguntas &amp; Respostas
            </span>

            <h2 className="font-heading text-4xl sm:text-5xl lg:text-[54px] font-light leading-[1.1] text-primary-dark tracking-tight">
              Dúvidas que costumam surgir <br />
              <span className="italic font-light text-muted">antes do primeiro clique.</span>
            </h2>

            <p className="mt-5 font-body text-base text-muted leading-relaxed max-w-md">
              Transparência e cuidado desde o início. Se a sua pergunta não estiver aqui, converse diretamente com a Anna.
            </p>

            {/* Direct Helpline Box — Rounded-lg (Image 1 reference) */}
            <div className="mt-12 p-8 rounded-lg bg-canvas border border-border-soft shadow-xs">
              <span className="font-body text-[11px] uppercase tracking-[0.2em] text-muted block mb-1 font-medium">
                Atendimento Pessoal
              </span>
              <h4 className="font-heading text-2xl font-light text-primary-dark">
                Prefere conversar agora?
              </h4>
              <p className="mt-2 font-body text-xs sm:text-sm text-muted leading-relaxed">
                Tire suas dúvidas em tempo real e consulte as datas disponíveis para o seu ensaio.
              </p>
              <a
                href={getWhatsAppUrl("geral")}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-6 inline-flex items-center gap-2.5 bg-primary-dark hover:bg-accent text-canvas px-6 py-3.5 rounded-lg font-body font-semibold text-xs tracking-wider uppercase transition-colors shadow-xs"
              >
                <MessageCircle className="w-4 h-4 text-canvas" />
                <span>Conversar no WhatsApp</span>
              </a>
            </div>
          </div>

          {/* Right Column — Ariakit Fine-line Publication Accordion (7 cols) */}
          <div className="lg:col-span-7">
            <FAQAccordion items={faqItems} />
          </div>
        </div>
      </div>
    </section>
  );
}
