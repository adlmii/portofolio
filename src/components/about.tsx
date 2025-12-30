"use client";

import { motion, useMotionValue, useSpring, useTransform } from "framer-motion";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { useRef } from "react";

export function About() {
  return (
    <section id="about" className="container py-24 px-4 md:px-6 bg-background overflow-hidden">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
        
        <motion.div
          initial={{ opacity: 0, x: -50 }} 
          whileInView={{ opacity: 1, x: 0 }} 
          // viewport={{ once: true }}
          viewport={{ once: false, amount: 0.3 }}
          transition={{ duration: 0.6, ease: "easeOut" }} 
          className="space-y-6 order-2 lg:order-1"
        >
          <h2 className="text-3xl md:text-5xl font-bold leading-tight text-foreground">
            More than just <span className="text-primary">code</span>.
          </h2>
          
          <p className="text-muted-foreground text-lg leading-relaxed">
            I specialize in bridging the gap between design and engineering. 
            While I love a clean UI, my true passion lies in what happens under the hood—
            <strong>optimizing render patterns</strong>, ensuring <strong>100% accessibility</strong>, 
            and architecting scalable frontends.
          </p>

          <p className="text-muted-foreground text-lg leading-relaxed">
            When I'm not debugging hydration errors, you'll find me exploring new 
            coffee shops or curating my digital garden.
          </p>

          <div className="pt-4">
            <Button variant="outline" size="lg" className="rounded-full px-8 border-border hover:bg-secondary">
              Download CV
            </Button>
          </div>
        </motion.div>

        <motion.div 
          initial={{ opacity: 0, x: 50 }} 
          whileInView={{ opacity: 1, x: 0 }} 
          viewport={{ once: false, amount: 0.3 }}
          transition={{ duration: 0.6, ease: "easeOut", delay: 0.2 }} // Delay dikit biar manis
          className="flex justify-center lg:justify-center items-center order-1 lg:order-2"
        >
           <TiltedCard />
        </motion.div>

      </div>
    </section>
  );
}

function TiltedCard() {
  const ref = useRef<HTMLDivElement>(null);
  
  // Setup Motion Values untuk interaksi Mouse Hover saja
  const x = useMotionValue(0);
  const y = useMotionValue(0);

  const mouseX = useSpring(x, { stiffness: 150, damping: 15 });
  const mouseY = useSpring(y, { stiffness: 150, damping: 15 });

  const rotateX = useTransform(mouseY, [-0.5, 0.5], ["15deg", "-15deg"]);
  const rotateY = useTransform(mouseX, [-0.5, 0.5], ["-15deg", "15deg"]);

  const sheenGradient = useTransform(
    mouseX,
    [-0.5, 0.5],
    [
      "linear-gradient(to right, transparent 0%, rgba(255,255,255,0) 100%)",
      "linear-gradient(to right, transparent 0%, rgba(255,255,255,0.1) 100%)"
    ]
  );

  function handleMouseMove(e: React.MouseEvent<HTMLDivElement>) {
    if (!ref.current) return;
    const rect = ref.current.getBoundingClientRect();
    const width = rect.width;
    const height = rect.height;
    const mouseXFromCenter = e.clientX - rect.left - width / 2;
    const mouseYFromCenter = e.clientY - rect.top - height / 2;
    x.set(mouseXFromCenter / width);
    y.set(mouseYFromCenter / height);
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
      style={{
        rotateX,
        rotateY,
        transformStyle: "preserve-3d",
      }}
      className="relative w-full max-w-100 aspect-4/5 sm:aspect-3/4 cursor-pointer"
    >
      <div 
        style={{ transform: "translateZ(50px)" }} 
        className="absolute inset-4 sm:inset-6 rounded-2xl shadow-2xl overflow-hidden
                   backdrop-blur-md
                   bg-white/50 dark:bg-white/5 
                   border border-black/10 dark:border-white/10"
      >
        <Image
          src="/images/profile.jpg" 
          alt="Profile"
          fill
          className="object-cover object-center transition-all duration-500" 
        />
        <div className="absolute inset-0 bg-linear-to-t from-black/40 to-transparent opacity-60 pointer-events-none" />
        <motion.div 
           style={{ background: sheenGradient }}
           className="absolute inset-0 pointer-events-none z-20"
        />
      </div>

      <div 
        style={{ transform: "translateZ(20px)" }}
        className="absolute inset-0 rounded-3xl -z-10
                   border-2 
                   border-black/5 dark:border-white/5"
      />
      
      <div 
        style={{ transform: "translateZ(0px)" }}
        className="absolute inset-10 bg-primary/20 blur-[80px] rounded-full -z-20 opacity-40 animate-pulse" 
      />
    </motion.div>
  );
}