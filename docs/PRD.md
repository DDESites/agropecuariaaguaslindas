# PRD — Site da Agropecuária Águas Lindas

**Versão:** 1.0
**Data:** 07/10/2026
**Produto:** Site institucional + vitrine digital (one-page com seções ancoradas ou multi-page leve)
**Identidade visual base:** fachada da Agropecuária Águas Lindas (verde dominante, alto contraste, comunicação popular e chamativa)

---

## 1. Sumário executivo

A Agropecuária Águas Lindas é um comércio de bairro que atende duas frentes principais: **produtos para pets** (rações, medicamentos, acessórios) e **produtos agropecuários** (insumos, medicamentos veterinários, itens para o campo). A fachada atual já comunica bem à distância, mas amontoa várias mensagens concorrendo entre si.

O site existe para **traduzir a fachada para o digital sem herdar a bagunça**: manter o tom próximo, familiar e popular; preservar verde, fotos de animais e chamadas de contato; e organizar a leitura em uma hierarquia clara — **nome → categoria → contato**.

O site deve ser **moderno e bonito**, mas a beleza aqui significa: muita respiro, tipografia grande e confiante, fotos reais de animais, cores bem aplicadas e movimento sutil — nunca ruído visual.

---

## 2. Objetivos

### 2.1 Objetivos de negócio
| # | Objetivo | Métrica |
|---|----------|---------|
| O1 | Gerar contatos qualificados via WhatsApp | ≥ 40 cliques/mês em "Chamar no WhatsApp" em 90 dias |
| O2 | Posicionar a loja como referência pet do bairro | Tráfego orgânico ≥ 300 visitas/mês em 6 meses |
| O3 | Comunicar variedade e entrega | Taxa de scroll até a seção "Entrega" ≥ 50% das sessões |
| O4 | Facilitar recompra de rações e produtos recorrentes | ≥ 20% dos contatos citam produto específico da lista do site |

### 2.2 Objetivos de experiência
- Responder em até 3 segundos: **o que a loja vende, para quem, e como falar agora**.
- Ser legível no celular (público majoritariamente local e mobile).
- Ser acessível: contraste alto, alvos de toque grandes, navegação por teclado.

### 2.3 Objetivos de marca
- Verde `#078C58` como cor dominante em todas as telas.
- Vermelho coral reservado **exclusivamente** para chamadas, promoções e botões de ação.
- Fotos de cão e gato como sinal visual permanente da área pet.
- Títulos curtos, grandes, maiúsculos e pesados.

---

## 3. Público

**Primário:** moradores do bairro e região, donos de cães e gatos, 25–60 anos, que compram ração todo mês e preferem resolver por WhatsApp.

**Secundário:** produtores rurais e criadores pequenos que buscam medicamentos veterinários, insumos e itens agropecuários.

**Contexto de uso:** 80% mobile, conexão média, decisão rápida ("tem ração X? entregam? quanto é o telefone?").

**Persona-retrato:** *Dona Marlene, 52* — compra ração todo dia 5 do mês, quer ver se o preço mudou, prefere mandar mensagem a preencher formulário.

---

## 4. Escopo

### 4.1 Em escopo
- Site institucional responsivo (PT-BR).
- Vitrine de categorias e marcas de rações (catálogo por referência, sem carrinho de compras na v1).
- Clicar em WhatsApp abre conversa com mensagem pré-preenchida por categoria/produto.
- Seção de promoções com destaque em vermelho coral.
- Bloco de entrega e área de atendimento.
- SEO local (Google Meu Negócio, schema LocalBusiness).
- Formulário de contato simples (nome + mensagem) com envio por e-mail/WhatsApp.
- Área administrativa mínima para editar promoções e lista de produtos (CMS headless ou planilha).

### 4.2 Fora de escopo (v1)
- Carrinho de compras, pagamento online e checkout.
- Sistema de cadastro/login de clientes.
- Marketplace de terceiros.
- Blog com conteúdo frequencial (fase 2).
- App nativo.

---

## 5. Arquitetura da informação

