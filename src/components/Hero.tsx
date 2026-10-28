import Image from 'next/image';
import { ArrowDown, MessageCircle } from 'lucide-react';
import { getWhatsAppUrl } from '@/lib/constants';

export default function Hero() {
  return (
    <section className="min-h-screen flex flex-col justify-between pt-28 pb-12 lg:pt-36 lg:pb-16 relative overflow-hidden bg-canvas">
      {/* Archival ambient glow in background */}
      <div 
        className="absolute top-1/4 right-0 w-[500px] h-[500px] bg-accent-soft/60 rounded-full blur-3xl pointer-events-none -z-10" 
        aria-hidden="true" 
      />

      <div className="max-w-7xl mx-auto px-6 w-full flex-1 flex flex-col justify-center">
        {/* Archival Masthead Tagline */}
        <div className="flex flex-wrap items-center justify-between gap-4 pb-6 mb-10 border-b border-border-soft/60 text-[11px] uppercase tracking-[0.2em] text-muted font-medium">
          <div className="flex items-center gap-2">
            <span className="w-1.5 h-1.5 rounded-full bg-accent animate-pulse" />
            <span>Indaiatuba, Campinas &amp; Região</span>
          </div>
          <div className="hidden sm:block">
            <span>23°05&apos;S · 47°13&apos;W</span>
          </div>
          <div>
            <span>Fotografia Autoral &amp; Luz Natural</span>
          </div>
        </div>

        {/* Hero Asymmetric Grid */}
        <div className="grid lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          {/* Left Column — Monumental Typography & Narrative (7 cols) */}
          <div className="lg:col-span-7">
            <h1 className="font-heading text-4xl sm:text-6xl lg:text-[72px] font-light leading-[1.06] text-primary-dark tracking-tight">
              Sua história <br />
              <span className="italic font-light text-accent">merece ser contada.</span>
            </h1>

            <p className="font-heading text-xl sm:text-2xl italic text-muted mt-5 font-light">
              Fotografias para sentir, viver e lembrar.
            </p>

            <p className="mt-6 text-muted font-body text-base lg:text-lg leading-relaxed max-w-xl">
              Existem fases, encontros e pequenos gestos que merecem ser
              guardados. Meu olhar busca registrar a beleza das histórias reais,
              com sensibilidade e atenção aos detalhes que tornam cada momento
              único e eterno.
            </p>

            {/* Actions */}
            <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4 mt-10">
              <a
                href={getWhatsAppUrl('geral')}
                target="_blank"
                rel="noopener noreferrer"
                className="bg-primary-dark text-canvas px-8 py-4 rounded-full font-body font-semibold text-xs tracking-wider uppercase hover:bg-accent transition-all duration-300 shadow-md hover:shadow-lg hover:-translate-y-0.5 inline-flex items-center justify-center gap-2.5 text-center"
              >
                <MessageCircle className="w-4 h-4 text-accent-light" />
                <span>Quero registrar minha história</span>
              </a>
              <a
                href="#ensaios"
                className="border border-border-soft text-primary-dark px-8 py-4 rounded-full font-body font-medium text-xs tracking-wider uppercase hover:border-primary-dark hover:bg-white transition-all duration-300 inline-flex items-center justify-center text-center bg-surface/60 backdrop-blur-sm"
              >
                Conheça os ensaios
              </a>
            </div>

            {/* Micro proof text */}
            <div className="flex items-center gap-6 mt-12 pt-6 border-t border-border-soft/40 text-xs text-muted">
              <span>Gestantes · Famílias · Casais</span>
              <span>•</span>
              <span>Luz Natural em Casa, Campo ou Estúdio</span>
            </div>
          </div>

          {/* Right Column — Archival Fine-Art Print (5 cols) */}
          <div className="lg:col-span-5 relative">
            {/* Fine-art print frame with soft offset paper effect */}
            <div className="relative">
              <div 
                className="absolute -inset-4 bg-surface/80 rounded-[36px] -rotate-1 pointer-events-none border border-border-soft/60 hidden sm:block" 
                aria-hidden="true" 
              />

              <div className="relative aspect-[4/5] rounded-3xl overflow-hidden shadow-2xl shadow-primary-dark/15 border border-border-soft/80 bg-canvas">
                <Image
                  src="/images/hero-principal.jpg"
                  alt="Ensaio fotográfico com luz natural dourada - família em momento espontâneo"
                  fill
                  className="object-cover transition-transform duration-700 hover:scale-105"
                  priority
                  sizes="(max-width: 1024px) 100vw, 45vw"
                />

                {/* Archival Museum Label */}
                <div className="absolute top-5 left-5 bg-canvas/90 backdrop-blur-md px-3.5 py-1.5 rounded-full border border-border-soft/70 shadow-sm">
                  <span className="font-body text-[10px] uppercase tracking-widest text-primary-dark font-semibold">
                    Placa N° 01 · Luz Natural
                  </span>
                </div>

                {/* Gallery floating caption */}
                <div className="absolute bottom-6 left-6 right-6 bg-canvas/92 backdrop-blur-md border border-border-soft/80 px-6 py-3.5 rounded-2xl flex items-center justify-between shadow-xl">
                  <div>
                    <span className="font-body text-[10px] uppercase tracking-widest text-accent font-semibold block">
                      Sessão Espontânea
                    </span>
                    <span className="font-heading text-sm sm:text-base text-primary-dark font-light">
                      Luz de fim de tarde
                    </span>
                  </div>
                  <span className="font-body text-xs text-muted font-medium">
                    Indaiatuba · SP
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Scroll Indicator */}
      <div className="max-w-7xl mx-auto px-6 w-full pt-8 flex items-center justify-between text-muted text-xs">
        <a 
          href="#sobre" 
          className="inline-flex items-center gap-2 hover:text-accent transition-colors group"
        >
          <span className="uppercase tracking-widest text-[11px]">Rolar para explorar</span>
          <ArrowDown className="w-3.5 h-3.5 group-hover:translate-y-0.5 transition-transform" />
        </a>
        <span className="hidden sm:inline font-heading italic text-sm">
          Anna Rosa Fotografia
        </span>
      </div>
    </section>
  );
}
