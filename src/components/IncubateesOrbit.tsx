import { useEffect, useRef } from 'react';
import gsap from 'gsap';

const INCUBATEES = [
  '/images/incubatees/rezonanz_logo.jpeg',
  '/images/incubatees/quaeslio_logo.jpeg',
  '/images/incubatees/eat_pure_logo.jpeg',
  '/images/incubatees/omegas_investments_logo.jpeg',
  '/images/incubatees/kampuram_organic_air_freshner_logo.jpeg',
  '/images/incubatees/nestcraft_design_logo.jpeg',
  '/images/incubatees/kridinify_tech_logo.jpeg',
  '/images/incubatees/taiyo_hr_solutions_logo.jpeg',
  '/images/incubatees/omniglobal_techsolutions_logo.jpeg',
  '/images/incubatees/myevent_factory_logo.jpeg',
  '/images/incubatees/tiden_technologies_logo.jpeg',
  '/images/incubatees/the_kamy_logo.jpeg',
];

export default function IncubateesOrbit() {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.to('.orbit-ring', { rotation: '+=360', duration: 60, repeat: -1, ease: 'none' });
      gsap.to('.orbit-sat', { rotation: '-=360', duration: 60, repeat: -1, ease: 'none' });
    }, containerRef);
    return () => ctx.revert();
  }, []);

  return (
    <section className="w-full py-16 px-4 overflow-hidden" style={{ background: '#F8F5F0' }}>
      <div className="text-center mb-6">
        <span
          className="text-xs tracking-[0.5em] uppercase font-bold block mb-3"
          style={{ fontFamily: "'DM Sans', sans-serif", color: '#b8882c' }}
        >
          Our Ecosystem
        </span>
        <h2
          className="text-4xl md:text-5xl font-bold"
          style={{ fontFamily: "'Space Grotesk', sans-serif", color: '#1C3A2E' }}
        >
          Incubatees Galaxy
        </h2>
      </div>

      <div
        ref={containerRef}
        className="relative mx-auto flex items-center justify-center"
        style={{ width: 'min(680px, 88vw)', height: 'min(680px, 88vw)' }}
      >
        {/* Center logo */}
        <div
          className="absolute rounded-full bg-white flex items-center justify-center z-20 p-5"
          style={{
            width: 'min(180px, 22vw)',
            height: 'min(180px, 22vw)',
            boxShadow: '0 30px 90px rgba(28,58,46,0.10), 0 0 0 1px rgba(0,0,0,0.04)',
          }}
        >
          <img src="/images/rciif-logo.png" alt="RCIIF" className="w-full h-full object-contain" />
        </div>

        {/* Orbit ring */}
        <div
          className="absolute rounded-full border pointer-events-none"
          style={{ inset: 0, borderColor: 'rgba(184,136,44,0.18)' }}
        />

        {/* Single rotating ring with all satellites */}
        <div className="orbit-ring absolute inset-0" style={{ willChange: 'transform' }}>
          {INCUBATEES.map((img, i) => {
            const angle = (360 / INCUBATEES.length) * i;
            return (
              <div
                key={i}
                className="absolute"
                style={{
                  top: '50%',
                  left: '50%',
                  width: 0,
                  height: 0,
                  transform: `rotate(${angle}deg)`,
                }}
              >
                <div
                  className="orbit-sat rounded-full bg-white border flex items-center justify-center overflow-hidden"
                  style={{
                    width: 'min(78px, 10vw)',
                    height: 'min(78px, 10vw)',
                    position: 'absolute',
                    left: 'min(310px, 40vw)',
                    top: 0,
                    transform: 'translate(-50%, -50%)',
                    borderColor: 'rgba(184,136,44,0.2)',
                    boxShadow: '0 10px 40px rgba(0,0,0,0.06)',
                  }}
                >
                  <img src={img} alt="" className="w-[85%] h-[85%] object-contain" loading="lazy" />
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
