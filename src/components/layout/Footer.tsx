"use client";

import React from "react";
import { Facebook, Instagram, Linkedin, Twitter } from "lucide-react";
import { WorldMap } from "@/components/ui/world-map";
import Link from "next/link";

interface Footer7Props {
    logo?: {
        url: string;
        text: string;
    };
    sections?: Array<{
        title: string;
        links: Array<{ name: string; href: string }>;
        isDark?: boolean; // Special flag for dark styling
    }>;
    description?: string;
    socialLinks?: Array<{
        icon: React.ReactElement;
        href: string;
        label: string;
    }>;
    copyright?: string;
    legalLinks?: Array<{
        name: string;
        href: string;
    }>;
}

const defaultSections = [
    {
        title: "Navigation",
        links: [
            { name: "Home", href: "/" },
            { name: "Categories", href: "/categories" },
            { name: "Brands", href: "/brands" },
            { name: "Trade Opportunities", href: "/trade-opportunities" },
            { name: "About", href: "/about" },
            { name: "Contact", href: "/contact" },
        ],
    },
    {
        title: "Services",
        links: [
            { name: "Trade Facilitation", href: "#" },
            { name: "Market Access", href: "#" },
            { name: "Distribution Networks", href: "#" },
            { name: "Partnership Programs", href: "#" },
        ],
    },
    {
        title: "POLICIES",
        links: [
            { name: "Terms & Conditions", href: "/terms" },
            { name: "Delivery & Returns", href: "/delivery-returns" },
            { name: "Cookie Policy", href: "/cookie-policy" },
            { name: "Short Date & Clearance", href: "/clearance" },
        ],
        isDark: true, // Special flag for dark styling
    },
];

const defaultSocialLinks = [
    { icon: <Instagram className="h-5 w-5" />, href: "#", label: "Instagram" },
    { icon: <Facebook className="h-5 w-5" />, href: "#", label: "Facebook" },
    { icon: <Twitter className="h-5 w-5" />, href: "#", label: "Twitter" },
    { icon: <Linkedin className="h-5 w-5" />, href: "#", label: "LinkedIn" },
];

const defaultLegalLinks = [
    { name: "Terms and Conditions", href: "/terms" },
    { name: "Privacy Policy", href: "/privacy-policy" },
];

