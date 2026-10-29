"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import { ExternalLink, X, MessageCircle, ArrowUpRight } from "lucide-react";
import {
  TabProvider,
  TabList,
  Tab,
  TabPanel,
  Dialog,
  DialogDismiss,
  DialogHeading,
  DialogDescription,
  useDialogStore,
} from "@ariakit/react";
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
    aspectClass: "col-span-12 md:col-span-8 aspect-[16/10]",
  },
  {
    id: 2,
    src: "/images/portfolio-2.jpg",
    alt: "Detalhe de mãos entrelaçadas em ensaio de casal",
    title: "Toque & Cumplicidade",
    category: "casal",
    location: "Campinas · Estúdio Natural",
    lighting: "Sombras e texturas",
    aspectClass: "col-span-6 md:col-span-4 aspect-square",
  },
  {
    id: 3,
    src: "/images/portfolio-3.jpg",
    alt: "Ensaio gestante ao ar livre com luz dourada",
    title: "A Doce Espera",
    category: "gestante",
    location: "Indaiatuba · Campo",
    lighting: "Golden hour ao entardecer",
    aspectClass: "col-span-6 md:col-span-4 aspect-[3/4]",
  },
  {
    id: 4,
    src: "/images/portfolio-4.jpg",
    alt: "Retrato de família em momento espontâneo",
    title: "Gargalhadas Espontâneas",
    category: "familia",
    location: "Salto · Espaço Aberto",
    lighting: "Luz quente de tarde",
    aspectClass: "col-span-12 md:col-span-8 aspect-[16/9]",
  },
  {
    id: 5,
    src: "/images/portfolio-5.jpg",
    alt: "Casal caminhando de mãos dadas durante golden hour",
    title: "Caminhos Partilhados",
    category: "casal",
    location: "Itu · Pôr do Sol",
    lighting: "Contraluz dourada",
    aspectClass: "col-span-6 md:col-span-5 aspect-[4/5]",
  },
  {
    id: 6,
    src: "/images/portfolio-6.jpg",
    alt: "Bebê dormindo nos braços da mãe em ensaio newborn",
    title: "Primeiro Olhar",
    category: "familia",
    location: "Indaiatuba · Lar da Família",
    lighting: "Luz difusa matinal",
    aspectClass: "col-span-6 md:col-span-7 aspect-[16/10]",
  },
];

const CATEGORIES = [
  { id: "todos", label: "Todos os Registros" },
  { id: "gestante", label: "Gestantes" },
  { id: "familia", label: "Famílias" },
  { id: "casal", label: "Casais" },
];

