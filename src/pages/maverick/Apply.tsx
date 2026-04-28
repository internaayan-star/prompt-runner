import { useState } from 'react';
import { motion } from 'framer-motion';
import PageLayout from '@/components/PageLayout';

const SPACE = "'Space Grotesk', sans-serif";
const DM = "'DM Sans', sans-serif";
const PLAYFAIR = "'Playfair Display', serif";
const APPLY_URL = 'https://docs.google.com/forms/d/e/1FAIpQLScf9cywkF4ygMmKM6u3A42fqhrvv9lKsVgGomo_HV-ssvZ9HQ/viewform?usp=header';

const ELIGIBILITY = [
  { q: 'Are you pre-revenue to Series A?', key: 'stage' },
  { q: 'Is your startup registered in India?', key: 'registered' },
  { q: 'Are you willing to be based in Kharghar for cohort duration?', key: 'location' },
];

const DOCUMENTS = [
  'Company incorporation proof',
  'Pitch deck (PDF or link)',
  'Founder Aadhaar / PAN',
  'Bank statement (last 3 months)',
];

const FAQS = [
  { q: 'What is the equity ask?', a: 'Details will be shared during the application process. RCIIF operates on founder-friendly terms.' },
  { q: 'How long is the program?', a: 'Cohort duration varies. Typically 6-12 months of intensive support.' },
  { q: 'Is it physical or remote?', a: 'Primarily physical — based at The Worksmith, Kharghar. Some remote flexibility.' },
  { q: 'What sectors do you focus on?', a: 'Sector-agnostic. Current portfolio spans HealthTech, FinTech, FMCG, AI, HRTech, and EdTech.' },
  { q: 'When is the next cohort?', a: 'Cohort 2026 is currently active. Applications for the next cohort will be announced on our social channels.' },
];

