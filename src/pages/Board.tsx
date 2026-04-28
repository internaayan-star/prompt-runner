import { motion, useMotionValue, useSpring, useTransform } from 'framer-motion';
import { Scale, Users, TrendingUp, Linkedin, Mail } from 'lucide-react';
import { useState } from 'react';
import PageLayout from '@/components/PageLayout';

const BOARD = [
  { name: 'Dr. Anil D. Patil', role: 'Chairman', initials: 'AP', skills: ['Governance', 'Policy', 'Academia'], bio: "Leading RCIIF's strategic vision with 25+ years in institutional governance and educational policy reform across Maharashtra.", featured: true },
  { name: 'Prof. Suresh Jadhav', role: 'Vice Chairman', initials: 'SJ', skills: ['Strategy', 'Education', 'Leadership'], bio: 'Driving institutional partnerships and academic collaboration programmes across India.', featured: false },
  { name: 'Dr. Meera Kulkarni', role: 'Director', initials: 'MK', skills: ['Research', 'Innovation', 'Management'], bio: null, featured: false },
  { name: 'Mr. Rajesh Deshmukh', role: 'Board Member', initials: 'RD', skills: ['Finance', 'Operations', 'Industry'], bio: null, featured: false },
  { name: 'Dr. Sandeep Gokhale', role: 'Board Member', initials: 'SG', skills: ['Technology', 'Startups', 'Mentorship'], bio: null, featured: false },
  { name: 'Ms. Vandana Shah', role: 'Board Member', initials: 'VS', skills: ['Legal', 'Compliance', 'Governance'], bio: null, featured: false },
  { name: 'Mr. Prakash Joshi', role: 'Advisor', initials: 'PJ', skills: ['Investments', 'VC', 'Deal Flow'], bio: "Connecting RCIIF's portfolio startups to India's most active angel and early-stage VC network.", featured: true },
  { name: 'Dr. Nilesh Karanjekar', role: 'Advisor', initials: 'NK', skills: ['Academic', 'Research', 'Policy'], bio: null, featured: false },
];

const VALUES = [
  { Icon: Scale, title: 'Accountability', desc: 'Every decision at RCIIF is governed by transparency, integrity, and institutional accountability.' },
  { Icon: Users, title: 'Inclusivity', desc: "Rooted in Rayat Shikshan Sanstha's 100-year philosophy — education and opportunity for all." },
  { Icon: TrendingUp, title: 'Impact-First', desc: "Our board steers RCIIF toward measurable outcomes for startups, students, and communities." },
];

const FONT_DISPLAY = "'Space Grotesk', sans-serif";
const FONT_SERIF = "'Playfair Display', serif";
const FONT_BODY = "'DM Sans', sans-serif";

