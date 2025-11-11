"use client";

import { Button } from "@/components/ui/button";
import { useRouter } from "next/navigation";
import Navigation from "@/components/Navigation";
import Image from "next/image";
import { Github, Linkedin, Mail } from "lucide-react";

export default function Home() {
  const router = useRouter();

  return (
    <div className="min-h-screen">
      <Navigation />
      
      <main className="container mx-auto px-4 pt-24 pb-12">
        <div className="grid md:grid-cols-2 gap-12 items-center min-h-[calc(100vh-8rem)]">
          {/* Text Content */}
          <div className="space-y-6 animate-slideInLeft">
            <p className="text-secondary font-semibold text-lg">OLÁ, BEM-VINDO</p>
            
            <h1 className="text-5xl md:text-7xl font-bold">
              Sou <span className="bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">Pedro Leal</span>
              <br />
              <span className="text-3xl md:text-4xl text-foreground/80">Desenvolvedor Web</span>
            </h1>
            
            <p className="text-foreground/70 text-lg leading-relaxed">
              Tenho 22 anos e sou apaixonado por programação. Possuo técnico em desenvolvimento de sistemas 
              e estou cursando superior em sistemas para internet. Com experiência em desenvolvimento 
              full-stack, transformo ideias em aplicações web completas e funcionais.
            </p>
            
            <div className="flex flex-wrap gap-4">
              <Button 
                onClick={() => router.push("/contato")}
                size="lg"
                className="bg-primary hover:bg-primary/90 text-primary-foreground font-semibold px-8"
              >
                Contate-me
              </Button>
              <Button 
                onClick={() => router.push("/projetos")}
                variant="outline"
                size="lg"
                className="border-primary text-primary hover:bg-primary hover:text-primary-foreground font-semibold px-8"
              >
                Ver Projetos
              </Button>
            </div>

            {/* Social Links */}
            <div className="flex gap-4 pt-4">
              <a 
                href="https://github.com" 
                target="_blank" 
                rel="noopener noreferrer"
                className="p-3 glass hover:bg-primary/20 rounded-full transition-all duration-300 hover:scale-110"
              >
                <Github className="w-6 h-6" />
              </a>
              <a 
                href="https://www.linkedin.com/in/pedro-henrique-leal-amaral-97822721b/" 
                target="_blank" 
                rel="noopener noreferrer"
                className="p-3 glass hover:bg-primary/20 rounded-full transition-all duration-300 hover:scale-110"
              >
                <Linkedin className="w-6 h-6" />
              </a>
              <a 
                href="mailto:pedroleal@example.com"
                className="p-3 glass hover:bg-primary/20 rounded-full transition-all duration-300 hover:scale-110"
              >
                <Mail className="w-6 h-6" />
              </a>
            </div>
          </div>

          {/* Profile Image */}
          <div className="flex justify-center animate-slideInRight">
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-r from-primary to-secondary rounded-full blur-3xl opacity-30 animate-float"></div>
              <div className="relative w-80 h-80 md:w-96 md:h-96">
                <Image 
                  src="/profile.jpg" 
                  alt="Pedro Leal" 
                  fill
                  className="rounded-full object-cover border-4 border-primary/30 shadow-2xl"
                  priority
                />
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}