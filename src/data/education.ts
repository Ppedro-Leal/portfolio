export type Education = {
  institution: string;
  course: string;
  period: string;
  description?: string;
};

export const education: Education[] = [
  {
    institution: "Universidade Católica de Pernambuco — UNICAP",
    course: "Tecnólogo em Sistemas para Internet",
    period: "Ago 2024 — Dez 2026",
    description:
      "Formação voltada ao desenvolvimento de aplicações web, engenharia de software, bancos de dados e construção de sistemas.",
  },
  {
    institution: "Grau Técnico",
    course: "Técnico em Desenvolvimento de Sistemas",
    period: "Mai 2022 — Jun 2024",
    description:
      "Formação técnica com prática em programação, desenvolvimento web, bancos de dados e construção de aplicações.",
  },
];