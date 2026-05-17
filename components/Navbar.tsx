"use client";

import { useState, useEffect } from "react";
import { profile } from "@/lib/data";
import ThemeToggle from "./ThemeToggle";

const links = [
  { href: "#about", label: "About" },
  { href: "#skills", label: "Skills" },
  { href: "#projects", label: "Projects" },
  { href: "#journey", label: "Journey" },
  { href: "#education", label: "Education" },
  { href: "#contact", label: "Contact" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 30);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <nav
      className={`fixed top-0 inset-x-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-white/85 dark:bg-ink-950/85 backdrop-blur-lg border-b border-ink-100 dark:border-ink-800 py-3"
          : "bg-transparent py-5"
      }`}
    >
      <div className="container-x flex items-center justify-between">
        <a href="#hero" className="flex items-center gap-2 group">
          <div className="w-9 h-9 rounded-lg bg-ink-900 dark:bg-white text-white dark:text-ink-900 flex items-center justify-center font-display font-bold group-hover:bg-brand dark:group-hover:bg-brand dark:group-hover:text-white transition-colors">
            S
          </div>
          <span className="font-display font-semibold text-ink-900 dark:text-white">
            {profile.name}
          </span>
        </a>

        <ul className="hidden lg:flex items-center gap-7">
          {links.map((l) => (
            <li key={l.href}>
              <a
                href={l.href}
                className="text-sm font-medium text-ink-600 dark:text-ink-300 hover:text-brand dark:hover:text-brand transition-colors"
              >
                {l.label}
              </a>
            </li>
          ))}
        </ul>

        <div className="hidden lg:flex items-center gap-3">
          <ThemeToggle />
          <a href="#contact" className="btn-primary !py-2 !px-4 text-sm">
            Let's Connect
          </a>
        </div>

        <div className="flex lg:hidden items-center gap-2">
          <ThemeToggle />
          <button
            className="text-ink-900 dark:text-white"
            onClick={() => setOpen(!open)}
            aria-label="Menu"
          >
            <svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              {open ? <path d="M6 6l12 12M6 18L18 6" /> : <path d="M4 6h16M4 12h16M4 18h16" />}
            </svg>
          </button>
        </div>
      </div>

      {open && (
        <div className="lg:hidden bg-white dark:bg-ink-950 border-t border-ink-100 dark:border-ink-800 mt-3">
          <ul className="container-x py-4 flex flex-col gap-2">
            {links.map((l) => (
              <li key={l.href}>
                <a
                  href={l.href}
                  onClick={() => setOpen(false)}
                  className="block py-2 text-ink-700 dark:text-ink-200 font-medium"
                >
                  {l.label}
                </a>
              </li>
            ))}
            <a href="#contact" className="btn-primary mt-2 justify-center">
              Let's Connect
            </a>
          </ul>
        </div>
      )}
    </nav>
  );
}
