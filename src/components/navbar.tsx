"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { Moon, Sun, Menu, X } from "lucide-react";
import { useTheme } from "next-themes";
import { Button } from "@/components/ui/button";
import { motion, AnimatePresence } from "framer-motion";
import { useScrollSpy } from "@/hooks/useScrollSpy";

const navLinks = [
  { name: "Home", href: "#hero" },
  { name: "About", href: "#about" },
  { name: "Tech", href: "#tech" },
  { name: "Work", href: "#projects" },
];

export function Navbar() {
  const { theme, setTheme } = useTheme();
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);
  const [mounted, setMounted] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const activeSection = useScrollSpy(
    navLinks.map((l) => l.href)
  );

  useEffect(() => setMounted(true), []);

  const isActive = (href: string) =>
    activeSection === href.replace("#", "");

  const handleLinkClick = (href: string) => {
    setMobileMenuOpen(false);
    const el = document.querySelector(href);
    el?.scrollIntoView({ behavior: "smooth" });
  };

  const menuVariants = {
    closed: {
      opacity: 0,
      scale: 0.95,
      y: -20,
      transition: { duration: 0.2 }
    },
    open: {
      opacity: 1,
      scale: 1,
      y: 0,
      transition: { duration: 0.2 }
    }
  };

  return (
    <>
      <div className="fixed top-4 right-4 z-50 md:hidden flex gap-2">
        {/* Tombol Toggle Menu */}
        <Button
          variant="ghost"
          size="icon"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          className="rounded-full h-10 w-10 bg-background/80 backdrop-blur-xl border shadow-lg"
        >
          <AnimatePresence mode="wait">
            {mobileMenuOpen ? (
              <motion.div
                key="close"
                initial={{ rotate: -90, opacity: 0 }}
                animate={{ rotate: 0, opacity: 1 }}
                exit={{ rotate: 90, opacity: 0 }}
              >
                <X className="h-5 w-5" />
              </motion.div>
            ) : (
              <motion.div
                key="menu"
                initial={{ rotate: 90, opacity: 0 }}
                animate={{ rotate: 0, opacity: 1 }}
                exit={{ rotate: -90, opacity: 0 }}
              >
                <Menu className="h-5 w-5" />
              </motion.div>
            )}
          </AnimatePresence>
        </Button>
      </div>

      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial="closed"
            animate="open"
            exit="closed"
            variants={menuVariants}
            className="fixed inset-x-4 top-20 z-40 p-4 rounded-2xl bg-card/90 backdrop-blur-xl border border-border shadow-2xl md:hidden flex flex-col gap-4"
          >
            <div className="flex flex-col gap-2">
              {navLinks.map((link) => {
                 const active = isActive(link.href);
                 return (
                  <Link
                    key={link.name}
                    href={link.href}
                    onClick={(e) => {
                      e.preventDefault();
                      handleLinkClick(link.href);
                    }}
                    className={`
                      px-4 py-3 rounded-xl text-sm font-medium transition-colors
                      ${active 
                        ? "bg-primary/10 text-primary" 
                        : "hover:bg-muted text-muted-foreground hover:text-foreground"}
                    `}
                  >
                    {link.name}
                  </Link>
                );
              })}
            </div>

            <div className="h-px bg-border/50" />
            <div className="flex items-center justify-between px-4 py-2">
              <span className="text-sm font-medium text-muted-foreground">Appearance</span>
              <Button
                variant="ghost"
                size="icon"
                onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
                className="rounded-full h-9 w-9 bg-background border"
              >
                {mounted && (
                  theme === "dark" ? <Moon className="h-4 w-4" /> : <Sun className="h-4 w-4" />
                )}
              </Button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      <motion.nav
        initial={{ y: -100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.5 }}
        className="hidden md:block fixed top-4 left-1/2 -translate-x-1/2 z-50 bg-background/80 backdrop-blur-xl border rounded-full px-2 py-2 shadow-lg"
      >
        <div className="flex gap-1 items-center">
          {navLinks.map((link, index) => {
            const active = isActive(link.href);

            return (
              <Link
                key={link.name}
                href={link.href}
                onClick={(e) => {
                  e.preventDefault();
                  handleLinkClick(link.href);
                }}
                className="relative px-5 py-2 text-sm font-medium rounded-full"
                onMouseEnter={() => setHoveredIndex(index)}
                onMouseLeave={() => setHoveredIndex(null)}
              >
                <span
                  className={`relative z-10 transition-colors ${
                    active
                      ? "text-background font-semibold"
                      : "text-muted-foreground hover:text-foreground"
                  }`}
                >
                  {link.name}
                </span>

                {active && (
                  <motion.div
                    layoutId="activeSection"
                    className="absolute inset-0 rounded-full bg-foreground"
                    transition={{
                      type: "spring",
                      bounce: 0.2,
                      duration: 0.6,
                    }}
                  />
                )}

                <AnimatePresence>
                  {hoveredIndex === index && !active && (
                    <motion.span
                      className="absolute inset-0 rounded-full bg-muted/50"
                      initial={{ opacity: 0, scale: 0.8 }}
                      animate={{ opacity: 1, scale: 1 }}
                      exit={{ opacity: 0, scale: 0.8 }}
                      transition={{
                        type: "spring",
                        bounce: 0.2,
                        duration: 0.3,
                      }}
                    />
                  )}
                </AnimatePresence>
              </Link>
            );
          })}
        </div>
      </motion.nav>
      <div className="hidden md:block fixed top-4 right-4 z-50">
        <Button
          variant="ghost"
          size="icon"
          onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
          className="rounded-full h-10 w-10 bg-background/80 backdrop-blur-xl border shadow-lg relative"
        >
          {mounted && (
            <>
              <motion.div
                animate={{
                  rotate: theme === "dark" ? 0 : 180,
                  scale: theme === "dark" ? 1 : 0,
                }}
              >
                <Moon className="h-4 w-4" />
              </motion.div>
              <motion.div
                animate={{
                  rotate: theme === "dark" ? -180 : 0,
                  scale: theme === "dark" ? 0 : 1,
                }}
                className="absolute"
              >
                <Sun className="h-4 w-4" />
              </motion.div>
            </>
          )}
        </Button>
      </div>
    </>
  );
}