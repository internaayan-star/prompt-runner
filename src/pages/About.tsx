import { motion } from 'framer-motion';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import RCIIFAboutIntro from '@/components/about/RCIIFAboutIntro';
import MeetOurTeam from "@/components/about/MeetOurTeam";
import { RCIIFWhyUs } from "@/components/ui/rciif-why-us";
import { RCIIFStoryTimeline } from "@/components/ui/rciif-story-timeline";
import { RCIIFIncubatees } from "@/components/ui/rciif-incubatees";
import { RCIIFAssociates } from "@/components/ui/rciif-associates";
import { RCIIFBoard } from "@/components/ui/rciif-board";

const SPACE = "'Space Grotesk', sans-serif";
const PLAYFAIR = "'Playfair Display', serif";
const DM = "'DM Sans', sans-serif";

function StaggerChars({
  text,
  baseDelay,
  step = 0.025,
  italic = false,
  color,
  className = '',
}: {
  text: string;
  baseDelay: number;
  step?: number;
  italic?: boolean;
  color?: string;
  className?: string;
}) {
  return (
    <span className={className} style={{ display: 'inline-block', fontFamily: italic ? PLAYFAIR : SPACE, fontStyle: italic ? 'italic' : 'normal', color }}>
      {Array.from(text).map((ch, i) => (
        <motion.span
          key={i}
          initial={{ opacity: 0, y: 24 }}
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

function AboutHero() {
  const scrollTo = (id: string) => {
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: 'smooth' });
    else window.scrollBy({ top: window.innerHeight, behavior: 'smooth' });
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden" style={{ background: '#080808' }}>
      <div className="absolute inset-0 pointer-events-none" style={{ background: 'radial-gradient(ellipse 70% 50% at 50% 0%, rgba(34,197,94,0.07), transparent)' }} />
      <div className="absolute inset-0 pointer-events-none" style={{ background: 'linear-gradient(to bottom, transparent 60%, #080808 100%)' }} />
      <motion.div
        className="absolute rounded-full bg-emerald-500/5 blur-3xl"
        style={{ width: 600, height: 600, top: '-10%', right: '-15%' }}
        animate={{ y: [0, -30, 0] }}
        transition={{ duration: 10, repeat: Infinity, ease: 'easeInOut' }}
      />

      <div className="relative max-w-5xl mx-auto px-6 pt-36 pb-24 text-center">
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          style={{ fontFamily: DM, fontSize: 11, letterSpacing: '0.3em', textTransform: 'uppercase', color: 'rgba(255,255,255,0.38)' }}
        >
          About — RCIIF
        </motion.div>

        <h1 className="mt-8" style={{ fontFamily: SPACE, fontWeight: 700, fontSize: 'clamp(3rem, 7vw, 6rem)', letterSpacing: '-0.03em', lineHeight: 1, color: '#fff' }}>
          <span className="block">
            <StaggerChars text="Building India's" baseDelay={0.2} step={0.025} />
          </span>
          <span className="block mt-2">
            <StaggerChars text="Next" baseDelay={0.55} step={0.03} italic color="#34d399" />
            <StaggerChars text=" Generation" baseDelay={0.55 + 4 * 0.03} step={0.03} />
          </span>
        </h1>

        <motion.div
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 1.1 }}
          className="mt-2"
          style={{
            fontFamily: PLAYFAIR,
            fontStyle: 'italic',
            fontWeight: 700,
            fontSize: 'clamp(3rem, 7vw, 6rem)',
            lineHeight: 0.9,
            background: 'linear-gradient(135deg, #86efac, #34d399, #10b981)',
            WebkitBackgroundClip: 'text',
            WebkitTextFillColor: 'transparent',
            backgroundClip: 'text',
          }}
        >
          of Founders
        </motion.div>

        <motion.p
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 1.4 }}
          className="mx-auto"
          style={{ fontFamily: DM, fontSize: 16, color: 'rgba(255,255,255,0.55)', lineHeight: 1.8, maxWidth: '56ch', marginTop: 28 }}
        >
          A DPIIT-recognised incubator rooted in 100+ years of Rayat Shikshan Sanstha's educational legacy — finding, funding, and mentoring India's most ambitious founders from Kharghar, Navi Mumbai.
        </motion.p>

        <motion.div
          initial="hidden"
          animate="visible"
          variants={{ visible: { transition: { delayChildren: 1.6, staggerChildren: 0.08 } }, hidden: {} }}
          className="inline-flex flex-wrap gap-2.5 justify-center mt-8"
        >
          {['DPIIT Recognised', '80G / 12A', 'Est. 2022', 'Kharghar, MH'].map((b) => (
            <motion.span
              key={b}
              variants={{ hidden: { opacity: 0, y: 8 }, visible: { opacity: 1, y: 0 } }}
              className="rounded-full border border-white/10 bg-white/[0.04] text-white/55 px-4 py-1.5 backdrop-blur-sm uppercase"
              style={{ fontFamily: DM, fontSize: 11, letterSpacing: '0.12em' }}
            >
              {b}
            </motion.span>
          ))}
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 8 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 1.8 }}
          className="flex gap-8 justify-center mt-10"
        >
          <button
            onClick={() => scrollTo('story-timeline')}
            className="text-white underline underline-offset-4 hover:text-white/80 transition-colors"
            style={{ fontFamily: DM, fontWeight: 600, fontSize: 14 }}
          >
            Our Story ↓
          </button>
          <button
            onClick={() => scrollTo('about-intro')}
            className="text-emerald-400 hover:text-emerald-300 transition-colors"
            style={{ fontFamily: DM, fontWeight: 600, fontSize: 14 }}
          >
            Our Team →
          </button>
        </motion.div>
      </div>

      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-pulse" style={{ width: 1, height: 48, background: 'linear-gradient(to bottom, transparent, rgba(52,211,153,0.5))' }} />
    </section>
  );
}

export default function About() {
  return (
    <div className="min-h-screen bg-white force-light-bg [&_section]:!bg-white">
      <Navbar />
      <div className="[&_section]:!bg-[#080808]">
        <AboutHero />
      </div>
      <div id="about-intro">
        <RCIIFAboutIntro />
      </div>
      <RCIIFWhyUs />
      <MeetOurTeam />
      <div id="story-timeline">
        <RCIIFStoryTimeline />
      </div>

      <div className="py-12">
        <RCIIFIncubatees />
      </div>

      <RCIIFAssociates />
      <RCIIFBoard />
      <Footer />
    </div>
  );
}