**Navegação fixa no topo (header):** Logo/nome · Pets · Agro · Rações · Promoções · Entrega · Contato · botão **WhatsApp** (sempre visível).

### 5.1 Páginas / seções

| # | Seção/Página | Objetivo | Conteúdo essencial |
|---|--------------|----------|--------------------|
| 1 | **Hero** | Impacto imediato e identidade | Nome "AGROPECUÁRIA ÁGUAS LINDAS" em tipografia pesada sobre verde; subtítulo "Rações, medicamentos e produtos agropecuários"; cão e gato em foto de destaque; botão WhatsApp + botão "Ver produtos" |
| 2 | **Barra de confiança** | Provar variedade e praticidade | Ícones: *Entrega na região* · *As melhores marcas* · *Atendimento rápido no WhatsApp* · *Pagamento fácil* |
| 3 | **Categorias** | Orientar a navegação | Cards grandes: **Pet** (foto de cão/gato), **Agro** (foto de campo/animal de criação), **Medicamentos**, **Acessórios** |
| 4 | **Rações & marcas** | Usar marcas como selos | Grade de logos/selos das marcas de ração; filtro simples por cão/gato; cada marca abre WhatsApp com mensagem pronta |
| 5 | **Produtos em destaque** | Vitrue popular | Lista curta com foto, nome e "Consultar no WhatsApp" |
| 6 | **Promoções** | Chamada de venda | Faixa com fundo vermelho coral `#D97372`, texto branco, bullet curto; máximo 3 itens simultâneos |
| 7 | **Entrega** | Eliminar dúvida | Mapa simples da área atendida, horários, pedido mínimo (se houver) |
| 8 | **Sobre** | Vínculo local | Foto real da fachada, história curta, "de bairro, para o bairro" |
| 9 | **Contato** | Conversão | Telefone grande, ícone WhatsApp destacado, horários, endereço, formulário mínimo, botão Google Maps |
| 10 | **Rodapé** | Referência | CNPJ, endereço, horários, redes, categorias internas |

**Regra de hierarquia digital:** em qualquer viewport, no máximo **3 mensagens concorrendo** por tela. Nome da loja e WhatsApp nunca disputam espaço com promoções.

---

## 6. Identidade visual aplicada ao site

### 6.1 Paleta

| Cor | Hex | Uso no site | Proporção |
|-----|-----|-------------|-----------|
| Verde base | `#068052` | Header, hero, seções de fundo, footer, links | ~60% |
| Branco | `#F4F3EE` / `#FFFFFF` em texto sobre verde | Fundos claros, texto sobre verde | ~25% |
| Preto | `#171B1B` | Texto principal, contornos, sombras de tipografia | ~10% |
| Vermelho coral | `#D97372` (superfícies) · `#B85554` (fundo com texto) · `#A84544` (texto) | **Só** botões de ação, promoções, badges | ~4% |
| Amarelo | `#D8B43B` (sobre escuro) · `#F2CB58` (texto sobre verde) | Apoio pontual: destaques secundários, hover, ícones | ~1% |

> **Ajuste de acessibilidade:** o verde da fachada `#078C58` foi escurecido para `#068052` (e o coral para as variantes acima) porque, sobre branco e com texto branco, os valores originais não atingiam contraste AA (4.5:1). A diferença visual é imperceptível e a identidade é preservada.

**Regras de contraste:** texto branco apenas sobre verde `#078C58`, preto `#171B1B` ou coral `#D97372` (nunca sobre amarelo). Todos os pares devem atingir WCAG AA (4.5:1 em texto normal).

### 6.2 Tipografia
- **Títulos (H1–H3):** sans-serif geométrica pesada e arredondada, maiúscula, com leve contorno/sombra escura (`text-shadow` ou `-webkit-text-stroke` em preto `#171B1B`) para reforçar leitura. Sugestões livres: *Archivo Black*, *Baloo 2*, *Nunito ExtraBold*.
- **Corpo:** sans-serif de leitura (Inter, Nunito Sans ou Open Sans), peso 400/600, mínimo 16px, itálico reservado para legendas e citações.
- **Escala:** H1 `clamp(2.5rem, 7vw, 5rem)` · H2 `clamp(1.75rem, 4vw, 3rem)` · corpo 1rem/1.6.
- Títulos sempre **curtos**: máximo 5 palavras por título de seção.

