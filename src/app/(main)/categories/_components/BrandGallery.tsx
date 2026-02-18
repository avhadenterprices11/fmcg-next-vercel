import { useRef, useEffect } from 'react';
import { motion } from 'framer-motion';
import Link from 'next/link';
import Image from 'next/image';
import { PackageSearch, ArrowLeft } from 'lucide-react';
import { ContextHero } from './ContextHero';

interface BrandItem extends Record<string, any> {
    id: string;
    name: string;
    image: string;
    description?: string;
}

interface BrandGalleryProps<T extends BrandItem> {
    items?: T[];
    parentTitle: string;
    parentSubtitle?: string;
    onBack?: () => void;
}

export const BrandGallery = <T extends BrandItem>({ items = [], parentTitle, parentSubtitle, onBack }: BrandGalleryProps<T>) => {
    const scrollContainerRef = useRef<HTMLDivElement>(null);

    // Enable horizontal scrolling with mouse wheel, but allow vertical scroll at edges
    useEffect(() => {
        const container = scrollContainerRef.current;
        if (!container) return;

        const handleWheel = (e: WheelEvent) => {
            if (e.deltaY === 0) return;

            const isScrollingRight = e.deltaY > 0;
            const scrollLeft = container.scrollLeft;
            const maxScrollLeft = container.scrollWidth - container.clientWidth;

            // Allow vertical scroll if we're at the edges
            // slightly loose check (< 5) to account for fractional pixels
            if (
                (!isScrollingRight && scrollLeft <= 0) ||
                (isScrollingRight && Math.abs(scrollLeft - maxScrollLeft) < 5)
            ) {
                return;
            }

            // Otherwise, prevent vertical scroll and scroll horizontally
            e.preventDefault();
            container.scrollLeft += e.deltaY;
        };

        container.addEventListener('wheel', handleWheel, { passive: false });
        // Clean up
        return () => container.removeEventListener('wheel', handleWheel);
    }, []);

    return (
        <div className="flex flex-col h-full w-full relative">

            {/* Context Hero - Condensed for Gallery */}
            <div className="p-4 md:p-8 lg:px-16 pt-24 md:pt-32 pb-8 md:pb-12 z-10 shrink-0">
                <ContextHero title={parentTitle} subtitle={parentSubtitle} />
            </div>

            {/* Horizontal Scroll Gallery */}
            {items.length > 0 ? (
                <div
                    ref={scrollContainerRef}
                    className="grow overflow-x-auto no-scrollbar flex items-center px-4 md:px-8 lg:px-16 gap-4 md:gap-6 pb-12 md:pb-16 snap-x snap-mandatory"
                >
                    {items.map((item, index) => (
                        <motion.div
                            key={item.id}
                            initial={{ opacity: 0, x: 100 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ delay: index * 0.1, duration: 0.8, ease: "easeOut" }}
                            className="shrink-0 w-[85vw] md:w-[450px] aspect-4/5 relative group overflow-hidden bg-white/5 border-r border-border/10 rounded-sm snap-center first:pl-0"
                        >
                            <Link href={`/brands/${item.id}`} className="block w-full h-full relative">
                                {/* Image Container */}
                                <div className="absolute inset-0 overflow-hidden">
                                    <Image
                                        src={item.image}
                                        alt={item.name}
                                        fill
                                        className="object-cover scale-100 group-hover:scale-110 transition-all duration-700 ease-in-out"
                                    />
                                    <div className="absolute inset-0 bg-background/20 group-hover:bg-background/10 transition-colors duration-700" />
                                    <div className="absolute inset-0 bg-linear-to-t from-background via-transparent to-transparent opacity-80" />
                                </div>

                                {/* Content Overlay - Visible by default on mobile, hover on desktop */}
                                <div className="absolute bottom-0 left-0 w-full p-6 md:p-10 transform translate-y-0 md:translate-y-4 md:group-hover:translate-y-0 transition-transform duration-500">
                                    <h3 className="text-3xl md:text-4xl md:text-5xl font-black text-foreground mb-2 md:mb-4 uppercase tracking-tighter leading-none">
                                        {item.name}
                                    </h3>

                                    <div className="overflow-hidden max-h-[200px] md:max-h-0 md:group-hover:max-h-[200px] transition-all duration-700 ease-[0.16,1,0.3,1] opacity-100 md:opacity-0 md:group-hover:opacity-100">
                                        {item.description && (
                                            <p className="text-muted-foreground text-sm md:text-base leading-relaxed mb-6 line-clamp-3">
                                                {item.description}
                                            </p>
                                        )}
                                        <span className="inline-block px-8 py-3 border border-foreground rounded-full text-xs font-bold uppercase tracking-widest hover:bg-foreground hover:text-background transition-colors duration-300">
                                            View Casestudy
                                        </span>
                                    </div>
                                </div>
                            </Link>

                            {/* Minimal border/separator line */}
                            <div className="absolute right-0 top-1/2 -translate-y-1/2 w-px h-1/2 bg-border hidden md:block pointer-events-none" />
                        </motion.div>
                    ))}

                    {/* Spacer for end of list */}
                    <div className="shrink-0 w-8 lg:w-16" />
                </div>
            ) : (
                <div className="grow flex items-center justify-center px-4 md:px-12 py-12">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        className="max-w-md w-full text-center flex flex-col items-center"
                    >
                        <div className="w-24 h-24 mb-8 relative">
                            <motion.div
                                animate={{ scale: [1, 1.1, 1] }}
                                transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                                className="absolute inset-0 bg-foreground/5 rounded-full"
                            />
                            <PackageSearch className="relative z-10 w-full h-full text-foreground/20 stroke-1" />
                        </div>

                        <h3 className="text-2xl md:text-3xl font-black uppercase tracking-tighter mb-4 text-foreground">
                            Coming Soon
                        </h3>
                        <p className="text-muted-foreground font-light leading-relaxed mb-12">
                            We are currently curating brand partnerships for this category. Stay tuned for exceptional additions to our portfolio.
                        </p>

                        <button
                            onClick={onBack}
                            className="group flex items-center gap-3 text-xs font-bold uppercase tracking-[0.2em] text-foreground/60 hover:text-foreground transition-colors"
                        >
                            <ArrowLeft className="w-4 h-4 transition-transform group-hover:-translate-x-1" />
                            Return to Explore
                        </button>
                    </motion.div>
                </div>
            )}
        </div>
    );
};
