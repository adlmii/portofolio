"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { ArrowDown } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useRef } from "react";
import { Squares } from "@/components/ui/squares";

export function Hero() {
  const ref = useRef(null);
  
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  });

  const y = useTransform(scrollYProgress, [0, 1], ["0%", "50%"]); 
  const opacity = useTransform(scrollYProgress, [0, 0.5], [1, 0]);

  return (
    <section ref={ref} className="relative h-[90vh] flex flex-col items-center justify-center overflow-hidden bg-background">
      
      {/* Background Layers - Updated with Squares */}
      <div className="absolute inset-0 w-full h-full z-0">
         {/* Tambahkan Squares di sini */}
         <Squares 
            direction="diagonal"
            speed={0.5}
            squareSize={40}
            borderColor="#333" 
            hoverFillColor="#222"
            className="opacity-20 w-full h-full absolute inset-0"
        />
        
        {/* Radial Gradient Overlay untuk membuat tengahnya lebih terang/fokus */}
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_80%_80%_at_50%_-20%,rgba(120,119,198,0.15),transparent)] pointer-events-none" />
        
        {/* Fade to bottom */}
        <div className="absolute bottom-0 left-0 right-0 h-32 bg-linear-to-t from-background to-transparent pointer-events-none" />
      </div>

      <motion.div 
        style={{ y, opacity }}
        className="container px-4 md:px-6 text-center z-10 relative pointer-events-none" // pointer-events-none agar mouse bisa tembus ke Squares, tapi button harus di-enable ulang
      >
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="space-y-4"
        >
          <div className="inline-block rounded-full bg-secondary px-4 py-1.5 text-sm font-medium text-primary mb-4 border border-border shadow-xs pointer-events-auto">
            Frontend Engineer & UI Designer
          </div>
          
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold tracking-tight text-foreground max-w-4xl mx-auto leading-[1.1]">
            Crafting pixel-perfect, <br className="hidden md:block" />
            <span className="text-transparent bg-clip-text bg-linear-to-r from-primary to-blue-600">
              interactive interfaces.
            </span>
          </h1>

          <p className="mx-auto max-w-175 text-muted-foreground md:text-xl leading-relaxed pt-4">
            I'm a Frontend Specialist passionate about Performance, Accessibility, 
            and Clean Architecture. Building the web, one component at a time.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4, duration: 0.8, ease: "easeOut" }}
          className="mt-8 flex flex-col sm:flex-row justify-center gap-4 pointer-events-auto" // Enable pointer events for buttons
        >
          <Button size="lg" className="rounded-full px-8 text-lg h-12 shadow-md hover:shadow-lg transition-all" asChild>
            <a href="#projects">Lihat Project</a>
          </Button>
          <Button variant="outline" size="lg" className="rounded-full px-8 text-lg h-12 bg-background border-border hover:bg-secondary/80 hover:text-foreground" asChild>
             <a href="https://github.com/adlmii" target="_blank" rel="noopener noreferrer">GitHub Profile</a>
          </Button>
        </motion.div>
      </motion.div>

      <motion.div
        style={{ opacity: useTransform(scrollYProgress, [0, 0.2], [1, 0]) }}
        animate={{ y: [0, 10, 0] }}
        transition={{ duration: 2.5, repeat: Infinity, ease: "easeInOut" }}
        className="absolute bottom-10 z-10 pointer-events-none"
      >
        <ArrowDown className="text-muted-foreground h-6 w-6" />
      </motion.div>
    </section>
  );
}