export const Footer = ({
    logo = {
        url: "/",
        text: "TradeFacilitator",
    },
    sections = defaultSections,
    description = "Connecting FMCG brands, distributors, and trade partners across global markets through direct relationships and expertise.",
    socialLinks = defaultSocialLinks,
    copyright = "© 2025 TradeFacilitator. All rights reserved.",
    legalLinks = defaultLegalLinks,
}: Footer7Props) => {

    return (
        <footer className="bg-background pt-16 md:pt-24 min-h-screen flex flex-col relative z-50">
            <div className="container mx-auto px-4 mb-12 md:mb-20 text-center">
                <h2 className="text-4xl md:text-7xl font-bold text-foreground tracking-tighter mb-4 md:mb-6">
                    Global <span className="text-transparent bg-clip-text bg-linear-to-r from-emerald-600 to-teal-500">Connectivity.</span>
                </h2>
                <p className="text-base md:text-lg text-muted-foreground max-w-2xl mx-auto leading-relaxed">
                    Connecting trade partners across continents. Our network spans major markets worldwide,
                    facilitating seamless FMCG distribution and partnerships.
                </p>
                <div className="w-16 md:w-24 h-1 bg-emerald-500 mx-auto mt-6 md:mt-8 rounded-full" />
            </div>

            {/* Mobile World Map - In between sections */}
            <div className="block md:hidden w-full h-[250px] relative opacity-50 mb-8 overflow-hidden">
                <WorldMap
                    className="h-full w-full aspect-auto scale-110"
                    dots={[
                        {
                            start: { lat: 40.7128, lng: -74.006 },
                            end: { lat: 51.5074, lng: -0.1278 },
                        },
                        {
                            start: { lat: 51.5074, lng: -0.1278 },
                            end: { lat: 28.6139, lng: 77.209 },
                        },
                        {
                            start: { lat: 28.6139, lng: 77.209 },
                            end: { lat: 35.6762, lng: 139.6503 },
                        },
                        {
                            start: { lat: 35.6762, lng: 139.6503 },
                            end: { lat: -33.8688, lng: 151.2093 },
                        },
                        {
                            start: { lat: -23.5505, lng: -46.6333 },
                            end: { lat: 40.7128, lng: -74.006 },
                        },
                        {
                            start: { lat: 1.3521, lng: 103.8198 },
                            end: { lat: 22.3193, lng: 114.1694 },
                        },
                    ]}
                    lineColor="#10b981"
                />
            </div>

            <div className="relative pb-8 md:pb-12 overflow-hidden flex-1 flex flex-col justify-end">
                {/* Desktop World Map Background Layer */}
                {/* Desktop World Map Background Layer */}
                <div className="absolute inset-0 z-0 pointer-events-none hidden md:flex items-center justify-center opacity-30 md:opacity-100">
                    <div className="w-full max-w-[1600px] 3xl:max-w-[2400px] aspect-[2/1] flex items-center justify-center">
                        <WorldMap
                            className="w-full h-full"
                            dots={[
                                {
                                    start: { lat: 40.7128, lng: -74.006 }, // New York
                                    end: { lat: 51.5074, lng: -0.1278 }, // London
                                },
                                {
                                    start: { lat: 51.5074, lng: -0.1278 }, // London
                                    end: { lat: 28.6139, lng: 77.209 }, // New Delhi
                                },
                                {
                                    start: { lat: 28.6139, lng: 77.209 }, // New Delhi
                                    end: { lat: 35.6762, lng: 139.6503 }, // Tokyo
                                },
                                {
                                    start: { lat: 35.6762, lng: 139.6503 }, // Tokyo
                                    end: { lat: -33.8688, lng: 151.2093 }, // Sydney
                                },
                                {
                                    start: { lat: -23.5505, lng: -46.6333 }, // São Paulo
                                    end: { lat: 40.7128, lng: -74.006 }, // New York
                                },
                                {
                                    start: { lat: 1.3521, lng: 103.8198 }, // Singapore
                                    end: { lat: 22.3193, lng: 114.1694 }, // Hong Kong
                                },
                            ]}
                            lineColor="#10b981" // Emerald green for the flights
                        />
                    </div>
                </div>

                <div className="container mx-auto px-4 relative z-10">
                    {/* Footer Links & Content */}
                    <div className="relative grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 py-8 px-4 md:px-8">
                        <div className="absolute inset-0 bg-background/60 backdrop-blur-[0.5px] border border-white/10 dark:border-white/5 -z-10 rounded-3xl shadow-lg" />

                        {/* Brand Column */}
                        <div className="col-span-1 lg:col-span-4 flex flex-col gap-8 pr-0 lg:pr-12">
                            <Link href={logo.url} className="flex items-center gap-3 group">
                                <div className="w-10 h-10 bg-linear-to-br from-emerald-500 to-teal-600 rounded-xl flex items-center justify-center shadow-lg shadow-emerald-500/20 group-hover:scale-105 transition-transform duration-300">
                                    <span className="text-white font-bold tracking-tighter text-lg">TF</span>
                                </div>
                                <span className="text-2xl font-bold text-foreground tracking-tight group-hover:text-emerald-600 transition-colors">{logo.text}</span>
                            </Link>

                            <p className="text-muted-foreground leading-relaxed text-sm md:text-base">
                                {description}
                            </p>

                            <ul className="flex items-center gap-4">
                                {socialLinks.map((social, idx) => (
                                    <li key={idx}>
                                        <a
                                            href={social.href}
                                            aria-label={social.label}
                                            className="w-10 h-10 rounded-full bg-background flex items-center justify-center text-muted-foreground hover:bg-emerald-50 dark:hover:bg-emerald-900/10 hover:text-emerald-600 hover:scale-110 transition-all duration-300 border border-border"
                                        >
                                            {social.icon}
                                        </a>
                                    </li>
                                ))}
                            </ul>
                        </div>

                        {/* Links Columns */}
                        <div className="col-span-1 lg:col-span-8 grid grid-cols-2 md:grid-cols-3 gap-8 md:gap-12">
                            {sections.map((section, sectionIdx) => (
                                <div key={sectionIdx}>
                                    <h3 className="mb-6 font-bold text-foreground tracking-wide text-sm uppercase">
                                        {section.title}
                                    </h3>
                                    <ul className="space-y-4 text-sm">
                                        {section.links.map((link, linkIdx) => (
                                            <li key={linkIdx}>
                                                {link.href.startsWith('/') ? (
                                                    <Link
                                                        href={link.href}
                                                        className="text-muted-foreground hover:text-emerald-600 dark:hover:text-emerald-400 transition-colors duration-200 flex items-center gap-2 group"
                                                    >
                                                        <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 scale-0 group-hover:scale-100 transition-transform duration-200" />
                                                        <span className="group-hover:translate-x-1 transition-transform duration-200">{link.name}</span>
                                                    </Link>
                                                ) : (
                                                    <a
                                                        href={link.href}
                                                        className="text-muted-foreground hover:text-emerald-600 dark:hover:text-emerald-400 transition-colors duration-200 flex items-center gap-2 group"
                                                    >
                                                        <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 scale-0 group-hover:scale-100 transition-transform duration-200" />
                                                        <span className="group-hover:translate-x-1 transition-transform duration-200">{link.name}</span>
                                                    </a>
                                                )}
                                            </li>
                                        ))}
                                    </ul>
                                </div>
                            ))}
                        </div>

                        {/* Copyright & Legal */}
                        <div className="col-span-1 lg:col-span-12 mt-16 pt-8 border-t border-border flex flex-col md:flex-row justify-between items-center gap-6">
                            <p className="text-muted-foreground text-sm font-medium">{copyright}</p>
                            <ul className="flex flex-wrap justify-center gap-8">
                                {legalLinks.map((link, idx) => (
                                    <li key={idx}>
                                        <Link href={link.href} className="text-muted-foreground hover:text-emerald-600 dark:hover:text-emerald-400 text-sm font-medium transition-colors">
                                            {link.name}
                                        </Link>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    );
};
