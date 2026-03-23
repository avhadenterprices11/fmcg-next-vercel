"use client";

import React from "react";
import Image from "next/image";
import { motion, useScroll, useTransform } from "framer-motion";
import { Button } from "@/components/ui/button";
import { SEVORA_DATA } from "../data/sevora.data";
import { ArrowRight, Leaf, ShieldCheck, Zap } from "lucide-react";

export function SevoraHero() {
  const { scrollY } = useScroll();
  const y1 = useTransform(scrollY, [0, 500], [0, 100]);
  const y2 = useTransform(scrollY, [0, 500], [0, -50]);
  const opacity = useTransform(scrollY, [0, 300], [1, 0]);

  const { hero } = SEVORA_DATA;

  return (
    <section className="relative min-h-[90vh] flex items-center justify-center overflow-hidden bg-[#fafdfb] dark:bg-[#050a08] pt-20">
      {/* Background Decorative Elements */}
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-emerald-500/5 rounded-full blur-[120px] -translate-y-1/2 translate-x-1/2" />
      <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-emerald-500/5 rounded-full blur-[120px] translate-y-1/2 -translate-x-1/2" />

      <div className="container mx-auto px-6 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Text Content */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
            className="flex flex-col space-y-8"
          >
            <div className="space-y-4">
              <motion.div
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2 }}
                className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-100 dark:bg-emerald-900/30 text-emerald-700 dark:text-emerald-300 text-xs font-bold uppercase tracking-widest"
              >
                <Leaf className="w-3 h-3" />
                <span>Premium Stevia Extract</span>
              </motion.div>

              <h1 className="text-5xl md:text-7xl lg:text-8xl font-serif font-medium leading-[0.9] text-foreground tracking-tight">
                {hero.headline.split(" ").map((word, i) => (
                  <span key={i} className="inline-block mr-2">
                    {word === "Sugar" ? (
                      <span className="text-emerald-600 italic">{word}</span>
                    ) : (
                      word
                    )}
                  </span>
                ))}
              </h1>

              <p className="text-xl md:text-2xl text-muted-foreground font-light max-w-lg leading-relaxed">
                {hero.subheadline}
              </p>
            </div>

            <div className="flex flex-col sm:flex-row gap-4">
              <Button size="lg" className="h-14 px-8 rounded-full bg-emerald-600 hover:bg-emerald-700 text-white text-lg font-medium group transition-all duration-300">
                {hero.primaryCTA}
                <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </Button>
              <Button size="lg" variant="outline" className="h-14 px-8 rounded-full border-emerald-200 dark:border-emerald-800 text-lg font-medium hover:bg-emerald-50 dark:hover:bg-emerald-900/20 transition-all duration-300">
                {hero.secondaryCTA}
              </Button>
            </div>

            <div className="grid grid-cols-2 gap-6 pt-4">
              {hero.highlights.slice(0, 4).map((item, i) => (
                <div key={i} className="flex items-center gap-3">
                  <div className="w-5 h-5 rounded-full bg-emerald-100 dark:bg-emerald-900/40 flex items-center justify-center text-emerald-600">
                    <ShieldCheck className="w-3 h-3" />
                  </div>
                  <span className="text-sm font-medium text-foreground/80">{item}</span>
                </div>
              ))}
            </div>
          </motion.div>

          {/* Image Section */}
          <motion.div
            style={{ y: y2 }}
            className="relative h-[500px] md:h-[700px] flex items-center justify-center"
          >
            <motion.div
              initial={{ opacity: 0, scale: 0.8, rotate: -5 }}
              animate={{ opacity: 1, scale: 1, rotate: 0 }}
              transition={{ duration: 1.2, ease: [0.22, 1, 0.36, 1], delay: 0.4 }}
              className="relative w-full h-full"
            >
              <Image
                src={hero.image}
                alt="Sevora Stevia Product"
                fill
                className="object-contain drop-shadow-[0_20px_50px_rgba(5,150,105,0.2)]"
                priority
              />
            </motion.div>

            {/* Floaties */}
            <motion.div
              animate={{ y: [0, -20, 0] }}
              transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
              className="absolute top-1/4 -left-10 md:left-0 bg-white dark:bg-zinc-900 p-4 rounded-2xl shadow-xl border border-border/50 backdrop-blur-sm z-20"
            >
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-xl bg-orange-100 flex items-center justify-center text-orange-600">
                  <Zap className="w-5 h-5" />
                </div>
                <div>
                  <p className="text-xs font-bold uppercase tracking-wider text-muted-foreground">Calories</p>
                  <p className="text-lg font-bold">Zero</p>
                </div>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
