"use client";

import { useState } from "react";
import { profile } from "@/lib/data";

export default function Contact() {
  const [sent, setSent] = useState(false);

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    // TODO: wire to Formspree / EmailJS / your API route
    setSent(true);
    setTimeout(() => setSent(false), 4000);
  };

  return (
    <section id="contact" className="section-pad bg-white dark:bg-ink-950">
      <div className="container-x">
        <div className="max-w-2xl mb-14">
          <p className="eyebrow mb-4">Get In Touch</p>
          <h2 className="section-title">Let's build something together.</h2>
          <p className="text-ink-600 dark:text-ink-300 text-lg leading-relaxed mt-4">
            Have an idea, an opportunity, or just want to connect? I'm always open to
            meaningful conversations and collaborations.
          </p>
        </div>

        <div className="grid md:grid-cols-12 gap-8">
          {/* LEFT — contact info */}
          <div className="md:col-span-5 space-y-6">
            <ContactItem
              label="Email"
              value={profile.email}
              href={`mailto:${profile.email}`}
              icon={
                <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2zM22 6l-10 7L2 6" />
              }
            />
            {profile.phone && (
              <ContactItem
                label="Phone"
                value={profile.phone}
                href={`tel:${profile.phone.replace(/\s/g, "")}`}
                icon={
                  <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" />
                }
              />
            )}
            <ContactItem
              label="Location"
              value={profile.location}
              icon={
                <>
                  <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z" />
                  <circle cx="12" cy="10" r="3" />
                </>
              }
            />

            {/* Social links */}
            <div className="pt-6 mt-6 border-t border-ink-100 dark:border-ink-800">
              <p className="text-xs uppercase tracking-widest text-ink-500 dark:text-ink-400 mb-4 font-medium">
                Find me on
              </p>
              <div className="flex flex-wrap gap-3">
                <Social href={profile.socials.github} label="GitHub">
                  <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22" />
                </Social>
                <Social href={profile.socials.linkedin} label="LinkedIn">
                  <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-4 0v7h-4v-7a6 6 0 0 1 6-6zM2 9h4v12H2zM4 2a2 2 0 1 1 0 4 2 2 0 0 1 0-4z" />
                </Social>
                <Social href={profile.socials.facebook} label="Facebook">
                  <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" />
                </Social>
                <Social href={`mailto:${profile.email}`} label="Email">
                  <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2zM22 6l-10 7L2 6" />
                </Social>
              </div>
            </div>
          </div>

          {/* RIGHT — form */}
          <div className="md:col-span-7">
            <form
              onSubmit={handleSubmit}
              className="card p-7 md:p-8 bg-ink-50 dark:bg-ink-900/40"
            >
              <div className="grid md:grid-cols-2 gap-5">
                <Field label="Your Name" name="name" required />
                <Field label="Email Address" name="email" type="email" required />
              </div>
              <div className="mt-5">
                <Field label="Subject" name="subject" required />
              </div>
              <div className="mt-5">
                <label className="block text-xs uppercase tracking-widest text-ink-700 dark:text-ink-300 font-medium mb-2">
                  Message
                </label>
                <textarea
                  name="message"
                  required
                  rows={6}
                  className="w-full bg-white dark:bg-ink-950 border border-ink-200 dark:border-ink-700 px-4 py-3 rounded-lg text-ink-900 dark:text-ink-100 focus:outline-none focus:border-brand transition-colors resize-none"
                />
              </div>

              <button
                type="submit"
                className="btn-primary mt-6 w-full justify-center"
              >
                {sent ? "✓ Message Sent!" : "Send Message"}
                {!sent && (
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <path d="M5 12h14M13 5l7 7-7 7" />
                  </svg>
                )}
              </button>

              <p className="text-xs text-ink-500 dark:text-ink-400 mt-4 text-center">
                Or email me directly at{" "}
                <a href={`mailto:${profile.email}`} className="text-brand underline">
                  {profile.email}
                </a>
              </p>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}

function ContactItem({
  icon,
  label,
  value,
  href,
}: {
  icon: React.ReactNode;
  label: string;
  value: string;
  href?: string;
}) {
  const Wrapper: any = href ? "a" : "div";
  return (
    <Wrapper href={href} className="flex items-center gap-4 group">
      <div className="w-12 h-12 rounded-lg border border-ink-200 dark:border-ink-700 text-ink-700 dark:text-ink-300 flex items-center justify-center group-hover:bg-brand group-hover:border-brand group-hover:text-white transition-all flex-shrink-0">
        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
          {icon}
        </svg>
      </div>
      <div>
        <div className="text-xs uppercase tracking-widest text-ink-500 dark:text-ink-400 font-medium">
          {label}
        </div>
        <div className="text-ink-900 dark:text-white font-medium">{value}</div>
      </div>
    </Wrapper>
  );
}

function Social({
  href,
  label,
  children,
}: {
  href: string;
  label: string;
  children: React.ReactNode;
}) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      aria-label={label}
      title={label}
      className="w-11 h-11 rounded-lg border border-ink-200 dark:border-ink-700 text-ink-700 dark:text-ink-300 flex items-center justify-center hover:bg-brand hover:border-brand hover:text-white transition-all"
    >
      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
        {children}
      </svg>
    </a>
  );
}

function Field({
  label,
  name,
  type = "text",
  required,
}: {
  label: string;
  name: string;
  type?: string;
  required?: boolean;
}) {
  return (
    <div>
      <label className="block text-xs uppercase tracking-widest text-ink-700 dark:text-ink-300 font-medium mb-2">
        {label}
      </label>
      <input
        type={type}
        name={name}
        required={required}
        className="w-full bg-white dark:bg-ink-950 border border-ink-200 dark:border-ink-700 px-4 py-3 rounded-lg text-ink-900 dark:text-ink-100 focus:outline-none focus:border-brand transition-colors"
      />
    </div>
  );
}
