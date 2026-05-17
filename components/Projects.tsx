import { projects } from "@/lib/data";

export default function Projects() {
  return (
    <section id="projects" className="section-pad bg-ink-50 dark:bg-ink-900/30">
      <div className="container-x">
        <div className="max-w-2xl mb-14">
          <p className="eyebrow mb-4">Featured Projects</p>
          <h2 className="section-title">Built to solve real problems.</h2>
          <p className="text-ink-600 dark:text-ink-300 text-lg leading-relaxed mt-4">
            Every project starts with a real-world problem — usually one I see
            around me. Here's what I've built so far.
          </p>
        </div>

        <div className="space-y-8">
          {projects.map((p, i) => (
            <article
              key={p.title}
              className="card overflow-hidden hover:border-brand dark:hover:border-brand"
            >
              <div className="grid md:grid-cols-12 gap-0">
                {/* Visual side */}
                <div
                  className="md:col-span-4 relative min-h-[220px] md:min-h-full flex flex-col justify-between p-8"
                  style={{
                    background: `linear-gradient(135deg, #0b1020 0%, #2563eb 100%)`,
                  }}
                >
                  <div className="flex items-start justify-between">
                    <span className="text-white/70 font-mono text-xs uppercase tracking-widest">
                      {p.category}
                    </span>
                    <span className="text-white/70 font-mono text-xs">
                      {p.year}
                    </span>
                  </div>
                  <div className="font-display text-7xl md:text-8xl font-bold text-white/15 leading-none">
                    {String(i + 1).padStart(2, "0")}
                  </div>
                  {p.featured && (
                    <div className="absolute bottom-4 left-4 inline-flex items-center gap-1.5 text-[10px] uppercase tracking-widest text-brand-light bg-white/10 backdrop-blur px-2.5 py-1 rounded-md font-semibold">
                      <span className="w-1.5 h-1.5 rounded-full bg-brand-light" />
                      Featured
                    </div>
                  )}
                </div>

                {/* Content side */}
                <div className="md:col-span-8 p-8 md:p-10">
                  <h3 className="font-display text-2xl md:text-3xl font-bold text-ink-900 dark:text-white mb-6">
                    {p.title}
                  </h3>

                  <div className="space-y-4 mb-6">
                    <Block label="Problem" text={p.problem} />
                    <Block label="Solution" text={p.solution} />
                    <Block label="Impact" text={p.impact} />
                  </div>

                  <div className="flex flex-wrap gap-2 mb-6">
                    {p.tech.map((t) => (
                      <span
                        key={t}
                        className="text-xs px-2.5 py-1 rounded-md bg-ink-100 dark:bg-ink-800 text-ink-700 dark:text-ink-200 font-mono"
                      >
                        {t}
                      </span>
                    ))}
                  </div>

                  <div className="flex flex-wrap items-center gap-5 pt-4 border-t border-ink-100 dark:border-ink-800">
                    <a
                      href={p.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-sm font-medium text-ink-900 dark:text-white hover:text-brand dark:hover:text-brand flex items-center gap-1.5 transition-colors"
                    >
                      View Project
                      <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                        <path d="M7 17L17 7M7 7h10v10" />
                      </svg>
                    </a>
                    <a
                      href={p.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-sm font-medium text-ink-500 dark:text-ink-400 hover:text-brand flex items-center gap-1.5 transition-colors"
                    >
                      Source Code
                    </a>
                  </div>
                </div>
              </div>
            </article>
          ))}
        </div>

        <p className="text-center text-sm text-ink-500 dark:text-ink-400 mt-12">
          More projects in the works — built in public.
        </p>
      </div>
    </section>
  );
}

function Block({ label, text }: { label: string; text: string }) {
  return (
    <div>
      <div className="font-mono text-[10px] uppercase tracking-widest text-brand mb-1">
        {label}
      </div>
      <p className="text-ink-700 dark:text-ink-200 text-sm leading-relaxed">
        {text}
      </p>
    </div>
  );
}
