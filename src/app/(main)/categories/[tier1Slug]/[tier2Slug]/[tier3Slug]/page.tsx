'use client';

import { use } from 'react';
import { useRouter, notFound } from 'next/navigation';
import { BrandGallery } from '../../../_components/BrandGallery';
import { getTier3BySlug } from '../../../_components/utils/categoryHelpers';
import { getBrandsByTier3 } from '../../../_components/utils/brandHelpers';

export default function BrandsPage({ params }: { params: Promise<{ tier1Slug: string, tier2Slug: string, tier3Slug: string }> | { tier1Slug: string, tier2Slug: string, tier3Slug: string } }) {
    const resolvedParams = params instanceof Promise ? use(params) : params;
    const router = useRouter();

    const tier3 = getTier3BySlug(resolvedParams.tier1Slug, resolvedParams.tier2Slug, resolvedParams.tier3Slug);

    if (!tier3) {
        return notFound();
    }

    const brands = getBrandsByTier3(tier3.id);

    const handleBack = () => {
        router.push(`/categories/${resolvedParams.tier1Slug}/${resolvedParams.tier2Slug}`, { scroll: false });
    };

    return (
        <BrandGallery
            items={brands}
            parentTitle={tier3.name}
            parentSubtitle={tier3.description}
            onBack={handleBack}
        />
    );
}
