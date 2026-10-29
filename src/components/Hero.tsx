import { ArrowDown, MessageCircle } from 'lucide-react';
import { getWhatsAppUrl } from '@/lib/constants';
import HeroGallery from './HeroGallery';

export default function Hero() {
  return (
    <section className="min-h-screen flex flex-col justify-between pt-28 pb-12 lg:pt-36 lg:pb-16 bg-canvas relative">
      <div className="max-w-7xl mx-auto px-6 lg:px-8 w-full flex-1 flex flex-col justify-center">
        {/* Archival Masthead Tagline — Scout Inspired Clean Header */}
        <div className="flex flex-wrap items-center justify-between gap-4 pb-6 mb-12 border-b border-border-soft text-[11px] uppercase tracking-[0.25em] text-muted font-medium">
          <div className="flex items-center gap-2.5">
            <span className="w-1.5 h-1.5 rounded-xs bg-accent" />
            <span>Indaiatuba, Campinas &amp; Região</span>
          </div>
          <div className="hidden sm:block">
            <span>23°05&apos;S · 47°13&apos;W</span>
          </div>
          <div>
            <span>Fotografia Autoral &amp; Luz Natural</span>
          </div>
        </div>

        {/* Hero Asymmetric Composition */}
        <div className="grid lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          {/* Left Column — Monumental Editorial Typography (7 cols) */}
          <div className="lg:col-span-7">
            <h1 className="font-heading text-4xl sm:text-6xl lg:text-[74px] font-light leading-[1.05] text-primary-dark tracking-tight">
              Sua história <br />
              <span className="italic font-light text-muted">merece ser contada.</span>
            </h1>

            <p className="font-heading text-xl sm:text-2xl italic text-primary-dark/80 mt-5 font-light">
              Fotografias para sentir, viver e lembrar.
            </p>

            <p className="mt-6 text-muted font-body text-base lg:text-lg leading-relaxed max-w-xl">
              Existem fases, encontros e pequenos gestos que merecem ser
              guardados. Meu olhar busca registrar a beleza das histórias reais,
              com sensibilidade e atenção aos detalhes que tornam cada momento
              único e eterno.
            </p>

            {/* Actions — Buttons with 8px Radius (Image 1 reference) */}
            <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4 mt-10">
              <a
                href={getWhatsAppUrl('geral')}
                target="_blank"
                rel="noopener noreferrer"
                className="bg-primary-dark text-canvas px-7 py-3.5 rounded-lg font-body font-semibold text-xs tracking-wider uppercase hover:bg-accent transition-colors shadow-xs inline-flex items-center justify-center gap-2.5 text-center"
              >
                <MessageCircle className="w-4 h-4 text-canvas" />
                <span>Quero registrar minha história</span>
              </a>
              <a
                href="#ensaios"
                className="border border-border-soft text-primary-dark px-7 py-3.5 rounded-lg font-body font-semibold text-xs tracking-wider uppercase hover:border-primary-dark hover:bg-surface transition-colors inline-flex items-center justify-center text-center bg-canvas"
              >
                Conheça os ensaios
              </a>
            </div>

            {/* Micro Metadata */}
            <div className="flex items-center gap-6 mt-12 pt-6 border-t border-border-soft text-xs text-muted/80">
              <span>Gestantes · Famílias · Casais</span>
              <span>—</span>
              <span>Luz Natural em Casa, Campo ou Estúdio</span>
            </div>
          </div>

          {/* Right Column — Interactive Archival Bounce Cards Gallery (5 cols, React Bits) */}
          <div className="lg:col-span-5 relative w-full">
            <HeroGallery />
          </div>
        </div>
      </div>

      {/* Bottom Scroll Indicator */}
      <div className="max-w-7xl mx-auto px-6 lg:px-8 w-full pt-8 flex items-center justify-between text-muted text-xs border-t border-border-soft">
        <a 
          href="#sobre" 
          className="inline-flex items-center gap-2 hover:text-primary-dark transition-colors group"
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
