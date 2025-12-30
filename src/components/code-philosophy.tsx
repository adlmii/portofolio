"use client";

import { motion } from "framer-motion";
import { Check, Terminal, Copy } from "lucide-react";

const principles = [
  {
    title: "Clean Architecture",
    description: "Business logic lives apart from UI components.",
    color: "bg-blue-500/10 text-blue-500",
  },
  {
    title: "Performance First",
    description: "Memoization patterns and efficient re-renders.",
    color: "bg-emerald-500/10 text-emerald-500",
  },
  {
    title: "Type Safety",
    description: "Strict TypeScript implementation to catch errors.",
    color: "bg-purple-500/10 text-purple-500",
  },
];

export function CodePhilosophy() {
  return (
    <section id="about" className="relative py-16 overflow-hidden">
      
      {/* Blending Layers - Optimized for contrast */}
      <div className="absolute top-0 left-0 right-0 h-px bg-linear-to-r from-transparent via-border to-transparent" />
      <div className="absolute inset-0 bg-linear-to-b from-primary/5 via-background to-background -z-20" />
      <div className="absolute inset-0 
        bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] 
        bg-size[24px_24px] 
        mask-[linear-gradient(to_bottom,transparent,black_20%,black_80%,transparent)] -z-10" 
      />

      <div className="container relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: false, amount: 0.5 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="space-y-8"
          >
            <div className="space-y-4">
              <h2 className="text-3xl font-bold tracking-tight">
                Code Philosophy
              </h2>
              <p className="text-muted-foreground text-lg leading-relaxed">
                I don't just write code that works. I write code that is 
                <span className="text-foreground font-semibold"> maintainable</span>, 
                <span className="text-foreground font-semibold"> scalable</span>, and 
                <span className="text-foreground font-semibold"> human-readable</span>.
              </p>
            </div>

            <div className="grid gap-4">
              {principles.map((item, index) => (
                <motion.div 
                  key={index}
                  whileHover={{ x: 10, backgroundColor: "rgba(var(--primary), 0.05)" }}
                  // UPDATED: Added solid border-border instead of transparent
                  className="flex gap-4 items-start p-4 rounded-xl border border-border bg-card/50 hover:border-primary/50 transition-colors cursor-default"
                >
                  <div className={`mt-1 p-2 rounded-lg ${item.color}`}>
                    <Check className="h-4 w-4" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-lg">{item.title}</h3>
                    <p className="text-sm text-muted-foreground">{item.description}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          <div className="relative perspective-1000">
            {/* Glow */}
            <div className="absolute inset-0 bg-linear-to-r from-blue-500/30 to-purple-600/30 blur-[60px] opacity-20 rounded-full" />
            
            <motion.div
              initial={{ opacity: 0, x: 30, rotateY: -10 }}
              whileInView={{ opacity: 1, x: 0, rotateY: 0 }}
              viewport={{ once: false, amount: 0.5 }}
              transition={{ duration: 1, ease: "easeOut" }}
              className="relative rounded-xl border border-border bg-[#09090b] shadow-2xl overflow-hidden animate-float"
            >

              <div className="flex items-center justify-between px-4 py-3 border-b border-white/10 bg-white/5">
                <div className="flex gap-1.5">
                  <div className="w-3 h-3 rounded-full bg-[#ff5f56]" />
                  <div className="w-3 h-3 rounded-full bg-[#ffbd2e]" />
                  <div className="w-3 h-3 rounded-full bg-[#27c93f]" />
                </div>
                <div className="text-xs text-muted-foreground font-mono flex items-center gap-2">
                  <Terminal className="h-3 w-3" />
                  useIntersection.ts
                </div>
                <Copy className="h-3 w-3 text-muted-foreground hover:text-white cursor-pointer transition-colors" />
              </div>

              <div className="p-6 overflow-x-auto font-mono text-sm leading-relaxed">
                <div className="text-gray-500 select-none float-left pr-4 text-right border-r border-gray-800 mr-4">
                  1<br/>2<br/>3<br/>4<br/>5<br/>6<br/>7<br/>8<br/>9<br/>10
                </div>
                <div className="text-blue-400">
                  <span className="text-purple-400">export function</span> <span className="text-yellow-300">useIntersection</span>(
                  <br/>
                  &nbsp;&nbsp;<span className="text-cyan-300">ref</span>: RefObject&lt;Element&gt;,
                  <br/>
                  &nbsp;&nbsp;<span className="text-cyan-300">options</span>: IntersectionObserverInit
                  <br/>
                  ) &#123;
                  <br/>
                  &nbsp;&nbsp;<span className="text-purple-400">const</span> [isIntersecting, set] = 
                  <span className="text-blue-300"> useState</span>(false);
                  <br/>
                  <br/>
                  &nbsp;&nbsp;<span className="text-purple-400">useEffect</span>(() =&gt; &#123;
                  <br/>
                  &nbsp;&nbsp;&nbsp;&nbsp;<span className="text-purple-400">const</span> observer = <span className="text-purple-400">new</span> IntersectionObserver...
                  <br/>
                  &nbsp;&nbsp;&nbsp;&nbsp;<span className="text-gray-500">// Efficient implementation</span>
                  <br/>
                  &nbsp;&nbsp;&nbsp;&nbsp;<span className="text-purple-400">return</span> () =&gt; observer.disconnect();
                  <br/>
                  &nbsp;&nbsp;&#125;, [ref, options]);
                  <br/>
                  <br/>
                  &nbsp;&nbsp;<span className="text-purple-400">return</span> isIntersecting;
                  <br/>
                  &#125;
                </div>
              </div>
            </motion.div>
          </div>

        </div>
      </div>
    </section>
  );
}