import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import PageLayout from '@/components/PageLayout';

const SPACE = "'Space Grotesk', sans-serif";
const PLAYFAIR = "'Playfair Display', serif";
const DM = "'DM Sans', sans-serif";

const STEPS = [
  { num: '01', title: 'Express Interest', desc: 'Reach out via the partner form or connect at an RCIIF event.' },
  { num: '02', title: 'Portfolio Review', desc: 'We share current deal flow and portfolio overview under NDA.' },
  { num: '03', title: 'Due Diligence', desc: 'Access founder sessions, pitch days, and detailed startup data.' },
  { num: '04', title: 'Co-Invest', desc: "Participate in funding rounds alongside RCIIF's angel network." },
];

const STATS = [
  { v: '12', l: 'Active Portfolio' },
  { v: '6', l: 'Sectors' },
  { v: '₹12Cr+', l: 'Funding' },
  { v: '3x', l: 'Avg Growth' },
];

const VALUES = [
  { t: 'Vetted Dealflow', d: 'Every startup is filtered through registered-valuer reports, DPIIT recognition, and rigorous diligence.' },
  { t: 'Early Access', d: 'See deals before they go public. Get founder time, data rooms, and pitch days first.' },
  { t: 'Co-Investment', d: 'Invest alongside RCIIF and our angel network. Aligned interests, shared upside.' },
];

