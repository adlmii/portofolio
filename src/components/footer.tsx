"use client";

import { motion } from "framer-motion";
import { SiMedium } from "react-icons/si";
import { Github, Linkedin, Mail } from "lucide-react";
import Image from "next/image";

export function Footer() {
  const socialLinks = [
    { icon: Github, href: "https://github.com/adlmii", label: "GitHub" },
    {
      icon: Linkedin,
      href: "https://www.linkedin.com/in/aidil-fahmi",
      label: "LinkedIn",
    },
    { icon: Mail, href: "mailto:aidilfahmi601@gmail.com", label: "Email" },
    {
      icon: SiMedium,
      href: "https://medium.com/@aidilfahmi601",
      label: "Medium",
    },
  ];

  return (
    <footer className="relative border-t border-border/40 bg-background/80 backdrop-blur-xl">
      <div className="container pt-16 pb-8 md:pt-20 md:pb-12">
        {/* Konten Utama */}
        <div className="flex flex-col md:flex-row justify-between items-center md:items-start gap-12 text-center md:text-left">
          <div className="flex flex-col items-center md:items-start gap-6">
            <div className="flex items-center gap-4">
              <div className="relative h-12 w-12 md:h-14 md:w-14">
                <Image
                  src="/icon.png"
                  alt="logo"
                  fill
                  className="rounded-xl object-cover opacity-90 shadow-sm"
                  priority
                />
              </div>
              <div className="flex flex-col items-start">
                <span className="text-lg md:text-xl font-bold tracking-tight text-foreground">
                  Aidil Fahmi
                </span>
                <span className="text-sm md:text-base text-muted-foreground font-medium">
                  Frontend Engineer
                </span>
              </div>
            </div>
            
            <p className="text-base md:text-lg text-muted-foreground leading-relaxed max-w-100">
              Crafting frontend systems with a focus on performance,
              accessibility, and clean interaction.
            </p>
          </div>

          <div className="flex flex-col items-center md:items-end gap-6 w-full md:w-auto">
            <span className="text-sm md:text-base font-semibold text-foreground tracking-wide">
              Let's Connect
            </span>
            <div className="grid grid-cols-4 gap-3">
              {socialLinks.map((social, index) => (
                <motion.a
                  key={index}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={social.label}
                  whileHover={{ y: -4, scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="
                    p-4 md:p-3.5
                    rounded-2xl
                    bg-secondary/40
                    border border-border/40
                    text-muted-foreground
                    hover:text-foreground
                    hover:bg-secondary/60
                    transition-all
                    flex items-center justify-center
                  "
                >
                  <social.icon className="h-6 w-6 md:h-5 md:w-5" />
                </motion.a>
              ))}
            </div>
          </div>
        </div>

        <div className="mt-16 pt-8 border-t border-border/40 flex flex-col md:flex-row justify-between items-center gap-6">
          <div className="flex flex-col md:flex-row items-center gap-2 md:gap-4 text-center">
            <p className="text-sm md:text-base text-muted-foreground/80 font-medium">
              © {new Date().getFullYear()} Aidil Fahmi
            </p>
            <span className="hidden md:block text-muted-foreground/30">•</span>
            <p className="text-sm md:text-base text-muted-foreground/60">
              All rights reserved.
            </p>
          </div>
          
          <div className="flex items-center gap-2 px-4 py-1.5 rounded-full bg-secondary/30 border border-border/40">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-green-500"></span>
            </span>
            <span className="text-xs md:text-sm font-bold text-muted-foreground/80 uppercase tracking-widest">
              Indonesia
            </span>
          </div>
        </div>
      </div>
    </footer>
  );
}