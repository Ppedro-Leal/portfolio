"use client";

import Navigation from "@/components/Navigation";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ExternalLink, Github, Code2, Sparkles } from "lucide-react";
import { useState, useEffect } from "react";

export default function Projects() {
  const [quote, setQuote] = useState({ text: "", author: "" });
  const [loading, setLoading] = useState(true);

   // Fetch inspirational quote from API
  useEffect(() => {
    const fetchQuote = async () => {
      try {
        const response = await fetch("https://api.quotable.io/random?tags=technology,inspirational");
        
        // FIX: Verifica se a resposta HTTP foi bem-sucedida (status 200-299)
        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`);
        }
        
        const data = await response.json();
        setQuote({ text: data.content, author: data.author });
      } catch (error) {
        // Entra aqui em caso de falha de rede ou erro HTTP (agora tratado)
        console.error("Error fetching quote:", error);
        // Fallback quote em caso de falha da API
        setQuote({ 
          text: "A única forma de fazer um excelente trabalho é amar o que você faz.", 
          author: "Steve Jobs" 
        });
      } finally {
        setLoading(false);
      }
    };
    fetchQuote();
  }, []);

  const projects = [
    {
      title: "Mini-Chat TCP com Python",
      description: "Sistema de chat multiusuário cliente-servidor, desenvolvido em Python utilizando o protocolo TCP e concorrência via threading.",
      technologies: ["PYTHON"],
      features: [
        "Autenticação de usuários",
        "CRUD completo de produtos",
        "Geração de relatórios em PDF",
        "Dashboard com estatísticas",
        "API RESTful integrada"
      ],
      link: "https://github.com/Ppedro-Leal/PyCHAT",
      github: "https://github.com/Ppedro-Leal/PyCHAT",
      image: "web-system"
    },
    {
      title: "Aplicativo Mobile",
      description: " Aplicativo educacional acessível desenvolvido em React Native com Expo. Seu objetivo é ensinar pais, educadores e especialistas sobre crianças neurodivergentes, promovendo a inclusão e o aprendizado com empatia, acessibilidade e tecnologia.",
      technologies: ["React Native", "TypeScript", "Expo", "APIs REST"],
      features: [
        "Interface responsiva e intuitiva",
        "Integração com API",
        "Armazenamento local",
        "Navegação fluida",
        "Componentes reutilizáveis"
      ],
      link: "https://github.com/Ppedro-Leal/Neuro_Guia",
      github: "https://github.com/Ppedro-Leal/Neuro_Guia",
      image: "mobile-app"
    },
    {
      title: "Gerenciador de Estoque",
      description: "Gerenciador de Estoque desenvolvido em Python com interface gráfica utilizando ttkbootstrap e tkinter. Ele permite o gerenciamento completo de um inventário de produtos, incluindo funcionalidades como adição, listagem, edição, exclusão e filtragem de produtos.",
      technologies: ["Python", "tkinter", "ttkbootstrap", "JSON"],
      features: [
        "Adicionar produtos: Inclua novos itens no inventário, especificando nome, categoria, quantidade e preço.",
        "Listar produtos: Visualize todos os produtos cadastrados no inventário.",
        "Editar produtos: Atualize informações de itens específicos, como nome, categoria, quantidade e preço.",
        "Excluir produtos: Remova itens do inventário usando o ID.",
        "Filtrar produtos: Busque por categorias e ordene os resultados por nome, quantidade ou preço.",
        "Salvar e carregar inventário: Os dados são persistidos em um arquivo JSON, garantindo que o inventário seja mantido entre execuções do programa."
      ],
      link: "https://github.com/Ppedro-Leal/agil_store",
      github: "https://github.com/Ppedro-Leal/agil_store",
      image: "landing-page"
    }
  ];

  return (
    <div className="min-h-screen">
      <Navigation />
      
      <main className="container mx-auto px-4 pt-24 pb-12">
        <div className="max-w-6xl mx-auto space-y-12">
          {/* Header */}
          <div className="text-center space-y-4 animate-fadeIn">
            <h1 className="text-5xl md:text-6xl font-bold bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
              Meus Projetos
            </h1>
            <p className="text-xl text-foreground/70 max-w-2xl mx-auto">
              Transformando ideias em realidade através do código
            </p>
          </div>

          {/* Inspirational Quote Card (API Integration) */}
          <Card className="glass border-secondary/20 animate-fadeIn">
            <CardContent className="p-6">
              <div className="flex items-start gap-4">
                <Sparkles className="w-8 h-8 text-secondary flex-shrink-0 mt-1" />
                <div className="space-y-2">
                  <p className="text-lg italic text-foreground/90">
                    {loading ? "Carregando citação..." : `"${quote.text}"`}
                  </p>
                  <p className="text-sm text-foreground/70">
                    {!loading && `— ${quote.author}`}
                  </p>
                  <p className="text-xs text-secondary/70">
                    * Citação obtida via API Quotable
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Projects Grid */}
          <div className="grid md:grid-cols-2 gap-6">
            {projects.map((project, index) => (
              <Card 
                key={index}
                className="glass border-primary/20 hover:border-primary/50 transition-all duration-300 animate-fadeIn group"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <CardHeader>
                  <CardTitle className="text-2xl flex items-start gap-3">
                    <Code2 className="w-6 h-6 text-primary flex-shrink-0 mt-1" />
                    <span className="text-primary">{project.title}</span>
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-6">
                  <p className="text-foreground/80 leading-relaxed">
                    {project.description}
                  </p>
                  
                  <div className="space-y-3">
                    <h4 className="font-semibold text-foreground/90">Principais Funcionalidades:</h4>
                    <ul className="space-y-1">
                      {project.features.map((feature, idx) => (
                        <li key={idx} className="text-sm text-foreground/70 flex items-start gap-2">
                          <span className="text-primary mt-0.5">•</span>
                          <span>{feature}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                  
                  <div className="space-y-3">
                    <h4 className="font-semibold text-foreground/90">Tecnologias:</h4>
                    <div className="flex flex-wrap gap-2">
                      {project.technologies.map((tech, idx) => (
                        <span 
                          key={idx}
                          className="px-3 py-1 bg-primary/10 border border-primary/30 rounded-full text-xs text-foreground/90"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>
                  
                  <div className="flex gap-3 pt-2">
                    <Button 
                      variant="outline"
                      size="sm"
                      className="flex-1 border-primary text-primary hover:bg-primary hover:text-primary-foreground"
                      onClick={() => window.open(project.link, "_blank")}
                    >
                      <ExternalLink className="w-4 h-4 mr-2" />
                      Ver Projeto
                    </Button>
                    <Button 
                      variant="outline"
                      size="sm"
                      className="flex-1 border-secondary text-secondary hover:bg-secondary hover:text-secondary-foreground"
                      onClick={() => window.open(project.github, "_blank")}
                    >
                      <Github className="w-4 h-4 mr-2" />
                      Código
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          {/* GitHub Integration Note */}
          <Card className="glass border-primary/20 animate-fadeIn">
            <CardContent className="p-6">
              <div className="flex items-start gap-4">
                <Github className="w-8 h-8 text-primary flex-shrink-0" />
                <div className="space-y-2">
                  <h3 className="text-lg font-semibold text-primary">Mais Projetos no GitHub</h3>
                  <p className="text-foreground/80">
                    Visite meu perfil no GitHub para ver mais projetos e contribuições open source.
                  </p>
                  <Button 
                    className="mt-4 bg-primary hover:bg-primary/90"
                    onClick={() => window.open("https://github.com/Ppedro-Leal", "_blank")}
                  >
                    <Github className="w-4 h-4 mr-2" />
                    Visitar GitHub
                  </Button>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </main>
    </div>
  );
}