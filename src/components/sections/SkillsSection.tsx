import { skills } from "@/data/skills";

export default function SkillsSection() {
  return (
    <section
      id="tecnologias"
      className="border-t border-border bg-background py-24 sm:py-28"
    >
      <div className="mx-auto max-w-7xl px-6 lg:px-10">
        <div className="grid gap-14 lg:grid-cols-[0.38fr_0.62fr] lg:gap-20">
          <div>
            <div className="mb-4 flex items-center gap-3">
              <span className="text-sm font-semibold text-primary">03</span>
              <span className="h-px w-8 bg-primary/60" />
              <span className="text-xs font-semibold uppercase tracking-[0.22em] text-muted-foreground">
                Stack
              </span>
            </div>

            <h2 className="font-display text-4xl font-semibold tracking-[-0.04em] sm:text-5xl">
              Tecnologias com que trabalho
            </h2>

            <p className="mt-5 max-w-md leading-7 text-muted-foreground">
              Meu foco atual está no ecossistema JavaScript e TypeScript,
              mantendo outras tecnologias como experiência complementar.
            </p>
          </div>

          <div className="space-y-12">
            <div>
              <p className="mb-5 text-xs font-semibold uppercase tracking-[0.2em] text-primary">
                Principal
              </p>

              <div className="flex flex-wrap gap-x-6 gap-y-4">
                {skills.main.map((skill) => (
                  <span
                    key={skill}
                    className="main-skill font-display text-2xl font-medium tracking-[-0.03em] text-foreground sm:text-3xl"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>

            <div className="border-t border-border pt-8">
              <p className="mb-5 text-xs font-semibold uppercase tracking-[0.2em] text-muted-foreground">
                Ecossistema
              </p>

              <div className="flex flex-wrap gap-2">
                {skills.ecosystem.map((skill) => (
                  <span
                    key={skill}
                    className="border border-border bg-card px-3 py-2 text-sm text-foreground/75"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>

            <div className="border-t border-border pt-8">
              <p className="mb-5 text-xs font-semibold uppercase tracking-[0.2em] text-muted-foreground">
                Experiência complementar
              </p>

              <div className="flex flex-wrap gap-x-5 gap-y-3">
                {skills.complementary.map((skill) => (
                  <span key={skill} className="text-sm text-muted-foreground">
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
