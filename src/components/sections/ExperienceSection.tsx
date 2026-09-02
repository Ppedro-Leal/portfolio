import { experiences } from "@/data/experience";

export default function ExperienceSection() {
  return (
    <section
      id="experiencia"
      className="border-t border-border bg-background py-24 sm:py-28"
    >
      <div className="mx-auto max-w-7xl px-6 lg:px-10">
        <div className="mb-16 max-w-3xl">
          <div className="mb-4 flex items-center gap-3">
            <span className="text-sm font-semibold text-primary">02</span>
            <span className="h-px w-8 bg-primary/60" />
            <span className="text-xs font-semibold uppercase tracking-[0.22em] text-muted-foreground">
              Trajetória
            </span>
          </div>

          <h2 className="font-display text-4xl font-semibold tracking-[-0.04em] sm:text-5xl">
            Experiência
          </h2>

          <p className="mt-5 max-w-2xl leading-7 text-muted-foreground">
            Experiências que contribuíram para minha formação como desenvolvedor
            e para o contato com sistemas, processos e problemas reais.
          </p>
        </div>

        <div className="space-y-0 border-y border-border">
          {experiences.map((experience, index) => (
            <article
              key={`${experience.company}-${experience.role}`}
              className="grid gap-8 border-b border-border py-12 last:border-b-0 lg:grid-cols-[0.38fr_0.62fr] lg:gap-16"
            >
              <div>
                <span className="font-display text-sm text-primary">
                  {String(index + 1).padStart(2, "0")}
                </span>

                <p className="mt-5 text-sm text-muted-foreground">
                  {experience.period}
                </p>

                <h3 className="mt-3 font-display text-2xl font-semibold tracking-[-0.03em]">
                  {experience.role}
                </h3>

                <p className="mt-2 text-sm font-medium text-primary">
                  {experience.company}
                </p>
              </div>

              <div>
                <p className="max-w-3xl leading-7 text-foreground/80">
                  {experience.description}
                </p>

                <div className="mt-7 space-y-3">
                  {experience.highlights.map((highlight) => (
                    <div
                      key={highlight}
                      className="grid grid-cols-[18px_1fr] gap-3 text-sm leading-6 text-muted-foreground"
                    >
                      <span className="mt-[10px] h-px w-3 bg-primary/60" />
                      <p>{highlight}</p>
                    </div>
                  ))}
                </div>

                {experience.technologies && (
                  <div className="mt-8 flex flex-wrap gap-2">
                    {experience.technologies.map((technology) => (
                      <span
                        key={technology}
                        className="border border-border bg-background px-3 py-1.5 text-xs font-medium text-foreground/70"
                      >
                        {technology}
                      </span>
                    ))}
                  </div>
                )}
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}