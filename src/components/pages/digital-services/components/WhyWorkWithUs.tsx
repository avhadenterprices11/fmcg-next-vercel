"use client";
import { motion } from "framer-motion";
import { ShieldCheck, Award, Zap, BarChart, HeartHandshake } from "lucide-react";
import { WHY_WORK_WITH_US } from "../constants/digital-data";

const ICONS = [Zap, ShieldCheck, Award, BarChart, HeartHandshake];

export default function WhyWorkWithUs() {
    return (
        <section className="relative py-24 bg-background">
            <div className="container px-4">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
                    <div className="relative order-2 lg:order-1">
                        <div className="aspect-[4/3] bg-muted/30 border border-border/10 rounded-3xl overflow-hidden shadow-inner flex items-center justify-center">
                             {/* Decorative Graphic */}
                             <div className="relative w-48 h-48">
                                <motion.div 
                                    animate={{ rotate: 360 }}
                                    transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
                                    className="absolute inset-0 border-2 border-dashed border-emerald-500/20 rounded-full"
                                />
                                <div className="absolute inset-4 border-2 border-emerald-500/40 rounded-full" />
                                <div className="absolute inset-0 flex items-center justify-center">
                                    <div className="text-4xl font-black text-emerald-500">FMCG</div>
                                </div>
                             </div>
                        </div>
                        
                        {/* Highlights */}
                        <motion.div 
                            initial={{ x: -20, opacity: 0 }}
                            whileInView={{ x: 0, opacity: 1 }}
                            className="absolute -top-6 -right-6 p-6 rounded-2xl bg-background border border-border/10 shadow-2xl backdrop-blur-md"
                        >
                            <span className="text-xs font-bold uppercase text-emerald-500">Approach</span>
                            <div className="font-bold">Execution First</div>
                        </motion.div>
                    </div>

                    <div className="space-y-12 order-1 lg:order-2">
                        <div className="space-y-4">
                            <div className="inline-flex items-center gap-2 text-emerald-500 font-mono text-xs uppercase tracking-[0.2em]">
                                <div className="w-8 h-px bg-emerald-500/50" />
                                The Advantage
                            </div>
                            <h2 className="text-3xl md:text-5xl font-bold tracking-tight">Why Brands Work With Us</h2>
                        </div>

                        <div className="space-y-8">
                            {WHY_WORK_WITH_US.map((item, idx) => {
                                const Icon = ICONS[idx % ICONS.length];
                                return (
                                    <motion.div
                                        key={idx}
                                        initial={{ opacity: 0, x: 20 }}
                                        whileInView={{ opacity: 1, x: 0 }}
                                        viewport={{ once: true }}
                                        transition={{ delay: 0.1 * idx }}
                                        className="flex gap-6 group"
                                    >
                                        <div className="shrink-0 w-12 h-12 rounded-xl bg-muted border border-border/10 flex items-center justify-center text-emerald-500 group-hover:bg-emerald-500 group-hover:text-white transition-all duration-300">
                                            <Icon className="w-6 h-6" />
                                        </div>
                                        <div className="space-y-2">
                                            <h3 className="font-bold text-xl group-hover:text-emerald-500 transition-colors">{item.title}</h3>
                                            <p className="text-muted-foreground leading-relaxed">
                                                {item.description}
                                            </p>
                                        </div>
                                    </motion.div>
                                );
                            })}
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
