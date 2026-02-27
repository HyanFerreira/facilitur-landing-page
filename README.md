# FaciliTur Landing Page

Landing page institucional do **FaciliTur**, desenvolvida em React + Vite, com foco em apresentar a proposta do produto, captar interesse de usuários e abrir canal para novos parceiros institucionais.

## 📌 Visão geral

A aplicação comunica, de forma objetiva, a proposta do FaciliTur:

- Centralizar e divulgar eventos turísticos de forma acessível.
- Apoiar municípios e parceiros na gestão e transparência dos dados de participação.
- Incentivar inscrições na newsletter para envio de cronogramas por e-mail (dia, semana, mês e ano).

A página é composta por seções de:

- **Header** com navegação por âncoras.
- **Hero** com proposta principal e CTA.
- **Sobre** com explicação do produto e missão.
- **Parceiros** com chamada para colaboração.
- **Contato + Newsletter** com formulário de captura.
- **Footer** institucional.

## 🧱 Stack técnica

- **React 19**
- **Vite 7**
- **CSS puro** (estilização customizada, responsiva)
- **ESLint 9**

## 📁 Estrutura do projeto

```bash
facilitur-landing-page/
├── public/
│   └── vite.svg
├── src/
│   ├── assets/
│   │   ├── banner_mockup.png
│   │   └── logotipo_horizontal.svg
│   ├── App.jsx
│   ├── App.css
│   ├── index.css
│   └── main.jsx
├── index.html
├── package.json
├── vite.config.js
└── eslint.config.js
```

## ▶️ Como executar localmente

### Pré-requisitos

- **Node.js** 18+ (recomendado 20+)
- **npm** 9+

### 1) Clonar o projeto

```bash
git clone https://github.com/HyanFerreira/facilitur-landing-page
cd facilitur-landing-page
```

### 2) Instalação das dependências

```bash
npm install
```

### 3) Ambiente de desenvolvimento

```bash
npm run dev
```

O Vite exibirá a URL local (normalmente `http://localhost:5173`).

## 🧪 Scripts disponíveis

- `npm run dev` — inicia ambiente de desenvolvimento com hot reload.
- `npm run build` — gera build de produção em `dist/`.
- `npm run preview` — serve localmente a build gerada.
- `npm run lint` — executa lint do projeto.

## 🎨 Diretrizes de UI atuais

- Identidade visual baseada em tons de azul com destaque laranja (**brand**).
- Layout mobile-first com ajustes para desktop por media queries.
- Navegação por âncoras com compensação para header sticky.
- Botões com variantes visuais (`ghost`, `brand`, `cta`) para hierarquia de ações.

## 🚀 Publicação

Para publicar em um host estático (Vercel, Netlify, Cloudflare Pages, GitHub Pages etc.):

1. Execute `npm run build`.
2. Publique o conteúdo da pasta `dist/`.
3. Configure fallback para SPA somente se necessário (neste caso, o fluxo principal usa âncoras na própria página).

## 🗺️ Próximos passos sugeridos

- Integrar o formulário de newsletter com backend/serviço de e-mail marketing.
- Adicionar validação e feedback visual de envio (sucesso/erro).
- Instrumentar analytics para mensurar conversão dos CTAs.
- Adicionar SEO técnico (metatags sociais, sitemap, robots, schema.org).
- Implementar testes de interface e acessibilidade.
