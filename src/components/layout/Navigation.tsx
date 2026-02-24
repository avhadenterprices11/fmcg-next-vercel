"use client";

import { useState, useRef, useEffect } from "react";
import { AnimatePresence, motion, useScroll, useMotionValueEvent } from "motion/react";
import { Menu, X } from "lucide-react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { ThemeToggle } from "@/components/ui/theme-toggle";

const navLinks = [
    { title: "How We Work", href: "/how-we-work" },
    { title: "Categories", href: "/categories" },
    { title: "Brands", href: "/brands" },
    { title: "Trade Opportunities", href: "/trade-opportunities" },
    // { title: "Trade Opportunities 2", href: "/trade-opportunities-2" },
    { title: "About", href: "/about" },
    { title: "Contact", href: "/contact" },
];

export function Navigation() {
    const [isOpen, setIsOpen] = useState(false);
    const [menuVisible, setMenuVisible] = useState(false); // controls when width should collapse
    const [hidden, setHidden] = useState(false);
    const { scrollY } = useScroll();
    const navRef = useRef<HTMLDivElement>(null);
    const router = useRouter();
    const customEasing = [0.22, 1, 0.36, 1] as const;

    useMotionValueEvent(scrollY, "change", (latest) => {
        const previous = scrollY.getPrevious() || 0;
        if (latest > previous && latest > 150) {
            setHidden(true);
        } else {
            setHidden(false);
        }
    });

    // Open: set both true. Close: set isOpen false, then after height anim, set menuVisible false
    useEffect(() => {
        if (isOpen) {
            setMenuVisible(true);
            document.body.style.overflow = "hidden"; // Lock scroll
        } else if (menuVisible) {
            document.body.style.overflow = ""; // Unlock scroll
            // Wait for height animation to finish before collapsing width
            const timeout = setTimeout(() => setMenuVisible(false), 700); // match height anim duration
            return () => {
                clearTimeout(timeout);
            };
        }
    }, [isOpen, menuVisible]);

    // Close menu when clicking outside
    useEffect(() => {
        const handleClickOutside = (event: MouseEvent) => {
            if (
                (isOpen || menuVisible) &&
                navRef.current &&
                !navRef.current.contains(event.target as Node)
            ) {
                setIsOpen(false);
            }
        };
        document.addEventListener("mousedown", handleClickOutside);
        return () => {
            document.removeEventListener("mousedown", handleClickOutside);
        };
    }, [isOpen, menuVisible]);

    const handleLinkClick = () => {
        setIsOpen(false);
    };

    // Only hide if NOT open. If open, always show.
    // We defer the "isMobile" check for hiding logic to avoiding hydration mismatch is tricky,
    // but for "hidden" state it's less visually jarring than initial width.
    //Ideally we rely on CSS media queries for hiding or accept a small hydration shift for scroll behavior only.
    // For now, let's keep the scroll hidden behavior simple: if hidden matches, we hide.
    // Only hide if NOT open. If open, always show.
    // We defer the "isMobile" check for hiding logic to avoiding hydration mismatch is tricky,
    // but for "hidden" state it's less visually jarring than initial width.
    //Ideally we rely on CSS media queries for hiding or accept a small hydration shift for scroll behavior only.
    // For now, let's keep the scroll hidden behavior simple: if hidden matches, we hide.
    const isNavHidden = hidden && !isOpen && !menuVisible;

    return (
        <motion.div
            ref={navRef}
            // Use CSS variable for width: 92vw on mobile, 34vw on desktop default.
            // When menuVisible is true, we override this variable or just animate to a fixed value.
            // We use standard CSS for initial state to prevent layout shift.
            className="fixed left-1/2 bg-background/80 text-foreground backdrop-blur-xl rounded-[2rem] overflow-hidden z-200 border border-border [--nav-width:92vw] md:[--nav-width:34vw]"
            style={{
                top: "16px",
                width: "var(--nav-width)", // Fallback/Initial
                x: "-50%" // Force centering initially via style to match standard CSS
            }}
            initial={{
                width: "var(--nav-width)",
                y: 0,
                x: "-50%"
            }}
            animate={{
                width: menuVisible ? "95vw" : "var(--nav-width)",
                maxWidth: "95vw", // Always allow up to max width
                y: isNavHidden ? -120 : 0,
                x: "-50%"
            }}
            transition={{
                width: {
                    duration: 0.5,
                    ease: customEasing,
                    delay: menuVisible ? 0 : 0.7, // On close, width animates after height
                },
                y: { duration: 0.3 },
                x: { duration: 0 } // Don't animate X, keep it pinned
            }}
        >
            {/* Navbar Header */}
            <div className="flex items-center justify-between px-4 md:px-8 lg:py-5 py-2 h-[80px]">
                {/* Left: Menu Button */}
                <button
                    onClick={() => setIsOpen(!isOpen)}
                    className="group flex items-center gap-3 transition-colors cursor-pointer text-foreground outline-hidden"
                >
                    <div className="flex items-center justify-center w-11 h-11 rounded-full bg-muted/50 group-hover:bg-emerald-500 group-hover:text-white transition-all duration-500 group-active:scale-95">
                        {isOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
                    </div>
                    <span className="font-bold tracking-widest uppercase text-[10px] hidden md:block opacity-60 group-hover:opacity-100 transition-opacity">
                        {isOpen ? "Close" : "Menu"}
                    </span>
                </button>

                {/* Center: Logo */}
                <Link
                    href="/"
                    onClick={handleLinkClick}
                    className="absolute left-1/2 -translate-x-1/2 text-2xl tracking-[0.3em] font-black text-foreground hover:text-emerald-500 transition-all duration-500 uppercase"
                >
                    FMCG
                </Link>

                {/* Right: Login Button & Theme Toggle */}
                <div className="flex items-center gap-2 md:gap-3">
                    <div className="hidden md:block">
                        <AnimatePresence>
                            {isOpen && (
                                <motion.div
                                    initial={{ opacity: 0, scale: 0.5, width: 0 }}
                                    animate={{ opacity: 1, scale: 1, width: "auto" }}
                                    exit={{ opacity: 0, scale: 0.5, width: 0 }}
                                    className="flex items-center overflow-hidden"
                                >
                                    <ThemeToggle />
                                </motion.div>
                            )}
                        </AnimatePresence>
                    </div>
                    <NavButton
                        onClick={() => router.push("/sign-in")}
                    >
                        Login
                    </NavButton>
                </div>
            </div>

            {/* Menu Content */}
            {menuVisible && (
                <motion.div
                    className="overflow-hidden"
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: isOpen ? "auto" : 0, opacity: isOpen ? 1 : 0 }}
                    transition={{
                        height: {
                            duration: 0.7,
                            ease: customEasing,
                            delay: isOpen ? 0.5 : 0, // On open, height expands after width; on close, height collapses immediately
                        },
                        opacity: {
                            duration: isOpen ? 0.4 : 0.2,
                            delay: isOpen ? 0.7 : 0, // On open, fade in after height; on close, fade out immediately
                        },
                    }}
                >
                    <div className="px-4 md:px-8 pb-12 pt-4">
                        <nav className="flex flex-col gap-2">
                            {navLinks.map((link, index) => (
                                <motion.div
                                    key={link.title}
                                    initial={{ opacity: 0, x: -20 }}
                                    animate={isOpen ? { opacity: 1, x: 0 } : {}}
                                    transition={{ delay: 0.7 + index * 0.1, duration: 0.5 }}
                                    className="group relative flex items-baseline gap-4 md:gap-8 cursor-pointer py-1"
                                >
                                    <span className="text-xs md:text-sm font-mono text-muted-foreground group-hover:text-emerald-500 transition-colors">
                                        {String(index + 1).padStart(2, "0")}
                                    </span>
                                    <Link
                                        href={link.href}
                                        onClick={handleLinkClick}
                                        className="text-4xl md:text-7xl font-bold text-foreground tracking-tighter hover:text-emerald-500 transition-all duration-500 group-hover:translate-x-4"
                                    >
                                        {link.title}
                                    </Link>
                                </motion.div>
                            ))}
                        </nav>
                        <div className="mt-12 pt-8 border-t border-border flex flex-col md:flex-row gap-8 justify-between text-muted-foreground text-sm">
                            <div className="flex flex-col gap-4">
                                <div>
                                    <p>Get in touch</p>
                                    <a
                                        href="mailto:hello@osmo.com"
                                        className="hover:text-foreground transition-colors"
                                    >
                                        hello@osmo.com
                                    </a>
                                </div>
                                {/* Mobile Theme Toggle */}
                                <div className="md:hidden">
                                    <ThemeToggle />
                                </div>
                            </div>
                            <div className="flex gap-6">
                                <a href="#" className="hover:text-foreground transition-colors">
                                    Instagram
                                </a>
                                <a href="#" className="hover:text-foreground transition-colors">
                                    LinkedIn
                                </a>
                                <a href="#" className="hover:text-foreground transition-colors">
                                    Twitter
                                </a>
                            </div>
                        </div>
                    </div>
                </motion.div>
            )}
        </motion.div>
    );
}

