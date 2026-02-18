"use client";

import { useState } from "react";
import { Filter, X, ChevronDown, Check } from "lucide-react";
import { motion, AnimatePresence } from "motion/react";
import type { FilterType } from "../types/filter.types";

interface BrandFiltersProps {
    onFilterChange: (type: FilterType, value: string) => void;
    activeFilters: Record<FilterType, string>;
    totalCount: number;
    categoryOptions?: string[];
}

export default function BrandFilters({ onFilterChange, activeFilters, totalCount, categoryOptions = [] }: BrandFiltersProps) {

    const [isMobileFiltersOpen, setIsMobileFiltersOpen] = useState(false);

    // Clean Dropdown Component
    const FilterDropdown = ({ label, type, options }: { label: string, type: FilterType, options: string[] }) => {
        const [isOpen, setIsOpen] = useState(false);
        const activeValue = activeFilters[type];

        return (
            <div className="relative" onMouseEnter={() => setIsOpen(true)} onMouseLeave={() => setIsOpen(false)}>
                <button
                    className={`
                 flex items-center gap-2 px-4 py-2 text-sm font-medium transition-all duration-200 border-b-2
                 ${activeValue !== 'all' || isOpen
                            ? 'border-foreground text-foreground'
                            : 'border-transparent text-muted-foreground hover:text-foreground'}
              `}
                >
                    <span>{label}</span>
                    {activeValue !== 'all' && (
                        <span className="bg-muted text-foreground px-1.5 py-0.5 rounded text-[10px] uppercase font-bold">
                            {activeValue}
                        </span>
                    )}
                    <ChevronDown className={`w-3 h-3 transition-transform ${isOpen ? 'rotate-180' : ''}`} />
                </button>

                <AnimatePresence>
                    {isOpen && (
                        <motion.div
                            initial={{ opacity: 0, y: 10 }}
                            animate={{ opacity: 1, y: 0 }}
                            exit={{ opacity: 0, y: 10 }}
                            className="absolute top-full left-0 min-w-[200px] bg-card border border-border shadow-xl rounded-lg overflow-hidden py-2 z-50"
                        >
                            <button
                                onClick={() => { onFilterChange(type, 'all'); setIsOpen(false); }}
                                className="w-full text-left px-4 py-2 text-sm text-muted-foreground hover:bg-muted hover:text-foreground flex items-center justify-between group"
                            >
                                All
                                {activeValue === 'all' && <Check className="w-3 h-3 text-emerald-600" />}
                            </button>
                            {options.map(opt => (
                                <button
                                    key={opt}
                                    onClick={() => { onFilterChange(type, opt); setIsOpen(false); }}
                                    className="w-full text-left px-4 py-2 text-sm text-foreground hover:bg-muted hover:text-foreground flex items-center justify-between group"
                                >
                                    {opt}
                                    {activeValue === opt && <Check className="w-3 h-3 text-emerald-600" />}
                                </button>
                            ))}
                        </motion.div>
                    )}
                </AnimatePresence>
            </div>
        );
    };

    return (
        <div className="sticky bottom-0 left-0 right-0 z-50 bg-background/90 backdrop-blur-xl border-t border-border md:sticky md:top-0 md:bottom-auto md:border-t-0 md:border-b">
            <div className="max-w-[1800px] mx-auto px-4 md:px-6 h-16 md:h-20 flex items-center justify-between">

                <div className="flex items-center gap-2 md:gap-6">
                    {/* Desktop Label / Mobile Trigger */}
                    <button
                        onClick={() => setIsMobileFiltersOpen(true)}
                        className="flex items-center gap-2 text-foreground font-bold uppercase tracking-widest text-xs md:border-r border-border md:pr-6 md:mr-2 hover:text-emerald-600 transition-colors"
                    >
                        <Filter className="w-4 h-4" />
                        Filters
                    </button>

                    {/* Desktop Filters */}
                    <div className="hidden md:flex items-center gap-2">
                        <FilterDropdown
                            label="Country"
                            type="country"
                            options={['United Kingdom', 'France', 'Italy', 'Spain', 'United States', 'Japan', 'Ireland', 'Scotland']}
                        />
                        <FilterDropdown
                            label="Category"
                            type="category"
                            options={categoryOptions}
                        />
                        <FilterDropdown
                            label="Focus"
                            type="use"
                            options={['On-Trade', 'Off-Trade', 'Cocktail']}
                        />
                    </div>
                </div>

                <div className="flex items-center gap-4 md:gap-6">
                    {/* Badge count */}
                    <div className="text-xs md:text-sm text-muted-foreground font-medium">
                        <span className="text-foreground font-bold">{totalCount}</span> <span className="hidden md:inline">Brands Verified</span><span className="md:hidden">Brands</span>
                    </div>

                    {/* Reset Button */}
                    {(activeFilters.country !== 'all' || activeFilters.use !== 'all' || activeFilters.category !== 'all') && (
                        <button
                            onClick={() => {
                                onFilterChange('country', 'all');
                                onFilterChange('use', 'all');
                                onFilterChange('category', 'all');
                            }}
                            className="text-[10px] md:text-xs font-bold text-red-500 hover:text-red-700 uppercase tracking-wider flex items-center gap-1"
                        >
                            <X className="w-3 h-3" /> Clear
                        </button>
                    )}
                </div>

            </div>

            {/* Mobile Filter Drawer Overlay */}
            <AnimatePresence>
                {isMobileFiltersOpen && (
                    <>
                        <motion.div
                            initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}
                            className="fixed inset-0 bg-black/40 backdrop-blur-sm z-[60]"
                            onClick={() => setIsMobileFiltersOpen(false)}
                        />
                        <motion.div
                            initial={{ y: "100%" }} animate={{ y: 0 }} exit={{ y: "100%" }}
                            transition={{ type: "spring", damping: 25, stiffness: 200 }}
                            className="fixed bottom-0 left-0 right-0 h-[85vh] bg-background border-t border-border rounded-t-3xl z-[70] flex flex-col shadow-2xl"
                        >
                            <div className="flex items-center justify-between p-6 border-b border-border">
                                <h3 className="text-lg font-bold text-foreground">Filters</h3>
                                <button onClick={() => setIsMobileFiltersOpen(false)} className="p-2 -mr-2 text-muted-foreground hover:text-foreground">
                                    <X className="w-6 h-6" />
                                </button>
                            </div>

                            <div className="flex-1 overflow-y-auto p-6 space-y-8">
                                {/* Country Section */}
                                <div className="space-y-3">
                                    <h4 className="text-xs font-bold uppercase tracking-widest text-muted-foreground">Region</h4>
                                    <div className="flex flex-wrap gap-2">
                                        {['United Kingdom', 'France', 'Italy', 'Spain', 'United States', 'Japan'].map(opt => (
                                            <button
                                                key={opt}
                                                onClick={() => onFilterChange('country', activeFilters.country === opt ? 'all' : opt)}
                                                className={`px-4 py-2 rounded-full text-sm font-medium border transition-all
                                                    ${activeFilters.country === opt
                                                        ? 'bg-foreground text-background border-foreground'
                                                        : 'bg-card border-border text-muted-foreground hover:border-foreground'}`}
                                            >
                                                {opt}
                                            </button>
                                        ))}
                                    </div>
                                </div>

                                {/* Category Section */}
                                <div className="space-y-3">
                                    <h4 className="text-xs font-bold uppercase tracking-widest text-muted-foreground">Category</h4>
                                    <div className="flex flex-wrap gap-2">
                                        {categoryOptions.slice(0, 10).map(opt => (
                                            <button
                                                key={opt}
                                                onClick={() => onFilterChange('category', activeFilters.category === opt ? 'all' : opt)}
                                                className={`px-4 py-2 rounded-full text-sm font-medium border transition-all
                                                    ${activeFilters.category === opt
                                                        ? 'bg-emerald-600 text-white border-emerald-600'
                                                        : 'bg-card border-border text-muted-foreground hover:border-emerald-500'}`}
                                            >
                                                {opt}
                                            </button>
                                        ))}
                                    </div>
                                </div>

                                {/* Use Section */}
                                <div className="space-y-3">
                                    <h4 className="text-xs font-bold uppercase tracking-widest text-muted-foreground">Focus</h4>
                                    <div className="flex flex-wrap gap-2">
                                        {['On-Trade', 'Off-Trade', 'Cocktail'].map(opt => (
                                            <button
                                                key={opt}
                                                onClick={() => onFilterChange('use', activeFilters.use === opt ? 'all' : opt)}
                                                className={`px-4 py-2 rounded-full text-sm font-medium border transition-all
                                                    ${activeFilters.use === opt
                                                        ? 'bg-foreground text-background border-foreground'
                                                        : 'bg-card border-border text-muted-foreground hover:border-foreground'}`}
                                            >
                                                {opt}
                                            </button>
                                        ))}
                                    </div>
                                </div>
                            </div>

                            <div className="p-6 border-t border-border bg-muted/10">
                                <button
                                    onClick={() => setIsMobileFiltersOpen(false)}
                                    className="w-full bg-foreground text-background py-3 rounded-lg font-bold text-base"
                                >
                                    Show {totalCount} Results
                                </button>
                            </div>
                        </motion.div>
                    </>
                )}
            </AnimatePresence>
        </div>
    );
}
