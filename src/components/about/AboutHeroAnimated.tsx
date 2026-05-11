import { useEffect, useRef } from 'react';
import gsap from 'gsap';

const DM = "'DM Sans', sans-serif";
const SPACE = "'Space Grotesk', sans-serif";

const CARDS = [
  { label: 'Founders', sub: 'Nurturing bold ideas', pos: 'card-founders', seed: 'Felix' },
  { label: 'Mentors', sub: 'Guidance for growth', pos: 'card-mentors', seed: 'Aria' },
  { label: 'Investors', sub: 'Fueling the future', pos: 'card-investors', seed: 'Jack' },
  { label: 'Partners', sub: 'Collaborative impact', pos: 'card-partners', seed: 'Lily' },
];

export default function AboutHeroAnimated() {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const ctx = gsap.context(() => {
      const tl = gsap.timeline();

      tl.to('.ahero-wrapper', { y: 0, opacity: 1, duration: 1.8, ease: 'expo.out' });
      tl.to('.ahero-tag', { opacity: 1, y: 0, duration: 0.8, ease: 'power2.out' }, '-=1.2');
      tl.to('.ahero-headline', { opacity: 1, y: 0, duration: 1.2, ease: 'power3.out' }, '-=1.0');
      tl.to('.ahero-subtext', { opacity: 1, y: 0, duration: 1 }, '-=0.8');
      tl.to('.ahero-btn', { opacity: 1, scale: 1, duration: 0.8, ease: 'back.out(1.7)' }, '-=0.6');
      tl.to('.ahero-card', { opacity: 1, duration: 1.2, stagger: 0.15, ease: 'power2.out' }, '-=0.8');

      // Infinite floating
      gsap.to('.card-founders', { y: -15, x: 5, duration: 3, repeat: -1, yoyo: true, ease: 'sine.inOut' });
      gsap.to('.card-mentors', { y: 15, x: -5, duration: 3.5, repeat: -1, yoyo: true, ease: 'sine.inOut', delay: 0.5 });
      gsap.to('.card-investors', { y: -10, x: -8, duration: 4, repeat: -1, yoyo: true, ease: 'sine.inOut', delay: 0.2 });
      gsap.to('.card-partners', { y: 12, x: 10, duration: 3.2, repeat: -1, yoyo: true, ease: 'sine.inOut', delay: 0.7 });

      gsap.to('.ahero-circle', { scale: 1.05, duration: 8, repeat: -1, yoyo: true, ease: 'sine.inOut' });
    }, el);

    return () => ctx.revert();
  }, []);

  const scrollTo = (id: string) => {
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section
      ref={ref}
      className="relative w-full flex items-center justify-center overflow-hidden"
      style={{ background: '#F9F5F0', color: '#0A0A0A', minHeight: '100vh' }}
    >
      <div
        className="ahero-wrapper relative w-full h-full flex items-center justify-center"
        style={{ transform: 'translateY(100%)', opacity: 0 }}
      >
        {/* Background circle */}
        <div
          className="ahero-circle absolute rounded-full bg-white z-0"
          style={{ width: 800, height: 800, boxShadow: '0 40px 100px -20px rgba(0,0,0,0.03)' }}
        />

        {/* Floating cards */}
        {CARDS.map((c) => (
          <div
            key={c.label}
            className={`ahero-card absolute bg-white rounded-2xl shadow-lg flex items-center gap-4 z-[3] ${c.pos}`}
            style={{ padding: '16px 24px', opacity: 0 }}
          >
            <div className="w-12 h-12 rounded-full bg-gray-100 overflow-hidden">
              <img
                src={`https://api.dicebear.com/7.x/avataaars/svg?seed=${c.seed}`}
                alt={c.label}
                className="w-full h-full object-cover"
              />
            </div>
            <div>
              <h4 style={{ fontFamily: SPACE, fontSize: '0.9rem', fontWeight: 700 }}>{c.label}</h4>
              <p style={{ fontFamily: DM, fontSize: '0.75rem', color: '#555' }}>{c.sub}</p>
            </div>
          </div>
        ))}

        {/* Content */}
        <div className="relative z-[2] text-center max-w-[800px] px-10">
          <div
            className="ahero-tag mb-6"
            style={{
              fontFamily: DM,
              fontSize: 11,
              fontWeight: 700,
              letterSpacing: '0.2em',
              textTransform: 'uppercase',
              color: '#37D997',
              opacity: 0,
            }}
          >
            Our Story
          </div>
          <h1
            className="ahero-headline mb-6"
            style={{
              fontFamily: SPACE,
              fontSize: 'clamp(2.5rem, 5vw, 3.5rem)',
              fontWeight: 700,
              lineHeight: 1.15,
              letterSpacing: '-0.02em',
              opacity: 0,
            }}
          >
            We exist to empower the next generation of leaders.
          </h1>
          <p
            className="ahero-subtext mx-auto mb-10"
            style={{
              fontFamily: DM,
              fontSize: '1.1rem',
              color: '#555',
              lineHeight: 1.6,
              maxWidth: '60ch',
              opacity: 0,
            }}
          >
            RCIIF is more than an incubator. We are a legacy-backed ecosystem providing the infrastructure,
            mentorship, and funding needed to turn disruptive ideas into world-changing companies.
          </p>
          <button
            className="ahero-btn inline-flex items-center gap-3 text-white font-semibold rounded-full hover:scale-105 transition-transform"
            style={{
              fontFamily: DM,
              background: '#37D997',
              padding: '18px 36px',
              fontSize: '1rem',
              opacity: 0,
            }}
            onClick={() => scrollTo('about-intro')}
          >
            Discover More →
          </button>
        </div>
      </div>

      <style>{`
        .card-founders { top: 12%; left: 4%; }
        .card-mentors { top: 12%; right: 4%; }
        .card-investors { bottom: 12%; left: 4%; }
        .card-partners { bottom: 12%; right: 4%; }

        @media (max-width: 1100px) {
          .ahero-card { display: none; }
          .ahero-circle { width: 400px !important; height: 400px !important; }
        }
      `}</style>
    </section>
  );
}
