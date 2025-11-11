"use client";

import Navigation from "@/components/Navigation";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Briefcase, Calendar, Code2, CheckCircle } from "lucide-react";

export default function Experience() {
  const experiences = [
    {
      title: "Desenvolvedor Web Freelancer",
      company: "Microempreendedor",
      period: "2023 - 2024",
      duration: "1 ano",
      type: "Freelance",
      description: "Trabalhei em estreita colaboração com um microempreendedor para desenvolver soluções web completas, desde o planejamento até a implementação.",
      responsibilities: [
        "Desenvolvimento de páginas web completas com front-end e back-end",
        "Criação e integração de APIs RESTful",
        "Implementação de conexões com banco de dados MySQL",
        "Design responsivo e otimizado para diversos dispositivos",
        "Manutenção e atualização de sistemas existentes",
        "Comunicação direta com cliente para levantamento de requisitos"
      ],
      technologies: ["PHP", "JavaScript", "HTML/CSS", "MySQL", "APIs REST"]
    },
    {
      title: "Projetos Acadêmicos",
      company: "Universidade Católica de Pernambuco",
      period: "2023 - Presente",
      duration: "Em andamento",
      type: "Acadêmico",
      description: "Desenvolvimento de diversos projetos acadêmicos focados em aplicar conhecimentos teóricos em soluções práticas.",
      responsibilities: [
        "Desenvolvimento de aplicações web usando React e Next.js",
        "Criação de aplicativos móveis com React Native",
        "Implementação de sistemas de gerenciamento de banco de dados",
        "Trabalho em equipe utilizando metodologias ágeis",
        "Analise de dados com python",
        "Apresentação de soluções desenvolvidas"
      ],
      technologies: ["React", "JavaScript", "Python", "React Native", "TypeScript", "Node.js", "Next.js"]
    }
  ];

  const skills = {
    technical: [
      { name: "Frontend Development", level: 90 },
      { name: "Backend Development", level: 85 },
      { name: "Database Design", level: 80 },
      { name: "API Development", level: 85 },
      { name: "Mobile Development", level: 75 }
    ],
    soft: [
      "Comunicação efetiva",
      "Trabalho em equipe",
      "Resolução de problemas",
      "Aprendizado contínuo",
      "Gestão de tempo",
      "Atenção aos detalhes"
    ]
  };

  return (
    <div className="min-h-screen">
      <Navigation />
      
      <main className="container mx-auto px-4 pt-24 pb-12">
        <div className="max-w-5xl mx-auto space-y-12">
          {/* Header */}
          <div className="text-center space-y-4 animate-fadeIn">
            <h1 className="text-5xl md:text-6xl font-bold bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
              Experiência Profissional
            </h1>
            <p className="text-xl text-foreground/70 max-w-2xl mx-auto">
              Projetos e experiências que moldaram minha carreira
            </p>
          </div>

          {/* Experience Timeline */}
          <div className="space-y-8">
            {experiences.map((exp, index) => (
              <Card 
                key={index}
                className="glass border-primary/20 hover:border-primary/50 transition-all duration-300 animate-fadeIn"
                style={{ animationDelay: `${index * 0.2}s` }}
              >
                <CardHeader>
                  <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-4">
                    <div className="space-y-2">
                      <CardTitle className="text-2xl flex items-start gap-3">
                        <Briefcase className="w-7 h-7 text-primary flex-shrink-0 mt-1" />
                        <div>
                          <span className="text-primary block">{exp.title}</span>
                          <span className="text-lg font-semibold text-foreground/90">{exp.company}</span>
                        </div>
                      </CardTitle>
                    </div>
                    <div className="flex flex-col gap-2 text-foreground/70">
                      <div className="flex items-center gap-2">
                        <Calendar className="w-4 h-4" />
                        <span>{exp.period}</span>
                      </div>
                      <span className="px-3 py-1 bg-secondary/20 border border-secondary/30 rounded-full text-sm text-center">
                        {exp.type}
                      </span>
                    </div>
                  </div>
                </CardHeader>
                <CardContent className="space-y-6">
                  <p className="text-foreground/80 text-lg leading-relaxed">
                    {exp.description}
                  </p>
                  
                  <div className="space-y-3">
                    <h3 className="font-semibold text-lg text-foreground/90 flex items-center gap-2">
                      <CheckCircle className="w-5 h-5 text-primary" />
                      Principais Responsabilidades:
                    </h3>
                    <ul className="space-y-2 ml-7">
                      {exp.responsibilities.map((resp, idx) => (
                        <li key={idx} className="text-foreground/80 flex items-start gap-2">
                          <span className="text-primary mt-1.5">•</span>
                          <span>{resp}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                  
                  <div className="space-y-3">
                    <h3 className="font-semibold text-lg text-foreground/90 flex items-center gap-2">
                      <Code2 className="w-5 h-5 text-secondary" />
                      Tecnologias Utilizadas:
                    </h3>
                    <div className="flex flex-wrap gap-2">
                      {exp.technologies.map((tech, idx) => (
                        <span 
                          key={idx}
                          className="px-4 py-2 bg-secondary/10 border border-secondary/30 rounded-lg text-sm text-foreground/90"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          {/* Skills Section */}
          <div className="grid md:grid-cols-2 gap-6">
            {/* Technical Skills */}
            <Card className="glass border-primary/20 animate-fadeIn">
              <CardHeader>
                <CardTitle className="text-2xl text-primary">Habilidades Técnicas</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                {skills.technical.map((skill, index) => (
                  <div key={index} className="space-y-2">
                    <div className="flex justify-between text-sm">
                      <span className="text-foreground/90">{skill.name}</span>
                      <span className="text-primary font-semibold">{skill.level}%</span>
                    </div>
                    <div className="h-2 bg-muted rounded-full overflow-hidden">
                      <div 
                        className="h-full bg-gradient-to-r from-primary to-secondary rounded-full transition-all duration-1000"
                        style={{ width: `${skill.level}%` }}
                      ></div>
                    </div>
                  </div>
                ))}
              </CardContent>
            </Card>

            {/* Soft Skills */}
            <Card className="glass border-secondary/20 animate-fadeIn">
              <CardHeader>
                <CardTitle className="text-2xl text-secondary">Soft Skills</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-1 gap-3">
                  {skills.soft.map((skill, index) => (
                    <div 
                      key={index}
                      className="flex items-center gap-3 p-3 bg-secondary/5 border border-secondary/20 rounded-lg hover:bg-secondary/10 transition-colors"
                    >
                      <CheckCircle className="w-5 h-5 text-secondary flex-shrink-0" />
                      <span className="text-foreground/90">{skill}</span>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </main>
    </div>
  );
}