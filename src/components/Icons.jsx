const base = {
  viewBox: "0 0 24 24",
  fill: "none",
  stroke: "currentColor",
  strokeWidth: 1.5,
  strokeLinecap: "round",
  strokeLinejoin: "round",
  "aria-hidden": true,
  focusable: "false",
};

export function ArrowRight(props) {
  return (
    <svg {...base} {...props}>
      <path d="M4 12h15.5" />
      <path d="m13.5 6 6 6-6 6" />
    </svg>
  );
}

export function ArrowUpRight(props) {
  return (
    <svg {...base} {...props}>
      <path d="M7 17 17 7" />
      <path d="M8 7h9v9" />
    </svg>
  );
}

export function Phone(props) {
  return (
    <svg {...base} {...props}>
      <path d="M8.2 3.5H5.6c-1 0-1.9.8-1.8 1.9.3 3.5 1.7 6.8 4 9.5 2.5 2.8 5.9 4.5 9.5 4.9 1 .1 1.9-.7 1.9-1.8v-2.3c0-.8-.6-1.5-1.4-1.7l-2.2-.5c-.7-.2-1.5.1-1.9.7l-.8 1.1a14.7 14.7 0 0 1-5.5-5.5l1.1-.8c.7-.4.9-1.2.7-1.9L9.9 4.9a1.8 1.8 0 0 0-1.7-1.4Z" />
    </svg>
  );
}

export function MapPin(props) {
  return (
    <svg {...base} {...props}>
      <path d="M12 21s7-5.6 7-11a7 7 0 1 0-14 0c0 5.4 7 11 7 11Z" />
      <circle cx="12" cy="10" r="2.6" />
    </svg>
  );
}

export function Clock(props) {
  return (
    <svg {...base} {...props}>
      <circle cx="12" cy="12" r="8.5" />
      <path d="M12 7.5V12l3 2" />
    </svg>
  );
}

export function Close(props) {
  return (
    <svg {...base} {...props}>
      <path d="m6 6 12 12M18 6 6 18" />
    </svg>
  );
}

export function Check(props) {
  return (
    <svg {...base} {...props}>
      <path d="m4.5 12.5 5 5L19.5 7" />
    </svg>
  );
}

export function ChevronDown(props) {
  return (
    <svg {...base} {...props}>
      <path d="m6 9.5 6 6 6-6" />
    </svg>
  );
}

export function Calendar(props) {
  return (
    <svg {...base} {...props}>
      <rect x="3.5" y="5" width="17" height="15" rx="2.5" />
      <path d="M3.5 9.5h17M8 3v4M16 3v4" />
    </svg>
  );
}

export function Sparkle(props) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true" focusable="false" {...props}>
      <path d="M12 2.5c.6 5.2 2.3 7 7.5 7.5-5.2.6-6.9 2.3-7.5 7.5-.6-5.2-2.3-6.9-7.5-7.5 5.2-.5 6.9-2.3 7.5-7.5Z" />
    </svg>
  );
}

export function WhatsApp(props) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true" focusable="false" {...props}>
      <path d="M12.04 2C6.58 2 2.13 6.45 2.13 11.91c0 1.75.46 3.45 1.32 4.95L2 22l5.25-1.38a9.9 9.9 0 0 0 4.79 1.22h.01c5.46 0 9.9-4.45 9.9-9.91 0-2.65-1.03-5.14-2.9-7.01A9.82 9.82 0 0 0 12.04 2Zm0 18.15h-.01a8.2 8.2 0 0 1-4.19-1.15l-.3-.18-3.12.82.83-3.04-.2-.31a8.19 8.19 0 0 1-1.26-4.38c0-4.54 3.7-8.24 8.25-8.24 2.2 0 4.27.86 5.83 2.42a8.18 8.18 0 0 1 2.41 5.83c0 4.54-3.7 8.23-8.24 8.23Zm4.52-6.16c-.25-.12-1.47-.72-1.69-.81-.23-.08-.39-.12-.56.13-.16.24-.64.8-.79.97-.14.16-.29.18-.54.06-.25-.12-1.05-.39-1.99-1.23-.74-.66-1.23-1.47-1.38-1.72-.14-.25-.01-.38.11-.5.11-.11.25-.29.37-.43.13-.15.17-.25.25-.41.08-.17.04-.31-.02-.43-.06-.12-.56-1.34-.76-1.84-.2-.48-.4-.42-.56-.43h-.48c-.17 0-.43.06-.66.31-.23.25-.86.85-.86 2.07 0 1.22.89 2.39 1.01 2.56.12.17 1.75 2.67 4.23 3.74.59.26 1.05.41 1.41.52.59.19 1.13.16 1.56.1.48-.07 1.47-.6 1.68-1.18.21-.58.21-1.07.14-1.18-.06-.11-.22-.17-.47-.29Z" />
    </svg>
  );
}

export function Instagram(props) {
  return (
    <svg {...base} {...props}>
      <rect x="3.5" y="3.5" width="17" height="17" rx="5" />
      <circle cx="12" cy="12" r="3.8" />
      <circle cx="17.2" cy="6.8" r=".9" fill="currentColor" stroke="none" />
    </svg>
  );
}

export function TikTok(props) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true" focusable="false" {...props}>
      <path d="M16.6 3c.35 1.9 1.55 3.4 3.4 3.9v3.1c-1.5.05-2.85-.4-4.05-1.2v5.9c0 3.6-2.35 5.95-5.6 6.3-3.55.4-6.35-2.1-6.35-5.55 0-3.3 2.5-5.65 5.75-5.65.35 0 .65.03.95.08v3.2c-.3-.1-.6-.15-.95-.15-1.5 0-2.6 1-2.6 2.5s1.1 2.5 2.55 2.5c1.6 0 2.6-1.1 2.6-2.9V3h3.3Z" />
    </svg>
  );
}

export function LotusMark(props) {
  return (
    <svg
      viewBox="0 0 64 64"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.1"
      strokeLinejoin="round"
      aria-hidden="true"
      focusable="false"
      {...props}
    >
      <path d="M32 10c5.1 7.3 5.1 14.7 0 21.7-5.1-7-5.1-14.4 0-21.7Z" />
      <path d="M32 33.4c-7.5-.9-13.4-5.7-16-13.2 7.6-.2 13.6 4.6 16 13.2Z" />
      <path d="M32 33.4c7.5-.9 13.4-5.7 16-13.2-7.6-.2-13.6 4.6-16 13.2Z" />
      <path d="M30.7 34.5c-9.3.5-16.2 6.2-18.7 14.2 9.8.8 17-4.6 18.7-14.2Z" />
      <path d="M33.3 34.5c9.3.5 16.2 6.2 18.7 14.2-9.8.8-17-4.6-18.7-14.2Z" />
      <path d="M16 53h32" strokeLinecap="round" />
    </svg>
  );
}
