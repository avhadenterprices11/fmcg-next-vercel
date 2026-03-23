"use client";
import { motion } from "framer-motion";
import { ArrowRight, Box, Zap, BarChart3, ShieldCheck } from "lucide-react";
import Link from "next/link";

export default function TradeConnection() {
    return (
        <section className="relative py-24 bg-background overflow-hidden border-t border-border/10">
            {/* Background elements */}
            <div className="absolute top-0 right-0 w-1/3 h-full bg-emerald-500/5 blur-[120px] pointer-events-none" />
            
            <div className="container relative z-10 px-4">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
                    <div className="space-y-8">
                        <div className="inline-flex items-center gap-2 text-emerald-500 font-mono text-xs uppercase tracking-[0.2em]">
                            <div className="w-8 h-px bg-emerald-500/50" />
                            Integrated Ecosystem
                        </div>
                        
                        <h2 className="text-3xl md:text-5xl font-bold tracking-tight">
                            From Strategy to Scale — <br />
                            <span className="text-emerald-500">One Integrated System</span>
                        </h2>
                        
                        <div className="space-y-6 text-lg text-muted-foreground">
                            <p>
                                We don’t just support distribution. We build demand, strengthen brand presence, and enable consistent performance across global markets.
                            </p>
                            <p>
                                This integration creates a powerful competitive advantage for brands looking to move fast and stay relevant.
                            </p>
                        </div>

                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                            {[
                                { title: "Faster Market Penetration", icon: Zap },
                                { title: "Stronger Brand Positioning", icon: ShieldCheck },
                                { title: "Improved Sales Velocity", icon: BarChart3 },
                                { title: "Higher Repeat Demand", icon: Box },
                            ].map((item, idx) => (
                                <div key={idx} className="flex items-center gap-3 p-4 rounded-xl border border-border/10 bg-muted/20">
                                    <item.icon className="w-5 h-5 text-emerald-500" />
                                    <span className="text-sm font-bold">{item.title}</span>
                                </div>
                            ))}
                        </div>

                        <div className="pt-8">
                            <Link 
                                href="/how-we-work"
                                className="inline-flex items-center gap-2 text-foreground font-bold hover:text-emerald-500 transition-colors group"
                            >
                                Learn more about our execution model
                                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                            </Link>
                        </div>
                    </div>

                    <div className="relative">
                        <div className="aspect-square bg-muted/30 border border-border/10 rounded-3xl overflow-hidden shadow-2xl">
                             {/* Visual representation of the synergy */}
                             <div className="absolute inset-0 flex items-center justify-center p-12">
                                <div className="w-full h-full relative border-2 border-emerald-500/20 rounded-full animate-spin-slow">
                                     <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 w-4 h-4 bg-emerald-500 rounded-full shadow-[0_0_15px_rgba(16,185,129,0.5)]" />
                                </div>
                                <div className="absolute inset-0 flex flex-col items-center justify-center text-center space-y-4">
                                    <div className="text-4xl font-black text-emerald-500/50 select-none">SYNERGY</div>
                                    <div className="space-y-1">
                                         <p className="text-xs font-bold uppercase tracking-widest text-emerald-500">Distribution</p>
                                         <p className="text-xs font-bold text-muted-foreground">+</p>
                                         <p className="text-xs font-bold uppercase tracking-widest text-emerald-500">Digital</p>
                                    </div>
                                </div>
                             </div>
                        </div>
                        
                        {/* Decorative floating cards */}
                        <motion.div 
                            animate={{ y: [0, -10, 0] }}
                            transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                            className="absolute -top-6 -right-6 p-6 rounded-2xl bg-background border border-border/10 shadow-xl backdrop-blur-md hidden md:block"
                        >
                            <span className="text-xs font-bold uppercase text-emerald-500">Growth</span>
                            <div className="text-2xl font-bold">+124%</div>
                        </motion.div>

                        <motion.div 
                            animate={{ y: [0, 10, 0] }}
                            transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
                            className="absolute -bottom-6 -left-6 p-6 rounded-2xl bg-background border border-border/10 shadow-xl backdrop-blur-md hidden md:block"
                        >
                            <span className="text-xs font-bold uppercase text-emerald-500">Demand</span>
                            <div className="text-2xl font-bold">Scalable</div>
                        </motion.div>
                    </div>
                </div>
            </div>
        </section>
    );
}
