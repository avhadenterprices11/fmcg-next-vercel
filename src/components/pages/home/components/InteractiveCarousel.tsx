"use client"

import { useState, useEffect, useCallback, useRef } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import { type ICarousel as Card } from '@/models/Carousel';
import { CarouselCard } from './CarouselCard';

const cinematicTransition = {
    type: "spring" as const,
    stiffness: 90,
    damping: 28,
    mass: 1.1,
    velocity: 2
};

// Calculate circular distance
const getCircularDistance = (from: number, to: number, total: number): number => {
    const direct = to - from;
    const forward = direct >= 0 ? direct : direct + total;
    const backward = direct <= 0 ? direct : direct - total;
    return Math.abs(forward) <= Math.abs(backward) ? forward : backward;
};

// Get card properties based on distance from active
const getCardProperties = (distance: number) => {
    const absDistance = Math.abs(distance);

    if (absDistance === 0) {
        // Center card - dominant
        return {
            scale: 1.05,
            opacity: 1,
            zIndex: 30,
            blur: 0
        };
    } else if (absDistance === 1) {
        // Adjacent cards - clearly visible
        return {
            scale: 1.0, // Set to 1.0 for consistent gap calculation
            opacity: 0.9, // Higher opacity
            zIndex: 20,
            blur: 0
        };
    } else if (absDistance === 2) {
        // Second tier - visible but receding
        return {
            scale: 0.85,
            opacity: 0.5,
            zIndex: 10,
            blur: 1
        };
    } else {
        // Background cards - faint
        return {
            scale: 0.75,
            opacity: 0.25,
            zIndex: 5,
            blur: 2
        };
    }
};

interface InteractiveCarouselProps {
    cards: Card[];
}

