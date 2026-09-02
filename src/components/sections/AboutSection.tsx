export default function AboutSection() {
  return (
    <section
      id="sobre"
      className="border-t border-border bg-secondary/16 py-24 sm:py-28"
    >
      <div className="mx-auto max-w-7xl px-6 lg:px-10">
        <div className="grid gap-14 lg:grid-cols-[0.38fr_0.62fr] lg:gap-20">
          <div>
            <div className="mb-4 flex items-center gap-3">
              <span className="text-sm font-semibold text-primary">
                05
              </span>

              <span className="h-px w-8 bg-primary/60" />

              <span className="text-xs font-semibold uppercase tracking-[0.22em] text-muted-foreground">
                Sobre
              </span>
            </div>

            <h2 className="font-display text-4xl font-semibold tracking-[-0.04em] sm:text-5xl">
              Sobre mim
            </h2>
          </div>

          <div className="max-w-3xl space-y-6 text-base leading-8 text-muted-foreground sm:text-lg">
            <p>
              Sou desenvolvedor Full Stack com experiência prática na
              construção de aplicações web e atualmente concentro meu
              desenvolvimento em{" "}
              <strong className="font-medium text-foreground">
                React, Next.js, Node.js e TypeScript
              </strong>
              .
            </p>

            <p>
              Minha experiência passa por projetos para clientes,
              desenvolvimento front-end e back-end, integração com APIs e
              bancos de dados, autenticação, validação de dados e comunicação
              em tempo real.
            </p>

            <p>
              Atualmente também trabalho com automações RPA e sustentação de
              sistemas, lidando com regras de negócio, investigação de falhas
              e SQL Server.
            </p>

            <p className="about-highlight border-l-2 border-primary pl-6 text-foreground/85">
              Gosto de entender como diferentes partes de uma aplicação se
              conectam e de encontrar soluções para problemas que exigem
              investigação, lógica e construção.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}