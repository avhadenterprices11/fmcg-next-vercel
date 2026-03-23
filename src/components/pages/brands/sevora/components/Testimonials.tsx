"use client";

import React from "react";
import { motion } from "framer-motion";
import { SEVORA_DATA } from "../data/sevora.data";
import { Quote } from "lucide-react";

export function Testimonials() {
  const { testimonials } = SEVORA_DATA;

  return (
    <section id="testimonials" className="py-24 md:py-32 bg-[#fafdfb] dark:bg-black/40 overflow-hidden">
      <div className="container mx-auto px-6">
        <div className="text-center max-w-3xl mx-auto mb-16 md:mb-20">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-sm font-bold text-emerald-600 uppercase tracking-[0.3em] mb-4"
          >
            Social Proof
          </motion.h2>
          <motion.h3
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-4xl md:text-5xl font-serif font-medium leading-tight"
          >
            {testimonials.title}
          </motion.h3>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.items.map((item, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.2 }}
              className="p-10 rounded-[3rem] bg-white dark:bg-zinc-900 border border-border shadow-sm hover:shadow-xl transition-all duration-500 relative group"
            >
              <Quote className="absolute top-8 right-8 w-12 h-12 text-emerald-500/10 group-hover:text-emerald-500/20 transition-colors" />
              
              <p className="text-xl font-serif italic text-foreground mb-8 leading-relaxed relative z-10">
                "{item.quote}"
              </p>
              
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-full bg-emerald-100 dark:bg-emerald-900 flex items-center justify-center text-emerald-600 font-bold">
                  {item.author.charAt(0)}
                </div>
                <div>
                  <h4 className="font-bold text-foreground">{item.author}</h4>
                  <p className="text-sm text-muted-foreground uppercase tracking-widest font-medium">{item.role}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
