# Agropecuária Águas Lindas

Site institucional da **Agropecuária Águas Lindas** — comércio de bairro que atende a área pet (rações, medicamentos, acessórios) e a área agropecuária (insumos, suplementos e itens para criação e lavoura).

Página única, responsiva, em português, construída com HTML, CSS e JavaScript puros — sem dependências, sem etapa de build.

## Estrutura

```
site-aguas-lindas/
├── index.html        # página única com todas as seções
├── css/styles.css    # identidade visual e layout responsivo
├── js/main.js        # menu mobile, animações, formulário
├── server.ps1        # servidor local para Windows (PowerShell)
└── README.md
```

## Seções do site

1. **Hero** — nome da loja em tipografia pesada, cão e gato, chamadas para WhatsApp e catálogo
2. **Barra de confiança** — entrega, marcas, atendimento e pagamento
3. **Departamentos** — Pets, Agro, Medicamentos e Acessórios
4. **Rações & selos** — marcas em selos clicáveis e vitrine de produtos
5. **Promoções** — faixa coral com até 3 ofertas ativas
6. **Entrega** — área atendida, horários e combinados
7. **Sobre** — história curta e fotos da loja
8. **Contato** — WhatsApp, telefone, endereço, horários e formulário
9. **Rodapé** + botão flutuante de WhatsApp

## Identidade visual

Extraída da fachada da loja: verde dominante, alto contraste, títulos grandes e arredondados, fotos de animais como sinal da área pet.

| Cor | Hex | Uso |
|-----|-----|-----|
| Verde base | `#068052` | Header, hero, seções de fundo, links |
| Branco | `#F4F3EE` / `#FFFFFF` | Fundos claros, texto sobre verde |
| Preto | `#171B1B` | Texto, contornos e sombras (estilo "sticker") |
| Coral | `#D97372` · `#B85554` · `#A84544` | **Somente** botões de ação, promoções e badges |
| Amarelo | `#D8B43B` · `#F2CB58` | Apoio: destaques, hover, ícones |

> O verde da fachada (`#078C58`) e o coral original foram escurecidos levemente para atingir contraste AA (4.5:1) em texto branco e texto colorido. A diferença visual é imperceptível.

**Tipografia:** [Baloo 2](https://fonts.google.com/specimen/Baloo+2) (títulos, pesada e arredondada) e [Nunito](https://fonts.google.com/specimen/Nunito) (corpo), carregadas via Google Fonts.

**Regra de conteúdo:** no máximo 3 mensagens concorrendo por tela — nome, categoria e contato — herdada da leitura da fachada.

## Rodar localmente

No Windows, usando o servidor incluso (PowerShell):

```powershell
powershell -ExecutionPolicy Bypass -File .\server.ps1
# http://localhost:8747
```

Outras opções:

```bash
# Python
python -m http.server 8000

# Node
npx serve .
```

Abrir o `index.html` direto no navegador também funciona, mas o servidor local evita bloqueios de `file://` ao carregar imagens externas.

## Configurar antes de publicar

Busque e substitua em `index.html` e `js/main.js`:

| Onde | Valor atual | Trocar por |
|------|-------------|------------|
| Número no WhatsApp (`wa.me/`) | `5531999991234` | DDD + número real |
| Telefone (`tel:`) | `(31) 99999-1234` | Telefone da loja |
| Endereço | `Rua principal, centro — Águas Lindas` | Endereço completo |
| Horários | `Seg a sáb · 7h às 18h` | Horário real |
| Fotos | Banco de imagens (Unsplash) | Fotos reais da fachada e dos produtos |
| Marcas de ração | Golden, Premier, NDog… | Marcas realmente trabalhadas |

Todas as imagens atuais vêm do Unsplash e devem ser substituídas por fotos próprias antes da publicação.

## Publicar

O site é 100% estático — qualquer hospedagem funciona:

- **GitHub Pages:** *Settings → Pages → Deploy from a branch → main*
- **Vercel / Netlify:** importar o repositório, build vazio, public directory `/`
- **Domínio próprio:** apontar o CNAME após a configuração na hospedagem

## Acessibilidade e SEO

- Lighthouse: Acessibilidade **100** · Boas práticas **100** · SEO **100**
- Contraste AA em todos os pares de cor, alvos de toque ≥ 44px, foco visível
- `prefers-reduced-motion` respeitado nas animações
- Título, meta description, Open Graph e hierarquia de headings
- Sugestão de melhoria: adicionar schema `LocalBusiness` com endereço e horários no `<head>`

## Roadmap (fase 2)

- Catálogo com busca e filtro por categoria
- Carrinho e pedido online via WhatsApp
- Mapa da área de entrega
- Google Meu Negócio + schema `LocalBusiness`
- Versão em página própria por departamento

---

Documento de requisitos completo em [`docs/PRD.md`](docs/PRD.md) — objetivos, personas, arquitetura da informação, requisitos funcionais e não funcionais, métricas, cronograma e critérios de aceite.
