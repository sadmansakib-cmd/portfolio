import { education } from "@/lib/data";

export default function Education() {
  return (
    <section id="education" className="section-pad bg-ink-50 dark:bg-ink-900/30">
      <div className="container-x">
        <div className="max-w-2xl mb-14">
          <p className="eyebrow mb-4">Education</p>
          <h2 className="section-title">Where I'm learning the craft.</h2>
          <p className="text-ink-600 dark:text-ink-300 text-lg leading-relaxed mt-4">
            Formal education is one part of the journey — the rest is built through
            projects, self-study, and consistent practice.
          </p>
        </div>

        <div className="relative pl-6 md:pl-8">
          {/* Vertical line */}
          <div className="absolute left-0 md:left-2 top-2 bottom-2 w-px bg-ink-200 dark:bg-ink-800" />

          <div className="space-y-10">
            {education.map((e, i) => (
              <div key={e.degree} className="relative">
                {/* Dot */}
                <div
                  className={`absolute -left-[27px] md:-left-[31px] top-1.5 w-3.5 h-3.5 rounded-full border-2 ${
                    i === 0
                      ? "bg-brand border-brand"
                      : "bg-white dark:bg-ink-950 border-ink-300 dark:border-ink-700"
                  }`}
                />
                <div className="card p-7 hover:border-brand dark:hover:border-brand">
                  <div className="flex flex-wrap items-center justify-between gap-3 mb-3">
                    <span className="font-mono text-xs uppercase tracking-widest text-brand font-medium">
                      {e.period}
                    </span>
                    {i === 0 && (
                      <span className="text-[10px] uppercase tracking-widest bg-brand/10 text-brand px-2.5 py-1 rounded-md font-semibold">
                        Currently
                      </span>
                    )}
                  </div>
                  <h3 className="font-display text-xl font-semibold text-ink-900 dark:text-white mb-1">
                    {e.degree}
                  </h3>
                  <p className="text-ink-700 dark:text-ink-200 text-sm font-medium mb-3">
                    {e.institution} · {e.location}
                  </p>
                  <p className="text-ink-600 dark:text-ink-300 text-sm leading-relaxed">
                    {e.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
