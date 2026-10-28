"use client";

import { useState } from "react";
import { MessageCircle, Check, Sparkles } from "lucide-react";
import { WHATSAPP_NUMBER } from "@/lib/constants";

interface OptionItem {
  id: string;
  title: string;
  detail: string;
}

const ENSAIO_OPTIONS: OptionItem[] = [
  {
    id: "gestante",
    title: "Gestante",
    detail: "A espera, a transformação do corpo e os primeiros laços de afeto.",
  },
  {
    id: "familia",
    title: "Família",
    detail: "Abraços, brincadeiras espontâneas e o calor da rotina compartilhada.",
  },
  {
    id: "casal",
    title: "Casal",
    detail: "A história de vocês com naturalidade, cumplicidade e leveza.",
  },
  {
    id: "autoral",
    title: "Retrato Autoral",
    detail: "Sessões individuais focadas na essência, presença e tempo presente.",
  },
];

const SCENARIO_OPTIONS: OptionItem[] = [
  {
    id: "externo",
    title: "Luz Natural Externa",
    detail: "Golden hour no campo, parque ou espaço aberto com luz dourada.",
  },
  {
    id: "casa",
    title: "Em Sua Casa (Lifestyle)",
    detail: "No conforto do seu lar, registrando o cotidiano com verdade e aconchego.",
  },
  {
    id: "estudio",
    title: "Estúdio com Luz Natural",
    detail: "Ambiente calmo, atemporal e minimalista com luz suave difusa.",
  },
  {
    id: "conversar",
    title: "A Decidir em Conjunto",
    detail: "Vamos conversar e escolher a locação que melhor combina com vocês.",
  },
];

const REGION_OPTIONS = [
  { id: "indaiatuba", label: "Indaiatuba" },
  { id: "campinas", label: "Campinas" },
  { id: "salto-itu", label: "Salto / Itu" },
  { id: "outra", label: "Outra cidade da região" },
];

const TIME_OPTIONS = [
  { id: "tarde", label: "Fim de tarde (Pôr do Sol · Golden Hour)" },
  { id: "manha", label: "Início da manhã (Luz fresca e calma)" },
  { id: "fds", label: "Finais de semana (Sábado ou Domingo)" },
  { id: "flexivel", label: "Flexível para conciliar agendas" },
];

