export const projects = [
  {
    id: 1,
    title: "WatchTier",
    type: "frontend",
    category: "Interactive Media Tool",
    description:
      "A specialized tier-list builder for movie buffs with drag-and-drop ranking and instant image export.",
    tech: ["React", "Vite", "Zustand", "dnd-kit", "Tailwind"],
    image: "/projects/watchTierApp.jpeg",
    icon: "layers",
    tone: "blue",
    highlight: (
      <>
        Engineered a high-performance drag-and-drop interface using{" "}
        <strong className="text-foreground">dnd-kit</strong>, optimizing re-renders. 
        Implemented client-side{" "}
        <span className="text-blue-500 font-semibold">DOM-to-image export</span>{" "}
        that maintains high resolution without server processing.
      </>
    ),
    links: {
      demo: "https://watchtier-app.vercel.app/",
      repo: "https://github.com/adlmii/watchtier",
    },
  },
  {
    id: 2,
    title: "Mosque App",
    type: "frontend",
    category: "Full Stack Management",
    description:
      "A digital ecosystem for mosques with finance tracking, event management, and prayer time calculations.",
    tech: ["Next.js 14", "Drizzle ORM", "NextAuth v5", "Server Actions", "shadcn/ui"],
    image: "/projects/mosqueApp.jpeg",
    icon: "code",
    tone: "emerald",
    highlight: (
      <>
        Architected using{" "}
        <strong className="text-foreground">Next.js 14 Server Components</strong> for
        optimal load times. Built a robust mutation layer with{" "}
        <span className="text-emerald-500 font-semibold">Server Actions & Zod</span>{" "}
        to ensure end-to-end type safety for financial transactions.
      </>
    ),
    links: {
      demo: "#",
      repo: "https://github.com/adlmii/my-mosque-app.git",
    },
  },
  {
    id: 3,
    title: "Sipit 2.0",
    type: "frontend",
    category: "Dashboard & Analytics",
    description:
      "Library management dashboard with analytics, digital assets, and role-based access control.",
    tech: ["React", "Zustand", "Recharts", "React Hook Form", "Zod"],
    image: "/projects/sipit2.0App.jpeg",
    icon: "database",
    tone: "orange",
    highlight: (
      <>
        Developed a comprehensive{" "}
        <strong className="text-foreground">RBAC system</strong> to secure sensitive
        routes. Integrated{" "}
        <span className="text-orange-500 font-semibold">Recharts</span> for dynamic
        visualization and utilized Zustand for efficient global state persistence across
        multi-step forms.
      </>
    ),
    links: {
      demo: "#",
      repo: "https://github.com/adlmii/SIPIT-2.0.git",
    },
  },
  {
    id: 4,
    title: "Melbourne Housing",
    type: "data",
    category: "Data Analysis & Visualization",
    description:
      "Exploratory data analysis on Melbourne's property market to uncover sales trends, pricing factors, and demographic correlations.",
    tech: ["Python", "Pandas", "Seaborn", "Tableau", "Jupyter"],
    image: "/projects/melbourne.jpeg",
    icon: "chart",
    tone: "purple",
    highlight: (
      <>
        Cleaned and processed over{" "}
        <strong className="text-foreground">18,000+ records</strong> to ensure statistical accuracy. 
        Uncovered significant price correlations with CBD distance and identified{" "}
        <span className="text-purple-500 font-semibold">undervalued high-growth suburbs</span>{" "}
        through geospatial analysis.
      </>
    ),
    links: {
      demo: "https://github.com/kochenkexe/melbourne-property-analysis",
      repo: "https://github.com/kochenkexe/melbourne-property-analysis",
    },
  },
];


// --- DATA TECH STACK ---
export const techStack = [
  {
    title: "Next.js",
    type: "frontend",
    description: "App Router, Server Components, & Scaling.",
    icon: "nextjs",
  },
  {
    title: "React",
    type: "frontend",
    description: "Component composition & hooks pattern.",
    icon: "react",
  },
  {
    title: "TypeScript",
    type: "frontend",
    description: "Strict typing for scalable codebases.",
    icon: "typescript",
  },
  {
    title: "Tailwind",
    type: "frontend",
    description: "Utility-first CSS for rapid UI development.",
    icon: "tailwind",
  },
  {
    title: "Zustand",
    type: "frontend",
    description: "Minimalist global state management.",
    icon: "zustand",
  },
  {
    title: "TanStack Query",
    type: "frontend",
    description: "Server state & caching strategies.",
    icon: "query",
  },
  {
    title: "Framer Motion",
    type: "frontend",
    description: "Complex layout animations & gestures.",
    icon: "motion",
  },

  // DATA ANALYST STACK (NEW)
  {
    title: "Python",
    type: "data",
    description: "Data manipulation & scripting automation.",
    icon: "python",
  },
  {
    title: "Pandas",
    type: "data",
    description: "Data cleaning, transformation & analysis.",
    icon: "pandas",
  },
  {
    title: "Tableau",
    type: "data",
    description: "Interactive dashboarding & visual storytelling.",
    icon: "tableau",
  },
  {
    title: "SQL",
    type: "data",
    description: "Complex querying & database management.",
    icon: "sql",
  },
  {
    title: "Jupyter",
    type: "data",
    description: "Interactive computing & documentation workflow.",
    icon: "jupyter",
  },

  // TOOLS / OTHERS
  {
    title: "Git & GitHub",
    type: "tools",
    description: "Version control & CI/CD workflows.",
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