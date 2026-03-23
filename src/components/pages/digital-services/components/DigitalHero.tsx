"use client";
import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { ArrowDown, Zap, Globe, BarChart3, ArrowRight } from "lucide-react";
import Link from "next/link";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";

// --- Utility Components ---

function GrainOverlay() {
    return (
        <div className="absolute inset-0 pointer-events-none z-50 opacity-[0.03] mix-blend-overlay">
            <svg className="w-full h-full">
                <filter id="noiseFilter">
                    <feTurbulence type="fractalNoise" baseFrequency="0.80" numOctaves="3" stitchTiles="stitch" />
                </filter>
                <rect width="100%" height="100%" filter="url(#noiseFilter)" />
            </svg>
        </div>
    );
}

// --- Main Component ---

export default function DigitalHero() {
    const containerRef = useRef<HTMLDivElement>(null);
    
    const { scrollYProgress } = useScroll({
        target: containerRef,
        offset: ["start start", "end start"],
    });

    const yVal = useTransform(scrollYProgress, [0, 1], ["0%", "50%"]);
    const opacityVal = useTransform(scrollYProgress, [0, 0.5], [1, 0]);

    const scrollToContent = () => {
        const nextSection = document.getElementById('digital-intro');
        if (nextSection) {
            nextSection.scrollIntoView({ behavior: 'smooth' });
        }
    };

    return (
        <section ref={containerRef} className="relative min-h-[100dvh] w-full bg-background overflow-hidden flex flex-col justify-center px-4 md:px-12 pt-20">
            <GrainOverlay />
            
            {/* Background Ambience */}
            <div className="absolute inset-0 pointer-events-none">
                <div className="absolute top-[-20%] right-[-10%] w-[120vw] h-[120vw] md:w-[60vw] md:h-[60vw] bg-emerald-500/10 rounded-full blur-[80px] md:blur-[120px] animate-pulse [animation-duration:10s]" />
                <div className="absolute bottom-[-20%] left-[-10%] w-[100vw] h-[100vw] md:w-[50vw] md:h-[50vw] bg-blue-600/10 rounded-full blur-[60px] md:blur-[100px] animate-pulse [animation-duration:8s]" />
                
                {/* Refined Grid Pattern */}
                <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:60px_60px] [mask-image:radial-gradient(ellipse_80%_60%_at_50%_0%,#000_70%,transparent_100%)]" />
            </div>

            <motion.div
                style={{ y: yVal, opacity: opacityVal }}
                className="relative z-10 max-w-[1800px] mx-auto w-full flex flex-col h-full justify-center"
            >
                {/* Overhead Label */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.2 }}
                    className="flex items-center gap-3 md:gap-4 mb-8 md:mb-12"
                >
                    <div className="h-px w-8 md:w-12 bg-emerald-500" />
                    <span className="text-emerald-500 font-mono text-xs md:text-sm tracking-widest uppercase font-semibold">
                        Digital Infrastructure & Growth
                    </span>
                </motion.div>

                {/* Main Kinetic Typography */}
                <div className="flex flex-col">
                    {[
                        { text: "Scalable Brand", highlight: false },
                        { text: "Ecosystems", highlight: true }
                    ].map((item, i) => (
                        <div key={i} className="overflow-hidden py-1">
                            <motion.h1
                                initial={{ y: "100%" }}
                                animate={{ y: "0%" }}
                                transition={{
                                    duration: 1.2,
                                    ease: [0.22, 1, 0.36, 1],
                                    delay: 0.4 + (i * 0.15)
                                }}
                                className="text-[13vw] md:text-9xl font-bold text-foreground leading-[0.9] tracking-tighter"
                            >
                                <span className={item.highlight ? "text-transparent bg-clip-text bg-gradient-to-r from-emerald-500 to-emerald-700 filter drop-shadow-[0_0_20px_rgba(16,185,129,0.2)]" : ""}>
                                    {item.text}
                                </span>
                            </motion.h1>
                        </div>
                    ))}
                </div>

                {/* Bottom Lockup */}
                <div className="mt-12 md:mt-20 flex flex-col md:flex-row items-start md:items-end justify-between gap-8 md:gap-0 border-t border-border/50 pt-10">
                    <div className="space-y-6 max-w-xl">
                        <motion.p
                            initial={{ opacity: 0, x: -20 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.8, delay: 1 }}
                            className="text-muted-foreground text-lg md:text-2xl leading-relaxed"
                        >
                            We build end-to-end digital frameworks that bridge the gap between market supply and global demand through data-driven execution.
                        </motion.p>
                        
                        <motion.div
                            initial={{ opacity: 0, y: 10 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.8, delay: 1.2 }}
                            className="flex flex-wrap gap-4"
                        >
                            <Link
                                href="/digital-services#enquiry"
                                className="group px-8 py-4 rounded-full bg-emerald-600 text-white font-bold text-xs uppercase tracking-widest flex items-center gap-3 transition-all hover:bg-emerald-500 hover:scale-105 shadow-[0_0_30px_rgba(16,185,129,0.3)]"
                            >
                                Start Transformation
                                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                            </Link>
                        </motion.div>
                    </div>

                    <div className="flex gap-12 items-center">
                        {/* Summary Metrics */}
                        <motion.div 
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            transition={{ delay: 1.4, duration: 1 }}
                            className="hidden lg:flex gap-10"
                        >
                            <div className="flex flex-col gap-1">
                                <span className="text-2xl font-bold flex items-center gap-2">
                                    <Globe className="w-4 h-4 text-emerald-500" /> Multi-Region
                                </span>
                                <span className="text-[10px] uppercase tracking-widest text-muted-foreground font-bold leading-none">Expansion</span>
                            </div>
                            <div className="flex flex-col gap-1">
                                <span className="text-2xl font-bold flex items-center gap-2">
                                    <BarChart3 className="w-4 h-4 text-emerald-500" /> Data-Led
                                </span>
                                <span className="text-[10px] uppercase tracking-widest text-muted-foreground font-bold leading-none">Decisioning</span>
                            </div>
                        </motion.div>

                        <motion.button
                            initial={{ opacity: 0, scale: 0.8 }}
                            animate={{ opacity: 1, scale: 1 }}
                            transition={{ duration: 0.8, delay: 1.2 }}
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                            onClick={scrollToContent}
                            className="group relative hidden md:flex items-center justify-center w-24 h-24 md:w-32 md:h-32 rounded-full border border-border bg-card transition-all duration-500 hover:border-emerald-500 hover:shadow-[0_0_30px_rgba(16,185,129,0.1)]"
                        >
                            <motion.div
                                animate={{
                                    y: [0, 5, 0],
                                }}
                                transition={{
                                    duration: 2,
                                    repeat: Infinity,
                                    ease: "easeInOut"
                                }}
                                className="text-foreground group-hover:text-emerald-500 transition-colors duration-300 flex flex-col items-center"
                            >
                                <ArrowDown className="w-8 h-8 md:w-10 md:h-10" />
                            </motion.div>
                        </motion.button>
                        
                        {/* Mobile Scroll Button */}
                        <motion.button
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            transition={{ duration: 0.8, delay: 1.2 }}
                            onClick={scrollToContent}
                            className="md:hidden flex items-center gap-2 text-emerald-500 font-mono text-sm uppercase tracking-wider font-bold"
                        >
                            <ArrowDown className="w-4 h-4 animate-bounce" />
                            Explore
                        </motion.button>
                    </div>
                </div>
            </motion.div>
        </section>
    );
}
