import Image from "next/image";
import Link from "next/link";
import { ArrowDownRight, Download, Github, Linkedin, Mail } from "lucide-react";

const socialLinks = [
  {
    label: "GitHub",
    href: "https://github.com/Ppedro-Leal",
    icon: Github,
  },
  {
    label: "LinkedIn",
    href: "https://www.linkedin.com/in/pedrohleal/",
    icon: Linkedin,
  },
  {
    label: "E-mail",
    href: "mailto:pedroh.leal18@gmail.com",
    icon: Mail,
  },
];

export default function IntroSection() {
  return (
    <section
      id="inicio"
      className="relative flex min-h-[calc(100vh-80px)] items-center pt-20"
    >
      <div className="mx-auto w-full max-w-7xl px-6 py-12 lg:px-10 lg:py-16">
        <div className="grid items-center gap-12 lg:grid-cols-[0.72fr_1.28fr] lg:gap-20">
          {/* Foto */}
          <div className="order-2 lg:order-1">
            <div className="relative mx-auto max-w-[360px] lg:mx-0">
              <div
                aria-hidden="true"
                className="absolute -bottom-4 -right-4 h-full w-full border border-primary/35 bg-secondary/35"
              />
              <div
                aria-hidden="true"
                className="absolute -left-3 -top-3 h-14 w-14 bg-primary"
              />

              <div className="relative aspect-[4/5] overflow-hidden bg-muted">
                <Image
                  src="/profile.jpg"
                  alt="Pedro Leal"
                  fill
                  priority
                  sizes="(max-width: 1024px) 360px, 32vw"
                  className="object-cover"
                />
              </div>

              <div className="relative mt-6 flex items-center justify-between border-t border-border pt-4 text-sm text-muted-foreground">
                <span>Recife, PE</span>
                <span>Brasil</span>
              </div>
            </div>
          </div>

          {/* Conteúdo */}
          <div className="order-1 lg:order-2">
            <div className="mb-7 flex items-center gap-3">
              <span className="h-px w-10 bg-primary" />
              <p className="text-xs font-semibold uppercase tracking-[0.24em] text-primary">
                Desenvolvedor Full Stack
              </p>
            </div>

            <h1 className="font-display text-5xl font-semibold tracking-[-0.045em] text-foreground sm:text-6xl lg:text-7xl xl:text-[5.4rem] xl:leading-[0.98]">
              Pedro Leal
            </h1>

            <p className="mt-5 max-w-3xl font-display text-2xl leading-tight tracking-[-0.025em] text-foreground/80 sm:text-3xl lg:text-[2.35rem]">
              Desenvolvo aplicações web do
              <span className="text-primary"> front-end </span>
              aos
              <span className="text-primary"> dados</span>.
            </p>

            <p className="mt-7 max-w-2xl text-base leading-7 text-muted-foreground sm:text-lg">
              Trabalho com interfaces, lógica de negócio, APIs e bancos de
              dados, concentrando meu desenvolvimento em React, Next.js, Node.js
              e TypeScript.
            </p>

            <div className="mt-7 flex flex-wrap gap-x-2 gap-y-2 text-sm font-medium text-foreground/75">
              <span>React</span>
              <span aria-hidden="true">•</span>
              <span>Next.js</span>
              <span aria-hidden="true">•</span>
              <span>Node.js</span>
              <span aria-hidden="true">•</span>
              <span>TypeScript</span>
              <span aria-hidden="true">•</span>
              <span>APIs REST</span>
            </div>

            <div className="mt-10 flex flex-wrap gap-3">
              <Link
                href="#projetos"
                className="group inline-flex items-center gap-2 bg-primary px-6 py-3.5 text-sm font-semibold text-primary-foreground transition hover:bg-primary/90"
              >
                Ver projetos
                <ArrowDownRight
                  size={18}
                  className="transition-transform group-hover:translate-x-0.5 group-hover:translate-y-0.5"
                />
              </Link>

              <a
                href="/CV_Pedro_Leal.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 border border-border bg-background px-6 py-3.5 text-sm font-semibold text-foreground transition hover:border-primary/50 hover:bg-secondary/20"
              >
                Currículo
                <Download size={17} />
              </a>
            </div>

            <div className="mt-10 flex flex-wrap items-center gap-5 border-t border-border pt-6">
              {socialLinks.map(({ label, href, icon: Icon }) => (
                <a
                  key={label}
                  href={href}
                  target={href.startsWith("http") ? "_blank" : undefined}
                  rel={
                    href.startsWith("http") ? "noopener noreferrer" : undefined
                  }
                  className="group flex items-center gap-2 text-sm text-muted-foreground transition hover:text-primary"
                >
                  <Icon size={17} />
                  <span>{label}</span>
                </a>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
