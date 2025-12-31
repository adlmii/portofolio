"use client";

import { motion, useMotionValue, useSpring, useTransform } from "framer-motion";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { useRef } from "react";

export function About() {
  return (
    <section
      id="about"
      className="bg-secondary/20 dark:bg-card/30 overflow-hidden"
    >
      <div className="container px-4 md:px-6 py-20 sm:py-24">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-start lg:items-center">
          <motion.div
            initial={{ opacity: 0, y: 24, scale: 0.96 }}
            whileInView={{ opacity: 1, y: 0, scale: 1 }}
            viewport={{ once: false, amount: 0.3 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            className="order-1 flex justify-center"
          >
            <TiltedCard />
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: false, amount: 0.3 }}
            transition={{ duration: 0.6, ease: "easeOut", delay: 0.1 }}
            className="order-2 max-w-prose mx-auto lg:mx-0 space-y-6 text-center lg:text-left"
          >
            <h2 className="text-2xl sm:text-4xl md:text-5xl font-bold leading-tight text-foreground">
              More than just <span className="text-primary">code</span>
            </h2>

            <p className="text-foreground text-base sm:text-lg font-medium leading-relaxed">
              I build frontend with intention, focusing on how it behaves under real world pressure.
            </p>

            <p className="text-muted-foreground text-base sm:text-lg leading-relaxed">
              Performance, accessibility, and decisions that only reveal their impact over time
              are the details I care about most.
            </p>

            <p className="text-muted-foreground text-base sm:text-lg leading-relaxed">
              Away from the screen, I reset by writing and shaping ideas into something meaningful.
            </p>

            <div className="pt-4 flex justify-center lg:justify-start">
              <Button
                variant="outline"
                size="lg"
                className="rounded-full px-8 border-border hover:bg-secondary"
              >
                Download CV
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

  const mouseX = useSpring(x, { stiffness: 150, damping: 15 });
  const mouseY = useSpring(y, { stiffness: 150, damping: 15 });

  const rotateX = useTransform(mouseY, [-0.5, 0.5], ["12deg", "-12deg"]);
  const rotateY = useTransform(mouseX, [-0.5, 0.5], ["-12deg", "12deg"]);

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
      className="relative w-full max-w-60 sm:max-w-sm aspect-4/5 cursor-pointer"
    >
      <div
        style={{ transform: "translateZ(40px)" }}
        className="absolute inset-4 sm:inset-6 rounded-2xl overflow-hidden
                   bg-white/50 dark:bg-white/5
                   border border-black/10 dark:border-white/10 shadow-xl"
      >
        <Image
          src="/images/profile.jpg"
          alt="Profile"
          fill
          className="object-cover"
        />
      </div>
    </motion.div>
  );
}
