import { journey, habits } from "@/lib/data";

export default function Journey() {
  return (
    <section id="journey" className="section-pad bg-white dark:bg-ink-950">
      <div className="container-x">
        <div className="max-w-2xl mb-14">
          <p className="eyebrow mb-4">Learning Journey</p>
          <h2 className="section-title">Growth is the only goal.</h2>
          <p className="text-ink-600 dark:text-ink-300 text-lg leading-relaxed mt-4">
            I'm not where I want to be yet — and that's exactly the point.
            Here's how I'm thinking about the path forward.
          </p>
        </div>

        {/* Timeline */}
        <div className="grid md:grid-cols-3 gap-5 mb-16">
          {journey.map((j, i) => (
            <div key={j.phase} className="relative">
              <div className="card p-7 h-full hover:border-brand dark:hover:border-brand">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-8 h-8 rounded-full bg-brand/10 text-brand font-mono text-sm flex items-center justify-center font-semibold">
                    {i + 1}
                  </div>
                  <span className="font-mono text-xs uppercase tracking-widest text-brand">
                    {j.phase}
                  </span>
                </div>
                <h3 className="font-display text-xl font-semibold text-ink-900 dark:text-white mb-3">
                  {j.title}
                </h3>
                <p className="text-sm text-ink-600 dark:text-ink-300 leading-relaxed">
                  {j.description}
                </p>
              </div>
              {i < journey.length - 1 && (
                <div className="hidden md:block absolute top-1/2 -right-3 w-6 h-px bg-ink-200 dark:bg-ink-700" />
              )}
            </div>
          ))}
        </div>

        {/* Habits */}
        <div className="rounded-2xl border border-ink-100 dark:border-ink-800 bg-gradient-to-br from-ink-50 to-white dark:from-ink-900/50 dark:to-ink-950 p-8 md:p-12">
          <div className="grid md:grid-cols-12 gap-8 items-start">
            <div className="md:col-span-5">
              <p className="eyebrow mb-3">Daily Operating System</p>
              <h3 className="font-display text-2xl md:text-3xl font-bold text-ink-900 dark:text-white mb-3">
                The habits I'm building on.
              </h3>
              <p className="text-ink-600 dark:text-ink-300 text-sm leading-relaxed">
                Talent is overrated. Systems and habits aren't. These are the
                non-negotiables that keep me moving forward.
              </p>
            </div>
            <ul className="md:col-span-7 space-y-3">
              {habits.map((h, i) => (
                <li
                  key={h}
                  className="flex items-start gap-3 text-ink-700 dark:text-ink-200"
                >
                  <span className="font-mono text-xs text-brand mt-1.5 flex-shrink-0">
                    0{i + 1}
                  </span>
                  <span className="leading-relaxed">{h}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