### 6.3 Elementos gráficos
- Fotos de **cão e gato** em recorte sobre verde — sinal visual fixo da área pet (hero, cards, favicon).
- Marcas de ração exibidas como **selos circulares** em grade, sem bordas duras pesadas.
- Ícone de telefone + **balão do WhatsApp** em verde-claro, sempre no botão flutuante.
- Formas arredondadas (border-radius 16–24px) para reforçar o tom popular e amigável.
- Padrão sutil de textura/riscas de campo (stripes) como divisória entre seções, em verde escuro 6% de opacidade.

### 6.4 Direções de layout (moderno ≠ genérico)
1. **Hero em bloco sólido** com tipografia gigante e foto de animal sangrando pela lateral — nada de gradiente pastel genérico.
2. **Cards com contorno preto fino e sombra deslocada** (estilo "sticker"), remetendo aos selos da fachada.
3. **Faixa de promoção coral** em ângulo leve (-1°) para dinamismo.
4. **Movimento discreto:** fade-up no scroll, hover que eleva o card 4px, botão WhatsApp com pulso suave. Respeitar `prefers-reduced-motion`.
5. Espaçamento generoso entre seções (80–120px desktop / 48–64px mobile).

---

## 7. Requisitos funcionais

| ID | Requisito | Prioridade |
|----|-----------|------------|
| RF01 | Site responsivo (mobile-first, breakpoints 640/768/1024/1280) | Must |
| RF02 | Botão WhatsApp flutuante fixo em todas as telas, com `wa.me` + mensagem pré-preenchida por origem (hero, categoria, marca, promoção) | Must |
| RF03 | Catálogo de categorias e produtos com foto, nome e marca | Must |
| RF04 | Grade de marcas de ração com selos clicáveis | Must |
| RF05 | Faixa de promoções editável (máx. 3 itens ativos) | Must |
| RF06 | Formulário de contato (nome + mensagem) com validação e anti-spam (honeypot) | Should |
| RF07 | Bloco de entrega com área, horários e pedido mínimo | Must |
| RF08 | Lightbox de fotos (galeria da fachada, produtos) | Could |
| RF09 | CMS/admin para editar promoções e produtos sem código | Should |
| RF10 | Botão "ligar agora" (`tel:`) em mobile | Must |
| RF11 | Busca simples por nome de produto (client-side) | Could |

### 7.1 Mensagens prontas do WhatsApp (exemplos)
- Geral: `Olá! Vim pelo site da Agropecuária Águas Lindas e gostaria de um atendimento.`
- Ração: `Olá! Vi no site a ração de [marca]. Ela está disponível? Entregam?`
- Promoção: `Olá! Vi a promoção de [produto] no site. Ainda está valendo?`
- Agro: `Olá! Preciso de [produto agropecuário]. Vocês têm?`

---

## 8. Requisitos não funcionais

| Área | Requisito |
|------|-----------|
| Performance | LCP < 2.5s em 4G; imagens WebP/AVIF com *lazy loading*; peso da home < 1.5MB |
| SEO | Título e meta description únicos; H1 único; Open Graph; sitemap.xml; robots.txt |
| SEO local | Schema `LocalBusiness`/`Store` com endereço, horários e telefone; compatível com Google Meu Negócio |
| Acessibilidade | WCAG 2.1 AA; alt em todas as imagens; foco visível; alvos de toque ≥ 44px; contraste verificado |
| Compatibilidade | Últimas 2 versões de Chrome, Safari, Firefox, Edge; iOS e Android |
| Segurança | HTTPS; honeypot/limitação no formulário; dependências atualizadas |
| Analytics | GA4 ou Plausible com eventos: `click_whatsapp`, `click_tel`, `submit_form`, `view_promo` |
| Idioma | PT-BR completo, sem textos placeholder |

---

