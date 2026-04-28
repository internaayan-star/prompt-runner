import { useEffect, useRef, useState } from 'react';
import { motion } from 'framer-motion';
import PageLayout from '@/components/PageLayout';
import StatsMarquee from '@/components/maverick/StatsMarquee';
import BuiltForSection from '@/components/maverick/BuiltForSection';
import FounderNeedsSection from '@/components/maverick/FounderNeedsSection';
import JourneySection from '@/components/maverick/JourneySection';
import TestimonialsSection from '@/components/maverick/TestimonialsSection';
import ApplyCTASection from '@/components/maverick/ApplyCTASection';

const SPACE = "'Space Grotesk', sans-serif";
const PLAYFAIR = "'Playfair Display', serif";
const DM = "'DM Sans', sans-serif";

const APPLY_URL = 'https://docs.google.com/forms/d/e/1FAIpQLScf9cywkF4ygMmKM6u3A42fqhrvv9lKsVgGomo_HV-ssvZ9HQ/viewform?usp=header';
const PARTNER_URL = 'https://docs.google.com/forms/d/e/1FAIpQLScYmFHkMTi3ZBYOFgQzy2MkVIHu8mGz5KWMcT5s0l0QAOjuqw/viewform?usp=publish-editor';

function StaggerChars({ text, baseDelay, step = 0.025, italic = false, color }: { text: string; baseDelay: number; step?: number; italic?: boolean; color?: string }) {
  return (
    <span style={{ display: 'inline-block', fontFamily: italic ? PLAYFAIR : SPACE, fontStyle: italic ? 'italic' : 'normal', color }}>
      {Array.from(text).map((ch, i) => (
        <motion.span
          key={i}
          initial={{ opacity: 0, y: 28 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: baseDelay + i * step, ease: [0.16, 1, 0.3, 1] }}
          style={{ display: 'inline-block', whiteSpace: 'pre' }}
        >
          {ch}
        </motion.span>
      ))}
    </span>
  );
}

function MagneticButton({ children, onClick, className, style }: { children: React.ReactNode; onClick: () => void; className?: string; style?: React.CSSProperties }) {
  const ref = useRef<HTMLButtonElement>(null);
  const [pos, setPos] = useState({ x: 0, y: 0 });
  return (
    <motion.button
      ref={ref}
      onClick={onClick}
      onMouseMove={(e) => {
        const r = ref.current!.getBoundingClientRect();
        const x = ((e.clientX - r.left) / r.width - 0.5) * 16;
        const y = ((e.clientY - r.top) / r.height - 0.5) * 16;
        setPos({ x, y });
      }}
      onMouseLeave={() => setPos({ x: 0, y: 0 })}
      animate={{ x: pos.x, y: pos.y }}
      transition={{ type: 'spring', stiffness: 200, damping: 15 }}
      className={className}
      style={style}
    >
      {children}
    </motion.button>
  );
}

function MaverickHero() {
  const [scrollY, setScrollY] = useState(0);
  useEffect(() => {
    const onScroll = () => setScrollY(window.scrollY);
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <section className="relative min-h-screen flex flex-col justify-end pb-24 lg:pb-32 px-6 md:px-16 overflow-hidden" style={{ background: '#080808' }}>
      <video
        autoPlay
        loop
        muted
        playsInline
        className="absolute inset-0 w-full h-full object-cover"
        style={{ transform: `translateY(${scrollY * 0.25}px)` }}
        src="https://d8j0ntlcm91z4.cloudfront.net/user_38xzZboKViGWJOttwIXH07lWA1P/hf_20260403_050628_c4e32401-fab4-4a27-b7a8-6e9291cd5959.mp4"
      />
      <div className="absolute inset-0" style={{ background: 'linear-gradient(to bottom, rgba(0,0,0,0.3) 0%, rgba(8,8,8,0.85) 100%)' }} />

      <div className="relative max-w-5xl">
        <motion.div
          initial={{ opacity: 0, y: 8 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="inline-flex items-center gap-2 uppercase"
          style={{ fontFamily: DM, fontSize: 10, letterSpacing: '0.22em', color: 'rgba(255,255,255,0.45)' }}
        >
          <span style={{ color: '#34d399' }}>✦</span>
          By RCIIF · Rayat Centenary Innovation & Incubation Foundation
        </motion.div>

        <h1 className="mt-6" style={{ fontFamily: SPACE, fontWeight: 700, fontSize: 'clamp(3.5rem, 8vw, 7rem)', letterSpacing: '-0.03em', lineHeight: 1, color: '#fff' }}>
          <span className="block">
            <StaggerChars text="Where Founders" baseDelay={0.3} step={0.025} />
          </span>
          <span className="block mt-2">
            <StaggerChars text="Become " baseDelay={0.7} step={0.03} />
            <StaggerChars text="Builders" baseDelay={0.7 + 7 * 0.03} step={0.03} italic color="#34d399" />
          </span>
        </h1>

        <motion.p
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 1.2 }}
          className="mt-7"
          style={{ fontFamily: DM, fontSize: 15, color: 'rgba(255,255,255,0.58)', lineHeight: 1.75, maxWidth: '52ch' }}
        >
          RCIIF's curated incubation ecosystem — connecting early-stage startups with investors, mentors, and execution partners to accelerate from idea to impact.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 1.5 }}
          className="flex flex-wrap gap-4 mt-9"
        >
          <MagneticButton
            onClick={() => window.open(APPLY_URL, '_blank')}
            className="bg-emerald-500 hover:bg-emerald-400 text-black font-bold rounded-xl transition-colors"
            style={{ fontFamily: DM, padding: '16px 32px', fontSize: 15 }}
          >
            Apply as Startup →
          </MagneticButton>
          <button
            onClick={() => window.open(PARTNER_URL, '_blank')}
            className="bg-white/[0.06] border border-white/20 text-white backdrop-blur-sm rounded-xl hover:bg-white/[0.10] transition-colors"
            style={{ fontFamily: DM, padding: '16px 32px', fontSize: 15, fontWeight: 600 }}
          >
            Become a Partner
          </button>
        </motion.div>
      </div>

      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-3">
        <span className="uppercase" style={{ fontFamily: DM, fontSize: 8, letterSpacing: '0.3em', color: '#B8882C' }}>Scroll</span>
        <div className="animate-pulse" style={{ width: 1, height: 48, background: 'linear-gradient(to bottom, rgba(184,136,44,0.5), transparent)' }} />
      </div>
    </section>
  );
}

export default function Maverick() {
  return (
    <PageLayout title="Maverick Pont" description="Maverick Pont — RCIIF's flagship accelerator program.">
      <MaverickHero />
      <div className="bg-white force-light-bg [&_section]:!bg-white">
        <StatsMarquee />
        <BuiltForSection />
        <FounderNeedsSection />
        <JourneySection />
        <TestimonialsSection />
        <ApplyCTASection />
      </div>
    </PageLayout>
  );
}
