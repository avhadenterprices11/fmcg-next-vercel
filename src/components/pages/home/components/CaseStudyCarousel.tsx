import * as motion from "motion/react-client";
import { InteractiveCarousel } from './InteractiveCarousel';
import { type ICarousel } from '@/models/Carousel';

interface CaseStudyCarouselProps {
    items: ICarousel[];
}

export function CaseStudyCarousel({ items }: CaseStudyCarouselProps) {
    return (
        <motion.section
            className="relative w-full min-h-[50vh] md:min-h-screen bg-background flex items-center justify-center overflow-hidden py-20 md:py-0 transition-colors duration-500"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8 }}
        >
            {/* Carousel Container */}
            <InteractiveCarousel cards={items} />
        </motion.section>
    );
}

// Previous sub-components have been moved to CarouselCard.tsx and InteractiveCarousel.tsx
