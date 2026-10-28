import Image from "next/image";
import { ArrowUpRight, Heart } from "lucide-react";
import { getWhatsAppUrl } from "@/lib/constants";

export default function About() {
  return (
    <section id="sobre" className="py-28 lg:py-36 bg-surface relative overflow-hidden">
      {/* Decorative large serif watermark */}
      <div 
        className="absolute bottom-6 left-6 text-[140px] lg:text-[220px] font-heading font-light text-border-soft/20 select-none pointer-events-none leading-none -z-0"
        aria-hidden="true"
      >
        Sensibilidade
      </div>

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="grid lg:grid-cols-12 gap-12 lg:gap-20 items-center">
          {/* Left Column — Portrait with Archival Plate Border (5 cols) */}
          <div className="lg:col-span-5">
            <div className="relative">
              <div 
                className="absolute -inset-3 bg-canvas/80 rounded-[36px] rotate-1 pointer-events-none border border-border-soft/60 hidden sm:block" 
                aria-hidden="true" 
              />

              <div className="relative aspect-[4/5] rounded-3xl overflow-hidden shadow-2xl shadow-primary-dark/10 border border-border-soft/80 bg-canvas">
                <Image
                  src="/images/anna-retrato.jpg"
                  alt="Anna Rosa, fotógrafa de famílias, gestantes e casais em Indaiatuba"
                  fill
                  className="object-cover transition-transform duration-700 hover:scale-105"
                  sizes="(max-width: 1024px) 100vw, 40vw"
                />

                {/* Handcrafted Badge */}
                <div className="absolute bottom-5 left-5 right-5 bg-canvas/92 backdrop-blur-md px-5 py-3 rounded-2xl border border-border-soft/70 shadow-sm flex items-center justify-between">
                  <div>
                    <span className="font-heading text-base font-light text-primary-dark">
                      Anna Rosa
                    </span>
                    <span className="font-body text-[10px] uppercase tracking-widest text-muted block">
                      Fotógrafa Autoral
                    </span>
                  </div>
                  <Heart className="w-4 h-4 text-accent fill-accent/20" />
                </div>
              </div>
            </div>
          </div>

          {/* Right Column — Editorial Interview / Manifesto (7 cols) */}
          <div className="lg:col-span-7">
            <div className="inline-flex items-center gap-2 mb-4 px-3.5 py-1.5 rounded-full bg-canvas border border-border-soft/60">
              <span className="w-1.5 h-1.5 rounded-full bg-accent" />
              <span className="font-body text-xs uppercase tracking-widest text-muted font-medium">
                O Manifesto
              </span>
            </div>

            <h2 className="font-heading text-3xl sm:text-5xl lg:text-[52px] font-light leading-[1.12] text-primary-dark tracking-tight">
              &ldquo;Fotografar é olhar com cuidado para aquilo que importa.&rdquo;
            </h2>

            <div className="mt-8 space-y-5 font-body text-base lg:text-lg text-muted leading-relaxed">
              <p>
                Sou Anna Rosa, fotógrafa, e acredito que cada história tem seus
                próprios detalhes, gestos e formas de demonstrar afeto.
              </p>
              <p>
                Meu trabalho é voltado para registrar pessoas, conexões e fases
                importantes da vida, buscando imagens que representem a essência
                de cada encontro sob a verdade da luz natural.
              </p>
              <p>
                Mais do que pensar em uma fotografia isolada, gosto da ideia de
                construir registros que façam sentido para quem viveu aquele
                momento — para serem revisitados daqui a dez, vinte ou cinquenta anos com a mesma emoção.
              </p>
            </div>

            {/* Signature & CTA */}
            <div className="mt-10 pt-8 border-t border-border-soft/60 flex flex-col sm:flex-row sm:items-center justify-between gap-6">
              <div>
                <span className="font-heading italic text-2xl text-accent block">
                  Anna Rosa
                </span>
                <span className="font-body text-xs text-muted/70 tracking-wider">
                  Indaiatuba · São Paulo
                </span>
              </div>

              <a
                href={getWhatsAppUrl("geral")}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2.5 bg-primary-dark text-canvas px-7 py-3.5 rounded-full font-body font-semibold text-xs tracking-wider uppercase hover:bg-accent transition-all duration-300 shadow-sm hover:shadow-md group"
              >
                <span>Conversar sobre seu ensaio</span>
                <ArrowUpRight className="w-4 h-4 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