/* ─────────────── HERO ─────────────── */
function BoardHero() {
  const headline1 = 'The People Behind';
  const headline2 = 'RCIIF';

  return (
    <section
      className="relative w-full min-h-screen flex items-center justify-center overflow-hidden"
      style={{
        backgroundImage:
          'url(https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&w=2400&q=85)',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundAttachment: 'fixed',
      }}
    >
      <div className="absolute inset-0 bg-black/55" />
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background:
            'radial-gradient(ellipse 80% 60% at 50% 50%, rgba(34,197,94,0.06) 0%, transparent 70%)',
        }}
      />
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background:
            'linear-gradient(to bottom, transparent 40%, rgba(0,0,0,0.85) 100%)',
        }}
      />

      <div className="relative z-10 max-w-5xl mx-auto px-6 text-center">
        {/* Eyebrow */}
        <motion.span
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.15, ease: [0.16, 1, 0.3, 1] }}
          className="inline-flex items-center gap-3 uppercase mb-8"
          style={{
            fontFamily: FONT_BODY,
            fontSize: '11px',
            letterSpacing: '0.32em',
            color: 'rgba(255,255,255,0.45)',
          }}
        >
          Governance &amp; Leadership
          <span className="w-8 h-px bg-white/30 inline-block" />
        </motion.span>

        {/* Headline 1 */}
        <h1
          style={{
            fontFamily: FONT_DISPLAY,
            fontWeight: 700,
            fontSize: 'clamp(2.6rem, 5.5vw, 4.8rem)',
            color: '#ffffff',
            letterSpacing: '-0.03em',
            lineHeight: 1.05,
            margin: 0,
          }}
        >
          {headline1.split('').map((c, i) => (
            <motion.span
              key={i}
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.55, delay: 0.3 + i * 0.028, ease: [0.16, 1, 0.3, 1] }}
              style={{ display: 'inline-block' }}
            >
              {c === ' ' ? '\u00A0' : c}
            </motion.span>
          ))}
        </h1>

        {/* Headline 2 with glow */}
        <div className="relative inline-block mt-2">
          <span
            aria-hidden
            className="absolute inset-0 text-emerald-400/20 blur-2xl select-none pointer-events-none"
            style={{
              fontFamily: FONT_SERIF,
              fontStyle: 'italic',
              fontWeight: 900,
              fontSize: 'clamp(5.5rem, 14vw, 11rem)',
              lineHeight: 0.95,
              letterSpacing: '-0.025em',
            }}
          >
            {headline2}
          </span>
          <h2
            className="relative"
            style={{
              fontFamily: FONT_SERIF,
              fontStyle: 'italic',
              fontWeight: 900,
              fontSize: 'clamp(5.5rem, 14vw, 11rem)',
              lineHeight: 0.95,
              letterSpacing: '-0.025em',
              background:
                'linear-gradient(135deg, #86efac 0%, #34d399 35%, #10b981 65%, #059669 100%)',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
              backgroundClip: 'text',
              margin: 0,
              textShadow: '0 0 80px rgba(52,211,153,0.25)',
            }}
          >
            {headline2.split('').map((c, i) => (
              <motion.span
                key={i}
                initial={{ opacity: 0, y: 24 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.7, delay: 0.65 + i * 0.07, ease: [0.16, 1, 0.3, 1] }}
                style={{ display: 'inline-block' }}
              >
                {c}
              </motion.span>
            ))}
          </h2>
        </div>

        {/* Subtitle */}
        <motion.p
          initial={{ opacity: 0, y: 14 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 1.35, ease: [0.16, 1, 0.3, 1] }}
          className="mx-auto"
          style={{
            fontFamily: FONT_BODY,
            fontSize: '15px',
            color: 'rgba(255,255,255,0.58)',
            lineHeight: 1.8,
            maxWidth: '48ch',
            marginTop: '28px',
          }}
        >
          Veteran educators, entrepreneurs, and institutional leaders steering RCIIF's mission with decades of combined experience.
        </motion.p>

        {/* CTA */}
        <motion.a
          href="#governance-values"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 1.75 }}
          className="group inline-flex flex-col items-center gap-1.5"
          style={{ marginTop: '36px' }}
        >
          <span
            className="uppercase"
            style={{
              fontFamily: FONT_BODY,
              fontWeight: 600,
              fontSize: '12px',
              letterSpacing: '0.14em',
              color: '#ffffff',
            }}
          >
            Our Mission
          </span>
          <motion.span
            className="block bg-white group-hover:bg-emerald-400 transition-colors origin-left"
            style={{ height: '2px', width: '64px' }}
            initial={{ scaleX: 0 }}
            animate={{ scaleX: 1 }}
            transition={{ delay: 1.9, duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
          />
        </motion.a>
      </div>

      {/* Scroll indicator */}
      <div className="absolute left-1/2 -translate-x-1/2 bottom-8">
        <span
          className="block animate-pulse"
          style={{
            width: '1px',
            height: '52px',
            background:
              'linear-gradient(to bottom, transparent, rgba(52,211,153,0.6), transparent)',
          }}
        />
      </div>
    </section>
  );
}

