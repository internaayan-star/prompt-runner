import { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';
import { Link, useLocation } from 'react-router-dom';
import { getLenis } from '@/lib/lenis';

const NAV_LINKS = [
  { label: 'Home', href: '/' },
  { label: 'About', href: '/about' },
  { label: 'Maverick Pont', href: '/maverick' },
  { label: 'Ecosystem', href: '/ecosystem' },
  { label: 'Board', href: '/board' },
];

function ScrollProgress() {
  const [width, setWidth] = useState(0);
  useEffect(() => {
    const onScroll = () => {
      const el = document.documentElement;
      setWidth((el.scrollTop / (el.scrollHeight - el.clientHeight)) * 100);
    };
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);
  return (
    <div
      style={{
        position: 'fixed',
        top: 0,
        left: 0,
        height: '2px',
        width: width + '%',
        background: 'linear-gradient(90deg, var(--gold), #34d399)',
        zIndex: 99,
        transition: 'width 0.1s linear',
        pointerEvents: 'none',
      }}
    />
  );
}

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [revealed, setRevealed] = useState(false);
  const location = useLocation();
  const isHome = location.pathname === '/';

  useEffect(() => {
    const lenis = getLenis();
    if (lenis) {
      const handler = ({ scroll }: { scroll: number }) => setScrolled(scroll > 40);
      lenis.on('scroll', handler);
      return () => {
        lenis.off('scroll', handler);
      };
    }
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  useEffect(() => {
    if (!isHome) {
      setRevealed(true);
      return;
    }
    const handler = () => setRevealed(true);
    window.addEventListener('hero-reveal-done', handler);
    const fallback = setTimeout(() => setRevealed(true), 3000);
    return () => {
      window.removeEventListener('hero-reveal-done', handler);
      clearTimeout(fallback);
    };
  }, [isHome]);

  const isActive = (href: string) => {
    if (href === '/') return location.pathname === '/';
    return location.pathname.startsWith(href);
  };

  return (
    <>
      <ScrollProgress />
      <nav
        className="fixed top-0 left-0 right-0 z-50"
        style={{
          background: scrolled ? 'rgba(8,8,8,0.88)' : 'transparent',
          backdropFilter: scrolled ? 'blur(28px) saturate(180%)' : 'none',
          WebkitBackdropFilter: scrolled ? 'blur(28px) saturate(180%)' : 'none',
          borderBottom: scrolled ? '1px solid rgba(255,255,255,0.06)' : 'none',
          opacity: revealed ? 1 : 0,
          transform: revealed ? 'translateY(0)' : 'translateY(-8px)',
          transition: 'opacity 0.5s ease, transform 0.5s ease, background 0.5s ease, backdrop-filter 0.5s ease',
        }}
      >
        <div style={{ maxWidth: '1100px', margin: '0 auto', padding: '0 24px', display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
          <Link to="/" style={{ display: 'flex', alignItems: 'center', gap: '12px', textDecoration: 'none', padding: '10px 0' }}>
            <img
              src="/images/rciif-logo.png"
              alt="RCIIF — We make IT happen"
              style={{ height: '44px', width: 'auto', display: 'block', filter: 'drop-shadow(0 2px 8px rgba(0,0,0,0.35))' }}
            />
            <div style={{ display: 'flex', flexDirection: 'column', lineHeight: 1 }}>
              <span style={{ fontFamily: "'Outfit', sans-serif", fontWeight: 600, fontSize: '15px', color: '#FDFBF7', letterSpacing: '0.02em' }}>RCIIF</span>
              <span style={{ fontFamily: "'JetBrains Mono', monospace", fontSize: '7px', letterSpacing: '0.18em', color: 'rgba(253,251,247,0.35)', textTransform: 'uppercase', marginTop: '2px' }}>
                Incubation · Kharghar
              </span>
            </div>
          </Link>

          <div className="hidden md:flex items-center gap-6">
            {NAV_LINKS.map((link) => (
              <Link
                key={link.href}
                to={link.href}
                style={{
                  fontFamily: "'JetBrains Mono', monospace",
                  fontSize: '9px',
                  letterSpacing: '0.2em',
                  textTransform: 'uppercase',
                  color: isActive(link.href) ? '#34d399' : 'rgba(253,251,247,0.5)',
                  textDecoration: 'none',
                  borderBottom: isActive(link.href) ? '2px solid #34d399' : '2px solid transparent',
                  paddingBottom: '3px',
                  transition: 'color 0.2s ease, border-color 0.2s ease',
                }}
              >
                {link.label}
              </Link>
            ))}
            <Link
              to="/maverick/apply"
              style={{
                fontFamily: "'JetBrains Mono', monospace",
                fontSize: '9px',
                letterSpacing: '0.18em',
                textTransform: 'uppercase',
                fontWeight: 500,
                textDecoration: 'none',
                background: 'var(--gold)',
                color: '#0C0B09',
                padding: '9px 18px',
                borderRadius: '8px',
                transition: 'background 0.2s ease, transform 0.2s ease',
                display: 'inline-block',
              }}
            >
              Apply →
            </Link>
          </div>

          <button className="md:hidden" onClick={() => setMobileOpen((o) => !o)} style={{ background: 'none', border: 'none', color: '#FDFBF7', padding: '8px' }}>
            {mobileOpen ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>

        {mobileOpen && (
          <div
            style={{
              background: 'rgba(8,8,8,0.97)',
              backdropFilter: 'blur(24px)',
              borderTop: '1px solid rgba(255,255,255,0.07)',
              padding: '20px 24px 28px',
              animation: 'slideDown 0.22s ease forwards',
            }}
          >
            {NAV_LINKS.map((link) => (
              <Link
                key={link.href}
                to={link.href}
                onClick={() => setMobileOpen(false)}
                style={{
                  display: 'block',
                  padding: '12px 0',
                  fontFamily: "'JetBrains Mono', monospace",
                  fontSize: '10px',
                  letterSpacing: '0.18em',
                  textTransform: 'uppercase',
                  color: isActive(link.href) ? '#34d399' : 'rgba(253,251,247,0.55)',
                  textDecoration: 'none',
                  borderBottom: '1px solid rgba(255,255,255,0.05)',
                }}
              >
                {link.label}
              </Link>
            ))}
            <Link
              to="/maverick/apply"
              onClick={() => setMobileOpen(false)}
              style={{
                display: 'inline-block',
                marginTop: '16px',
                fontFamily: "'JetBrains Mono', monospace",
                fontSize: '10px',
                letterSpacing: '0.18em',
                textTransform: 'uppercase',
                background: 'var(--gold)',
                color: '#0C0B09',
                padding: '10px 20px',
                borderRadius: '8px',
                textDecoration: 'none',
              }}
            >
              Apply →
            </Link>
          </div>
        )}
      </nav>
    </>
  );
}
