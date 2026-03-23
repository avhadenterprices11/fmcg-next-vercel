"use client";

import React, { useRef } from "react";
import { SEVORA_DATA } from "../data/sevora.data";
import * as LucideIcons from "lucide-react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";

gsap.registerPlugin(ScrollTrigger);

// --- Local Utilities ---

function GsapSplitText({ text, className }: { text: string; className?: string }) {
  const containerRef = useRef<HTMLSpanElement>(null);
  
  useGSAP(() => {
    if (!containerRef.current) return;
    gsap.fromTo(containerRef.current.querySelectorAll(".split-word"),
      { y: 30, opacity: 0, scale: 0.95 },
      { 
        y: 0, 
        opacity: 1, 
        scale: 1,
        duration: 0.8, 
        stagger: 0.05, 
        ease: "power2.out",
        scrollTrigger: {
          trigger: containerRef.current,
          start: "top 95%"
        }
      }
    );
  }, { scope: containerRef });

  return (
    <span ref={containerRef} className={`inline-block ${className}`}>
      {text.split(" ").map((word, i) => (
        <span key={i} className="split-word inline-block mr-[0.3em] font-serif">
          {word}
        </span>
      ))}
    </span>
  );
}

export function SevoraBenefits() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const { benefits } = SEVORA_DATA;

  useGSAP(() => {
    if (!sectionRef.current) return;

    // Entrance animation for Bento Cards
    const cards = sectionRef.current.querySelectorAll(".bento-card");
    gsap.fromTo(cards, 
      { opacity: 0, scale: 0.9, y: 50 },
      {
        opacity: 1,
        scale: 1,
        y: 0,
        duration: 1.2,
        stagger: 0.1,
        ease: "expo.out",
        scrollTrigger: {
          trigger: ".bento-grid",
          start: "top 80%",
        }
      }
    );

  }, { scope: sectionRef });

  return (
    <section 
      ref={sectionRef} 
      className="relative py-32 md:py-48 bg-white dark:bg-[#020504] overflow-hidden"
    >
      {/* Premium Background Accents */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[80vw] h-[80vw] bg-emerald-50 dark:bg-emerald-950/5 rounded-full blur-[150px] pointer-events-none" />

      <div className="container mx-auto px-6 relative z-10">
        
        {/* Header Section */}
        <div className="text-center max-w-4xl mx-auto mb-24">
            <div className="inline-flex items-center gap-3 mb-6 bg-emerald-100/50 dark:bg-emerald-900/20 px-4 py-1.5 rounded-full border border-emerald-200/50 dark:border-emerald-800/30 backdrop-blur-md">
                <LucideIcons.Star className="w-3.5 h-3.5 text-emerald-600 fill-emerald-600" />
                <span className="text-[10px] font-black uppercase tracking-[0.4em] text-emerald-700 dark:text-emerald-400">Pure Quality</span>
            </div>
            <h2 className="text-5xl md:text-8xl font-serif font-medium leading-[0.9] text-foreground tracking-tighter mb-8">
              <GsapSplitText text={benefits.title} />
            </h2>
            <p className="text-xl text-muted-foreground font-light max-w-xl mx-auto leading-relaxed italic opacity-80">
              Transforming the standard of sweetness through botanical integrity.
            </p>
        </div>

        {/* Bento Grid Layout */}
        <div className="bento-grid grid grid-cols-1 md:grid-cols-6 lg:grid-cols-12 auto-rows-[280px] md:auto-rows-[320px] gap-6">
          {benefits.items.map((benefit, i) => {
            const Icon = (LucideIcons as any)[benefit.icon.charAt(0).toUpperCase() + benefit.icon.slice(1).replace(/-([a-z])/g, (_: any, c: string) => c.toUpperCase())] || LucideIcons.Zap;
            
            // Define Bento Grid Spans based on index
            const spans = [
               "md:col-span-6 lg:col-span-7 lg:row-span-2", // Card 1: Large Feature
               "md:col-span-3 lg:col-span-5 lg:row-span-1", // Card 2: Medium
               "md:col-span-3 lg:col-span-5 lg:row-span-1", // Card 3: Medium
               "md:col-span-3 lg:col-span-4 lg:row-span-1", // Card 4
               "md:col-span-3 lg:col-span-4 lg:row-span-1", // Card 5
               "md:col-span-6 lg:col-span-4 lg:row-span-1", // Card 6
            ];

            return (
              <BentoCard 
                key={i} 
                className={spans[i % spans.length]}
                title={benefit.title}
                description={benefit.description}
                Icon={Icon}
                index={i}
              />
            );
          })}
        </div>
      </div>
    </section>
  );
}

