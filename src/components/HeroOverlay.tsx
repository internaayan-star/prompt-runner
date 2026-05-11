import { useState, useEffect, useRef } from 'react';
import { getLenis } from '@/lib/lenis';

function FadeIn({ children, delay = 0, duration = 1000 }: { children: React.ReactNode; delay?: number; duration?: number }) {
  const [visible, setVisible] = useState(false);
  useEffect(() => {
    const t = setTimeout(() => setVisible(true), delay);
    return () => clearTimeout(t);
  }, [delay]);
  return (
    <div
      style={{
        opacity: visible ? 1 : 0,
        transitionDuration: `${duration}ms`,
        transitionProperty: 'opacity',
        transitionTimingFunction: 'ease',
      }}
    >
      {children}
    </div>
  );
}

function MagneticButton({ children }: { children: React.ReactNode }) {
  const ref = useRef<HTMLDivElement>(null);
  const onMove = (e: React.MouseEvent) => {
    const el = ref.current;
    if (!el) return;
    const rect = el.getBoundingClientRect();
    const x = ((e.clientX - rect.left) / rect.width - 0.5) * 14;
    const y = ((e.clientY - rect.top) / rect.height - 0.5) * 14;
    el.style.transform = `translate(${x}px, ${y}px)`;
  };
  const onLeave = () => {
    if (ref.current) ref.current.style.transform = '';
  };
  return (
    <div ref={ref} onMouseMove={onMove} onMouseLeave={onLeave} className="btn-magnetic inline-block">
      {children}
    </div>
  );
}

