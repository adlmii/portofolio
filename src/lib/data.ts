export const projects = [
  {
    id: 1,
    title: "WatchTier",
    category: "Interactive Media Tool",
    description:
      "A specialized tier-list builder for movie buffs with drag-and-drop ranking and instant image export.",
    tech: ["React", "Vite", "Zustand", "dnd-kit", "Tailwind"],
    image: "/projects/watchTierApp.jpeg",
    icon: "layers",
    tone: "blue",
    highlight:
      "Implemented performant drag-and-drop with complex state management and DOM-to-image export.",
    links: {
      demo: "https://watchtier-app.vercel.app/",
      repo: "https://github.com/adlmii/watchtier",
    },
  },
  {
    id: 2,
    title: "Mosque App",
    category: "Full Stack Management",
    description:
      "A digital ecosystem for mosques with finance tracking, event management, and prayer time calculations.",
    tech: ["Next.js 14", "Drizzle ORM", "NextAuth v5", "Server Actions", "shadcn/ui"],
    image: "/projects/mosqueApp.jpeg",
    icon: "code",
    tone: "emerald",
    highlight:
      "Built with a server-first architecture using React Server Actions for type-safe mutations.",
    links: {
      demo: "#",
      repo: "https://github.com/adlmii/my-mosque-app.git",
    },
  },
  {
    id: 3,
    title: "Sipit 2.0",
    category: "Dashboard & Analytics",
    description:
      "Library management dashboard with analytics, digital assets, and role-based access control.",
    tech: ["React", "Zustand", "Recharts", "React Hook Form", "Zod"],
    image: "/projects/sipit2.0App.jpeg",
    icon: "database",
    tone: "orange",
    highlight:
      "Engineered RBAC and responsive analytics dashboards with persistent global state.",
    links: {
      demo: "#",
      repo: "https://github.com/adlmii/SIPIT-2.0.git",
    },
  },
];


// --- DATA TECH STACK ---
export const techStack = [
  {
    title: "Next.js",
    description:
      "Chosen for its routing model and server-first patterns that scale well over time.",
    icon: "nextjs",
  },
  {
    title: "React",
    description:
      "Component-driven UI with predictable rendering and composition.",
    icon: "react",
  },
  {
    title: "TypeScript",
    description:
      "Strong type safety to catch bugs early and keep complex codebases maintainable.",
    icon: "typescript",
  },
  {
    title: "TanStack Query",
    description:
      "Reliable server-state management with caching and synchronization.",
    icon: "query",
  },
  {
    title: "Zustand",
    description:
      "Lightweight global state management without unnecessary complexity.",
    icon: "zustand",
  },
  {
    title: "Tailwind CSS",
    description:
      "Fast iteration with consistent, utility-first styling that scales.",
    icon: "tailwind",
  },
  {
    title: "shadcn/ui",
    description:
      "Accessible, composable components without locking into a rigid design system.",
    icon: "shadcn",
  },
  {
    title: "Framer Motion",
    description:
      "Motion with intention, used to enhance interaction rather than decorate.",
    icon: "motion",
  },
  {
    title: "Git & GitHub",
    description:
      "Version control with a clean, collaborative workflow.",
    icon: "git",
  },
];


// --- DATA CODE PHILOSOPHY ---
export const principles = [
  {
    title: "Clean Architecture",
    description: "Business logic lives apart from UI components.",
    color: "bg-blue-500/10 text-blue-500",
  },
  {
    title: "Performance First",
    description: "Memoization patterns and efficient re-renders.",
    color: "bg-emerald-500/10 text-emerald-500",
  },
  {
    title: "Type Safety",
    description: "Strict TypeScript implementation to catch errors.",
    color: "bg-purple-500/10 text-purple-500",
  },
];