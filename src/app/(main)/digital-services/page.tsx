"use client";
import React from 'react';
import DigitalHero from '@/components/pages/digital-services/components/DigitalHero';
import DigitalIntro from '@/components/pages/digital-services/components/DigitalIntro';
import TargetAudience from '@/components/pages/digital-services/components/TargetAudience';
import CoreServices from '@/components/pages/digital-services/components/CoreServices';
import DigitalPackages from '@/components/pages/digital-services/components/DigitalPackages';
import GrowthProcessTimeline from '@/components/pages/digital-services/components/GrowthProcessTimeline';
import TradeConnection from '@/components/pages/digital-services/components/TradeConnection';
import WhyWorkWithUs from '@/components/pages/digital-services/components/WhyWorkWithUs';
import FinalCTA from '@/components/pages/digital-services/components/FinalCTA';
import DigitalEnquiryForm from '@/components/pages/digital-services/components/DigitalEnquiryForm';

export default function DigitalServicesPage() {
    return (
        <main className="min-h-screen bg-background selection:bg-emerald-500 selection:text-white">
            {/* 1. Hero Section */}
            <DigitalHero />

            {/* 2 & 3. Introduction & Why Digital Presence Matters (Combined in DigitalIntro) */}
            <DigitalIntro />

            {/* 4. Who This Is For (Target Audience) */}
            <TargetAudience />

            {/* 5. Core Services Grid */}
            <CoreServices />

            {/* 9. Service Packages (Cinematic Showcase) */}
            <DigitalPackages />

            {/* 7. How We Work (Growth Framework Timeline) */}
            <GrowthProcessTimeline />

            {/* 6. How it Connects with Trade */}
            <TradeConnection />

            {/* 8. Why Brands Work With Us */}
            <WhyWorkWithUs />

            {/* 10. Final CTA */}
            <FinalCTA />

            {/* 11. Enquiry Form */}
            <DigitalEnquiryForm />

            {/* Optional Floating Background Mesh */}
            <div className="fixed inset-0 pointer-events-none z-[-1] opacity-20">
                <div className="absolute top-[10%] left-[10%] w-[40vw] h-[40vw] bg-emerald-500/5 rounded-full blur-[150px] animate-pulse" />
                <div className="absolute bottom-[10%] right-[10%] w-[40vw] h-[40vw] bg-emerald-500/5 rounded-full blur-[150px] animate-pulse [animation-delay:3s]" />
            </div>
        </main>
    );
}
