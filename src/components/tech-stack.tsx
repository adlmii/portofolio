"use client";

import { motion, Variants } from "framer-motion";
import { Code2, Layout, Palette, Settings, Smartphone, Zap } from "lucide-react";

const techItems = [
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

const containerVariants: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { 
      staggerChildren: 0.15,
    },
  },
};

const itemVariants: Variants = {
  hidden: { y: 30, opacity: 0 },
  visible: {
    y: 0,
    opacity: 1,
    transition: { duration: 0.6, ease: "easeOut" }
  },
};

export function TechStack() {
  return (
    <section id="tech" className="relative py-16 overflow-hidden">
      
      {/* Background Blending */}
      <div className="absolute inset-0 h-full w-full bg-background -z-10">
        <div className="absolute h-full w-full 
          bg-[radial-gradient(#e5e7eb_1px,transparent_1px)] 
          dark:bg-[radial-gradient(#1f2937_1px,transparent_1px)] 
          bg-size-[16px_16px] 
          mask-[linear-gradient(to_bottom,transparent,black_20%,black_80%,transparent)]" 
        />
      </div>

      <div className="container relative z-10 space-y-8">
        <div className="space-y-2 max-w-2xl">
          <h2 className="text-3xl font-bold tracking-tight">Tech Stack</h2>
          <p className="text-muted-foreground text-lg">
            The tools I use to build high-performance web applications.
          </p>
        </div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: false, amount: 0.2 }}
          className="grid grid-cols-1 md:grid-cols-3 gap-4"
        >
          {techItems.map((item, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              whileHover={{ 
                y: -5, 
                scale: 1.02,
                transition: { type: "spring", stiffness: 300, damping: 20 } 
              }} 
              className={`
                group relative p-6 rounded-2xl border border-border/50 bg-card/50 
                hover:bg-card/80 hover:border-primary/50 hover:shadow-lg hover:shadow-primary/5
                transition-colors duration-300 ease-in-out backdrop-blur-sm flex flex-col justify-between gap-4 overflow-hidden
                ${item.className}
              `}
            >
              <div className="absolute inset-0 bg-linear-to-br from-primary/10 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

              <div className="flex items-center justify-between relative z-10">
                <div className="p-2.5 rounded-xl bg-background/50 border border-border/50 group-hover:border-primary/20 group-hover:bg-primary/10 transition-colors duration-300">
                  {item.icon}
                </div>
              </div>
              
              <div className="relative z-10">
                <h3 className="font-semibold text-lg tracking-tight group-hover:text-primary transition-colors duration-300">
                  {item.title}
                </h3>
                <p className="text-sm text-muted-foreground mt-1">
                  {item.description}
                </p>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}