import FAQAccordion from "./FAQAccordion";
import { getWhatsAppUrl } from "@/lib/constants";
import { MessageCircle, HelpCircle } from "lucide-react";

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
    <section id="duvidas" className="py-28 lg:py-36 bg-surface/50 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid lg:grid-cols-12 gap-12 lg:gap-16">
          {/* Left Column — Editorial Heading & Direct Helpline (5 cols) */}
          <div className="lg:col-span-5">
            <div className="inline-flex items-center gap-2 mb-3 px-3.5 py-1.5 rounded-full bg-canvas border border-border-soft/60">
              <HelpCircle className="w-3.5 h-3.5 text-accent" />
              <span className="font-body text-xs uppercase tracking-widest text-muted font-medium">
                Tire Suas Dúvidas
              </span>
            </div>

            <h2 className="font-heading text-3xl sm:text-4xl lg:text-[46px] font-light leading-[1.16] text-primary-dark tracking-tight">
              Dúvidas que costumam surgir antes do primeiro clique.
            </h2>

            <p className="mt-4 font-body text-base text-muted leading-relaxed">
              Transparência e cuidado desde o início. Se a sua pergunta não estiver aqui, converse diretamente com a Anna.
            </p>

            {/* Direct WhatsApp Callout Box */}
            <div className="mt-10 p-7 rounded-3xl bg-canvas border border-border-soft/80 shadow-xs">
              <span className="font-body text-xs uppercase tracking-widest text-accent font-semibold block mb-1">
                Atendimento Pessoal
              </span>
              <h4 className="font-heading text-xl font-light text-primary-dark">
                Prefere conversar agora?
              </h4>
              <p className="mt-2 font-body text-xs sm:text-sm text-muted leading-relaxed">
                Tire suas dúvidas em tempo real e consulte as datas disponíveis para o seu ensaio.
              </p>
              <a
                href={getWhatsAppUrl("geral")}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-5 inline-flex items-center gap-2.5 bg-primary-dark hover:bg-accent text-canvas px-6 py-3 rounded-full font-body font-semibold text-xs tracking-wider uppercase transition-all duration-300 shadow-sm"
              >
                <MessageCircle className="w-3.5 h-3.5" />
                <span>Conversar no WhatsApp</span>
              </a>
            </div>
          </div>

          {/* Right Column — Fine-line Publication Accordion (7 cols) */}
          <div className="lg:col-span-7">
            <FAQAccordion items={faqItems} />
          </div>
        </div>
      </div>
    </section>
  );
}
