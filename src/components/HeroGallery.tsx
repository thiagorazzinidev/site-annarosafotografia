'use client';

import React, { useState, useEffect } from 'react';
import Image from 'next/image';
import { ArrowUpRight, Sparkles, X, MessageCircle, Eye } from 'lucide-react';
import BounceCards from './BounceCards';
import { getWhatsAppUrl } from '@/lib/constants';

export interface HeroPhotoItem {
  id: number;
  src: string;
  alt: string;
  series: string;
  category: string;
  title: string;
  subtitle: string;
  location: string;
  lighting: string;
  description: string;
}

export const HERO_GALLERY_PHOTOS: HeroPhotoItem[] = [
  {
    id: 1,
    src: '/images/hero-principal.jpg',
    alt: 'Ensaio fotográfico de família ao pôr do sol com luz dourada natural',
    series: 'SÉRIE 01 · LUZ NATURAL',
    category: 'Família & Afeto',
    title: 'Luz de fim de tarde',
    subtitle: 'Momento Espontâneo',
    location: 'Indaiatuba · SP',
    lighting: 'Golden Hour no Campo',
    description:
      'A espontaneidade do abraço coletivo banhado pela última luz dourada do dia. Sem poses artificiais, apenas a verdade da convivência e o calor dos laços familiares.'
  },
  {
    id: 2,
    src: '/images/gestante.jpg',
    alt: 'Ensaio gestante com luz suave de janela e vestido branco',
    series: 'SÉRIE 02 · GESTANTE',
    category: 'Maternidade',
    title: 'A doce espera',
    subtitle: 'Sensibilidade & Calmaria',
    location: 'Indaiatuba · Estúdio Natural',
    lighting: 'Luz Suave de Janela',
    description:
      'A serenidade da espera pela vida que chega. Tons neutros, texturas delicadas e um olhar atento ao pulsar silencioso e sublime da gestação.'
  },
  {
    id: 3,
    src: '/images/casal.jpg',
    alt: 'Ensaio intimista de casal com conexão autoral e luz natural',
    series: 'SÉRIE 03 · CASAL',
    category: 'Casal & Conexão',
    title: 'Toque & Cumplicidade',
    subtitle: 'Conexão Autoral',
    location: 'Campinas · Região',
    lighting: 'Sombras Vivas & Luz Quente',
    description:
      'Gestos sutis, mãos entrelaçadas e olhares compartilhados. A história de amor contada através da sensibilidade de quem vive cada instante.'
  },
  {
    id: 4,
    src: '/images/portfolio-1.jpg',
    alt: 'Registro documental de família em casa no aconchego do lar',
    series: 'SÉRIE 04 · NO LAR',
    category: 'Documental & Lar',
    title: 'Aconchego em Família',
    subtitle: 'Documental Espontâneo',
    location: 'Indaiatuba · No Lar',
    lighting: 'Luz Matinal Difusa',
    description:
      'As manhãs lentas em família, o café, as brincadeiras descalças na cama. A memória autêntica que seus filhos vão querer revisitar para sempre.'
  },
  {
    id: 5,
    src: '/images/portfolio-4.jpg',
    alt: 'Retrato artístico ao entardecer com luz dourada do campo',
    series: 'SÉRIE 05 · AUTORAL',
    category: 'Luz Autoral',
    title: 'Ouro do Entardecer',
    subtitle: 'Poesia em Movimento',
    location: 'Holambra · Campo Aberto',
    lighting: 'Contraste de Contra-luz',
    description:
      'A luz que acaricia e destaca a silhueta em movimento livre. A busca incessante pela beleza espontânea da natureza e a poesia do instante.'
  }
];

