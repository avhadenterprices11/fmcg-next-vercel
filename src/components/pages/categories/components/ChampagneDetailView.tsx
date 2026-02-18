"use client";

import { motion } from "motion/react";
import { ArrowLeft, Sparkles } from "lucide-react";
import { customEasing } from "../constants/config";
import { CATEGORIES } from "../data/categories.data";

interface ChampagneDetailViewProps {
    onBack: () => void;
    onNavigate: (page: string, param?: string) => void;
}

export default function ChampagneDetailView({ onBack, onNavigate }: ChampagneDetailViewProps) {
    const wineData = CATEGORIES.find(c => c.id === 'wine');
    const champagneData = wineData?.tier2?.find(t => t.name === 'Champagne & Sparkling');

    return (
        <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.5, ease: customEasing }}
            className="relative w-full py-12"
        >
            <div className="flex gap-4 p-4 mb-8">
                <motion.button
                    onClick={onBack}
                    className="rounded-2xl bg-card border border-border p-4 hover:bg-muted transition-colors duration-300"
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                >
                    <ArrowLeft size={24} className="text-foreground" />
                </motion.button>

                <div className="flex-1 p-4 rounded-2xl bg-muted border border-border">
                    <h2 className="text-2xl font-bold text-foreground tracking-tight">
                        Champagne & Sparkling
                    </h2>
                </div>
            </div>

            <div className="p-12 mt-6 bg-muted/50 rounded-3xl border border-border">
                {champagneData?.tier3 ? (
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                        {champagneData.tier3.map((item, index) => (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, y: 10 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ delay: index * 0.05 }}
                                className="bg-card p-6 rounded-2xl border border-border hover:border-emerald-500 cursor-pointer transition-all group"
                                onClick={() => onNavigate('brands', item)}
                            >
                                <div className="flex items-center gap-4">
                                    <div className="w-10 h-10 rounded-full bg-muted flex items-center justify-center text-muted-foreground group-hover:bg-emerald-50 group-hover:text-emerald-600 transition-colors">
                                        <Sparkles size={20} />
                                    </div>
                                    <span className="font-bold text-foreground/80 group-hover:text-foreground">{item}</span>
                                </div>
                            </motion.div>
                        ))}
                    </div>
                ) : (
                    <div className="flex items-center justify-center min-h-[400px]">
                        <p className="text-muted-foreground text-xl font-medium">
                            Champagne portfolio catalog coming soon
                        </p>
                    </div>
                )}
            </div>
        </motion.div>
    );
}
