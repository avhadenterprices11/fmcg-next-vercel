"use client";

import React from "react";
import { motion } from "framer-motion";
import { SEVORA_DATA } from "../data/sevora.data";
import * as LucideIcons from "lucide-react";

export function SevoraBenefits() {
  const { benefits } = SEVORA_DATA;

  return (
    <section id="benefits" className="py-24 md:py-32 bg-white dark:bg-[#050a08] overflow-hidden">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-8 mb-20">
          <div className="max-w-2xl">
            <motion.h2
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="text-sm font-bold text-emerald-600 uppercase tracking-[0.3em] mb-4"
            >
              Why Choose Sevora
            </motion.h2>
            <motion.h3
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="text-4xl md:text-5xl font-serif font-medium leading-tight"
            >
              The Modern Standards Of Healthy Sweetness
            </motion.h3>
          </div>
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="hidden md:flex flex-col items-center"
          >
            <span className="text-[10px] font-bold uppercase tracking-widest text-muted-foreground vertical-text mb-4">Pure Nature</span>
            <div className="w-[1px] h-20 bg-emerald-500/30" />
          </motion.div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          {benefits.items.map((benefit, i) => {
            // Dynamic Icon selection
            const IconComponent = (LucideIcons as any)[benefit.icon.charAt(0).toUpperCase() + benefit.icon.slice(1).replace(/-([a-z])/g, (_: any, c: string) => c.toUpperCase())] || LucideIcons.Zap;
            
            return (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="p-8 md:p-10 rounded-[2.5rem] bg-zinc-50 dark:bg-zinc-900 border border-border hover:border-emerald-500/30 transition-all duration-500 group shadow-sm hover:shadow-xl hover:shadow-emerald-500/5 hover:-translate-y-1"
              >
                <div className="w-14 h-14 rounded-2xl bg-white dark:bg-black border border-border flex items-center justify-center text-emerald-500 mb-8 transition-transform duration-500 group-hover:scale-110 group-hover:bg-emerald-500 group-hover:text-white shadow-sm">
                  <IconComponent className="w-7 h-7" />
                </div>
                
                <h4 className="text-xl font-bold text-foreground mb-4 group-hover:text-emerald-600 transition-colors">
                  {benefit.title}
                </h4>
                <p className="text-muted-foreground leading-relaxed font-light first-letter:uppercase">
                  {benefit.description}
                </p>
              </motion.div>
            );
          })}
        </div>
      </div>

      <style jsx>{`
        .vertical-text {
          writing-mode: vertical-rl;
          text-orientation: mixed;
        }
      `}</style>
    </section>
  );
}
