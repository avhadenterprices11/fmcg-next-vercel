"use client";

import React from "react";
import { motion } from "framer-motion";
import { SEVORA_DATA } from "../data/sevora.data";
import { AlertCircle, ArrowDown } from "lucide-react";

export function SugarProblem() {
  const { problem } = SEVORA_DATA;

  return (
    <section className="py-24 md:py-32 bg-zinc-950 text-white overflow-hidden relative">
      {/* Abstract Red Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-red-900/10 rounded-full blur-[150px] pointer-events-none" />

      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-4xl mx-auto text-center mb-16 md:mb-24">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-2 text-red-500 font-bold uppercase tracking-[0.3em] text-xs mb-6"
          >
            <AlertCircle className="w-4 h-4" />
            <span>The Hidden Reality</span>
          </motion.div>
          
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-4xl md:text-6xl font-serif font-medium leading-[1.1] mb-8"
          >
            {problem.title}
          </motion.h2>
          
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-xl md:text-2xl text-zinc-400 font-light"
          >
            Sugar consumption is at an all-time high, leading to a global health crisis.
          </motion.p>
        </div>

        {/* Problem Points Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-24">
          {problem.points.map((point, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 + 0.3 }}
              className="p-8 rounded-3xl bg-zinc-900/50 border border-zinc-800 hover:border-red-900/30 transition-colors group"
            >
              <h3 className="text-xl font-bold mb-4 group-hover:text-red-500 transition-colors">{point.title}</h3>
              <p className="text-zinc-500 leading-relaxed italic">
                {point.description}
              </p>
            </motion.div>
          ))}
        </div>

        {/* Stats Section */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 items-center border-y border-zinc-800 py-12">
          {problem.stats.map((stat, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.2 + 0.5 }}
              className="text-center"
            >
              <p className="text-3xl font-serif text-red-100 mb-2">
                {stat.split(" ").map((w, j) => isNaN(parseInt(w)) ? w + " " : <span key={j} className="text-red-500 font-bold">{w} </span>)}
              </p>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          className="mt-24 text-center"
        >
          <p className="text-xl md:text-3xl font-serif italic text-emerald-500/80 mb-8">
            "{problem.transition}"
          </p>
          <motion.div
            animate={{ y: [0, 10, 0] }}
            transition={{ duration: 2, repeat: Infinity }}
            className="inline-flex flex-col items-center gap-2 text-zinc-500"
          >
            <span className="text-[10px] uppercase tracking-[0.4em]">Scroll for solution</span>
            <ArrowDown className="w-4 h-4" />
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
