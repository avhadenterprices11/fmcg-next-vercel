"use client";

import { useState, useMemo, useEffect } from "react";
import { useSearchParams, useRouter } from "next/navigation";
import { AnimatePresence, motion } from "motion/react";
import { BRANDS } from "../data/brands.data";
import BrandCard from "./BrandCard";
import BrandFilters from "./BrandFilters";
import { PaginationControls } from "@/components/pages/trade-opportunities/components/PaginationControls";
import type { FilterType } from "../types/filter.types";

export default function BrandGallery() {
    const searchParams = useSearchParams();
    const router = useRouter();
    const [currentPage, setCurrentPage] = useState(1);
    const PAGE_SIZE = 8;

    const [filters, setFilters] = useState<Record<FilterType, string>>({
        country: 'all',
        use: 'all',
        access: 'all',
        category: 'all'
    });

    // Initialize from URL on mount
    useEffect(() => {
        const categoryParam = searchParams.get('category');
        if (categoryParam) {
            setFilters(prev => ({ ...prev, category: categoryParam }));
        }
    }, [searchParams]);

    const handleFilterChange = (type: FilterType, value: string) => {
        setFilters(prev => ({ ...prev, [type]: value }));
        setCurrentPage(1);

        // precise URL sync for category
        if (type === 'category') {
            const params = new URLSearchParams(searchParams.toString());
            if (value === 'all') {
                params.delete('category');
            } else {
                params.set('category', value);
            }
            router.push(`?${params.toString()}`, { scroll: false });
        }
    };

    // Extract all unique categories and subcategories for the filter
    const categoryOptions = useMemo(() => {
        const options = new Set<string>();
        BRANDS.forEach(b => {
            options.add(b.category);
            b.categoryFit.forEach(fit => options.add(fit));
            // Also add portfolio range names if we want very granular filtering
            b.portfolioRanges.forEach(r => {
                r.categoryPath.split('→').forEach(p => options.add(p.trim()));
            });
        });
        return Array.from(options).sort();
    }, []);

    const filteredBrands = useMemo(() => {
        return BRANDS.filter(brand => {
            // Country
            if (filters.country !== 'all' && brand.country !== filters.country) return false;

            // Use
            if (filters.use !== 'all') {
                if (filters.use === 'On-Trade' && !brand.tradeCapabilities.onTradeFocused) return false;
                if (filters.use === 'Off-Trade' && !brand.tradeCapabilities.offTradeFocused) return false;
                if (filters.use === 'Cocktail' && !brand.categoryFit.includes('Ready Made Cocktails')) return false;
            }

            // Category Filter
            if (filters.category !== 'all') {
                const search = filters.category.toLowerCase();
                const matchesCategory = brand.category.toLowerCase() === search;
                const matchesFit = brand.categoryFit.some(f => f.toLowerCase() === search);
                const matchesRange = brand.portfolioRanges.some(r => r.categoryPath.toLowerCase().includes(search));
                const matchesProduct = brand.products.some(p => p.name.toLowerCase().includes(search));

                if (!matchesCategory && !matchesFit && !matchesRange && !matchesProduct) return false;
            }


            return true;
        });
    }, [filters]);

    const totalPages = Math.ceil(filteredBrands.length / PAGE_SIZE);
    const currentBrands = filteredBrands.slice(
        (currentPage - 1) * PAGE_SIZE,
        currentPage * PAGE_SIZE
    );

    return (
        <div className="bg-background min-h-screen relative flex flex-col-reverse md:block">

            {/* Sticky Filters: Bottom on Mobile, Top on Desktop */}
            <BrandFilters
                activeFilters={filters}
                onFilterChange={handleFilterChange}
                totalCount={filteredBrands.length}
                categoryOptions={categoryOptions}
            />

            <div className="max-w-[1800px] mx-auto px-4 md:px-6 py-8 md:py-16">
                <motion.div
                    layout
                    className="grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-x-3 gap-y-6 md:gap-x-6 md:gap-y-12"
                >
                    <AnimatePresence>
                        {currentBrands.map(brand => (
                            <BrandCard
                                key={brand.id}
                                brand={brand}
                            />
                        ))}
                    </AnimatePresence>
                </motion.div>

                <PaginationControls
                    currentPage={currentPage}
                    totalPages={totalPages}
                    onPageChange={setCurrentPage}
                />

                {filteredBrands.length === 0 && (
                    <div className="text-center py-24 border-t border-border mt-12">
                        <p className="text-muted-foreground text-lg mb-4">No brands match your selection.</p>
                        <button
                            onClick={() => setFilters({ country: 'all', use: 'all', access: 'all', category: 'all' })}
                            className="px-6 py-2 bg-foreground text-background font-bold rounded hover:bg-emerald-600 transition-colors"
                        >
                            Clear Filters
                        </button>
                    </div>
                )}
            </div>



        </div>
    );
}
