# Proposta de Layout Moderno e Direção de Arte — Anna Rosa Fotografia

**Documento de Especificação de Design (UI/UX e Direção Visual)**  
**Referência:** Baseado no [Briefing Estratégico](Briefing_Estrategico_Anna_Rosa_Fotografia.md) e na [Copy do Site](Copy_Site_Anna_Rosa_Fotografia.md).  
**Conceito Central:** *Warm Minimalist Editorial* (Minimalismo Editorial Acolhedor) — um equilíbrio entre a sofisticação atemporal de uma revista de arte/fotografia e o calor humano da fotografia de afeto e luz natural.

---

## 1. Tipografia Premium: O Par Tipográfico

Para transmitir sensibilidade artística sem perder a modernidade e a alta legibilidade (especialmente no mobile), combinamos duas famílias tipográficas contemporâneas de alto padrão:

### 1.1 Títulos e Destaques: **Cormorant Garamond**
* **Classificação:** Serifada Clássico-Editorial (Open Source via Google Fonts / com rendering de nível comercial).
* **Vibe:** Poética, intimista, atemporal, inspirada na tipografia francesa Garamond do século XVI, muito utilizada em editoriais de moda, arte e revistas como *Kinfolk* e *Cereal*.
* **Pesos em Uso:**
  * `Light (300)` e `Regular (400)` para títulos em escala monumental (Hero e Frases de Destaque).
  * `Italic (400 / 500)` para palavras de ênfase poética (ex.: *"sentir, viver e lembrar"*).
* **Alternativa de Luxo Licenciada (se houver orçamento de fontes):** *Editorial New* (Pangram Pangram) ou *Canela* (Commercial Type).

### 1.2 Textos Corridos, Navegação e Botões: **Plus Jakarta Sans**
* **Classificação:** Neo-Grotesca Geométrica Moderna com toques humanistas (Google Fonts).
* **Vibe:** Extremamente limpa, contemporânea, amigável e com legibilidade impecável em telas pequenas e retina displays. Contrapõe a expressividade orgânica da serifada sem gerar ruído.
* **Pesos em Uso:**
  * `Regular (400)` para parágrafos e corpo de texto (`line-height: 1.7`).
  * `Medium (500)` e `Semi-Bold (600)` para botões, tags de categoria, menus e eyebrows (pequenos títulos em caixa alta sutil com letter-spacing generoso).

### 1.3 Hierarquia e Escala Tipográfica (Desktop & Mobile)

| Elemento | Família | Desktop | Mobile | Tracking / Line-height |
|---|---|---|---|---|
| **Display / Hero H1** | Cormorant Garamond (Light/Regular) | `56px – 68px` | `36px – 42px` | `-0.02em` / `1.15` |
| **Títulos de Seção H2** | Cormorant Garamond (Regular) | `38px – 46px` | `28px – 32px` | `-0.01em` / `1.25` |
| **Subtítulos de Serviço H3** | Cormorant Garamond (Medium/Italic) | `24px – 28px` | `20px – 22px` | `0` / `1.35` |
| **Eyebrows / Badges** | Plus Jakarta Sans (Semi-Bold) | `12px – 13px` | `11px – 12px` | `+0.12em` (uppercase) |
| **Corpo de Texto (Body)** | Plus Jakarta Sans (Regular) | `16px – 18px` | `15px – 16px` | `0` / `1.7` |
| **Botões / CTAs** | Plus Jakarta Sans (Semi-Bold) | `14px – 15px` | `14px` | `+0.04em` / `1.0` |
| **Legendas / Rodapé** | Plus Jakarta Sans (Regular) | `13px – 14px` | `12px – 13px` | `0` / `1.5` |

---

## 2. Paleta de Cores e Tokens Visuais

Seguindo com rigor as diretrizes cromáticas do briefing (tons terrosos suaves, off-white, contrastes orgânicos e ausência de preto puro digital):

```
┌─────────────────────────────────────────────────────────────────────────────┐
│                              PALETA DE CORES                                │
├──────────────┬──────────────┬──────────────┬──────────────┬─────────────────┤
│ Fundo Canvas │ Areia Suave  │ Marrom Café  │ Taupe Escuro │ Terracota Solar │
│   #FAF8F5    │   #F2ECE4    │   #231E1B    │   #6E655F    │     #B86B4B     │
│ (Off-white)  │ (Background) │(Texto / CTA) │ (Secundário) │    (Destaque)   │
└──────────────┴──────────────┴──────────────┴──────────────┴─────────────────┘
```

