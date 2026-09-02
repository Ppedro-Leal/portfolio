# Pedro Leal — Portfólio

Portfólio pessoal desenvolvido para apresentar minha experiência, projetos e atuação como Desenvolvedor Full Stack.

A aplicação foi construída como uma experiência one-page e possui três interpretações visuais diferentes do mesmo conteúdo.

## Deploy

https://pedrohleal.vercel.app

## Modos visuais

### Base

Interface principal do portfólio, com uma linguagem profissional, limpa e objetiva.

### Noir

Inspirada no spider noir tendo foco em ser monocromática com alto contraste, composição editorial, hatching, halftone e elementos inspirados em quadrinhos e impressão. 

### Illustrated

Inspirada em borderlands, sendo mais expressiva, utilizando contornos fortes, cel shading, formas geométricas, texturas de impressão e uma paleta mais intensa. 

Os três modos compartilham o mesmo conteúdo e estrutura da aplicação. A troca altera apenas sua representação visual.

## Tecnologias

- Next.js
- React
- TypeScript
- Tailwind CSS
- Lucide React

## Estrutura

```text
src/
├── app/
├── components/
│   ├── sections/
│   └── visual-mode/
├── context/
├── data/
├── styles/
│   └── visual-modes/
└── types/
```

### Sistema de modos visuais

A troca dos modos é controlada por:

- `VisualModeContext`
- `VisualModeSwitcher`
- `VisualTransition`

Os estilos específicos são isolados em:

```text
src/styles/visual-modes/
├── noir.css
├── illustrated.css
└── transition.css
```

## Seções

- Apresentação
- Projetos selecionados
- Experiência profissional
- Tecnologias
- Formação
- Sobre
- Contato

## Qualidade

O projeto possui:

- layout responsivo para mobile, tablet e desktop
- navegação por teclado
- suporte a `prefers-reduced-motion`
- skip link
- Open Graph
- sitemap
- robots.txt
- headers básicos de segurança
- geração estática das páginas e metadados

## Executando localmente

```bash
npm install
npm run dev
```

Para executar todas as validações:

```bash
npm run check
```

Esse comando executa:

```text
ESLint
TypeScript
Build de produção
```

## Autor

Pedro Leal

- GitHub: https://github.com/Ppedro-Leal
- LinkedIn: https://linkedin.com/in/pedrohleal
- Portfólio: https://pedrohleal.vercel.app