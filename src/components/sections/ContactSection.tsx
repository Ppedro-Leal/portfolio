import { ArrowUpRight, Download, Github, Linkedin, Mail } from "lucide-react";

const links = [
  {
    label: "E-mail",
    value: "pedroh.leal18@gmail.com",
    href: "mailto:pedroh.leal18@gmail.com",
    icon: Mail,
  },
  {
    label: "LinkedIn",
    value: "linkedin.com/in/pedrohleal",
    href: "https://linkedin.com/in/pedrohleal",
    icon: Linkedin,
  },
  {
    label: "GitHub",
    value: "github.com/Ppedro-Leal",
    href: "https://github.com/Ppedro-Leal",
    icon: Github,
  },
];

export default function ContactSection() {
  return (
    <section
      id="contato"
      className="bg-primary py-24 text-primary-foreground sm:py-28"
    >
      <div className="mx-auto max-w-7xl px-6 lg:px-10">
        <div className="grid gap-14 lg:grid-cols-[0.4fr_0.6fr] lg:gap-20">
          <div>
            <div className="mb-5 flex items-center gap-3 text-primary-foreground/65">
              <span className="text-sm font-semibold">06</span>
              <span className="h-px w-8 bg-primary-foreground/40" />

              <span className="text-xs font-semibold uppercase tracking-[0.22em]">
                Contato
              </span>
            </div>

            <h2 className="font-display max-w-xl text-4xl font-semibold tracking-[-0.045em] sm:text-5xl lg:text-6xl">
              Vamos conversar?
            </h2>

            <p className="mt-7 max-w-lg leading-7 text-primary-foreground/75">
              Estou aberto a oportunidades em desenvolvimento Full Stack,
              Front-End com React e Next.js e Back-End com Node.js e TypeScript.
            </p>

            <a
              href="/CV_Pedro_Leal.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="mt-9 inline-flex items-center gap-2 border border-primary-foreground/30 px-5 py-3 text-sm font-semibold transition hover:bg-primary-foreground hover:text-primary"
            >
              Ver currículo
              <Download size={17} />
            </a>
          </div>

          <div className="border-t border-primary-foreground/25">
            {links.map(({ label, value, href, icon: Icon }) => (
              <a
                key={label}
                href={href}
                target={href.startsWith("http") ? "_blank" : undefined}
                rel={
                  href.startsWith("http") ? "noopener noreferrer" : undefined
                }
                className="group flex items-center justify-between gap-6 border-b border-primary-foreground/25 py-6 transition-all duration-200 hover:px-2"
              >
                <div className="flex min-w-0 items-center gap-4">
                  <Icon
                    size={19}
                    className="shrink-0 text-primary-foreground/65"
                  />

                  <div className="min-w-0">
                    <p className="text-xs uppercase tracking-[0.16em] text-primary-foreground/55">
                      {label}
                    </p>

                    <p className="mt-1 text-sm font-medium [overflow-wrap:anywhere] sm:text-base">
                      {value}
                    </p>
                  </div>
                </div>

                <ArrowUpRight
                  size={20}
                  className="shrink-0 transition-transform group-hover:-translate-y-1 group-hover:translate-x-1"
                />
              </a>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
