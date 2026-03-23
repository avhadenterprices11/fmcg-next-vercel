"use client";

import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { SEVORA_DATA } from "../data/sevora.data";
import { Check } from "lucide-react";

export function SevoraSolution() {
  const { solution } = SEVORA_DATA;

  return (
    <section id="solution" className="py-24 md:py-32 bg-white dark:bg-[#050a08] overflow-hidden">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Image Column */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="relative h-[400px] md:h-[600px] rounded-[2rem] overflow-hidden group shadow-2xl shadow-emerald-500/10"
          >
            <Image
              src={solution.image}
              alt="Natural Stevia Environment"
              fill
              className="object-cover transition-transform duration-700 group-hover:scale-110"
            />
            <div className="absolute inset-0 bg-linear-to-tr from-emerald-900/40 to-transparent" />
            
            {/* Overlay Badge */}
            <div className="absolute bottom-8 left-8 bg-white/90 dark:bg-zinc-900/90 backdrop-blur-md p-6 rounded-2xl border border-white/20 shadow-xl max-w-xs transition-transform duration-500 group-hover:-translate-y-2">
              <p className="text-emerald-600 font-bold uppercase tracking-widest text-xs mb-2">The Difference</p>
              <p className="text-foreground font-serif italic text-lg leading-snug">
                "Pure extraction from high-altitude stevia leaves."
              </p>
            </div>
          </motion.div>

          {/* Content Column */}
          <div className="flex flex-col space-y-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              <h2 className="text-sm font-bold text-emerald-600 uppercase tracking-[0.3em] mb-4">
                The Solution
              </h2>
              <h3 className="text-4xl md:text-5xl font-serif font-medium leading-tight mb-6">
                {solution.title}
              </h3>
              <p className="text-xl text-muted-foreground font-light leading-relaxed">
                {solution.description}
              </p>
            </motion.div>

            <motion.ul
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3 }}
              className="grid grid-cols-1 sm:grid-cols-2 gap-4"
            >
              {solution.benefits.map((benefit, i) => (
                <li key={i} className="flex items-center gap-3 p-4 rounded-2xl bg-emerald-50 dark:bg-emerald-900/10 border border-emerald-100 dark:border-emerald-800/30 transition-all hover:shadow-md">
                  <div className="w-6 h-6 rounded-full bg-emerald-500 flex items-center justify-center text-white shrink-0">
                    <Check className="w-4 h-4" />
                  </div>
                  <span className="font-medium text-foreground tracking-tight">{benefit}</span>
                </li>
              ))}
            </motion.ul>

            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.5 }}
              className="pt-4"
            >
              <div className="p-6 rounded-3xl bg-zinc-50 dark:bg-zinc-900 border border-border flex items-start gap-4">
                <div className="w-12 h-12 rounded-full bg-emerald-100 dark:bg-emerald-900 shadow-sm flex items-center justify-center text-emerald-600 shrink-0">
                  <Image src="https://static.vecteezy.com/system/resources/previews/010/856/642/original/natural-leaf-logo-icon-free-vector.jpg" width={24} height={24} alt="Leaf Icon" className="grayscale contrast-125" />
                </div>
                <div>
                  <h4 className="font-bold text-foreground mb-1">Naturally Sourced</h4>
                  <p className="text-sm text-muted-foreground italic">
                    We only use high-purity Reb-A extract for a clean, non-bitter taste profile.
                  </p>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
