import { education } from "@/data/education";

export default function EducationSection() {
  return (
    <section
      id="formacao"
      className="border-t border-border bg-card/35 py-24 sm:py-28"
    >
      <div className="mx-auto max-w-7xl px-6 lg:px-10">
        <div className="mb-14 max-w-3xl">
          <div className="mb-4 flex items-center gap-3">
            <span className="text-sm font-semibold text-primary">04</span>
            <span className="h-px w-8 bg-primary/60" />
            <span className="text-xs font-semibold uppercase tracking-[0.22em] text-muted-foreground">
              Formação
            </span>
          </div>

          <h2 className="font-display text-4xl font-semibold tracking-[-0.04em] sm:text-5xl">
            Formação
          </h2>
        </div>

        <div className="grid border-y border-border md:grid-cols-3">
          {education.map((item, index) => (
            <article
              key={`${item.institution}-${item.course}`}
              className="border-b border-border p-7 last:border-b-0 md:border-b-0 md:border-r md:last:border-r-0 lg:p-9"
            >
              <span className="font-display text-sm text-primary">
                {String(index + 1).padStart(2, "0")}
              </span>

              <p className="mt-8 text-xs font-medium uppercase tracking-[0.14em] text-muted-foreground">
                {item.period}
              </p>

              <h3 className="mt-4 font-display text-xl font-semibold tracking-[-0.025em]">
                {item.course}
              </h3>

              <p className="mt-2 text-sm font-medium text-primary">
                {item.institution}
              </p>

              {item.description && (
                <p className="mt-6 text-sm leading-6 text-muted-foreground">
                  {item.description}
                </p>
              )}
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}