"use client";

import Navigation from "@/components/Navigation";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { GraduationCap, Calendar, MapPin } from "lucide-react";

export default function Education() {
  const education = [
    {
      degree: "Superior em Sistemas para Internet",
      institution: "Universidade Católica de Pernambuco",
      period: "2023 - Presente",
      location: "Recife, PE",
      description: "Curso focado em desenvolvimento web full-stack, arquitetura de sistemas, banco de dados, segurança da informação e gestão de projetos.",
      highlights: [
        "Redes de Computadores",
        "Arquitetura de Software",
        "Banco de Dados",
        "Programação front-end",
        "Gestão de Projetos"
      ]
    },
    {
      degree: "Técnico em Desenvolvimento de Sistemas",
      institution: "Instituição de Ensino Grau Técnico",
      period: "2022 - 2024",
      location: "Pernambuco, Brasil",
      description: "Formação técnica abrangente em programação, desenvolvimento de sistemas, banco de dados e fundamentos de engenharia de software.",
      highlights: [
        "Lógica de Programação",
        "Desenvolvimento de Aplicações Desktop e Web",
        "Banco de Dados Relacionais",
        "Metodologias Ágeis",
        "Análise e Projeto de Sistemas"
      ]
    }
  ];

  const certifications = [
    "Desenvolvimento Web Moderno",
    "JavaScript ES6+",
    "React e React Native",
    "PHP e MySQL",
    "Git e GitHub"
  ];

  return (
    <div className="min-h-screen">
      <Navigation />
      
      <main className="container mx-auto px-4 pt-24 pb-12">
        <div className="max-w-5xl mx-auto space-y-12">
          {/* Header */}
          <div className="text-center space-y-4 animate-fadeIn">
            <h1 className="text-5xl md:text-6xl font-bold bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
              Formação Acadêmica
            </h1>
            <p className="text-xl text-foreground/70 max-w-2xl mx-auto">
              Minha jornada educacional no mundo da tecnologia
            </p>
          </div>

          {/* Education Timeline */}
          <div className="space-y-8">
            {education.map((edu, index) => (
              <Card 
                key={index}
                className="glass border-primary/20 hover:border-primary/50 transition-all duration-300 animate-fadeIn"
                style={{ animationDelay: `${index * 0.2}s` }}
              >
                <CardHeader>
                  <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-4">
                    <div className="space-y-2">
                      <CardTitle className="text-2xl flex items-start gap-3">
                        <GraduationCap className="w-7 h-7 text-primary flex-shrink-0 mt-1" />
                        <span className="text-primary">{edu.degree}</span>
                      </CardTitle>
                      <p className="text-lg font-semibold text-foreground/90">{edu.institution}</p>
                    </div>
                    <div className="flex flex-col gap-2 text-foreground/70">
                      <div className="flex items-center gap-2">
                        <Calendar className="w-4 h-4" />
                        <span>{edu.period}</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <MapPin className="w-4 h-4" />
                        <span>{edu.location}</span>
                      </div>
                    </div>
                  </div>
                </CardHeader>
                <CardContent className="space-y-6">
                  <p className="text-foreground/80 text-lg leading-relaxed">
                    {edu.description}
                  </p>
                  
                  <div className="space-y-3">
                    <h3 className="font-semibold text-lg text-foreground/90">Principais Disciplinas:</h3>
                    <div className="flex flex-wrap gap-2">
                      {edu.highlights.map((highlight, idx) => (
                        <span 
                          key={idx}
                          className="px-4 py-2 bg-primary/10 border border-primary/30 rounded-lg text-sm text-foreground/90 hover:bg-primary/20 transition-colors"
                        >
                          {highlight}
                        </span>
                      ))}
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

        </div>
      </main>
    </div>
  );
}