"use client";

import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { SEVORA_DATA } from "../data/sevora.data";
import { Button } from "@/components/ui/button";
import { ArrowRight, ShoppingCart } from "lucide-react";

export function FinalConversion() {
  const { product } = SEVORA_DATA;

  return (
    <section className="py-24 md:py-32 bg-white dark:bg-[#050a08] overflow-hidden">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          className="relative rounded-[4rem] bg-emerald-600 p-12 md:p-24 overflow-hidden shadow-2xl shadow-emerald-600/30"
        >
          {/* Decorative Pattern */}
          <div className="absolute inset-0 opacity-10 pointer-events-none" style={{ backgroundImage: 'radial-gradient(circle, white 1px, transparent 1px)', backgroundSize: '40px 40px' }} />
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 md:gap-24 items-center relative z-10">
            <div className="text-white space-y-8">
              <h2 className="text-4xl md:text-7xl font-serif font-medium leading-[1.1]">
                Make the <span className="italic">Sweet Switch</span> Today.
              </h2>
              <p className="text-xl md:text-2xl font-light opacity-90 max-w-lg">
                Replace sugar with a healthier, natural alternative and feel the difference in your wellness journey.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 pt-4">
                <Button size="xl" className="h-16 px-10 rounded-full bg-white text-emerald-600 hover:bg-emerald-50 text-xl font-bold group shadow-xl">
                  {/* Reuse CTA text from data */}
                  Buy Sevora Now
                  <ShoppingCart className="ml-2 w-6 h-6 group-hover:scale-110 transition-transform" />
                </Button>
                <div className="flex items-center gap-3 text-sm font-bold uppercase tracking-widest px-4 py-2 bg-emerald-700/50 backdrop-blur-md rounded-full border border-white/10">
                  <span className="w-2 h-2 rounded-full bg-emerald-400 animate-ping" />
                  Limited Launch Offer
                </div>
              </div>
            </div>

            <motion.div
              animate={{ y: [0, -20, 0] }}
              transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
              className="relative h-[300px] md:h-[500px]"
            >
              <Image
                src={product.image}
                alt="Sevora Package"
                fill
                className="object-contain drop-shadow-[0_30px_60px_rgba(0,0,0,0.3)]"
              />
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
