export type Project = {
  id: number;
  name: string;
  category: string;
  description: string;
  contribution: string;
  stack: string[];
  liveUrl: string;
  repositoryUrl: string;
  featured: boolean;
};

export const projects: Project[] = [
  {
    id: 1,
    name: "Bookly",
    category: "Aplicação Web • Projeto acadêmico em equipe",
    description:
      "Plataforma colaborativa para doação e empréstimo de livros, permitindo que usuários encontrem títulos disponíveis, cadastrem livros e acompanhem solicitações dentro da aplicação.",
    contribution:
      "Atuei principalmente no desenvolvimento das telas de livros, perfil, solicitações, pedidos e doações, além de ajustes para dispositivos móveis e integrações relacionadas ao consumo de dados.",
    stack: [
      "React",
      "Next.js",
      "JavaScript",
      "Tailwind CSS",
      "Zustand",
      "TanStack Query",
      "Axios",
    ],
    liveUrl: "https://bookly-front.vercel.app/",
    repositoryUrl: "https://github.com/Ppedro-Leal/bookly-front",
    featured: true,
  },
  {
    id: 2,
    name: "Galeria de Fotos",
    category: "Aplicação Front-End",
    description:
      "Galeria responsiva com pesquisa de imagens em tempo real e interface adaptada para diferentes tamanhos de tela.",
    contribution:
      "Projeto desenvolvido com foco em componentização, tipagem com TypeScript, responsividade e organização da interface.",
    stack: ["React", "Next.js", "TypeScript", "Tailwind CSS"],
    liveUrl: "https://galeria-fotos-rho-two.vercel.app/",
    repositoryUrl: "https://github.com/Ppedro-Leal/Galeria_Fotos",
    featured: true,
  },
];