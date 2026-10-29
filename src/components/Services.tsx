"use client";

import { useState } from "react";
import Image from "next/image";
import { ArrowUpRight } from "lucide-react";
import { getWhatsAppUrl } from "@/lib/constants";

interface ServiceItem {
  id: string;
  number: string;
  title: string;
  subtitle: string;
  description: string;
  tag: string;
  image: string;
  alt: string;
  cta: string;
  whatsappType: "gestante" | "familia" | "casal";
}

const services: ServiceItem[] = [
  {
    id: "gestante",
    number: "01",
    title: "Ensaio Gestante",
    subtitle: "Uma nova história começa.",
    tag: "A espera & os primeiros laços",
    description:
      "A espera, as transformações do corpo e a expectativa por um novo encontro fazem parte de uma fase única e irrepetível. Um ensaio pensado para guardar a poesia desse capítulo com delicadeza e luz natural.",
    image: "/images/gestante.jpg",
    alt: "Ensaio gestante com luz natural - fotografia sensível da gravidez",
    cta: "Quero meu ensaio gestante",
    whatsappType: "gestante",
  },
  {
    id: "familia",
    number: "02",
    title: "Ensaio de Família",
    subtitle: "A beleza de estar junto.",
    tag: "Conexões reais & cotidiano",
    description:
      "Os abraços espontâneos, o riso solto das crianças, os olhares cúmplices e os pequenos costumes que fazem sua família ser quem ela é. Registros documentais e afetuosos da fase que vocês estão vivendo juntos.",
    image: "/images/familia.jpg",
    alt: "Ensaio de família documental - momentos espontâneos e conexão familiar",
    cta: "Quero registrar minha família",
    whatsappType: "familia",
  },
  {
    id: "casal",
    number: "03",
    title: "Ensaio de Casal",
    subtitle: "A história de vocês, do jeito de vocês.",
    tag: "Intimidade & cumplicidade",
    description:
      "Cada casal tem sua própria maneira de demonstrar carinho, sem poses forçadas ou clichês comerciais. Uma sessão intimista para registrar a verdade da conexão de vocês sob a luz de um fim de tarde.",
    image: "/images/casal.jpg",
    alt: "Ensaio de casal intimista - história de amor em fotografias",
    cta: "Quero fotografar nossa história",
    whatsappType: "casal",
  },
];

export default function Services() {
  const [activeIndex, setActiveIndex] = useState(0);
  const current = services[activeIndex];

  return (
    <section id="ensaios" className="py-32 lg:py-44 bg-canvas relative">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        {/* Section Header */}
        <div className="grid lg:grid-cols-12 gap-8 lg:gap-16 items-end pb-12 mb-16 border-b border-border-soft">
          <div className="lg:col-span-7">
            <span className="font-body text-xs uppercase tracking-[0.25em] text-muted block mb-3 font-medium">
              Especialidades &amp; Capítulos
            </span>
            <h2 className="font-heading text-4xl sm:text-5xl lg:text-[60px] font-light leading-[1.08] text-primary-dark tracking-tight">
              Histórias diferentes <br />
              <span className="italic font-light text-muted">merecem um olhar atento.</span>
            </h2>
          </div>
          <div className="lg:col-span-5">
            <p className="font-body text-base text-muted leading-relaxed max-w-md">
              Cada fase carrega sua própria atmosfera. Escolha o momento que deseja guardar e explore a proposta artística de cada ensaio.
            </p>
          </div>
        </div>

        {/* Interactive Lookbook Split Layout */}
        <div className="grid lg:grid-cols-12 gap-12 lg:gap-16 items-start">
          {/* Left Column — Interactive Chapter Index (Clean Rounded-lg, Image 1 reference) */}
          <div className="lg:col-span-6 space-y-4">
            {services.map((item, index) => {
              const isActive = activeIndex === index;
              return (
                <div
                  key={item.id}
                  onMouseEnter={() => setActiveIndex(index)}
                  onClick={() => setActiveIndex(index)}
                  className={`cursor-pointer rounded-lg p-6 sm:p-8 transition-all duration-300 border ${
                    isActive
                      ? "bg-surface border-border-soft shadow-xs"
                      : "bg-transparent border-transparent hover:border-border-soft/60 hover:bg-surface/40"
                  }`}
                >
                  <div className="flex items-baseline justify-between">
                    <div className="flex items-baseline gap-4 sm:gap-6">
                      <span className={`font-heading text-2xl sm:text-3xl font-light transition-colors ${
                        isActive ? "text-primary-dark font-normal" : "text-muted/60"
                      }`}>
                        {item.number}
                      </span>
                      <h3 className={`font-heading text-2xl sm:text-3xl font-light tracking-tight transition-colors ${
                        isActive ? "text-primary-dark" : "text-primary-dark/70"
                      }`}>
                        {item.title}
                      </h3>
                    </div>

                    <span className="font-body text-[11px] uppercase tracking-wider text-muted font-medium hidden sm:inline">
                      {item.tag}
                    </span>
                  </div>

                  {/* Expandable details when active */}
                  <div
                    className={`overflow-hidden transition-all duration-400 ease-in-out ${
                      isActive ? "max-h-96 opacity-100 pt-5 mt-4 border-t border-border-soft" : "max-h-0 opacity-0"
                    }`}
                  >
                    <p className="font-heading text-base italic text-primary-dark/80 font-light mb-3">
                      {item.subtitle}
                    </p>
                    <p className="font-body text-sm sm:text-base text-muted leading-relaxed mb-6">
                      {item.description}
                    </p>
                    <div>
                      <a
                        href={getWhatsAppUrl(item.whatsappType)}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-2.5 px-6 py-3 rounded-lg bg-primary-dark text-canvas hover:bg-accent text-xs font-semibold tracking-wider uppercase transition-colors shadow-xs"
                      >
                        <span>{item.cta}</span>
                        <ArrowUpRight className="w-3.5 h-3.5" />
                      </a>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>

          {/* Right Column — Large Editorial Photographic Frame (Scout Inspired Clean Cut) */}
          <div className="lg:col-span-6 sticky top-28">
            <div className="relative aspect-[4/5] rounded-none overflow-hidden border border-border-soft/80 bg-surface shadow-sm">
              {services.map((item, index) => (
                <div
                  key={item.id}
                  className={`absolute inset-0 transition-opacity duration-700 ease-in-out ${
                    activeIndex === index ? "opacity-100 scale-100" : "opacity-0 scale-105 pointer-events-none"
                  }`}
                >
                  <Image
                    src={item.image}
                    alt={item.alt}
                    fill
                    className="object-cover"
                    sizes="(max-width: 1024px) 100vw, 50vw"
                    priority={index === 0}
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-primary-dark/30 via-transparent to-transparent" />
                </div>
              ))}

              {/* Archival metadata caption */}
              <div className="absolute bottom-4 left-4 right-4 bg-canvas/95 border border-border-soft/80 p-4 flex items-center justify-between">
                <div>
                  <span className="font-body text-[10px] uppercase tracking-widest text-muted block mb-0.5">
                    Capítulo {current.number}
                  </span>
                  <span className="font-heading text-base text-primary-dark font-light">
                    {current.title}
                  </span>
                </div>
                <span className="font-body text-xs text-muted">
                  Luz Natural · Indaiatuba
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
