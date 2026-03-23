"use client";

import React from "react";
import { motion } from "framer-motion";
import { SEVORA_DATA } from "../data/sevora.data";
import { AlertCircle, ShieldAlert, Heart, Zap, Droplets } from "lucide-react";

export function SugarProblem() {
  const { problem } = SEVORA_DATA;
  const icons = [ShieldAlert, Heart, Zap, Droplets];

  return (
    <section id="problem" className="py-24 md:py-48 bg-[#020504] text-white overflow-hidden relative">
      {/* Subtle Background Ambience */}
      <div className="absolute top-0 left-0 w-full h-full pointer-events-none opacity-10">
          <div className="absolute top-1/4 left-1/4 w-[60vw] h-[60vw] bg-rose-500/10 blur-[150px] rounded-full" />
          <div className="absolute bottom-1/4 right-1/4 w-[50vw] h-[50vw] bg-zinc-500/5 blur-[120px] rounded-full" />
      </div>

      <div className="container mx-auto px-6 relative z-10">
        
        {/* Simple & Impactful Header */}
        <div className="max-w-4xl mb-24 md:mb-40">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="inline-flex items-center gap-3 mb-8 px-5 py-2 rounded-full bg-rose-500/10 border border-rose-500/20 shadow-2xl"
            >
                <AlertCircle className="w-4 h-4 text-rose-500" />
                <span className="text-[10px] font-black uppercase tracking-[0.5em] text-rose-500">The Problem</span>
            </motion.div>
            
            <motion.h2 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-6xl md:text-9xl font-serif font-medium leading-[0.85] tracking-tighter mb-12"
            >
              {problem.title}
            </motion.h2>
            
            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="text-xl md:text-3xl text-zinc-500 font-light italic leading-tight max-w-2xl opacity-80"
            >
              Modern excess carries a hidden price. Processed sugar transforms your biology in ways you can't always see.
            </motion.p>
        </div>

        {/* Clean 2-Column Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12 mb-32">
            {problem.points.map((point, i) => {
                const Icon = icons[i % icons.length];
                return (
                    <motion.div
                      key={i}
                      initial={{ opacity: 0, y: 30 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: i * 0.1 }}
                      className="group relative p-12 lg:p-16 rounded-[4rem] bg-zinc-900/30 border border-white/5 hover:border-rose-500/30 transition-all duration-700 overflow-hidden backdrop-blur-3xl"
                    >
                        <div className="w-16 h-16 rounded-2xl bg-rose-500/10 text-rose-500 flex items-center justify-center mb-10 group-hover:bg-rose-500 group-hover:text-black transition-all duration-700">
                            <Icon className="w-8 h-8" />
                        </div>
                        
                        <h3 className="text-3xl md:text-5xl font-serif font-bold text-white mb-6 tracking-tighter group-hover:text-rose-400 transition-colors">
                            {point.title}
                        </h3>
                        <p className="text-zinc-500 text-lg md:text-2xl font-light italic opacity-80 leading-relaxed">
                            {point.description}
                        </p>

                        {/* Subtle Card Accent */}
                        <div className="absolute top-10 right-10 opacity-5 group-hover:opacity-20 transition-opacity">
                             <Icon className="w-20 h-20 text-rose-500" />
                        </div>
                    </motion.div>
                );
            })}
        </div>

        {/* Minimalist Stats Bar */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 bg-white/5 rounded-[4rem] p-12 md:p-20 border border-white/5">
             {problem.stats.map((stat, i) => (
                 <motion.div 
                   key={i} 
                   initial={{ opacity: 0, scale: 0.95 }}
                   whileInView={{ opacity: 1, scale: 1 }}
                   viewport={{ once: true }}
                   transition={{ delay: i * 0.1 + 0.5 }}
                   className="text-center group"
                 >
                      <p className="text-rose-500/40 text-[9px] font-black uppercase tracking-[0.5em] mb-4 group-hover:text-rose-500 transition-colors">Safety Metric 0{i + 1}</p>
                      <p className="text-2xl md:text-3xl font-serif font-bold text-zinc-300 leading-tight">
                        {stat}
                      </p>
                 </motion.div>
             ))}
        </div>

      </div>

      <style jsx global>{`
        ::selection {
            background: rgba(225, 29, 72, 0.4);
            color: white;
        }
      `}</style>
    </section>
  );
}
