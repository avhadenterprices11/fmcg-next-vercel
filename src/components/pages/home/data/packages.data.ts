import type { PackageCard } from '../types/package.types';

/**
 * Energy packages showcase data
 */
export const packages: PackageCard[] = [
    {
        id: 1,
        title: 'Alcohol Brands',
        tagline: 'Supplying leading global spirits portfolios.',
        bodyText: 'We supply a wide range of internationally recognised spirits from major global portfolios, including lines from Diageo, Pernod Ricard, Bacardi, Beam Suntory, Brown‑Forman, Rémy Cointreau, and LVMH (Hennessy).\n\nOur focus is on high‑rotation duty‑free SKUs such as premium whisky, vodka, gin, rum, and cognac. All products are sourced through authorised channels, ensuring authenticity, competitive pricing, and consistent availability for distributors, bonded warehouses, and travel‑retail operators.',
        features: ['Global Spirits Portfolios', 'Duty-Free SKUs', 'Authorised Channels'],
        image: 'https://images.unsplash.com/photo-1597075687490-8f673c6c17f6?auto=format&fit=crop&q=80&w=1000',
        color: 'bg-amber-600',
        showCTA: true,
    },
    {
        id: 2,
        title: 'Regions We Serve',
        tagline: 'Strong presence across key global trade lanes.',
        bodyText: 'We operate across the Middle East, Asia, Europe, South America and the CIS region, supplying duty‑free zones, bonded warehouses, travel‑retail operators, and regional wholesalers.\n\nOur understanding of local regulations, demand patterns, and logistics routes allows us to move products efficiently into high‑growth markets. Whether supporting established distribution networks or opening new channels, we ensure smooth access to regions with strong demand for premium spirits.',
        features: ['Global Trade Lanes', 'Duty-Free Zones', 'Market Access'],
        image: 'https://images.unsplash.com/photo-1524661135-423995f22d0b?auto=format&fit=crop&q=80&w=1000',
        color: 'bg-blue-600',
        showCTA: true,
    },
    {
        id: 3,
        title: 'Warehousing & Logistics',
        tagline: 'Trusted bonded warehouses and efficient export handling.',
        bodyText: 'We operate through established bonded warehouses and logistics partners, including Loendersloot, Newcorp, PLG, Reftrans & many more where we maintain active accounts to support secure storage, consolidation, and export preparation.\n\nThese facilities enable us to handle duty‑free spirits with precision — from mixed pallets to full‑container loads. Every movement is managed with strict compliance, accurate documentation, and coordinated dispatch, ensuring goods flow smoothly and reliably across international trade lanes.',
        features: ['Bonded Warehousing', 'Export Handling', 'Strict Compliance'],
        image: 'https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?auto=format&fit=crop&q=80&w=1000',
        color: 'bg-emerald-600',
        showCTA: true,
    },
    {
        id: 4,
        title: 'Trade Assurance & Compliance',
        tagline: 'Verified partners, secure payments, transparent documentation.',
        bodyText: 'Compliance is central to our trading model. We verify every buyer and supplier, manage all regulatory documentation, and ensure duty‑free and export requirements are met without compromise.\n\nOur structured approach to risk management, payment security, and document accuracy gives partners complete confidence in every transaction. With FMCG Exchange Ltd, every trade is protected, transparent, and professionally executed.',
        features: ['Verified Partners', 'Secure Payments', 'Risk Management'],
        image: 'https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?auto=format&fit=crop&q=80&w=1000',
        color: 'bg-indigo-600',
        showCTA: true,
    },
];
