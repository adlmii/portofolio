"use client";

import { motion } from "framer-motion";
import { ExternalLink, Github, Code2, Layers, Database, ArrowUpRight } from "lucide-react";
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

const projects = [
  {
    id: 1,
    title: "WatchTier",
    category: "Interactive UI",
    description: "A drag-and-drop tier list maker for movie enthusiasts. Users can rank movies, save their lists locally, and share them as images.",
    tech: ["React", "DnD Kit", "Zustand", "Tailwind"],
    icon: <Layers className="h-6 w-6 text-blue-500" />,
    highlight: "Engineered a complex drag-and-drop system with optimistic UI updates. Managed global state for tier ordering using Zustand to prevent prop-drilling hell.",
    links: { demo: "#", repo: "#" },
    gradient: "from-blue-500/20 to-cyan-500/20",
    border: "group-hover:border-blue-500", // Solid border on hover
  },
  {
    id: 2,
    title: "Mosque App",
    category: "Modern Architecture",
    description: "Comprehensive management system for Mosques, handling prayer schedules, finance tracking, and event management.",
    tech: ["Next.js 14", "Drizzle ORM", "Shadcn UI", "Server Actions"],
    icon: <Code2 className="h-6 w-6 text-emerald-500" />,
    highlight: "Leveraged Next.js Server Components for SEO-critical pages while using Client Components for real-time prayer countdowns, achieving a perfect Lighthouse score.",
    links: { demo: "#", repo: "#" },
    gradient: "from-emerald-500/20 to-green-500/20",
    border: "group-hover:border-emerald-500",
  },
  {
    id: 3,
    title: "Sipit 2.0",
    category: "Data Handling",
    description: "Library dashboard system for handling thousands of book records, member data, and circulation logs efficiently.",
    tech: ["React", "Vite", "TanStack Table", "React Query"],
    icon: <Database className="h-6 w-6 text-orange-500" />,
    highlight: "Implemented server-side pagination and filtering strategies using TanStack Table to handle large datasets without compromising client-side performance.",
    links: { demo: "#", repo: "#" },
    gradient: "from-orange-500/20 to-red-500/20",
    border: "group-hover:border-orange-500",
  },
];

export function FeaturedProjects() {
  return (
    <section id="projects" className="relative pt-24 pb-16 overflow-hidden">
      
      {/* Background Blending - Opacity removed for solid feel in light mode */}
      <div className="absolute inset-0 -z-10 overflow-visible pointer-events-none">
         <div className="absolute top-0 left-0 w-125 h-125 rounded-full bg-primary/5 blur-[120px] -translate-y-1/2 -translate-x-1/2" />
         <div className="absolute bottom-0 right-0 w-125 h-125 rounded-full bg-blue-500/5 blur-[120px] translate-y-1/2 translate-x-1/2" />
      </div>

      <div className="container relative z-10 space-y-12">
        <div className="space-y-4 max-w-2xl">
          <h2 className="text-3xl font-bold tracking-tight">Featured Projects</h2>
          <p className="text-muted-foreground text-lg">
            Highlights of my journey in solving complex frontend engineering problems.
          </p>
        </div>

        <div className="flex flex-col gap-20 md:gap-32">
          {projects.map((project, index) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: false, margin: "-100px" }}
              transition={{ duration: 0.8, ease: "easeOut", delay: index * 0.1 }}
              className="group"
            >
              <div className={`flex flex-col md:flex-row gap-8 lg:gap-12 items-start ${
                index % 2 === 1 ? "md:flex-row-reverse" : ""
              }`}>
                
                {/* Visual Side - UPDATED: Solid border & bg-card */}
                <div className={`
                  w-full md:w-3/5 aspect-video rounded-2xl border border-border bg-card 
                  overflow-hidden relative shadow-sm transition-all duration-500
                  ${project.border} group-hover:shadow-2xl
                `}>
                  <div className={`
                    absolute inset-0 bg-linear-to-br ${project.gradient} opacity-30 
                    group-hover:opacity-50 group-hover:scale-105 transition-all duration-700 ease-out
                  `} />
                  
                  <div className="absolute inset-0 flex items-center justify-center">
                     <span className="text-muted-foreground/40 font-mono text-xl font-bold tracking-widest uppercase group-hover:scale-110 transition-transform duration-500">
                       {project.title} Preview
                     </span>
                  </div>
                </div>

                <div className="w-full md:w-2/5 space-y-6 flex flex-col justify-center">
                  <div className="space-y-2">
                    <div className="flex items-center gap-2 text-sm font-medium text-primary">
                      {/* UPDATED: Solid background for category icon */}
                      <span className="p-1.5 rounded-md bg-secondary text-primary">
                        {project.icon}
                      </span>
                      <span>{project.category}</span>
                    </div>
                    
                    <h3 className="text-3xl font-bold flex items-center gap-2 group/title cursor-pointer">
                      {project.title}
                      <ArrowUpRight className="h-6 w-6 opacity-0 -translate-y-2 translate-x-2 group-hover/title:opacity-100 group-hover/title:translate-y-0 group-hover/title:translate-x-0 transition-all duration-300 text-muted-foreground" />
                    </h3>
                  </div>

                  <p className="text-muted-foreground leading-relaxed text-lg">
                    {project.description}
                  </p>

                  {/* UPDATED: Card bg changed from muted/30 to secondary (solid) for better readability */}
                  <Card className="bg-secondary border-border transition-colors duration-300 group-hover:border-primary/30">
                    <CardHeader className="p-4 pb-2">
                      <CardTitle className="text-sm font-semibold flex items-center gap-2 text-primary">
                        <Code2 className="h-4 w-4" />
                        Engineering Challenge
                      </CardTitle>
                    </CardHeader>
                    <CardContent className="p-4 pt-0">
                      <CardDescription className="text-foreground/80 text-sm leading-relaxed">
                        {project.highlight}
                      </CardDescription>
                    </CardContent>
                  </Card>

                  <div className="flex flex-wrap gap-2">
                    {project.tech.map((t) => (
                      // UPDATED: Badge uses default variant which is usually solid primary, 
                      // or ensure secondary is solid in globals.css
                      <Badge key={t} variant="secondary" className="rounded-md px-3 py-1">
                        {t}
                      </Badge>
                    ))}
                  </div>

                  <Separator className="bg-border" />

                  <div className="flex gap-4 pt-2">
                    <Button variant="outline" className="rounded-full border-border hover:bg-secondary" asChild>
                      <a href={project.links.repo} target="_blank" rel="noopener noreferrer">
                        <Github className="mr-2 h-4 w-4" />
                        Source Code
                      </a>
                    </Button>
                    <Button className="rounded-full group/btn" asChild>
                      <a href={project.links.demo} target="_blank" rel="noopener noreferrer">
                        <ExternalLink className="mr-2 h-4 w-4 transition-transform group-hover/btn:-translate-y-0.5 group-hover/btn:translate-x-0.5" />
                        Live Demo
                      </a>
                    </Button>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}