import Image from "next/image";
import { ArrowUpRight } from "lucide-react";
import { getWhatsAppUrl } from "@/lib/constants";

export default function About() {
  return (
    <section id="sobre" className="py-32 lg:py-44 bg-surface relative">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="grid lg:grid-cols-12 gap-12 lg:gap-20 items-center">
          {/* Left Column — Portrait with Clean Editorial Cut (5 cols, Scout Inspired) */}
          <div className="lg:col-span-5">
            <div className="relative aspect-[4/5] rounded-none overflow-hidden border border-border-soft/80 bg-canvas shadow-sm">
              <Image
                src="/images/anna-retrato.jpg"
                alt="Anna Rosa, fotógrafa de famílias, gestantes e casais em Indaiatuba"
                fill
                className="object-cover transition-transform duration-700 ease-out hover:scale-[1.02]"
                sizes="(max-width: 1024px) 100vw, 40vw"
              />

              {/* Minimal Archival Plate Tag */}
              <div className="absolute bottom-4 left-4 right-4 bg-canvas/95 border border-border-soft/80 px-4 py-3 flex items-center justify-between">
                <div>
                  <span className="font-heading text-base font-light text-primary-dark block leading-tight">
                    Anna Rosa
                  </span>
                  <span className="font-body text-[10px] uppercase tracking-widest text-muted block">
                    Fotógrafa &amp; Fundadora
                  </span>
                </div>
                <span className="font-body text-[10px] text-muted tracking-wider">
                  Indaiatuba · SP
                </span>
              </div>
            </div>
          </div>

          {/* Right Column — Editorial Interview / Manifesto (7 cols) */}
          <div className="lg:col-span-7">
            <span className="font-body text-xs uppercase tracking-[0.25em] text-muted block mb-4 font-medium">
              O Manifesto &amp; A Visão
            </span>

            <h2 className="font-heading text-3xl sm:text-5xl lg:text-[54px] font-light leading-[1.1] text-primary-dark tracking-tight">
              &ldquo;Fotografar é olhar com cuidado para aquilo que importa.&rdquo;
            </h2>

            <div className="mt-8 space-y-5 font-body text-base lg:text-lg text-muted leading-relaxed max-w-xl">
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

            {/* Signature & CTA — Button with 8px Radius (Image 1 reference) */}
            <div className="mt-12 pt-8 border-t border-border-soft flex flex-col sm:flex-row sm:items-center justify-between gap-6">
              <div>
                <span className="font-heading italic text-2xl text-primary-dark block">
                  Anna Rosa
                </span>
                <span className="font-body text-xs text-muted tracking-wider">
                  Fotografia Documental e de Afeto
                </span>
              </div>

              <a
                href={getWhatsAppUrl("geral")}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2.5 bg-primary-dark text-canvas px-7 py-3.5 rounded-lg font-body font-semibold text-xs tracking-wider uppercase hover:bg-accent transition-colors shadow-xs"
              >
                <span>Conversar sobre seu ensaio</span>
                <ArrowUpRight className="w-4 h-4" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
