const ITEMS_TOP = [
  'DPIIT Recognised', '✦', 'Cohort 5 Open', '✦', '12+ Startups', '✦',
  '₹12Cr+ Funding', '✦', 'Kharghar · Navi Mumbai', '✦', 'Maverick Pont', '✦',
  'Apply Now', '✦', 'EatPure', '✦', 'Rezonanz', '✦', 'Kridinify Tech', '✦',
];
const ITEMS_BOT = [
  'Innovation', '◆', 'Incubation', '◆', 'Infrastructure', '◆', 'Impact', '◆',
  'Mentorship', '◆', 'Growth', '◆', 'Scale', '◆', 'Vision 2030', '◆',
  'Community', '◆', 'Funding', '◆',
];

export default function MarqueeTicker() {
  return (
    <div className="relative overflow-hidden border-y" style={{ borderColor: 'rgba(184,136,44,0.14)', background: '#0a0a0a' }}>
      <div className="marquee-track py-[11px] border-b" style={{ borderColor: 'rgba(184,136,44,0.07)' }}>
        <div className="flex animate-marquee-left" style={{ width: 'max-content' }}>
          {[...ITEMS_TOP, ...ITEMS_TOP].map((item, i) => (
            <span
              key={i}
              className="px-5 whitespace-nowrap"
              style={{
                fontFamily: item === '✦' ? 'serif' : "'JetBrains Mono', monospace",
                fontSize: '9px',
                letterSpacing: '0.2em',
                textTransform: 'uppercase',
                color: item === '✦' ? 'var(--gold)' : 'rgba(253,251,247,0.32)',
              }}
            >
              {item}
            </span>
          ))}
        </div>
      </div>
      <div className="marquee-track py-[11px]">
        <div className="flex animate-marquee-right" style={{ width: 'max-content' }}>
          {[...ITEMS_BOT, ...ITEMS_BOT].map((item, i) => (
            <span
              key={i}
              className="px-5 whitespace-nowrap"
              style={{
                fontFamily: item === '◆' ? 'serif' : "'JetBrains Mono', monospace",
                fontSize: '9px',
                letterSpacing: '0.2em',
                textTransform: 'uppercase',
                color: item === '◆' ? '#34d399' : 'rgba(253,251,247,0.2)',
              }}
            >
              {item}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
}
