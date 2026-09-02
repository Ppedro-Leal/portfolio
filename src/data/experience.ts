export type Experience = {
  company: string;
  role: string;
  period: string;
  description: string;
  highlights: string[];
  technologies?: string[];
};

export const experiences: Experience[] = [
  {
    company: "Bruno Vanderlei Advogados Associados",
    role: "Auxiliar de Sistemas II",
    period: "Jul 2026 — Atual",
    description:
      "Atuação no desenvolvimento, manutenção e sustentação de automações aplicadas a processos jurídicos e de cobrança, trabalhando com regras de negócio, análise de falhas e tratamento de dados.",
    highlights: [
      "Desenvolvimento e evolução de automações RPA de acordo com necessidades dos processos internos.",
      "Investigação e correção de falhas identificadas durante as execuções.",
      "Consultas e validações de dados com SQL Server.",
      "Acompanhamento de automações executadas em ambientes virtualizados.",
      "Análise de processos buscando maior estabilidade e eficiência operacional.",
    ],
    technologies: ["RPA", "SQL Server", "Automação", "Regras de negócio"],
  },
  {
    company: "Digital Azul",
    role: "Desenvolvedor Full Stack — Freelancer",
    period: "Mar 2023 — Jul 2024",
    description:
      "Atuei em conjunto com outro desenvolvedor na construção de aplicações web para clientes, participando do front-end, back-end, integração com bancos de dados e implementação de funcionalidades de negócio.",
    highlights: [
      "Desenvolvimento de uma aplicação com gerenciamento dinâmico de conteúdos, imagens, catálogo e diferentes áreas administrativas.",
      "Integração entre interface, regras de negócio e persistência de dados.",
      "Desenvolvimento Full Stack de uma plataforma de acompanhamento de processos.",
      "Implementação de autenticação, validação de dados e formulários.",
      "Comunicação em tempo real utilizando Socket.IO e WebSocket.",
    ],
    technologies: [
      "React",
      "Next.js",
      "Node.js",
      "TypeScript",
      "Vue.js",
      "Nuxt",
      "MongoDB",
      "MySQL",
      "Prisma",
      "WebSocket",
    ],
  },
];