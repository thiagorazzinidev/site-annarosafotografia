'use client';

import React, { useState, useEffect, useRef } from 'react';
import Image from 'next/image';
import { 
  X, 
  MessageCircle, 
  Eye, 
  ChevronLeft, 
  ChevronRight,
  Hand
} from 'lucide-react';
import CardSwap, { Card, CardSwapHandle } from './CardSwap';
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
    series: 'SÉRIE 01 · FAMÍLIA',
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
  const swapRef = useRef<CardSwapHandle>(null);
  const [activePhotoIndex, setActivePhotoIndex] = useState<number>(0);
  const [selectedPhoto, setSelectedPhoto] = useState<HeroPhotoItem | null>(null);
  const [dimensions, setDimensions] = useState({
    width: 320,
    height: 410,
    cardDistance: 38,
    verticalDistance: 16
  });

  // Responsive sizing for CardSwap
  useEffect(() => {
    const updateSize = () => {
      const w = window.innerWidth;
      if (w < 480) {
        setDimensions({
          width: 255,
          height: 330,
          cardDistance: 22,
          verticalDistance: 12
        });
      } else if (w < 640) {
        setDimensions({
          width: 280,
          height: 360,
          cardDistance: 28,
          verticalDistance: 14
        });
      } else if (w < 1024) {
        setDimensions({
          width: 310,
          height: 400,
          cardDistance: 34,
          verticalDistance: 16
        });
      } else {
        setDimensions({
          width: 320,
          height: 410,
          cardDistance: 38,
          verticalDistance: 16
        });
      }
    };

    updateSize();
    window.addEventListener('resize', updateSize);
    return () => window.removeEventListener('resize', updateSize);
  }, []);

  // Escape key and body scroll lock for modal
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') setSelectedPhoto(null);
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

  const currentPhoto = HERO_GALLERY_PHOTOS[activePhotoIndex] || HERO_GALLERY_PHOTOS[0];

  const handleNext = () => {
    swapRef.current?.next();
  };

  const handlePrev = () => {
    swapRef.current?.prev();
  };

  const handleSelectSeries = (index: number) => {
    if (index === activePhotoIndex) return;
    const diff = (index - activePhotoIndex + HERO_GALLERY_PHOTOS.length) % HERO_GALLERY_PHOTOS.length;
    for (let i = 0; i < diff; i++) {
      setTimeout(() => swapRef.current?.next(), i * 150);
    }
  };

  return (
    <div className="relative w-full flex flex-col items-center">
      {/* Ambient Fine-Art Radial Glow */}
      <div 
        className="absolute inset-0 -top-10 -bottom-10 bg-radial from-accent/12 via-surface/30 to-transparent blur-3xl pointer-events-none -z-10"
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
            Coleção Autoral · 5 Momentos
          </span>
        </div>

        <div className="flex items-center gap-2 text-muted text-[10px] sm:text-[11px] font-body shrink-0">
          <span className="font-semibold text-primary-dark">0{activePhotoIndex + 1}</span>
          <span className="text-muted/50">/</span>
          <span>05</span>
          <span className="hidden sm:inline-flex items-center gap-1 text-muted/70 ml-2 border-l border-border-soft/80 pl-2">
            <Hand className="w-3 h-3 text-accent" />
            <span>Use as setas ou clique</span>
          </span>
        </div>
      </div>

      {/* 3D CardSwap Stage With Prominent Side Navigation Arrows for Desktop */}
      <div className="relative w-full flex items-center justify-center py-2 overflow-visible">
        
        {/* DESKTOP SIDE ARROW - LEFT (Foto Anterior) */}
        <button
          type="button"
          onClick={handlePrev}
          className="hidden lg:flex absolute left-0 xl:-left-2 top-1/2 -translate-y-1/2 z-30 w-12 h-12 rounded-none bg-canvas/95 hover:bg-primary-dark text-primary-dark hover:text-canvas border border-border-soft/90 shadow-md backdrop-blur-md items-center justify-center transition-all duration-200 cursor-pointer group/btn"
          aria-label="Foto anterior"
          title="Foto anterior"
        >
          <ChevronLeft className="w-6 h-6 group-hover/btn:-translate-x-0.5 transition-transform" />
        </button>

        {/* The CardSwap 3D Deck */}
        <CardSwap
          ref={swapRef}
          width={dimensions.width}
          height={dimensions.height}
          cardDistance={dimensions.cardDistance}
          verticalDistance={dimensions.verticalDistance}
          depth={200}
          skewAmount={3}
          visibleCards={3}
          autoplay={true}
          delay={4800}
          pauseOnHover={true}
          draggable={true}
          cardRadius={0}
          theme="light"
          onChange={(index) => setActivePhotoIndex(index)}
          onCardClick={(index) => setSelectedPhoto(HERO_GALLERY_PHOTOS[index])}
          className="mx-auto"
        >
          {HERO_GALLERY_PHOTOS.map((photo, index) => (
            <Card
              key={photo.id}
              className="relative w-full h-full overflow-hidden bg-surface border border-border-soft/80 shadow-md cursor-grab active:cursor-grabbing rounded-none group"
            >
              {/* Full Image */}
              <div className="relative w-full h-full">
                <Image
                  src={photo.src}
                  alt={photo.alt}
                  fill
                  className="object-cover transition-transform duration-500 ease-out group-hover:scale-[1.02]"
                  sizes="(max-width: 640px) 280px, 350px"
                  priority={index === 0}
                />

                {/* Archival Specification Stamp (Top-Left) */}
                <div className="absolute top-3.5 left-3.5 bg-canvas/95 backdrop-blur-xs px-2.5 py-1 border border-border-soft/80 shadow-2xs pointer-events-none">
                  <span className="font-body text-[9px] uppercase tracking-widest text-primary-dark font-medium block">
                    {photo.series}
                  </span>
                </div>

                {/* Archival Number (Top-Right) */}
                <div className="absolute top-3.5 right-3.5 bg-canvas/95 backdrop-blur-xs px-2 py-0.5 border border-border-soft/80 shadow-2xs pointer-events-none">
                  <span className="font-body text-[9px] uppercase tracking-widest text-accent font-semibold block">
                    0{photo.id}
                  </span>
                </div>

                {/* Clean Bottom Label Overlay */}
                <div className="absolute bottom-3.5 left-3.5 right-3.5 bg-canvas/95 backdrop-blur-xs border border-border-soft/80 p-3 flex items-center justify-between shadow-xs">
                  <div className="min-w-0 pr-2">
                    <span className="font-body text-[9px] uppercase tracking-widest text-muted block leading-none mb-1">
                      {photo.subtitle}
                    </span>
                    <span className="font-heading text-sm sm:text-base text-primary-dark font-light block leading-tight truncate">
                      {photo.title}
                    </span>
                  </div>
                  <span className="font-body text-[10px] text-muted shrink-0">
                    {photo.location.split('·')[0].trim()}
                  </span>
                </div>
              </div>
            </Card>
          ))}
        </CardSwap>

        {/* DESKTOP SIDE ARROW - RIGHT (Próxima Foto) */}
        <button
          type="button"
          onClick={handleNext}
          className="hidden lg:flex absolute right-0 xl:-right-2 top-1/2 -translate-y-1/2 z-30 w-12 h-12 rounded-none bg-canvas/95 hover:bg-primary-dark text-primary-dark hover:text-canvas border border-border-soft/90 shadow-md backdrop-blur-md items-center justify-center transition-all duration-200 cursor-pointer group/btn"
          aria-label="Próxima foto"
          title="Próxima foto"
        >
          <ChevronRight className="w-6 h-6 group-hover/btn:translate-x-0.5 transition-transform" />
        </button>

      </div>

      {/* Synchronized Archival Pedestal Below the Deck */}
      <div className="w-full mt-4 bg-canvas/95 border border-border-soft/90 p-3.5 sm:p-4 text-left shadow-xs rounded-none">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3">
          <div className="space-y-1 min-w-0 flex-1">
            <div className="flex flex-wrap items-center gap-1.5 sm:gap-2">
              <span className="font-body text-[10px] uppercase tracking-widest text-muted block font-medium truncate">
                {currentPhoto.subtitle} · {currentPhoto.series.split('·')[0].trim()}
              </span>
              <span className="text-[10px] text-accent font-semibold shrink-0">
                (0{currentPhoto.id}/05)
              </span>
            </div>
            
            <h3 className="font-heading text-lg sm:text-xl text-primary-dark font-light leading-snug">
              {currentPhoto.title}
            </h3>
            
            <p className="font-body text-[11px] sm:text-xs text-muted/90 flex flex-wrap items-center gap-x-1.5 gap-y-0.5 pt-0.5">
              <span>{currentPhoto.location}</span>
              <span className="text-muted/50 hidden xs:inline">—</span>
              <span className="italic">{currentPhoto.lighting}</span>
            </p>
          </div>

          {/* Action Buttons: Mobile arrows + Ampliar */}
          <div className="flex items-center gap-1.5 shrink-0 pt-2.5 sm:pt-0 border-t sm:border-t-0 border-border-soft/60 justify-between sm:justify-end">
            {/* Mobile-only arrows */}
            <div className="flex lg:hidden items-center gap-1.5">
              <button
                type="button"
                onClick={handlePrev}
                className="w-8 h-8 rounded-none border border-border-soft bg-surface/70 hover:bg-primary-dark hover:text-canvas hover:border-primary-dark transition-colors flex items-center justify-center text-primary-dark cursor-pointer"
                aria-label="Foto anterior"
                title="Foto anterior"
              >
                <ChevronLeft className="w-4 h-4" />
              </button>
              <button
                type="button"
                onClick={handleNext}
                className="w-8 h-8 rounded-none border border-border-soft bg-surface/70 hover:bg-primary-dark hover:text-canvas hover:border-primary-dark transition-colors flex items-center justify-center text-primary-dark cursor-pointer"
                aria-label="Próxima foto"
                title="Próxima foto"
              >
                <ChevronRight className="w-4 h-4" />
              </button>
            </div>

            <button
              type="button"
              onClick={() => setSelectedPhoto(currentPhoto)}
              className="flex items-center gap-1.5 px-3 py-1.5 rounded-none bg-surface border border-border-soft/70 hover:bg-primary-dark hover:text-canvas hover:border-primary-dark transition-all text-primary-dark shadow-2xs cursor-pointer"
              title="Ampliar e ver história"
            >
              <Eye className="w-3.5 h-3.5" />
              <span className="font-body text-[10px] uppercase tracking-wider font-semibold">
                Ver Detalhes
              </span>
            </button>
          </div>
        </div>
      </div>

      {/* Interactive Micro Series Pills */}
      <div className="w-full flex items-center justify-between gap-1.5 mt-3 pt-3 border-t border-border-soft/60">
        <span className="text-[10px] font-body uppercase tracking-widest text-muted/70 shrink-0">
          Séries:
        </span>
        
        <div className="flex items-center gap-1.5 flex-1 justify-end">
          {HERO_GALLERY_PHOTOS.map((photo, idx) => {
            const isActive = activePhotoIndex === idx;
            return (
              <button
                key={photo.id}
                type="button"
                onClick={() => handleSelectSeries(idx)}
                className={`px-2.5 py-1 text-[11px] font-body tracking-wider transition-all rounded-none border cursor-pointer ${
                  isActive
                    ? 'bg-primary-dark text-canvas border-primary-dark shadow-xs font-semibold'
                    : 'bg-canvas text-muted border-border-soft/70 hover:border-primary-dark/60 hover:text-primary-dark'
                }`}
                aria-label={`Ir para foto ${photo.id}: ${photo.title}`}
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
            onClick={(e) => e.stopPropagation()}
          >
            {/* Close Button */}
            <button
              onClick={() => setSelectedPhoto(null)}
              className="absolute top-4 right-4 z-20 w-9 h-9 rounded-none bg-canvas/90 hover:bg-canvas text-primary-dark border border-border-soft flex items-center justify-center shadow-xs transition-colors cursor-pointer"
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
              <div className="absolute top-4 left-4 bg-canvas/90 px-3 py-1 border border-border-soft/70 rounded-none">
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
                  className="w-full bg-primary-dark text-canvas hover:bg-accent px-5 py-3 rounded-none font-body font-semibold text-xs tracking-wider uppercase transition-colors shadow-xs flex items-center justify-center gap-2 text-center"
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
