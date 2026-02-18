"use client";

import { useState } from "react";
import { motion } from "motion/react";
import { ArrowLeft } from "lucide-react";
import { customEasing } from "../constants/config";
import { CATEGORIES } from "../data/categories.data";
import type { CategoryTier2 } from "../types/category.types";
import SpiritCategoryCard from "./SpiritCategoryCard";

interface SpiritsDetailViewProps {
    onBack: () => void;
    onNavigate: (page: string, param?: string) => void;
}

export default function SpiritsDetailView({ onBack, onNavigate }: SpiritsDetailViewProps) {
    const spiritsData = CATEGORIES.find(c => c.id === 'spirits');
    // Default to first subcategory if available
    const [selectedSpirit, setSelectedSpirit] = useState<CategoryTier2 | undefined>(spiritsData?.tier2[0]);

    if (!spiritsData || !selectedSpirit) return null;

    return (
        <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.5, ease: customEasing }}
            className="relative w-full py-12"
        >
            {/* 4-column grid container */}
            <div className="grid grid-cols-1 lg:grid-cols-4 gap-8 min-h-[600px]">

                {/* LEFT COLUMN */}
                <div className="col-span-1 flex flex-col gap-6">
                    {/* Top Section - Back button and Spirits heading */}
                    <div className="flex gap-4 items-center">
                        <motion.button
                            onClick={onBack}
                            className="rounded-2xl bg-card border border-border p-4 hover:bg-muted transition-colors duration-300"
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                        >
                            <ArrowLeft size={24} className="text-foreground" />
                        </motion.button>

                        <div className="flex-1 rounded-2xl bg-muted border border-border py-4 px-8">
                            <h2 className="text-2xl font-bold text-foreground text-center tracking-tight">
                                Spirits
                            </h2>
                        </div>
                    </div>

                    {/* Selected Spirit Card */}
                    <motion.div
                        key={selectedSpirit.name}
                        initial={{ opacity: 0, scale: 0.98 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 0.4, ease: customEasing }}
                        className="flex-1 rounded-3xl bg-card border border-border p-8 flex flex-col"
                    >
                        <h3 className="text-4xl font-bold text-foreground mb-8 tracking-tight">
                            {selectedSpirit.name}
                        </h3>

                        <ul className="space-y-4">
                            {selectedSpirit.tier3?.map((subcategory, index) => (
                                <motion.li
                                    key={index}
                                    initial={{ opacity: 0, x: -10 }}
                                    animate={{ opacity: 1, x: 0 }}
                                    transition={{ delay: index * 0.05, ease: customEasing }}
                                    className="text-muted-foreground flex items-center gap-3 text-lg cursor-pointer hover:text-emerald-600 transition-colors"
                                    onClick={() => onNavigate('brands', subcategory)}
                                >
                                    <span className="w-1.5 h-1.5 rounded-full bg-emerald-500" />
                                    <span>{subcategory}</span>
                                </motion.li>
                            ))}
                        </ul>
                    </motion.div>
                </div>

                {/* RIGHT GRID - 3x2 grid of spirit categories */}
                <div className="col-span-3 grid grid-cols-1 md:grid-cols-3 gap-6">
                    {spiritsData.tier2.map((category, index) => (
                        <motion.div
                            key={category.name}
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: index * 0.1, duration: 0.5, ease: customEasing }}
                        >
                            <SpiritCategoryCard
                                category={category}
                                onClick={() => setSelectedSpirit(category)}
                            />
                        </motion.div>
                    ))}
                </div>
            </div>
        </motion.div>
    );
}
