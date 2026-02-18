

import { WhoWeAreSection } from './WhoWeAreSection';
import { RoleInEcosystemSection } from './RoleInEcosystemSection';
// import { ProcessWorkflow } from '@/components/shared/ProcessWorkflow';
import { PhilosophyCards } from './PhilosophyCards';
import { GlobalReachSection } from './GlobalReachSection';
import { ImpactStatsSection } from './ImpactStatsSection';
import { ConversationCTA } from './ConversationCTA';
import { AboutHero } from './AboutHero';
import { ProcessWorkflow } from '../../home/components/ProcessWorkflow';

export default function AboutTemplate() {
    return (
        <div className="min-h-screen bg-background relative">
            {/* Hero Section */}
            <AboutHero />

            {/* Who We Are Section */}
            <WhoWeAreSection />

            {/* Role in Trade Ecosystem */}
            <RoleInEcosystemSection />

            {/* Process Workflow */}
            {/* <ProcessWorkflow /> */}
            <ProcessWorkflow />

            {/* Values Section */}
            <section className="min-h-screen bg-background py-16 md:py-32 px-4 md:px-8 relative">
                <div className="max-w-7xl mx-auto pt-5">
                    <div className="text-center mb-16 md:mb-24">
                        <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-foreground mb-6">
                            Operating Philosophy
                        </h2>
                    </div>

                    <div className="pt-8">
                        <PhilosophyCards />
                    </div>
                </div>
            </section>

            {/* Global Reach Section */}
            <GlobalReachSection />

            {/* Impact Stats Section */}
            <ImpactStatsSection />

            {/* Start a Conversation Section */}
            <ConversationCTA />
        </div>
    );
}