### 2.1 Especificação Detalhada dos Tons

1. **Fundo Principal (Canvas):** `#FAF8F5` *(Marfim Natural Suave)*  
   * Evita a luz fria do `#FFFFFF` puro. Cria uma base orgânica que acolhe o calor da luz natural das fotos.
2. **Fundo Secundário (Blocos Alternados):** `#F2ECE4` *(Areia / Linho Claro)*  
   * Usado para envelopar cartões, seções como FAQ ou áreas de processo, criando profundidade sem necessidade de linhas pesadas.
3. **Texto Principal & CTAs de Alto Contraste:** `#231E1B` *(Marrom Café Torrado / Deep Espresso)*  
   * Proporciona leitura nítida com contraste AAA, mas com a suavidade e riqueza de um tom terroso escuro.
4. **Texto Secundário & Informações de Apoio:** `#6E655F` *(Taupe / Cinza Quente Terroso)*  
   * Perfeito para legendas, introduções e textos secundários, mantendo excelente legibilidade.
5. **Cor de Destaque (Accent):** `#B86B4B` *(Terracota Solar / Golden Hour)*  
   * Extraído do tom quente de pele e do pôr do sol. Aplicado em sublinhados artísticos, badges delicados, bullets e no hover de botões secundários.
6. **Fundo Noturno/Íntimo (CTA Final & Rodapé):** `#1D1917` *(Café Noturno Profundo)*  
   * Cria um fechamento cinematográfico de alto impacto na última dobra com tipografia em `#FAF8F5`.
7. **Linhas e Divisórias:** `#E5DED5` *(Traço de linho ultrafino de 1px)*.

---

## 3. Estilo Visual e Princípios de UI

* **Grid Assimétrico e Espaçamento Generoso:** Grandes áreas de respiro (*whitespace* de 80px a 140px no desktop e 48px a 72px no mobile).
* **Imagens Protagonistas em Molduras Editoriais:** Fotos com cantos suavemente lapidados (`border-radius: 6px` a `10px`), proporções verticais clássicas (3:4 e 4:5) que remetem a ampliações fotográficas impressas.
* **Micro-interações Suaves:** 
  * Imagens com zoom sutil (`scale 1.03`) ao passar o mouse.
  * Transições em curva suave (`cubic-bezier(0.25, 1, 0.5, 1)` em 400ms).
  * Fade-in sutil das seções ao rolar a página.
* **Texturas Quentes:** Detalhes de linhas finas que remetem a passes de galeria de arte.

---

## 4. Organização das Seções e Wireframe Detalhado

Abaixo está o fluxo visual estruturado da página inicial, integrando o copy aprovado com um layout contemporâneo:

