"use client";

import Navigation from "@/components/Navigation";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Mail, Phone, MapPin, Send, Facebook, Instagram, Linkedin, Github } from "lucide-react";
import { useState } from "react";
import { useToast } from "@/hooks/use-toast";

export default function Contact() {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: ""
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    // Simulate form submission
    toast({
      title: "Mensagem enviada com sucesso!",
      description: "Obrigado pelo contato. Responderei em breve.",
    });

    // Reset form
    setFormData({ name: "", email: "", message: "" });
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const socialLinks = [
    {
      name: "Facebook",
      icon: <Facebook className="w-5 h-5" />,
      url: "https://www.facebook.com/ppedro.leal/",
      color: "hover:text-blue-500"
    },
    {
      name: "Instagram",
      icon: <Instagram className="w-5 h-5" />,
      url: "https://www.instagram.com/ppedro_leal/",
      color: "hover:text-pink-500"
    },
    {
      name: "LinkedIn",
      icon: <Linkedin className="w-5 h-5" />,
      url: "https://www.linkedin.com/in/pedro-henrique-leal-amaral-97822721b/",
      color: "hover:text-blue-600"
    },
    {
      name: "GitHub",
      icon: <Github className="w-5 h-5" />,
      url: "https://github.com/Ppedro-Leal",
      color: "hover:text-foreground"
    }
  ];

  const contactInfo = [
    {
      icon: <Mail className="w-6 h-6" />,
      title: "Email",
      value: "pedroh.leal18@gmail.com",
      link: "mailto:pedroh.leal18@gmail.com"
    },
    {
      icon: <Phone className="w-6 h-6" />,
      title: "Telefone",
      value: "+55 (81) 9999-9999",
      link: "tel:+5581999999999"
    },
    {
      icon: <MapPin className="w-6 h-6" />,
      title: "Localização",
      value: "Recife, Pernambuco",
      link: "#"
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
              Entre em Contato
            </h1>
            <p className="text-xl text-foreground/70 max-w-2xl mx-auto">
              Vamos conversar sobre seu próximo projeto
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            {/* Contact Info Cards */}
            {contactInfo.map((info, index) => (
              <Card 
                key={index}
                className="glass border-primary/20 hover:border-primary/50 transition-all duration-300 animate-fadeIn group cursor-pointer"
                style={{ animationDelay: `${index * 0.1}s` }}
                onClick={() => info.link !== "#" && window.open(info.link, "_blank")}
              >
                <CardContent className="p-6 text-center space-y-3">
                  <div className="w-12 h-12 mx-auto bg-primary/10 rounded-full flex items-center justify-center text-primary group-hover:bg-primary group-hover:text-primary-foreground transition-all">
                    {info.icon}
                  </div>
                  <h3 className="font-semibold text-foreground/90">{info.title}</h3>
                  <p className="text-sm text-foreground/70">{info.value}</p>
                </CardContent>
              </Card>
            ))}
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {/* Contact Form */}
            <Card className="glass border-primary/20 animate-fadeIn">
              <CardHeader>
                <CardTitle className="text-2xl text-primary flex items-center gap-3">
                  <Send className="w-6 h-6" />
                  Envie uma Mensagem
                </CardTitle>
              </CardHeader>
              <CardContent>
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="space-y-2">
                    <Label htmlFor="name">Nome</Label>
                    <Input
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      placeholder="Seu nome"
                      required
                      className="bg-background/50 border-primary/30 focus:border-primary"
                    />
                  </div>
                  
                  <div className="space-y-2">
                    <Label htmlFor="email">Email</Label>
                    <Input
                      id="email"
                      name="email"
                      type="email"
                      value={formData.email}
                      onChange={handleChange}
                      placeholder="seu@email.com"
                      required
                      className="bg-background/50 border-primary/30 focus:border-primary"
                    />
                  </div>
                  
                  <div className="space-y-2">
                    <Label htmlFor="message">Mensagem</Label>
                    <Textarea
                      id="message"
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      placeholder="Sua mensagem..."
                      required
                      rows={5}
                      className="bg-background/50 border-primary/30 focus:border-primary resize-none"
                    />
                  </div>
                  
                  <Button 
                    type="submit"
                    className="w-full bg-primary hover:bg-primary/90 text-primary-foreground font-semibold"
                  >
                    <Send className="w-4 h-4 mr-2" />
                    Enviar Mensagem
                  </Button>
                </form>
              </CardContent>
            </Card>

            {/* Social Links & Download CV */}
            <div className="space-y-6">
              <Card className="glass border-secondary/20 animate-fadeIn">
                <CardHeader>
                  <CardTitle className="text-2xl text-secondary">Redes Sociais</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <p className="text-foreground/80">
                    Conecte-se comigo nas redes sociais:
                  </p>
                  <div className="grid grid-cols-2 gap-4">
                    {socialLinks.map((social, index) => (
                      <Button
                        key={index}
                        variant="outline"
                        className={`border-secondary/30 hover:border-secondary ${social.color} transition-all duration-300`}
                        onClick={() => window.open(social.url, "_blank")}
                      >
                        {social.icon}
                        <span className="ml-2">{social.name}</span>
                      </Button>
                    ))}
                  </div>
                </CardContent>
              </Card>

              <Card className="glass border-primary/20 animate-fadeIn">
                <CardHeader>
                  <CardTitle className="text-2xl text-primary">Currículo</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <p className="text-foreground/80">
                    Baixe meu currículo completo em PDF:
                  </p>
                  <Button
                    className="w-full bg-gradient-to-r from-primary to-secondary hover:opacity-90 text-primary-foreground font-semibold"
                    onClick={() => window.open("/CV_Pedro_Leal.pdf", "_blank")}
                  >
                    <Mail className="w-4 h-4 mr-2" />
                    Baixar Currículo PDF
                  </Button>
                </CardContent>
              </Card>

              <Card className="glass border-primary/20 animate-fadeIn">
                <CardContent className="p-6">
                  <div className="space-y-3">
                    <h3 className="font-semibold text-foreground/90">Disponibilidade</h3>
                    <p className="text-sm text-foreground/70">
                      Atualmente estou disponível para projetos freelance e oportunidades de trabalho full-time.
                    </p>
                    <div className="flex items-center gap-2">
                      <div className="w-3 h-3 bg-green-500 rounded-full animate-pulse"></div>
                      <span className="text-sm text-green-500 font-semibold">Disponível para novos projetos</span>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}