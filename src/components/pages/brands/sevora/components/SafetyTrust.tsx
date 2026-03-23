"use client";

import React from "react";
import { motion } from "framer-motion";
import { SEVORA_DATA } from "../data/sevora.data";
import { ShieldCheck, Award, Microscope, CheckCircle2 } from "lucide-react";

export function SafetyTrust() {
  const { safety } = SEVORA_DATA;

  const icons = [<Award key="1" />, <Microscope key="2" />, <ShieldCheck key="3" />];

  return (
    <section id="safety" className="py-24 md:py-40 bg-[#fafdfb] dark:bg-[#020504] overflow-hidden border-t border-border">
      <div className="container mx-auto px-6">
        
        {/* Header Block */}
        <div className="max-w-4xl mb-20 md:mb-32">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="inline-flex items-center gap-3 mb-8 px-4 py-1.5 rounded-full bg-emerald-500/10 border border-emerald-500/20"
            >
                <ShieldCheck className="w-4 h-4 text-emerald-500" />
                <span className="text-[10px] font-black uppercase tracking-[0.5em] text-emerald-600">The Fortress</span>
            </motion.div>
            
            <motion.h2 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="text-6xl md:text-8xl font-serif font-medium leading-[0.95] text-foreground tracking-tighter mb-12"
            >
              {safety.title}
            </motion.h2>
            
            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="text-xl md:text-3xl text-muted-foreground font-light italic leading-tight max-w-2xl opacity-80"
            >
              Certified by top international bodies, Sevora is the gold standard for purity and natural sweetness.
            </motion.p>
        </div>

        {/* The Clean Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {safety.badges.map((badge, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1 }}
                  className="group relative p-12 rounded-[3.5rem] bg-white dark:bg-zinc-900 border border-emerald-500/5 shadow-2xl shadow-emerald-500/5 hover:border-emerald-500/30 transition-all duration-700 overflow-hidden"
                >
                    <div className="w-20 h-20 rounded-full bg-linear-to-br from-emerald-500/5 to-transparent flex items-center justify-center text-emerald-600 mb-10 group-hover:scale-110 group-hover:bg-emerald-500 group-hover:text-white transition-all duration-700 shadow-3xl">
                        <Award className="w-10 h-10" />
                    </div>
                    
                    <h3 className="text-3xl font-serif font-bold text-foreground mb-4 tracking-tight leading-none">
                        {badge}
                    </h3>
                    <p className="text-[10px] font-black uppercase tracking-[0.4em] text-emerald-600/60 mb-8">Verified Origin</p>
                    
                    <div className="flex items-center gap-3 pt-6 border-t border-emerald-500/10">
                        <CheckCircle2 className="w-4 h-4 text-emerald-500" />
                        <span className="text-[10px] font-black uppercase tracking-widest text-muted-foreground">Certified Safety</span>
                    </div>

                    {/* Subtle Corner Badge */}
                    <div className="absolute top-10 right-10 opacity-5 group-hover:opacity-20 transition-opacity">
                         <ShieldCheck className="w-16 h-16 text-emerald-500" />
                    </div>
                </motion.div>
            ))}
        </div>

        {/* Feature Pills */}
        <div className="mt-24 flex flex-wrap gap-4 justify-center md:justify-start">
             {safety.points.map((point, i) => (
                 <motion.div 
                   key={i} 
                   initial={{ opacity: 0, scale: 0.9 }}
                   whileInView={{ opacity: 1, scale: 1 }}
                   viewport={{ once: true }}
                   transition={{ delay: i * 0.1 + 0.5 }}
                   className="px-8 py-4 rounded-full bg-zinc-50 dark:bg-white/5 border border-emerald-500/10 flex items-center gap-4 hover:border-emerald-500/40 transition-colors"
                 >
                      <CheckCircle2 className="w-4 h-4 text-emerald-500" />
                      <span className="text-[10px] font-black uppercase tracking-[0.4em] text-foreground">{point}</span>
                 </motion.div>
             ))}
        </div>

      </div>

      <style jsx global>{`
        .shadow-3xl { box-shadow: 0 20px 50px -10px rgba(16, 185, 129, 0.2); }
        ::selection {
            background: rgba(16, 185, 129, 0.4);
            color: white;
        }
      `}</style>
    </section>
  );
}
