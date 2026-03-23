"use client";
import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { 
    CheckCircle2, 
    TrendingUp, 
    Users, 
    Target, 
    Rocket, 
    ShieldCheck, 
    Search, 
    Globe, 
    ArrowRight,
    Zap,
    MoveRight,
    Eye,
    Activity
} from "lucide-react";

const REASONS = [
    {
        title: "Search Supremacy",
        description: "Be where your customers are searching, ensuring your brand is the first point of contact in new markets.",
        icon: Search,
        stat: "85%+",
        statLabel: "Intent Traffic"
    },
    {
        title: "Authority Scaling",
        description: "A strong digital presence establishes authority and credibility before the first conversation even happens.",
        icon: ShieldCheck,
        stat: "Instant",
        statLabel: "Trust Factor"
    },
    {
        title: "Multichannel ROI",
        description: "Optimize every touchpoint in the customer journey to drive measurable growth and higher ROI.",
        icon: TrendingUp,
        stat: "3.4x",
        statLabel: "Avg. Conversion"
    },
    {
        title: "Global Reach",
        description: "Expand into the UK, EU, or Middle East with a digital framework that adapts to local demand automatically.",
        icon: Globe,
        stat: "Global",
        statLabel: "Deployment"
    },
    {
        title: "Strategic Agility",
        description: "Compete effectively against established giants by leveraging strategic digital positioning and agility.",
        icon: Target,
        stat: "Top 1%",
        statLabel: "Positioning"
    }
];

function GrainOverlay() {
    return (
        <div className="absolute inset-0 pointer-events-none z-0 opacity-[0.03] mix-blend-overlay">
            <svg className="w-full h-full">
                <filter id="noiseFilterIntro">
                    <feTurbulence type="fractalNoise" baseFrequency="0.60" numOctaves="3" stitchTiles="stitch" />
                </filter>
                <rect width="100%" height="100%" filter="url(#noiseFilterIntro)" />
            </svg>
        </div>
    );
}

