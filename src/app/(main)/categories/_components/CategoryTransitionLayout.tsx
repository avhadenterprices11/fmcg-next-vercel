'use client';

import { ReactNode, useRef, useContext } from 'react';
import { usePathname } from 'next/navigation';
import { motion, AnimatePresence } from 'framer-motion';
import { CATEGORIES } from './data';
import { useCategoryHover } from './CategoryHoverContext';
import { getTier1BySlug, getTier2BySlug, getTier3BySlug } from './utils/categoryHelpers';
import { NavigationControls, BreadcrumbItem } from './NavigationControls';

// HACK: To support exit animations with AnimatePresence in Next.js App Router,
// we freeze the router context for the exiting component.
import { LayoutRouterContext } from 'next/dist/shared/lib/app-router-context.shared-runtime';

function FrozenRouter(props: { children: React.ReactNode }) {
  const context = useContext(LayoutRouterContext);
  const frozen = useRef(context).current;
  
  // Safely provide the frozen context if it exists, otherwise just return children
  if (!LayoutRouterContext) return <>{props.children}</>;
  
  return (
    <LayoutRouterContext.Provider value={frozen}>
      {props.children}
    </LayoutRouterContext.Provider>
  );
}

export const CategoryTransitionLayout = ({ children }: { children: ReactNode }) => {
    const pathname = usePathname();
    const { hoveredImage } = useCategoryHover();

    // Parse URL to find the active tier components
    // Path example: /categories/spirits/whisky/scotch
    const segments = pathname.split('/').filter(Boolean); // ['categories', 'spirits', 'whisky', 'scotch']
    const tier1Slug = segments[1];
    const tier2Slug = segments[2];
    const tier3Slug = segments[3];
    
    // Determine the current step's logical background
    let bgImage = CATEGORIES[0].image; // fallback

    const tier1 = tier1Slug ? getTier1BySlug(tier1Slug) : undefined;
    const tier2 = tier2Slug && tier1Slug ? getTier2BySlug(tier1Slug, tier2Slug) : undefined;
    const tier3 = tier3Slug && tier1Slug && tier2Slug ? getTier3BySlug(tier1Slug, tier2Slug, tier3Slug) : undefined;

    if (tier3) {
        bgImage = tier3.image || (tier2?.image || (tier1?.image || CATEGORIES[0].image));
    } else if (tier2) {
        bgImage = tier2.image || (tier1?.image || CATEGORIES[0].image);
    } else if (tier1) {
        bgImage = tier1.image || CATEGORIES[0].image;
    } else {
        // We are on /categories root
        bgImage = hoveredImage || CATEGORIES[0].image;
    }

    // Determine Breadcrumbs
    const getBreadcrumbs = (): BreadcrumbItem[] => {
        const breadcrumbs: BreadcrumbItem[] = [];

        if (tier1) {
            breadcrumbs.push({
                label: tier1.name,
                href: `/categories/${tier1.id}`,
                isActive: !tier2 // Only active if there are no deeper segments
            });
        }

        if (tier2 && tier1) {
             // Make the previous one clickable, change isActive to false
            if (breadcrumbs[0]) breadcrumbs[0].isActive = false;
            
            breadcrumbs.push({
                label: tier2.name,
                href: `/categories/${tier1.id}/${tier2.id}`,
                isActive: !tier3
            });
        }

        if (tier3 && tier1 && tier2) {
            if (breadcrumbs[1]) breadcrumbs[1].isActive = false;
            
            breadcrumbs.push({
                label: tier3.name,
                href: `/categories/${tier1.id}/${tier2.id}/${tier3.id}`,
                isActive: true
            });
        }

        return breadcrumbs;
    };

    return (
        <div className="min-h-screen w-full bg-background text-foreground relative font-sans selection:bg-foreground/30">
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
            />

            {/* Main Content Area */}
            <AnimatePresence mode="wait">
                <motion.div
                    key={pathname} // Animate on route change
                    initial={{ opacity: 0, scale: 0.98, filter: "blur(4px)" }}
                    animate={{ opacity: 1, scale: 1, filter: "blur(0px)" }}
                    exit={{ opacity: 0, scale: 1.02, filter: "blur(4px)" }}
                    transition={{ duration: 0.5, ease: "easeInOut" }}
                    className="relative z-10 w-full h-full flex"
                >
                    <FrozenRouter>
                        {children}
                    </FrozenRouter>
                </motion.div>
            </AnimatePresence>
        </div>
    );
};
