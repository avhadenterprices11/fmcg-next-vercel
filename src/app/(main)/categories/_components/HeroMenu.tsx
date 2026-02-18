'use client';

import { motion, useMotionValue, useSpring } from 'framer-motion';
import { useState, useEffect, useRef } from 'react';
import { CategoryTier1 } from './types';
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';
import Link from 'next/link';
import { ArrowRight } from 'lucide-react';

interface HeroMenuProps {
    items: CategoryTier1[];
    onSelect: (item: CategoryTier1) => void;
    onHover: (item: CategoryTier1 | null) => void;
}

const StickerMenuItem = ({
    item,
    index,
    onSelect,
    setHoveredItem,
    hoveredItem,
    isMobile
}: {
    item: CategoryTier1,
    index: number,
    onSelect: (item: CategoryTier1) => void,
    setHoveredItem: (item: CategoryTier1 | null) => void,
    hoveredItem: CategoryTier1 | null,
    isMobile: boolean
}) => {
    const containerRef = useRef<HTMLDivElement>(null);
    const charsRef = useRef<(HTMLSpanElement | null)[]>([]);
    const tlRef = useRef<gsap.core.Timeline | null>(null);

    const isHovered = hoveredItem?.id === item.id;
    const isDimmed = !isMobile && hoveredItem && !isHovered;

    useGSAP(() => {
        gsap.set(charsRef.current, { y: 0 });

        const tl = gsap.timeline({ paused: true });
        tlRef.current = tl;

        // Premium Stagger
        tl.to(charsRef.current, {
            y: -10,
            x: 10,  // Forward lean
            duration: 0.5,
            ease: "expo.out",
            stagger: {
                amount: 0.15,
                from: "start"
            }
        });

    }, { scope: containerRef });

    useGSAP(() => {
        if (isHovered) {
            tlRef.current?.play();
        } else {
            tlRef.current?.reverse();
        }
    }, { dependencies: [isHovered] });

    return (
        <div
            ref={containerRef}
            className={`relative cursor-pointer group z-10 py-2 select-none transition-all duration-700 ease-out flex items-baseline ${isDimmed ? 'opacity-20 blur-[2px] scale-95 origin-left' : 'opacity-100 scale-100 origin-left'
                }`}
            onMouseEnter={() => !isMobile && setHoveredItem(item)}
            onMouseLeave={() => !isMobile && setHoveredItem(null)}
            onClick={() => onSelect(item)}
        >
            <span className={`text-xs md:text-sm font-mono mr-4 md:mr-8 transition-colors duration-300 -translate-y-2 md:-translate-y-4 ${isHovered ? 'text-foreground' : 'text-muted-foreground'}`}>
                {`0${index + 1}`}
            </span>

            <div className="flex items-center justify-start flex-nowrap whitespace-nowrap overflow-visible">
                {item.name.split('').map((char, i) => (
                    <span
                        key={`${index}-${i}`}
                        ref={(el) => { charsRef.current[i] = el }}
                        className="inline-block relative text-4xl sm:text-6xl md:text-8xl lg:text-[9rem] font-black uppercase tracking-tighter leading-[0.85]"
                    >
                        {char === ' ' ? '\u00A0' : char}
                    </span>
                ))}
            </div>
        </div>
    );
};

