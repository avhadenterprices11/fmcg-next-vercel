"use client";

import React, { useRef } from "react";
import Image from "next/image";
import { SEVORA_DATA } from "../data/sevora.data";
import { Check, Leaf, Heart, Wind, ShieldCheck } from "lucide-react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";

gsap.registerPlugin(ScrollTrigger);

// --- Local Utilities ---

function GsapSplitText({ text, className }: { text: string; className?: string }) {
  const containerRef = useRef<HTMLSpanElement>(null);
  const words = text.split(" ");

  useGSAP(() => {
    if (!containerRef.current) return;

    const letters = containerRef.current.querySelectorAll(".split-char");
    gsap.fromTo(letters,
      { y: 40, opacity: 0, scale: 1.1 },
      {
        y: 0,
        opacity: 1,
        scale: 1,
        duration: 1,
        stagger: 0.05,
        ease: "power3.out",
        scrollTrigger: {
          trigger: containerRef.current,
          start: "top 90%",
        }
      }
    );
  }, { scope: containerRef });

  return (
    <span ref={containerRef} className={`inline-block ${className}`}>
      {words.map((word, i) => (
        <span key={i} className="inline-block whitespace-nowrap mr-[0.25em] last:mr-0 overflow-hidden py-1">
          {word.split("").map((char, j) => (
            <span key={j} className="split-char inline-block will-change-transform opacity-0">
              {char}
            </span>
          ))}
        </span>
      ))}
    </span>
  );
}

