export const sectionContainerClass = "mx-auto max-w-7xl px-6 lg:px-12";

export const GradientGlow = ({ className = "" }) => (
  <div
    aria-hidden="true"
    className={`pointer-events-none absolute rounded-full bg-[linear-gradient(103.43deg,#00B4FD_-1.02%,#003ACE_83.53%)] ${className}`}
  />
);

export const ArrowIcon = ({ direction = "next", className = "" }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="1.8"
    strokeLinecap="round"
    strokeLinejoin="round"
    className={className}
    aria-hidden="true"
  >
    {direction === "prev" ? (
      <>
        <path d="M19 12H5" />
        <path d="M11 18L5 12L11 6" />
      </>
    ) : (
      <>
        <path d="M5 12H19" />
        <path d="M13 6L19 12L13 18" />
      </>
    )}
  </svg>
);

export const ArrowTextButton = ({ children, className = "", onClick }) => (
  <button
    type="button"
    onClick={onClick}
    className={`group inline-flex items-center gap-3 text-xs font-medium uppercase tracking-[0.2em] text-[#00B4FD] transition-colors duration-300 focus:outline-none focus-visible:ring-2 focus-visible:ring-[#00B4FD]/60 focus-visible:ring-offset-2 focus-visible:ring-offset-transparent ${className}`}
  >
    <span className="relative leading-none">
      {children}
      <span className="absolute -bottom-2 left-0 h-[1px] w-[40%] bg-[#00B4FD] transition-all duration-500 ease-out group-hover:w-full" />
    </span>
    <ArrowIcon className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
  </button>
);

export const ReadMoreButton = ({ className = "" }) => (
  <button
    type="button"
    className={`mt-6 rounded-xl border border-[#E9F4F980] px-8 py-3 text-sm font-mono uppercase leading-[130%] tracking-wide text-[#E9F4F980] transition-all duration-500 hover:-translate-y-0.5 hover:border-white hover:bg-white hover:text-[#003ACE] focus:outline-none focus-visible:ring-2 focus-visible:ring-white/70 focus-visible:ring-offset-2 focus-visible:ring-offset-[#01141B] ${className}`}
  >
    READ MORE
  </button>
);

export const CheckIcon = () => (
  <span className="mt-1 flex h-5 w-5 flex-shrink-0 items-center justify-center rounded-full bg-gradient-to-tr from-[#00B4FD] to-[#003ACE]">
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      fill="none"
      stroke="white"
      strokeWidth="2.5"
      strokeLinecap="round"
      strokeLinejoin="round"
      className="h-3 w-3"
      aria-hidden="true"
    >
      <path d="M20 6L9 17L4 12" />
    </svg>
  </span>
);
