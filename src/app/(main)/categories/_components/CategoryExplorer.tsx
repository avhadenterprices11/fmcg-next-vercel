'use client';

import { useState, useEffect, useRef } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import { CATEGORIES } from './data';
import { CategoryTier1, CategoryTier2, CategoryTier3 } from './types';
import { getBrandsByTier3 } from './utils/brandHelpers';

import { HeroMenu } from './HeroMenu';
import { SubCategoryFocus } from './SubCategoryFocus';
import { BrandGallery } from './BrandGallery';
import { NavigationControls } from './NavigationControls';

type ViewState =
    | { type: 'TIER1' }
    | { type: 'TIER2'; tier1: CategoryTier1 }
    | { type: 'TIER3'; tier1: CategoryTier1; tier2: CategoryTier2 }
    | { type: 'BRANDS'; tier1: CategoryTier1; tier2: CategoryTier2; tier3: CategoryTier3 };

export const CategoryExplorer = () => {
    const [viewState, setViewState] = useState<ViewState>({ type: 'TIER1' });
    const [hoveredTier1, setHoveredTier1] = useState<CategoryTier1 | null>(null);
    const [isRestored, setIsRestored] = useState(false);

    const containerRef = useRef<HTMLDivElement>(null);
    const isFirstRender = useRef(true);

    // Restore state from Session Storage on mount
    useEffect(() => {
        const savedState = sessionStorage.getItem('category_explorer_state');
        if (savedState) {
            try {
                setViewState(JSON.parse(savedState));
            } catch (e) {
                console.warn('Failed to parse category state', e);
            }
        }
        setIsRestored(true);
    }, []);

    // Save state to Session Storage on change
    useEffect(() => {
        if (isRestored) {
            sessionStorage.setItem('category_explorer_state', JSON.stringify(viewState));
        }
    }, [viewState, isRestored]);

    // Scroll to top of category explorer on view change if needed
    useEffect(() => {
        if (isFirstRender.current) {
            isFirstRender.current = false;
            return;
        }

        window.scrollTo({ top: 0, behavior: 'smooth' });
    }, [viewState]);

    // --- NAVIGATION ---

    const handleSelectTier1 = (tier1: CategoryTier1) => {
        setViewState({ type: 'TIER2', tier1 });
        setHoveredTier1(null); // Reset hover state
    };

    const handleSelectTier2 = (tier2: CategoryTier2) => {
        if ('tier1' in viewState) {
            setViewState({ type: 'TIER3', tier1: viewState.tier1, tier2 });
        }
    };

    const handleSelectTier3 = (tier3: CategoryTier3) => {
        if ('tier1' in viewState && 'tier2' in viewState) {
            setViewState({ type: 'BRANDS', tier1: viewState.tier1, tier2: viewState.tier2, tier3 });
        }
    };

    const handleHome = () => setViewState({ type: 'TIER1' });

    // Back handler (optional now, but kept for safety or mobile gestures)
    const handleBack = () => {
        if (viewState.type === 'TIER2') setViewState({ type: 'TIER1' });
        if (viewState.type === 'TIER3') setViewState({ type: 'TIER2', tier1: viewState.tier1 });
        if (viewState.type === 'BRANDS') setViewState({ type: 'TIER3', tier1: viewState.tier1, tier2: viewState.tier2 });
    };

    // --- CONTENT DERIVATION ---

    let bgImage = CATEGORIES[0].image; // Default fallback
    let content;

    switch (viewState.type) {
        case 'TIER1':
            bgImage = hoveredTier1 ? hoveredTier1.image : CATEGORIES[0].image;
            content = (
                <HeroMenu
                    items={CATEGORIES}
                    onSelect={handleSelectTier1}
                    onHover={setHoveredTier1}
                />
            );
            break;

        case 'TIER2':
            bgImage = viewState.tier1.image;
            content = (
                <SubCategoryFocus
                    items={viewState.tier1.tier2}
                    onSelect={handleSelectTier2}
                    parentTitle={viewState.tier1.name}
                    parentSubtitle={viewState.tier1.tradeGuidance} // Using trade guidance as subtitle for context
                />
            );
            break;

        case 'TIER3':
            bgImage = viewState.tier2.image || viewState.tier1.image;
            content = (
                <SubCategoryFocus
                    items={viewState.tier2.tier3}
                    onSelect={handleSelectTier3}
                    parentTitle={viewState.tier2.name}
                    parentSubtitle={viewState.tier2.description}
                />
            );
            break;

        case 'BRANDS':
            bgImage = viewState.tier3.image || viewState.tier2.image;
            const brands = getBrandsByTier3(viewState.tier3.id);
            content = (
                <BrandGallery
                    items={brands}
                    parentTitle={viewState.tier3.name}
                    parentSubtitle={viewState.tier3.description}
                    onBack={handleBack}
                />
            );
            break;
    }

    // --- BREADCRUMBS ---
    const getBreadcrumbs = () => {
        const breadcrumbs = [];

        if (viewState.type === 'TIER2') {
            breadcrumbs.push({ label: viewState.tier1.name, isActive: true });
        }

        if (viewState.type === 'TIER3') {
            breadcrumbs.push({
                label: viewState.tier1.name,
                onClick: () => handleSelectTier1(viewState.tier1)
            });
            breadcrumbs.push({ label: viewState.tier2.name, isActive: true });
        }

        if (viewState.type === 'BRANDS') {
            breadcrumbs.push({
                label: viewState.tier1.name,
                onClick: () => handleSelectTier1(viewState.tier1)
            });
            breadcrumbs.push({
                label: viewState.tier2.name,
                onClick: () => handleSelectTier2(viewState.tier2)
            });
            breadcrumbs.push({ label: viewState.tier3.name, isActive: true });
        }

        return breadcrumbs;
    };

    return (
        <div ref={containerRef} className="min-h-screen w-full bg-background text-foreground relative font-sans selection:bg-foreground/30">

            {/* Dynamic Background Layer */}
            <div className="fixed inset-0 h-screen z-0">
                <motion.div
                    key={bgImage} // Triggers animation on change
                    initial={{ opacity: 0, scale: 1.05 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 1.2, ease: "easeInOut" }}
                    className="w-full h-full relative"
                >
                    <div
                        className="absolute inset-0 bg-cover bg-center"
                        style={{ backgroundImage: `url('${bgImage}')` }}
                    />
                    <div className="absolute inset-0 bg-background/60" /> {/* Theme overlay */}
                    <div className="absolute inset-0 bg-linear-to-r from-background/90 via-background/40 to-transparent" /> {/* Gradient for text readability */}
                </motion.div>
            </div>

            {/* Navigation Controls */}
            <NavigationControls
                breadcrumbs={getBreadcrumbs()}
                onHome={handleHome}
            />

            {/* Main Content Area */}
            <AnimatePresence mode="wait">
                <motion.div
                    key={viewState.type}
                    initial={{ opacity: 0, scale: 0.98, filter: "blur(4px)" }}
                    animate={{ opacity: 1, scale: 1, filter: "blur(0px)" }}
                    exit={{ opacity: 0, scale: 1.02, filter: "blur(4px)" }}
                    transition={{ duration: 0.5, ease: "easeInOut" }}
                    className="relative z-10 w-full h-full flex"
                >
                    {content}
                </motion.div>
            </AnimatePresence>

        </div>
    );
};
