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
            {/* Badges row */}
            <div className="animate-blur-fade-up flex flex-wrap gap-2 mb-5" style={{ animationDelay: '300ms' }}>
              {[
                { label: 'DPIIT Recognised', icon: '🏛️' },
                { label: 'Cohort 6 Live', icon: '⚡' },
                { label: '100% Free', icon: '🌱' },
              ].map((b) => (
                <span
                  key={b.label}
                  className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full text-white/80 border border-white/15 backdrop-blur-md"
                  style={{ fontSize: '11px', fontFamily: "'DM Sans', sans-serif", background: 'rgba(255,255,255,0.08)' }}
                >
                  <span>{b.icon}</span> {b.label}
                </span>
              ))}
            </div>

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
              className="animate-blur-fade-up text-base sm:text-lg md:text-xl text-gray-400 mb-4 max-w-2xl"
              style={{ animationDelay: '500ms' }}
            >
              Where startups scale.
            </p>

            {/* Stats row */}
            <div className="animate-blur-fade-up flex flex-wrap gap-6 md:gap-10 mb-8" style={{ animationDelay: '600ms' }}>
              {[
                { v: '12+', l: 'Incubatees' },
                { v: '₹12Cr+', l: 'Funding' },
                { v: '6', l: 'Cohorts' },
                { v: '96%', l: 'Satisfaction' },
              ].map((s) => (
                <div key={s.l} className="flex flex-col">
                  <span className="text-white text-2xl md:text-3xl font-bold" style={{ fontFamily: "'Space Grotesk', sans-serif", letterSpacing: '-0.02em' }}>{s.v}</span>
                  <span className="text-white/40 text-[10px] uppercase tracking-widest mt-1" style={{ fontFamily: "'DM Sans', sans-serif" }}>{s.l}</span>
                </div>
              ))}
            </div>
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
