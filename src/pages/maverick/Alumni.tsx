import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import PageLayout from '@/components/PageLayout';

const SPACE = "'Space Grotesk', sans-serif";
const PLAYFAIR = "'Playfair Display', serif";
const DM = "'DM Sans', sans-serif";

const APPLY_URL = 'https://docs.google.com/forms/d/e/1FAIpQLScf9cywkF4ygMmKM6u3A42fqhrvv9lKsVgGomo_HV-ssvZ9HQ/viewform?usp=header';

const ALUMNI = [
  { name: 'Rezonanz', sector: 'HealthTech', initials: 'RZ', quote: 'We closed our first enterprise client 3 months after the Maverick Pont cohort.', href: '/maverick/alumni/rezonanz' },
  { name: 'EatPure', sector: 'FMCG', initials: 'EP', quote: '60% repeat customer rate. Built from Kharghar.', href: '/maverick/alumni/eatpure' },
  { name: 'Kridinify Tech', sector: 'AI / Enterprise', initials: 'KT', quote: 'RCIIF connected us to our first 3 enterprise clients.', href: '#' },
];

const STATS = [
  { v: '3', l: 'Companies' },
  { v: '3', l: 'Sectors' },
  { v: '₹12Cr+', l: 'In Funding' },
];

export default function Alumni() {
  return (
    <PageLayout title="Alumni & Success Stories" description="Success stories from RCIIF's Maverick Pont accelerator alumni — Rezonanz, EatPure, Kridinify Tech and more.">
      <div className="[&_section]:!bg-[#080808]">
        {/* HERO */}
        <section className="relative min-h-[80vh] flex items-center overflow-hidden" style={{ background: '#080808' }}>
          <div className="absolute inset-0 pointer-events-none" style={{ background: 'radial-gradient(ellipse 60% 50% at 50% 0%, rgba(34,197,94,0.07), transparent)' }} />
          <div className="absolute inset-0 pointer-events-none" style={{ background: 'linear-gradient(to bottom, transparent 60%, #080808 100%)' }} />

          <div className="relative max-w-5xl mx-auto px-6 pt-36 pb-20">
            <motion.div initial={{ opacity: 0, y: 8 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.1, duration: 0.6 }} className="uppercase" style={{ fontFamily: DM, fontSize: 10, letterSpacing: '0.28em', color: 'rgba(255,255,255,0.35)' }}>
              Maverick Pont · Alumni Stories
            </motion.div>

            <motion.h1 initial={{ opacity: 0, y: 14 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.25, duration: 0.7 }} className="mt-6" style={{ fontFamily: SPACE, fontWeight: 700, fontSize: 'clamp(3rem, 7vw, 6rem)', lineHeight: 1, letterSpacing: '-0.03em', color: '#fff' }}>
              <span className="block">They Built Here.</span>
              <span className="block mt-1" style={{ fontFamily: PLAYFAIR, fontStyle: 'italic', color: '#34d399' }}>So Can You.</span>
            </motion.h1>

            <motion.p initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.55, duration: 0.7 }} className="mt-7" style={{ fontFamily: DM, fontSize: 16, color: 'rgba(255,255,255,0.55)', lineHeight: 1.8, maxWidth: '60ch' }}>
              Founders who turned ambition into companies — from Kharghar to markets across India. Each started exactly where you are now.
            </motion.p>
          </div>
        </section>

        {/* CARDS */}
        <section className="py-24 px-6" style={{ background: '#080808' }}>
          <div className="max-w-6xl mx-auto">
            <div className="uppercase mb-3" style={{ fontFamily: DM, fontSize: 10, letterSpacing: '0.28em', color: '#34d399' }}>Portfolio Alumni</div>
            <h2 style={{ fontFamily: SPACE, fontWeight: 700, fontSize: 'clamp(2rem, 4vw, 3rem)', color: '#fff', letterSpacing: '-0.02em' }}>Cohort Success Stories</h2>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-12">
              {ALUMNI.map((a, i) => (
                <motion.div
                  key={a.name}
                  initial={{ opacity: 0, y: 24 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, amount: 0.3 }}
                  transition={{ duration: 0.6, delay: i * 0.1 }}
                >
                  <Link
                    to={a.href}
                    className="block group rounded-2xl bg-white/[0.03] border border-white/[0.06] hover:border-emerald-500/30 p-8 transition-all"
                    style={{ textDecoration: 'none' }}
                  >
                    <div className="w-16 h-16 rounded-2xl bg-emerald-500/10 border border-emerald-500/25 flex items-center justify-center">
                      <span style={{ fontFamily: PLAYFAIR, fontStyle: 'italic', fontWeight: 700, color: '#34d399', fontSize: 20 }}>{a.initials}</span>
                    </div>
                    <h3 className="mt-4" style={{ fontFamily: SPACE, fontWeight: 700, fontSize: 22, color: '#fff' }}>{a.name}</h3>
                    <span className="inline-block mt-2 uppercase rounded-full px-3 py-1" style={{ fontFamily: DM, fontSize: 9, letterSpacing: '0.18em', color: '#34d399', background: 'rgba(6,78,59,0.6)', border: '1px solid rgba(6,95,70,0.6)' }}>
                      {a.sector}
                    </span>
                    <p className="mt-5 pl-4" style={{ fontFamily: PLAYFAIR, fontStyle: 'italic', color: 'rgba(255,255,255,0.6)', fontSize: 14, lineHeight: 1.8, borderLeft: '2px solid rgba(52,211,153,0.3)' }}>
                      "{a.quote}"
                    </p>
                    <div className="mt-6 uppercase opacity-0 group-hover:opacity-100 transition-opacity" style={{ fontFamily: DM, color: '#34d399', fontSize: 12, letterSpacing: '0.18em' }}>
                      Read Case Study →
                    </div>
                  </Link>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* STATS */}
        <section className="py-20 px-6" style={{ background: '#080808', borderTop: '1px solid rgba(255,255,255,0.06)', borderBottom: '1px solid rgba(255,255,255,0.06)' }}>
          <div className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-10 text-center">
            {STATS.map((s, i) => (
              <motion.div
                key={s.l}
                initial={{ opacity: 0, y: 14 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.4 }}
                transition={{ duration: 0.6, delay: i * 0.08 }}
              >
                <div style={{ fontFamily: SPACE, fontWeight: 700, color: '#fff', fontSize: 'clamp(3rem, 6vw, 5rem)', letterSpacing: '-0.03em', lineHeight: 1 }}>{s.v}</div>
                <div className="mt-2 uppercase" style={{ fontFamily: DM, fontSize: 10, letterSpacing: '0.22em', color: '#34d399' }}>{s.l}</div>
              </motion.div>
            ))}
          </div>
        </section>

        {/* CTA */}
        <section className="py-24 px-6" style={{ background: '#080808' }}>
          <div className="max-w-3xl mx-auto text-center">
            <div className="uppercase mb-3" style={{ fontFamily: DM, fontSize: 10, letterSpacing: '0.28em', color: '#34d399' }}>Applications Open</div>
            <h2 style={{ fontFamily: SPACE, fontWeight: 700, fontSize: 'clamp(2rem, 4vw, 3rem)', color: '#fff', letterSpacing: '-0.02em', lineHeight: 1.1 }}>
              Apply Like <span style={{ fontFamily: PLAYFAIR, fontStyle: 'italic', color: '#34d399' }}>They Did</span>
            </h2>
            <p className="mt-5 mx-auto" style={{ fontFamily: DM, fontSize: 15, color: 'rgba(255,255,255,0.55)', lineHeight: 1.8, maxWidth: '50ch' }}>
              Cohort 2026 is live. Limited seats. Rolling admissions.
            </p>
            <div className="mt-9">
              <a
                href={APPLY_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block bg-emerald-500 hover:bg-emerald-400 text-black rounded-xl transition-colors"
                style={{ fontFamily: DM, fontWeight: 700, padding: '14px 28px', fontSize: 14, textDecoration: 'none' }}
              >
                Apply to Maverick Pont →
              </a>
            </div>
          </div>
        </section>
      </div>
    </PageLayout>
  );
}