## 9. Conteúdo necessário (checklist para publicação)

- [ ] Logo da loja em vetor (ou foto recortada da fachada em alta)
- [ ] Fotos reais: fachada, interior, cão, gato, produtos
- [ ] Lista de marcas de ração (nomes + logos)
- [ ] Lista de categorias e produtos com nomes populares
- [ ] Telefone/WhatsApp, endereço, CNPJ, horários de funcionamento
- [ ] Área e regras de entrega
- [ ] Promoções ativas
- [ ] Texto institucional curto (até 60 palavras)

---

## 10. Métricas de sucesso (KPIs)

| KPI | Meta 90 dias | Fonte |
|-----|--------------|-------|
| Cliques em WhatsApp | 40+/mês | GA4 evento `click_whatsapp` |
| Taxa de rejeição home | < 55% | GA4 |
| Tempo médio na página | > 1:30 min | GA4 |
| Cliques em "ligar" (mobile) | 15+/mês | GA4 evento `click_tel` |
| Posições 1–3 para "petshop + bairro" | 3+ palavras | Search Console |
| Formulários enviados | 10+/mês | GA4 evento `submit_form` |

---

## 11. Stack sugerida

**Opção A — Leve e rápida (recomendada):**
- HTML/CSS/JS moderno ou Astro/Next.js (estático)
- CMS via JSON/Git ou Decap CMS para promoções
- Hospedagem: Vercel/Netlify + domínio próprio
- WhatsApp: link `wa.me` puro (sem API)

**Opção B — WordPress leve** (se o cliente já usa): tema próprio, Elementor ou blocos nativos, plugin de formulário e cache.

Critério de escolha: manutenção por pessoa não técnica → Opção B; velocidade e custo baixo → Opção A.

---

## 12. Cronograma (sprints de 1 semana)

| Semana | Entrega |
|--------|---------|
| 1 | Descoberta, coleta de conteúdo/fotos, wireframe de baixa fidelidade |
| 2 | Direção visual (paleta, tipografia, componentes) + home em alta fidelidade |
| 3 | Páginas/seções internas, responsividade, animações |
| 4 | Integrações (WhatsApp, formulário, SEO local), testes e acessibilidade |
| 5 | Publicação, analytics, treino de manutenção e ajustes finos |

---

## 13. Riscos e mitigação

| Risco | Impacto | Mitigação |
|-------|---------|-----------|
| Fotos de baixa qualidade | Site perde o "bonito" | Ensaiar fotos na loja com luz natural; usar apenas imagens ≥ 1600px |
| Herdar o excesso de mensagens da fachada | Poluição visual | Regra dos "3 mensagens por tela"; aprovação de wireframe antes do design |
| Falta de conteúdo do cliente | Atraso | Checklist de conteúdo na Semana 1 com prazo |
| Catálogo desatualizado | Perda de confiança | Itens de vitrine como "consulta via WhatsApp", sem preço fixo; revisão mensal |
| Uso de vermelho em excesso | Perde o poder de chamada | Diretriz: coral só em CTAs e promoções (limite: 1 bloco coral por viewport) |

---

## 14. Fora do escopo explícito (v1) — relembrando

Sem carrinho, sem pagamento online, sem área do cliente, sem blog. Esses entram na **fase 2** somente se os KPIs de WhatsApp e tráfego orgânico forem atingidos.

---

## 15. Critérios de aceite do produto (DoD)

- [ ] Home carrega em < 2.5s em 4G e passa no Lighthouse Performance ≥ 85, Accessibility ≥ 95
- [ ] Verde `#078C58` presente como cor dominante em todas as telas
- [ ] Coral `#D97372` aparece apenas em CTAs e promoções
- [ ] Botão WhatsApp visível em 100% das telas, com mensagem pré-preenchida testada
- [ ] Hierarquia nome → categoria → contato respeitada em todos os breakpoints
- [ ] Fotos de cão e gato presentes na dobra do hero
- [ ] Todos os textos em PT-BR, sem placeholder
- [ ] Testado em iPhone Safari e Android Chrome reais
