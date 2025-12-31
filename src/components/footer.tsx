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
      <div className="container pt-24 pb-10 md:py-16">
        {/* TOP */}
        <div className="flex flex-col md:flex-row justify-between items-center gap-10">
          {/* LEFT */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="flex flex-col gap-4 max-w-sm text-center md:text-left"
          >
            <div className="inline-flex items-center gap-3 justify-center md:justify-start">
              <div className="p-2 rounded-xl bg-secondary/40 border border-border/40">
                <Image
                  src="/images/logo.png"
                  alt="logo"
                  width={36}
                  height={36}
                  className="rounded-md opacity-90"
                  priority
                />
              </div>
              <span className="text-sm font-semibold tracking-tight">
                Aidil Fahmi
              </span>
            </div>

            <p className="text-sm text-muted-foreground leading-relaxed">
              Crafting frontend systems with a focus on performance,
              accessibility, and clean interaction.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="flex gap-3"
          >
            {socialLinks.map((social, index) => (
              <motion.a
                key={index}
                href={social.href}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={social.label}
                whileHover={{ y: -4, scale: 1.08 }}
                whileTap={{ scale: 0.95 }}
                className="
                  p-3 rounded-full
                  bg-secondary/40
                  backdrop-blur-xl
                  border border-border/40
                  text-muted-foreground
                  hover:text-foreground
                  hover:bg-secondary/60
                  transition-colors
                "
              >
                <social.icon className="h-5 w-5" />
              </motion.a>
            ))}
          </motion.div>
        </div>

        <div className="mt-12 pt-6 border-t border-border/40 text-center text-xs text-muted-foreground">
          © {new Date().getFullYear()} Aidil Fahmi. All rights reserved.
        </div>
      </div>
    </footer>
  );
}