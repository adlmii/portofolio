import { 
  Layers, Code2, Database, Zap, Palette, Layout, Settings, Smartphone 
} from "lucide-react";

// --- DATA PROJECTS ---
export const projects = [
  {
    id: 1,
    title: "WatchTier",
    category: "Interactive Media Tool",
    description: "A specialized tier-list builder for movie buffs. Integrates directly with the TMDB API to search and rank movies, featuring a seamless drag-and-drop interface and instant image export for sharing.",
    tech: ["React", "Vite", "Zustand", "dnd-kit", "Tailwind"],
    image: "/projects/watchTierApp.jpeg",
    icon: <Layers className="h-6 w-6 text-blue-500" />,
    highlight: "Implemented a performant drag-and-drop system with complex state management using Zustand. Features client-side DOM-to-image conversion to generate high-quality downloadable tier lists.",
    links: { demo: "https://watchtier-app.vercel.app/", repo: "https://github.com/adlmii/watchtier" },
    gradient: "from-blue-500/20 to-cyan-500/20",
    border: "group-hover:border-blue-500",
  },
  {
    id: 2,
    title: "Mosque App",
    category: "Full Stack Management",
    description: "A digital ecosystem for modern mosques. Features a transparent financial dashboard, event management system, and accurate prayer time calculations with real-time countdowns.",
    tech: ["Next.js 14", "Drizzle ORM", "NextAuth v5", "Server Actions", "Shadcn UI"],
    image: "/projects/mosqueApp.jpeg",
    icon: <Code2 className="h-6 w-6 text-emerald-500" />,
    highlight: "Built with a 'Server-First' architecture. Utilized React Server Actions for type-safe data mutations (CRUD) directly from UI components, eliminating the need for traditional API endpoints while ensuring robust validation.",
    links: { demo: "#", repo: "https://github.com/adlmii/my-mosque-app.git" },
    gradient: "from-emerald-500/20 to-green-500/20",
    border: "group-hover:border-emerald-500",
  },
  {
    id: 3,
    title: "Sipit 2.0",
    category: "Dashboard & Analytics",
    description: "A comprehensive library administration dashboard featuring interactive data visualization, digital resource management, and granular user role handling.",
    tech: ["React", "Zustand", "Recharts", "React Hook Form", "Zod"],
    image: "/projects/sipit2.0App.jpeg",
    icon: <Database className="h-6 w-6 text-orange-500" />,
    highlight: "Engineered a secure Role-Based Access Control (RBAC) system using Zustand for persistent global state. Implemented responsive data visualization charts to track lending trends and digital asset downloads.",
    links: { demo: "#", repo: "https://github.com/adlmii/SIPIT-2.0.git" },
    gradient: "from-orange-500/20 to-red-500/20",
    border: "group-hover:border-orange-500",
  },
];

// --- DATA TECH STACK ---
export const techStack = [
  {
    title: "Next.js 14",
    description: "App Router & Server Actions",
    icon: <Zap className="h-6 w-6 text-yellow-500" />,
    className: "md:col-span-2", 
  },
  {
    title: "TypeScript",
    description: "Strict Type Safety",
    icon: <Code2 className="h-6 w-6 text-blue-500" />,
    className: "md:col-span-1",
  },
  {
    title: "Tailwind CSS",
    description: "Utility-first Styling",
    icon: <Palette className="h-6 w-6 text-cyan-400" />,
    className: "md:col-span-1",
  },
  {
    title: "React Ecosystem",
    description: "Zustand, TanStack Query",
    icon: <Layout className="h-6 w-6 text-blue-400" />,
    className: "md:col-span-2", 
  },
  {
    title: "Framer Motion",
    description: "Complex Animations",
    icon: <Settings className="h-6 w-6 text-purple-500" />,
    className: "md:col-span-1",
  },
  {
    title: "Shadcn UI",
    description: "Accessible Components",
    icon: <Smartphone className="h-6 w-6 text-foreground" />,
    className: "md:col-span-2", 
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