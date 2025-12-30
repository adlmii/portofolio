"use client";

import { motion } from "framer-motion";
import { Github, Linkedin, Mail } from "lucide-react";

export function Footer() {
  const socialLinks = [
    { icon: Github, href: "https://github.com/adlmii", label: "GitHub" },
    { icon: Linkedin, href: "www.linkedin.com/in/aidil-fahmi", label: "LinkedIn" },
    { icon: Mail, href: "mailto:aidilfahmi601@gmail.com", label: "Email" },
  ];

  return (
    <footer className="border-t border-border/40 bg-background/50 backdrop-blur-xl">
      <div className="container pt-24 pb-16 md:py-16">
        <div className="flex flex-col md:flex-row justify-between items-center gap-8">
          
          <div className="flex flex-col items-center md:items-start gap-2">
            <span className="text-2xl font-bold font-mono tracking-tighter text-foreground">
              [NA]
            </span>
            <p className="text-sm text-muted-foreground text-center md:text-left max-w-75">
              Crafting digital experiences with a focus on performance and accessibility.
            </p>
          </div>

          <div className="flex gap-4">
            {socialLinks.map((social, index) => (
              <motion.a
                key={index}
                href={social.href}
                whileHover={{ y: -5, scale: 1.1 }}
                whileTap={{ scale: 0.95 }}
                className="p-3 rounded-full bg-secondary/50 hover:bg-primary/20 hover:text-primary transition-colors border border-transparent hover:border-primary/20"
                aria-label={social.label}
              >
                <social.icon className="h-5 w-5" />
              </motion.a>
            ))}
          </div>
          
        </div>
        
        <div className="mt-12 flex flex-col md:flex-row justify-between items-center gap-4 text-xs text-muted-foreground border-t border-border/40 pt-8">
          <p>&copy; {new Date().getFullYear()} Aidil Fahmi. All rights reserved.</p>
          <div className="flex gap-4">
            <span className="hover:text-foreground transition-colors cursor-pointer">Privacy Policy</span>
            <span className="hover:text-foreground transition-colors cursor-pointer">Terms of Service</span>
          </div>
        </div>
      </div>
    </footer>
  );
}