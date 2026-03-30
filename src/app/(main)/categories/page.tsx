'use client';

import { useRouter } from 'next/navigation';
import { HeroMenu } from './_components/HeroMenu';
import { CATEGORIES } from './_components/data';
import { useCategoryHover } from './_components/CategoryHoverContext';
import { CategoryTier1 } from './_components/types';

export default function CategoriesRootPage() {
    const router = useRouter();
    const { setHoveredImage } = useCategoryHover();

    const handleSelect = (item: CategoryTier1) => {
        router.push(`/categories/${item.id}`, { scroll: false });
        setHoveredImage(null); // Reset hover state on navigate
    };

    const handleHover = (item: CategoryTier1 | null) => {
        setHoveredImage(item ? item.image : null);
    };

    return (
        <HeroMenu
            items={CATEGORIES}
            onSelect={handleSelect}
            onHover={handleHover}
        />
    );
}