import { skills } from "@/lib/data";

export default function Skills() {
  return (
    <section id="skills" className="section-pad bg-white dark:bg-ink-950">
      <div className="container-x">
        <div className="max-w-2xl mb-14">
          <p className="eyebrow mb-4">Skills</p>
          <h2 className="section-title">Current toolkit.</h2>
          <p className="text-ink-600 dark:text-ink-300 text-lg leading-relaxed mt-4">
            What I'm using and sharpening right now. The list grows every month —
            because the goal isn't to be comfortable, it's to keep getting better.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-5">
          {skills.map((group) => (
            <div
              key={group.category}
              className="card p-7 hover:border-brand dark:hover:border-brand"
            >
              <div className="flex items-center justify-between mb-5">
                <h3 className="font-display text-lg font-semibold text-ink-900 dark:text-white">
                  {group.category}
                </h3>
                <span className="font-mono text-xs text-ink-400 dark:text-ink-500">
                  {String(group.items.length).padStart(2, "0")}
                </span>
              </div>
              <div className="flex flex-wrap gap-2">
                {group.items.map((item) => (
                  <span
                    key={item}
                    className="text-sm px-3 py-1.5 rounded-md bg-ink-50 dark:bg-ink-800/60 text-ink-700 dark:text-ink-200 border border-ink-100 dark:border-ink-800"
                  >
                    {item}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>

        <p className="text-center text-sm text-ink-500 dark:text-ink-400 mt-12 font-mono">
          // always_learning = true;
        </p>
      </div>
    </section>
  );
}