/* ─────────────── BOARD CARD ─────────────── */
function BoardCard({ member, index }: { member: typeof BOARD[0]; index: number }) {
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);
  const rotateX = useSpring(useTransform(mouseY, [-0.5, 0.5], [5, -5]), { stiffness: 300, damping: 30 });
  const rotateY = useSpring(useTransform(mouseX, [-0.5, 0.5], [-5, 5]), { stiffness: 300, damping: 30 });

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const rect = e.currentTarget.getBoundingClientRect();
    mouseX.set((e.clientX - rect.left - rect.width / 2) / (rect.width / 2));
    mouseY.set((e.clientY - rect.top - rect.height / 2) / (rect.height / 2));
  };
  const reset = () => { mouseX.set(0); mouseY.set(0); };

  const colSpan = member.featured ? 'lg:col-span-2' : 'lg:col-span-1';

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.15 }}
      transition={{ duration: 0.6, delay: (index % 4) * 0.08, ease: [0.16, 1, 0.3, 1] }}
      className={`${colSpan} col-span-1`}
      style={{ perspective: 1200 }}
    >
      <motion.div
        style={{ rotateX, rotateY, transformStyle: 'preserve-3d' }}
        onMouseMove={handleMouseMove}
        onMouseLeave={reset}
        className="group relative h-full rounded-2xl border border-white/[0.06] backdrop-blur-sm overflow-hidden cursor-default transition-all duration-300 hover:border-emerald-500/30"
        whileHover={{
          boxShadow:
            '0 0 0 1px rgba(52,211,153,0.15), 0 24px 64px -12px rgba(0,0,0,0.8)',
        }}
      >
        <div
          className="absolute inset-0 pointer-events-none"
          style={{
            background:
              'linear-gradient(135deg, rgba(255,255,255,0.04) 0%, rgba(255,255,255,0) 100%)',
          }}
        />

        {member.featured ? (
          <div
            className="relative flex flex-col md:flex-row items-center gap-8 p-10 h-full"
            style={{
              background:
                'linear-gradient(135deg, rgba(5,150,105,0.08) 0%, rgba(8,8,8,0) 60%)',
            }}
          >
            <div className="flex-shrink-0">
              <div
                className="w-36 h-36 rounded-full flex items-center justify-center border-2"
                style={{
                  borderColor: 'rgba(16,185,129,0.25)',
                  background: 'rgba(16,185,129,0.06)',
                }}
              >
                <span
                  style={{
                    fontFamily: FONT_SERIF,
                    fontStyle: 'italic',
                    fontWeight: 700,
                    fontSize: '2.8rem',
                    color: '#34d399',
                  }}
                >
                  {member.initials}
                </span>
              </div>
            </div>
            <div className="flex-1 text-center md:text-left">
              <h3
                style={{
                  fontFamily: FONT_DISPLAY,
                  fontWeight: 700,
                  fontSize: '28px',
                  color: '#ffffff',
                  letterSpacing: '-0.01em',
                }}
              >
                {member.name}
              </h3>
              <span
                className="inline-block mt-2 mb-4 px-3 py-1 rounded-full"
                style={{
                  background: 'rgba(16,185,129,0.12)',
                  border: '1px solid rgba(16,185,129,0.3)',
                  color: '#34d399',
                  fontFamily: FONT_BODY,
                  fontSize: '10px',
                  letterSpacing: '0.18em',
                  textTransform: 'uppercase',
                }}
              >
                {member.role}
              </span>
              {member.bio && (
                <p
                  style={{
                    fontFamily: FONT_BODY,
                    fontSize: '14px',
                    color: 'rgba(255,255,255,0.55)',
                    lineHeight: 1.75,
                    marginBottom: '16px',
                  }}
                >
                  {member.bio}
                </p>
              )}
              <div className="flex flex-wrap gap-2 justify-center md:justify-start mb-4">
                {member.skills.map((s) => (
                  <span
                    key={s}
                    className="rounded-full px-2.5 py-1 uppercase"
                    style={{
                      background: 'rgba(6,78,59,0.6)',
                      border: '1px solid rgba(6,95,70,0.6)',
                      color: 'rgba(52,211,153,0.8)',
                      fontFamily: FONT_BODY,
                      fontSize: '9px',
                      letterSpacing: '0.08em',
                    }}
                  >
                    {s}
                  </span>
                ))}
              </div>
              <div className="flex gap-2 justify-center md:justify-start">
                {[Linkedin, Mail].map((Icon, i) => (
                  <a
                    key={i}
                    href={i === 1 ? 'mailto:info@rciif.org' : '#'}
                    className="w-7 h-7 rounded-full flex items-center justify-center transition-all"
                    style={{
                      background: 'rgba(255,255,255,0.04)',
                      border: '1px solid rgba(255,255,255,0.08)',
                      color: 'rgba(255,255,255,0.3)',
                    }}
                    onMouseEnter={(e) => {
                      e.currentTarget.style.borderColor = 'rgba(16,185,129,0.4)';
                      e.currentTarget.style.color = '#34d399';
                    }}
                    onMouseLeave={(e) => {
                      e.currentTarget.style.borderColor = 'rgba(255,255,255,0.08)';
                      e.currentTarget.style.color = 'rgba(255,255,255,0.3)';
                    }}
                  >
                    <Icon className="w-3.5 h-3.5" />
                  </a>
                ))}
              </div>
            </div>
          </div>
        ) : (
          <div className="relative flex flex-col p-7 h-full">
            <div
              className="absolute inset-x-0 top-0 h-40 pointer-events-none opacity-0 group-hover:opacity-100 transition-opacity duration-500"
              style={{
                background:
                  'linear-gradient(to top, rgba(6,78,59,0.1), transparent)',
              }}
            />
            <div
              className="h-40 flex items-center justify-center relative"
              style={{
                background:
                  'linear-gradient(to bottom, rgba(6,78,59,0.3), transparent)',
              }}
            >
              <div
                className="w-24 h-24 rounded-full flex items-center justify-center transition-all duration-[400ms]"
                style={{
                  border: '1px solid rgba(255,255,255,0.1)',
                  background: 'rgba(255,255,255,0.03)',
                }}
              >
                <span
                  style={{
                    fontFamily: FONT_SERIF,
                    fontStyle: 'italic',
                    fontWeight: 700,
                    fontSize: '1.75rem',
                    color: '#34d399',
                  }}
                >
                  {member.initials}
                </span>
              </div>
            </div>

            <div className="pt-5">
              <h3
                style={{
                  fontFamily: FONT_DISPLAY,
                  fontWeight: 700,
                  fontSize: '16px',
                  color: '#ffffff',
                  letterSpacing: '-0.01em',
                }}
              >
                {member.name}
              </h3>
              <p
                className="uppercase mt-1"
                style={{
                  fontFamily: FONT_BODY,
                  fontSize: '9px',
                  letterSpacing: '0.18em',
                  color: '#34d399',
                }}
              >
                {member.role}
              </p>
              <div className="h-px bg-white/[0.06] my-4" />
              <div className="flex flex-wrap gap-1.5">
                {member.skills.map((s) => (
                  <span
                    key={s}
                    className="rounded-full px-2.5 py-1 uppercase"
                    style={{
                      background: 'rgba(6,78,59,0.6)',
                      border: '1px solid rgba(6,95,70,0.6)',
                      color: 'rgba(52,211,153,0.8)',
                      fontFamily: FONT_BODY,
                      fontSize: '9px',
                      letterSpacing: '0.08em',
                    }}
                  >
                    {s}
                  </span>
                ))}
              </div>
              <div className="flex gap-2 mt-4">
                {[Linkedin, Mail].map((Icon, i) => (
                  <a
                    key={i}
                    href={i === 1 ? 'mailto:info@rciif.org' : '#'}
                    className="w-7 h-7 rounded-full flex items-center justify-center transition-all"
                    style={{
                      background: 'rgba(255,255,255,0.04)',
                      border: '1px solid rgba(255,255,255,0.08)',
                      color: 'rgba(255,255,255,0.3)',
                    }}
                    onMouseEnter={(e) => {
                      e.currentTarget.style.borderColor = 'rgba(16,185,129,0.4)';
                      e.currentTarget.style.color = '#34d399';
                    }}
                    onMouseLeave={(e) => {
                      e.currentTarget.style.borderColor = 'rgba(255,255,255,0.08)';
                      e.currentTarget.style.color = 'rgba(255,255,255,0.3)';
                    }}
                  >
                    <Icon className="w-3.5 h-3.5" />
                  </a>
                ))}
              </div>
            </div>
          </div>
        )}

        {/* Hover bottom emerald line */}
        <span
          className="absolute bottom-0 left-0 h-0.5 w-full bg-emerald-500 origin-left scale-x-0 group-hover:scale-x-100 transition-transform duration-[400ms] ease-out"
        />
      </motion.div>
    </motion.div>
  );
}