export default function Investors() {
  return (
    <PageLayout title="For Investors" description="Curated dealflow, de-risked. Access vetted early-stage startups from Maverick Pont.">
      <div className="[&_section]:!bg-[#080808]">
        {/* HERO */}
        <section className="relative min-h-[80vh] flex items-center overflow-hidden" style={{ background: '#080808' }}>
          <div className="absolute inset-0 pointer-events-none" style={{ background: 'radial-gradient(ellipse 60% 50% at 50% 0%, rgba(34,197,94,0.08), transparent)' }} />
          <div className="absolute inset-0 pointer-events-none" style={{ background: 'linear-gradient(to bottom, transparent 60%, #080808 100%)' }} />

          <div className="relative max-w-5xl mx-auto px-6 pt-36 pb-20">
            <motion.div initial={{ opacity: 0, y: 8 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.1, duration: 0.6 }} className="uppercase" style={{ fontFamily: DM, fontSize: 10, letterSpacing: '0.28em', color: 'rgba(255,255,255,0.35)' }}>
              For Investors · Maverick Pont
            </motion.div>

            <motion.h1 initial={{ opacity: 0, y: 14 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.25, duration: 0.7 }} className="mt-6" style={{ fontFamily: SPACE, fontWeight: 700, fontSize: 'clamp(3rem, 7vw, 6rem)', lineHeight: 1, letterSpacing: '-0.03em', color: '#fff' }}>
              <span className="block">Curated Dealflow,</span>
              <span className="block mt-1" style={{ fontFamily: PLAYFAIR, fontStyle: 'italic', color: '#34d399' }}>De-risked.</span>
            </motion.h1>

            <motion.p initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.55, duration: 0.7 }} className="mt-7" style={{ fontFamily: DM, fontSize: 16, color: 'rgba(255,255,255,0.55)', lineHeight: 1.8, maxWidth: '60ch' }}>
              Access vetted early-stage startups from Maverick Pont — backed by registered-valuer reports, DPIIT recognition, and a 100-year institutional legacy. Data-first. No fluff.
            </motion.p>
          </div>
        </section>

        {/* STATS */}
        <section className="py-20 px-6" style={{ background: '#080808' }}>
          <div className="max-w-6xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-8">
            {STATS.map((s, i) => (
              <motion.div
                key={s.l}
                initial={{ opacity: 0, y: 14 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.4 }}
                transition={{ duration: 0.6, delay: i * 0.08 }}
                className="text-center pt-6"
                style={{ borderTop: '2px solid rgba(52,211,153,0.4)' }}
              >
                <div style={{ fontFamily: SPACE, fontWeight: 700, color: '#fff', fontSize: 'clamp(2.5rem, 5vw, 4rem)', letterSpacing: '-0.03em', lineHeight: 1 }}>{s.v}</div>
                <div className="uppercase mt-2" style={{ fontFamily: DM, fontSize: 10, letterSpacing: '0.22em', color: '#34d399' }}>{s.l}</div>
              </motion.div>
            ))}
          </div>
        </section>

        {/* STEPS */}
        <section className="py-24 px-6" style={{ background: '#080808' }}>
          <div className="max-w-6xl mx-auto">
            <div className="uppercase mb-3" style={{ fontFamily: DM, fontSize: 10, letterSpacing: '0.28em', color: '#34d399' }}>Partner Onboarding</div>
            <h2 style={{ fontFamily: SPACE, fontWeight: 700, fontSize: 'clamp(2rem, 4vw, 3rem)', color: '#fff', letterSpacing: '-0.02em' }}>How It Works</h2>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mt-12">
              {STEPS.map((s, i) => (
                <motion.div
                  key={s.num}
                  initial={{ opacity: 0, y: 16 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, amount: 0.3 }}
                  transition={{ duration: 0.6, delay: i * 0.08 }}
                  className="group rounded-2xl bg-white/[0.03] border border-white/[0.06] p-7 hover:border-emerald-500/30 transition-all"
                >
                  <div style={{ fontFamily: SPACE, fontWeight: 700, color: '#34d399', fontSize: 36, opacity: 0.4 }}>{s.num}</div>
                  <h4 className="mt-4 mb-2" style={{ fontFamily: SPACE, fontWeight: 700, fontSize: 17, color: '#fff' }}>{s.title}</h4>
                  <p style={{ fontFamily: DM, color: 'rgba(255,255,255,0.5)', fontSize: 13, lineHeight: 1.7 }}>{s.desc}</p>
                  <div className="h-0.5 bg-emerald-500 w-8 mt-5 transition-all duration-300 group-hover:w-16" />
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* VALUE PROPS — light bg */}
        <section className="py-24 px-6 bg-white" style={{ background: '#fff' }}>
          <div className="max-w-6xl mx-auto">
            <div className="uppercase mb-3" style={{ fontFamily: DM, fontSize: 10, letterSpacing: '0.28em', color: '#10b981' }}>Why RCIIF</div>
            <h2 style={{ fontFamily: SPACE, fontWeight: 700, fontSize: 'clamp(2rem, 4vw, 3rem)', color: '#0a0a0a', letterSpacing: '-0.02em' }}>The RCIIF Advantage</h2>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-12">
              {VALUES.map((v, i) => (
                <motion.div
                  key={v.t}
                  initial={{ opacity: 0, y: 16 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, amount: 0.3 }}
                  transition={{ duration: 0.6, delay: i * 0.08 }}
                  className="p-8 rounded-2xl bg-white border border-gray-100 hover:border-emerald-400/40 transition-all"
                  style={{ boxShadow: '0 1px 2px rgba(0,0,0,0.02)' }}
                >
                  <div className="w-14 h-14 bg-emerald-50 border border-emerald-100 rounded-xl flex items-center justify-center">
                    <span style={{ fontFamily: SPACE, fontWeight: 700, color: '#10b981', fontSize: 22 }}>{i + 1}</span>
                  </div>
                  <h3 className="mt-5" style={{ fontFamily: SPACE, fontWeight: 700, fontSize: 20, color: '#0a0a0a' }}>{v.t}</h3>
                  <p className="mt-3" style={{ fontFamily: DM, color: 'rgba(10,10,10,0.6)', fontSize: 14, lineHeight: 1.8 }}>{v.d}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="py-24 px-6" style={{ background: '#080808' }}>
          <div className="max-w-3xl mx-auto text-center">
            <h2 style={{ fontFamily: SPACE, fontWeight: 700, fontSize: 'clamp(2rem, 4vw, 3rem)', color: '#fff', letterSpacing: '-0.02em', lineHeight: 1.1 }}>
              Ready to invest in the <span style={{ fontFamily: PLAYFAIR, fontStyle: 'italic', color: '#34d399' }}>next generation?</span>
            </h2>
            <p className="mt-5 mx-auto" style={{ fontFamily: DM, fontSize: 15, color: 'rgba(255,255,255,0.55)', lineHeight: 1.8, maxWidth: '50ch' }}>
              Join RCIIF's investor network. Get early access to Maverick Pont dealflow.
            </p>
            <div className="flex flex-wrap gap-4 justify-center mt-9">
              <Link
                to="/contact/partner"
                className="bg-emerald-500 hover:bg-emerald-400 text-black rounded-xl transition-colors"
                style={{ fontFamily: DM, fontWeight: 700, padding: '14px 28px', fontSize: 14, textDecoration: 'none' }}
              >
                Become a Partner →
              </Link>
              <Link
                to="/ecosystem"
                className="bg-white/[0.06] border border-white/20 text-white backdrop-blur-sm rounded-xl hover:bg-white/[0.10] transition-colors"
                style={{ fontFamily: DM, fontWeight: 600, padding: '14px 28px', fontSize: 14, textDecoration: 'none' }}
              >
                View Portfolio
              </Link>
            </div>
          </div>
        </section>
      </div>
    </PageLayout>
  );
}
