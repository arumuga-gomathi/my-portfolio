import { motion } from "framer-motion";
import type { ReactNode } from "react";

export function SectionHeading({ kicker, title, desc }: { kicker: string; title: string; desc?: string }) {
  return (
    <div className="mb-10 max-w-2xl">
      <p className="mb-2 font-mono text-xs font-semibold uppercase tracking-widest text-amber-600 dark:text-amber-400">{kicker}</p>
      <h2 className="text-3xl font-extrabold tracking-tight text-slate-900 sm:text-4xl dark:text-white">{title}</h2>
      {desc && <p className="mt-3 leading-relaxed text-slate-600 dark:text-slate-400">{desc}</p>}
    </div>
  );
}

export function Reveal({ children, delay = 0, className }: { children: ReactNode; delay?: number; className?: string }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-60px" }}
      transition={{ duration: 0.5, delay }}
      className={className}
    >
      {children}
    </motion.div>
  );
}
