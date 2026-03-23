"use client";

import React, { useRef } from "react";
import { SEVORA_DATA } from "../data/sevora.data";
import { ArrowRight, Leaf, Waves, CheckCircle2, ChevronRight } from "lucide-react";
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
      { y: 50, opacity: 0 },
      { 
        y: 0, 
        opacity: 1, 
        duration: 1.2, 
        stagger: 0.1, 
        ease: "power4.out",
        scrollTrigger: {
          trigger: containerRef.current,
          start: "top 90%"
        }
      }
    );
  }, { scope: containerRef });

  return (
    <span ref={containerRef} className={`inline-block ${className}`}>
      {text.split(" ").map((word, i) => (
        <span key={i} className="split-word inline-block mr-[0.3em] font-serif italic">
          {word}
        </span>
      ))}
    </span>
  );
}

export function HowItWorks() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const horizontalRef = useRef<HTMLDivElement>(null);
  const pinRef = useRef<HTMLDivElement>(null);
  const pathRef = useRef<SVGPathElement>(null);

  const { howItWorks } = SEVORA_DATA;
  const icons = [Waves, Leaf, CheckCircle2];

  useGSAP(() => {
    if (!horizontalRef.current || !pinRef.current) return;

    const steps = gsap.utils.toArray(".process-step");
    const totalSteps = steps.length;

    // 1. Horizontal Scroll Pin
    gsap.to(steps, {
      xPercent: -100 * (totalSteps - 1),
      ease: "none",
      scrollTrigger: {
        trigger: pinRef.current,
        pin: true,
        scrub: 1,
        start: "top top",
        end: () => `+=${horizontalRef.current?.offsetWidth}`,
        invalidateOnRefresh: true,
      }
    });

    // 2. SVG Path Drawing
    if (pathRef.current) {
        const length = pathRef.current.getTotalLength();
        gsap.set(pathRef.current, { strokeDasharray: length, strokeDashoffset: length });
        
        gsap.to(pathRef.current, {
           strokeDashoffset: 0,
           scrollTrigger: {
               trigger: pinRef.current,
               start: "top top",
               end: () => `+=${horizontalRef.current?.offsetWidth}`,
               scrub: 1
           }
        });
    }

    // 3. Step Watermark Reveals
    steps.forEach((step: any, i) => {
        gsap.fromTo(step.querySelector(".step-number"), 
            { opacity: 0, scale: 0.5, y: 100 },
            {
                opacity: 0.05,
                scale: 1,
                y: 0,
                scrollTrigger: {
                    trigger: step,
                    containerAnimation: gsap.getById("horizontal-scroll"), // if named, but here it's simple
                    start: "left right",
                    end: "left center",
                    scrub: true
                }
            }
        );
    });

  }, { scope: sectionRef });

  return (
    <section 
      ref={sectionRef} 
      className="relative bg-[#fafdfb] dark:bg-[#020504] overflow-hidden border-y border-emerald-100/50 dark:border-emerald-900/10"
    >
      <div ref={pinRef} className="h-screen w-full flex flex-col justify-center">
        
        {/* Section Header */}
        <div className="container mx-auto px-6 mb-20 relative z-20">
          <div className="max-w-4xl">
            <div className="inline-flex items-center gap-3 mb-6">
                <div className="h-px w-12 bg-emerald-500" />
                <span className="text-[10px] font-black uppercase tracking-[0.6em] text-emerald-600">The Lifecycle</span>
            </div>
            <h2 className="text-6xl md:text-9xl font-serif font-medium leading-[0.85] text-foreground tracking-tighter">
              <GsapSplitText text={howItWorks.title} />
            </h2>
          </div>
        </div>

        {/* Horizontal Steps Container */}
        <div className="relative w-full overflow-hidden">
             {/* Decorative Background Connection (SVG Path) */}
            <svg 
                className="absolute top-1/2 left-0 w-[300%] h-40 -translate-y-1/2 pointer-events-none opacity-20 hidden lg:block"
                viewBox="0 0 1200 100"
                fill="none"
            >
                <path 
                    ref={pathRef}
                    d="M 0 50 C 300 100, 600 0, 900 50 C 1200 100, 1500 0, 1800 50" 
                    stroke="url(#gradient-line)" 
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeDasharray="10 10"
                />
                <defs>
                    <linearGradient id="gradient-line" x1="0%" y1="0%" x2="100%" y2="0%">
                        <stop offset="0%" stopColor="#10b981" stopOpacity="0" />
                        <stop offset="50%" stopColor="#10b981" stopOpacity="1" />
                        <stop offset="100%" stopColor="#10b981" stopOpacity="0" />
                    </linearGradient>
                </defs>
            </svg>

            <div 
                ref={horizontalRef}
                className="flex flex-nowrap w-[300vw] lg:w-[200vw] px-[10vw] gap-[10vw]"
            >
                {howItWorks.steps.map((step, i) => {
                    const Icon = icons[i % icons.length];
                    return (
                        <div 
                            key={i} 
                            className="process-step relative shrink-0 w-[70vw] lg:w-[45vw] group"
                        >
                            {/* Massive Watermark Number */}
                            <div className="step-number absolute -top-40 -left-20 text-[20rem] font-serif font-black text-emerald-600 opacity-0 pointer-events-none -z-10 tracking-tighter">
                                0{i + 1}
                            </div>

                            <div className="relative p-12 lg:p-20 rounded-[4rem] bg-white border border-emerald-50/50 dark:bg-zinc-900/40 dark:border-white/5 shadow-4xl shadow-emerald-500/5 overflow-hidden backdrop-blur-3xl group-hover:border-emerald-500/30 transition-all duration-700">
                                
                                <div className="flex flex-col lg:flex-row gap-12 items-start lg:items-center">
                                    <div className="relative">
                                        <div className="w-24 h-24 rounded-3xl bg-emerald-500 flex items-center justify-center text-white shadow-2xl shadow-emerald-500/20 group-hover:scale-110 group-hover:rotate-12 transition-all duration-700">
                                            <Icon className="w-10 h-10" />
                                        </div>
                                        <div className="absolute -bottom-4 -right-4 w-12 h-12 bg-white dark:bg-zinc-800 rounded-full flex items-center justify-center text-emerald-600 font-bold border border-emerald-100 shadow-sm">
                                            {i + 1}
                                        </div>
                                    </div>

                                    <div className="space-y-6 flex-1">
                                        <h4 className="text-4xl md:text-5xl font-serif font-bold text-foreground tracking-tight leading-tight">
                                            {step.step}
                                        </h4>
                                        <p className="text-xl text-muted-foreground font-light leading-relaxed max-w-xl">
                                            {step.description}
                                        </p>
                                    </div>
                                </div>

                                {/* Interactive Indicator */}
                                <div className="mt-12 flex items-center gap-4 text-emerald-500 opacity-40 group-hover:opacity-100 transition-opacity">
                                    <span className="text-[10px] uppercase tracking-[0.4em] font-black">Scroll to next phase</span>
                                    <ChevronRight className="w-4 h-4 animate-bounce-horizontal" />
                                </div>
                            </div>
                        </div>
                    );
                })}
            </div>
        </div>

        {/* Key Point Footer */}
        <div className="container mx-auto px-6 mt-20 relative z-20">
             <div className="p-10 rounded-[3rem] bg-linear-to-r from-emerald-600 to-teal-700 text-white flex flex-col md:flex-row items-center justify-between gap-12 shadow-3xl shadow-emerald-600/20 max-w-6xl mx-auto">
                <div className="flex items-center gap-8">
                    <div className="w-16 h-16 rounded-2xl bg-white/10 backdrop-blur-xl flex items-center justify-center border border-white/20">
                        <CheckCircle2 className="w-8 h-8" />
                    </div>
                    <p className="text-2xl font-serif italic max-w-2xl leading-relaxed">
                        "{howItWorks.keyPoint}"
                    </p>
                </div>
                <button className="whitespace-nowrap flex items-center gap-3 px-10 py-5 rounded-full bg-white text-emerald-600 font-black uppercase text-xs tracking-widest hover:scale-105 transition-transform active:scale-95 shadow-xl">
                    Our Quality Report <ArrowRight className="w-4 h-4" />
                </button>
            </div>
        </div>
      </div>

      <style jsx global>{`
        @keyframes bounce-horizontal {
          0%, 100% { transform: translateX(0); }
          50% { transform: translateX(5px); }
        }
        .animate-bounce-horizontal {
          animation: bounce-horizontal 2s ease-in-out infinite;
        }
        ::selection {
            background: rgba(16, 185, 129, 0.4);
            color: white;
        }
      `}</style>
    </section>
  );
}

