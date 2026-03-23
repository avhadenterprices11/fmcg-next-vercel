"use client";

import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { SEVORA_DATA } from "../data/sevora.data";

export function UseCases() {
  const { useCases } = SEVORA_DATA;

  return (
    <section id="use-cases" className="py-24 md:py-32 bg-[#fafdfb] dark:bg-black/40 overflow-hidden">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div>
            <motion.h2
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="text-sm font-bold text-emerald-600 uppercase tracking-[0.3em] mb-4"
            >
              Versatility
            </motion.h2>
            <motion.h3
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="text-4xl md:text-5xl font-serif font-medium leading-tight mb-8"
            >
              {useCases.title}
            </motion.h3>
            <motion.p
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="text-xl text-muted-foreground font-light mb-12"
            >
              {useCases.description}
            </motion.p>

            <div className="grid grid-cols-2 sm:grid-cols-3 gap-6">
              {useCases.items.map((item, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1 + 0.3 }}
                  className="p-4 rounded-2xl bg-white dark:bg-zinc-900 border border-border flex flex-col items-center justify-center text-center shadow-sm hover:shadow-md transition-shadow"
                >
                  <p className="font-bold text-sm tracking-widest uppercase text-foreground">{item}</p>
                </motion.div>
              ))}
            </div>
          </div>

          <div className="relative h-[600px] grid grid-cols-2 gap-4">
            {useCases.images.map((img, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.2 + 0.4 }}
                className={`relative overflow-hidden rounded-[2rem] shadow-xl ${
                  i === 0 ? 'row-span-2' : ''
                }`}
              >
                <Image
                  src={img}
                  alt={`Sevora Use Case ${i}`}
                  fill
                  className="object-cover transition-transform duration-700 hover:scale-110"
                />
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