function NavButton({ children, onClick }: { children: React.ReactNode; onClick?: () => void }) {
    return (
        <motion.button
            onClick={onClick}
            initial="initial"
            whileHover="hover"
            whileTap="tap"
            className="relative group overflow-hidden px-8 py-2.5 rounded-full font-bold text-xs uppercase tracking-widest flex items-center justify-center transition-all duration-500 bg-foreground text-background dark:bg-emerald-600 dark:text-white outline-hidden cursor-pointer"
        >
            {/* Background Fill Animation */}
            <motion.div
                variants={{
                    initial: { y: "100%" },
                    hover: { y: "0%" }
                }}
                transition={{ duration: 0.4, ease: [0.19, 1, 0.22, 1] }}
                className="absolute inset-0 z-0 bg-emerald-400 dark:bg-emerald-500"
            />

            {/* Shine Effect */}
            <motion.div
                variants={{
                    initial: { x: "-100%", opacity: 0 },
                    hover: { x: "100%", opacity: 0.3 }
                }}
                transition={{ duration: 0.8, ease: "easeInOut" }}
                className="absolute inset-0 z-1 bg-linear-to-r from-transparent via-white to-transparent skew-x-12"
            />

            <span className="relative z-10 flex items-center justify-center transition-transform duration-300 group-hover:scale-[1.02]">
                {children}
            </span>
        </motion.button>
    );
}