export default function Apply() {
  const [answers, setAnswers] = useState<Record<string, boolean | null>>({});
  const allAnswered = ELIGIBILITY.every((e) => answers[e.key] !== undefined && answers[e.key] !== null);
  const allYes = allAnswered && ELIGIBILITY.every((e) => answers[e.key] === true);
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  return (
    <PageLayout title="Apply to Maverick Pont" description="Apply to RCIIF's Maverick Pont accelerator. Check eligibility, prepare documents, and submit your application.">
      <div className="[&_section]:!bg-[#080808]">
        {/* Hero */}
        <section className="relative min-h-[70vh] flex items-center overflow-hidden" style={{ background: '#080808' }}>
          <div className="absolute inset-0 pointer-events-none" style={{ background: 'radial-gradient(ellipse 60% 50% at 85% 10%, rgba(34,197,94,0.10), transparent)' }} />
          <div className="absolute inset-0 pointer-events-none" style={{ background: 'linear-gradient(to bottom, transparent 70%, #080808 100%)' }} />

          <div className="relative max-w-5xl mx-auto px-6 pt-36 pb-20">
            <motion.div initial={{ opacity: 0, y: 8 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.1, duration: 0.6 }} className="uppercase" style={{ fontFamily: DM, fontSize: 10, letterSpacing: '0.28em', color: 'rgba(255,255,255,0.35)' }}>
              Maverick Pont · Applications Open
            </motion.div>

            <motion.h1 initial={{ opacity: 0, y: 14 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.25, duration: 0.7 }} className="mt-6" style={{ fontFamily: SPACE, fontWeight: 700, fontSize: 'clamp(3rem, 7vw, 6rem)', lineHeight: 1, letterSpacing: '-0.03em', color: '#fff' }}>
              <span className="block">Apply to</span>
              <span className="block mt-1" style={{ fontFamily: PLAYFAIR, fontStyle: 'italic', color: '#34d399' }}>Maverick Pont</span>
            </motion.h1>

            <motion.p initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.55, duration: 0.7 }} className="mt-7" style={{ fontFamily: DM, fontSize: 16, color: 'rgba(255,255,255,0.55)', lineHeight: 1.8, maxWidth: '54ch' }}>
              Maximum clarity, minimum friction. Check your eligibility below and submit your application in under 5 minutes.
            </motion.p>
          </div>
        </section>

        {/* Content */}
        <section className="py-20 px-6" style={{ background: '#080808' }}>
          <div className="max-w-3xl mx-auto space-y-12">

            {/* Eligibility Quiz */}
            <div className="rounded-2xl border border-white/[0.07] bg-white/[0.03] p-8">
              <h3 style={{ fontFamily: SPACE, fontWeight: 700, fontSize: 18, color: '#fff', marginBottom: 20 }}>Quick Eligibility Check</h3>
              <div className="space-y-5">
                {ELIGIBILITY.map((e) => (
                  <div key={e.key} className="flex items-center justify-between gap-4 flex-wrap">
                    <p style={{ fontFamily: DM, fontSize: 14, color: 'rgba(255,255,255,0.7)' }}>{e.q}</p>
                    <div className="flex gap-2 flex-shrink-0">
                      {['Yes', 'No'].map((opt) => {
                        const isYes = opt === 'Yes';
                        const active = answers[e.key] === isYes;
                        const baseCls = 'rounded-xl px-5 py-2 uppercase transition-all';
                        let cls = 'border border-white/10 bg-white/[0.04] text-white/50';
                        if (active && isYes) cls = 'border border-emerald-500/50 bg-emerald-500/10 text-emerald-400';
                        else if (active && !isYes) cls = 'border border-red-500/30 bg-red-500/5 text-red-400';
                        return (
                          <button
                            key={opt}
                            onClick={() => setAnswers((prev) => ({ ...prev, [e.key]: isYes }))}
                            className={`${baseCls} ${cls}`}
                            style={{ fontFamily: DM, fontSize: 11, letterSpacing: '0.12em' }}
                          >
                            {opt}
                          </button>
                        );
                      })}
                    </div>
                  </div>
                ))}
              </div>

              {allAnswered && (
                <div
                  className={`mt-6 p-4 rounded-xl ${allYes ? 'border border-emerald-500/30 bg-emerald-950/40 text-emerald-400' : 'border border-red-500/20 bg-red-950/30 text-red-400'}`}
                  style={{ fontFamily: DM, fontSize: 14 }}
                >
                  {allYes ? "✓ You're eligible! Apply below." : "Speak to our team first — we may still be able to help."}
                </div>
              )}
            </div>

            {/* Required Documents */}
            <div>
              <h3 style={{ fontFamily: SPACE, fontWeight: 700, fontSize: 18, color: '#fff', marginBottom: 20 }}>Required Documents</h3>
              <ul className="space-y-3">
                {DOCUMENTS.map((d, i) => (
                  <li key={d} className="flex items-center gap-4 p-4 rounded-xl bg-white/[0.02] border border-white/[0.06]">
                    <span style={{ fontFamily: SPACE, fontWeight: 700, color: '#34d399', fontSize: 24 }}>{String(i + 1).padStart(2, '0')}</span>
                    <span style={{ fontFamily: DM, fontSize: 14, color: 'rgba(255,255,255,0.65)' }}>{d}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Apply CTA */}
            <div className="rounded-2xl border border-emerald-500/20 bg-gradient-to-br from-emerald-950/30 to-transparent p-10 text-center">
              <h3 style={{ fontFamily: SPACE, fontWeight: 700, fontSize: 24, color: '#fff' }}>Ready to build something great?</h3>
              <p className="mt-3" style={{ fontFamily: DM, fontSize: 14, color: 'rgba(255,255,255,0.5)' }}>
                Submit your application in under 5 minutes.
              </p>
              <div className="flex flex-wrap gap-4 justify-center mt-7">
                <a
                  href={APPLY_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-emerald-500 hover:bg-emerald-400 text-black rounded-xl transition-colors"
                  style={{ fontFamily: DM, fontWeight: 700, padding: '14px 28px', fontSize: 14, textDecoration: 'none' }}
                >
                  Open Application Form →
                </a>
                <a
                  href="mailto:info@rciif.org?subject=Maverick Pont Application"
                  className="bg-white/[0.06] border border-white/20 text-white backdrop-blur-sm rounded-xl hover:bg-white/[0.10] transition-colors"
                  style={{ fontFamily: DM, fontWeight: 600, padding: '14px 28px', fontSize: 14, textDecoration: 'none' }}
                >
                  Email Instead
                </a>
              </div>
            </div>

            {/* FAQ */}
            <div>
              <h3 style={{ fontFamily: SPACE, fontWeight: 700, fontSize: 18, color: '#fff', marginBottom: 20 }}>Frequently Asked Questions</h3>
              <div className="space-y-2">
                {FAQS.map((f, i) => (
                  <div key={i} className="border border-white/[0.06] rounded-xl overflow-hidden">
                    <button
                      onClick={() => setOpenFaq(openFaq === i ? null : i)}
                      className="w-full text-left bg-white/[0.03] p-5 flex items-center justify-between hover:bg-white/[0.05] transition-colors"
                      style={{ fontFamily: DM, fontSize: 14, color: 'rgba(255,255,255,0.7)' }}
                    >
                      {f.q}
                      <span className="text-emerald-400" style={{ fontSize: 20 }}>{openFaq === i ? '−' : '+'}</span>
                    </button>
                    {openFaq === i && (
                      <div className="px-5 pb-5 bg-white/[0.02]">
                        <p style={{ fontFamily: DM, fontSize: 13, color: 'rgba(255,255,255,0.5)', lineHeight: 1.75 }}>{f.a}</p>
                      </div>
                    )}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>
      </div>
    </PageLayout>
  );
}