/* ─────────────── BOARD GRID ─────────────── */
function BoardGrid() {
  return (
    <section className="bg-[#080808] py-24 md:py-32 px-4">
      <div className="max-w-[1200px] mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.7 }}
          className="text-center mb-20"
        >
          <span
            className="uppercase block mb-4"
            style={{
              fontFamily: FONT_BODY,
              fontSize: '11px',
              letterSpacing: '0.22em',
              color: '#34d399',
            }}
          >
            Board of Directors
          </span>
          <h2
            style={{
              fontFamily: FONT_DISPLAY,
              fontWeight: 700,
              fontSize: 'clamp(2.5rem, 5vw, 4rem)',
              color: '#ffffff',
              letterSpacing: '-0.025em',
              lineHeight: 1.05,
            }}
          >
            Leadership
          </h2>
          <div className="h-0.5 w-12 bg-emerald-500 mx-auto mt-4 mb-6" />
          <p
            className="mx-auto"
            style={{
              fontFamily: FONT_BODY,
              fontSize: '15px',
              color: 'rgba(255,255,255,0.5)',
              maxWidth: '56ch',
              lineHeight: 1.75,
            }}
          >
            Distinguished individuals guiding RCIIF's strategic direction and institutional governance.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {BOARD.map((m, i) => (
            <BoardCard key={m.name} member={m} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
}

/* ─────────────── ADVISORY MARQUEE ─────────────── */
function AdvisoryMarquee() {
  const row1 = ['Dr. Nilesh Karanjekar', 'Mr. Prakash Joshi', 'Dr. Anil D. Patil', 'Prof. Suresh Jadhav', 'Industry Mentors', 'Investor Network'];
  const row2 = ['External Advisors Welcome', 'RSS Legacy', 'DPIIT Backed', 'Innovation Network', 'Navi Mumbai', 'Kharghar Hub'];

  const renderRow = (items: string[]) => {
    const doubled = [...items, ...items];
    return doubled.map((a, i) => (
      <span
        key={i}
        className="mx-8 inline-flex items-center gap-8"
        style={{
          fontFamily: FONT_SERIF,
          fontStyle: 'italic',
          fontSize: 'clamp(1.4rem, 2.8vw, 2.2rem)',
          color: 'rgba(255,255,255,0.5)',
          whiteSpace: 'nowrap',
        }}
      >
        {a}
        <span style={{ color: '#34d399', fontSize: '1rem' }}>✦</span>
      </span>
    ));
  };

  return (
    <section className="bg-[#080808] py-20 overflow-hidden border-y border-white/[0.04]">
      <div className="max-w-[1100px] mx-auto text-center mb-12 px-4">
        <span
          className="uppercase block mb-3"
          style={{
            fontFamily: FONT_BODY,
            fontSize: '11px',
            letterSpacing: '0.22em',
            color: '#34d399',
          }}
        >
          Advisory Council
        </span>
        <h2
          className="mb-4"
          style={{
            fontFamily: FONT_DISPLAY,
            fontWeight: 700,
            fontSize: 'clamp(1.875rem, 3.5vw, 2.5rem)',
            color: '#ffffff',
            letterSpacing: '-0.02em',
            lineHeight: 1.1,
          }}
        >
          Advisory Council
        </h2>
        <p
          style={{
            fontFamily: FONT_BODY,
            fontSize: '14px',
            color: 'rgba(255,255,255,0.4)',
          }}
        >
          Guiding startups, investors, and institutions across the RCIIF ecosystem.
        </p>
      </div>

      <div className="overflow-hidden">
        <div className="animate-scroll-left flex whitespace-nowrap py-5" style={{ width: 'max-content' }}>
          {renderRow(row1)}
        </div>
      </div>
      <div className="overflow-hidden mt-2">
        <div className="animate-scroll-right flex whitespace-nowrap py-5" style={{ width: 'max-content' }}>
          {renderRow(row2)}
        </div>
      </div>
    </section>
  );
}

/* ─────────────── GOVERNANCE VALUES ─────────────── */
function ValueCard({ v, i }: { v: typeof VALUES[0]; i: number }) {
  const [hovered, setHovered] = useState(false);
  const Icon = v.Icon;
  return (
    <motion.div
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.3 }}
      transition={{ duration: 0.5, delay: i * 0.1 }}
      whileHover={{ y: -5 }}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      className="p-8 rounded-2xl bg-white border border-gray-100 hover:border-emerald-400/50 transition-all duration-300 hover:shadow-[0_16px_48px_-16px_rgba(5,150,105,0.12)]"
    >
      <div className="w-14 h-14 rounded-xl bg-emerald-50 border border-emerald-100 flex items-center justify-center mb-6">
        <Icon size={22} className="text-emerald-600" />
      </div>
      <h3
        style={{
          fontFamily: FONT_DISPLAY,
          fontWeight: 700,
          fontSize: '20px',
          color: '#0a0a0a',
        }}
      >
        {v.title}
      </h3>
      <p
        className="mt-3"
        style={{
          fontFamily: FONT_BODY,
          fontSize: '14px',
          color: 'rgba(10,10,10,0.6)',
          lineHeight: 1.8,
        }}
      >
        {v.desc}
      </p>
      <motion.div
        className="h-0.5 bg-emerald-500 mt-6"
        animate={{ width: hovered ? 80 : 32 }}
        transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
      />
    </motion.div>
  );
}

