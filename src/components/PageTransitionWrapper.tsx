import { useEffect, useRef, useCallback } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';

// Intercept internal link clicks to play transition before navigation
export default function PageTransitionWrapper({ children }: { children: React.ReactNode }) {
  const overlayRef = useRef<HTMLDivElement>(null);
  const location = useLocation();
  const navigate = useNavigate();
  const isTransitioning = useRef(false);

  const playTransition = useCallback((to: string) => {
    const el = overlayRef.current;
    if (!el || isTransitioning.current) return;
    isTransitioning.current = true;
    el.classList.add('active');

    // Navigate at the midpoint (when screen is "squeezed" and invisible ~50%)
    setTimeout(() => {
      navigate(to);
      window.scrollTo(0, 0);
    }, 800);

    // Remove animation class after full duration
    setTimeout(() => {
      el.classList.remove('active');
      isTransitioning.current = false;
    }, 1600);
  }, [navigate]);

  useEffect(() => {
    const handleClick = (e: MouseEvent) => {
      const anchor = (e.target as HTMLElement).closest('a');
      if (!anchor) return;
      const href = anchor.getAttribute('href');
      if (!href || href.startsWith('http') || href.startsWith('#') || href.startsWith('mailto:') || anchor.target === '_blank') return;
      // Internal link
      if (href !== location.pathname) {
        e.preventDefault();
        playTransition(href);
      }
    };
    document.addEventListener('click', handleClick);
    return () => document.removeEventListener('click', handleClick);
  }, [location.pathname, playTransition]);

  return (
    <>
      <div ref={overlayRef} className="page-transition-overlay" />
      {children}
    </>
  );
}