function BentoCard({ className, title, description, Icon, index }: { className: string, title: string, description: string, Icon: any, index: number }) {
    const cardRef = useRef<HTMLDivElement>(null);
    const iconWrapperRef = useRef<HTMLDivElement>(null);

    // 3D Tilt Effect
    const onMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
        if (!cardRef.current) return;
        const rect = cardRef.current.getBoundingClientRect();
        const x = e.clientX - rect.left;
        const y = e.clientY - rect.top;
        const centerX = rect.width / 2;
        const centerY = rect.height / 2;
        const rotateX = (y - centerY) / 20;
        const rotateY = (centerX - x) / 20;

        gsap.to(cardRef.current, {
            rotateX,
            rotateY,
            scale: 1.02,
            duration: 0.5,
            ease: "power2.out"
        });

        // Magnetic Icon
        if (iconWrapperRef.current) {
            const ix = (x - centerX) / 10;
            const iy = (y - centerY) / 10;
            gsap.to(iconWrapperRef.current, {
                x: ix,
                y: iy,
                duration: 0.4
            });
        }
    };

    const onMouseLeave = () => {
        gsap.to([cardRef.current, iconWrapperRef.current], {
            rotateX: 0,
            rotateY: 0,
            scale: 1,
            x: 0,
            y: 0,
            duration: 0.8,
            ease: "elastic.out(1, 0.3)"
        });
    };

    return (
        <div 
            ref={cardRef}
            onMouseMove={onMouseMove}
            onMouseLeave={onMouseLeave}
            className={`bento-card group relative p-10 lg:p-12 rounded-[3.5rem] bg-white border border-zinc-100 dark:bg-zinc-900/40 dark:border-white/5 overflow-hidden transition-all duration-700 hover:shadow-4xl hover:shadow-emerald-500/10 perspective-1000 will-change-transform ${className}`}
        >
            {/* Subtle Inner Mesh Gradient */}
            <div className={`absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-1000 bg-linear-to-br ${index % 2 === 0 ? "from-emerald-500/5 via-transparent to-teal-500/5" : "from-teal-500/5 via-transparent to-emerald-500/5"}`} />

            <div className="relative z-10 flex flex-col h-full">
                <div 
                    ref={iconWrapperRef}
                    className="w-16 h-16 rounded-3xl bg-emerald-50 dark:bg-emerald-900/30 flex items-center justify-center text-emerald-600 mb-10 border border-emerald-100/20 shadow-sm group-hover:bg-emerald-500 group-hover:text-white transition-colors duration-500"
                >
                    <Icon className="w-8 h-8" />
                </div>

                <div className="mt-auto">
                    <h4 className="text-3xl md:text-4xl font-serif font-bold text-foreground mb-4 tracking-tight group-hover:text-emerald-500 transition-colors">
                        {title}
                    </h4>
                    <p className="text-lg md:text-xl text-muted-foreground leading-relaxed font-light opacity-80 group-hover:opacity-100 transition-opacity max-w-md">
                        {description}
                    </p>
                </div>
            </div>

            {/* Corner Decorative Accent */}
            <div className="absolute top-0 right-0 w-32 h-32 bg-emerald-500/5 dark:bg-emerald-500/5 rounded-bl-[5rem] transition-all group-hover:w-40 group-hover:h-40 group-hover:bg-emerald-500/10" />
        </div>
    );
}