function GovernanceValues() {
  return (
    <section id="governance-values" className="bg-white py-24 md:py-32 px-4">
      <div className="max-w-[1100px] mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.7 }}
          className="text-center mb-16"
        >
          <span
            className="uppercase block mb-4"
            style={{
              fontFamily: FONT_BODY,
              fontSize: '11px',
              letterSpacing: '0.22em',
              color: '#059669',
            }}
          >
            Our Principles
          </span>
          <h2
            style={{
              fontFamily: FONT_DISPLAY,
              fontWeight: 700,
              fontSize: 'clamp(2rem, 4vw, 3.5rem)',
              color: '#0a0a0a',
              letterSpacing: '-0.025em',
              lineHeight: 1.1,
            }}
          >
            Governance{' '}
            <em
              style={{
                fontFamily: FONT_SERIF,
                fontStyle: 'italic',
                fontWeight: 700,
                color: '#059669',
              }}
            >
              Values
            </em>
          </h2>
          <div className="h-0.5 w-12 bg-emerald-500 mx-auto mt-4" />
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {VALUES.map((v, i) => (
            <ValueCard key={v.title} v={v} i={i} />
          ))}
        </div>
      </div>
    </section>
  );
}

/* ─────────────── JOIN CTA ─────────────── */
function JoinCTA() {
  return (
    <section className="bg-[#080808] py-20 md:py-28 px-4">
      <div className="max-w-4xl mx-auto rounded-3xl relative overflow-hidden border border-white/[0.06]">
        <img
          src="https://images.unsplash.com/photo-1521737604893-d14cc237f11d?auto=format&fit=crop&w=1600&q=80"
          alt=""
          aria-hidden
          className="absolute inset-0 w-full h-full object-cover"
          style={{ opacity: 0.07, mixBlendMode: 'luminosity' }}
        />
        <div className="absolute inset-0 bg-gradient-to-br from-emerald-950/30 via-[#080808] to-[#080808]" />
        <div className="relative z-10 p-10 md:p-16 text-center">
          <span
            className="uppercase block mb-4"
            style={{
              fontFamily: FONT_BODY,
              fontSize: '11px',
              letterSpacing: '0.22em',
              color: '#34d399',
            }}
          >
            Join the Council
          </span>
          <h2
            style={{
              fontFamily: FONT_DISPLAY,
              fontWeight: 700,
              fontSize: 'clamp(1.875rem, 4vw, 3rem)',
              color: '#ffffff',
              letterSpacing: '-0.025em',
              lineHeight: 1.1,
              whiteSpace: 'pre-line',
            }}
          >
            {'Interested in Joining\nOur Advisory Council?'}
          </h2>
          <p
            className="mx-auto mt-5 mb-10"
            style={{
              fontFamily: FONT_BODY,
              fontSize: '15px',
              color: 'rgba(255,255,255,0.5)',
              maxWidth: '48ch',
              lineHeight: 1.75,
            }}
          >
            We're always open to connecting with experienced leaders who share our mission of building India's next generation of impact-driven founders.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <motion.a
              href="mailto:info@rciif.org"
              whileHover={{ scale: 1.03 }}
              className="bg-emerald-500 hover:bg-emerald-400 text-black font-semibold px-8 py-4 rounded-xl text-base transition-colors"
              style={{ fontFamily: FONT_BODY }}
            >
              Get in Touch →
            </motion.a>
            <motion.a
              href="#governance-values"
              whileHover={{ scale: 1.03 }}
              className="border border-white/20 text-white bg-white/[0.04] backdrop-blur-sm px-8 py-4 rounded-xl text-base transition-colors hover:bg-white/[0.08]"
              style={{ fontFamily: FONT_BODY }}
            >
              Learn About Governance
            </motion.a>
          </div>
        </div>
      </div>
    </section>
  );
}

export default function Board() {
  return (
    <PageLayout
      title="Board — RCIIF"
      description="The people behind RCIIF — veteran educators, entrepreneurs, and institutional leaders."
    >
      <BoardHero />
      <BoardGrid />
      <AdvisoryMarquee />
      <GovernanceValues />
      <JoinCTA />
    </PageLayout>
  );
}