export default function HeroOverlay() {
  const videoRef = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    const apply = (scroll: number) => {
      if (videoRef.current) videoRef.current.style.transform = `translateY(${scroll * 0.3}px) scale(1.05)`;
    };
    const lenis = getLenis();
    if (lenis) {
      const handler = ({ scroll }: { scroll: number }) => apply(scroll);
      lenis.on('scroll', handler);
      return () => {
        lenis.off('scroll', handler);
      };
    }
    const onScroll = () => apply(window.scrollY);
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <section data-cursor-dark className="relative min-h-screen flex items-end text-white bg-black overflow-hidden">
      <video
        ref={videoRef}
        className="absolute inset-0 w-full h-full object-cover"
        style={{ willChange: 'transform' }}
        src="https://d8j0ntlcm91z4.cloudfront.net/user_38xzZboKViGWJOttwIXH07lWA1P/hf_20260403_050628_c4e32401-fab4-4a27-b7a8-6e9291cd5959.mp4"
        autoPlay
        loop
        muted
        playsInline
      />

      <div className="absolute inset-0 pointer-events-none" style={{ background: 'linear-gradient(to top, rgba(0,0,0,0.82) 0%, rgba(0,0,0,0.22) 50%, rgba(0,0,0,0.12) 100%)' }} />
      <div className="absolute inset-0 pointer-events-none" style={{ background: 'linear-gradient(90deg, rgba(0,0,0,0.52) 0%, transparent 60%)' }} />
      <div className="absolute bottom-0 right-0 w-[700px] h-[700px] pointer-events-none" style={{ background: 'radial-gradient(circle, rgba(34,197,94,0.05) 0%, transparent 70%)' }} />

      <div className="absolute top-28 left-6 md:left-12 z-10">
        <FadeIn delay={300} duration={700}>
          <div
            style={{
              display: 'inline-flex',
              alignItems: 'center',
              gap: '8px',
              padding: '7px 14px',
              borderRadius: '999px',
              background: 'rgba(184,136,44,0.12)',
              border: '1px solid rgba(184,136,44,0.25)',
              backdropFilter: 'blur(12px)',
            }}
          >
            <span style={{ width: 6, height: 6, borderRadius: '50%', background: '#34d399', display: 'inline-block', animation: 'pulse 2s infinite' }} />
            <span style={{ fontFamily: "'JetBrains Mono', monospace", fontSize: '8px', letterSpacing: '0.2em', textTransform: 'uppercase', color: 'rgba(253,251,247,0.7)' }}>
              DPIIT Recognised · Kharghar, MH
            </span>
          </div>
        </FadeIn>
      </div>

      <div className="relative z-10 px-6 md:px-12 lg:px-16 pb-16 md:pb-24 lg:pb-32 max-w-4xl">
        <FadeIn delay={100} duration={900}>
          <h1
            style={{
              fontFamily: "'Space Grotesk', sans-serif",
              fontWeight: 700,
              fontSize: 'clamp(2.4rem, 7vw, 6.5rem)',
              letterSpacing: '-0.03em',
              lineHeight: 1.02,
              color: '#FDFBF7',
              margin: '0 0 4px 0',
            }}
          >
            Where Ideas Find
          </h1>
          <h1
            style={{
              fontFamily: "'Playfair Display', serif",
              fontStyle: 'italic',
              fontWeight: 900,
              fontSize: 'clamp(2.4rem, 7vw, 6.5rem)',
              letterSpacing: '-0.025em',
              lineHeight: 1.02,
              margin: '0 0 28px 0',
              background: 'linear-gradient(135deg, #F5E4B8, #D4A84B, #B8882C)',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
              backgroundClip: 'text',
            }}
          >
            Infrastructure.
          </h1>
        </FadeIn>

        <FadeIn delay={350} duration={900}>
          <p
            style={{
              fontFamily: "'DM Sans', sans-serif",
              fontSize: 'clamp(13px, 1.4vw, 17px)',
              color: 'rgba(253,251,247,0.7)',
              lineHeight: 1.72,
              maxWidth: '46ch',
              marginBottom: '28px',
            }}
          >
            DPIIT-recognised incubator. Backed by a 100-year legacy.
          </p>
        </FadeIn>

        <FadeIn delay={550} duration={900}>
          <div className="hero-stats-row" style={{ display: 'flex', gap: '20px', flexWrap: 'wrap', marginBottom: '32px' }}>
            {[
              { n: '12+', l: 'Startups' },
              { n: '₹12Cr+', l: 'Funding' },
              { n: 'Cohort 5', l: 'Now Open' },
            ].map((s) => (
              <div key={s.l}>
                <div className="hero-stat-n" style={{ fontFamily: "'Space Grotesk', sans-serif", fontWeight: 700, fontSize: '1.4rem', color: '#FDFBF7', letterSpacing: '-0.025em', lineHeight: 1 }}>{s.n}</div>
                <div className="hero-stat-l" style={{ fontFamily: "'JetBrains Mono', monospace", fontSize: '7.5px', letterSpacing: '0.2em', textTransform: 'uppercase', color: 'rgba(253,251,247,0.38)', marginTop: '4px' }}>
                  {s.l}
                </div>
              </div>
            ))}
          </div>
        </FadeIn>

        <FadeIn delay={700} duration={900}>
          <div className="hero-cta-row" style={{ display: 'flex', flexWrap: 'wrap', gap: '14px' }}>
            <MagneticButton>
              <a
                href="/maverick/apply"
                className="hero-cta"
                style={{
                  display: 'inline-flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  gap: '8px',
                  background: '#B8882C',
                  color: '#0C0B09',
                  padding: '13px 26px',
                  borderRadius: '10px',
                  fontFamily: "'JetBrains Mono', monospace",
                  fontSize: '10px',
                  letterSpacing: '0.18em',
                  textTransform: 'uppercase',
                  fontWeight: 600,
                  textDecoration: 'none',
                  boxShadow: '0 8px 28px -8px rgba(184,136,44,0.55)',
                  transition: 'background 0.2s ease, transform 0.2s ease, box-shadow 0.2s ease',
                }}
              >
                Apply as Startup →
              </a>
            </MagneticButton>
            <MagneticButton>
              <a
                href="/ecosystem"
                className="hero-cta"
                style={{
                  display: 'inline-flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  gap: '8px',
                  background: 'rgba(253,251,247,0.07)',
                  color: '#FDFBF7',
                  padding: '13px 26px',
                  borderRadius: '10px',
                  fontFamily: "'JetBrains Mono', monospace",
                  fontSize: '10px',
                  letterSpacing: '0.18em',
                  textTransform: 'uppercase',
                  fontWeight: 500,
                  textDecoration: 'none',
                  border: '1px solid rgba(253,251,247,0.2)',
                  backdropFilter: 'blur(12px)',
                  WebkitBackdropFilter: 'blur(12px)',
                  transition: 'background 0.2s ease',
                }}
              >
                Explore Ecosystem →
              </a>
            </MagneticButton>
          </div>
        </FadeIn>

        <style>{`
          @media (max-width: 640px) {
            .hero-cta-row { flex-direction: column; gap: 12px !important; }
            .hero-cta-row > * { width: 100%; }
            .hero-cta { width: 100%; justify-content: center; }
            .hero-stat-n { font-size: 1.2rem !important; }
            .hero-stat-l { font-size: 7px !important; }
          }
        `}</style>
      </div>

      <div
        className="hidden lg:flex absolute bottom-8 right-8 pointer-events-none"
        style={{
          writingMode: 'vertical-rl',
          textOrientation: 'mixed',
          fontFamily: "'JetBrains Mono', monospace",
          fontSize: '7px',
          letterSpacing: '0.28em',
          textTransform: 'uppercase',
          color: 'rgba(253,251,247,0.28)',
          alignItems: 'center',
          gap: '14px',
        }}
      >
        <span style={{ width: '1px', height: '40px', background: 'rgba(253,251,247,0.18)', display: 'block' }} />
        Rayat Centenary Innovation
      </div>

      <FadeIn delay={1800} duration={900}>
        <div className="absolute bottom-6 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 pointer-events-none">
          <div className="scroll-pulse" style={{ width: '1px', height: '44px', background: 'linear-gradient(180deg, transparent, rgba(184,136,44,0.65))' }} />
          <span style={{ fontFamily: "'JetBrains Mono', monospace", fontSize: '7px', letterSpacing: '0.28em', textTransform: 'uppercase', color: 'rgba(184,136,44,0.55)' }}>
            Scroll
          </span>
        </div>
      </FadeIn>
    </section>
  );
}
