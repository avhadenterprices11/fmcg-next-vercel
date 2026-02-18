"use client";

import { useState, useMemo } from "react";
import { motion } from "motion/react";
import { Plus, Minus, RefreshCw, Grid, Sparkles } from "lucide-react";
import { AdaptiveBentoGrid } from "@/components/ui/bento";
import type { BentoDataItem } from "@/components/ui/bento";
import { getPattern, PATTERNS } from "@/components/ui/bento";

// Sample icons pool
import {
    Wine, Beer, Coffee, Grape, Leaf, Star, Gem, Package,
    Gift, Heart, Zap, Cloud, Sun, Moon
} from "lucide-react";

const ICONS = [Wine, Beer, Coffee, Grape, Leaf, Star, Gem, Package, Gift, Heart, Zap, Cloud, Sun, Moon];

// Generate sample data
function generateSampleData(count: number): BentoDataItem[] {
    const names = [
        "Spirits", "Wine & Champagne", "Beer & Cider", "Cocktail Mixers",
        "Whisky", "Vodka", "Rum", "Gin", "Tequila", "Cognac",
        "Liqueurs", "Craft Beer", "Premium Wines", "Sparkling"
    ];

    return Array.from({ length: count }, (_, i) => {
        const IconComponent = ICONS[i % ICONS.length];
        return {
            id: `item-${i}`,
            title: names[i % names.length],
            subtitle: `Category ${i + 1}`,
            icon: <IconComponent size={56} strokeWidth={1} />,
            items: i < 3 ? [`Sub-item ${i + 1}A`, `Sub-item ${i + 1}B`, `Sub-item ${i + 1}C`] : undefined,
        };
    });
}

