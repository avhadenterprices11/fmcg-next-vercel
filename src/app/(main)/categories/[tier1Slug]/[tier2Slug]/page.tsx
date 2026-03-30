'use client';

import { use } from 'react';
import { useRouter, notFound } from 'next/navigation';
import { SubCategoryFocus } from '../../_components/SubCategoryFocus';
import { getTier2BySlug } from '../../_components/utils/categoryHelpers';
import { CategoryTier3 } from '../../_components/types';

export default function Tier3Page({ params }: { params: Promise<{ tier1Slug: string, tier2Slug: string }> | { tier1Slug: string, tier2Slug: string } }) {
    const resolvedParams = params instanceof Promise ? use(params) : params;
    const router = useRouter();

    const tier2 = getTier2BySlug(resolvedParams.tier1Slug, resolvedParams.tier2Slug);

    if (!tier2) {
        return notFound();
    }

    const handleSelect = (item: CategoryTier3) => {
        router.push(`/categories/${resolvedParams.tier1Slug}/${resolvedParams.tier2Slug}/${item.id}`, { scroll: false });
    };

    return (
        <SubCategoryFocus
            items={tier2.tier3}
            onSelect={handleSelect}
            parentTitle={tier2.name}
            parentSubtitle={tier2.description}
        />
    );
}
