// ============================================================
// SADMAN'S PORTFOLIO — All content lives in this file.
// Edit values below to update the entire website.
// ============================================================

export const profile = {
  name: "Sadman",
  firstName: "Sadman",
  title: "CSE Student & Aspiring Software Engineer",
  tagline: "Building real-world solutions through code.",
  bio: "I'm a Computer Science & Engineering student on a mission to become a skilled software engineer who builds technology that matters. I believe in execution over theory — the best way to learn is to build, ship, iterate, and grow. Every project I take on is a step toward solving a real-world problem.",
  location: "Bangladesh",
  email: "sadman@example.com",        // ← replace with your real email
  phone: "+880 1XXX-XXXXXX",           // ← replace with your real phone (or set to "" to hide)
  availability: "Open to internships, collaborations & learning opportunities",
  resumeUrl: "#",                      // ← put your resume PDF here (e.g. /resume.pdf)
  socials: {
    github: "https://github.com/yourusername",       // ← your GitHub
    linkedin: "https://linkedin.com/in/yourusername", // ← your LinkedIn
    facebook: "https://facebook.com/yourusername",    // ← your Facebook
    email: "mailto:sadman@example.com",
  },
};

export const principles = [
  {
    title: "Execution Over Theory",
    description:
      "Knowledge without action is just trivia. I prioritize shipping projects that solve real problems.",
  },
  {
    title: "Consistency Compounds",
    description:
      "Small, disciplined steps every day. Growth comes from showing up, not from rare bursts of effort.",
  },
  {
    title: "Build for Impact",
    description:
      "I focus on technology that touches real lives — especially solutions relevant to my community.",
  },
];

export const stats = [
  { value: "2+", label: "Real-World Projects" },
  { value: "C/C++", label: "Core Languages" },
  { value: "IoT", label: "Hardware + Software" },
  { value: "∞", label: "Always Learning" },
];

export const skills = [
  {
    category: "Programming",
    items: ["C", "C++", "Data Structures (Learning)", "Algorithms (Learning)"],
  },
  {
    category: "IoT & Hardware",
    items: ["Sensor Integration", "Microcontrollers", "Embedded Logic", "Real-time Systems"],
  },
  {
    category: "Problem Solving",
    items: ["Logical Thinking", "System Design Basics", "Debugging", "Breaking Down Problems"],
  },
  {
    category: "Mindset & Process",
    items: ["Discipline", "Self-Learning", "Documentation", "Iterative Building"],
  },
];

export const projects = [
  {
    title: "IoT-based Flood Early Warning System",
    category: "IoT · Social Impact",
    year: "2025",
    problem:
      "Bangladesh faces devastating floods every year, often catching rural communities unprepared. Existing warning systems are either too centralized or too expensive to deploy at scale.",
    solution:
      "An affordable IoT-based early warning system that monitors water levels in real-time and triggers alerts before flooding reaches critical zones — designed to be deployable in remote, flood-prone regions.",
    impact:
      "Aims to give vulnerable communities the precious time they need to evacuate, protect property, and save lives. Built with affordability and scalability as core constraints.",
    tech: ["C/C++", "IoT Sensors", "Microcontroller", "Real-time Alerts"],
    link: "#",
    github: "#",
    featured: true,
  },
  {
    title: "MurgiBondhu — Poultry Temperature Monitoring",
    category: "IoT · AgriTech",
    year: "2025",
    problem:
      "Small-scale poultry farmers in Bangladesh lose birds and income due to unmonitored temperature changes inside coops. Commercial monitoring systems are far too expensive for them.",
    solution:
      "MurgiBondhu (\"Poultry's Friend\") is a low-cost temperature monitoring system that continuously tracks coop conditions and alerts farmers when temperatures cross safe thresholds.",
    impact:
      "Empowers small farmers with technology that was previously only accessible to large commercial operations — reducing bird mortality, increasing yield, and improving livelihoods.",
    tech: ["C/C++", "Temperature Sensors", "IoT", "Alert System"],
    link: "#",
    github: "#",
    featured: true,
  },
];

export const journey = [
  {
    phase: "Now",
    title: "Strengthening the Foundations",
    description:
      "Sharpening C/C++ fundamentals, diving deeper into Data Structures and Algorithms, and building IoT projects that solve real problems in my community.",
  },
  {
    phase: "Next",
    title: "Software Engineering Depth",
    description:
      "Expanding into system design, version control mastery, and contributing to open-source projects. Building a public portfolio of work I'm proud of.",
  },
  {
    phase: "Future",
    title: "Impactful Software Engineer",
    description:
      "Becoming a software engineer who ships technology that creates real-world impact — at scale, for the people and problems that matter most.",
  },
];

export const habits = [
  "Code something every day, even if it's small",
  "Document the journey publicly — wins and failures",
  "Read, learn, then immediately apply",
  "Choose hard projects over comfortable ones",
  "Treat consistency as a non-negotiable",
];

// ============================================================
// EDUCATION — edit these to match your real background
// ============================================================
export const education = [
  {
    degree: "B.Sc. in Computer Science & Engineering",
    institution: "Your University Name",
    location: "Bangladesh",
    period: "2023 — Present",
    description:
      "Currently pursuing my undergraduate degree. Focused on building strong fundamentals in programming, data structures, algorithms, and systems thinking — while applying them through real-world IoT projects.",
  },
  {
    degree: "Higher Secondary Certificate (Science)",
    institution: "Your College Name",
    location: "Bangladesh",
    period: "2020 — 2022",
    description:
      "Completed HSC in Science group, building foundations in mathematics, physics, and logical reasoning — the bedrock of engineering thinking.",
  },
  {
    degree: "Secondary School Certificate (Science)",
    institution: "Your School Name",
    location: "Bangladesh",
    period: "2018 — 2020",
    description:
      "Where it all started — curiosity in math and science that eventually grew into a love for computing.",
  },
];