export const HeroMenu = ({ items, onSelect, onHover }: HeroMenuProps) => {
    const [hoveredItem, setHoveredItem] = useState<CategoryTier1 | null>(null);

    // Mouse tracking for cursor
    const mouseX = useMotionValue(0);
    const mouseY = useMotionValue(0);

    const cursorX = useSpring(mouseX, { stiffness: 120, damping: 20, mass: 0.5 });
    const cursorY = useSpring(mouseY, { stiffness: 120, damping: 20, mass: 0.5 });

    const [isMobile, setIsMobile] = useState(false);

    useEffect(() => {
        const checkMobile = () => setIsMobile(window.innerWidth < 768);
        checkMobile();
        window.addEventListener('resize', checkMobile);
        return () => window.removeEventListener('resize', checkMobile);
    }, []);

    useEffect(() => {
        if (isMobile) return; // Disable cursor on mobile

        const moveCursor = (e: MouseEvent) => {
            mouseX.set(e.clientX);
            mouseY.set(e.clientY);
        };
        window.addEventListener('mousemove', moveCursor);
        return () => window.removeEventListener('mousemove', moveCursor);
    }, [mouseX, mouseY, isMobile]);

    const handleHover = (item: CategoryTier1 | null) => {
        setHoveredItem(item);
        onHover(item);
    };

    return (
        <div className="w-full min-h-screen flex items-center relative overflow-hidden pl-4 md:pl-32">

            {/* Context Label - Vertical Sidebar */}
            <div className="absolute left-4 md:left-12 top-1/2 -translate-y-1/2 hidden md:flex flex-col items-center gap-8 opacity-40">
                <div className="w-px h-32 bg-foreground/50"></div>
                <p className="text-xs font-mono text-foreground uppercase tracking-[0.3em] [writing-mode:vertical-rl] rotate-180">
                    Select Category
                </p>
                <div className="w-px h-32 bg-foreground/50"></div>
            </div>

            {/* Custom Cursor Follower - Hidden on mobile */}
            <motion.div
                style={{
                    x: cursorX,
                    y: cursorY,
                    translateX: '-50%',
                    translateY: '-50%'
                }}
                className="fixed top-0 left-0 pointer-events-none z-50 hidden md:flex flex-col items-center justify-center gap-6 translate-z-0"
                initial={{ opacity: 0 }}
                animate={{
                    opacity: hoveredItem ? 1 : 0
                }}
                transition={{ duration: 0.2 }}
            >
                {hoveredItem && (
                    <>
                        {/* Image Container */}
                        <motion.div
                            layoutId="active-image"
                            className="relative w-[240px] h-[320px] lg:w-[300px] lg:h-[400px] overflow-hidden rounded-[2rem] border-[8px] border-white shadow-2xl bg-black"
                            initial={{ scale: 0, rotate: 15 }}
                            animate={{
                                scale: 1,
                                rotate: 0,
                                transition: {
                                    type: "spring",
                                    stiffness: 300,
                                    damping: 20
                                }
                            }}
                            exit={{
                                scale: 0,
                                rotate: -15,
                                opacity: 0,
                                transition: { duration: 0.2 }
                            }}
                        >
                            <img
                                src={hoveredItem.image}
                                alt={hoveredItem.name}
                                className="w-full h-full object-cover scale-110"
                            />
                            {/* Overlay */}
                            <div className="absolute inset-0 bg-black/10" />
                        </motion.div>

                        {/* Separated Explore Button */}
                        <motion.div
                            initial={{ opacity: 0, y: -20 }}
                            animate={{
                                opacity: 1,
                                y: 0,
                                transition: { delay: 0.1, duration: 0.3 }
                            }}
                            exit={{ opacity: 0, y: -10 }}
                            className="bg-foreground text-background px-6 py-2.5 rounded-full font-mono text-xs font-bold uppercase tracking-widest flex items-center gap-2 shadow-lg"
                        >
                            Explore <ArrowRight className="w-3 h-3" />
                        </motion.div>
                    </>
                )}
            </motion.div>

            {/* List Menu */}
            <div className="flex flex-col gap-1 md:gap-2 relative z-20">
                {items.map((item, index) => (
                    <StickerMenuItem
                        key={item.id}
                        item={item}
                        index={index}
                        onSelect={onSelect}
                        setHoveredItem={handleHover}
                        hoveredItem={hoveredItem}
                        isMobile={isMobile}
                    />
                ))}

                {/* Shop All Option */}
                <Link href="/brands" className="mt-12 md:mt-16 group block w-fit pl-1 md:pl-2 relative z-30">
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ delay: 1, duration: 1 }}
                        className="flex items-center gap-4 group-hover:gap-8 transition-all duration-500"
                    >
                        <div className="h-px w-8 bg-foreground/40 group-hover:bg-foreground group-hover:w-16 transition-all duration-500" />
                        <span className="text-sm md:text-base font-mono uppercase tracking-[0.2em] text-foreground/60 group-hover:text-foreground transition-colors flex items-center gap-3">
                            Shop All <ArrowRight className="w-4 h-4 opacity-0 -translate-x-4 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-500 text-foreground" />
                        </span>
                    </motion.div>
                </Link>
            </div>
        </div>
    );
};
