'use client';

import React, { useState } from 'react';
import { 
  MapPin, 
  Navigation, 
  Copy, 
  Check, 
  Car, 
  Clock, 
  Coffee, 
  Sparkles, 
  ShieldCheck, 
  ExternalLink,
  MessageCircle,
  Compass
} from 'lucide-react';
import { getWhatsAppUrl } from '@/lib/constants';

export default function StudioLocation() {
  const [copied, setCopied] = useState(false);

  // Endereço demonstrativo de Indaiatuba
  const demonstrationAddress = "Av. Presidente Vargas, 1200 - Vila Suíça, Indaiatuba - SP, 13330-000";
  const latitude = -23.0903;
  const longitude = -47.2181;

  // URLs diretas para os apps de navegação
  const navigationApps = [
    {
      name: "Google Maps",
      badge: "Mais Popular",
      description: "Navegação por GPS com rotas a pé ou de carro",
      url: `https://www.google.com/maps/dir/?api=1&destination=${latitude},${longitude}`,
      icon: (
        <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7z" fill="#EA4335"/>
          <path d="M12 2C8.13 2 5 5.13 5 9c0 2.5 1.5 5 3.5 7.5L12 20.5l3.5-4C17.5 14 19 11.5 19 9c0-3.87-3.13-7-7-7z" fill="#34A853"/>
          <circle cx="12" cy="9" r="3" fill="#FFFFFF"/>
        </svg>
      ),
      bgHover: "hover:border-[#EA4335]/60 hover:bg-[#EA4335]/5"
    },
    {
      name: "Waze",
      badge: "Tempo Real",
      description: "Melhor rota com alertas e trânsito ao vivo",
      url: `https://waze.com/ul?ll=${latitude},${longitude}&navigate=yes`,
      icon: (
        <svg className="w-5 h-5 text-[#33CCFF]" viewBox="0 0 24 24" fill="currentColor">
          <path d="M12 2a9 9 0 0 0-9 9c0 1.9.6 3.7 1.7 5.2l-.7 2.8a1 1 0 0 0 1.2 1.2l2.8-.7A8.96 8.96 0 0 0 12 21a9 9 0 0 0 9-9 9 9 0 0 0-9-9zm-3 8a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3zm6 0a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3zm-3 7c-2.2 0-3.8-1.3-4.1-2h8.2c-.3.7-1.9 2-4.1 2z" />
        </svg>
      ),
      bgHover: "hover:border-[#33CCFF]/60 hover:bg-[#33CCFF]/5"
    },
    {
      name: "Apple Mapas",
      badge: "iOS / CarPlay",
      description: "Integração nativa para iPhone, iPad e Mac",
      url: `https://maps.apple.com/?daddr=${latitude},${longitude}&dirflg=d`,
      icon: (
        <svg className="w-5 h-5 text-primary-dark" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <polygon points="3 6 9 3 15 6 21 3 21 18 15 21 9 18 3 21"/>
          <line x1="9" x2="9" y1="3" y2="18"/>
          <line x1="15" x2="15" y1="6" y2="21"/>
        </svg>
      ),
      bgHover: "hover:border-primary-dark/60 hover:bg-primary-dark/5"
    }
  ];

  const handleCopy = () => {
    navigator.clipboard.writeText(demonstrationAddress);
    setCopied(true);
    setTimeout(() => setCopied(false), 2200);
  };

  return (
    <section id="estudio" className="py-24 sm:py-32 lg:py-40 bg-surface relative border-t border-border-soft">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        
        {/* Archival Eyebrow Tagline */}
        <div className="flex flex-wrap items-center justify-between gap-4 pb-6 mb-12 border-b border-border-soft text-[11px] uppercase tracking-[0.25em] text-muted font-medium">
          <div className="flex items-center gap-2.5">
            <span className="w-1.5 h-1.5 rounded-none bg-accent" />
            <span>Localização &amp; Estúdio Autoral</span>
          </div>
          <div className="hidden sm:block">
            <span>23°05&apos;S · 47°13&apos;W</span>
          </div>
          <div>
            <span>Indaiatuba · São Paulo</span>
          </div>
        </div>

        {/* Header Title & Intro */}
        <div className="max-w-3xl mb-16">
          <h2 className="font-heading text-4xl sm:text-5xl lg:text-[56px] font-light leading-[1.1] text-primary-dark tracking-tight">
            Como chegar ao <br />
            <span className="italic font-light text-muted">estúdio Anna Rosa.</span>
          </h2>
          <p className="mt-6 text-muted font-body text-base lg:text-lg leading-relaxed">
            Um refúgio banhado por luz natural, criado para que cada família se sinta em casa. 
            Localizado em área nobre e de fácil acesso em Indaiatuba, com privacidade absoluta 
            durante o seu ensaio.
          </p>
        </div>

        {/* Main Grid: 5 Cols Left (Details & Apps), 7 Cols Right (Map) */}
        <div className="grid lg:grid-cols-12 gap-10 lg:gap-14 items-start">
          
          {/* Left Column — Address & Navigation Options */}
          <div className="lg:col-span-5 space-y-6">
            
            {/* Address Box */}
            <div className="bg-canvas border border-border-soft p-6 sm:p-7 shadow-xs">
              <div className="flex items-center justify-between pb-4 border-b border-border-soft">
                <div className="flex items-center gap-2">
                  <MapPin className="w-4 h-4 text-accent" />
                  <span className="font-body text-[11px] uppercase tracking-widest text-primary-dark font-medium">
                    Endereço do Estúdio
                  </span>
                </div>
                <span className="text-[10px] font-body uppercase tracking-wider text-accent bg-accent-soft px-2 py-0.5 font-semibold">
                  Demonstração
                </span>
              </div>

              <div className="pt-4 space-y-1.5">
                <p className="font-heading text-2xl text-primary-dark font-light leading-snug">
                  Av. Presidente Vargas, 1200
                </p>
                <p className="font-body text-sm text-muted">
                  Vila Suíça / Cidade Nova · Indaiatuba — SP
                </p>
                <p className="font-body text-xs text-muted/70 tracking-wider">
                  CEP 13330-000 · Região do Parque Ecológico
                </p>
              </div>

              {/* Copy Address Button */}
              <div className="mt-5 pt-4 border-t border-border-soft/70 flex items-center justify-between gap-3">
                <button
                  type="button"
                  onClick={handleCopy}
                  className="inline-flex items-center gap-2 text-xs font-body font-semibold tracking-wider uppercase text-primary-dark hover:text-accent transition-colors"
                >
                  {copied ? (
                    <>
                      <Check className="w-3.5 h-3.5 text-accent" />
                      <span className="text-accent">Endereço Copiado!</span>
                    </>
                  ) : (
                    <>
                      <Copy className="w-3.5 h-3.5" />
                      <span>Copiar Endereço</span>
                    </>
                  )}
                </button>

                <span className="text-[10px] font-body text-muted/70">
                  Área central &amp; nobre
                </span>
              </div>

              {/* Privacy / Demonstration Note */}
              <p className="mt-4 pt-3 border-t border-border-soft/50 text-[11px] font-body text-muted/80 leading-relaxed italic">
                * Endereço para demonstração. O número exato e as orientações de portaria e estacionamento 
                são confirmados na reserva para preservar a privacidade e o silêncio de cada sessão.
              </p>
            </div>

            {/* Direct Navigation Apps Options */}
            <div className="bg-canvas border border-border-soft p-6 sm:p-7 shadow-xs space-y-4">
              <div className="flex items-center gap-2 pb-2">
                <Navigation className="w-4 h-4 text-accent" />
                <h3 className="font-body text-xs uppercase tracking-widest text-primary-dark font-semibold">
                  Escolha seu App de Navegação
                </h3>
              </div>

              <p className="text-xs font-body text-muted leading-relaxed">
                Toque no aplicativo de sua preferência para iniciar o trajeto direto no seu smartphone ou GPS do carro:
              </p>

              {/* 3 App Buttons */}
              <div className="space-y-2.5 pt-1">
                {navigationApps.map((app) => (
                  <a
                    key={app.name}
                    href={app.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`w-full flex items-center justify-between p-3.5 border border-border-soft bg-surface/50 transition-all duration-200 group rounded-none ${app.bgHover}`}
                  >
                    <div className="flex items-center gap-3">
                      <div className="w-9 h-9 bg-canvas border border-border-soft flex items-center justify-center shrink-0 shadow-2xs">
                        {app.icon}
                      </div>
                      <div className="text-left">
                        <div className="flex items-center gap-2">
                          <span className="font-body text-sm font-semibold text-primary-dark group-hover:text-accent transition-colors">
                            {app.name}
                          </span>
                          <span className="text-[9px] font-body uppercase tracking-wider px-1.5 py-0.5 bg-canvas border border-border-soft text-muted font-medium">
                            {app.badge}
                          </span>
                        </div>
                        <span className="font-body text-[11px] text-muted block mt-0.5">
                          {app.description}
                        </span>
                      </div>
                    </div>

                    <ExternalLink className="w-4 h-4 text-muted/60 group-hover:text-primary-dark group-hover:translate-x-0.5 transition-all shrink-0 ml-2" />
                  </a>
                ))}
              </div>
            </div>

            {/* Travel Times from Nearby Hubs */}
            <div className="bg-canvas border border-border-soft p-5 sm:p-6 text-xs font-body space-y-3">
              <span className="uppercase tracking-widest text-[10px] text-muted font-semibold block border-b border-border-soft pb-2">
                Distâncias &amp; Acesso Rápido
              </span>
              <div className="grid grid-cols-2 gap-3 text-muted">
                <div className="flex items-center gap-2">
                  <Car className="w-3.5 h-3.5 text-accent shrink-0" />
                  <span><strong>Campinas:</strong> ~25 min (SP-075)</span>
                </div>
                <div className="flex items-center gap-2">
                  <Car className="w-3.5 h-3.5 text-accent shrink-0" />
                  <span><strong>Viracopos (VCP):</strong> ~15 min</span>
                </div>
                <div className="flex items-center gap-2">
                  <Car className="w-3.5 h-3.5 text-accent shrink-0" />
                  <span><strong>Salto / Itu:</strong> ~15 min</span>
                </div>
                <div className="flex items-center gap-2">
                  <Car className="w-3.5 h-3.5 text-accent shrink-0" />
                  <span><strong>São Paulo:</strong> ~1h15 (Bandeirantes)</span>
                </div>
              </div>
            </div>

          </div>

          {/* Right Column — Editorial Map Display (7 cols) */}
          <div className="lg:col-span-7 space-y-5">
            
            {/* Map Container */}
            <div className="relative border border-border-soft bg-canvas shadow-sm overflow-hidden">
              
              {/* Map Top Archival Bar */}
              <div className="px-5 py-3.5 bg-canvas border-b border-border-soft flex flex-wrap items-center justify-between gap-3 text-[11px] font-body text-muted">
                <div className="flex items-center gap-2">
                  <span className="relative flex h-2 w-2">
                    <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-accent opacity-75" />
                    <span className="relative inline-flex rounded-full h-2 w-2 bg-accent" />
                  </span>
                  <span className="font-semibold text-primary-dark uppercase tracking-wider text-[10px]">
                    Estúdio Privativo de Luz Natural
                  </span>
                </div>

                <div className="flex items-center gap-1.5 text-muted/80">
                  <Compass className="w-3.5 h-3.5 text-accent" />
                  <span>Indaiatuba · SP</span>
                </div>
              </div>

              {/* Responsive Google Maps Iframe with Editorial Warm Tone Filter */}
              <div className="relative w-full aspect-[4/3] sm:aspect-[16/10] md:min-h-[440px] bg-surface">
                <iframe
                  title="Mapa de localização do estúdio Anna Rosa em Indaiatuba"
                  src={`https://www.google.com/maps/embed?origin=mfe&pb=!1m3!2m1!1s-23.0903,-47.2181!6i15!3m1!1spt-BR!5m1!1spt-BR`}
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  allowFullScreen={false}
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  className="w-full h-full grayscale-[15%] contrast-[98%] saturate-[90%]"
                />

                {/* Floating Architectural Badge */}
                <div className="absolute top-4 left-4 max-w-[280px] bg-canvas/95 backdrop-blur-xs border border-border-soft p-4 shadow-md pointer-events-none hidden sm:block">
                  <span className="font-body text-[9px] uppercase tracking-widest text-accent font-semibold block mb-1">
                    Ateliê Fotográfico
                  </span>
                  <h4 className="font-heading text-lg text-primary-dark font-light leading-snug">
                    Anna Rosa Fotografia
                  </h4>
                  <p className="font-body text-[11px] text-muted mt-1 leading-relaxed">
                    Sessões com luz natural, conforto de casa e recepção acolhedora.
                  </p>
                </div>
              </div>

              {/* Map Footer Bar with Studio Amenities */}
              <div className="p-5 sm:p-6 bg-canvas border-t border-border-soft">
                <span className="font-body text-[10px] uppercase tracking-[0.2em] text-muted block mb-3 font-semibold">
                  Comodidades pensadas para você e sua família:
                </span>
                
                <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 text-xs font-body text-primary-dark">
                  <div className="flex items-center gap-2">
                    <Car className="w-4 h-4 text-accent shrink-0" />
                    <span>Vaga privativa</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Coffee className="w-4 h-4 text-accent shrink-0" />
                    <span>Café &amp; Acolhimento</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <ShieldCheck className="w-4 h-4 text-accent shrink-0" />
                    <span>Espaço amamentação</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Sparkles className="w-4 h-4 text-accent shrink-0" />
                    <span>Luz suave &amp; Climatizado</span>
                  </div>
                </div>

                {/* Trajectory question CTA */}
                <div className="mt-5 pt-4 border-t border-border-soft/60 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3">
                  <p className="text-xs font-body text-muted">
                    Precisa de instruções personalizadas de rota a partir da sua cidade?
                  </p>
                  <a
                    href={getWhatsAppUrl("Olá Anna! Gostaria de saber como chegar ao estúdio saindo da minha cidade.")}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 text-xs font-body font-semibold tracking-wider uppercase text-primary-dark hover:text-accent transition-colors shrink-0"
                  >
                    <MessageCircle className="w-3.5 h-3.5 text-accent" />
                    <span>Tirar dúvidas pelo WhatsApp</span>
                  </a>
                </div>
              </div>

            </div>

          </div>

        </div>

      </div>
    </section>
  );
}

