import { profile } from "@/lib/data";

export default function Footer() {
  return (
    <footer className="bg-white dark:bg-ink-950 border-t border-ink-100 dark:border-ink-900 py-8">
      <div className="container-x flex flex-col md:flex-row items-center justify-between gap-4 text-sm">
        <p className="text-ink-500 dark:text-ink-400">
          © {new Date().getFullYear()} {profile.name}. Built with intention.
        </p>
        <p className="font-mono text-xs text-ink-400 dark:text-ink-500">
          // status: building & learning, every day
        </p>
      </div>
    </footer>
  );
}
