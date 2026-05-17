import { profile, principles, stats } from "@/lib/data";

export default function About() {
  return (
    <section id="about" className="section-pad bg-ink-50 dark:bg-ink-900/30">
      <div className="container-x">
        <div className="max-w-3xl mb-16">
          <p className="eyebrow mb-4">About Me</p>
          <h2 className="section-title">
            A student today.
            <br />
            A builder for life.
          </h2>
          <p className="text-lg text-ink-600 dark:text-ink-300 leading-relaxed mt-6">
            {profile.bio}
          </p>
        </div>

        {/* Principles */}
        <div className="grid md:grid-cols-3 gap-5 mb-16">
          {principles.map((p, i) => (
            <div
              key={p.title}
              className="card p-7 hover:border-brand dark:hover:border-brand"
            >
              <div className="font-mono text-xs text-brand mb-3">
                0{i + 1}
              </div>
              <h3 className="font-display text-xl font-semibold text-ink-900 dark:text-white mb-3">
                {p.title}
              </h3>
              <p className="text-sm text-ink-600 dark:text-ink-300 leading-relaxed">
                {p.description}
              </p>
            </div>
          ))}
        </div>

        {/* Stats */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          {stats.map((s) => (
            <div
              key={s.label}
              className="border-l-2 border-brand pl-4"
            >
              <div className="font-display text-2xl md:text-3xl font-bold text-ink-900 dark:text-white">
                {s.value}
              </div>
              <div className="text-xs uppercase tracking-widest text-ink-500 dark:text-ink-400 mt-1">
                {s.label}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
