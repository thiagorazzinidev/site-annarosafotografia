"use client";

import { useState } from "react";
import { MessageCircle, Check } from "lucide-react";
import { WHATSAPP_NUMBER } from "@/lib/constants";

interface OptionItem {
  id: string;
  title: string;
  detail: string;
}

const ENSAIO_OPTIONS: OptionItem[] = [
  { id: "gestante", title: "Gestante", detail: "A espera, a transformação do corpo e os primeiros laços de afeto." },
  { id: "familia", title: "Família", detail: "Abraços, brincadeiras espontâneas e o calor da rotina compartilhada." },
  { id: "casal", title: "Casal", detail: "A história de vocês com naturalidade, cumplicidade e leveza." },
  { id: "autoral", title: "Retrato Autoral", detail: "Sessões individuais focadas na essência, presença e tempo presente." },
];

const SCENARIO_OPTIONS: OptionItem[] = [
  { id: "externo", title: "Luz Natural Externa", detail: "Golden hour no campo, parque ou espaço aberto com luz dourada." },
  { id: "casa", title: "Em Sua Casa (Lifestyle)", detail: "No conforto do seu lar, registrando o cotidiano com verdade e aconchego." },
  { id: "estudio", title: "Estúdio com Luz Natural", detail: "Ambiente calmo, atemporal e minimalista com luz suave difusa." },
  { id: "conversar", title: "A Decidir em Conjunto", detail: "Vamos conversar e escolher a locação que melhor combina com vocês." },
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

  const currentEnsaio = ENSAIO_OPTIONS.find((o) => o.id === selectedEnsaio)?.title || "Gestante";
  const currentScenario = SCENARIO_OPTIONS.find((o) => o.id === selectedScenario)?.title || "Luz Natural Externa";
  const currentRegion = REGION_OPTIONS.find((o) => o.id === selectedRegion)?.label || "Indaiatuba";
  const currentTime = TIME_OPTIONS.find((o) => o.id === selectedTime)?.label || "Fim de tarde";

  const messageText = `Olá, Anna! Visitei seu site e organizei as preferências para meu ensaio:

• Proposta: Ensaio ${currentEnsaio}
• Cenário: ${currentScenario}
• Região: ${currentRegion}
• Período preferido: ${currentTime}

Gostaria de saber mais sobre a disponibilidade de datas e o investimento.`;

  const whatsappUrl = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(messageText)}`;

  return (
    <section id="planejar" className="py-32 lg:py-44 bg-surface border-y border-border-soft relative">
      <div className="max-w-5xl mx-auto px-6 lg:px-8">
        <div className="max-w-2xl mb-16">
          <span className="font-body text-xs uppercase tracking-[0.25em] text-muted block mb-3 font-medium">
            Ateliê de Experiências
          </span>
          <h2 className="font-heading text-4xl sm:text-5xl lg:text-[54px] font-light leading-[1.1] text-primary-dark tracking-tight">
            Como você imagina o seu ensaio?
          </h2>
          <p className="mt-4 font-body text-base text-muted leading-relaxed">
            Selecione as opções com calma para desenhar a atmosfera ideal.
            Suas preferências ficarão reunidas em uma mensagem pronta para conversarmos no WhatsApp.
          </p>
        </div>

        <div className="space-y-14">
          {/* Step 1: Tipo de Ensaio */}
          <div>
            <div className="flex items-center justify-between mb-4 pb-3 border-b border-border-soft">
              <span className="font-heading text-xl font-light text-primary-dark">
                1. O momento que você quer guardar
              </span>
              <span className="font-body text-xs uppercase tracking-wider text-muted font-medium">
                [ {currentEnsaio} ]
              </span>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4" role="radiogroup" aria-label="1. O momento que você quer guardar">
              {ENSAIO_OPTIONS.map((item) => {
                const isSelected = selectedEnsaio === item.id;
                return (
                  <button
                    key={item.id}
                    type="button"
                    role="radio"
                    aria-checked={isSelected}
                    onClick={() => setSelectedEnsaio(item.id)}
                    className={`relative text-left p-5 rounded-lg transition-all duration-200 border cursor-pointer flex flex-col justify-between outline-none focus-visible:ring-2 focus-visible:ring-primary-dark ${isSelected
                        ? "bg-canvas border-primary-dark shadow-xs"
                        : "bg-canvas/50 border-border-soft text-primary-dark hover:border-border-soft/80 hover:bg-canvas"
                      }`}
                  >
                    <div>
                      <div className="flex items-center justify-between">
                        <span className={`font-body text-sm font-semibold tracking-tight ${isSelected ? "text-primary-dark" : "text-primary-dark/80"}`}>
                          {item.title}
                        </span>
                        {isSelected && (
                          <span className="w-4 h-4 rounded-xs bg-primary-dark text-canvas flex items-center justify-center flex-shrink-0 ml-2">
                            <Check className="w-2.5 h-2.5" />
                          </span>
                        )}
                      </div>
                      <p className="mt-2 font-body text-xs text-muted leading-relaxed">
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
            <div className="flex items-center justify-between mb-4 pb-3 border-b border-border-soft">
              <span className="font-heading text-xl font-light text-primary-dark">
                2. A atmosfera e o cenário
              </span>
              <span className="font-body text-xs uppercase tracking-wider text-muted font-medium">
                [ {currentScenario} ]
              </span>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4" role="radiogroup" aria-label="2. A atmosfera e o cenário">
              {SCENARIO_OPTIONS.map((item) => {
                const isSelected = selectedScenario === item.id;
                return (
                  <button
                    key={item.id}
                    type="button"
                    role="radio"
                    aria-checked={isSelected}
                    onClick={() => setSelectedScenario(item.id)}
                    className={`relative text-left p-5 rounded-lg transition-all duration-200 border cursor-pointer flex flex-col justify-between outline-none focus-visible:ring-2 focus-visible:ring-primary-dark ${isSelected
                        ? "bg-canvas border-primary-dark shadow-xs"
                        : "bg-canvas/50 border-border-soft text-primary-dark hover:border-border-soft/80 hover:bg-canvas"
                      }`}
                  >
                    <div>
                      <div className="flex items-center justify-between">
                        <span className={`font-body text-sm font-semibold tracking-tight ${isSelected ? "text-primary-dark" : "text-primary-dark/80"}`}>
                          {item.title}
                        </span>
                        {isSelected && (
                          <span className="w-4 h-4 rounded-xs bg-primary-dark text-canvas flex items-center justify-center flex-shrink-0 ml-2">
                            <Check className="w-2.5 h-2.5" />
                          </span>
                        )}
                      </div>
                      <p className="mt-2 font-body text-xs text-muted leading-relaxed">
                        {item.detail}
                      </p>
                    </div>
                  </button>
                );
              })}
            </div>
          </div>

          {/* Step 3 & 4: Região e Luz */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-10 pt-2">
            <div>
              <div className="flex items-center justify-between mb-3.5 pb-2 border-b border-border-soft">
                <span className="font-heading text-lg font-light text-primary-dark">
                  3. Cidade ou Região
                </span>
                <span className="font-body text-xs uppercase tracking-wider text-muted font-medium">
                  {currentRegion}
                </span>
              </div>
              <div className="grid grid-cols-2 gap-2.5" role="radiogroup" aria-label="3. Cidade ou Região">
                {REGION_OPTIONS.map((city) => {
                  const isSelected = selectedRegion === city.id;
                  return (
                    <button
                      key={city.id}
                      type="button"
                      role="radio"
                      aria-checked={isSelected}
                      onClick={() => setSelectedRegion(city.id)}
                      className={`px-4 py-2.5 text-xs font-body transition-all duration-200 rounded-lg border cursor-pointer outline-none focus-visible:ring-2 focus-visible:ring-primary-dark flex items-center justify-between ${isSelected
                          ? "bg-primary-dark text-canvas border-primary-dark font-medium shadow-xs"
                          : "bg-canvas/60 border-border-soft text-primary-dark hover:border-primary-dark/60 hover:bg-canvas"
                        }`}
                    >
                      <span className="truncate">{city.label}</span>
                      {isSelected && <Check className="w-3 h-3 text-canvas ml-1.5 flex-shrink-0" />}
                    </button>
                  );
                })}
              </div>
            </div>

            <div>
              <div className="flex items-center justify-between mb-3.5 pb-2 border-b border-border-soft">
                <span className="font-heading text-lg font-light text-primary-dark">
                  4. A Luz e o Momento
                </span>
                <span className="font-body text-xs uppercase tracking-wider text-muted font-medium truncate max-w-[150px] text-right">
                  {currentTime}
                </span>
              </div>
              <div className="space-y-2" role="radiogroup" aria-label="4. A Luz e o Momento">
                {TIME_OPTIONS.map((period) => {
                  const isSelected = selectedTime === period.id;
                  return (
                    <button
                      key={period.id}
                      type="button"
                      role="radio"
                      aria-checked={isSelected}
                      onClick={() => setSelectedTime(period.id)}
                      className={`w-full px-4 py-2.5 text-xs font-body transition-all duration-200 rounded-lg border cursor-pointer outline-none focus-visible:ring-2 focus-visible:ring-primary-dark flex items-center justify-between ${isSelected
                          ? "bg-primary-dark text-canvas border-primary-dark font-medium shadow-xs"
                          : "bg-canvas/60 border-border-soft text-primary-dark hover:border-primary-dark/60 hover:bg-canvas"
                        }`}
                    >
                      <span>{period.label}</span>
                      {isSelected && <Check className="w-3 h-3 text-canvas ml-2 flex-shrink-0" />}
                    </button>
                  );
                })}
              </div>
            </div>
          </div>

          {/* Archival Summary Card */}
          <div className="pt-6">
            <div className="bg-canvas rounded-lg border border-border-soft p-8 sm:p-10 shadow-xs">
              <div className="flex flex-col md:flex-row md:items-center justify-between gap-8">
                <div>
                  <span className="font-body text-[11px] uppercase tracking-[0.2em] text-muted block mb-1.5 font-medium">
                    Sua Seleção Personalizada
                  </span>
                  <h4 className="font-heading text-3xl font-light text-primary-dark">
                    Ensaio {currentEnsaio} · {currentScenario}
                  </h4>
                  <p className="mt-1.5 font-body text-sm text-muted">
                    {currentRegion} · {currentTime}
                  </p>
                </div>

                <a
                  href={whatsappUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center gap-3 bg-primary-dark hover:bg-accent text-canvas px-8 py-4 text-xs tracking-wider uppercase font-body font-semibold transition-colors rounded-lg flex-shrink-0 shadow-xs"
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
