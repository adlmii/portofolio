"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { Moon, Sun } from "lucide-react";
import { useTheme } from "next-themes";
import { Button } from "@/components/ui/button";
import { motion, AnimatePresence } from "framer-motion";

const navLinks = [
  { name: "Work", href: "#projects" },
  { name: "Tech", href: "#tech" },
  { name: "About", href: "#about" },
  { name: "Contact", href: "mailto:email@example.com" },
];

export function Navbar() {
  const { theme, setTheme } = useTheme();
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  return (
    <motion.nav
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.5 }}
      className="sticky top-0 z-50 w-full border-b border-border/40 bg-background/80 backdrop-blur-md"
    >
      <div className="container flex h-16 items-center justify-between px-4 md:px-8">
        {/* Logo / Inisial */}
        <Link href="/" className="mr-6 flex items-center space-x-2 group">
          <motion.div
            whileHover={{ scale: 1.1, rotate: 5 }}
            whileTap={{ scale: 0.9 }}
            className="h-8 w-8 bg-primary rounded-lg flex items-center justify-center text-primary-foreground font-bold font-mono shadow-lg shadow-primary/20"
          >
            NA
          </motion.div>
          <span className="text-lg font-bold font-mono tracking-tighter group-hover:text-primary transition-colors">
            Portfolio
          </span>
        </Link>

        {/* Desktop Links */}
        <div className="hidden md:flex gap-2 items-center">
          {navLinks.map((link, index) => (
            <Link
              key={link.name}
              href={link.href}
              className="relative px-4 py-2 text-sm font-medium text-muted-foreground transition-colors hover:text-foreground"
              onMouseEnter={() => setHoveredIndex(index)}
              onMouseLeave={() => setHoveredIndex(null)}
            >
              <span className="relative z-10">{link.name}</span>
              <AnimatePresence>
                {hoveredIndex === index && (
                  <motion.span
                    className="absolute inset-0 rounded-full bg-primary/10"
                    layoutId="hoverBackground"
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 0.8 }}
                    transition={{ type: "spring", bounce: 0.2, duration: 0.3 }}
                  />
                )}
              </AnimatePresence>
            </Link>
          ))}
        </div>

        <Button
          variant="ghost"
          size="icon"
          onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
          className="rounded-full relative overflow-hidden hover:bg-primary/10 hover:text-primary"
        >
          {mounted ? (
            <>
              <motion.div
                initial={false}
                animate={{ rotate: theme === "dark" ? 0 : 180, scale: theme === "dark" ? 1 : 0 }}
                transition={{ duration: 0.3 }}
                className="absolute"
              >
                <Moon className="h-[1.2rem] w-[1.2rem]" />
              </motion.div>
              <motion.div
                initial={false}
                animate={{ rotate: theme === "dark" ? -180 : 0, scale: theme === "dark" ? 0 : 1 }}
                transition={{ duration: 0.3 }}
                className="absolute"
              >
                <Sun className="h-[1.2rem] w-[1.2rem]" />
              </motion.div>
            </>
          ) : (
            <span className="h-[1.2rem] w-[1.2rem]" />
          )}
          <span className="sr-only">Toggle theme</span>
        </Button>
      </div>
    </motion.nav>
  );
}