```
┌─────────────────────────────────────────────────────────────┐
│ HEADER FIXO: [Anna Rosa Fotografia]    Ensaios  Sobre  [Conversar] │
├─────────────────────────────────────────────────────────────┤
│ HERO (Layout Assimétrico Editorial):                        │
│ ┌─────────────────────────┐  ┌───────────────────────────┐  │
│ │ Eyebrow: ANNA ROSA      │  │                           │  │
│ │ H1: Sua história        │  │ FOTOGRAFIA HERO VERTICAL  │  │
│ │     merece ser contada. │  │ (Gestante/Afeto em Luz    │  │
│ │ Apoio poético...        │  │  Natural, Proporção 4:5)  │  │
│ │ [CTA 1] [CTA 2]         │  │                           │  │
│ └─────────────────────────┘  └───────────────────────────┘  │
├─────────────────────────────────────────────────────────────┤
│ MANIFESTO & SOBRE (Dueto Intimista):                        │
│ ┌───────────────────────────┐  ┌─────────────────────────┐  │
│ │ FOTO RETRATO ANNA ROSA    │  │ "Fotografar é olhar     │  │
│ │ (Espontânea, segurando a  │  │  com cuidado..."        │  │
│ │  câmera, sorriso suave)   │  │ Texto humanizado + CTA  │  │
│ └───────────────────────────┘  └─────────────────────────┘  │
├─────────────────────────────────────────────────────────────┤
│ SERVIÇOS EM CARTÕES EDITORIAIS (3 Colunas):                 │
│ ┌───────────────┐   ┌───────────────┐   ┌───────────────┐   │
│ │   GESTANTE    │   │    FAMÍLIA    │   │     CASAL     │   │
│ │ Foto Vertical │   │ Foto Vertical │   │ Foto Vertical │   │
│ │ Texto + CTA   │   │ Texto + CTA   │   │ Texto + CTA   │   │
│ └───────────────┘   └───────────────┘   └───────────────┘   │
├─────────────────────────────────────────────────────────────┤
│ PORTFÓLIO EM MOSAICO CURADO (Grid Dinâmico):                │
│ ┌────────────┐ ┌──────────────────────┐ ┌────────────────┐  │
│ │ Foto V 4:5 │ │ Foto H 16:9          │ │ Foto V 4:5     │  │
│ │            │ ├───────────┬──────────┤ │                │  │
│ │            │ │ Foto 1:1  │ Foto 1:1 │ │                │  │
│ └────────────┘ └───────────┴──────────┘ └────────────────┘  │
│ [Botão: Ver mais no Instagram ↗]                            │
├─────────────────────────────────────────────────────────────┤
│ DIFERENCIAIS (3 Pilares em Fundo Areia Suave):              │
│ [ 01. Luz Natural ]   [ 02. Conexões Reais ]  [ 03. Identidade ] │
├─────────────────────────────────────────────────────────────┤
│ COMO FUNCIONA (Linha do Tempo Minimalista em 3 Passos):     │
│  (1) Conte sua ideia ───► (2) Tire dúvidas ───► (3) Planeje │
├─────────────────────────────────────────────────────────────┤
│ FAQ INTERATIVO (Accordion Limpo com Divisórias Finas)       │
├─────────────────────────────────────────────────────────────┤
│ CTA FINAL IMERSIVO (Fundo Escuro Café Torrado):             │
│ "Qual história você gostaria de guardar?"                   │
│ [Botão WhatsApp Destaque Solar]                             │
├─────────────────────────────────────────────────────────────┤
│ FOOTER: Links institucionais, região e assinatura de marca  │
└─────────────────────────────────────────────────────────────┘
```

### Detalhamento por Seção:

#### Seção 1 — Header & Navegação Superior
* **Comportamento:** Fixo (*sticky*) com fundo translúcido em vidro fosco (`backdrop-blur: 12px`, cor `#FAF8F5` com 88% de opacidade).
* **Esquerda:** Logo tipográfico com o nome **Anna Rosa** em Cormorant Garamond (22px) e **Fotografia** em Plus Jakarta Sans (10px, uppercase, tracking espaçado).
* **Centro:** Links discretos: *Ensaios · Sobre · Portfólio · Dúvidas*.
* **Direita:** Botão pílula com ícone sutil de conversa: `[ Fale no WhatsApp ]` (fundo marrom café, texto marfim).

#### Seção 2 — Hero (Primeira Dobra Editorial)
* **Estrutura:** Layout bipartido (50% texto / 50% imagem) com ritmo editorial assimétrico.
* **Lado Esquerdo:**
  * Tag superior: `ANNA ROSA FOTOGRAFIA` com ponto decorativo terracota (`•`).
  * Título monumental: **“Sua história merece ser contada.”** (Cormorant Garamond 62px).
  * Subtítulo em itálico: *“Fotografias para sentir, viver e lembrar.”*
  * Parágrafo fluido em Plus Jakarta Sans (17px).
  * Grupo de CTAs: Botão principal preenchido em Marrom Café (`Quero registrar minha história`) + Botão secundário vazado com seta suave (`Conheça meu trabalho ↓`).
* **Lado Direito:** 
  * Uma única foto vertical espetacular (formato 4:5) emoldurada com margem elegante, exibindo gestante ou família sob luz natural dourada.
  * Etiqueta flutuante minimalista no canto inferior da foto: *"Luz natural & histórias reais"*.

#### Seção 3 — Sobre Anna (Conexão e Confiança)
* **Estrutura:** Fundo em tom Areia Suave (`#F2ECE4`).
* **Composição:** Retrato autêntico de Anna Rosa em formato vertical (3:4) à esquerda. À direita, o título poético: **“Fotografar é olhar com cuidado para aquilo que importa.”**
* **Destaque:** Um detalhe de assinatura gráfica de Anna no rodapé da citação, trazendo calor e autenticidade ao texto em primeira pessoa.