export function InteractiveCarousel({ cards }: InteractiveCarouselProps) {
    const [activeIndex, setActiveIndex] = useState(1); // Start with card index 1 (second card)
    const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);
    const [rotation, setRotation] = useState(-60); // Start at -60 to show second card (index 1)

    // Responsive Dimensions State
    // Initialize with mostly Desktop defaults but check window if available to avoid big hydration shift
    // However, for SSR consistency, we start with a default and update.
    const [dimensions, setDimensions] = useState({
        radius: 935,  // Recalculated for Width 1000 + 80px gap
        width: 1000,
        height: 500
    });

    const [isPortable, setIsPortable] = useState(false); // Track if mobile/tablet for conditional rendering adjustments

    // Handle Resize
    useEffect(() => {
        const handleResize = () => {
            const width = window.innerWidth;

            if (width < 768) {
                // Mobile
                setDimensions({
                    radius: 340, // Recalculated for Width 300 + 40px gap (tighter)
                    width: 300,
                    height: 380
                });
                setIsPortable(true);
            } else if (width < 1280) {
                // Tablet / Laptop
                setDimensions({
                    radius: 762, // Recalculated for Width 800 + 80px gap
                    width: 800,
                    height: 420
                });
                setIsPortable(true);
            } else {
                // Desktop (Default)
                setDimensions({
                    radius: 935,  // Recalculated for Width 1000 + 80px gap
                    width: 1000,
                    height: 500
                });
                setIsPortable(false);
            }
        };

        // Initial check
        handleResize();

        window.addEventListener('resize', handleResize);
        return () => window.removeEventListener('resize', handleResize);
    }, []);

    // Swipe Handling
    const onDragEnd = (event: any, info: any) => {
        const threshold = 50; // Drag pixel threshold
        const velocityThreshold = 100; // Velocity threshold

        if (info.offset.x > threshold || info.velocity.x > velocityThreshold) {
            handlePrevious();
        } else if (info.offset.x < -threshold || info.velocity.x < -velocityThreshold) {
            handleNext();
        }
    };


    // Auto-advance every 5 seconds (slowed down slightly)
    useEffect(() => {
        const interval = setInterval(() => {
            if (hoveredIndex === null) { // Pause on hover
                setRotation((prev) => prev - 60); // Continue rotating forward
                setActiveIndex((prev) => (prev + 1) % cards.length);
            }
        }, 5000);
        return () => clearInterval(interval);
    }, [hoveredIndex, cards.length]);

    const handlePrevious = useCallback(() => {
        setRotation((prev) => prev + 60); // Rotate backward
        setActiveIndex((prev) => (prev - 1 + cards.length) % cards.length);
    }, [cards.length]);

    const handleNext = useCallback(() => {
        setRotation((prev) => prev - 60); // Rotate forward
        setActiveIndex((prev) => (prev + 1) % cards.length);
    }, [cards.length]);

    const handleCardClick = (index: number) => {
        if (index !== activeIndex) {
            const distance = getCircularDistance(activeIndex, index, cards.length);
            setRotation((prev) => prev - distance * 60);
            setActiveIndex(index);
        }
    };

    // Keyboard Navigation
    useEffect(() => {
        const handleKeyDown = (e: KeyboardEvent) => {
            if (e.key === 'ArrowLeft') {
                handlePrevious();
            } else if (e.key === 'ArrowRight') {
                handleNext();
            }
        };

        window.addEventListener('keydown', handleKeyDown);
        return () => window.removeEventListener('keydown', handleKeyDown);
    }, [handlePrevious, handleNext]);


    // Calculate rotation angle - 60 degrees per card for complete 360° circle
    // Calculate rotation angle - dynamic based on cards length
    const anglePerCard = 360 / cards.length;
    const rotationAngle = rotation;

    return (
        <div className="w-full max-w-[1800px] h-[500px] md:h-[800px] relative perspective-container"
            role="region"
            aria-roledescription="carousel"
            aria-label="Case Studies Carousel">

            {/* 3D Perspective Container */}
            <motion.div // Changed to motion.div for drag handling on container
                className="relative w-full h-full flex items-center justify-center cursor-grab active:cursor-grabbing"
                style={{
                    perspective: '3000px',
                    perspectiveOrigin: 'center center'
                }}
                drag="x"
                dragConstraints={{ left: 0, right: 0 }}
                dragElastic={0.05}
                onDragEnd={onDragEnd}
            >
                {/* Rotating Ring Container */}
                <motion.div
                    className="relative"
                    style={{
                        width: dimensions.width,
                        height: dimensions.height,
                        transformStyle: 'preserve-3d',
                    }}
                    initial={{ rotateY: -60 }} // Match initial state of rotation state (-60)
                    animate={{
                        rotateY: rotationAngle
                    }}
                    transition={cinematicTransition}
                >
                    {/* Cards positioned on the ring */}
                    {cards.map((card, index) => {
                        // Normalize the angle to create infinite loop effect
                        const baseAngle = anglePerCard * index;

                        const distance = getCircularDistance(activeIndex, index, cards.length);
                        const properties = getCardProperties(distance);
                        const isActive = index === activeIndex;
                        const isHovered = hoveredIndex === index && !isActive;

                        // Dynamic Transform calculation
                        const getTransform = (hovered: boolean) =>
                            `rotateY(${baseAngle}deg) translateZ(${dimensions.radius}px) scale(${hovered ? properties.scale * 1.02 : properties.scale
                            })`;

                        return (
                            <motion.div
                                key={String(card._id)}
                                className="absolute" // Removed cursor-pointer here to avoid conflict, relying on parent grab
                                style={{
                                    width: dimensions.width,
                                    height: dimensions.height,
                                    left: 0,
                                    top: 0,
                                    transformStyle: 'preserve-3d',
                                    backfaceVisibility: 'visible',
                                    zIndex: properties.zIndex
                                }}
                                // Set initial to match the first render calculation to avoid shift
                                initial={{
                                    transform: `rotateY(${baseAngle}deg) translateZ(${dimensions.radius}px) scale(${properties.scale})`,
                                    opacity: properties.opacity,
                                    filter: `blur(${properties.blur}px)`
                                }}
                                animate={{
                                    transform: getTransform(isHovered),
                                    opacity: properties.opacity,
                                    filter: `blur(${properties.blur}px)`
                                }}
                                transition={cinematicTransition}
                                onClick={(e) => {
                                    // Prevent click propagation if it was a drag (optional optimization, but simple click is fine)
                                    handleCardClick(index);
                                }}
                                onHoverStart={() => setHoveredIndex(index)}
                                onHoverEnd={() => setHoveredIndex(null)}
                                role="group"
                                aria-roledescription="slide"
                                aria-label={`${index + 1} of ${cards.length}`}
                                aria-current={isActive ? 'true' : undefined}
                            >
                                <CarouselCard card={card} isActive={isActive} isPortable={isPortable} />
                            </motion.div>
                        );
                    })}
                </motion.div>
            </motion.div>

            {/* Navigation Arrows - Adjusted for Mobile */}
            <button
                className="absolute left-4 md:left-12 top-1/2 -translate-y-1/2 w-12 h-12 md:w-16 md:h-16 rounded-full bg-white dark:bg-neutral-900 border border-neutral-200 dark:border-neutral-800 flex items-center justify-center z-40 lg:z-10 shadow-lg group hover:bg-black dark:hover:bg-white transition-all duration-300 hover:scale-110 active:scale-95 ease-out"
                onClick={handlePrevious}
                aria-label="Previous Slide"
            >
                <div
                    className="text-black dark:text-white group-hover:text-white dark:group-hover:text-black transition-colors duration-300"
                >
                    <ChevronLeft className="w-5 h-5 md:w-6 md:h-6" />
                </div>
            </button>

            <button
                className="absolute right-4 md:right-12 top-1/2 -translate-y-1/2 w-12 h-12 md:w-16 md:h-16 rounded-full bg-white dark:bg-neutral-900 border border-neutral-200 dark:border-neutral-800 flex items-center justify-center z-40 lg:z-10 shadow-lg group hover:bg-black dark:hover:bg-white transition-all duration-300 hover:scale-110 active:scale-95 ease-out"
                onClick={handleNext}
                aria-label="Next Slide"
            >
                <div
                    className="text-black dark:text-white group-hover:text-white dark:group-hover:text-black transition-colors duration-300"
                >
                    <ChevronRight className="w-5 h-5 md:w-6 md:h-6" />
                </div>
            </button>

            {/* Pagination Dots */}
            <div className="absolute -bottom-4 md:bottom-8 left-1/2 -translate-x-1/2 flex gap-2 z-10 transition-colors duration-300">
                {cards.map((_, index) => (
                    <button
                        key={index}
                        onClick={() => handleCardClick(index)}
                        className="transition-all p-2"
                        aria-label={`Go to slide ${index + 1}`}
                        aria-current={index === activeIndex ? 'true' : undefined}
                    >
                        <div
                            className="rounded-full bg-black dark:bg-white transition-colors duration-300"
                            style={{
                                width: activeIndex === index ? '10px' : '8px',
                                height: activeIndex === index ? '10px' : '8px',
                                opacity: activeIndex === index ? 1 : 0.2
                            }}
                        />
                    </button>
                ))}
            </div>
        </div>
    );
}
