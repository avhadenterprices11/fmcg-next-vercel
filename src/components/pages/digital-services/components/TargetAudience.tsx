"use client";
import { motion } from "framer-motion";
import { Globe, Factory, RefreshCw, Star, TrendingUp } from "lucide-react";
import { TARGET_AUDIENCE } from "../constants/digital-data";

const ICONS: Record<string, any> = {
    Globe,
    Factory,
    RefreshCw,
    Star,
    TrendingUp
};

export default function TargetAudience() {
    return (
        <section className="relative py-24 bg-muted/20">
            <div className="container px-4">
                <div className="flex flex-col items-center text-center space-y-4 mb-16">
                    <div className="px-4 py-1.5 rounded-full border border-border/10 bg-background text-xs font-bold uppercase tracking-widest text-emerald-500">
                        Who This Is For
                    </div>
                    <h2 className="text-3xl md:text-5xl font-bold tracking-tight">Built for Scalable Ambition</h2>
                    <p className="text-muted-foreground max-w-xl">
                        Our digital ecosystem is designed for brands ready to transition from local availability to global presence.
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {TARGET_AUDIENCE.map((item, idx) => {
                        const Icon = ICONS[item.icon];
                        return (
                            <motion.div
                                key={idx}
                                initial={{ opacity: 0, scale: 0.95 }}
                                whileInView={{ opacity: 1, scale: 1 }}
                                viewport={{ once: true }}
                                transition={{ delay: 0.1 * idx }}
                                className="group p-8 rounded-2xl bg-background border border-border/10 hover:border-emerald-500/30 hover:shadow-xl hover:shadow-emerald-500/5 transition-all duration-300"
                            >
                                <div className="flex items-start gap-4">
                                    <div className="w-12 h-12 rounded-xl bg-emerald-500/10 flex items-center justify-center text-emerald-500 shrink-0 group-hover:bg-emerald-500 group-hover:text-white transition-all duration-300">
                                        <Icon className="w-6 h-6" />
                                    </div>
                                    <div className="space-y-2">
                                        <h3 className="font-bold text-lg group-hover:text-emerald-500 transition-colors">{item.title}</h3>
                                        <p className="text-sm text-muted-foreground leading-relaxed">
                                            {item.description}
                                        </p>
                                    </div>
                                </div>
                            </motion.div>
                        );
                    })}
                </div>
            </div>
        </section>
    );
}
