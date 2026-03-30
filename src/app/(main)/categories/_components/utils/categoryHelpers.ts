import { CATEGORIES } from '../data';
import { CategoryTier1, CategoryTier2, CategoryTier3, ID } from '../types';

export const getTier1BySlug = (tier1Slug: ID): CategoryTier1 | undefined => {
    return CATEGORIES.find(c => c.id === tier1Slug);
};

export const getTier2BySlug = (tier1Slug: ID, tier2Slug: ID): CategoryTier2 | undefined => {
    const tier1 = getTier1BySlug(tier1Slug);
    if (!tier1) return undefined;
    return tier1.tier2.find(c => c.id === tier2Slug);
};

export const getTier3BySlug = (tier1Slug: ID, tier2Slug: ID, tier3Slug: ID): CategoryTier3 | undefined => {
    const tier2 = getTier2BySlug(tier1Slug, tier2Slug);
    if (!tier2) return undefined;
    return tier2.tier3.find(c => c.id === tier3Slug);
};
