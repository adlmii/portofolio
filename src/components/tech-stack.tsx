"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { techStack } from "@/lib/data";
import { cn } from "@/lib/utils";
import type { ReactNode } from "react";
import {
  SiNextdotjs,
  SiReact,
  SiTypescript,
  SiTailwindcss,
  SiFramer,
  SiGit,
  SiPython,
  SiPandas,
  SiTableau,
  SiJupyter,
  SiPostgresql,
  SiGithub,
} from "react-icons/si";
import { TbDatabase } from "react-icons/tb";
import { SlidersHorizontal, Code2, Blocks } from "lucide-react";

// --- MAPPING ICON (Gabungan Icon Lama + Baru) ---
const icons: Record<string, ReactNode> = {
  // Frontend
  nextjs: <SiNextdotjs className="w-5 h-5 group-hover:text-black dark:group-hover:text-white transition-colors" />,
  react: <SiReact className="w-5 h-5 group-hover:text-[#61DAFB] transition-colors" />,
  typescript: <SiTypescript className="w-5 h-5 group-hover:text-[#3178C6] transition-colors" />,
  tailwind: <SiTailwindcss className="w-5 h-5 group-hover:text-[#06B6D4] transition-colors" />,
  zustand: <SlidersHorizontal className="w-5 h-5 group-hover:text-[#443E38] dark:group-hover:text-[#F3F0E7] transition-colors" />,
  query: <TbDatabase className="w-5 h-5 group-hover:text-[#FF4154] transition-colors" />,
  shadcn: <Code2 className="w-5 h-5" />,
  motion: <SiFramer className="w-5 h-5 group-hover:text-foreground transition-colors" />,
  
  // Data Analyst (Baru)
  python: <SiPython className="w-5 h-5 group-hover:text-[#3776AB] transition-colors" />,
  pandas: <SiPandas className="w-5 h-5 group-hover:text-[#150458] dark:group-hover:text-white transition-colors" />,
  tableau: <SiTableau className="w-5 h-5 group-hover:text-[#E97627] transition-colors" />,
  sql: <SiPostgresql className="w-5 h-5 group-hover:text-[#4169E1] transition-colors" />,
  jupyter: <SiJupyter className="w-5 h-5 group-hover:text-[#F37626] transition-colors" />,
  
  // Tools
  git: <SiGit className="w-5 h-5 group-hover:text-[#F05032] transition-colors" />,
};

const tabs = [
  { id: "frontend", label: "Frontend" },
  { id: "data", label: "Data" },
];

