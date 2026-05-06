import { useEffect, useRef } from 'react';
import gsap from 'gsap';

const ORBITS = [
  {
    radius: 200,
    className: 'w1',
    items: [
      { angle: 0, img: '/images/logos/rezonanz.jpg' },
      { angle: 90, img: '/images/logos/quaeslio.jpg' },
      { angle: 180, img: '/images/logos/eatpure.jpg' },
      { angle: 270, img: '/images/logos/omegas.jpg' },
    ],
  },
  {
    radius: 370,
    className: 'w2',
    items: [
      { angle: 45, img: '/images/logos/kampuram.jpg' },
      { angle: 135, img: '/images/logos/logo-2.jpg' },
      { angle: 225, img: '/images/logos/nestcraft.jpg' },
      { angle: 315, img: '/images/logos/kridinify.jpg' },
    ],
  },
  {
    radius: 540,
    className: 'w3',
    items: [
      { angle: 25, img: '/images/logos/taiyo.jpg' },
      { angle: 115, img: '/images/logos/omniglobal.jpg' },
      { angle: 205, img: '/images/logos/myevent.jpg' },
      { angle: 295, img: '/images/logos/tiden.jpg' },
    ],
  },
];

export default function IncubateesOrbit() {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.to('.orbit-w1', { rotation: '+=360', duration: 45, repeat: -1, ease: 'none' });
      gsap.to('.orbit-w2', { rotation: '-=360', duration: 65, repeat: -1, ease: 'none' });
      gsap.to('.orbit-w3', { rotation: '+=360', duration: 100, repeat: -1, ease: 'none' });

      // Counter-rotate satellites to keep them upright
      document.querySelectorAll('.orbit-sat').forEach((sat) => {
        const wrapper = sat.parentElement;
        if (!wrapper) return;
        const isW2 = wrapper.classList.contains('orbit-w2');
        gsap.to(sat, {
          rotation: isW2 ? '+=360' : '-=360',
          duration: wrapper.classList.contains('orbit-w1') ? 45 : wrapper.classList.contains('orbit-w2') ? 65 : 100,
          repeat: -1,
          ease: 'none',
        });
      });
    }, containerRef);

    return () => ctx.revert();
  }, []);

  return (
    <section className="w-full py-24 px-4 overflow-hidden" style={{ background: '#F8F5F0' }}>
      <div className="text-center mb-8">
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
        style={{ width: 'min(1000px, 90vw)', height: 'min(1000px, 90vw)' }}
      >
        {/* Noise overlay */}
        <div
          className="fixed inset-0 pointer-events-none z-50"
          style={{ background: "url('https://grainy-gradients.vercel.app/noise.svg')", opacity: 0.06, mixBlendMode: 'multiply' }}
        />

        {/* Center sun */}
        <div
          className="absolute rounded-full bg-white flex items-center justify-center z-50"
          style={{
            width: 'min(250px, 25vw)',
            height: 'min(250px, 25vw)',
            boxShadow: '0 30px 90px rgba(28,58,46,0.08), 0 0 0 1px rgba(0,0,0,0.04)',
          }}
        >
          <span
            className="font-bold text-center"
            style={{ fontFamily: "'Space Grotesk', sans-serif", fontSize: 'clamp(14px, 2.5vw, 24px)', color: '#1C3A2E' }}
          >
            RCIIF
          </span>
        </div>

        {/* Orbit rings */}
        {ORBITS.map((orbit, oi) => (
          <div
            key={oi}
            className="absolute rounded-full border pointer-events-none"
            style={{
              width: orbit.radius * 2,
              height: orbit.radius * 2,
              top: '50%',
              left: '50%',
              transform: 'translate(-50%, -50%)',
              borderColor: 'rgba(184,136,44,0.12)',
            }}
          />
        ))}

        {/* Satellites */}
        {ORBITS.map((orbit) =>
          orbit.items.map((item, si) => (
            <div
              key={`${orbit.className}-${si}`}
              className={`orbit-${orbit.className} absolute`}
              style={{
                top: '50%',
                left: '50%',
                width: 0,
                height: 0,
                transform: `rotate(${item.angle}deg)`,
                willChange: 'transform',
              }}
            >
              <div
                className="orbit-sat absolute rounded-full bg-white border flex items-center justify-center overflow-hidden"
                style={{
                  width: 'min(95px, 9.5vw)',
                  height: 'min(95px, 9.5vw)',
                  transform: `translate(${orbit.radius}px, 0)`,
                  borderColor: 'rgba(184,136,44,0.2)',
                  boxShadow: '0 10px 40px rgba(0,0,0,0.06)',
                  transition: 'all 0.5s cubic-bezier(0.16,1,0.3,1)',
                }}
              >
                <img
                  src={item.img}
                  alt=""
                  className="w-[85%] h-[85%] object-contain"
                  loading="lazy"
                />
              </div>
            </div>
          ))
        )}
      </div>
    </section>
  );
}
