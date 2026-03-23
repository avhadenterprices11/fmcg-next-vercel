"use client";
import { motion } from "framer-motion";
import { ArrowRight, Calendar, Mail } from "lucide-react";
import Link from "next/link";

export default function FinalCTA() {
    return (
        <section className="relative py-24 bg-background overflow-hidden border-t border-border/10">
            {/* Background Accents */}
            <div className="absolute inset-0 pointer-events-none">
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full bg-emerald-500/5 blur-[120px]" />
            </div>

            <div className="container relative z-10 px-4">
                <div className="max-w-4xl mx-auto text-center space-y-10">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="space-y-4"
                    >
                        <h2 className="text-4xl md:text-6xl font-bold tracking-tighter">
                            Ready to Scale Your Brand <br />
                            <span className="text-emerald-500">Across Markets?</span>
                        </h2>
                        <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
                            Let’s build your digital ecosystem and drive consistent growth across regions. Start your expansion journey today.
                        </p>
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.2 }}
                        className="flex flex-wrap items-center justify-center gap-6"
                    >
                        <button
                            onClick={() => window.location.href = '#enquiry'}
                            className="
                                relative group overflow-hidden px-10 py-5 rounded-full font-bold text-sm uppercase tracking-widest
                                flex items-center justify-center gap-2 transition-all duration-500 min-w-[240px]
                                bg-emerald-600 text-white hover:bg-emerald-500 hover:scale-[1.02] active:scale-[0.98]
                            "
                        >
                            Submit Brand Details
                            <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
                        </button>

                        <Link
                            href="/contact"
                            className="
                                px-10 py-5 rounded-full border border-border/10 bg-muted/30 backdrop-blur-md
                                font-bold text-sm uppercase tracking-widest hover:bg-muted/50 transition-all duration-300
                                flex items-center gap-2 group min-w-[240px] justify-center
                            "
                        >
                            <Calendar className="w-4 h-4 text-emerald-500" />
                            Book a Strategy Call
                        </Link>
                    </motion.div>
                </div>
            </div>
        </section>
    );
}
