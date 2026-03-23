"use client";

import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { SEVORA_DATA } from "../data/sevora.data";
import { Button } from "@/components/ui/button";
import { ArrowRight, CheckCircle2 } from "lucide-react";

export function ProductShowcase() {
  const { product } = SEVORA_DATA;

  return (
    <section id="product" className="py-24 md:py-32 bg-white dark:bg-[#050a08] overflow-hidden">
      <div className="container mx-auto px-6">
        <div className="bg-emerald-50/50 dark:bg-emerald-900/10 rounded-[4rem] p-12 md:p-20 border border-emerald-100 dark:border-emerald-800/30 overflow-hidden relative">
          {/* Abstract Green Shape */}
          <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-emerald-500/5 rounded-full blur-[100px] translate-x-1/3 -translate-y-1/3" />

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center relative z-10">
            {/* Image Column */}
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              className="relative h-[400px] md:h-[600px] group"
            >
              <Image
                src={product.image}
                alt={product.name}
                fill
                className="object-contain drop-shadow-[0_20px_40px_rgba(5,150,105,0.15)] group-hover:-translate-y-4 transition-transform duration-700"
              />
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[80%] h-[80%] bg-emerald-500/10 rounded-full blur-[100px] -z-10" />
            </motion.div>

            {/* Content Column */}
            <div className="flex flex-col space-y-8">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
              >
                <h2 className="text-sm font-bold text-emerald-600 uppercase tracking-[0.3em] mb-4">
                  The Product
                </h2>
                <h3 className="text-4xl md:text-6xl font-serif font-medium leading-[1.1] mb-6">
                  {product.title}
                </h3>
                <p className="text-2xl font-bold text-foreground mb-8">
                  {product.name}
                </p>
              </motion.div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-8 gap-y-6">
                {product.details.map((detail, i) => (
                  <motion.div
                    key={i}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: i * 0.1 + 0.3 }}
                    className="flex items-center gap-3 border-b border-border/50 pb-4"
                  >
                    <CheckCircle2 className="w-5 h-5 text-emerald-500 shrink-0" />
                    <span className="text-lg font-light text-foreground/80">{detail}</span>
                  </motion.div>
                ))}
              </div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.7 }}
                className="pt-8"
              >
                <Button size="lg" className="h-16 px-12 rounded-full bg-emerald-600 hover:bg-emerald-700 text-white text-xl font-bold group shadow-xl shadow-emerald-500/20">
                  {product.cta}
                  <ArrowRight className="ml-2 w-6 h-6 group-hover:translate-x-1 transition-transform" />
                </Button>
                <p className="mt-6 text-sm text-muted-foreground font-medium flex items-center gap-2">
                  <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
                  Limited launch offer. Free shipping on your first order.
                </p>
              </motion.div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
