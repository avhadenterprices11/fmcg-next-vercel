"use client";

import { motion } from "motion/react";
import { customEasing } from "../constants/config";

interface BentoItemProps {
    icon: React.ReactNode;
    title: string;
    className?: string;
    onClick?: () => void;
    isDimmed?: boolean;
}

export default function BentoItem({ icon, title, className, onClick, isDimmed }: BentoItemProps) {
    return (
        <motion.div
            className={`
                relative rounded-3xl bg-card border border-border p-8 flex flex-col items-center justify-center cursor-pointer overflow-hidden group hover:border-border/80
                ${className}
                ${isDimmed ? 'opacity-40 grayscale pointer-events-none' : 'opacity-100 grayscale-0'}
            `}
            whileHover={isDimmed ? {} : { scale: 1.01 }}
            whileTap={isDimmed ? {} : { scale: 0.98 }}
            transition={{ duration: 0.4, ease: customEasing }}
            onClick={!isDimmed ? onClick : undefined}
        >
            <motion.div
                className="text-foreground group-hover:text-emerald-600 transition-colors duration-500 mb-6"
                whileHover={{ scale: 1.1, rotate: 5 }}
                transition={{ duration: 0.4, ease: customEasing }}
            >
                {icon}
            </motion.div>

            <h3 className="text-2xl font-bold text-foreground text-center tracking-tight">
                {title}
            </h3>

            {/* Premium hover shadow/glow */}
            <div className="absolute inset-0 bg-gradient-to-br from-transparent via-transparent to-muted/50 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />
        </motion.div>
    );
}
