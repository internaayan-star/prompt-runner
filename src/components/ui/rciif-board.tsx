"use client"
import { motion } from "framer-motion"

const board = [
  { name: "Ramsheth Thakur", role: "Director — Entrepreneurship & Social Work", image: "/images/board/council_ramsheth_thakur.jpeg" },
  { name: "Bhagirath Shinde", role: "Director — Legal Affairs", image: "/images/board/council_bhagirath_shinde.jpeg" },
  { name: "Dr. G. D. Yadav", role: "Director — Research", image: "/images/board/council_gd_yadav.jpeg" },
  { name: "Dr. N. B. Pasalker", role: "Education & Skilling", image: "/images/board/council_nb_pasalker.jpeg" },
  { name: "Ajay Kumar Thakur", role: "Fundraising & Investment", image: "/images/board/council_ajay_thakur.jpeg" },
  { name: "Vikas Deshmukh", role: "Retd. IAS — Legal Affairs", image: "/images/board/council_vikas_deshmukh.jpeg" },
  { name: "Paresh Parekh", role: "Entrepreneurship & Technology", image: "/images/board/council_paresh_parekh.jpeg" },
  { name: "Shubhada Nayak", role: "Research & Education", image: "/images/board/council_shubhada_nayak.jpeg" },
]

export function RCIIFBoard() {
  return (
    <section className="w-full py-20 md:py-24 px-4 bg-[#0a0a0a] text-white">
      <div className="container mx-auto max-w-6xl">
        <motion.div
          className="text-center mb-14"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false, amount: 0.5 }}
          transition={{ duration: 0.6 }}
        >
          <span className="text-green-400 text-xs tracking-widest uppercase mb-3 block" style={{ fontFamily: "'Instrument Sans', sans-serif" }}>
            Governance
          </span>
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-3" style={{ fontFamily: "'Instrument Serif', serif" }}>
            Board of Directors
          </h2>
          <p className="text-green-400 italic mb-4" style={{ fontFamily: "'Instrument Serif', serif", fontSize: "20px" }}>
            Leadership
          </p>
          <div className="w-20 h-0.5 bg-green-500 mx-auto mb-4" />
          <p className="text-white/60 max-w-2xl mx-auto text-sm md:text-base" style={{ fontFamily: "'Instrument Sans', sans-serif" }}>
            Veteran educators, entrepreneurs, and institutional leaders steering RCIIF's
            mission with decades of combined experience.
          </p>
        </motion.div>

        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-6">
          {board.map((m, i) => (
            <motion.div
              key={m.name}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: false, amount: 0.3 }}
              transition={{ duration: 0.5, delay: (i % 4) * 0.08 }}
              whileHover={{ y: -6 }}
              className="group bg-white/[0.03] border border-white/10 hover:border-green-500/40 rounded-2xl overflow-hidden transition-colors"
            >
              <div className="aspect-square overflow-hidden bg-gradient-to-br from-green-900/30 via-[#0f0f0f] to-[#0a0a0a]">
                <img
                  src={m.image}
                  alt={m.name}
                  loading="lazy"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
              </div>
              <div className="p-4 text-center flex flex-col justify-center" style={{ minHeight: "84px" }}>
                <h3 className="text-white text-sm font-bold leading-tight" style={{ fontFamily: "'Instrument Serif', serif" }}>
                  {m.name}
                </h3>
                <p className="text-green-400 text-xs mt-1" style={{ fontFamily: "'Instrument Sans', sans-serif" }}>
                  {m.role}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
