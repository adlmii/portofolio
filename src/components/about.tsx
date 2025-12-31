"use client";

import { motion, useMotionValue, useSpring, useTransform } from "framer-motion";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { Github, Linkedin } from "lucide-react"; // Update import icon
import { useRef } from "react";

export function About() {
  return (
    <section
      id="about"
      className="relative py-20 sm:py-24 overflow-hidden"
    >
      {/* ======================================================
          SMOOTH BACKGROUND
         ====================================================== */}
      <div className="absolute inset-0 -z-20 w-full h-full bg-linear-to-b from-background via-secondary/15 to-background" />

      {/* Subtle Dot Pattern */}
      <div className="absolute inset-0 -z-10 opacity-[0.03] dark:opacity-[0.05]"
           style={{
             backgroundImage: "radial-gradient(#a1a1aa 1px, transparent 1px)",
             backgroundSize: "24px 24px"
           }} 
      />

      <div className="absolute inset-0 pointer-events-none overflow-hidden -z-10">
        <div className="absolute top-1/2 left-0 w-96 h-96 bg-primary/10 rounded-full blur-[100px] -translate-y-1/2 -translate-x-1/2" />
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-blue-500/10 rounded-full blur-[100px] translate-y-1/3 translate-x-1/3" />
      </div>

      <div className="container px-4 md:px-6 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          
          {/* FOTO / CARD */}
          <motion.div
            initial={{ opacity: 0, x: -20, scale: 0.9 }}
            whileInView={{ opacity: 1, x: 0, scale: 1 }}
            viewport={{ once: false, amount: 0.3 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="order-1 flex justify-center lg:justify-end"
          >
            <TiltedCard />
          </motion.div>

          {/* TEXT CONTENT */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: false, amount: 0.3 }}
            transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
            className="order-2 max-w-xl mx-auto lg:mx-0 space-y-6 text-center lg:text-left"
          >
            <div className="space-y-2">
              <div className="flex items-center justify-center lg:justify-start gap-2 text-primary font-medium tracking-wide uppercase text-sm sm:text-base">
                <span className="w-8 h-0.5 bg-primary rounded-full" />
                <span>Hi, I&apos;m Aidil</span>
              </div>

              <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight">
                More than just{" "}
                <span className="text-transparent bg-clip-text bg-linear-to-r from-primary to-blue-500">
                  code
                </span>
              </h2>
            </div>

            <div className="space-y-4 text-muted-foreground text-base sm:text-lg leading-relaxed">
              <p>
                I build frontend with intention, focusing on how it behaves under
                real world pressure.
              </p>
              <p>
                Performance, accessibility, and decisions that only reveal their
                impact over time are the details I care about most.
              </p>
              <p>
                Away from the screen, I reset by writing and shaping ideas into
                something meaningful.
              </p>
            </div>

            {/* ===== BUTTONS AREA ===== */}
            <div className="pt-4 flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center lg:justify-start">
              
              {/* LinkedIn Button (Primary) */}
              <Button
                size="lg"
                className="rounded-full px-8 shadow-lg shadow-primary/20 hover:shadow-primary/40 transition-all"
                asChild
              >
                <a 
                  href="https://www.linkedin.com/in/aidil-fahmi"
                  target="_blank" 
                  rel="noopener noreferrer"
                >
                  <Linkedin className="mr-2 h-4 w-4" />
                  Connect on LinkedIn
                </a>
              </Button>

              {/* GitHub Button (Outline) */}
              <Button
                variant="outline"
                size="lg"
                className="rounded-full px-8 bg-background/50 backdrop-blur border-primary/20 hover:bg-secondary/50 transition-all"
                asChild
              >
                <a 
                  href="https://github.com/adlmii"
                  target="_blank" 
                  rel="noopener noreferrer"
                >
                  <Github className="mr-2 h-4 w-4" />
                  GitHub
                </a>
              </Button>

            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

function TiltedCard() {
  const ref = useRef<HTMLDivElement>(null);

  const x = useMotionValue(0);
  const y = useMotionValue(0);

  const mouseX = useSpring(x, { stiffness: 100, damping: 20 });
  const mouseY = useSpring(y, { stiffness: 100, damping: 20 });

  const rotateX = useTransform(mouseY, [-0.5, 0.5], ["10deg", "-10deg"]);
  const rotateY = useTransform(mouseX, [-0.5, 0.5], ["-10deg", "10deg"]);

  function handleMouseMove(e: React.MouseEvent<HTMLDivElement>) {
    if (!ref.current) return;
    const rect = ref.current.getBoundingClientRect();
    x.set((e.clientX - rect.left - rect.width / 2) / rect.width);
    y.set((e.clientY - rect.top - rect.height / 2) / rect.height);
  }

  function handleMouseLeave() {
    x.set(0);
    y.set(0);
  }

  return (
    <motion.div
      ref={ref}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      style={{ rotateX, rotateY, transformStyle: "preserve-3d" }}
      className="relative w-64 sm:w-72 aspect-3/4 cursor-grab active:cursor-grabbing perspective-1000"
    >
      <div
        style={{ transform: "translateZ(20px)" }}
        className="absolute inset-0 rounded-2xl bg-linear-to-br from-secondary/80 to-secondary/30 border border-white/10 shadow-2xl backdrop-blur-sm"
      >
        <div className="absolute inset-2 sm:inset-3 rounded-xl overflow-hidden bg-background border border-white/5">
            <Image
                src="/images/profile.jpg" 
                alt="Aidil Profile"
                fill
                className="object-cover scale-105 hover:scale-110 transition-transform duration-500"
            />
        </div>
      </div>

      <div 
         style={{ transform: "translateZ(-20px) rotate(-5deg)" }}
         className="absolute inset-0 rounded-2xl bg-primary/20 blur-sm -z-10"
      />
    </motion.div>
  );
}