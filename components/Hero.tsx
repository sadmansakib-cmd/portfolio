import { profile } from "@/lib/data";

export default function Hero() {
  return (
    <section
      id="hero"
      className="relative min-h-screen flex items-center pt-28 overflow-hidden bg-white dark:bg-ink-950"
    >
      {/* Subtle grid */}
      <div
        className="absolute inset-0 opacity-[0.04] dark:opacity-[0.06]"
        style={{
          backgroundImage:
            "linear-gradient(currentColor 1px, transparent 1px), linear-gradient(90deg, currentColor 1px, transparent 1px)",
          backgroundSize: "48px 48px",
          color: "#3b82f6",
        }}
      />
      {/* Soft glow */}
      <div className="absolute top-1/4 -right-32 w-[500px] h-[500px] rounded-full bg-brand/10 blur-3xl" />

      <div className="container-x relative z-10 animate-slide-up">
        <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-ink-200 dark:border-ink-800 bg-ink-50 dark:bg-ink-900 text-sm text-ink-600 dark:text-ink-300 mb-8">
          <span className="w-2 h-2 rounded-full bg-green-500 animate-pulse" />
          {profile.availability}
        </div>

        <h1 className="font-display text-5xl md:text-7xl lg:text-8xl font-bold text-ink-900 dark:text-white leading-[1.05] mb-6">
          Hi, I'm <span className="text-brand">{profile.name}</span>.
          <br />
          <span className="text-ink-400 dark:text-ink-500">
            {profile.tagline}
          </span>
        </h1>

        <p className="text-lg md:text-xl text-ink-600 dark:text-ink-300 max-w-2xl leading-relaxed mb-10">
          A Computer Science & Engineering student focused on{" "}
          <span className="text-ink-900 dark:text-white font-medium">execution</span>,{" "}
          <span className="text-ink-900 dark:text-white font-medium">consistency</span>, and{" "}
          <span className="text-ink-900 dark:text-white font-medium">real-world impact</span>.
          Documenting the journey from student to software engineer.
        </p>

        <div className="flex flex-wrap gap-4 mb-16">
          <a href="#projects" className="btn-primary">
            See My Projects
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="M5 12h14M13 5l7 7-7 7" />
            </svg>
          </a>
          <a href="#contact" className="btn-outline">
            Get In Touch
          </a>
        </div>

        {/* Tech ticker */}
        <div className="flex items-center gap-3 text-sm text-ink-500 dark:text-ink-400">
          <span className="font-mono text-xs">CURRENTLY:</span>
          <div className="flex flex-wrap gap-2">
            {["C", "C++", "IoT Systems", "Problem Solving"].map((t) => (
              <span
                key={t}
                className="px-3 py-1 rounded-md bg-ink-100 dark:bg-ink-900 text-ink-700 dark:text-ink-200 font-mono text-xs"
              >
                {t}
              </span>
            ))}
          </div>
        </div>
      </div>

      {/* Scroll cue */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 text-ink-400 dark:text-ink-600 text-xs uppercase tracking-widest flex flex-col items-center gap-2">
        <span>Scroll</span>
        <div className="w-px h-8 bg-current animate-pulse" />
      </div>
    </section>
  );
}
