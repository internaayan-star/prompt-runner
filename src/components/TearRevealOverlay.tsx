import { useEffect, useRef, useState } from 'react';
import gsap from 'gsap';

export default function TearRevealOverlay() {
  const overlayRef = useRef<HTMLDivElement>(null);
  const [done, setDone] = useState(false);

  useEffect(() => {
    const overlay = overlayRef.current;
    if (!overlay) return;

    // Prevent scroll during animation
    document.body.style.overflow = 'hidden';

    const line = overlay.querySelector('#organic-line') as SVGPathElement;
    const length = line.getTotalLength();
    line.style.strokeDasharray = String(length);
    line.style.strokeDashoffset = String(length);

    const tl = gsap.timeline({
      onComplete: () => {
        document.body.style.overflow = '';
        setDone(true);
      },
    });

    // 1. Draw the gold line
    tl.to(line, {
      strokeDashoffset: 0,
      duration: 1.2,
      ease: 'power2.inOut',
    });

    // 2. Tear panels apart
    tl.to('#path-left', { x: -1000, duration: 2, ease: 'expo.inOut' }, '+=0.3');
    tl.to('#path-right', { x: 1000, duration: 2, ease: 'expo.inOut' }, '<');

    // 3. Fade the gold line
    tl.to('#organic-line', { opacity: 0, scaleX: 0, duration: 1, ease: 'power2.in' }, '-=1.5');

    return () => {
      tl.kill();
      document.body.style.overflow = '';
    };
  }, []);

  if (done) return null;

  return (
    <div
      ref={overlayRef}
      style={{
        position: 'fixed',
        inset: 0,
        zIndex: 99999,
        pointerEvents: 'none',
      }}
    >
      <svg
        id="tear-svg"
        viewBox="0 0 1000 1000"
        preserveAspectRatio="none"
        style={{ width: '100%', height: '100%', display: 'block' }}
      >
        {/* Left Panel */}
        <path
          id="path-left"
          d="M 0,0 L 500,0 C 520,100 480,200 500,300 S 530,500 500,600 S 470,800 500,1000 L 0,1000 Z"
          fill="#1C3A2E"
          style={{ pointerEvents: 'auto' }}
        />
        {/* Right Panel */}
        <path
          id="path-right"
          d="M 1000,0 L 500,0 C 520,100 480,200 500,300 S 530,500 500,600 S 470,800 500,1000 L 1000,1000 Z"
          fill="#1C3A2E"
          style={{ pointerEvents: 'auto' }}
        />
        {/* The Gold Line */}
        <path
          id="organic-line"
          d="M 500,0 C 520,100 480,200 500,300 S 530,500 500,600 S 470,800 500,1000"
          fill="none"
          stroke="#C9A84C"
          strokeWidth="2"
          strokeLinecap="round"
        />
      </svg>
    </div>
  );
}
