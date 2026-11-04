export const Star = ({ className = "", size = 24 }) => (
  <svg
    width={size}
    height={size}
    viewBox="0 0 24 24"
    className={className}
    fill="currentColor"
    aria-hidden="true"
  >
    <path d="M12 2l2.9 6.3 6.9.8-5.1 4.7 1.4 6.8L12 17.2 5.9 20.6l1.4-6.8L2.2 9.1l6.9-.8L12 2z" />
  </svg>
);

export const Sparkle = ({ className = "", size = 24 }) => (
  <svg
    width={size}
    height={size}
    viewBox="0 0 24 24"
    className={className}
    fill="currentColor"
    aria-hidden="true"
  >
    <path d="M12 2c.9 5.2 2.1 8.3 10 10-7.9 1.7-9.1 4.8-10 10-.9-5.2-2.1-8.3-10-10 7.9-1.7 9.1-4.8 10-10z" />
  </svg>
);

export const HeartOutline = ({ className = "", size = 24 }) => (
  <svg
    width={size}
    height={size}
    viewBox="0 0 24 24"
    className={className}
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    aria-hidden="true"
  >
    <path d="M19 14c1.5-1.5 3-3.3 3-5.5A5.5 5.5 0 0 0 16.5 3c-1.8 0-3.4 1-4.5 2.1C10.9 4 9.3 3 7.5 3A5.5 5.5 0 0 0 2 8.5c0 2.2 1.5 4 3 5.5l7 6.5 7-6.5z" />
  </svg>
);

export const Bow = ({ className = "", size = 48 }) => (
  <svg
    width={size}
    height={(size * 32) / 48}
    viewBox="0 0 48 32"
    className={className}
    aria-hidden="true"
  >
    <path
      d="M23 16 8.5 7C4.5 8.6 2.5 11.6 2.5 16s2 7.4 6 9L23 16z"
      fill="#E4573F"
    />
    <path
      d="M25 16l14.5-9c4 1.6 6 4.6 6 9s-2 7.4-6 9L25 16z"
      fill="#E4573F"
    />
    <circle cx="24" cy="16" r="5" fill="#C43F2B" />
  </svg>
);

export const Squiggle = ({ className = "" }) => (
  <svg
    viewBox="0 0 140 24"
    className={className}
    fill="none"
    stroke="currentColor"
    strokeWidth="2.5"
    strokeLinecap="round"
    aria-hidden="true"
  >
    <path d="M3 17 C 22 3, 40 3, 56 12 S 92 22, 112 10 S 132 6, 137 8" />
  </svg>
);

export const GmailIcon = ({ className = "" }) => (
  <svg viewBox="0 0 24 24" className={className} aria-hidden="true">
    <rect
      x="2"
      y="4.5"
      width="20"
      height="15"
      rx="3"
      fill="#FFFFFF"
      stroke="#C98D4F"
      strokeWidth="0.8"
    />
    <path
      d="M4.5 8l7.5 5.6L19.5 8v8.5a2 2 0 0 1-2 2h-11a2 2 0 0 1-2-2V8z"
      fill="#EA4335"
      opacity="0.14"
    />
    <path
      d="M4.5 7.5 12 13.2l7.5-5.7"
      stroke="#EA4335"
      strokeWidth="2.6"
      fill="none"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

export const SectionOrnament = ({ className = "" }) => (
  <div
    className={`flex items-center justify-center gap-4 ${className}`}
    aria-hidden="true"
  >
    <span className="w-14 border-t-2 border-dashed border-tan/40" />
    <Star size={15} className="text-coral/70" />
    <span className="w-14 border-t-2 border-dashed border-tan/40" />
  </div>
);