export default function DigitalIntro() {
    const containerRef = useRef<HTMLDivElement>(null);
    const isInView = useInView(containerRef, { once: true, margin: "-100px" });

    return (
        <section id="digital-intro" ref={containerRef} className="relative py-24 md:py-32 bg-background overflow-hidden border-t border-border/40">
            <GrainOverlay />
            
            {/* Background Accent Elements */}
            <div className="absolute inset-0 pointer-events-none overflow-hidden">
                {/* Refined Grid Pattern */}
                <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808008_1px,transparent_1px),linear-gradient(to_bottom,#80808008_1px,transparent_1px)] bg-size-[40px_40px]" />
                
                {/* Glow Orbs */}
                <div className="absolute top-[20%] left-[-10%] w-[500px] h-[500px] bg-emerald-500/5 rounded-full blur-[120px]" />
                <div className="absolute bottom-[10%] right-[-5%] w-[400px] h-[400px] bg-emerald-600/5 rounded-full blur-[100px]" />
            </div>

            <div className="container relative z-10 px-4 max-w-7xl mx-auto">
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 lg:gap-24 items-start">
                    
                    {/* Left Side: Content & Impact */}
                    <div className="lg:col-span-5 space-y-12">
                        <div className="space-y-6">
                            <motion.div
                                initial={{ opacity: 0, x: -20 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                viewport={{ once: true }}
                                className="flex items-center gap-4 text-emerald-500 font-mono text-xs uppercase tracking-[0.3em] font-bold"
                            >
                                <div className="w-12 h-px bg-emerald-500" />
                                <span className="drop-shadow-[0_0_8px_rgba(16,185,129,0.3)]">Digital Foundation</span>
                            </motion.div>

                            <motion.h2
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.8, ease: "easeOut" }}
                                className="text-4xl md:text-6xl font-bold leading-[1.1] tracking-tighter"
                            >
                                Distribution alone is <span className="text-muted-foreground/30 italic">no longer enough.</span>
                            </motion.h2>

                            <motion.div
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: 0.2, duration: 0.8 }}
                                className="space-y-6 text-lg text-muted-foreground/80 leading-relaxed max-w-xl"
                            >
                                <p>
                                    In the modern trade landscape, brands that scale are not just available — they are <span className="text-foreground font-semibold">commanding, trusted, and omnipresent</span> across digital touchpoints.
                                </p>
                                <p>
                                    We don't just "advertise"—we build digital infrastructure that bridges the gap between your supply and world-class demand.
                                </p>
                            </motion.div>
                        </div>

                        {/* Performance Indicators */}
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 lg:gap-12">
                            {[
                                { 
                                    label: "Digital Visibility", 
                                    desc: "Drives Market Perception",
                                    icon: Eye,
                                    value: "Active"
                                },
                                { 
                                    label: "Strategic Execution", 
                                    desc: "Drives Sustainable Growth",
                                    icon: Activity,
                                    value: "Optimized"
                                }
                            ].map((item, i) => (
                                <motion.div
                                    key={i}
                                    initial={{ opacity: 0, y: 20 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ delay: 0.4 + (i * 0.1) }}
                                    className="group relative p-6 rounded-2xl bg-muted/20 border border-border/50 hover:bg-muted/30 transition-all duration-300"
                                >
                                    <div className="absolute top-4 right-4 text-emerald-500/20 group-hover:text-emerald-500/40 transition-colors">
                                        <item.icon className="w-8 h-8" />
                                    </div>
                                    <div className="space-y-2">
                                        <div className="flex items-center gap-2">
                                            <div className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse" />
                                            <span className="text-[10px] font-mono uppercase tracking-[0.2em] text-emerald-500 font-bold">{item.value}</span>
                                        </div>
                                        <h3 className="text-xl font-bold tracking-tight text-foreground">{item.label}</h3>
                                        <p className="text-xs text-muted-foreground leading-snug">{item.desc}</p>
                                    </div>
                                </motion.div>
                            ))}
                        </div>

                        {/* Quote Block */}
                        <motion.div
                            initial={{ opacity: 0, x: -20 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: 0.6 }}
                            className="relative pl-8 py-2 border-l border-emerald-500/30"
                        >
                            <p className="text-sm md:text-base italic text-muted-foreground font-serif">
                                "Market dominance is no longer about who has the warehouse; it's about who owns the digital mindshare."
                            </p>
                        </motion.div>
                    </div>

                    {/* Right Side: The "Why" Grid */}
                    <div className="lg:col-span-7 relative">
                        {/* Decorative Background for Grid */}
                        <div className="absolute -inset-4 bg-emerald-500/5 blur-2xl rounded-[32px] opacity-50" />
                        
                        <div className="relative bg-card/40 backdrop-blur-xl border border-border/40 rounded-[32px] p-6 md:p-10 shadow-2xl overflow-hidden group">
                            {/* Inner Corner Accents */}
                            <div className="absolute top-0 right-0 w-24 h-24 bg-emerald-500/10 rounded-bl-[60px] blur-2xl" />
                            
                            <div className="flex flex-col md:flex-row md:items-center justify-between gap-6 mb-12">
                                <div className="space-y-2">
                                    <h3 className="text-2xl md:text-3xl font-bold tracking-tight text-foreground">Strategic Rationale</h3>
                                    <p className="text-sm text-muted-foreground">Why digital presence is your strongest trade asset.</p>
                                </div>
                                <div className="hidden md:flex flex-col items-end">
                                    <span className="text-3xl font-black text-emerald-500/10 group-hover:text-emerald-500/20 transition-colors duration-700">INFRASTRUCTURE</span>
                                </div>
                            </div>

                            <div className="grid gap-4">
                                {REASONS.map((reason, idx) => (
                                    <motion.div
                                        key={idx}
                                        initial={{ opacity: 0, y: 20 }}
                                        whileInView={{ opacity: 1, y: 0 }}
                                        viewport={{ once: true }}
                                        transition={{ delay: 0.1 * idx }}
                                        className="group/card relative flex items-start gap-4 p-5 rounded-2xl bg-background/40 border border-border/10 hover:border-emerald-500/30 hover:bg-muted/30 transition-all duration-500"
                                    >
                                        <div className="flex-shrink-0 w-12 h-12 rounded-xl bg-background border border-border/20 flex items-center justify-center text-emerald-500 shadow-sm group-hover/card:scale-110 group-hover/card:bg-emerald-500 group-hover/card:text-white transition-all duration-500">
                                            <reason.icon className="w-6 h-6" />
                                        </div>
                                        
                                        <div className="grow space-y-1">
                                            <div className="flex items-center justify-between gap-4">
                                                <h4 className="font-bold text-foreground group-hover/card:text-white transition-colors">
                                                    {reason.title}
                                                </h4>
                                                <div className="text-right flex flex-col items-end">
                                                    <span className="text-xs font-mono font-bold text-emerald-500 leading-none">{reason.stat}</span>
                                                    <span className="text-[8px] uppercase tracking-tighter text-muted-foreground leading-none mt-1">{reason.statLabel}</span>
                                                </div>
                                            </div>
                                            <p className="text-[13px] text-muted-foreground group-hover/card:text-muted-foreground/80 leading-relaxed max-w-md">
                                                {reason.description}
                                            </p>
                                        </div>

                                        {/* Hover Indicator */}
                                        <div className="absolute right-4 bottom-4 opacity-0 group-hover/card:opacity-100 translate-x-4 group-hover/card:translate-x-0 transition-all duration-500">
                                            <MoveRight className="w-4 h-4 text-emerald-500" />
                                        </div>
                                    </motion.div>
                                ))}
                            </div>
                            
                            <motion.div
                                initial={{ opacity: 0 }}
                                whileInView={{ opacity: 1 }}
                                transition={{ delay: 0.8 }}
                                className="mt-10 pt-8 border-t border-border/10 flex items-center justify-between"
                            >
                                <div className="flex gap-4">
                                    <div className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
                                    <div className="w-2 h-2 rounded-full bg-emerald-500/40" />
                                    <div className="w-2 h-2 rounded-full bg-emerald-500/20" />
                                </div>
                                <button className="text-xs font-mono font-bold uppercase tracking-widest text-emerald-500 flex items-center gap-2 group/btn">
                                    Growth Matrix
                                    <Zap className="w-3 h-3 group-hover/btn:fill-emerald-500 transition-all" />
                                </button>
                            </motion.div>
                        </div>
                    </div>
                </div>
            </div>

        </section>
    );
}

