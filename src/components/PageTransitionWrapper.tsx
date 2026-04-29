import { useEffect, useRef } from 'react';
import { useLocation } from 'react-router-dom';

export default function PageTransitionWrapper({ children }: { children: React.ReactNode }) {
  const wipeRef = useRef<HTMLDivElement>(null);
  const location = useLocation();

  useEffect(() => {
    const el = wipeRef.current;
    if (!el) return;
    el.classList.remove('entering', 'leaving');
    void el.offsetWidth;
    el.classList.add('entering');
    const t1 = window.setTimeout(() => {
      el.classList.remove('entering');
      el.classList.add('leaving');
      const t2 = window.setTimeout(() => el.classList.remove('leaving'), 420);
      return () => window.clearTimeout(t2);
    }, 420);
    return () => window.clearTimeout(t1);
  }, [location.pathname]);

  return (
    <>
      <div ref={wipeRef} className="page-wipe" />
      {children}
    </>
  );
}