export default function Portfolio() {
  const [selectedPhoto, setSelectedPhoto] = useState<PortfolioItem | null>(null);
  const [activeCategory, setActiveCategory] = useState("todos");
  const [isMounted, setIsMounted] = useState(false);
  const dialog = useDialogStore({ open: false });

  useEffect(() => {
    setIsMounted(true);
  }, []);

  function handleOpenPhoto(item: PortfolioItem) {
    setSelectedPhoto(item);
    dialog.setOpen(true);
  }

  const filteredItems =
    activeCategory === "todos"
      ? portfolioData
      : portfolioData.filter((img) => img.category === activeCategory);

  return (
    <section id="portfolio" className="py-32 lg:py-44 bg-canvas relative">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        {/* Editorial Section Header — Scout Asymmetry & Negative Space */}
        <div className="grid lg:grid-cols-12 gap-8 lg:gap-16 items-end pb-12 mb-14 border-b border-border-soft">
          <div className="lg:col-span-7">
            <span className="font-body text-xs uppercase tracking-[0.25em] text-muted block mb-3 font-medium">
              Portfólio &amp; Arquivo Fotográfico
            </span>
            <h2 className="font-heading text-4xl sm:text-5xl lg:text-[60px] font-light leading-[1.08] text-primary-dark tracking-tight">
              Histórias diferentes. <br className="hidden sm:block" />
              <span className="italic font-light text-muted">Um olhar atento aos detalhes.</span>
            </h2>
          </div>
          <div className="lg:col-span-5">
            <p className="font-body text-base text-muted leading-relaxed max-w-md">
              Cada imagem é um recorte de afeto e luz natural. Navegue pelas séries autorais e selecione qualquer fotografia para inspecionar os detalhes da sessão.
            </p>
          </div>
        </div>

        {/* Ariakit Accessible Tabs Pattern */}
        <TabProvider defaultSelectedId="todos" id="portfolio-categories-tabs">
          {/* Tab Navigation Strip — Clean, Rectangular, No Pill Overuse */}
          <div className="mb-14 flex items-center justify-between flex-wrap gap-4">
            <TabList 
              aria-label="Categorias de ensaios fotográficos"
              className="flex items-center gap-2 p-1 bg-surface border border-border-soft/60 rounded-lg"
            >
              {CATEGORIES.map((cat) => (
                <Tab
                  key={cat.id}
                  id={cat.id}
                  className="px-5 py-2.5 rounded-md font-body text-xs uppercase tracking-wider font-semibold transition-all duration-200 outline-none focus-visible:ring-2 focus-visible:ring-primary-dark data-[selected]:bg-primary-dark data-[selected]:text-canvas data-[selected]:shadow-xs text-muted hover:text-primary-dark cursor-pointer"
                >
                  {cat.label}
                </Tab>
              ))}
            </TabList>

            <span className="font-body text-xs text-muted/70 tracking-wider hidden md:inline">
              [ 6 SÉRIES DOCUMENTADAS ]
            </span>
          </div>

          {/* Tab Panels with Asymmetric Editorial Photowall (Scout Inspired) */}
          {CATEGORIES.map((cat) => {
            const items =
              cat.id === "todos"
                ? portfolioData
                : portfolioData.filter((img) => img.category === cat.id);

            return (
              <TabPanel key={cat.id} tabId={cat.id} className="outline-none focus-visible:ring-2 focus-visible:ring-primary-dark">
                <div className="grid grid-cols-12 gap-6 lg:gap-8 items-start">
                  {items.map((image) => (
                    <button
                      key={image.id}
                      type="button"
                      onClick={() => handleOpenPhoto(image)}
                      className={`group relative overflow-hidden text-left bg-surface border border-border-soft/80 transition-all duration-500 hover:border-primary-dark/40 rounded-none cursor-pointer focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary-dark focus-visible:ring-offset-4 ${image.aspectClass}`}
                      aria-label={`Visualizar ampliação da foto: ${image.title}`}
                    >
                      <Image
                        src={image.src}
                        alt={image.alt}
                        fill
                        className="object-cover transition-transform duration-700 ease-out group-hover:scale-[1.02]"
                        sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 40vw"
                      />

                      {/* Editorial Metadata Bottom Hover Strip (Quiet, Non-intrusive) */}
                      <div className="absolute inset-0 bg-primary-dark/30 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-between p-6 text-canvas">
                        <div className="flex justify-between items-start">
                          <span className="text-[10px] uppercase tracking-widest font-body bg-primary-dark/80 px-2.5 py-1 rounded-sm backdrop-blur-xs">
                            Série #{String(image.id).padStart(2, "0")}
                          </span>
                          <span className="w-8 h-8 rounded-lg bg-canvas text-primary-dark flex items-center justify-center shadow-xs">
                            <ArrowUpRight className="w-4 h-4" />
                          </span>
                        </div>

                        <div>
                          <span className="text-xs uppercase tracking-widest text-canvas/70 font-body block mb-1">
                            {image.location}
                          </span>
                          <h3 className="font-heading text-2xl font-light text-canvas">
                            {image.title}
                          </h3>
                        </div>
                      </div>
                    </button>
                  ))}
                </div>
              </TabPanel>
            );
          })}
        </TabProvider>

        {/* Action Row — Matching Button Reference from Image 1 */}
        <div className="mt-20 pt-10 border-t border-border-soft flex flex-col sm:flex-row items-center justify-between gap-6">
          <p className="font-body text-xs text-muted tracking-wide">
            Arquivo atualizado · Ensaios em Indaiatuba, Campinas e região.
          </p>

          <a
            href={INSTAGRAM_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-3 px-6 py-3 rounded-lg border border-border-soft text-primary-dark font-body text-xs font-semibold uppercase tracking-wider hover:border-primary-dark hover:bg-surface transition-all duration-200"
          >
            <span>Ver arquivo completo no Instagram</span>
            <ExternalLink className="w-3.5 h-3.5 text-muted" />
          </a>
        </div>
      </div>

      {/* Ariakit Accessible Lightbox Dialog Pattern */}
      {selectedPhoto && (
        <Dialog
          store={dialog}
          backdrop={
            <div className="fixed inset-0 z-50 bg-night/85 backdrop-blur-sm transition-opacity" />
          }
          className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-8 overflow-y-auto outline-none"
        >
          <div className="relative max-w-4xl w-full bg-night text-canvas rounded-lg overflow-hidden border border-white/10 shadow-2xl flex flex-col md:flex-row my-auto">
            {/* Accessible Dismiss Button */}
            <DialogDismiss
              className="absolute top-4 right-4 z-20 w-10 h-10 rounded-lg bg-black/60 text-canvas hover:bg-accent flex items-center justify-center transition-colors outline-none focus-visible:ring-2 focus-visible:ring-canvas cursor-pointer"
              aria-label="Fechar ampliação"
            >
              <X className="w-5 h-5" />
            </DialogDismiss>

            {/* Photo View — Clean Photographic Presentation */}
            <div className="relative aspect-[4/5] md:w-3/5 w-full min-h-[360px] bg-black">
              <Image
                src={selectedPhoto.src}
                alt={selectedPhoto.alt}
                fill
                className="object-cover"
                sizes="(max-width: 1024px) 100vw, 60vw"
                priority
              />
            </div>

            {/* Archival Specification Column */}
            <div className="p-8 sm:p-10 md:w-2/5 flex flex-col justify-between bg-night/95">
              <div>
                <span className="font-body text-[11px] uppercase tracking-[0.2em] text-accent-light font-semibold block mb-2">
                  Registro Nº {String(selectedPhoto.id).padStart(2, "0")}
                </span>

                <DialogHeading className="font-heading text-3xl font-light leading-tight text-canvas mb-6">
                  {selectedPhoto.title}
                </DialogHeading>

                <DialogDescription
                  render={<div />}
                  className="space-y-4 font-body text-sm text-canvas/75 border-t border-white/10 pt-6"
                >
                  <div>
                    <span className="text-canvas/40 block text-xs uppercase tracking-wider mb-1">
                      Locação
                    </span>
                    <span className="text-canvas font-medium">{selectedPhoto.location}</span>
                  </div>
                  <div>
                    <span className="text-canvas/40 block text-xs uppercase tracking-wider mb-1">
                      Condição de Luz
                    </span>
                    <span className="text-canvas font-medium">{selectedPhoto.lighting}</span>
                  </div>
                  <div>
                    <span className="text-canvas/40 block text-xs uppercase tracking-wider mb-1">
                      Especialidade
                    </span>
                    <span className="text-canvas font-medium capitalize">{selectedPhoto.category}</span>
                  </div>
                </DialogDescription>
              </div>

              {/* Action Button — Refined Rounded Rectangle (Image 1 reference) */}
              <div className="mt-8 pt-6 border-t border-white/10">
                <a
                  href={getWhatsAppUrl(selectedPhoto.category)}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full inline-flex items-center justify-center gap-2.5 bg-accent hover:bg-accent-hover text-canvas py-3.5 px-6 rounded-lg font-body font-semibold text-xs tracking-wider uppercase transition-colors shadow-sm"
                >
                  <MessageCircle className="w-4 h-4" />
                  <span>Consultar este estilo</span>
                </a>
              </div>
            </div>
          </div>
        </Dialog>
      )}
    </section>
  );
}
