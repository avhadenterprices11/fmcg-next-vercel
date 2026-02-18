"use client";

import { useState, useMemo, useCallback, createElement } from "react";
import { motion, AnimatePresence, LayoutGroup } from "motion/react";
import { ArrowLeft, Wine, Sparkles, Beer, Martini, ChevronRight, ShoppingBag } from "lucide-react";
import { AdaptiveBentoGrid, BentoCard } from "@/components/ui/bento";
import type { BentoDataItem } from "@/components/ui/bento";
import { CATEGORIES } from "@/components/pages/categories/data/categories.data";
import type { CategoryTier1, CategoryTier2 } from "@/components/pages/categories/types/category.types";

// ============================================
// Icon Mapping
// ============================================

const CATEGORY_ICONS: Record<string, React.ElementType> = {
    spirits: Wine,
    wine: Sparkles,
    beer: Beer,
    cocktails: Martini,
    'shop-all': ShoppingBag,
};

function getCategoryIcon(id: string, size = 56) {
    const IconComponent = CATEGORY_ICONS[id] || Wine;
    return createElement(IconComponent, { size, strokeWidth: 1 });
}

// ============================================
// State Types
// ============================================

type ViewState =
    | { type: 'main' }
    | { type: 'detail'; category: CategoryTier1 }
    | { type: 'items'; category: CategoryTier1; subcategory: CategoryTier2 };

// ============================================
// Spring Config
// ============================================

const MORPH_SPRING = {
    type: "spring" as const,
    stiffness: 200,
    damping: 30,
    mass: 1,
};

// ============================================
// Main Component
// ============================================