export default function AdaptiveBentoPage() {
    const [itemCount, setItemCount] = useState(5);
    const [refreshKey, setRefreshKey] = useState(0);

    const sampleData = useMemo(
        () => generateSampleData(itemCount),
        [itemCount, refreshKey]
    );

    const currentPattern = getPattern(itemCount);

    const handleCardClick = (id: string, item: BentoDataItem) => {
        console.log("Card clicked:", id, item.title);
    };

    return (
        <div className="min-h-screen bg-background">
            {/* Header Controls */}
            <div className="sticky top-0 z-50 bg-background/90 backdrop-blur-xl border-b border-border">
                <div className="max-w-[1800px] mx-auto px-6 py-4">
                    <div className="flex items-center justify-between gap-6">
                        {/* Title */}
                        <div className="flex items-center gap-3">
                            <div className="p-2 rounded-xl bg-emerald-500/10 text-emerald-600">
                                <Grid size={24} />
                            </div>
                            <div>
                                <h1 className="text-xl font-bold text-foreground">Adaptive Bento Tester</h1>
                                <p className="text-sm text-muted-foreground">Test all 12 patterns</p>
                            </div>
                        </div>

                        {/* Controls */}
                        <div className="flex items-center gap-4">
                            {/* Item Count Selector */}
                            <div className="flex items-center gap-3 bg-muted rounded-2xl p-2">
                                <motion.button
                                    onClick={() => setItemCount(Math.max(1, itemCount - 1))}
                                    className="p-2 rounded-xl bg-card border border-border hover:bg-background transition-colors"
                                    whileHover={{ scale: 1.05 }}
                                    whileTap={{ scale: 0.95 }}
                                    disabled={itemCount <= 1}
                                >
                                    <Minus size={18} className={itemCount <= 1 ? "text-muted-foreground" : "text-foreground"} />
                                </motion.button>

                                <div className="min-w-[120px] text-center">
                                    <span className="text-3xl font-bold text-foreground">{itemCount}</span>
                                    <span className="text-sm text-muted-foreground ml-2">items</span>
                                </div>

                                <motion.button
                                    onClick={() => setItemCount(Math.min(14, itemCount + 1))}
                                    className="p-2 rounded-xl bg-card border border-border hover:bg-background transition-colors"
                                    whileHover={{ scale: 1.05 }}
                                    whileTap={{ scale: 0.95 }}
                                    disabled={itemCount >= 14}
                                >
                                    <Plus size={18} className={itemCount >= 14 ? "text-muted-foreground" : "text-foreground"} />
                                </motion.button>
                            </div>

                            {/* Refresh Button */}
                            <motion.button
                                onClick={() => setRefreshKey((k) => k + 1)}
                                className="p-3 rounded-xl bg-card border border-border hover:bg-muted transition-colors"
                                whileHover={{ scale: 1.05, rotate: 180 }}
                                whileTap={{ scale: 0.95 }}
                            >
                                <RefreshCw size={18} className="text-foreground" />
                            </motion.button>
                        </div>
                    </div>

                    {/* Pattern Quick Select */}
                    <div className="flex items-center gap-2 mt-4 overflow-x-auto pb-2 no-scrollbar">
                        <span className="text-xs font-medium text-muted-foreground shrink-0">Quick:</span>
                        {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12].map((num) => (
                            <motion.button
                                key={num}
                                onClick={() => setItemCount(num)}
                                className={`
                  px-3 py-1.5 text-sm font-medium rounded-lg transition-colors shrink-0
                  ${itemCount === num
                                        ? "bg-emerald-500 text-white"
                                        : "bg-muted text-muted-foreground hover:text-foreground hover:bg-muted/80"
                                    }
                `}
                                whileHover={{ scale: 1.05 }}
                                whileTap={{ scale: 0.95 }}
                            >
                                {num}
                            </motion.button>
                        ))}
                    </div>
                </div>
            </div>

            {/* Pattern Info */}
            <div className="max-w-[1800px] mx-auto px-6 py-6">
                <motion.div
                    key={currentPattern.id}
                    initial={{ opacity: 0, y: -10 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="flex items-center gap-4 p-4 rounded-2xl bg-muted/50 border border-border mb-6"
                >
                    <div className="p-3 rounded-xl bg-emerald-500/10 text-emerald-600">
                        <Sparkles size={20} />
                    </div>
                    <div>
                        <p className="text-sm text-muted-foreground">Active Pattern</p>
                        <h2 className="text-lg font-bold text-foreground capitalize">
                            {currentPattern.id} Pattern
                        </h2>
                    </div>
                    <div className="ml-auto flex items-center gap-6 text-sm text-muted-foreground">
                        <span>
                            <strong className="text-foreground">{currentPattern.gridColumns}</strong> columns
                        </span>
                        <span>
                            <strong className="text-foreground">{currentPattern.gridRows}</strong> rows
                        </span>
                        <span>
                            <strong className="text-foreground">{currentPattern.placements.length}</strong> slots
                        </span>
                    </div>
                </motion.div>

                {/* Bento Grid - stable layoutGroupId enables FLIP morph animations */}
                <AdaptiveBentoGrid
                    data={sampleData}
                    onCardClick={handleCardClick}
                    layoutGroupId="bento-tester"
                />

                {/* Pattern Gallery */}
                <div className="mt-16 pt-12 border-t border-border">
                    <h3 className="text-2xl font-bold text-foreground mb-8">All 12 Patterns</h3>
                    <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
                        {Array.from(PATTERNS.entries()).map(([count, pattern]) => (
                            <motion.button
                                key={count}
                                onClick={() => setItemCount(count)}
                                className={`
                  p-6 rounded-2xl border transition-all text-left
                  ${itemCount === count
                                        ? "bg-emerald-500/10 border-emerald-500"
                                        : "bg-card border-border hover:border-muted-foreground"
                                    }
                `}
                                whileHover={{ scale: 1.02 }}
                                whileTap={{ scale: 0.98 }}
                            >
                                <div className="flex items-center gap-3 mb-3">
                                    <span className="text-3xl font-bold text-foreground">{count}</span>
                                    <span className="text-sm text-muted-foreground">items</span>
                                </div>
                                <h4 className="font-bold text-foreground capitalize mb-1">
                                    {pattern.id}
                                </h4>
                                <p className="text-xs text-muted-foreground">
                                    {pattern.gridColumns}×{pattern.gridRows} grid
                                </p>
                            </motion.button>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
}
