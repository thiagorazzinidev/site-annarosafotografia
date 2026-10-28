export function JsonLd() {
  const photographerSchema = {
    "@context": "https://schema.org",
    "@type": ["Photographer", "LocalBusiness"],
    name: "Anna Rosa Fotografia",
    description:
      "Fotografia autoral, documental e sensível com foco em luz natural e memórias reais. Ensaios de gestantes, famílias e casais em Indaiatuba, Campinas e região.",
    url: "https://annarosafotografia.com.br",
    telephone: "+55-19-99999-9999",
    areaServed: ["Indaiatuba", "Campinas", "Salto", "Itu"],
    address: {
      "@type": "PostalAddress",
      addressLocality: "Indaiatuba",
      addressRegion: "SP",
      addressCountry: "BR",
    },
    image: "https://annarosafotografia.com.br/images/og-image.jpg",
    priceRange: "$$",
    hasOfferCatalog: {
      "@type": "OfferCatalog",
      name: "Serviços de Fotografia",
      itemListElement: [
        {
          "@type": "Offer",
          itemOffered: {
            "@type": "Service",
            name: "Ensaio Gestante",
          },
        },
        {
          "@type": "Offer",
          itemOffered: {
            "@type": "Service",
            name: "Ensaio de Família",
          },
        },
        {
          "@type": "Offer",
          itemOffered: {
            "@type": "Service",
            name: "Ensaio de Casal",
          },
        },
      ],
    },
    sameAs: ["https://instagram.com/annarosafotografia"],
  };

  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: [
      {
        "@type": "Question",
        name: "Onde os ensaios são realizados?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "O local pode variar conforme o tipo de ensaio e a proposta desejada. Entre em contato para confirmar as opções disponíveis e conversar sobre o que faz mais sentido para você.",
        },
      },
      {
        "@type": "Question",
        name: "Como faço para agendar meu ensaio?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Entre em contato pelo WhatsApp para compartilhar sua ideia, consultar a disponibilidade e conhecer as condições para agendamento.",
        },
      },
      {
        "@type": "Question",
        name: "Não sei posar para fotos. Posso fazer um ensaio mesmo assim?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Você pode conversar com Anna sobre como se sente diante da câmera e tirar suas dúvidas antes de decidir. Assim, será possível alinhar as expectativas e entender como o ensaio pode ser conduzido.",
        },
      },
      {
        "@type": "Question",
        name: "O que devo vestir no ensaio?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "As escolhas podem variar de acordo com o estilo do ensaio, o local e o resultado que você deseja. Converse com Anna para entender quais opções combinam melhor com sua proposta.",
        },
      },
      {
        "@type": "Question",
        name: "Como descubro os valores?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Entre em contato pelo WhatsApp para consultar as opções disponíveis, o investimento e o que está incluído em cada proposta.",
        },
      },
      {
        "@type": "Question",
        name: "Quanto tempo demora para receber as fotografias?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "O prazo de entrega deve ser confirmado no momento do orçamento e do agendamento. Entre em contato para receber as informações atualizadas.",
        },
      },
      {
        "@type": "Question",
        name: "Você atende Campinas e outras cidades da região?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "O atendimento abrange Indaiatuba, Campinas e região. Entre em contato para confirmar a disponibilidade para sua cidade e eventuais condições de deslocamento.",
        },
      },
    ],
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(photographerSchema),
        }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(faqSchema),
        }}
      />
    </>
  );
}
