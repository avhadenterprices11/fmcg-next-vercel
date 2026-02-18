"use client";

import { useParams, useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import { BRANDS } from "@/components/pages/brands/data/brands.data";
import type { PortfolioRange } from "@/components/pages/brands/types/brand.types";
import TradeApplicationSection from "@/components/pages/brands/components/TradeApplicationSection";
import { ArrowLeft, Check, AlertCircle, ArrowDown, ChevronRight, ChevronLeft, TrendingUp, Quote, Filter } from "lucide-react";
import { motion, useScroll, useTransform } from "motion/react";
import { use } from "react";
import Image from "next/image";

export default function BrandDetailPage({ params }: { params: Promise<{ id: string }> }) {
    // In Next.js App Router, params is a promise
    const resolvedParams = use(params);
    const id = resolvedParams.id;
    const router = useRouter();
    const brand = BRANDS.find(b => b.id === id);
    const { scrollY } = useScroll();

    // Parallax effect for hero
    const y = useTransform(scrollY, [0, 1000], [0, 400]);
    const opacity = useTransform(scrollY, [0, 500], [1, 0]);

    if (!brand) {
        return <div className="min-h-screen flex items-center justify-center">Brand not found</div>;
    }

    const getBestTradeUse = () => {
        const uses = [];
        if (brand.tradeCapabilities.onTradeFocused) uses.push('premium on-trade programs');
        if (brand.tradeCapabilities.exportAvailable) uses.push('export portfolio building');
        if (brand.tradeCapabilities.offTradeFocused) uses.push('retail distribution');
        if (brand.tradeCapabilities.privateLabel) uses.push('private label opportunities');

        if (uses.length === 0) return 'General trade discussions and market-specific enquiries.';

        return `Most commonly discussed for ${uses.slice(0, 2).join(', ')}${uses.length > 2 ? ', and complementary portfolio building' : ''}.`;
    };

    return (
        <div className="min-h-screen bg-background selection:bg-emerald-100 dark:selection:bg-emerald-900/30 selection:text-emerald-900 dark:selection:text-emerald-100 pb-32">

            {/* Immersive Hero (70vh mobile, 85vh desktop) */}
            <header className="relative h-[70vh] md:h-[85vh] w-full overflow-hidden bg-muted">
                <motion.div style={{ y, opacity }} className="relative w-full h-full">
                    {brand.image && (
                        <Image
                            src={brand.image}
                            alt={brand.name}
                            fill
                            className="object-cover"
                            priority
                            sizes="100vw"
                        />
                    )}
                </motion.div>
                <div className="absolute inset-0 bg-gradient-to-t from-background  via-background/60 to-transparent" />

                {/* Back Button */}
                <div className="absolute top-24 left-6 md:left-12 z-20">
                    <button
                        onClick={() => router.back()}
                        className="flex items-center gap-2 text-foreground/80 hover:text-foreground bg-background/20 hover:bg-background/40 backdrop-blur-md px-4 md:px-5 py-2 md:py-2.5 rounded-full transition-all text-xs md:text-sm font-medium border border-border/20 shadow-sm"
                    >
                        <ArrowLeft className="w-4 h-4" />
                        Back to Browsing
                    </button>
                </div>

                {/* Hero Content */}
                <div className="absolute bottom-0 left-0 w-full p-6 md:p-12 z-10 pb-16 md:pb-32">
                    <div className="max-w-7xl mx-auto">
                        <motion.div
                            initial={{ y: 30, opacity: 0 }}
                            animate={{ y: 0, opacity: 1 }}
                            transition={{ duration: 0.8, ease: "easeOut" }}
                        >
                            <div className="flex flex-wrap items-center gap-3 mb-6">
                                <span className="px-4 py-1.5 bg-emerald-500 text-white text-xs font-bold uppercase tracking-widest rounded-full shadow-lg shadow-emerald-500/20">
                                    {brand.category}
                                </span>
                                {brand.categoryFit?.filter(c => c !== brand.category).map((cat, idx) => (
                                    <span key={idx} className="px-4 py-1.5 bg-background/40 backdrop-blur-md border border-border/20 text-foreground/90 text-xs font-bold uppercase tracking-widest rounded-full">
                                        {cat}
                                    </span>
                                ))}
                                <span className="px-4 py-1.5 bg-background/40 backdrop-blur-md border border-border/20 text-foreground/90 text-xs font-bold uppercase tracking-widest rounded-full">
                                    {brand.country}
                                </span>
                            </div>

                            <h1 className="text-4xl sm:text-6xl md:text-8xl font-bold text-foreground mb-4 md:mb-6 tracking-tight leading-[0.95] md:leading-[0.9]">
                                {brand.name}
                            </h1>

                            <p className="text-lg md:text-2xl text-muted-foreground max-w-2xl font-medium leading-relaxed font-serif italic opacity-90">
                                "{brand.positioning}"
                            </p>
                        </motion.div>
                    </div>
                </div>
            </header>

            <div className="max-w-7xl mx-auto px-6 md:px-12 py-12 md:py-24 space-y-20 md:space-y-32">

                {/* 1. Overview Section */}
                <section id="overview" className="grid grid-cols-1 md:grid-cols-12 gap-12 md:gap-24 scroll-mt-32">
                    <div className="md:col-span-4 relative">
                        <div className="md:sticky md:top-32">
                            <h2 className="text-sm font-bold text-muted-foreground uppercase tracking-widest mb-4 md:mb-6 flex items-center gap-3">
                                <span className="w-8 h-[1px] bg-border"></span>
                                The Story
                            </h2>
                            <h3 className="text-2xl md:text-4xl font-serif text-foreground leading-tight mb-4 md:mb-6">
                                A legacy of <span className="italic text-emerald-600">craftsmanship</span> and distinction.
                            </h3>
                            <div className="w-12 h-1 bg-emerald-500 rounded-full" />
                        </div>
                    </div>
                    <div className="md:col-span-8 space-y-12">
                        <div className="relative">
                            <Quote className="absolute -top-4 -left-6 w-12 h-12 text-muted -z-10 transform -scale-x-100" />
                            <p className="text-xl md:text-2xl text-foreground/80 font-serif leading-relaxed whitespace-pre-line first-letter:text-5xl first-letter:font-bold first-letter:text-emerald-600 dark:first-letter:text-emerald-400 first-letter:float-left first-letter:mr-3 first-letter:mt-[-4px]">
                                {brand.description}
                            </p>
                        </div>

                        <div className="bg-card border border-border p-8 md:p-10 rounded-2xl shadow-2xl relative overflow-hidden group">
                            <div className="absolute top-0 right-0 w-64 h-64 bg-emerald-500/10 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2 group-hover:bg-emerald-500/20 transition-all duration-700" />

                            <div className="relative z-10">
                                <div className="flex items-center gap-3 mb-4 text-emerald-400">
                                    <TrendingUp className="w-5 h-5" />
                                    <h3 className="text-xs font-bold uppercase tracking-[0.2em]">Trade Analyst Verdict</h3>
                                </div>
                                <p className="text-lg md:text-2xl text-card-foreground leading-relaxed font-serif italic text-balance">
                                    "{getBestTradeUse()}"
                                </p>
                            </div>
                        </div>
                    </div>
                </section>

                {/* 2. Unified Trade Application Section (Isolated Component) */}
                <TradeApplicationSection />
            </div>

            {/* 4. Trade Specs Section (Light Mode) */}
            <section id="specs" className="bg-muted/30 border-t border-border py-16 md:py-24 scroll-mt-32">
                <div className="max-w-7xl mx-auto px-6 md:px-12">
                    <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
                        <div>
                            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4 md:mb-6">Trade Specifications</h2>
                            <p className="text-muted-foreground mb-6 md:mb-8 max-w-sm">
                                Comprehensive breakdown of distribution, compliance, and access requirements for this brand.
                            </p>

                            {/* Market Access List from Reference */}
                            <div className="mb-6 md:mb-8">
                                <h4 className="text-sm font-bold text-foreground mb-4">Market & Access</h4>
                                <ul className="space-y-3">
                                    {brand.marketConsiderations?.map((item, i) => (
                                        <li key={i} className="flex gap-3 text-sm text-muted-foreground">
                                            <span className="w-1.5 h-1.5 bg-muted-foreground/50 rounded-full mt-2 shrink-0" />
                                            {item}
                                        </li>
                                    ))}
                                </ul>
                            </div>

                            <button className="w-full md:w-auto bg-primary text-primary-foreground px-8 py-4 rounded-xl font-bold hover:bg-primary/90 transition-colors shadow-xl">
                                Download Sell Sheet
                            </button>
                        </div>

                        <div className="lg:col-span-2 grid grid-cols-1 sm:grid-cols-2 gap-4">
                            {/* Reference-style Capabilities Grid */}
                            <CapabilityCard label="Available for Export" sub="International markets" active={brand.tradeCapabilities.exportAvailable} />
                            <CapabilityCard label="Private Label" sub="White label programs" active={brand.tradeCapabilities.privateLabel} />
                            <CapabilityCard label="UK Distribution" sub="Domestic market access" active={brand.tradeCapabilities.ukDistribution} />
                            <CapabilityCard label="EU Distribution" sub="European market access" active={brand.tradeCapabilities.euDistribution} />
                            <CapabilityCard label="On-Trade Focused" sub="Bars, restaurants, hotels" active={brand.tradeCapabilities.onTradeFocused} />
                            <CapabilityCard label="Off-Trade Focused" sub="Retail, supermarkets" active={brand.tradeCapabilities.offTradeFocused} />
                        </div>
                    </div>
                </div>
            </section>



        </div >
    );
}

function CapabilityCard({ label, sub, active }: { label: string, sub: string, active: boolean }) {
    return (
        <div className={`border p-5 flex items-start gap-4 rounded-xl transition-all ${active ? 'border-emerald-500 bg-emerald-500/10 dark:bg-emerald-500/20' : 'border-border bg-card opacity-60'
            }`}>
            <div className={`mt-0.5 w-5 h-5 rounded-full flex items-center justify-center shrink-0 ${active ? 'bg-emerald-500 text-white' : 'bg-muted text-muted-foreground'}`}>
                {active ? <Check className="w-3 h-3" /> : <div className="w-2 h-0.5 bg-current" />}
            </div>
            <div>
                <p className="text-foreground font-bold text-sm">{label}</p>
                <p className="text-xs text-muted-foreground mt-0.5">{sub}</p>
            </div>
        </div>
    );
}
