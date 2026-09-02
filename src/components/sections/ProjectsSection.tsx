import { projects } from "@/data/projects";
import { ExternalLink, Github } from "lucide-react";

export default function ProjectsSection() {
  return (
    <section
      id="projetos"
      className="border-t border-border bg-secondary/16 py-24 sm:py-28"
    >
      <div className="mx-auto max-w-7xl px-6 lg:px-10">
        <div className="mb-14 max-w-3xl">
          <div className="mb-4 flex items-center gap-3">
            <span className="text-sm font-semibold text-primary">01</span>
            <span className="h-px w-8 bg-primary/60" />
            <span className="text-xs font-semibold uppercase tracking-[0.22em] text-muted-foreground">
              Trabalho
            </span>
          </div>

          <h2 className="font-display text-4xl font-semibold tracking-[-0.04em] sm:text-5xl">
            Projetos selecionados
          </h2>

          <p className="mt-5 max-w-2xl leading-7 text-muted-foreground">
            Projetos que representam meu trabalho atual e as tecnologias em que
            venho concentrando meu desenvolvimento.
          </p>
        </div>

        <div className="divide-y divide-border border-y border-border">
          {projects.map((project) => (
            <article
              key={project.id}
              className="project-row group grid gap-8 py-10 md:grid-cols-[90px_1fr] lg:grid-cols-[110px_1fr_0.7fr] lg:items-start lg:gap-10"
            >
              <span className="font-display text-3xl font-medium text-secondary-foreground/25">
                {String(project.id).padStart(2, "0")}
              </span>

              <div>
                <p className="mb-3 text-xs font-semibold uppercase tracking-[0.16em] text-primary">
                  {project.category}
                </p>

                <h3 className="font-display text-3xl font-semibold tracking-[-0.03em]">
                  {project.name}
                </h3>

                <p className="mt-5 max-w-2xl leading-7 text-muted-foreground">
                  {project.description}
                </p>

                <p className="mt-4 max-w-2xl text-sm leading-6 text-foreground/70">
                  {project.contribution}
                </p>

                <div className="mt-7 flex flex-wrap gap-2">
                  {project.stack.map((technology) => (
                    <span
                      key={technology}
                      className="border border-border bg-card px-3 py-1.5 text-xs font-medium text-foreground/75"
                    >
                      {technology}
                    </span>
                  ))}
                </div>
              </div>

              <div className="flex gap-3 lg:justify-end">
                <a
                  href={project.liveUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={`Abrir ${project.name}`}
                  className="inline-flex h-11 w-11 items-center justify-center border border-border transition hover:border-primary hover:bg-primary hover:text-primary-foreground"
                >
                  <ExternalLink size={18} />
                </a>

                <a
                  href={project.repositoryUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={`Ver código de ${project.name}`}
                  className="inline-flex h-11 w-11 items-center justify-center border border-border transition hover:border-primary hover:bg-primary hover:text-primary-foreground"
                >
                  <Github size={18} />
                </a>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
