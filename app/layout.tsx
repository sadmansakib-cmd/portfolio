import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Sadman | CSE Student & Aspiring Software Engineer",
  description:
    "Portfolio of Sadman — a Computer Science student building real-world solutions through code. Focused on IoT, problem-solving, and impactful software engineering.",
  keywords: ["Sadman", "CSE student", "software engineer", "IoT", "portfolio", "Bangladesh", "developer"],
  authors: [{ name: "Sadman" }],
  openGraph: {
    title: "Sadman | Portfolio",
    description: "Building real-world solutions through code.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
