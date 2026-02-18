import { CaseStudyCarousel } from '@/components/pages/home/components/CaseStudyCarousel';
import { CinematicPackageShowcase } from '@/components/pages/home/components/CinematicPackageShowcase';
import { TradeOpportunities } from '@/components/pages/home/components/TradeOpportunities';
import { StrategicImpactShowcase } from '@/components/pages/home/components/StrategicImpactShowcase';
import { ProcessWorkflow } from '@/components/pages/home/components/ProcessWorkflow';
import { WhoWeWorkWith } from '@/components/pages/home/components/WhoWeWorkWith';
import { RelationshipsSection } from '@/components/pages/home/components/RelationshipsSection';
import { ConversationCTA } from '@/components/pages/home/components/ConversationCTA';
import { ExpertiseAccordion } from '@/components/pages/home/components/ExpertiseAccordion';
import { getCarouselItems } from '@/app/actions/carousel';

import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: "Strategic FMCG Consultency & Design Agency",
  description: "We help FMCG brands scale through strategic design, packaging innovation, and digital transformation. Partner with us to elevate your brand presence.",
};

export default async function Home() {
  const carouselItems = await getCarouselItems();

  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'Organization',
    name: 'FMCG Next',
    url: 'https://fmcg-next.com',
    logo: 'https://fmcg-next.com/logo.png',
    sameAs: [
      'https://twitter.com/fmcgnext',
      'https://linkedin.com/company/fmcgnext',
      'https://instagram.com/fmcgnext'
    ],
    contactPoint: {
      '@type': 'ContactPoint',
      telephone: '+1-555-555-5555',
      contactType: 'customer service',
      areaServed: 'Worldwide',
      availableLanguage: 'English'
    }
  };

  return (
    <main className="min-h-screen">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      <CaseStudyCarousel items={carouselItems} />
      <CinematicPackageShowcase />
      <TradeOpportunities />
      <ProcessWorkflow />
      <StrategicImpactShowcase />
      <ExpertiseAccordion />
      <WhoWeWorkWith />
      <RelationshipsSection />
      <ConversationCTA />
    </main>
  );
}
