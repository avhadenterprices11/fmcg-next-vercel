"use client";
import { useRef } from "react";
import { motion, useScroll, useSpring, useTransform } from "framer-motion";
import { DIGITAL_PROCESS } from "../constants/digital-data";

export default function GrowthProcessTimeline() {
    const containerRef = useRef<HTMLDivElement>(null);
    const { scrollYProgress } = useScroll({
        target: containerRef,
        offset: ["start center", "end center"]
    });

    const scaleY = useSpring(scrollYProgress, {
        stiffness: 100,
        damping: 30,
        restDelta: 0.001
    });

    return (
        <section ref={containerRef} className="relative py-24 bg-background overflow-hidden">
            <div className="container px-4">
                <div className="max-w-4xl mx-auto">
                    <div className="flex flex-col items-center text-center space-y-4 mb-20">
                        <div className="px-4 py-1.5 rounded-full border border-border/10 bg-muted/30 text-xs font-bold uppercase tracking-widest text-emerald-500">
                            The Methodology
                        </div>
                        <h2 className="text-3xl md:text-5xl font-bold tracking-tight">Our Growth Framework</h2>
                        <p className="text-muted-foreground max-w-xl">
                            A structured, data-driven approach designed to take brands from initial assessment to global market dominance.
                        </p>
                    </div>

                    <div className="relative">
                        {/* Central Line */}
                        <div className="absolute left-[20px] md:left-1/2 md:-translate-x-1/2 top-0 bottom-0 w-px bg-border/20">
                            <motion.div 
                                className="absolute top-0 bottom-0 w-full bg-emerald-500 origin-top"
                                style={{ scaleY }}
                            />
                        </div>

                        <div className="space-y-24">
                            {DIGITAL_PROCESS.map((step, idx) => (
                                <motion.div
                                    key={idx}
                                    initial={{ opacity: 0, y: 30 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    viewport={{ once: true, margin: "-100px" }}
                                    className={`relative flex flex-col md:flex-row items-center gap-8 ${idx % 2 === 0 ? 'md:flex-row-reverse' : ''}`}
                                >
                                    {/* Number Circle */}
                                    <div className="absolute left-0 md:left-1/2 md:-translate-x-1/2 w-10 h-10 rounded-full bg-background border-2 border-emerald-500 flex items-center justify-center z-10 shadow-[0_0_15px_rgba(16,185,129,0.3)]">
                                        <span className="text-xs font-bold text-emerald-500">{step.step}</span>
                                    </div>

                                    {/* Content Card */}
                                    <div className={`w-full md:w-[45%] pl-12 md:pl-0 ${idx % 2 === 0 ? 'md:text-left' : 'md:text-right'}`}>
                                        <div className="p-8 rounded-2xl border border-border/10 bg-muted/20 backdrop-blur-md hover:bg-muted/30 transition-all duration-300 group">
                                            <h3 className="text-xl font-bold text-foreground mb-3 group-hover:text-emerald-500 transition-colors">
                                                {step.title}
                                            </h3>
                                            <p className="text-muted-foreground text-sm leading-relaxed">
                                                {step.description}
                                            </p>
                                        </div>
                                    </div>

                                    {/* Spacer/Visual accent for larger screens */}
                                    <div className="hidden md:block md:w-[45%]" />
                                </motion.div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
