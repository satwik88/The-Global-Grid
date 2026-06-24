export function GlobeSeal({ className = "" }: { className?: string }) {
  return (
    <svg 
      xmlns="http://www.w3.org/2000/svg" 
      viewBox="0 0 100 100" 
      className={className}
      fill="none" 
      stroke="currentColor" 
    >
      <circle cx="50" cy="50" r="48" strokeWidth="4" />

      <ellipse cx="50" cy="50" rx="16" ry="48" strokeWidth="2" />
      <ellipse cx="50" cy="50" rx="32" ry="48" strokeWidth="2" />
      <line x1="50" y1="2" x2="50" y2="98" strokeWidth="2" />

      <line x1="2" y1="50" x2="98" y2="50" strokeWidth="2" />
      <line x1="8.4" y1="26" x2="91.6" y2="26" strokeWidth="2" />
      <line x1="8.4" y1="74" x2="91.6" y2="74" strokeWidth="2" />
      <line x1="20.7" y1="12" x2="79.3" y2="12" strokeWidth="2" />
      <line x1="20.7" y1="88" x2="79.3" y2="88" strokeWidth="2" />
    </svg>
  );
}
