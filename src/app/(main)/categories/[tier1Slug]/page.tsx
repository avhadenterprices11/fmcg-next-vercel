'use client';

import { useRouter } from 'next/navigation';
import { notFound } from 'next/navigation';
import { SubCategoryFocus } from '../_components/SubCategoryFocus';
import { getTier1BySlug } from '../_components/utils/categoryHelpers';
import { CategoryTier2 } from '../_components/types';
import { use } from 'react';

export default function Tier2Page({ params }: { params: Promise<{ tier1Slug: string }> | { tier1Slug: string } }) {
    // Safely unwrap params for Next.js 15+ compatibility alongside Next 14
    const resolvedParams = params instanceof Promise ? use(params) : params;
    
    const router = useRouter();
    const tier1 = getTier1BySlug(resolvedParams.tier1Slug);

    if (!tier1) {
        return notFound();
    }

    const handleSelect = (item: CategoryTier2) => {
        router.push(`/categories/${tier1.id}/${item.id}`, { scroll: false });
    };

    return (
        <SubCategoryFocus
            items={tier1.tier2}
            onSelect={handleSelect}
            parentTitle={tier1.name}
            parentSubtitle={tier1.tradeGuidance}
        />
    );
}
