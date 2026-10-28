"use client";

import { useState } from "react";
import Image from "next/image";
import { ExternalLink, X, MessageCircle, Eye } from "lucide-react";
import { INSTAGRAM_URL, getWhatsAppUrl } from "@/lib/constants";

interface PortfolioItem {
  id: number;
  src: string;
  alt: string;
  title: string;
  category: "gestante" | "familia" | "casal";
  location: string;
  lighting: string;
  aspectClass: string;
}

const portfolioData: PortfolioItem[] = [
  {
    id: 1,
    src: "/images/portfolio-1.jpg",
    alt: "Registro documental de família em casa com luz natural",
    title: "Aconchego em Família",
    category: "familia",
    location: "Indaiatuba · Ensaio em Casa",
    lighting: "Luz suave de janela",
    aspectClass: "col-span-2 md:col-span-2 row-span-2 aspect-[4/5]",
  },
  {
    id: 2,
    src: "/images/portfolio-2.jpg",
    alt: "Detalhe de mãos entrelaçadas em ensaio de casal",
    title: "Toque & Cumplicidade",
    category: "casal",
    location: "Campinas · Estúdio Natural",
    lighting: "Sombras e texturas",
    aspectClass: "col-span-1 aspect-square",
  },
  {
    id: 3,
    src: "/images/portfolio-3.jpg",
    alt: "Ensaio gestante ao ar livre com luz dourada",
    title: "A Doce Espera",
    category: "gestante",
    location: "Indaiatuba · Campo",
    lighting: "Golden hour ao entardecer",
    aspectClass: "col-span-1 aspect-[4/5]",
  },
  {
    id: 4,
    src: "/images/portfolio-4.jpg",
    alt: "Retrato de família em momento espontâneo",
    title: "Gargalhadas Espontâneas",
    category: "familia",
    location: "Salto · Espaço Aberto",
    lighting: "Luz quente de tarde",
    aspectClass: "col-span-1 aspect-square",
  },
  {
    id: 5,
    src: "/images/portfolio-5.jpg",
    alt: "Casal caminhando de mãos dadas durante golden hour",
    title: "Caminhos Partilhados",
    category: "casal",
    location: "Itu · Pôr do Sol",
    lighting: "Contraluz dourada",
    aspectClass: "col-span-1 aspect-[4/5]",
  },
  {
    id: 6,
    src: "/images/portfolio-6.jpg",
    alt: "Bebê dormindo nos braços da mãe em ensaio newborn",
    title: "Primeiro Olhar",
    category: "familia",
    location: "Indaiatuba · Lar da Família",
    lighting: "Luz difusa matinal",
    aspectClass: "col-span-1 aspect-square",
  },
];

const FILTER_TABS = [
  { id: "todos", label: "Todos os registros" },
  { id: "gestante", label: "Gestantes" },
  { id: "familia", label: "Famílias" },
  { id: "casal", label: "Casais" },
];

