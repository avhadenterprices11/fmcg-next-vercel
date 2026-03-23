"use client";

import React from "react";
import { motion } from "framer-motion";
import { SEVORA_DATA } from "../data/sevora.data";
import { ArrowRight } from "lucide-react";

export function HowItWorks() {
  const { howItWorks } = SEVORA_DATA;

  return (
    <section className="py-24 md:py-32 bg-[#fafdfb] dark:bg-black/40 overflow-hidden border-y border-emerald-100/50 dark:border-emerald-900/20">
      <div className="container mx-auto px-6">
        <div className="text-center max-w-3xl mx-auto mb-20">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-sm font-bold text-emerald-600 uppercase tracking-[0.3em] mb-4"
          >
            Our Process
          </motion.h2>
          <motion.h3
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-4xl md:text-5xl font-serif font-medium leading-tight mb-6"
          >
            {howItWorks.title}
          </motion.h3>
        </div>

        <div className="relative">
          {/* Connecting Line (Desktop) */}
          <div className="hidden lg:block absolute top-1/2 left-0 w-full h-0.5 bg-linear-to-r from-transparent via-emerald-200 dark:via-emerald-900/50 to-transparent -translate-y-1/2" />

          <div className="grid grid-cols-1 md:grid-cols-3 gap-12 relative z-10">
            {howItWorks.steps.map((step, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.2 }}
                className="group flex flex-col items-center text-center space-y-6"
              >
                <div className="relative">
                  <div className="w-24 h-24 rounded-full bg-white dark:bg-zinc-900 border-2 border-emerald-500 flex items-center justify-center text-3xl font-serif text-emerald-600 shadow-xl shadow-emerald-500/10 group-hover:scale-110 transition-transform duration-500">
                    {i + 1}
                  </div>
                  {i < howItWorks.steps.length - 1 && (
                    <div className="lg:hidden absolute bottom-[-30px] left-1/2 -translate-x-1/2 text-emerald-300">
                      <ArrowRight className="w-6 h-6 rotate-90" />
                    </div>
                  )}
                </div>
                
                <div className="space-y-3">
                  <h4 className="text-xl font-bold font-serif italic text-foreground">{step.step}</h4>
                  <p className="text-muted-foreground leading-relaxed">
                    {step.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.8 }}
          className="mt-20 p-8 rounded-[3rem] bg-emerald-600 text-white text-center shadow-2xl shadow-emerald-600/20 max-w-4xl mx-auto"
        >
          <p className="text-xl md:text-2xl font-serif font-light leading-relaxed">
            {howItWorks.keyPoint}
          </p>
        </motion.div>
      </div>
    </section>
  );
}
