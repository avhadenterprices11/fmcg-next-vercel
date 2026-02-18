"use client";

import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import {
    Wine, Sparkles, ShoppingBag, Beer, Martini,
    LayoutGrid, Briefcase, Tags, Globe
} from 'lucide-react';
import { OBJECTIVES } from '../data/objectives.data';
import type { ObjectiveId } from '../types/objective.types';
import BentoItem from './BentoItem';
import SpiritsDetailView from './SpiritsDetailView';
import ChampagneDetailView from './ChampagneDetailView';
import CocktailMixerDetailView from './CocktailMixerDetailView';
import BeerCiderDetailView from './BeerCiderDetailView';

// Icon Map for dynamic rendering
const iconMap: Record<string, React.ElementType> = {
    LayoutGrid,
    Briefcase,
    Tags,
    Globe,
    Martini
};

function CategoryHeader({ activeId, onSelect }: { activeId: ObjectiveId, onSelect: (id: ObjectiveId) => void }) {
    return (
        <div className="sticky top-0 z-40 bg-background/90 backdrop-blur-xl border-y border-border mb-8">
            <div className="max-w-[1800px] mx-auto px-4 md:px-6 h-16 md:h-20 flex items-center gap-6 overflow-x-auto no-scrollbar">

                {/* Label */}
                <div className="flex items-center gap-2 text-foreground font-bold uppercase tracking-widest text-xs md:border-r border-border md:pr-6 shrink-0">
                    <LayoutGrid className="w-4 h-4" />
                    <span>What are you looking to do?</span>
                </div>

                {/* Options - Desktop & Mobile Horizontal Scroll */}
                <div className="flex items-center gap-2 min-w-max">
                    {OBJECTIVES.map((option) => {
                        const Icon = iconMap[option.icon];
                        const isSelected = activeId === option.id;

                        return (
                            <button
                                key={option.id}
                                onClick={() => onSelect(option.id)}
                                className={`
                                    flex items-center gap-2 px-4 py-2 text-sm font-medium transition-all duration-200 border-b-2
                                    ${isSelected
                                        ? 'border-foreground text-foreground'
                                        : 'border-transparent text-muted-foreground hover:text-foreground hover:border-border'}
                                `}
                            >
                                <Icon className={`w-4 h-4 ${isSelected ? 'text-emerald-500' : ''}`} />
                                <span className="whitespace-nowrap">{option.label}</span>
                                {isSelected && (
                                    <span className="bg-muted text-foreground px-1.5 py-0.5 rounded text-[10px] uppercase font-bold ml-1">
                                        Selected
                                    </span>
                                )}
                            </button>
                        );
                    })}
                </div>
            </div>
        </div>
    );
}

export default function BeverageCategories({
    onNavigate
}: {
    onNavigate: (page: string, param?: string) => void
}) {
    const [showSpiritsDetail, setShowSpiritsDetail] = useState(false);
    const [showChampagneDetail, setShowChampagneDetail] = useState(false);
    const [showCocktailMixerDetail, setShowCocktailMixerDetail] = useState(false);
    const [showBeerCiderDetail, setShowBeerCiderDetail] = useState(false);
    const [activeObjective, setActiveObjective] = useState<ObjectiveId>('all');

    // Helper to determine if a card should be dimmed based on selection
    const shouldDim = (cardId: 'spirits' | 'champagne' | 'beer' | 'cocktail' | 'shop') => {
        if (activeObjective === 'all') return false;

        switch (activeObjective) {
            case 'source':
                return !['spirits', 'champagne', 'beer'].includes(cardId);
            case 'bulk':
                return cardId !== 'shop';
            case 'market':
                return !['shop', 'spirits'].includes(cardId);
            case 'cocktails':
                return !['cocktail', 'spirits'].includes(cardId);
            default:
                return false;
        }
    };

    return (
        <div className="space-y-8">
            <CategoryHeader activeId={activeObjective} onSelect={setActiveObjective} />

            <div className="max-w-[1800px] mx-auto px-4 md:px-6 py-12">
                <AnimatePresence mode="wait">
                    {!showSpiritsDetail && !showChampagneDetail && !showBeerCiderDetail && !showCocktailMixerDetail ? (
                        <motion.div
                            key="main-view"
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            exit={{ opacity: 0 }}
                            className="grid grid-cols-1 md:grid-cols-4 gap-6 auto-rows-[240px]"
                        >
                            {/* Spirit Card - Tall left column */}
                            <div className="row-span-2 md:row-span-2 col-span-1">
                                <BentoItem
                                    icon={<Wine size={64} strokeWidth={1} />}
                                    title="Spirits"
                                    className="h-full"
                                    onClick={() => setShowSpiritsDetail(true)}
                                    isDimmed={shouldDim('spirits')}
                                />
                            </div>

                            {/* Champagne Card - Wide horizontal */}
                            <div className="col-span-1 md:col-span-3 row-span-1">
                                <BentoItem
                                    icon={<Sparkles size={64} strokeWidth={1} />}
                                    title="Champagne"
                                    className="h-full"
                                    onClick={() => setShowChampagneDetail(true)}
                                    isDimmed={shouldDim('champagne')}
                                />
                            </div>

                            {/* Shop All Card */}
                            <div className="row-span-1 md:row-span-1 col-span-1 md:col-span-2">
                                <BentoItem
                                    icon={<ShoppingBag size={56} strokeWidth={1} />}
                                    title="Shop All"
                                    className="h-full bg-black text-white border-transparent hover:!border-transparent"
                                    onClick={() => onNavigate('brands')}
                                    isDimmed={shouldDim('shop')}
                                />
                            </div>

                            {/* Beer & Cider Card */}
                            <div className="row-span-1 md:row-span-2 col-span-1">
                                <BentoItem
                                    icon={<Beer size={64} strokeWidth={1} />}
                                    title="Beer & Cider"
                                    className="h-full"
                                    onClick={() => setShowBeerCiderDetail(true)}
                                    isDimmed={shouldDim('beer')}
                                />
                            </div>

                            {/* Cocktail mixer tonic Card - Wide horizontal */}
                            <div className="col-span-1 md:col-span-3 row-span-1">
                                <BentoItem
                                    icon={<Martini size={56} strokeWidth={1} />}
                                    title="Cocktail mixer tonic"
                                    className="h-full"
                                    onClick={() => setShowCocktailMixerDetail(true)}
                                    isDimmed={shouldDim('cocktail')}
                                />
                            </div>
                        </motion.div>
                    ) : showSpiritsDetail ? (
                        <SpiritsDetailView onBack={() => setShowSpiritsDetail(false)} onNavigate={onNavigate} />
                    ) : showChampagneDetail ? (
                        <ChampagneDetailView onBack={() => setShowChampagneDetail(false)} onNavigate={onNavigate} />
                    ) : showCocktailMixerDetail ? (
                        <CocktailMixerDetailView onBack={() => setShowCocktailMixerDetail(false)} onNavigate={onNavigate} />
                    ) : (
                        <BeerCiderDetailView onBack={() => setShowBeerCiderDetail(false)} onNavigate={onNavigate} />
                    )}
                </AnimatePresence>
            </div>
        </div>
    );
}