#### Seção 4 — Serviços (Os 3 Cartões Editoriais)
* **Estrutura:** Grade de 3 cartões verticais independentes:
  1. **Ensaio Gestante** (*Sub: Uma nova história começa*)
  2. **Ensaio de Família** (*Sub: A beleza de estar junto*)
  3. **Ensaio de Casal** (*Sub: A história de vocês, do jeito de vocês*)
* **Interatividade do Card:** 
  * No topo de cada cartão, uma foto vertical imersiva (proporção 4:5).
  * Ao passar o mouse, a foto dá um leve zoom e o botão inferior ganha destaque com cor terracota.
  * Link direto com WhatsApp pré-configurado para a respectiva especialidade.

#### Seção 5 — Portfólio em Destaque (Mosaico de Revista)
* **Estrutura:** Mosaico de 5 a 6 fotografias cuidadosamente curadas que alternam planos abertos e detalhes fechados (mãos se tocando, risos de crianças, luz de janela).
* **Filtros sutis:** Pequenos botões em formato pílula no topo (*Todos · Gestantes · Famílias · Casais*) que filtram suavemente as fotos.
* **Ação secundária:** Botão elegante com ícone de seta externa: `[ Ver mais no Instagram ↗ ]`.

#### Seção 6 — Diferenciais (Os 3 Pilares)
* **Estrutura:** Bloco de 3 colunas em fundo Areia (`#F2ECE4`).
* **Design:** Em vez de ícones genéricos de banco de imagens, utiliza **numerais editoriais grandes e finos** (`01`, `02`, `03` em Cormorant Garamond 44px na cor Terracota `#B86B4B`):
  * `01` — Luz natural e sensibilidade
  * `02` — Conexões que merecem ser lembradas
  * `03` — Uma fotografia com identidade

#### Seção 7 — Como Funciona (Processo Sem Inseguranças)
* **Estrutura:** Linha do tempo horizontal no desktop e vertical no mobile, numerada em 3 passos concisos:
  1. *Conte sua ideia*
  2. *Tire suas dúvidas*
  3. *Planeje o ensaio*
* **Apoio visual:** Micro-fotos em formato circular ou cantos arredondados ilustrando cada etapa (uma xícara de café/conversa, um bloco de notas/planejamento, uma foto pronta).

#### Seção 8 — Perguntas Frequentes (FAQ Acordeão)
* **Estrutura:** Lista centralizada de 7 itens em largura confortável (máx. 780px).
* **Design:** Linhas divisórias ultrafinas (`#E5DED5`). O clique abre a resposta com animação suave de desdobramento, alternando o ícone de `+` para `−`.
* Link no final: *"Ainda tem dúvidas? Vamos conversar no WhatsApp"*.

#### Seção 9 — CTA Final (Fechamento Imersivo Noturno)
* **Estrutura:** Bloco em caixa alta, fundo em tom escuro aveludado (`#1D1917`).
* **Texto em Branco Marfim:**
  * H2: **“Qual história você gostaria de guardar?”**
  * Apoio: *“Nem sempre percebemos a importância de uma fase enquanto estamos vivendo...”*
* **Botão Protagonista:** Botão largo em tom Terracota Solar (`#B86B4B`) com texto em marfim: **“Vamos conversar pelo WhatsApp”**, com ícone oficial do WhatsApp.

#### Seção 10 — Rodapé
* **Estrutura:** Fundo escuro contínuo (`#171312`).
* Logo em tipografia clássica, frase de assinatura (*“Histórias reais. Memórias para sempre.”*), menção geográfica discreta (*Indaiatuba, Campinas e região*), links de navegação e link para Política de Privacidade.

---

## 5. Direção de Arte e Ideias de Imagens

Para que o site mantenha a consistência com a linguagem descrita no briefing (documental, intimista, luz natural e tons quentes), as imagens devem seguir a seguinte curadoria:

### 5.1 Critérios Gerais de Fotografia
* **Iluminação:** Luz dourada de fim de tarde (*golden hour*), luz difusa de janelas ou sombras suaves. Evitar flashes duros ou fotos estouradas em estúdio branco artificial.
* **Composição:** Composições espontâneas com respiro. Fotos que pareçam "capturadas durante a vida", e não poses rígidas forçadas.
* **Color grading:** Tons quentes e terrosos, com pretos suaves (sem contraste agressivo de aplicativo de celular).

### 5.2 Ideias Específicas por Seção

