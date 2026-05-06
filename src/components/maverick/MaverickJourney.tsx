import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const PHASES = [
  { num: '01', text: 'Apply to the ecosystem. Seed your vision in fertile ground backed by legacy.' },
  { num: '02', text: 'Join the live summit. Connect with the masters of global industry.' },
  { num: '03', text: 'Pitch to investors. Accelerate your momentum with strategic capital.' },
  { num: '04', text: 'Scale your impact. Transform the future through bold innovation.' },
];

const SPACE = "'Space Grotesk', sans-serif";
const PLAYFAIR = "'Playfair Display', serif";
const DM = "'DM Sans', sans-serif";

export default function MaverickJourney() {
  const wrapperRef = useRef<HTMLDivElement>(null);
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const wrapper = wrapperRef.current;
    if (!wrapper) return;

    const ctx = gsap.context(() => {
      // Draw the SVG journey line on scroll
      const line = wrapper.querySelector('#journey-line') as SVGPathElement;
      if (line) {
        const length = line.getTotalLength();
        line.style.strokeDasharray = String(length);
        line.style.strokeDashoffset = String(length);

        gsap.to(line, {
          strokeDashoffset: 0,
          scrollTrigger: {
            trigger: '.mj-journey-wrapper',
            start: 'top 20%',
            end: 'bottom bottom',
            scrub: 3,
          },
        });
      }

      // Step content fade-in
      wrapper.querySelectorAll('.mj-step-content').forEach((content) => {
        ScrollTrigger.create({
          trigger: content.parentElement!,
          start: 'top center',
          end: 'bottom center',
          onEnter: () => content.classList.add('mj-active'),
          onLeaveBack: () => content.classList.remove('mj-active'),
        });
      });
    }, wrapper);

    // Particles
    const canvas = canvasRef.current;
    if (canvas) {
      const c = canvas.getContext('2d')!;
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
      const particles: { x: number; y: number; size: number; opacity: number; speedY: number }[] = [];
      for (let i = 0; i < 120; i++) {
        particles.push({
          x: Math.random() * canvas.width,
          y: Math.random() * canvas.height,
          size: Math.random() * 1.5,
          opacity: Math.random() * 0.4,
          speedY: 0.1 + Math.random() * 0.3,
        });
      }
      let raf: number;
      function animate() {
        c.clearRect(0, 0, canvas!.width, canvas!.height);
        particles.forEach((p) => {
          c.fillStyle = `rgba(201, 168, 76, ${p.opacity})`;
          p.y -= p.speedY;
          if (p.y < 0) p.y = canvas!.height;
          c.beginPath();
          c.arc(p.x, p.y, p.size, 0, Math.PI * 2);
          c.fill();
        });
        raf = requestAnimationFrame(animate);
      }
      animate();
      return () => {
        ctx.revert();
        cancelAnimationFrame(raf);
      };
    }

    return () => ctx.revert();
  }, []);

  return (
    <section ref={wrapperRef} className="relative" style={{ background: '#F8F5F0', color: '#1C3A2E' }}>
      {/* Noise */}
      <div
        className="fixed inset-0 pointer-events-none z-50"
        style={{ background: "url('https://grainy-gradients.vercel.app/noise.svg')", opacity: 0.03, mixBlendMode: 'multiply' }}
      />

      {/* Bottom fade */}
      <div
        className="fixed bottom-0 left-0 w-full h-[20vh] pointer-events-none z-10"
        style={{ background: 'linear-gradient(to top, #F8F5F0, transparent)' }}
      />

      {/* Canvas particles */}
      <canvas ref={canvasRef} className="fixed top-0 left-0 w-full h-full pointer-events-none z-0" />

      {/* Hero section */}
      <div className="h-screen flex items-center justify-center relative z-[2]">
        <div className="text-center">
          <span
            className="block mb-8"
            style={{ fontFamily: DM, fontSize: 11, letterSpacing: '0.5em', textTransform: 'uppercase', fontWeight: 800, color: '#C9A84C' }}
          >
            The Evolution of Incubation
          </span>
          <h2 style={{ fontFamily: PLAYFAIR, fontSize: 'clamp(5rem, 14vw, 18rem)', fontWeight: 900, lineHeight: 0.85, letterSpacing: '-0.06em', textTransform: 'uppercase' }}>
            Maverick<br />
            <em style={{ fontStyle: 'italic', fontWeight: 400, color: '#C9A84C' }}>Journey.</em>
          </h2>
        </div>
      </div>

      {/* Journey steps */}
      <div className="mj-journey-wrapper relative w-full" style={{ paddingBottom: 400 }}>
        <div className="absolute top-0 left-0 w-full h-full pointer-events-none z-[1]">
          <svg viewBox="0 0 1000 5000" preserveAspectRatio="none" className="w-full h-full overflow-visible">
            <path
              id="journey-line"
              d="M 500,0 C 500,500 200,1000 200,1500 S 800,2000 800,2500 S 200,3000 200,3500 S 500,4500 500,5000"
              fill="none"
              stroke="#C9A84C"
              strokeWidth="3"
              opacity="0.3"
            />
          </svg>
        </div>

        {PHASES.map((phase) => (
          <div
            key={phase.num}
            className="h-[120vh] flex items-center justify-center relative"
            style={{ padding: '0 10vw' }}
          >
            <div
              className="mj-step-content max-w-[600px] text-center"
              style={{
                opacity: 0,
                transform: 'translateY(120px)',
                transition: 'all 1.2s cubic-bezier(0.16, 1, 0.3, 1)',
              }}
            >
              <span
                className="block mb-4"
                style={{ fontFamily: DM, fontSize: 11, letterSpacing: '0.5em', textTransform: 'uppercase', fontWeight: 800, color: '#C9A84C' }}
              >
                Phase {phase.num}
              </span>
              <p
                style={{
                  fontFamily: SPACE,
                  fontSize: 'clamp(1.4rem, 2.5vw, 2.2rem)',
                  fontWeight: 700,
                  lineHeight: 1.2,
                  letterSpacing: '-0.02em',
                  color: '#1C3A2E',
                }}
              >
                {phase.text}
              </p>
            </div>
          </div>
        ))}
      </div>

      <style>{`
        .mj-step-content.mj-active {
          opacity: 1 !important;
          transform: translateY(0) !important;
        }
      `}</style>
    </section>
  );
}
