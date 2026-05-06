import { useEffect, useRef, useState } from 'react';
import PageLayout from '@/components/PageLayout';
import StatsMarquee from '@/components/maverick/StatsMarquee';
import BuiltForSection from '@/components/maverick/BuiltForSection';
import FounderNeedsSection from '@/components/maverick/FounderNeedsSection';
import MaverickJourney from '@/components/maverick/MaverickJourney';
import TestimonialsSection from '@/components/maverick/TestimonialsSection';
import ApplyCTASection from '@/components/maverick/ApplyCTASection';

function CinematicHero() {
  const videoRef = useRef<HTMLVideoElement>(null);

  return (
    <section className="relative w-full h-screen flex flex-col overflow-hidden bg-black" style={{ fontFamily: "'Inter', sans-serif" }}>
      {/* Background video */}
      <video
        ref={videoRef}
        className="absolute inset-0 w-full h-full object-cover"
        style={{ zIndex: 0 }}
        src="https://d8j0ntlcm91z4.cloudfront.net/user_38xzZboKViGWJOttwIXH07lWA1P/hf_20260406_094145_4a271a6c-3869-4f1c-8aa7-aeb0cb227994.mp4"
        autoPlay
        loop
        muted
        playsInline
      />

      {/* Bottom blur overlay - no gradient darkening, only blur via mask */}
      <div
        className="absolute inset-0 backdrop-blur-xl pointer-events-none"
        style={{
          zIndex: 1,
          WebkitMaskImage: 'linear-gradient(to top, black 0%, transparent 45%)',
          maskImage: 'linear-gradient(to top, black 0%, transparent 45%)',
        }}
      />

      {/* Hero content at bottom */}
      <div className="flex-1 flex flex-col justify-end px-4 sm:px-6 md:px-12 pb-8 md:pb-16" style={{ zIndex: 10 }}>
        <div className="flex flex-col md:flex-row items-end gap-8">
          <div className="flex-1">
            {/* Title */}
            <h1
              className="animate-blur-fade-up text-3xl sm:text-5xl md:text-6xl lg:text-7xl text-white mb-4 md:mb-6"
              style={{
                fontWeight: 400,
                letterSpacing: '-0.04em',
                animationDelay: '400ms',
              }}
            >
              Maverick Pont
            </h1>

            {/* Description */}
            <p
              className="animate-blur-fade-up text-base sm:text-lg md:text-xl text-gray-400 mb-6 md:mb-12 max-w-2xl"
              style={{ animationDelay: '500ms' }}
            >
              Where startups scale.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default function Maverick() {
  return (
    <PageLayout title="Maverick Pont" description="Maverick Pont — RCIIF's flagship accelerator program.">
      <CinematicHero />
      <div className="bg-white force-light-bg [&_section]:!bg-white">
        <StatsMarquee />
        <BuiltForSection />
        <FounderNeedsSection />
        <MaverickJourney />
        <TestimonialsSection />
        <ApplyCTASection />
      </div>
    </PageLayout>
  );
}
