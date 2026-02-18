"use client";

import { motion } from "motion/react";
import { ArrowLeft } from "lucide-react";
import { customEasing } from "../constants/config";
import { CATEGORIES } from "../data/categories.data";

interface BeerCiderDetailViewProps {
    onBack: () => void;
    onNavigate: (page: string, param?: string) => void;
}

export default function BeerCiderDetailView({ onBack, onNavigate }: BeerCiderDetailViewProps) {
    const beerData = CATEGORIES.find(c => c.id === 'beer');
    const beerList = beerData?.tier2?.find(t => t.name === 'Beer');
    const ciderList = beerData?.tier2?.find(t => t.name === 'Cider');

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
                        Beer & Cider
                    </h2>
                </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <motion.div
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.5, delay: 0.1, ease: customEasing }}
                    className="p-12 bg-muted/50 rounded-3xl border border-border"
                >
                    <h3 className="text-3xl font-bold text-foreground mb-8 tracking-tight">Beer Categories</h3>
                    <ul className="space-y-4">
                        {beerList?.tier3?.map((category, index) => (
                            <motion.li
                                key={index}
                                initial={{ opacity: 0, x: -10 }}
                                animate={{ opacity: 1, x: 0 }}
                                transition={{ delay: 0.2 + index * 0.05, ease: customEasing }}
                                className="text-muted-foreground flex items-center gap-4 text-xl cursor-pointer hover:text-emerald-600 transition-colors"
                                onClick={() => onNavigate('brands', category)}
                            >
                                <span className="w-2 h-2 rounded-full bg-muted-foreground/50" />
                                <span className="font-medium">{category}</span>
                            </motion.li>
                        ))}
                    </ul>
                </motion.div>

                <motion.div
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.5, delay: 0.1, ease: customEasing }}
                    className="p-12 bg-muted/50 rounded-3xl border border-border"
                >
                    <h3 className="text-3xl font-bold text-foreground mb-8 tracking-tight">Cider Categories</h3>
                    <ul className="space-y-4">
                        {ciderList?.tier3?.map((category, index) => (
                            <motion.li
                                key={index}
                                initial={{ opacity: 0, x: -10 }}
                                animate={{ opacity: 1, x: 0 }}
                                transition={{ delay: 0.2 + index * 0.05, ease: customEasing }}
                                className="text-muted-foreground flex items-center gap-4 text-xl cursor-pointer hover:text-emerald-600 transition-colors"
                                onClick={() => onNavigate('brands', category)}
                            >
                                <span className="w-2 h-2 rounded-full bg-emerald-500" />
                                <span className="font-medium">{category}</span>
                            </motion.li>
                        ))}
                    </ul>
                </motion.div>
            </div>
        </motion.div>
    );
}
