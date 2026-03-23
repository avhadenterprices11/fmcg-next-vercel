"use client";

import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { SEVORA_DATA } from "../data/sevora.data";
import { Sparkles, MoveRight } from "lucide-react";

export function UseCases() {
  const { useCases } = SEVORA_DATA;

  // New Image for the first card as requested
  const displayImages = [
      "https://images.unsplash.com/photo-1541167760496-162955ed8a9f?q=80&w=800&auto=format&fit=crop", // Elegant Coffee/Tea close-up
      ...useCases.images.slice(1)
  ];

  return (
    <section id="use-cases" className="py-20 md:py-32 bg-white dark:bg-[#020504] overflow-hidden">
      <div className="container mx-auto px-6">
        
        {/* Compact & Aesthetic Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-8 mb-16 md:mb-24">
            <div className="max-w-xl">
                <motion.div
                  initial={{ opacity: 0, x: -10 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  className="inline-flex items-center gap-2 mb-6 px-4 py-1.5 rounded-full bg-emerald-500/5 border border-emerald-500/10"
                >
                    <Sparkles className="w-3 h-3 text-emerald-500" />
                    <span className="text-[9px] font-black uppercase tracking-[0.4em] text-emerald-600">Daily Pure Uses</span>
                </motion.div>
                
                <motion.h2 
                  initial={{ opacity: 0, y: 15 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  className="text-5xl md:text-7xl font-serif font-medium leading-none text-foreground tracking-tighter"
                >
                  {useCases.title}
                </motion.h2>
            </div>
            
            <motion.div
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="max-w-xs"
            >
                <p className="text-lg text-muted-foreground font-light italic leading-snug mb-6 opacity-70">
                  {useCases.description}
                </p>
                <button className="group flex items-center gap-3 text-[10px] font-black uppercase tracking-widest text-emerald-600">
                    Recipe Book <MoveRight className="w-4 h-4 group-hover:translate-x-2 transition-transform" />
                </button>
            </motion.div>
        </div>

        {/* Compact Aesthetic Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
            {displayImages.map((img, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-50px" }}
                  transition={{ duration: 0.7, delay: i * 0.1 }}
                  className="relative group h-[350px] md:h-[450px] rounded-[3rem] overflow-hidden bg-zinc-50 dark:bg-zinc-900 border border-emerald-500/5 shadow-2xl shadow-emerald-500/0 hover:shadow-emerald-500/5 transition-all duration-1000"
                >
                    <Image
                      src={img}
                      alt={`Use Case ${i}`}
                      fill
                      className="object-cover transition-transform duration-[2000ms] group-hover:scale-105"
                      sizes="(max-width: 1024px) 100vw, 33vw"
                    />
                    
                    {/* Subtle Gradient Overly */}
                    <div className="absolute inset-0 bg-linear-to-t from-black/50 via-transparent to-transparent opacity-40 group-hover:opacity-60 transition-opacity" />
                    
                    {/* Compact Label */}
                    <div className="absolute bottom-10 left-10 right-10 z-20">
                         <div className="text-white">
                              <p className="text-[9px] font-black uppercase tracking-[0.4em] mb-2 opacity-60">Application 0{i + 1}</p>
                              <h4 className="text-3xl font-serif italic leading-none tracking-tight">
                                  {useCases.items[i] || 'Versatile'}
                              </h4>
                         </div>
                    </div>

                    {/* Minimalist Corner Icon */}
                    <div className="absolute top-8 right-8 text-white/40 group-hover:text-emerald-400 transition-colors">
                         <Sparkles className="w-5 h-5" />
                    </div>
                </motion.div>
            ))}
        </div>

      </div>

      <style jsx global>{`
        ::selection {
            background: rgba(16, 185, 129, 0.3);
            color: white;
        }
      `}</style>
    </section>
  );
}
