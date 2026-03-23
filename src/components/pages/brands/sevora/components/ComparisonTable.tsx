"use client";

import React from "react";
import { motion } from "framer-motion";
import { SEVORA_DATA } from "../data/sevora.data";
import { Check, X } from "lucide-react";

export function ComparisonTable() {
  const { comparison } = SEVORA_DATA;

  return (
    <section className="py-24 md:py-32 bg-white dark:bg-[#050a08] overflow-hidden">
      <div className="container mx-auto px-6">
        <div className="text-center max-w-3xl mx-auto mb-16 md:mb-20">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-sm font-bold text-emerald-600 uppercase tracking-[0.3em] mb-4"
          >
            The Better Choice
          </motion.h2>
          <motion.h3
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-4xl md:text-5xl font-serif font-medium leading-tight"
          >
            {comparison.title}
          </motion.h3>
        </div>

        <div className="max-w-4xl mx-auto">
          {/* Table Header */}
          <div className="grid grid-cols-[1.5fr,1fr,1fr] gap-4 mb-4 items-center">
            <div className="px-6 py-4"></div>
            <div className="px-6 py-4 text-center font-bold text-zinc-400 uppercase tracking-widest text-xs">Sugar</div>
            <div className="px-6 py-8 text-center bg-emerald-600 text-white rounded-t-3xl font-bold uppercase tracking-widest text-sm shadow-xl shadow-emerald-600/20">Sevora</div>
          </div>

          {/* Table Body */}
          <div className="bg-zinc-50 dark:bg-zinc-900/50 rounded-b-3xl border border-border overflow-hidden">
            {comparison.features.map((feature, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className={`grid grid-cols-[1.5fr,1fr,1fr] gap-4 items-center ${
                  i !== comparison.features.length - 1 ? 'border-b border-border' : ''
                }`}
              >
                <div className="px-6 py-6 font-medium text-foreground">{feature.name}</div>
                <div className="px-6 py-6 text-center text-muted-foreground flex justify-center">
                  {feature.sugar === "No" ? <X className="w-5 h-5 text-red-400" /> : feature.sugar}
                </div>
                <div className="px-6 py-6 text-center bg-emerald-500/5 dark:bg-emerald-500/10 flex justify-center items-center">
                  <span className="font-bold text-emerald-600 flex items-center gap-2">
                    {feature.sevora === "Yes" ? <Check className="w-5 h-5 text-emerald-500" /> : feature.sevora}
                  </span>
                </div>
              </motion.div>
            ))}
          </div>

          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.5 }}
            className="mt-12 text-center text-xl font-serif italic text-muted-foreground"
          >
            "{comparison.highlight}"
          </motion.p>
        </div>
      </div>
    </section>
  );
}
