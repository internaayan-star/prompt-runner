"use client"
import { motion } from "framer-motion"

const INCUBATEES = [
  { name: "Rezonanz",                sector: "Healthcare Comms", logo: "/images/incubatees/rezonanz_logo.jpeg" },
  { name: "Quaestio LLP",            sector: "Research",         logo: "/images/incubatees/quaeslio_logo.jpeg" },
  { name: "Omegas Investments",      sector: "FinTech",          logo: "/images/incubatees/omegas_investments_logo.jpeg" },
  { name: "EatPure",                 sector: "FMCG",             logo: "/images/incubatees/eat_pure_logo.jpeg" },
  { name: "Kampuram",                sector: "Organic Products", logo: "/images/incubatees/kampuram_organic_air_freshner_logo.jpeg" },
  { name: "Nest Craft Designs",      sector: "Design",           logo: "/images/incubatees/nestcraft_design_logo.jpeg" },
  { name: "Kridinify Tech",          sector: "AI Tech",          logo: "/images/incubatees/kridinify_tech_logo.jpeg" },
  { name: "Taiyo HR Solutions",      sector: "HR Tech",          logo: "/images/incubatees/taiyo_hr_solutions_logo.jpeg" },
  { name: "Omni Global Tech",        sector: "IT Services",      logo: "/images/incubatees/omniglobal_techsolutions_logo.jpeg" },
  { name: "My Event Factory",        sector: "Events",           logo: "/images/incubatees/myevent_factory_logo.jpeg" },
  { name: "Tiden Technologies",      sector: "IT Services",      logo: "/images/incubatees/tiden_technologies_logo.jpeg" },
  { name: "The Kamy",                sector: "Consumer Brand",   logo: "/images/incubatees/the_kamy_logo.jpeg" },
]

export function RCIIFIncubatees() {
  return (
    <section className="w-full py-24 px-4 bg-[#0a0a0a] text-white overflow-hidden">
      <div className="container mx-auto max-w-6xl">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.7 }}
          className="text-center mb-14"
        >
          <span
            className="text-green-400 text-xs tracking-widest uppercase mb-3 block"
            style={{ fontFamily: "'Instrument Sans', sans-serif" }}
          >
            Portfolio
          </span>
          <h2
            className="text-4xl md:text-5xl font-bold text-white mb-4"
            style={{ fontFamily: "'Instrument Serif', serif" }}
          >
            Our Incubatees
          </h2>
          <div className="w-20 h-0.5 bg-green-500 mx-auto" />
        </motion.div>

        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-5">
          {INCUBATEES.map((inc, i) => (
            <motion.div
              key={inc.name}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.5, delay: (i % 4) * 0.07, ease: [0.16, 1, 0.3, 1] }}
              whileHover={{ y: -6 }}
              className="group relative bg-white/[0.03] border border-white/10 hover:border-green-500/40 rounded-2xl p-6 transition-colors duration-300 overflow-hidden"
            >
              <div className="w-20 h-20 rounded-xl bg-white flex items-center justify-center mb-4 overflow-hidden p-2">
                <img
                  src={inc.logo}
                  alt={`${inc.name} logo`}
                  className="max-w-full max-h-full object-contain"
                  loading="lazy"
                />
              </div>

              <h3
                className="text-white font-bold text-lg leading-tight mb-2"
                style={{ fontFamily: "'Instrument Serif', serif" }}
              >
                {inc.name}
              </h3>

              <span
                className="inline-block text-[10px] uppercase tracking-widest text-green-400/80 bg-green-500/10 border border-green-500/15 rounded-full px-2.5 py-1"
                style={{ fontFamily: "'Instrument Sans', sans-serif" }}
              >
                {inc.sector}
              </span>

              <div className="absolute bottom-0 left-0 right-0 h-[2px] bg-gradient-to-r from-green-500 to-transparent origin-left scale-x-0 group-hover:scale-x-100 transition-transform duration-500" />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
