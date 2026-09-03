# Pedro Leal — Portfólio

Portfólio pessoal desenvolvido para apresentar minha experiência, projetos e atuação como **Desenvolvedor Full Stack**.

A aplicação foi construída como uma experiência **one-page** e possui três interpretações visuais diferentes do mesmo conteúdo, mantendo a mesma estrutura, dados e navegação enquanto altera sua representação visual.

## Deploy

https://pedrohleal.vercel.app

## Preview

<p align="center">
  <img
    src="docs\images\portfolio-modes.png"
    alt="Prévia dos modos Base, Noir e Illustrated do portfólio de Pedro Leal"
    width="1000"
  >
</p>

## Modos visuais

### Base

Interface principal do portfólio, com uma linguagem profissional, limpa e objetiva, priorizando legibilidade, organização e apresentação direta das informações.

### Noir

Interpretação monocromática com alto contraste, composição editorial, hatching, halftone, texturas de impressão e elementos inspirados na linguagem visual de quadrinhos.

### Illustrated

Interpretação mais expressiva, utilizando contornos fortes, cel shading, formas geométricas, sobreposições, texturas de impressão e uma paleta mais intensa.

Os três modos compartilham o mesmo conteúdo e a mesma estrutura da aplicação. A troca altera apenas sua representação visual.

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

A troca entre os modos é controlada por:

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

Essa separação permite que os três modos compartilhem o mesmo conteúdo e componentes, reduzindo duplicação e mantendo cada identidade visual isolada.

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

### Lighthouse

Auditoria realizada na versão publicada do portfólio:

| Categoria | Resultado |
| --- | ---: |
| Performance | 94 |
| Accessibility | 96 |
| Best Practices | 100 |
| SEO | 100 |

## Executando localmente

Instale as dependências:

```bash
npm install
```

Execute o ambiente de desenvolvimento:

```bash
npm run dev
```

Para executar todas as validações do projeto:

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
