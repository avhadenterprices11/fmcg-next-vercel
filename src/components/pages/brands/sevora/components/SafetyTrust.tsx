"use client";

import React from "react";
import { motion } from "framer-motion";
import { SEVORA_DATA } from "../data/sevora.data";
import { ShieldCheck, Award, Microscope } from "lucide-react";

export function SafetyTrust() {
  const { safety } = SEVORA_DATA;

  return (
    <section id="safety" className="py-24 bg-white dark:bg-[#050a08] overflow-hidden border-y border-border">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div>
            <motion.h2
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="text-sm font-bold text-emerald-600 uppercase tracking-[0.3em] mb-4"
            >
              Trust & Quality
            </motion.h2>
            <motion.h3
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="text-4xl md:text-5xl font-serif font-medium leading-tight mb-8"
            >
              {safety.title}
            </motion.h3>
            
            <div className="space-y-6">
              {safety.points.map((point, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1 + 0.2 }}
                  className="flex items-center gap-4 group"
                >
                  <div className="w-10 h-10 rounded-full bg-emerald-50 dark:bg-emerald-900/20 flex items-center justify-center text-emerald-600 group-hover:bg-emerald-500 group-hover:text-white transition-colors shadow-sm">
                    {i === 0 ? <Award className="w-5 h-5" /> : i === 1 ? <Microscope className="w-5 h-5" /> : <ShieldCheck className="w-5 h-5" />}
                  </div>
                  <span className="text-lg font-medium text-foreground">{point}</span>
                </motion.div>
              ))}
            </div>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-3 gap-6">
            {safety.badges.map((badge, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 + 0.5 }}
                className="flex flex-col items-center justify-center p-8 rounded-[2.5rem] bg-zinc-50 dark:bg-zinc-900 border border-border text-center group hover:bg-emerald-50 dark:hover:bg-emerald-900/10 transition-colors"
              >
                <div className="w-16 h-16 rounded-full bg-white dark:bg-black border border-border mb-4 flex items-center justify-center shadow-sm group-hover:scale-110 transition-transform">
                   {/* Simplified Badge Icon */}
                   <ShieldCheck className="w-8 h-8 text-emerald-500" />
                </div>
                <p className="text-xs font-bold uppercase tracking-widest text-foreground">{badge}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