| Seção | Assunto / Enquadramento | Atmosfera e Detalhes |
|---|---|---|
| **Hero** | Gestante ou mãe com bebê em contraluz suave. | Silhueta elegante, toque delicado nas mãos, atmosfera de serenidade e afeto. |
| **Sobre Anna** | Retrato de Anna com a câmera na mão ou em um momento de pausa no estúdio. | Expressão acolhedora, olhar cúmplice com o visitante, iluminação de janela. |
| **Serviço: Gestante** | Mulher abraçando a barriga ou casal com as mãos entrelaçadas sobre o ventre. | Foco nos gestos de carinho e expectativa, tecidos fluidos em linho ou algodão. |
| **Serviço: Família** | Criança rindo no colo dos pais ou brincadeira no chão. | Espontaneidade, movimento natural, sensação de aconchego e rotina viva. |
| **Serviço: Casal** | Casal caminhando ou em um abraço íntimo, com rostos próximos e sorrisos leves. | Conexão autêntica, sem poses de catálogo comercial. |
| **Mosaico Portfólio** | Alternância de 1 plano aberto de paisagem/ambiente + 3 retratos médios + 2 planos fechados (detalhe de pés de bebê, mãos dadas, vento no cabelo). | Cria ritmo visual de revista editorial. |

---

## 6. Especificação da Versão Mobile (Mobile-First)

Mais de 70% dos acessos virão de smartphones via Instagram e pesquisas locais. Por isso, a experiência mobile recebe atenção prioritária:

### 6.1 Header e Menu Mobile
* **Barra Superior Compacta (56px de altura):**
  * Nome **Anna Rosa** centralizado em tipografia serifada elegante.
  * Ícone minimalista de menu hambúrguer à esquerda (duas linhas finas).
  * Ícone de WhatsApp direto à direita.
* **Menu Gaveta (Drawer):** Ao abrir, ocupa a tela inteira em tom `#FAF8F5` com links em tamanho grande (24px) e espaçamento tátil generoso.

### 6.2 Botão Flutuante Persistente (Floating Action Bar)
* Uma barra fixa sutil na base da tela (`bottom: 16px`, centrada, largura de 90% da tela) que surge após o usuário rolar 30% da página:
  * Design: Pílula flutuante em tom marrom escuro com leve sombra difusa:
  * Conteúdo: `[ 💬 Conversar no WhatsApp ]` — área de toque de **52px de altura**, garantindo facilidade ergonômica com o polegar.

### 6.3 Navegação e Gestos (Touch & Swipe)
* **Serviços no Celular:** Em vez de forçar o usuário a rolar uma página infinita com 3 cartões grandes verticais, os serviços podem ser visualizados como **cards horizontais em carrossel táctil (swipe)** com indicador de pontos (*dots* em terracota).
* **Portfólio no Celular:** Grid de 2 colunas organizadas com espaçamento de 8px, permitindo ver mais imagens sem rolagem excessiva. Ao tocar em qualquer imagem, abre-se uma visualização limpa em tela cheia com botão de fechar acessível no topo.

### 6.4 Ergonomia e Desempenho
* **Touch Targets:** Todos os botões e links expansíveis possuem área de clique mínima de `48px x 48px`.
* **Carregamento Otimizado:**
  * Uso de imagens em formato moderno (`WebP` / `AVIF`).
  * Imagem do Hero prioritária (`fetchpriority="high"`) e todas as imagens abaixo da dobra com `loading="lazy"`.
  * Sem scripts pesados ou animações complexas que travam a rolagem em conexões 4G/5G.

---

## 7. Resumo das Decisões de Design

| Item | Escolha Estratégica | Motivo |
|---|---|---|
| **Conceito** | *Warm Minimalist Editorial* | Valoriza a fotografia artística sem parecer um site frio ou impessoal. |
| **Fonte Títulos** | **Cormorant Garamond** | Sofisticação poética e estética de revista de arte. |
| **Fonte Textos** | **Plus Jakarta Sans** | Modernidade, limpeza e leitura perfeita em telas de celular. |
| **Paleta** | Marfim, Areia, Café Torrado e Terracota | Reproduz o calor da luz natural e dos tons das fotografias da marca. |
| **Conversão** | CTAs contextuais e barra flutuante no mobile | Reduz fricção e direciona o visitante ao WhatsApp com mensagens prontas. |
| **Acessibilidade** | Contraste de cor AAA e tipografia escalável | Conforto visual para todos os públicos e conformidade técnica. |

