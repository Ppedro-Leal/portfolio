"use client";

import Navigation from "@/components/Navigation";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Code2, Palette, Database, Zap } from "lucide-react";

export default function About() {
  const technologies = [
    {
      category: "Frontend",
      icon: <Palette className="w-6 h-6" />,
      items: ["React", "Vue.js", "HTML5", "CSS3", "JavaScript", "TypeScript", "Tailwind CSS", "Next.js"]
    },
    {
      category: "Backend",
      icon: <Database className="w-6 h-6" />,
      items: ["PHP", "Node.js", "C#", "APIs RESTful", "MySQL", "PostgreSQL"]
    },
    {
      category: "Mobile",
      icon: <Code2 className="w-6 h-6" />,
      items: ["React Native", "Desenvolvimento Híbrido"]
    },
    {
      category: "Ferramentas",
      icon: <Zap className="w-6 h-6" />,
      items: ["Git & GitHub", "Vite", "npm/yarn", "VS Code", "Postman"]
    }
  ];

  return (
    <div className="min-h-screen">
      <Navigation />
      
      <main className="container mx-auto px-4 pt-24 pb-12">
        <div className="max-w-5xl mx-auto space-y-12">
          {/* Header */}
          <div className="text-center space-y-4 animate-fadeIn">
            <h1 className="text-5xl md:text-6xl font-bold bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
              Sobre Mim
            </h1>
            <p className="text-xl text-foreground/70 max-w-2xl mx-auto">
              Desenvolvedor apaixonado por criar experiências digitais incríveis
            </p>
          </div>

          {/* Bio Section */}
          <Card className="glass border-primary/20 animate-fadeIn">
            <CardHeader>
              <CardTitle className="text-2xl text-primary">Minha História</CardTitle>
            </CardHeader>
            <CardContent className="text-foreground/80 space-y-4 text-lg leading-relaxed">
              <p>
                Olá! Sou Pedro Leal, um desenvolvedor de 22 anos apaixonado por tecnologia e programação. 
                Minha jornada no mundo do desenvolvimento começou com um técnico em Desenvolvimento de Sistemas, 
                onde descobri meu amor por criar soluções através do código.
              </p>
              <p>
                Atualmente estou cursando Superior em Sistemas para Internet na Universidade Católica de Pernambuco, 
                onde continuo expandindo meus conhecimentos e habilidades. Durante minha trajetória, tive a oportunidade 
                de trabalhar como freelancer por 1 ano, desenvolvendo páginas web completas com front-end e back-end, 
                incluindo conexões com banco de dados e criação de APIs.
              </p>
              <p>
                Minha experiência prática me permitiu trabalhar com diversas tecnologias modernas e desenvolver 
                habilidades tanto no desenvolvimento de interfaces atraentes quanto na construção de sistemas robustos 
                no lado do servidor.
              </p>
            </CardContent>
          </Card>

          {/* Technologies Section */}
          <div className="space-y-6">
            <h2 className="text-3xl font-bold text-center">Tecnologias & Ferramentas</h2>
            <div className="grid md:grid-cols-2 gap-6">
              {technologies.map((tech, index) => (
                <Card 
                  key={tech.category} 
                  className="glass border-primary/20 hover:border-primary/50 transition-all duration-300 animate-fadeIn"
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  <CardHeader>
                    <CardTitle className="flex items-center gap-3 text-primary">
                      {tech.icon}
                      {tech.category}
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="flex flex-wrap gap-2">
                      {tech.items.map((item) => (
                        <span 
                          key={item}
                          className="px-3 py-1 bg-primary/10 border border-primary/30 rounded-full text-sm text-foreground/90"
                        >
                          {item}
                        </span>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>

          {/* App Info Section */}
          <Card className="glass border-secondary/20 animate-fadeIn">
            <CardHeader>
              <CardTitle className="text-2xl text-secondary">Sobre Este Portfólio</CardTitle>
            </CardHeader>
            <CardContent className="text-foreground/80 space-y-4">
              <p className="text-lg">
                Este portfólio foi desenvolvido como parte de um projeto acadêmico, utilizando as seguintes tecnologias:
              </p>
              <ul className="space-y-2 list-disc list-inside">
                <li><strong>Next.js</strong> - Framework React para produção</li>
                <li><strong>TypeScript</strong> - Superset tipado do JavaScript</li>
                <li><strong>Tailwind CSS</strong> - Framework CSS utility-first</li>
                <li><strong>Shadcn/ui</strong> - Componentes reutilizáveis e acessíveis</li>
                <li><strong>Next Themes</strong> - Suporte a dark mode</li>
              </ul>
            </CardContent>
          </Card>
        </div>
      </main>
    </div>
  );
}