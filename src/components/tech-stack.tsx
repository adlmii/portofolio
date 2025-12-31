"use client";

import { motion, Variants } from "framer-motion";
import { techStack } from "@/lib/data";
import type { ReactNode } from "react";
import {
  SiNextdotjs,
  SiReact,
  SiTypescript,
  SiTailwindcss,
  SiFramer,
  SiGithub,
} from "react-icons/si";
import { TbDatabase } from "react-icons/tb";
import { SlidersHorizontal, Code2 } from "lucide-react";


const icons: Record<string, ReactNode> = {
  nextjs: <SiNextdotjs className="w-5 h-5" />,
  react: <SiReact className="w-5 h-5" />,
  typescript: <SiTypescript className="w-5 h-5" />,
  query: <TbDatabase className="w-5 h-5" />,
  zustand: <SlidersHorizontal className="w-5 h-5" />,
  tailwind: <SiTailwindcss className="w-5 h-5" />,
  shadcn: <Code2 className="w-5 h-5" />,
  motion: <SiFramer className="w-5 h-5" />,
  git: <SiGithub className="w-5 h-5" />,
};

const containerVariants: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.1 },
  },
};

const itemVariants: Variants = {
  hidden: { x: 20, opacity: 0 },
  visible: {
    x: 0,
    opacity: 1,
    transition: { duration: 0.5, ease: "easeOut" },
  },
};


export function TechStack() {
  return (
    <section id="tech" className="relative py-20 sm:py-24 overflow-hidden bg-background">
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

          <div className="lg:col-span-4 lg:sticky lg:top-32 space-y-4 lg:space-y-6 text-center lg:text-left">
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
          </div>

          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: false, amount: 0.3 }}
            className="lg:col-span-8 grid grid-cols-2 lg:grid-cols-3 gap-3 sm:gap-4 auto-rows-fr"
          >
            {techStack.map((item, index) => {
              const isLastOdd = techStack.length % 2 !== 0 && index === techStack.length - 1;
              
              return (
                <motion.div
                  key={index}
                  variants={itemVariants}
                  whileHover={{
                    scale: 1.02,
                    transition: { type: "spring", stiffness: 300 },
                  }}
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
                      {icons[item.icon]}
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
          </motion.div>

        </div>
      </div>
    </section>
  );
}