"use client";

import { motion } from "framer-motion";
// Icon yang spesifik untuk data (Layers, Code2, Database) sudah tidak perlu di-import di sini
import { ExternalLink, Github, ArrowUpRight } from "lucide-react"; 
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
import { Code2 } from "lucide-react"; // Kita masih butuh Code2 untuk icon statis di "Engineering Challenge"

// IMPORT DATA DARI FILE BARU
import { projects } from "@/lib/data"; 

export function FeaturedProjects() {
  return (
    <section id="projects" className="relative pt-24 pb-16 overflow-hidden">
      
      {/* Background Blending */}
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
              <div className={`flex flex-col md:flex-row gap-8 lg:gap-12 items-center ${
                index % 2 === 1 ? "md:flex-row-reverse" : ""
              }`}>
                
                {/* Visual Side (Polished Mockup) */}
                <div className={`
                  relative w-full md:w-3/5 aspect-video 
                  rounded-2xl border border-border/50 bg-secondary/30 
                  overflow-hidden shadow-lg transition-all duration-500
                  ${project.border} group-hover:shadow-2xl
                `}>
                  
                  {/* Background Gradient Layer */}
                  <div className={`absolute inset-0 bg-linear-to-br ${project.gradient} opacity-20 group-hover:opacity-30 transition-opacity duration-500`} />

                  {/* Image Wrapper */}
                  <div className="absolute inset-4 md:inset-6 rounded-lg overflow-hidden shadow-xl bg-background group-hover:-translate-y-2 group-hover:scale-[1.02] transition-all duration-500 ease-out">
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

                {/* Content Side */}
                <div className="w-full md:w-2/5 space-y-6 flex flex-col justify-center">
                  <div className="space-y-2">
                    <div className="flex items-center gap-2 text-sm font-medium text-primary">
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