export default function SessionSimulator() {
  const [selectedEnsaio, setSelectedEnsaio] = useState<string>("gestante");
  const [selectedScenario, setSelectedScenario] = useState<string>("externo");
  const [selectedRegion, setSelectedRegion] = useState<string>("indaiatuba");
  const [selectedTime, setSelectedTime] = useState<string>("tarde");

  const currentEnsaio =
    ENSAIO_OPTIONS.find((o) => o.id === selectedEnsaio)?.title || "Gestante";
  const currentScenario =
    SCENARIO_OPTIONS.find((o) => o.id === selectedScenario)?.title ||
    "Luz Natural Externa";
  const currentRegion =
    REGION_OPTIONS.find((o) => o.id === selectedRegion)?.label || "Indaiatuba";
  const currentTime =
    TIME_OPTIONS.find((o) => o.id === selectedTime)?.label || "Fim de tarde";

  const messageText = `Olá, Anna! Visitei seu site e organizei as preferências para meu ensaio:

• Proposta: Ensaio ${currentEnsaio}
• Cenário: ${currentScenario}
• Região: ${currentRegion}
• Período preferido: ${currentTime}

Gostaria de saber mais sobre a disponibilidade de datas e o investimento.`;

  const whatsappUrl = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(
    messageText
  )}`;

  return (
    <section
      id="planejar"
      className="py-24 lg:py-32 bg-surface/50 border-y border-border-soft/60 relative overflow-hidden"
    >
      {/* Decorative ambient warm blur */}
      <div 
        className="absolute bottom-10 left-10 w-80 h-80 bg-accent-soft/40 rounded-full blur-3xl pointer-events-none -z-10" 
        aria-hidden="true" 
      />

      <div className="max-w-5xl mx-auto px-6 lg:px-8">
        {/* Editorial Section Header */}
        <div className="max-w-2xl mb-12 sm:mb-16">
          <div className="inline-flex items-center gap-2 mb-3 px-3.5 py-1.5 rounded-full bg-canvas border border-border-soft/60 shadow-xs">
            <Sparkles className="w-3.5 h-3.5 text-accent" />
            <span className="font-body text-xs tracking-wider uppercase text-muted font-medium">
              Ateliê de Experiências
            </span>
          </div>

          <h2 className="font-heading text-3xl sm:text-4xl lg:text-[46px] font-light leading-[1.18] text-primary-dark">
            Como você imagina o seu ensaio?
          </h2>
          <p className="mt-3 font-body text-base text-muted leading-relaxed">
            Selecione as opções com calma para desenhar a atmosfera ideal. 
            Suas preferências ficarão reunidas em uma mensagem pronta para conversarmos no WhatsApp.
          </p>
        </div>

        {/* Form Container */}
        <div className="space-y-12">
          {/* Step 1: Tipo de Ensaio */}
          <div>
            <div className="flex items-center justify-between mb-4">
              <span className="font-heading text-lg sm:text-xl font-light text-primary-dark">
                1. O momento que você quer guardar
              </span>
              <span className="font-body text-xs font-semibold text-accent bg-accent-soft px-3 py-1 rounded-full">
                {currentEnsaio}
              </span>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3.5">
              {ENSAIO_OPTIONS.map((item) => {
                const isSelected = selectedEnsaio === item.id;
                return (
                  <button
                    key={item.id}
                    type="button"
                    onClick={() => setSelectedEnsaio(item.id)}
                    className={`text-left p-5 rounded-2xl transition-all duration-300 border flex flex-col justify-between ${
                      isSelected
                        ? "bg-white border-accent ring-2 ring-accent/20 shadow-md text-primary-dark"
                        : "bg-canvas/80 border-border-soft/70 text-primary-dark hover:border-accent/40 hover:bg-white hover:shadow-sm"
                    }`}
                  >
                    <div>
                      <div className="flex items-center justify-between">
                        <span className={`font-body text-base font-semibold tracking-tight ${isSelected ? "text-accent" : "text-primary-dark"}`}>
                          {item.title}
                        </span>
                        {isSelected && (
                          <span className="w-5 h-5 rounded-full bg-accent flex items-center justify-center flex-shrink-0 ml-2">
                            <Check className="w-3 h-3 text-canvas" />
                          </span>
                        )}
                      </div>
                      <p className="mt-2 font-body text-xs sm:text-[13px] text-muted leading-relaxed">
                        {item.detail}
                      </p>
                    </div>
                  </button>
                );
              })}
            </div>
          </div>

          {/* Step 2: Cenário */}
          <div>
            <div className="flex items-center justify-between mb-4">
              <span className="font-heading text-lg sm:text-xl font-light text-primary-dark">
                2. A atmosfera e o cenário
              </span>
              <span className="font-body text-xs font-semibold text-accent bg-accent-soft px-3 py-1 rounded-full">
                {currentScenario}
              </span>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3.5">
              {SCENARIO_OPTIONS.map((item) => {
                const isSelected = selectedScenario === item.id;
                return (
                  <button
                    key={item.id}
                    type="button"
                    onClick={() => setSelectedScenario(item.id)}
                    className={`text-left p-5 rounded-2xl transition-all duration-300 border flex flex-col justify-between ${
                      isSelected
                        ? "bg-white border-accent ring-2 ring-accent/20 shadow-md text-primary-dark"
                        : "bg-canvas/80 border-border-soft/70 text-primary-dark hover:border-accent/40 hover:bg-white hover:shadow-sm"
                    }`}
                  >
                    <div>
                      <div className="flex items-center justify-between">
                        <span className={`font-body text-base font-semibold tracking-tight ${isSelected ? "text-accent" : "text-primary-dark"}`}>
                          {item.title}
                        </span>
                        {isSelected && (
                          <span className="w-5 h-5 rounded-full bg-accent flex items-center justify-center flex-shrink-0 ml-2">
                            <Check className="w-3 h-3 text-canvas" />
                          </span>
                        )}
                      </div>
                      <p className="mt-2 font-body text-xs sm:text-[13px] text-muted leading-relaxed">
                        {item.detail}
                      </p>
                    </div>
                  </button>
                );
              })}
            </div>
          </div>

          {/* Step 3 & 4: Região e Luz em Chips Delicados */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-10 pt-2">
            {/* Região */}
            <div>
              <div className="flex items-center justify-between mb-3.5">
                <span className="font-heading text-lg font-light text-primary-dark">
                  3. Cidade ou Região
                </span>
                <span className="font-body text-xs font-semibold text-accent">
                  {currentRegion}
                </span>
              </div>
              <div className="flex flex-wrap gap-2.5">
                {REGION_OPTIONS.map((city) => {
                  const isSelected = selectedRegion === city.id;
                  return (
                    <button
                      key={city.id}
                      type="button"
                      onClick={() => setSelectedRegion(city.id)}
                      className={`px-4 py-2.5 text-xs sm:text-sm font-body transition-all duration-200 rounded-full border ${
                        isSelected
                          ? "bg-accent text-canvas border-accent font-medium shadow-sm"
                          : "bg-canvas/90 border-border-soft text-primary-dark hover:border-accent/50 hover:bg-white"
                      }`}
                    >
                      {city.label}
                    </button>
                  );
                })}
              </div>
            </div>

            {/* Período */}
            <div>
              <div className="flex items-center justify-between mb-3.5">
                <span className="font-heading text-lg font-light text-primary-dark">
                  4. A Luz e o Momento
                </span>
                <span className="font-body text-xs font-semibold text-accent truncate max-w-[160px] text-right">
                  {currentTime}
                </span>
              </div>
              <div className="flex flex-wrap gap-2.5">
                {TIME_OPTIONS.map((period) => {
                  const isSelected = selectedTime === period.id;
                  return (
                    <button
                      key={period.id}
                      type="button"
                      onClick={() => setSelectedTime(period.id)}
                      className={`px-4 py-2.5 text-xs sm:text-sm font-body transition-all duration-200 rounded-full border ${
                        isSelected
                          ? "bg-accent text-canvas border-accent font-medium shadow-sm"
                          : "bg-canvas/90 border-border-soft text-primary-dark hover:border-accent/50 hover:bg-white"
                      }`}
                    >
                      {period.label}
                    </button>
                  );
                })}
              </div>
            </div>
          </div>

          {/* Archival Summary Card */}
          <div className="pt-4">
            <div className="bg-canvas rounded-3xl border border-border-soft/80 p-7 sm:p-9 shadow-md shadow-primary-dark/5">
              <div className="flex flex-col md:flex-row md:items-center justify-between gap-6">
                <div>
                  <span className="font-body text-xs uppercase tracking-wider font-semibold text-accent block mb-1">
                    Sua seleção personalizada
                  </span>
                  <h4 className="font-heading text-2xl sm:text-3xl font-light text-primary-dark">
                    Ensaio {currentEnsaio} · {currentScenario}
                  </h4>
                  <p className="mt-1 font-body text-sm text-muted">
                    {currentRegion} · {currentTime}
                  </p>
                </div>

                <a
                  href={whatsappUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center gap-3 bg-accent hover:bg-accent-hover text-canvas px-8 py-4 text-xs tracking-wider uppercase font-body font-semibold transition-all duration-300 rounded-full flex-shrink-0 shadow-md hover:shadow-lg hover:-translate-y-0.5"
                >
                  <MessageCircle className="w-4 h-4 text-canvas" />
                  <span>Enviar para a Anna no WhatsApp</span>
                </a>
              </div>
            </div>
            <p className="text-center font-body text-xs text-muted mt-4">
              Ao clicar, você abrirá a conversa oficial no WhatsApp com esta proposta já preenchida.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