export default function HeroGallery() {
  const [hoveredIndex, setHoveredIndex] = useState<number>(-1);
  const [activePhotoIndex, setActivePhotoIndex] = useState<number>(0);
  const [selectedPhoto, setSelectedPhoto] = useState<HeroPhotoItem | null>(null);
  const [dimensions, setDimensions] = useState({
    containerWidth: 440,
    containerHeight: 390,
    cardSize: 215,
    spread: 50,
    pushDistance: 95
  });

  // Responsive dimensions detection
  useEffect(() => {
    const updateSize = () => {
      const width = window.innerWidth;
      if (width < 480) {
        setDimensions({
          containerWidth: Math.min(width - 32, 340),
          containerHeight: 320,
          cardSize: 175,
          spread: 34,
          pushDistance: 55
        });
      } else if (width < 640) {
        setDimensions({
          containerWidth: 380,
          containerHeight: 350,
          cardSize: 195,
          spread: 42,
          pushDistance: 75
        });
      } else if (width < 1024) {
        setDimensions({
          containerWidth: 420,
          containerHeight: 375,
          cardSize: 205,
          spread: 46,
          pushDistance: 85
        });
      } else {
        setDimensions({
          containerWidth: 440,
          containerHeight: 390,
          cardSize: 215,
          spread: 50,
          pushDistance: 95
        });
      }
    };

    updateSize();
    window.addEventListener('resize', updateSize);
    return () => window.removeEventListener('resize', updateSize);
  }, []);

  // Escape key and scroll lock for Modal
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        setSelectedPhoto(null);
      }
    };
    if (selectedPhoto) {
      window.addEventListener('keydown', handleKeyDown);
      document.body.style.overflow = 'hidden';
    }
    return () => {
      window.removeEventListener('keydown', handleKeyDown);
      document.body.style.overflow = '';
    };
  }, [selectedPhoto]);

  // Current active photo
  const currentPhoto =
    hoveredIndex >= 0 && hoveredIndex < HERO_GALLERY_PHOTOS.length
      ? HERO_GALLERY_PHOTOS[hoveredIndex]
      : HERO_GALLERY_PHOTOS[activePhotoIndex];

  const handleCardHover = (index: number) => {
    setHoveredIndex(index);
    if (index >= 0) {
      setActivePhotoIndex(index);
    }
  };

  const handleCardClick = (index: number) => {
    if (index >= 0 && index < HERO_GALLERY_PHOTOS.length) {
      setSelectedPhoto(HERO_GALLERY_PHOTOS[index]);
    }
  };

  return (
    <div className="relative w-full flex flex-col items-center">
      {/* Ambient Fine-Art Radial Glow */}
      <div 
        className="absolute inset-0 -top-8 -bottom-8 bg-radial from-accent/12 via-surface/30 to-transparent blur-3xl pointer-events-none -z-10"
        aria-hidden="true" 
      />

      {/* Archival Specification Stamp Header */}
      <div className="w-full flex items-center justify-between gap-2 pb-3 mb-2 border-b border-border-soft/70">
        <div className="flex items-center gap-2">
          <span className="relative flex h-2 w-2 shrink-0">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-accent opacity-75" />
            <span className="relative inline-flex rounded-full h-2 w-2 bg-accent" />
          </span>
          <span className="font-body text-[10px] uppercase tracking-[0.2em] text-primary-dark font-medium whitespace-nowrap">
            Coleção Autoral <span className="hidden sm:inline">· 5 Momentos</span>
          </span>
        </div>

        <div className="flex items-center gap-1.5 text-muted text-[10px] sm:text-[11px] font-body shrink-0">
          <Sparkles className="w-3 h-3 text-accent shrink-0" />
          <span className="hidden sm:inline">Passe o cursor ou toque para folhear</span>
          <span className="sm:hidden">Toque para folhear</span>
        </div>
      </div>

      {/* Bounce Cards Stage */}
      <div className="relative flex items-center justify-center py-2 overflow-visible w-full">
        <BounceCards
          images={HERO_GALLERY_PHOTOS.map(p => ({
            src: p.src,
            alt: p.alt,
            title: p.title,
            series: p.series,
            location: p.location
          }))}
          containerWidth={dimensions.containerWidth}
          containerHeight={dimensions.containerHeight}
          cardSize={dimensions.cardSize}
          aspectRatio="aspect-[4/5]"
          spread={dimensions.spread}
          rotation={8}
          arc={-15}
          animationDelay={0.3}
          animationStagger={0.07}
          bounciness={0.65}
          pushDistance={dimensions.pushDistance}
          hoverScale={1.08}
          borderWidth={1}
          borderColor="#E5DFD7"
          radius={0}
          shadow={true}
          activeCardIndex={hoveredIndex >= 0 ? hoveredIndex : activePhotoIndex}
          onCardHover={handleCardHover}
          onCardClick={handleCardClick}
          className="mx-auto"
        />
      </div>

      {/* Synchronized Archival Pedestal (The Upgraded Bottom Label) */}
      <button 
        type="button"
        onClick={() => setSelectedPhoto(currentPhoto)}
        className="w-full mt-3 bg-canvas/95 border border-border-soft/90 p-3.5 sm:p-4 text-left transition-all duration-300 hover:border-primary-dark/40 hover:shadow-md group rounded-none block"
      >
        <div className="flex items-start justify-between gap-3">
          <div className="space-y-1 min-w-0">
            <div className="flex flex-wrap items-center gap-1.5 sm:gap-2">
              <span className="font-body text-[10px] uppercase tracking-widest text-muted block font-medium truncate">
                {currentPhoto.subtitle} · {currentPhoto.series.split('·')[0].trim()}
              </span>
              <span className="text-[10px] text-accent font-semibold shrink-0">
                (0{currentPhoto.id}/05)
              </span>
            </div>
            
            <h3 className="font-heading text-lg sm:text-xl text-primary-dark font-light leading-snug group-hover:text-accent transition-colors">
              {currentPhoto.title}
            </h3>
            
            <p className="font-body text-[11px] sm:text-xs text-muted/90 flex flex-wrap items-center gap-x-1.5 gap-y-0.5 pt-0.5">
              <span>{currentPhoto.location}</span>
              <span className="text-muted/50 hidden xs:inline">—</span>
              <span className="italic">{currentPhoto.lighting}</span>
            </p>
          </div>

          <div className="flex items-center gap-1.5 shrink-0 px-2.5 sm:px-3 py-1.5 rounded-none bg-surface border border-border-soft/70 group-hover:bg-primary-dark group-hover:text-canvas group-hover:border-primary-dark transition-all shadow-2xs">
            <Eye className="w-3.5 h-3.5" />
            <span className="font-body text-[10px] uppercase tracking-wider font-semibold">
              Ampliar
            </span>
          </div>
        </div>
      </button>

      {/* Interactive Micro Series Pills */}
      <div className="w-full flex items-center justify-between gap-1.5 mt-3 pt-3 border-t border-border-soft/60">
        <span className="text-[10px] font-body uppercase tracking-widest text-muted/70 shrink-0">
          Séries:
        </span>
        
        <div className="flex items-center gap-1.5 flex-1 justify-end">
          {HERO_GALLERY_PHOTOS.map((photo, idx) => {
            const isActive =
              (hoveredIndex >= 0 ? hoveredIndex : activePhotoIndex) === idx;
            return (
              <button
                key={photo.id}
                type="button"
                onMouseEnter={() => {
                  setHoveredIndex(idx);
                  setActivePhotoIndex(idx);
                }}
                onMouseLeave={() => setHoveredIndex(-1)}
                onClick={() => {
                  setActivePhotoIndex(idx);
                  setSelectedPhoto(photo);
                }}
                className={`px-2.5 py-1 text-[11px] font-body tracking-wider transition-all rounded-none border ${
                  isActive
                    ? 'bg-primary-dark text-canvas border-primary-dark shadow-xs font-semibold'
                    : 'bg-canvas text-muted border-border-soft/70 hover:border-primary-dark/60 hover:text-primary-dark'
                }`}
                aria-label={`Ver foto ${photo.id}: ${photo.title}`}
              >
                0{photo.id}
              </button>
            );
          })}
        </div>
      </div>

      {/* Editorial High-Resolution Lightbox Modal */}
      {selectedPhoto && (
        <div
          role="dialog"
          aria-modal="true"
          className="fixed inset-0 z-[100] flex items-center justify-center p-4 sm:p-6 bg-primary-dark/85 backdrop-blur-md animate-in fade-in duration-200"
          onClick={() => setSelectedPhoto(null)}
        >
          <div
            className="relative max-w-4xl w-full bg-canvas border border-border-soft overflow-hidden shadow-2xl flex flex-col md:flex-row max-h-[92vh] animate-in zoom-in-95 duration-200 rounded-none"
            onClick={e => e.stopPropagation()}
          >
            {/* Close Button */}
            <button
              onClick={() => setSelectedPhoto(null)}
              className="absolute top-4 right-4 z-20 w-9 h-9 rounded-full bg-canvas/90 hover:bg-canvas text-primary-dark border border-border-soft flex items-center justify-center shadow-xs transition-colors"
              aria-label="Fechar visualização"
            >
              <X className="w-5 h-5" />
            </button>

            {/* Photo Preview */}
            <div className="relative md:w-7/12 aspect-[4/5] md:aspect-auto md:min-h-[480px] bg-surface">
              <Image
                src={selectedPhoto.src}
                alt={selectedPhoto.alt}
                fill
                className="object-cover"
                sizes="(max-width: 768px) 100vw, 55vw"
                priority
              />
              <div className="absolute top-4 left-4 bg-canvas/90 px-3 py-1 border border-border-soft/70">
                <span className="font-body text-[10px] uppercase tracking-widest text-primary-dark font-medium">
                  {selectedPhoto.series}
                </span>
              </div>
            </div>

            {/* Editorial Details & CTA */}
            <div className="md:w-5/12 p-6 sm:p-8 flex flex-col justify-between overflow-y-auto bg-canvas">
              <div className="space-y-4">
                <div className="border-b border-border-soft pb-4">
                  <span className="font-body text-[10px] uppercase tracking-[0.25em] text-accent block font-medium mb-1">
                    {selectedPhoto.category}
                  </span>
                  <h2 className="font-heading text-2xl sm:text-3xl text-primary-dark font-light">
                    {selectedPhoto.title}
                  </h2>
                </div>

                <p className="font-body text-sm text-muted leading-relaxed">
                  {selectedPhoto.description}
                </p>

                <div className="space-y-2 pt-2 border-t border-border-soft text-xs text-muted">
                  <div className="flex justify-between py-1 border-b border-border-soft/40">
                    <span className="uppercase tracking-wider text-[10px]">Local</span>
                    <span className="text-primary-dark font-medium">{selectedPhoto.location}</span>
                  </div>
                  <div className="flex justify-between py-1 border-b border-border-soft/40">
                    <span className="uppercase tracking-wider text-[10px]">Iluminação</span>
                    <span className="text-primary-dark font-medium">{selectedPhoto.lighting}</span>
                  </div>
                  <div className="flex justify-between py-1">
                    <span className="uppercase tracking-wider text-[10px]">Filosofia</span>
                    <span className="text-primary-dark font-medium">Luz Natural & Autoral</span>
                  </div>
                </div>
              </div>

              {/* Direct Booking CTA */}
              <div className="mt-8 pt-4 border-t border-border-soft space-y-2">
                <a
                  href={getWhatsAppUrl(`ensaio-${selectedPhoto.id}`)}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full bg-primary-dark text-canvas hover:bg-accent px-5 py-3 rounded-md font-body font-semibold text-xs tracking-wider uppercase transition-colors shadow-xs flex items-center justify-center gap-2 text-center"
                >
                  <MessageCircle className="w-4 h-4 text-canvas" />
                  <span>Quero um ensaio neste estilo</span>
                </a>
                <p className="text-center font-body text-[11px] text-muted">
                  Resposta carinhosa e direta pelo WhatsApp
                </p>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
