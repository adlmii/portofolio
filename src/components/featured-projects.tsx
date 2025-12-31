"use client";

import { motion } from "framer-motion";
import {
  ExternalLink,
  Github,
  ArrowUpRight,
  Layers,
  Code2,
  Database,
} from "lucide-react";
import Image from "next/image";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import { projects } from "@/lib/data";
import type { ReactNode } from "react";

const projectIcons: Record<string, ReactNode> = {
  layers: <Layers className="h-4 w-4" />,
  code: <Code2 className="h-4 w-4" />,
  database: <Database className="h-4 w-4" />,
};

const toneStyles: Record<
  string,
  {
    border: string;
    gradient: string;
    icon: string;
  }
> = {
  blue: {
    border: "group-hover:border-blue-500",
    gradient: "from-blue-500/20 to-cyan-500/20",
    icon: "text-blue-500",
  },
  emerald: {
    border: "group-hover:border-emerald-500",
    gradient: "from-emerald-500/20 to-green-500/20",
    icon: "text-emerald-500",
  },
  orange: {
    border: "group-hover:border-orange-500",
    gradient: "from-orange-500/20 to-red-500/20",
    icon: "text-orange-500",
  },
};

export function FeaturedProjects() {
  return (
    <section
      id="projects"
      className="relative py-20 sm:py-24 overflow-hidden bg-secondary/20 dark:bg-card/50"
    >
      <div className="absolute -z-10 pointer-events-none">
        <div className="absolute w-125 h-125 rounded-full bg-primary/5 blur-[120px] -translate-y-1/2 -translate-x-1/2" />
        <div className="absolute bottom-0 right-0 w-125 h-125 rounded-full bg-blue-500/5 blur-[120px] translate-y-1/2 translate-x-1/2" />
      </div>

      <div
        className="
          px-4 md:px-6
          lg:pr-[calc((100vw-1280px)/2+1.5rem)]
        "
      >
        <motion.div
          initial={{ opacity: 0, x: 20 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          viewport={{ once: false, amount: 0.4 }}
          className="
            ml-auto
            max-w-2xl
            space-y-4 lg:space-y-6
            text-center lg:text-right
            flex flex-col items-center lg:items-end
          "
        >
          <h2
            className="
              text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight
              bg-linear-to-l from-foreground to-foreground/60
              bg-clip-text text-transparent
            "
          >
            Featured Projects
          </h2>

          <div className="h-1 w-20 bg-primary rounded-full" />

          <p className="text-muted-foreground text-base sm:text-lg leading-relaxed">
            A selection of projects where I focused on building thoughtful,
            real-world frontend solutions that balance performance,
            scalability, and user experience.
          </p>
        </motion.div>
      </div>

      <div className="container px-4 md:px-6 relative z-10 mt-12 sm:mt-16">
        <div className="flex flex-col gap-12 sm:gap-16 md:gap-20 lg:gap-32">
          {projects.map((project, index) => {
            const tone = toneStyles[project.tone];

            return (
              <motion.div
                key={project.id}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: false, margin: "-100px" }}
                transition={{
                  duration: 0.8,
                  ease: "easeOut",
                  delay: index * 0.1,
                }}
                className="group"
              >
                <div
                  className={`flex flex-col md:flex-row gap-6 sm:gap-8 lg:gap-12 items-center ${
                    index % 2 === 1 ? "md:flex-row-reverse" : ""
                  }`}
                >
                  <div
                    className={`
                      relative w-full md:w-3/5 aspect-4/3 sm:aspect-video
                      rounded-xl sm:rounded-2xl border border-border/50 bg-secondary/30
                      overflow-hidden shadow-lg transition-all duration-500
                      ${tone.border} group-hover:shadow-2xl
                    `}
                  >
                    <div
                      className={`absolute inset-0 bg-linear-to-br ${tone.gradient}
                                  opacity-20 group-hover:opacity-30 transition-opacity`}
                    />

                    <div
                      className="
                        absolute inset-3 sm:inset-4 md:inset-6
                        rounded-lg overflow-hidden shadow-xl bg-background
                        group-hover:-translate-y-2 group-hover:scale-[1.02]
                        transition-all duration-500
                      "
                    >
                      <Image
                        src={project.image}
                        alt={`${project.title} screenshot`}
                        fill
                        className="object-cover object-top"
                        sizes="(max-width: 768px) 100vw, 60vw"
                        quality={85}
                      />
                    </div>
                  </div>

                  <div className="w-full md:w-2/5 space-y-4 sm:space-y-5 lg:space-y-6">
                    <div className="space-y-2">
                      <div className="flex items-center gap-2 text-xs sm:text-sm font-medium">
                        <span
                          className={`p-1.5 rounded-md bg-secondary ${tone.icon}`}
                        >
                          {projectIcons[project.icon]}
                        </span>
                        <span>{project.category}</span>
                      </div>

                      <h3 className="text-2xl sm:text-3xl font-bold flex items-center gap-2 group/title">
                        {project.title}
                        <ArrowUpRight
                          className="
                            h-5 w-5 sm:h-6 sm:w-6 opacity-0
                            -translate-y-2 translate-x-2
                            group-hover/title:opacity-100
                            group-hover/title:translate-y-0
                            group-hover/title:translate-x-0
                            transition-all duration-300 text-muted-foreground
                          "
                        />
                      </h3>
                    </div>

                    <p className="text-muted-foreground leading-relaxed text-sm sm:text-base lg:text-lg">
                      {project.description}
                    </p>

                    <Card className="bg-secondary border-border group-hover:border-primary/30">
                      <CardHeader className="p-3 sm:p-4 pb-2">
                        <CardTitle className="text-xs sm:text-sm font-semibold flex items-center gap-2 text-primary">
                          <Code2 className="h-4 w-4" />
                          Engineering Challenge
                        </CardTitle>
                      </CardHeader>
                      <CardContent className="p-3 sm:p-4 pt-0">
                        <CardDescription className="text-foreground/80 text-xs sm:text-sm leading-relaxed">
                          {project.highlight}
                        </CardDescription>
                      </CardContent>
                    </Card>

                    <div className="flex flex-wrap gap-1.5 sm:gap-2">
                      {project.tech.map((t) => (
                        <Badge
                          key={t}
                          variant="secondary"
                          className="rounded-md px-2 sm:px-3 py-0.5 sm:py-1 text-xs"
                        >
                          {t}
                        </Badge>
                      ))}
                    </div>

                    <Separator />

                    <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 pt-2">
                      <Button variant="outline" className="rounded-full" asChild>
                        <a
                          href={project.links.repo}
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          <Github className="mr-2 h-4 w-4" />
                          Source Code
                        </a>
                      </Button>

                      <Button className="rounded-full group/btn" asChild>
                        <a
                          href={project.links.demo}
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          <ExternalLink
                            className="
                              mr-2 h-4 w-4 transition-transform
                              group-hover/btn:-translate-y-0.5
                              group-hover/btn:translate-x-0.5
                            "
                          />
                          Live Demo
                        </a>
                      </Button>
                    </div>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}