export default function Portfolio() {
  const [activeFilter, setActiveFilter] = useState("todos");
  const [selectedPhoto, setSelectedPhoto] = useState<PortfolioItem | null>(null);

  const filteredImages =
    activeFilter === "todos"
      ? portfolioData
      : portfolioData.filter((img) => img.category === activeFilter);

  return (
    <section id="portfolio" className="py-28 lg:py-36 bg-canvas relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-6">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 pb-8 border-b border-border-soft/60">
          <div>
            <div className="inline-flex items-center gap-2 mb-3 px-3.5 py-1.5 rounded-full bg-surface border border-border-soft/60">
              <span className="w-1.5 h-1.5 rounded-full bg-accent" />
              <span className="font-body text-xs uppercase tracking-widest text-muted font-medium">
                Galeria Autoral
              </span>
            </div>
            <h2 className="font-heading text-3xl sm:text-4xl lg:text-[48px] font-light leading-tight text-primary-dark">
              Histórias diferentes. Um olhar atento aos detalhes.
            </h2>
          </div>
          <p className="mt-4 md:mt-0 font-body text-sm sm:text-base text-muted max-w-md leading-relaxed">
            Cada fotografia é um instante singular. Clique em qualquer imagem para abrir a ampliação em alta resolução com os detalhes da sessão.
          </p>
        </div>

        {/* Filter Pills */}
        <div className="flex flex-wrap items-center gap-2 sm:gap-3 mb-12">
          {FILTER_TABS.map((tab) => {
            const isActive = activeFilter === tab.id;
            return (
              <button
                key={tab.id}
                type="button"
                onClick={() => setActiveFilter(tab.id)}
                className={`px-5 py-2.5 rounded-full font-body text-xs sm:text-sm font-medium transition-all duration-300 ${
                  isActive
                    ? "bg-primary-dark text-canvas shadow-sm"
                    : "bg-surface/60 text-muted hover:text-primary-dark hover:bg-surface border border-border-soft/60"
                }`}
              >
                {tab.label}
              </button>
            );
          })}
        </div>

        {/* Asymmetric Fine-Art Editorial Grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 gap-4 sm:gap-6">
          {filteredImages.map((image) => (
            <div
              key={image.id}
              onClick={() => setSelectedPhoto(image)}
              className={`relative rounded-3xl overflow-hidden group cursor-pointer border border-border-soft/70 shadow-sm hover:shadow-2xl transition-all duration-500 bg-surface ${image.aspectClass}`}
            >
              <Image
                src={image.src}
                alt={image.alt}
                fill
                className="object-cover group-hover:scale-105 transition-transform duration-700 ease-out"
                sizes="(max-width: 768px) 50vw, 33vw"
              />

              {/* Hover Overlay with Archival Info & View Icon */}
              <div className="absolute inset-0 bg-gradient-to-t from-primary-dark/80 via-primary-dark/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-between p-5 sm:p-6 text-canvas">
                <div className="flex justify-end">
                  <span className="w-9 h-9 rounded-full bg-canvas/30 backdrop-blur-md flex items-center justify-center text-canvas">
                    <Eye className="w-4 h-4" />
                  </span>
                </div>
                <div>
                  <span className="font-body text-[10px] uppercase tracking-widest text-accent-light font-semibold block mb-1">
                    {image.location}
                  </span>
                  <h4 className="font-heading text-xl sm:text-2xl font-light">
                    {image.title}
                  </h4>
                  <p className="font-body text-xs text-canvas/70 mt-1">
                    {image.lighting}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Gallery Footer & Instagram */}
        <div className="flex flex-col sm:flex-row items-center justify-between gap-6 mt-16 pt-8 border-t border-border-soft/60">
          <p className="font-body text-xs text-muted">
            Fotografias autorais sob luz natural · Indaiatuba, Campinas e região.
          </p>

          <a
            href={INSTAGRAM_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2.5 px-7 py-3 rounded-full bg-surface hover:bg-canvas text-primary-dark hover:text-accent border border-border-soft hover:border-primary-dark/40 font-body text-xs font-semibold uppercase tracking-wider transition-all duration-300 shadow-xs hover:shadow-sm"
          >
            <span>Acompanhar no Instagram</span>
            <ExternalLink className="w-3.5 h-3.5" />
          </a>
        </div>
      </div>

      {/* Interactive Lightbox Modal */}
      {selectedPhoto && (
        <div 
          className="fixed inset-0 z-50 bg-night/95 backdrop-blur-md flex items-center justify-center p-4 sm:p-8 animate-in fade-in duration-300"
          onClick={() => setSelectedPhoto(null)}
          role="dialog"
          aria-modal="true"
        >
          <div 
            className="relative max-w-4xl w-full max-h-[90vh] bg-night rounded-3xl overflow-hidden border border-border-soft/20 flex flex-col md:flex-row shadow-2xl"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Close button */}
            <button
              onClick={() => setSelectedPhoto(null)}
              className="absolute top-4 right-4 z-20 w-10 h-10 rounded-full bg-black/50 text-canvas hover:bg-accent flex items-center justify-center transition-colors"
              aria-label="Fechar galeria"
            >
              <X className="w-5 h-5" />
            </button>

            {/* Photo Preview */}
            <div className="relative aspect-[4/5] md:w-3/5 w-full min-h-[350px]">
              <Image
                src={selectedPhoto.src}
                alt={selectedPhoto.alt}
                fill
                className="object-cover"
                sizes="(max-width: 1024px) 100vw, 60vw"
                priority
              />
            </div>

            {/* Archival metadata panel */}
            <div className="p-8 md:w-2/5 flex flex-col justify-between text-canvas bg-night/90">
              <div>
                <span className="font-body text-xs uppercase tracking-widest text-accent font-semibold block mb-2">
                  Registro Editorial
                </span>
                <h3 className="font-heading text-3xl font-light leading-tight mb-4">
                  {selectedPhoto.title}
                </h3>
                <div className="space-y-3 font-body text-sm text-canvas/70 border-t border-canvas/10 pt-4">
                  <div>
                    <span className="text-canvas/40 block text-xs uppercase tracking-wider">Locação</span>
                    <span className="text-canvas">{selectedPhoto.location}</span>
                  </div>
                  <div>
                    <span className="text-canvas/40 block text-xs uppercase tracking-wider">Atmosfera</span>
                    <span className="text-canvas">{selectedPhoto.lighting}</span>
                  </div>
                </div>
              </div>

              <div className="mt-8 pt-6 border-t border-canvas/10">
                <a
                  href={getWhatsAppUrl(selectedPhoto.category)}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full inline-flex items-center justify-center gap-2.5 bg-accent hover:bg-accent-hover text-canvas py-3.5 px-6 rounded-full font-body font-semibold text-xs tracking-wider uppercase transition-colors shadow-lg"
                >
                  <MessageCircle className="w-4 h-4" />
                  <span>Quero um ensaio assim</span>
                </a>
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
