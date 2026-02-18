"use client";

import { motion } from "motion/react";
import { ArrowLeft, Martini } from "lucide-react";
import { customEasing } from "../constants/config";
import { CATEGORIES } from "../data/categories.data";

interface CocktailMixerDetailViewProps {
    onBack: () => void;
    onNavigate: (page: string, param?: string) => void;
}

export default function CocktailMixerDetailView({ onBack, onNavigate }: CocktailMixerDetailViewProps) {
    const cocktailData = CATEGORIES.find(c => c.id === 'cocktails');

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
                        Cocktail Mixers & Tonics
                    </h2>
                </div>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
                <motion.div
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.5, delay: 0.1, ease: customEasing }}
                    className="lg:col-span-4 p-12 min-h-[400px] bg-muted/50 rounded-3xl border border-border flex flex-col justify-center"
                >
                    <h3 className="text-4xl font-bold text-foreground mb-6 tracking-tight">Premium Mixers</h3>
                    <p className="text-xl text-muted-foreground leading-relaxed text-balance">
                        Discover our curated selection of artisanal mixers, designed to elevate every cocktail serve.
                    </p>
                </motion.div>

                <div className="lg:col-span-8 grid grid-cols-1 md:grid-cols-2 gap-6">
                    {cocktailData?.tier2.map((category, index) => (
                        <motion.div
                            key={category.name}
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5, delay: 0.2 + index * 0.1, ease: customEasing }}
                            className="p-8 bg-card hover:bg-muted border border-border rounded-3xl flex flex-col justify-center items-center cursor-pointer group hover:border-border/80 transition-colors duration-300"
                            whileHover={{ scale: 1.02 }}
                            onClick={() => onNavigate('brands', category.name)} // Navigate to parent category or list tiers?
                        >
                            <motion.div
                                className="text-foreground group-hover:text-emerald-600 transition-colors duration-300 mb-6"
                                whileHover={{ scale: 1.1, rotate: 5 }}
                            >
                                <Martini size={56} strokeWidth={1} />
                            </motion.div>
                            <h3 className="text-2xl font-bold text-foreground mb-2 tracking-tight">
                                {category.name}
                            </h3>
                            <p className="text-muted-foreground text-center text-sm font-medium">
                                {category.tier3?.slice(0, 3).join(', ')}...
                            </p>
                        </motion.div>
                    ))}
                </div>
            </div>
        </motion.div>
    );
}