export function TechStack() {
  const [activeTab, setActiveTab] = useState("frontend");

  // Logic Filter
const filteredStack = techStack.filter((tech) => {
    if (activeTab === "data") {
      return tech.type === "data";
    }
    return tech.type === "frontend" || tech.type === "tools";
  });

  return (
    <section id="tech" className="relative py-20 sm:py-24 overflow-hidden bg-background">
      {/* Background Pattern Lama */}
      <div className="absolute inset-0 h-full w-full bg-background -z-10">
        <div
          className="absolute h-full w-full
          bg-[radial-gradient(#e5e7eb_1px,transparent_1px)]
          dark:bg-[radial-gradient(#1f2937_1px,transparent_1px)]
          bg-size[16px_16px]
          mask-[linear-gradient(to_bottom,transparent,black_20%,black_80%,transparent)]"
        />
      </div>

      <div className="container px-4 md:px-6 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-start">

          {/* --- LEFT COLUMN (STICKY) --- */}
          <div className="lg:col-span-4 lg:sticky lg:top-32 space-y-8 text-center lg:text-left">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: false, amount: 0.4}}
            >
              <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight mb-3 lg:mb-4
                             bg-linear-to-r from-foreground to-foreground/60
                             bg-clip-text text-transparent">
                Tech Stack
              </h2>

              <div className="h-1 w-20 bg-primary rounded-full mb-4 lg:mb-6 mx-auto lg:mx-0" />

              <p className="text-muted-foreground text-base sm:text-lg leading-relaxed max-w-prose mx-auto lg:mx-0">
                The tools I rely on to build frontend systems that stay fast,
                maintainable, and reliable over time.
                <br className="hidden sm:inline" /><br className="hidden sm:inline" />
                I choose technologies based on long-term impact,
                not short-term trends.
              </p>
            </motion.div>

            {/* TOGGLE FILTER (Ditaruh di sini agar sticky) */}
            <motion.div 
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="flex flex-wrap justify-center lg:justify-start gap-1"
            >
              {tabs.map((tab) => (
                <button
                  key={tab.id}
                  onClick={() => setActiveTab(tab.id)}
                  className={cn(
                    "relative px-4 py-2 text-sm font-medium rounded-full transition-colors z-10",
                    activeTab === tab.id
                      ? "text-primary-foreground"
                      : "text-muted-foreground hover:text-foreground hover:bg-secondary/50"
                  )}
                >
                  {activeTab === tab.id && (
                    <motion.div
                      layoutId="activeTechTab"
                      className="absolute inset-0 bg-primary rounded-full -z-10"
                      transition={{ type: "spring", bounce: 0.2, duration: 0.6 }}
                    />
                  )}
                  {tab.label}
                </button>
              ))}
            </motion.div>
          </div>

          {/* --- RIGHT COLUMN (GRID ITEMS) --- */}
          <div className="lg:col-span-8">
            <motion.div 
              layout 
              className="grid grid-cols-2 lg:grid-cols-3 gap-3 sm:gap-4 auto-rows-fr"
            >
              <AnimatePresence mode="popLayout">
                {filteredStack.map((item, index) => {
                  const isLastOdd = filteredStack.length % 2 !== 0 && index === filteredStack.length - 1;
                  
                  return (
                    <motion.div
                      key={item.title} // Gunakan title sebagai key agar animasi filter jalan
                      layout
                      initial={{ scale: 0.8, opacity: 0 }}
                      animate={{ scale: 1, opacity: 1 }}
                      exit={{ scale: 0.8, opacity: 0 }}
                      transition={{ duration: 0.3 }}
                      className={`
                        group relative p-3 sm:p-4 lg:p-5 rounded-xl border border-border/50 bg-card/50 backdrop-blur-sm
                        hover:bg-card hover:border-primary/50 hover:shadow-lg hover:shadow-primary/5
                        transition-all duration-300 flex flex-col gap-2 sm:gap-3 lg:gap-4 h-full
                        ${isLastOdd ? 'col-span-2 max-w-[calc(50%-0.375rem)] mx-auto lg:col-span-1 lg:max-w-none' : ''}
                      `}
                    >
                      <div className="flex items-center gap-2 sm:gap-3 lg:gap-4">
                        <div className="p-1.5 sm:p-2 lg:p-2.5 rounded-lg bg-background border border-border
                                        group-hover:border-primary/20
                                        group-hover:bg-primary/10
                                        transition-colors duration-300 shrink-0">
                          {icons[item.icon] || <Blocks className="w-5 h-5"/>}
                        </div>

                        <h3 className="font-semibold text-sm sm:text-base tracking-tight
                                       group-hover:text-primary transition-colors leading-tight">
                          {item.title}
                        </h3>
                      </div>

                      <div className="relative z-10 flex-1">
                        <p className="text-xs sm:text-sm text-muted-foreground leading-relaxed">
                          {item.description}
                        </p>
                      </div>

                      <div className="absolute inset-0 bg-linear-to-r from-primary/5 to-transparent
                                      opacity-0 group-hover:opacity-100
                                      rounded-xl transition-opacity pointer-events-none" />
                    </motion.div>
                  );
                })}
              </AnimatePresence>
            </motion.div>
          </div>

        </div>
      </div>
    </section>
  );
}