export default function DynamicDataBentoPage() {
    const [viewState, setViewState] = useState<ViewState>({ type: 'main' });

    // Convert categories to bento data
    const mainGridData: BentoDataItem[] = useMemo(() => {
        const items: BentoDataItem[] = CATEGORIES.map((category) => ({
            id: category.id,
            title: category.name,
            icon: getCategoryIcon(category.id),
            // subtitle: category.descriptor, // Hidden for cleaner view
            image: category.image,
        }));

        // Insert Shop All at 3rd position (index 2)
        items.splice(2, 0, {
            id: 'shop-all',
            title: 'Shop All',
            icon: getCategoryIcon('shop-all'),
            subtitle: 'Browse our complete collection',
        });

        return items;
    }, []);

    // Helper to generate stable IDs
    const toSlug = (text: string) => text.toLowerCase().replace(/\s+/g, '-').replace(/[^\w-]+/g, '');

    // Get detail view data (Category Hero + Subcategories)
    const detailData: BentoDataItem[] = useMemo(() => {
        if (viewState.type !== 'detail' && viewState.type !== 'items') return [];

        // 1. Hero Item (The Category itself)
        const heroItem: BentoDataItem = {
            id: viewState.category.id,
            title: viewState.category.name,
            icon: getCategoryIcon(viewState.category.id, 80),
            description: viewState.category.tradeGuidance,
            image: viewState.category.image,
        };

        // 2. Subcards (Subcategories) - No Subtitles, No Sub-items
        const subItems: BentoDataItem[] = viewState.category.tier2.map((sub) => ({
            id: `sub-${toSlug(sub.name)}`, // Namespace ID to avoid collision with Category ID
            title: sub.name,
            // items prop REMOVED to hide sub-tiers in card
        }));

        return [heroItem, ...subItems];
    }, [viewState]);

    // Get items view data (Subcategory Hero + Items)
    const itemsData: BentoDataItem[] = useMemo(() => {
        if (viewState.type !== 'items') return [];

        // 1. Hero Item (The Subcategory) - Matches clicked card ID
        const heroItem: BentoDataItem = {
            id: `sub-${toSlug(viewState.subcategory.name)}`, // Match Namespaced ID!
            title: viewState.subcategory.name,
            subtitle: `${viewState.subcategory.tier3?.length ?? 0} Items`,
            image: viewState.category.image,
        };

        // 2. Items
        const subItems: BentoDataItem[] = (viewState.subcategory.tier3 ?? []).map((item, idx) => ({
            id: `item-${idx}`,
            title: item,
        }));

        // Ensure at least some items to trigger layout
        return [heroItem, ...subItems];
    }, [viewState]);

    // Navigation handlers
    const handleCategoryClick = useCallback((id: string) => {
        const category = CATEGORIES.find(c => c.id === id);
        if (category) {
            setViewState({ type: 'detail', category });
        }
    }, []);

    const handleSubcategoryClick = useCallback((id: string) => {
        if (viewState.type === 'detail') {
            // Check if it's the hero (category id)
            if (id === viewState.category.id) {
                setViewState({ type: 'main' }); // Go back
                return;
            }

            // Find subcategory by slug ID
            const subcategory = viewState.category.tier2.find(sub => toSlug(sub.name) === id);
            if (subcategory) {
                setViewState({ type: 'items', category: viewState.category, subcategory });
            }
        }
    }, [viewState]);

    // Handle Item click or Hero click in Items view
    const handleItemClick = useCallback((id: string) => {
        if (viewState.type === 'items') {
            // If hero clicked (matches subcategory slug)
            if (id === toSlug(viewState.subcategory.name)) {
                setViewState({ type: 'detail', category: viewState.category });
                return;
            }
            // Item clicked - do nothing or show toast
        }
    }, [viewState]);

    const handleBack = useCallback(() => {
        if (viewState.type === 'items') {
            setViewState({ type: 'detail', category: viewState.category });
        } else if (viewState.type === 'detail') {
            setViewState({ type: 'main' });
        }
    }, [viewState]);

    // Determine current title
    const currentTitle = useMemo(() => {
        if (viewState.type === 'main') return 'All Categories';
        if (viewState.type === 'detail') return viewState.category.name;
        return viewState.subcategory.name;
    }, [viewState]);

    // Current data to display
    const currentData = useMemo(() => {
        if (viewState.type === 'main') return mainGridData;
        if (viewState.type === 'detail') return detailData;
        return itemsData;
    }, [viewState.type, mainGridData, detailData, itemsData]);

    // Unified Click Handler
    const handleCardClick = useCallback((id: string) => {
        if (viewState.type === 'main') {
            handleCategoryClick(id);
        } else if (viewState.type === 'detail') {
            handleSubcategoryClick(id);
        } else if (viewState.type === 'items') {
            handleItemClick(id);
        }
    }, [viewState.type, handleCategoryClick, handleSubcategoryClick, handleItemClick]);

    return (
        <div className="min-h-screen bg-background">
            {/* Header */}
            <div className="sticky top-0 z-50 bg-background/90 backdrop-blur-xl border-b border-border">
                <div className="max-w-[1800px] mx-auto px-6 py-4">
                    <div className="flex items-center gap-4">
                        {/* Back Button */}
                        <AnimatePresence mode="wait">
                            {viewState.type !== 'main' && (
                                <motion.button
                                    initial={{ opacity: 0, x: -20 }}
                                    animate={{ opacity: 1, x: 0 }}
                                    exit={{ opacity: 0, x: -20 }}
                                    onClick={handleBack}
                                    className="p-2 rounded-xl bg-muted hover:bg-muted/80 transition-colors"
                                >
                                    <ArrowLeft size={20} className="text-foreground" />
                                </motion.button>
                            )}
                        </AnimatePresence>

                        {/* Title */}
                        <motion.div layout transition={MORPH_SPRING}>
                            <h1 className="text-2xl font-bold text-foreground">{currentTitle}</h1>
                            <p className="text-sm text-muted-foreground">
                                {viewState.type === 'main' && `${CATEGORIES.length} categories`}
                                {viewState.type === 'detail' && `${viewState.category.tier2.length} subcategories`}
                                {viewState.type === 'items' && `${viewState.subcategory.tier3?.length ?? 0} items`}
                            </p>
                        </motion.div>

                        {/* Breadcrumb */}
                        {viewState.type !== 'main' && (
                            <motion.div
                                initial={{ opacity: 0 }}
                                animate={{ opacity: 1 }}
                                className="ml-auto flex items-center gap-2 text-sm text-muted-foreground"
                            >
                                <span
                                    className="cursor-pointer hover:text-foreground transition-colors"
                                    onClick={() => setViewState({ type: 'main' })}
                                >
                                    Categories
                                </span>
                                {viewState.type === 'detail' && (
                                    <>
                                        <ChevronRight size={14} />
                                        <span className="text-foreground">{viewState.category.name}</span>
                                    </>
                                )}
                                {viewState.type === 'items' && (
                                    <>
                                        <ChevronRight size={14} />
                                        <span
                                            className="cursor-pointer hover:text-foreground transition-colors"
                                            onClick={() => setViewState({ type: 'detail', category: viewState.category })}
                                        >
                                            {viewState.category.name}
                                        </span>
                                        <ChevronRight size={14} />
                                        <span className="text-foreground">{viewState.subcategory.name}</span>
                                    </>
                                )}
                            </motion.div>
                        )}
                    </div>
                </div>
            </div>

            {/* Content - Unified Grid */}
            <div className="max-w-[1800px] mx-auto px-6 py-8">
                <AdaptiveBentoGrid
                    data={currentData}
                    onCardClick={handleCardClick}
                    layoutGroupId="dynamic-bento"
                    useHeroPattern={viewState.type !== 'main'}
                    className="w-full"
                />
            </div>
        </div>
    );
}