export function SevoraSolution() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const triggerRef = useRef<HTMLDivElement>(null);
  const leftColRef = useRef<HTMLDivElement>(null);
  const imageRef = useRef<HTMLDivElement>(null);
  
  const { solution } = SEVORA_DATA;
  const icons = [Wind, Heart, ShieldCheck, Leaf];

  useGSAP(() => {
    if (!sectionRef.current) return;

    // 1. Image Parallax & Reveal
    gsap.fromTo(imageRef.current, 
      { scale: 1.2, filter: "brightness(0.8)" },
      {
        scale: 1,
        filter: "brightness(1)",
        scrollTrigger: {
          trigger: imageRef.current,
          start: "top bottom",
          end: "bottom top",
          scrub: true
        }
      }
    );

    // 2. Sticky Reveal Logic (Horizontal Scroll Feel on Vertical Scroll)
    const cards = gsap.utils.toArray(".benefit-card");
    
    gsap.fromTo(cards, 
      { opacity: 0, x: 100 },
      {
        opacity: 1,
        x: 0,
        duration: 1,
        stagger: 0.2,
        ease: "power2.out",
        scrollTrigger: {
          trigger: triggerRef.current,
          start: "top 70%",
          end: "top 20%",
          scrub: 1
        }
      }
    );

    // 3. Floating Leaf Decor
    gsap.to(".floating-leaf", {
        y: -50,
        rotate: 15,
        duration: 2,
        repeat: -1,
        yoyo: true,
        ease: "sine.inOut"
    });

  }, { scope: sectionRef });

  return (
    <section 
      ref={sectionRef} 
      className="relative py-32 md:py-64 bg-white dark:bg-[#050a08] overflow-hidden"
    >
      {/* Botanical Background Accents */}
      <div className="absolute top-0 right-0 w-[40vw] h-[40vw] bg-emerald-100/30 dark:bg-emerald-950/20 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-[30vw] h-[30vw] bg-teal-100/20 dark:bg-teal-950/10 rounded-full blur-[100px] pointer-events-none" />

      {/* Floating Decorative Leaf */}
      <div className="floating-leaf absolute top-40 right-20 text-emerald-100/20 dark:text-emerald-900/10 transition-opacity hidden lg:block">
        <Leaf className="w-96 h-96 transform -rotate-12" />
      </div>

      <div className="container mx-auto px-6">
        <div ref={triggerRef} className="grid grid-cols-1 lg:grid-cols-12 gap-20 items-start">
          
          {/* CONTENT COLUMN - STICKY FEEL */}
          <div ref={leftColRef} className="lg:col-span-5 flex flex-col space-y-12 lg:sticky lg:top-40">
            <div>
              <div className="inline-flex items-center gap-2 mb-8 px-5 py-2 rounded-full bg-emerald-50 dark:bg-emerald-900/30 border border-emerald-100 dark:border-emerald-800/20 uppercase tracking-[0.5em] text-[10px] font-black text-emerald-600">
                <Wind className="w-3 h-3" />
                <span>The Purity Standard</span>
              </div>

              <h3 className="text-5xl md:text-8xl font-serif font-medium leading-[0.9] text-foreground tracking-tighter mb-8">
                <GsapSplitText text={solution.title} />
              </h3>

              <p className="text-xl md:text-2xl text-muted-foreground font-light leading-relaxed border-l-2 border-emerald-500/20 pl-8">
                {solution.description}
              </p>
            </div>

            {/* Cinematic Featured Callout */}
            <div className="p-10 rounded-[2.5rem] bg-linear-to-br from-[#fafdfb] to-emerald-50/50 dark:from-zinc-900 dark:to-emerald-950/20 border border-emerald-100 dark:border-emerald-900/30 shadow-3xl shadow-emerald-500/5 group">
              <div className="flex items-center gap-6 mb-6">
                <div className="w-16 h-16 rounded-2xl bg-emerald-500 flex items-center justify-center text-white shadow-xl group-hover:scale-110 group-hover:rotate-6 transition-transform">
                  <Leaf className="w-8 h-8" />
                </div>
                <div>
                   <h4 className="text-xl font-serif font-bold text-foreground leading-tight">100% Reb-A Extract</h4>
                   <p className="text-xs text-emerald-600 font-black uppercase tracking-widest mt-1">High-Altitude Sourced</p>
                </div>
              </div>
              <p className="text-muted-foreground leading-relaxed italic opacity-80 group-hover:opacity-100 transition-opacity">
                "We exclusively use high-purity extraction to ensure zero bitter aftertaste, delivering exactly what nature intended."
              </p>
            </div>
          </div>

          {/* GALLERY & BENEFITS COLUMN */}
          <div className="lg:col-span-7 space-y-24">
            {/* Cinematic Image Reveal */}
            <div 
              ref={imageRef}
              className="relative h-[600px] md:h-[800px] rounded-[3.5rem] overflow-hidden group shadow-4xl shadow-emerald-500/5 transition-transform duration-1000"
            >
              <Image
                src={solution.image}
                alt="Natural Stevia Environment"
                fill
                className="object-cover transition-transform duration-1000 scale-[1.1] group-hover:scale-100"
              />
              <div className="absolute inset-0 bg-linear-to-t from-emerald-950/60 via-transparent to-transparent opacity-80" />
              
              {/* Image Overlay Label */}
              <div className="absolute bottom-12 left-12 right-12 flex items-center justify-between pointer-events-none">
                 <div className="flex items-center gap-6">
                    <div className="text-white">
                        <p className="text-[10px] font-black uppercase tracking-[0.4em] text-emerald-400 mb-2">Source Origin</p>
                        <h5 className="text-3xl font-serif font-bold">Mount Taibai, 3000m</h5>
                    </div>
                 </div>
                 <div className="p-6 rounded-full bg-white/20 backdrop-blur-3xl border border-white/20 text-white group-hover:bg-emerald-500 transition-colors">
                    <Check className="w-8 h-8" />
                 </div>
              </div>
            </div>

            {/* Benefits Interactive Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
              {solution.benefits.map((benefit, i) => {
                const Icon = icons[i % icons.length];
                return (
                  <div 
                    key={i} 
                    className="benefit-card group p-10 rounded-[2.5rem] bg-white border border-zinc-100 dark:bg-zinc-900/50 dark:border-zinc-800 hover:shadow-4xl hover:border-emerald-500/30 transition-all duration-700 hover:-translate-y-4"
                  >
                    <div className="w-14 h-14 rounded-2xl bg-emerald-50 dark:bg-emerald-900/30 flex items-center justify-center text-emerald-500 mb-8 border border-emerald-100/20 group-hover:bg-emerald-500 group-hover:text-white transition-all duration-500 shadow-sm">
                      <Icon className="w-7 h-7" />
                    </div>
                    <h5 className="text-2xl font-serif font-bold text-foreground mb-4 group-hover:text-emerald-500 transition-colors">{benefit}</h5>
                    <div className="h-1 w-12 bg-emerald-100 dark:bg-emerald-900 group-hover:w-full group-hover:bg-emerald-500 transition-all duration-700" />
                  </div>
                );
              })}
            </div>
          </div>

        </div>
      </div>

      <style jsx global>{`
        ::selection {
            background: rgba(16, 185, 129, 0.4);
            color: white;
        }
      `}</style>
    </section>
  );
}
