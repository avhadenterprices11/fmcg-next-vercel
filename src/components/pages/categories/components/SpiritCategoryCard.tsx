"use client";

import { motion } from "motion/react";
import { Wine } from "lucide-react";
import { customEasing } from "../constants/config";
import type { CategoryTier2 } from "../types/category.types";

interface SpiritCategoryCardProps {
    category: CategoryTier2;
    onClick: () => void;
}

export default function SpiritCategoryCard({ category, onClick }: SpiritCategoryCardProps) {
    return (
        <motion.div
            className="relative rounded-3xl bg-card border border-border p-8 flex flex-col items-center justify-center cursor-pointer overflow-hidden group min-h-[280px] hover:border-border/80"
            whileHover={{ scale: 1.01 }}
            whileTap={{ scale: 0.98 }}
            transition={{ duration: 0.4, ease: customEasing }}
            onClick={onClick}
        >
            <motion.div
                className="text-foreground group-hover:text-emerald-600 transition-colors duration-500 mb-6"
                whileHover={{ scale: 1.1, rotate: 5 }}
                transition={{ duration: 0.4, ease: customEasing }}
            >
                <Wine size={56} strokeWidth={1} />
            </motion.div>

            <h3 className="text-2xl font-bold text-foreground text-center tracking-tight">
                {category.name}
            </h3>

            <div className="absolute inset-0 bg-gradient-to-br from-transparent via-transparent to-muted/50 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />
        </motion.div>
    );
}
