const differentials = [
  {
    number: "01",
    title: "Luz natural e sensibilidade",
    italic: "a poesia do efêmero",
    description:
      "Uma linguagem visual atemporal que valoriza a luz suave, as sombras e as texturas reais de cada instante. Sem flashes duros ou poses artificiais.",
  },
  {
    number: "02",
    title: "Conexões que merecem ser lembradas",
    italic: "gestos involuntários de afeto",
    description:
      "O olhar da câmera se volta para a verdade das pessoas: o abraço apertado, o toque silencioso das mãos e o riso que escapa sem planejamento.",
  },
  {
    number: "03",
    title: "Uma fotografia com identidade",
    italic: "registros autorais e humanos",
    description:
      "Imagens com uma proposta estética intimista, emocional e atenta à história de quem está sendo fotografado. Memórias vivas para toda a vida.",
  },
];

export default function Differentials() {
  return (
    <section className="py-28 lg:py-36 bg-surface relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-6">
        {/* Editorial Section Top Header */}
        <div className="max-w-3xl mb-20">
          <div className="inline-flex items-center gap-2 mb-3 px-3.5 py-1.5 rounded-full bg-canvas border border-border-soft/60">
            <span className="w-1.5 h-1.5 rounded-full bg-accent" />
            <span className="font-body text-xs uppercase tracking-widest text-muted font-medium">
              A Abordagem Artística
            </span>
          </div>
          <h2 className="font-heading text-3xl sm:text-4xl lg:text-[50px] font-light leading-[1.14] text-primary-dark">
            A atenção está nos detalhes que contam sua história.
          </h2>
          <p className="mt-4 font-body text-base lg:text-lg text-muted leading-relaxed">
            Três pilares fundamentais que guiam cada sessão, da primeira conversa à entrega das memórias.
          </p>
        </div>

        {/* Archival Manifesto Columns — Zero Cards, Pure Hairline Editorial */}
        <div className="grid md:grid-cols-3 gap-12 lg:gap-16 pt-8 border-t border-border-soft">
          {differentials.map((item, index) => (
            <div 
              key={item.number} 
              className={`flex flex-col justify-between ${
                index !== 0 ? "md:border-l md:border-border-soft/60 md:pl-8 lg:pl-12" : ""
              }`}
            >
              <div>
                <span className="font-heading text-6xl sm:text-7xl font-light text-accent/70 block leading-none mb-6">
                  {item.number}
                </span>
                <h3 className="font-heading text-2xl lg:text-3xl font-light text-primary-dark leading-tight">
                  {item.title}
                </h3>
                <span className="font-heading text-base italic text-accent font-light block mt-1.5 mb-4">
                  {item.italic}
                </span>
                <p className="font-body text-sm sm:text-base text-muted leading-relaxed">
                  {item.description}
                </p>
              </div>

              <div className="mt-8 pt-4 border-t border-border-soft/40 flex items-center justify-between">
                <span className="font-body text-[11px] uppercase tracking-widest text-muted/70">
                  Pilar {item.number}
                </span>
                <span className="w-1.5 h-1.5 rounded-full bg-accent/40" />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
